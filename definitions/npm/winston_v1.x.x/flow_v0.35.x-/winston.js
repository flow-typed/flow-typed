

declare module 'winston' {
	declare export type CLILoggingLevel = "error" | "warn" | "help" | "data" | "info" | "debug" | "prompt" | "verbose" | "input" | "silly";

	declare export type NPMLoggingLevel = "error" | "warn" | "info" | "verbose" | "debug" | "silly";

	declare export type SyslogLoggingLevel = "emerg" | "alert" | "crit" | "error" | "warning" | "notice" | "info" | "debug";

	declare export type TransportOptions = ConsoleTransportOptions | DailyRotateFileTransportOptions | FileTransportOptions | HttpTransportOptions | MemoryTransportOptions | WebhookTransportOptions | WinstonModuleTransportOptions;

	declare export interface ExceptionProcessInfo {
		pid: number,
		uid?: number,
		gid?: number,
		cwd: string,
		execPath: string,
		version: string,
		argv: string,
		memoryUsage: NodeJS.MemoryUsage
	}

	declare export interface ExceptionOsInfo {
		loadavg: [number, number, number],
		uptime: number
	}

	declare export interface ExceptionTrace {
		column: number,
		file: string,
		function: string,
		line: number,
		method: string,
		native: boolean
	}

	declare export interface ExceptionAllInfo {
		date: Date,
		process: ExceptionProcessInfo,
		os: ExceptionOsInfo,
		trace: Array<ExceptionTrace>,
		stack: Array<string>
	}

	declare export interface Exception {
		getAllInfo(err: Error): ExceptionAllInfo,
		getProcessInfo(): ExceptionProcessInfo,
		getOsInfo(): ExceptionOsInfo,
		getTrace(err: Error): Array<ExceptionTrace>
	}

	declare export interface MetadataRewriter {
		(level: string, msg: string, meta: any): any
	}

	declare export interface MetadataFilter {
		(level: string, msg: string, meta: any): string | {
		msg: any,
		meta: any
	}
	}

	declare export interface LoggerStatic {
		new (options?: LoggerOptions): LoggerInstance
	}

	declare export interface LoggerInstance {
		rewriters: Array<MetadataRewriter>,
		filters: Array<MetadataFilter>,
		transports: Array<TransportInstance>,
		extend(target: any): LoggerInstance,
		log: LogMethod,
		silly: LeveledLogMethod,
		debug: LeveledLogMethod,
		verbose: LeveledLogMethod,
		info: LeveledLogMethod,
		warn: LeveledLogMethod,
		error: LeveledLogMethod,
		query(options: QueryOptions, callback?: (err: Error, results: any) => void): any,
		query(callback: (err: Error, results: any) => void): any,
		stream(options?: any): NodeJS.ReadableStream,
		close(): void,
		handleExceptions(...transports: TransportInstance[]): void,
		unhandleExceptions(...transports: TransportInstance[]): void,
		add(
		transport: TransportInstance, options?: TransportOptions, created?: boolean
	): LoggerInstance,
		clear(): void,
		remove(transport: TransportInstance): LoggerInstance,
		startTimer(): ProfileHandler,
		profile(
		id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void
	): LoggerInstance,
		configure(options: LoggerOptions): void,
		setLevels(target: any): any,
		cli(): LoggerInstance,
		level: string
	}

	declare export interface LoggerOptions {
		transports?: TransportInstance[],
		rewriters?: TransportInstance[],
		exceptionHandlers?: TransportInstance[],
		handleExceptions?: boolean,
		exitOnError?: any,
		[optionName: string]: any
	}

	declare export interface TransportStatic {
		new (options?: TransportOptions): TransportInstance
	}

	declare export interface TransportInstance {
		formatQuery(query: (string | Object)): (string | Object),
		normalizeQuery(options: QueryOptions): QueryOptions,
		formatResults(results: (Object | Array<any>), options?: Object): (Object | Array<any>),
		logException(msg: string, meta: Object, callback: () => void): void
	}

	declare export interface ConsoleTransportInstance {
		new (options?: ConsoleTransportOptions): ConsoleTransportInstance
	}

	declare export interface DailyRotateFileTransportInstance {
		new (options?: DailyRotateFileTransportOptions): DailyRotateFileTransportInstance
	}

	declare export interface FileTransportInstance {
		new (options?: FileTransportOptions): FileTransportInstance,
		close(): void
	}

	declare export interface HttpTransportInstance {
		new (options?: HttpTransportOptions): HttpTransportInstance
	}

	declare export interface MemoryTransportInstance {
		new (options?: MemoryTransportOptions): MemoryTransportInstance
	}

	declare export interface WebhookTransportInstance {
		new (options?: WebhookTransportOptions): WebhookTransportInstance
	}

	declare export interface WinstonModuleTrasportInstance {
		new (options?: WinstonModuleTransportOptions): WinstonModuleTrasportInstance
	}

