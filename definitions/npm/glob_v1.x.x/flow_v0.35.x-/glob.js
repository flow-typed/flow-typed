

declare module 'glob' {
			declare function G(pattern: string, cb: (err: Error, matches: string[]) => void): void

	declare function G(
		pattern: string, options: G.IOptions, cb: (err: Error, matches: string[]) => void
	): void

		declare module.exports: undefined


}

declare module 'G' {
		declare interface IOptions {
		cwd?: string,
		root?: string,
		dot?: boolean,
		nomount?: boolean,
		mark?: boolean,
		nosort?: boolean,
		stat?: boolean,
		silent?: boolean,
		strict?: boolean,
		cache?: {
		[path: string]: any
	},
		statCache?: {
		[path: string]: fs.Stats
	},
		symlinks?: any,
		sync?: boolean,
		nounique?: boolean,
		nonull?: boolean,
		debug?: boolean,
		nobrace?: boolean,
		noglobstar?: boolean,
		noext?: boolean,
		nocase?: boolean,
		matchBase?: any,
		nodir?: boolean,
		ignore?: any,
		follow?: boolean,
		realpath?: boolean,
		nonegate?: boolean,
		nocomment?: boolean,
		globDebug?: boolean
	}

	declare interface IGlobStatic {
		new (pattern: string, cb?: (err: Error, matches: string[]) => void): IGlob,
		new (
		pattern: string, options: IOptions, cb?: (err: Error, matches: string[]) => void
	): IGlob,
		prototype: IGlob
	}

	declare interface IGlobSyncStatic {
		new (pattern: string, options?: IOptions): IGlobBase,
		prototype: IGlobBase
	}

	declare interface IGlobBase {
		minimatch: minimatch.IMinimatch,
		options: IOptions,
		aborted: boolean,
		cache: {
		[path: string]: any
	},
		statCache: {
		[path: string]: fs.Stats
	},
		symlinks: {
		[path: string]: boolean
	},
		realpathCache: {
		[path: string]: string
	},
		found: string[]
	}

	declare interface IGlob {
		pause(): void,
		resume(): void,
		abort(): void,
		EOF: any,
		paused: boolean,
		maxDepth: number,
		maxLength: number,
		changedCwd: boolean,
		cwd: string,
		root: string,
		error: any,
		matches: string[],
		log(...args: any[]): void,
		emitMatch(m: any): void
	}

	declare function sync(pattern: string, options?: IOptions): string[]

	declare function hasMagic(pattern: string, options?: IOptions): boolean

		
}