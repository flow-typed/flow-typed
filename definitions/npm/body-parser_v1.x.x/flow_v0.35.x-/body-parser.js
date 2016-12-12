

declare module 'body-parser' {
			declare function bodyParser(
		options?: {
		inflate?: boolean,
		limit?: any,
		verify?: (
		req: express.Request, res: express.Response, buf: Buffer, encoding: string
	) => void,
		strict?: boolean,
		reviver?: (key: string, value: any) => any,
		extended?: boolean
	}
	): express.RequestHandler

		declare module.exports: undefined


}

declare module 'bodyParser' {
			declare export function json(
		options?: {
		inflate?: boolean,
		limit?: any,
		type?: any,
		verify?: (
		req: express.Request, res: express.Response, buf: Buffer, encoding: string
	) => void,
		strict?: boolean,
		reviver?: (key: string, value: any) => any
	}
	): express.RequestHandler

	declare export function raw(
		options?: {
		inflate?: boolean,
		limit?: any,
		type?: any,
		verify?: (
		req: express.Request, res: express.Response, buf: Buffer, encoding: string
	) => void
	}
	): express.RequestHandler

	declare export function text(
		options?: {
		inflate?: boolean,
		limit?: any,
		type?: any,
		verify?: (
		req: express.Request, res: express.Response, buf: Buffer, encoding: string
	) => void,
		defaultCharset?: string
	}
	): express.RequestHandler

	declare export function urlencoded(
		options: {
		inflate?: boolean,
		limit?: any,
		type?: any,
		verify?: (
		req: express.Request, res: express.Response, buf: Buffer, encoding: string
	) => void,
		extended: boolean
	}
	): express.RequestHandler

		
}