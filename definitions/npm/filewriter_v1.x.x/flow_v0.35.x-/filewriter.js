

declare module 'filewriter' {
		declare interface FileSaver {
		abort(): void,
		INIT: number,
		WRITING: number,
		DONE: number,
		readyState: number,
		error: DOMError,
		onwritestart: Function,
		onprogress: Function,
		onwrite: Function,
		onabort: Function,
		onerror: Function,
		onwriteend: Function
	}

	declare interface FileWriter {
		position: number,
		length: number,
		write(data: Blob): void,
		seek(offset: number): void,
		truncate(size: number): void
	}

	declare interface FileWriterSync {
		position: number,
		length: number,
		write(data: Blob): void,
		seek(offset: number): void,
		truncate(size: number): void
	}

			
}