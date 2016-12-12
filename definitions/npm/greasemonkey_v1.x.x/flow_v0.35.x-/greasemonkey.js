

declare module 'greasemonkey' {
		declare interface GMXMLHttpRequestOptions {
		binary?: boolean,
		context?: any,
		data?: string,
		headers?: Object,
		method: string,
		onabort?: (response: GMXMLHttpRequestResponse) => any,
		onerror?: (response: GMXMLHttpRequestResponse) => any,
		onload?: (response: GMXMLHttpRequestResponse) => any,
		onprogress?: (response: GMXMLHttpRequestProgressResponse) => any,
		onreadystatechange?: (response: GMXMLHttpRequestResponse) => any,
		ontimeout?: (response: GMXMLHttpRequestResponse) => any,
		overrideMimeType?: string,
		password?: string,
		synchronous?: boolean,
		timeout?: number,
		upload?: {
		onabort?: (response: GMXMLHttpRequestResponse) => any,
		onerror?: (response: GMXMLHttpRequestResponse) => any,
		onload?: (response: GMXMLHttpRequestResponse) => any,
		onprogress?: (response: GMXMLHttpRequestProgressResponse) => any
	},
		url: string,
		user?: string
	}

	declare interface GMXMLHttpRequestResponse {
		readyState: number,
		responseHeaders: string,
		responseText: string,
		status: number,
		statusText: string,
		context: any,
		finalUrl: string
	}

	declare interface GMXMLHttpRequestProgressResponse {
		lengthComputable: boolean,
		loaded: number,
		total: number
	}

	declare interface GMXMLHttpRequestAsyncResult {
		abort(): void
	}

	declare interface GMXMLHttpRequestSyncResult {
		abort(): void,
		finalUrl: string,
		readyState: number,
		responseHeaders: string,
		responseText: string,
		status: number,
		statusText: string
	}

	declare interface GMXMLHttpRequestResult {
		
	}

	declare function GM_deleteValue(name: string): void

	declare function GM_getValue(name: string, defaultValue?: any): any

	declare function GM_getValue(name: string, defaultValue?: string): string

	declare function GM_getValue(name: string, defaultValue?: number): number

	declare function GM_getValue(name: string, defaultValue?: boolean): boolean

	declare function GM_listValues(): string[]

	declare function GM_setValue(name: string, value: string): void

	declare function GM_setValue(name: string, value: boolean): void

	declare function GM_setValue(name: string, value: number): void

	declare function GM_getResourceText(resourceName: string): string

	declare function GM_getResourceURL(resourceName: string): string

	declare function GM_addStyle(css: string): void

	declare function GM_log(message: any): void

	declare function GM_openInTab(url: string): Window

	declare function GM_registerMenuCommand(caption: string, commandFunc: Function, accessKey?: string): void

	declare function GM_setClipboard(text: string): void

	declare function GM_xmlhttpRequest(options: GMXMLHttpRequestOptions): GMXMLHttpRequestResult

		
}