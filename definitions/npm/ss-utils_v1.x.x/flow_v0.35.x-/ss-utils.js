

declare module 'ss-utils' {
		declare interface JQuery {
		setFieldError: (name: string, msg: string) => void,
		serializeMap: () => {
		[index: string]: any
	},
		applyErrors: (status: ssutils.ResponseStatus, opt?: ssutils.ApplyErrorsOptions) => JQuery,
		clearErrors: () => JQuery,
		bindForm: (opt?: ssutils.ApplyErrorsOptions) => JQuery,
		applyValues: (values: {
		[index: string]: string
	}) => JQuery,
		bindHandlers: (handlers: {
		[index: string]: Function
	}) => JQuery,
		setActiveLinks: () => JQuery,
		handleServerEvents: (opt?: ssutils.HandleServerEventsOptions) => void
	}

	declare interface JQueryStatic {
		ss: ssutils.Static
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$ssutils' {
		declare interface Static {
		handlers: {
		[index: string]: Function
	},
		onSubmitDisable: string,
		validation: Validation,
		clearAdjacentError: () => void,
		todate: (s: string) => Date,
		todfmt: (s: string) => string,
		dfmt: (d: Date) => string,
		dfmthm: (d: Date) => string,
		tfmt12: (d: Date) => string,
		splitOnFirst: (s: string, delimiter: string) => string[],
		splitOnLast: (s: string, delimiter: string) => string[],
		getSelection: () => string,
		combinePaths: (...paths: string[]) => string,
		queryString: (url: string) => {
		[index: string]: string
	},
		createPath: (route: string, args: any) => string,
		createUrl: (route: string, args: any) => string,
		humanize: (s: string) => string,
		normalizeKey: (key: string) => string,
		normalize: (dto: any, deep?: boolean) => any,
		parseResponseStatus: (json: string, defaultMsg?: string) => any,
		postJSON: (
		url: string, data: Object | String, success?: Function, error?: Function
	) => any,
		listenOn: string,
		eventReceivers: any,
		eventChannels: string[],
		eventSourceUrl: string,
		updateSubscriberUrl: string,
		updateChannels: (channels: string[]) => void,
		updateSubscriber: (
		data: UpdateSubscriberOptions, cb?: (user: SSEUpdate) => void, cbError?: Function
	) => any,
		subscribeToChannels: (channels: string[], cb?: (user: SSEUpdate) => void, cbError?: Function) => any,
		unsubscribeFromChannels: (channels: string[], cb?: (user: SSEUpdate) => void, cbError?: Function) => any,
		reconnectServerEvents: (opt: ReconnectServerEventsOptions) => any
	}

	declare interface Validation {
		overrideMessages: boolean,
		messages: {
		[index: string]: string
	},
		errorFilter: (errorMsg: string, errorCode: string, type: string) => void
	}

	declare interface ValidationOptional {
		overrideMessages?: boolean,
		messages?: {
		[index: string]: string
	},
		errorFilter?: (errorMsg: string, errorCode: string, type: string) => void
	}

	declare interface ApplyErrorsOptions {
		
	}

	declare interface BindFormOptions {
		validation?: ValidationOptional,
		validate?: (form: HTMLFormElement) => boolean,
		onSubmitDisable?: string,
		complete?: (...args: any[]) => void,
		error?: (...args: any[]) => void
	}

	declare interface HandleServerEventsOptions {
		handlers?: {
		[index: string]: Function
	},
		validate?: (op?: string, target?: string, msg?: string, json?: string) => boolean,
		heartbeatUrl?: string,
		heartbeatIntervalMs?: number,
		unRegisterUrl?: string,
		receivers?: {
		[index: string]: any
	},
		success?: (selector: string, msg: string, e: any) => void
	}

	declare interface UpdateSubscriberOptions {
		SubscribeChannels?: string,
		UnsubscribeChannels?: string
	}

	declare interface ResponseStatus {
		errorCode: string,
		message: string,
		stackTrace: string,
		errors: ResponseError[]
	}

	declare interface ResponseError {
		errorCode: string,
		fieldName: string,
		message: string
	}

	declare interface SSECommand {
		userId: string,
		displayName: string,
		channels: string,
		profileUrl: string
	}

	declare interface SSEHeartbeat {
		
	}

	declare interface SSEJoin {
		
	}

	declare interface SSELeave {
		
	}

	declare interface SSEUpdate {
		
	}

	declare interface SSEConnect {
		id: string,
		unRegisterUrl: string,
		heartbeatUrl: string,
		updateSubscriberUrl: string,
		heartbeatIntervalMs: number,
		idleTimeoutMs: number
	}

	declare interface ReconnectServerEventsOptions {
		url?: string,
		onerror?: (...args: any[]) => void,
		onmessage?: (...args: any[]) => void,
		errorArgs?: any[]
	}

	declare interface IEventSourceStatic {
		new (url: string, eventSourceInitDict?: IEventSourceInit): IEventSourceStatic,
		url: string,
		withCredentials: boolean,
		CONNECTING: ReadyState,
		OPEN: ReadyState,
		CLOSED: ReadyState,
		readyState: ReadyState,
		onopen: Function,
		onmessage: (event: IOnMessageEvent) => void,
		onerror: Function,
		close: () => void
	}

	declare interface IEventSourceInit {
		withCredentials?: boolean
	}

	declare interface IOnMessageEvent {
		data: string
	}

			
}