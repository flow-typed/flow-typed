declare module 'axios' {
  declare interface AxiosXHRConfigBase {
    adapter?: (config: AxiosXHRConfig) => Promise<AxiosXHR>;
    auth?: {
        username: string,
        password: string
    };
    baseURL?: string,
    progress?: (progressEvent: Event) => void | mixed;
    maxContentLength?: number;
    maxRedirects?: number,
    headers?: Object;
    params?: Object;
    paramsSerializer?: (params: Object) => string;
    responseType?: 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
    transformResponse?: Array<<U>(data: mixed) => U>;
    transformRequest?: Array<<U>(data: mixed) => U|Array<<U>(data: mixed) => U>>;
    timeout?: number;
    validateStatus?: (status: number) => boolean,
    withCredentials?: boolean;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    httpAgent?: mixed; // Missing the type in the core flow node libdef
    httpsAgent?: mixed; // Missing the type in the core flow node libdef
  }
  declare type $AxiosXHRConfigBase = AxiosXHRConfigBase;
  declare type AxiosXHRConfig = {
    data?: mixed,
    method?: string,
    url: string,
  } & AxiosXHRConfigBase;
  declare type $AxiosXHRConfig = AxiosXHRConfig;
  declare class AxiosXHR {
    config: AxiosXHRConfig;
    data: mixed;
    headers: Object;
    status: number;
    statusText: string,
    request: http$ClientRequest | XMLHttpRequest
  }
  declare type $AxiosXHR = $AxiosXHR;
  declare class AxiosInterceptorIdent extends String {}
  declare class AxiosRequestInterceptor {
    use(
      successHandler: ?(response: AxiosXHRConfig) => Promise<AxiosXHRConfig> | AxiosXHRConfig,
      errorHandler: ?(error: mixed) => mixed,
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare class AxiosResponseInterceptor {
    use(
      successHandler: ?(response: AxiosXHR) => mixed,
      errorHandler: ?(error: mixed) => mixed,
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare type AxiosPromise = Promise<AxiosXHR>;
  declare class Axios {
    constructor(config?: AxiosXHRConfigBase): void;
    $call: (config: AxiosXHRConfig | string, config?: AxiosXHRConfig) => AxiosPromise;
    request(config: AxiosXHRConfig): AxiosPromise;
    delete(url: string, config?: AxiosXHRConfigBase): AxiosPromise;
    get(url: string, config?: AxiosXHRConfigBase): AxiosPromise;
    head(url: string, config?: AxiosXHRConfigBase): AxiosPromise;
    post(url: string, data?: mixed, config?: AxiosXHRConfigBase): AxiosPromise;
    put(url: string, data?: mixed, config?: AxiosXHRConfigBase): AxiosPromise;
    patch(url: string, data?: mixed, config?: AxiosXHRConfigBase): AxiosPromise;
    interceptors: {
      request: AxiosRequestInterceptor<mixed>,
      response: AxiosResponseInterceptor<mixed>,
    };
  }

  declare class AxiosError extends Error {
    config: AxiosXHRConfig;
    response: AxiosXHR;
    code?: string;
  }

  declare type $AxiosError = AxiosError;

  declare interface AxiosExport extends Axios {
      Axios: typeof Axios;
      create(config?: AxiosXHRConfigBase): Axios;
      all: typeof Promise.all;
      spread(callback: Function): (arr: Array<any>) => Function
  }
  declare module.exports: AxiosExport;
}
