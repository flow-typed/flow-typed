import type { Base } from 'npm$namespace$BaseX'

declare module 'base-x' {
					declare module.exports: Base


}

declare module 'npm$namespace$BaseX' {
		declare interface EncodeBuffer {
		[index: number]: number,
		length: number
	}

	declare interface BaseConverter {
		encode: (buffer: EncodeBuffer) => string,
		decode: (string: string) => number[]
	}

	declare interface Base {
		(ALPHABET: string): BaseX.BaseConverter
	}

			
}