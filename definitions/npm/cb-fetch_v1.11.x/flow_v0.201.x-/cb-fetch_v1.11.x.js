declare module 'cb-fetch' {

    declare module.exports: typeof request;

    declare type RequestBody =
      | BodyInit
      | Document

    declare type Type =
      |             'arraybuffer'
      | 'moz-chunked-arraybuffer'
      |             'blob'
      |         'moz-blob'
      |             'document'
      |       'msxml-document'
      |             'formdata'
      |             'json'
      |             'text'
      | 'moz-chunked-text'

    declare type Parameters =
      | string
      | { [string]: ?string | string[], ... }
      | URLSearchParams

    declare type RequestURL =
      | string
      | URL

    declare type RequestOptions = {|
      url: RequestURL;
      method: string;
      headers: HeadersInit;
      parameters: Parameters;
      body: RequestBody;
      credentials: CredentialsType;
      mode: ModeType;
      responseType: Type;
      responseMediaType: string;
      timeout: number;
      username: string;
      password: string;
      multipart: boolean;
      tunneling: boolean;
      XSLPattern: boolean;
    |}

    declare type JSONValue = null | void | string | number | boolean | $Shape<{ [string]: JSONValue, ... }> | Array<JSONValue>
    declare class AnonXMLHttpRequest extends XMLHttpRequest {}

    declare type NormalizedResponse<T> = {|
      body: JSONValue | Blob | Document | FormData | ReadableStream | ArrayBuffer;
      headers: { [string]: string, ... } | T;
      instance: XMLHttpRequest | XDomainRequest | Response | AnonXMLHttpRequest;
      statusCode?: number;
      statusText?: string;
      url?: string;
    |}

    declare type ProgressEvent = {|
      chunk: string | ArrayBuffer | Blob | Uint8Array | null;
      aggregate: string | ArrayBuffer | Blob | Uint8Array | null;
      loaded: number;
      total: number;
      lengthComputable: boolean;
    |}

    declare type onSuccess = (response: NormalizedResponse<empty>) => any;
    declare type onError   = (response: NormalizedResponse<void>) => any;
    declare type Abort     = () => void

    declare interface Done {
      (onSuccess?: onSuccess, onError?: onError): Abort;
      (callbacks?: {|
        success?: onSuccess,
        error?:   onError,
        timeout?: () => any,
        abort?:   (event?: Event) => any
      |}): Abort;
    }

    declare interface Pass<T> {
      (name: string, value: string): T;
      (headers?: HeadersInit)      : T;
    }

    declare interface Hook<T> {
      (name: "loadstart", handler: () => boolean | void)         : T;
      (name: "download",  handler: (event: ProgressEvent) => any): T;
      (name: "loadend",   handler: () => any)                    : T;
    }

    declare class Common {
      hook: Hook<this>;
      pass: Pass<this>;
      done: Done;
    }

    declare class Querier extends Common {
      query: (parameters?: Parameters) => Common;
    }

    declare class Sender extends Common {
      send: (body?: RequestBody) => Common;
    }

    declare type Verb<T> = (url?: RequestURL) => T

    declare class Methods extends Common {
      get: Verb<Querier>;
      delete: Verb<Querier>;
      head: Verb<Querier>;
      post: Verb<Sender>;
      put: Verb<Sender>;
      patch: Verb<Sender>;
    }

    declare function request(options?: $Shape<RequestOptions>): Methods
    declare function request(url?: RequestURL): Methods

  }
