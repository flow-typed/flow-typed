

declare module 'gulp-util' {
		declare interface PluginErrorOptions {
		name?: string,
		message?: any,
		fileName?: string,
		lineNumber?: number,
		stack?: string,
		showStack?: boolean,
		showProperties?: boolean,
		plugin?: string,
		error?: Error
	}

	declare export function replaceExtension(npath: string, ext: string): string

	declare export function log(message?: any, ...optionalParams: any[]): void

	declare export function template(tmpl: string): (opt: {
		file: {
		path: string
	}
	}) => string

	declare export function template(tmpl: string, opt: {
		file: {
		path: string
	}
	}): string

	declare export function beep(): void

	declare export function isStream(obj: any): boolean

	declare export function isBuffer(obj: any): boolean

	declare export function isNull(obj: any): boolean

	declare export function combine(streams: NodeJS.ReadWriteStream[]): () => NodeJS.ReadWriteStream

	declare export function combine(...streams: NodeJS.ReadWriteStream[]): () => NodeJS.ReadWriteStream

	declare export function buffer(cb?: (err: Error, data: any[]) => void): NodeJS.ReadWriteStream

	declare export class File extends vinyl {
		
	}

	declare export class PluginError extends Error {
		constructor(options?: PluginErrorOptions): this;
		constructor(pluginName: string, options?: PluginErrorOptions): this;
		constructor(pluginName: string, message: string, options?: PluginErrorOptions): this;
		constructor(pluginName: string, message: Error, options?: PluginErrorOptions): this;
		name: string;
		message: any;
		fileName: string;
		lineNumber: number;
		stack: string;
		showStack: boolean;
		showProperties: boolean;
		plugin: string;
		error: Error
	}

	
}