

declare module 'browser-resolve' {
	declare type resolveCallback = (err?: Error, resolved?: string) => void;

		declare function browserResolve(id: string, cb: resolveCallback): void

	declare function browserResolve(id: string, opts: browserResolve.AsyncOpts, cb: resolveCallback): void

	declare function browserResolveSync(id: string, opts?: browserResolve.SyncOpts): string

		declare module.exports: undefined


}

declare module 'browserResolve' {
		declare interface Opts {
		browser?: string,
		filename?: string,
		modules?: any
	}

	declare export interface AsyncOpts {
		
	}

	declare export interface SyncOpts {
		
	}

			
}