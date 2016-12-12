

declare module 'gulp-jade' {
			declare function GulpJade(params?: GulpJade.Params): any

		declare module.exports: undefined


}

declare module 'GulpJade' {
		declare interface Params {
		doctype?: string,
		pretty?: boolean | string,
		self?: boolean,
		debug?: boolean,
		compileDebug?: boolean,
		cache?: boolean,
		jade?: any,
		client?: boolean,
		locals?: any,
		data?: any
	}

			
}