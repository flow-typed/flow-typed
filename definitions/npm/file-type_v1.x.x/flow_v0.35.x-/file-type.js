

declare module 'file-type' {
		declare interface FileTypeResult {
		ext: string,
		mime: string
	}

	declare function FileType(buf: Buffer): FileTypeResult

		declare module.exports: undefined


}