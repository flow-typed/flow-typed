

declare module 'node-7z' {
		declare interface PromiseWithProgress<T> {
		progress(progress: (files: Array<string>) => void): this
	}

	declare interface CommandLineSwitches {
		raw?: Array<string>,
		[key: string]: any
	}

	declare interface FileSpec {
		path: string,
		type: string,
		method: string,
		physicalSize: number
	}

		declare class Zip  {
		add(
		archive: string, files: string | Array<string>, options: CommandLineSwitches
	): PromiseWithProgress<{
		
	}>;
		delete(
		archive: string, files: string | Array<string>, options: CommandLineSwitches
	): PromiseWithProgress<{
		
	}>;
		extract(
		archive: string, dest: string, options: CommandLineSwitches
	): PromiseWithProgress<{
		
	}>;
		extractFull(
		archive: string, dest: string, options: CommandLineSwitches
	): PromiseWithProgress<{
		
	}>;
		list(archive: string, options: CommandLineSwitches): PromiseWithProgress<FileSpec>;
		test(archive: string, options: CommandLineSwitches): PromiseWithProgress<{
		
	}>;
		update(
		archive: string, files: string | Array<string>, options: CommandLineSwitches
	): PromiseWithProgress<{
		
	}>
	}

	declare module.exports: undefined


}