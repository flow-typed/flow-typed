

declare module 'jquery.fileupload' {
		declare interface JQueryFileInputOptions {
		dataType?: string,
		dropZone?: Element | Element[] | JQuery | string,
		pasteZone?: Element | Element[] | JQuery | string,
		fileInput?: Element | Element[] | JQuery | string,
		replaceFileInput?: boolean,
		paramName?: any,
		singleFileUploads?: boolean,
		limitMultiFileUploads?: number,
		limitMultiFileUploadSize?: number,
		limitMultiFileUploadSizeOverhead?: number,
		sequentialUploads?: boolean,
		limitConcurrentUploads?: number,
		forceIframeTransport?: boolean,
		redirect?: string,
		redirectParamName?: string,
		type?: string,
		postMessage?: string,
		multipart?: boolean,
		maxChunkSize?: number,
		uploadedBytes?: number,
		recalculateProgress?: boolean,
		progressInterval?: number,
		bitrateInterval?: number,
		autoUpload?: boolean,
		messages?: any,
		i18n?: any,
		formData?: any,
		add?: any,
		processData?: boolean,
		contentType?: string,
		cache?: boolean,
		timeout?: number,
		active?: Function,
		progress?: (e: JQueryEventObject, data: JQueryFileUploadProgressObject) => void,
		send?: (e: JQueryEventObject, data: JQueryFileUploadProgressObject) => void,
		submit?: Function,
		done?: (e: JQueryEventObject, data: JQueryFileUploadDone) => void,
		fail?: (e: JQueryEventObject, data: JQueryFileInputOptions) => void,
		always?: (e: JQueryEventObject, data: JQueryFileInputOptions) => void,
		progressall?: (e: JQueryEventObject, data: JQueryFileUploadProgressAllObject) => void,
		start?: (e: JQueryEventObject) => void,
		stop?: (e: JQueryEventObject) => void,
		change?: (e: JQueryEventObject, data: JQueryFileUploadChangeObject) => void,
		paste?: (e: JQueryEventObject, data: JQueryFileUploadFilesObject) => void,
		drop?: (e: JQueryEventObject, data: JQueryFileUploadFilesObject) => void,
		dragover?: (e: JQueryEventObject) => void,
		chunksend?: (e: JQueryEventObject, data: JQueryFileUploadChunkObject) => void,
		chunkdone?: (e: JQueryEventObject, data: JQueryFileUploadChunkObject) => void,
		chunkfail?: (e: JQueryEventObject, data: JQueryFileUploadChunkObject) => void,
		chunkalways?: (e: JQueryEventObject, data: JQueryFileUploadChunkObject) => void,
		url?: string,
		files?: any,
		xhrFields?: any
	}

	declare interface JQueryFileUpload {
		contentType: string
	}

	declare interface JQuery {
		fileupload(settings: JQueryFileInputOptions | string): JQueryFileUpload,
		fileupload(action: string, settings: JQueryFileInputOptions | string): JQueryFileUpload,
		fileupload(
		action: string, message: string, settings: JQueryFileInputOptions | string
	): JQueryFileUpload
	}

	declare interface JQuerySupport {
		fileInput?: boolean
	}

	declare interface JQueryFileUploadChangeObject {
		fileInput?: JQuery,
		fileInputClone?: JQuery,
		files: File[],
		form?: JQuery,
		originalFiles: File[]
	}

	declare interface JQueryFileUploadProgressAllObject {
		loaded?: number,
		total?: number,
		bitrate?: number
	}

	declare interface JQueryFileUploadXhr {
		jqXHR: JQueryXHR,
		result: any,
		textStatus: string
	}

	declare interface JQueryFileUploadFilesObject {
		files: File[]
	}

	declare interface JQueryFileUploadChunkObject {
		blob: any,
		chunkSize: number,
		contentRange: string,
		errorThrown: any
	}

	declare interface JQueryFileUploadProgressObject {
		
	}

	declare interface JQueryFileUploadDone {
		
	}

			
}