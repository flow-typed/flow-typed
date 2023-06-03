declare module 'axios' {
  import type { Agent as HttpAgent } from 'http';
  import type { Agent as HttpsAgent } from 'https';

  declare type AxiosTransformer<T> = (
    data: T,
    headers?: { [key: string]: mixed, ...},
  ) => mixed;

  declare type ProxyConfig = {|
    host: string,
    port: number,
    auth?: {|
      username: string,
      password: string,
    |},
    protocol?: string,
  |};

  declare type Canceler = (message?: string) => void;

  declare type CancelTokenSource = {|
    token: CancelToken,
    cancel: Canceler,
  |};

  declare class CancelToken {
    constructor(executor: (cancel: Canceler) => void): void;
    static source(): CancelTokenSource;
    promise: Promise<Cancel<mixed>>;
    reason?: Cancel<mixed>;
    throwIfRequested(): void;
  }

  declare type Method =
    | 'get'
    | 'GET'
    | 'delete'
    | 'DELETE'
    | 'head'
    | 'HEAD'
    | 'options'
    | 'OPTIONS'
    | 'post'
    | 'POST'
    | 'put'
    | 'PUT'
    | 'patch'
    | 'PATCH';

  declare type ResponseType =
    | 'arraybuffer'
    | 'blob'
    | 'document'
    | 'json'
    | 'text'
    | 'stream';

  declare type AxiosAdapter = (
    config: AxiosXHRConfig<mixed>
  ) => Promise<AxiosXHR<mixed>>;

  declare type AxiosXHRConfigBase<T, R = T> = {
    adapter?: AxiosAdapter,
    auth?: {|
      username: string,
      password: string,
    |},
    baseURL?: string,
    cancelToken?: CancelToken,
    headers?: { [key: string]: mixed, ...},
    httpAgent?: HttpAgent,
    httpsAgent?: HttpsAgent,
    maxContentLength?: number,
    maxRedirects?: number,
    socketPath?: string | null,
    params?: { [key: string]: mixed, ...},
    paramsSerializer?: (params: { [key: string]: mixed, ...}) => string,
    onUploadProgress?: (progressEvent: ProgressEvent) => void,
    onDownloadProgress?: (progressEvent: ProgressEvent) => void,
    proxy?: ProxyConfig | false,
    responseType?: ResponseType,
    timeout?: number,
    transformRequest?: AxiosTransformer<T> | Array<AxiosTransformer<T>>,
    transformResponse?: AxiosTransformer<R> | Array<AxiosTransformer<R>>,
    validateStatus?: (status: number) => boolean,
    withCredentials?: boolean,
    xsrfCookieName?: string,
    xsrfHeaderName?: string,
    ...
  };

  declare type AxiosXHRConfig<T, R = T> = {
    ...$Exact<AxiosXHRConfigBase<T, R>>,
    data?: T,
    method?: Method,
    url: string,
    ...
  };

  declare type AxiosXHRConfigShape<T, R = T> = Partial<AxiosXHRConfig<T, R>>;

  declare type AxiosXHR<T, R = T> = {|
    config: AxiosXHRConfig<T, R>,
    data: R,
    headers: ?{[key: string]: mixed, ...},
    status: number,
    statusText: string,
    request: http$ClientRequest<> | XMLHttpRequest | mixed,
  |};

  declare type AxiosInterceptorIdent = number;

  declare type AxiosRequestInterceptor<T, R = T> = {|
    use(
      onFulfilled: ?(
        response: AxiosXHRConfig<T, R>
      ) => Promise<AxiosXHRConfig<mixed>> | AxiosXHRConfig<mixed>,
      onRejected: ?(error: mixed) => mixed
    ): AxiosInterceptorIdent,
    eject(ident: AxiosInterceptorIdent): void,
  |};

  declare type AxiosResponseInterceptor<T, R = T> = {|
    use(
      onFulfilled: ?(response: AxiosXHR<T, R>) => mixed,
      onRejected: ?(error: mixed) => mixed
    ): AxiosInterceptorIdent,
    eject(ident: AxiosInterceptorIdent): void,
  |};

  declare type AxiosPromise<T, R = T> = Promise<AxiosXHR<T, R>>;

  declare class Axios {
    <T, R>(
      config: AxiosXHRConfig<T, R> | string,
      config?: AxiosXHRConfigShape<T, R>
    ): AxiosPromise<T, R>;
    constructor<T, R>(config?: AxiosXHRConfigBase<T, R>): void;
    request<T, R>(
      config: AxiosXHRConfig<T, R> | string,
      config?: AxiosXHRConfigShape<T, R>
    ): AxiosPromise<T, R>;
    delete<R>(
      url: string,
      config?: AxiosXHRConfigBase<mixed, R>
    ): AxiosPromise<mixed, R>;
    get<R>(
      url: string,
      config?: AxiosXHRConfigBase<mixed, R>
    ): AxiosPromise<mixed, R>;
    head<R>(
      url: string,
      config?: AxiosXHRConfigBase<mixed, R>
    ): AxiosPromise<mixed, R>;
    options<R>(
      url: string,
      config?: AxiosXHRConfigBase<mixed, R>
    ): AxiosPromise<mixed, R>;
    post<T, R>(
      url: string,
      data?: T,
      config?: AxiosXHRConfigBase<T, R>
    ): AxiosPromise<T, R>;
    put<T, R>(
      url: string,
      data?: T,
      config?: AxiosXHRConfigBase<T, R>
    ): AxiosPromise<T, R>;
    patch<T, R>(
      url: string,
      data?: T,
      config?: AxiosXHRConfigBase<T, R>
    ): AxiosPromise<T, R>;
    interceptors: {|
      request: AxiosRequestInterceptor<mixed>,
      response: AxiosResponseInterceptor<mixed>,
    |};
    defaults: {|
      ...$Exact<AxiosXHRConfigBase<mixed>>,
      headers: { [key: string]: mixed, ...},
    |};
    getUri<T, R>(config?: AxiosXHRConfig<T, R>): string;
  }

  declare class AxiosError<T, R = T> extends Error {
    static ERR_NETWORK: string;
    static ERR_BAD_OPTION_VALUE: string;
    static ERR_BAD_OPTION: string;
    static ECONNABORTED: string;
    static ETIMEDOUT: string;
    static ERR_NETWORK: string;
    static ERR_FR_TOO_MANY_REDIRECTS: string;
    static ERR_DEPRECATED: string;
    static ERR_BAD_RESPONSE: string;
    static ERR_BAD_REQUEST: string;
    static ERR_CANCELED: string;

    config: AxiosXHRConfig<T, R>;
    request?: http$ClientRequest<> | XMLHttpRequest;
    response?: AxiosXHR<T, R>;
    code?: string;
    isAxiosError: boolean;
    status?: string;
  }

  declare class CanceledError<T> extends AxiosError<T> {
  }

  declare class Cancel<T> extends AxiosError<T> {
  }

  declare interface AxiosExport extends Axios {
    <T, R>(
      config: AxiosXHRConfig<T, R> | string,
      config?: AxiosXHRConfigShape<T, R>
    ): AxiosPromise<T, R>;
    Axios: typeof Axios;
    AxiosError: typeof AxiosError;
    CanceledError: typeof CanceledError;
    Cancel: typeof Cancel;
    CancelToken: typeof CancelToken;
    isCancel(value: mixed): boolean;
    create<T, R>(config?: AxiosXHRConfigBase<T, R>): Axios;
    all: typeof Promise.all;
    spread<T, R>(callback: (...args: T) => R): (array: T) => R;
    toFormData: (
      obj: { [key: string]: any, ... },
      formData?: FormData,
    ) => FormData;
  }

  declare type $AxiosXHRConfigBase<T, R = T> = AxiosXHRConfigBase<T, R>;

  declare type $AxiosXHRConfig<T, R = T> = AxiosXHRConfig<T, R>;

  declare type $AxiosXHR<T, R = T> = AxiosXHR<T, R>;

  declare type $AxiosError<T, R = T> = AxiosError<T, R>;

  declare module.exports: AxiosExport;
}
