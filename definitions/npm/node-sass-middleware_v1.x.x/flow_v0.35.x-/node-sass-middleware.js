

declare module 'node-sass-middleware' {
		declare interface Options {
		src: string,
		dest?: string,
		root?: string,
		prefix?: string,
		force?: boolean,
		debug?: boolean,
		indentedSyntax?: boolean,
		response?: boolean,
		error?: () => void
	}

	declare function nodeSassMiddleware(options: Options): express.RequestHandler

		declare module.exports: undefined


}