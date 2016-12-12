

declare module 'express-serve-static-core' {
	declare type PathParams = string | RegExp | (string | RegExp)[];

	declare type RequestHandlerParams = RequestHandler | ErrorRequestHandler | (RequestHandler | ErrorRequestHandler)[];

	declare interface NextFunction {
		(err?: any): void
	}

	declare interface RequestHandler {
		(req: Request, res: Response, next: NextFunction): any
	}

	declare interface ErrorRequestHandler {
		(err: any, req: Request, res: Response, next: NextFunction): any
	}

	declare interface IRouterMatcher<T> {
		(path: PathParams, ...handlers: RequestHandler[]): T,
		(path: PathParams, ...handlers: RequestHandlerParams[]): T
	}

	declare interface IRouterHandler<T> {
		(...handlers: RequestHandler[]): T,
		(...handlers: RequestHandlerParams[]): T
	}

	declare interface IRouter {
		param(name: string, handler: RequestParamHandler): this,
		param(callback: (name: string, matcher: RegExp) => RequestParamHandler): this,
		all: IRouterMatcher<this>,
		get: IRouterMatcher<this>,
		post: IRouterMatcher<this>,
		put: IRouterMatcher<this>,
		delete: IRouterMatcher<this>,
		patch: IRouterMatcher<this>,
		options: IRouterMatcher<this>,
		head: IRouterMatcher<this>,
		checkout: IRouterMatcher<this>,
		copy: IRouterMatcher<this>,
		lock: IRouterMatcher<this>,
		merge: IRouterMatcher<this>,
		mkactivity: IRouterMatcher<this>,
		mkcol: IRouterMatcher<this>,
		move: IRouterMatcher<this>,
		m-search: IRouterMatcher<this>,
		notify: IRouterMatcher<this>,
		purge: IRouterMatcher<this>,
		report: IRouterMatcher<this>,
		search: IRouterMatcher<this>,
		subscribe: IRouterMatcher<this>,
		trace: IRouterMatcher<this>,
		unlock: IRouterMatcher<this>,
		unsubscribe: IRouterMatcher<this>,
		use: IRouterHandler<this> & IRouterMatcher<this>,
		route(prefix: PathParams): IRoute,
		stack: any[]
	}

	declare interface IRoute {
		path: string,
		stack: any,
		all: IRouterHandler<this>,
		get: IRouterHandler<this>,
		post: IRouterHandler<this>,
		put: IRouterHandler<this>,
		delete: IRouterHandler<this>,
		patch: IRouterHandler<this>,
		options: IRouterHandler<this>,
		head: IRouterHandler<this>,
		checkout: IRouterHandler<this>,
		copy: IRouterHandler<this>,
		lock: IRouterHandler<this>,
		merge: IRouterHandler<this>,
		mkactivity: IRouterHandler<this>,
		mkcol: IRouterHandler<this>,
		move: IRouterHandler<this>,
		m-search: IRouterHandler<this>,
		notify: IRouterHandler<this>,
		purge: IRouterHandler<this>,
		report: IRouterHandler<this>,
		search: IRouterHandler<this>,
		subscribe: IRouterHandler<this>,
		trace: IRouterHandler<this>,
		unlock: IRouterHandler<this>,
		unsubscribe: IRouterHandler<this>
	}

	declare export interface Router {
		
	}

	declare interface CookieOptions {
		maxAge?: number,
		signed?: boolean,
		expires?: Date | boolean,
		httpOnly?: boolean,
		path?: string,
		domain?: string,
		secure?: boolean | "auto"
	}

	declare interface Errback {
		(err: Error): void
	}

	declare interface Request {
		get(name: string): string,
		header(name: string): string,
		headers: {
		[key: string]: string
	},
		accepts(): string[],
		accepts(type: string): string | boolean,
		accepts(type: string[]): string | boolean,
		accepts(...type: string[]): string | boolean,
		acceptsCharsets(): string[],
		acceptsCharsets(charset: string): string | boolean,
		acceptsCharsets(charset: string[]): string | boolean,
		acceptsCharsets(...charset: string[]): string | boolean,
		acceptsEncodings(): string[],
		acceptsEncodings(encoding: string): string | boolean,
		acceptsEncodings(encoding: string[]): string | boolean,
		acceptsEncodings(...encoding: string[]): string | boolean,
		acceptsLanguages(): string[],
		acceptsLanguages(lang: string): string | boolean,
		acceptsLanguages(lang: string[]): string | boolean,
		acceptsLanguages(...lang: string[]): string | boolean,
		range(size: number): any[],
		accepted: MediaType[],
		param(name: string, defaultValue?: any): string,
		is(type: string): boolean,
		protocol: string,
		secure: boolean,
		ip: string,
		ips: string[],
		subdomains: string[],
		path: string,
		hostname: string,
		host: string,
		fresh: boolean,
		stale: boolean,
		xhr: boolean,
		body: any,
		cookies: any,
		method: string,
		params: any,
		clearCookie(name: string, options?: any): Response,
		query: any,
		route: any,
		signedCookies: any,
		originalUrl: string,
		url: string,
		baseUrl: string,
		app: Application
	}

