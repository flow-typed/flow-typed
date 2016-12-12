

declare module 'wallabyjs' {
		declare export interface IWallabyConfig {
		comilers?: IWallabyCompilers,
		debug?: boolean,
		env?: IWallabyEnvironment,
		files: string[] | IWallabyFilePattern[],
		postprocessor?: IWallabyProcessor,
		preprocessor?: IWallabyProcessor,
		testFramework?: string,
		tests: string[] | IWallabyFilePattern[],
		workers?: IWallabyWorkers
	}

	declare export interface IWallabyCompilers {
		[pattern: string]: any
	}

	declare export interface IWallabyBuiltInCompilerOptions {
		[option: string]: string
	}

	declare export interface IWallabyBuiltInCompilers {
		babel(compilerOptions?: IWallabyBuiltInCompilerOptions): IWallabyCompilerResult,
		coffeeScript(compilerOptions?: IWallabyBuiltInCompilerOptions): IWallabyCompilerResult,
		typeScript(compilerOptions?: IWallabyBuiltInCompilerOptions): IWallabyCompilerResult
	}

	declare export interface IWallabyCompilerResult {
		map: string,
		code: string,
		ranges: any
	}

	declare export interface IWallabyProcessor {
		[pattern: string]: (file: IWallabyFile) => void
	}

	declare export interface IWallabyFile {
		content?: string,
		path?: string,
		rename(newPath: string): void,
		changeExt(newExt: string): void
	}

	declare export interface IWallabyFilePattern {
		pattern: string,
		ignore?: boolean,
		instrument?: boolean,
		load?: boolean
	}

	declare export interface IWallabyEnvironment {
		params?: IWallabyEnvironmentParameters,
		runner?: string,
		type?: string
	}

	declare export interface IWallabyEnvironmentParameters {
		env?: string,
		runner?: string
	}

	declare export interface IWallabyWorkers {
		recycle?: boolean
	}

	declare export interface IWallaby {
		localProjectDir?: string,
		projectCacheDir?: string,
		compilers?: IWallabyBuiltInCompilers,
		defaults?: any
	}

			
}