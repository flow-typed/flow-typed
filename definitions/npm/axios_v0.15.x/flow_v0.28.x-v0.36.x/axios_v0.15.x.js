declare module 'axios' {
  declare interface ProxyConfig {
    host: string;
    port: number;
  }
  declare interface Cancel {
    constructor(message?: string): Cancel;
    message: string;
  }
  declare interface Canceler {
    (message?: string): void;
  }
  declare interface CancelTokenSource {
    token: CancelToken;
    cancel: Canceler;
  }
  declare interface CancelToken {
    constructor(executor: (cancel: Canceler) => void): CancelToken;
    static source(): CancelTokenSource;
    promise: Promise<Cancel>;
    reason?: Cancel;
    throwIfRequested(): void;
  }
  declare interface AxiosXHRConfigBase<T> {
    adapter?: <T>(config: AxiosXHRConfig<T>) => Promise<AxiosXHR<T>>;
    auth?: {
      username: string,
      password: string
    };
    baseURL?: string,
    cancelToken?: CancelToken;
    headers?: Object;
    httpAgent?: mixed; // Missing the type in the core flow node libdef
    httpsAgent?: mixed; // Missing the type in the core flow node libdef
    maxContentLength?: number;
    maxRedirects?: 5,
    params?: Object;
    paramsSerializer?: (params: Object) => string;
    progress?: (progressEvent: Event) => void | mixed;
    proxy?: ProxyConfig;
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
    timeout?: number;
    transformRequest?: Array<<U>(data: T) => U|Array<<U>(data: T) => U>>;
    transformResponse?: Array<<U>(data: T) => U>;
    validateStatus?: (status: number) => boolean,
    withCredentials?: boolean;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
  }
  declare type $AxiosXHRConfigBase<T> = AxiosXHRConfigBase<T>;
  declare interface AxiosXHRConfig<T> extends AxiosXHRConfigBase<T> {
    data?: T;
    method?: string;
    url: string;
  }
  declare type $AxiosXHRConfig<T> = AxiosXHRConfig<T>;
  declare class AxiosXHR<T> {
    config: AxiosXHRConfig<T>;
    data: T;
    headers: Object;
    status: number;
    statusText: string,
    request: http$ClientRequest | XMLHttpRequest
  }
  declare type $AxiosXHR<T> = $AxiosXHR<T>;
  declare class AxiosInterceptorIdent extends String {}
  declare class AxiosRequestInterceptor<T> {
    use(
      successHandler: ?(response: AxiosXHRConfig<T>) => Promise<AxiosXHRConfig<*>> | AxiosXHRConfig<*>,
      errorHandler: ?(error: mixed) => mixed,
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare class AxiosResponseInterceptor<T> {
    use(
      successHandler: ?(response: AxiosXHR<T>) => mixed,
      errorHandler: ?(error: mixed) => mixed,
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare type AxiosPromise<T> = Promise<AxiosXHR<T>>;
  declare class Axios {
    constructor<T>(config?: AxiosXHRConfigBase<T>): void;
    <T>(config: AxiosXHRConfig<T>): AxiosPromise<T>;
    <T>(url: string, config?: AxiosXHRConfig<T>): AxiosPromise<T>;
    request<T>(config: AxiosXHRConfig<T>): AxiosPromise<T>;
    delete<T>(url: string, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    get<T>(url: string, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    head<T>(url: string, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    post<T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    put<T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    patch<T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>): AxiosPromise<T>;
    interceptors: {
      request: AxiosRequestInterceptor<mixed>,
      response: AxiosResponseInterceptor<mixed>,
    };
  }

  declare class AxiosError<T> extends Error {
    config: AxiosXHRConfig<T>;
    response: AxiosXHR<T>;
    code?: string;
  }

  declare type $AxiosError<T> = AxiosError<T>;

  declare interface AxiosExport extends Axios {
    Axios: typeof Axios;
    Cancel: Class<Cancel>;
    CancelToken: Class<CancelToken>;
    isCancel(value: any): boolean;
    create(config?: AxiosXHRConfigBase<any>): Axios;
    all: typeof Promise.all;
    spread(callback: Function): (arr: Array<any>) => Function
  }
  declare module.exports: AxiosExport;
}
