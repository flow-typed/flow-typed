

declare module 'connect-flash' {
		declare interface IConnectFlashOptions {
		unsafe?: boolean
	}

	declare function e(options?: IConnectFlashOptions): express.RequestHandler

		declare module.exports: undefined


}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		flash(message: string): any,
		flash(event: string, message: string): any
	}

			
}