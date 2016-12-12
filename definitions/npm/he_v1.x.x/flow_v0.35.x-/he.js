

declare module 'he' {
		declare interface EncodeOptions {
		useNamedReferences?: boolean,
		encodeEverything?: boolean,
		strict?: boolean,
		allowUnsafeSymbols?: boolean
	}

	declare interface Encode {
		(text: string, options?: EncodeOptions): string,
		options: EncodeOptions
	}

	declare interface DecodeOptions {
		isAttributeValue?: boolean,
		strict?: boolean
	}

	declare interface Decode {
		(html: string, options?: DecodeOptions): string,
		options: DecodeOptions
	}

	declare function escape(text: string): string

		declare module.exports: undefined


}