

declare module 'multer-s3' {
		declare interface Options {
		s3: AWS.S3,
		bucket: ((
		req: Express.Request, file: Express.Multer.File, callback: (error: any, bucket?: string) => void
	) => void) | string,
		key?: (
		req: Express.Request, file: Express.Multer.File, callback: (error: any, key?: string) => void
	) => void,
		acl?: ((
		req: Express.Request, file: Express.Multer.File, callback: (error: any, acl?: string) => void
	) => void) | string,
		contentType?: (
		req: Express.Request, file: Express.Multer.File, callback: (error: any, mime?: string, stream?: NodeJS.ReadableStream) => void
	) => void,
		metadata?: (
		req: Express.Request, file: Express.Multer.File, callback: (error: any, metadata?: string) => void
	) => void,
		cacheControl?: ((
		req: Express.Request, file: Express.Multer.File, callback: (error: any, cacheControl?: string) => void
	) => void) | string
	}

	declare interface S3Storage {
		(options?: Options): multer.StorageEngine,
		AUTO_CONTENT_TYPE: (
		req: Express.Request, file: Express.Multer.File, callback: (error: any, mime?: string, stream?: NodeJS.ReadableStream) => void
	) => void,
		DEFAULT_CONTENT_TYPE: (
		req: Express.Request, file: Express.Multer.File, callback: (error: any, mime?: string) => void
	) => void
	}

			declare module.exports: S3Storage


}