import type { Agent } from "http";
import type { URLSearchParams } from "url";

declare module 'node-fetch' {
  declare export class Request extends Body {
    constructor(input: string | { href: string } | Request, init?: RequestInit): this;
    clone(): Request;
    context: RequestContext;
    headers: HeaderInit;
    method: string;
    redirect: RequestRedirect;
    referrer: string;
    url: string;

    // node-fetch extensions to the whatwg/fetch spec
    agent?: Agent;
    compress: boolean;
    counter: number;
    follow: number;
    hostname: string;
    port?: number;
    protocol: string;
    size: number;
    timeout: number;
  }

  declare interface RequestInit {
    // whatwg/fetch standard options
    body?: BodyInit;
    headers?: HeaderInit;
    method?: string;
    redirect?: RequestRedirect;

    // node-fetch extensions
    agent?: Agent; // =null http.Agent instance, allows custom proxy, certificate etc.
    compress?: boolean; // =true support gzip/deflate content encoding. false to disable
    follow?: number; // =20 maximum redirect count. 0 to not follow redirect
    size?: number; // =0 maximum response body size in bytes. 0 to disable
    timeout?: number; // =0 req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)

    // node-fetch does not support mode, cache or credentials options
  }

  declare type RequestContext =
    "audio"
    | "beacon"
    | "cspreport"
    | "download"
    | "embed"
    | "eventsource"
    | "favicon"
    | "fetch"
    | "font"
    | "form"
    | "frame"
    | "hyperlink"
    | "iframe"
    | "image"
    | "imageset"
    | "import"
    | "internal"
    | "location"
    | "manifest"
    | "object"
    | "ping"
    | "plugin"
    | "prefetch"
    | "script"
    | "serviceworker"
    | "sharedworker"
    | "style"
    | "subresource"
    | "track"
    | "video"
    | "worker"
    | "xmlhttprequest"
    | "xslt";

  declare type RequestRedirect = "error"
    | "follow"
    | "manual";

  declare export class Headers {
    constructor(init?: Headers | { [k: string]: string }): this;
    forEach(callback: (value: string, name: string) => void): void;
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    raw(): { [k: string]: string[] };
    set(name: string, value: string): void;

    // Iterator methods
    entries(): Iterator<[string, string]>;
    keys(): Iterator<string>;
    values(): Iterator<[string]>;
    @@iterator(): Iterator<[string, string]>;
  }

  declare class Blob {
    type: string;
    size: number;
    slice(start?: number, end?: number): Blob;
  }

  declare export class Body {
    constructor(body?: any, opts?: { size?: number; timeout?: number }): this;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Buffer>;
    body: stream$Readable;
    bodyUsed: boolean;
    buffer(): Promise<Buffer>;
    json(): Promise<any>;
    json<T>(): Promise<T>;
    text(): Promise<string>;
    textConverted(): Promise<string>;
  }

  declare export class Response extends Body {
    constructor(body?: BodyInit, init?: ResponseInit): this;
    static error(): Response;
    static redirect(url: string, status: number): Response;
    clone(): Response;
    headers: Headers;
    ok: boolean;
    size: number;
    status: number;
    statusText: string;
    timeout: number;
    type: ResponseType;
    url: string;
  }

  declare type ResponseType =
    "basic"
    | "cors"
    | "default"
    | "error"
    | "opaque"
    | "opaqueredirect";

  declare interface ResponseInit {
    headers?: HeaderInit;
    status: number;
    statusText?: string;
  }

  declare type HeaderInit = { [index: string]: string } | Headers;
  declare type BodyInit = string | ArrayBuffer | ReadableStream | URLSearchParams;

  declare export default function fetch(url: string | Request, init?: RequestInit): Promise<Response>;
}
