

declare module 'tabtab' {
		declare interface CallBack {
		(error?: Error, data?: Data, text?: string): any
	}

	declare interface Data {
		line: string,
		words: number,
		point: number,
		partial: string,
		last: string,
		lastPartial: string,
		prev: string
	}

	declare export function complete(name: string, cb: CallBack): void

	declare export function complete(name: string, completer: string, cb: CallBack): void

	declare export function isComplete(): boolean

	declare export function parseOut(str: string): {
		shorts: string[],
		longs: string[]
	}

	declare export function parseTasks(str: string, prefix: string, reg?: RegExp | string): string[]

	declare export function log(values: string[], data: Data, prefix?: string): void

		
}