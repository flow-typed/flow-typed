declare module 'axios' {
  declare interface AxiosXHRConfigBase<T> {
    adapter?: <T>(config: AxiosXHRConfig<T>) => Promise<AxiosXHR<T>>;
    auth?: {
        username: string,
        password: string
    };
    baseURL?: string,
    progress?: (progressEvent: Event) => void | mixed;
    maxContentLength?: number;
    maxRedirects?: 5,
    headers?: Object;
    params?: Object;
    paramsSerializer?: (params: Object) => string;
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
    transformResponse?: Array<<U>(data: T) => U>;
    transformRequest?: Array<<U>(data: T) => U|Array<<U>(data: T) => U>>;
    timeout?: number;
    validateStatus?: (status: number) => boolean,
    withCredentials?: boolean;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    httpAgent?: mixed; // Missing the type in the core flow node libdef
    httpsAgent?: mixed; // Missing the type in the core flow node libdef
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
      create(config?: AxiosXHRConfigBase<any>): Axios;
      all: typeof Promise.all;
      spread(callback: Function): (arr: Array<any>) => Function
  }
  declare module.exports: AxiosExport;
}
