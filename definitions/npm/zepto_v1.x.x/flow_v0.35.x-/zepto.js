

declare module 'zepto' {
		declare interface ZeptoStatic {
		(selector: string, context?: any): ZeptoCollection,
		(collection: ZeptoCollection): ZeptoCollection,
		(element: HTMLElement): ZeptoCollection,
		(htmlString: string): ZeptoCollection,
		(htmlString: string, attributes: any): ZeptoCollection,
		(object: any): ZeptoCollection,
		camelCase(str: string): string,
		contains(parent: HTMLElement, node: HTMLElement): boolean,
		each(collection: any[], fn: (index: number, item: any) => boolean): void,
		each(collection: any, fn: (key: string, value: any) => boolean): void,
		extend(target: any, ...sources: any[]): any,
		extend(deep: boolean, target: any, ...sources: any[]): any,
		fn: any,
		grep(items: any[], fn: (item: any) => boolean): any[],
		inArray(element: any, array: any[], fromIndex?: number): number,
		isArray(object: any): boolean,
		isFunction(object: any): boolean,
		isPlainObject(object: any): boolean,
		isWindow(object: any): boolean,
		map(collection: any[], fn: (item: any, index: number) => any): any[],
		parseJSON(str: string): any,
		trim(str: string): string,
		type(object: any): string,
		Event(type: string, properties: any): Event,
		proxy(fn: Function, context: any): Function,
		ajax(options: ZeptoAjaxSettings): XMLHttpRequest,
		ajaxJSONP(options: ZeptoAjaxSettings): XMLHttpRequest,
		ajaxSettings: ZeptoAjaxSettings,
		get(
		url: string, fn: (data: any, status: string, xhr: XMLHttpRequest) => void
	): XMLHttpRequest,
		get(
		url: string, data: any, fn: (data: any, status: string, xhr: XMLHttpRequest) => void
	): XMLHttpRequest,
		getJSON(
		url: string, fn: (data: any, status: string, xhr: XMLHttpRequest) => void
	): XMLHttpRequest,
		getJSON(
		url: string, data: any, fn: (data: any, status: string, xhr: XMLHttpRequest) => void
	): XMLHttpRequest,
		param(object: any, shallow?: boolean): string,
		post(
		url: string, fn: (data: any, status: string, xhr: XMLHttpRequest) => void, dataType?: string
	): XMLHttpRequest,
		post(
		url: string, data: any, fn: (data: any, status: string, xhr: XMLHttpRequest) => void, dataType?: string
	): XMLHttpRequest,
		fx: ZeptoEffects,
		os: {
		version: string,
		phone: boolean,
		tablet: boolean,
		ios: boolean,
		android: boolean,
		webos: boolean,
		blackberry: boolean,
		bb10: boolean,
		rimtabletos: boolean,
		iphone: boolean,
		ipad: boolean,
		touchpad: boolean,
		kindle: boolean
	},
		browser: {
		version: string,
		chrome: boolean,
		firefox: boolean,
		silk: boolean,
		playbook: boolean
	}
	}

	declare interface ZeptoEffects {
		off: boolean,
		speeds: ZeptoEffectsSpeeds
	}

	declare interface ZeptoEffectsSpeeds {
		_default: number,
		fast: number,
		slow: number
	}

