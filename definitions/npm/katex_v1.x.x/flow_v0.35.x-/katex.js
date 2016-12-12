

declare module 'katex' {
		declare interface KatexOptions {
		displayMode?: boolean,
		breakOnUnsupportedCmds?: boolean,
		errorColor?: string
	}

	declare function render(tex: string, element: HTMLElement, options?: KatexOptions): void

	declare function renderToString(tex: string, options?: KatexOptions): string

	declare class ParseError extends Error {
		constructor(message: string, lexer: any, position: number): this;
		name: string;
		message: string;
		position: number
	}

	
}