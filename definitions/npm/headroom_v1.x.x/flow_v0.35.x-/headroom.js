

declare module 'headroom' {
		declare interface HeadroomOptions {
		offset?: number,
		tolerance?: any,
		classes?: {
		initial?: string,
		notBottom?: string,
		notTop?: string,
		pinned?: string,
		top?: string,
		unpinned?: string
	},
		scroller?: Element,
		onPin?: () => void,
		onUnPin?: () => void,
		onTop?: () => void,
		onNotTop?: () => void
	}

		declare class Headroom  {
		constructor(element: Node, options?: HeadroomOptions): this;
		constructor(element: Element, options?: HeadroomOptions): this;
		init: () => void
	}

	
}