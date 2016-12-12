

declare module 'ng-file-upload' {
					declare module.exports: undefined


}

declare module 'angularFileUpload' {
		declare interface ImageDimensions {
		height: number,
		width: number
	}

	declare interface FileUploadOptions {
		ngfAccept?: string,
		ngfAllowDir?: boolean,
		ngfEnableFirefoxPaste?: boolean,
		ngfHideOnDropNotAvailable?: boolean,
		ngfMinDuration: number | string,
		ngfMinSize?: number | string,
		ngfMinRatio?: number | string,
		ngfMaxDuration?: number | string,
		ngfMaxFiles?: number,
		ngfMaxSize?: number | string,
		ngfMaxTotalSize?: number | string,
		ngfMultiple?: boolean,
		ngfRatio?: string,
		ngfStopPropagation?: boolean,
		ngfValidateForce?: boolean
	}

	declare interface ResizeIfFunction {
		(width: number, height: number): boolean
	}

	declare interface FileResizeOptions {
		centerCrop?: boolean,
		height?: number,
		ratio?: number,
		resizeIf?: ResizeIfFunction,
		restoreExif?: boolean,
		quality?: number,
		width?: number
	}

	declare interface IUploadService {
		base64DataUrl(files: File | Array<File>): angular.IPromise<Array<string> | string>,
		dataUrl(file: File, disallowObjectUrl?: boolean): angular.IPromise<Blob | string>,
		http<T>(config: IRequestConfig): IUploadPromise<T>,
		imageDimensions(file: File): angular.IPromise<ImageDimensions>,
		isResizeSupported(): boolean,
		isResumeSupported(): boolean,
		isUploadInProgress(): boolean,
		json(obj: Object): string,
		jsonBlob(obj: Object): Blob,
		rename(file: File, newName: string): Blob,
		resize(file: File, options: FileResizeOptions): angular.IPromise<File>,
		setDefaults(defaultFileUploadOptions: FileUploadOptions): void,
		upload<T>(config: IFileUploadConfigFile): IUploadPromise<T>
	}

	declare interface IUploadPromise<T> {
		abort(): IUploadPromise<T>,
		progress(callback: IHttpPromiseCallback<T>): IUploadPromise<T>,
		xhr(callback: IHttpPromiseCallback<T>): IUploadPromise<T>
	}

	declare interface IFileUploadConfigFile {
		data: any,
		url: string,
		objectKey?: string,
		arrayKey?: string,
		resumeSizeUrl?: string,
		resumeSizeResponseReader?: Function,
		resumeSize?: Function,
		resumeChunkSize?: number | string,
		disableProgress?: boolean
	}

	declare interface IFileProgressEvent {
		config: IFileUploadConfigFile
	}

			
}