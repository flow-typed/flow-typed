

declare module 'gulp-rev' {
		declare interface IOptions {
		base?: string,
		cwd?: string,
		merge?: boolean
	}

	declare interface IRev {
		(): NodeJS.ReadWriteStream,
		manifest(): NodeJS.ReadWriteStream,
		manifest(path?: string): NodeJS.ReadWriteStream,
		manifest(options?: IOptions): NodeJS.ReadWriteStream,
		manifest(path?: string, options?: IOptions): NodeJS.ReadWriteStream
	}

			declare module.exports: IRev


}