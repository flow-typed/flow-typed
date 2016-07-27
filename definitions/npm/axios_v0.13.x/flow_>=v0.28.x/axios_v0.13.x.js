declare module 'axios' {
  declare interface AxiosXHRConfigBase<T> {
    adapter?: <T>(config: AxiosXHRConfig<T>) => Promise<AxiosXHR<T>>;
    auth?: {
        username: string,
        password: string
    };
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    progress?: (progressEvent: Event) => void | mixed;
    maxContentLength?: number;
    maxRedirects?: 5,
    headers?: Object;
    maxContentLength?: number;
    params?: Object;
    paramsSerializer?: (params: Object) => string;
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
    transformReponse?: Array<<U>(data: T) => U>;
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
  declare class Axios {
    constructor<T>(config?: AxiosXHRConfigBase<T>): Promise<T>;
    request<T>(config: AxiosXHRConfig<T>): Promise<T>;
    delete: <T>(url: string, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    get: <T>(url: string, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    head: <T>(url: string, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    post: <T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    put: <T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>) => Promise<T>;
    patch: <T>(url: string, data?: mixed, config?: AxiosXHRConfigBase<T>) => Promise<T>;
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

  declare class AxiosExport extends Axios {
      Axios: Class<Axios>;
      create<T>(defaultConfig?: AxiosXHRConfigBase<T>): Axios<T>;
      all: typeof Promise.all;
      spread(callback: Function): (arr: Array<any>) => Function
  }
  declare module.exports: AxiosExport;
}
