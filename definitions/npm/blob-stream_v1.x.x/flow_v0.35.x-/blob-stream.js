

declare module 'blob-stream' {
			declare function BlobStream(): BlobStream.IBlobStream

		declare module.exports: undefined


}

declare module 'npm$namespace$BlobStream' {
		declare interface IBlobStream {
		toBlob(type?: string): Blob,
		toBlobURL(type?: string): string
	}

			
}