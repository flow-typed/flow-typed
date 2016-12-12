

declare module 'restify' {
		declare interface addressInterface {
		port: number,
		family: string,
		address: string
	}

	declare interface requestFileInterface {
		path: string,
		type: string
	}

	declare interface requestAuthorization {
		scheme: string,
		credentials: string,
		basic?: {
		username: string,
		password: string
	}
	}

	declare interface Request {
		absoluteUri: (path: string) => string,
		header: (name: string, value?: string) => string,
		trailer: (name: string, value?: string) => string,
		accepts: (types: string | string[]) => boolean,
		acceptsEncoding: (types: string | string[]) => boolean,
		is: (type: string) => boolean,
		isChunked: () => boolean,
		isKeepAlive: () => boolean,
		isUpgradeRequest: () => boolean,
		isUpload: () => boolean,
		userAgent: () => string,
		startHandlerTimer: (handlerName: string) => void,
		endHandlerTimer: (handlerName: string) => void,
		getLogger: (component: string) => any,
		getContentLength: () => number,
		contentLength: () => number,
		getContentType: () => string,
		contentType: () => string,
		getHref: () => string,
		href: () => string,
		log: bunyan.Logger,
		getId: () => string,
		id: () => string,
		getPath: () => string,
		path: () => string,
		getQuery: () => string,
		query: () => string,
		secure: boolean,
		time: () => number,
		getUrl: () => url.Url,
		getVersion: () => string,
		version: () => string,
		params: any,
		files?: {
		[name: string]: requestFileInterface
	},
		isSecure: () => boolean,
		body?: any,
		username?: string,
		authorization?: requestAuthorization,
		timers: HandlerTiming[]
	}

	declare interface HandlerTiming {
		name: string,
		time: [number, number]
	}

	declare interface Response {
		header: (key: string, value?: any) => any,
		cache: (type?: any, options?: Object) => any,
		status: (code: number) => any,
		send: (status?: any, body?: any, headers?: {
		[header: string]: string
	}) => any,
		json: (status?: any, body?: any, headers?: {
		[header: string]: string
	}) => any,
		code: number,
		contentLength: number,
		charSet(value: string): void,
		contentType: string,
		headers: Object,
		id: string
	}

	declare interface RouteSpec {
		method: string,
		name: string,
		path: string | RegExp,
		versions: string[]
	}

	declare interface Route {
		name: string,
		method: string,
		path: RoutePathRegex,
		spec: RouteSpec,
		types: string[],
		versions: string[]
	}

	declare interface RouteOptions {
		name: string,
		method: string,
		path?: string | RegExp,
		url?: string | RegExp,
		urlParamPattern?: RegExp,
		contentType?: string | string[],
		versions?: string | string[]
	}

	declare interface RoutePathRegex {
		restifyParams: string[]
	}

	declare interface Router {
		name: string,
		mounts: {
		[routeName: string]: Route
	},
		versions: string[],
		contentType: string[],
		routes: {
		DELETE: Route[],
		GET: Route[],
		HEAD: Route[],
		OPTIONS: Route[],
		PATCH: Route[],
		POST: Route[],
		PUT: Route[]
	},
		log?: any,
		toString: () => string,
		render: (routeName: string, params: Object, query?: Object) => string,
		mount: (options: Object) => string | boolean,
		unmount: (name: string) => string | boolean
	}

