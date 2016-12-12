

declare module 'socket.io' {
		declare interface SocketIOStatic {
		(): SocketIO.Server,
		(srv: any, opts?: SocketIO.ServerOptions): SocketIO.Server,
		(port: string | number, opts?: SocketIO.ServerOptions): SocketIO.Server,
		(opts: SocketIO.ServerOptions): SocketIO.Server,
		listen: SocketIOStatic
	}

			declare module.exports: SocketIOStatic


}

declare module 'npm$namespace$SocketIO' {
		declare interface Server {
		engine: {
		ws: any
	},
		nsps: {
		[namespace: string]: Namespace
	},
		sockets: Namespace,
		json: Server,
		checkRequest(req: any, fn: (err: any, success: boolean) => void): void,
		serveClient(): boolean,
		serveClient(v: boolean): Server,
		path(): string,
		path(v: string): Server,
		adapter(): any,
		adapter(v: any): Server,
		origins(): string,
		origins(v: string): Server,
		attach(srv: any, opts?: ServerOptions): Server,
		attach(port: number, opts?: ServerOptions): Server,
		listen(srv: any, opts?: ServerOptions): Server,
		listen(port: number, opts?: ServerOptions): Server,
		bind(srv: any): Server,
		onconnection(socket: any): Server,
		of(nsp: string): Namespace,
		close(): void,
		on(event: "connection", listener: (socket: Socket) => void): Namespace,
		on(event: "connect", listener: (socket: Socket) => void): Namespace,
		on(event: string, listener: Function): Namespace,
		to(room: string): Namespace,
		in(room: string): Namespace,
		use(fn: (socket: Socket, fn: (err?: any) => void) => void): Namespace,
		emit(event: string, ...args: any[]): Namespace,
		send(...args: any[]): Namespace,
		write(...args: any[]): Namespace,
		clients(...args: any[]): Namespace,
		compress(...args: any[]): Namespace
	}

	declare interface ServerOptions {
		path?: string,
		serveClient?: boolean,
		adapter?: Adapter,
		origins?: string,
		pingTimeout?: number,
		pingInterval?: number,
		maxHttpBufferSize?: number,
		allowRequest?: (request: any, callback: (err: number, success: boolean) => void) => void,
		transports?: string[],
		allowUpgrades?: boolean,
		perMessageDeflate?: Object | boolean,
		httpCompression?: Object | boolean,
		cookie?: string | boolean
	}

	declare interface Namespace {
		name: string,
		server: Server,
		sockets: {
		[id: string]: Socket
	},
		connected: {
		[id: string]: Socket
	},
		adapter: Adapter,
		json: Namespace,
		use(fn: (socket: Socket, fn: (err?: any) => void) => void): Namespace,
		to(room: string): Namespace,
		in(room: string): Namespace,
		send(...args: any[]): Namespace,
		write(...args: any[]): Namespace,
		on(event: "connection", listener: (socket: Socket) => void): this,
		on(event: "connect", listener: (socket: Socket) => void): this,
		on(event: string, listener: Function): this,
		clients(fn: Function): Namespace,
		compress(compress: boolean): Namespace
	}

	declare interface Socket {
		nsp: Namespace,
		server: Server,
		adapter: Adapter,
		id: string,
		request: any,
		client: Client,
		conn: {
		id: string,
		server: any,
		readyState: string,
		remoteAddress: string
	},
		rooms: {
		[id: string]: string
	},
		connected: boolean,
		disconnected: boolean,
		handshake: {
		headers: any,
		time: string,
		address: string,
		xdomain: boolean,
		secure: boolean,
		issued: number,
		url: string,
		query: any
	},
		json: Socket,
		volatile: Socket,
		broadcast: Socket,
		emit(event: string, ...args: any[]): Socket,
		to(room: string): Socket,
		in(room: string): Socket,
		send(...args: any[]): Socket,
		write(...args: any[]): Socket,
		join(name: string, fn?: (err?: any) => void): Socket,
		leave(name: string, fn?: Function): Socket,
		leaveAll(): void,
		disconnect(close?: boolean): Socket,
		on(event: string, fn: Function): Socket,
		addListener(event: string, fn: Function): Socket,
		once(event: string, fn: Function): Socket,
		removeListener(event: string, fn?: Function): Socket,
		removeAllListeners(event?: string): Socket,
		setMaxListeners(n: number): Socket,
		listeners(event: string): Function[],
		compress(compress: boolean): Socket
	}

	declare interface Adapter {
		nsp: Namespace,
		rooms: {
		[room: string]: {
		sockets: {
		[id: string]: boolean
	},
		length: number
	}
	},
		sids: {
		[id: string]: {
		[room: string]: boolean
	}
	},
		add(id: string, room: string, callback?: (err?: any) => void): void,
		del(id: string, room: string, callback?: (err?: any) => void): void,
		delAll(id: string): void,
		broadcast(
		packet: any, opts: {
		rooms?: string[],
		except?: string[],
		flags?: {
		[flag: string]: boolean
	}
	}
	): void
	}

	declare interface Client {
		server: Server,
		conn: {
		id: string,
		server: any,
		readyState: string,
		remoteAddress: string
	},
		id: string,
		request: any,
		sockets: {
		[id: string]: Socket
	},
		nsps: {
		[nsp: string]: Socket
	}
	}

			
}