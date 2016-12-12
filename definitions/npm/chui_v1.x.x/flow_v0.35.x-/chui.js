

declare module 'chui' {
		declare interface ChocolateChipStatic {
		concat(...string: string[]): string,
		forEach(obj: Array<any>, callback: Function, args?: any): any,
		eventStart: ChUIEventInterface,
		eventEnd: ChUIEventInterface,
		eventMove: ChUIEventInterface,
		eventCancel: ChUIEventInterface,
		isIEEdge: boolean,
		isWideScreen: boolean,
		isWideScreenPortrait: boolean,
		browserVersion(): number,
		UIHideNavBar(): void,
		UIShowNavBar(): void,
		isNavigating: boolean,
		UIBrowserHashModification: boolean,
		UIEnableBrowserHashModification(): void,
		UIGoToArticle(destination: string): void,
		UIGoBack(): void,
		UIGoBackToArticle(articleID: string): void,
		UIBlock(opacity?: number): void,
		UIUnblock(): void,
		UIPopup(
		options?: {
		id?: string,
		title?: string,
		message?: string,
		cancelButton?: string,
		continueButton?: string,
		callback?: Function,
		empty?: boolean
	}
	): void,
		UIPopover(options?: {
		id?: string,
		callback?: Function,
		title?: string
	}): void,
		UIPopoverClose(): void,
		UICreateSegmented(
		options?: {
		id?: string,
		className?: string,
		labels?: string[],
		selected?: number
	}
	): ChocolateChipElementArray,
		UIPaging(): void,
		UISheet(
		options: {
		id: string,
		listClass?: string,
		background?: string,
		handle?: boolean
	}
	): void,
		UIShowSheet(id: string): void,
		UIHideSheet(): void,
		body: ChocolateChipElementArray,
		UINavigationHistory: string[],
		UISlideout: {
		(options?: {
		dynamic?: boolean,
		callback?: (args?: any) => any
	}): any,
		populate(array: Object[]): void
	},
		UIResetStepper(stepper: HTMLElement[]): void,
		UICreateSwitch(
		options?: {
		id?: string,
		name?: string,
		state?: string,
		value?: string | number,
		checked?: string,
		style?: string,
		callback?: () => any
	}
	): void,
		UITabbar(
		options?: {
		id?: string,
		tabs: number,
		labels: string[],
		icons?: string[],
		selected?: number
	}
	): void,
		UISearch(
		options?: {
		articleId?: any,
		id?: string,
		placeholder?: string,
		results?: number
	}
	): void,
		UISetupCarousel(
		options: {
		target: any,
		panels: ChocolateChipElementArray,
		loop?: boolean,
		pagination?: boolean
	}
	): void,
		UIBindData(controller?: string): void,
		UIUnBindData(controller?: string): void
	}

	declare interface ChocolateChipElementArray {
		forEach(func: (ctx: any, idx: number) => void): void,
		iz(selector: string): ChocolateChipElementArray,
		iz(element: any): ChocolateChipElementArray,
		iznt(selector: string): ChocolateChipElementArray,
		iznt(element: any): ChocolateChipElementArray,
		haz(selector: string): ChocolateChipElementArray,
		haz(contained: HTMLElement): ChocolateChipElementArray,
		haznt(selector: string): ChocolateChipElementArray,
		haznt(contained: HTMLElement): ChocolateChipElementArray,
		hazClass(className: string): ChocolateChipElementArray,
		hazntClass(className: string): ChocolateChipElementArray,
		hazAttr(attributeName: string): ChocolateChipElementArray,
		hazntAttr(attributeName: string): ChocolateChipElementArray,
		bind(
		eventType: string | ChUIEventInterface, handler: (eventObject: Event) => any, useCapture?: boolean
	): ChocolateChipStatic,
		unbind(
		eventType: string | ChUIEventInterface, handler: (eventObject: Event) => any, useCapture?: boolean
	): ChocolateChipStatic,
		delegate(
		selector: any, eventType: string | ChUIEventInterface, handler: (eventObject: Event) => any, useCapture?: boolean
	): ChocolateChipStatic,
		undelegate(
		selector: any, eventType: string | ChUIEventInterface, handler: (eventObject: Event) => any, useCapture?: boolean
	): ChocolateChipStatic,
		on(
		eventType: string | ChUIEventInterface, selector: any, handler?: (eventObject: Event) => any, capturePhase?: boolean
	): ChocolateChipStatic,
		off(
		eventType?: string | ChUIEventInterface, selector?: any, handler?: (eventObject: Event) => any, capturePhase?: boolean
	): ChocolateChipStatic,
		trigger(eventType: string | ChUIEventInterface): void,
		UICenter(): void,
		UIBusy(
		options?: {
		size?: string,
		color?: string,
		position?: string | boolean,
		duration?: string
	}
	): void,
		UIPopupClose(): void,
		UISegmented(options?: {
		selected?: number,
		callback?: Function
	}): void,
		UIPanelToggle(panelsContainer: string, callback: () => any): void,
		UIEditList(
		options?: {
		editLabel?: string,
		doneLabel?: string,
		deleteLabel?: string,
		callback?: Function,
		deletable?: boolean,
		movable?: boolean
	}
	): void,
		UISelectList(
		options?: {
		name?: string,
		selected?: number,
		callback?: Function
	}
	): void,
		UIStepper(options: {
		start: number,
		end: number,
		defaultValue: number
	}): void,
		UISwitch(): void,
		UIRange(): void
	}

