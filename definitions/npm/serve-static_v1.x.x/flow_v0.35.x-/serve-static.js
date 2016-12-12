

declare module 'serve-static' {
			declare function serveStatic(root: string, options?: serveStatic.ServeStaticOptions): express.Handler

		declare module.exports: undefined


}

declare module 'serveStatic' {
		declare interface ServeStaticOptions {
		dotfiles?: string,
		etag?: boolean,
		extensions?: string[],
		fallthrough?: boolean,
		index?: boolean | string | string[],
		lastModified?: boolean,
		maxAge?: number | string,
		redirect?: boolean,
		setHeaders?: (res: express.Response, path: string, stat: any) => any
	}

			
}