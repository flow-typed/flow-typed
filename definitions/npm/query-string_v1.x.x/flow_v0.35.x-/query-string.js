

declare module 'query-string' {
	declare type value = string | boolean | number;

	declare interface StringifyOptions {
		strict?: boolean,
		encode?: boolean
	}

	declare export function parse(str: string): {
		[key: string]: string | string[]
	}

	declare export function stringify(obj: {
		[key: string]: value | value[]
	}, options?: StringifyOptions): string

	declare export function extract(str: string): string

		
}