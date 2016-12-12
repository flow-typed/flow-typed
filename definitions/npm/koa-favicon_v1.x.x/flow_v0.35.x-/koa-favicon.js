

declare module 'koa-favicon' {
			declare function favicon(
		path: string, options?: {
		maxage?: number
	}
	): {
		(ctx: Koa.Context, next?: () => any): any
	}

		declare module.exports: undefined


}