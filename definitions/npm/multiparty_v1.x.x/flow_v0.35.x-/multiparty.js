

declare module 'multiparty' {
		declare export interface File {
		fieldName: string,
		originalFileName: string,
		path: string,
		headers: any,
		size: number
	}

	declare interface Part {
		headers: any,
		name: string,
		filename: string,
		byteOffset: number,
		byteCount: number
	}

	declare export interface FormOptions {
		encoding?: string,
		maxFieldsSize?: number,
		maxFields?: number,
		maxFilesSize?: number,
		autoFields?: boolean,
		autoFiles?: boolean,
		uploadDir?: string
	}

		declare export class Form extends events$EventEmitter {
		constructor(options?: FormOptions): this;
		parse(
		request: http.IncomingMessage, callback?: (error: Error, fields: any, files: any) => any
	): void
	}

	
}