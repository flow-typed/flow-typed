

declare module 'gulp-size' {
			declare function size(options?: size.Options): size.SizeStream

		declare module.exports: undefined


}

declare module 'size' {
		declare interface Options {
		showFiles?: boolean,
		gzip?: boolean,
		title?: string
	}

	declare interface SizeStream {
		size: number,
		prettySize: string
	}

			
}