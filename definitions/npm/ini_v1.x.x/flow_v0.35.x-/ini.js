

declare module 'ini' {
		declare interface EncodeOptions {
		section: string,
		whitespace: boolean
	}

	declare function decode(inistring: string): any

	declare function parse(initstring: string): any

	declare function encode(object: any, options?: EncodeOptions): string

	declare function stringify(object: any, options?: EncodeOptions): string

	declare function safe(val: string): string

	declare function unsafe(val: string): string

		
}