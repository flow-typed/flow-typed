

declare module 'less-middleware' {
			declare function lessMiddleware(
		source: string, options?: {
		debug?: boolean,
		dest?: string,
		force?: boolean,
		once?: boolean,
		pathRoot?: string,
		postprocess?: {
		css(css: string, req: express.Request): string
	},
		preprocess?: {
		less(css: string, req: express.Request): string,
		path(pathname: string, req: express.Request): string,
		importPaths(paths: string[], req: express.Request): string[]
	},
		render?: {
		compress?: string,
		yuicompress?: boolean,
		paths?: string[]
	},
		storeCss(pathname: string, css: string, req: express.Request, next: Function): void,
		cacheFile?: string
	}
	): express.RequestHandler

		declare module.exports: undefined


}