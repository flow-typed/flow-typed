

declare module 'jquery' {
		declare interface JQueryAjaxSettings {
		accepts?: any,
		async?: boolean,
		beforeSend(jqXHR: JQueryXHR, settings: JQueryAjaxSettings): any,
		cache?: boolean,
		complete(jqXHR: JQueryXHR, textStatus: string): any,
		contents?: {
		[key: string]: any
	},
		contentType?: any,
		context?: any,
		converters?: {
		[key: string]: any
	},
		crossDomain?: boolean,
		data?: any,
		dataFilter(data: any, ty: any): any,
		dataType?: string,
		error(jqXHR: JQueryXHR, textStatus: string, errorThrown: string): any,
		global?: boolean,
		headers?: {
		[key: string]: any
	},
		ifModified?: boolean,
		isLocal?: boolean,
		jsonp?: any,
		jsonpCallback?: any,
		method?: string,
		mimeType?: string,
		password?: string,
		processData?: boolean,
		scriptCharset?: string,
		statusCode?: {
		[key: string]: any
	},
		success(data: any, textStatus: string, jqXHR: JQueryXHR): any,
		timeout?: number,
		traditional?: boolean,
		type?: string,
		url?: string,
		username?: string,
		xhr?: any,
		xhrFields?: {
		[key: string]: any
	}
	}

	declare interface JQueryXHR {
		overrideMimeType(mimeType: string): any,
		abort(statusText?: string): void,
		then<R>(
		doneCallback: (data: any, textStatus: string, jqXHR: JQueryXHR) => R, failCallback?: (jqXHR: JQueryXHR, textStatus: string, errorThrown: any) => void
	): JQueryPromise<R>,
		responseJSON?: any,
		error(xhr: JQueryXHR, textStatus: string, errorThrown: string): void
	}

	declare interface JQueryCallback {
		add(callbacks: Function): JQueryCallback,
		add(callbacks: Function[]): JQueryCallback,
		disable(): JQueryCallback,
		disabled(): boolean,
		empty(): JQueryCallback,
		fire(...arguments: any[]): JQueryCallback,
		fired(): boolean,
		fireWith(context?: any, args?: any[]): JQueryCallback,
		has(callback: Function): boolean,
		lock(): JQueryCallback,
		locked(): boolean,
		remove(callbacks: Function): JQueryCallback,
		remove(callbacks: Function[]): JQueryCallback
	}

	declare interface JQueryGenericPromise<T> {
		then<U>(
		doneFilter: (value?: T, ...values: any[]) => U | JQueryPromise<U>, failFilter?: (...reasons: any[]) => any, progressFilter?: (...progression: any[]) => any
	): JQueryPromise<U>,
		then(
		doneFilter: (value?: T, ...values: any[]) => void, failFilter?: (...reasons: any[]) => any, progressFilter?: (...progression: any[]) => any
	): JQueryPromise<void>
	}

	declare interface JQueryPromiseCallback<T> {
		(value?: T, ...args: any[]): void
	}

	declare interface JQueryPromiseOperator<T, U> {
		(callback1: JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[], ...callbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>): JQueryPromise<U>
	}

	declare interface JQueryPromise<T> {
		state(): string,
		always(
		alwaysCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...alwaysCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>
	): JQueryPromise<T>,
		done(
		doneCallback1?: JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[], ...doneCallbackN: Array<JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[]>
	): JQueryPromise<T>,
		fail(
		failCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...failCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>
	): JQueryPromise<T>,
		progress(
		progressCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...progressCallbackN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>
	): JQueryPromise<T>,
		pipe(
		doneFilter?: (x: any) => any, failFilter?: (x: any) => any, progressFilter?: (x: any) => any
	): JQueryPromise<any>,
		promise(target?: any): JQueryPromise<T>
	}

