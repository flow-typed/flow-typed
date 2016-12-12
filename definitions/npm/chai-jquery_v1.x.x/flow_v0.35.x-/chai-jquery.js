

declare module 'chai-jquery' {
		declare interface ChaiJQueryStatic {
		ajax(settings: JQueryAjaxSettings): JQueryXHR,
		ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR,
		ajaxPrefilter(
		dataTypes: string, handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any
	): void,
		ajaxPrefilter(
		handler: (opts: any, originalOpts: JQueryAjaxSettings, jqXHR: JQueryXHR) => any
	): void,
		ajaxSettings: JQueryAjaxSettings,
		ajaxSetup(options: JQueryAjaxSettings): void,
		get(
		url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string
	): JQueryXHR,
		get(
		url: string, data?: Object | string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string
	): JQueryXHR,
		getJSON(
		url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any
	): JQueryXHR,
		getJSON(
		url: string, data?: Object | string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any
	): JQueryXHR,
		getScript(
		url: string, success?: (script: string, textStatus: string, jqXHR: JQueryXHR) => any
	): JQueryXHR,
		param: JQueryParam,
		post(
		url: string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string
	): JQueryXHR,
		post(
		url: string, data?: Object | string, success?: (data: any, textStatus: string, jqXHR: JQueryXHR) => any, dataType?: string
	): JQueryXHR,
		Callbacks(flags?: string): JQueryCallback,
		holdReady(hold: boolean): void,
		(selector: string, context?: Element | JQuery): ChaiJQuery,
		(element: Element): ChaiJQuery,
		(elementArray: Element[]): ChaiJQuery,
		(object: {
		
	}): ChaiJQuery,
		(object: JQuery): ChaiJQuery,
		(): ChaiJQuery,
		(html: string, ownerDocument?: Document): ChaiJQuery,
		(html: string, attributes: Object): ChaiJQuery,
		(callback: Function): ChaiJQuery,
		noConflict(removeAll?: boolean): Object,
		when<T>(...deferreds: Array<T | JQueryPromise<T>>): JQueryPromise<T>,
		cssHooks: {
		[key: string]: any
	},
		cssNumber: any,
		data<T>(element: Element, key: string, value: T): T,
		data(element: Element, key: string): any,
		data(element: Element): any,
		dequeue(element: Element, queueName?: string): void,
		hasData(element: Element): boolean,
		queue(element: Element, queueName?: string): any[],
		queue(element: Element, queueName: string, newQueue: Function[]): ChaiJQuery,
		queue(element: Element, queueName: string, callback: Function): ChaiJQuery,
		removeData(element: Element, name?: string): ChaiJQuery,
		Deferred<T>(beforeStart?: (deferred: JQueryDeferred<T>) => any): JQueryDeferred<T>,
		fx: {
		tick: () => void,
		interval: number,
		stop: () => void,
		speeds: {
		slow: number,
		fast: number
	},
		off: boolean,
		step: any
	},
		proxy(
		fnction: (...args: any[]) => any, context: Object, ...additionalArguments: any[]
	): any,
		proxy(context: Object, name: string, ...additionalArguments: any[]): any,
		Event: JQueryEventConstructor,
		error(message: any): ChaiJQuery,
		expr: any,
		fn: any,
		isReady: boolean,
		support: JQuerySupport,
		contains(container: Element, contained: Element): boolean,
		each<T>(
		collection: T[], callback: (indexInArray: number, valueOfElement: T) => any
	): any,
		each(
		collection: any, callback: (indexInArray: any, valueOfElement: any) => any
	): any,
		extend(target: any, object1?: any, ...objectN: any[]): any,
		extend(deep: boolean, target: any, object1?: any, ...objectN: any[]): any,
		globalEval(code: string): any,
		grep<T>(
		array: T[], func: (elementOfArray: T, indexInArray: number) => boolean, invert?: boolean
	): T[],
		inArray<T>(value: T, array: T[], fromIndex?: number): number,
		isArray(obj: any): boolean,
		isEmptyObject(obj: any): boolean,
		isFunction(obj: any): boolean,
		isNumeric(value: any): boolean,
		isPlainObject(obj: any): boolean,
		isWindow(obj: any): boolean,
		isXMLDoc(node: Node): boolean,
		makeArray(obj: any): any[],
		map<T, U>(
		array: T[], callback: (elementOfArray: T, indexInArray: number) => U
	): U[],
		map(arrayOrObject: any, callback: (value: any, indexOrKey: any) => any): any,
		merge<T>(first: T[], second: T[]): T[],
		noop(): any,
		now(): number,
		parseJSON(json: string): any,
		parseXML(data: string): XMLDocument,
		trim(str: string): string,
		type(obj: any): string,
		unique(array: Element[]): Element[],
		parseHTML(data: string, context?: HTMLElement, keepScripts?: boolean): any[],
		parseHTML(data: string, context?: Document, keepScripts?: boolean): any[]
	}

