import type { FoundationSitesStatic } from 'npm$namespace$FoundationSites'

declare module 'foundation-sites' {
		declare interface JQuery {
		foundation(method?: string | Array<any>): JQuery
	}

			
}

declare module 'npm$namespace$FoundationSites' {
		declare interface Abide {
		requiredChecked(element: Object): boolean,
		findFormError($el: Object): Object,
		findLabel(element: Object): boolean,
		addErrorClasses(element: Object): void,
		removeErrorClasses(element: Object): void,
		validateInput(element: Object, form: Object): void,
		validateForm(element: Object): void,
		validateText(element: Object): boolean,
		validateRadio(group: string): boolean,
		matchValidation($el: Object, validators: string, required: boolean): boolean,
		resetForm($form: Object): void,
		destroy(): void
	}

	declare interface IAbidePatterns {
		alpha?: RegExp,
		alpha_numeric?: RegExp,
		integer?: RegExp,
		number?: RegExp,
		card?: RegExp,
		cvv?: RegExp,
		email?: RegExp,
		url?: RegExp,
		domain?: RegExp,
		datetime?: RegExp,
		date?: RegExp,
		time?: RegExp,
		dateISO?: RegExp,
		month_day_year?: RegExp,
		day_month_year?: RegExp,
		color?: RegExp
	}

	declare interface IAbideOptions {
		validateOn?: string,
		labelErrorClass?: string,
		inputErrorClass?: string,
		formErrorSelector?: string,
		formErrorClass?: string,
		liveValidate?: boolean,
		validators?: any
	}

	declare interface Accordion {
		toggle($target: JQuery): void,
		down($target: JQuery, firstTime: boolean): void,
		up($target: JQuery): void,
		destroy(): void
	}

	declare interface IAccordionOptions {
		slideSpeed?: number,
		multiOpen?: boolean,
		allowAllClosed?: boolean
	}

	declare interface AccordionMenu {
		hideAll(): void,
		toggle($target: JQuery): void,
		down($target: JQuery, firstTime: boolean): void,
		up($target: JQuery): void,
		destroy(): void
	}

	declare interface IAccordionMenuOptions {
		slideSpeed?: number,
		multiOpen?: boolean
	}

	declare interface Drilldown {
		_hideAll(): void,
		_back($elem: JQuery): void,
		_show($elem: JQuery): void,
		_hide($elem: JQuery): void,
		destroy(): void
	}

	declare interface IDrilldownOptions {
		backButton?: string,
		wrapper?: string,
		closeOnClick?: boolean
	}

	declare interface Dropdown {
		getPositionClass(): string,
		open(): void,
		close(): void,
		toggle(): void,
		destroy(): void
	}

	declare interface IDropdownOptions {
		hoverDelay?: number,
		hover?: boolean,
		hoverPane?: boolean,
		vOffset?: number,
		hOffset?: number,
		positionClass?: string,
		trapFocus?: boolean,
		autoFocus?: boolean,
		closeOnClick?: boolean
	}

	declare interface DropdownMenu {
		destroy(): void
	}

	declare interface IDropdownMenuOptions {
		disableHover?: boolean,
		autoclose?: boolean,
		hoverDelay?: number,
		clickOpen?: boolean,
		closingTime?: number,
		alignment?: string,
		closeOnClick?: boolean,
		verticalClass?: string,
		rightClass?: string,
		forceFollow?: boolean
	}

	declare interface Equalizer {
		getHeights(element: Object): Array<any>,
		getHeightsByRow(cb: Function): void,
		applyHeight(heights: Array<any>): void,
		applyHeightByRow(groups: Array<any>): void,
		destroy(): void
	}

	declare interface IEqualizerOptions {
		equalizeOnStack?: boolean,
		equalizeByRow?: boolean,
		equalizeOn?: string
	}

	declare interface Interchange {
		replace(path: string): void,
		destroy(): void
	}

	declare interface IInterchangeOptions {
		rules?: Array<any>
	}

	declare interface Magellan {
		calcPoints(): void,
		reflow(): void,
		destroy(): void
	}

	declare interface IMagellanOptions {
		animationDuration?: number,
		animationEasing?: string,
		threshold?: number,
		activeClass?: string,
		deepLinking?: boolean,
		barOffset?: number
	}

	declare interface OffCanvas {
		reveal(isRevealed: boolean): void,
		open(event: Object, trigger: JQuery): void,
		close(): void,
		toggle(event: Object, trigger: JQuery): void,
		destroy(): void
	}

	declare interface IOffCanvasOptions {
		closeOnClick?: boolean,
		transitionTime?: number,
		position?: string,
		forceTop?: boolean,
		isRevealed?: boolean,
		revealOn?: string,
		autoFocus?: boolean,
		revealClass?: string
	}

	declare interface Orbit {
		geoSync(): void,
		changeSlide(isLTR: boolean, chosenSlide?: Object, idx?: number): void,
		destroy(): void
	}

	declare interface IOrbitOptions {
		bullets?: boolean,
		navButtons?: boolean,
		animInFromRight?: string,
		animOutToRight?: string,
		animInFromLeft?: string,
		animOutToLeft?: string,
		autoPlay?: boolean,
		timerDelay?: number,
		infiniteWrap?: boolean,
		swipe?: boolean,
		pauseOnHover?: boolean,
		accessible?: boolean,
		containerClass?: string,
		slideClass?: string,
		boxOfBullets?: string,
		nextClass?: string,
		prevClass?: string,
		useMUI?: boolean
	}

	declare interface Reveal {
		open(): void,
		toggle(): void,
		close(): void,
		destroy(): void
	}

