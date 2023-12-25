
import { readFileSync } from 'fs';
import path = require('path');

import * as vscode from 'vscode';

export class AgEditorProvider implements vscode.CustomTextEditorProvider {

	private static newActionGraphFileId = 1;

	private static readonly viewType = 'actionforge.graph';
	private state: vscode.Memento;

	private _requestId = 1;
	private readonly _callbacks = new Map<number, (response: unknown) => void>();

	constructor(
		private readonly context: vscode.ExtensionContext
	) {
		this.state = context.globalState
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
			const uri = vscode.Uri.joinPath(workspaceFolders[0].uri, '.github', 'workflows', 'graphs', `new-${AgEditorProvider.newActionGraphFileId++}.yml`)
				.with({ scheme: 'untitled' });

			void vscode.commands.executeCommand('vscode.openWith', uri, AgEditorProvider.viewType, {
				// For now   
				supportsMultipleEditorsPerDocument: false
			});
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
