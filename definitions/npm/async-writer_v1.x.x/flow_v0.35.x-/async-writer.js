

declare module 'async-writer' {
					declare module.exports: undefined


}

declare module 'async_writer' {
		declare interface EventFunction {
		(event: string, callback: Function): void
	}

	declare interface BeginAsyncOptions {
		last?: boolean,
		timeout?: number,
		name?: string
	}

	declare interface AsyncWriterOptions {
		global?: {
		[s: string]: any
	},
		buffer?: boolean
	}

	declare function create(writer?: any, options?: AsyncWriterOptions): AsyncWriter

	declare function enableAsyncStackTrace(): void

	declare class StringWriter  {
		constructor(events: events.EventEmitter): this;
		end(): void;
		write(what: string): StringWriter;
		toString(): string
	}

	declare class BufferedWriter  {
		constructor(wrappedStream: stream.Stream): this;
		flush(): void;
		on(event: string, callback: Function): BufferedWriter;
		once(event: string, callback: Function): BufferedWriter;
		clear(): void;
		end(): void;
		write(what: string): BufferedWriter
	}

	declare class AsyncWriter  {
		enableAsyncStackTrace(): void;
		constructor(writer?: any, global?: {
		[s: string]: any
	}, async?: boolean, buffer?: boolean): this;
		isAsyncWriter: AsyncWriter;
		sync(): void;
		getAttributes(): {
		[s: string]: any
	};
		getAttribute(): any;
		write(str: string): AsyncWriter;
		getOutput(): string;
		captureString(func: Function, thisObj: Object): string;
		swapWriter(
		newWriter: StringWriter | BufferedWriter, func: Function, thisObj: Object
	): void;
		createNestedWriter(writer: StringWriter | BufferedWriter): AsyncWriter;
		beginAsync(options?: number | BeginAsyncOptions): AsyncWriter;
		handleBeginAsync(options: number | BeginAsyncOptions, parent: AsyncWriter): void;
		on(event: string, callback: Function): AsyncWriter;
		once(event: string, callback: Function): AsyncWriter;
		onLast(callback: Function): AsyncWriter;
		emit(arg: any): AsyncWriter;
		removeListener(): AsyncWriter;
		pipe(stream: stream.Stream): AsyncWriter;
		error(e: Error): void;
		end(data?: any): AsyncWriter;
		handleEnd(isAsync: boolean): void;
		_finish(): void;
		flush(): void
	}

	
}