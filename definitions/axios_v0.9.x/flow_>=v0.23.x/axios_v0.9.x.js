declare module 'axios' {
  declare interface AxiosXHRConfigBase<T> {
    transformRequest?: <U>(data: T) => U|Array<<U>(data: T) => U>;
    transformReponse?: <U>(data: T) => U;
    headers?: Object;
    params?: Object;
    withCredentials?: boolean;
    responseType?: string;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
  }
  declare interface AxiosXHRConfig<T> extends AxiosXHRConfigBase<T> {
    url: string;
    method?: string;
    data?: T;
  }
  declare class AxiosXHR<T> {
    data: T;
    status: number;
    statusText: string,
    headers: Object;
    config: AxiosXHRConfig<T>;
  }
  declare class AxiosInterceptorIdent extends String {}
  declare class AxiosRequestInterceptor<T> {
    use(
      successHandler: ?(response: AxiosXHRConfig<T>) => Promise<AxiosXHRConfig> | AxiosXHRConfig,
      errorHandler: ?(error: any) => any,
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare class AxiosResponseInterceptor<T> {
    use(
      successHandler: ?(response: AxiosXHR<T>) => any,
      errorHandler: ?(error: any) => any,
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare class Axios {
    constructor<T>(config: AxiosXHRConfigBase<T>): Promise<T>;
    <T>(config: AxiosXHRConfigBase<T>): Promise<T>;
    [key: $Enum<Axios>]: Function;
    get: <T>(url: string, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    delete: <T>(url: string, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    head: <T>(url: string, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    post: <T>(url: string, data?: any, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    put: <T>(url: string, data?: any, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    interceptors: {
      request: AxiosRequestInterceptor<any>,
      response: AxiosResponseInterceptor<any>,
    },
  }
  declare var exports: Axios;
}
