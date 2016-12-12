

declare module 'chokidar' {
		declare interface WatchOptions {
		persistent?: boolean,
		ignored?: any,
		ignoreInitial?: boolean,
		followSymlinks?: boolean,
		cwd?: string,
		usePolling?: boolean,
		useFsEvents?: boolean,
		alwaysStat?: boolean,
		depth?: number,
		interval?: number,
		binaryInterval?: number,
		ignorePermissionErrors?: boolean,
		atomic?: boolean,
		awaitWriteFinish?: any
	}

	declare function watch(fileDirOrGlob: string, options?: WatchOptions): fs.FSWatcher

	declare function watch(filesDirsOrGlobs: Array<string>, options?: WatchOptions): fs.FSWatcher

		
}

declare module 'fs' {
		declare interface FSWatcher {
		add(fileDirOrGlob: string): void,
		add(filesDirsOrGlobs: Array<string>): void,
		unwatch(fileDirOrGlob: string): void,
		unwatch(filesDirsOrGlobs: Array<string>): void,
		getWatched(): any
	}

			
}