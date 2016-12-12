

declare module 'seneca' {
			declare function SNS(options?: SNS.Options): SNS.Instance

		declare module.exports: undefined


}

declare module 'SNS' {
	declare type UnknownType = any;

	declare type ExecutorWorker = (callback: any) => void;

	declare type ExecutorCallback = (err: Error, result: any) => void;

	declare type PluginModule = (options: any) => void;

	declare type Pattern = string | MinimalPattern;

	declare type GlobalErrorHandler = (error: Error) => void;

	declare type AddCallback = (msg: any, respond: (error: Error, msg: any) => void) => void;

	declare type ActCallback = (error: Error, result: any) => void;

	declare type CloseCallback = (optional: any, done: (error: Error) => void) => void;

	declare type DatabaseID = string;

	declare type EntitySaveCallback = (error: Error, result: any) => void;

	declare type EntityLoadCallback = (error: Error, result: any) => void;

	declare type EntityRemoveCallback = (error: Error) => void;

	declare type EntityListCallback = (error: Error, result: any[]) => void;

	declare interface Options {
		[plugin_name: string]: any,
		tag?: string,
		idlen?: number,
		timeout?: number,
		default_plugins?: {
		basic?: boolean,
		mem-store?: boolean,
		transport?: boolean,
		web?: boolean
	},
		repl?: {
		port?: number,
		host?: string
	},
		debug?: {
		fragile?: boolean,
		undead?: boolean,
		print?: {
		options?: boolean
	},
		act_caller?: boolean,
		short_logs?: boolean,
		callpoint?: boolean
	},
		strict?: {
		result?: boolean,
		fixedargs?: boolean,
		add?: boolean
	},
		actcache?: {
		active?: boolean,
		size?: number
	},
		trace?: {
		act?: boolean,
		stack?: boolean,
		unknown?: string
	},
		stats?: {
		size?: number,
		interval?: number,
		running?: boolean
	},
		deathdelay?: number,
		admin?: {
		local?: boolean,
		prefix?: string
	},
		plugin?: any,
		internal?: {
		close_signals?: {
		SIGHUP?: boolean,
		SIGTERM?: boolean,
		SIGINT?: boolean,
		SIGBREAK?: boolean
	},
		actrouter?: UnknownType,
		clientrouter?: UnknownType,
		subrouter?: UnknownType
	},
		status?: {
		interval?: number,
		running?: boolean
	},
		zig?: any,
		log?: {
		short?: boolean
	},
		errhandler?: GlobalErrorHandler
	}

	declare interface MinimalPattern {
		
	}

	declare interface Optioner {
		set: (input: string | Options) => Options,
		get: () => Options
	}

	declare interface Executor {
		id: string,
		desc: string,
		fn: ExecutorWorker,
		cb: ExecutorCallback,
		gate: boolean,
		ungate: boolean,
		execute: UnknownType
	}

	declare interface PluginOptions {
		
	}

	declare interface ClientOptions {
		
	}

	declare interface ListenOptions {
		
	}

	declare interface EntityDataWithQuery {
		[entityKey: string]: any,
		id?: string,
		sort$?: any
	}

	declare interface Instance {
		version: string,
		options(options: Options): void,
		error(handler: GlobalErrorHandler): void,
		on(eventName: string, callback: (error: Error) => void): any,
		close(callback: CloseCallback): void,
		use(module: PluginModule, options?: PluginOptions): this,
		use(name: string, options?: PluginOptions): this,
		client(options?: ClientOptions): this,
		listen(options?: ListenOptions): this,
		ready(callback: (error: Error) => void): void,
		add(pattern: Pattern, action: AddCallback): this,
		add(pattern: Pattern, paramspec: any, action: AddCallback): this,
		act(pattern: Pattern, respond: ActCallback): void,
		act(pattern: Pattern, msg: any, respond: ActCallback): void,
		make(entity_canon: string, properties?: any): Entity,
		make(base: string, entity_canon: string, properties?: any): Entity,
		make(zone: string, base: string, entity_canon: string, properties?: any): Entity,
		export(name: string): PluginModule,
		pin(pattern: Pattern): void
	}

	declare interface Entity {
		(canon: any, seneca: any): void,
		[fieldname: string]: any,
		make$(): Entity,
		make$(name: string): Entity,
		make$(base: string, name: string): Entity,
		make$(zone: string, base: string, name: string): Entity,
		save$(callback: EntitySaveCallback): void,
		save$(props: EntityDataWithQuery, callback: EntitySaveCallback): void,
		load$(id: DatabaseID | EntityDataWithQuery, callback: EntityLoadCallback): void,
		remove$(id: DatabaseID | EntityDataWithQuery, callback: EntityRemoveCallback): void,
		list$(query: EntityDataWithQuery, callback: EntityListCallback): void
	}

			
}