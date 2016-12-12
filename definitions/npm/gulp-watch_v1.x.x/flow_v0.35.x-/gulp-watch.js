

declare module 'gulp-watch' {
		declare interface IOptions {
		ignoreInitial?: boolean,
		events?: Array<string>,
		base?: string,
		name?: string,
		verbose?: boolean,
		readDelay?: number
	}

	declare interface IWatchStream {
		add(path: string | Array<string>): NodeJS.ReadWriteStream,
		unwatch(path: string | Array<string>): NodeJS.ReadWriteStream,
		close(): NodeJS.ReadWriteStream
	}

	declare function watch(
		glob: string | Array<string>, options?: IOptions, callback?: Function
	): IWatchStream

		declare module.exports: undefined


}