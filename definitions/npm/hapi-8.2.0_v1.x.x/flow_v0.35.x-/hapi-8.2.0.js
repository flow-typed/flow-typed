

declare module 'hapi-8.2.0' {
					
}

declare module 'hapi' {
		declare interface IDictionary<T> {
		[key: string]: T
	}

	declare export interface IBoom {
		isBoom: boolean,
		isServer: boolean,
		message: string,
		output: {
		statusCode: number,
		headers: IDictionary<string>,
		payload: {
		statusCode: number,
		error: string,
		message: string
	}
	},
		reformat(): void
	}

	declare export interface ICatBoxCacheOptions {
		engine: any,
		name?: string,
		shared?: boolean
	}

	declare export interface ISeverConnectionOptions {
		host?: string,
		address?: string,
		port?: string | number,
		uri?: string,
		listener?: any,
		autoListen?: boolean,
		cache?: {
		statuses: number[]
	},
		labels?: string | string[],
		tls?: boolean
	}

	declare export interface IConnectionConfigurationServerDefaults {
		app?: any,
		load?: {
		maxHeapUsedBytes: number,
		maxRssBytes: number,
		maxEventLoopDelay: number
	},
		plugins?: any,
		router?: {
		isCaseSensitive: boolean,
		stripTrailingSlash: boolean
	},
		routes?: IRouteAdditionalConfigurationOptions,
		state?: IServerState
	}

	declare export interface IServerOptions {
		app?: any,
		cache?: string | ICatBoxCacheOptions | Array<ICatBoxCacheOptions> | any,
		connections?: IConnectionConfigurationServerDefaults,
		debug?: boolean | {
		log: string[],
		request: string[]
	},
		files?: {
		etagsCacheMaxSize?: number
	},
		load?: {
		sampleInterval?: number
	},
		mime?: any,
		minimal?: boolean,
		plugins?: IDictionary<any>
	}

	declare export interface IServerViewCompile {
		(template: string, options: any): void,
		(template: string, options: any, callback: (
		err: any, compiled: (
		context: any, options: any, callback: (err: any, rendered: boolean) => void
	) => void
	) => void): void
	}

	declare export interface IServerViewsAdditionalOptions {
		path?: string,
		partialsPath?: string,
		helpersPath?: string,
		relativeTo?: string,
		layout?: boolean,
		layoutPath?: string,
		layoutKeywork?: string,
		encoding?: string,
		isCached?: boolean,
		allowAbsolutePaths?: boolean,
		allowInsecureAccess?: boolean,
		compileOptions?: any,
		runtimeOptions?: any,
		contentType?: string,
		compileMode?: string,
		context?: any
	}

	declare export interface IServerViewsEnginesOptions {
		module: {
		compile(template: any, options: any): (context: any, options: any) => void,
		compile(
		template: any, options: any, callback: (
		err: any, compiled: (
		context: any, options: any, callback: (err: any, rendered: any) => void
	) => void
	) => void
	): void
	}
	}

	declare export interface IServerViewsConfiguration {
		engines: IDictionary<any> | IServerViewsEnginesOptions,
		defaultExtension?: string
	}

	declare interface IReplyMethods {
		continue(credentialData?: any): void,
		file(
		path: string, options?: {
		filename?: string,
		mode?: boolean | string,
		lookupCompressed: boolean
	}
	): void,
		view(template: string, context?: {
		
	}, options?: any): Response,
		close(options?: {
		end?: boolean
	}): void,
		proxy(options: IProxyHandlerConfig): void,
		redirect(uri: string): Response
	}

	declare export interface IReply {
		(err: Error, result?: string | number | boolean | Buffer | stream.Stream | Promise<T> | T, credentialData?: any): IBoom,
		(result?: string | number | boolean | Buffer | stream.Stream | Promise<T> | T): Response
	}

	declare export interface IStrictReply<T> {
		(err: Error, result?: Promise<T> | T, credentialData?: any): IBoom,
		(result: Promise<T> | T): Response
	}

	declare export interface ISessionHandler {
		(request: Request, reply: IReply): void
	}

	declare export interface IStrictSessionHandler {
		(request: Request, reply: IStrictReply<T>): void
	}

	declare export interface IRequestHandler<T> {
		(request: Request): T
	}

	declare export interface IFailAction {
		(source: string, error: any, next: () => void): void
	}

