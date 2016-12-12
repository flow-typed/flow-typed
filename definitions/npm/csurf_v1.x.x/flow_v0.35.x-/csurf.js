

declare module 'csurf' {
		declare export interface CookieOptions {
		key: string
	}

	declare function csurf(
		options?: {
		value?: (req: express.Request) => string,
		cookie?: csurf.CookieOptions | boolean,
		ignoreMethods?: string[],
		sessionKey?: string
	}
	): express.RequestHandler

		declare module.exports: undefined


}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		csrfToken(): string
	}

			
}