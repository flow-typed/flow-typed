import type { IFileStatic, IDirectoryStatic } from 'npm$namespace$PathWatcher'

declare module 'pathwatcher' {
		declare interface IHandleWatcher {
		onEvent(event: any, filePath: any, oldFilePath: any): any,
		start(): void,
		closeIfNoListener(): void,
		close(): void
	}

	declare interface IPathWatcher {
		isWatchingParent: boolean,
		path: any,
		handleWatcher: IHandleWatcher,
		close(): void
	}

	declare function watch(path: string, callback: Function): IPathWatcher

	declare function closeAllWatchers(): void

	declare function getWatchedPaths(): string[]

		
}

declare module 'npm$namespace$PathWatcher' {
		declare interface IFileStatic {
		new (path: string, symlink?: boolean): IFile
	}

	declare interface IFile {
		realPath: string,
		path: string,
		symlink: boolean,
		cachedContents: string,
		digest: string,
		handleEventSubscriptions(): void,
		setPath(path: string): void,
		getPath(): string,
		getRealPathSync(): string,
		getBaseName(): string,
		write(text: string): void,
		readSync(flushCache: boolean): string,
		read(flushCache?: boolean): Q.Promise<string>,
		existsSync(): boolean,
		setDigest(contents: string): void,
		getDigest(): string,
		writeFileWithPrivilegeEscalationSync(filePath: string, text: string): void,
		handleNativeChangeEvent(eventType: string, eventPath: string): void,
		detectResurrectionAfterDelay(): void,
		detectResurrection(): void,
		subscribeToNativeChangeEvents(): void,
		unsubscribeFromNativeChangeEvents(): void
	}

	declare interface IDirectoryStatic {
		new (path: string, symlink?: boolean): IDirectory
	}

	declare interface IDirectory {
		realPath: string,
		path: string,
		symlink: boolean,
		getBaseName(): string,
		getPath(): void,
		getRealPathSync(): string,
		contains(pathToCheck: string): boolean,
		relativize(fullPath: string): string,
		getEntriesSync(): any[],
		getEntries(callback: Function): void,
		subscribeToNativeChangeEvents(): void,
		unsubscribeFromNativeChangeEvents(): void,
		isPathPrefixOf(prefix: string, fullPath: string): boolean
	}

			
}