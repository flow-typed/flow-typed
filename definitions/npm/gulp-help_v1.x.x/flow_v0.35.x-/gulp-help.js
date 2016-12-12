

declare module 'gulp-help' {
	declare type HelpOption = string | boolean;

		declare function gulpHelp(gulp: gulp.Gulp, options?: gulpHelp.GulpHelpOptions): gulpHelp.GulpHelp

		declare module.exports: undefined


}

declare module 'gulpHelp' {
		declare interface TaskMethod {
		(name: string, help: HelpOption, deps: string[], fn?: gulp.TaskCallback, option?: TaskOptions): any,
		(name: string, help: HelpOption, deps: string[]): any,
		(name: string, help: HelpOption, fn?: gulp.TaskCallback, option?: TaskOptions): any,
		(name: string, help: HelpOption): any,
		(name: string, deps: string[], fn?: gulp.TaskCallback, option?: TaskOptions): any,
		(name: string, fn?: gulp.TaskCallback, option?: TaskOptions): any
	}

	declare interface GulpHelp {
		task: TaskMethod,
		src: gulp.SrcMethod,
		dest: gulp.DestMethod,
		watch: gulp.WatchMethod
	}

	declare interface TaskOptions {
		aliases?: string[],
		options?: {
		[key: string]: string
	}
	}

	declare interface GulpHelpOptions {
		description?: string,
		aliases?: string[],
		hideEmpty?: boolean,
		hideDepsMessage?: boolean,
		afterPrintCallback?: Function
	}

			
}