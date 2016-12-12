

declare module 'escodegen' {
		declare export interface FormatOptions {
		indent?: IndentOptions,
		newline?: string,
		space?: string,
		json?: boolean,
		renumber?: boolean,
		hexadecimal?: boolean,
		quotes?: string,
		escapeless?: boolean,
		compact?: boolean,
		parentheses?: boolean,
		semicolons?: boolean,
		safeConcatenation?: boolean,
		preserveBlankLines?: boolean
	}

	declare export interface IndentOptions {
		style?: string,
		base?: number,
		adjustMultilineComment?: boolean
	}

	declare export interface MozillaOptions {
		starlessGenerator?: boolean,
		parenthesizedComprehensionBlock?: boolean,
		comprehensionExpressionStartsWithAssignment?: boolean
	}

	declare export interface GenerateOptions {
		format?: FormatOptions,
		moz?: MozillaOptions,
		parse?: Function,
		comment?: boolean,
		sourceMap?: string,
		sourceMapWithCode?: boolean,
		sourceContent?: string,
		sourceCode?: string,
		sourceMapRoot?: string,
		directive?: boolean,
		file?: string,
		verbatim?: string
	}

	declare export function generate(ast: any, options?: GenerateOptions): string

	declare export function attachComments(ast: any, comments: any, tokens: any): any

		
}