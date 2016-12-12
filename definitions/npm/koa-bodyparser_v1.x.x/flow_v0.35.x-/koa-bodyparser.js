

declare module 'koa-bodyparser' {
			declare function bodyParser(
		opts?: {
		encode?: string,
		formLimit?: string,
		jsonLimit?: string,
		strict?: boolean,
		detectJSON?: (ctx: Koa.Context) => boolean,
		extendTypes?: {
		json?: string[],
		form?: string[]
	},
		onerror?: (err: Error, ctx: Koa.Context) => void
	}
	): {
		(ctx: Koa.Context, next?: () => any): any
	}

		declare module.exports: undefined


}

declare module 'koa' {
		declare interface Request {
		body: any
	}

			
}