	declare export interface IProxyHandlerConfig {
		host?: string,
		port?: number,
		protocol?: string,
		uri?: string,
		passThrough?: boolean,
		localStatePassThrough?: boolean,
		acceptEncoding?: boolean,
		rejectUnauthorized?: boolean,
		xforward?: boolean,
		redirects?: boolean | number,
		timeout?: number,
		mapUri?: (
		request: Request, callback: (err: any, uri: string, headers?: {
		[key: string]: string
	}) => void
	) => void,
		onResponse?: (
		err: any, res: http.ServerResponse, req: Request, reply: () => void, settings: IProxyHandlerConfig, ttl: number
	) => void,
		ttl?: number,
		agent?: http.Agent,
		maxSockets?: boolean | number
	}

	declare export interface IJoi {
		
	}

	declare export interface IValidationFunction {
		(value: any, options: any, next: (err: any, value: any) => void): void
	}

	declare export interface IRouteFailFunction {
		(request: Request, reply: IReply, source: string, error: any): void
	}

	declare export interface IRouteAdditionalConfigurationOptions {
		app?: any,
		auth?: boolean | string | {
		mode: string,
		strategies?: string | Array<string>,
		strategy?: string,
		payload?: string,
		scope?: string | Array<string> | boolean,
		entity?: string
	},
		bind?: any,
		cache?: {
		privacy: string,
		expiresIn: number,
		expiresAt: string
	},
		cors?: {
		origin?: Array<string>,
		matchOrigin?: boolean,
		isOriginExposed?: boolean,
		maxAge?: number,
		headers?: string[],
		additionalHeaders?: string[],
		methods?: string[],
		additionalMethods?: string[],
		exposedHeaders?: string[],
		additionalExposedHeaders?: string[],
		credentials?: boolean,
		override?: boolean
	},
		files?: {
		relativeTo: string
	},
		handler?: ISessionHandler | IStrictSessionHandler | string | IRouteHandlerConfig,
		id?: number,
		json?: {
		replacer?: Function | string[],
		space?: number | string,
		suffix?: string
	},
		jsonp?: string,
		payload?: {
		output?: string,
		parse?: string | boolean,
		allow?: string | string[],
		override?: string,
		maxBytes?: number,
		timeout?: number,
		uploads?: string,
		failAction?: string
	},
		plugins?: IDictionary<any>,
		pre?: any[],
		response?: {
		schema: boolean | any,
		status: number,
		sample: number,
		failAction: string,
		modify: boolean,
		options: any
	},
		security?: boolean | {
		hsts: boolean | number | {
		maxAge?: number,
		includeSubdomains?: boolean
	},
		xframe: {
		rule: string,
		source: string
	},
		xss: boolean,
		noOpen: boolean,
		noSniff: boolean
	},
		state?: {
		parse: boolean,
		failAction: string
	},
		validate?: {
		headers?: boolean | IJoi | IValidationFunction,
		params?: boolean | IJoi | IValidationFunction,
		query?: boolean | IJoi | IValidationFunction,
		payload?: boolean | IJoi | IValidationFunction,
		errorFields?: any,
		failAction?: string | IRouteFailFunction,
		options?: any
	},
		timeout?: {
		server: boolean | number,
		socket: boolean | number
	},
		description?: string,
		notes?: string | string[],
		tags?: string[]
	}

	declare export interface IServerRealm {
		modifiers: {
		route: {
		prefix: string,
		vhost: string
	}
	},
		plugin: string,
		plugins: IDictionary<any>,
		settings: {
		files: {
		relativeTo: any
	},
		bind: any
	}
	}

	declare export interface IServerState {
		name: string,
		options: {
		ttl: number,
		isSecure: boolean,
		isHttpOnly: boolean,
		path: any,
		domain: any,
		autoValue: (request: Request, next: (err: any, value: any) => void) => void,
		encoding: string,
		sign: {
		integrity: any,
		password: string
	},
		password: string,
		iron: any,
		ignoreErrors: boolean,
		clearInvalid: boolean,
		strictHeader: boolean,
		passThrough: any
	}
	}

	declare export interface IFileHandlerConfig {
		path: string,
		filename?: string,
		mode?: boolean | string,
		lookupCompressed: boolean
	}

