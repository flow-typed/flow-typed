

declare module 'universal-router' {
	declare export type Routes<C, R> = Route<C, R>[];

	declare export interface Params {
		[key: string]: string
	}

	declare export interface Context {
		path: string
	}

	declare export interface ActionContext {
		params: Params
	}

	declare export interface Route<C, R> {
		path: string,
		action: (ctx: ActionContext & C, params: Params) => R | Promise<R> | void,
		children?: Routes<C, R>
	}

	declare export function resolve<C, R>(
		routes: Routes<C, R> | Route<C, R>, pathOrContext: string | String | Context & C
	): Promise<R>

		
}