	declare interface ChaiJQuery {
		ajaxComplete(
		handler: (
		event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: any
	) => any
	): ChaiJQuery,
		ajaxError(
		handler: (
		event: JQueryEventObject, jqXHR: JQueryXHR, ajaxSettings: JQueryAjaxSettings, thrownError: any
	) => any
	): ChaiJQuery,
		ajaxSend(
		handler: (
		event: JQueryEventObject, jqXHR: JQueryXHR, ajaxOptions: JQueryAjaxSettings
	) => any
	): ChaiJQuery,
		ajaxStart(handler: () => any): ChaiJQuery,
		ajaxStop(handler: () => any): ChaiJQuery,
		ajaxSuccess(
		handler: (
		event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: JQueryAjaxSettings
	) => any
	): ChaiJQuery,
		load(
		url: string, data?: string | Object, complete?: (
		responseText: string, textStatus: string, XMLHttpRequest: XMLHttpRequest
	) => any
	): ChaiJQuery,
		serialize(): string,
		serializeArray(): JQuerySerializeArrayElement[],
		addClass(className: string): ChaiJQuery,
		addClass(func: (index: number, className: string) => string): ChaiJQuery,
		addBack(selector?: string): ChaiJQuery,
		attr(attributeName: string): string,
		attr(attributeName: string, value: string | number): ChaiJQuery,
		attr(
		attributeName: string, func: (index: number, attr: string) => string | number
	): ChaiJQuery,
		attr(attributes: Object): ChaiJQuery,
		hasClass(className: string): boolean,
		html(): string,
		html(htmlString: string): ChaiJQuery,
		html(func: (index: number, oldhtml: string) => string): ChaiJQuery,
		prop(propertyName: string): any,
		prop(propertyName: string, value: string | number | boolean): ChaiJQuery,
		prop(properties: Object): ChaiJQuery,
		prop(
		propertyName: string, func: (index: number, oldPropertyValue: any) => any
	): ChaiJQuery,
		removeAttr(attributeName: string): ChaiJQuery,
		removeClass(className?: string): ChaiJQuery,
		removeClass(func: (index: number, className: string) => string): ChaiJQuery,
		removeProp(propertyName: string): ChaiJQuery,
		toggleClass(className: string, swtch?: boolean): ChaiJQuery,
		toggleClass(swtch?: boolean): ChaiJQuery,
		toggleClass(
		func: (index: number, className: string, swtch: boolean) => string, swtch?: boolean
	): ChaiJQuery,
		val(): any,
		val(value: string | string[]): ChaiJQuery,
		val(func: (index: number, value: string) => string): ChaiJQuery,
		css(propertyName: string): string,
		css(propertyName: string, value: string | number): ChaiJQuery,
		css(
		propertyName: string, value: (index: number, value: string) => string | number
	): ChaiJQuery,
		css(properties: Object): ChaiJQuery,
		height(): number,
		height(value: number | string): ChaiJQuery,
		height(func: (index: number, height: number) => number | string): ChaiJQuery,
		innerHeight(): number,
		innerHeight(height: number | string): ChaiJQuery,
		innerWidth(): number,
		innerWidth(width: number | string): ChaiJQuery,
		offset(): JQueryCoordinates,
		offset(coordinates: JQueryCoordinates): ChaiJQuery,
		offset(
		func: (index: number, coords: JQueryCoordinates) => JQueryCoordinates
	): ChaiJQuery,
		outerHeight(includeMargin?: boolean): number,
		outerHeight(height: number | string): ChaiJQuery,
		outerWidth(includeMargin?: boolean): number,
		outerWidth(width: number | string): ChaiJQuery,
		position(): JQueryCoordinates,
		scrollLeft(): number,
		scrollLeft(value: number): ChaiJQuery,
		scrollTop(): number,
		scrollTop(value: number): ChaiJQuery,
		width(): number,
		width(value: number | string): ChaiJQuery,
		width(func: (index: number, width: number) => number | string): ChaiJQuery,
		clearQueue(queueName?: string): ChaiJQuery,
		data(key: string, value: any): ChaiJQuery,
		data(obj: {
		[key: string]: any
	}): ChaiJQuery,
		data(key: string): any,
		data(): any,
		dequeue(queueName?: string): ChaiJQuery,
		removeData(name: string): ChaiJQuery,
		removeData(list: string[]): ChaiJQuery,
		promise(type?: string, target?: Object): JQueryPromise<any>,
		animate(
		properties: Object, duration?: string | number, complete?: Function
	): ChaiJQuery,
		animate(
		properties: Object, duration?: string | number, easing?: string, complete?: Function
	): ChaiJQuery,
		animate(properties: Object, options: JQueryAnimationOptions): ChaiJQuery,
		delay(duration: number, queueName?: string): ChaiJQuery,
		fadeIn(duration?: number | string, complete?: Function): ChaiJQuery,
		fadeIn(duration?: number | string, easing?: string, complete?: Function): ChaiJQuery,
		fadeIn(options: JQueryAnimationOptions): ChaiJQuery,
		fadeOut(duration?: number | string, complete?: Function): ChaiJQuery,
		fadeOut(duration?: number | string, easing?: string, complete?: Function): ChaiJQuery,
		fadeOut(options: JQueryAnimationOptions): ChaiJQuery,
		fadeTo(duration: string | number, opacity: number, complete?: Function): ChaiJQuery,
		fadeTo(
		duration: string | number, opacity: number, easing?: string, complete?: Function
	): ChaiJQuery,
		fadeToggle(duration?: number | string, complete?: Function): ChaiJQuery,
		fadeToggle(duration?: number | string, easing?: string, complete?: Function): ChaiJQuery,
		fadeToggle(options: JQueryAnimationOptions): ChaiJQuery,
		finish(queue?: string): ChaiJQuery,
		hide(duration?: number | string, complete?: Function): ChaiJQuery,
		hide(duration?: number | string, easing?: string, complete?: Function): ChaiJQuery,
		hide(options: JQueryAnimationOptions): ChaiJQuery,
		show(duration?: number | string, complete?: Function): ChaiJQuery,
		show(duration?: number | string, easing?: string, complete?: Function): ChaiJQuery,
		show(options: JQueryAnimationOptions): ChaiJQuery,
		slideDown(duration?: number | string, complete?: Function): ChaiJQuery,
		slideDown(duration?: number | string, easing?: string, complete?: Function): ChaiJQuery,
		slideDown(options: JQueryAnimationOptions): ChaiJQuery,
		slideToggle(duration?: number | string, complete?: Function): ChaiJQuery,
		slideToggle(duration?: number | string, easing?: string, complete?: Function): ChaiJQuery,
		slideToggle(options: JQueryAnimationOptions): ChaiJQuery,
		slideUp(duration?: number | string, complete?: Function): ChaiJQuery,
		slideUp(duration?: number | string, easing?: string, complete?: Function): ChaiJQuery,
		slideUp(options: JQueryAnimationOptions): ChaiJQuery,
		stop(clearQueue?: boolean, jumpToEnd?: boolean): ChaiJQuery,
		stop(queue?: string, clearQueue?: boolean, jumpToEnd?: boolean): ChaiJQuery,
		toggle(duration?: number | string, complete?: Function): ChaiJQuery,
		toggle(duration?: number | string, easing?: string, complete?: Function): ChaiJQuery,
		toggle(options: JQueryAnimationOptions): ChaiJQuery,
		toggle(showOrHide: boolean): ChaiJQuery,
		bind(
		eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		bind(
		eventType: string, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		bind(eventType: string, eventData: any, preventBubble: boolean): ChaiJQuery,
		bind(eventType: string, preventBubble: boolean): ChaiJQuery,
		bind(events: any): ChaiJQuery,
		blur(): ChaiJQuery,
		blur(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		blur(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		change(): ChaiJQuery,
		change(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		change(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		click(): ChaiJQuery,
		click(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		click(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		dblclick(): ChaiJQuery,
		dblclick(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		dblclick(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		delegate(
		selector: any, eventType: string, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		delegate(
		selector: any, eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		focus(): ChaiJQuery,
		focus(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		focus(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		focusin(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		focusin(
		eventData: Object, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		focusout(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		focusout(
		eventData: Object, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		hover(
		handlerIn: (eventObject: JQueryEventObject) => any, handlerOut: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		hover(handlerInOut: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		keydown(): ChaiJQuery,
		keydown(handler: (eventObject: JQueryKeyEventObject) => any): ChaiJQuery,
		keydown(
		eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any
	): ChaiJQuery,
		keypress(): ChaiJQuery,
		keypress(handler: (eventObject: JQueryKeyEventObject) => any): ChaiJQuery,
		keypress(
		eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any
	): ChaiJQuery,
		keyup(): ChaiJQuery,
		keyup(handler: (eventObject: JQueryKeyEventObject) => any): ChaiJQuery,
		keyup(
		eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any
	): ChaiJQuery,
		load(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		load(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		mousedown(): ChaiJQuery,
		mousedown(handler: (eventObject: JQueryMouseEventObject) => any): ChaiJQuery,
		mousedown(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): ChaiJQuery,
		mouseenter(): ChaiJQuery,
		mouseenter(handler: (eventObject: JQueryMouseEventObject) => any): ChaiJQuery,
		mouseenter(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): ChaiJQuery,
		mouseleave(): ChaiJQuery,
		mouseleave(handler: (eventObject: JQueryMouseEventObject) => any): ChaiJQuery,
		mouseleave(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): ChaiJQuery,
		mousemove(): ChaiJQuery,
		mousemove(handler: (eventObject: JQueryMouseEventObject) => any): ChaiJQuery,
		mousemove(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): ChaiJQuery,
		mouseout(): ChaiJQuery,
		mouseout(handler: (eventObject: JQueryMouseEventObject) => any): ChaiJQuery,
		mouseout(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): ChaiJQuery,
		mouseover(): ChaiJQuery,
		mouseover(handler: (eventObject: JQueryMouseEventObject) => any): ChaiJQuery,
		mouseover(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): ChaiJQuery,
		mouseup(): ChaiJQuery,
		mouseup(handler: (eventObject: JQueryMouseEventObject) => any): ChaiJQuery,
		mouseup(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): ChaiJQuery,
		off(): ChaiJQuery,
		off(
		events: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		off(events: string, handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		off(events: {
		[key: string]: any
	}, selector?: string): ChaiJQuery,
		on(
		events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): ChaiJQuery,
		on(
		events: string, data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): ChaiJQuery,
		on(
		events: string, selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): ChaiJQuery,
		on(
		events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): ChaiJQuery,
		on(events: {
		[key: string]: any
	}, selector?: string, data?: any): ChaiJQuery,
		on(events: {
		[key: string]: any
	}, data?: any): ChaiJQuery,
		one(events: string, handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		one(
		events: string, data: Object, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		one(
		events: string, selector: string, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		one(
		events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		one(events: {
		[key: string]: any
	}, selector?: string, data?: any): ChaiJQuery,
		one(events: {
		[key: string]: any
	}, data?: any): ChaiJQuery,
		ready(handler: Function): ChaiJQuery,
		resize(): ChaiJQuery,
		resize(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		resize(
		eventData: Object, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		scroll(): ChaiJQuery,
		scroll(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		scroll(
		eventData: Object, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		select(): ChaiJQuery,
		select(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		select(
		eventData: Object, handler: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		submit(): ChaiJQuery,
		submit(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		submit(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		trigger(eventType: string, extraParameters?: any[] | Object): ChaiJQuery,
		trigger(event: JQueryEventObject, extraParameters?: any[] | Object): ChaiJQuery,
		triggerHandler(eventType: string, ...extraParameters: any[]): Object,
		unbind(
		eventType?: string, handler?: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		unbind(eventType: string, fls: boolean): ChaiJQuery,
		unbind(evt: any): ChaiJQuery,
		undelegate(): ChaiJQuery,
		undelegate(
		selector: string, eventType: string, handler?: (eventObject: JQueryEventObject) => any
	): ChaiJQuery,
		undelegate(selector: string, events: Object): ChaiJQuery,
		undelegate(namespace: string): ChaiJQuery,
		unload(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		unload(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		context: Element,
		jquery: string,
		error(handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		error(eventData: any, handler: (eventObject: JQueryEventObject) => any): ChaiJQuery,
		pushStack(elements: any[]): ChaiJQuery,
		pushStack(elements: any[], name: string, arguments: any[]): ChaiJQuery,
		after(
		content1: JQuery | any[] | Element | Text | string, ...content2: any[]
	): ChaiJQuery,
		after(func: (index: number, html: string) => string | Element | JQuery): ChaiJQuery,
		append(
		content1: JQuery | any[] | Element | Text | string, ...content2: any[]
	): ChaiJQuery,
		append(func: (index: number, html: string) => string | Element | JQuery): ChaiJQuery,
		appendTo(target: JQuery | any[] | Element | string): ChaiJQuery,
		before(
		content1: JQuery | any[] | Element | Text | string, ...content2: any[]
	): ChaiJQuery,
		before(func: (index: number, html: string) => string | Element | JQuery): ChaiJQuery,
		clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): ChaiJQuery,
		detach(selector?: string): ChaiJQuery,
		empty(): ChaiJQuery,
		insertAfter(target: JQuery | any[] | Element | Text | string): ChaiJQuery,
		insertBefore(target: JQuery | any[] | Element | Text | string): ChaiJQuery,
		prepend(
		content1: JQuery | any[] | Element | Text | string, ...content2: any[]
	): ChaiJQuery,
		prepend(func: (index: number, html: string) => string | Element | JQuery): ChaiJQuery,
		prependTo(target: JQuery | any[] | Element | string): ChaiJQuery,
		remove(selector?: string): ChaiJQuery,
		replaceAll(target: JQuery | any[] | Element | string): ChaiJQuery,
		replaceWith(newContent: JQuery | any[] | Element | Text | string): ChaiJQuery,
		replaceWith(func: () => Element | JQuery): ChaiJQuery,
		text(): string,
		text(text: string | number | boolean): ChaiJQuery,
		text(func: (index: number, text: string) => string): ChaiJQuery,
		toArray(): any[],
		unwrap(): ChaiJQuery,
		wrap(wrappingElement: JQuery | Element | string): ChaiJQuery,
		wrap(func: (index: number) => string | JQuery): ChaiJQuery,
		wrapAll(wrappingElement: JQuery | Element | string): ChaiJQuery,
		wrapAll(func: (index: number) => string): ChaiJQuery,
		wrapInner(wrappingElement: JQuery | Element | string): ChaiJQuery,
		wrapInner(func: (index: number) => string): ChaiJQuery,
		each(func: (index: number, elem: Element) => any): ChaiJQuery,
		get(index: number): HTMLElement,
		get(): any[],
		index(): number,
		index(selector: string | JQuery | Element): number,
		length: number,
		selector: string,
		[index: string]: any,
		[index: number]: HTMLElement,
		add(selector: string, context?: Element): ChaiJQuery,
		add(...elements: Element[]): ChaiJQuery,
		add(html: string): ChaiJQuery,
		add(obj: JQuery): ChaiJQuery,
		children(selector?: string): ChaiJQuery,
		closest(selector: string): ChaiJQuery,
		closest(selector: string, context?: Element): ChaiJQuery,
		closest(obj: JQuery): ChaiJQuery,
		closest(element: Element): ChaiJQuery,
		closest(selectors: any, context?: Element): any[],
		contents(): ChaiJQuery,
		end(): ChaiJQuery,
		eq(index: number): ChaiJQuery,
		filter(selector: string): ChaiJQuery,
		filter(func: (index: number, element: Element) => any): ChaiJQuery,
		filter(element: Element): ChaiJQuery,
		filter(obj: JQuery): ChaiJQuery,
		find(selector: string): ChaiJQuery,
		find(element: Element): ChaiJQuery,
		find(obj: JQuery): ChaiJQuery,
		first(): ChaiJQuery,
		has(selector: string): ChaiJQuery,
		has(contained: Element): ChaiJQuery,
		is(selector: string): boolean,
		is(func: (index: number, element: Element) => boolean): boolean,
		is(obj: JQuery): boolean,
		is(elements: any): boolean,
		last(): ChaiJQuery,
		map(callback: (index: number, domElement: Element) => any): ChaiJQuery,
		next(selector?: string): ChaiJQuery,
		nextAll(selector?: string): ChaiJQuery,
		nextUntil(selector?: string, filter?: string): ChaiJQuery,
		nextUntil(element?: Element, filter?: string): ChaiJQuery,
		nextUntil(obj?: JQuery, filter?: string): ChaiJQuery,
		not(selector: string): ChaiJQuery,
		not(func: (index: number, element: Element) => boolean): ChaiJQuery,
		not(...elements: Element[]): ChaiJQuery,
		not(obj: JQuery): ChaiJQuery,
		offsetParent(): ChaiJQuery,
		parent(selector?: string): ChaiJQuery,
		parents(selector?: string): ChaiJQuery,
		parentsUntil(selector?: string, filter?: string): ChaiJQuery,
		parentsUntil(element?: Element, filter?: string): ChaiJQuery,
		parentsUntil(obj?: JQuery, filter?: string): ChaiJQuery,
		prev(selector?: string): ChaiJQuery,
		prevAll(selector?: string): ChaiJQuery,
		prevUntil(selector?: string, filter?: string): ChaiJQuery,
		prevUntil(element?: Element, filter?: string): ChaiJQuery,
		prevUntil(obj?: JQuery, filter?: string): ChaiJQuery,
		siblings(selector?: string): ChaiJQuery,
		slice(start: number, end?: number): ChaiJQuery,
		queue(queueName?: string): any[],
		queue(newQueue: Function[]): ChaiJQuery,
		queue(callback: Function): ChaiJQuery,
		queue(queueName: string, newQueue: Function[]): ChaiJQuery,
		queue(queueName: string, callback: Function): ChaiJQuery,
		should: Chai.Assertion
	}

			
}

declare module 'npm$namespace$Chai' {
		declare interface Assertion {
		attr: (name: string, value?: string) => Assertion,
		css: (name: string, value?: string) => Assertion,
		data: (name: string, value?: string) => Assertion,
		class(className: string): Assertion,
		id(id: string): Assertion,
		html(html: string): Assertion,
		text(text: string): Assertion,
		value(text: string): Assertion,
		descendants(selector: string): Assertion,
		visible: Assertion,
		hidden: Assertion,
		selected: Assertion,
		checked: Assertion,
		disabled: Assertion,
		(selector: string): Assertion
	}

			
}