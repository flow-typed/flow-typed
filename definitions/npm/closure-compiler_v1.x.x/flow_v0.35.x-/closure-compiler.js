

declare module 'closure-compiler' {
	declare type Callback = (err: Error, stdout: string, stderr: string) => any;

		declare function compile(src: string, callback: Callback): void

	declare function compile(
		src: string, options: {
		[k: string]: string | string[]
	}, callback: Callback
	): void

		
}