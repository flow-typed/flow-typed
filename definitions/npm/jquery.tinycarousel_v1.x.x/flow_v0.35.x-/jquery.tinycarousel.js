

declare module 'jquery.tinycarousel' {
		declare interface JQuery {
		tinycarousel(options?: JQueryTinyCarousel.JQueryTinyCarouselOptions): JQuery,
		tinycarousel_move(index: number): void,
		tinycarousel_start(): void,
		tinycarousel_stop(): void
	}

			
}

declare module 'npm$namespace$JQueryTinyCarousel' {
		declare export interface JQueryTinyCarouselOptions {
		start?: number,
		axis?: string,
		display?: number,
		rewind?: boolean,
		controls?: boolean,
		pager?: boolean,
		interval?: boolean,
		intervaltime?: number,
		animation?: boolean,
		duration?: number,
		callback?: (element: HTMLElement, index: number) => void
	}

			
}