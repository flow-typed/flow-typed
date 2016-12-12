

declare module 'socket.io-client' {
		declare interface SocketIOClientStatic {
		(uri: string, opts?: SocketIOClient.ConnectOpts): SocketIOClient.Socket,
		(opts?: SocketIOClient.ConnectOpts): SocketIOClient.Socket,
		connect(uri: string, opts?: SocketIOClient.ConnectOpts): SocketIOClient.Socket,
		connect(opts?: SocketIOClient.ConnectOpts): SocketIOClient.Socket,
		protocol: number,
		Socket: SocketIOClient.Socket,
		Manager: SocketIOClient.ManagerStatic
	}

			declare module.exports: SocketIOClientStatic


}

declare module 'npm$namespace$SocketIOClient' {
		declare interface Emitter {
		on(event: string, fn: Function): Emitter,
		addEventListener(event: string, fn: Function): Emitter,
		once(event: string, fn: Function): Emitter,
		off(event: string, fn?: Function): Emitter,
		removeListener(event: string, fn?: Function): Emitter,
		removeEventListener(event: string, fn?: Function): Emitter,
		removeAllListeners(): Emitter,
		emit(event: string, ...args: any[]): Emitter,
		listeners(event: string): Function[],
		hasListeners(event: string): boolean
	}

	declare interface SocketStatic {
		(io: SocketIOClient.Manager, nsp: string): Socket,
		new (url: string, opts: any): SocketIOClient.Manager
	}

	declare interface Socket {
		io: SocketIOClient.Manager,
		nsp: string,
		id: string,
		connected: boolean,
		disconnected: boolean,
		open(): Socket,
		connect(): Socket,
		send(...args: any[]): Socket,
		emit(event: string, ...args: any[]): Socket,
		close(): Socket,
		disconnect(): Socket,
		compress(compress: boolean): Socket
	}

	declare interface ManagerStatic {
		(uri: string, opts?: SocketIOClient.ConnectOpts): SocketIOClient.Manager,
		(opts: SocketIOClient.ConnectOpts): SocketIOClient.Manager,
		new (uri: string, opts?: SocketIOClient.ConnectOpts): SocketIOClient.Manager,
		new (opts: SocketIOClient.ConnectOpts): SocketIOClient.Manager
	}

	declare interface Manager {
		nsps: {
		[namespace: string]: Socket
	},
		opts: SocketIOClient.ConnectOpts,
		readyState: string,
		uri: string,
		connecting: Socket[],
		autoConnect: boolean,
		reconnection(): boolean,
		reconnection(v: boolean): Manager,
		reconnectionAttempts(): number,
		reconnectionAttempts(v: number): Manager,
		reconnectionDelay(): number,
		reconnectionDelay(v: number): Manager,
		reconnectionDelayMax(): number,
		reconnectionDelayMax(v: number): Manager,
		randomizationFactor(): number,
		randomizationFactor(v: number): Manager,
		timeout(): number,
		timeout(v: boolean): Manager,
		open(fn?: (err?: any) => void): Manager,
		connect(fn?: (err?: any) => void): Manager,
		socket(nsp: string): Socket
	}

	declare interface ConnectOpts {
		forceNew?: boolean,
		multiplex?: boolean,
		path?: string,
		reconnection?: boolean,
		reconnectionAttempts?: number,
		reconnectionDelay?: number,
		reconnectionDelayMax?: number,
		randomizationFactor?: number,
		timeout?: number,
		autoConnect?: boolean,
		host?: string,
		hostname?: string,
		secure?: boolean,
		port?: string,
		query?: Object,
		agent?: string | boolean,
		upgrade?: boolean,
		forceJSONP?: boolean,
		jsonp?: boolean,
		forceBase64?: boolean,
		enablesXDR?: boolean,
		timestampParam?: string,
		timestampRequests?: boolean,
		transports?: string[],
		policyPost?: number,
		rememberUpgrade?: boolean,
		onlyBinaryUpgrades?: boolean,
		pfx?: string,
		key?: string,
		passphrase?: string,
		cert?: string,
		ca?: string | string[],
		ciphers?: string,
		rejectUnauthorized?: boolean
	}

			
}