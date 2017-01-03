/**
 * Flowtype definitions for file
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface ngCordova$IFileService {
    getFreeDiskSpace(): ngCordova$IFilePromise<number>,
        checkDir(path: string, directory: string): ngCordova$IFilePromise<DirectoryEntry>,
        checkFile(path: string, file: string): ngCordova$IFilePromise<FileEntry>,
        createDir(
            path: string,
            directory: string,
            replace?: boolean): ngCordova$IFilePromise<DirectoryEntry>,
        createFile(
            path: string,
            file: string,
            replace?: boolean): ngCordova$IFilePromise<FileEntry>,
        removeDir(
            path: string,
            directory: string): ngCordova$IFilePromise<ngCordova$IFileRemoveResult<DirectoryEntry >> ,
        removeFile(
            path: string,
            file: string): ngCordova$IFilePromise<ngCordova$IFileRemoveResult<FileEntry >> ,
        removeRecursively(
            path: string,
            directory: string): ngCordova$IFilePromise<ngCordova$IFileRemoveResult<DirectoryEntry >> ,
        writeFile(
            path: string,
            file: string,
            text: string | Blob,
            replace?: boolean): ngCordova$IFilePromise<ProgressEvent>,
        writeExistingFile(
            path: string,
            file: string,
            text: string | Blob): ngCordova$IFilePromise<ProgressEvent>,
        readAsText(path: string, file: string): ng.IPromise<string>,
        readAsDataURL(path: string, file: string): ng.IPromise<string>,
        readAsBinaryString(path: string, file: string): ng.IPromise<string>,
        readAsArrayBuffer(path: string, file: string): ng.IPromise<ArrayBuffer>,
        moveDir(
            path: string,
            directory: string,
            newPath: string,
            newDirectory?: string): ngCordova$IFilePromise<DirectoryEntry>,
        moveFile(
            path: string,
            file: string,
            newPath: string,
            newFile?: string): ngCordova$IFilePromise<FileEntry>,
        copyDir(
            path: string,
            directory: string,
            newPath: string,
            newDirectory?: string): ngCordova$IFilePromise<DirectoryEntry>,
        copyFile(
            path: string,
            file: string,
            newPath: string,
            newFile?: string): ngCordova$IFilePromise<FileEntry >
}

declare export type ngCordova$IFilePromise<T>= {
    then<TResult>(
        successCallback: (promiseValue: T) => ng.IPromise<TResult>| TResult,
        errorCallback?: (error: ngCordova$IFileError) => ng.IPromise<TResult>| TResult): ng.IPromise<TResult>,
    catch<TResult>(
        onRejected: (error: ngCordova$IFileError) => ng.IPromise<TResult>| TResult): ng.IPromise<TResult >
}

declare export interface ngCordova$IFileRemoveResult<TEntry>{
    success: boolean,
    fileRemoved: TEntry
}

declare export type ngCordova$IFileError = {
    message: string
} & FileError