	declare interface JQueryDeferred<T> {
		state(): string,
		always(
		alwaysCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...alwaysCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>
	): JQueryDeferred<T>,
		done(
		doneCallback1?: JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[], ...doneCallbackN: Array<JQueryPromiseCallback<T> | JQueryPromiseCallback<T>[]>
	): JQueryDeferred<T>,
		fail(
		failCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...failCallbacksN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>
	): JQueryDeferred<T>,
		progress(
		progressCallback1?: JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[], ...progressCallbackN: Array<JQueryPromiseCallback<any> | JQueryPromiseCallback<any>[]>
	): JQueryDeferred<T>,
		notify(value?: any, ...args: any[]): JQueryDeferred<T>,
		notifyWith(context: any, value?: any[]): JQueryDeferred<T>,
		reject(value?: any, ...args: any[]): JQueryDeferred<T>,
		rejectWith(context: any, value?: any[]): JQueryDeferred<T>,
		resolve(value?: T, ...args: any[]): JQueryDeferred<T>,
		resolveWith(context: any, value?: T[]): JQueryDeferred<T>,
		promise(target?: any): JQueryPromise<T>,
		pipe(
		doneFilter?: (x: any) => any, failFilter?: (x: any) => any, progressFilter?: (x: any) => any
	): JQueryPromise<any>
	}

	declare interface BaseJQueryEventObject {
		currentTarget: Element,
		data: any,
		delegateTarget: Element,
		isDefaultPrevented(): boolean,
		isImmediatePropagationStopped(): boolean,
		isPropagationStopped(): boolean,
		namespace: string,
		originalEvent: Event,
		preventDefault(): any,
		relatedTarget: Element,
		result: any,
		stopImmediatePropagation(): void,
		stopPropagation(): void,
		target: Element,
		pageX: number,
		pageY: number,
		which: number,
		metaKey: boolean
	}

	declare interface JQueryInputEventObject {
		altKey: boolean,
		ctrlKey: boolean,
		metaKey: boolean,
		shiftKey: boolean
	}

	declare interface JQueryMouseEventObject {
		button: number,
		clientX: number,
		clientY: number,
		offsetX: number,
		offsetY: number,
		pageX: number,
		pageY: number,
		screenX: number,
		screenY: number
	}

	declare interface JQueryKeyEventObject {
		char: any,
		charCode: number,
		key: any,
		keyCode: number
	}

	declare interface JQueryEventObject {
		
	}

	declare interface JQuerySupport {
		ajax?: boolean,
		boxModel?: boolean,
		changeBubbles?: boolean,
		checkClone?: boolean,
		checkOn?: boolean,
		cors?: boolean,
		cssFloat?: boolean,
		hrefNormalized?: boolean,
		htmlSerialize?: boolean,
		leadingWhitespace?: boolean,
		noCloneChecked?: boolean,
		noCloneEvent?: boolean,
		opacity?: boolean,
		optDisabled?: boolean,
		optSelected?: boolean,
		scriptEval(): boolean,
		style?: boolean,
		submitBubbles?: boolean,
		tbody?: boolean
	}

	declare interface JQueryParam {
		(obj: any): string,
		(obj: any, traditional: boolean): string
	}

	declare interface JQueryEventConstructor {
		(name: string, eventProperties?: any): JQueryEventObject,
		new (name: string, eventProperties?: any): JQueryEventObject
	}

	declare interface JQueryCoordinates {
		left: number,
		top: number
	}

	declare interface JQuerySerializeArrayElement {
		name: string,
		value: string
	}

	declare interface JQueryAnimationOptions {
		duration?: any,
		easing?: string,
		complete?: Function,
		step?: (now: number, tween: any) => any,
		progress?: (animation: JQueryPromise<any>, progress: number, remainingMs: number) => any,
		start?: (animation: JQueryPromise<any>) => any,
		done?: (animation: JQueryPromise<any>, jumpedToEnd: boolean) => any,
		fail?: (animation: JQueryPromise<any>, jumpedToEnd: boolean) => any,
		always?: (animation: JQueryPromise<any>, jumpedToEnd: boolean) => any,
		queue?: any,
		specialEasing?: Object
	}

	declare interface JQueryEasingFunction {
		(percent: number): number
	}

