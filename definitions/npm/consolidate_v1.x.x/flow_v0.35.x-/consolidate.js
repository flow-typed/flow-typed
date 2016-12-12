

declare module 'consolidate' {
		declare interface Consolidate {
		requires: Object,
		clearCache(): void,
		atpl: RendererInterface,
		dot: RendererInterface,
		dust: RendererInterface,
		eco: RendererInterface,
		ejs: RendererInterface,
		ect: RendererInterface,
		haml: RendererInterface,
		hamlet: RendererInterface,
		handlebars: RendererInterface,
		hogan: RendererInterface,
		htmling: RendererInterface,
		jade: RendererInterface,
		jazz: RendererInterface,
		jqtpl: RendererInterface,
		just: RendererInterface,
		liquid: RendererInterface,
		liquor: RendererInterface,
		lodash: RendererInterface,
		mote: RendererInterface,
		mustache: RendererInterface,
		nunjucks: RendererInterface,
		qejs: RendererInterface,
		ractive: RendererInterface,
		react: RendererInterface,
		swig: RendererInterface,
		templayed: RendererInterface,
		toffee: RendererInterface,
		underscore: RendererInterface,
		walrus: RendererInterface,
		whiskers: RendererInterface
	}

	declare interface RendererInterface {
		render(path: String, fn: (err: Error, html: String) => any): any,
		render(
		path: String, options: {
		cache?: boolean,
		[otherOptions: string]: any
	}, fn: (err: Error, html: String) => any
	): any,
		render(
		path: String, options?: {
		cache?: boolean,
		[otherOptions: string]: any
	}
	): Promise<String>,
		(path: String, fn: (err: Error, html: String) => any): any,
		(path: String, options: {
		cache?: boolean,
		[otherOptions: string]: any
	}, fn: (err: Error, html: String) => any): any,
		(path: String, options?: {
		cache?: boolean,
		[otherOptions: string]: any
	}): Promise<String>
	}

			declare module.exports: Consolidate


}