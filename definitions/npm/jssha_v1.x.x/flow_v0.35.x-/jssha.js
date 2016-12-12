import type { jsSHA } from 'npm$namespace$jsSHA'

declare module 'jssha' {
					declare module.exports: jsSHA


}

declare module 'npm$namespace$jsSHA' {
		declare export interface EncodingOptions {
		encoding?: string
	}

	declare export interface Options {
		numRounds?: number
	}

	declare export interface OutputFormatOptions {
		outputUpper?: boolean,
		b64Pad?: string
	}

	declare export interface jsSHA {
		new (variant: string, inputFormat: string, options?: Options): jsSHA,
		setHMACKey(key: string, inputFormat: string, encodingOpts?: EncodingOptions): void,
		update(srcString: string): void,
		getHash(format: string, outputFormatOpts?: OutputFormatOptions): string,
		getHMAC(format: string, outputFormatOpts?: OutputFormatOptions): string
	}

			
}