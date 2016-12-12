

declare module 'node-persist' {
	declare type milliseconds = number;

				declare module.exports: undefined


}

declare module 'NodePersist' {
		declare export interface InitOptions {
		dir?: string,
		stringify?: (toSerialize: any) => string,
		parse?: (serialized: string) => any,
		encoding?: string,
		logging?: boolean | Function,
		continuous?: boolean,
		interval?: milliseconds | boolean,
		ttl?: milliseconds | boolean
	}

	declare export function init(options?: InitOptions, callback?: Function): Q.Promise<any>

	declare export function initSync(options?: InitOptions): void

	declare export function getItem(key: string, callback?: (err: any, value: any) => any): Q.Promise<any>

	declare export function getItemSync(key: string): any

	declare export function setItem(key: string, value: any, callback?: (err: any) => any): Q.Promise<any>

	declare export function setItemSync(key: string, value: any): void

	declare export function removeItem(key: string, callback?: (err: any) => any): Q.Promise<any>

	declare export function removeItemSync(key: string): void

	declare export function clear(callback?: (err: any) => any): Q.Promise<any>

	declare export function clearSync(): void

	declare export function values(): Array<any>

	declare export function valuesWithKeyMatch(match: string): Array<any>

	declare export function keys(): Array<string>

	declare export function length(): number

	declare export function forEach(callback: (key: string, value: any) => void): void

	declare export function persist(callback?: (err: any) => any): Q.Promise<any>

	declare export function persistSync(): void

	declare export function persistKey(key: string, callback?: (err: any) => any): Q.Promise<any>

	declare export function persistKeySync(key: string): void

		
}