

declare module 'imagemagick' {
		declare export interface Features {
		format?: string,
		width?: number,
		height?: number,
		depth?: number
	}

	declare export interface Options {
		srcPath?: string,
		srcData?: string,
		srcFormat?: string,
		dstPath?: string,
		quality?: number,
		format?: string,
		progressive?: boolean,
		colorspace?: any,
		width?: number,
		height?: number,
		strip?: boolean,
		filter?: string,
		sharpening?: number,
		customArgs?: any[],
		timeout?: number
	}

	declare export interface ResizeArgs {
		opt: Options,
		args: string[]
	}

	declare export function identify(
		path: string, callback: (err: Error, features: Features) => void
	): child_process.ChildProcess

	declare export function identify(
		path: any[], callback: (err: Error, result: string) => void
	): child_process.ChildProcess

	declare export function readMetadata(
		path: string, callback: (err: Error, result: any) => void
	): child_process.ChildProcess

	declare export function convert(
		args: any, callback: (err: Error, result: any) => void
	): child_process.ChildProcess

	declare export function convert(
		args: any, timeout: number, callback: (err: Error, result: any) => void
	): child_process.ChildProcess

	declare export function resize(
		options: Options, callback: (err: Error, result: any) => void
	): child_process.ChildProcess

	declare export function crop(
		options: Options, callback: (err: Error, result: any) => void
	): child_process.ChildProcess

	declare export function resizeArgs(options: Options): ResizeArgs

		
}