

declare module 'finalhandler' {
			declare function finalHandler(
		req: ServerRequest, res: ServerResponse, options?: finalHandler.Options
	): (err: any) => void

		declare module.exports: undefined


}

declare module 'finalHandler' {
		declare export interface Options {
		message?: boolean | ((err: any, status: number) => string),
		onerror?: (err: any, req: ServerRequest, res: ServerResponse) => void,
		stacktrace?: boolean
	}

			
}