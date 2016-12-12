

declare module 'angular-websocket' {
					
}

declare module 'websocket' {
	declare type IWebSocketConfigOptions = {
		scope?: ng.IScope,
		rootScopeFailOver?: boolean,
		useApplyAsync?: boolean,
		initialTimeout?: number,
		maxTimeout?: number,
		binaryType?: "blob" | "arraybuffer",
		reconnectIfNotNormalClose?: boolean
	};

	declare type IWebSocketMessageOptions = {
		filter?: string | RegExp,
		autoApply?: boolean
	};

	declare type IWebSocketMessageHandler = {
		fn: (evt: MessageEvent) => void,
		pattern: string | RegExp,
		autoApply: boolean
	};

	declare type IWebSocketQueueItem = {
		message: any,
		defered: ng.IPromise<void>
	};

	declare interface IWebSocketProvider {
		(url: string, protocols?: string | string[] | IWebSocketConfigOptions, options?: IWebSocketConfigOptions): IWebSocket
	}

	declare interface IWebSocket {
		onOpen(callback: (event: Event) => void): IWebSocket,
		onClose(callback: (event: CloseEvent) => void): IWebSocket,
		onError(callback: (event: Event) => void): IWebSocket,
		onMessage(
		callback: (event: MessageEvent) => void, options?: IWebSocketMessageOptions
	): IWebSocket,
		close(force?: boolean): IWebSocket,
		send(data: string | {
		
	}): ng.IPromise<any>,
		socket: WebSocket,
		sendQueue: IWebSocketQueueItem[],
		onOpenCallbacks: ((evt: Event) => void)[],
		onMessageCallbacks: IWebSocketMessageHandler[],
		onErrorCallbacks: ((evt: Event) => void)[],
		onCloseCallbacks: ((evt: CloseEvent) => void)[],
		readyState: number,
		initialTimeout: number,
		maxTimeout: number
	}

			
}