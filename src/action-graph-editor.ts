
import path = require('path');

import * as vscode from 'vscode';

import { readFileSync } from 'fs';

export interface GitUriParams {
	path: string;
	ref: string;
	submoduleOf?: string;
}

export interface GitUriOptions {
	replaceFileExtension?: boolean;
	submoduleOf?: string;
}

export function isGitUri(uri: vscode.Uri): boolean {
	return /^git$/.test(uri.scheme);
}

export function fromGitUri(uri: vscode.Uri): GitUriParams {
	return JSON.parse(uri.query);
}

// As a mitigation for extensions like ESLint showing warnings and errors
// for git URIs, let's change the file extension of these uris to .git,
// when `replaceFileExtension` is true.
export function toGitUri(uri: vscode.Uri, ref: string, options: GitUriOptions = {}): vscode.Uri {
	const params: GitUriParams = {
		path: uri.fsPath,
		ref
	};

	if (options.submoduleOf) {
		params.submoduleOf = options.submoduleOf;
	}

	let path = uri.path;

	if (options.replaceFileExtension) {
		path = `${path}.git`;
	} else if (options.submoduleOf) {
		path = `${path}.diff`;
	}

	return uri.with({
		scheme: 'git',
		path
	});
}

export class ActionGraphEditorProvider implements vscode.CustomTextEditorProvider {

	private static newActionGraphFileId = 1;

	private static readonly viewType = 'actionforge.graph';

	private _requestId = 1;
	private readonly _callbacks = new Map<number, (response: unknown) => void>();

	constructor(
		private readonly context: vscode.ExtensionContext
	) {
	}

	public static register(context: vscode.ExtensionContext): vscode.Disposable[] {
		const subs: vscode.Disposable[] = [];
		let sub: vscode.Disposable;

		sub = vscode.commands.registerCommand('actionforge.graph.new', () => {
			const workspaceFolders = vscode.workspace.workspaceFolders;
			if (!workspaceFolders) {
				void vscode.window.showErrorMessage("Creating a new action graph requires opening a workspace.");
				return;
			}

			// TODO: (Seb) Browse the directory and search for the real '.github',
			// the root of the project might be in a sub or parent directory.
			const uri = vscode.Uri.joinPath(workspaceFolders[0].uri, '.github', 'workflows', 'graphs', `new-${ActionGraphEditorProvider.newActionGraphFileId++}.yml`)
				.with({ scheme: 'untitled' });

			void vscode.commands.executeCommand('vscode.openWith', uri, ActionGraphEditorProvider.viewType, {
				// For now 
				supportsMultipleEditorsPerDocument: false
			});
		});

		subs.push(sub);

		sub = vscode.commands.registerCommand('actionforge.switch-view', async (doc: vscode.TextDocument) => {
			await vscode.window.showTextDocument(doc, vscode.ViewColumn.Beside, true);
		});
		subs.push(sub);

		sub = vscode.window.registerCustomEditorProvider(ActionGraphEditorProvider.viewType, new ActionGraphEditorProvider(context));
		subs.push(sub);

		return subs;
	}

	private postMessageWithResponse<R = unknown>(panel: vscode.WebviewPanel, type: string, data: unknown): Promise<R> {
		const requestId = this._requestId++;
		// @ts-expect-error TODO: (Seb) Fix warning about mismatch of resolve
		const p = new Promise<R>(resolve => this._callbacks.set(requestId, resolve));
		void panel.webview.postMessage({ type, requestId, data });
		return p;
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

		if (isGitUri(document.uri)) {
			// TODO: (Seb)
			if (document.uri.query) {
				panel.dispose();
				void vscode.window.showErrorMessage('Diff view is not available yet.');
				return;
			}
		}

		panel.webview.html = this.getHtmlForWebview(panel.webview);

		const updateWebview = async () => {
			return this.postMessage(panel, 'setFileData', {
				data: document.getText(),
				uri: document.uri.toString()
			});
		};

		const saveWebviewState = async () => {
			// TODO: (Seb) Introduce a save id to ensure that
			// previous saves are not overwritten by newer ones.
			return this.postMessageWithResponse<string>(panel, 'getFileData', {})
				.then((response: string) => {
					return this.updateTextDocument(document, response);
				});
			// TODO: (Seb) Add check for errors here
		};

		const changeDocumentSubscription = vscode.workspace.onDidSaveTextDocument(e => {
			if (e.uri.toString() === document.uri.toString()) {
				void updateWebview();
			}
		});

		const changeViewStatSubScription = panel.onDidChangeViewState(e => {
			// Upon blur of the editor save the state of the webview
			if (!e.webviewPanel.visible && document.uri.scheme === 'file') {
				void saveWebviewState();
			}
		});

		const saveDocumentSubscription = vscode.workspace.onWillSaveTextDocument(e => {
			e.waitUntil(saveWebviewState());
		});

		const receiveMessageSubscription = panel.webview.onDidReceiveMessage(e => {
			const { type, requestId, data } = e;
			switch (type) {
				case 'callbackResponse':
					{
						const callback = this._callbacks.get(requestId);
						if (callback) {
							this._callbacks.delete(requestId);
							callback?.(data);
						} else {
							console.warn(`Got response for unknown request id ${requestId}`);
						}
						return;
					}
				case 'saveGraph': {
					void this.updateTextDocument(document, data);
				}
			}
		});

		panel.onDidDispose(() => {
			changeDocumentSubscription.dispose();
			saveDocumentSubscription.dispose();
			changeViewStatSubScription.dispose();
			receiveMessageSubscription.dispose();
		});

		void updateWebview();
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

	private updateTextDocument(document: vscode.TextDocument, graphYaml: string): Thenable<boolean> {
		const edit = new vscode.WorkspaceEdit();

		// Replace the entire content of the text object for simplicity.
		// TODO: (Seb) Check for performance implications.
		edit.replace(
			document.uri,
			new vscode.Range(0, 0, document.lineCount, 0),
			graphYaml,
		);

		return vscode.workspace.applyEdit(edit);
	}
}
