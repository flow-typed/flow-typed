

declare module 'mqtt' {
		declare interface Packet {
		messageId: string,
		[key: string]: any
	}

	declare interface Granted {
		topic: string,
		qos: number
	}

	declare interface Topic {
		[topic: string]: number
	}

	declare interface ClientOptions {
		keepalive?: number,
		clientId?: string,
		protocolId?: string,
		protocolVersion?: number,
		clean?: boolean,
		reconnectPeriod?: number,
		connectTimeout?: number,
		username?: string,
		password?: string,
		incomingStore?: Store,
		outgoingStore?: Store,
		will?: {
		topic: string,
		payload: string,
		qos: number,
		retain: boolean
	}
	}

	declare interface SecureClientOptions {
		keyPath?: string,
		certPath?: string,
		rejectUnauthorized?: boolean
	}

	declare interface ClientPublishOptions {
		qos?: number,
		retain?: boolean
	}

	declare interface ClientSubscribeOptions {
		qos?: number
	}

	declare interface ClientSubscribeCallback {
		(err: any, granted: Granted): void
	}

	declare interface Client {
		(streamBuilder: any, options: ClientOptions): Client,
		publish(
		topic: string, message: Buffer, options?: ClientPublishOptions, callback?: Function
	): Client,
		publish(
		topic: string, message: string, options?: ClientPublishOptions, callback?: Function
	): Client,
		subscribe(
		topic: string, options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback
	): Client,
		subscribe(
		topic: string[], options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback
	): Client,
		subscribe(
		topic: Topic, options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback
	): Client,
		unsubscribe(
		topic: string, options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback
	): Client,
		unsubscribe(
		topic: string[], options?: ClientSubscribeOptions, callback?: ClientSubscribeCallback
	): Client,
		end(force?: boolean, callback?: Function): Client,
		handleMessage(packet: Packet, callback: Function): Client
	}

	declare interface Store {
		put(packet: Packet, callback: Function): Store,
		get(packet: Packet, callback: Function): Store,
		createStream(): ReadableStream,
		del(packet: Packet, callback: Function): Store,
		close(callback: Function): void
	}

	declare interface ConnectOptions {
		protocolId?: string,
		protocolVersion?: number,
		keepalive?: number,
		clientId?: string,
		will?: {
		topic: string,
		payload: string,
		qos: number,
		retain: boolean
	},
		clean?: boolean,
		username?: string,
		password?: string
	}

	declare interface ConnectionPublishOptions {
		messageId?: number,
		topic?: string,
		payload?: string,
		qos?: number,
		retain?: boolean
	}

	declare interface Connection {
		connect(options?: ConnectOptions): Connection,
		connack(options?: {
		returnCode: number
	}): Connection,
		publish(options?: ConnectionPublishOptions): Connection
	}

	declare interface Server {
		
	}

	declare function createClient(port?: number, host?: string, options?: ClientOptions): Client

	declare function createSecureClient(port?: number, host?: string, options?: SecureClientOptions): Client

	declare function connect(brokerUrl: string, options?: ClientOptions): Client

	declare function createConnection(port?: number, host?: string, callback?: Function): Connection

	declare function createServer(listener?: Function): Server

	declare function createSecureServer(keyPath: string, certPath: string, listener?: Function): Server

		declare module.exports: undefined


}