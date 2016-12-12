

declare module 'koa-compose' {
			declare function compose(middleware: compose.Middleware[]): compose.ComposedMiddleware

		declare module.exports: undefined


}

declare module 'compose' {
		declare interface Middleware {
		(context: any, next?: () => Promise<void>): Promise<any>
	}

	declare interface ComposedMiddleware {
		(context: any): Promise<void>
	}

			
}