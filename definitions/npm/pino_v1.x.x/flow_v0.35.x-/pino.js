

declare module 'pino' {
	declare type Level = "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "silent";

	declare type Headers = {
		[header: string]: string
	};

	declare type LevelLabelsToValues = {
		[level: string]: number
	};

	declare type LevelValuesToLabels = {
		[level: number]: string
	};

	declare type LevelChangeEventListener = (lvl: string, val: number, prevLvl: string, prevVal: number) => void;

	declare type LevelChangeEvent = "level-change";

	declare interface Serializers {
		req?: (req: any) => any,
		res?: (res: any) => any,
		err?: (error: Error) => any
	}

	declare interface LoggerOptions {
		safe?: boolean,
		name?: string,
		serializers?: Serializers,
		slowtime?: boolean,
		extreme?: boolean,
		enabled?: boolean,
		level?: Level
	}

	declare interface Pino {
		(optionsOrStream?: LoggerOptions | stream.Writable | stream.Readable): Logger,
		(options: LoggerOptions, stream: stream.Writable | stream.Readable): Logger,
		levels: {
		values: LevelLabelsToValues,
		labels: LevelValuesToLabels
	},
		LOG_VERSION: number,
		pretty(opts?: {
		timeTransOnly?: boolean
	}): stream.Readable
	}

	declare interface Logger {
		child(bindings: {
		
	}): Logger,
		level: Level,
		levelVal: number,
		on(event: LevelChangeEvent, listener: LevelChangeEventListener): void,
		fatal(msg: string, ...args: any[]): void,
		fatal(obj: {
		
	}, msg?: string, ...args: any[]): void,
		error(msg: string, ...args: any[]): void,
		error(obj: {
		
	}, msg?: string, ...args: any[]): void,
		warn(msg: string, ...args: any[]): void,
		warn(obj: {
		
	}, msg?: string, ...args: any[]): void,
		info(msg: string, ...args: any[]): void,
		info(obj: {
		
	}, msg?: string, ...args: any[]): void,
		debug(msg: string, ...args: any[]): void,
		debug(obj: {
		
	}, msg?: string, ...args: any[]): void,
		trace(msg: string, ...args: any[]): void,
		trace(obj: {
		
	}, msg?: string, ...args: any[]): void,
		levels: {
		values: LevelLabelsToValues,
		labels: LevelValuesToLabels
	},
		LOG_VERSION: number,
		stdSerializers: Serializers
	}

			declare module.exports: Pino


}