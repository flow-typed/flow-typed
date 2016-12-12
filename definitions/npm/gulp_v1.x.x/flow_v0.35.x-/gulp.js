

declare module 'gulp' {
		declare interface Gulp {
		task: Orchestrator.AddMethod,
		src: SrcMethod,
		dest: DestMethod,
		watch: WatchMethod
	}

	declare interface GulpPlugin {
		(...args: any[]): NodeJS.ReadWriteStream
	}

	declare interface WatchMethod {
		(glob: string | string[], fn: (WatchCallback | string)): NodeJS.EventEmitter,
		(glob: string | string[], fn: (WatchCallback | string)[]): NodeJS.EventEmitter,
		(glob: string | string[], opt: WatchOptions, fn: (WatchCallback | string)): NodeJS.EventEmitter,
		(glob: string | string[], opt: WatchOptions, fn: (WatchCallback | string)[]): NodeJS.EventEmitter
	}

	declare interface DestMethod {
		(outFolder: string | ((file: VinylFile) => string), opt?: DestOptions): NodeJS.ReadWriteStream
	}

	declare interface SrcMethod {
		(glob: string | string[], opt?: SrcOptions): NodeJS.ReadWriteStream
	}

	declare interface SrcOptions {
		read?: boolean,
		buffer?: boolean,
		base?: string,
		cwd?: string,
		root?: string,
		dot?: boolean,
		nodir?: boolean,
		nomount?: boolean,
		mark?: boolean,
		nosort?: boolean,
		stat?: boolean,
		silent?: boolean,
		strict?: boolean,
		cache?: boolean,
		statCache?: boolean,
		sync?: boolean,
		nounique?: boolean,
		nonull?: boolean,
		nocase?: boolean,
		debug?: boolean,
		globDebug?: boolean
	}

	declare interface DestOptions {
		cwd?: string,
		mode?: string
	}

	declare interface WatchOptions {
		interval?: number,
		debounceDelay?: number,
		mode?: string,
		cwd?: string
	}

	declare interface WatchEvent {
		type: string,
		path: string
	}

	declare interface WatchCallback {
		(event: WatchEvent): void
	}

	declare interface TaskCallback {
		(cb?: (err?: any) => void): any
	}

			declare module.exports: Gulp


}