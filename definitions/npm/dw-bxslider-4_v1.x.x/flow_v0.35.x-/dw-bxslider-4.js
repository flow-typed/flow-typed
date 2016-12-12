

declare module 'dw-bxslider-4' {
		declare interface bxSliderOptions {
		mode?: string,
		speed?: number,
		slideMargin?: number,
		startSlide?: number,
		randomStart?: boolean,
		slideSelector?: string,
		infiniteLoop?: boolean,
		hideControlOnEnd?: boolean,
		easing?: string,
		captions?: boolean,
		ticker?: boolean,
		tickerHover?: boolean,
		adaptiveHeight?: boolean,
		adaptiveHeightSpeed?: number,
		video?: boolean,
		responsive?: boolean,
		useCSS?: boolean,
		preloadImages?: string,
		touchEnabled?: boolean,
		swipeThreshold?: number,
		oneToOneTouch?: boolean,
		preventDefaultSwipeX?: boolean,
		preventDefaultSwipeY?: boolean,
		wrapperClass?: string,
		pager?: boolean,
		pagerType?: string,
		pagerShortSeparator?: string,
		pagerSelector?: string,
		pagerCustom?: string,
		buildPager?: (slideIndex: number) => void,
		controls?: boolean,
		nextText?: string,
		prevText?: string,
		nextSelector?: string,
		prevSelector?: string,
		autoControls?: boolean,
		startText?: string,
		stopText?: string,
		autoControlsCombine?: boolean,
		autoControlsSelector?: string,
		keyboardEnabled?: boolean,
		auto?: boolean,
		stopAutoOnClick?: boolean,
		pause?: number,
		autoStart?: boolean,
		autoDirection?: string,
		autoHover?: boolean,
		autoDelay?: number,
		minSlides?: number,
		maxSlides?: number,
		moveSlides?: number,
		slideWidth?: number,
		shrinkItems?: boolean,
		ariaLive?: boolean,
		ariaHidden?: boolean,
		onSliderLoad?: (currentIndex?: number) => void,
		onSliderResize?: (currentIndex?: number) => void,
		onSlideBefore?: ($slideElement?: JQuery, oldIndex?: number, newIndex?: number) => void,
		onSlideAfter?: ($slideElement?: JQuery, oldIndex?: number, newIndex?: number) => void,
		onSlideNext?: ($slideElement?: JQuery, oldIndex?: number, newIndex?: number) => void,
		onSlidePrev?: ($slideElement?: JQuery, oldIndex?: number, newIndex?: number) => void
	}

	declare interface bxSlider {
		goToSlide: (index: number) => void,
		goToNextSlide: () => void,
		goToPrevSlide: () => void,
		startAuto: (preventControlUpdate?: boolean) => void,
		stopAuto: (preventControlUpdate?: boolean) => void,
		getCurrentSlide: () => number,
		getSlideCount: () => number,
		redrawSlider: () => void,
		reloadSlider: (settings?: bxSliderOptions) => void,
		destroySlider: () => void
	}

	declare interface JQuery {
		bxSlider(options?: bxSliderOptions): bxSlider
	}

			
}