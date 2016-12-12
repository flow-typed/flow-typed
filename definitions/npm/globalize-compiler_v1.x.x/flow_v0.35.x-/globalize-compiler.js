import type { GlobalizeCompilerStatic } from 'npm$namespace$GlobalizeCompiler'

declare module 'globalize-compiler' {
					declare module.exports: GlobalizeCompilerStatic


}

declare module 'npm$namespace$GlobalizeCompiler' {
		declare interface CompileTemplateOptions {
		code: string,
		dependencies: string[]
	}

	declare interface CompileOptions {
		template?: (options: CompileTemplateOptions) => string
	}

	declare interface FormatterOrParserFunction {
		(...arguments: any[]): any
	}

	declare interface ExtractFunction {
		(globalize: GlobalizeStatic): FormatterOrParserFunction[]
	}

	declare interface CompileExtractsAttributes {
		extracts: ExtractFunction,
		defaultLocale: string,
		cldr?: Object | ((locale: string) => Object),
		messages?: Object | ((locale: string) => Object)
	}

	declare interface GlobalizeCompilerStatic {
		compile(
		formattersAndParsers: FormatterOrParserFunction[] | {
		[key: string]: FormatterOrParserFunction
	}, options?: CompileOptions
	): string,
		extract(input: string | ESTree.Program): ExtractFunction,
		compileExtracts(attributes: CompileExtractsAttributes): string
	}

			
}