	declare interface MediaType {
		value: string,
		quality: number,
		type: string,
		subtype: string
	}

	declare interface Send {
		(status: number, body?: any): Response,
		(body?: any): Response
	}

	declare interface Response {
		status(code: number): Response,
		sendStatus(code: number): Response,
		links(links: any): Response,
		send: Send,
		json: Send,
		jsonp: Send,
		sendFile(path: string): void,
		sendFile(path: string, options: any): void,
		sendFile(path: string, fn: Errback): void,
		sendFile(path: string, options: any, fn: Errback): void,
		sendfile(path: string): void,
		sendfile(path: string, options: any): void,
		sendfile(path: string, fn: Errback): void,
		sendfile(path: string, options: any, fn: Errback): void,
		download(path: string): void,
		download(path: string, filename: string): void,
		download(path: string, fn: Errback): void,
		download(path: string, filename: string, fn: Errback): void,
		contentType(type: string): Response,
		type(type: string): Response,
		format(obj: any): Response,
		attachment(filename?: string): Response,
		set(field: any): Response,
		set(field: string, value?: string): Response,
		header(field: any): Response,
		header(field: string, value?: string): Response,
		headersSent: boolean,
		get(field: string): string,
		clearCookie(name: string, options?: any): Response,
		cookie(name: string, val: string, options: CookieOptions): Response,
		cookie(name: string, val: any, options: CookieOptions): Response,
		cookie(name: string, val: any): Response,
		location(url: string): Response,
		redirect(url: string): void,
		redirect(status: number, url: string): void,
		redirect(url: string, status: number): void,
		render(
		view: string, options?: Object, callback?: (err: Error, html: string) => void
	): void,
		render(view: string, callback?: (err: Error, html: string) => void): void,
		locals: any,
		charset: string,
		vary(field: string): Response
	}

	declare interface Handler {
		
	}

	declare interface RequestParamHandler {
		(req: Request, res: Response, next: NextFunction, value: any, name: string): any
	}

	declare interface Application {
		(req: Request, res: Response): any,
		init(): void,
		defaultConfiguration(): void,
		engine(ext: string, fn: Function): Application,
		set(setting: string, val: any): Application,
		get: {
		(name: string): any
	} & IRouterMatcher<this>,
		param(name: string | string[], handler: RequestParamHandler): this,
		param(callback: (name: string, matcher: RegExp) => RequestParamHandler): this,
		path(): string,
		enabled(setting: string): boolean,
		disabled(setting: string): boolean,
		enable(setting: string): Application,
		disable(setting: string): Application,
		configure(fn: Function): Application,
		configure(env0: string, fn: Function): Application,
		configure(env0: string, env1: string, fn: Function): Application,
		configure(env0: string, env1: string, env2: string, fn: Function): Application,
		configure(
		env0: string, env1: string, env2: string, env3: string, fn: Function
	): Application,
		configure(
		env0: string, env1: string, env2: string, env3: string, env4: string, fn: Function
	): Application,
		render(
		name: string, options?: Object, callback?: (err: Error, html: string) => void
	): void,
		render(name: string, callback: (err: Error, html: string) => void): void,
		listen(
		port: number, hostname: string, backlog: number, callback?: Function
	): http.Server,
		listen(port: number, hostname: string, callback?: Function): http.Server,
		listen(port: number, callback?: Function): http.Server,
		listen(path: string, callback?: Function): http.Server,
		listen(handle: any, listeningListener?: Function): http.Server,
		router: string,
		settings: any,
		resource: any,
		map: any,
		locals: any,
		routes: any,
		_router: any
	}

	declare interface Express {
		request: Request,
		response: Response
	}

			
}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		
	}

	declare export interface Response {
		
	}

	declare export interface Application {
		
	}

			
}