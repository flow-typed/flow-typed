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
    (callbacks?: {
      success?: onSuccess,
      error?:   onError,
      timeout?: () => any,
      abort?:   (event?: Event) => any,
      ...
    }): Abort;
  }

  declare type Tail = {|
    hook: Hook;
    done: Done;
  |}

  declare interface Hook {
    (name: "loadstart", handler: () => boolean | void)         : Tail;
    (name: "download",  handler: (event: ProgressEvent) => any): Tail;
    (name: "loadend",   handler: () => any)                    : Tail;
  }

  declare type Querier = {|
    query: (parameters?: Parameters) => Tail,
    ...Tail
  |}

  declare type Sender = {|
    send: (body?: RequestBody) => Tail,
    ...Tail
  |}

  declare type Verb<T> = (url?: RequestURL) => T

  declare type Methods = {|
    get: Verb<Querier>,
    delete: Verb<Querier>,
    head: Verb<Querier>,
    post: Verb<Sender>,
    put: Verb<Sender>,
    patch: Verb<Sender>,
    ...Tail
  |}

  declare function request(options?: $Shape<RequestOptions>): Methods
  declare function request(url?: RequestURL): Methods

}