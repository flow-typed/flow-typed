/**
 * Flowtype definitions for isomorphic-fetch
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type RequestType = "" |
    "audio" |
    "font" |
    "image" |
    "script" |
    "style" |
    "track" |
    "video";
declare type RequestDestination = "" |
    "document" |
    "embed" |
    "font" |
    "image" |
    "manifest" |
    "media" |
    "object" |
    "report" |
    "script" |
    "serviceworker" |
    "sharedworker" |
    "style" |
    "worker" |
    "xslt";
declare type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
declare type RequestCredentials = "omit" | "same-origin" | "include";
declare type RequestCache = "default" |
    "no-store" |
    "reload" |
    "no-cache" |
    "force-cache" |
    "only-if-cached";
declare type RequestRedirect = "follow" | "error" | "manual";
declare type ResponseType = "basic" |
    "cors" |
    "default" |
    "error" |
    "opaque" |
    "opaqueredirect";
declare type ReferrerPolicy = "" |
    "no-referrer" |
    "no-referrer-when-downgrade" |
    "same-origin" |
    "origin" |
    "strict-origin" |
    "origin-when-cross-origin" |
    "strict-origin-when-cross-origin" |
    "unsafe-url";
declare interface IHeaders {
    append(name: string, value: string): void,
        delete(name: string): void,
        get(name: string): string,
        getAll(name: string): Array<string>,
        has(name: string): boolean,
        set(name: string, value: string): void,
        forEach(
            callback: (value: string, index: number, headers: IHeaders) => void,
            thisArg?: any): void
}
declare type HeadersInit = Headers | Array<string>| {
    [index: string]: string
};
declare class Headers mixins IHeaders {
    constructor(init?: HeadersInit): this;
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    set(name: string, value: string): void;
    forEach(
        callback: (value: string, index: number, headers: IHeaders) => void,
        thisArg?: any): void
}
declare interface IBody {
    bodyUsed: boolean,
        arrayBuffer(): Promise<ArrayBuffer>,
        blob(): Promise<Blob>,
        formData(): Promise<FormData>,
        json(): Promise<any>,
        json<T>(): Promise<T>,
        text(): Promise<string >
}
declare class Body mixins IBody {
    bodyUsed: boolean;
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Blob>;
    formData(): Promise<FormData>;
    json(): Promise<any>;
    json<T>(): Promise<T>;
    text(): Promise<string >
}
declare type IRequest = {
    method: string,
    url: string,
    headers: IHeaders,
    type: RequestType,
    destination: RequestDestination,
    referrer?: string,
    referrerPolicy?: ReferrerPolicy,
    mode: RequestMode,
    credentials: RequestCredentials,
    cache: RequestCache,
    redirect?: RequestRedirect,
    integrity?: string,
    clone(): IRequest
} & IBody
declare type BodyInit = Blob |
    ArrayBufferView |
    ArrayBuffer |
    FormData |
    string;
declare interface RequestInit {
    method?: string,
        headers?: HeadersInit,
        body?: BodyInit,
        referrer?: string,
        referrerPolicy?: ReferrerPolicy,
        mode?: RequestMode,
        credentials?: RequestCredentials,
        cache?: RequestCache,
        redirect?: RequestRedirect,
        integrity?: string,
        window?: any
}
declare type RequestInfo = IRequest | string;
declare class Request mixins Body, IRequest {
    constructor(input: RequestInfo, init?: RequestInit): this;
    method: string;
    url: string;
    headers: IHeaders;
    type: RequestType;
    destination: RequestDestination;
    referrer: string;
    referrerPolicy: ReferrerPolicy;
    mode: RequestMode;
    credentials: RequestCredentials;
    cache: RequestCache;
    redirect: RequestRedirect;
    integrity: string;
    clone(): IRequest
}
declare type IResponse = {
    type: ResponseType,
    url: string,
    redirected: boolean,
    status: number,
    statusText: string,
    ok: boolean,
    headers: IHeaders,
    body: any,
    trailer: Promise<IHeaders>,
    clone(): IResponse
} & IBody
declare type ResponseBodyInit = BodyInit;
declare interface ResponseInit {
    status?: number,
        statusText?: string,
        headers?: HeadersInit
}
declare class Response mixins Body, IResponse {
    constructor(body?: ResponseBodyInit, init?: ResponseInit): this;
    redirect(url: string, status?: number): IResponse;
    error(): IResponse;
    type: ResponseType;
    url: string;
    redirected: boolean;
    status: number;
    statusText: string;
    ok: boolean;
    headers: IHeaders;
    body: any;
    trailer: Promise<IHeaders>;
    clone(): IResponse
}
declare interface Window {
    fetch(url: RequestInfo, init?: RequestInit): Promise<IResponse >
}
declare
var fetch: typeof undefined;
declare module 'isomorphic-fetch' {
    declare module.exports: typeof fetch
}