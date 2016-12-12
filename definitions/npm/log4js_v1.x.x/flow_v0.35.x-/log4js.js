

declare module 'log4js' {
	declare type CoreAppenderConfig = ConsoleAppenderConfig | FileAppenderConfig | DateFileAppenderConfig | SmtpAppenderConfig | HookIoAppenderConfig | GelfAppenderConfig | MultiprocessAppenderConfig | LogglyAppenderConfig | ClusteredAppenderConfig;

	declare type AppenderConfig = CoreAppenderConfig | CustomAppenderConfig;

	declare export interface Logger {
		setLevel(level: string): void,
		setLevel(level: Level): void,
		isLevelEnabled(level: Level): boolean,
		isTraceEnabled(): boolean,
		isDebugEnabled(): boolean,
		isInfoEnabled(): boolean,
		isWarnEnabled(): boolean,
		isErrorEnabled(): boolean,
		isFatalEnabled(): boolean,
		trace(message: string, ...args: any[]): void,
		debug(message: string, ...args: any[]): void,
		info(message: string, ...args: any[]): void,
		warn(message: string, ...args: any[]): void,
		error(message: string, ...args: any[]): void,
		fatal(message: string, ...args: any[]): void
	}

	declare export interface Level {
		isEqualTo(other: string): boolean,
		isEqualTo(otherLevel: Level): boolean,
		isLessThanOrEqualTo(other: string): boolean,
		isLessThanOrEqualTo(otherLevel: Level): boolean,
		isGreaterThanOrEqualTo(other: string): boolean,
		isGreaterThanOrEqualTo(otherLevel: Level): boolean
	}

	declare export interface IConfig {
		appenders: AppenderConfig[],
		levels?: {
		[category: string]: string
	},
		replaceConsole?: boolean
	}

	declare export interface AppenderConfigBase {
		type: string,
		category?: string,
		layout?: {
		type: string,
		[key: string]: any
	}
	}

	declare export interface ConsoleAppenderConfig {
		
	}

	declare export interface FileAppenderConfig {
		filename: string
	}

	declare export interface DateFileAppenderConfig {
		pattern: string,
		alwaysIncludePattern: boolean
	}

	declare export interface SmtpAppenderConfig {
		recipients: string,
		sender: string,
		subject: string,
		sendInterval: number,
		SMTP: {
		host: string,
		secure: boolean,
		port: number,
		auth: {
		user: string,
		pass: string
	}
	}
	}

	declare export interface HookIoAppenderConfig {
		maxLogSize: number,
		backup: number,
		pollInterval: number
	}

	declare export interface GelfAppenderConfig {
		host: string,
		hostname: string,
		port: string,
		facility: string
	}

	declare export interface MultiprocessAppenderConfig {
		mode: string,
		loggerPort: number,
		loggerHost: string,
		facility: string,
		appender?: AppenderConfig
	}

	declare export interface LogglyAppenderConfig {
		token: string,
		subdomain: string,
		tags: string[],
		json: boolean
	}

	declare export interface ClusteredAppenderConfig {
		appenders?: AppenderConfig[]
	}

	declare interface CustomAppenderConfig {
		[prop: string]: any
	}

	declare export interface LogEvent {
		startTime: number,
		categoryName: string,
		data: any[],
		level: Level,
		logger: Logger
	}

	declare export interface Appender {
		(event: LogEvent): void
	}

	declare export interface AppenderModule {
		appender: (...args: any[]) => Appender,
		shutdown?: (cb: (error: Error) => void) => void,
		configure: (config: CustomAppenderConfig, options?: {
		[key: string]: any
	}) => Appender
	}

	declare export interface LayoutConfig {
		[key: string]: any
	}

	declare export interface LayoutGenerator {
		(config?: LayoutConfig): Layout
	}

	declare export interface Layout {
		(event: LogEvent): string
	}

	declare export function replaceConsole(logger?: Logger): void

	declare export function restoreConsole(): void

	declare export function getLogger(categoryName?: string): Logger

	declare export function getBufferedLogger(categoryName?: string): Logger

	declare export function hasLogger(categoryName: string): boolean

	declare export function getDefaultLogger(): Logger

	declare export function addAppender(...appenders: any[]): void

	declare export function loadAppender(appenderType: string, appenderModule?: AppenderModule): void

	declare export function clearAppenders(): void

	declare export function shutdown(cb: Function): void

	declare export function configure(filename: string, options?: any): void

	declare export function configure(config: IConfig, options?: any): void

	declare export function setGlobalLogLevel(level: string): void

	declare export function setGlobalLogLevel(level: Level): void

	declare export function connectLogger(
		logger: Logger, options: {
		format?: string,
		level?: string,
		nolog?: any
	}
	): express.Handler

	declare export function connectLogger(
		logger: Logger, options: {
		format?: string,
		level?: Level,
		nolog?: any
	}
	): express.Handler

		
}