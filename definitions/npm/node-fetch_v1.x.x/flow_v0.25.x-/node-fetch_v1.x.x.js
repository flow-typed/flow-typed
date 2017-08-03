import type { Gunzip } from 'zlib';

declare type fetch$Redirect = 'follow' | 'error' | 'manual';

declare type fetch$RawHeaders = {
    [string]: Array<string> | string
}

declare type fetch$BodyOptions = {
    size?: number,
    timeout?: number
}

declare type fetch$RequestOptions = {
    method?: string,
    body?: mixed,
    timeout?: number,
    size?: number,
    follow?: number,
    compress?: boolean,
}

declare type fetch$ResponseOptions = {
    size?: number,
    timeout?: number,
    url?: string,
    status?: number,
    statusText?: string,
    headers: fetch$RawHeaders,
    redirect: fetch$Redirect
}

declare type fetch$BlobOptions = {
    type: string
}

declare class fetch$Blob {
    size: number;
    type: string;
    isClosed: boolean;
    constructor(parts: Array<Buffer | ArrayBuffer | fetch$Blob | string>, options?: fetch$BlobOptions): void;
    slice(): fetch$Blob;
    close(): void;
}

declare class fetch$Headers {
    _headers: fetch$RawHeaders;
    constructor(headers: fetch$RawHeaders): void;
    append(name: string, value: string): void;
    delete(name: string): void;
    forEach(callback: (value: string, name: string, header: fetch$Headers) => void, thisArg?: any): void;
    get(name: string): string;
    getAll(name: string): Array<string>;
    has(name: string): boolean;
    raw(): fetch$RawHeaders;
    set(name: string, value: string): void;
}

declare class fetch$Body {
    bodyUsed: boolean,
    body: Gunzip,
    size: number,
    timeout: number,
    text(): Promise<string>,
    buffer(): Promise<Buffer>,
    textConverted(): Promise<string>,
    json(): Promise<any>,
    blob(): Promise<fetch$Blob>,
    arrayBuffer(): Promise<Array<number>>
}

declare class fetch$Response extends fetch$Body {
    ok: boolean;
    headers: fetch$Headers;
    url: string;
    status: number;
    statusText: string;
    constructor(body: string | ReadableStream, options: fetch$ResponseOptions): void;
    clone(): fetch$Response;
}

declare class fetch$Request extends fetch$Body {
    url: string;
    method: string;
    constructor(input: string | fetch$Request, init: fetch$RequestOptions): void;
    clone(): fetch$Request;
}

declare module 'node-fetch' {
    declare export type Headers = fetch$Headers;
    declare export type Response = fetch$Response;
    declare export type Request = fetch$Request;

    declare module.exports: (input: string | fetch$Request, init?: fetch$RequestOptions) => Promise<fetch$Response>;
}
