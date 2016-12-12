

declare module 'electron-json-storage' {
			declare export function get(key: string, callback: (error: any, data: Object) => void): void

	declare export function set(key: string, json: Object, callback: (error: any) => void): void

	declare export function has(key: string, callback: (error: any, hasKey: boolean) => void): void

	declare export function keys(callback: (error: any, keys: string[]) => void): void

	declare export function remove(key: string, callback: (error: any) => void): void

	declare export function clear(callback: (error: any) => void): void

		
}