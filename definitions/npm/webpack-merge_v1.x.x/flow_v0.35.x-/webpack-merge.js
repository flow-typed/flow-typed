

declare module 'webpack-merge' {
		declare interface WebpackMerge {
		(...configs: Configuration[]): Configuration,
		smart(...configs: Configuration[]): Configuration
	}

			declare module.exports: WebpackMerge


}