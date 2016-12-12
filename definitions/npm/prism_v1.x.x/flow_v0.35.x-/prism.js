import type { Prism } from 'npm$namespace$PrismJS'

declare module 'prism' {
					
}

declare module 'npm$namespace$PrismJS' {
		declare interface Prism {
		util: Util,
		languages: Languages,
		plugins: any,
		highlightAll(async: boolean, callback?: (element: Element) => void): void,
		highlightElement(element: Element, async: boolean, callback?: (element: Element) => void): void,
		highlight(
		text: string, grammer: LanguageDefinition, language?: LanguageDefinition
	): string,
		tokenize(
		text: string, grammar: LanguageDefinition, language?: LanguageDefinition
	): Array<string>,
		fileHighlight(): void,
		hooks: Hooks
	}

	declare interface Environment {
		element?: Element,
		language?: LanguageDefinition,
		grammer?: any,
		code?: any,
		highlightedCode?: any,
		type?: string,
		content?: string,
		tag?: string,
		classes?: Array<string>,
		attributes?: Array<string> | Object,
		parent?: Element
	}

	declare interface Identifier {
		value: number
	}

	declare interface Util {
		encode(tokens: Token | Array<Token> | string): Token | Array<Token> | string,
		type(o: Object): string,
		objId(obj: Object): Identifier,
		clone(o: LanguageDefinition): LanguageDefinition
	}

	declare interface LanguageDefinition {
		keyword?: RegExp | LanguageDefinition,
		number?: RegExp | LanguageDefinition,
		function?: RegExp | LanguageDefinition,
		string?: RegExp | LanguageDefinition,
		boolean?: RegExp | LanguageDefinition,
		operator?: RegExp | LanguageDefinition,
		punctuation?: RegExp | LanguageDefinition,
		atrule?: RegExp | LanguageDefinition,
		url?: RegExp | LanguageDefinition,
		selector?: RegExp | LanguageDefinition,
		property?: RegExp | LanguageDefinition,
		important?: RegExp | LanguageDefinition,
		style?: RegExp | LanguageDefinition,
		alias?: string,
		pattern?: RegExp,
		lookbehind?: boolean,
		inside?: LanguageDefinition,
		rest?: Array<Token>
	}

	declare interface Languages {
		extend(id: string, redef: LanguageDefinition): LanguageDefinition,
		insertBefore(inside: string, before: string, insert: LanguageDefinition, root: Object): any
	}

	declare interface Hooks {
		all: Array<Array<(env: Environment) => void>>,
		add(name: string, callback: (env: Environment) => void): void,
		run(name: string, env: Environment): void
	}

	declare interface Token {
		type: string,
		content: Token | Array<Token> | string,
		alias: string,
		stringify(
		o: string | Array<any>, language: LanguageDefinition, parent: HTMLPreElement
	): string
	}

			
}