

declare module 'checksum' {
		declare interface ChecksumOptions {
		algorithm?: string
	}

	declare function file(filename: string, callback: (error: Error, hash: string) => void): void

	declare function file(
		filename: string, options: ChecksumOptions, callback: (error: Error, hash: string) => void
	): void

	declare function checksum(value: any, options?: checksum.ChecksumOptions): string

		declare module.exports: undefined


}