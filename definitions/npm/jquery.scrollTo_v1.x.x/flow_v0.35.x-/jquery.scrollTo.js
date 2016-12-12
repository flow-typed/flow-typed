

declare module 'jquery.scrollTo' {
		declare interface ScrollToOptions {
		axis?: string,
		duration?: any,
		easing?: string,
		margin?: boolean,
		offset?: any,
		over?: any,
		queue?: boolean,
		onAfter?: () => void,
		onAfterFirst?: () => void
	}

	declare interface JQuery {
		scrollTo: {
		(target: any, duration?: number, settings?: ScrollToOptions): JQuery,
		(target: any, duration: number, onAfter?: Function): JQuery,
		(target: any, settings: ScrollToOptions, onAfter?: Function): JQuery
	}
	}

	declare interface JQueryStatic {
		scrollTo: {
		(target: any, duration?: number, settings?: ScrollToOptions): JQuery,
		(target: any, duration: number, onAfter?: Function): JQuery,
		(target: any, settings: ScrollToOptions, onAfter?: Function): JQuery
	}
	}

			
}