

declare module 'node-fetch' {
					declare module.exports: FetchStatic


}

declare module '_fetch' {
	declare type RequestContext = "audio" | "beacon" | "cspreport" | "download" | "embed" | "eventsource" | "favicon" | "fetch" | "font" | "form" | "frame" | "hyperlink" | "iframe" | "image" | "imageset" | "import" | "internal" | "location" | "manifest" | "object" | "ping" | "plugin" | "prefetch" | "script" | "serviceworker" | "sharedworker" | "subresource" | "style" | "track" | "video" | "worker" | "xmlhttprequest" | "xslt";

	declare type RequestMode = "same-origin" | "no-cors" | "cors";

	declare type RequestRedirect = "follow" | "error" | "manual";

	declare type RequestCredentials = "omit" | "same-origin" | "include";

	declare type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";

	declare type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";

	declare type HeaderInit = Headers | Array<string>;

	declare type BodyInit = ArrayBuffer | ArrayBufferView | Blob | FormData | string;

	declare type RequestInfo = Request | string;

	declare interface RequestInit {
		method?: string,
		headers?: HeaderInit | {
		[index: string]: string
	},
		body?: BodyInit,
		mode?: RequestMode,
		redirect?: RequestRedirect,
		credentials?: RequestCredentials,
		cache?: RequestCache
	}

	declare interface ResponseInit {
		status: number,
		statusText?: string,
		headers?: HeaderInit
	}

	declare interface FetchStatic {
		(url: string | Request, init?: RequestInit): Promise<Response>
	}

		declare class Request extends Body {
		constructor(input: string | Request, init?: RequestInit): this;
		method: string;
		url: string;
		headers: Headers;
		context: RequestContext;
		referrer: string;
		mode: RequestMode;
		redirect: RequestRedirect;
		credentials: RequestCredentials;
		cache: RequestCache
	}

	declare class Headers  {
		append(name: string, value: string): void;
		delete(name: string): void;
		get(name: string): string;
		getAll(name: string): Array<string>;
		has(name: string): boolean;
		set(name: string, value: string): void;
		forEach(callback: (value: string, name: string) => void): void
	}

	declare class Body  {
		bodyUsed: boolean;
		arrayBuffer(): Promise<ArrayBuffer>;
		blob(): Promise<Blob>;
		formData(): Promise<FormData>;
		json(): Promise<any>;
		json<T>(): Promise<T>;
		text(): Promise<string>
	}

	declare class Response extends Body {
		constructor(body?: BodyInit, init?: ResponseInit): this;
		error(): Response;
		redirect(url: string, status: number): Response;
		type: ResponseType;
		url: string;
		status: number;
		ok: boolean;
		statusText: string;
		headers: Headers;
		clone(): Response
	}

	
}