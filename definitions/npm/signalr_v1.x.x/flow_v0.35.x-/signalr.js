

declare module 'signalr' {
		declare interface SignalR {
		(url: string, queryString?: string | Object, logging?: boolean): SignalR.Connection,
		ajaxDefaults: SignalR.AjaxDefaults,
		changeState(connection: SignalR.Connection, expectedState: number, newState: number): void,
		connectionState: SignalR.ConnectionStates,
		events: SignalR.AvailableEvents,
		transports: SignalR.Transports,
		hub: SignalR.Hub.Connection,
		hubConnection: SignalR.Hub.HubCreator,
		isDisconnecting(connection: SignalR.Connection): boolean,
		noConflict(): SignalR.Connection,
		version: string
	}

	declare interface JQueryStatic {
		signalR: SignalR,
		connection: SignalR,
		hubConnection: SignalR.Hub.HubCreator
	}

			
}

declare module 'npm$namespace$SignalR' {
		declare interface AvailableEvents {
		onStart: string,
		onStarting: string,
		onReceived: string,
		onError: string,
		onConnectionSlow: string,
		onReconnect: string,
		onStateChanged: string,
		onDisconnect: string
	}

	declare interface Transport {
		name: string,
		supportsKeepAlive(): boolean,
		send(connection: SignalR.Connection, data: any): void,
		start(
		connection: SignalR.Connection, onSuccess: () => void, onFailed: (error?: ConnectionError) => void
	): void,
		reconnect(connection: SignalR.Connection): void,
		lostConnection(connection: SignalR.Connection): void,
		stop(connection: SignalR.Connection): void,
		abort(connection: SignalR.Connection, async: boolean): void
	}

	declare interface Transports {
		foreverFrame: Transport,
		longPolling: Transport,
		serverSentEvents: Transport,
		webSockets: Transport
	}

	declare interface StateChanged {
		oldState: number,
		newState: number
	}

	declare interface ConnectionStates {
		connecting: number,
		connected: number,
		reconnecting: number,
		disconnected: number
	}

	declare interface Resources {
		nojQuery: string,
		noTransportOnInit: string,
		errorOnNegotiate: string,
		stoppedWhileLoading: string,
		stoppedWhileNegotiating: string,
		errorParsingNegotiateResponse: string,
		errorDuringStartRequest: string,
		stoppedDuringStartRequest: string,
		errorParsingStartResponse: string,
		invalidStartResponse: string,
		protocolIncompatible: string,
		sendFailed: string,
		parseFailed: string,
		longPollFailed: string,
		eventSourceFailedToConnect: string,
		eventSourceError: string,
		webSocketClosed: string,
		pingServerFailedInvalidResponse: string,
		pingServerFailed: string,
		pingServerFailedStatusCode: string,
		pingServerFailedParse: string,
		noConnectionTransport: string,
		webSocketsInvalidState: string,
		reconnectTimeout: string,
		reconnectWindowTimeout: string
	}

	declare interface AjaxDefaults {
		processData: boolean,
		timeout: number,
		async: boolean,
		global: boolean,
		cache: boolean
	}

	declare interface ConnectionOptions {
		transport?: string | Array<string> | Transport,
		callback?: Function,
		waitForPageLoad?: boolean,
		jsonp?: boolean,
		pingInterval?: number
	}

	declare interface SimplifyLocation {
		protocol: string,
		host: string
	}

	declare interface ConnectionErrorContext {
		readyState: number,
		responseText: string,
		status: number,
		statusText: string
	}

	declare interface ConnectionError {
		context: ConnectionErrorContext,
		transport?: string,
		source?: string
	}

	declare interface Connection {
		clientProtocol: string,
		ajaxDataType: string,
		contentType: string,
		id: string,
		json: JSON,
		logging: boolean,
		url: string,
		qs: string | Object,
		state: number,
		reconnectDelay: number,
		transportConnectTimeout: number,
		disconnectTimeout: number,
		reconnectWindow: number,
		keepAliveWarnAt: number,
		start(): JQueryPromise<any>,
		start(callback: () => void): JQueryPromise<any>,
		start(options: ConnectionOptions): JQueryPromise<any>,
		start(options: ConnectionOptions, callback: () => void): JQueryPromise<any>,
		starting(callback: () => void): Connection,
		send(data: string): Connection,
		received(callback: (data: any) => void): Connection,
		stateChanged(callback: (change: StateChanged) => void): Connection,
		error(callback: (error: ConnectionError) => void): Connection,
		disconnected(callback: () => void): Connection,
		connectionSlow(callback: () => void): Connection,
		reconnecting(callback: () => void): Connection,
		reconnected(callback: () => void): Connection,
		stop(async?: boolean, notifyServer?: boolean): Connection,
		log(msg: string): Connection,
		isCrossDomain(url: string, against?: Location | SimplifyLocation): boolean,
		hub: Hub.Connection,
		lastError: ConnectionError,
		resources: Resources
	}

			
}

declare module 'Hub' {
		declare interface Proxy {
		state: any,
		connection: Connection,
		hubName: string,
		init(connection: Connection, hubName: string): void,
		hasSubscriptions(): boolean,
		on(eventName: string, callback: (...msg: any[]) => void): Proxy,
		off(eventName: string, callback: (...msg: any[]) => void): Proxy,
		invoke(methodName: string, ...args: any[]): JQueryPromise<any>
	}

	declare interface Options {
		qs?: string,
		logging?: boolean,
		useDefaultPath?: boolean
	}

	declare interface ClientHubInvocation {
		Hub: string,
		Method: string,
		Args: string,
		State: string
	}

	declare interface Connection {
		proxies: {
		[hubName: string]: any
	},
		transport: {
		name: string,
		supportsKeepAlive: () => boolean
	},
		createHubProxy(hubName: string): Proxy
	}

	declare interface HubCreator {
		(url?: string, options?: Options): Connection
	}

	declare interface IHub {
		start(): void
	}

			
}