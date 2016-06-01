declare module 'axios' {
  declare interface AxiosXHRConfigBase<T> {
    headers?: Object;
    maxContentLength?: number;
    params?: Object;
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
    transformReponse?: <U>(data: T) => U;
    transformRequest?: <U>(data: T) => U|Array<<U>(data: T) => U>;
    validateStatus?: ?(status: number) => bool,
    withCredentials?: boolean;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
  }
  declare interface AxiosXHRConfig<T> extends AxiosXHRConfigBase<T> {
    data?: T;
    method?: string;
    url: string;
  }
  declare class AxiosXHR<T> {
    config: AxiosXHRConfig<T>;
    data: T;
    headers: Object;
    status: number;
    statusText: string,
    request: mixed, //this is the request object, not really typed currently.
  }
  declare class AxiosInterceptorIdent extends String {}
  declare class AxiosRequestInterceptor<T> {
    use(
      successHandler: ?(response: AxiosXHRConfig<T>) => Promise<AxiosXHRConfig> | AxiosXHRConfig,
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
  declare class Axios {
    constructor<T>(config: AxiosXHRConfigBase<T>): Promise<T>;
    <T>(config: AxiosXHRConfigBase<T>): Promise<T>;
    get: <T>(url: string, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    delete: <T>(url: string, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    head: <T>(url: string, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    post: <T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    put: <T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    interceptors: {
      request: AxiosRequestInterceptor<mixed>,
      response: AxiosResponseInterceptor<mixed>,
    },
  }
  declare var exports: Axios;
}
