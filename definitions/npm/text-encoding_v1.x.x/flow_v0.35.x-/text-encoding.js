import type { TextDecoderStatic, TextEncoderStatic, TextEncodingStatic } from 'npm$namespace$TextEncoding'

declare module 'text-encoding' {
					declare module.exports: TextEncodingStatic


}

declare module 'npm$namespace$TextEncoding' {
		declare interface TextDecoderOptions {
		fatal?: boolean,
		ignoreBOM?: boolean
	}

	declare interface TextDecodeOptions {
		stream?: boolean
	}

	declare interface TextEncoderOptions {
		NONSTANDARD_allowLegacyEncoding?: boolean
	}

	declare interface TextDecoder {
		encoding: string,
		fatal: boolean,
		ignoreBOM: boolean,
		decode(input?: ArrayBufferView, options?: TextDecodeOptions): string
	}

	declare interface TextEncoder {
		encoding: string,
		encode(input?: string, options?: TextEncodeOptions): Uint8Array
	}

	declare interface TextEncodeOptions {
		stream?: boolean
	}

	declare interface TextEncoderStatic {
		(utfLabel?: string, options?: TextEncoderOptions): TextEncoder,
		new (utfLabel?: string, options?: TextEncoderOptions): TextEncoder
	}

	declare interface TextDecoderStatic {
		(label?: string, options?: TextDecoderOptions): TextDecoder,
		new (label?: string, options?: TextDecoderOptions): TextDecoder
	}

	declare interface TextEncodingStatic {
		TextEncoder: TextEncoderStatic,
		TextDecoder: TextDecoderStatic
	}

			
}