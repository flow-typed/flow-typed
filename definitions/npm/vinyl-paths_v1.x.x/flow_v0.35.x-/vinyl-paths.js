

declare module 'vinyl-paths' {
					declare module.exports: PathsStatic


}

declare module 'paths' {
		declare interface Paths {
		paths: string[]
	}

	declare interface PathsStatic {
		(callback?: Callback): Paths
	}

	declare interface Callback {
		(path: string, callback: Function): any
	}

			
}