

declare module 'webpack' {
	declare type ExternalsElement = string | RegExp | ExternalsObjectElement | ExternalsFunctionElement;

	declare type LoaderCondition = string | RegExp | ((absPath: string) => boolean);

	declare interface Configuration {
		context?: string,
		entry?: string | string[] | Entry,
		devtool?: string,
		output?: Output,
		module?: Module,
		resolve?: Resolve,
		resolveLoader?: ResolveLoader,
		externals?: ExternalsElement | ExternalsElement[],
		target?: string,
		bail?: boolean,
		profile?: boolean,
		cache?: boolean | any,
		watch?: boolean,
		watchOptions?: WatchOptions,
		debug?: boolean,
		devServer?: any,
		node?: Node,
		amd?: {
		[moduleName: string]: boolean
	},
		recordsPath?: string,
		recordsInputPath?: string,
		recordsOutputPath?: string,
		plugins?: (Plugin | Function)[],
		stats?: compiler.StatsOptions
	}

	declare interface Entry {
		[name: string]: string | string[]
	}

	declare interface Output {
		path?: string,
		filename?: string,
		chunkFilename?: string,
		sourceMapFilename?: string,
		devtoolModuleFilenameTemplate?: string,
		devtoolFallbackModuleFilenameTemplate?: string,
		devtoolLineToLine?: boolean,
		hotUpdateChunkFilename?: string,
		hotUpdateMainFilename?: string,
		publicPath?: string,
		jsonpFunction?: string,
		hotUpdateFunction?: string,
		pathinfo?: boolean,
		library?: string,
		libraryTarget?: string,
		umdNamedDefine?: boolean,
		sourcePrefix?: string,
		crossOriginLoading?: string | boolean
	}

	declare interface Module {
		loaders?: Loader[],
		preLoaders?: Loader[],
		postLoaders?: Loader[],
		noParse?: RegExp | RegExp[],
		unknownContextRequest?: string,
		unknownContextRecursive?: boolean,
		unknownContextRegExp?: RegExp,
		unknownContextCritical?: boolean,
		exprContextRequest?: string,
		exprContextRegExp?: RegExp,
		exprContextRecursive?: boolean,
		exprContextCritical?: boolean,
		wrappedContextRegExp?: RegExp,
		wrappedContextRecursive?: boolean,
		wrappedContextCritical?: boolean
	}

	declare interface Resolve {
		alias?: {
		[key: string]: string
	},
		root?: string | string[],
		modulesDirectories?: string[],
		fallback?: string | string[],
		extensions?: string[],
		packageMains?: (string | string[])[],
		packageAlias?: (string | string[])[],
		unsafeCache?: RegExp | RegExp[] | boolean
	}

	declare interface ResolveLoader {
		moduleTemplates?: string[]
	}

	declare interface ExternalsObjectElement {
		[key: string]: boolean | string
	}

	declare interface ExternalsFunctionElement {
		(context: any, request: any, callback: (error: any, result: any) => void): any
	}

	declare interface WatchOptions {
		aggregateTimeout?: number,
		poll?: boolean | number
	}

	declare interface Node {
		console?: boolean,
		global?: boolean,
		process?: boolean,
		Buffer?: boolean,
		___filename?: boolean | string,
		___dirname?: boolean | string,
		[nodeBuiltin: string]: boolean | string
	}

	declare interface Loader {
		exclude?: LoaderCondition | LoaderCondition[],
		include?: LoaderCondition | LoaderCondition[],
		test: LoaderCondition | LoaderCondition[],
		loader?: string,
		loaders?: string[],
		query?: {
		[name: string]: any
	}
	}

	declare interface Plugin {
		
	}

	declare interface Webpack {
		(config: Configuration, callback?: compiler.CompilerCallback): compiler.Compiler,
		optimize: Optimize,
		dependencies: Dependencies,
		NormalModuleReplacementPlugin: NormalModuleReplacementPluginStatic,
		ContextReplacementPlugin: ContextReplacementPluginStatic,
		IgnorePlugin: IgnorePluginStatic,
		PrefetchPlugin: PrefetchPluginStatic,
		ResolverPlugin: ResolverPluginStatic,
		BannerPlugin: BannerPluginStatic,
		DefinePlugin: DefinePluginStatic,
		ProvidePlugin: ProvidePluginStatic,
		SourceMapDevToolPlugin: SourceMapDevToolPluginStatic,
		HotModuleReplacementPlugin: HotModuleReplacementPluginStatic,
		ExtendedAPIPlugin: ExtendedAPIPluginStatic,
		NoErrorsPlugin: NoErrorsPluginStatic,
		WatchIgnorePlugin: WatchIgnorePluginStatic
	}

