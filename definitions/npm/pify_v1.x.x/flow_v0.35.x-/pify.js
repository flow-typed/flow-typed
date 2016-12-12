

declare module 'pify' {
		declare interface PifyOptions {
		multiArgs?: boolean,
		include?: [string | RegExp],
		exclude?: [string | RegExp],
		excludeMain?: boolean
	}

	declare function pify(
		input: Function, promiseModule?: Function, options?: PifyOptions
	): (...args: any[]) => Promise<any>

	declare function pify(input: any, promiseModule?: Function, options?: PifyOptions): any

	declare function pify(input: Function, options?: PifyOptions): (...args: any[]) => Promise<any>

	declare function pify(input: any, options?: PifyOptions): any

		declare module.exports: undefined


}