

declare module 'from' {
					declare module.exports: From


}

declare module 'mod' {
		declare interface From {
		(getChunk: (count: number, next: () => any) => any): NodeJS.ReadableStream,
		(chunks: any[]): NodeJS.ReadableStream,
		emit(type: string, data: any): void
	}

			
}