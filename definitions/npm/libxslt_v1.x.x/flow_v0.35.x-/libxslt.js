

declare module 'libxslt' {
	declare type OutputFormat = "document" | "string";

	declare type ApplyResult = string | xmljs.XMLDocument;

	declare type ApplyCallback = (err: Error, result: ApplyResult) => void;

	declare type ApplyStringCallback = (err: Error, result: string) => void;

	declare type ApplyDocumentCallback = (err: Error, result: xmljs.XMLDocument) => void;

	declare type ParseCallback = (err: Error, stylesheet: Stylesheet) => void;

	declare export interface ApplyOptions {
		outputFormat?: OutputFormat,
		noWrapParams?: boolean
	}

	declare export interface Stylesheet {
		apply(source: string, params?: Object): string,
		apply(source: string, params: Object, options: ApplyOptions): ApplyResult,
		apply(
		source: string, params: Object, options: ApplyOptions, callback: ApplyCallback
	): void,
		apply(source: string, callback: ApplyStringCallback): void,
		apply(source: xmljs.XMLDocument, params?: Object): xmljs.XMLDocument,
		apply(source: xmljs.XMLDocument, params: Object, options: ApplyOptions): ApplyResult,
		apply(
		source: xmljs.XMLDocument, params: Object, options: ApplyOptions, callback: ApplyCallback
	): void,
		apply(source: xmljs.XMLDocument, callback: ApplyDocumentCallback): void,
		applyToFile(
		sourcePath: string, params: Object, options: ApplyOptions, callback: ApplyStringCallback
	): void,
		applyToFile(sourcePath: string, callback: ApplyStringCallback): void
	}

	declare export function parse(source: string): Stylesheet

	declare export function parse(source: string, callback: ParseCallback): void

	declare export function parse(source: xmljs.XMLDocument): Stylesheet

	declare export function parse(source: xmljs.XMLDocument, callback: ParseCallback): void

	declare export function parseFile(sourcePath: string, callback: ParseCallback): void

		
}