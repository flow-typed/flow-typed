

declare module 'co-views' {
		declare interface EngineMap {
		html: string
	}

	declare interface CoViewsOptions {
		ext?: string,
		default?: string,
		map?: EngineMap,
		partials?: Object,
		cache?: boolean,
		locals?: Object
	}

	declare function views(
		dir?: string, opts?: CoViewsOptions
	): {
		(view: string, locals?: Object): any
	}

		declare module.exports: undefined


}