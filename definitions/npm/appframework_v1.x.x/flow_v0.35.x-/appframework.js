

declare module 'appframework' {
		declare interface appFrameworkStatic {
		(selector: string, context?: any): appFrameworkCollection,
		(collection: appFrameworkCollection): appFrameworkCollection,
		(element: HTMLElement): appFrameworkCollection,
		(htmlString: string): appFrameworkCollection,
		(object: any): appFrameworkCollection,
		is$(obj: any): boolean,
		map(collection: any[], fn: (item: any, index: number) => any): any[],
		each(collection: any[], fn: (index: number, item: any) => any): void,
		each(collection: any, fn: (key: string, value: any) => any): void,
		extend(target: any, ...sources: any[]): any,
		isArray(object: any): boolean,
		isFunction(object: any): boolean,
		isObject(object: any): boolean,
		fn: Object,
		ajaxSettings: appFrameworkAjaxSettings,
		jsonP(options: appFrameworkAjaxSettings): {
		
	},
		ajax(options: appFrameworkAjaxSettings): XMLHttpRequest,
		get(
		url: string, fn: (data: any, status?: string, xhr?: XMLHttpRequest) => void
	): XMLHttpRequest,
		post(
		url: string, fn: (data: any, status?: string, xhr?: XMLHttpRequest) => void, dataType?: string
	): XMLHttpRequest,
		post(
		url: string, data: any, fn: (data: any, status?: string, xhr?: XMLHttpRequest) => void, dataType?: string
	): XMLHttpRequest,
		getJSON(
		url: string, fn: (data: any, status?: string, xhr?: XMLHttpRequest) => void
	): XMLHttpRequest,
		getJSON(
		url: string, data: any, fn: (data: any, status: string, xhr: XMLHttpRequest) => void
	): XMLHttpRequest,
		param(object: any, prefix?: string): string,
		parseJSON(str: string): any,
		parseXML(str: string): any,
		uuid(): string,
		getCssMatrix(node: HTMLElement): appFrameworkCssMatrix,
		getCssMatrix(elem: appFrameworkCollection): appFrameworkCssMatrix,
		create(type: string, params?: any): appFrameworkCollection,
		query(selector: string, context?: any): appFrameworkCollection,
		Event(type: string, props: any): any,
		bind(object: any, event: string, fn: Function): void,
		trigger(object: any, event: string, args?: any[]): void,
		unbind(object: any, event: string, fn: Function): void,
		proxy(callback: Function, context: any): void,
		cleanUpContent(node: HTMLElement, itself?: boolean, kill?: boolean): void,
		asap(callback: Function, context?: any, args?: any[]): void,
		parseJS(content: string): void,
		parseJS(content: HTMLElement): void,
		os: {
		webkit: boolean,
		android: boolean,
		androidICS: boolean,
		ipad: boolean,
		iphone: boolean,
		ios7: boolean,
		webos: boolean,
		touchpad: boolean,
		ios: boolean,
		playbook: boolean,
		blackberry: boolean,
		blackberry10: boolean,
		chrome: boolean,
		opera: boolean,
		fennec: boolean,
		ie: boolean,
		ieTouch: boolean,
		supportsTouch: boolean
	},
		feat: {
		nativeTouchScroll: boolean,
		cssPrefix: string,
		cssTransformStart: string,
		cssTransformEnd: string
	}
	}

