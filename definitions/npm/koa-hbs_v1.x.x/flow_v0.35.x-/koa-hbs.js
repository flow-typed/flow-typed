

declare module 'koa-hbs' {
				declare class Hbs  {
		constructor(): this;
		middleware(opts: Hbs.Middleware): any
	}

	declare module.exports: undefined


}

declare module 'Hbs' {
		declare export interface Middleware {
		viewPath: Array<string> | string,
		handlebars?: Function,
		templateOptions?: {
		
	},
		extname?: string,
		partialsPath?: Array<string> | string,
		defaultLayout?: string,
		layoutsPath?: string,
		contentHelperName?: string,
		blockHelperName?: string,
		disableCache?: boolean
	}

			
}