	declare export interface IRouteHandlerConfig {
		file?: string | IRequestHandler<void> | IFileHandlerConfig,
		directory?: {
		path: string | Array<string> | IRequestHandler<string> | IRequestHandler<Array<string>>,
		index?: boolean,
		listing?: boolean,
		showHidden?: boolean,
		redirectToSlash?: boolean,
		lookupCompressed?: boolean,
		defaultExtension?: string
	},
		proxy?: IProxyHandlerConfig,
		view?: string | {
		template: string,
		context: {
		payload: any,
		params: any,
		query: any,
		pre: any
	}
	},
		config?: {
		handler: any,
		bind: any,
		app: any,
		plugins: {
		[name: string]: any
	},
		pre: Array<() => void>,
		validate: {
		headers: any,
		params: any,
		query: any,
		payload: any,
		errorFields?: any,
		failAction?: string | IFailAction
	},
		payload: {
		output: {
		data: any,
		stream: any,
		file: any
	},
		parse?: any,
		allow?: string | Array<string>,
		override?: string,
		maxBytes?: number,
		uploads?: number,
		failAction?: string
	},
		response: {
		schema: any,
		sample: number,
		failAction: string
	},
		cache: {
		privacy: string,
		expiresIn: number,
		expiresAt: number
	},
		auth: string | boolean | {
		mode: string,
		strategies: Array<string>,
		payload?: boolean | string,
		tos?: boolean | string,
		scope?: string | Array<string>,
		entity: string
	},
		cors?: boolean,
		jsonp?: string,
		description?: string,
		notes?: string | Array<string>,
		tags?: Array<string>
	}
	}

	declare export interface IRouteConfiguration {
		path: string,
		method: string | string[],
		vhost?: string,
		handler: ISessionHandler | IStrictSessionHandler | string | IRouteHandlerConfig,
		config?: IRouteAdditionalConfigurationOptions
	}

	declare export interface IRoute {
		method: string,
		path: string,
		vhost?: string | Array<string>,
		realm: IServerRealm,
		settings: IRouteAdditionalConfigurationOptions
	}

	declare export interface IServerAuthScheme {
		authenticate(request: Request, reply: IReply): void,
		authenticate<T>(request: Request, reply: IStrictReply<T>): void,
		payload(request: Request, reply: IReply): void,
		payload<T>(request: Request, reply: IStrictReply<T>): void,
		response(request: Request, reply: IReply): void,
		response<T>(request: Request, reply: IStrictReply<T>): void,
		options?: {
		payload: boolean
	}
	}

	declare export interface IServerInject {
		(options: {
		method: string,
		url: string,
		headers: IDictionary<string>,
		payload: string | Buffer,
		credentials: any,
		simulate: {
		error: boolean,
		close: boolean,
		end: boolean
	}
	}, callback: (
		res: {
		statusCode: number,
		headers: IDictionary<string>,
		payload: string,
		rawPayload: Buffer,
		raw: {
		req: http.ClientRequest,
		res: http.ServerResponse
	},
		result: string,
		request: Request
	}
	) => void): void
	}

	declare export interface IConnectionTable {
		info: any,
		labels: any,
		table: IRoute[]
	}

	declare export interface ICookieSettings {
		ttl?: number,
		isSecure?: boolean,
		isHttpOnly?: boolean,
		path?: string,
		domain?: any,
		autoValue?: (request: Request, next: (err: any, value: any) => void) => void,
		encoding?: string,
		sign?: {
		integrity: any,
		password: string
	},
		password?: string,
		iron?: any,
		ignoreErrors?: boolean,
		clearInvalid?: boolean,
		strictHeader?: boolean,
		passThrough?: any
	}

	declare export interface IServerMethod {
		(...args: any[]): void
	}

	declare export interface IServerMethodOptions {
		bind?: any,
		cache?: ICatBoxCacheOptions,
		callback?: boolean,
		generateKey(args: any[]): string
	}

		declare export class Request extends Events$EventEmitter {
		app: any;
		auth: {
		isAuthenticated: boolean,
		credentials: any,
		artifacts: any,
		mode: any,
		error: any,
		session: any
	};
		domain: any;
		headers: IDictionary<string>;
		id: number;
		info: {
		received: number,
		responded: number,
		remoteAddress: string,
		remotePort: number,
		referrer: string,
		host: string,
		hostname: string
	};
		method: string;
		mime: string;
		orig: {
		params: any,
		query: any,
		payload: any
	};
		params: IDictionary<string>;
		paramsArray: string[];
		path: string;
		payload: any;
		plugins: any;
		pre: IDictionary<any>;
		response: Response;
		preResponses: any;
		query: any;
		raw: {
		req: http.ClientRequest,
		res: http.ServerResponse
	};
		route: IRoute;
		server: Server;
		session: any;
		state: any;
		url: {
		auth: any,
		hash: any,
		host: any,
		hostname: any,
		href: string,
		path: string,
		pathname: string,
		port: any,
		protocol: any,
		query: IDictionary<string>,
		search: string,
		slashes: any
	};
		setUrl(url: string): void;
		setMethod(method: string): void;
		log(tags: string | string[], data?: string, timestamp?: number): void;
		getLog(tags?: string, internal?: boolean): string[];
		tail(name?: string): Function
	}