	declare interface ZeptoCollection {
		add(selector: string, context?: any): ZeptoCollection,
		addClass(name: string): ZeptoCollection,
		after(content: string): ZeptoCollection,
		after(content: HTMLElement): ZeptoCollection,
		after(content: HTMLElement[]): ZeptoCollection,
		after(content: ZeptoCollection): ZeptoCollection,
		append(content: string): ZeptoCollection,
		append(content: HTMLElement): ZeptoCollection,
		append(content: HTMLElement[]): ZeptoCollection,
		append(content: ZeptoCollection): ZeptoCollection,
		appendTo(target: string): ZeptoCollection,
		appendTo(target: HTMLElement): ZeptoCollection,
		appendTo(target: HTMLElement[]): ZeptoCollection,
		appendTo(target: ZeptoCollection): ZeptoCollection,
		attr(name: string): string,
		attr(name: string, value: any): ZeptoCollection,
		attr(name: string, fn: (index: number, oldValue: any) => void): ZeptoCollection,
		attr(object: any): ZeptoCollection,
		before(content: string): ZeptoCollection,
		before(content: HTMLElement): ZeptoCollection,
		before(content: HTMLElement[]): ZeptoCollection,
		before(content: ZeptoCollection): ZeptoCollection,
		children(selector?: string): ZeptoCollection,
		clone(): ZeptoCollection,
		closest(selector: string, context?: any): ZeptoCollection,
		concat(...nodes: any[]): ZeptoCollection,
		contents(): ZeptoCollection,
		css(property: string): any,
		css(property: string, value: any): ZeptoCollection,
		css(properties: any): ZeptoCollection,
		data(name: string): any,
		data(name: string, value: any): ZeptoCollection,
		each(fn: (index: number, item: any) => boolean): ZeptoCollection,
		empty(): ZeptoCollection,
		eq(index: number): ZeptoCollection,
		filter(selector: string): ZeptoCollection,
		filter(fn: (index: number) => boolean): ZeptoCollection,
		find(selector: string): ZeptoCollection,
		find(collection: ZeptoCollection): ZeptoCollection,
		find(element: Element): ZeptoCollection,
		first(): ZeptoCollection,
		forEach(fn: (item: any, index: number, array: any[]) => void): ZeptoCollection,
		get(): HTMLElement[],
		get(index: number): HTMLElement,
		has(selector: string): ZeptoCollection,
		has(node: HTMLElement): ZeptoCollection,
		hasClass(name: string): boolean,
		height(): number,
		height(value: number): ZeptoCollection,
		height(fn: (index: number, oldHeight: number) => void): ZeptoCollection,
		hide(): ZeptoCollection,
		html(): string,
		html(content: string): ZeptoCollection,
		html(content: HTMLElement): ZeptoCollection,
		html(content: HTMLElement[]): ZeptoCollection,
		html(fn: (index: number, oldHtml: string) => void): ZeptoCollection,
		index(element?: string): number,
		index(element?: HTMLElement): number,
		index(element?: any): number,
		indexOf(element: string, fromIndex?: number): number,
		indexOf(element: HTMLElement, fromIndex?: number): number,
		indexOf(element: any, fromIndex?: number): number,
		insertAfter(target: string): ZeptoCollection,
		insertAfter(target: HTMLElement): ZeptoCollection,
		insertBefore(target: string): ZeptoCollection,
		insertBefore(target: HTMLElement): ZeptoCollection,
		is(selector?: string): boolean,
		last(): ZeptoCollection,
		map(fn: (index: number, item: any) => any): ZeptoCollection,
		next(selector?: string): ZeptoCollection,
		not(selector: string): ZeptoCollection,
		not(collection: ZeptoCollection): ZeptoCollection,
		not(fn: (index: number) => boolean): ZeptoCollection,
		offset(): ZeptoCoordinates,
		offset(coordinates: ZeptoCoordinates): ZeptoCollection,
		offset(fn: (index: number, oldOffset: number) => void): ZeptoCollection,
		offsetParent(): ZeptoCollection,
		parent(selector?: string): ZeptoCollection,
		parents(selector?: string): ZeptoCollection,
		pluck(property: string): string[],
		position(): ZeptoPosition,
		prepend(content: string): ZeptoCollection,
		prepend(content: HTMLElement): ZeptoCollection,
		prepend(content: HTMLElement[]): ZeptoCollection,
		prepend(content: ZeptoCollection): ZeptoCollection,
		prependTo(content: string): ZeptoCollection,
		prependTo(content: HTMLElement): ZeptoCollection,
		prependTo(content: HTMLElement[]): ZeptoCollection,
		prependTo(content: ZeptoCollection): ZeptoCollection,
		prev(selector?: string): ZeptoCollection,
		prop(name: string): any,
		prop(name: string, value: any): ZeptoCollection,
		prop(name: string, fn: (index: number, oldValue: any) => void): ZeptoCollection,
		push(...elements: any[]): ZeptoCollection,
		ready(fn: ($: ZeptoStatic) => void): ZeptoCollection,
		reduce(
		fn: (memo: any, item: any, index: number, array: any[], initial: any) => any
	): any,
		remove(): ZeptoCollection,
		removeAttr(name: string): ZeptoCollection,
		removeClass(name?: string): ZeptoCollection,
		removeClass(fn: (index: number, oldClassName: string) => void): ZeptoCollection,
		replaceWith(content: string): ZeptoCollection,
		replaceWith(content: HTMLElement): ZeptoCollection,
		replaceWith(content: HTMLElement[]): ZeptoCollection,
		scrollTop(): number,
		show(): ZeptoCollection,
		siblings(selector?: string): ZeptoCollection,
		size(): number,
		length: number,
		slice(start?: number, end?: number): ZeptoCollection[],
		text(): string,
		text(content: string): ZeptoCollection,
		toggle(setting?: boolean): ZeptoCollection,
		toggleClass(names: string, setting?: boolean): ZeptoCollection,
		toggleClass(
		fn: (index: number, oldClassNames: string) => void, setting?: boolean
	): ZeptoCollection,
		unwrap(): ZeptoCollection,
		val(): string,
		val(value: any): ZeptoCollection,
		val(fn: (index: number, oldValue: any) => void): ZeptoCollection,
		width(): number,
		width(value: number): ZeptoCollection,
		width(fn: (index: number, oldWidth: number) => void): ZeptoCollection,
		wrap(structure: string): ZeptoCollection,
		wrap(structure: HTMLElement): ZeptoCollection,
		wrap(fn: (index: number) => string): ZeptoCollection,
		wrapAll(structure: string): ZeptoCollection,
		wrapAll(structure: HTMLElement): ZeptoCollection,
		wrapInner(structure: string): ZeptoCollection,
		wrapInner(structure: HTMLElement): ZeptoCollection,
		wrapInner(fn: (index: number) => string): ZeptoCollection,
		bind(type: string, fn: (e: Event) => void): ZeptoCollection,
		delegate(selector: string, type: string, fn: (e: Event) => void): ZeptoCollection,
		die(type: string, fn: (e: Event) => void): ZeptoCollection,
		die(types: any): ZeptoCollection,
		live(type: string, fn: (e: Event) => void): ZeptoCollection,
		off(type: string, selector: string, fn: (e: Event) => boolean): ZeptoCollection,
		off(type: string, fn: (e: Event) => boolean): ZeptoCollection,
		off(type: string, selector?: string): ZeptoCollection,
		off(): ZeptoCollection,
		off(events: ZeptoEventHandlers, selector?: string): ZeptoCollection,
		on(type: string, selector: string, fn: (e: Event) => boolean): ZeptoCollection,
		on(type: string, fn: (e: Event) => boolean): ZeptoCollection,
		on(events: ZeptoEventHandlers, selector?: string): ZeptoCollection,
		one(type: string, fn: (e: Event) => void): ZeptoCollection,
		one(events: ZeptoEventHandlers): ZeptoCollection,
		trigger(event: string, data?: any[]): ZeptoCollection,
		triggerHandler(event: string, data?: any[]): ZeptoCollection,
		unbind(type: string, fn: (e: Event) => boolean): ZeptoCollection,
		undelegate(selector: string, type: string, fn: (e: Event) => boolean): ZeptoCollection,
		focusin(): ZeptoCollection,
		focusin(fn: (e: Event) => any): ZeptoCollection,
		focusout(): ZeptoCollection,
		focusout(fn: (e: Event) => any): ZeptoCollection,
		load(): ZeptoCollection,
		load(fn: (e: Event) => any): ZeptoCollection,
		resize(): ZeptoCollection,
		resize(fn: (e: Event) => any): ZeptoCollection,
		scroll(): ZeptoCollection,
		scroll(fn: (e: Event) => any): ZeptoCollection,
		unload(): ZeptoCollection,
		unload(fn: (e: Event) => any): ZeptoCollection,
		click(): ZeptoCollection,
		click(fn: (e: Event) => any): ZeptoCollection,
		dblclick(): ZeptoCollection,
		dblclick(fn: (e: Event) => any): ZeptoCollection,
		mousedown(): ZeptoCollection,
		mousedown(fn: (e: Event) => any): ZeptoCollection,
		mouseup(): ZeptoCollection,
		mouseup(fn: (e: Event) => any): ZeptoCollection,
		mousemove(): ZeptoCollection,
		mousemove(fn: (e: Event) => any): ZeptoCollection,
		mouseover(): ZeptoCollection,
		mouseover(fn: (e: Event) => any): ZeptoCollection,
		mouseout(): ZeptoCollection,
		mouseout(fn: (e: Event) => any): ZeptoCollection,
		mouseenter(): ZeptoCollection,
		mouseenter(fn: (e: Event) => any): ZeptoCollection,
		mouseleave(): ZeptoCollection,
		mouseleave(fn: (e: Event) => any): ZeptoCollection,
		change(): ZeptoCollection,
		change(fn: (e: Event) => any): ZeptoCollection,
		select(): ZeptoCollection,
		select(fn: (e: Event) => any): ZeptoCollection,
		keydown(): ZeptoCollection,
		keydown(fn: (e: Event) => any): ZeptoCollection,
		keypress(): ZeptoCollection,
		keypress(fn: (e: Event) => any): ZeptoCollection,
		keyup(): ZeptoCollection,
		keyup(fn: (e: Event) => any): ZeptoCollection,
		error(): ZeptoCollection,
		error(fn: (e: Event) => any): ZeptoCollection,
		focus(): ZeptoCollection,
		focus(fn: (e: Event) => any): ZeptoCollection,
		blur(): ZeptoCollection,
		blur(fn: (e: Event) => any): ZeptoCollection,
		load(
		url: string, fn?: (data: any, status: string, xhr: XMLHttpRequest) => void
	): ZeptoCollection,
		serialize(): string,
		serializeArray(): any[],
		submit(): ZeptoCollection,
		submit(fn: (e: any) => void): ZeptoCollection,
		animate(
		properties: any, duration?: number, easing?: string, complete?: () => void
	): ZeptoCollection,
		animate(properties: any, options: ZeptoAnimateSettings): ZeptoCollection
	}

