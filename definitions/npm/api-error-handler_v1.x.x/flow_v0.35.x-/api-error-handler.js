

declare module 'api-error-handler' {
			declare function apiErrorHandler(options?: any): express.ErrorRequestHandler

		declare module.exports: undefined


}

declare module 'apiErrorHandler' {
		declare interface Response {
		status: number,
		stack?: string,
		message: string,
		code?: any,
		name?: string,
		type?: any
	}

			
}