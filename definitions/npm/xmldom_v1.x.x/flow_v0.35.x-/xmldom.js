

declare module 'xmldom' {
		declare interface DOMParserStatic {
		new (): DOMParser,
		new (options: Options): DOMParser
	}

	declare interface XMLSerializerStatic {
		new (): XMLSerializer
	}

	declare interface DOMParser {
		parseFromString(xmlsource: string, mimeType?: string): Document
	}

	declare interface XMLSerializer {
		serializeToString(node: Node): string
	}

	declare interface Options {
		locator?: any,
		errorHandler?: ErrorHandlerFunction | ErrorHandlerObject
	}

	declare interface ErrorHandlerFunction {
		(level: string, msg: any): any
	}

	declare interface ErrorHandlerObject {
		warning?: (msg: any) => any,
		error?: (msg: any) => any,
		fatalError?: (msg: any) => any
	}

			declare module.exports: undefined


}