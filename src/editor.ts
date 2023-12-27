
import { readFileSync } from 'fs';

import * as path from 'path';
import * as vscode from 'vscode';

export class AgEditorProvider implements vscode.CustomTextEditorProvider {

	private static newActionGraphFileId = 1;

	private static readonly viewType = 'actionforge.graph';
	private state: vscode.Memento;

	private readonly _callbacks = new Map<number, (response: unknown) => void>();

	constructor(
		private readonly context: vscode.ExtensionContext
	) {
		this.state = context.globalState
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
			let newName = `new-${AgEditorProvider.newActionGraphFileId++}.yml`;

			// TODO: (Seb) Browse the directory and search for the real '.github',  
			// the root of the project might be in a sub or parent directory.  
			const ruri = vscode.Uri.joinPath(workspaceFolders[0].uri, '.github', 'workflows');

			let githubFiles = await vscode.workspace.findFiles('.github/workflows/**.*yml', null, 100);

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
					} else if (!text.endsWith('.yml')) {
						return 'The file name must end with ".yml".';
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
			githubFiles = await vscode.workspace.findFiles('.github/workflows/**.*yml', null, 100);
			if (githubFiles.find((v: vscode.Uri) => v.path.endsWith(`/${newName}`))) {
				void vscode.window.showErrorMessage(`A file with the name '${newName}' already exists.`);
				return;
			}


			const guri = vscode.Uri.joinPath(ruri, 'graphs', newName);
			const wuri = vscode.Uri.joinPath(ruri, newName);

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

			await vscode.commands.executeCommand('vscode.open', wuri);

			await vscode.commands.executeCommand('vscode.openWith', guri, AgEditorProvider.viewType, {
				// For now   
				supportsMultipleEditorsPerDocument: false
			});

			await vscode.window.showInformationMessage(`Created new action graph and associated GH Actions workflow file.`);
		});

		subs.push(sub);

		sub = vscode.commands.registerCommand('actionforge.switch-view', async (doc: vscode.TextDocument) => {
			await vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside, true);
		});
		subs.push(sub);

		sub = vscode.window.registerCustomEditorProvider(AgEditorProvider.viewType, new AgEditorProvider(context));
		subs.push(sub);

		return subs;
	}

	private postMessage(panel: vscode.WebviewPanel, type: string, data: unknown, requestId?: number): Thenable<boolean> {
		return panel.webview.postMessage({ type, data, requestId });
	}

	public async resolveCustomTextEditor(
		document: vscode.TextDocument,
		panel: vscode.WebviewPanel,
		_token: vscode.CancellationToken
	): Promise<void> {
		panel.webview.options = {
			enableScripts: true,
		};

		panel.webview.html = this.getHtmlForWebview(panel.webview);

		let updateWebviewCounter = 0;
		let updateTextDocumentCounter = 0;

		const changeDocumentSubscription = vscode.workspace.onDidChangeTextDocument((e: vscode.TextDocumentChangeEvent) => {
			if (e.document.uri.toString() === document.uri.toString()) {
				void updateWebview(++updateWebviewCounter);
			}
		});

		const updateTextDocument = (document: vscode.TextDocument, graphYaml: string, counter: number): Thenable<boolean> => {
			if (updateTextDocumentCounter > counter) {
				return Promise.resolve(false);
			}

			const edit = new vscode.WorkspaceEdit();

			// For now replace the entire content of the text object for simplicity.  
			// TODO: (Seb) Check for performance implications.  
			edit.replace(
				document.uri,
				new vscode.Range(0, 0, document.lineCount, 0),
				graphYaml,
			);

			return vscode.workspace.applyEdit(edit);
		}

		const updateWebview = async (counter: number) => {
			if (updateWebviewCounter > counter) {
				return;
			}

			const graph = document.getText().replace(/\r\n/g, '\n');
			await this.postMessage(panel, 'setFileData', {
				data: graph,
				uri: document.uri.toString(),
				transform: await this.state.get(`transform_${document.uri.fsPath}`) || null
			});
		};

		const changeViewStatSubScription = panel.onDidChangeViewState((e: vscode.WebviewPanelOnDidChangeViewStateEvent) => {
			if (e.webviewPanel.visible) {
				void updateWebview(++updateWebviewCounter);
			}

		});

		const receiveMessageSubscription = panel.webview.onDidReceiveMessage(e => {
			const { type, data } = e;
			switch (type) {
				case 'saveTransform': {
					void this.state.update(`transform_${document.uri.fsPath}`, data);
					break;
				}
				case 'saveGraph': {
					void updateTextDocument(document, data, ++updateTextDocumentCounter);
					break;
				}
			}
		});

		panel.onDidDispose(() => {
			changeViewStatSubScription.dispose();
			receiveMessageSubscription.dispose();
			changeDocumentSubscription.dispose();
		});

		void updateWebview(++updateWebviewCounter);
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
}  
