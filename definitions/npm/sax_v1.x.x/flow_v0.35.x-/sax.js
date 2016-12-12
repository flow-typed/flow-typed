

declare module 'sax' {
		declare interface SAXOptions {
		trim?: boolean,
		normalize?: boolean,
		lowercase?: boolean,
		xmlns?: boolean,
		noscript?: boolean,
		position?: boolean
	}

	declare export interface QualifiedName {
		name: string,
		prefix: string,
		local: string,
		uri: string
	}

	declare export interface QualifiedAttribute {
		value: string
	}

	declare interface BaseTag {
		name: string,
		isSelfClosing: boolean
	}

	declare export interface QualifiedTag {
		ns: {
		[key: string]: string
	},
		attributes: {
		[key: string]: QualifiedAttribute
	}
	}

	declare export interface Tag {
		attributes: {
		[key: string]: string
	}
	}

	declare export function parser(strict: boolean, opt: SAXOptions): SAXParser

	declare export function createStream(strict: boolean, opt: SAXOptions): SAXStream

	declare export class SAXParser  {
		constructor(strict: boolean, opt: SAXOptions): this;
		end(): void;
		write(s: string): SAXParser;
		resume(): SAXParser;
		close(): SAXParser;
		flush(): void;
		line: number;
		column: number;
		error: Error;
		position: number;
		startTagPosition: number;
		closed: boolean;
		strict: boolean;
		opt: SAXOptions;
		tag: string;
		onerror(e: Error): void;
		ontext(t: string): void;
		ondoctype(doctype: string): void;
		onprocessinginstruction(node: {
		name: string,
		body: string
	}): void;
		onopentag(tag: Tag | QualifiedTag): void;
		onclosetag(tagName: string): void;
		onattribute(attr: {
		name: string,
		value: string
	}): void;
		oncomment(comment: string): void;
		onopencdata(): void;
		oncdata(cdata: string): void;
		onclosecdata(): void;
		onopennamespace(ns: {
		prefix: string,
		uri: string
	}): void;
		onclosenamespace(ns: {
		prefix: string,
		uri: string
	}): void;
		onend(): void;
		onready(): void;
		onscript(script: string): void
	}

	declare export class SAXStream extends stream$Duplex {
		constructor(strict: boolean, opt: SAXOptions): this
	}

	
}