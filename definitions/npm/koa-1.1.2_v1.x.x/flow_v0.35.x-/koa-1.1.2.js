

declare module 'koa-1.1.2' {
					
}

declare module 'npm$namespace$Koa' {
		declare export interface Request {
		
	}

	declare export interface Response {
		
	}

	declare export interface Application {
		
	}

			
}

declare module 'koa' {
		declare interface IRequest {
		header: any,
		headers: any,
		url: string,
		origin: string,
		href: string,
		method: string,
		path: string,
		query: any,
		querystring: string,
		search: string,
		host: string,
		hostname: string,
		fresh: boolean,
		stale: boolean,
		idempotent: boolean,
		socket: net.Socket,
		protocol: string,
		secure: boolean,
		ip: string,
		ips: string[],
		subdomains: string[],
		accepts(...types: string[]): string | boolean | string[],
		accepts(types: string[]): string | boolean | string[],
		acceptsEncodings(...encodings: string[]): string | string[],
		acceptsEncodings(encodings: string[]): string | string[],
		acceptsCharsets(...charsets: string[]): string | string[],
		acceptsCharsets(charsets: string[]): string | string[],
		acceptsLanguages(...langs: string[]): string | string[],
		acceptsLanguages(langs: string[]): string | string[],
		is(type: string): string | boolean,
		is(types: string[]): string | boolean,
		get(field: string): string
	}

	declare interface IResponse {
		status: number,
		message: string,
		body: any,
		length: number,
		headerSent: boolean,
		vary(field: string): void,
		redirect(url: string): void,
		redirect(url: string, alt: string): void,
		attachment(filename: string): void,
		type: string,
		lastModified: Date,
		etag: string,
		set(field: any): void,
		set(field: string, val: string): void,
		set(field: string, val: any[]): void,
		append(field: string, val: string): void,
		append(field: string, val: any[]): void,
		remove(field: string): void,
		writable: boolean
	}

	declare interface BaseRequest {
		charset: string,
		length: number,
		type: string,
		inspect(): any,
		toJSON(): any
	}

	declare interface BaseResponse {
		socket: net.Socket,
		header: any,
		headers: any,
		is(type: string): string | boolean,
		is(types: string[]): string | boolean,
		get(field: string): string,
		inspect(): any,
		toJSON(): any
	}

	declare interface BaseContext {
		inspect(): any,
		toJSON(): any,
		assert(test: any, status: number, message: string): void,
		throw(...args: any[]): void,
		onerror(err: Error): void
	}

	declare interface Request {
		app: Application,
		ctx: Context,
		response: Response,
		req: http.IncomingMessage,
		res: http.ServerResponse
	}

	declare interface Response {
		app: Application,
		ctx: Context,
		request: Request,
		req: http.IncomingMessage,
		res: http.ServerResponse
	}

	declare interface Context {
		request: Request,
		response: Response,
		app: Application,
		req: http.IncomingMessage,
		res: http.ServerResponse,
		originalUrl: string,
		cookies: Cookies.ICookies,
		accept: any,
		state: any
	}

	declare interface Application {
		env: string,
		subdomainOffset: number,
		middleware: any[],
		proxy: boolean,
		context: BaseContext,
		request: BaseRequest,
		response: BaseResponse,
		listen(
		port: number, hostname?: string, backlog?: number, callback?: Function
	): http.Server,
		listen(port: number, hostname?: string, callback?: Function): http.Server,
		listen(path: string, callback?: Function): http.Server,
		listen(handle: any, listeningListener?: Function): http.Server,
		listen(): http.Server,
		inspect(): any,
		toJSON(): any,
		use(fn: Function): Application,
		callback(): (req: http.IncomingMessage, res: http.ServerResponse) => void,
		createContext(req: http.IncomingMessage, res: http.ServerResponse): Context,
		onerror(err: Error): void
	}

	declare interface KoaStatic {
		new (): koa.Application,
		(): koa.Application
	}

			declare module.exports: KoaStatic


}