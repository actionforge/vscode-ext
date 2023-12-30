import * as vscode from 'vscode';
import { AgEditorProvider } from './editor';

export async function activate(context: vscode.ExtensionContext): Promise<void> {
	context.subscriptions.push(...AgEditorProvider.register(context));
}
