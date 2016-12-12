

declare module 'chalk' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Chalk' {
		declare export interface ChalkChain {
		(...text: string[]): string
	}

	declare export interface ChalkStyleElement {
		open: string,
		close: string
	}

	declare export interface ChalkStyle {
		reset: ChalkChain,
		bold: ChalkChain,
		italic: ChalkChain,
		underline: ChalkChain,
		inverse: ChalkChain,
		strikethrough: ChalkChain,
		black: ChalkChain,
		red: ChalkChain,
		green: ChalkChain,
		yellow: ChalkChain,
		blue: ChalkChain,
		magenta: ChalkChain,
		cyan: ChalkChain,
		white: ChalkChain,
		gray: ChalkChain,
		grey: ChalkChain,
		bgBlack: ChalkChain,
		bgRed: ChalkChain,
		bgGreen: ChalkChain,
		bgYellow: ChalkChain,
		bgBlue: ChalkChain,
		bgMagenta: ChalkChain,
		bgCyan: ChalkChain,
		bgWhite: ChalkChain
	}

	declare export interface ChalkStyleMap {
		reset: ChalkStyleElement,
		bold: ChalkStyleElement,
		italic: ChalkStyleElement,
		underline: ChalkStyleElement,
		inverse: ChalkStyleElement,
		strikethrough: ChalkStyleElement,
		black: ChalkStyleElement,
		red: ChalkStyleElement,
		green: ChalkStyleElement,
		yellow: ChalkStyleElement,
		blue: ChalkStyleElement,
		magenta: ChalkStyleElement,
		cyan: ChalkStyleElement,
		white: ChalkStyleElement,
		gray: ChalkStyleElement,
		bgBlack: ChalkStyleElement,
		bgRed: ChalkStyleElement,
		bgGreen: ChalkStyleElement,
		bgYellow: ChalkStyleElement,
		bgBlue: ChalkStyleElement,
		bgMagenta: ChalkStyleElement,
		bgCyan: ChalkStyleElement,
		bgWhite: ChalkStyleElement
	}

	declare export function stripColor(value: string): any

	declare export function hasColor(str: string): boolean

		
}