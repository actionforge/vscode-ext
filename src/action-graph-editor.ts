
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

	let p = uri.path;

	if (options.replaceFileExtension) {
		p = `${p}.git`;
	} else if (options.submoduleOf) {
		p = `${p}.diff`;
	}

	return uri.with({
		scheme: 'git',
		path: p
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
			if (document.uri.query) {
				panel.dispose();
				void vscode.window.showErrorMessage('Diff view is not implemented yet.');
				return;
			}
		}

		panel.webview.html = this.getHtmlForWebview(panel.webview);

		let saveWebviewStateCounter = 0;
		let updateWebviewCounter = 0;

		const saveWebviewState = async (counter: number) => {
			const resp: string = await this.postMessageWithResponse<string>(panel, 'getFileData', {});
			if (counter !== saveWebviewStateCounter) {
				await this.updateTextDocument(document, resp);
			}
		};

		const updateWebview = async (counter: number) => {
			if (document.uri.scheme !== 'file') {
				return;
			}

			if (updateWebviewCounter === counter) {
				await this.postMessage(panel, 'setFileData', {
					data: document.getText(),
					uri: document.uri.toString()
				});
			}
		};

		const changeDocumentSubscription = vscode.workspace.onDidSaveTextDocument((e: vscode.TextDocument) => {
			if (e.uri.toString() !== document.uri.toString()) {
				return;
			}

			void updateWebview(++updateWebviewCounter);
		});

		const changeViewStatSubScription = panel.onDidChangeViewState((e: vscode.WebviewPanelOnDidChangeViewStateEvent) => {
			if (document.uri.scheme !== 'file') {
				return;
			}

			if (e.webviewPanel.visible) {
				void updateWebview(++updateWebviewCounter);
			}

		});

		const saveDocumentSubscription = vscode.workspace.onWillSaveTextDocument((e: vscode.TextDocumentWillSaveEvent) => {
			e.waitUntil(saveWebviewState(saveWebviewStateCounter++));
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

	private updateTextDocument(document: vscode.TextDocument, graphYaml: string): Thenable<boolean> {
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
}
