

declare module 'resumablejs' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Resumable' {
		declare interface ConfigurationHash {
		target?: string,
		chunkSize?: number,
		forceChunkSize?: boolean,
		simultaneousUploads?: number,
		fileParameterName?: string,
		chunkNumberParameterName?: string,
		totalChunksParameterName?: string,
		chunkSizeParameterName?: string,
		totalSizeParameterName?: string,
		identifierParameterName?: string,
		fileNameParameterName?: string,
		relativePathParameterName?: string,
		currentChunkSizeParameterName?: string,
		typeParameterName?: string,
		query?: Object,
		testMethod?: string,
		uploadMethod?: string,
		parameterNamespace?: string,
		headers?: Object | ((file: ResumableFile) => Object),
		method?: string,
		prioritizeFirstAndLastChunk?: boolean,
		testChunks?: boolean,
		preprocess?: (chunk: ResumableChunk) => ResumableChunk,
		generateUniqueIdentifier?: () => string,
		maxFiles?: number,
		maxFilesErrorCallback?: (files: ResumableFile, errorCount: number) => void,
		minFileSize?: boolean,
		minFileSizeErrorCallback?: (file: ResumableFile, errorCount: number) => void,
		maxFileSize?: boolean,
		maxFileSizeErrorCallback?: (file: ResumableFile, errorCount: number) => void,
		fileType?: string[],
		fileTypeErrorCallback?: (file: ResumableFile, errorCount: number) => void,
		maxChunkRetries?: number,
		chunkRetryInterval?: number,
		withCredentials?: boolean
	}

	declare interface ResumableFile {
		resumableObj: Resumable,
		file: File,
		fileName: string,
		relativePath: string,
		size: number,
		uniqueIdentifier: string,
		chunks: ResumableChunk[],
		progress: (relative: boolean) => number,
		abort: () => void,
		cancel: () => void,
		retry: () => void,
		bootstrap: () => void,
		isUploading: () => boolean,
		isComplete: () => boolean
	}

	declare interface ResumableChunk {
		
	}

		declare class Resumable  {
		constructor(options: ConfigurationHash): this;
		support: boolean;
		opts: ConfigurationHash;
		files: ResumableFile[];
		defaults: ConfigurationHash;
		events: Event[];
		version: number;
		assignBrowse(domNode: Element, isDirectory: boolean): void;
		assignBrowse(domNodes: Element[], isDirectory: boolean): void;
		assignDrop(domNode: Element): void;
		assignDrop(domNodes: Element[]): void;
		unAssignDrop(domNode: Element): void;
		unAssignDrop(domNodes: Element[]): void;
		upload(): void;
		uploadNextChunk(): void;
		pause(): void;
		cancel(): void;
		fire(): void;
		progress(): number;
		isUploading(): boolean;
		addFile(file: File, event: Event): void;
		removeFile(file: ResumableFile): void;
		getFromUniqueIdentifier(uniqueIdentifier: string): void;
		getSize(): number;
		getOpt(o: string): any;
		handleChangeEvent(e: Event): void;
		handleDropEvent(e: Event): void;
		on(event: "fileSuccess", callback: (file: ResumableFile) => void): void;
		on(event: "fileProgress", callback: (file: ResumableFile) => void): void;
		on(
		event: "fileAdded", callback: (file: ResumableFile, event: DragEvent) => void
	): void;
		on(event: "filesAdded", callback: (files: ResumableFile[]) => void): void;
		on(event: "fileRetry", callback: (file: ResumableFile) => void): void;
		on(
		event: "fileError", callback: (file: ResumableFile, message: string) => void
	): void;
		on(event: "uploadStart", callback: () => void): void;
		on(event: "complete", callback: () => void): void;
		on(event: "progress", callback: () => void): void;
		on(event: "error", callback: (message: string, file: ResumableFile) => void): void;
		on(event: "pause", callback: () => void): void;
		on(event: "beforeCancel", callback: () => void): void;
		on(event: "cancel", callback: () => void): void;
		on(event: "chunkingStart", callback: (file: ResumableFile) => void): void;
		on(
		event: "chunkingProgress", callback: (file: ResumableFile, ratio: number) => void
	): void;
		on(event: "chunkingComplete", callback: (file: ResumableFile) => void): void;
		on(event: "catchAll", callback: () => void): void;
		on(event: string, callback: Function): void
	}

	
}