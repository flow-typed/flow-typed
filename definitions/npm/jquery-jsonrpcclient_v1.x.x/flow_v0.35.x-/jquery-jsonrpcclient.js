

declare module 'jquery-jsonrpcclient' {
		declare interface JsonRpcClientOptions {
		ajaxUrl: string,
		headers?: {
		[key: string]: any
	},
		socketUrl?: string,
		onmessage?: (ev: MessageEvent) => void,
		onopen?: (ev: Event) => void,
		onclose?: (ev: CloseEvent) => void,
		onerror?: (ev: Event) => void,
		getSockect?: (onmessageCb: () => void) => WebSocket,
		timeout?: number
	}

	declare interface JsonRpcClient {
		call(
		method: string, params: Object | Array<any>, successCb: (result: any) => void, errorCb: (result: any) => void
	): JQueryDeferred<JQueryXHR>,
		notify(method: string, params: Object | Array<any>): JQueryDeferred<JQueryXHR>,
		batch(
		callback: (batch: JsonRpcClient) => void, allDoneCb: (result: any) => void, errorCb: (error: any) => void
	): void
	}

	declare interface JsonRpcClientFactory {
		new (options?: JsonRpcClientOptions): JsonRpcClient
	}

	declare interface JQueryStatic {
		JsonRpcClient: JsonRpcClientFactory
	}

			
}