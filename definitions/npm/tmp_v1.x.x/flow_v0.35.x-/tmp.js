

declare module 'tmp' {
		declare interface Options {
		mode?: number
	}

	declare interface SimpleOptions {
		prefix?: string,
		postfix?: string,
		template?: string,
		dir?: string,
		tries?: number,
		keep?: boolean,
		unsafeCleanup?: boolean
	}

	declare interface SynchrounousResult {
		name: string,
		fd: number,
		removeCallback: () => void
	}

	declare function file(
		callback: (err: any, path: string, fd: number, cleanupCallback: () => void) => void
	): void

	declare function file(
		config: Options, callback?: (err: any, path: string, fd: number, cleanupCallback: () => void) => void
	): void

	declare function fileSync(config?: Options): SynchrounousResult

	declare function dir(callback: (err: any, path: string, cleanupCallback: () => void) => void): void

	declare function dir(
		config: Options, callback?: (err: any, path: string, cleanupCallback: () => void) => void
	): void

	declare function dirSync(config?: Options): SynchrounousResult

	declare function tmpName(callback: (err: any, path: string) => void): void

	declare function tmpName(config: SimpleOptions, callback?: (err: any, path: string) => void): void

	declare function tmpNameSync(config?: SimpleOptions): string

	declare function setGracefulCleanup(): void

		declare module.exports: undefined


}