

declare module 'spdy' {
	declare export type Agent = agent.Agent;

	declare export type PlainAgent = agent.PlainAgent;

	declare export type AgentOptions = agent.AgentOptions;

	declare export type Socket = socket.Socket;

	declare export type Server = server.Server;

	declare export type IncomingMessage = server.IncomingMessage;

	declare export type ServerRequest = server.IncomingMessage;

	declare export type ServerResponse = server.ServerResponse;

	declare export type PlainServer = server.PlainServer;

	declare export type ServerOptions = server.ServerOptions;

	declare export interface Handle {
		create(options: Object, stream: any, socket: Socket): Handle,
		getStream(callback?: Function): any,
		assignSocket(socket: Socket, options: Object): void,
		assignClientRequest(req: any): void,
		assignRequest(req: any): void,
		assignResponse(res: any): void,
		emitRequest(): void,
		emitResponse(status: any, headers: any): void
	}

	declare export function createAgent(base: any, options: AgentOptions): Agent | PlainAgent

	declare export function createAgent(options: AgentOptions): Agent | PlainAgent

	declare export function createServer(
		base: any, options: ServerOptions, handler: (request: IncomingMessage, response: ServerResponse) => void
	): Server

	declare export function createServer(
		options: ServerOptions, handler: (request: IncomingMessage, response: ServerResponse) => void
	): Server

	declare export function createServer(handler: (request: IncomingMessage, response: ServerResponse) => void): Server

		
}

declare module 'agent' {
		declare export interface AgentOptions {
		port?: number,
		spdy?: {
		plain?: boolean,
		ssl?: boolean,
		x-forwarded-for?: string,
		protocol?: string,
		protocols?: string[]
	}
	}

	declare export function create(base: any, options: AgentOptions): Agent | PlainAgent

	declare export class Agent extends undefined$Agent {
		
	}

	declare export class PlainAgent extends undefined$Agent {
		
	}

	
}

declare module 'request' {
			declare export function onNewListener(type: string): void

		
}

declare module 'response' {
			declare export function writeHead(statusCode: number, reason: string, obj: Object): void

	declare export function writeHead(statusCode: number, obj: Object): void

	declare export function end(data: any, encoding: string, callback: Function): void

		
}

declare module 'server' {
	declare export type Protocol = "h2" | "spdy/3.1" | "spdy/3" | "spdy/2" | "http/1.1" | "http/1.0";

	declare export interface Server {
		
	}

	declare export interface PlainServer {
		
	}

	declare export interface IncomingMessage {
		
	}

	declare export interface ServerResponse {
		push(filename: string, options: PushOptions): any
	}

	declare export interface PushOptions {
		status?: number,
		method?: string,
		request?: any,
		response?: any
	}

	declare export interface ServerOptions {
		spdy?: {
		protocols?: Protocol[],
		plain?: boolean,
		x-forwarded-for?: boolean,
		connection?: {
		windowSize?: number,
		autoSpdy31?: boolean
	}
	}
	}

	declare export function create(
		base: any, options: node.https.ServerOptions, handler: (request: IncomingMessage, response: ServerResponse) => void
	): Server

	declare export function create(
		options: node.https.ServerOptions, handler: (request: IncomingMessage, response: ServerResponse) => void
	): Server

	declare export function create(handler: (request: IncomingMessage, response: ServerResponse) => void): Server

		
}

declare module 'http' {
		declare interface Server {
		setTimeout(msecs: number, callback: Function): any,
		maxHeadersCount: number,
		timeout: number,
		listening: boolean
	}

	declare interface AgentOptions {
		keepAlive?: boolean,
		keepAliveMsecs?: number,
		maxSockets?: number,
		maxFreeSockets?: number
	}

	declare export interface IncomingMessage {
		path: string,
		httpVersion: string,
		httpVersionMajor: number,
		httpVersionMinor: number,
		connection: any,
		headers: any,
		rawHeaders: string[],
		trailers: any,
		rawTrailers: any,
		setTimeout(msecs: number, callback: Function): any,
		method?: string,
		url?: string,
		statusCode?: number,
		statusMessage?: string,
		socket: any,
		destroy(error?: Error): void,
		get(name: string): string
	}

	declare export interface ServerResponse {
		write(buffer: any): boolean,
		write(buffer: any, cb?: Function): boolean,
		write(str: string, cb?: Function): boolean,
		write(str: string, encoding?: string, cb?: Function): boolean,
		write(str: string, encoding?: string, fd?: string): boolean,
		writeContinue(): void,
		writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void,
		writeHead(statusCode: number, headers?: any): void,
		statusCode: number,
		statusMessage: string,
		headersSent: boolean,
		setHeader(name: string, value: string | string[]): void,
		setTimeout(msecs: number, callback: Function): ServerResponse,
		sendDate: boolean,
		getHeader(name: string): string,
		removeHeader(name: string): void,
		write(chunk: any, encoding?: string): any,
		addTrailers(headers: any): void,
		finished: boolean,
		end(): void,
		end(buffer: any, cb?: Function): void,
		end(str: string, cb?: Function): void,
		end(str: string, encoding?: string, cb?: Function): void,
		end(data?: any, encoding?: string): void
	}

		declare class Agent  {
		maxSockets: number;
		sockets: any;
		requests: any;
		constructor(opts?: AgentOptions): this;
		destroy(): void
	}

	
}

declare module 'https' {
		declare interface Server {
		close(callback?: Function): Server
	}

	declare interface ServerOptions {
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		crl?: any,
		ciphers?: string,
		honorCipherOrder?: boolean,
		requestCert?: boolean,
		rejectUnauthorized?: boolean,
		NPNProtocols?: any,
		SNICallback?: (servername: string, cb: (err: Error, ctx: tls.SecureContext) => any) => any
	}

