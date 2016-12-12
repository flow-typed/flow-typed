

declare module 'gulp-rename' {
		declare interface ParsedPath {
		dirname?: string,
		basename?: string,
		extname?: string
	}

	declare interface Options {
		prefix?: string,
		suffix?: string
	}

	declare function rename(name: string): NodeJS.ReadWriteStream

	declare function rename(callback: (path: ParsedPath) => any): NodeJS.ReadWriteStream

	declare function rename(opts: Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}