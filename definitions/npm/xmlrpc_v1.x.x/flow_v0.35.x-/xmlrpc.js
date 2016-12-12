

declare module 'xmlrpc' {
	declare type ServerFunction = (error: any, params: any, callback: (error: any, value: any) => void) => void;

	declare type ServerNotFoundFunction = (methodName: string, params: any[]) => void;

	declare type Headers = {
		[header: string]: string
	};

	declare interface ClientOptions {
		host?: string,
		path?: string,
		port?: number,
		url?: string,
		cookies?: boolean,
		headers?: {
		[header: string]: string
	},
		basic_auth?: {
		user: string,
		pass: string
	},
		method?: string
	}

	declare interface ServerOptions {
		host?: string,
		path?: string,
		port?: number
	}

	declare interface DateFormatterOptions {
		colons?: boolean,
		hyphens?: boolean,
		local?: boolean,
		ms?: boolean,
		offset?: boolean
	}

	declare interface Client {
		options: ClientOptions,
		isSecure: boolean,
		headersProcessors: {
		processors: HeadersProcessor[]
	},
		cookies?: Cookies,
		methodCall(
		method: string, params: any[], callback: (error: Object, value: any) => void
	): void,
		getCookie(name: string): string,
		setCookie(name: string, value: string): this
	}

	declare interface Server {
		httpServer: HttpServer | HttpsServer,
		on(eventName: "NotFound", callback: ServerNotFoundFunction): this,
		on(eventName: string, callback: ServerFunction): this
	}

	declare interface HeadersProcessor {
		composeRequest(headers: Headers): void,
		parseResponse(headers: Headers): void
	}

	declare function createClient(options: string | ClientOptions): Client

	declare function createSecureClient(options: string | ClientOptions): Client

	declare function createServer(options: string | ServerOptions, callback: () => void): Server

	declare function createSecureServer(options: string | TlsOptions, callback: () => void): Server

	declare class Cookies  {
		get(name: string): string;
		set(
		name: string, value: string, options?: {
		secure: boolean,
		expires: Date
	}
	): void;
		toString(): string
	}

	declare module.exports: undefined


}