	declare interface AgentOptions {
		pfx?: any,
		key?: any,
		passphrase?: string,
		cert?: any,
		ca?: any,
		ciphers?: string,
		rejectUnauthorized?: boolean,
		secureProtocol?: string,
		maxCachedSessions?: number
	}

		declare class Agent extends http$Agent {
		
	}

	
}

declare module 'tls' {
		declare interface Server {
		close(): Server,
		address(): {
		port: number,
		family: string,
		address: string
	},
		addContext(
		hostName: string, credentials: {
		key: string,
		cert: string,
		ca: string
	}
	): void,
		maxConnections: number,
		connections: number,
		addListener(event: string, listener: Function): this,
		addListener(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this,
		addListener(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void
	) => void
	): this,
		addListener(
		event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void
	): this,
		addListener(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		addListener(event: "secureConnection", listener: (tlsSocket: any) => void): this,
		emit(event: string, ...args: any[]): boolean,
		emit(event: "tlsClientError", err: Error, tlsSocket: any): boolean,
		emit(
		event: "newSession", sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void
	): boolean,
		emit(
		event: "OCSPRequest", certificate: any, issuer: any, callback: Function
	): boolean,
		emit(
		event: "resumeSession", sessionId: any, callback: (err: Error, sessionData: any) => void
	): boolean,
		emit(event: "secureConnection", tlsSocket: any): boolean,
		on(event: string, listener: Function): this,
		on(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this,
		on(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void
	) => void
	): this,
		on(
		event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void
	): this,
		on(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		on(event: "secureConnection", listener: (tlsSocket: any) => void): this,
		once(event: string, listener: Function): this,
		once(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this,
		once(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void
	) => void
	): this,
		once(
		event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void
	): this,
		once(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		once(event: "secureConnection", listener: (tlsSocket: any) => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this,
		prependListener(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void
	) => void
	): this,
		prependListener(
		event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void
	): this,
		prependListener(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		prependListener(event: "secureConnection", listener: (tlsSocket: any) => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "tlsClientError", listener: (err: Error, tlsSocket: any) => void): this,
		prependOnceListener(
		event: "newSession", listener: (
		sessionId: any, sessionData: any, callback: (err: Error, resp: any) => void
	) => void
	): this,
		prependOnceListener(
		event: "OCSPRequest", listener: (certificate: any, issuer: any, callback: Function) => void
	): this,
		prependOnceListener(
		event: "resumeSession", listener: (sessionId: any, callback: (err: Error, sessionData: any) => void) => void
	): this,
		prependOnceListener(event: "secureConnection", listener: (tlsSocket: any) => void): this
	}

	declare interface SecureContext {
		context: any
	}

			
}

declare module 'net' {
		declare interface Server {
		listen(
		port: number, hostname?: string, backlog?: number, listeningListener?: Function
	): Server,
		listen(port: number, hostname?: string, listeningListener?: Function): Server,
		listen(port: number, backlog?: number, listeningListener?: Function): Server,
		listen(port: number, listeningListener?: Function): Server,
		listen(path: string, backlog?: number, listeningListener?: Function): Server,
		listen(path: string, listeningListener?: Function): Server,
		listen(handle: any, backlog?: number, listeningListener?: Function): Server,
		listen(handle: any, listeningListener?: Function): Server,
		listen(options: ListenOptions, listeningListener?: Function): Server,
		close(callback?: Function): Server,
		address(): {
		port: number,
		family: string,
		address: string
	},
		getConnections(cb: (error: Error, count: number) => void): void,
		ref(): Server,
		unref(): Server,
		maxConnections: number,
		connections: number,
		addListener(event: string, listener: Function): this,
		addListener(event: "close", listener: () => void): this,
		addListener(event: "connection", listener: (socket: Socket) => void): this,
		addListener(event: "error", listener: (err: Error) => void): this,
		addListener(event: "listening", listener: () => void): this,
		emit(event: string, ...args: any[]): boolean,
		emit(event: "close"): boolean,
		emit(event: "connection", socket: Socket): boolean,
		emit(event: "error", err: Error): boolean,
		emit(event: "listening"): boolean,
		on(event: string, listener: Function): this,
		on(event: "close", listener: () => void): this,
		on(event: "connection", listener: (socket: Socket) => void): this,
		on(event: "error", listener: (err: Error) => void): this,
		on(event: "listening", listener: () => void): this,
		once(event: string, listener: Function): this,
		once(event: "close", listener: () => void): this,
		once(event: "connection", listener: (socket: Socket) => void): this,
		once(event: "error", listener: (err: Error) => void): this,
		once(event: "listening", listener: () => void): this,
		prependListener(event: string, listener: Function): this,
		prependListener(event: "close", listener: () => void): this,
		prependListener(event: "connection", listener: (socket: Socket) => void): this,
		prependListener(event: "error", listener: (err: Error) => void): this,
		prependListener(event: "listening", listener: () => void): this,
		prependOnceListener(event: string, listener: Function): this,
		prependOnceListener(event: "close", listener: () => void): this,
		prependOnceListener(event: "connection", listener: (socket: Socket) => void): this,
		prependOnceListener(event: "error", listener: (err: Error) => void): this,
		prependOnceListener(event: "listening", listener: () => void): this
	}

	declare interface ListenOptions {
		port?: number,
		host?: string,
		backlog?: number,
		path?: string,
		exclusive?: boolean
	}

			
}

declare module 'socket' {
		declare export interface Socket {
		
	}

			
}