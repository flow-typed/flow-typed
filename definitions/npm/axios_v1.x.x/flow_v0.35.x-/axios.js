/**
 * Flowtype definitions for axios
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Axios$IThenable<R>{
    then<U>(
        onFulfilled?: (value: R) => U | Axios$IThenable<U>,
        onRejected?: (error: any) => U | Axios$IThenable<U>): Axios$IThenable<U>,
    then<U>(
        onFulfilled?: (value: R) => U | Axios$IThenable<U>,
        onRejected?: (error: any) => void): Axios$IThenable<U >
}

declare type Axios$IPromise<R>= {
    then<U>(
        onFulfilled?: (value: R) => U | Axios$IThenable<U>,
        onRejected?: (error: any) => U | Axios$IThenable<U>): Axios$IPromise<U>,
    then<U>(
        onFulfilled?: (value: R) => U | Axios$IThenable<U>,
        onRejected?: (error: any) => void): Axios$IPromise<U>,
    catch<U>(onRejected?: (error: any) => U | Axios$IThenable<U>): Axios$IPromise<U >
} & Axios$IThenable



/**
 * HTTP Basic auth details
 */
declare interface Axios$AxiosHttpBasicAuth {
    username: string,
        password: string
}


/**
 * Common axios XHR config interface
 * <T> - request body data type
 */
declare interface Axios$AxiosXHRConfigBase<T>{

    /**
     * will be prepended to `url` unless `url` is absolute.
     * It can be convenient to set `baseURL` for an instance
    of axios to pass relative URLs to methods of that instance.
    */
    baseURL?: string,

    /**
     * custom headers to be sent
     */
    headers?: {
        [key: string]: any
    },

    /**
     * URL parameters to be sent with the request
     */
    params?: Object,

    /**
     * optional function in charge of serializing `params`
     * (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
     */
    paramsSerializer?: (params: Object) => string,

    /**
     * specifies the number of milliseconds before the request times out.
     * If the request takes longer than `timeout`, the request will be aborted.
     */
    timeout?: number,

    /**
     * indicates whether or not cross-site Access-Control requests
     * should be made using credentials
     */
    withCredentials?: boolean,

    /**
     * indicates that HTTP Basic auth should be used, and supplies
     * credentials. This will set an `Authorization` header,
    overwriting any existing `Authorization` custom headers you have
    set using `headers`.
    */
    auth?: Axios$AxiosHttpBasicAuth,

    /**
     * indicates the type of data that the server will respond with
     * options are 'arraybuffer', 'blob', 'document', 'json', 'text'
     */
    responseType?: string,

    /**
     * name of the cookie to use as a value for xsrf token
     */
    xsrfCookieName?: string,

    /**
     * name of the http header that carries the xsrf token value
     */
    xsrfHeaderName?: string,

    /**
     * Change the request data before it is sent to the server.
     * This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
    The last function in the array must return a string or an ArrayBuffer
    */
    transformRequest?: (<U>(data: T) => U) | [<U>(data: T) => U],

    /**
     * change the response data to be made before it is passed to then/catch
     */
    transformResponse?:<U>(data: T) => U
}


/**
 * <T> - request body data type
 */
declare type Axios$AxiosXHRConfig<T>= {

    /**
     * server URL that will be used for the request, options are:
     * GET, PUT, POST, DELETE, CONNECT, HEAD, OPTIONS, TRACE, PATCH
     */
    url: string,

    /**
     * request method to be used when making the request
     */
    method?: string,

    /**
     * data to be sent as the request body
     * Only applicable for request methods 'PUT', 'POST', and 'PATCH'
    When no `transformRequest` is set, must be a string, an ArrayBuffer or a hash
    */
    data?: T
} & Axios$AxiosXHRConfigBase


declare type Axios$AxiosXHRConfigDefaults<T>= {

    /**
     * custom headers to be sent
     */
    headers: {
        common: {
            [index: string]: string
        },
        patch: {
            [index: string]: string
        },
        post: {
            [index: string]: string
        },
        put: {
            [index: string]: string
        }
    }
} & Axios$AxiosXHRConfigBase



