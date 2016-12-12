

declare module 'bunyan-logentries' {
		declare interface StreamOptions {
		token: string
	}

	declare export function createStream(options: StreamOptions): NodeJS.WritableStream

		
}