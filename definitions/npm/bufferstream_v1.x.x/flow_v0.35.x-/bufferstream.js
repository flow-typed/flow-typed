

declare module 'bufferstream' {
				declare class BufferStream extends stream$Duplex {
		constructor(options?: BufferStream.Opts): this;
		setSize(size: string): void;
		setSize(size: number): void;
		enable(): void;
		disable(): void;
		disable(token: string, ...tokens: string[]): void;
		disable(tokens: string[]): void;
		disable(token: Buffer, ...tokens: Buffer[]): void;
		disable(tokens: Buffer[]): void;
		split(token: string, ...tokens: string[]): void;
		split(tokens: string[]): void;
		split(token: Buffer, ...tokens: Buffer[]): void;
		split(tokens: Buffer[]): void;
		getBuffer(): Buffer;
		buffer: Buffer;
		toString(): string;
		length: number
	}

	declare module.exports: undefined


}

declare module 'BufferStream' {
		declare export interface Opts {
		encoding?: string,
		blocking?: boolean,
		size?: any,
		disabled?: boolean,
		split?: any
	}

			
}

declare module 'bufferstream/postbuffer' {
				declare class PostBuffer extends BufferStream {
		constructor(req: http.IncomingMessage): this;
		onEnd(callback: (data: any) => void): void;
		pipe(
		stream: NodeJS.WritableStream, options?: BufferStream.Opts
	): NodeJS.ReadableStream
	}

	declare module.exports: undefined


}