

declare module 'nock' {
	declare type HttpHeaders = {
		[key: string]: string | {
		(req: any, res: any, body: string): any
	}
	};

	declare type InterceptFunction = (
		uri: string | RegExp | {
		(uri: string): boolean
	}, requestBody?: string | RegExp | {
		(body: any): boolean
	} | any
	) => Interceptor;

	declare export type ReplyCallback = (err: any, result: ReplyCallbackResult) => void;

	declare type ReplyCallbackResult = string | [number, string | any] | [number, string | any, HttpHeaders] | any;

	declare export type NockBackMode = "wild" | "dryrun" | "record" | "lockdown";

	declare export interface Scope {
		get: InterceptFunction,
		post: InterceptFunction,
		put: InterceptFunction,
		head: InterceptFunction,
		patch: InterceptFunction,
		merge: InterceptFunction,
		delete: InterceptFunction,
		intercept: (
		uri: string | RegExp | {
		(uri: string): boolean
	}, method: string, requestBody?: string | RegExp | {
		(body: any): boolean
	} | any, options?: Options
	) => Interceptor,
		defaultReplyHeaders(headers: HttpHeaders): this,
		matchHeader(name: string, value: string | RegExp | {
		(value: string): boolean
	}): this,
		filteringPath(regex: RegExp, replace: string): this,
		filteringPath(fn: (path: string) => string): this,
		filteringRequestBody(regex: RegExp, replace: string): this,
		filteringRequestBody(fn: (body: string) => string): this,
		log(out: () => void): this,
		persist(): this,
		shouldPersist(): boolean,
		replyContentLength(): this,
		replyDate(d?: Date): this,
		done(): void,
		isDone(): boolean,
		restore(): void,
		pendingMocks(): string[]
	}

	declare export interface Interceptor {
		query(params: boolean | {
		(querObject: any): boolean
	} | any): this,
		reply(responseCode: number, body?: string | any, headers?: HttpHeaders): Scope,
		reply(
		responseCode: number, callback: (uri: string, body: string, cb?: ReplyCallback) => ReplyCallbackResult, headers?: HttpHeaders
	): Scope,
		reply(
		callback: (uri: string, body: string, cb?: ReplyCallback) => ReplyCallbackResult, headers?: HttpHeaders
	): Scope,
		replyWithError(errorMessage: string | any): Scope,
		replyWithFile(responseCode: number, fileName: string, headers?: HttpHeaders): Scope,
		basicAuth(options: {
		user: string,
		pass?: string
	}): this,
		times(newCounter: number): this,
		once(): this,
		twice(): this,
		thrice(): this,
		delay(opts: number | {
		head?: number,
		body?: number
	}): this,
		delayBody(timeMs: number): this,
		delayConnection(timeMs: number): this,
		getTotalDelay(): number,
		socketDelay(timeMs: number): this
	}

	declare export interface Options {
		allowUnmocked?: boolean,
		reqheaders?: {
		[key: string]: string | RegExp | {
		(headerValue: string): boolean
	}
	},
		badheaders?: string[],
		filteringScope?: {
		(scope: string): boolean
	}
	}

	declare export interface RequestOptions {
		proto?: string,
		_https_?: boolean,
		hostname?: string,
		host?: string,
		port?: number,
		method?: string,
		path?: string
	}

	declare export interface Recorder {
		rec(options?: boolean | RecorderOptions): void,
		clear(): void,
		play(): string[] | NockDefinition[]
	}

	declare export interface RecorderOptions {
		dont_print?: boolean,
		output_objects?: boolean,
		enable_reqheaders_recording?: boolean,
		logging?: (content: string) => void,
		use_separator?: boolean
	}

	declare export interface NockDefinition {
		scope: string,
		port?: number | string,
		method?: string,
		path: string,
		body?: string | any,
		status?: number,
		response?: string | any,
		headers?: HttpHeaders,
		reqheaders?: {
		[key: string]: string | RegExp | {
		(headerValue: string): boolean
	}
	},
		options?: Options
	}

	declare export interface NockBack {
		fixtures: string,
		setMode(mode: NockBackMode): void,
		(fixtureName: string, nockedFn: (nockDone: () => void) => void): void,
		(fixtureName: string, options: NockBackOptions, nockedFn: (nockDone: () => void) => void): void
	}

	declare export interface NockBackOptions {
		before?: (def: NockDefinition) => void,
		after?: (scope: Scope) => void,
		afterRecord?: (defs: NockDefinition[]) => NockDefinition[],
		recorder?: RecorderOptions
	}

	declare function nock(basePath: string | RegExp, options?: nock.Options): nock.Scope

	declare export function cleanAll(): void

	declare export function activate(): void

	declare export function isActive(): boolean

	declare export function isDone(): boolean

	declare export function pendingMocks(): void

	declare export function removeInterceptor(interceptor: Interceptor | RequestOptions): boolean

	declare export function disableNetConnect(): void

	declare export function enableNetConnect(matcher?: string | RegExp): void

	declare export function load(path: string): Scope[]

	declare export function loadDefs(path: string): NockDefinition[]

	declare export function define(defs: NockDefinition[]): Scope[]

	declare export function restore(): void

		declare module.exports: undefined


}