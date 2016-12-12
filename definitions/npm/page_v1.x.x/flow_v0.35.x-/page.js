import type { Static } from 'npm$namespace$PageJS'

declare module 'page' {
					declare module.exports: Static


}

declare module 'npm$namespace$PageJS' {
		declare interface Static {
		Route: Route,
		Context: Context,
		(path: string, ...callbacks: Callback[]): void,
		(callback: Callback): void,
		(path: string): void,
		(fromPath: string, toPath: string): void,
		(options: Options): void,
		(): void,
		redirect(fromPath: string, toPath: string): void,
		redirect(page: string): void,
		replace(path: string, state?: any, init?: boolean, dispatch?: boolean): Context,
		show(path: string): void,
		start(options: Options): void,
		start(): void,
		stop(): void,
		base(path?: string): void,
		exit(path: string, callback: Callback, moreCallbacks?: Callback[]): void,
		exit(callback: Callback): void
	}

	declare interface Route {
		new (path: string, options?: RouteOptions): Route,
		middleware(fn: Callback): Callback,
		match(path: string, params?: {
		
	}): boolean
	}

	declare interface RouteOptions {
		sensitive?: boolean,
		strict?: boolean
	}

	declare interface Options {
		click?: boolean,
		popstate?: boolean,
		dispatch?: boolean,
		hashbang?: boolean
	}

	declare interface Callback {
		(ctx: Context, next: () => any): any
	}

	declare interface Context {
		new (path: string, state?: any): Context,
		[idx: string]: any,
		save: () => void,
		pushState: () => void,
		handled: boolean,
		canonicalPath: string,
		path: string,
		querystring: string,
		pathname: string,
		state: any,
		title: string,
		params: any
	}

			
}