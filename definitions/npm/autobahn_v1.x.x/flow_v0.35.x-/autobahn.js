

declare module 'autobahn' {
					declare module.exports: undefined


}

declare module 'npm$namespace$autobahn' {
	declare type SubscribeHandler = (args?: any[], kwargs?: any, details?: IEvent) => void;

	declare type RegisterEndpoint = (args?: any[], kwargs?: any, details?: IInvocation) => void;

	declare type DeferFactory = () => When.Promise<any>;

	declare type OnChallengeHandler = (session: Session, method: string, extra: any) => When.Promise<string>;

	declare interface IInvocation {
		caller?: number,
		progress?: (args: any[], kwargs: any) => void,
		procedure: string
	}

	declare interface IEvent {
		publication: number,
		publisher?: number,
		topic: string
	}

	declare interface IResult {
		args: any[],
		kwargs: any
	}

	declare interface IError {
		error: string,
		args: any[],
		kwargs: any
	}

	declare interface ISubscription {
		topic: string,
		handler: SubscribeHandler,
		options: ISubscribeOptions,
		session: Session,
		id: number,
		active: boolean,
		unsubscribe(): When.Promise<any>
	}

	declare interface IRegistration {
		procedure: string,
		endpoint: RegisterEndpoint,
		options: IRegisterOptions,
		session: Session,
		id: number,
		active: boolean,
		unregister(): When.Promise<any>
	}

	declare interface IPublication {
		id: number
	}

	declare interface ICallOptions {
		timeout?: number,
		receive_progress?: boolean,
		disclose_me?: boolean
	}

	declare interface IPublishOptions {
		acknowledge?: boolean,
		exclude?: number[],
		eligible?: number[],
		disclose_me?: Boolean
	}

	declare interface ISubscribeOptions {
		match?: string
	}

	declare interface IRegisterOptions {
		disclose_caller?: boolean
	}

	declare interface ITransportDefinition {
		url?: string,
		protocols?: string[],
		type: string
	}

	declare interface IConnectionOptions {
		use_es6_promises?: boolean,
		use_deferred?: DeferFactory,
		transports?: ITransportDefinition[],
		retry_if_unreachable?: boolean,
		max_retries?: number,
		initial_retry_delay?: number,
		max_retry_delay?: number,
		retry_delay_growth?: number,
		retry_delay_jitter?: number,
		url?: string,
		protocols?: string[],
		onchallenge?: OnChallengeHandler,
		realm?: string,
		authmethods?: string[],
		authid?: string
	}

	declare interface ICloseEventDetails {
		wasClean: boolean,
		reason: string,
		code: number
	}

	declare interface ITransport {
		onopen: () => void,
		onmessage: (message: any[]) => void,
		onclose: (details: ICloseEventDetails) => void,
		send(message: any[]): void,
		close(errorCode: number, reason?: string): void
	}

	declare interface ITransportFactory {
		type: string,
		create(): ITransport
	}

	declare interface ITransports {
		register(name: string, factory: any): void,
		isRegistered(name: string): boolean,
		get(name: string): any,
		list(): string[]
	}

	declare interface ILog {
		debug(...args: any[]): void
	}

	declare interface IUtil {
		assert(condition: boolean, message: string): void
	}

	declare interface IAuthCra {
		derive_key(secret: string, salt: string, iterations: number, keylen: number): string,
		sign(key: string, challenge: string): string
	}

		declare export class Session  {
		id: number;
		realm: string;
		isOpen: boolean;
		features: any;
		caller_disclose_me: boolean;
		publisher_disclose_me: boolean;
		subscriptions: ISubscription[][];
		registrations: IRegistration[];
		constructor(transport: ITransport, defer: DeferFactory, challenge: OnChallengeHandler): this;
		join(realm: string, authmethods: string[], authid: string): void;
		leave(reason: string, message: string): void;
		call<TResult>(
		procedure: string, args?: any[], kwargs?: any, options?: ICallOptions
	): When.Promise<TResult>;
		publish(
		topic: string, args?: any[], kwargs?: any, options?: IPublishOptions
	): When.Promise<IPublication>;
		subscribe(
		topic: string, handler: SubscribeHandler, options?: ISubscribeOptions
	): When.Promise<ISubscription>;
		register(
		procedure: string, endpoint: RegisterEndpoint, options?: IRegisterOptions
	): When.Promise<IRegistration>;
		unsubscribe(subscription: ISubscription): When.Promise<any>;
		unregister(registration: IRegistration): When.Promise<any>;
		prefix(prefix: string, uri: string): void;
		resolve(curie: string): string;
		onjoin: (roleFeatures: any) => void;
		onleave: (reason: string, details: any) => void
	}

	declare class Invocation extends IInvocation {
		constructor(caller?: number, progress?: boolean, procedure?: string): this;
		procedure: string
	}

	declare class Event extends IEvent {
		constructor(publication?: number, publisher?: string, topic?: string): this;
		publication: number;
		topic: string
	}

	declare class Result extends IResult {
		constructor(args?: any[], kwargs?: any): this;
		args: any[];
		kwargs: any
	}

	declare class Error extends IError {
		constructor(error?: string, args?: any[], kwargs?: any): this;
		error: string;
		args: any[];
		kwargs: any
	}

	declare class Subscription extends ISubscription {
		constructor(topic?: string, handler?: SubscribeHandler, options?: ISubscribeOptions, session?: Session, id?: number): this;
		handler: SubscribeHandler;
		unsubscribe(): When.Promise<any>;
		topic: string;
		options: ISubscribeOptions;
		session: Session;
		id: number;
		active: boolean
	}

	declare class Registration extends IRegistration {
		constructor(procedure?: string, endpoint?: RegisterEndpoint, options?: IRegisterOptions, session?: Session, id?: number): this;
		endpoint: RegisterEndpoint;
		unregister(): When.Promise<any>;
		procedure: string;
		options: IRegisterOptions;
		session: Session;
		id: number;
		active: boolean
	}

	declare class Publication extends IPublication {
		constructor(id: number): this;
		id: number
	}

	declare export class Connection  {
		constructor(options?: IConnectionOptions): this;
		open(): void;
		close(reason?: string, message?: string): void;
		onopen: (session: Session, details: any) => void;
		onclose: (reason: string, details: any) => boolean
	}

	
}