

declare module 'xml2js' {
		declare interface RenderOptions {
		indent?: string,
		newline?: string,
		pretty?: boolean
	}

	declare interface XMLDeclarationOptions {
		encoding?: string,
		standalone?: boolean,
		version?: string
	}

	declare interface BuilderOptions {
		doctype?: any,
		headless?: boolean,
		indent?: string,
		newline?: string,
		pretty?: boolean,
		renderOpts?: RenderOptions,
		rootName?: string,
		xmldec?: XMLDeclarationOptions
	}

	declare interface Options {
		async?: boolean,
		attrkey?: string,
		attrNameProcessors?: [(name: string) => string],
		attrValueProcessors?: [(name: string) => string],
		charkey?: string,
		charsAsChildren?: boolean,
		childkey?: string,
		emptyTag?: any,
		explicitArray?: boolean,
		explicitCharkey?: boolean,
		explicitChildren?: boolean,
		explicitRoot?: boolean,
		ignoreAttrs?: boolean,
		mergeAttrs?: boolean,
		normalize?: boolean,
		normalizeTags?: boolean,
		strict?: boolean,
		tagNameProcessors?: [(name: string) => string],
		trim?: boolean,
		validator?: Function,
		valueProcessors?: [(name: string) => string],
		xmlns?: boolean
	}

	declare interface OptionsV2 {
		preserveChildrenOrder?: boolean,
		rootName?: string,
		xmldec?: {
		version: string,
		encoding?: string,
		standalone?: boolean
	},
		doctype?: any,
		renderOpts?: {
		pretty?: boolean,
		indent?: string,
		newline?: string
	},
		headless?: boolean,
		chunkSize?: number,
		cdata?: boolean
	}

	declare function parseString(xml: string, callback: (err: any, result: any) => void): void

	declare function parseString(xml: string, options: Options, callback: (err: any, result: any) => void): void

	declare class Builder  {
		constructor(options?: BuilderOptions): this;
		buildObject(rootObj: any): string
	}

	declare class Parser  {
		constructor(options?: Options): this;
		processAsync(): any;
		assignOrPush(obj: any, key: string, newValue: any): any;
		reset(): any;
		parseString(str: string, cb?: Function): void
	}

	declare module.exports: undefined


}