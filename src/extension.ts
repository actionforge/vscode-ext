import * as vscode from 'vscode';
import { ActionGraphEditorProvider } from './action-graph-editor';

export async function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(...ActionGraphEditorProvider.register(context));
}