	declare export class Response extends Events$EventEmitter {
		statusCode: number;
		headers: IDictionary<string>;
		source: any;
		variety: string;
		app: any;
		plugins: any;
		settings: {
		charset: string,
		encoding: string,
		passThrough: boolean,
		stringify: any,
		ttl: number,
		varyEtag: boolean
	};
		bytes(length: number): void;
		charset(charset: string): void;
		code(statusCode: number): void;
		created(uri: string): void;
		encoding(encoding: string): void;
		etag(tag: string, options: {
		weak: boolean,
		vary: boolean
	}): void;
		header(
		name: string, value: string, options?: {
		append: boolean,
		separator: string,
		override: boolean
	}
	): void;
		location(uri: string): void;
		redirect(uri: string): void;
		replacer(method: Function | Array<Function>): void;
		spaces(count: number): void;
		state(name: string, value: string, options?: any): void
	}

	declare export class Server extends Events$EventEmitter {
		constructor(options?: IServerOptions): this;
		app: any;
		connections: Array<ISeverConnectionOptions>;
		info: {
		id: string,
		created: number,
		started: number,
		port: number,
		host: string,
		address: string,
		protocol: string,
		uri: string
	};
		load: {
		eventLoopDelay: number,
		heapUsed: number
	};
		listener: http.Server;
		methods: IDictionary<Function>;
		mime: any;
		plugins: IDictionary<any>;
		realm: IServerRealm;
		root: Server;
		settings: IServerOptions;
		version: string;
		after(
		method: (plugin: any, next: (err: any) => void) => void, dependencies: string | string[]
	): void;
		auth: {
		default(options: string): void,
		default(options: {
		strategy: string
	}): void,
		default(options: {
		strategies: string[]
	}): void,
		scheme(
		name: string, scheme: (server: Server, options: any) => IServerAuthScheme
	): void,
		strategy(name: string, scheme: any, mode?: boolean, options?: any): void,
		test(
		strategy: string, request: Request, next: (err: any, credentials: any) => void
	): void
	};
		bind(context: any): void;
		cache(options: ICatBoxCacheOptions): void;
		connection(options: ISeverConnectionOptions): Server;
		decorate(type: string, property: string, method: Function): void;
		dependency(
		dependencies: string | string[], after?: (server: Server, next: (err: any) => void) => void
	): void;
		expose(key: string, value: any): void;
		expose(obj: any): void;
		ext(
		event: string, method: (request: Request, reply: IReply, bind?: any) => void, options?: {
		before: string | string[],
		after: string | string[],
		bind?: any
	}
	): void;
		ext<T>(
		event: string, method: (request: Request, reply: IStrictReply<T>, bind?: any) => void, options?: {
		before: string | string[],
		after: string | string[],
		bind?: any
	}
	): void;
		handler<THandlerConfig>(
		name: string, method: (route: IRoute, options: THandlerConfig) => ISessionHandler
	): void;
		inject: IServerInject;
		log(tags: string | string[], data?: string | any, timestamp?: number): void;
		lookup(id: string): IRoute;
		match(method: string, path: string, host?: string): IRoute;
		method(name: string, method: IServerMethod, options?: IServerMethodOptions): void;
		method(
		methods: {
		name: string,
		method: IServerMethod,
		options?: IServerMethodOptions
	} | Array<{
		name: string,
		method: IServerMethod,
		options?: IServerMethodOptions
	}>
	): void;
		path(relativeTo: string): void;
		register(
		plugins: any | any[], options: {
		select: string | string[],
		routes: {
		prefix: string,
		vhost?: string | string[]
	}
	}, callback: (err: any) => void
	): void;
		register(plugins: any | any[], callback: (err: any) => void): void;
		render(
		template: string, context: any, options: any, callback: (err: any, rendered: any, config: any) => void
	): void;
		route(options: IRouteConfiguration): void;
		route(options: IRouteConfiguration[]): void;
		select(labels: string | string[]): Server | Server[];
		start(callback?: (err: any) => void): void;
		state(name: string, options?: ICookieSettings): void;
		stop(options?: {
		timeout: number
	}, callback?: () => void): void;
		table(host?: any): IConnectionTable;
		views(options: IServerViewsConfiguration): void
	}

	
}