

declare module 'watchify' {
					declare module.exports: Constructor


}

declare module 'Watchify' {
		declare export interface Constructor {
		args: {
		cache: any,
		packageCache: any
	},
		(b: T, opts?: Watchify.Options): T,
		(b: Browserify.BrowserifyObject, opts?: Watchify.Options): Browserify.BrowserifyObject
	}

	declare export interface Options {
		delay?: number,
		ignoreWatch?: boolean | (string | RegExp | ((...values: any[]) => boolean) | (string | RegExp | ((...values: any[]) => boolean))[]),
		poll?: number
	}

			
}