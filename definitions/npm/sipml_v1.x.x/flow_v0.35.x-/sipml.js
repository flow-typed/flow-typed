

declare module 'sipml' {
					
}

declare module 'npm$namespace$SIPml' {
			declare function getNavigatorFriendlyName(): string

	declare function getNavigatorVersion(): string

	declare function getSystemFriendlyName(): string

	declare function getWebRtc4AllVersion(): string

	declare function haveMediaStream(): boolean

	declare function init(readyCallback?: (e: any) => any, errorCallback?: (e: any) => any): boolean

	declare function isInitialized(): boolean

	declare function isNavigatorOutdated(): boolean

	declare function isReady(): boolean

	declare function isScreenShareSupported(): boolean

	declare function isWebRtcPluginOutdated(): boolean

	declare function isWebRtc4AllSupported(): boolean

	declare function isWebRtcSupported(): boolean

	declare function isWebSocketSupported(): boolean

	declare function setDebugLevel(level: string): void

	declare function setWebRtcType(type: string): boolean

	declare class Event  {
		description: string;
		type: string;
		getContent(): Object;
		getContentString(): string;
		getContentType(): Object;
		getSipResponseCode(): number
	}

	declare class EventTarget<EventSubscriptionType, EventType>  {
		addEventListener(type: EventSubscriptionType, listener: (e: EventType) => void): void;
		removeEventListener(type: EventSubscriptionType): void
	}

	declare class Session extends EventTarget<Session.EventSubscriptionType, Session.Event> {
		accept(configuration?: Session.Configuration): number;
		getId(): number;
		getRemoteFriendlyName(): string;
		getRemoteUri(): string;
		reject(configuration?: Session.Configuration): number;
		setConfiguration(configuration?: Session.Configuration): void
	}

	declare class Stack extends EventTarget<Stack.EventSubscriptionType, Stack.Event> {
		constructor(configuration?: Stack.Configuration): this;
		setConfiguration(configuration: Stack.Configuration): number;
		newSession(type: string, configuration?: Session.Configuration): any;
		start(): number;
		stop(timeout?: number): number
	}

	
}

declare module 'Session' {
	declare type EventSubscriptionType = string;

	declare interface Configuration {
		audio_remote?: HTMLElement,
		bandwidth?: {
		audio: number,
		video: number
	},
		events_listener?: {
		events: EventSubscriptionType | EventSubscriptionType[],
		listener: (e: Session.Event) => void
	},
		expires?: number,
		from?: string,
		sip_caps?: Object[],
		sip_headers?: Object[],
		video_local?: HTMLElement,
		video_remote?: HTMLElement,
		video_size?: {
		minWidth?: number,
		maxWidth?: number,
		minHeight?: number,
		maxHeight?: number
	}
	}

		declare class Call extends Session, EventTarget<Call.EventSubscriptionType, Session.Event> {
		acceptTransfer(configuration?: Session.Configuration): number;
		call(to: string, configuration?: Session.Configuration): number;
		dtmf(): number;
		hangup(configuration?: Session.Configuration): number;
		hold(configuration?: Session.Configuration): number;
		info(): number;
		rejectTransfer(): number;
		resume(): number;
		transfer(): number
	}

	declare class Event extends SIPml$Event {
		session: Session;
		getTransferDestinationFriendlyName(): string
	}

	declare class Message extends Session {
		send(
		to: string, content?: any, contentType?: string, configuration?: Session.Configuration
	): number
	}

	declare class Publish extends Session {
		publish(
		content?: any, contentType?: string, configuration?: Session.Configuration
	): number;
		unpublish(configuration?: Session.Configuration): void
	}

	declare class Registration extends Session {
		register(configuration?: Session.Configuration): void;
		unregister(configuration?: Session.Configuration): void
	}

	declare class Subscribe extends Session, EventTarget<Subscribe.EventSubscriptionType, Session.Event> {
		subscribe(to: string, configuration?: Session.Configuration): number;
		unsubscribe(configuration?: Session.Configuration): number
	}

	
}

declare module 'Call' {
	declare type EventSubscriptionType = Session.EventSubscriptionType;

				
}

declare module 'Subscribe' {
	declare type EventSubscriptionType = Session.EventSubscriptionType;

				
}

declare module 'Stack' {
	declare type EventSubscriptionType = string;

	declare interface Configuration {
		bandwidth?: {
		audio: number,
		video: number
	},
		display_name?: string,
		enable_click2call?: boolean,
		enable_early_ims?: boolean,
		enable_media_stream_cache?: boolean,
		enable_rtcweb_breaker?: boolean,
		events_listener?: {
		events: EventSubscriptionType | EventSubscriptionType[],
		listener: (e: Stack.Event) => void
	},
		ice_servers?: Object[],
		impi?: string,
		impu?: string,
		outbound_proxy_url?: string,
		password?: string,
		realm?: string,
		sip_headers?: Object[],
		video_size?: {
		minWidth?: number,
		maxWidth?: number,
		minHeight?: number,
		maxHeight?: number
	},
		websocket_proxy_url?: string
	}

		declare class Event extends SIPml$Event {
		description: string;
		newSession: Session;
		type: string
	}

	
}