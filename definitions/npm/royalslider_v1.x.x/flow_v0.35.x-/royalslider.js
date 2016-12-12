

declare module 'royalslider' {
		declare interface JQuery {
		royalSlider(options?: RoyalSlider.RoyalSliderOptions): JQuery
	}

			
}

declare module 'npm$namespace$RoyalSlider' {
		declare export interface RoyalSliderThumbsOptions {
		drag?: boolean,
		touch?: boolean,
		orientation?: string,
		arrows?: boolean,
		spacing?: number,
		arrowsAutoHide?: boolean,
		autoCenter?: boolean,
		transitionSpeed?: number,
		fitInViewport?: boolean,
		firstMargin?: boolean,
		arrowLeft?: JQuery,
		arrowRight?: JQuery,
		appendSpan?: boolean
	}

	declare export interface RoyalSliderFullscreenOptions {
		enabled?: boolean,
		keyboardNav?: boolean,
		buttonFS?: boolean,
		nativeFS?: boolean
	}

	declare export interface RoyalSliderDeeplinkingOptions {
		enabled?: boolean,
		change?: boolean,
		prefix?: string
	}

	declare export interface RoyalSliderAutoplayOptions {
		enabled?: boolean,
		stopAtAction?: boolean,
		pauseOnHover?: boolean,
		delay?: number
	}

	declare export interface RoyalSliderVideoOptions {
		autoHideArrows?: boolean,
		autoHideControlNav?: boolean,
		autoHideBlocks?: boolean,
		youTubeCode?: string,
		vimeoCode?: string
	}

	declare export interface RoyalSliderBlockOptions {
		fadeEffect?: boolean,
		moveEffect?: string,
		moveOffset?: number,
		speed?: number,
		easing?: string,
		delay?: number
	}

	declare export interface RoyalSliderVisibleOptions {
		enabled?: boolean,
		centerArea?: number,
		center?: boolean,
		navigateByCenterClick?: boolean,
		breakpoint?: number,
		breakpointCenterArea?: number
	}

	declare export interface RoyalSliderOptions {
		autoScaleSlider?: boolean,
		autoScaleSliderWidth?: number,
		autoScaleSliderHeight?: number,
		imageScaleMode?: string,
		imageAlignCenter?: boolean,
		imageScalePadding?: number,
		controlNavigation?: string,
		arrowsNav?: boolean,
		arrowsNavAutoHide?: boolean,
		arrowsNavHideOnTouch?: boolean,
		imgWidth?: number,
		imgHeight?: number,
		slidesSpacing?: number,
		startSlideId?: number,
		loop?: boolean,
		loopRewind?: boolean,
		randomizeSlides?: boolean,
		numImagesToPreload?: number,
		usePreloader?: boolean,
		slidesOrientation?: string,
		transitionType?: string,
		transitionSpeed?: number,
		easeInOut?: string,
		easeOut?: string,
		controlsInside?: boolean,
		navigateByClick?: boolean,
		sliderDrag?: boolean,
		sliderTouch?: boolean,
		keyboardNavEnabled?: boolean,
		fadeinLoadedSlide?: boolean,
		allowCSS3?: boolean,
		globalCaption?: boolean,
		addActiveClass?: boolean,
		minSlideOffset?: number,
		autoHeight?: boolean,
		slides?: Element,
		thumbs?: RoyalSliderThumbsOptions,
		fullscreen?: RoyalSliderFullscreenOptions,
		deeplinking?: RoyalSliderDeeplinkingOptions,
		autoplay?: RoyalSliderAutoplayOptions,
		video?: RoyalSliderVideoOptions,
		block?: RoyalSliderBlockOptions,
		visibleNearby?: RoyalSliderVisibleOptions
	}

	declare export interface RoyalSlider {
		goTo(id: number): void,
		next(): void,
		prev(): void,
		destroy(): void,
		appendSlide(element: JQuery, index?: number): void,
		removeSlide(index?: number): void,
		updateSliderSize(forceResize?: boolean): void,
		setThumbsOrientation(orientation: string): void,
		updateThumbsSize(): void,
		enterFullscreen(): void,
		exitFullscreen(): void,
		startAutoPlay(): void,
		stopAutoPlay(): void,
		toggleAutoPlay(): void,
		toggleVideo(): void,
		playVideo(): void,
		stopVideo(): void,
		currSlideId: number,
		currSlide: JQuery,
		numSlides: number,
		isFullscreen: boolean,
		nativeFS: boolean,
		width: number,
		height: number,
		dragSuccess: boolean,
		slides: any[],
		slidesJQ: JQuery[],
		st: RoyalSliderOptions,
		ev: JQuery
	}

			
}