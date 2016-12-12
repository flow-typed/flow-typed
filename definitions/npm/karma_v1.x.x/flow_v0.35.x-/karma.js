

declare module 'karma' {
		declare interface Karma {
		server: DeprecatedServer,
		Server: Server,
		runner: Runner,
		stopper: Stopper,
		launcher: Launcher,
		VERSION: string
	}

	declare interface LauncherStatic {
		generateId(): string,
		new (emitter: NodeJS.EventEmitter, injector: any): Launcher
	}

	declare interface Launcher {
		Launcher: LauncherStatic,
		launch(
		names: string[], protocol: string, hostname: string, port: number, urlRoot: string
	): any[],
		kill(id: string, callback: Function): boolean,
		restart(id: string): boolean,
		killAll(callback: Function): void,
		areAllCaptured(): boolean,
		markCaptured(id: string): void
	}

	declare interface DeprecatedServer {
		start(options?: any, callback?: ServerCallback): void
	}

	declare interface Runner {
		run(options?: ConfigOptions | ConfigFile, callback?: ServerCallback): void
	}

	declare interface Stopper {
		stop(options?: ConfigOptions, callback?: ServerCallback): void
	}

	declare interface TestResults {
		disconnected: boolean,
		error: boolean,
		exitCode: number,
		failed: number,
		success: number
	}

	declare interface Server {
		new (options?: ConfigOptions | ConfigFile, callback?: ServerCallback): Server,
		start(): void,
		get(token: string): any,
		refreshFiles(): Promise<any>,
		on(event: string, listener: Function): this,
		on(
		event: "run_complete", listener: (browsers: any, results: TestResults) => void
	): this
	}

	declare interface ServerCallback {
		(exitCode: number): void
	}

	declare interface Config {
		set: (config: ConfigOptions) => void,
		LOG_DISABLE: string,
		LOG_ERROR: string,
		LOG_WARN: string,
		LOG_INFO: string,
		LOG_DEBUG: string
	}

	declare interface ConfigFile {
		configFile: string
	}

	declare interface ConfigOptions {
		autoWatch?: boolean,
		autoWatchBatchDelay?: number,
		basePath?: string,
		browserDisconnectTimeout?: number,
		browserDisconnectTolerance?: number,
		browserNoActivityTimeout?: number,
		browsers?: string[],
		captureTimeout?: number,
		client?: ClientOptions,
		colors?: boolean,
		exclude?: string[],
		files?: (FilePattern | string)[],
		frameworks?: string[],
		hostname?: string,
		httpsServerOptions?: https.ServerOptions,
		logLevel?: string,
		loggers?: log4js.AppenderConfigBase[],
		plugins?: any[],
		port?: number,
		preprocessors?: {
		[name: string]: string | string[]
	},
		protocol?: string,
		proxies?: {
		[path: string]: string
	},
		proxyValidateSSL?: boolean,
		reportSlowerThan?: number,
		reporters?: string[],
		singleRun?: boolean,
		transports?: string[],
		urlRoot?: string
	}

	declare interface ClientOptions {
		args?: string[],
		useIframe?: boolean,
		captureConsole?: boolean
	}

	declare interface FilePattern {
		pattern: string,
		watched?: boolean,
		included?: boolean,
		served?: boolean,
		nocache?: boolean
	}

			declare module.exports: Karma


}