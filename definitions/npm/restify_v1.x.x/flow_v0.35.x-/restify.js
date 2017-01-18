/**
 * Flowtype definitions for restify
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

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

    /**
     * Comes from authorizationParser plugin
     */
    declare interface requestAuthorization {
        scheme: string,
            credentials: string,
            basic?: {
                username: string,
                password: string
            }
    }
    declare type Request = {

        /**
         * builds an absolute URI for the request.
         * @private  * 
         * @function  absoluteUri
         * @param  a url path
         * @returns  
         */
        absoluteUri: (path: string) => string,

        /**
         * returns any header off the request. also, 'correct' any
         * correctly spelled 'referrer' header to the actual spelling used.
         * @public  * 
         * @function  header
         * @param  the name of the header
         * @param  default value if header isn't found on the req
         * @returns  
         */
        header: (name: string, value?: string) => string,

        /**
         * returns any trailer header off the request. also, 'correct' any
         * correctly spelled 'referrer' header to the actual spelling used.
         * @public  * 
         * @function  trailer
         * @param  the name of the header
         * @param  default value if header isn't found on the req
         * @returns  
         */
        trailer: (name: string, value?: string) => string,

        /**
         * checks if the accept header is present and has the value requested.
         * e.g., req.accepts('html');
         * @public  * 
         * @function  accepts
         * @param  an array of accept type headers
         * @returns  
         */
        accepts: (types: string | string[]) => boolean,

        /**
         * checks if the request accepts the encoding types.
         * @public  * 
         * @function  acceptsEncoding
         * @param  an array of accept type headers
         * @returns  
         */
        acceptsEncoding: (types: string | string[]) => boolean,

        /**
         * Check if the incoming request contains the Content-Type header field, and
         * if it contains the given mime type.
         * @public  * 
         * @function  is
         * @param  a content-type header value
         * @returns  
         */
        is: (type: string) => boolean,

        /**
         * Check if the incoming request is chunked.
         * @public  * 
         * @function  isChunked
         * @returns  
         */
        isChunked: () => boolean,

        /**
         * Check if the incoming request is kept alive.
         * @public  * 
         * @function  isKeepAlive
         * @returns  
         */
        isKeepAlive: () => boolean,

        /**
         * Check if the incoming request has been upgraded.
         * @public  * 
         * @function  isUpgradeRequest
         * @returns  
         */
        isUpgradeRequest: () => boolean,

        /**
         * Check if the incoming request is an upload verb.
         * @public  * 
         * @function  isUpload
         * @returns  
         */
        isUpload: () => boolean,

        /**
         * retrieves the user-agent header.
         * @public  * 
         * @function  userAgent
         * @returns  
         */
        userAgent: () => string,

        /**
         * Start the timer for a request handler function. You must explicitly invoke
         * endHandlerTimer() after invoking this function. Otherwise timing information
        will be inaccurate.
         * @public  * 
         * @function  startHandlerTimer
         * @param  The name of the handler.
         * @returns  
        */
        startHandlerTimer: (handlerName: string) => void,

        /**
         * Stop the timer for a request handler function.
         * @public  * 
         * @function  endHandlerTimer
         * @param  The name of the handler.
         * @returns  
         */
        endHandlerTimer: (handlerName: string) => void,
        getLogger: (component: string) => any,

        /**
         * gets the content-length header off the request.
         * @public  * 
         * @function  getContentLength
         * @returns  
         */
        getContentLength: () => number,

        /**
         * 
         * @see  getContentLength
         * @function  contentLength
         */
        contentLength: () => number,

        /**
         * gets the content-type header.
         * @public  * 
         * @function  getContentType
         * @returns  
         */
        getContentType: () => string,

        /**
         * 
         * @see  getContentType
         */
        contentType: () => string,

        /**
         * retrieves the complete URI requested by the client.
         * @public  * 
         * @function  getHref
         * @returns  
         */
        getHref: () => string,

        /**
         * 
         * @see  getHref
         */
        href: () => string,
        log: bunyan.Logger,

        /**
         * retrieves the request uuid. was created when the request was setup.
         * @public  * 
         * @function  getId
         * @returns  
         */
        getId: () => string,

        /**
         * 
         * @see  getId
         */
        id: () => string,

        /**
         * retrieves the cleaned up url path.
         * e.g., /foo?a=1  =>  /foo
         * @public  * 
         * @function  getPath
         * @returns  
         */
        getPath: () => string,

        /**
         * 
         * @see  getPath
         */
        path: () => string,

        /**
         * returns the raw query string
         * @public  * 
         * @function  getQuery
         * @returns  
         */
        getQuery: () => string,

        /**
         * 
         * @see  getQuery
         */
        query: () => string,
        secure: boolean,

        /**
         * returns ms since epoch when request was setup.
         * @public  * 
         * @function  time
         * @returns  
         */
        time: () => number,

        /**
         * returns a parsed URL object.
         * @public  * 
         * @function  getUrl
         * @returns  
         */
        getUrl: () => url.Url,

        /**
         * returns the accept-version header.
         * @public  * 
         * @function  getVersion
         * @returns  
         */
        getVersion: () => string,

        /**
         * 
         * @see  getVersion
         */
        version: () => string,
        params: any,
        files?: {
            [name: string]: requestFileInterface
        },

        /**
         * Check if the incoming request is encrypted.
         * @public  * 
         * @function  isSecure
         * @returns  
         */
        isSecure: () => boolean,

        /**
         * available when bodyParser plugin is used 
         */
        body?: any,

        /**
         * available when authorizationParser plugin is used 
         */
        username?: string,

        /**
         * available when authorizationParser plugin is used 
         */
        authorization?: requestAuthorization,
        timers: HandlerTiming[]
    }

    /**
     * Timer object used to identify how long a specific handler took to run
     * @property  {String} name The name of the handler.
     * @property  {Array} time A tuple of [seconds, nanoseconds], how long the handler took.
     */
    declare interface HandlerTiming {
        name: string,
            time: [number, number]
    }
    declare type Response = {
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
    declare type RoutePathRegex = {
        restifyParams: string[]
    } & RegExp

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

            /**
             * Takes an object of route params and query params, and 'renders' a URL
             * @param  the route name
             * @param  an object of route params
             * @param  an object of query params
             * @returns  
             */
            render: (routeName: string, params: Object, query?: Object) => string,

            /**
             * adds a route.
             * @param  an options object
             * @returns  returns the route name if creation is successful.
             */
            mount: (options: Object) => string | boolean,

            /**
             * unmounts a route.
             * @param  the route name
             * @returns  the name of the deleted route (or false if it was not matched)
             */
            unmount: (name: string) => string | boolean
    }
    declare type Server = {
        use(handler: RequestHandler, ...handlers: RequestHandler[]): Server,
        use(handler: RequestHandler[], ...handlers: RequestHandler[]): Server,
        use(handler: RequestHandler, ...handlers: RequestHandler[][]): Server,
        use(handler: RequestHandler[], ...handlers: RequestHandler[][]): Server,
        post(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[]): string,
        post(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[]): string,
        post(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[][]): string,
        post(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[][]): string,
        patch(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[]): string,
        patch(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[]): string,
        patch(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[][]): string,
        patch(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[][]): string,
        put(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[]): string,
        put(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[]): string,
        put(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[][]): string,
        put(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[][]): string,
        del(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[]): string,
        del(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[]): string,
        del(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[][]): string,
        del(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[][]): string,
        get(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[]): string,
        get(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[]): string,
        get(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[][]): string,
        get(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[][]): string,
        head(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[]): string,
        head(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[]): string,
        head(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[][]): string,
        head(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[][]): string,
        opts(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[]): string,
        opts(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[]): string,
        opts(
            route: any,
            routeCallBack: RequestHandler,
            ...routeCallBacks: RequestHandler[][]): string,
        opts(
            route: any,
            routeCallBack: RequestHandler[],
            ...routeCallBacks: RequestHandler[][]): string,
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
                },
                callback?: (err: any, req: Request, res: Response, obj: any) => any) => any,
            head: (
                opts: string | {
                    path?: string,
                    [name: string]: any
                },
                callback?: (err: any, req: Request, res: Response) => any) => any,
            post: (
                opts: string | {
                    path?: string,
                    [name: string]: any
                },
                object: any,
                callback?: (err: any, req: Request, res: Response, obj: any) => any) => any,
            put: (
                opts: string | {
                    path?: string,
                    [name: string]: any
                },
                object: any,
                callback?: (err: any, req: Request, res: Response, obj: any) => any) => any,
            patch: (
                opts: string | {
                    path?: string,
                    [name: string]: any
                },
                object: any,
                callback?: (err: any, req: Request, res: Response, obj: any) => any) => any,
            del: (
                opts: string | {
                    path?: string,
                    [name: string]: any
                },
                callback?: (err: any, req: Request, res: Response) => any) => any,
            basicAuth: (username: string, password: string) => any
    }
    declare type HttpClient = {
        get: (
            opts?: string | {
                path?: string,
                [name: string]: any
            },
            callback?: Function) => any,
        head: (
            opts?: string | {
                path?: string,
                [name: string]: any
            },
            callback?: Function) => any,
        post: (
            opts?: string | {
                path?: string,
                [name: string]: any
            },
            callback?: Function) => any,
        put: (
            opts?: string | {
                path?: string,
                [name: string]: any
            },
            callback?: Function) => any,
        patch: (
            opts?: string | {
                path?: string,
                [name: string]: any
            },
            callback?: Function) => any,
        del: (
            opts?: string | {
                path?: string,
                [name: string]: any
            },
            callback?: Function) => any
    } & Client

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
    declare export class HttpError {
        constructor(cause: any, message?: any): this
    }
    declare class DefiniteHttpError {
        constructor(message?: any): this;
        constructor(cause: any, message?: any): this
    }
    declare export class BadRequestError mixins DefiniteHttpError {}
    declare export class UnauthorizedError mixins DefiniteHttpError {}
    declare export class PaymentRequiredError mixins DefiniteHttpError {}
    declare export class ForbiddenError mixins DefiniteHttpError {}
    declare export class NotFoundError mixins DefiniteHttpError {}
    declare export class MethodNotAllowedError mixins DefiniteHttpError {}
    declare export class NotAcceptableError mixins DefiniteHttpError {}
    declare export class ProxyAuthenticationRequiredError mixins DefiniteHttpError {}
    declare export class RequestTimeoutError mixins DefiniteHttpError {}
    declare export class ConflictError mixins DefiniteHttpError {}
    declare export class GoneError mixins DefiniteHttpError {}
    declare export class LengthRequiredError mixins DefiniteHttpError {}
    declare export class RequestEntityTooLargeError mixins DefiniteHttpError {}
    declare export class RequesturiTooLargeError mixins DefiniteHttpError {}
    declare export class UnsupportedMediaTypeError mixins DefiniteHttpError {}
    declare export class RequestedRangeNotSatisfiableError mixins DefiniteHttpError {}
    declare export class ExpectationFailedError mixins DefiniteHttpError {}
    declare export class ImATeapotError mixins DefiniteHttpError {}
    declare export class UnprocessableEntityError mixins DefiniteHttpError {}
    declare export class LockedError mixins DefiniteHttpError {}
    declare export class FailedDependencyError mixins DefiniteHttpError {}
    declare export class UnorderedCollectionError mixins DefiniteHttpError {}
    declare export class UpgradeRequiredError mixins DefiniteHttpError {}
    declare export class PreconditionRequiredError mixins DefiniteHttpError {}
    declare export class TooManyRequestsError mixins DefiniteHttpError {}
    declare export class RequestHeaderFieldsTooLargeError mixins DefiniteHttpError {}
    declare export class InternalServerError mixins DefiniteHttpError {}
    declare export class NotImplementedError mixins DefiniteHttpError {}
    declare export class BadGatewayError mixins DefiniteHttpError {}
    declare export class ServiceUnavailableError mixins DefiniteHttpError {}
    declare export class GatewayTimeoutError mixins DefiniteHttpError {}
    declare export class HttpVersionNotSupportedError mixins DefiniteHttpError {}
    declare export class VariantAlsoNegotiatesError mixins DefiniteHttpError {}
    declare export class InsufficientStorageError mixins DefiniteHttpError {}
    declare export class BandwidthLimitExceededError mixins DefiniteHttpError {}
    declare export class NotExtendedError mixins DefiniteHttpError {}
    declare export class NetworkAuthenticationRequiredError mixins DefiniteHttpError {}
    declare export class RestError mixins DefiniteHttpError {}
    declare export class PreconditionFailedError mixins RestError {}
    declare export class BadDigestError mixins RestError {}
    declare export class BadMethodError mixins RestError {}
    declare export class InternalError mixins RestError {}
    declare export class InvalidArgumentError mixins RestError {}
    declare export class InvalidContentError mixins RestError {}
    declare export class InvalidCredentialsError mixins RestError {}
    declare export class InvalidHeaderError mixins RestError {}
    declare export class InvalidVersionError mixins RestError {}
    declare export class MissingParameterError mixins RestError {}
    declare export class NotAuthorizedError mixins RestError {}
    declare export class RequestExpiredError mixins RestError {}
    declare export class RequestThrottledError mixins RestError {}
    declare export class ResourceNotFoundError mixins RestError {}
    declare export class WrongAcceptError mixins RestError {}
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
    declare export var defaultResponseHeaders: any;
    declare export var CORS: CORS;
    declare module 'pre' {
        declare     export function pause(): RequestHandler
        declare     export function sanitizePath(options?: any): RequestHandler
        declare     export function userAgentConnection(options?: any): RequestHandler
    }

}