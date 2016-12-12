

declare module 'byline' {
			declare function bl(): bl.LineStream

	declare function bl(stream: NodeJS.ReadableStream, options?: bl.LineStreamOptions): bl.LineStream

		declare module.exports: undefined


}

declare module 'bl' {
		declare export interface LineStreamOptions {
		keepEmptyLines?: boolean
	}

	declare export interface LineStream {
		
	}

	declare export interface LineStreamCreatable {
		new (options?: LineStreamOptions): LineStream
	}

	declare export function createStream(): LineStream

	declare export function createStream(stream: NodeJS.ReadableStream, options?: LineStreamOptions): LineStream

		
}