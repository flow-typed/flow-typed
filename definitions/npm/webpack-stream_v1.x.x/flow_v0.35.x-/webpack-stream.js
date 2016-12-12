

declare module 'webpack-stream' {
		declare interface WebpackStreamStatic {
		(): NodeJS.ReadWriteStream,
		(config: webpack.Configuration): NodeJS.ReadWriteStream,
		(config: webpack.Configuration, webpack: webpack.Webpack): NodeJS.ReadWriteStream,
		(config: webpack.Configuration, webpack: webpack.Webpack, callback?: (err: Error, stats: webpack.compiler.Stats) => void): NodeJS.ReadWriteStream
	}

			declare module.exports: WebpackStreamStatic


}