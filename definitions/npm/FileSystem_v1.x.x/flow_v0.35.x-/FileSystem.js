

declare module 'filesystem' {
		declare interface LocalFileSystem {
		TEMPORARY: number,
		PERSISTENT: number,
		requestFileSystem(
		type: number, size: number, successCallback: FileSystemCallback, errorCallback?: ErrorCallback
	): void,
		resolveLocalFileSystemURL(
		url: string, successCallback: EntryCallback, errorCallback?: ErrorCallback
	): void,
		webkitRequestFileSystem(
		type: number, size: number, successCallback: FileSystemCallback, errorCallback?: ErrorCallback
	): void
	}

	declare interface LocalFileSystemSync {
		TEMPORARY: number,
		PERSISTENT: number,
		requestFileSystemSync(type: number, size: number): FileSystemSync,
		resolveLocalFileSystemSyncURL(url: string): EntrySync,
		webkitRequestFileSystemSync(type: number, size: number): FileSystemSync
	}

	declare interface Metadata {
		modificationTime: Date,
		size: number
	}

	declare interface Flags {
		create?: boolean,
		exclusive?: boolean
	}

	declare interface FileSystem {
		name: string,
		root: DirectoryEntry
	}

	declare interface Entry {
		isFile: boolean,
		isDirectory: boolean,
		getMetadata(successCallback: MetadataCallback, errorCallback?: ErrorCallback): void,
		name: string,
		fullPath: string,
		filesystem: FileSystem,
		moveTo(
		parent: DirectoryEntry, newName?: string, successCallback?: EntryCallback, errorCallback?: ErrorCallback
	): void,
		copyTo(
		parent: DirectoryEntry, newName?: string, successCallback?: EntryCallback, errorCallback?: ErrorCallback
	): void,
		toURL(): string,
		remove(successCallback: VoidCallback, errorCallback?: ErrorCallback): void,
		getParent(successCallback: DirectoryEntryCallback, errorCallback?: ErrorCallback): void
	}

	declare interface DirectoryEntry {
		createReader(): DirectoryReader,
		getFile(
		path: string, options?: Flags, successCallback?: FileEntryCallback, errorCallback?: ErrorCallback
	): void,
		getDirectory(
		path: string, options?: Flags, successCallback?: DirectoryEntryCallback, errorCallback?: ErrorCallback
	): void,
		removeRecursively(successCallback: VoidCallback, errorCallback?: ErrorCallback): void
	}

	declare interface DirectoryReader {
		readEntries(successCallback: EntriesCallback, errorCallback?: ErrorCallback): void
	}

	declare interface FileEntry {
		createWriter(successCallback: FileWriterCallback, errorCallback?: ErrorCallback): void,
		file(successCallback: FileCallback, errorCallback?: ErrorCallback): void
	}

	declare interface FileSystemCallback {
		(filesystem: FileSystem): void
	}

	declare interface EntryCallback {
		(entry: Entry): void
	}

	declare interface FileEntryCallback {
		(entry: FileEntry): void
	}

	declare interface DirectoryEntryCallback {
		(entry: DirectoryEntry): void
	}

	declare interface EntriesCallback {
		(entries: Entry[]): void
	}

	declare interface MetadataCallback {
		(metadata: Metadata): void
	}

	declare interface FileWriterCallback {
		(fileWriter: FileWriter): void
	}

	declare interface FileCallback {
		(file: File): void
	}

	declare interface VoidCallback {
		(): void
	}

	declare interface ErrorCallback {
		(err: DOMError): void
	}

	declare interface FileSystemSync {
		name: string,
		root: DirectoryEntrySync
	}

	declare interface EntrySync {
		isFile: boolean,
		isDirectory: boolean,
		getMetadata(): Metadata,
		name: string,
		fullPath: string,
		filesystem: FileSystemSync,
		moveTo(parent: DirectoryEntrySync, newName?: string): EntrySync,
		copyTo(parent: DirectoryEntrySync, newName?: string): EntrySync,
		toURL(): string,
		remove(): void,
		getParent(): DirectoryEntrySync
	}

	declare interface DirectoryEntrySync {
		createReader(): DirectoryReaderSync,
		getFile(path: string, options?: Flags): FileEntrySync,
		getDirectory(path: string, options?: Flags): DirectoryEntrySync,
		removeRecursively(): void
	}

	declare interface DirectoryReaderSync {
		readEntries(): EntrySync[]
	}

	declare interface FileEntrySync {
		createWriter(): FileWriterSync,
		file(): File
	}

	declare interface Window {
		
	}

	declare interface WorkerGlobalScope {
		
	}

			
}