/**
 * <T> - expected response type,
 * <U> - request body data type
 */
declare interface Axios$AxiosXHR<T>{

    /**
     * Response that was provided by the server
     */
    data: T,

    /**
     * HTTP status code from the server response
     */
    status: number,

    /**
     * HTTP status message from the server response
     */
    statusText: string,

    /**
     * headers that the server responded with
     */
    headers: Object,

    /**
     * config that was provided to `axios` for the request
     */
    config: Axios$AxiosXHRConfig<T >
}

declare interface Axios$Interceptor {

    /**
     * intercept request before it is sent
     */
    request: Axios$RequestInterceptor,

        /**
         * intercept response of request when it is received.
         */
        response: Axios$ResponseInterceptor
}

declare type Axios$InterceptorId = number;

declare interface Axios$RequestInterceptor {

    /**
     * <U> - request body data type
     */
    use<U>(
            fulfilledFn: (config: Axios$AxiosXHRConfig<U>) => Axios$AxiosXHRConfig<U>): Axios$InterceptorId,
        use<U>(
            fulfilledFn: (config: Axios$AxiosXHRConfig<U>) => Axios$AxiosXHRConfig<U>,
            rejectedFn: (error: any) => any): Axios$InterceptorId,
        eject(interceptorId: Axios$InterceptorId): void
}

declare interface Axios$ResponseInterceptor {

    /**
     * <T> - expected response type
     */
    use<T>(
            fulfilledFn: (config: Axios$AxiosXHR<T>) => Axios$AxiosXHR<T>): Axios$InterceptorId,
        use<T>(
            fulfilledFn: (config: Axios$AxiosXHR<T>) => Axios$AxiosXHR<T>,
            rejectedFn: (error: any) => any): Axios$InterceptorId,
        eject(interceptorId: Axios$InterceptorId): void
}


/**
 * <T> - expected response type,
 * <U> - request body data type
 */
declare interface Axios$AxiosInstance {

    /**
     * Send request as configured
     */
    (config: Axios$AxiosXHRConfig<T>): Axios$IPromise<Axios$AxiosXHR<T >> ,

        /**
         * Send request as configured
         */
        new<T>(config: Axios$AxiosXHRConfig<T>): Axios$IPromise<Axios$AxiosXHR<T >> ,

        /**
         * Send request as configured
         */
        request<T>(config: Axios$AxiosXHRConfig<T>): Axios$IPromise<Axios$AxiosXHR<T >> ,

        /**
         * intercept requests or responses before they are handled by then or catch
         */
        interceptors: Axios$Interceptor,

        /**
         * Config defaults
         */
        defaults: Axios$AxiosXHRConfigDefaults<any>,

