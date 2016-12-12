

declare module 'gulp-tslint' {
					declare module.exports: GulpTsLint


}

declare module 'gulpTsLint' {
	declare type Reporter = string | ((output: Output[], file: vinyl, options: ReportOptions) => any);

	declare interface GulpTsLint {
		(options?: Options): NodeJS.ReadWriteStream,
		report(reporter?: Reporter, options?: ReportOptions): NodeJS.ReadWriteStream,
		report(options?: ReportOptions): NodeJS.ReadWriteStream
	}

	declare interface Options {
		configuration?: {
		
	},
		rulesDirectory?: string,
		tslint?: GulpTsLint
	}

	declare interface ReportOptions {
		emitError?: boolean,
		reportLimit?: number,
		summarizeFailureOutput?: boolean
	}

	declare interface Position {
		position: number,
		line: number,
		character: number
	}

	declare interface Output {
		name: string,
		failure: string,
		startPosition: Position,
		endPosition: Position,
		ruleName: string
	}

			
}