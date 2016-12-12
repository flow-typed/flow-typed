

declare module 'iniparser' {
			declare export function parse<T>(file: string, callback: (err: any, data: T) => void): void

	declare export function parseSync<T>(file: string): T

	declare export function parseString<T>(data: string): T

		
}