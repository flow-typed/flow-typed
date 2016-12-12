

declare module 'gulp-typescript' {
			declare function GulpTypescript(
		params?: GulpTypescript.Params, filters?: GulpTypescript.FilterSettings, reporter?: GulpTypescript.Reporter
	): GulpTypescript.CompilationStream

		declare module.exports: undefined


}

declare module 'GulpTypescript' {
		declare interface Params {
		declarationFiles?: boolean,
		module?: string,
		noEmitOnError?: boolean,
		noExternalResolve?: boolean,
		noImplicitAny?: boolean,
		noLib?: boolean,
		removeComments?: boolean,
		sourceRoot?: string,
		sortOutput?: boolean,
		target?: string,
		typescript?: any,
		outFile?: string,
		outDir?: string,
		suppressImplicitAnyIndexErrors?: boolean,
		jsx?: string,
		declaration?: boolean,
		emitDecoratorMetadata?: boolean,
		experimentalDecorators?: boolean,
		experimentalAsyncFunctions?: boolean,
		moduleResolution?: string,
		noEmitHelpers?: boolean,
		preserveConstEnums?: boolean,
		isolatedModules?: boolean
	}

	declare interface TsConfig {
		files?: string[],
		exclude?: string[],
		compilerOptions?: any
	}

	declare interface Project {
		config: TsConfig,
		src(): NodeJS.ReadWriteStream
	}

	declare interface FilterSettings {
		referencedFrom?: string[]
	}

	declare interface Reporter {
		error(error: any): void
	}

	declare interface CompilationStream {
		dts: NodeJS.ReadWriteStream,
		js: NodeJS.ReadWriteStream
	}

	declare export function createProject(params?: Params): Project

	declare export function createProject(file: string, params?: Params): Project

	declare export function filter(filters: FilterSettings): CompilationStream

		
}

declare module 'reporter' {
			declare function nullReporter(): Reporter

	declare function defaultReporter(): Reporter

	declare function fullReporter(showFullFilename?: boolean): Reporter

		
}