	declare interface Server {
		use(handler: RequestHandler, ...handlers: RequestHandler[]): Server,
		use(handler: RequestHandler[], ...handlers: RequestHandler[]): Server,
		use(handler: RequestHandler, ...handlers: RequestHandler[][]): Server,
		use(handler: RequestHandler[], ...handlers: RequestHandler[][]): Server,
		post(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]
	): string,
		post(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]
	): string,
		post(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]
	): string,
		post(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]
	): string,
		patch(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]
	): string,
		patch(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]
	): string,
		patch(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]
	): string,
		patch(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]
	): string,
		put(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]
	): string,
		put(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]
	): string,
		put(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]
	): string,
		put(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]
	): string,
		del(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]
	): string,
		del(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]
	): string,
		del(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]
	): string,
		del(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]
	): string,
		get(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]
	): string,
		get(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]
	): string,
		get(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]
	): string,
		get(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]
	): string,
		head(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]
	): string,
		head(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]
	): string,
		head(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]
	): string,
		head(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]
	): string,
		opts(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[]
	): string,
		opts(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[]
	): string,
		opts(
		route: any, routeCallBack: RequestHandler, ...routeCallBacks: RequestHandler[][]
	): string,
		opts(
		route: any, routeCallBack: RequestHandler[], ...routeCallBacks: RequestHandler[][]
	): string,
		name: string,
		version: string,
		log: Object,
		acceptable: string[],
		url: string,
		address: () => addressInterface,
		listen(...args: any[]): any,
		close(...args: any[]): any,
		pre(routeCallBack: RequestHandler): Server,
		server: http.Server,
		router: Router,
		routes: Route[],
		toString: () => string
	}

	declare interface ServerOptions {
		certificate?: string,
		key?: string,
		formatters?: Object,
		log?: Object,
		name?: string,
		spdy?: Object,
		version?: string,
		responseTimeHeader?: string,
		responseTimeFormatter?: (durationInMilliseconds: number) => any,
		handleUpgrades?: boolean,
		router?: Router,
		httpsServerOptions?: any
	}

	declare interface ClientOptions {
		accept?: string,
		connectTimeout?: number,
		dtrace?: Object,
		gzip?: Object,
		headers?: Object,
		log?: Object,
		retry?: Object,
		signRequest?: Function,
		url?: string,
		userAgent?: string,
		version?: string
	}

	declare interface Client {
		get: (
		opts: string | {
		path?: string,
		[name: string]: any
	}, callback?: (err: any, req: Request, res: Response, obj: any) => any
	) => any,
		head: (
		opts: string | {
		path?: string,
		[name: string]: any
	}, callback?: (err: any, req: Request, res: Response) => any
	) => any,
		post: (
		opts: string | {
		path?: string,
		[name: string]: any
	}, object: any, callback?: (err: any, req: Request, res: Response, obj: any) => any
	) => any,
		put: (
		opts: string | {
		path?: string,
		[name: string]: any
	}, object: any, callback?: (err: any, req: Request, res: Response, obj: any) => any
	) => any,
		patch: (
		opts: string | {
		path?: string,
		[name: string]: any
	}, object: any, callback?: (err: any, req: Request, res: Response, obj: any) => any
	) => any,
		del: (
		opts: string | {
		path?: string,
		[name: string]: any
	}, callback?: (err: any, req: Request, res: Response) => any
	) => any,
		basicAuth: (username: string, password: string) => any
	}

	declare interface HttpClient {
		get: (
		opts?: string | {
		path?: string,
		[name: string]: any
	}, callback?: Function
	) => any,
		head: (
		opts?: string | {
		path?: string,
		[name: string]: any
	}, callback?: Function
	) => any,
		post: (
		opts?: string | {
		path?: string,
		[name: string]: any
	}, callback?: Function
	) => any,
		put: (
		opts?: string | {
		path?: string,
		[name: string]: any
	}, callback?: Function
	) => any,
		patch: (
		opts?: string | {
		path?: string,
		[name: string]: any
	}, callback?: Function
	) => any,
		del: (
		opts?: string | {
		path?: string,
		[name: string]: any
	}, callback?: Function
	) => any
	}

	declare interface ThrottleOptions {
		burst?: number,
		rate?: number,
		ip?: boolean,
		xff?: boolean,
		username?: boolean,
		tokensTable?: Object,
		maxKeys?: number,
		overrides?: Object
	}

	declare interface Next {
		(err?: any): any,
		ifError?: (err?: any) => any
	}

	declare interface RequestHandler {
		(req: Request, res: Response, next: Next): any
	}

	declare interface CORS {
		(cors?: {
		origins?: string[],
		credentials?: boolean,
		headers?: string[]
	}): RequestHandler,
		origins: string[],
		ALLOW_HEADERS: string[],
		credentials: boolean
	}

	declare export function createServer(options?: ServerOptions): Server

	declare export function createJsonClient(options?: ClientOptions): Client

	declare export function createStringClient(options?: ClientOptions): Client

	declare export function createClient(options?: ClientOptions): HttpClient

	declare export function acceptParser(parser: any): RequestHandler

	declare export function authorizationParser(): RequestHandler

	declare export function dateParser(skew?: number): RequestHandler

	declare export function queryParser(options?: Object): RequestHandler

	declare export function urlEncodedBodyParser(options?: Object): RequestHandler[]

	declare export function jsonp(): RequestHandler

	declare export function gzipResponse(options?: Object): RequestHandler

	declare export function bodyParser(options?: Object): RequestHandler[]

	declare export function requestLogger(options?: Object): RequestHandler

	declare export function serveStatic(options?: Object): RequestHandler

	declare export function throttle(options?: ThrottleOptions): RequestHandler

	declare export function conditionalRequest(): RequestHandler[]

	declare export function auditLogger(options?: Object): Function

	declare export function fullResponse(): RequestHandler

	declare export class HttpError  {
		constructor(cause: any, message?: any): this
	}

	declare class DefiniteHttpError  {
		constructor(message?: any): this;
		constructor(cause: any, message?: any): this
	}

	declare export class BadRequestError extends DefiniteHttpError {
		
	}

	declare export class UnauthorizedError extends DefiniteHttpError {
		
	}

	declare export class PaymentRequiredError extends DefiniteHttpError {
		
	}

	declare export class ForbiddenError extends DefiniteHttpError {
		
	}

	declare export class NotFoundError extends DefiniteHttpError {
		
	}

	declare export class MethodNotAllowedError extends DefiniteHttpError {
		
	}

	declare export class NotAcceptableError extends DefiniteHttpError {
		
	}

	declare export class ProxyAuthenticationRequiredError extends DefiniteHttpError {
		
	}

	declare export class RequestTimeoutError extends DefiniteHttpError {
		
	}

	declare export class ConflictError extends DefiniteHttpError {
		
	}

	declare export class GoneError extends DefiniteHttpError {
		
	}

	declare export class LengthRequiredError extends DefiniteHttpError {
		
	}

	declare export class RequestEntityTooLargeError extends DefiniteHttpError {
		
	}

	declare export class RequesturiTooLargeError extends DefiniteHttpError {
		
	}

	declare export class UnsupportedMediaTypeError extends DefiniteHttpError {
		
	}

	declare export class RequestedRangeNotSatisfiableError extends DefiniteHttpError {
		
	}

	declare export class ExpectationFailedError extends DefiniteHttpError {
		
	}

	declare export class ImATeapotError extends DefiniteHttpError {
		
	}

	declare export class UnprocessableEntityError extends DefiniteHttpError {
		
	}

	declare export class LockedError extends DefiniteHttpError {
		
	}

	declare export class FailedDependencyError extends DefiniteHttpError {
		
	}

	declare export class UnorderedCollectionError extends DefiniteHttpError {
		
	}

	declare export class UpgradeRequiredError extends DefiniteHttpError {
		
	}

	declare export class PreconditionRequiredError extends DefiniteHttpError {
		
	}

	declare export class TooManyRequestsError extends DefiniteHttpError {
		
	}

	declare export class RequestHeaderFieldsTooLargeError extends DefiniteHttpError {
		
	}

	declare export class InternalServerError extends DefiniteHttpError {
		
	}

	declare export class NotImplementedError extends DefiniteHttpError {
		
	}

	declare export class BadGatewayError extends DefiniteHttpError {
		
	}

	declare export class ServiceUnavailableError extends DefiniteHttpError {
		
	}

	declare export class GatewayTimeoutError extends DefiniteHttpError {
		
	}

	declare export class HttpVersionNotSupportedError extends DefiniteHttpError {
		
	}

	declare export class VariantAlsoNegotiatesError extends DefiniteHttpError {
		
	}

	declare export class InsufficientStorageError extends DefiniteHttpError {
		
	}

	declare export class BandwidthLimitExceededError extends DefiniteHttpError {
		
	}

	declare export class NotExtendedError extends DefiniteHttpError {
		
	}

	declare export class NetworkAuthenticationRequiredError extends DefiniteHttpError {
		
	}

	declare export class RestError extends DefiniteHttpError {
		
	}

	declare export class PreconditionFailedError extends RestError {
		
	}

	declare export class BadDigestError extends RestError {
		
	}

	declare export class BadMethodError extends RestError {
		
	}

	declare export class InternalError extends RestError {
		
	}

	declare export class InvalidArgumentError extends RestError {
		
	}

	declare export class InvalidContentError extends RestError {
		
	}

	declare export class InvalidCredentialsError extends RestError {
		
	}

	declare export class InvalidHeaderError extends RestError {
		
	}

	declare export class InvalidVersionError extends RestError {
		
	}

	declare export class MissingParameterError extends RestError {
		
	}

	declare export class NotAuthorizedError extends RestError {
		
	}

	declare export class RequestExpiredError extends RestError {
		
	}

	declare export class RequestThrottledError extends RestError {
		
	}

	declare export class ResourceNotFoundError extends RestError {
		
	}

	declare export class WrongAcceptError extends RestError {
		
	}

	
}

declare module 'pre' {
			declare export function pause(): RequestHandler

	declare export function sanitizePath(options?: any): RequestHandler

	declare export function userAgentConnection(options?: any): RequestHandler

		
}