	declare interface JQueryEasingFunctions {
		[name: string]: JQueryEasingFunction,
		linear: JQueryEasingFunction,
		swing: JQueryEasingFunction
	}

	declare interface JQueryStatic {
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
		get(settings: JQueryAjaxSettings): JQueryXHR,
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
		post(settings: JQueryAjaxSettings): JQueryXHR,
		Callbacks(flags?: string): JQueryCallback,
		holdReady(hold: boolean): void,
		(selector: string, context?: Element | JQuery): JQuery,
		(element: Element): JQuery,
		(elementArray: Element[]): JQuery,
		(callback: (jQueryAlias?: JQueryStatic) => any): JQuery,
		(object: {
		
	}): JQuery,
		(object: JQuery): JQuery,
		(): JQuery,
		(html: string, ownerDocument?: Document): JQuery,
		(html: string, attributes: Object): JQuery,
		noConflict(removeAll?: boolean): JQueryStatic,
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
		queue(element: Element, queueName: string, newQueue: Function[]): JQuery,
		queue(element: Element, queueName: string, callback: Function): JQuery,
		removeData(element: Element, name?: string): JQuery,
		Deferred<T>(beforeStart?: (deferred: JQueryDeferred<T>) => any): JQueryDeferred<T>,
		easing: JQueryEasingFunctions,
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
		error(message: any): JQuery,
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
		array: T[], func: (elementOfArray?: T, indexInArray?: number) => boolean, invert?: boolean
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
		array: T[], callback: (elementOfArray?: T, indexInArray?: number) => U
	): U[],
		map(arrayOrObject: any, callback: (value?: any, indexOrKey?: any) => any): any,
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

