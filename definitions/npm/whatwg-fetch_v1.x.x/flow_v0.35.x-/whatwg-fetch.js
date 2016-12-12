

declare module 'whatwg-fetch' {
	declare type HeadersInit = Headers | string[][] | {
		[key: string]: string
	};

	declare type BodyInit = Blob | ArrayBufferView | ArrayBuffer | FormData | string;

	declare type RequestInfo = Request | string;

	declare type RequestType = "" | "audio" | "font" | "image" | "script" | "style" | "track" | "video";

	declare type RequestDestination = "" | "document" | "embed" | "font" | "image" | "manifest" | "media" | "object" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "worker" | "xslt";

	declare type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";

	declare type RequestCredentials = "omit" | "same-origin" | "include";

	declare type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";

	declare type RequestRedirect = "follow" | "error" | "manual";

	declare type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";

	declare type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";

	declare interface Window {
		fetch(url: RequestInfo, init?: RequestInit): Promise<Response>
	}

	declare interface Body {
		bodyUsed: boolean,
		arrayBuffer(): Promise<ArrayBuffer>,
		blob(): Promise<Blob>,
		formData(): Promise<FormData>,
		json(): Promise<any>,
		text(): Promise<string>
	}

	declare interface Request {
		
	}

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

	declare interface Response {
		
	}

	declare interface ResponseInit {
		status?: number,
		statusText?: string,
		headers?: HeadersInit
	}

		declare class Headers  {
		constructor(init?: HeadersInit): this;
		append(name: string, value: string): void;
		delete(name: string): void;
		get(name: string): string;
		has(name: string): boolean;
		set(name: string, value: string): void;
		entries(): IterableIterator<[string, string]>;
		forEach(
		callback: (value: string, index: number, headers: Headers) => void, thisArg?: any
	): void;
		keys(): IterableIterator<string>;
		values(): IterableIterator<string>;
		undefined(): IterableIterator<[string, string]>
	}

	declare class Request  {
		constructor(input: RequestInfo, init?: RequestInit): this;
		method: string;
		url: string;
		headers: Headers;
		type: RequestType;
		destination: RequestDestination;
		referrer: string;
		referrerPolicy: ReferrerPolicy;
		mode: RequestMode;
		credentials: RequestCredentials;
		cache: RequestCache;
		redirect: RequestRedirect;
		integrity: string;
		clone(): Request
	}

	declare class Response  {
		constructor(body?: BodyInit, init?: ResponseInit): this;
		error(): Response;
		redirect(url: string, status?: number): Response;
		type: ResponseType;
		url: string;
		redirected: boolean;
		status: number;
		ok: boolean;
		statusText: string;
		headers: Headers;
		body: ReadableStream;
		trailer: Promise<Headers>;
		clone(): Response
	}

	
}