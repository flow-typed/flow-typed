

declare module 'through2-0.4.2' {
					
}

declare module 'through2' {
			declare function through2(
		transform?: (chunk: any, enc: string, callback: () => void) => void, flush?: () => void
	): NodeJS.ReadWriteStream

	declare function through2(
		opts?: stream.DuplexOptions, transform?: (chunk: any, enc: string, callback: () => void) => void, flush?: () => void
	): NodeJS.ReadWriteStream

	declare export function obj(
		transform?: (chunk: any, enc: string, callback: () => void) => void, flush?: () => void
	): NodeJS.ReadWriteStream

	declare export function push(data: any): void

		declare module.exports: undefined


}