

declare module 'logg' {
		declare interface Logger {
		setLogLevel: (level: number) => void,
		getLogLevel: () => number,
		setParent: (logger: Logger) => void,
		getParent: () => Logger,
		registerWatcher: (watcher: (logRecord: string) => void) => void,
		getWatchers: () => Function[],
		log: (level: number, ...var_args: any[]) => void,
		fine: (...var_args: any[]) => void,
		info: (...var_args: any[]) => void,
		warn: (...var_args: any[]) => void,
		error: (...var_args: any[]) => void,
		isLoggable: (level: number) => boolean
	}

	declare interface loggingLevels {
		SEVERE: number,
		WARN: number,
		INFO: number,
		FINE: number,
		FINER: number,
		FINEST: number,
		toString: (level: number) => string
	}

	declare export function getLogger(name: string): Logger

	declare export function getTransientLogger(name: string): Logger

		
}