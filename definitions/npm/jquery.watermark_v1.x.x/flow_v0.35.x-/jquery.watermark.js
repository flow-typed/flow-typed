

declare module 'jquery.watermark' {
		declare interface WatermarkOptions {
		className?: string,
		useNative?: boolean,
		hideBeforeUnload?: boolean
	}

	declare interface Watermark {
		options: WatermarkOptions,
		show(element: string): void,
		hide(element: string): void,
		showAll(): void,
		hideAll(): void
	}

	declare interface JQuery {
		watermark(text: string, options?: WatermarkOptions): JQuery
	}

	declare interface JQueryStatic {
		watermark: Watermark
	}

			
}