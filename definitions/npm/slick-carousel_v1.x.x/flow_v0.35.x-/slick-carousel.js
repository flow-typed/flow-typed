

declare module 'slick-carousel' {
		declare interface JQuerySlickOptions {
		accessibility?: boolean,
		adaptiveHeight?: boolean,
		autoplay?: boolean,
		autoplaySpeed?: number,
		arrows?: boolean,
		asNavFor?: Element | JQuery | string,
		appendArrows?: Element | Element[] | JQuery | string | boolean,
		appendDots?: Element | Element[] | JQuery | string,
		prevArrow?: Element | JQuery | string,
		nextArrow?: Element | JQuery | string,
		centerMode?: boolean,
		centerPadding?: string,
		cssEase?: string,
		customPaging?: (slider: any, i: number) => string,
		dots?: boolean,
		dotsClass?: string,
		draggable?: boolean,
		fade?: boolean,
		focusOnSelect?: boolean,
		easing?: string,
		edgeFriction?: number,
		infinite?: boolean,
		initialSlide?: number,
		lazyLoad?: string,
		mobileFirst?: boolean,
		pauseOnFocus?: boolean,
		pauseOnHover?: boolean,
		pauseOnDotsHover?: boolean,
		respondTo?: string,
		responsive?: Object,
		rows?: number,
		slide?: string,
		slidesPerRow?: number,
		slidesToShow?: number,
		slidesToScroll?: number,
		speed?: number,
		swipe?: boolean,
		swipeToSlide?: boolean,
		touchMove?: boolean,
		touchThreshold?: number,
		useCSS?: boolean,
		useTransform?: boolean,
		variableWidth?: boolean,
		vertical?: boolean,
		verticalSwiping?: boolean,
		rtl?: boolean,
		waitForAnimate?: boolean,
		zIndex?: number
	}

	declare interface JQuery {
		slick(): JQuery,
		slick(options: JQuerySlickOptions): JQuery,
		slick(methodName: string, ...arg: any[]): any,
		slick(methodName: "slickCurrentSlide"): number,
		slick(methodName: "slickGoTo", slide: number, animate?: boolean): JQuery,
		slick(methodName: "slickNext"): JQuery,
		slick(methodName: "slickPrev"): JQuery,
		slick(methodName: "slickPause"): JQuery,
		slick(methodName: "slickPlay"): JQuery,
		slick(
		methodName: "slickAdd", html: string | Object, index?: number, addBefore?: number
	): JQuery,
		slick(methodName: "slickRemove", index: number, removeBefore?: number): JQuery,
		slick(methodName: "slickFilter", selector: string): JQuery,
		slick(
		methodName: "slickFilter", func: (index: number, element: Element) => any
	): JQuery,
		slick(methodName: "slickUnfilter", index: number): JQuery,
		slick(methodName: "slickGetOption", option: any): JQuerySlickOptions,
		slick(
		methodName: "slickSetOption", option: string, value: JQuerySlickOptions, refresh?: boolean
	): JQuery,
		slick(methodName: "unslick"): JQuery,
		slick(methodName: "getSlick"): Object
	}

			
}