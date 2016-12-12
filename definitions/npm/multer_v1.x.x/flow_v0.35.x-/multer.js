

declare module 'multer' {
		declare interface Field {
		name: string,
		maxCount?: number
	}

	declare interface Options {
		dest?: string,
		storage?: StorageEngine,
		limits?: {
		fieldNameSize?: number,
		fieldSize?: number,
		fields?: number,
		fileSize?: number,
		files?: number,
		parts?: number,
		headerPairs?: number
	},
		fileFilter?: (
		req: Express.Request, file: Express.Multer.File, callback: (error: Error, acceptFile: boolean) => void
	) => void
	}

	declare interface StorageEngine {
		_handleFile(
		req: express.Request, file: Express.Multer.File, callback: (error?: any, info?: Express.Multer.File) => void
	): void,
		_removeFile(
		req: express.Request, file: Express.Multer.File, callback: (error: Error) => void
	): void
	}

	declare interface DiskStorageOptions {
		destination?: string | ((
		req: Express.Request, file: Express.Multer.File, callback: (error: Error, destination: string) => void
	) => void),
		filename?: (
		req: Express.Request, file: Express.Multer.File, callback: (error: Error, filename: string) => void
	) => void
	}

	declare interface Instance {
		single(): express.RequestHandler,
		single(fieldame: string): express.RequestHandler,
		array(): express.RequestHandler,
		array(fieldame: string, maxCount?: number): express.RequestHandler,
		fields(fields: Field[]): express.RequestHandler,
		any(): express.RequestHandler
	}

	declare interface Multer {
		(options?: multer.Options): multer.Instance,
		diskStorage(options: multer.DiskStorageOptions): multer.StorageEngine,
		memoryStorage(): multer.StorageEngine
	}

			declare module.exports: Multer


}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		file: Multer.File,
		files: {
		[fieldname: string]: Multer.File[]
	}
	}

			
}

declare module 'Multer' {
		declare export interface File {
		fieldname: string,
		originalname: string,
		encoding: string,
		mimetype: string,
		size: number,
		destination: string,
		filename: string,
		path: string,
		buffer: Buffer
	}

			
}