        /**
         * equivalent to `Promise.all`
         */
        all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
            values: [T1 | Axios$IPromise<Axios$AxiosXHR<T1 >> , T2 | Axios$IPromise<Axios$AxiosXHR<T2 >> , T3 | Axios$IPromise<Axios$AxiosXHR<T3 >> , T4 | Axios$IPromise<Axios$AxiosXHR<T4 >> , T5 | Axios$IPromise<Axios$AxiosXHR<T5 >> , T6 | Axios$IPromise<Axios$AxiosXHR<T6 >> , T7 | Axios$IPromise<Axios$AxiosXHR<T7 >> , T8 | Axios$IPromise<Axios$AxiosXHR<T8 >> , T9 | Axios$IPromise<Axios$AxiosXHR<T9 >> , T10 | Axios$IPromise<Axios$AxiosXHR<T10 >> ]): Axios$IPromise<[Axios$AxiosXHR<T1>, Axios$AxiosXHR<T2>, Axios$AxiosXHR<T3>, Axios$AxiosXHR<T4>, Axios$AxiosXHR<T5>, Axios$AxiosXHR<T6>, Axios$AxiosXHR<T7>, Axios$AxiosXHR<T8>, Axios$AxiosXHR<T9>, Axios$AxiosXHR<T10>]>,
        all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
            values: [T1 | Axios$IPromise<Axios$AxiosXHR<T1 >> , T2 | Axios$IPromise<Axios$AxiosXHR<T2 >> , T3 | Axios$IPromise<Axios$AxiosXHR<T3 >> , T4 | Axios$IPromise<Axios$AxiosXHR<T4 >> , T5 | Axios$IPromise<Axios$AxiosXHR<T5 >> , T6 | Axios$IPromise<Axios$AxiosXHR<T6 >> , T7 | Axios$IPromise<Axios$AxiosXHR<T7 >> , T8 | Axios$IPromise<Axios$AxiosXHR<T8 >> , T9 | Axios$IPromise<Axios$AxiosXHR<T9 >> ]): Axios$IPromise<[Axios$AxiosXHR<T1>, Axios$AxiosXHR<T2>, Axios$AxiosXHR<T3>, Axios$AxiosXHR<T4>, Axios$AxiosXHR<T5>, Axios$AxiosXHR<T6>, Axios$AxiosXHR<T7>, Axios$AxiosXHR<T8>, Axios$AxiosXHR<T9>]>,
        all<T1, T2, T3, T4, T5, T6, T7, T8>(
            values: [T1 | Axios$IPromise<Axios$AxiosXHR<T1 >> , T2 | Axios$IPromise<Axios$AxiosXHR<T2 >> , T3 | Axios$IPromise<Axios$AxiosXHR<T3 >> , T4 | Axios$IPromise<Axios$AxiosXHR<T4 >> , T5 | Axios$IPromise<Axios$AxiosXHR<T5 >> , T6 | Axios$IPromise<Axios$AxiosXHR<T6 >> , T7 | Axios$IPromise<Axios$AxiosXHR<T7 >> , T8 | Axios$IPromise<Axios$AxiosXHR<T8 >> ]): Axios$IPromise<[Axios$AxiosXHR<T1>, Axios$AxiosXHR<T2>, Axios$AxiosXHR<T3>, Axios$AxiosXHR<T4>, Axios$AxiosXHR<T5>, Axios$AxiosXHR<T6>, Axios$AxiosXHR<T7>, Axios$AxiosXHR<T8>]>,
        all<T1, T2, T3, T4, T5, T6, T7>(
            values: [T1 | Axios$IPromise<Axios$AxiosXHR<T1 >> , T2 | Axios$IPromise<Axios$AxiosXHR<T2 >> , T3 | Axios$IPromise<Axios$AxiosXHR<T3 >> , T4 | Axios$IPromise<Axios$AxiosXHR<T4 >> , T5 | Axios$IPromise<Axios$AxiosXHR<T5 >> , T6 | Axios$IPromise<Axios$AxiosXHR<T6 >> , T7 | Axios$IPromise<Axios$AxiosXHR<T7 >> ]): Axios$IPromise<[Axios$AxiosXHR<T1>, Axios$AxiosXHR<T2>, Axios$AxiosXHR<T3>, Axios$AxiosXHR<T4>, Axios$AxiosXHR<T5>, Axios$AxiosXHR<T6>, Axios$AxiosXHR<T7>]>,
        all<T1, T2, T3, T4, T5, T6>(
            values: [T1 | Axios$IPromise<Axios$AxiosXHR<T1 >> , T2 | Axios$IPromise<Axios$AxiosXHR<T2 >> , T3 | Axios$IPromise<Axios$AxiosXHR<T3 >> , T4 | Axios$IPromise<Axios$AxiosXHR<T4 >> , T5 | Axios$IPromise<Axios$AxiosXHR<T5 >> , T6 | Axios$IPromise<Axios$AxiosXHR<T6 >> ]): Axios$IPromise<[Axios$AxiosXHR<T1>, Axios$AxiosXHR<T2>, Axios$AxiosXHR<T3>, Axios$AxiosXHR<T4>, Axios$AxiosXHR<T5>, Axios$AxiosXHR<T6>]>,
        all<T1, T2, T3, T4, T5>(
            values: [T1 | Axios$IPromise<Axios$AxiosXHR<T1 >> , T2 | Axios$IPromise<Axios$AxiosXHR<T2 >> , T3 | Axios$IPromise<Axios$AxiosXHR<T3 >> , T4 | Axios$IPromise<Axios$AxiosXHR<T4 >> , T5 | Axios$IPromise<Axios$AxiosXHR<T5 >> ]): Axios$IPromise<[Axios$AxiosXHR<T1>, Axios$AxiosXHR<T2>, Axios$AxiosXHR<T3>, Axios$AxiosXHR<T4>, Axios$AxiosXHR<T5>]>,
        all<T1, T2, T3, T4>(
            values: [T1 | Axios$IPromise<Axios$AxiosXHR<T1 >> , T2 | Axios$IPromise<Axios$AxiosXHR<T2 >> , T3 | Axios$IPromise<Axios$AxiosXHR<T3 >> , T4 | Axios$IPromise<Axios$AxiosXHR<T4 >> ]): Axios$IPromise<[Axios$AxiosXHR<T1>, Axios$AxiosXHR<T2>, Axios$AxiosXHR<T3>, Axios$AxiosXHR<T4>]>,
        all<T1, T2, T3>(
            values: [T1 | Axios$IPromise<Axios$AxiosXHR<T1 >> , T2 | Axios$IPromise<Axios$AxiosXHR<T2 >> , T3 | Axios$IPromise<Axios$AxiosXHR<T3 >> ]): Axios$IPromise<[Axios$AxiosXHR<T1>, Axios$AxiosXHR<T2>, Axios$AxiosXHR<T3>]>,
        all<T1, T2>(
            values: [T1 | Axios$IPromise<Axios$AxiosXHR<T1 >> , T2 | Axios$IPromise<Axios$AxiosXHR<T2 >> ]): Axios$IPromise<[Axios$AxiosXHR<T1>, Axios$AxiosXHR<T2>]>,

        /**
         * spread array parameter to `fn`.
         * note: alternative to `spread`, destructuring assignment.
         */
        spread<T1, T2, U>(fn: (t1: T1, t2: T2) => U): (arr: ([T1, T2])) => U,

        /**
         * convenience alias, method = GET
         */
        get<T>(
            url: string,
            config?: Axios$AxiosXHRConfigBase<T>): Axios$IPromise<Axios$AxiosXHR<T >> ,

        /**
         * convenience alias, method = DELETE
         */
        delete<T>(
            url: string,
            config?: Axios$AxiosXHRConfigBase<T>): Axios$IPromise<Axios$AxiosXHR<T >> ,

        /**
         * convenience alias, method = HEAD
         */
        head<T>(
            url: string,
            config?: Axios$AxiosXHRConfigBase<T>): Axios$IPromise<Axios$AxiosXHR<T >> ,

        /**
         * convenience alias, method = POST
         */
        post<T>(
            url: string,
            data?: any,
            config?: Axios$AxiosXHRConfigBase<T>): Axios$IPromise<Axios$AxiosXHR<T >> ,

        /**
         * convenience alias, method = PUT
         */
        put<T>(
            url: string,
            data?: any,
            config?: Axios$AxiosXHRConfigBase<T>): Axios$IPromise<Axios$AxiosXHR<T >> ,

        /**
         * convenience alias, method = PATCH
         */
        patch<T>(
            url: string,
            data?: any,
            config?: Axios$AxiosXHRConfigBase<T>): Axios$IPromise<Axios$AxiosXHR<T >>
}


/**
 * <T> - expected response type,
 */
declare type Axios$AxiosStatic = {

    /**
     * create a new instance of axios with a custom config
     */
    create<T>(config: Axios$AxiosXHRConfigBase<T>): Axios$AxiosInstance
} & Axios$AxiosInstance
declare
var axios: Axios$AxiosStatic;
declare module 'axios' {
    declare module.exports: typeof axios
}