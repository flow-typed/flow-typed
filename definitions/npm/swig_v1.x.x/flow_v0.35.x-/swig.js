

declare module 'swig' {
		declare export interface SwigOptions {
		autoescape?: boolean,
		cache?: any,
		cmtControls?: string[],
		loader?: TemplateLoader,
		locals?: any,
		tagControls?: string[],
		varControls?: string[]
	}

	declare export interface TemplateLoader {
		resolve(to: string, from: string): string,
		load(identifier: string, callback?: (err: Error, data: any) => void): void,
		load(identifier: string): any
	}

	declare export function setDefaults(options: SwigOptions): void

	declare export function setDefaultTZOffset(offset: number): void

	declare export function setFilter(name: string, method: (input: any, ...args: any[]) => string): void

	declare export function setTag(
		name: string, parse: (
		str?: string, line?: string, parser?: Object, types?: lexer.TYPES, stack?: any, opts?: Object, swig?: Swig
	) => boolean, compile: (
		compiler?: (content?: string, parents?: any, options?: any, blockName?: string) => string, args?: any[], content?: string, parents?: any, options?: any, blockName?: string
	) => string, ends?: boolean, blockLevel?: boolean
	): void

	declare export function setExtension(name: string, object: any): void

	declare export function parseFile(pathName: string, options?: any): parser.ParseReturn

	declare export function precompile(source: string, options?: SwigOptions): any

	declare export function compile(source: string, options?: SwigOptions): (locals?: any) => string

	declare export function compileFile(
		pathname: string, options: SwigOptions, cb: (err: Error, compiledRender: (locals?: any) => string) => void
	): void

	declare export function compileFile(pathname: string, options?: SwigOptions): (locals?: any) => string

	declare export function render(source: string, options?: SwigOptions): string

	declare export function renderFile(pathName: string, locals: any, cb: (err: Error, output: string) => void): void

	declare export function renderFile(pathName: string, locals?: any): string

	declare export function run(templateFn: Function, locals?: any, filePath?: string): string

	declare export function invalidateCache(): void

	declare export class Swig  {
		constructor(options?: SwigOptions): this;
		setFilter(name: string, method: (input: any, ...args: any[]) => string): void;
		setTag(
		name: string, parse: (
		str?: string, line?: string, parser?: Object, types?: lexer.TYPES, stack?: any, opts?: Object, swig?: Swig
	) => boolean, compile: (
		compiler?: (content?: string, parents?: any, options?: any, blockName?: string) => string, args?: any[], content?: string, parents?: any, options?: any, blockName?: string
	) => string, ends?: boolean, blockLevel?: boolean
	): void;
		setExtension(name: string, object: any): void;
		parseFile(pathName: string, options?: any): parser.ParseReturn;
		precompile(source: string, options?: SwigOptions): any;
		compile(source: string, options?: SwigOptions): (locals?: any) => string;
		compileFile(
		pathname: string, options: SwigOptions, cb: (err: Error, compiledRender: (locals?: any) => string) => void
	): void;
		compileFile(pathname: string, options?: SwigOptions): (locals?: any) => string;
		render(source: string, options?: SwigOptions): string;
		renderFile(pathName: string, locals: any, cb: (err: Error, output: string) => void): void;
		renderFile(pathName: string, locals?: any): string;
		run(templateFn: Function, locals?: any, filePath?: string): string;
		invalidateCache(): void;
		loaders: typeof loaders
	}

	
}

declare module 'lexer' {
			declare export function read(str: string): string[]

		
}

declare module 'parser' {
		declare interface ParseReturn {
		name: string,
		parent: any,
		tokens: any[],
		blocks: any
	}

			
}

declare module 'loaders' {
			declare export function fs(basepath?: string, encoding?: string): TemplateLoader

	declare export function memory(mapping: any, basepath?: string): TemplateLoader

		
}