

declare module 'css' {
	declare type AtRule = Charset | CustomMedia | Document | FontFace | Host | Import | KeyFrames | Media | Namespace | Page | Supports;

	declare interface ParserOptions {
		silent?: boolean,
		source?: string
	}

	declare interface StringifyOptions {
		indent?: string,
		compress?: boolean,
		sourcemap?: string,
		inputSourcemaps?: boolean
	}

	declare interface ParserError {
		message?: string,
		reason?: string,
		filename?: string,
		line?: number,
		column?: number,
		source?: string
	}

	declare interface Position {
		line?: number,
		column?: number
	}

	declare interface Node {
		type?: string,
		parent?: Node,
		position?: {
		start?: Position,
		end?: Position,
		source?: string,
		content?: string
	}
	}

	declare interface Rule {
		selectors?: Array<string>,
		declarations?: Array<Declaration | Comment>
	}

	declare interface Declaration {
		property?: string,
		value?: string
	}

	declare interface Comment {
		comment?: string
	}

	declare interface Charset {
		charset?: string
	}

	declare interface CustomMedia {
		name?: string,
		media?: string
	}

	declare interface Document {
		document?: string,
		vendor?: string,
		rules?: Array<Rule | Comment | AtRule>
	}

	declare interface FontFace {
		declarations?: Array<Declaration | Comment>
	}

	declare interface Host {
		rules?: Array<Rule | Comment | AtRule>
	}

	declare interface Import {
		import?: string
	}

	declare interface KeyFrames {
		name?: string,
		vendor?: string,
		keyframes?: Array<KeyFrame | Comment>
	}

	declare interface KeyFrame {
		values?: Array<string>,
		declarations?: Array<Declaration | Comment>
	}

	declare interface Media {
		media?: string,
		rules?: Array<Rule | Comment | AtRule>
	}

	declare interface Namespace {
		namespace?: string
	}

	declare interface Page {
		selectors?: Array<string>,
		declarations?: Array<Declaration | Comment>
	}

	declare interface Supports {
		supports?: string,
		rules?: Array<Rule | Comment | AtRule>
	}

	declare interface Stylesheet {
		stylesheet?: {
		rules?: Array<Rule | Comment | AtRule>,
		parsingErrors?: Array<ParserError>
	}
	}

	declare function parse(code: string, options?: ParserOptions): Stylesheet

	declare function stringify(stylesheet: Stylesheet, options?: StringifyOptions): string

		
}