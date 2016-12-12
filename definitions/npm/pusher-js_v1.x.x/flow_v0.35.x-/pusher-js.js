

declare module 'pusher-js' {
					declare module.exports: PusherStatic


}

declare module 'pusher' {
		declare interface PusherStatic {
		new (apiKey: string, config?: Config): Pusher
	}

	declare interface Pusher {
		subscribe(name: string): Channel,
		subscribeAll(): void,
		unsubscribe(name: string): void,
		channel(name: string): Channel,
		allChannels(): Channel[],
		bind(eventName: string, callback: Function): Pusher,
		bind_all(callback: Function): Pusher,
		disconnect(): void,
		key: string,
		config: Config,
		channels: any,
		global_emitter: EventsDispatcher,
		sessionID: number,
		timeline: any,
		connection: ConnectionManager
	}

	declare interface Config {
		encrypted?: boolean,
		authEndpoint?: string,
		authTransport?: string,
		auth?: AuthConfig,
		cluster?: string,
		disableStats?: boolean,
		enabledTransports?: string[],
		disabledTransports?: string[],
		ignoreNullOrigin?: boolean,
		activityTimeout?: number,
		pongTimeout?: number,
		wsHost?: string,
		wsPort?: number,
		wssPort?: number,
		httpHost?: string,
		httpPort?: number,
		httpsPort?: number
	}

	declare interface AuthConfig {
		params?: {
		[key: string]: any
	},
		headers?: {
		[key: string]: any
	}
	}

	declare interface GenericEventsDispatcher<Self> {
		bind(eventName: string, callback: Function, context?: any): Self,
		bind_all(callback: Function): Self,
		unbind(eventName?: string, callback?: Function, context?: any): Self,
		unbind_all(eventName?: string, callback?: Function): Self,
		emit(eventName: string, data?: any): Self
	}

	declare interface Channel {
		trigger(eventName: string, data?: any): boolean,
		pusher: Pusher,
		name: string,
		subscribed: boolean,
		authorize(socketId: string, callback: (data: any) => void): void
	}

	declare interface EventsDispatcher {
		bind(eventName: string, callback: Function, context?: any): EventsDispatcher,
		bind_all(callback: Function): EventsDispatcher,
		unbind(eventName?: string, callback?: Function, context?: any): EventsDispatcher,
		unbind_all(eventName?: string, callback?: Function): EventsDispatcher,
		emit(eventName: string, data?: any): EventsDispatcher
	}

	declare interface ConnectionManager {
		key: string,
		options: any,
		state: string,
		connection: any,
		encrypted: boolean,
		timeline: any,
		connectionCallbacks: {
		message: (message: string) => void,
		ping: () => void,
		activity: () => void,
		error: (error: any) => void,
		closed: () => void
	},
		errorCallbacks: {
		ssl_only: () => void,
		refused: () => void,
		backoff: () => void,
		retry: () => void
	},
		handshakeCallbacks: {
		ssl_only: () => void,
		refused: () => void,
		backoff: () => void,
		retry: () => void,
		connected: (handshake: any) => void
	},
		connect(): void,
		send(data: string): boolean,
		send_event(name: string, data: string, channel: string): boolean,
		disconnect(): void,
		isEncrypted(): boolean
	}

	declare interface PresenceChannel<T> {
		members: Members<T>
	}

	declare interface Members<T> {
		get(id: number): T,
		each(callback: (member: any) => void): void,
		members: {
		[id: number]: UserInfo<T>
	},
		count: number,
		myID: number,
		me: UserInfo<T>
	}

	declare interface UserInfo<T> {
		id: number,
		info: T
	}

			
}