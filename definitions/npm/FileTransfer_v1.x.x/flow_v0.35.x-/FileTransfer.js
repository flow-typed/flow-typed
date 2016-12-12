

declare module 'fileTransfer' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IFileTransferService {
		download(
		url: string, filePath: string, options?: IFileDownloadOptions, trustAllHosts?: boolean
	): IFileTransferPromise<FileEntry>,
		upload(
		url: string, filePath: string, options?: IFileUploadOptions, trustAllHosts?: boolean
	): IFileTransferPromise<FileUploadResult>
	}

	declare export interface IFileTransferPromise<T> {
		then<TResult>(
		successCallback: (promiseValue: T) => ng.IPromise<TResult> | TResult, errorCallback?: (error: FileTransferError) => ng.IPromise<TResult> | TResult, notifyCallback?: (state: any) => any
	): ng.IPromise<TResult>,
		catch<TResult>(
		onRejected: (error: FileTransferError) => ng.IPromise<TResult> | TResult
	): ng.IPromise<TResult>
	}

	declare export interface IFileDownloadOptions {
		encodeURI?: boolean,
		timeout?: number
	}

	declare export interface IFileUploadOptions {
		encodeURI?: boolean,
		timeout?: number
	}

			
}