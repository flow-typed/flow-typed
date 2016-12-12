

declare module 'loglevel' {
		declare interface LoggingMethod {
		(...message: any[]): void
	}

	declare interface MethodFactory {
		(methodName: string, level: LogLevel, loggerName: string): LoggingMethod
	}

	declare interface Log {
		methodFactory: MethodFactory,
		trace(...msg: any[]): void,
		debug(...msg: any[]): void,
		info(...msg: any[]): void,
		warn(...msg: any[]): void,
		error(...msg: any[]): void,
		setLevel(level: LogLevel, persist?: boolean): void,
		setLevel(level: string, persist?: boolean): void,
		setLevel(level: LogLevel, persist?: boolean): void,
		noConflict(): any,
		getLevel(): LogLevel,
		setDefaultLevel(level: LogLevel): void,
		getLogger(name: String): Log,
		enableAll(persist?: boolean): void,
		disableAll(persist?: boolean): void
	}

			declare module.exports: Log


}