	declare interface IRevealOptions {
		animationIn?: string,
		animationOut?: string,
		showDelay?: number,
		hideDelay?: number,
		closeOnClick?: boolean,
		closeOnEsc?: boolean,
		multipleOpened?: boolean,
		vOffset?: number,
		hOffset?: number,
		fullScreen?: boolean,
		btmOffsetPct?: number,
		overlay?: boolean,
		resetOnClose?: boolean
	}

	declare interface Slider {
		destroy(): void
	}

	declare interface ISliderOptions {
		start?: number,
		end?: number,
		step?: number,
		initialStart?: number,
		initialEnd?: number,
		binding?: boolean,
		clickSelect?: boolean,
		vertical?: boolean,
		draggable?: boolean,
		disabled?: boolean,
		doubleSided?: boolean,
		decimal?: number,
		moveTime?: number,
		disabledClass?: string
	}

	declare interface Sticky {
		_pauseListeners(scrollListener: string): void,
		_calc(checkSizes: boolean, scroll: number): void,
		destroy(): void,
		emCalc(Number: number): void
	}

	declare interface IStickyOptions {
		container?: string,
		stickTo?: string,
		anchor?: string,
		topAnchor?: string,
		btmAnchor?: string,
		marginTop?: number,
		marginBottom?: number,
		stickyOn?: string,
		stickyClass?: string,
		containerClass?: string,
		checkEvery?: number
	}

	declare interface Tabs {
		_handleTabChange($target: JQuery): void,
		selectTab($target: JQuery): void,
		destroy(): void
	}

	declare interface ITabsOptions {
		autoFocus?: boolean,
		wrapOnKeys?: boolean,
		matchHeight?: boolean,
		linkClass?: string,
		panelClass?: string
	}

	declare interface Toggler {
		toggle(): void,
		destroy(): void
	}

	declare interface ITogglerOptions {
		animate?: boolean
	}

	declare interface Tooltip {
		show(): void,
		hide(): void,
		toggle(): void,
		destroy(): void
	}

	declare interface ITooltipOptions {
		hoverDelay?: number,
		fadeInDuration?: number,
		fadeOutDuration?: number,
		disableHover?: boolean,
		templateClasses?: string,
		tooltipClass?: string,
		triggerClass?: string,
		showOn?: string,
		template?: string,
		tipText?: string,
		clickOpen?: boolean,
		positionClass?: string,
		vOffset?: number,
		hOffset?: number
	}

	declare interface Box {
		ImNotTouchingYou(element: Object, parent?: Object, lrOnly?: boolean, tbOnly?: boolean): boolean,
		GetDimensions(element: Object): Object,
		GetOffsets(
		element: Object, anchor: Object, position: string, vOffset: number, hOffset: number, isOverflow: boolean
	): Object
	}

	declare interface KeyBoard {
		parseKey(event: any): string,
		handleKey(event: any, component: any, functions: any): void,
		findFocusable($element: Object): Object
	}

	declare interface MediaQuery {
		get(size: string): string,
		atLeast(size: string): boolean,
		queries: Array<string>,
		current: string
	}

	declare interface Motion {
		animateIn(element: Object, animation: any, cb: Function): void,
		animateOut(element: Object, animation: any, cb: Function): void
	}

	declare interface Move {
		
	}

	declare interface Nest {
		Feather(menu: any, type: any): void,
		Burn(menu: any, type: any): void
	}

	declare interface Timer {
		start(): void,
		restart(): void,
		pause(): void
	}

	declare interface Touch {
		
	}

	declare interface Triggers {
		
	}

	declare interface FoundationSitesStatic {
		version: string,
		rtl(): boolean,
		plugin(plugin: Object, name: string): void,
		registerPlugin(plugin: Object): void,
		unregisterPlugin(plugin: Object): void,
		reInit(plugins: Array<any>): void,
		GetYoDigits(length: number, namespace?: string): string,
		reflow(elem: Object, plugins?: Array<string> | string): void,
		getFnName(fn: string): string,
		transitionend(): string,
		util: {
		throttle(func: (...args: any[]) => any, delay: number): (...args: any[]) => any
	},
		Abide(element: Object, options?: IAbideOptions): Abide,
		Accordion(element: Object, options?: IAccordionOptions): Accordion,
		AccordionMenu(element: Object, options?: IAccordionMenuOptions): AccordionMenu,
		DrillDown(element: Object, options?: IDrilldownOptions): Drilldown,
		Dropdown(element: Object, options?: IDropdownOptions): Dropdown,
		DropdownMenu(element: Object, options?: IDropdownMenuOptions): DropdownMenu,
		Equalizer(element: Object, options?: IEqualizerOptions): Equalizer,
		Interchange(element: Object, options?: IInterchangeOptions): Interchange,
		Magellan(element: Object, options?: IMagellanOptions): Magellan,
		OffCanvas(element: Object, options?: IOffCanvasOptions): OffCanvas,
		Orbit(element: Object, options?: IOrbitOptions): Orbit,
		Reveal(element: Object, options?: IRevealOptions): Reveal,
		Slider(element: Object, options?: ISliderOptions): Slider,
		Sticky(element: Object, options?: IStickyOptions): Sticky,
		Tabs(element: Object, options?: ITabsOptions): Tabs,
		Toggler(element: Object, options?: ITogglerOptions): Toggler,
		Tooltip(element: Object, options?: ITooltipOptions): Tooltip,
		Box: Box,
		KeyBoard: KeyBoard,
		MediaQuery: MediaQuery,
		Motion: Motion,
		Move: Move,
		Nest: Nest,
		Timer: Timer,
		Touch: Touch,
		Triggers: Triggers
	}

			
}

declare module 'Foundation' {
					declare module.exports: undefined


}