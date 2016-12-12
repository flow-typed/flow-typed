

declare module 'jquery.cycle2' {
		declare interface JQuery {
		cycle: JQueryCycle2.Cycle2,
		on(
		methodName: "cycle-after", callback: (
		event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState, outgoingSlideEl: Element, incomingSlideEl: Element, forwardFlag: boolean
	) => void
	): JQuery,
		on(
		methodName: "cycle-before", callback: (
		event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState, outgoingSlideEl: Element, incomingSlideEl: Element, forwardFlag: boolean
	) => void
	): JQuery,
		on(
		methodName: "cycle-bootstrap", callback: (
		event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState, API: JQueryCycle2.API
	) => void
	): JQuery,
		on(
		methodName: "cycle-destroyed", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-finished", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-initialized", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-next", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-pager-activated", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-paused", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-post-initialize", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-pre-initialize", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-prev", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-resumed", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-slide-added", callback: (event: JQueryEventObject, jQueryWrappedSlideEl: JQuery) => void
	): JQuery,
		on(
		methodName: "cycle-slide-removed", callback: (
		event: JQueryEventObject, indexOfSlideRemoved: number, removedSlideEl: Element
	) => void
	): JQuery,
		on(
		methodName: "cycle-stopped", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-transition-stopped", callback: (event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState) => void
	): JQuery,
		on(
		methodName: "cycle-update-view", callback: (
		event: JQueryEventObject, optionHash: JQueryCycle2.OptionsWithState, slideOptionsHash: JQueryCycle2.OptionsWithState, currentSlideEl: Element
	) => void
	): JQuery
	}

			
}

declare module 'npm$namespace$JQueryCycle2' {
		declare interface Cycle2 {
		(options?: Options): JQuery,
		(methodName: "add", newSlide: any): JQuery,
		(methodName: "destroy"): JQuery,
		(methodName: "goto", index: number): JQuery,
		(methodName: "next"): JQuery,
		(methodName: "pause"): JQuery,
		(methodName: "prev"): JQuery,
		(methodName: "reinit"): JQuery,
		(methodName: "remove", index: number): JQuery,
		(methodName: "resume"): JQuery,
		(methodName: "stop"): JQuery,
		(methodNameDontCallMe: string, arg1DontCallMe: any, arg2DontCallMe: any): JQuery
	}

	declare interface Options {
		allowWrap?: boolean,
		autoHeight?: any,
		autoSelector?: string,
		caption?: string,
		captionTemplate?: string,
		continueAuto?: boolean,
		delay?: number,
		disabledClass?: string,
		easing?: string,
		fx?: string,
		hideNonActive?: boolean,
		loader?: any,
		log?: boolean,
		loop?: number,
		manualSpeed?: number,
		manualTrump?: boolean,
		next?: string,
		nextEvent?: string,
		overlay?: string,
		overlayTemplate?: string,
		pager?: string,
		pagerActivateClass?: string,
		pagerEvent?: string,
		pagerTemplate?: string,
		pauseOnHover?: any,
		paused?: boolean,
		prev?: string,
		prevEvent?: string,
		progressive?: string,
		random?: boolean,
		reverse?: boolean,
		slideActiveClass?: string,
		slideCss?: any,
		slideClass?: string,
		slides?: string,
		speed?: number,
		startingSlide?: number,
		swipe?: boolean,
		sync?: boolean,
		timeout?: number,
		tmplRegex?: string,
		updateView?: number
	}

	declare interface OptionsWithState {
		busy: boolean,
		currSlide: number,
		nextSlide: number,
		paused: boolean,
		slideNum: number,
		slideCount: number
	}

	declare interface API {
		add(slides: any, prepend?: boolean): void,
		addInitialSlides(): void,
		advanceSlide(numberOfOpositions: number): boolean,
		buildPagerLink(slideOptionHash: Options, slide: any): void,
		buildSlideOpts(slide: any): Options,
		calcFirstSlide(): void,
		calcNextSlide(): void,
		calcTx(slideOptions: Options, manual: boolean): Transition,
		destroy(): void,
		doTransition(
		slideOptions: Options, currEl: Element, nextEl: Element, fwdFlag: boolean, callback: Function
	): void,
		getComponent(nameOfComponent: string): JQuery,
		getSlideIndex(slideElement: Element): number,
		getSlideOpts(slideIndex: number): Options,
		goto(index: number): void,
		initSlide(slideOptions: Options, slide: any, suggestedZindex: number): void,
		initSlideshow(): void,
		log(...args: any[]): void,
		next(): void,
		page(pagerEl: Element, targetEl: Element): void,
		pause(): void,
		postInitSlideshow(): void,
		preInitSlideshow(): void,
		prepareTx(manualFlag: boolean, fwdFlag: boolean): void,
		prev(): void,
		queueTransition(slideOptions: Options): void,
		reinit(): void,
		remove(slideIndexToRemove: number): void,
		resume(): void,
		stackSlides(currEl: Element, nextEl: Element, fwdFlag: boolean): void,
		stop(): void,
		stopTransition(): void,
		tmpl(templateString: string, optionHash: Options, slideEl: Element): void,
		trigger(eventName: String, ...args: any[]): void,
		updateView(): void
	}

	declare interface Transition {
		before(opts: Options, curr: Element, next: Element, fwd: boolean): void
	}

			
}