	declare interface JQuery {
		ajaxComplete(
		handler: (
		event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: any
	) => any
	): JQuery,
		ajaxError(
		handler: (
		event: JQueryEventObject, jqXHR: JQueryXHR, ajaxSettings: JQueryAjaxSettings, thrownError: any
	) => any
	): JQuery,
		ajaxSend(
		handler: (
		event: JQueryEventObject, jqXHR: JQueryXHR, ajaxOptions: JQueryAjaxSettings
	) => any
	): JQuery,
		ajaxStart(handler: () => any): JQuery,
		ajaxStop(handler: () => any): JQuery,
		ajaxSuccess(
		handler: (
		event: JQueryEventObject, XMLHttpRequest: XMLHttpRequest, ajaxOptions: JQueryAjaxSettings
	) => any
	): JQuery,
		load(
		url: string, data?: string | Object, complete?: (
		responseText: string, textStatus: string, XMLHttpRequest: XMLHttpRequest
	) => any
	): JQuery,
		serialize(): string,
		serializeArray(): JQuerySerializeArrayElement[],
		addClass(className: string): JQuery,
		addClass(func: (index: number, className: string) => string): JQuery,
		addBack(selector?: string): JQuery,
		attr(attributeName: string): string,
		attr(attributeName: string, value: string | number): JQuery,
		attr(
		attributeName: string, func: (index: number, attr: string) => string | number
	): JQuery,
		attr(attributes: Object): JQuery,
		hasClass(className: string): boolean,
		html(): string,
		html(htmlString: string): JQuery,
		html(func: (index: number, oldhtml: string) => string): JQuery,
		prop(propertyName: string): any,
		prop(propertyName: string, value: string | number | boolean): JQuery,
		prop(properties: Object): JQuery,
		prop(
		propertyName: string, func: (index: number, oldPropertyValue: any) => any
	): JQuery,
		removeAttr(attributeName: string): JQuery,
		removeClass(className?: string): JQuery,
		removeClass(func: (index: number, className: string) => string): JQuery,
		removeProp(propertyName: string): JQuery,
		toggleClass(className: string, swtch?: boolean): JQuery,
		toggleClass(swtch?: boolean): JQuery,
		toggleClass(
		func: (index: number, className: string, swtch: boolean) => string, swtch?: boolean
	): JQuery,
		val(): any,
		val(value: string | string[] | number): JQuery,
		val(func: (index: number, value: string) => string): JQuery,
		css(propertyName: string): string,
		css(propertyName: string, value: string | number): JQuery,
		css(
		propertyName: string, value: (index: number, value: string) => string | number
	): JQuery,
		css(properties: Object): JQuery,
		height(): number,
		height(value: number | string): JQuery,
		height(func: (index: number, height: number) => number | string): JQuery,
		innerHeight(): number,
		innerHeight(height: number | string): JQuery,
		innerWidth(): number,
		innerWidth(width: number | string): JQuery,
		offset(): JQueryCoordinates,
		offset(coordinates: JQueryCoordinates): JQuery,
		offset(func: (index: number, coords: JQueryCoordinates) => JQueryCoordinates): JQuery,
		outerHeight(includeMargin?: boolean): number,
		outerHeight(height: number | string): JQuery,
		outerWidth(includeMargin?: boolean): number,
		outerWidth(width: number | string): JQuery,
		position(): JQueryCoordinates,
		scrollLeft(): number,
		scrollLeft(value: number): JQuery,
		scrollTop(): number,
		scrollTop(value: number): JQuery,
		width(): number,
		width(value: number | string): JQuery,
		width(func: (index: number, width: number) => number | string): JQuery,
		clearQueue(queueName?: string): JQuery,
		data(key: string, value: any): JQuery,
		data(key: string): any,
		data(obj: {
		[key: string]: any
	}): JQuery,
		data(): any,
		dequeue(queueName?: string): JQuery,
		removeData(name: string): JQuery,
		removeData(list: string[]): JQuery,
		removeData(): JQuery,
		promise(type?: string, target?: Object): JQueryPromise<any>,
		animate(properties: Object, duration?: string | number, complete?: Function): JQuery,
		animate(
		properties: Object, duration?: string | number, easing?: string, complete?: Function
	): JQuery,
		animate(properties: Object, options: JQueryAnimationOptions): JQuery,
		delay(duration: number, queueName?: string): JQuery,
		fadeIn(duration?: number | string, complete?: Function): JQuery,
		fadeIn(duration?: number | string, easing?: string, complete?: Function): JQuery,
		fadeIn(options: JQueryAnimationOptions): JQuery,
		fadeOut(duration?: number | string, complete?: Function): JQuery,
		fadeOut(duration?: number | string, easing?: string, complete?: Function): JQuery,
		fadeOut(options: JQueryAnimationOptions): JQuery,
		fadeTo(duration: string | number, opacity: number, complete?: Function): JQuery,
		fadeTo(
		duration: string | number, opacity: number, easing?: string, complete?: Function
	): JQuery,
		fadeToggle(duration?: number | string, complete?: Function): JQuery,
		fadeToggle(duration?: number | string, easing?: string, complete?: Function): JQuery,
		fadeToggle(options: JQueryAnimationOptions): JQuery,
		finish(queue?: string): JQuery,
		hide(duration?: number | string, complete?: Function): JQuery,
		hide(duration?: number | string, easing?: string, complete?: Function): JQuery,
		hide(options: JQueryAnimationOptions): JQuery,
		show(duration?: number | string, complete?: Function): JQuery,
		show(duration?: number | string, easing?: string, complete?: Function): JQuery,
		show(options: JQueryAnimationOptions): JQuery,
		slideDown(duration?: number | string, complete?: Function): JQuery,
		slideDown(duration?: number | string, easing?: string, complete?: Function): JQuery,
		slideDown(options: JQueryAnimationOptions): JQuery,
		slideToggle(duration?: number | string, complete?: Function): JQuery,
		slideToggle(duration?: number | string, easing?: string, complete?: Function): JQuery,
		slideToggle(options: JQueryAnimationOptions): JQuery,
		slideUp(duration?: number | string, complete?: Function): JQuery,
		slideUp(duration?: number | string, easing?: string, complete?: Function): JQuery,
		slideUp(options: JQueryAnimationOptions): JQuery,
		stop(clearQueue?: boolean, jumpToEnd?: boolean): JQuery,
		stop(queue?: string, clearQueue?: boolean, jumpToEnd?: boolean): JQuery,
		toggle(duration?: number | string, complete?: Function): JQuery,
		toggle(duration?: number | string, easing?: string, complete?: Function): JQuery,
		toggle(options: JQueryAnimationOptions): JQuery,
		toggle(showOrHide: boolean): JQuery,
		bind(
		eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		bind(eventType: string, handler: (eventObject: JQueryEventObject) => any): JQuery,
		bind(eventType: string, eventData: any, preventBubble: boolean): JQuery,
		bind(eventType: string, preventBubble: boolean): JQuery,
		bind(events: any): JQuery,
		blur(): JQuery,
		blur(handler: (eventObject: JQueryEventObject) => any): JQuery,
		blur(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery,
		change(): JQuery,
		change(handler: (eventObject: JQueryEventObject) => any): JQuery,
		change(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery,
		click(): JQuery,
		click(handler: (eventObject: JQueryEventObject) => any): JQuery,
		click(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery,
		contextmenu(): JQuery,
		contextmenu(handler: (eventObject: JQueryMouseEventObject) => any): JQuery,
		contextmenu(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): JQuery,
		dblclick(): JQuery,
		dblclick(handler: (eventObject: JQueryEventObject) => any): JQuery,
		dblclick(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery,
		delegate(
		selector: any, eventType: string, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		delegate(
		selector: any, eventType: string, eventData: any, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		focus(): JQuery,
		focus(handler: (eventObject: JQueryEventObject) => any): JQuery,
		focus(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery,
		focusin(): JQuery,
		focusin(handler: (eventObject: JQueryEventObject) => any): JQuery,
		focusin(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery,
		focusout(): JQuery,
		focusout(handler: (eventObject: JQueryEventObject) => any): JQuery,
		focusout(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery,
		hover(
		handlerIn: (eventObject: JQueryEventObject) => any, handlerOut: (eventObject: JQueryEventObject) => any
	): JQuery,
		hover(handlerInOut: (eventObject: JQueryEventObject) => any): JQuery,
		keydown(): JQuery,
		keydown(handler: (eventObject: JQueryKeyEventObject) => any): JQuery,
		keydown(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery,
		keypress(): JQuery,
		keypress(handler: (eventObject: JQueryKeyEventObject) => any): JQuery,
		keypress(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery,
		keyup(): JQuery,
		keyup(handler: (eventObject: JQueryKeyEventObject) => any): JQuery,
		keyup(eventData?: any, handler?: (eventObject: JQueryKeyEventObject) => any): JQuery,
		load(handler: (eventObject: JQueryEventObject) => any): JQuery,
		load(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery,
		mousedown(): JQuery,
		mousedown(handler: (eventObject: JQueryMouseEventObject) => any): JQuery,
		mousedown(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): JQuery,
		mouseenter(): JQuery,
		mouseenter(handler: (eventObject: JQueryMouseEventObject) => any): JQuery,
		mouseenter(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): JQuery,
		mouseleave(): JQuery,
		mouseleave(handler: (eventObject: JQueryMouseEventObject) => any): JQuery,
		mouseleave(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): JQuery,
		mousemove(): JQuery,
		mousemove(handler: (eventObject: JQueryMouseEventObject) => any): JQuery,
		mousemove(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): JQuery,
		mouseout(): JQuery,
		mouseout(handler: (eventObject: JQueryMouseEventObject) => any): JQuery,
		mouseout(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): JQuery,
		mouseover(): JQuery,
		mouseover(handler: (eventObject: JQueryMouseEventObject) => any): JQuery,
		mouseover(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): JQuery,
		mouseup(): JQuery,
		mouseup(handler: (eventObject: JQueryMouseEventObject) => any): JQuery,
		mouseup(
		eventData: Object, handler: (eventObject: JQueryMouseEventObject) => any
	): JQuery,
		off(): JQuery,
		off(
		events: string, selector?: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		off(
		events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		off(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery,
		off(events: {
		[key: string]: any
	}, selector?: string): JQuery,
		on(
		events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: string, data: any, handler: (eventObject: JQueryEventObject, ...args: any[]) => any
	): JQuery,
		on(
		events: string, selector: string, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(
		events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject, ...eventData: any[]) => any
	): JQuery,
		on(events: {
		[key: string]: any
	}, selector?: string, data?: any): JQuery,
		on(events: {
		[key: string]: any
	}, data?: any): JQuery,
		one(events: string, handler: (eventObject: JQueryEventObject) => any): JQuery,
		one(
		events: string, data: Object, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		one(
		events: string, selector: string, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		one(
		events: string, selector: string, data: any, handler: (eventObject: JQueryEventObject) => any
	): JQuery,
		one(events: {
		[key: string]: any
	}, selector?: string, data?: any): JQuery,
		one(events: {
		[key: string]: any
	}, data?: any): JQuery,
		ready(handler: (jQueryAlias?: JQueryStatic) => any): JQuery,
		resize(): JQuery,
		resize(handler: (eventObject: JQueryEventObject) => any): JQuery,
		resize(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery,
		scroll(): JQuery,
		scroll(handler: (eventObject: JQueryEventObject) => any): JQuery,
		scroll(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery,
		select(): JQuery,
		select(handler: (eventObject: JQueryEventObject) => any): JQuery,
		select(eventData: Object, handler: (eventObject: JQueryEventObject) => any): JQuery,
		submit(): JQuery,
		submit(handler: (eventObject: JQueryEventObject) => any): JQuery,
		submit(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery,
		trigger(eventType: string, extraParameters?: any[] | Object): JQuery,
		trigger(event: JQueryEventObject, extraParameters?: any[] | Object): JQuery,
		triggerHandler(eventType: string, ...extraParameters: any[]): Object,
		triggerHandler(event: JQueryEventObject, ...extraParameters: any[]): Object,
		unbind(eventType?: string, handler?: (eventObject: JQueryEventObject) => any): JQuery,
		unbind(eventType: string, fls: boolean): JQuery,
		unbind(evt: any): JQuery,
		undelegate(): JQuery,
		undelegate(
		selector: string, eventType: string, handler?: (eventObject: JQueryEventObject) => any
	): JQuery,
		undelegate(selector: string, events: Object): JQuery,
		undelegate(namespace: string): JQuery,
		unload(handler: (eventObject: JQueryEventObject) => any): JQuery,
		unload(eventData?: any, handler?: (eventObject: JQueryEventObject) => any): JQuery,
		context: Element,
		jquery: string,
		error(handler: (eventObject: JQueryEventObject) => any): JQuery,
		error(eventData: any, handler: (eventObject: JQueryEventObject) => any): JQuery,
		pushStack(elements: any[]): JQuery,
		pushStack(elements: any[], name: string, arguments: any[]): JQuery,
		after(
		content1: JQuery | any[] | Element | DocumentFragment | Text | string, ...content2: any[]
	): JQuery,
		after(func: (index: number, html: string) => string | Element | JQuery): JQuery,
		append(
		content1: JQuery | any[] | Element | DocumentFragment | Text | string, ...content2: any[]
	): JQuery,
		append(func: (index: number, html: string) => string | Element | JQuery): JQuery,
		appendTo(target: JQuery | any[] | Element | string): JQuery,
		before(
		content1: JQuery | any[] | Element | DocumentFragment | Text | string, ...content2: any[]
	): JQuery,
		before(func: (index: number, html: string) => string | Element | JQuery): JQuery,
		clone(withDataAndEvents?: boolean, deepWithDataAndEvents?: boolean): JQuery,
		detach(selector?: string): JQuery,
		empty(): JQuery,
		insertAfter(target: JQuery | any[] | Element | Text | string): JQuery,
		insertBefore(target: JQuery | any[] | Element | Text | string): JQuery,
		prepend(
		content1: JQuery | any[] | Element | DocumentFragment | Text | string, ...content2: any[]
	): JQuery,
		prepend(func: (index: number, html: string) => string | Element | JQuery): JQuery,
		prependTo(target: JQuery | any[] | Element | string): JQuery,
		remove(selector?: string): JQuery,
		replaceAll(target: JQuery | any[] | Element | string): JQuery,
		replaceWith(newContent: JQuery | any[] | Element | Text | string): JQuery,
		replaceWith(func: () => Element | JQuery): JQuery,
		text(): string,
		text(text: string | number | boolean): JQuery,
		text(func: (index: number, text: string) => string): JQuery,
		toArray(): HTMLElement[],
		unwrap(): JQuery,
		wrap(wrappingElement: JQuery | Element | string): JQuery,
		wrap(func: (index: number) => string | JQuery): JQuery,
		wrapAll(wrappingElement: JQuery | Element | string): JQuery,
		wrapAll(func: (index: number) => string): JQuery,
		wrapInner(wrappingElement: JQuery | Element | string): JQuery,
		wrapInner(func: (index: number) => string): JQuery,
		each(func: (index: number, elem: Element) => any): JQuery,
		get(index: number): HTMLElement,
		get(): HTMLElement[],
		index(): number,
		index(selector: string | JQuery | Element): number,
		length: number,
		selector: string,
		[index: string]: any,
		[index: number]: HTMLElement,
		add(selector: string, context?: Element): JQuery,
		add(...elements: Element[]): JQuery,
		add(html: string): JQuery,
		add(obj: JQuery): JQuery,
		children(selector?: string): JQuery,
		closest(selector: string): JQuery,
		closest(selector: string, context?: Element): JQuery,
		closest(obj: JQuery): JQuery,
		closest(element: Element): JQuery,
		closest(selectors: any, context?: Element): any[],
		contents(): JQuery,
		end(): JQuery,
		eq(index: number): JQuery,
		filter(selector: string): JQuery,
		filter(func: (index: number, element: Element) => any): JQuery,
		filter(element: Element): JQuery,
		filter(obj: JQuery): JQuery,
		find(selector: string): JQuery,
		find(element: Element): JQuery,
		find(obj: JQuery): JQuery,
		first(): JQuery,
		has(selector: string): JQuery,
		has(contained: Element): JQuery,
		is(selector: string): boolean,
		is(func: (index: number, element: Element) => boolean): boolean,
		is(obj: JQuery): boolean,
		is(elements: any): boolean,
		last(): JQuery,
		map(callback: (index: number, domElement: Element) => any): JQuery,
		next(selector?: string): JQuery,
		nextAll(selector?: string): JQuery,
		nextUntil(selector?: string, filter?: string): JQuery,
		nextUntil(element?: Element, filter?: string): JQuery,
		nextUntil(obj?: JQuery, filter?: string): JQuery,
		not(selector: string): JQuery,
		not(func: (index: number, element: Element) => boolean): JQuery,
		not(elements: Element | Element[]): JQuery,
		not(obj: JQuery): JQuery,
		offsetParent(): JQuery,
		parent(selector?: string): JQuery,
		parents(selector?: string): JQuery,
		parentsUntil(selector?: string, filter?: string): JQuery,
		parentsUntil(element?: Element, filter?: string): JQuery,
		parentsUntil(obj?: JQuery, filter?: string): JQuery,
		prev(selector?: string): JQuery,
		prevAll(selector?: string): JQuery,
		prevUntil(selector?: string, filter?: string): JQuery,
		prevUntil(element?: Element, filter?: string): JQuery,
		prevUntil(obj?: JQuery, filter?: string): JQuery,
		siblings(selector?: string): JQuery,
		slice(start: number, end?: number): JQuery,
		queue(queueName?: string): any[],
		queue(newQueue: Function[]): JQuery,
		queue(callback: Function): JQuery,
		queue(queueName: string, newQueue: Function[]): JQuery,
		queue(queueName: string, callback: Function): JQuery
	}

			declare module.exports: JQueryStatic


}