	declare export interface ContainerStatic {
		new (options: LoggerOptions): ContainerInstance
	}

	declare export interface ContainerInstance {
		get(id: string, options?: LoggerOptions): LoggerInstance,
		add(id: string, options: LoggerOptions): LoggerInstance,
		has(id: string): boolean,
		close(id: string): void,
		options: LoggerOptions,
		loggers: any,
		default: LoggerOptions
	}

	declare export interface Transports {
		File: FileTransportInstance,
		Console: ConsoleTransportInstance,
		Loggly: WinstonModuleTrasportInstance,
		DailyRotateFile: DailyRotateFileTransportInstance,
		Http: HttpTransportInstance,
		Memory: MemoryTransportInstance,
		Webhook: WebhookTransportInstance
	}

	declare export interface GenericTransportOptions {
		level?: string,
		silent?: boolean,
		raw?: boolean,
		name?: string,
		formatter?: Function,
		handleExceptions?: boolean,
		exceptionsLevel?: string,
		humanReadableUnhandledException?: boolean
	}

	declare export interface GenericTextTransportOptions {
		json?: boolean,
		colorize?: boolean,
		colors?: any,
		prettyPrint?: boolean,
		timestamp?: (Function | boolean),
		showLevel?: boolean,
		label?: string,
		depth?: number,
		stringify?: Function
	}

	declare export interface GenericNetworkTransportOptions {
		host?: string,
		port?: number,
		auth?: {
		username: string,
		password: string
	},
		path?: string
	}

	declare export interface ConsoleTransportOptions {
		logstash?: boolean,
		debugStdout?: boolean
	}

	declare export interface DailyRotateFileTransportOptions {
		logstash?: boolean,
		maxsize?: number,
		maxFiles?: number,
		eol?: string,
		maxRetries?: number,
		datePattern?: string,
		filename?: string,
		dirname?: string,
		options?: {
		flags?: string,
		highWaterMark?: number
	},
		stream?: NodeJS.WritableStream
	}

	declare export interface FileTransportOptions {
		logstash?: boolean,
		maxsize?: number,
		rotationFormat?: boolean,
		zippedArchive?: boolean,
		maxFiles?: number,
		eol?: string,
		tailable?: boolean,
		maxRetries?: number,
		filename?: string,
		dirname?: string,
		options?: {
		flags?: string,
		highWaterMark?: number
	},
		stream?: NodeJS.WritableStream
	}

	declare export interface HttpTransportOptions {
		ssl?: boolean
	}

	declare export interface MemoryTransportOptions {
		
	}

	declare export interface WebhookTransportOptions {
		method?: string,
		ssl?: {
		key?: any,
		cert?: any,
		ca: any
	}
	}

	declare export interface WinstonModuleTransportOptions {
		[optionName: string]: any
	}

	declare export interface QueryOptions {
		rows?: number,
		limit?: number,
		start?: number,
		from?: Date,
		until?: Date,
		order?: "asc" | "desc",
		fields: any
	}

	declare export interface ProfileHandler {
		logger: LoggerInstance,
		start: Date,
		done: (msg: string) => LoggerInstance
	}

	declare interface LogMethod {
		(level: string, msg: string, callback: LogCallback): LoggerInstance,
		(level: string, msg: string, meta: any, callback: LogCallback): LoggerInstance,
		(level: string, msg: string, ...meta: any[]): LoggerInstance
	}

	declare interface LeveledLogMethod {
		(msg: string, callback: LogCallback): LoggerInstance,
		(msg: string, meta: any, callback: LogCallback): LoggerInstance,
		(msg: string, ...meta: any[]): LoggerInstance
	}

	declare interface LogCallback {
		(error?: any, level?: string, msg?: string, meta?: any): void
	}

	declare export function query(options: QueryOptions, callback?: (err: Error, results: any) => void): any

	declare export function query(callback: (err: Error, results: any) => void): any

	declare export function stream(options?: any): NodeJS.ReadableStream

	declare export function handleExceptions(...transports: TransportInstance[]): void

	declare export function unhandleExceptions(...transports: TransportInstance[]): void

	declare export function add(
		transport: TransportInstance, options?: TransportOptions, created?: boolean
	): LoggerInstance

	declare export function clear(): void

	declare export function remove(transport: string): LoggerInstance

	declare export function remove(transport: TransportInstance): LoggerInstance

	declare export function startTimer(): ProfileHandler

	declare export function profile(
		id: string, msg?: string, meta?: any, callback?: (err: Error, level: string, msg: string, meta: any) => void
	): LoggerInstance

	declare export function addColors(target: any): any

	declare export function setLevels(target: any): any

	declare export function cli(): LoggerInstance

	declare export function close(): void

	declare export function configure(options: LoggerOptions): void

		
}