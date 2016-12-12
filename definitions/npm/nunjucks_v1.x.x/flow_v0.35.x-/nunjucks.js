

declare module 'nunjucks' {
					declare module.exports: undefined


}

declare module 'npm$namespace$nunjucks' {
		declare export interface PrecompileOptions {
		name?: string,
		asFunction?: boolean,
		force?: boolean,
		env?: Environment,
		include?: string[],
		exclude?: string[],
		wrapper(
		templates: {
		name: string,
		template: string
	}, opts: PrecompileOptions
	): string
	}

	declare export interface ConfigureOptions {
		autoescape?: boolean,
		throwOnUndefined?: boolean,
		trimBlocks?: boolean,
		lstripBlocks?: boolean,
		watch?: boolean,
		noCache?: boolean,
		web?: {
		useCache?: boolean,
		async?: boolean
	},
		express?: Object,
		tags?: {
		blockStart?: string,
		blockEnd?: string,
		variableStart?: string,
		variableEnd?: string,
		commentStart?: string,
		commentEnd?: string
	}
	}

	declare export interface Extension {
		tags: string[],
		parse(parser: any, nodes: any, lexer: any): any
	}

	declare export interface ILoader {
		async?: boolean,
		getSource(name: string): LoaderSource,
		extend(extender: ILoader): ILoader
	}

	declare export interface LoaderSource {
		src: string,
		path: string,
		noCache: boolean
	}

	declare export function render(name: string, context?: Object): string

	declare export function render(
		name: string, context?: Object, callback?: (err: any, res: string) => any
	): void

	declare export function renderString(src: string, context: Object): string

	declare export function renderString(src: string, context: Object, callback?: (err: any, res: string) => any): void

	declare export function compile(src: string, env?: Environment): Template

	declare export function compile(
		src: string, env?: Environment, callback?: (err: any, res: Template) => any
	): Template

	declare export function precompile(path: string, opts?: PrecompileOptions): string

	declare export function precompileString(src: string, opts?: PrecompileOptions): string

	declare export function configure(options: ConfigureOptions): Environment

	declare export function configure(path: string, options?: ConfigureOptions): Environment

	declare export function configure(path: string[], options?: ConfigureOptions): Environment

	declare export function installJinjaCompat(): void

	declare export class Template  {
		constructor(src: string, env?: Environment, eagerCompile?: boolean): this;
		render(context?: Object): string;
		render(context?: Object, callback?: (err: any, res: string) => any): void
	}

	declare export class Environment  {
		options: {
		autoescape: boolean
	};
		constructor(): this;
		constructor(loader: ILoader, opts?: ConfigureOptions): this;
		constructor(loaders: ILoader[], opts?: ConfigureOptions): this;
		render(name: string, context?: Object): string;
		render(
		name: string, context?: Object, callback?: (err: any, res: string) => any
	): void;
		renderString(name: string, context: Object): string;
		renderString(name: string, context: Object, callback?: (err: any, res: string) => any): void;
		addFilter(name: string, func: (...args: any[]) => any, async?: boolean): void;
		getFilter(name: string): void;
		addExtension(name: string, ext: Extension): void;
		removeExtension(name: string): void;
		getExtension(name: string): Extension;
		hasExtension(name: string): void;
		addGlobal(name: string, value: any): void;
		getTemplate(name: string, eagerCompile?: boolean): Template;
		getTemplate(
		name: string, eagerCompile?: boolean, callback?: (err: any, templ: Template) => Template
	): void;
		express(app: Object): void
	}

	declare export class Loader  {
		on(name: string, func: (...args: any[]) => any): void;
		emit(name: string, ...args: any[]): void;
		resolve(from: string, to: string): string;
		isRelative(filename: string): boolean;
		extend(toExtend: ILoader): ILoader
	}

	declare export class FileSystemLoader extends Loader, ILoader {
		init(searchPaths: string[], opts: any): void;
		getSource(name: string): LoaderSource
	}

	declare export class WebLoader extends ILoader {
		constructor(baseUrl: string, opts?: any): this;
		getSource(name: string): LoaderSource
	}

	declare export class PrecompiledLoader extends Loader, ILoader {
		init(searchPaths: string[], opts: any): void;
		getSource(name: string): LoaderSource
	}

	
}