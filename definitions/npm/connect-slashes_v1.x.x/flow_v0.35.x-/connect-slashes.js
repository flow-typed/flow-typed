

declare module 'connect-slashes' {
			declare function slashes(
		addTrailingSlashes?: boolean, options?: slashes.Options
	): express.RequestHandler

		declare module.exports: undefined


}

declare module 'slashes' {
		declare interface Options {
		base?: string,
		code?: number,
		headers?: {
		[field: string]: string
	}
	}

			
}