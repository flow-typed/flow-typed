

declare module 'path-to-regexp' {
			declare function pathToRegexp(path: string, keys?: string[], options?: pathToRegexp.Options): RegExp

		declare module.exports: undefined


}

declare module 'pathToRegexp' {
		declare interface Options {
		sensitive?: boolean,
		strict?: boolean,
		end?: boolean
	}

			
}