	declare interface JQueryStatic {
		concat(...string: string[]): string,
		forEach(obj: Array<any>, callback: Function, args?: any): any,
		eventStart: ChUIEventInterface,
		eventEnd: ChUIEventInterface,
		eventMove: ChUIEventInterface,
		eventCancel: ChUIEventInterface,
		isiPhone: boolean,
		isiPad: boolean,
		isiPod: boolean,
		isiOS: boolean,
		isAndroid: boolean,
		isWebOS: boolean,
		isBlackberry: boolean,
		isTouchEnabled: boolean,
		isOnline: boolean,
		isStandalone: boolean,
		isiOS6: boolean,
		isiOS7: boolean,
		isWin: boolean,
		isWinPhone: boolean,
		isIE10: boolean,
		isIE11: boolean,
		isIEEdge: boolean,
		isWebkit: boolean,
		isMobile: boolean,
		isDesktop: boolean,
		isSafari: boolean,
		isChrome: boolean,
		isNativeAndroid: boolean,
		isWideScreen: boolean,
		isWideScreenPortrait: boolean,
		browserVersion(): number,
		UIHideNavBar(): void,
		UIShowNavBar(): void,
		isNavigating: boolean,
		UIBrowserHashModification: boolean,
		UIEnableBrowserHashModification(): void,
		UIGoToArticle(destination: string): void,
		UIGoBack(): void,
		UIGoBackToArticle(articleID: string): void,
		UIBlock(opacity?: number): void,
		UIUnblock(): void,
		UIPopup(
		options?: {
		id?: string,
		title?: string,
		message?: string,
		cancelButton?: string,
		continueButton?: string,
		callback?: Function,
		empty?: boolean
	}
	): void,
		UIPopover(options?: {
		id?: string,
		callback?: Function,
		title?: string
	}): void,
		UIPopoverClose(): void,
		UICreateSegmented(
		options: {
		id?: string,
		className?: string,
		labels?: string[],
		selected?: number
	}
	): JQuery,
		UIPaging(): void,
		UISheet(
		options: {
		id: string,
		listClass?: string,
		background?: string,
		handle?: boolean
	}
	): void,
		UIShowSheet(id: string): void,
		UIHideSheet(): void,
		body: JQuery,
		UINavigationHistory: string[],
		UISlideout: {
		(options?: {
		dynamic?: boolean,
		callback?: (args?: any) => any
	}): any,
		populate(array: Object[]): void
	},
		UIResetStepper(stepper: JQuery): void,
		UICreateSwitch(
		options?: {
		id?: string,
		name?: string,
		state?: string,
		value?: string | number,
		checked?: string,
		style?: string,
		callback?: () => any
	}
	): void,
		UITabbar(
		options?: {
		id?: string,
		tabs: number,
		labels: string[],
		icons?: string[],
		selected?: number
	}
	): void,
		UISearch(
		options?: {
		articleId?: any,
		id?: string,
		placeholder?: string,
		results?: number
	}
	): void,
		UISetupCarousel(
		options: {
		target: any,
		panels: JQuery,
		loop?: boolean,
		pagination?: boolean
	}
	): void,
		UIBindData(controller?: string): void,
		UIUnBindData(controller?: string): void,
		templates: Object,
		template: {
		(template: string, variable?: string): Function,
		repeater: (element: JQuery, template: string, data: any) => void,
		data: {
		repeaterName?: any
	},
		index: number
	}
	}

