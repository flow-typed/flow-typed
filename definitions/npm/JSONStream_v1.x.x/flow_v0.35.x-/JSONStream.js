

declare module 'JSONStream' {
		declare export interface Options {
		recurse: boolean
	}

	declare export function parse(pattern: any): NodeJS.ReadWriteStream

	declare export function parse(patterns: any[]): NodeJS.ReadWriteStream

	declare export function stringify(): NodeJS.ReadWriteStream

	declare export function stringify(open: string, sep: string, close: string): NodeJS.ReadWriteStream

	declare export function stringifyObject(): NodeJS.ReadWriteStream

	declare export function stringifyObject(open: string, sep: string, close: string): NodeJS.ReadWriteStream

		
}