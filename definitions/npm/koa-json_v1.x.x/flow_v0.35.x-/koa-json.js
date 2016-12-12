

declare module 'koa-json' {
			declare function json(
		opts?: {
		pretty?: boolean,
		param?: string,
		spaces?: number
	}
	): {
		(ctx: Koa.Context, next?: () => any): any
	}

		declare module.exports: undefined


}