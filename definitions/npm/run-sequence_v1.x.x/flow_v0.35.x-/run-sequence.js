

declare module 'run-sequence' {
		declare interface IRunSequence {
		(...streams: (string | string[] | gulp.TaskCallback)[]): NodeJS.ReadWriteStream,
		use(gulp: gulp.Gulp): IRunSequence
	}

			declare module.exports: IRunSequence


}