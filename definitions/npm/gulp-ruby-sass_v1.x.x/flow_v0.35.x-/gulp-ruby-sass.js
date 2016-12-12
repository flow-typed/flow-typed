

declare module 'gulp-ruby-sass' {
		declare interface SassOptions {
		loadPath?: string | string[],
		require?: string,
		compass?: boolean,
		style?: string,
		force?: boolean,
		stopOnError?: boolean,
		scss?: boolean,
		defaultEncoding?: string,
		unixNewlines?: boolean,
		debugInfo?: boolean,
		lineNumbers?: boolean,
		lineComments?: boolean,
		check?: boolean,
		precision?: number,
		cacheLocation?: string,
		noCache?: boolean,
		trace?: boolean,
		quiet?: boolean,
		sourcemap?: any,
		watch?: string,
		update?: string,
		stdin?: boolean,
		interactive?: boolean
	}

	declare interface Options {
		verbose?: boolean,
		bundleExec?: boolean,
		sourcemap?: boolean,
		container?: string
	}

	declare function sass(source: string, options?: Options): NodeJS.ReadableStream

		declare module.exports: undefined


}