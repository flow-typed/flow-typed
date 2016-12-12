import type { jsSHA } from 'npm$namespace$jsSHA'

declare module 'jssha-1.6.0' {
					
}

declare module 'npm$namespace$jsSHA' {
		declare export interface OutputFormatOptions {
		outputUpper?: boolean,
		b64Pad?: string
	}

	declare export interface jsSHA {
		new (srcString: string, inputFormat: string, encoding?: string): jsSHA,
		getHash(
		variant: string, format: string, numRounds?: number, outputFormatOpts?: OutputFormatOptions
	): string,
		getHMAC(
		key: string, inputFormat: string, variant: string, outputFormat: string, outputFormatOpts?: OutputFormatOptions
	): string
	}

			
}

declare module 'jssha' {
					declare module.exports: undefined


}