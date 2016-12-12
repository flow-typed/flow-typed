

declare module 'koa-static' {
			declare function serve(
		root: string, opts?: {
		index?: boolean | string,
		defer?: boolean,
		maxage?: number,
		hidden?: boolean,
		gzip?: boolean
	}
	): {
		(ctx: Koa.Context, next?: () => any): any
	}

		declare module.exports: undefined


}