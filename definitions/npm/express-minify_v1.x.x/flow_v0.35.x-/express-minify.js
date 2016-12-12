

declare module 'express-minify' {
			declare function minify(options?: ExpressMinifyInterfaces.ExpressMinifyOptions): express.RequestHandler

		declare module.exports: undefined


}

declare module 'npm$namespace$Express' {
		declare interface Response {
		
	}

			
}

declare module 'npm$namespace$ExpressMinifyInterfaces' {
		declare interface ExpressMinifyOptions {
		cache?: string | boolean,
		uglifyJS?: NodeRequire,
		cssmin?: NodeRequire,
		onerror?: Function,
		js_match?: RegExp,
		css_match?: RegExp,
		sass_match?: RegExp,
		less_match?: RegExp,
		stylus_match?: RegExp,
		coffee_match?: RegExp,
		json_match?: RegExp
	}

	declare interface ExpressMinifyResponse {
		_skip: boolean,
		_no_minify: boolean,
		_no_cache: boolean,
		_uglifyMangle: boolean,
		_uglifyOutput: Object,
		_uglifyCompress: Object | boolean
	}

			
}