

declare module 'jszip' {
	declare type Serialization = ("string" | "text" | "base64" | "binarystring" | "uint8array" | "arraybuffer" | "blob" | "nodebuffer");

	declare interface JSZip {
		files: {
		[key: string]: JSZipObject
	},
		file(path: string): JSZipObject,
		file(path: RegExp): JSZipObject[],
		file(path: string, data: any, options?: JSZipFileOptions): JSZip,
		folder(name: string): JSZip,
		folder(name: RegExp): JSZipObject[],
		forEach(callback: (relativePath: string, file: JSZipObject) => void): void,
		filter(predicate: (relativePath: string, file: JSZipObject) => boolean): JSZipObject[],
		remove(path: string): JSZip,
		generate(options?: JSZipGeneratorOptions): any,
		generateAsync(options?: JSZipGeneratorOptions, onUpdate?: Function): Promise<any>,
		load(): void,
		loadAsync(data: any, options?: JSZipLoadOptions): Promise<JSZip>
	}

	declare interface JSZipObject {
		name: string,
		dir: boolean,
		date: Date,
		comment: string,
		options: JSZipObjectOptions,
		async(type: Serialization, onUpdate?: Function): Promise<any>,
		asText(): void,
		asBinary(): void,
		asArrayBuffer(): void,
		asUint8Array(): void
	}

	declare interface JSZipFileOptions {
		base64?: boolean,
		binary?: boolean,
		date?: Date,
		compression?: string,
		comment?: string,
		optimizedBinaryString?: boolean,
		createFolders?: boolean
	}

	declare interface JSZipObjectOptions {
		base64: boolean,
		binary: boolean,
		dir: boolean,
		date: Date,
		compression: string
	}

	declare interface JSZipGeneratorOptions {
		base64?: boolean,
		compression?: string,
		type?: string,
		comment?: string
	}

	declare interface JSZipLoadOptions {
		base64?: boolean,
		checkCRC32?: boolean,
		optimizedBinaryString?: boolean,
		createFolders?: boolean
	}

	declare interface JSZipSupport {
		arraybuffer: boolean,
		uint8array: boolean,
		blob: boolean,
		nodebuffer: boolean
	}

			declare module.exports: undefined


}