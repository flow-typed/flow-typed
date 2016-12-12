

declare module 'cookiejs' {
			declare function cookie(key: string, fallback?: string): string

	declare function cookie(keys: string[], fallback?: string): string

		declare module.exports: undefined


}

declare module 'npm$namespace$cookie' {
			declare export function set(key: string, value: string, options?: any): void

	declare export function set(obj: any, options?: any): void

	declare export function remove(key: string): void

	declare export function remove(keys: string[]): void

	declare export function remove(...args: string[]): void

	declare export function empty(): void

	declare export function get(key: string, fallback?: string): string

	declare export function get(keys: string[], fallback?: string): any

	declare export function all(): any

	declare export function enabled(): boolean

		
}