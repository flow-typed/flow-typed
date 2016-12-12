

declare module 'react-slick' {
		declare interface ___config {
		className?: string,
		adaptiveHeight?: boolean,
		arrows?: boolean,
		autoplay?: boolean,
		autoplaySpeed?: number,
		centerMode?: boolean,
		centerPadding?: string | any,
		cssEase?: string | any,
		dots?: boolean,
		dotsClass?: string,
		draggable?: boolean,
		easing?: string,
		fade?: boolean,
		focusOnSelect?: boolean,
		infinite?: boolean,
		initialSlide?: number,
		lazyLoad?: boolean,
		rtl?: boolean,
		slide?: string,
		slidesToShow?: number,
		slidesToScroll?: number,
		speed?: number,
		swipe?: boolean,
		swipeToSlide?: boolean,
		touchMove?: boolean,
		touchThreshold?: number,
		variableWidth?: boolean,
		useCSS?: boolean,
		vertical?: boolean,
		afterChange?: (() => void),
		beforeChange?: (() => void),
		slickGoTo?: number
	}

	declare interface Slider {
		responsive?: {
		breakpoint: number,
		settings: ___config
	}[]
	}

			declare module.exports: ClassicComponentClass


}