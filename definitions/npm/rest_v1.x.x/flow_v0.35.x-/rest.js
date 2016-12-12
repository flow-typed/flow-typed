

declare module 'rest' {
		declare export interface Request {
		method?: string,
		path?: string,
		params?: any,
		headers?: any,
		entity?: any
	}

	declare export interface Status {
		code: number,
		text?: string
	}

	declare export interface Headers {
		[index: string]: any
	}

	declare export interface Response {
		request: Request,
		raw: any,
		status: Status,
		headers: Headers,
		entity: any
	}

	declare export interface ResponsePromise {
		entity(): when.Promise<any>,
		status(): when.Promise<number>,
		headers(): when.Promise<Headers>,
		header(headerName: string): when.Promise<any>
	}

	declare export interface Interceptor<T> {
		(parent?: Client, config?: T): Client
	}

	declare export interface Client {
		(path: string): ResponsePromise,
		(request: Request): ResponsePromise,
		skip(): Client,
		wrap<T>(interceptor: Interceptor<T>, config?: T): Client
	}

	declare export interface Meta {
		client: Client,
		arguments: any
	}

	declare function rest(path: string): rest.ResponsePromise

	declare function rest(request: rest.Request): rest.ResponsePromise

	declare export function setDefaultClient(client: Client): void

	declare export function getDefaultClient(): Client

	declare export function resetDefaultClient(): void

	declare export function wrap<T>(interceptor: Interceptor<T>, config?: T): Client

		declare module.exports: undefined


}

declare module 'rest/interceptor' {
			declare function interceptor<T, U>(config: interceptor.Config<T, U>): rest.Interceptor<T>

		declare module.exports: undefined


}

declare module 'interceptor' {
		declare interface Config<T, U> {
		init?: (config: T) => U,
		request?: (
		request: rest.Request, config: U, meta: rest.Meta
	) => rest.Request | when.Promise<rest.Request>,
		response?: (
		response: rest.Response, config: U, meta: rest.Meta
	) => rest.Response | when.Promise<rest.Response>,
		success?: (
		response: rest.Response, config: U, meta: rest.Meta
	) => rest.Response | when.Promise<rest.Response>,
		error?: (
		response: rest.Response, config: U, meta: rest.Meta
	) => rest.Response | when.Promise<rest.Response>
	}

			
}

declare module 'rest/interceptor/defaultRequest' {
					declare module.exports: Interceptor


}

declare module 'defaultRequest' {
		declare interface Config {
		method?: string,
		path?: string,
		params?: any,
		headers?: any,
		entity?: any,
		mixin?: any
	}

			
}

declare module 'rest/interceptor/hateoas' {
					declare module.exports: Interceptor


}

declare module 'hateoas' {
		declare interface Config {
		target?: string,
		client?: rest.Client
	}

			
}

declare module 'rest/interceptor/location' {
					declare module.exports: Interceptor


}

declare module 'location' {
		declare interface Config {
		client?: rest.Client,
		code?: number
	}

			
}

declare module 'rest/interceptor/mime' {
					declare module.exports: Interceptor


}

declare module 'mime' {
		declare interface Config {
		mime?: string,
		accept?: string,
		registry?: registry.Registry,
		permissive?: boolean
	}

			
}

declare module 'rest/interceptor/pathPrefix' {
					declare module.exports: Interceptor


}

declare module 'pathPrefix' {
		declare interface Config {
		prefix?: string
	}

			
}

declare module 'rest/interceptor/basicAuth' {
					declare module.exports: Interceptor


}

declare module 'basicAuth' {
		declare interface Config {
		username?: string,
		password?: string
	}

			
}

declare module 'rest/interceptor/oAuth' {
					declare module.exports: Interceptor


}

declare module 'oAuth' {
		declare interface DismissWindow {
		(): void
	}

	declare interface Config {
		token?: string,
		clientId?: string,
		scope?: string,
		authorizationUrl?: string,
		redirectUrl?: string,
		windowStrategy?: (url: string) => DismissWindow,
		oAuthCallback?: (hash: string) => void,
		oAuthCallbackName?: string
	}

			
}

declare module 'rest/interceptor/csrf' {
					declare module.exports: Interceptor


}

declare module 'csrf' {
		declare interface Config {
		name?: string,
		token?: string
	}

			
}

declare module 'rest/interceptor/errorCode' {
					declare module.exports: Interceptor


}

declare module 'errorCode' {
		declare interface Config {
		code?: number
	}

			
}

declare module 'rest/interceptor/retry' {
					declare module.exports: Interceptor


}

declare module 'retry' {
		declare interface Config {
		initial?: number,
		multiplier?: number,
		max?: number
	}

			
}

declare module 'rest/interceptor/template' {
					declare module.exports: Interceptor


}

declare module 'template' {
		declare interface Config {
		template?: string,
		params?: {
		[name: string]: any
	}
	}

			
}

declare module 'rest/interceptor/timeout' {
					declare module.exports: Interceptor


}

declare module 'timeout' {
		declare interface Config {
		timeout?: number,
		transient?: boolean
	}

			
}

declare module 'rest/interceptor/jsonp' {
					declare module.exports: Interceptor


}

declare module 'jsonp' {
		declare interface Config {
		callback?: {
		param?: string,
		prefix?: string,
		name?: string
	}
	}

			
}

declare module 'rest/interceptor/ie/xdomain' {
					declare module.exports: Interceptor


}

declare module 'rest/interceptor/ie/xhr' {
					declare module.exports: Interceptor


}

declare module 'rest/mime/registry' {
					declare module.exports: Registry


}

declare module 'registry' {
		declare interface MIMEConverter {
		read(value: string): any | when.Promise<any>,
		write(value: any): string | when.Promise<string>
	}

	declare interface Registry {
		lookup(mimeType: string): when.Promise<MIMEConverter>,
		register(mimeType: string, converter: MIMEConverter): void
	}

			
}

declare module 'rest/client/xhr' {
					declare module.exports: Client


}

declare module 'rest/client/node' {
					declare module.exports: Client


}

declare module 'rest/client/jsonp' {
					declare module.exports: Client


}

declare module 'rest/client/xdr' {
					declare module.exports: Client


}