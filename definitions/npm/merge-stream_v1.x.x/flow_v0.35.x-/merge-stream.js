

declare module 'merge-stream' {
		declare interface IMergedStream {
		add(source: NodeJS.ReadableStream): IMergedStream,
		add(source: NodeJS.ReadableStream[]): IMergedStream,
		isEmpty(): boolean
	}

	declare function merge<T>(...streams: T[]): IMergedStream

		declare module.exports: undefined


}