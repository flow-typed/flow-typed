

declare module 'request' {
	declare export type RequiredUriUrl = UriOptions | UrlOptions;

	declare export type OptionsWithUri = UriOptions & CoreOptions;

	declare export type OptionsWithUrl = UrlOptions & CoreOptions;

	declare export type Options = OptionsWithUri | OptionsWithUrl;

	declare export interface RequestAPI<TRequest, TOptions, TUriUrlOptions> {
		defaults(options: TOptions): RequestAPI<TRequest, TOptions, RequiredUriUrl>,
		defaults(
		options: RequiredUriUrl & TOptions
	): DefaultUriUrlRequestApi<TRequest, TOptions, OptionalUriUrl>,
		(uri: string, options?: TOptions, callback?: RequestCallback): TRequest,
		(uri: string, callback?: RequestCallback): TRequest,
		(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest,
		get(uri: string, options?: TOptions, callback?: RequestCallback): TRequest,
		get(uri: string, callback?: RequestCallback): TRequest,
		get(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest,
		post(uri: string, options?: TOptions, callback?: RequestCallback): TRequest,
		post(uri: string, callback?: RequestCallback): TRequest,
		post(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest,
		put(uri: string, options?: TOptions, callback?: RequestCallback): TRequest,
		put(uri: string, callback?: RequestCallback): TRequest,
		put(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest,
		head(uri: string, options?: TOptions, callback?: RequestCallback): TRequest,
		head(uri: string, callback?: RequestCallback): TRequest,
		head(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest,
		patch(uri: string, options?: TOptions, callback?: RequestCallback): TRequest,
		patch(uri: string, callback?: RequestCallback): TRequest,
		patch(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest,
		del(uri: string, options?: TOptions, callback?: RequestCallback): TRequest,
		del(uri: string, callback?: RequestCallback): TRequest,
		del(options: TUriUrlOptions & TOptions, callback?: RequestCallback): TRequest,
		forever(agentOptions: any, optionsArg: any): TRequest,
		jar(): CookieJar,
		cookie(str: string): Cookie,
		initParams: any,
		debug: boolean
	}

	declare interface DefaultUriUrlRequestApi<TRequest, TOptions, TUriUrlOptions> {
		defaults(options: TOptions): DefaultUriUrlRequestApi<TRequest, TOptions, OptionalUriUrl>,
		(): TRequest,
		get(): TRequest,
		post(): TRequest,
		put(): TRequest,
		head(): TRequest,
		patch(): TRequest,
		del(): TRequest
	}

	declare interface CoreOptions {
		baseUrl?: string,
		callback?: (error: any, response: http.IncomingMessage, body: any) => void,
		jar?: any,
		formData?: any,
		form?: any,
		auth?: AuthOptions,
		oauth?: OAuthOptions,
		aws?: AWSOptions,
		hawk?: HawkOptions,
		qs?: any,
		qsStringifyOptions?: any,
		qsParseOptions?: any,
		json?: any,
		multipart?: RequestPart[] | Multipart,
		agent?: http.Agent | https.Agent,
		agentOptions?: any,
		agentClass?: any,
		forever?: any,
		host?: string,
		port?: number,
		method?: string,
		headers?: Headers,
		body?: any,
		followRedirect?: boolean | ((response: http.IncomingMessage) => boolean),
		followAllRedirects?: boolean,
		maxRedirects?: number,
		encoding?: string,
		pool?: any,
		timeout?: number,
		proxy?: any,
		strictSSL?: boolean,
		gzip?: boolean,
		preambleCRLF?: boolean,
		postambleCRLF?: boolean,
		key?: Buffer,
		cert?: Buffer,
		passphrase?: string,
		ca?: string | Buffer | string[] | Buffer[],
		har?: HttpArchiveRequest,
		useQuerystring?: boolean
	}

	declare interface UriOptions {
		uri: string
	}

	declare interface UrlOptions {
		url: string
	}

	declare interface OptionalUriUrl {
		uri?: string,
		url?: string
	}

	declare export interface RequestCallback {
		(error: any, response: http.IncomingMessage, body: any): void
	}

	declare export interface HttpArchiveRequest {
		url?: string,
		method?: string,
		headers?: NameValuePair[],
		postData?: {
		mimeType?: string,
		params?: NameValuePair[]
	}
	}

	declare export interface NameValuePair {
		name: string,
		value: string
	}

	declare export interface Multipart {
		chunked?: boolean,
		data?: {
		content-type?: string,
		body: string
	}[]
	}

	declare export interface RequestPart {
		headers?: Headers,
		body: any
	}

	declare export interface Request {
		readable: boolean,
		writable: boolean,
		getAgent(): http.Agent,
		pipeDest(dest: any): void,
		setHeader(name: string, value: string, clobber?: boolean): Request,
		setHeaders(headers: Headers): Request,
		qs(q: Object, clobber?: boolean): Request,
		form(): FormData,
		form(form: any): Request,
		multipart(multipart: RequestPart[]): Request,
		json(val: any): Request,
		aws(opts: AWSOptions, now?: boolean): Request,
		auth(
		username: string, password: string, sendInmediately?: boolean, bearer?: string
	): Request,
		oauth(oauth: OAuthOptions): Request,
		jar(jar: CookieJar): Request,
		on(event: string, listener: Function): this,
		on(event: "request", listener: (req: http.ClientRequest) => void): this,
		on(event: "response", listener: (resp: http.IncomingMessage) => void): this,
		on(event: "data", listener: (data: Buffer | string) => void): this,
		on(event: "error", listener: (e: Error) => void): this,
		on(
		event: "complete", listener: (resp: http.IncomingMessage, body?: string | Buffer) => void
	): this,
		write(buffer: Buffer, cb?: Function): boolean,
		write(str: string, cb?: Function): boolean,
		write(str: string, encoding: string, cb?: Function): boolean,
		write(str: string, encoding?: string, fd?: string): boolean,
		end(): void,
		end(chunk: Buffer, cb?: Function): void,
		end(chunk: string, cb?: Function): void,
		end(chunk: string, encoding: string, cb?: Function): void,
		pause(): void,
		resume(): void,
		abort(): void,
		destroy(): void,
		toJSON(): Object
	}

	declare export interface Headers {
		[key: string]: any
	}

	declare export interface AuthOptions {
		user?: string,
		username?: string,
		pass?: string,
		password?: string,
		sendImmediately?: boolean,
		bearer?: string
	}

	declare export interface OAuthOptions {
		callback?: string,
		consumer_key?: string,
		consumer_secret?: string,
		token?: string,
		token_secret?: string,
		verifier?: string
	}

	declare export interface HawkOptions {
		credentials: any
	}

	declare export interface AWSOptions {
		secret: string,
		bucket?: string
	}

	declare export interface CookieJar {
		setCookie(cookie: Cookie, uri: string | url.Url, options?: any): void,
		getCookieString(uri: string | url.Url): string,
		getCookies(uri: string | url.Url): Cookie[]
	}

	declare export interface CookieValue {
		name: string,
		value: any,
		httpOnly: boolean
	}

	declare export interface Cookie {
		constructor(name: string, req: Request): void,
		str: string,
		expires: Date,
		path: string,
		toString(): string
	}

			declare module.exports: RequestAPI


}