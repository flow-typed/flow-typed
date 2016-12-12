

declare module 'nouislider-7.0.10' {
		declare interface noUiSliderInstance {
		val(): number | number[],
		val(value: any): JQuery,
		Link(target: string, method?: any, format?: any): any
	}

	declare interface noUiSliderOptions {
		start: number | number[] | number[][],
		range: Object,
		connect?: string | boolean,
		margin?: number,
		limit?: number,
		step?: number,
		orientation?: string,
		direction?: string,
		animate?: boolean,
		behaviour?: string,
		format?: Object | ((...args: any[]) => any)
	}

	declare interface noUiSliderPipsOptions {
		mode: string,
		density?: number,
		filter?: (...args: any[]) => number,
		format?: Object,
		values?: number | number[],
		stepped?: boolean
	}

	declare interface JQuery {
		noUiSlider(options?: noUiSliderOptions): noUiSliderInstance,
		noUiSlider_pips(options?: noUiSliderPipsOptions): noUiSliderInstance
	}

			
}