

declare module 'websocket' {
		declare export interface IStringified {
		toString: (...args: any[]) => string
	}

	declare export interface IConfig {
		maxReceivedFrameSize?: number,
		maxReceivedMessageSize?: number,
		fragmentOutgoingMessages?: boolean,
		fragmentationThreshold?: number,
		assembleFragments?: boolean,
		closeTimeout?: number
	}

	declare export interface IServerConfig {
		httpServer: http.Server,
		maxReceivedFrameSize?: number,
		maxReceivedMessageSize?: number,
		keepalive?: boolean,
		keepaliveInterval?: number,
		dropConnectionOnKeepaliveTimeout?: boolean,
		keepaliveGracePeriod?: number,
		autoAcceptConnections?: boolean,
		disableNagleAlgorithm?: boolean
	}

	declare export interface ICookie {
		name: string,
		value: string,
		path?: string,
		domain?: string,
		expires?: Date,
		maxage?: number,
		secure?: boolean,
		httponly?: boolean
	}

	declare export interface IExtension {
		name: string,
		value: string
	}

	declare export interface IMessage {
		type: string,
		utf8Data?: string,
		binaryData?: Buffer
	}

	declare export interface IBufferList {
		encoding: string,
		length: number,
		write(buf: Buffer): boolean,
		end(buf: Buffer): void,
		forEach(fn: (buf: Buffer) => boolean): void,
		join(start: number, end: number): Buffer,
		joinInto(buf: Buffer, offset: number, start: number, end: number): Buffer,
		advance(n: number): IBufferList,
		take(n: number, encoding?: string): any,
		take(encoding?: string): any,
		on(event: string, listener: () => void): this,
		on(event: "advance", cb: (n: number) => void): this,
		on(event: "write", cb: (buf: Buffer) => void): this,
		addListener(event: string, listener: () => void): this,
		addListener(event: "advance", cb: (n: number) => void): this,
		addListener(event: "write", cb: (buf: Buffer) => void): this
	}

	declare export interface IClientConfig {
		webSocketVersion?: number,
		maxReceivedFrameSize?: number,
		maxReceivedMessageSize?: number
	}

	declare interface IRouterConfig {
		server: server
	}

		declare export class server extends events$EventEmitter {
		config: IServerConfig;
		connections: connection[];
		constructor(serverConfig?: IServerConfig): this;
		broadcast(data: Buffer): void;
		broadcast(data: IStringified): void;
		broadcastBytes(data: Buffer): void;
		broadcastUTF(data: IStringified): void;
		mount(serverConfig: IServerConfig): void;
		unmount(): void;
		closeAllConnections(): void;
		shutDown(): void;
		on(event: string, listener: () => void): this;
		on(event: "request", cb: (request: request) => void): this;
		on(event: "connect", cb: (connection: connection) => void): this;
		on(
		event: "close", cb: (connection: connection, reason: number, desc: string) => void
	): this;
		addListener(event: string, listener: () => void): this;
		addListener(event: "request", cb: (request: request) => void): this;
		addListener(event: "connect", cb: (connection: connection) => void): this;
		addListener(
		event: "close", cb: (connection: connection, reason: number, desc: string) => void
	): this
	}

	declare export class request extends events$EventEmitter {
		httpRequest: http.ClientRequest;
		host: string;
		resource: string;
		key: string;
		resourceURL: url.Url;
		remoteAddress: string;
		origin: string;
		webSocketVersion: number;
		requestedExtensions: any[];
		cookies: ICookie[];
		socket: net.Socket;
		requestedProtocols: string[];
		protocolFullCaseMap: {
		[key: string]: string
	};
		constructor(socket: net.Socket, httpRequest: http.ClientRequest, config: IServerConfig): this;
		accept(
		acceptedProtocol?: string, allowedOrigin?: string, cookies?: ICookie[]
	): connection;
		reject(httpStatus?: number, reason?: string, extraHeaders?: Object): void;
		on(event: string, listener: () => void): this;
		on(event: "requestAccepted", cb: (connection: connection) => void): this;
		on(event: "requestRejected", cb: () => void): this;
		addListener(event: string, listener: () => void): this;
		addListener(event: "requestAccepted", cb: (connection: connection) => void): this;
		addListener(event: "requestRejected", cb: () => void): this
	}

