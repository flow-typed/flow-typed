

declare module 'gulp-tsd' {
		declare interface IOptions {
		command?: string,
		latest?: boolean,
		config?: string,
		opts?: Object
	}

	declare function tsd(opts?: IOptions, callback?: gulp.TaskCallback): NodeJS.ReadWriteStream

		declare module.exports: undefined


}