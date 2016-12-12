

declare module 'plupload' {
		declare interface plupload_settings {
		browse_button: any,
		url: string,
		filters?: plupload_filters,
		headers?: any,
		max_retries?: number,
		multipart?: boolean,
		multipart_params?: any,
		chunk_size?: number | string,
		resize?: plupload_resize,
		drop_element?: string,
		multi_selection?: boolean,
		required_features?: string | any,
		unique_names?: boolean,
		runtimes?: string,
		file_data_name?: string,
		container?: any,
		flash_swf_url?: string,
		silverlight_xap_url?: string,
		init?: plupload_events
	}

	declare interface plupload_filters {
		mime_types?: plupload_filters_mime_types[],
		max_file_size?: number | string,
		prevent_duplicates?: boolean
	}

	declare interface plupload_filters_mime_types {
		title: string,
		extensions: string
	}

	declare interface plupload_resize {
		width?: number,
		height?: number,
		crop?: boolean,
		quality?: number,
		preserve_headers?: boolean
	}

	declare interface plupload_queue_progress {
		size: number,
		loaded: number,
		uploaded: number,
		failed: number,
		queued: number,
		percent: number,
		bytesPerSec: number,
		reset(): void
	}

	declare interface plupload_event {
		(uploader: plupload): any
	}

	declare interface plupload_event_file {
		(uploader: plupload, file: any): any
	}

	declare interface plupload_event_files {
		(uploader: plupload, files: any[]): any
	}

	declare interface plupload_event_OptionChanged {
		(uploader: plupload, name: string, value: any, oldValue: any): any
	}

	declare interface plupload_event_FileUploaded {
		(uploader: plupload, file: any, response: plupload_response): any
	}

	declare interface plupload_event_ChunkUploaded {
		(uploader: plupload, file: any, response: plupload_chunk_response): any
	}

	declare interface plupload_event_Error {
		(uploader: plupload, error: plupload_error): any
	}

	declare interface plupload_events {
		Init?: plupload_event,
		PostInit?: plupload_event,
		OptionChanged?: plupload_event_OptionChanged,
		Refresh?: plupload_event,
		StateChanged?: plupload_event,
		UploadFile?: plupload_event_file,
		BeforeUpload?: plupload_event_file,
		QueueChanged?: plupload_event,
		UploadProgress?: plupload_event_file,
		FilesRemoved?: plupload_event_files,
		FileFiltered?: plupload_event_file,
		FilesAdded?: plupload_event_files,
		FileUploaded?: plupload_event_FileUploaded,
		ChunkUploaded?: plupload_event_ChunkUploaded,
		UploadComplete?: plupload_event_files,
		Error?: plupload_event_Error,
		Destroy?: plupload_event
	}

	declare interface plupload_response {
		response: string,
		status: number,
		responseHeaders: string
	}

	declare interface plupload_chunk_response {
		offset: number,
		total: number
	}

	declare interface plupload_error {
		code: number,
		message: string,
		file: any
	}

		declare class plupload  {
		Uploader(settings: plupload_settings): void;
		VERSION: string;
		STOPPED: number;
		STARTED: number;
		QUEUED: number;
		UPLOADING: number;
		FAILED: number;
		DONE: number;
		GENERIC_ERROR: number;
		HTTP_ERROR: number;
		IO_ERROR: number;
		SECURITY_ERROR: number;
		INIT_ERROR: number;
		FILE_SIZE_ERROR: number;
		FILE_EXTENSION_ERROR: number;
		FILE_DUPLICATE_ERROR: number;
		IMAGE_FORMAT_ERROR: number;
		MEMORY_ERROR: number;
		IMAGE_DIMENSIONS_ERROR: number;
		mimeTypes: any;
		ua: any;
		typeOf(o: any): string;
		extend(target: any): any;
		guid(guid: string): string;
		id: string;
		state: number;
		features: string;
		runtime: string;
		files: any;
		settings: any;
		total: plupload_queue_progress;
		init(): any;
		setOption(option: string | any, value?: any): any;
		getOption(option?: string): any;
		refresh(): any;
		start(): any;
		stop(): any;
		disableBrowse(disable: boolean): any;
		getFile(id: string): any;
		addFile(file: any, fileName?: string): any;
		removeFile(file: any): any;
		splice(start?: number, length?: number): any;
		trigger(name: string, Multiple: any): any;
		hasEventListener(name: string): any;
		bind(name: string, func: any, scope: any): any;
		unbind(name: string, func: any): any;
		unbindAll(): any;
		destroy(): any
	}

	
}