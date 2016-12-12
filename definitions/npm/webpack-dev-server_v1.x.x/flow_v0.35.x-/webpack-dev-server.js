

declare module 'webpack-dev-server' {
					declare module.exports: WebpackDevServer


}

declare module 'WebpackDevServer' {
		declare export interface Configuration {
		contentBase?: string,
		hot?: boolean,
		https?: boolean,
		historyApiFallback?: boolean,
		compress?: boolean,
		proxy?: any,
		staticOptions?: any,
		quiet?: boolean,
		noInfo?: boolean,
		lazy?: boolean,
		filename?: string,
		watchOptions?: webpack.WatchOptions,
		publicPath: string,
		headers?: any,
		stats?: webpack.compiler.StatsOptions | webpack.compiler.StatsToStringOptions,
		setup(app: core.Express): void
	}

	declare export interface WebpackDevServer {
		new (webpack: webpack.compiler.Compiler, config: Configuration): WebpackDevServer,
		listen(port: number, hostname: string, callback?: Function): http.Server,
		listen(port: number, callback?: Function): http.Server
	}

			
}