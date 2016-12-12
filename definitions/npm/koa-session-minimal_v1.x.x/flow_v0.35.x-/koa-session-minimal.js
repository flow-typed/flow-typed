

declare module 'koa-session-minimal' {
			declare function session(
		opts?: {
		key?: string,
		cookie?: cookies.IOptions | {
		(ctx?: Koa.Context): cookies.IOptions
	},
		store?: any
	}
	): {
		(ctx: Koa.Context, next?: () => any): any
	}

		declare module.exports: undefined


}

declare module 'koa' {
		declare interface Request {
		session: any,
		sessionHandler: {
		regenerateId: () => void
	}
	}

			
}