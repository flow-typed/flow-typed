

declare module 'basic-auth' {
			declare function auth(req: Express.Request): auth.BasicAuthResult

		declare module.exports: undefined


}

declare module 'auth' {
		declare interface BasicAuthResult {
		name: string,
		pass: string
	}

			
}