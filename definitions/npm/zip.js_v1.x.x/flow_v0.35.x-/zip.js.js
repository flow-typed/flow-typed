

declare module 'zip.js' {
		declare interface FileEntry {
		
	}

			
}

declare module 'npm$namespace$zip' {
		declare export interface Entry {
		filename: string,
		directory: boolean,
		compressedSize: number,
		uncompressedSize: number,
		lastModDate: Date,
		lastModDateRaw: number,
		comment: string,
		crc32: number,
		getData(
		writer: zip.Writer, onend: (result: any) => void, onprogress?: (progress: number, total: number) => void, checkCrc32?: boolean
	): void
	}

	declare export interface WriteOptions {
		directory?: boolean,
		level?: number,
		comment?: string,
		lastModDate?: Date,
		version?: number
	}

	declare export function createReader(
		reader: zip.Reader, callback: (zipReader: ZipReader) => void, onerror?: (error: any) => void
	): void

	declare export function createWriter(
		writer: zip.Writer, callback: (zipWriter: zip.ZipWriter) => void, onerror?: (error: any) => void, dontDeflate?: boolean
	): void

	declare export class Reader  {
		size: number;
		init(callback: () => void, onerror: (error: any) => void): void;
		readUint8Array(
		index: number, length: number, callback: (result: Uint8Array) => void, onerror?: (error: any) => void
	): void
	}

	declare export class TextReader extends Reader {
		constructor(text: string): this
	}

	declare export class BlobReader extends Reader {
		constructor(blob: Blob): this
	}

	declare export class Data64URIReader extends Reader {
		constructor(dataURI: string): this
	}

	declare export class HttpReader extends Reader {
		constructor(url: string): this
	}

	declare export class ZipReader  {
		getEntries(callback: (entries: zip.Entry[]) => void): void;
		close(callback?: () => void): void
	}

	declare export class Writer  {
		init(callback: () => void, onerror?: (error: any) => void): void;
		writeUint8Array(array: Uint8Array, callback: () => void, onerror?: (error: any) => void): void;
		getData(callback: (data: any) => void, onerror?: (error: any) => void): void
	}

	declare export class TextWriter extends Writer {
		constructor(encoding: string): this
	}

	declare export class BlobWriter extends Writer {
		constructor(contentType: string): this
	}

	declare export class FileWriter extends Writer {
		constructor(fileEntry: FileEntry): this
	}

	declare export class Data64URIWriter extends Writer {
		constructor(mimeString?: string): this
	}

	declare export class ZipWriter  {
		add(
		name: string, reader: zip.Reader, onend: () => void, onprogress?: (progress: number, total: number) => void, options?: WriteOptions
	): void;
		close(callback: (result: any) => void): void
	}

	
}