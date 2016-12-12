

declare module 'jquery.transit' {
		declare interface JQueryTransitOptions {
		opacity?: number,
		duration?: number,
		delay?: number,
		easing?: string,
		complete?: () => void,
		scale?: any
	}

	declare interface JQuery {
		transition(options: JQueryTransitOptions): JQuery,
		transition(options: JQueryTransitOptions, duration: number): JQuery,
		transition(options: JQueryTransitOptions, easing: string): JQuery,
		transition(options: JQueryTransitOptions, duration: number, easing: string): JQuery,
		transition(options: JQueryTransitOptions, complete: () => void): JQuery,
		transition(
		options: JQueryTransitOptions, duration: number, easing: string, complete: () => void
	): JQuery,
		css(propertyName: string, value: number[]): JQuery
	}

			
}