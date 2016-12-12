

declare module 'fullpage.js' {
		declare interface FullPageJsOptions {
		menu?: string,
		lockAnchors?: boolean,
		anchors?: string[],
		navigation?: boolean,
		navigationPosition?: string,
		navigationTooltips?: string[],
		showActiveTooltip?: boolean,
		slidesNavigation?: boolean,
		slidesNavPosition?: string,
		css3?: boolean,
		scrollingSpeed?: number,
		autoScrolling?: boolean,
		fitToSection?: boolean,
		fitToSectionDelay?: number,
		scrollBar?: boolean,
		easing?: string,
		easingcss3?: string,
		loopBottom?: boolean,
		loopTop?: boolean,
		loopHorizontal?: boolean,
		continuousVertical?: boolean,
		normalScrollElements?: string,
		scrollOverflow?: boolean,
		scrollOverflowOptions?: any,
		touchSensitivity?: number,
		normalScrollElementTouchThreshold?: number,
		keyboardScrolling?: boolean,
		animateAnchor?: boolean,
		recordHistory?: boolean,
		controlArrows?: boolean,
		verticalCentered?: boolean,
		resize?: boolean,
		sectionsColor?: string[],
		paddingTop?: string,
		paddingBottom?: string,
		fixedElements?: string,
		responsiveWidth?: number,
		responsiveHeight?: number,
		sectionSelector?: string,
		slideSelector?: string,
		onLeave?: (index: number, nextIndex: number, direction: string) => void,
		afterLoad?: (anchorLink: string, index: number) => void,
		afterRender?: () => void,
		afterResize?: () => void,
		afterSlideLoad?: (
		anchorLink: string, index: number, slideAnchor: string, slideIndex: number
	) => void,
		onSlideLeave?: (
		anchorLink: string, index: number, slideIndex: number, direction: string, nextSlideIndex: number
	) => void
	}

	declare interface JQuery {
		fullpage(options?: FullPageJsOptions): JQuery
	}

			
}