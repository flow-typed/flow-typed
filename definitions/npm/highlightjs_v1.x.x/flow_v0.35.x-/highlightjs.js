

declare module 'highlightjs' {
					
}

declare module 'highlight.js' {
					declare module.exports: undefined


}

declare module 'npm$namespace$hljs' {
		declare export interface IHighlightResultBase {
		relevance: number,
		language: string,
		value: string
	}

	declare export interface IAutoHighlightResult {
		second_best?: IAutoHighlightResult
	}

	declare export interface IHighlightResult {
		top: ICompiledMode
	}

	declare export interface HLJSStatic {
		inherit(parent: Object, obj: Object): Object,
		IDENT_RE: string,
		UNDERSCORE_IDENT_RE: string,
		NUMBER_RE: string,
		C_NUMBER_RE: string,
		BINARY_NUMBER_RE: string,
		RE_STARTERS_RE: string,
		BACKSLASH_ESCAPE: IMode,
		APOS_STRING_MODE: IMode,
		QUOTE_STRING_MODE: IMode,
		PHRASAL_WORDS_MODE: IMode,
		C_LINE_COMMENT_MODE: IMode,
		C_BLOCK_COMMENT_MODE: IMode,
		HASH_COMMENT_MODE: IMode,
		NUMBER_MODE: IMode,
		C_NUMBER_MODE: IMode,
		BINARY_NUMBER_MODE: IMode,
		CSS_NUMBER_MODE: IMode,
		REGEX_MODE: IMode,
		TITLE_MODE: IMode,
		UNDERSCORE_TITLE_MODE: IMode
	}

	declare export interface IModeBase {
		className?: string,
		aliases?: string[],
		begin?: (string | RegExp),
		end?: (string | RegExp),
		case_insensitive?: boolean,
		beginKeyword?: string,
		endsWithParent?: boolean,
		lexems?: string,
		illegal?: string,
		excludeBegin?: boolean,
		excludeEnd?: boolean,
		returnBegin?: boolean,
		returnEnd?: boolean,
		starts?: string,
		subLanguage?: string,
		subLanguageMode?: string,
		relevance?: number,
		variants?: IMode[]
	}

	declare export interface IMode {
		keywords?: any,
		contains?: IMode[]
	}

	declare export interface ICompiledMode {
		compiled: boolean,
		contains?: ICompiledMode[],
		keywords?: Object,
		terminators: RegExp,
		terminator_end?: string
	}

	declare export interface IOptions {
		classPrefix?: string,
		tabReplace?: string,
		useBR?: boolean,
		languages?: string[]
	}

	declare export function highlight(
		name: string, value: string, ignore_illegals?: boolean, continuation?: boolean
	): IHighlightResult

	declare export function highlightAuto(value: string, languageSubset?: string[]): IAutoHighlightResult

	declare export function fixMarkup(value: string): string

	declare export function highlightBlock(block: Node): void

	declare export function configure(options: IOptions): void

	declare export function initHighlighting(): void

	declare export function initHighlightingOnLoad(): void

	declare export function registerLanguage(name: string, language: (hljs?: HLJSStatic) => IModeBase): void

	declare export function listLanguages(): string[]

	declare export function getLanguage(name: string): IMode

	declare export function inherit(parent: Object, obj: Object): Object

	declare export function COMMENT(begin: (string | RegExp), end: (string | RegExp), inherits: IModeBase): IMode

		
}