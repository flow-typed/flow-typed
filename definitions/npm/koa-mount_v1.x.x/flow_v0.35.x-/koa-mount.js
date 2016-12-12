

declare module 'koa-mount' {
		declare interface Function {
		(ctx: Koa.Context, next?: () => any): any
	}

	declare function mount(app: Function): Function

	declare function mount(app: Koa): Function

	declare function mount(prefix: string, app: Function): Function

	declare function mount(prefix: string, app: Koa): Function

		declare module.exports: undefined


}