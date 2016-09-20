/* @flow */

import * as vscode from 'vscode';

import type {DiagnosticCollection, Disposable, Location} from 'vscode';

const line = 1;
const character = 2;
const uri = vscode.Uri.file('path/to/file');
const position = new vscode.Position(line, character);

// $ExpectError - It's a Location, not a Disposable
const loc: Disposable = new Location(uri, position);
