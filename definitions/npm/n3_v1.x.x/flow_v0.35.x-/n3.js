

declare module 'n3' {
					declare module.exports: undefined


}

declare module 'N3' {
	declare type ErrorCallback = (err: Error, result: any) => void;

	declare interface Prefixes {
		[key: string]: string
	}

	declare interface LiteralValue {
		value: string | number
	}

	declare interface Triple {
		subject: string,
		predicate: string,
		object: string
	}

	declare interface BlankTriple {
		predicate: string,
		object: string
	}

	declare interface ParserOptions {
		format?: string,
		prefixes?: string[]
	}

	declare interface ParseCallback {
		(error: Error, triple: Triple, prefixes: Prefixes): void
	}

	declare interface Logger {
		(message?: any, ...optionalParams: any[]): void
	}

	declare interface N3Parser {
		parse(input: string, callback: ParseCallback): void,
		parse(subject: string, predicate: string, object: string): void,
		parse(triple: Triple): void,
		parse(stream: fs.ReadStream, log: Logger): void
	}

	declare interface N3StreamParser {
		pipe(consumer: stream.Writable | N3StreamWriter): void
	}

	declare interface N3Writer {
		addTriple(subject: string, predicate: string, object: string): void,
		addTriple(subject: string, predicate: string, object: string[]): void,
		addTriple(triple: Triple): void,
		end(err?: ErrorCallback, result?: any): void,
		blank(ns: string, name: string): string,
		blank(triple: BlankTriple[]): string,
		list(triple: string[]): string[]
	}

	declare interface N3StreamWriter {
		pipe(consumer: stream.Writable): void
	}

	declare interface WriterOptions {
		format?: string,
		prefixes?: Prefixes
	}

	declare interface N3StoreWriter {
		find(subject: string, predicate: string, object: string): Triple[]
	}

	declare function Parser(options?: ParserOptions): N3Parser

	declare function StreamParser(options?: ParserOptions): N3StreamParser

	declare function Writer(options: WriterOptions): N3Writer

	declare function Writer(fd: any, options: WriterOptions): N3Writer

	declare function StreamWriter(options: WriterOptions): N3StreamWriter

	declare function Store(): N3StoreWriter

		
}

declare module 'Util' {
			declare function createLiteral(value: any): string

	declare function createLiteral(value: any, type: string): string

	declare function isIRI(value: string): boolean

	declare function isLiteral(value: string): boolean

	declare function getLiteralValue(value: string): string

	declare function getLiteralLanguage(value: string): string

	declare function getLiteralType(value: string): string

	declare function isBlank(value: string): boolean

	declare function isPrefixedName(name: string): boolean

	declare function expandPrefixedName(name: string, prefixes: Prefixes): string

		
}