

declare module 'msgpack-lite' {
					declare module.exports: undefined


}

declare module 'MsgpackLite' {
		declare interface BufferOptions {
		codec: any
	}

	declare interface Encoder {
		bufferish: any,
		maxBufferSize: number,
		minBufferSize: number,
		offset: number,
		start: number,
		write: (chunk: any) => void,
		fetch: () => void,
		flush: () => void,
		push: (chunk: any) => void,
		pull: () => number,
		read: () => number,
		reserve: (length: number) => number,
		send: (buffer: Buffer) => void,
		encode: (chunk: any) => void,
		end: (chunk: any) => void
	}

	declare interface Decoder {
		bufferish: any,
		offset: number,
		fetch: () => void,
		flush: () => void,
		pull: () => number,
		read: () => number,
		write: (chunk: any) => void,
		reserve: (length: number) => number,
		decode: (chunk: any) => void,
		push: (chunk: any) => void,
		end: (chunk: any) => void
	}

	declare interface EncodeStream {
		encoder: Encoder
	}

	declare interface DecodeStream {
		decoder: Decoder
	}

	declare interface Codec {
		new (options?: any): Codec,
		options: any,
		init(): void
	}

	declare export function encode(input: any, options?: BufferOptions): any

	declare export function decode(input: Buffer | Uint8Array | Array<number>, options?: BufferOptions): any

	declare export function createEncodeStream(): EncodeStream

	declare export function createDecodeStream(): DecodeStream

	declare export function createCodec(options?: any): Codec

	declare export function codec(): {
		preset: Codec
	}

		
}