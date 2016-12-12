

declare module 'koa-compress' {
		declare interface CompressOptions {
		filter?: (content_type: string) => boolean,
		threshold?: number
	}

	declare function compress(options?: CompressOptions): {
		(ctx: Koa.Context, next?: () => any): any
	}

		declare module.exports: undefined


}