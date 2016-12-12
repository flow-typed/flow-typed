

declare module 'file' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IFileService {
		getFreeDiskSpace(): IFilePromise<number>,
		checkDir(path: string, directory: string): IFilePromise<DirectoryEntry>,
		checkFile(path: string, file: string): IFilePromise<FileEntry>,
		createDir(
		path: string, directory: string, replace?: boolean
	): IFilePromise<DirectoryEntry>,
		createFile(path: string, file: string, replace?: boolean): IFilePromise<FileEntry>,
		removeDir(
		path: string, directory: string
	): IFilePromise<IFileRemoveResult<DirectoryEntry>>,
		removeFile(path: string, file: string): IFilePromise<IFileRemoveResult<FileEntry>>,
		removeRecursively(
		path: string, directory: string
	): IFilePromise<IFileRemoveResult<DirectoryEntry>>,
		writeFile(
		path: string, file: string, text: string | Blob, replace?: boolean
	): IFilePromise<ProgressEvent>,
		writeExistingFile(path: string, file: string, text: string | Blob): IFilePromise<ProgressEvent>,
		readAsText(path: string, file: string): ng.IPromise<string>,
		readAsDataURL(path: string, file: string): ng.IPromise<string>,
		readAsBinaryString(path: string, file: string): ng.IPromise<string>,
		readAsArrayBuffer(path: string, file: string): ng.IPromise<ArrayBuffer>,
		moveDir(
		path: string, directory: string, newPath: string, newDirectory?: string
	): IFilePromise<DirectoryEntry>,
		moveFile(
		path: string, file: string, newPath: string, newFile?: string
	): IFilePromise<FileEntry>,
		copyDir(
		path: string, directory: string, newPath: string, newDirectory?: string
	): IFilePromise<DirectoryEntry>,
		copyFile(
		path: string, file: string, newPath: string, newFile?: string
	): IFilePromise<FileEntry>
	}

	declare export interface IFilePromise<T> {
		then<TResult>(
		successCallback: (promiseValue: T) => ng.IPromise<TResult> | TResult, errorCallback?: (error: IFileError) => ng.IPromise<TResult> | TResult
	): ng.IPromise<TResult>,
		catch<TResult>(
		onRejected: (error: IFileError) => ng.IPromise<TResult> | TResult
	): ng.IPromise<TResult>
	}

	declare export interface IFileRemoveResult<TEntry> {
		success: boolean,
		fileRemoved: TEntry
	}

	declare export interface IFileError {
		message: string
	}

			
}