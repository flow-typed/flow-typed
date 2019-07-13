declare module 'node-fetch' {
  import type http from 'http';
  import type https from 'https';

  declare export class Request mixins Body {
    constructor(input: string | { href: string } | Request, init?: RequestInit): this;
    context: RequestContext;
    headers: Headers;
    method: string;
    redirect: RequestRedirect;
    referrer: string;
    url: string;

    // node-fetch extensions
    agent: http.Agent | https.Agent;
    compress: boolean;
    counter: number;
    follow: number;
    hostname: string;
    port: number;
    protocol: string;
    size: number;
    timeout: number;
  }

  declare type HeaderObject = {
    [index: string]: string,
  }

  declare interface RequestInit {
    body?: BodyInit,
    headers?: HeaderObject,
    method?: string,
    redirect?: RequestRedirect,
    
    // node-fetch extensions
    agent?: http.Agent | https.Agent,
    compress?: boolean,
    follow?: number,
    size?: number,
    timeout?: number,
  }

  declare type RequestContext =
    'audio' | 'beacon' | 'cspreport' | 'download' | 'embed' |
    'eventsource' | 'favicon' | 'fetch' | 'font' | 'form' | 'frame' |
    'hyperlink' | 'iframe' | 'image' | 'imageset' | 'import' |
    'internal' | 'location' | 'manifest' | 'object' | 'ping' | 'plugin' |
    'prefetch' | 'script' | 'serviceworker' | 'sharedworker' |
    'subresource' | 'style' | 'track' | 'video' | 'worker' |
    'xmlhttprequest' | 'xslt';
  declare type RequestRedirect = 'error' | 'follow' | 'manual';

  declare export class Headers {
    append(name: string, value: string): void;
    delete(name: string): void;
    forEach(callback: (value: string, name: string) => void): void;
    get(name: string): string;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    raw(): { [k: string]: string[] };
    set(name: string, value: string): void;
  }

  declare export class Body {
    buffer(): Promise<Buffer>;
    json(): Promise<any>;
    json<T>(): Promise<T>;
    text(): Promise<string>;
    body: stream$Readable;
    bodyUsed: boolean;
  }

  declare export class Response mixins Body {
    constructor(body?: BodyInit, init?: ResponseInit): this;
    clone(): Response;
    error(): Response;
    redirect(url: string, status: number): Response;
    headers: Headers;
    ok: boolean;
    status: number;
    statusText: string;
    size: number;
    timeout: number;
    type: ResponseType;
    url: string;
  }

  declare type ResponseType =
    | 'basic'
    | 'cors'
    | 'default'
    | 'error'
    | 'opaque'
    | 'opaqueredirect';

  declare interface ResponseInit {
    headers?: HeaderInit,
    status: number,
    statusText?: string,
  }

  declare type HeaderInit = Headers | Array<string>;
  declare type BodyInit = string;

  declare export default function fetch(url: string | Request, init?: RequestInit): Promise<Response>
}
