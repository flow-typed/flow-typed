

declare module 'mCustomScrollbar' {
		declare interface JQuery {
		mCustomScrollbar(method: string): JQuery,
		mCustomScrollbar(
		scrollTo: string, parameter: any, options?: MCustomScrollbar.ScrollToParameterOptions
	): JQuery,
		mCustomScrollbar(options?: MCustomScrollbar.CustomScrollbarOptions): JQuery
	}

			
}

declare module 'npm$namespace$MCustomScrollbar' {
		declare interface CustomScrollbarOptions {
		setWidth?: boolean | number | string,
		setHeight?: boolean | number | string,
		setTop?: number | string,
		setLeft?: number | string,
		axis?: "x" | "y" | "yx",
		scrollbarPosition?: "inside" | "outside",
		alwaysShowScrollbar?: number,
		snapAmount?: number | [number, number],
		snapOffset?: number,
		autoExpandScrollbar?: boolean,
		scrollInertia?: number,
		mouseWheel?: {
		enable?: boolean,
		scrollAmount?: "auto" | number,
		axis?: "x" | "y",
		preventDefault?: boolean,
		deltaFactor?: number,
		normalizeDelta?: boolean,
		invert?: boolean,
		disableOver?: string[]
	},
		keyboard?: {
		enable?: boolean,
		scrollAmount?: "auto" | number,
		scrollType?: "stepless" | "stepped"
	},
		mouseWheelPixels?: any,
		autoDraggerLength?: boolean,
		autoHideScrollbar?: boolean,
		scrollButtons?: {
		enable?: boolean,
		scrollType?: "stepless" | "stepped",
		tabindex?: number,
		scrollAmount?: "auto" | number
	},
		advanced?: {
		updateOnBrowserResize?: boolean,
		updateOnContentResize?: boolean,
		updateOnImageLoad?: "auto" | boolean,
		extraDraggableSelectors?: string,
		releaseDraggableSelectors?: string,
		autoUpdateTimeout?: number,
		updateOnSelectorChange?: string | boolean,
		autoExpandHorizontalScroll?: boolean,
		autoScrollOnFocus?: boolean | string,
		normalizeMouseWheelDelta?: boolean
	},
		contentTouchScroll?: boolean | number,
		documentTouchScroll?: boolean,
		callbacks?: {
		onCreate?: () => void,
		onInit?: () => void,
		onScrollStart?: () => void,
		onScroll?: () => void,
		onTotalScroll?: () => void,
		onTotalScrollBack?: () => void,
		onTotalScrollOffset?: number,
		onTotalScrollBackOffset?: number,
		whileScrolling?: () => void,
		alwaysTriggerOffsets?: boolean,
		onOverflowY?: () => void,
		onOverflowX?: () => void,
		onOverflowYNone?: () => void,
		onOverflowXNone?: () => void,
		onBeforeUpdate?: () => void,
		onUpdate?: () => void,
		onImageLoad?: () => void,
		onSelectorChange?: () => void
	},
		theme?: string,
		live?: string | boolean,
		liveSelector?: string
	}

	declare interface ScrollToParameterOptions {
		scrollInertia?: number,
		scrollEasing?: string,
		moveDragger?: boolean,
		timeout?: number,
		callbacks?: boolean
	}

			
}