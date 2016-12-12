

declare module 'knockout.activity' {
		declare interface KoLiteActivityOptions {
		color?: any,
		segments?: number,
		space?: number,
		length?: number,
		width?: number,
		speed?: number,
		align?: string,
		valign?: string,
		padding?: number
	}

	declare interface KoLiteActivity {
		(options: KoLiteActivityOptions): JQuery,
		defaults: KoLiteActivityOptions,
		getOpacity(
		options: {
		steps?: number,
		segments?: number,
		opacity?: number
	}, i: number
	): number
	}

	declare interface KoLiteActivityDefaultOptions {
		activityClass?: string,
		container?: string,
		inactiveClass?: string
	}

	declare interface KoLiteActivityBindingHandler {
		defaultOptions: KoLiteActivityDefaultOptions
	}

	declare interface KnockoutBindingHandlers {
		activity: KoLiteActivityBindingHandler
	}

	declare interface JQuery {
		activity: KoLiteActivity,
		activityEx(isLoading: boolean): JQuery
	}

			
}