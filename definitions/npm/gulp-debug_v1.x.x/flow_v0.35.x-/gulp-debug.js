

declare module 'gulp-debug' {
		declare interface IOptions {
		title?: string,
		minimal?: boolean
	}

	declare function debug(options?: IOptions): NodeJS.ReadWriteStream

		declare module.exports: undefined


}