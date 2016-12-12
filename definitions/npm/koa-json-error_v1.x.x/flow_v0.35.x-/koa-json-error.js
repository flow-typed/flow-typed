

declare module 'koa-json-error' {
		declare interface JSONErrorOptions {
		preFormat?: {
		(err: Error): any
	},
		format?: {
		(err: Error, obj: any): any
	},
		postFormat?: {
		(err: Error, obj: any): any
	}
	}

	declare function jsonError(options?: JSONErrorOptions): {
		(ctx: Koa.Context, next?: () => any): any
	}

		declare module.exports: undefined


}