	declare interface Optimize {
		DedupePlugin: optimize.DedupePluginStatic,
		LimitChunkCountPlugin: optimize.LimitChunkCountPluginStatic,
		MinChunkSizePlugin: optimize.MinChunkSizePluginStatic,
		OccurenceOrderPlugin: optimize.OccurenceOrderPluginStatic,
		OccurrenceOrderPlugin: optimize.OccurenceOrderPluginStatic,
		UglifyJsPlugin: optimize.UglifyJsPluginStatic,
		CommonsChunkPlugin: optimize.CommonsChunkPluginStatic,
		AggressiveMergingPlugin: optimize.AggressiveMergingPluginStatic
	}

	declare interface Dependencies {
		LabeledModulesPlugin: dependencies.LabeledModulesPluginStatic
	}

	declare interface DirectoryDescriptionFilePluginStatic {
		new (file: string, files: string[]): Plugin
	}

	declare interface NormalModuleReplacementPluginStatic {
		new (resourceRegExp: any, newResource: any): Plugin
	}

	declare interface ContextReplacementPluginStatic {
		new (
		resourceRegExp: any, newContentResource?: any, newContentRecursive?: any, newContentRegExp?: any
	): Plugin
	}

	declare interface IgnorePluginStatic {
		new (requestRegExp: any, contextRegExp?: any): Plugin
	}

	declare interface PrefetchPluginStatic {
		new (context: any, request: any): Plugin,
		new (request: any): Plugin
	}

	declare interface ResolverPluginStatic {
		new (plugins: Plugin[], files?: string[]): Plugin,
		DirectoryDescriptionFilePlugin: DirectoryDescriptionFilePluginStatic,
		FileAppendPlugin: FileAppendPluginStatic
	}

	declare interface FileAppendPluginStatic {
		new (files: string[]): Plugin
	}

	declare interface BannerPluginStatic {
		new (banner: any, options: any): Plugin
	}

	declare interface DefinePluginStatic {
		new (definitions: any): Plugin
	}

	declare interface ProvidePluginStatic {
		new (definitions: any): Plugin
	}

	declare interface SourceMapDevToolPluginStatic {
		new (options: any): Plugin
	}

	declare interface HotModuleReplacementPluginStatic {
		new (options?: any): Plugin
	}

	declare interface ExtendedAPIPluginStatic {
		new (): Plugin
	}

	declare interface NoErrorsPluginStatic {
		new (): Plugin
	}

	declare interface WatchIgnorePluginStatic {
		new (paths: RegExp[]): Plugin
	}

			declare module.exports: Webpack


}

declare module 'optimize' {
		declare interface DedupePluginStatic {
		new (): Plugin
	}

	declare interface LimitChunkCountPluginStatic {
		new (options: any): Plugin
	}

	declare interface MinChunkSizePluginStatic {
		new (options: any): Plugin
	}

	declare interface OccurenceOrderPluginStatic {
		new (preferEntry: boolean): Plugin
	}

	declare interface UglifyJsPluginStatic {
		new (options?: UglifyJS.MinifyOptions): Plugin
	}

	declare interface CommonsChunkPluginStatic {
		new (chunkName: string, filenames?: string | string[]): Plugin,
		new (options?: any): Plugin
	}

	declare interface AggressiveMergingPluginStatic {
		new (options: any): Plugin
	}

			
}

declare module 'dependencies' {
		declare interface LabeledModulesPluginStatic {
		new (): Plugin
	}

			
}

declare module 'compiler' {
	declare type CompilerCallback = (err: Error, stats: Stats) => void;

	declare interface Compiler {
		run(callback: CompilerCallback): void,
		watch(watchOptions: WatchOptions, handler: CompilerCallback): Watching,
		outputFileSystem: any,
		name: string,
		options: Configuration
	}

	declare interface Watching {
		close(callback: () => void): void
	}

	declare interface WatchOptions {
		aggregateTimeout?: number,
		poll?: number | boolean
	}

	declare interface Stats {
		hasErrors(): boolean,
		hasWarnings(): boolean,
		toJson(options?: StatsOptions): any,
		toString(options?: StatsToStringOptions): string
	}

	declare interface StatsOptions {
		context?: boolean,
		hash?: boolean,
		version?: boolean,
		timings?: boolean,
		assets?: boolean,
		chunks?: boolean,
		chunkModules?: boolean,
		modules?: boolean,
		children?: boolean,
		cached?: boolean,
		reasons?: boolean,
		source?: boolean,
		errorDetails?: boolean,
		chunkOrigins?: boolean,
		modulesSort?: string,
		chunksSort?: string,
		assetsSort?: string
	}

	declare interface StatsToStringOptions {
		colors?: boolean
	}

			
}