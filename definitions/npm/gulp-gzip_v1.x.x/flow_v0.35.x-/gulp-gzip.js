

declare module 'gulp-gzip' {
					declare module.exports: Gzip


}

declare module 'gzip' {
		declare interface Gzip {
		(options?: Options): NodeJS.ReadWriteStream
	}

	declare interface Options {
		append?: boolean,
		extension?: string,
		preExtension?: string,
		threshold?: number | string | boolean,
		gzipOptions?: zlib.ZlibOptions
	}

			
}