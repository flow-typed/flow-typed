

declare module 'nouislider' {
					declare module.exports: undefined


}

declare module 'npm$namespace$noUiSlider' {
		declare interface Options {
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
		format?: Object | ((...args: any[]) => any),
		pips?: PipsOptions
	}

	declare interface PipsOptions {
		mode: string,
		density?: number,
		filter?: (...args: any[]) => PipFilterResult,
		format?: Object,
		values?: number | number[],
		stepped?: boolean
	}

	declare interface Callback {
		(values: any[], handle: number, unencoded: number): void
	}

	declare interface noUiSlider {
		on(eventName: string, callback: Callback): void,
		off(eventName: string): void,
		destroy(): void,
		get(): number | number[],
		set(value: number | number[]): void
	}

	declare interface Instance {
		noUiSlider: noUiSlider
	}

	declare function create(target: HTMLElement, options: Options): void

		
}