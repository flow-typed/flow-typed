

declare module 'stream-to-array' {
			declare function toArray(
		stream: NodeJS.ReadableStream, callback: (err: any, arr: any[]) => void
	): NodeJS.ReadWriteStream

		declare module.exports: undefined


}