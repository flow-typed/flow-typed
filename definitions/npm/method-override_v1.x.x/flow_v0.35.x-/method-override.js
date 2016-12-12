

declare module 'method-override' {
			declare function e(
		getter?: string | ((req: express.Request, res: express.Response) => string), options?: e.MethodOverrideOptions
	): express.RequestHandler

		declare module.exports: undefined


}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		originalMethod?: string
	}

			
}

declare module 'e' {
		declare export interface MethodOverrideOptions {
		methods: string[]
	}

			
}