	declare class connection extends events$EventEmitter {
		CLOSE_REASON_NORMAL: number;
		CLOSE_REASON_GOING_AWAY: number;
		CLOSE_REASON_PROTOCOL_ERROR: number;
		CLOSE_REASON_UNPROCESSABLE_INPUT: number;
		CLOSE_REASON_RESERVED: number;
		CLOSE_REASON_NOT_PROVIDED: number;
		CLOSE_REASON_ABNORMAL: number;
		CLOSE_REASON_INVALID_DATA: number;
		CLOSE_REASON_POLICY_VIOLATION: number;
		CLOSE_REASON_MESSAGE_TOO_BIG: number;
		CLOSE_REASON_EXTENSION_REQUIRED: number;
		closeDescription: string;
		closeReasonCode: number;
		protocol: string;
		config: IConfig;
		socket: net.Socket;
		maskOutgoingPackets: boolean;
		maskBytes: Buffer;
		frameHeader: Buffer;
		bufferList: IBufferList;
		currentFrame: frame;
		fragmentationSize: number;
		frameQueue: frame[];
		state: string;
		waitingForCloseResponse: boolean;
		closeTimeout: number;
		assembleFragments: number;
		maxReceivedMessageSize: number;
		outputPaused: boolean;
		bytesWaitingToFlush: number;
		socketHadError: boolean;
		extensions: IExtension[];
		remoteAddress: string;
		webSocketVersion: number;
		connected: boolean;
		constructor(socket: net.Socket, extensions: IExtension[], protocol: string, maskOutgoingPackets: boolean, config: IConfig): this;
		close(): void;
		drop(reasonCode?: number, description?: string): void;
		sendUTF(data: IStringified): void;
		sendBytes(buffer: Buffer): void;
		send(data: Buffer): void;
		send(data: IStringified): void;
		ping(data: Buffer): void;
		ping(data: IStringified): void;
		pong(buffer: Buffer): void;
		sendFrame(frame: frame): void;
		setKeepaliveTimer(): void;
		setGracePeriodTimer(): void;
		setCloseTimer(): void;
		clearCloseTimer(): void;
		processFrame(frame: frame): void;
		fragmentAndSend(frame: frame, cb?: (err: Error) => void): void;
		sendCloseFrame(reasonCode: number, reasonText: string, force: boolean): void;
		sendCloseFrame(): void;
		sendFrame(frame: frame, force: boolean, cb?: (msg: string) => void): void;
		sendFrame(frame: frame, cb?: (msg: string) => void): void;
		on(event: string, listener: () => void): this;
		on(event: "message", cb: (data: IMessage) => void): this;
		on(event: "frame", cb: (frame: frame) => void): this;
		on(event: "close", cb: (code: number, desc: string) => void): this;
		on(event: "error", cb: (err: Error) => void): this;
		addListener(event: string, listener: () => void): this;
		addListener(event: "message", cb: (data: IMessage) => void): this;
		addListener(event: "frame", cb: (frame: frame) => void): this;
		addListener(event: "close", cb: (code: number, desc: string) => void): this;
		addListener(event: "error", cb: (err: Error) => void): this
	}

	declare class frame  {
		fin: boolean;
		rsv1: boolean;
		rsv2: boolean;
		rsv3: boolean;
		mask: number;
		opcode: number;
		length: number;
		binaryPayload: Buffer;
		maskBytes: Buffer;
		frameHeader: Buffer;
		config: IConfig;
		maxReceivedFrameSize: number;
		protocolError: boolean;
		frameTooLarge: boolean;
		invalidCloseFrameLength: boolean;
		closeStatus: number;
		addData(bufferList: IBufferList): boolean;
		throwAwayPayload(bufferList: IBufferList): boolean;
		toBuffer(nullMask: boolean): Buffer
	}

	declare class client extends events$EventEmitter {
		protocols: string[];
		origin: string;
		url: url.Url;
		secure: boolean;
		socket: net.Socket;
		response: http.IncomingMessage;
		constructor(clientConfig?: IClientConfig): this;
		connect(
		requestUrl: url.Url, protocols?: string[], origin?: string, headers?: any[]
	): void;
		connect(
		requestUrl: string, protocols?: string[], origin?: string, headers?: any[]
	): void;
		connect(
		requestUrl: url.Url, protocols?: string, origin?: string, headers?: any[]
	): void;
		connect(requestUrl: string, protocols?: string, origin?: string, headers?: any[]): void;
		on(event: string, listener: () => void): this;
		on(event: "connect", cb: (connection: connection) => void): this;
		on(event: "connectFailed", cb: (err: Error) => void): this;
		addListener(event: string, listener: () => void): this;
		addListener(event: "connect", cb: (connection: connection) => void): this;
		addListener(event: "connectFailed", cb: (err: Error) => void): this
	}

	declare class routerRequest extends events$EventEmitter {
		httpRequest: http.ClientRequest;
		resource: string;
		resourceURL: url.Url;
		remoteAddress: string;
		origin: string;
		webSocketVersion: number;
		requestedExtensions: any[];
		cookies: ICookie[];
		constructor(webSocketRequest: request, resolvedProtocol: string): this;
		accept(
		acceptedProtocol?: string, allowedOrigin?: string, cookies?: ICookie[]
	): connection;
		reject(httpStatus?: number, reason?: string): void;
		on(event: string, listener: () => void): this;
		on(event: "requestAccepted", cb: (connection: connection) => void): this;
		on(event: "requestRejected", cb: () => void): this;
		addListener(event: string, listener: () => void): this;
		addListener(event: "requestAccepted", cb: (connection: connection) => void): this;
		addListener(event: "requestRejected", cb: () => void): this
	}

	declare class router extends events$EventEmitter {
		constructor(config?: IRouterConfig): this;
		attachServer(server: server): void;
		detachServer(): void;
		mount(path: string, cb: (request: routerRequest) => void): void;
		mount(path: string, protocol: string, cb: (request: routerRequest) => void): void;
		mount(path: RegExp, cb: (request: routerRequest) => void): void;
		mount(path: RegExp, protocol: string, cb: (request: routerRequest) => void): void;
		unmount(path: string, protocol?: string): void;
		unmount(path: RegExp, protocol?: string): void
	}

	
}