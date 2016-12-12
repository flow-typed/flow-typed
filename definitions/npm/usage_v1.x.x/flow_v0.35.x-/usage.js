

declare module 'usage' {
		declare export interface ResultObject {
		memory: number,
		memoryInfo: {
		rss: number,
		vsize: number
	},
		cpu: number
	}

	declare export interface Options {
		keepHistory: boolean
	}

	declare export function lookup(pid: number, callback: (err: Error, result: ResultObject) => void): void

	declare export function lookup(
		pid: number, options: Options, callback: (err: Error, result: ResultObject) => void
	): void

	declare export function clearHistory(pid?: number): void

		
}