

declare module 'jsnlog' {
			declare function ___jsnlog_configure(jsnlog: any): void

	declare function JL(loggerName?: string): JL.JSNLogLogger

		
}

declare module 'npm$namespace$JL' {
		declare interface JSNLogOptions {
		enabled?: boolean,
		maxMessages?: number,
		defaultAjaxUrl?: string,
		clientIP?: string,
		requestId?: string,
		defaultBeforeSend?: (xhr: XMLHttpRequest) => void
	}

	declare interface JSNLogFilterOptions {
		level?: number,
		ipRegex?: string,
		userAgentRegex?: string,
		disallow?: string
	}

	declare interface JSNLogLoggerOptions {
		appenders?: JSNLogAppender[],
		onceOnly?: string[]
	}

	declare interface JSNLogAppenderOptions {
		sendWithBufferLevel?: number,
		storeInBufferLevel?: number,
		bufferSize?: number,
		batchSize?: number
	}

	declare interface JSNLogAjaxAppenderOptions {
		url?: string,
		beforeSend?: (xhr: XMLHttpRequest) => void
	}

	declare interface JSNLogLogger {
		setOptions(options: JSNLogLoggerOptions): JSNLogLogger,
		trace(logObject: any): JSNLogLogger,
		debug(logObject: any): JSNLogLogger,
		info(logObject: any): JSNLogLogger,
		warn(logObject: any): JSNLogLogger,
		error(logObject: any): JSNLogLogger,
		fatal(logObject: any): JSNLogLogger,
		fatalException(logObject: any, e: any): JSNLogLogger,
		log(level: number, logObject: any, e?: any): JSNLogLogger
	}

	declare interface JSNLogAppender {
		setOptions(options: JSNLogAppenderOptions): JSNLogAppender
	}

	declare interface JSNLogAjaxAppender {
		setOptions(options: JSNLogAjaxAppenderOptions): JSNLogAjaxAppender
	}

	declare interface JSNLogConsoleAppender {
		
	}

	declare export function setOptions(options: JSNLogOptions): void

	declare export function createAjaxAppender(appenderName: string): JSNLogAjaxAppender

	declare export function createConsoleAppender(appenderName: string): JSNLogConsoleAppender

	declare export function getOffLevel(): number

	declare export function getTraceLevel(): number

	declare export function getDebugLevel(): number

	declare export function getInfoLevel(): number

	declare export function getWarnLevel(): number

	declare export function getErrorLevel(): number

	declare export function getFatalLevel(): number

	declare export function getAllLevel(): number

	declare export class Exception  {
		constructor(data: any, inner?: any): this
	}

	
}