

declare module 'highlightjs-7.5.0' {
					
}

declare module 'hljs' {
		declare export interface IHighlightResult {
		relevance: number,
		keyword_count: number,
		value: string
	}

	declare export interface IAutoHighlightResult {
		language: string,
		second_best?: IAutoHighlightResult
	}

	declare export interface IMode {
		className?: string,
		begin: string,
		end?: string,
		beginWithKeyword?: boolean,
		endsWithParent?: boolean,
		lexems?: string,
		keywords?: Object,
		illegal?: string,
		excludeBegin?: boolean,
		excludeEnd?: boolean,
		returnBegin?: boolean,
		returnEnd?: boolean,
		contains?: IMode[],
		starts?: string,
		subLanguage?: string,
		relevance?: number
	}

	declare export function blockText(block: Node, ignoreNewLines: boolean): string

	declare export function blockLanguage(block: Node): string

	declare export function highlight(language_name: string, value: string): IHighlightResult

	declare export function highlightAuto(text: string): IHighlightResult

	declare export function fixMarkup(value: string, tabReplace: boolean, useBR: boolean): string

	declare export function highlightBlock(block: Node, tabReplace?: boolean, useBR?: boolean): void

	declare export function initHighlighting(): void

	declare export function initHighlightingOnLoad(): void

		
}

declare module 'highlight.js' {
					declare module.exports: undefined


}