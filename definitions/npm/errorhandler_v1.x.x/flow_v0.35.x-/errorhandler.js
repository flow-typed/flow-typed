

declare module 'errorhandler' {
			declare function errorHandler(options?: errorHandler.Options): express.ErrorRequestHandler

		declare module.exports: undefined


}

declare module 'errorHandler' {
		declare interface LoggingCallback {
		(err: Error, str: string, req: express.Request, res: express.Response): void
	}

	declare interface Options {
		log: boolean | LoggingCallback
	}

			
}