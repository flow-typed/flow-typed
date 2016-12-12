

declare module 'temp-fs' {
					declare module.exports: undefined


}

declare module 'npm$namespace$tempfs' {
		declare interface dir {
		path: String,
		recursive: Boolean,
		unlink(callback?: (error: Error) => any): any
	}

	declare interface file {
		path: String,
		fd: Number,
		unlink(callback?: (error: Error) => any): any
	}

	declare interface options {
		dir?: String,
		limit?: Number,
		mode?: Number,
		name?: String,
		prefix?: String,
		recursive?: Boolean,
		suffix?: String,
		template?: String,
		track?: Boolean
	}

	declare function clear(callback?: () => any): any

	declare function clearSync(): any

	declare function dir(): string

	declare function mkdir(options?: options, callback?: (err: any, dir: dir) => any): any

	declare function mkdirSync(options?: options): dir

	declare function name(options?: options): string

	declare function open(options?: options, callback?: (err: any, file: file) => any): any

	declare function openSync(options?: options): file

	declare function track(on?: Boolean): void

		
}