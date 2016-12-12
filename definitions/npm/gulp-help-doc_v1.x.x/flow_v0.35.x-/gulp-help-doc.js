

declare module 'gulp-help-doc' {
					declare module.exports: Usage


}

declare module 'usage' {
		declare interface UsageOptions {
		lineWidth?: number,
		keysColumnWidth?: number,
		padding?: number,
		logger?: {
		log: Function
	},
		gulpfile?: string
	}

	declare interface Usage {
		(gulp: gulp.Gulp, options?: UsageOptions): Promise<any>
	}

			
}