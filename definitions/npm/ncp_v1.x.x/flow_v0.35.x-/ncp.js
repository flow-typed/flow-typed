

declare module 'ncp' {
		declare interface Options {
		filter?: RegExp | ((filename: string) => boolean),
		transform?: (read: NodeJS.ReadableStream, write: NodeJS.WritableStream) => void,
		clobber?: boolean,
		stopOnErr?: boolean,
		errs?: NodeJS.WritableStream
	}

	declare function ncp(source: string, destination: string, callback: (err: Error) => void): void

	declare function ncp(
		source: string, destination: string, options: Options, callback: (err: Error) => void
	): void

		
}