

declare module 'bunyan' {
		declare interface LoggerOptions {
		name: string,
		streams?: Stream[],
		level?: string | number,
		stream?: NodeJS.WritableStream,
		serializers?: Serializers,
		src?: boolean
	}

	declare interface Serializer {
		(input: any): any
	}

	declare interface Serializers {
		[key: string]: Serializer
	}

	declare interface StdSerializers {
		err: Serializer,
		res: Serializer,
		req: Serializer
	}

	declare interface Stream {
		type?: string,
		level?: number | string,
		path?: string,
		stream?: NodeJS.WritableStream | Stream,
		closeOnExit?: boolean,
		period?: string,
		count?: number
	}

	declare interface RingBufferOptions {
		limit?: number
	}

	declare export function resolveLevel(value: number | string): number

	declare export function createLogger(options: LoggerOptions): Logger

	declare export function safeCycles(): (key: string, value: any) => any

	declare class Logger extends EventEmitter {
		constructor(options: LoggerOptions): this;
		addStream(stream: Stream): void;
		addSerializers(serializers: Serializers | StdSerializers): void;
		child(options: LoggerOptions, simple?: boolean): Logger;
		child(obj: Object, simple?: boolean): Logger;
		reopenFileStreams(): void;
		level(): string | number;
		level(value: number | string): void;
		levels(name: number | string, value: number | string): void;
		fields: any;
		src: boolean;
		trace(error: Error, format?: any, ...params: any[]): void;
		trace(buffer: Buffer, format?: any, ...params: any[]): void;
		trace(obj: Object, format?: any, ...params: any[]): void;
		trace(format: string, ...params: any[]): void;
		debug(error: Error, format?: any, ...params: any[]): void;
		debug(buffer: Buffer, format?: any, ...params: any[]): void;
		debug(obj: Object, format?: any, ...params: any[]): void;
		debug(format: string, ...params: any[]): void;
		info(error: Error, format?: any, ...params: any[]): void;
		info(buffer: Buffer, format?: any, ...params: any[]): void;
		info(obj: Object, format?: any, ...params: any[]): void;
		info(format: string, ...params: any[]): void;
		warn(error: Error, format?: any, ...params: any[]): void;
		warn(buffer: Buffer, format?: any, ...params: any[]): void;
		warn(obj: Object, format?: any, ...params: any[]): void;
		warn(format: string, ...params: any[]): void;
		error(error: Error, format?: any, ...params: any[]): void;
		error(buffer: Buffer, format?: any, ...params: any[]): void;
		error(obj: Object, format?: any, ...params: any[]): void;
		error(format: string, ...params: any[]): void;
		fatal(error: Error, format?: any, ...params: any[]): void;
		fatal(buffer: Buffer, format?: any, ...params: any[]): void;
		fatal(obj: Object, format?: any, ...params: any[]): void;
		fatal(format: string, ...params: any[]): void
	}

	declare class RingBuffer extends EventEmitter {
		constructor(options: RingBufferOptions): this;
		writable: boolean;
		records: any[];
		write(record: any): void;
		end(record?: any): void;
		destroy(): void;
		destroySoon(): void
	}

	
}