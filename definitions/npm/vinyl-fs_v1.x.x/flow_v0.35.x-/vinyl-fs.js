

declare module 'vinyl-fs' {
		declare interface ISrcOptions {
		cwd?: string,
		base?: string,
		buffer?: boolean,
		read?: boolean,
		since?: Date | number,
		passthrough?: boolean,
		sourcemaps?: boolean
	}

	declare function src(globs: string | string[], opt?: ISrcOptions): NodeJS.ReadWriteStream

	declare function watch(
		globs: string | string[], cb?: (outEvt: {
		type: any,
		path: any,
		old: any
	}) => void
	): _events.EventEmitter

	declare function watch(
		globs: string | string[], opt?: {
		interval?: number,
		debounceDelay?: number,
		cwd?: string,
		maxListeners?: Function
	}, cb?: (outEvt: {
		type: any,
		path: any,
		old: any
	}) => void
	): _events.EventEmitter

	declare function dest(
		folder: string, opt?: {
		cwd?: string,
		mode?: number | string,
		dirMode?: number | string,
		overwrite?: boolean
	}
	): NodeJS.ReadWriteStream

	declare function dest(getFolderPath: (file: File) => string): NodeJS.ReadWriteStream

	declare function symlink(
		folder: string, opts?: {
		cwd?: string,
		mode?: number | string,
		dirMode?: number
	}
	): NodeJS.ReadWriteStream

	declare function symlink(
		getFolderPath: (File: File) => string, opts?: {
		cwd?: string,
		dirMode?: number
	}
	): NodeJS.ReadWriteStream

		
}

declare module 'npm$namespace$NodeJS' {
		declare interface WritableStream {
		write(buffer: any, cb?: Function): boolean
	}

			
}