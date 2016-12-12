

declare module 'gulp-protractor' {
		declare interface IOptions {
		configFile?: string,
		args?: Array<string>,
		debug?: boolean
	}

	declare interface IGulpProtractor {
		getProtractorDir(): string,
		protractor(options?: IOptions): NodeJS.ReadWriteStream,
		webdriver_standalone: gulp.TaskCallback,
		webdriver_update: gulp.TaskCallback
	}

			declare module.exports: IGulpProtractor


}