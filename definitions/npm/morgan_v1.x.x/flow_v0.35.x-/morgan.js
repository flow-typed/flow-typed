

declare module 'morgan' {
		declare export interface FormatFn {
		(tokens: TokenIndexer, req: express.Request, res: express.Response): string
	}

	declare export interface TokenCallbackFn {
		(req: express.Request, res: express.Response, arg?: string | number | boolean): string
	}

	declare export interface TokenIndexer {
		[tokenName: string]: TokenCallbackFn
	}

	declare export interface Morgan {
		(format: string, options?: Options): express.RequestHandler,
		(format: "combined", options?: Options): express.RequestHandler,
		(format: "common", options?: Options): express.RequestHandler,
		(format: "dev", options?: Options): express.RequestHandler,
		(format: "short", options?: Options): express.RequestHandler,
		(format: "tiny", options?: Options): express.RequestHandler,
		(format: FormatFn, options?: Options): express.RequestHandler,
		token(name: string, callback: TokenCallbackFn): Morgan,
		format(name: string, fmt: string): Morgan,
		format(name: string, fmt: FormatFn): Morgan,
		compile(format: string): FormatFn
	}

	declare export interface StreamOptions {
		write: (str: string) => void
	}

	declare export interface Options {
		buffer?: boolean,
		immediate?: boolean,
		skip?: (req: express.Request, res: express.Response) => boolean,
		stream?: StreamOptions
	}

	declare export function token(name: string, callback: TokenCallbackFn): Morgan

	declare export function format(name: string, fmt: string): Morgan

	declare export function format(name: string, fmt: FormatFn): Morgan

	declare export function compile(format: string): FormatFn

	declare function morgan(format: string, options?: morgan.Options): express.RequestHandler

	declare function morgan(format: "combined", options?: morgan.Options): express.RequestHandler

	declare function morgan(format: "common", options?: morgan.Options): express.RequestHandler

	declare function morgan(format: "dev", options?: morgan.Options): express.RequestHandler

	declare function morgan(format: "short", options?: morgan.Options): express.RequestHandler

	declare function morgan(format: "tiny", options?: morgan.Options): express.RequestHandler

	declare function morgan(format: morgan.FormatFn, options?: morgan.Options): express.RequestHandler

		declare module.exports: undefined


}