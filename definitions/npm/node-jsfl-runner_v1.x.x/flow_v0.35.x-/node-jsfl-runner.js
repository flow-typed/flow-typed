

declare module 'node-jsfl-runner' {
		declare interface JSFL {
		init: (...args: any[]) => void,
		[index: string]: any
	}

	declare function createJSFL(
		jsfl: JSFL, fileName: string, initParams: Array<any>, callback: (err: NodeJS.ErrnoException) => void
	): void

	declare function deleteJSFL(fileName: string, callback: (err: NodeJS.ErrnoException) => void): void

	declare function runJSFL(
		flashLocation: string, fileName: string, callback: (err: NodeJS.ErrnoException) => void
	): void

		
}