	declare interface JQuery {
		forEach(callback: (ctx: HTMLElement, idx: number) => any): JQuery,
		iz(selector: string): JQuery,
		iz(element: any): JQuery,
		iznt(selector: string): JQuery,
		iznt(element: any): JQuery,
		haz(selector: string): JQuery,
		haz(contained: HTMLElement): JQuery,
		haznt(selector: string): JQuery,
		haznt(contained: HTMLElement): JQuery,
		hazClass(className: string): JQuery,
		hazntClass(className: string): JQuery,
		hazAttr(attributeName: string): JQuery,
		hazntAttr(attributeName: string): JQuery,
		UICenter(): void,
		UIBusy(
		options?: {
		size?: string,
		color?: string,
		position?: string | boolean,
		duration?: string
	}
	): void,
		UIPopupClose(): void,
		UISegmented(options?: {
		selected?: number,
		callback?: Function
	}): void,
		UIPanelToggle(panelsContainer: string, callback: () => any): void,
		UIEditList(
		options?: {
		editLabel?: string,
		doneLabel?: string,
		deleteLabel?: string,
		callback?: Function,
		deletable?: boolean,
		movable?: boolean
	}
	): void,
		UISelectList(
		options?: {
		name?: string,
		selected?: number,
		callback?: Function
	}
	): void,
		UIStepper(options: {
		start: number,
		end: number,
		defaultValue: number
	}): void,
		UISwitch(): void,
		UIRange(): void,
		bind(
		eventType: string | ChUIEventInterface, eventData: any, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		bind(
		eventType: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		bind(
		eventType: string | ChUIEventInterface, eventData: any, preventBubble: boolean
	): JQuery,
		bind(eventType: string | ChUIEventInterface, preventBubble: boolean): JQuery,
		delegate(
		selector: any, eventType: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		delegate(
		selector: any, eventType: string | ChUIEventInterface, eventData: any, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: string | ChUIEventInterface, selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		on(
		events: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: string | ChUIEventInterface, data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: string | ChUIEventInterface, selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: string | ChUIEventInterface, selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		one(
		events: string | ChUIEventInterface, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		one(
		events: string | ChUIEventInterface, data: Object, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		one(
		events: string | ChUIEventInterface, selector: string, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		one(
		events: string | ChUIEventInterface, selector: string, data: any, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		trigger(
		eventType: string | ChUIEventInterface, extraParameters?: any[] | Object
	): JQuery,
		triggerHandler(eventType: string | ChUIEventInterface, ...extraParameters: any[]): Object,
		unbind(
		eventType?: string | ChUIEventInterface, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		unbind(eventType: string | ChUIEventInterface, fls: boolean): JQuery,
		undelegate(
		selector: string | ChUIEventInterface, eventType: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		undelegate(selector: string | ChUIEventInterface, events: Object): JQuery
	}

	declare interface ChUIEventInterface {
		eventStart: string,
		eventEnd: string,
		eventMove: string,
		eventCancel: string,
		tap: string,
		singletap: string,
		doubletap: string,
		longtap: string,
		swipe: string,
		swipeleft: string,
		swiperight: string,
		swipeup: string,
		swipedown: string
	}

	declare interface JQueryEventConstructor {
		(name: string, eventProperties?: any): JQueryEventObject,
		new (name: string, eventProperties?: any): JQueryEventObject
	}

	declare interface JQueryEventInterface {
		Event: JQueryEventConstructor
	}

	declare interface BaseJQueryEventObject {
		
	}

	declare interface JQueryEventObject {
		
	}

	declare interface BaseJQueryEventObject {
		
	}

	declare interface JQueryInputEventObject {
		
	}

	declare interface JQueryMouseEventObject {
		
	}

	declare interface JQueryKeyEventObject {
		
	}

	declare interface JQueryEventObject {
		
	}

			
}