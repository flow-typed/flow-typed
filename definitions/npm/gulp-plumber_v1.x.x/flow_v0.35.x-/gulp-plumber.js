

declare module 'gulp-plumber' {
		declare interface GulpPlumber {
		(options?: Options): NodeJS.ReadWriteStream,
		(errorHandler: ErrorHandlerFunction): NodeJS.ReadWriteStream,
		stop(): NodeJS.ReadWriteStream
	}

	declare interface Options {
		errorHandler?: ErrorHandlerFunction | boolean,
		inherit?: boolean
	}

	declare interface ErrorHandlerFunction {
		(error: any): void
	}

			declare module.exports: GulpPlumber


}