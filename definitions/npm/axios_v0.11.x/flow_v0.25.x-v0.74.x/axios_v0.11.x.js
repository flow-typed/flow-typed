declare module "axios" {
  declare interface AxiosXHRConfigBase {
    headers?: Object;
    maxContentLength?: number;
    params?: Object;
    responseType?:
      | "arraybuffer"
      | "blob"
      | "document"
      | "json"
      | "text"
      | "stream";
    transformResponse?: <U>(data: mixed) => U;
    transformRequest?: <U>(data: mixed) => U | Array<<U>(data: mixed) => U>;
    validateStatus?: ?(status: number) => boolean;
    withCredentials?: boolean;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
  }
  declare interface AxiosXHRConfig extends AxiosXHRConfigBase {
    data?: mixed;
    method?: string;
    url: string;
  }
  declare class AxiosXHR {
    config: AxiosXHRConfig;
    data: mixed;
    headers: Object;
    status: number;
    statusText: string;
    request: mixed; //this is the request object, not really typed currently.
  }
  declare class AxiosInterceptorIdent extends String {}
  declare class AxiosRequestInterceptor {
    use(
      successHandler: ?(
        response: AxiosXHRConfig
      ) => Promise<AxiosXHRConfig> | AxiosXHRConfig,
      errorHandler: ?(error: mixed) => mixed
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare class AxiosResponseInterceptor {
    use(
      successHandler: ?(response: AxiosXHR) => mixed,
      errorHandler: ?(error: mixed) => mixed
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare class Axios {
    constructor(config: AxiosXHRConfigBase): Promise<AxiosXHR>;
    (config: AxiosXHRConfigBase): Promise<AxiosXHR>;
    get: (url: string, config?: AxiosXHRConfigBase) => Promise<AxiosXHR>;
    delete: (url: string, config?: AxiosXHRConfigBase) => Promise<AxiosXHR>;
    head: (url: string, config?: AxiosXHRConfigBase) => Promise<AxiosXHR>;
    post: (
      url: string,
      data?: mixed,
      config?: AxiosXHRConfigBase
    ) => Promise<AxiosXHR>;
    put: (
      url: string,
      data?: mixed,
      config?: AxiosXHRConfigBase
    ) => Promise<AxiosXHR>;
    interceptors: {
      request: AxiosRequestInterceptor<mixed>,
      response: AxiosResponseInterceptor<mixed>
    };
  }
  declare module.exports: Axios;
}
