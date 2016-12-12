

declare module 'html-webpack-plugin' {
		declare interface HtmlWebpackPluginConfiguration {
		title?: string,
		filename?: string,
		template?: string,
		inject?: boolean | "head" | "body",
		favicon?: string,
		minify?: any,
		hash?: boolean,
		cache?: boolean,
		showErrors?: boolean,
		chunks?: string[],
		chunksSortMode?: "none" | "auto" | "dependency" | Function,
		excludeChunks?: string[],
		xhtml?: boolean
	}

	declare interface HtmlWebpackPlugin {
		new (): Plugin,
		new (options: HtmlWebpackPluginConfiguration): Plugin
	}

			declare module.exports: HtmlWebpackPlugin


}