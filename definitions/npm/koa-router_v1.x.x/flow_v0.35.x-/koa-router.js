

declare module 'koa-router' {
				declare class Layer  {
		opts: Layer.ILayerOptions;
		name: string;
		methods: string[];
		paramNames: string[];
		stack: Router.IMiddleware[];
		regexp: RegExp;
		path: string;
		constructor(path: string | RegExp, methods: string[], middleware: Router.IMiddleware, opts?: Layer.ILayerOptions): this;
		constructor(path: string | RegExp, methods: string[], middleware: Array<Router.IMiddleware>, opts?: Layer.ILayerOptions): this;
		match(path: string): boolean;
		params(path: string | RegExp, captures: string[], existingParams?: Object): Object;
		captures(path: string): string[];
		url(params: Object): string;
		param(param: string, fn: Router.IMiddleware): Layer;
		setPrefix(prefix: string): Layer
	}

	declare class Router  {
		params: Object;
		stack: Array<Layer>;
		constructor(opt?: Router.IRouterOptions): this;
		use(...middleware: Array<Router.IMiddleware>): Router;
		use(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		get(
		name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>
	): Router;
		get(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		post(
		name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>
	): Router;
		post(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		put(
		name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>
	): Router;
		put(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		delete(
		name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>
	): Router;
		delete(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		del(
		name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>
	): Router;
		del(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		head(
		name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>
	): Router;
		head(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		options(
		name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>
	): Router;
		options(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		patch(
		name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>
	): Router;
		patch(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		all(
		name: string, path: string | RegExp, ...middleware: Array<Router.IMiddleware>
	): Router;
		all(path: string | RegExp, ...middleware: Array<Router.IMiddleware>): Router;
		prefix(prefix: string): Router;
		routes(): Router.IMiddleware;
		middlewares(): Router.IMiddleware;
		allowedMethods(options?: Router.IRouterAllowedMethodsOptions): Router.IMiddleware;
		redirect(source: string, destination: string, code?: number): Router;
		register(
		path: string | RegExp, methods: string[], middleware: Router.IMiddleware, opts?: Object
	): Layer;
		route(name: string): Layer;
		route(name: string): boolean;
		url(name: string, params: Object): string;
		url(name: string, params: Object): Error;
		match(name: string, method: string): Object;
		param(param: string, middleware: Router.IParamMiddleware): Router;
		url(path: string | RegExp, params: Object): string
	}

	declare module.exports: undefined


}

declare module 'Layer' {
		declare export interface ILayerOptions {
		name: string,
		sensitive?: boolean,
		strict?: boolean
	}

			
}

declare module 'Router' {
		declare export interface IRouterOptions {
		prefix?: string,
		methods?: string[],
		routerPath?: string,
		sensitive?: boolean
	}

	declare export interface IRouterContext {
		params: any
	}

	declare export interface IMiddleware {
		(ctx: Router.IRouterContext, next: () => Promise<any>): any
	}

	declare export interface IParamMiddleware {
		(param: string, ctx: Router.IRouterContext, next: () => Promise<any>): any
	}

	declare export interface IRouterAllowedMethodsOptions {
		throw?: boolean,
		notImplemented?: () => any,
		methodNotAllowed?: () => any
	}

			
}