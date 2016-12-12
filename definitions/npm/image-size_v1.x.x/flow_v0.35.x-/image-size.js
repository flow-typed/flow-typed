

declare module 'image-size' {
		declare interface ImageInfo {
		width: number,
		height: number,
		type: string
	}

	declare function sizeOf(path: string): ImageInfo

	declare function sizeOf(path: string, callback: (err: Error, dimensions: ImageInfo) => void): void

	declare function sizeOf(buffer: Buffer): ImageInfo

		declare module.exports: undefined


}