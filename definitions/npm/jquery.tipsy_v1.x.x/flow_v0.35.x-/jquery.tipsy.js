

declare module 'jquery.tipsy' {
		declare interface JQuery {
		tipsy: JQueryTipsy.Tipsy
	}

			
}

declare module 'npm$namespace$JQueryTipsy' {
		declare interface Options {
		delayIn?: number,
		delayOut?: number,
		fade?: boolean,
		fallback?: string,
		gravity?: any,
		html?: boolean,
		live?: boolean,
		offset?: number,
		opacity?: number,
		title?: any,
		trigger?: string
	}

	declare interface Tipsy {
		(options?: Options): JQuery,
		autoNS: () => string,
		autoWE: () => string,
		autoSWSE: () => string,
		autoNWNE: () => string
	}

			
}