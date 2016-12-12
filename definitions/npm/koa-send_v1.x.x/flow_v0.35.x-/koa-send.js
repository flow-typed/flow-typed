

declare module 'koa-send' {
		declare interface ISendOptions {
		root?: string,
		index?: string,
		maxAge?: number,
		hidden?: boolean,
		format?: boolean,
		gzip?: boolean,
		setHeaders?: Function
	}

	declare function send(ctx: Koa.Context, path: string, opts?: ISendOptions): Promise<string>

		declare module.exports: undefined


}