

declare module 'browser-sync' {
					declare module.exports: BrowserSyncStatic


}

declare module 'browserSync' {
		declare interface Options {
		ui?: UIOptions | boolean,
		files?: string | (string | FileCallback)[],
		watchOptions?: chokidar.WatchOptions,
		server?: ServerOptions,
		proxy?: string | boolean | ProxyOptions,
		port?: number,
		serveStatic?: string[],
		https?: boolean,
		ghostMode?: GhostOptions | boolean,
		logLevel?: string,
		logPrefix?: string,
		logConnections?: boolean,
		logFileChanges?: boolean,
		logSnippet?: boolean,
		snippetOptions?: SnippetOptions,
		rewriteRules?: boolean | RewriteRules[],
		tunnel?: string | boolean,
		online?: boolean,
		open?: string | boolean,
		browser?: string | string[],
		xip?: boolean,
		reloadOnRestart?: boolean,
		notify?: boolean,
		scrollProportionally?: boolean,
		scrollThrottle?: number,
		scrollRestoreTechnique?: string,
		scrollElements?: string[],
		scrollElementMapping?: string[],
		reloadDelay?: number,
		reloadDebounce?: number,
		plugins?: any[],
		injectChanges?: boolean,
		startPath?: string,
		minify?: boolean,
		host?: string,
		codeSync?: boolean,
		timestamps?: boolean,
		scriptPath?: (path: string) => string,
		socket?: SocketOptions,
		middleware?: MiddlewareHandler | PerRouteMiddleware | (MiddlewareHandler | PerRouteMiddleware)[]
	}

	declare interface Hash<T> {
		[path: string]: T
	}

	declare interface UIOptions {
		port?: number,
		weinre?: {
		port?: number
	}
	}

	declare interface FileCallback {
		match?: string | string[],
		fn: (event: string, file: string) => any,
		options?: chokidar.WatchOptions
	}

	declare interface ServerOptions {
		baseDir?: string | string[],
		directory?: boolean,
		index?: string,
		routes?: Hash<string>,
		middleware?: (MiddlewareHandler | PerRouteMiddleware)[]
	}

	declare interface ProxyOptions {
		target?: string,
		middleware?: MiddlewareHandler,
		ws: boolean,
		reqHeaders: (config: any) => Hash<any>,
		proxyRes: (res: http.ServerResponse, req: http.IncomingMessage, next: Function) => any
	}

	declare interface MiddlewareHandler {
		(req: http.IncomingMessage, res: http.ServerResponse, next: Function): any
	}

	declare interface PerRouteMiddleware {
		route: string,
		handle: MiddlewareHandler
	}

	declare interface GhostOptions {
		clicks?: boolean,
		scroll?: boolean,
		forms?: boolean
	}

	declare interface SnippetOptions {
		ignorePaths?: string,
		rule?: {
		match?: RegExp,
		fn?: (snippet: string, match: string) => any
	}
	}

	declare interface SocketOptions {
		path?: string,
		clientPath?: string,
		namespace?: string,
		domain?: string,
		port?: number,
		clients?: {
		heartbeatTimeout?: number
	}
	}

	declare interface RewriteRules {
		match: RegExp,
		fn: (match: string) => string
	}

	declare interface StreamOptions {
		once?: boolean,
		match?: mm.Pattern | mm.Pattern[]
	}

	declare interface BrowserSyncStatic {
		(config?: Options, callback?: (err: Error, bs: Object) => any): BrowserSyncInstance,
		create(name?: string): BrowserSyncInstance,
		get(name: string): BrowserSyncInstance,
		has(name: string): boolean
	}

	declare interface BrowserSyncInstance {
		name: string,
		init(
		config?: Options, callback?: (err: Error, bs: Object) => any
	): BrowserSyncInstance,
		reload(): void,
		reload(file: string): void,
		reload(files: string[]): void,
		reload(options: {
		stream: boolean
	}): NodeJS.ReadWriteStream,
		stream(opts?: StreamOptions): NodeJS.ReadWriteStream,
		notify(message: string, timeout?: number): void,
		exit(): void,
		watch(
		patterns: string, opts?: chokidar.WatchOptions, fn?: (event: string, file: fs.Stats) => any
	): NodeJS.EventEmitter,
		pause(): void,
		resume(): void,
		emitter: NodeJS.EventEmitter,
		active: boolean,
		paused: boolean
	}

			
}