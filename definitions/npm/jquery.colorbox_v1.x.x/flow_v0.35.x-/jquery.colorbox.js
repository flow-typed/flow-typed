

declare module 'jquery.colorbox' {
		declare interface ColorboxResizeSettings {
		height?: number | string,
		innerHeight?: number | string,
		width?: number | string,
		innerWidth?: number | string
	}

	declare interface ColorboxSettings {
		transition?: string,
		speed?: number,
		href?: any,
		title?: any,
		rel?: any,
		scalePhotos?: boolean,
		scrolling?: boolean,
		opacity?: number,
		open?: boolean,
		returnFocus?: boolean,
		fastIframe?: boolean,
		preloading?: boolean,
		overlayClose?: boolean,
		escKey?: boolean,
		arrowKey?: boolean,
		loop?: boolean,
		data?: any,
		className?: any,
		fadeOut?: number,
		current?: string,
		previous?: string,
		next?: string,
		close?: string,
		closeButton?: boolean,
		xhrError?: string,
		imgError?: string,
		iframe?: boolean,
		inline?: boolean,
		html?: any,
		photo?: boolean,
		ajax?: any,
		width?: number | string,
		height?: number | string,
		innerWidth?: number | string,
		innerHeight?: number | string,
		initialWidth?: number | string,
		initialHeight?: number | string,
		maxWidth?: number | string,
		maxHeight?: number | string,
		slideshow?: boolean,
		slideshowSpeed?: number,
		slideshowAuto?: boolean,
		slideshowStart?: string,
		slideshowStop?: string,
		fixed?: boolean,
		top?: any,
		bottom?: any,
		left?: any,
		right?: any,
		reposition?: boolean,
		retinaImage?: boolean,
		retinaUrl?: boolean,
		retinaSuffix?: string,
		onOpen?: any,
		onLoad?: any,
		onComplete?: any,
		onCleanup?: any,
		onClosed?: any
	}

	declare interface ColorboxStatic {
		(settings: ColorboxSettings): any,
		next(): void,
		prev(): void,
		close(): void,
		element(): JQuery,
		resize(): void,
		resize(settings: ColorboxResizeSettings): void,
		remove(): void,
		settings: ColorboxSettings
	}

	declare interface Colorbox {
		(): JQuery,
		(settings: ColorboxSettings): JQuery
	}

	declare interface JQueryStatic {
		colorbox: ColorboxStatic
	}

	declare interface JQuery {
		colorbox: Colorbox
	}

			
}