

declare module 'ejs' {
					declare module.exports: undefined


}

declare module 'Ejs' {
	declare type Data = {
		[name: string]: any
	};

	declare type Dependencies = string[];

	declare interface TemplateFunction {
		(data: Data): any
	}

	declare interface Options {
		cache?: any,
		filename?: string,
		context?: any,
		compileDebug?: boolean,
		client?: boolean,
		delimiter?: string,
		debug?: any,
		_with?: boolean
	}

	declare interface Cache {
		_data: {
		[name: string]: any
	},
		set(key: string, val: any): any,
		get(key: string): any
	}

	declare function resolveInclude(name: string, filename: string): string

	declare function compile(template: string, opts?: Options): (TemplateFunction)

	declare function render(template: string, data?: Data, opts?: Options): string

	declare function renderFile(path: string, data?: Data, opts?: Options, cb?: Function): any

	declare function clearCache(): any

	declare function escapeRegexChars(s: string): string

	declare function escapeXML(markup: string): string

	declare function shallowCopy<T1>(to: T1, fro: any): T1

	declare function resolve(from1: string, to: string): string

	declare function resolve(from1: string, from2: string, to: string): string

	declare function resolve(from1: string, from2: string, from3: string, to: string): string

	declare function resolve(from1: string, from2: string, from3: string, from4: string, to: string): string

	declare function resolve(
		from1: string, from2: string, from3: string, from4: string, from5: string, to: string
	): string

	declare function resolve(
		from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, to: string
	): string

	declare function resolve(
		from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, from7: string, to: string
	): string

	declare function resolve(
		from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, from7: string, from8: string, to: string
	): string

	declare function resolve(
		from1: string, from2: string, from3: string, from4: string, from5: string, from6: string, from7: string, from8: string, from9: string, to: string
	): string

	declare function resolve(...args: string[]): string

	declare function normalize(path: string): string

	declare function isAbsolute(path: string): boolean

	declare function join(...args: string[]): string

	declare function relative(from: string, to: string): string

	declare function dirname(path: string): string

	declare function basename(path: string): string

	declare function extname(path: string): string

	declare function filter(xs: any, f: any): any

	declare class Template  {
		constructor(text: string, opts: Options): this;
		opts: Options;
		templateText: string;
		mode: string;
		truncate: boolean;
		currentLine: number;
		source: string;
		dependencies: Dependencies;
		createRegex(): RegExp;
		compile(): TemplateFunction;
		generateSource(): any;
		parseTemplateText(): string[];
		scanLine(line: string): any
	}

	
}

declare module 'Template' {
		declare interface MODES {
		EVAL: string,
		ESCAPED: string,
		RAW: string,
		COMMENT: string,
		LITERAL: string
	}

			
}