	declare interface appFrameworkCollection {
		reduce(
		callbackfn: (
		previousValue: appFrameworkCollection, currentValue: appFrameworkCollection, currentIndex: number, array: appFrameworkCollection[]
	) => appFrameworkCollection, initialValue?: appFrameworkCollection
	): appFrameworkCollection,
		push(...items: appFrameworkCollection[]): number,
		indexOf(searchElement: appFrameworkCollection, fromIndex?: number): number,
		concat(...items: appFrameworkCollection[]): appFrameworkCollection[],
		slice(start: number, end?: number): appFrameworkCollection[],
		length: number,
		map(fn: (index: number, item: any) => any): appFrameworkCollection,
		each(fn: (index: number, item: any) => any): appFrameworkCollection,
		forEach(fn: (item: any, index: number) => any): void,
		ready(fn: Function): appFrameworkStatic,
		find(selector: string): appFrameworkCollection,
		html(): string,
		html(html: string): appFrameworkCollection,
		html(html: string, cleanup: boolean): appFrameworkCollection,
		text(): string,
		text(text: string): appFrameworkCollection,
		css(property: string): any,
		css(property: string, value: any): appFrameworkCollection,
		css(properties: any): appFrameworkCollection,
		vendorCss(transform: string): appFrameworkCollection,
		computedStyle(css: string): appFrameworkCollection,
		empty(): appFrameworkCollection,
		hide(): appFrameworkCollection,
		show(): appFrameworkCollection,
		toggle(show?: boolean): appFrameworkCollection,
		val(): string,
		val(value: string): appFrameworkCollection,
		attr(attribute: string): any,
		attr(attributeHash: Object): appFrameworkCollection,
		attr(attribute: string, value: string): appFrameworkCollection,
		attr(attribute: string, value: any): appFrameworkCollection,
		removeAttr(attribute: string): appFrameworkCollection,
		prop(attribute: string): any,
		prop(attributeHash: Object): appFrameworkCollection,
		prop(attribute: string, value: string): appFrameworkCollection,
		prop(attribute: string, value: any): appFrameworkCollection,
		removeProp(attribute: string): appFrameworkCollection,
		remove(): appFrameworkCollection,
		remove(selector: string): appFrameworkCollection,
		remove(element: HTMLElement): appFrameworkCollection,
		remove(elements: any[]): appFrameworkCollection,
		remove(elements: appFrameworkCollection): appFrameworkCollection,
		addClass(className: string): appFrameworkCollection,
		removeClass(className: string): appFrameworkCollection,
		toggleClass(name: string, state?: boolean): appFrameworkCollection,
		replaceClass(oldClassName: string, newClassName: string): appFrameworkCollection,
		hasClass(className: string, element: HTMLElement): boolean,
		append(content: any): appFrameworkCollection,
		appendTo(target: any): appFrameworkCollection,
		prependTo(target: any): appFrameworkCollection,
		prepend(content: any): appFrameworkCollection,
		insertBefore(target: any): appFrameworkCollection,
		insertAfter(target: any): void,
		get(): HTMLElement[],
		get(index: number): HTMLElement,
		offset(
		
	): {
		left: number,
		top: number,
		right: number,
		bottom: number,
		width: number,
		height: number
	},
		height(): string,
		width(): string,
		parent(selector?: any): appFrameworkCollection,
		parents(selector?: any): appFrameworkCollection,
		children(selector?: any): appFrameworkCollection,
		siblings(selector?: any): appFrameworkCollection,
		closest(selector?: any): appFrameworkCollection,
		filter(selector?: any): appFrameworkCollection,
		not(selector?: any): appFrameworkCollection,
		data(attribute: string): any,
		data(attribute: string, value: string): appFrameworkCollection,
		data(attribute: string, value: any): appFrameworkCollection,
		end(): appFrameworkCollection,
		clone(deep?: boolean): appFrameworkCollection,
		size(): number,
		serialize(): string,
		eq(index: number): appFrameworkCollection,
		index(): number,
		index(selector: any): number,
		is(selector: any): number,
		bind(eventHash: Object): appFrameworkCollection,
		bind(eventName: string, fn: (e: Event) => any): appFrameworkCollection,
		unbind(eventHash: {
		
	}): appFrameworkCollection,
		unbind(eventName?: string): appFrameworkCollection,
		unbind(eventName: string, fn?: (e: Event) => any): appFrameworkCollection,
		one(eventHash: {
		
	}): appFrameworkCollection,
		one(eventName: string, fn: (e: Event) => any): appFrameworkCollection,
		delegate(selector: any, eventHash: {
		
	}): appFrameworkCollection,
		delegate(
		selector: any, eventName: string, fn: (e: Event) => any
	): appFrameworkCollection,
		undelegate(selector: any, eventHash: {
		
	}): appFrameworkCollection,
		undelegate(
		selector: any, eventName: string, fn: (e: Event) => any
	): appFrameworkCollection,
		on(eventHash: {
		
	}, selector?: any): appFrameworkCollection,
		on(eventName: string, fn: (e: Event) => any): appFrameworkCollection,
		on(
		eventName: string, selector: string, fn: (e: Event) => any
	): appFrameworkCollection,
		off(eventHash: {
		
	}, selector?: any): appFrameworkCollection,
		off(eventName: string, fn: (e: Event) => any): appFrameworkCollection,
		off(
		eventName: string, selector: string, fn: (e: Event) => any
	): appFrameworkCollection,
		trigger(eventName: string, data?: any): appFrameworkCollection,
		trigger(eventHash: {
		
	}, data?: any): appFrameworkCollection,
		click(fn?: (e: Event) => any): appFrameworkCollection,
		keydown(fn?: (e: Event) => any): appFrameworkCollection,
		keyup(fn?: (e: Event) => any): appFrameworkCollection,
		keypress(fn?: (e: Event) => any): appFrameworkCollection,
		submit(fn?: (e: Event) => any): appFrameworkCollection,
		load(fn?: (e: Event) => any): appFrameworkCollection,
		resize(fn?: (e: Event) => any): appFrameworkCollection,
		change(fn?: (e: Event) => any): appFrameworkCollection,
		select(fn?: (e: Event) => any): appFrameworkCollection,
		error(fn?: (e: Event) => any): appFrameworkCollection,
		focus(fn?: (e: Event) => any): appFrameworkCollection,
		blur(fn?: (e: Event) => any): appFrameworkCollection
	}

	declare interface appFrameworkAjaxSettings {
		type?: string,
		beforeSend?: (xhr: XMLHttpRequest, settings: appFrameworkAjaxSettings) => boolean,
		success?: (data: any, status: string, xhr: XMLHttpRequest) => void,
		error?: (xhr: XMLHttpRequest, errorType: string, error: Error) => void,
		complete?: (xhr: XMLHttpRequest, status: string) => void,
		timeout?: number,
		url?: string,
		contentType?: string,
		headers?: any,
		dataType?: string,
		data?: any,
		context?: any,
		crossDomain?: boolean
	}

	declare interface appFrameworkCssMatrix {
		a: number,
		b: number,
		c: number,
		d: number,
		e: number,
		f: number
	}

			
}