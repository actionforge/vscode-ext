
import { readFileSync } from 'fs';

import * as path from 'path';
import * as vscode from 'vscode';

import debounce from 'lodash.debounce';
import AsyncLock from 'async-lock';


export class AgEditorProvider implements vscode.CustomTextEditorProvider {

	private static newActionGraphFileId = 1;

	private static readonly viewType = 'actionforge.graph';
	private tmpStorage = new TemporaryStorage();
	private state: vscode.Memento;

	private readonly webviews = new WebviewCollection();

	constructor(
		private readonly context: vscode.ExtensionContext
	) {
		this.state = context.workspaceState;
	}

	public async resolveCustomTextEditor(
		document: vscode.TextDocument,
		panel: vscode.WebviewPanel,
		_token: vscode.CancellationToken
	): Promise<void> {

		const useTextview = this.state.get('useTextview') ?? false;

		if (useTextview) {
			setTimeout(() => {
				panel.dispose();
				void closeDocumentsWithUri(document.uri)
					.then(() => {
						return vscode.window.showTextDocument(document.uri);
					})
			}, 0);
			return;
		}

		// Support only a single view per document for now.
		// To add multi-view support, fix the possibilities
		// of all race conditions that can occur when multiple
		// views are edited.
		// For example, it takes a while to construct the graph
		// for an action graph, and due to the asynchronous nature
		// different document versions can overwrite each other,
		// possibily resulting in different states in different views.
		const wv = this.webviews.get(document.uri);
		for (const w of wv) {
			w.reveal();

			// Use a timeout to avoid a flash that the webview is not available anymore.
			setTimeout(() => {
				panel.dispose();
			}, 0);
			return;
		}

		this.webviews.add(document.uri, panel);

		const applyEditLock = new AsyncLock();
		const internalUpdates = new Set<number>([document.version]);

		panel.webview.options = {
			enableScripts: true,
		};
		panel.webview.html = this.getHtmlForWebview(panel.webview);

		const getText = (): string => {
			// Normalize line endings to ensure the graph editor
			// gets a canonical version of the graph. It makes
			// change detections easier.
			return document.getText().replace(/\r\n/g, '\n');
		}

		const applyEdit = (document: vscode.TextDocument, graph: string): void => {
			const edit = new vscode.WorkspaceEdit();

			// For now replace the entire content of the text object for simplicity.  
			// TODO: (Seb) Check for performance implications.  
			edit.replace(
				document.uri,
				new vscode.Range(0, 0, document.lineCount, 0),
				graph,
			);

			void applyEditLock.acquire("applyEdit", async () => {
				await vscode.workspace.applyEdit(edit);
			});
		};

		const updateWebview = (oldDocumentVersion: number, graph: string) => {
			if (document.version > oldDocumentVersion) {
				return;
			}

			void this.postMessage(panel, 'setFileData', {
				data: graph,
				uri: document.uri.toString(),
				transform: this.tmpStorage.get(`transform_${document.uri.fsPath}`) || null
			});
		};

		const debouncedUpdateWebview = debounce(updateWebview, 500, {
			leading: false, // Ignore first call(s)
			trailing: true, // Only update view after events stop being called for 500ms
		});

		const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
			if (e.document.uri.toString() === document.uri.toString() && e.document.isDirty) {
				if (internalUpdates.has(e.document.version)) {
					internalUpdates.delete(e.document.version);
				} else {
					debouncedUpdateWebview(document.version, getText());
				}
			}
		});

		const changeViewStatSubScription = panel.onDidChangeViewState((e: vscode.WebviewPanelOnDidChangeViewStateEvent) => {
			if (e.webviewPanel.visible) {
				debouncedUpdateWebview(document.version, getText());
			}
		});

		const receiveMessageSubscription = panel.webview.onDidReceiveMessage(e => {
			const { type, data } = e;
			switch (type) {
				case 'saveTransform': {
					this.tmpStorage.set(`transform_${document.uri.fsPath}`, data);
					break;
				}
				case 'saveGraph': {
					internalUpdates.add(document.version + 1 /* plus one as its the future version */);
					applyEdit(document, data);
					break;
				}
			}
		});

		panel.onDidDispose(() => {
			changeViewStatSubScription.dispose();
			receiveMessageSubscription.dispose();
			changeDocumentSubscription.dispose();
		});

		updateWebview(document.version, getText());
	}

	private postMessage(panel: vscode.WebviewPanel, type: string, data: unknown, requestId?: number): Thenable<boolean> {
		return panel.webview.postMessage({ type, data, requestId });
	}

	private getHtmlForWebview(webview: vscode.Webview): string {
		const indexPath = path.join(this.context.extensionPath, 'media', 'graph-editor');

		const baseUri = webview.asWebviewUri(vscode.Uri.file(indexPath));

		let indexHtml = readFileSync(path.join(indexPath, 'index.html'), { encoding: 'utf8' });

		indexHtml = indexHtml.replace('<base href="/">', `  
		<base href="${String(baseUri)}/">  
		<meta http-equiv="Content-Security-Policy" content="connect-src https://www.actionforge.dev;">  
		`);

		return indexHtml;
	}

	public static register(context: vscode.ExtensionContext): vscode.Disposable[] {
		const subs: vscode.Disposable[] = [];
		let sub: vscode.Disposable;

		sub = vscode.commands.registerCommand('actionforge.graph.github.new', async () => {
			const workspaceFolders = vscode.workspace.workspaceFolders;
			if (!workspaceFolders) {
				void vscode.window.showErrorMessage("Creating a new action graph requires opening a workspace.");
				return;
			}

			let newName = `new-${AgEditorProvider.newActionGraphFileId}.yml`;

			// TODO: (Seb) Browse the directory and search for the real '.github',  
			// the root of the project might be in a sub or parent directory.  
			const ruri = vscode.Uri.joinPath(workspaceFolders[0].uri, '.github', 'workflows');

			let githubFiles = await vscode.workspace.findFiles('.github/workflows/**.*ya?ml', null, 100);

			newName = await vscode.window.showInputBox({
				title: "Choose a name for your action graph file",
				placeHolder: "Enter the name of the action graph file to create.",
				value: newName,
				valueSelection: [0, newName.length - 4],
				validateInput: text => {
					if (!text) {
						return 'A file name is required.';
					} else if (text.indexOf('/') !== -1 || text.indexOf('\\') !== -1) {
						return 'The file name cannot contain "/" characters.';
					} else if (!/\.ya?ml$/.test(text)) {
						return 'The file name must end with ".yml" or ".yaml".';
					}

					if (githubFiles.find((v: vscode.Uri) => v.path.endsWith(`/${text}`))) {
						return 'A file with this name already exists.';
					}
					return null;
				}
			}) ?? '';

			if (!newName) {
				return;
			}

			// After the input was validated, we need to check again if the file exists.
			githubFiles = await vscode.workspace.findFiles('.github/workflows/**.*ya?ml', null, 100);
			if (githubFiles.find((v: vscode.Uri) => v.path.endsWith(`/${newName}`))) {
				void vscode.window.showErrorMessage(`A file with the name '${newName}' already exists.`);
				return;
			}

			const guri = vscode.Uri.joinPath(ruri, 'graphs', newName);
			const wuri = vscode.Uri.joinPath(ruri, newName);

			AgEditorProvider.newActionGraphFileId++;

			const wcontent = `on: [push]

jobs:
    build-and-publish:
      runs-on: ubuntu-latest
      name: My workflow
      steps:
        - name: Execute Action Graph
          uses: actionforge/action@v0.4.35
          with:
            graph_file: ${newName}`;

			const edit = new vscode.WorkspaceEdit();
			// create action graph file
			edit.createFile(guri, {
				ignoreIfExists: false,
				overwrite: false,
			});
			// create gh actions workflow file
			edit.createFile(wuri, {
				ignoreIfExists: false,
				overwrite: false,
				contents: Buffer.from(wcontent, 'utf8'),
			});
			await vscode.workspace.applyEdit(edit);

			// Open the workflow file in the text editor.
			await vscode.commands.executeCommand('vscode.open', wuri);

			// Open the action graph file in the graph editor.
			await vscode.commands.executeCommand('vscode.openWith', guri, AgEditorProvider.viewType);

			await vscode.window.showInformationMessage(`Created new action graph and associated GitHub Actions workflow file.`);
		});

		subs.push(sub);

		sub = vscode.commands.registerCommand('actionforge.switch-view', async (uri?: vscode.Uri) => {
			if (!uri) {
				void vscode.window.showErrorMessage("Command must be executed from the editor toolbar.");
				return;
			} else if (uri.scheme !== 'file') {
				void vscode.window.showErrorMessage("Only local files are supported.");
				return;
			} else if (uri.path.indexOf('.github/workflows/graphs') === -1 || !/\.ya?ml$/.test(uri.path)) {
				void vscode.window.showErrorMessage("File not in .github/workflows/graphs directory.");
				return;
			}

			// If hte command was executed from the text editor, open the file in the graph editor.
			// Otherwise open the file in a new text editor.
			const activeEditor = vscode.window.activeTextEditor;

			void context.workspaceState.update('useTextview', !(await context.workspaceState.get('useTextview') ?? false))
				.then(() => {
					return vscode.commands.executeCommand('workbench.action.closeActiveEditor');
				})
				.then(() => {
					if (activeEditor) {
						return vscode.commands.executeCommand('vscode.openWith', uri, AgEditorProvider.viewType);
					} else {
						return vscode.window.showTextDocument(uri);
					}
				})
		});
		subs.push(sub);

		sub = vscode.window.registerCustomEditorProvider(AgEditorProvider.viewType, new AgEditorProvider(context), {
			webviewOptions: {
				retainContextWhenHidden: true,
			},
			supportsMultipleEditorsPerDocument: false,
		});
		subs.push(sub);

		return subs;
	}
}
/**
 * Close all editors that show a given uri.
*/
function closeDocumentsWithUri(targetUri: vscode.Uri): Thenable<void> {
	let promise: Thenable<void> = Promise.resolve();
	vscode.window.visibleTextEditors.forEach(editor => {
		if (editor.document.uri.toString() === targetUri.toString()) {
			promise = vscode.window.showTextDocument(editor.document).then(() => {
				return vscode.commands.executeCommand('workbench.action.closeActiveEditor');
			}).then(() => {
				return;
			});
		}
	});
	return Promise.resolve(promise);
}


/**
* Similar to vscode.Memento but sync setter and getter,
* and only for the lifetime of the extension.
*/
class TemporaryStorage {
	private readonly _storage = new Map<string, unknown>();

	public get(key: string): unknown | undefined {
		return this._storage.get(key);
	}

	public set(key: string, value: unknown): void {
		this._storage.set(key, value);
	}
}

/**
 * Tracks all webviews.
 */
class WebviewCollection {

	private readonly _webviews = new Set<{
		readonly resource: string;
		readonly webviewPanel: vscode.WebviewPanel;
	}>();

	/**
	 * Get all known webviews for a given uri.
	 */
	public *get(uri: vscode.Uri): Iterable<vscode.WebviewPanel> {
		const key = uri.toString();
		for (const entry of this._webviews) {
			if (entry.resource === key) {
				yield entry.webviewPanel;
			}
		}
	}

	/**
	 * Add a new webview to the collection.
	 */
	public add(uri: vscode.Uri, webviewPanel: vscode.WebviewPanel) {
		const entry = { resource: uri.toString(), webviewPanel };
		this._webviews.add(entry);

		webviewPanel.onDidDispose(() => {
			this._webviews.delete(entry);
		});
	}
}
