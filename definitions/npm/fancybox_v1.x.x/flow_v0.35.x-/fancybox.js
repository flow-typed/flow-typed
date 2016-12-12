

declare module 'fancybox' {
		declare interface FancyboxOptions {
		padding?: any,
		margin?: any,
		width?: any,
		height?: any,
		minWidth?: number,
		minHeight?: number,
		maxWidth?: number,
		maxHeight?: number,
		autoSize?: boolean,
		autoHeight?: boolean,
		autoWidth?: boolean,
		autoResize?: boolean,
		autoCenter?: boolean,
		fitToView?: boolean,
		aspectRatio?: boolean,
		topRatio?: number,
		leftRatio?: number,
		scrolling?: string,
		wrapCSS?: string,
		arrows?: boolean,
		closeBtn?: boolean,
		closeClick?: boolean,
		nextClick?: boolean,
		mouseWheel?: boolean,
		autoPlay?: boolean,
		playSpeed?: number,
		preload?: number,
		modal?: boolean,
		loop?: boolean,
		ajax?: any,
		iframe?: any,
		swf?: any,
		keys?: any,
		direction?: any,
		scrollOutside?: boolean,
		index?: number,
		type?: string,
		href?: string,
		content?: string,
		title?: string,
		tpl?: any,
		openEffect?: string,
		closeEffect?: string,
		nextEffect?: string,
		prevEffect?: string,
		openSpeed?: number,
		closeSpeed?: number,
		nextSpeed?: number,
		prevSpeed?: number,
		openEasing?: string,
		closeEasing?: string,
		nextEasing?: string,
		prevEasing?: string,
		openOpacity?: boolean,
		closeOpacity?: boolean,
		openMethod?: string,
		closeMethod?: string,
		nextMethod?: string,
		prevMethod?: string,
		helpers?: any,
		live?: boolean,
		parent?: string
	}

	declare interface FancyboxMethods {
		open(group?: any[], options?: FancyboxOptions),
		cancel(),
		close(force?: boolean),
		play(),
		next(),
		prev(),
		jumpto(index?: number),
		reposition(),
		update(),
		toggle(),
		showLoading(),
		hideLoading(),
		(options: FancyboxOptions): void,
		(selector: string, options?: FancyboxOptions): void,
		(selector: JQuery, options?: FancyboxOptions): void,
		(group?: any[], options?: FancyboxOptions): void
	}

	declare interface FancyboxCallback {
		onCancel?: Function,
		beforeLoad?: Function,
		afterLoad?: Function,
		beforeShow?: Function,
		afterShow?: Function,
		beforeClose?: Function,
		afterClose?: Function,
		onUpdate?: Function,
		onPlayStart?: Function,
		onPlayEnd?: Function
	}

	declare interface FancyboxThumbnailHelperOptions {
		width?: number,
		height?: number,
		source?: any,
		position?: string
	}

	declare interface FancyboxButtonHelperOptions {
		tpl?: string,
		position?: string
	}

	declare interface JQuery {
		fancybox: FancyboxMethods
	}

	declare interface JQueryStatic {
		fancybox: FancyboxMethods
	}

			
}