

declare module 'less' {
		declare interface LessStatic {
		options: Less.StaticOptions,
		render(
		input: string, callback: (error: Less.RenderError, output: Less.RenderOutput) => void
	): void,
		render(
		input: string, options: Less.Options, callback: (error: Less.RenderError, output: Less.RenderOutput) => void
	): void,
		render(input: string): Promise<Less.RenderOutput>,
		render(input: string, options: Less.Options): Promise<Less.RenderOutput>,
		version: number[]
	}

			declare module.exports: LessStatic


}

declare module 'npm$namespace$Less' {
		declare interface RootFileInfo {
		filename: string,
		relativeUrls: boolean,
		rootpath: string,
		currentDirectory: string,
		entryPath: string,
		rootFilename: string
	}

	declare interface Plugin {
		install: (less: LessStatic, pluginManager: PluginManager) => void
	}

	declare interface PreProcessor {
		process: (src: string, extra: PreProcessorExtraInfo) => string
	}

	declare interface PreProcessorExtraInfo {
		context: {
		pluginManager: PluginManager
	},
		fileInfo: RootFileInfo,
		imports: {
		[key: string]: any
	}
	}

	declare interface SourceMapOption {
		sourceMapURL: string,
		sourceMapBasepath: string,
		sourceMapRootpath: string,
		outputSourceFiles: boolean,
		sourceMapFileInline: boolean
	}

	declare interface StaticOptions {
		async: boolean,
		fileAsync: boolean
	}

	declare interface Options {
		sourceMap?: SourceMapOption,
		filename?: string,
		plugins: Plugin[],
		rootFileInfo?: RootFileInfo
	}

	declare interface RenderError {
		column: number,
		extract: string[],
		filename: string,
		index: number,
		line: number,
		message: string,
		type: string
	}

	declare interface RenderOutput {
		css: string,
		map: string,
		imports: string[]
	}

		declare class PluginManager  {
		constructor(less: LessStatic): this;
		addPreProcessor(preProcessor: PreProcessor, priority?: number): void
	}

	
}