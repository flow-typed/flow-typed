import type { BrowserifyConstructor } from 'npm$namespace$Browserify'

declare module 'browserify' {
					declare module.exports: BrowserifyConstructor


}

declare module 'npm$namespace$Browserify' {
	declare type InputFile = string | NodeJS.ReadableStream | FileOptions;

	declare interface FileOptions {
		entry?: boolean,
		expose?: string,
		basedir?: string,
		file?: string,
		external?: boolean,
		transform?: boolean,
		id?: string
	}

	declare interface Options {
		[propName: string]: any,
		entries?: InputFile | InputFile[],
		noParse?: string[],
		extensions?: string[],
		basedir?: string,
		paths?: string[],
		commondir?: boolean,
		fullPaths?: boolean,
		builtins?: string[] | {
		[builtinName: string]: string
	} | boolean,
		bundleExternal?: boolean,
		insertGlobals?: boolean,
		detectGlobals?: boolean,
		debug?: boolean,
		standalone?: string,
		insertGlobalVars?: {
		[globalName: string]: (file: string, basedir: string) => any
	},
		externalRequireName?: string
	}

	declare interface BrowserifyConstructor {
		(files: InputFile[], opts?: Options): BrowserifyObject,
		(file: InputFile, opts?: Options): BrowserifyObject,
		(opts: Options): BrowserifyObject,
		(): BrowserifyObject,
		new (files: InputFile[], opts?: Options): BrowserifyObject,
		new (file: InputFile, opts?: Options): BrowserifyObject,
		new (opts: Options): BrowserifyObject,
		new (): BrowserifyObject
	}

	declare interface BrowserifyObject {
		add(file: InputFile[], opts?: FileOptions): BrowserifyObject,
		add(file: InputFile, opts?: FileOptions): BrowserifyObject,
		require(file: InputFile, opts?: FileOptions): BrowserifyObject,
		bundle(cb?: (err: any, src: Buffer) => any): NodeJS.ReadableStream,
		external(file: string[], opts?: {
		basedir?: string
	}): BrowserifyObject,
		external(file: string, opts?: {
		basedir?: string
	}): BrowserifyObject,
		external(file: BrowserifyObject): BrowserifyObject,
		ignore(file: string, opts?: {
		basedir?: string
	}): BrowserifyObject,
		exclude(file: string, opts?: {
		basedir?: string
	}): BrowserifyObject,
		transform<T>(tr: string, opts?: T): BrowserifyObject,
		transform<T>(
		tr: (file: string, opts: T) => NodeJS.ReadWriteStream, opts?: T
	): BrowserifyObject,
		plugin<T>(plugin: string, opts?: T): BrowserifyObject,
		plugin<T>(plugin: (b: BrowserifyObject, opts: T) => any, opts?: T): BrowserifyObject,
		reset(opts?: Options): void,
		on(event: "file", listener: (file: string, id: string, parent: any) => any): this,
		on(event: "package", listener: (pkg: any) => any): this,
		on(event: "bundle", listener: (bundle: NodeJS.ReadableStream) => any): this,
		on(event: "reset", listener: () => any): this,
		on(
		event: "transform", listener: (tr: NodeJS.ReadWriteStream, file: string) => any
	): this,
		on(event: string, listener: Function): this,
		pipeline: any
	}

			
}