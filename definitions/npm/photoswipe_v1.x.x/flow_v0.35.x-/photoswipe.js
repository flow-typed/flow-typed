

declare module 'photoswipe' {
				declare class PhotoSwipe<T>  {
		constructor(pswpElement: HTMLElement, uiConstructor: (NO PRINT IMPLEMENTED: ConstructorType) | boolean, items: PhotoSwipe.Item[], options: T): this;
		currItem: PhotoSwipe.Item;
		items: PhotoSwipe.Item[];
		viewportSize: {
		x: number,
		y: number
	};
		framework: PhotoSwipe.UIFramework;
		ui: PhotoSwipe.UI<T>;
		bg: HTMLElement;
		container: HTMLElement;
		options: T;
		getCurrentIndex(): number;
		getZoomLevel(): number;
		isDragging(): boolean;
		isZooming(): boolean;
		isMainScrollAnimating(): boolean;
		init(): void;
		goTo(index: number): void;
		next(): void;
		prev(): void;
		updateSize(force: boolean): void;
		close(): void;
		destroy(): void;
		zoomTo(
		destZoomLevel: number, centerPoint: {
		x: number,
		y: number
	}, speed: number, easingFn?: (k: number) => number, updateFn?: (now: number) => void
	): void;
		applyZoomPan(zoomLevel: number, panX: number, panY: number): void;
		invalidateCurrItems(): void;
		listen(eventName: string, callback: (...args: any[]) => void): void;
		listen(eventName: "beforeChange", callback: () => void): void;
		listen(eventName: "afterChange", callback: () => void): void;
		listen(
		eventName: "imageLoadComplete", callback: (index: number, item: PhotoSwipe.Item) => void
	): void;
		listen(eventName: "resize", callback: () => void): void;
		listen(
		eventName: "gettingData", callback: (index: number, item: PhotoSwipe.Item) => void
	): void;
		listen(eventName: "mouseUsed", callback: () => void): void;
		listen(eventName: "initialZoomIn", callback: () => void): void;
		listen(eventName: "initialZoomInEnd", callback: () => void): void;
		listen(eventName: "initialZoomOut", callback: () => void): void;
		listen(eventName: "initialZoomOutEnd", callback: () => void): void;
		listen(
		eventName: "parseVerticalMargin", callback: (item: PhotoSwipe.Item) => void
	): void;
		listen(eventName: "close", callback: () => void): void;
		listen(eventName: "unbindEvents", callback: () => void): void;
		listen(eventName: "destroy", callback: () => void): void;
		listen(
		eventName: "preventDragEvent", callback: (e: MouseEvent, isDown: boolean, preventObj: {
		prevent: boolean
	}) => void
	): void;
		shout(eventName: string, ...args: any[]): void
	}

	declare class PhotoSwipeUI_Default extends PhotoSwipe$UI<PhotoSwipeUI_Default.Options> {
		constructor(pswp: PhotoSwipe<PhotoSwipeUI_Default.Options>, framework: PhotoSwipe.UIFramework): this;
		init(): void;
		update(): void
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$PhotoSwipe' {
		declare interface Item {
		src: string,
		w: number,
		h: number,
		loadError?: boolean,
		vGap?: {
		top: number,
		bottom: number
	},
		fitRatio?: number,
		initialZoomLevel?: number,
		bounds?: any,
		initialPosition?: any
	}

	declare interface Options {
		index?: number,
		getThumbBoundsFn?: (index: number) => {
		x: number,
		y: number,
		w: number
	},
		showAnimationDuration?: number,
		hideAnimationDuration?: number,
		showHideOpacity?: boolean,
		bgOpacity?: number,
		spacing?: number,
		allowNoPanText?: boolean,
		maxSpreadZoom?: number,
		getDoubleTapZoom?: (isMouseClick: boolean, item: Item) => number,
		loop?: boolean,
		pinchToClose?: boolean,
		closeOnScroll?: boolean,
		closeOnVerticalDrag?: boolean,
		mouseUsed?: boolean,
		escKey?: boolean,
		arrowKeys?: boolean,
		history?: boolean,
		galleryUID?: number,
		errorMsg?: string,
		preload?: number[],
		mainClass?: string,
		mainScrollEndFriction?: number,
		panEndFriction?: number,
		getNumItemsFn?: () => number,
		focus?: boolean,
		isClickableElement?: (el: HTMLElement) => boolean,
		modal?: boolean
	}

	declare interface UIFramework {
		[name: string]: any
	}

	declare interface UI<T> {
		init: () => void
	}

			
}

declare module 'npm$namespace$PhotoSwipeUI_Default' {
		declare interface Options {
		barsSize?: {
		top: number,
		bottom: number | string
	},
		timeToIdle?: number,
		timeToIdleOutside?: number,
		loadingIndicatorDelay?: number,
		addCaptionHTMLFn?: (item: Item, captionEl: HTMLElement, isFake: boolean) => boolean,
		closeEl?: boolean,
		captionEl?: boolean,
		fullscreenEl?: boolean,
		zoomEl?: boolean,
		shareEl?: boolean,
		counterEl?: boolean,
		arrowEl?: boolean,
		preloaderEl?: boolean,
		tapToClose?: boolean,
		tapToToggleControls?: boolean,
		clickToCloseNonZoomable?: boolean,
		closeElClasses?: string[],
		indexIndicatorSep?: string,
		shareButtons?: ShareButtonData[],
		getImageURLForShare?: (shareButtonData: ShareButtonData) => string,
		getPageURLForShare?: (shareButtonData: ShareButtonData) => string,
		getTextForShare?: (shareButtonData: ShareButtonData) => string,
		parseShareButtonOut?: (shareButtonData: ShareButtonData, shareButtonOut: string) => string
	}

	declare interface ShareButtonData {
		id: string,
		label: string,
		url: string,
		download?: boolean
	}

	declare interface Item {
		title?: string
	}

			
}