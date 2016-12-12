

declare module 'memory-cache' {
			declare export function put(
		key: any, value: any, time?: number, timeoutCallback?: (key: any) => void
	): void

	declare export function get(key: any): any

	declare export function del(key: any): void

	declare export function clear(): void

	declare export function size(): number

	declare export function memsize(): number

	declare export function debug(bool: boolean): void

	declare export function hits(): number

	declare export function misses(): number

	declare export function keys(): any

		
}