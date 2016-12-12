

declare module 'resolve' {
	declare type resolveCallback = (err: Error, resolved?: string) => void;

	declare type isFileCallback = (err: Error, isFile?: boolean) => void;

	declare type readFileCallback = (err: Error, file?: Buffer) => void;

	declare interface Opts {
		basedir?: string,
		package?: any,
		extensions?: string | string[],
		packageFilter?: (pkg: any, pkgfile: string) => any,
		pathFilter?: (pkg: any, path: string, relativePath: string) => string,
		paths?: string | string[],
		moduleDirectory?: string | string[]
	}

	declare export interface AsyncOpts {
		readFile?: (file: string, cb: readFileCallback) => void,
		isFile?: (file: string, cb: isFileCallback) => void
	}

	declare export interface SyncOpts {
		readFileSync?: (file: string) => Buffer,
		isFile?: (file: string) => boolean
	}

	declare function resolve(id: string, cb: resolveCallback): void

	declare function resolve(id: string, opts: resolve.AsyncOpts, cb: resolveCallback): void

	declare function resolveSync(id: string, opts?: resolve.SyncOpts): string

	declare function resolveIsCore(id: string): boolean

		declare module.exports: undefined


}