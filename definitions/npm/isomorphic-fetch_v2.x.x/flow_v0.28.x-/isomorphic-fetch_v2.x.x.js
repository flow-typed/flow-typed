
declare module 'isomorphic-fetch' {
    declare export type RequestMode = 'cors' | 'no-cors' | 'cors-with-forced-preflight' | 'same-origin' | 'navigate';
    declare export type RequestCredentials = 'omit' | 'same-origin' | 'include';
    declare export type RequestRedirect = 'follow' | 'error' | 'manual';
    declare export type RequestCache = 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache';
    declare export type ResponseType = 'basic' | 'cors' | 'error' | 'opaque';
    declare export type ReferrerPolicy = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' |
        'origin-when-cross-origin' | 'unsafe-url';

    declare export class Headers {
        Headers(): Headers;
        append(name: string, value: mixed): void;
        delete(name: string): void;
        entries(): Iterator<*>;
        get(name: string): string;
        getAll(name: string): Array<string>;
        has(name: string): Boolean;
        keys(): Iterator<string>;
        set(name: string, value: mixed): void;
        values(): Iterator<*>;
    }

    declare export class Body {
        bodyUsed: Boolean;
        arrayBuffer(): Promise<ArrayBuffer>;
        blob(): Promise<Blob>;
        formData(): Promise<FormData>;
        json(): Promise<JSON>;
        text(): Promise<string>;
    }

    declare export class Request mixins Body {
        Request(): Request;
        clone(): Request;
        method: string;
        url: string;
        headers: Headers;
        referrer: string;
        referrerPolicy: string;
        mode: RequestMode;
        credentials: RequestCredentials;
        redirect: RequestRedirect;
        integrity: string;
        cache: RequestCache;
    }

    declare export type Options = {
        method?: 'GET' | 'POST' | 'PUT' | 'HEAD' | 'OPTIONS' | 'DELETE',
        headers?: Headers,
        body?: Blob | ArrayBuffer | FormData | URLSearchParams | string,
        mode?: RequestMode | Object,
        credentials?: RequestCredentials,
        cache?: RequestCache,
        redirect?: RequestRedirect,
        referrer?: string,
        referrerPolicy?: ReferrerPolicy,
        integrity?: string,
    }

    declare export class Response mixins Body {
        Response(): Response;
        clone(): Response;
        error(): Response;
        redirect(url: string, status?: number): Response;
        headers: Headers;
        ok: Boolean;
        redirected: Boolean;
        status: number;
        statusText: string;
        type: ResponseType;
        url: string;
    }

    declare export default (url: string, options?: Options) => Promise<Response>;
}
