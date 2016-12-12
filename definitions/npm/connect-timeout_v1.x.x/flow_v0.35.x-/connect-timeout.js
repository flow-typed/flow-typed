

declare module 'connect-timeout' {
			declare function e(timeout: string, options?: e.TimeoutOptions): express.RequestHandler

		declare module.exports: undefined


}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		clearTimeout(): void,
		timedout(event: string, message: string): boolean
	}

			
}

declare module 'e' {
		declare interface TimeoutOptions {
		respond?: boolean
	}

			
}