	declare interface ZeptoAjaxSettings {
		type?: string,
		url?: string,
		data?: any,
		processData?: boolean,
		contentType?: string,
		mimeType?: string,
		dataType?: string,
		jsonp?: string,
		jsonpCallback?: any,
		timeout?: number,
		headers?: {
		[key: string]: string
	},
		async?: boolean,
		global?: boolean,
		context?: any,
		traditional?: boolean,
		cache?: boolean,
		xhrFields?: {
		[key: string]: any
	},
		username?: string,
		password?: string,
		beforeSend?: (xhr: XMLHttpRequest, settings: ZeptoAjaxSettings) => boolean,
		success?: (data: any, status: string, xhr: XMLHttpRequest) => void,
		error?: (xhr: XMLHttpRequest, errorType: string, error: Error) => void,
		complete?: (xhr: XMLHttpRequest, status: string) => void
	}

	declare interface ZeptoAjaxStartEvent {
		(): void
	}

	declare interface ZeptoAjaxBeforeSendEvent {
		(xhr: XMLHttpRequest, options: ZeptoAjaxSettings): void
	}

	declare interface ZeptoAjaxSendEvent {
		(xhr: XMLHttpRequest, options: ZeptoAjaxSettings): void
	}

	declare interface ZeptoAjaxSuccessEvent {
		(xhr: XMLHttpRequest, options: ZeptoAjaxSettings, data: any): void
	}

	declare interface ZeptoAjaxErrorEvent {
		(xhr: XMLHttpRequest, options: ZeptoAjaxSettings, error: Error): void
	}

	declare interface ZeptoAjaxCompleteEvent {
		(xhr: XMLHttpRequest, options: ZeptoAjaxSettings): void
	}

	declare interface ZeptoAjaxStopEvent {
		(): void
	}

	declare interface ZeptoAnimateSettings {
		duration?: number,
		easing?: string,
		complete?: () => void
	}

	declare interface ZeptoPosition {
		top: number,
		left: number
	}

	declare interface ZeptoCoordinates {
		width: number,
		height: number
	}

	declare interface ZeptoEventHandlers {
		[key: string]: Function
	}

			
}