

declare module 'bluebird-retry' {
			declare function retry<T>(func: (param: T) => void, options?: retry.Options): Promise<T>

		declare module.exports: undefined


}

declare module 'retry' {
		declare export interface Options {
		interval?: number,
		backoff?: number,
		max_interval?: number,
		timeout?: number,
		max_tries?: number
	}

			
}