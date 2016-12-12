

declare module 'koa-compose-2.3.1' {
					
}

declare module 'koa-compose' {
			declare function compose(middleware: compose.Middleware[]): compose.ComposedMiddleware

		declare module.exports: undefined


}

declare module 'compose' {
		declare interface Middleware {
		(next?: void): IterableIterator<any>
	}

	declare interface ComposedMiddleware {
		(): IterableIterator<any>
	}

			
}