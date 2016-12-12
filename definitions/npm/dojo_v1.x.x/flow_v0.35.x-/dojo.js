import type { request, AdapterRegistry, cache, cookie, domReady, hash, has, hccss, NodeList_data, NodeList_html, NodeList_fx, NodeList_dom, NodeList_manipulate, NodeList_traverse, on, query, ready, sniff, when, date, fx, router, aspect, back, colors, currency, dom, dom_attr, dom_class, dom_form, dom_construct, dom_prop, dom_style, dom_geometry, gears, html, io_query, i18n, json, loadInit, keys, mouse, node, number_, parser, regexp, require, robotx, robot, main, string_, text, topic, uacss, window, touch } from 'npm$namespace$dojo'
import type exp from 'npm$namespace$dojox'

declare module 'dojo' {
			declare function define(dependencies: String[], factory: Function): any

	declare function require(config?: Object, dependencies?: String[], callback?: Function): any

		
}

declare module 'dtl' {
		declare interface ___StringArgs {
		
	}

	declare interface ___ObjectArgs {
		
	}

			
}

declare module 'npm$namespace$dojo' {
		declare interface request {
		(url: String, options?: dojo.request.___Options): void
	}

	declare interface request {
		del(url: String, options?: dojo.request.___BaseOptions): dojo.request.___Promise,
		get(url: String, options?: dojo.request.___BaseOptions): dojo.request.___Promise,
		post(url: String, options?: dojo.request.___BaseOptions): any,
		put(url: String, options?: dojo.request.___BaseOptions): dojo.request.___Promise
	}

	declare interface AdapterRegistry {
		(returnWrappers?: boolean): void
	}

	declare interface AdapterRegistry {
		pairs: any[],
		returnWrappers: boolean,
		match(): any,
		register(
		name: String, check: Function, wrap: Function, directReturn?: boolean, override?: boolean
	): void,
		unregister(name: String): any
	}

	declare interface cache {
		(module: String, url: String, value?: String): void
	}

	declare interface cache {
		(module: Object, url: String, value?: String): void
	}

	declare interface cache {
		(module: String, url: String, value?: Object): void
	}

	declare interface cache {
		(module: Object, url: String, value?: Object): void
	}

	declare interface cookie {
		(name: String, value?: String, props?: Object): void
	}

	declare interface cookie {
		isSupported(): void
	}

	declare interface domReady {
		(callback: any): void
	}

	declare interface domReady {
		load(id: any, req: any, load: any): void
	}

	declare interface hash {
		(hash?: String, replace?: boolean): void
	}

	declare interface has {
		(name: String): void
	}

	declare interface has {
		(name: number): void
	}

	declare interface has {
		cache: string,
		add(name: String, test: Function, now?: boolean, force?: boolean): any,
		add(name: number, test: Function, now?: boolean, force?: boolean): any,
		clearElement(element: any): void,
		load(id: String, parentRequire: Function, loaded: Function): void,
		normalize(id: any, toAbsMid: Function): void
	}

	declare interface hccss {
		(): void
	}

	declare interface NodeList_data {
		(): void
	}

	declare interface NodeList_html {
		(): void
	}

	declare interface NodeList_fx {
		(): void
	}

	declare interface NodeList_fx {
		fadeTo(args: any): any,
		highlight(args: any): any,
		sizeTo(args: any): any,
		slideBy(args: any): any,
		wipeTo(args: any): any
	}

	declare interface NodeList_dom {
		(): void
	}

	declare interface NodeList_manipulate {
		(): void
	}

	declare interface NodeList_traverse {
		(): void
	}

	declare interface on {
		(target: HTMLElement, type: String, listener: Function, dontFix: any): void
	}

	declare interface on {
		(target: Object, type: String, listener: Function, dontFix: any): void
	}

	declare interface on {
		(target: HTMLElement, type: Function, listener: Function, dontFix: any): void
	}

	declare interface on {
		(target: Object, type: String, listener: Function, dontFix?: any): {
		remove: {
		(): void
	}
	}
	}

	declare interface on {
		emit(target: any, type: any, event: any): any,
		once(target: any, type: any, listener: any, dontFix?: any): any,
		parse(
		target: any, type: any, listener: any, addListener: any, dontFix: any, matchesTarget: any
	): any,
		pausable(target: any, type: any, listener: any, dontFix: any): any,
		selector(selector: any, eventType: any, children: any): Function
	}

	declare interface query {
		(selector: String, context?: String): NodeList
	}

	declare interface query {
		(selector: String, context?: HTMLElement): NodeList
	}

	declare interface query {
		load(id: any, parentRequire: any, loaded: any): void,
		NodeList(array: any): any[]
	}

	declare interface ready {
		(priority?: number, context?: any, callback?: Function): void
	}

	declare interface sniff {
		(): void
	}

	declare interface when {
		(value: T | dojo.promise.Promise<T>, callback: dojo.promise.Callback<T, U>, errback?: any, progback?: any): U | dojo.promise.Promise<U>
	}

	declare interface date {
		add(date: Date, interval: String, amount: number): any,
		compare(date1: Date, date2?: Date, portion?: String): number,
		difference(date1: Date, date2?: Date, interval?: String): any,
		getDaysInMonth(dateObject: Date): number,
		getTimezoneName(dateObject: Date): any,
		isLeapYear(dateObject: Date): boolean
	}

	declare interface fx {
		easing: Object,
		chain(animations: dojo._base.fx.Animation[]): any,
		combine(animations: dojo._base.fx.Animation[]): any,
		slideTo(args: Object): any,
		Toggler(): void,
		wipeIn(args: Object): any,
		wipeOut(args: Object): any
	}

	declare interface router {
		
	}

	declare interface aspect {
		after(
		target: Object, methodName: String, advice: Function, receiveArguments?: boolean
	): any,
		around(target: Object, methodName: String, advice: Function): void,
		before(target: Object, methodName: String, advice: Function): void
	}

	declare interface back {
		addToHistory(args: Object): void,
		getHash(): any,
		goBack(): void,
		goForward(): void,
		init(): void
	}

	declare interface colors {
		ThreeD: Object
	}

	declare interface currency {
		format(value: number, options?: dojo.currency.___FormatOptions): any,
		parse(expression: String, options?: Object): any,
		regexp(options?: Object): any
	}

	declare interface dom {
		byId(id: String, doc?: HTMLDocument): any,
		byId(id: HTMLElement, doc?: HTMLDocument): any,
		isDescendant(node: HTMLElement, ancestor: HTMLElement): boolean,
		isDescendant(node: String, ancestor: HTMLElement): boolean,
		isDescendant(node: HTMLElement, ancestor: String): boolean,
		isDescendant(node: String, ancestor: String): boolean,
		setSelectable(node: any, selectable: any): void
	}

	declare interface dom_attr {
		get(node: HTMLElement, name: String): any,
		get(node: String, name: String): any,
		getNodeProp(node: HTMLElement, name: String): any,
		getNodeProp(node: String, name: String): any,
		has(node: HTMLElement, name: String): boolean,
		has(node: String, name: String): boolean,
		remove(node: HTMLElement, name: String): void,
		remove(node: String, name: String): void,
		set(node: HTMLElement, name: String, value?: String): any,
		set(node: String, name: String, value?: String): any,
		set(node: HTMLElement, name: Object, value?: String): any,
		set(node: String, name: Object, value?: String): any
	}

	declare interface dom_class {
		add(node: String, classStr: String): void,
		add(node: HTMLElement, classStr: String): void,
		add(node: String, classStr: any[]): void,
		add(node: HTMLElement, classStr: any[]): void,
		contains(node: String, classStr: String): boolean,
		contains(node: HTMLElement, classStr: String): boolean,
		remove(node: String, classStr?: String): void,
		remove(node: HTMLElement, classStr?: String): void,
		remove(node: String, classStr?: any[]): void,
		remove(node: HTMLElement, classStr?: any[]): void,
		replace(node: String, addClassStr: String, removeClassStr?: String): void,
		replace(node: HTMLElement, addClassStr: String, removeClassStr?: String): void,
		replace(node: String, addClassStr: any[], removeClassStr?: String): void,
		replace(node: HTMLElement, addClassStr: any[], removeClassStr?: String): void,
		replace(node: String, addClassStr: String, removeClassStr?: any[]): void,
		replace(node: HTMLElement, addClassStr: String, removeClassStr?: any[]): void,
		replace(node: String, addClassStr: any[], removeClassStr?: any[]): void,
		replace(node: HTMLElement, addClassStr: any[], removeClassStr?: any[]): void,
		toggle(node: String, classStr: String, condition?: boolean): boolean,
		toggle(node: HTMLElement, classStr: String, condition?: boolean): boolean,
		toggle(node: String, classStr: any[], condition?: boolean): boolean,
		toggle(node: HTMLElement, classStr: any[], condition?: boolean): boolean
	}

	declare interface dom_form {
		fieldToObject(inputNode: HTMLElement): Object,
		fieldToObject(inputNode: String): Object,
		toJson(formNode: HTMLElement, prettyPrint?: boolean): String,
		toJson(formNode: String, prettyPrint?: boolean): String,
		toObject(formNode: HTMLElement): Object,
		toObject(formNode: String): Object,
		toQuery(formNode: HTMLElement): String,
		toQuery(formNode: String): String
	}

	declare interface dom_construct {
		create(tag: HTMLElement, attrs: Object, refNode?: HTMLElement, pos?: String): any,
		create(tag: String, attrs: Object, refNode?: HTMLElement, pos?: String): any,
		create(tag: HTMLElement, attrs: Object, refNode?: String, pos?: String): any,
		create(tag: String, attrs: Object, refNode?: String, pos?: String): any,
		destroy(node: HTMLElement): void,
		destroy(node: String): void,
		empty(node: HTMLElement): void,
		empty(node: String): void,
		place(node: HTMLElement, refNode: HTMLElement, position?: String): HTMLElement,
		place(node: String, refNode: HTMLElement, position?: String): HTMLElement,
		place(node: HTMLElement, refNode: String, position?: String): HTMLElement,
		place(node: String, refNode: String, position?: String): HTMLElement,
		place(node: HTMLElement, refNode: HTMLElement, position?: number): HTMLElement,
		place(node: String, refNode: HTMLElement, position?: number): HTMLElement,
		place(node: HTMLElement, refNode: String, position?: number): HTMLElement,
		place(node: String, refNode: String, position?: number): HTMLElement,
		toDom(frag: String, doc?: HTMLDocument): any
	}

	declare interface dom_prop {
		names: Object,
		get(node: HTMLElement, name: String): any,
		get(node: String, name: String): any,
		set(node: HTMLElement, name: String, value?: String): any,
		set(node: String, name: String, value?: String): any,
		set(node: HTMLElement, name: Object, value?: String): any,
		set(node: String, name: Object, value?: String): any
	}

	declare interface dom_style {
		get(node: HTMLElement, name: String): any,
		get(node: String, name: String): any,
		get(node: HTMLElement, name: Object): any,
		get(node: String, name: Object): any,
		getComputedStyle(node: HTMLElement): void,
		set(node: HTMLElement, name: String, value?: String): any,
		set(node: String, name: String, value?: String): any,
		set(node: HTMLElement, name: Object, value?: String): any,
		set(node: String, name: Object, value?: String): any,
		toPixelValue(node: HTMLElement, value: String): number
	}

	declare interface dom_geometry {
		boxModel: string,
		docScroll(doc?: HTMLDocument): Object,
		fixIeBiDiScrollLeft(scrollLeft: number, doc?: HTMLDocument): number,
		getBorderExtents(node: HTMLElement, computedStyle?: Object): Object,
		getContentBox(node: HTMLElement, computedStyle?: Object): Object,
		getIeDocumentElementOffset(doc?: HTMLDocument): Object,
		getMarginBox(node: HTMLElement, computedStyle?: Object): Object,
		getMarginExtents(node: HTMLElement, computedStyle?: Object): Object,
		getMarginSize(node: HTMLElement, computedStyle?: Object): Object,
		getMarginSize(node: String, computedStyle?: Object): Object,
		getPadBorderExtents(node: HTMLElement, computedStyle?: Object): Object,
		getPadExtents(node: HTMLElement, computedStyle?: Object): Object,
		isBodyLtr(doc?: HTMLDocument): boolean,
		normalizeEvent(event: Object): void,
		position(
		node: HTMLElement, includeScroll?: boolean
	): {
		w: number,
		h: number,
		x: number,
		y: number
	},
		position(
		node: String, includeScroll?: boolean
	): {
		w: number,
		h: number,
		x: number,
		y: number
	},
		setContentSize(node: HTMLElement, box: Object, computedStyle?: Object): void,
		setMarginBox(node: HTMLElement, box: Object, computedStyle?: Object): void
	}

	declare interface gears {
		available: Object
	}

	declare interface html {
		set(node: HTMLElement, cont: String, params?: Object): any,
		set(node: HTMLElement, cont: HTMLElement, params?: Object): any,
		set(node: HTMLElement, cont: NodeList, params?: Object): any
	}

	declare interface io_query {
		objectToQuery(map: Object): any,
		queryToObject(str: String): Object
	}

	declare interface i18n {
		cache: Object,
		dynamic: boolean,
		unitTests: any[],
		getL10nName(moduleName: any, bundleName: any, locale: any): String,
		getLocalization(moduleName: any, bundleName: any, locale: any): any,
		load(id: any, require: any, load: any): void,
		normalize(id: any, toAbsMid: any): any,
		normalizeLocale(locale: any): any
	}

	declare interface json {
		parse(str: any, strict: any): void,
		stringify(value: any, replacer: any, spacer: any): void
	}

	declare interface loadInit {
		dynamic: number,
		load: Object,
		normalize(id: any): any
	}

	declare interface keys {
		ALT: number,
		BACKSPACE: number,
		CAPS_LOCK: number,
		CLEAR: number,
		copyKey: number,
		CTRL: number,
		DELETE: number,
		DOWN_ARROW: number,
		DOWN_DPAD: number,
		END: number,
		ENTER: number,
		ESCAPE: number,
		F1: number,
		F10: number,
		F11: number,
		F12: number,
		F13: number,
		F14: number,
		F15: number,
		F2: number,
		F3: number,
		F4: number,
		F5: number,
		F6: number,
		F7: number,
		F8: number,
		F9: number,
		HELP: number,
		HOME: number,
		INSERT: number,
		LEFT_ARROW: number,
		LEFT_DPAD: number,
		LEFT_WINDOW: number,
		META: number,
		NUM_LOCK: number,
		NUMPAD_0: number,
		NUMPAD_1: number,
		NUMPAD_2: number,
		NUMPAD_3: number,
		NUMPAD_4: number,
		NUMPAD_5: number,
		NUMPAD_6: number,
		NUMPAD_7: number,
		NUMPAD_8: number,
		NUMPAD_9: number,
		NUMPAD_DIVIDE: number,
		NUMPAD_ENTER: number,
		NUMPAD_MINUS: number,
		NUMPAD_MULTIPLY: number,
		NUMPAD_PERIOD: number,
		NUMPAD_PLUS: number,
		PAGE_DOWN: number,
		PAGE_UP: number,
		PAUSE: number,
		RIGHT_ARROW: number,
		RIGHT_DPAD: number,
		RIGHT_WINDOW: number,
		SCROLL_LOCK: number,
		SELECT: number,
		SHIFT: number,
		SPACE: number,
		TAB: number,
		UP_ARROW: number,
		UP_DPAD: number
	}

	declare interface mouse {
		enter: Object,
		leave: Object,
		isLeft(): void,
		isMiddle(): void,
		isRight(): void,
		wheel(node: any, listener: any): any
	}

	declare interface node {
		load(id: String, require: Function, load: Function): void,
		normalize(id: String, normalize: Function): any
	}

	declare interface number_ {
		format(value: number, options?: Object): any,
		parse(expression: String, options?: Object): number,
		regexp(options: Object): any,
		round(value: number, places?: number, increment?: number): number
	}

	declare interface parser {
		construct(
		ctor: Function, node: HTMLElement, mixin?: Object, options?: Object, scripts?: HTMLElement[], inherited?: Object
	): any,
		instantiate(nodes: any[], mixin?: Object, options?: Object): any,
		parse(rootNode?: HTMLElement, options?: Object): any,
		scan(root?: HTMLElement, options?: Object): dojo.promise.Promise<any>
	}

	declare interface regexp {
		buildGroupRE(arr: Object, re: Function, nonCapture?: boolean): any,
		buildGroupRE(arr: any[], re: Function, nonCapture?: boolean): any,
		escapeString(str: String, except?: String): any,
		group(expression: String, nonCapture?: boolean): String
	}

	declare interface require {
		dynamic: number,
		load: Object,
		normalize(id: any): any
	}

	declare interface robotx {
		doc: Object,
		mouseWheelSize: number,
		window: Object,
		initRobot(url: String): void,
		keyDown(charOrCode: number, delay?: number): void,
		keyPress(
		charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean
	): void,
		keyUp(charOrCode: number, delay?: number): void,
		killRobot(): void,
		mouseClick(buttons: Object, delay?: number): void,
		mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void,
		mouseMoveAt(
		node: String, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: Function, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void,
		mousePress(buttons: Object, delay?: number): void,
		mouseRelease(buttons: Object, delay?: number): void,
		mouseWheel(wheelAmt: number, delay?: number, duration?: number): void,
		scrollIntoView(node: String, delay: number): void,
		scrollIntoView(node: HTMLElement, delay: number): void,
		scrollIntoView(node: Function, delay: number): void,
		sequence(f: Function, delay?: number, duration?: number): void,
		setClipboard(data: String, format?: String): void,
		startRobot(): any,
		typeKeys(chars: String, delay?: number, duration?: number): void,
		typeKeys(chars: number, delay?: number, duration?: number): void,
		waitForPageToLoad(submitActions: Function): any
	}

	declare interface robot {
		doc: Object,
		mouseWheelSize: number,
		window: Object,
		initRobot(url: String): void,
		keyDown(charOrCode: number, delay?: number): void,
		keyPress(
		charOrCode: number, delay: number, modifiers: Object, asynchronous: boolean
	): void,
		keyUp(charOrCode: number, delay?: number): void,
		killRobot(): void,
		mouseClick(buttons: Object, delay?: number): void,
		mouseMove(x: number, y: number, delay: number, duration: number, absolute: boolean): void,
		mouseMoveAt(
		node: String, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: HTMLElement, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveAt(
		node: Function, delay: number, duration: number, offsetX: number, offsetY: number
	): void,
		mouseMoveTo(point: Object, delay: number, duration: number, absolute: boolean): void,
		mousePress(buttons: Object, delay?: number): void,
		mouseRelease(buttons: Object, delay?: number): void,
		mouseWheel(wheelAmt: number, delay: number, duration: number): void,
		scrollIntoView(node: String, delay: number): void,
		scrollIntoView(node: HTMLElement, delay: number): void,
		scrollIntoView(node: Function, delay: number): void,
		sequence(f: Function, delay?: number, duration?: number): void,
		setClipboard(data: String, format?: String): void,
		startRobot(): any,
		typeKeys(chars: String, delay?: number, duration?: number): void,
		typeKeys(chars: number, delay?: number, duration?: number): void,
		waitForPageToLoad(submitActions: Function): any
	}

	declare interface main {
		back: Object,
		baseUrl: string,
		behavior: Object,
		cldr: Object,
		colors: Object,
		config: Object,
		connectPublisher: Object,
		contentHandlers: Object,
		currency: Object,
		data: Object,
		date: Object,
		dijit: Object,
		dnd: Object,
		doc: Object,
		dojox: Object,
		fx: Object,
		gears: Object,
		global: Object,
		html: Object,
		i18n: Object,
		io: Object,
		isAir: boolean,
		isAndroid: number,
		isAsync: boolean,
		isBrowser: boolean,
		isChrome: number,
		isCopyKey: Object,
		isFF: Object,
		isIE: number,
		isIos: number,
		isKhtml: number,
		isMac: boolean,
		isMoz: Object,
		isMozilla: Object,
		isOpera: number,
		isQuirks: boolean,
		isSafari: number,
		isSpidermonkey: boolean,
		isWebKit: number,
		isWii: boolean,
		keys: Object,
		locale: Object,
		mouseButtons: Object,
		number: Object,
		parser: string,
		publish: Object,
		query: Object,
		regexp: Object,
		rpc: Object,
		scopeMap: Object,
		store: Object,
		string: Object,
		subscribe: Object,
		tests: Object,
		toJsonIndentStr: string,
		touch: Object,
		version: Object,
		window: Object,
		AdapterRegistry(returnWrappers: boolean): void,
		addClass(node: String, classStr: String): void,
		addClass(node: HTMLElement, classStr: String): void,
		addClass(node: String, classStr: any[]): void,
		addClass(node: HTMLElement, classStr: any[]): void,
		addOnLoad(priority: number, context: any, callback?: Function): void,
		addOnUnload(obj?: Object, functionName?: String): void,
		addOnUnload(obj?: Function, functionName?: String): void,
		addOnUnload(obj?: Object, functionName?: Function): void,
		addOnUnload(obj?: Function, functionName?: Function): void,
		addOnWindowUnload(obj?: Object, functionName?: String): void,
		addOnWindowUnload(obj?: Object, functionName?: Function): void,
		anim(
		node: HTMLElement, properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number
	): any,
		anim(
		node: String, properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number
	): any,
		animateProperty(args: Object): any,
		Animation(args: Object): void,
		attr(node: HTMLElement, name: String, value?: String): any,
		attr(node: String, name: String, value?: String): any,
		attr(node: HTMLElement, name: Object, value?: String): any,
		attr(node: String, name: Object, value?: String): any,
		blendColors(
		start: dojo._base.Color, end: dojo._base.Color, weight: number, obj?: dojo._base.Color
	): any,
		body(doc?: HTMLDocument): any,
		byId(id: String, doc?: HTMLDocument): any,
		byId(id: HTMLElement, doc?: HTMLDocument): any,
		cache(module: String, url: String, value?: String): any,
		cache(module: Object, url: String, value?: String): any,
		cache(module: String, url: String, value?: Object): any,
		cache(module: Object, url: String, value?: Object): any,
		clearCache(): void,
		Color(color: any[]): void,
		Color(color: String): void,
		Color(color: Object): void,
		colorFromArray(a: any[], obj?: dojo._base.Color): any,
		colorFromHex(color: String, obj?: dojo._base.Color): any,
		colorFromRgb(color: String, obj?: dojo._base.Color): any,
		colorFromString(str: String, obj?: dojo._base.Color): any,
		connect(
		obj: Object, event: String, context: Object, method: String, dontFix?: boolean
	): any,
		connect(
		obj: Object, event: String, context: any, method: String, dontFix?: boolean
	): any,
		connect(
		obj: Object, event: String, context: Object, method: Function, dontFix?: boolean
	): any,
		connect(
		obj: Object, event: String, context: any, method: Function, dontFix?: boolean
	): any,
		contentBox(node: HTMLElement, box?: Object): any,
		contentBox(node: String, box?: Object): any,
		cookie(name: String, value?: String, props?: Object): any,
		coords(node: HTMLElement, includeScroll?: boolean): any,
		coords(node: String, includeScroll?: boolean): any,
		create(tag: HTMLElement, attrs: Object, refNode?: HTMLElement, pos?: String): any,
		create(tag: String, attrs: Object, refNode?: HTMLElement, pos?: String): any,
		create(tag: HTMLElement, attrs: Object, refNode?: String, pos?: String): any,
		create(tag: String, attrs: Object, refNode?: String, pos?: String): any,
		declare(
		className: String, superclass: Function, props: Object
	): dojo._base.declare.___DeclareCreatedObject,
		declare(
		className: String, superclass: Function[], props: Object
	): dojo._base.declare.___DeclareCreatedObject,
		Deferred(canceller: Function): void,
		DeferredList(
		list: any[], fireOnOneCallback?: boolean, fireOnOneErrback?: boolean, consumeErrors?: boolean, canceller?: Function
	): void,
		deprecated(behaviour: String, extra?: String, removal?: String): void,
		destroy(node: any): void,
		disconnect(handle: Object): void,
		docScroll(doc?: HTMLDocument): Object,
		empty(node: any): void,
		eval(scriptText: any): any,
		every(arr: any[], callback: Function, thisObject?: Object): boolean,
		every(arr: String, callback: Function, thisObject?: Object): boolean,
		every(arr: any[], callback: String, thisObject?: Object): boolean,
		every(arr: String, callback: String, thisObject?: Object): boolean,
		exit(exitcode: any): void,
		experimental(moduleName: String, extra?: String): void,
		fadeIn(args: Object): any,
		fadeOut(args: Object): any,
		fieldToObject(inputNode: HTMLElement): Object,
		fieldToObject(inputNode: String): Object,
		filter(arr: any[], callback: Function, thisObject?: Object): any[],
		filter(arr: any[], callback: String, thisObject?: Object): any[],
		fixEvent(evt: Event, sender: HTMLElement): Event,
		fixIeBiDiScrollLeft(scrollLeft: number, doc?: HTMLDocument): number,
		forEach(arr: any[], callback: Function, thisObject?: Object): void,
		forEach(arr: String, callback: Function, thisObject?: Object): void,
		forEach(arr: any[], callback: String, thisObject?: Object): void,
		forEach(arr: String, callback: String, thisObject?: Object): void,
		formToJson(formNode: HTMLElement, prettyPrint?: boolean): String,
		formToJson(formNode: String, prettyPrint?: boolean): String,
		formToObject(formNode: HTMLElement): Object,
		formToObject(formNode: String): Object,
		formToQuery(formNode: HTMLElement): String,
		formToQuery(formNode: String): String,
		fromJson(js: String): any,
		getAttr(node: HTMLElement, name: String): any,
		getAttr(node: String, name: String): any,
		getBorderExtents(node: HTMLElement, computedStyle?: Object): Object,
		getComputedStyle(node: HTMLElement): void,
		getContentBox(node: HTMLElement, computedStyle?: Object): Object,
		getIeDocumentElementOffset(doc?: HTMLDocument): Object,
		getL10nName(moduleName: any, bundleName: any, locale: any): String,
		getMarginBox(node: HTMLElement, computedStyle?: Object): Object,
		getMarginExtents(node: HTMLElement, computedStyle?: Object): Object,
		getMarginSize(node: HTMLElement, computedStyle?: Object): Object,
		getMarginSize(node: String, computedStyle?: Object): Object,
		getNodeProp(node: HTMLElement, name: String): any,
		getNodeProp(node: String, name: String): any,
		getPadBorderExtents(node: HTMLElement, computedStyle?: Object): Object,
		getPadExtents(node: HTMLElement, computedStyle?: Object): Object,
		getProp(node: HTMLElement, name: String): any,
		getProp(node: String, name: String): any,
		getStyle(node: HTMLElement, name?: String): any,
		getStyle(node: String, name?: String): any,
		hasAttr(node: HTMLElement, name: String): boolean,
		hasAttr(node: String, name: String): boolean,
		hasClass(node: String, classStr: String): boolean,
		hasClass(node: HTMLElement, classStr: String): boolean,
		hash(hash?: String, replace?: boolean): any,
		indexOf(arr: any[], value: Object, fromIndex?: number, findLast?: boolean): number,
		isBodyLtr(doc?: HTMLDocument): boolean,
		isDescendant(node: HTMLElement, ancestor: HTMLElement): boolean,
		isDescendant(node: String, ancestor: HTMLElement): boolean,
		isDescendant(node: HTMLElement, ancestor: String): boolean,
		isDescendant(node: String, ancestor: String): boolean,
		lastIndexOf(arr: any, value: any, fromIndex?: number): number,
		loadInit(f: any): void,
		map(arr: any[], callback: Function, thisObject: Object, Ctr: any): any[],
		map(arr: String, callback: Function, thisObject: Object, Ctr: any): any[],
		map(arr: any[], callback: String, thisObject: Object, Ctr: any): any[],
		map(arr: String, callback: String, thisObject: Object, Ctr: any): any[],
		marginBox(node: HTMLElement, box?: Object): any,
		marginBox(node: String, box?: Object): any,
		moduleUrl(module: String, url?: String): String,
		NodeList(array: any): any[],
		objectToQuery(map: Object): any,
		place(node: HTMLElement, refNode: HTMLElement, position?: String): HTMLElement,
		place(node: String, refNode: HTMLElement, position?: String): HTMLElement,
		place(node: HTMLElement, refNode: String, position?: String): HTMLElement,
		place(node: String, refNode: String, position?: String): HTMLElement,
		place(node: HTMLElement, refNode: HTMLElement, position?: number): HTMLElement,
		place(node: String, refNode: HTMLElement, position?: number): HTMLElement,
		place(node: HTMLElement, refNode: String, position?: number): HTMLElement,
		place(node: String, refNode: String, position?: number): HTMLElement,
		platformRequire(modMap: Object): void,
		popContext(): void,
		position(node: HTMLElement, includeScroll: boolean): Object,
		position(node: String, includeScroll?: boolean): Object,
		prop(node: HTMLElement, name: String, value?: String): any,
		prop(node: String, name: String, value?: String): any,
		prop(node: HTMLElement, name: Object, value?: String): any,
		prop(node: String, name: Object, value?: String): any,
		provide(mid: any): void,
		pushContext(g?: Object, d?: HTMLDocument): void,
		pushContext(g?: String, d?: HTMLDocument): void,
		queryToObject(str: String): Object,
		rawXhrPost(args: Object): any,
		rawXhrPut(args: Object): any,
		ready(priority: number, context: any, callback: Function): void,
		registerModulePath(moduleName: String, prefix: String): void,
		removeAttr(node: HTMLElement, name: String): void,
		removeAttr(node: String, name: String): void,
		removeClass(node: String, classStr?: String): void,
		removeClass(node: HTMLElement, classStr?: String): void,
		removeClass(node: String, classStr?: any[]): void,
		removeClass(node: HTMLElement, classStr?: any[]): void,
		replaceClass(node: String, addClassStr: String, removeClassStr?: String): void,
		replaceClass(node: HTMLElement, addClassStr: String, removeClassStr?: String): void,
		replaceClass(node: String, addClassStr: any[], removeClassStr?: String): void,
		replaceClass(node: HTMLElement, addClassStr: any[], removeClassStr?: String): void,
		replaceClass(node: String, addClassStr: String, removeClassStr?: any[]): void,
		replaceClass(node: HTMLElement, addClassStr: String, removeClassStr?: any[]): void,
		replaceClass(node: String, addClassStr: any[], removeClassStr?: any[]): void,
		replaceClass(node: HTMLElement, addClassStr: any[], removeClassStr?: any[]): void,
		require(moduleName: String, omitModuleCheck?: boolean): any,
		requireAfterIf(condition: boolean, moduleName: String, omitModuleCheck?: boolean): void,
		requireIf(condition: boolean, moduleName: String, omitModuleCheck?: boolean): void,
		requireLocalization(moduleName: String, bundleName: String, locale?: String): void,
		safeMixin(target: Object, source: Object): Object,
		setAttr(node: HTMLElement, name: String, value?: String): any,
		setAttr(node: String, name: String, value?: String): any,
		setAttr(node: HTMLElement, name: Object, value?: String): any,
		setAttr(node: String, name: Object, value?: String): any,
		setContentSize(node: HTMLElement, box: Object, computedStyle?: Object): void,
		setContext(globalObject: Object, globalDocument: HTMLDocument): void,
		setMarginBox(node: HTMLElement, box: Object, computedStyle?: Object): void,
		setProp(node: HTMLElement, name: String, value?: String): any,
		setProp(node: String, name: String, value?: String): any,
		setProp(node: HTMLElement, name: Object, value?: String): any,
		setProp(node: String, name: Object, value?: String): any,
		setSelectable(node: any, selectable: any): void,
		setStyle(node: HTMLElement, name: String, value?: String): String,
		setStyle(node: String, name: String, value?: String): String,
		setStyle(node: HTMLElement, name: Object, value?: String): String,
		setStyle(node: String, name: Object, value?: String): String,
		some(arr: any[], callback: Function, thisObject?: Object): boolean,
		some(arr: String, callback: Function, thisObject?: Object): boolean,
		some(arr: any[], callback: String, thisObject?: Object): boolean,
		some(arr: String, callback: String, thisObject?: Object): boolean,
		Stateful(): void,
		stopEvent(evt: Event): void,
		style(node: HTMLElement, name?: String, value?: String): any,
		style(node: String, name?: String, value?: String): any,
		style(node: HTMLElement, name?: Object, value?: String): any,
		style(node: String, name?: Object, value?: String): any,
		toDom(frag: String, doc?: HTMLDocument): any,
		toggleClass(node: String, classStr: String, condition?: boolean): boolean,
		toggleClass(node: HTMLElement, classStr: String, condition?: boolean): boolean,
		toggleClass(node: String, classStr: any[], condition?: boolean): boolean,
		toggleClass(node: HTMLElement, classStr: any[], condition?: boolean): boolean,
		toJson(it: Object, prettyPrint?: boolean): any,
		toPixelValue(node: HTMLElement, value: String): number,
		unsubscribe(handle: Object): void,
		when(
		valueOrPromise: any, callback?: Function, errback?: Function, progback?: Function
	): dojo.promise.Promise<any>,
		windowUnloaded(): void,
		withDoc(
		documentObject: HTMLDocument, callback: Function, thisObject?: Object, cbArguments?: any[]
	): any,
		withGlobal(
		globalObject: Object, callback: Function, thisObject?: Object, cbArguments?: any[]
	): any,
		xhr(method: any, args: any): any,
		xhrDelete(args: Object): any,
		xhrGet(args: Object): any,
		xhrPost(args: Object): any,
		xhrPut(args: Object): any
	}

	declare interface string_ {
		pad(text: String, size: number, ch?: String, end?: boolean): number,
		rep(str: String, num: number): String,
		substitute(template: String, map: Object, transform?: Function, thisObject?: Object): any,
		substitute(template: String, map: any[], transform?: Function, thisObject?: Object): any,
		trim(str: String): String
	}

	declare interface text {
		dynamic: boolean,
		load(id: String, require: Function, load: Function): void,
		normalize(id: any, toAbsMid: any): String
	}

	declare interface topic {
		publish(topic: String, event: Object): any,
		subscribe(topic: String, listener: Function): any
	}

	declare interface uacss {
		
	}

	declare interface window {
		get(doc: HTMLDocument): any,
		getBox(doc?: HTMLDocument): Object,
		scrollIntoView(node: HTMLElement, pos: Object): void
	}

	declare interface touch {
		cancel(node: HTMLElement, listener: Function): any,
		enter(node: HTMLElement, listener: Function): any,
		leave(node: HTMLElement, listener: Function): any,
		move(node: HTMLElement, listener: Function): any,
		out(node: HTMLElement, listener: Function): any,
		over(node: HTMLElement, listener: Function): any,
		press(node: HTMLElement, listener: Function): any,
		release(node: HTMLElement, listener: Function): any
	}

		declare class DeferredList  {
		constructor(): this;
		gatherResults(deferredList: dojo.DeferredList): any
	}

	declare class Deferred  {
		constructor(canceler?: Function): this;
		promise: dojo.promise.Promise<any>;
		cancel(reason: any, strict?: boolean): any;
		isCanceled(): boolean;
		isFulfilled(): boolean;
		isRejected(): boolean;
		isResolved(): boolean;
		progress(update: any, strict?: boolean): dojo.promise.Promise<any>;
		reject(error: any, strict?: boolean): any;
		resolve(value: any, strict?: boolean): dojo.promise.Promise<any>;
		then(
		callback?: Function, errback?: Function, progback?: Function
	): dojo.promise.Promise<any>;
		toString(): String
	}

	declare class Evented  {
		constructor(): this;
		emit(type: String, data: any): any;
		on(type: String, listener: {
		(e: any): void
	}): {
		remove: {
		(): void
	}
	}
	}

	declare class NodeList  {
		constructor(array: any): this;
		events: any[];
		addClass(className: String): void;
		addClass(className: any[]): void;
		addClassFx(cssClass: any, args: any): {
		type: Function,
		value: any
	};
		addContent(content: String, position?: String): Function;
		addContent(content: HTMLElement, position?: String): Function;
		addContent(content: Object, position?: String): Function;
		addContent(content: dojo.NodeList, position?: String): Function;
		addContent(content: String, position?: number): Function;
		addContent(content: HTMLElement, position?: number): Function;
		addContent(content: Object, position?: number): Function;
		addContent(content: dojo.NodeList, position?: number): Function;
		adopt(queryOrListOrNode: String, position?: String): any;
		adopt(queryOrListOrNode: any[], position?: String): any;
		adopt(queryOrListOrNode: HTMLElement, position?: String): any;
		after(content: String): any;
		after(content: HTMLElement): any;
		after(content: NodeList): any;
		andSelf(): any;
		anim(
		properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number
	): any;
		animateProperty(args?: Object): any;
		append(content: String): any;
		append(content: HTMLElement): any;
		append(content: NodeList): any;
		appendTo(query: String): any;
		at(index: number[]): any;
		attr(property: String, value?: String): any;
		before(content: String): any;
		before(content: HTMLElement): any;
		before(content: NodeList): any;
		children(query?: String): any;
		clone(): any;
		closest(query: String, root?: String): any;
		closest(query: String, root?: HTMLElement): any;
		concat(item: Object): any;
		connect(methodName: String, objOrFunc: Object, funcName?: String): void;
		connect(methodName: String, objOrFunc: Function, funcName?: String): void;
		connect(methodName: String, objOrFunc: String, funcName?: String): void;
		coords(): void;
		data(key?: Object, value?: any): any;
		data(key?: String, value?: any): any;
		delegate(selector: String, eventName: String, fn: Function): any;
		dtl(template: dojox.dtl.___StringArgs, context: dojox.dtl.___ObjectArgs): Function;
		dtl(template: String, context: dojox.dtl.___ObjectArgs): Function;
		dtl(template: dojox.dtl.___StringArgs, context: Object): Function;
		dtl(template: String, context: Object): Function;
		empty(): any;
		end(): any;
		even(): any;
		every(callback: Function, thisObject?: Object): any;
		fadeIn(args?: Object): any;
		fadeOut(args?: Object): any;
		filter(filter: String): any;
		filter(filter: Function): any;
		first(): any;
		forEach(callback: any, thisObj: any): Function;
		html(value?: String): any;
		html(value?: HTMLElement): any;
		html(value?: NodeList): any;
		indexOf(value: Object, fromIndex: number): any;
		innerHTML(value?: String): any;
		innerHTML(value?: HTMLElement): any;
		innerHTML(value?: NodeList): any;
		insertAfter(query: String): any;
		insertBefore(query: String): any;
		instantiate(declaredClass: String, properties?: Object): any;
		instantiate(declaredClass: Object, properties?: Object): any;
		last(): any;
		lastIndexOf(value: Object, fromIndex?: number): any;
		map(func: Function, obj?: Function): any;
		marginBox(): void;
		next(query?: String): any;
		nextAll(query?: String): any;
		odd(): any;
		on(eventName: any, listener: any): any;
		orphan(filter?: String): any;
		parent(query?: String): any;
		parents(query?: String): any;
		place(queryOrNode: String, position: String): any;
		place(queryOrNode: HTMLElement, position: String): any;
		position(): any;
		prepend(content: String): any;
		prepend(content: HTMLElement): any;
		prepend(content: NodeList): any;
		prependTo(query: String): any;
		prev(query?: String): any;
		prevAll(query?: String): any;
		query(queryStr: String): any;
		remove(filter?: String): any;
		removeAttr(name: String): void;
		removeClass(className?: String): any;
		removeClass(className: any[]): any;
		removeClassFx(cssClass: any, args: any): {
		type: Function,
		value: any
	};
		removeData(key?: String): void;
		replaceAll(query: String): any;
		replaceClass(addClassStr: String, removeClassStr?: String): void;
		replaceClass(addClassStr: any[], removeClassStr?: String): void;
		replaceClass(addClassStr: String, removeClassStr?: any[]): void;
		replaceClass(addClassStr: any[], removeClassStr?: any[]): void;
		replaceWith(content: String): any;
		replaceWith(content: HTMLElement): any;
		replaceWith(content: NodeList): any;
		siblings(query?: String): any;
		slice(begin: number, end?: number): any;
		slideTo(args?: Object): any;
		some(callback: Function, thisObject?: Object): any;
		splice(index: number, howmany?: number, item?: Object[]): any;
		style(property: String, value?: String): any;
		text(value: String): any;
		toggleClass(className: String, condition?: boolean): void;
		toggleClassFx(cssClass: any, force: any, args: any): {
		type: Function,
		value: any
	};
		toString(): any;
		val(value: String): any;
		val(value: any[]): any;
		wipeIn(args?: Object): any;
		wipeOut(args?: Object): any;
		wrap(html: String): any;
		wrap(html: HTMLElement): any;
		wrapAll(html: String): any;
		wrapAll(html: HTMLElement): any;
		wrapInner(html: String): any;
		wrapInner(html: HTMLElement): any
	}

	declare class Stateful  {
		constructor(): this;
		inherited: {
		(args: IArguments): any
	};
		get(name: String): any;
		postscript(params?: Object): void;
		set(name: String, value: Object): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	
}

declare module 'request' {
		declare interface handlers {
		(response: any): void
	}

	declare interface handlers {
		register(name: any, handler: any): void
	}

	declare interface iframe {
		(url: String, options?: dojo.request.iframe.___Options): void
	}

	declare interface iframe {
		create(name: any, onloadstr: any, uri: any): any,
		doc(iframeNode: any): any,
		get(
		url: String, options?: dojo.request.iframe.___BaseOptions
	): dojo.request.___Promise,
		post(
		url: String, options?: dojo.request.iframe.___BaseOptions
	): dojo.request.___Promise,
		setSrc(_iframe: any, src: any, replace: any): void
	}

	declare interface notify {
		(type?: String, listener?: Function): void
	}

	declare interface notify {
		emit(type: any, event: any, cancel: any): void
	}

	declare interface registry {
		(url: any, options: any): void
	}

	declare interface registry {
		load(id: any, parentRequire: any, loaded: any, config: any): void,
		register(url: any, provider: any, first: any): void
	}

	declare interface node {
		(url: String, options?: dojo.request.node.___Options): void
	}

	declare interface node {
		del(
		url: String, options?: dojo.request.node.___BaseOptions
	): dojo.request.___Promise,
		get(
		url: String, options?: dojo.request.node.___BaseOptions
	): dojo.request.___Promise,
		post(
		url: String, options?: dojo.request.node.___BaseOptions
	): dojo.request.___Promise,
		put(
		url: String, options?: dojo.request.node.___BaseOptions
	): dojo.request.___Promise
	}

	declare interface watch {
		(dfd: dojo.Deferred): void
	}

	declare interface watch {
		ioCheck: Function,
		resHandle: Function,
		validCheck: Function,
		cancelAll(): void
	}

	declare interface script {
		(url: String, options?: dojo.request.script.___Options): void
	}

	declare interface script {
		get(
		url: String, options?: dojo.request.script.___BaseOptions
	): dojo.request.___Promise
	}

	declare interface xhr {
		(url: String, options?: dojo.request.xhr.___Options): dojo.request.___Promise
	}

	declare interface xhr {
		del(
		url: String, options?: dojo.request.xhr.___BaseOptions
	): dojo.request.___Promise,
		get(
		url: String, options?: dojo.request.xhr.___BaseOptions
	): dojo.request.___Promise,
		post(
		url: String, options?: dojo.request.xhr.___BaseOptions
	): dojo.request.___Promise,
		put(
		url: String, options?: dojo.request.xhr.___BaseOptions
	): dojo.request.___Promise
	}

	declare interface default_ {
		getPlatformDefaultId(): void,
		load(id: any, parentRequire: any, loaded: any, config: any): void
	}

	declare interface util {
		addCommonMethods(provider: any, methods: any): void,
		checkStatus(stat: any): boolean,
		deepCopy(target: any, source: any): any,
		deepCreate(source: any, properties: any): any,
		deferred(
		response: Object, cancel: any, isValid: any, isReady: any, handleResponse: any, last: any
	): any,
		notify(type?: String, listener?: Function): any,
		parseArgs(url: any, options: any, skipData: any): Object
	}

		declare class ___BaseOptions  {
		constructor(): this;
		data: string;
		handleAs: string;
		preventCache: boolean;
		query: string;
		timeout: number
	}

	declare class ___MethodOptions  {
		constructor(): this;
		method: string
	}

	declare class ___Options  {
		constructor(): this;
		data: string;
		handleAs: string;
		method: string;
		preventCache: boolean;
		query: string;
		timeout: number
	}

	declare class ___Promise extends undefined$Promise<any> {
		constructor(): this;
		response: Object;
		always(callbackOrErrback: Function): any;
		cancel(reason: any, strict?: boolean): any;
		isCanceled(): boolean;
		isFulfilled(): boolean;
		isRejected(): boolean;
		isResolved(): boolean;
		otherwise(errback: Function): any;
		then(
		callback?: Function, errback?: Function, progback?: Function
	): dojo.promise.Promise<any>;
		toString(): String;
		trace(): dojo.promise.Promise<any>;
		traceRejected(): dojo.promise.Promise<any>
	}

	
}

declare module 'iframe' {
				declare class ___MethodOptions  {
		constructor(): this;
		method: string
	}

	declare class ___BaseOptions  {
		constructor(): this;
		data: string;
		form: HTMLElement;
		handleAs: string;
		preventCache: boolean;
		query: string;
		timeout: number
	}

	declare class ___Options  {
		constructor(): this;
		data: string;
		form: HTMLElement;
		handleAs: string;
		method: string;
		preventCache: boolean;
		query: string;
		timeout: number
	}

	
}

declare module 'node' {
				declare class ___MethodOptions  {
		constructor(): this;
		method: string
	}

	declare class ___Options  {
		constructor(): this;
		data: string;
		handleAs: string;
		headers: Object;
		method: string;
		password: string;
		preventCache: boolean;
		query: string;
		timeout: number;
		user: string
	}

	declare class ___BaseOptions  {
		constructor(): this;
		data: string;
		handleAs: string;
		headers: Object;
		password: string;
		preventCache: boolean;
		query: string;
		timeout: number;
		user: string
	}

	
}

declare module 'script' {
				declare class ___MethodOptions  {
		constructor(): this;
		method: string
	}

	declare class ___BaseOptions  {
		constructor(): this;
		checkString: string;
		data: string;
		frameDoc: Object;
		handleAs: string;
		jsonp: string;
		preventCache: boolean;
		query: string;
		timeout: number
	}

	declare class ___Options  {
		constructor(): this;
		checkString: string;
		data: string;
		frameDoc: Object;
		handleAs: string;
		jsonp: string;
		method: string;
		preventCache: boolean;
		query: string;
		timeout: number
	}

	
}

declare module 'xhr' {
		declare interface contentHandlers {
		auto(xhr: any): void,
		javascript(xhr: any): any,
		json(xhr: any): any,
		json_comment_filtered(xhr: any): any,
		json_comment_optional(xhr: any): any,
		olson_zoneinfo(xhr: any): void,
		text(xhr: any): any,
		xml(xhr: any): any
	}

		declare class ___BaseOptions  {
		constructor(): this;
		data: string;
		handleAs: string;
		headers: Object;
		password: string;
		preventCache: boolean;
		query: string;
		sync: boolean;
		timeout: number;
		user: string;
		withCredentials: boolean
	}

	declare class ___MethodOptions  {
		constructor(): this;
		method: string
	}

	declare class ___Options  {
		constructor(): this;
		data: string;
		handleAs: string;
		headers: Object;
		method: string;
		password: string;
		preventCache: boolean;
		query: string;
		sync: boolean;
		timeout: number;
		user: string;
		withCredentials: boolean
	}

	
}

declare module 'NodeList' {
		declare interface _nodeDataCache {
		
	}

			
}

declare module '_base' {
		declare interface declare {
		(className?: String, superclass?: any, props?: Object): any
	}

	declare interface declare {
		(className?: String, superclass?: any[], props?: Object): any
	}

	declare interface declare {
		safeMixin(target: Object, source: Object): Object
	}

	declare interface Deferred {
		(canceller?: Function): void
	}

	declare interface Deferred {
		fired: number,
		promise: Object,
		addBoth(callback: Function): any,
		addCallback(callback: Function): any,
		addCallbacks(callback?: Function, errback?: Function): any,
		addErrback(errback: Function): any,
		callback(value: any): void,
		cancel(): void,
		errback(error: any): void,
		isCanceled(): boolean,
		isFulfilled(): boolean,
		isRejected(): boolean,
		isResolved(): boolean,
		progress(update: any): void,
		reject(error: any): void,
		resolve(value: any): void,
		then(
		resolvedCallback?: Function, errorCallback?: Function, progressCallback?: Function
	): any,
		when(
		valueOrPromise?: any, callback?: Function, errback?: Function, progback?: Function
	): any
	}

	declare interface url {
		(): void
	}

	declare interface url {
		authority: Object,
		fragment: Object,
		host: Object,
		password: Object,
		path: Object,
		port: Object,
		query: Object,
		scheme: Object,
		uri: Object,
		user: Object,
		toString(): void
	}

	declare interface xhr {
		(method: String, args: Object, hasBody?: boolean): void
	}

	declare interface xhr {
		contentHandlers: Object,
		del(args: Object): any,
		fieldToObject(inputNode: HTMLElement): any,
		fieldToObject(inputNode: String): any,
		formToJson(formNode: HTMLElement, prettyPrint?: boolean): any,
		formToJson(formNode: String, prettyPrint?: boolean): any,
		formToObject(formNode: HTMLElement): Object,
		formToObject(formNode: String): Object,
		formToQuery(formNode: HTMLElement): any,
		formToQuery(formNode: String): any,
		get(args: Object): any,
		objectToQuery(map: Object): any,
		post(args: Object): any,
		put(args: Object): any,
		queryToObject(str: String): Object
	}

	declare interface browser {
		
	}

	declare interface array {
		clearCache(): void,
		every(arr: any[], callback: Function, thisObject?: Object): boolean,
		every(arr: String, callback: Function, thisObject?: Object): boolean,
		every(arr: any[], callback: String, thisObject?: Object): boolean,
		every(arr: String, callback: String, thisObject?: Object): boolean,
		filter(arr: any[], callback: Function, thisObject?: Object): any[],
		filter(arr: any[], callback: String, thisObject?: Object): any[],
		forEach(arr: any[], callback: Function, thisObject?: Object): void,
		forEach(arr: String, callback: Function, thisObject?: Object): void,
		forEach(arr: any[], callback: String, thisObject?: Object): void,
		forEach(arr: String, callback: String, thisObject?: Object): void,
		indexOf(arr: any[], value: Object, fromIndex?: number, findLast?: boolean): number,
		lastIndexOf(arr: any, value: any, fromIndex?: number): number,
		map(arr: any[], callback: Function, thisObject?: Object, Ctr?: any): any[],
		map(arr: String, callback: Function, thisObject?: Object, Ctr?: any): any[],
		map(arr: any[], callback: String, thisObject?: Object, Ctr?: any): any[],
		map(arr: String, callback: String, thisObject?: Object, Ctr?: any): any[],
		some(arr: any[], callback: Function, thisObject?: Object): boolean,
		some(arr: String, callback: Function, thisObject?: Object): boolean,
		some(arr: any[], callback: String, thisObject?: Object): boolean,
		some(arr: String, callback: String, thisObject?: Object): boolean
	}

	declare interface connect {
		connect(
		obj: Object, event: String, context: Object, method: String, dontFix?: boolean
	): any,
		connect(
		obj: Object, event: String, context: any, method: String, dontFix?: boolean
	): any,
		connect(
		obj: Object, event: String, context: Object, method: Function, dontFix?: boolean
	): any,
		connect(
		obj: Object, event: String, context: any, method: Function, dontFix?: boolean
	): any,
		connectPublisher(topic: String, obj: Object, event: String): any,
		disconnect(handle: Object): void,
		isCopyKey(e: Event): any,
		publish(topic: String, args?: any[]): any,
		subscribe(topic: String, context?: Object, method?: String): any,
		subscribe(topic: String, context?: Object, method?: Function): any,
		unsubscribe(handle: Object): void
	}

	declare interface event {
		fix(evt: Event, sender: HTMLElement): Event,
		stop(evt: Event): void
	}

	declare interface html {
		
	}

	declare interface json {
		
	}

	declare interface fx {
		anim(
		node: HTMLElement, properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number
	): any,
		anim(
		node: String, properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number
	): any,
		animateProperty(args?: Object): any,
		fadeIn(args: Object): any,
		fadeOut(args: Object): any
	}

	declare interface query {
		
	}

	declare interface NodeList {
		
	}

	declare interface sniff {
		
	}

	declare interface lang {
		clone(src: any): any,
		delegate(obj: Object, props: Object[]): any,
		exists(name: String, obj?: Object): boolean,
		extend(ctor: Object, props: Object): Object,
		getObject(name: String, create?: boolean, context?: Object): any,
		hitch(scope: Object, method: (...args: any[]) => any, ...args: any[]): any,
		hitch(scope: Object, method: string, ...args: any[]): any,
		isAlien(it: any): any,
		isArray(it: any): any,
		isArrayLike(it: any): any,
		isFunction(it: any): boolean,
		isObject(it: any): boolean,
		isString(it: any): boolean,
		mixin<T>(dest: T): T,
		mixin<T, U>(dest: T, source: U): T & U,
		mixin<T, U, V>(dest: T, source1: U, source2: V): T & U & V,
		mixin<T, U, V, W>(dest: T, source1: U, source2: V, source3: W): T & U & V & W,
		mixin<T>(dest: Object, ...sources: Object[]): T,
		partial(method: Function): any,
		partial(method: String): any,
		replace(tmpl: String, map: Object, pattern?: RegExp): String,
		replace(tmpl: String, map: Function, pattern?: RegExp): String,
		setObject(name: String, value: any, context?: Object): any,
		trim(str: String): String
	}

	declare interface unload {
		addOnUnload(obj?: Object, functionName?: String): void,
		addOnUnload(obj?: Function, functionName?: String): void,
		addOnUnload(obj?: Object, functionName?: Function): void,
		addOnUnload(obj?: Function, functionName?: Function): void,
		addOnWindowUnload(obj?: Object, functionName?: String): void,
		addOnWindowUnload(obj?: Function, functionName?: String): void,
		addOnWindowUnload(obj?: Object, functionName?: Function): void,
		addOnWindowUnload(obj?: Function, functionName?: Function): void
	}

	declare interface window {
		doc: Object,
		global: Object,
		body(doc?: HTMLDocument): any,
		setContext(globalObject: Object, globalDocument: HTMLDocument): void,
		withDoc(
		documentObject: HTMLDocument, callback: Function, thisObject?: Object, cbArguments?: any[]
	): any,
		withGlobal(
		globalObject: Object, callback: Function, thisObject?: Object, cbArguments?: any[]
	): any
	}

	declare interface kernel {
		back: Object,
		baseUrl: string,
		behavior: Object,
		cldr: Object,
		colors: Object,
		config: Object,
		connectPublisher: Object,
		contentHandlers: Object,
		currency: Object,
		data: Object,
		date: Object,
		dijit: Object,
		dnd: Object,
		doc: Object,
		dojox: Object,
		fx: Object,
		gears: Object,
		global: Object,
		html: Object,
		i18n: Object,
		io: Object,
		isAir: boolean,
		isAndroid: number,
		isAsync: boolean,
		isBrowser: boolean,
		isChrome: number,
		isCopyKey: Object,
		isFF: Object,
		isIE: number,
		isIos: number,
		isKhtml: number,
		isMac: boolean,
		isMoz: Object,
		isMozilla: Object,
		isOpera: number,
		isQuirks: boolean,
		isSafari: number,
		isSpidermonkey: boolean,
		isWebKit: number,
		isWii: boolean,
		keys: Object,
		locale: Object,
		mouseButtons: Object,
		number: Object,
		parser: string,
		publish: Object,
		query: Object,
		regexp: Object,
		rpc: Object,
		scopeMap: Object,
		store: Object,
		string: Object,
		subscribe: Object,
		tests: Object,
		toJsonIndentStr: string,
		touch: Object,
		version: Object,
		window: Object,
		AdapterRegistry(returnWrappers?: boolean): void,
		addClass(node: String, classStr: String): void,
		addClass(node: HTMLElement, classStr: String): void,
		addClass(node: String, classStr: any[]): void,
		addClass(node: HTMLElement, classStr: any[]): void,
		addOnLoad(priority: number, context: any, callback?: Function): void,
		addOnUnload(obj?: Object, functionName?: String): void,
		addOnUnload(obj?: Function, functionName?: String): void,
		addOnUnload(obj?: Object, functionName?: Function): void,
		addOnUnload(obj?: Function, functionName?: Function): void,
		addOnWindowUnload(obj?: Object, functionName?: String): void,
		addOnWindowUnload(obj: Object, functionName: Function): void,
		anim(
		node: HTMLElement, properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number
	): any,
		anim(
		node: String, properties: Object, duration?: number, easing?: Function, onEnd?: Function, delay?: number
	): any,
		animateProperty(args: Object): any,
		Animation(args: Object): void,
		attr(node: HTMLElement, name: String, value?: String): any,
		attr(node: String, name: String, value?: String): any,
		attr(node: HTMLElement, name: Object, value?: String): any,
		attr(node: String, name: Object, value?: String): any,
		blendColors(
		start: dojo._base.Color, end: dojo._base.Color, weight: number, obj?: dojo._base.Color
	): any,
		body(doc?: HTMLDocument): any,
		byId(id: String, doc?: HTMLDocument): any,
		byId(id: HTMLElement, doc?: HTMLDocument): any,
		cache(module: String, url: String, value?: String): any,
		cache(module: Object, url: String, value?: String): any,
		cache(module: String, url: String, value?: Object): any,
		cache(module: Object, url: String, value?: Object): any,
		clearCache(): void,
		Color(color: any[]): void,
		Color(color: String): void,
		Color(color: Object): void,
		colorFromArray(a: any[], obj?: dojo._base.Color): any,
		colorFromHex(color: String, obj?: dojo._base.Color): any,
		colorFromRgb(color: String, obj?: dojo._base.Color): any,
		colorFromString(str: String, obj?: dojo._base.Color): any,
		connect(
		obj: Object, event: String, context: Object, method: String, dontFix?: boolean
	): any,
		connect(
		obj: Object, event: String, context: any, method: String, dontFix?: boolean
	): any,
		connect(
		obj: Object, event: String, context: Object, method: Function, dontFix?: boolean
	): any,
		connect(
		obj: Object, event: String, context: any, method: Function, dontFix?: boolean
	): any,
		contentBox(node: HTMLElement, box?: Object): any,
		contentBox(node: String, box?: Object): any,
		cookie(name: String, value?: String, props?: Object): any,
		coords(node: HTMLElement, includeScroll?: boolean): any,
		coords(node: String, includeScroll?: boolean): any,
		create(tag: HTMLElement, attrs: Object, refNode?: HTMLElement, pos?: String): any,
		create(tag: String, attrs: Object, refNode?: HTMLElement, pos?: String): any,
		create(tag: HTMLElement, attrs: Object, refNode?: String, pos?: String): any,
		create(tag: String, attrs: Object, refNode?: String, pos?: String): any,
		declare(
		className: String, superclass: Function, props: Object
	): dojo._base.declare.___DeclareCreatedObject,
		declare(
		className: String, superclass: Function[], props: Object
	): dojo._base.declare.___DeclareCreatedObject,
		Deferred(canceller: Function): void,
		DeferredList(
		list: any[], fireOnOneCallback?: boolean, fireOnOneErrback?: boolean, consumeErrors?: boolean, canceller?: Function
	): void,
		deprecated(behaviour: String, extra?: String, removal?: String): void,
		destroy(node: any): void,
		disconnect(handle: Object): void,
		docScroll(doc?: HTMLDocument): Object,
		empty(node: any): void,
		eval(scriptText: any): any,
		every(arr: any[], callback: Function, thisObject?: Object): boolean,
		every(arr: String, callback: Function, thisObject?: Object): boolean,
		every(arr: any[], callback: String, thisObject?: Object): boolean,
		every(arr: String, callback: String, thisObject?: Object): boolean,
		exit(exitcode: any): void,
		experimental(moduleName: String, extra?: String): void,
		fadeIn(args: Object): any,
		fadeOut(args: Object): any,
		fieldToObject(inputNode: HTMLElement): Object,
		fieldToObject(inputNode: String): Object,
		filter(arr: any[], callback: Function, thisObject?: Object): any[],
		filter(arr: any[], callback: String, thisObject?: Object): any[],
		fixEvent(evt: Event, sender: HTMLElement): Event,
		fixIeBiDiScrollLeft(scrollLeft: number, doc?: HTMLDocument): number,
		forEach(arr: any[], callback: Function, thisObject?: Object): void,
		forEach(arr: String, callback: Function, thisObject?: Object): void,
		forEach(arr: any[], callback: String, thisObject?: Object): void,
		forEach(arr: String, callback: String, thisObject?: Object): void,
		formToJson(formNode: HTMLElement, prettyPrint?: boolean): String,
		formToJson(formNode: String, prettyPrint?: boolean): String,
		formToObject(formNode: HTMLElement): Object,
		formToObject(formNode: String): Object,
		formToQuery(formNode: HTMLElement): String,
		formToQuery(formNode: String): String,
		fromJson(js: String): any,
		getAttr(node: HTMLElement, name: String): any,
		getAttr(node: String, name: String): any,
		getBorderExtents(node: HTMLElement, computedStyle?: Object): Object,
		getComputedStyle(node: HTMLElement): void,
		getContentBox(node: HTMLElement, computedStyle?: Object): Object,
		getIeDocumentElementOffset(doc?: HTMLDocument): Object,
		getL10nName(moduleName: any, bundleName: any, locale: any): String,
		getMarginBox(node: HTMLElement, computedStyle?: Object): Object,
		getMarginExtents(node: HTMLElement, computedStyle?: Object): Object,
		getMarginSize(node: HTMLElement, computedStyle?: Object): Object,
		getMarginSize(node: String, computedStyle?: Object): Object,
		getNodeProp(node: HTMLElement, name: String): any,
		getNodeProp(node: String, name: String): any,
		getPadBorderExtents(node: HTMLElement, computedStyle?: Object): Object,
		getPadExtents(node: HTMLElement, computedStyle?: Object): Object,
		getProp(node: HTMLElement, name: String): any,
		getProp(node: String, name: String): any,
		getStyle(node: HTMLElement, name?: String): any,
		getStyle(node: String, name?: String): any,
		hasAttr(node: HTMLElement, name: String): boolean,
		hasAttr(node: String, name: String): boolean,
		hasClass(node: String, classStr: String): boolean,
		hasClass(node: HTMLElement, classStr: String): boolean,
		hash(hash?: String, replace?: boolean): any,
		indexOf(arr: any[], value: Object, fromIndex?: number, findLast?: boolean): number,
		isBodyLtr(doc?: HTMLDocument): boolean,
		isDescendant(node: HTMLElement, ancestor: HTMLElement): boolean,
		isDescendant(node: String, ancestor: HTMLElement): boolean,
		isDescendant(node: HTMLElement, ancestor: String): boolean,
		isDescendant(node: String, ancestor: String): boolean,
		lastIndexOf(arr: any, value: any, fromIndex?: number): number,
		loadInit(f: any): void,
		map(arr: any[], callback: Function, thisObject: Object, Ctr: any): any[],
		map(arr: String, callback: Function, thisObject: Object, Ctr: any): any[],
		map(arr: any[], callback: String, thisObject: Object, Ctr: any): any[],
		map(arr: String, callback: String, thisObject: Object, Ctr: any): any[],
		marginBox(node: HTMLElement, box?: Object): any,
		marginBox(node: String, box?: Object): any,
		moduleUrl(module: String, url?: String): String,
		NodeList(array: any): any[],
		objectToQuery(map: Object): any,
		place(node: HTMLElement, refNode: HTMLElement, position?: String): HTMLElement,
		place(node: String, refNode: HTMLElement, position?: String): HTMLElement,
		place(node: HTMLElement, refNode: String, position?: String): HTMLElement,
		place(node: String, refNode: String, position?: String): HTMLElement,
		place(node: HTMLElement, refNode: HTMLElement, position?: number): HTMLElement,
		place(node: String, refNode: HTMLElement, position?: number): HTMLElement,
		place(node: HTMLElement, refNode: String, position?: number): HTMLElement,
		place(node: String, refNode: String, position?: number): HTMLElement,
		platformRequire(modMap: Object): void,
		popContext(): void,
		position(node: HTMLElement, includeScroll?: boolean): Object,
		position(node: String, includeScroll?: boolean): Object,
		prop(node: HTMLElement, name: String, value?: String): any,
		prop(node: String, name: String, value?: String): any,
		prop(node: HTMLElement, name: Object, value?: String): any,
		prop(node: String, name: Object, value?: String): any,
		provide(mid: any): void,
		pushContext(g?: Object, d?: HTMLDocument): void,
		pushContext(g?: String, d?: HTMLDocument): void,
		queryToObject(str: String): Object,
		rawXhrPost(args: Object): any,
		rawXhrPut(args: Object): any,
		ready(priority: number, context: any, callback?: Function): void,
		registerModulePath(moduleName: String, prefix: String): void,
		removeAttr(node: HTMLElement, name: String): void,
		removeAttr(node: String, name: String): void,
		removeClass(node: String, classStr?: String): void,
		removeClass(node: HTMLElement, classStr?: String): void,
		removeClass(node: String, classStr?: any[]): void,
		removeClass(node: HTMLElement, classStr?: any[]): void,
		replaceClass(node: String, addClassStr: String, removeClassStr?: String): void,
		replaceClass(node: HTMLElement, addClassStr: String, removeClassStr?: String): void,
		replaceClass(node: String, addClassStr: any[], removeClassStr?: String): void,
		replaceClass(node: HTMLElement, addClassStr: any[], removeClassStr?: String): void,
		replaceClass(node: String, addClassStr: String, removeClassStr?: any[]): void,
		replaceClass(node: HTMLElement, addClassStr: String, removeClassStr?: any[]): void,
		replaceClass(node: String, addClassStr: any[], removeClassStr?: any[]): void,
		replaceClass(node: HTMLElement, addClassStr: any[], removeClassStr?: any[]): void,
		require(moduleName: String, omitModuleCheck: boolean): any,
		requireAfterIf(condition: boolean, moduleName: String, omitModuleCheck?: boolean): void,
		requireIf(condition: boolean, moduleName: String, omitModuleCheck?: boolean): void,
		requireLocalization(moduleName: String, bundleName: String, locale?: String): void,
		safeMixin(target: Object, source: Object): Object,
		setAttr(node: HTMLElement, name: String, value?: String): any,
		setAttr(node: String, name: String, value?: String): any,
		setAttr(node: HTMLElement, name: Object, value?: String): any,
		setAttr(node: String, name: Object, value?: String): any,
		setContentSize(node: HTMLElement, box: Object, computedStyle?: Object): void,
		setContext(globalObject: Object, globalDocument: HTMLDocument): void,
		setMarginBox(node: HTMLElement, box: Object, computedStyle?: Object): void,
		setProp(node: HTMLElement, name: String, value?: String): any,
		setProp(node: String, name: String, value?: String): any,
		setProp(node: HTMLElement, name: Object, value?: String): any,
		setProp(node: String, name: Object, value?: String): any,
		setSelectable(node: any, selectable: any): void,
		setStyle(node: HTMLElement, name: String, value?: String): String,
		setStyle(node: String, name: String, value?: String): String,
		setStyle(node: HTMLElement, name: Object, value?: String): String,
		setStyle(node: String, name: Object, value?: String): String,
		some(arr: any[], callback: Function, thisObject?: Object): boolean,
		some(arr: String, callback: Function, thisObject?: Object): boolean,
		some(arr: any[], callback: String, thisObject?: Object): boolean,
		some(arr: String, callback: String, thisObject?: Object): boolean,
		Stateful(): void,
		stopEvent(evt: Event): void,
		style(node: HTMLElement, name?: String, value?: String): any,
		style(node: String, name?: String, value?: String): any,
		style(node: HTMLElement, name?: Object, value?: String): any,
		style(node: String, name?: Object, value?: String): any,
		toDom(frag: String, doc?: HTMLDocument): any,
		toggleClass(node: String, classStr: String, condition: boolean): boolean,
		toggleClass(node: HTMLElement, classStr: String, condition: boolean): boolean,
		toggleClass(node: String, classStr: any[], condition: boolean): boolean,
		toggleClass(node: HTMLElement, classStr: any[], condition: boolean): boolean,
		toJson(it: Object, prettyPrint?: boolean): any,
		toPixelValue(node: HTMLElement, value: String): number,
		unsubscribe(handle: Object): void,
		when(
		valueOrPromise: any, callback?: Function, errback?: Function, progback?: Function
	): dojo.promise.Promise<any>,
		windowUnloaded(): void,
		withDoc(
		documentObject: HTMLDocument, callback: Function, thisObject?: Object, cbArguments?: any[]
	): any,
		withGlobal(
		globalObject: Object, callback: Function, thisObject?: Object, cbArguments?: any[]
	): any,
		xhr(method: any, args: any): any,
		xhrDelete(args: Object): any,
		xhrGet(args: Object): any,
		xhrPost(args: Object): any,
		xhrPut(args: Object): any
	}

		declare class config  {
		constructor(): this;
		addOnLoad: Function;
		afterOnLoad: boolean;
		baseUrl: Object;
		callback: Function;
		debugContainerId: string;
		debugHeight: number;
		defaultDuration: number;
		deferredInstrumentation: boolean;
		deps: Function;
		dojoBlankHtmlUrl: string;
		extraLocale: any[];
		ioPublish: Object;
		isDebug: boolean;
		locale: string;
		modulePaths: Object;
		parseOnLoad: boolean;
		require: Object;
		transparentColor: any[];
		urchin: string;
		useCustomLogger: Object;
		useDeferredInstrumentation: boolean
	}

	declare class Color  {
		constructor(color: any[]): this;
		a: number;
		b: number;
		g: number;
		named: Object;
		r: number;
		blendColors(
		start: dojo._base.Color, end: dojo._base.Color, weight: number, obj?: dojo._base.Color
	): any;
		fromArray(a: any[], obj?: dojo._base.Color): any;
		fromHex(color: String, obj?: dojo._base.Color): any;
		fromRgb(color: String, obj?: dojo._base.Color): any;
		fromString(str: String, obj?: dojo._base.Color): any;
		makeGrey(g: number, a?: number): void;
		sanitize(): void;
		setColor(color: any[]): Function;
		setColor(color: String): Function;
		setColor(color: Object): Function;
		toCmy(): Object;
		toCmyk(): Object;
		toCss(includeAlpha?: boolean): String;
		toHex(): String;
		toHsl(): Object;
		toHsv(): Object;
		toRgb(): any[];
		toRgba(): any[];
		toString(): any
	}

	
}

declare module 'declare' {
				declare class ___DeclareCreatedObject  {
		constructor(): this;
		createSubclass(mixins: Function[], props?: Object): dojo._base.declare.___DeclareCreatedObject;
		extend(source: Object): void;
		getInherited(name?: String, args?: Object): any;
		inherited(name?: String, args?: Object, newArgs?: Object): any;
		isInstanceOf(cls: Function): any
	}

	
}

declare module 'url' {
		declare interface authority {
		
	}

	declare interface password {
		
	}

	declare interface port {
		
	}

	declare interface fragment {
		
	}

	declare interface query {
		
	}

	declare interface user {
		
	}

	declare interface scheme {
		
	}

			
}

declare module 'config' {
		declare interface modulePaths {
		
	}

			
}

declare module 'Color' {
		declare interface named {
		aliceblue: any[],
		antiquewhite: any[],
		aqua: any[],
		aquamarine: any[],
		azure: any[],
		beige: any[],
		bisque: any[],
		black: any[],
		blanchedalmond: any[],
		blue: any[],
		blueviolet: any[],
		brown: any[],
		burlywood: any[],
		cadetblue: any[],
		chartreuse: any[],
		chocolate: any[],
		coral: any[],
		cornflowerblue: any[],
		cornsilk: any[],
		crimson: any[],
		cyan: any[],
		darkblue: any[],
		darkcyan: any[],
		darkgoldenrod: any[],
		darkgray: any[],
		darkgreen: any[],
		darkgrey: any[],
		darkkhaki: any[],
		darkmagenta: any[],
		darkolivegreen: any[],
		darkorange: any[],
		darkorchid: any[],
		darkred: any[],
		darksalmon: any[],
		darkseagreen: any[],
		darkslateblue: any[],
		darkslategray: any[],
		darkslategrey: any[],
		darkturquoise: any[],
		darkviolet: any[],
		deeppink: any[],
		deepskyblue: any[],
		dimgray: any[],
		dimgrey: any[],
		dodgerblue: any[],
		firebrick: any[],
		floralwhite: any[],
		forestgreen: any[],
		fuchsia: any[],
		gainsboro: any[],
		ghostwhite: any[],
		gold: any[],
		goldenrod: any[],
		gray: any[],
		green: any[],
		greenyellow: any[],
		grey: any[],
		honeydew: any[],
		hotpink: any[],
		indianred: any[],
		indigo: any[],
		ivory: any[],
		khaki: any[],
		lavender: any[],
		lavenderblush: any[],
		lawngreen: any[],
		lemonchiffon: any[],
		lightblue: any[],
		lightcoral: any[],
		lightcyan: any[],
		lightgoldenrodyellow: any[],
		lightgray: any[],
		lightgreen: any[],
		lightgrey: any[],
		lightpink: any[],
		lightsalmon: any[],
		lightseagreen: any[],
		lightskyblue: any[],
		lightslategray: any[],
		lightslategrey: any[],
		lightsteelblue: any[],
		lightyellow: any[],
		lime: any[],
		limegreen: any[],
		linen: any[],
		magenta: any[],
		maroon: any[],
		mediumaquamarine: any[],
		mediumblue: any[],
		mediumorchid: any[],
		mediumpurple: any[],
		mediumseagreen: any[],
		mediumslateblue: any[],
		mediumspringgreen: any[],
		mediumturquoise: any[],
		mediumvioletred: any[],
		midnightblue: any[],
		mintcream: any[],
		mistyrose: any[],
		moccasin: any[],
		navajowhite: any[],
		navy: any[],
		oldlace: any[],
		olive: any[],
		olivedrab: any[],
		orange: any[],
		orangered: any[],
		orchid: any[],
		palegoldenrod: any[],
		palegreen: any[],
		paleturquoise: any[],
		palevioletred: any[],
		papayawhip: any[],
		peachpuff: any[],
		peru: any[],
		pink: any[],
		plum: any[],
		powderblue: any[],
		purple: any[],
		red: any[],
		rosybrown: any[],
		royalblue: any[],
		saddlebrown: any[],
		salmon: any[],
		sandybrown: any[],
		seagreen: any[],
		seashell: any[],
		sienna: any[],
		silver: any[],
		skyblue: any[],
		slateblue: any[],
		slategray: any[],
		slategrey: any[],
		snow: any[],
		springgreen: any[],
		steelblue: any[],
		tan: any[],
		teal: any[],
		thistle: any[],
		tomato: any[],
		transparent: Object,
		turquoise: any[],
		violet: any[],
		wheat: any[],
		white: any[],
		whitesmoke: any[],
		yellow: any[],
		yellowgreen: any[]
	}

			
}

declare module 'fx' {
		declare interface Animation {
		
	}

	declare interface easing {
		backIn(n?: number): number,
		backInOut(n?: number): number,
		backOut(n?: number): number,
		bounceIn(n?: number): number,
		bounceInOut(n?: number): number,
		bounceOut(n?: number): number,
		circIn(n?: number): number,
		circInOut(n?: number): number,
		circOut(n?: number): any,
		cubicIn(n?: number): any,
		cubicInOut(n?: number): number,
		cubicOut(n?: number): number,
		elasticIn(n?: number): number,
		elasticInOut(n?: number): number,
		elasticOut(n?: number): number,
		expoIn(n?: number): any,
		expoInOut(n?: number): number,
		expoOut(n?: number): number,
		linear(n?: number): number,
		quadIn(n?: number): any,
		quadInOut(n?: number): number,
		quadOut(n?: number): number,
		quartIn(n?: number): any,
		quartInOut(n?: number): number,
		quartOut(n?: number): number,
		quintIn(n?: number): any,
		quintInOut(n?: number): number,
		quintOut(n?: number): number,
		sineIn(n?: number): number,
		sineInOut(n?: number): number,
		sineOut(n?: number): any
	}

		declare class Toggler  {
		constructor(args: any): this;
		hideDuration: number;
		node: HTMLElement;
		showDuration: number;
		hide(delay?: number): any;
		hideFunc(args: Object): any;
		show(delay?: number): any;
		showFunc(args: Object): any
	}

	
}

declare module 'window' {
		declare interface doc {
		documentElement: Object,
		dojoClick: boolean
	}

	declare interface global {
		$(): any,
		GoogleSearchStoreCallback_undefined_NaN(start: any, data: any, responseCode: any, errorMsg: any): void,
		jQuery(): any,
		swfIsInHTML(): void,
		undefined_onload(): void
	}

			
}

declare module 'kernel' {
		declare interface _contentHandlers {
		auto(xhr: any): void,
		javascript(xhr: any): any,
		json(xhr: any): any,
		json_comment_filtered(xhr: any): any,
		json_comment_optional(xhr: any): any,
		olson_zoneinfo(xhr: any): void,
		text(xhr: any): any,
		xml(xhr: any): any
	}

	declare interface _hasResource {
		
	}

	declare interface _nodeDataCache {
		
	}

	declare interface back {
		addToHistory(args: Object): void,
		getHash(): any,
		goBack(): void,
		goForward(): void,
		init(): void
	}

	declare interface cldr {
		monetary: Object,
		supplemental: Object
	}

	declare interface colors {
		makeGrey(g: number, a?: number): void
	}

	declare interface config {
		addOnLoad: Function,
		afterOnLoad: boolean,
		baseUrl: Object,
		callback: Function,
		debugContainerId: string,
		debugHeight: number,
		defaultDuration: number,
		deferredInstrumentation: boolean,
		deps: Function,
		dojoBlankHtmlUrl: string,
		extraLocale: any[],
		ioPublish: Object,
		isDebug: boolean,
		locale: string,
		modulePaths: Object,
		parseOnLoad: boolean,
		require: Object,
		transparentColor: any[],
		urchin: string,
		useCustomLogger: Object,
		useDeferredInstrumentation: boolean
	}

	declare interface contentHandlers {
		auto(xhr: any): void,
		javascript(xhr: any): any,
		json(xhr: any): any,
		json_comment_filtered(xhr: any): any,
		json_comment_optional(xhr: any): any,
		olson_zoneinfo(xhr: any): void,
		text(xhr: any): any,
		xml(xhr: any): any
	}

	declare interface dnd {
		autoscroll: Object,
		move: Object,
		AutoSource(): void,
		Avatar(): void,
		Container(): void,
		Manager(): void,
		Moveable(): void,
		Mover(): void,
		Selector(): void,
		Source(): void,
		Target(): void,
		TimedMoveable(): void
	}

	declare interface date {
		stamp: Object,
		add(date: Date, interval: String, amount: number): any,
		compare(date1: Date, date2?: Date, portion?: String): number,
		difference(date1: Date, date2?: Date, interval?: String): any,
		getDaysInMonth(dateObject: Date): number,
		getTimezoneName(dateObject: Date): any,
		isLeapYear(dateObject: Date): boolean
	}

	declare interface doc {
		documentElement: Object,
		dojoClick: boolean
	}

	declare interface data {
		api: Object,
		util: Object,
		ItemFileReadStore(): void,
		ItemFileWriteStore(): void,
		ObjectStore(): void
	}

	declare interface currency {
		format(value: number, options: dojo.currency.___FormatOptions): any,
		parse(expression: String, options?: Object): any,
		regexp(options: Object): any
	}

	declare interface dijit {
		form: Object,
		layout: Object,
		range: Object,
		registry: Object,
		tree: Object,
		byId(id: any): any,
		Calendar(): void,
		CalendarLite(): void,
		CheckedMenuItem(): void,
		ColorPalette(): void,
		Declaration(): void,
		Destroyable(): void,
		Dialog(): void,
		DialogUnderlay(): void,
		DropDownMenu(): void,
		Dye(): void,
		Editor(): void,
		Fieldset(): void,
		InlineEditBox(): void,
		Menu(): void,
		MenuBar(): void,
		MenuBarItem(): void,
		MenuItem(): void,
		MenuSeparator(): void,
		PopupMenuBarItem(): void,
		PopupMenuItem(): void,
		ProgressBar(): void,
		RadioButtonMenuItem(): void,
		TitlePane(): void,
		Toolbar(): void,
		ToolbarSeparator(): void,
		Tooltip(): void,
		TooltipDialog(): void,
		Tree(): void,
		WidgetSet(): void
	}

	declare interface global {
		$(): any,
		GoogleSearchStoreCallback_undefined_NaN(start: any, data: any, responseCode: any, errorMsg: any): void,
		jQuery(): any,
		swfIsInHTML(): void,
		undefined_onload(): void
	}

	declare interface gears {
		available: Object
	}

	declare interface fx {
		easing: Object,
		chain(animations: dojo._base.fx.Animation[]): any,
		combine(animations: dojo._base.fx.Animation[]): any,
		slideTo(args: Object): any,
		Toggler(): void,
		wipeIn(args: Object): any,
		wipeOut(args: Object): any
	}

	declare interface html {
		set(node: HTMLElement, cont: String, params?: Object): any,
		set(node: HTMLElement, cont: HTMLElement, params?: Object): any,
		set(node: HTMLElement, cont: NodeList, params?: Object): any
	}

	declare interface io {
		iframe: Object,
		script: Object
	}

	declare interface dojox {
		analytics: Object,
		app: Object,
		atom: Object,
		av: Object,
		BidiComplex: Object,
		calc: Object,
		calendar: Object,
		charting: Object,
		collections: Object,
		color: Object,
		css3: Object,
		data: Object,
		date: Object,
		dgauges: Object,
		dnd: Object,
		drawing: Object,
		dtl: Object,
		editor: Object,
		embed: Object,
		encoding: Object,
		enhanced: Object,
		flash: Object,
		form: Object,
		fx: Object,
		gantt: Object,
		gauges: Object,
		geo: Object,
		gesture: Object,
		gfx: Object,
		gfx3d: Object,
		grid: Object,
		help: Object,
		highlight: Object,
		html: Object,
		image: Object,
		io: Object,
		jq: Object,
		json: Object,
		jsonPath: Object,
		lang: Object,
		layout: Object,
		math: Object,
		mdnd: Object,
		mobile: Object,
		mvc: Object,
		openlayers: Object,
		rails: Object,
		robot: Object,
		rpc: Object,
		secure: Object,
		sketch: Object,
		sql: Object,
		string: Object,
		testing: Object,
		timing: Object,
		treemap: Object,
		uuid: Object,
		validate: Object,
		widget: Object,
		xml: Object,
		socket(argsOrUrl: Object): any,
		sprintf(format: String, filler: any): void
	}

	declare interface i18n {
		cache: Object,
		dynamic: boolean,
		unitTests: any[],
		getL10nName(moduleName: any, bundleName: any, locale: any): String,
		getLocalization(moduleName: any, bundleName: any, locale: any): any,
		load(id: any, require: any, load: any): void,
		normalize(id: any, toAbsMid: any): any,
		normalizeLocale(locale: any): any
	}

	declare interface mouseButtons {
		LEFT: number,
		MIDDLE: number,
		RIGHT: number,
		isButton(e: Event, button: number): boolean,
		isLeft(e: Event): boolean,
		isMiddle(e: Event): boolean,
		isRight(e: Event): boolean
	}

	declare interface rpc {
		JsonpService(): void,
		JsonService(): void,
		RpcService(): void
	}

	declare interface regexp {
		buildGroupRE(arr: Object, re: Function, nonCapture?: boolean): any,
		buildGroupRE(arr: any[], re: Function, nonCapture?: boolean): any,
		escapeString(str: String, except?: String): any,
		group(expression: String, nonCapture?: boolean): String
	}

	declare interface number_ {
		format(value: number, options?: Object): any,
		parse(expression: String, options?: Object): number,
		regexp(options: Object): any,
		round(value: number, places?: number, increment?: number): number
	}

	declare interface scopeMap {
		dijit: any[],
		dojo: any[],
		dojox: any[]
	}

	declare interface tests {
		
	}

	declare interface keys {
		ALT: number,
		BACKSPACE: number,
		CAPS_LOCK: number,
		CLEAR: number,
		copyKey: number,
		CTRL: number,
		DELETE: number,
		DOWN_ARROW: number,
		DOWN_DPAD: number,
		END: number,
		ENTER: number,
		ESCAPE: number,
		F1: number,
		F10: number,
		F11: number,
		F12: number,
		F13: number,
		F14: number,
		F15: number,
		F2: number,
		F3: number,
		F4: number,
		F5: number,
		F6: number,
		F7: number,
		F8: number,
		F9: number,
		HELP: number,
		HOME: number,
		INSERT: number,
		LEFT_ARROW: number,
		LEFT_DPAD: number,
		LEFT_WINDOW: number,
		META: number,
		NUM_LOCK: number,
		NUMPAD_0: number,
		NUMPAD_1: number,
		NUMPAD_2: number,
		NUMPAD_3: number,
		NUMPAD_4: number,
		NUMPAD_5: number,
		NUMPAD_6: number,
		NUMPAD_7: number,
		NUMPAD_8: number,
		NUMPAD_9: number,
		NUMPAD_DIVIDE: number,
		NUMPAD_ENTER: number,
		NUMPAD_MINUS: number,
		NUMPAD_MULTIPLY: number,
		NUMPAD_PERIOD: number,
		NUMPAD_PLUS: number,
		PAGE_DOWN: number,
		PAGE_UP: number,
		PAUSE: number,
		RIGHT_ARROW: number,
		RIGHT_DPAD: number,
		RIGHT_WINDOW: number,
		SCROLL_LOCK: number,
		SELECT: number,
		SHIFT: number,
		SPACE: number,
		TAB: number,
		UP_ARROW: number,
		UP_DPAD: number
	}

	declare interface store {
		util: Object,
		Cache(masterStore: any, cachingStore: any, options: any): any,
		DataStore(): void,
		JsonRest(): void,
		Memory(): void,
		Observable(store: dojo.store.api.Store): any
	}

	declare interface string_ {
		pad(text: String, size: number, ch?: String, end?: boolean): number,
		rep(str: String, num: number): String,
		substitute(template: String, map: Object, transform?: Function, thisObject?: Object): any,
		substitute(template: String, map: any[], transform?: Function, thisObject?: Object): any,
		trim(str: String): String
	}

	declare interface version {
		flag: string,
		major: number,
		minor: number,
		patch: number,
		revision: number,
		toString(): String
	}

	declare interface touch {
		cancel(node: HTMLElement, listener: Function): any,
		enter(node: HTMLElement, listener: Function): any,
		leave(node: HTMLElement, listener: Function): any,
		move(node: HTMLElement, listener: Function): any,
		out(node: HTMLElement, listener: Function): any,
		over(node: HTMLElement, listener: Function): any,
		press(node: HTMLElement, listener: Function): any,
		release(node: HTMLElement, listener: Function): any
	}

	declare interface window {
		get(doc: HTMLDocument): any,
		getBox(doc?: HTMLDocument): Object,
		scrollIntoView(node: HTMLElement, pos?: Object): void
	}

		declare class ___IoCallbackArgs  {
		constructor(): this;
		args: Object;
		canDelete: boolean;
		handleAs: string;
		id: string;
		json: Object;
		query: string;
		url: string;
		xhr: Object
	}

	declare class ___IoPublish  {
		constructor(): this;
		done: string;
		error: string;
		load: string;
		send: string;
		start: string;
		stop: string
	}

	declare class ___IoArgs  {
		constructor(): this;
		content: Object;
		form: HTMLElement;
		handleAs: string;
		ioPublish: boolean;
		preventCache: boolean;
		rawBody: string;
		timeout: number;
		url: string;
		error(response: Object, ioArgs: dojo.main.___IoCallbackArgs): void;
		handle(
		loadOrError: String, response: Object, ioArgs: dojo.main.___IoCallbackArgs
	): void;
		load(response: Object, ioArgs: dojo.main.___IoCallbackArgs): void
	}

	declare class ___XhrArgs  {
		constructor(): this;
		content: Object;
		contentType: string;
		failOk: boolean;
		form: HTMLElement;
		handleAs: string;
		headers: Object;
		ioPublish: boolean;
		preventCache: boolean;
		rawBody: string;
		sync: boolean;
		timeout: number;
		url: string;
		error(response: Object, ioArgs: dojo.main.___IoCallbackArgs): void;
		handle(
		loadOrError: String, response: Object, ioArgs: dojo.main.___IoCallbackArgs
	): void;
		load(response: Object, ioArgs: dojo.main.___IoCallbackArgs): void
	}

	declare class Stateful  {
		constructor(): this;
		get(name: String): any;
		postscript(params?: Object): void;
		set(name: String, value: Object): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	
}

declare module 'cldr' {
		declare interface monetary {
		getData(code: String): Object
	}

	declare interface supplemental {
		getFirstDayOfWeek(locale?: String): number,
		getWeekend(locale?: String): Object
	}

			
}

declare module 'data' {
				declare class ItemFileReadStore extends dojo$Evented {
		constructor(keywordParameters: Object): this;
		clearOnClose: boolean;
		data: Object;
		failOk: boolean;
		hierarchical: boolean;
		typeMap: Object;
		url: string;
		urlPreventCache: boolean;
		close(request?: dojo.data.api.Request): void;
		close(request?: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
		emit(type: any, event: any): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: Object): void;
		filter(requestArgs: Object, arrayOfItems: any[], findCallback: Function): void;
		getAttributes(item: dojo.data.api.Item): any[];
		getFeatures(): any;
		getIdentity(item: dojo.data.api.Item): any;
		getIdentityAttributes(item: dojo.data.api.Item): any;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue?: any): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): boolean;
		isItem(something: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void;
		on(type: any, listener: any): any
	}

	declare class ObjectStore extends dojo$Evented {
		constructor(options: any): this;
		labelProperty: string;
		objectStore: Object;
		changing(object: Object, _deleting: boolean): void;
		close(request: any): any;
		containsValue(item: Object, attribute: String, value: any): boolean;
		deleteItem(item: any): void;
		emit(type: any, event: any): any;
		fetch(args: any): any;
		fetchItemByIdentity(args: any): any;
		getAttributes(item: Object): any[];
		getFeatures(): Object;
		getIdentity(item: any): any;
		getIdentityAttributes(item: any): any[];
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any[];
		getValue(item: Object, property: String, defaultValue?: any): any;
		getValues(item: Object, property: String): any[];
		hasAttribute(item: Object, attribute: String): boolean;
		isDirty(item: Object): any;
		isItem(item: Object): boolean;
		isItemLoaded(item: Object): any;
		loadItem(args: Object): any;
		newItem(data: Object, parentInfo: any): Object;
		on(type: any, listener: any): any;
		revert(): void;
		save(kwArgs: any): void;
		setValue(item: any, attribute: any, value: any): void;
		setValues(item: any, attribute: any, values: any): void;
		unsetAttribute(item: any, attribute: any): void;
		onDelete(): void;
		onFetch(results: any): void;
		onNew(): void;
		onSet(): void
	}

	declare class ItemFileWriteStore extends undefined$ItemFileReadStore {
		constructor(keywordParameters: Object): this;
		clearOnClose: boolean;
		data: Object;
		failOk: boolean;
		hierarchical: boolean;
		referenceIntegrity: boolean;
		typeMap: Object;
		url: string;
		urlPreventCache: boolean;
		close(request?: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): any;
		deleteItem(item: dojo.data.api.Item): boolean;
		emit(type: any, event: any): any;
		errorHandler(errorData: Object, requestObject: Object): void;
		fetch(request: Object): void;
		fetchHandler(items: any[], requestObject: Object): void;
		fetchItemByIdentity(keywordArgs: Object): void;
		filter(requestArgs: Object, arrayOfItems: any[], findCallback: Function): void;
		getAttributes(item: dojo.data.api.Item): any[];
		getFeatures(): any;
		getIdentity(item: dojo.data.api.Item): any;
		getIdentityAttributes(item: dojo.data.api.Item): any;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue?: any): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): boolean;
		isDirty(item?: any): any;
		isItem(something: any): boolean;
		isItemLoaded(something: any): any;
		loadItem(keywordArgs: Object): void;
		newItem(keywordArgs?: Object, parentInfo?: Object): Object;
		on(type: any, listener: any): any;
		revert(): boolean;
		save(keywordArgs: Object): void;
		setValue(item: dojo.data.api.Item, attribute: String, value: any): any;
		setValues(item: dojo.data.api.Item, attribute: String, values: any[]): any;
		unsetAttribute(item: dojo.data.api.Item, attribute: String): any;
		onDelete(deletedItem: dojo.data.api.Item): void;
		onNew(newItem: dojo.data.api.Item, parentInfo?: Object): void;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: Object, newValue: Object
	): void;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: any[], newValue: Object
	): void;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: Object, newValue: any[]
	): void;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: any[], newValue: any[]
	): void
	}

	
}

declare module 'api' {
				declare class Item  {
		constructor(): this
	}

	declare class Identity extends undefined$Read {
		constructor(): this;
		close(request?: dojo.data.api.Request): void;
		close(request?: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): void;
		fetch(keywordArgs: Object): any;
		fetchItemByIdentity(keywordArgs: Object): void;
		getAttributes(item: dojo.data.api.Item): void;
		getFeatures(): Object;
		getIdentity(item: dojo.data.api.Item): void;
		getIdentityAttributes(item: dojo.data.api.Item): void;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue?: any): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): void;
		isItem(something: any): void;
		isItemLoaded(something: any): void;
		loadItem(keywordArgs: Object): void
	}

	declare class Request  {
		constructor(): this;
		abort(): void
	}

	declare class Notification extends undefined$Read {
		constructor(): this;
		close(request?: dojo.data.api.Request): void;
		close(request?: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): void;
		fetch(keywordArgs: Object): any;
		getAttributes(item: dojo.data.api.Item): void;
		getFeatures(): Object;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue?: any): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): void;
		isItem(something: any): void;
		isItemLoaded(something: any): void;
		loadItem(keywordArgs: Object): void;
		onDelete(deletedItem: dojo.data.api.Item): any;
		onNew(newItem: dojo.data.api.Item, parentInfo?: Object): any;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: Object, newValue: Object
	): any;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: any[], newValue: Object
	): any;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: Object, newValue: any[]
	): any;
		onSet(
		item: dojo.data.api.Item, attribute: String, oldValue: any[], newValue: any[]
	): any
	}

	declare class Read  {
		constructor(): this;
		close(request?: dojo.data.api.Request): void;
		close(request?: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): void;
		fetch(keywordArgs: Object): any;
		getAttributes(item: dojo.data.api.Item): void;
		getFeatures(): Object;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue?: any): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): void;
		isItem(something: any): void;
		isItemLoaded(something: any): void;
		loadItem(keywordArgs: Object): void
	}

	declare class Write extends undefined$Read {
		constructor(): this;
		close(request?: dojo.data.api.Request): void;
		close(request?: Object): void;
		containsValue(item: dojo.data.api.Item, attribute: String, value: any): void;
		deleteItem(item: dojo.data.api.Item): void;
		fetch(keywordArgs: Object): any;
		getAttributes(item: dojo.data.api.Item): void;
		getFeatures(): Object;
		getLabel(item: dojo.data.api.Item): any;
		getLabelAttributes(item: dojo.data.api.Item): any;
		getValue(item: dojo.data.api.Item, attribute: String, defaultValue?: any): any;
		getValues(item: dojo.data.api.Item, attribute: String): any;
		hasAttribute(item: dojo.data.api.Item, attribute: String): void;
		isDirty(item?: any): void;
		isItem(something: any): void;
		isItemLoaded(something: any): void;
		loadItem(keywordArgs: Object): void;
		newItem(keywordArgs?: Object, parentInfo?: Object): void;
		revert(): void;
		save(keywordArgs: Object): any;
		setValue(item: dojo.data.api.Item, attribute: String, value: any): void;
		setValues(item: dojo.data.api.Item, attribute: String, values: any[]): void;
		unsetAttribute(item: dojo.data.api.Item, attribute: String): void
	}

	declare class Store  {
		constructor(): this;
		idProperty: string;
		queryEngine(query: Object, options: dojo.store.api.Store.QueryOptions): any;
		add(object: Object, directives?: dojo.store.api.Store.PutDirectives): any;
		get(id: number): Object;
		getChildren(
		parent: Object, options?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		getIdentity(object: Object): any;
		getMetadata(object: Object): Object;
		put(object: Object, directives?: dojo.store.api.Store.PutDirectives): any;
		PutDirectives(): void;
		query(
		query: String, options?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		query(
		query: Object, options?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		query(
		query: Function, options?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		QueryOptions(): void;
		QueryResults(): void;
		remove(id: number): void;
		SortInformation(): void;
		transaction(): dojo.store.api.Store.Transaction;
		Transaction(): void
	}

	
}

declare module 'util' {
		declare interface filter {
		patternToRegExp(pattern: String, ignoreCase?: boolean): any
	}

	declare interface simpleFetch {
		errorHandler(errorData: Object, requestObject: Object): void,
		fetch(request: Object): void,
		fetchHandler(items: any[], requestObject: Object): void
	}

	declare interface sorter {
		basicComparator(a: any, b: any): number,
		createSortFunction(sortSpec: Object, store: dojo.data.api.Read): String[]
	}

	declare interface QueryResults {
		(results: any[]): void
	}

	declare interface QueryResults {
		(results: dojo.promise.Promise<any>): void
	}

	declare interface SimpleQueryEngine {
		(query: Object, options?: dojo.store.api.Store.QueryOptions): void
	}

			
}

declare module 'dnd' {
		declare interface autoscroll {
		H_AUTOSCROLL_VALUE: number,
		H_TRIGGER_AUTOSCROLL: number,
		V_AUTOSCROLL_VALUE: number,
		V_TRIGGER_AUTOSCROLL: number,
		autoScroll(e: Event): void,
		autoScrollNodes(e: Event): void,
		autoScrollStart(d: HTMLDocument): void,
		getViewport(doc?: HTMLDocument): Object
	}

	declare interface common {
		getCopyKeyState(evt: any): any,
		getUniqueId(): String,
		isFormElement(e: Event): void,
		manager(): any
	}

	declare interface move {
		boxConstrainedMoveable(): void,
		constrainedMoveable(): void,
		parentConstrainedMoveable(): void
	}

		declare class Avatar  {
		constructor(manager: any): this;
		manager: Object;
		construct(): void;
		destroy(): void;
		update(): void
	}

	declare class Manager extends dojo$Evented {
		constructor(): this;
		OFFSET_X: number;
		OFFSET_Y: number;
		canDrop(flag: any): void;
		emit(type: any, event: any): any;
		makeAvatar(): any;
		manager(): any;
		on(type: any, listener: any): any;
		outSource(source: Object): void;
		overSource(source: Object): void;
		startDrag(source: Object, nodes: any[], copy: boolean): void;
		stopDrag(): void;
		updateAvatar(): void;
		onKeyDown(e: Event): void;
		onKeyUp(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseUp(e: Event): void
	}

	declare class Container extends dojo$Evented {
		constructor(node: HTMLElement, params: Object): this;
		allowNested: boolean;
		current: HTMLElement;
		map: Object;
		node: HTMLElement;
		skipForm: boolean;
		clearItems(): void;
		creator(): void;
		delItem(key: String): void;
		destroy(): void;
		emit(type: any, event: any): any;
		forInItems(f: Function, o: Object): String;
		getAllNodes(): any;
		getItem(key: String): any;
		insertNodes(
		addSelected?: boolean, data?: any[], before?: boolean, anchor?: HTMLElement
	): Function;
		Item(): void;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		setItem(key: String, data: any): void;
		startup(): void;
		sync(): Function;
		onMouseOut(e: Event): void;
		onMouseOver(e: Event): void;
		onOutEvent(): void;
		onOverEvent(): void;
		onSelectStart(e: Event): void
	}

	declare class AutoSource extends undefined$Source {
		constructor(node: any, params: any): this;
		accept: any[];
		allowNested: boolean;
		autoSync: boolean;
		copyOnly: boolean;
		current: HTMLElement;
		delay: number;
		generateText: boolean;
		horizontal: boolean;
		isSource: boolean;
		map: Object;
		selection: Object;
		selfAccept: boolean;
		selfCopy: boolean;
		singular: boolean;
		skipForm: boolean;
		withHandles: boolean;
		checkAcceptance(source: Object, nodes: any[]): boolean;
		clearItems(): void;
		copyState(keyPressed: boolean, self?: boolean): any;
		creator(): void;
		deleteSelectedNodes(): Function;
		delItem(key: String): void;
		destroy(): void;
		emit(type: any, event: any): any;
		forInItems(f: Function, o?: Object): String;
		forInSelectedItems(f: Function, o?: Object): void;
		getAllNodes(): any;
		getItem(key: String): any;
		getSelectedNodes(): any;
		insertNodes(
		addSelected: boolean, data: any[], before: boolean, anchor: HTMLElement
	): Function;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		selectAll(): any;
		selectNone(): any;
		setItem(key: String, data: any): void;
		startup(): void;
		sync(): Function;
		onDndCancel(): void;
		onDndDrop(source: Object, nodes: any[], copy: boolean, target: Object): void;
		onDndSourceOver(source: Object): void;
		onDndStart(source: Object, nodes: any[], copy: boolean): void;
		onDraggingOut(): void;
		onDraggingOver(): void;
		onDrop(source: Object, nodes: any[], copy: boolean): void;
		onDropExternal(source: Object, nodes: any[], copy: boolean): void;
		onDropInternal(nodes: any[], copy: boolean): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseOut(e: Event): void;
		onMouseOver(e: Event): void;
		onMouseUp(e: Event): void;
		onOutEvent(): void;
		onOverEvent(): void;
		onSelectStart(e: Event): void
	}

	declare class Mover extends dojo$Evented {
		constructor(node: HTMLElement, e: Event, host?: Object): this;
		destroy(): void;
		emit(type: any, event: any): any;
		on(type: any, listener: any): any;
		onFirstMove(e: any): void;
		onMouseMove(e: Event): void;
		onMouseUp(e: any): void
	}

	declare class Moveable extends dojo$Evented {
		constructor(node: HTMLElement, params?: Object): this;
		delay: number;
		handle: string;
		skip: boolean;
		destroy(): void;
		emit(type: any, event: any): any;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		onDragDetected(e: Event): void;
		onFirstMove(mover: dojo.dnd.Mover, e: Event): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseUp(e: Event): void;
		onMove(mover: dojo.dnd.Mover, leftTop: Object, e: Event): void;
		onMoved(mover: dojo.dnd.Mover, leftTop: Object): void;
		onMoveStart(mover: dojo.dnd.Mover): void;
		onMoveStop(mover: dojo.dnd.Mover): void;
		onMoving(mover: dojo.dnd.Mover, leftTop: Object): void;
		onSelectStart(e: Event): void
	}

	declare class Selector extends undefined$Container {
		constructor(node: HTMLElement, params?: Object): this;
		allowNested: boolean;
		current: HTMLElement;
		map: Object;
		selection: Object;
		singular: boolean;
		skipForm: boolean;
		clearItems(): void;
		creator(): void;
		deleteSelectedNodes(): Function;
		delItem(key: String): void;
		destroy(): void;
		emit(type: any, event: any): any;
		forInItems(f: Function, o?: Object): String;
		forInSelectedItems(f: Function, o?: Object): void;
		getAllNodes(): any;
		getItem(key: String): any;
		getSelectedNodes(): any;
		insertNodes(
		addSelected?: boolean, data?: any[], before?: boolean, anchor?: HTMLElement
	): Function;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		selectAll(): any;
		selectNone(): any;
		setItem(key: String, data: any): void;
		startup(): void;
		sync(): Function;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseOut(e: Event): void;
		onMouseOver(e: Event): void;
		onMouseUp(e: Event): void;
		onOutEvent(): void;
		onOverEvent(): void;
		onSelectStart(e: Event): void
	}

	declare class TimedMoveable extends undefined$Moveable {
		constructor(node: HTMLElement, params: Object): this;
		delay: number;
		handle: string;
		skip: boolean;
		timeout: number;
		destroy(): void;
		emit(type: any, event: any): any;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		onDragDetected(e: Event): void;
		onFirstMove(mover: dojo.dnd.Mover, e: Event): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseUp(e: Event): void;
		onMove(mover: dojo.dnd.Mover, leftTop: Object): void;
		onMoved(mover: dojo.dnd.Mover, leftTop: Object): void;
		onMoveStart(mover: dojo.dnd.Mover): void;
		onMoveStop(mover: dojo.dnd.Mover): void;
		onMoving(mover: dojo.dnd.Mover, leftTop: Object): void;
		onSelectStart(e: Event): void
	}

	declare class Target extends undefined$Source {
		constructor(node: any, params: any): this;
		accept: any[];
		allowNested: boolean;
		autoSync: boolean;
		copyOnly: boolean;
		current: HTMLElement;
		delay: number;
		generateText: boolean;
		horizontal: boolean;
		isSource: boolean;
		map: Object;
		selection: Object;
		selfAccept: boolean;
		selfCopy: boolean;
		singular: boolean;
		skipForm: boolean;
		withHandles: boolean;
		checkAcceptance(source: Object, nodes: any[]): boolean;
		clearItems(): void;
		copyState(keyPressed: boolean, self?: boolean): any;
		creator(): void;
		deleteSelectedNodes(): Function;
		delItem(key: String): void;
		destroy(): void;
		emit(type: any, event: any): any;
		forInItems(f: Function, o?: Object): String;
		forInSelectedItems(f: Function, o?: Object): void;
		getAllNodes(): any;
		getItem(key: String): any;
		getSelectedNodes(): any;
		insertNodes(
		addSelected: boolean, data: any[], before?: boolean, anchor?: HTMLElement
	): Function;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		selectAll(): any;
		selectNone(): any;
		setItem(key: String, data: any): void;
		startup(): void;
		sync(): Function;
		onDndCancel(): void;
		onDndDrop(source: Object, nodes: any[], copy: boolean, target: Object): void;
		onDndSourceOver(source: Object): void;
		onDndStart(source: Object, nodes: any[], copy: boolean): void;
		onDraggingOut(): void;
		onDraggingOver(): void;
		onDrop(source: Object, nodes: any[], copy: boolean): void;
		onDropExternal(source: Object, nodes: any[], copy: boolean): void;
		onDropInternal(nodes: any[], copy: boolean): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseOut(e: Event): void;
		onMouseOver(e: Event): void;
		onMouseUp(e: Event): void;
		onOutEvent(): void;
		onOverEvent(): void;
		onSelectStart(e: Event): void
	}

	declare class Source extends undefined$Selector {
		constructor(node: HTMLElement, params?: Object): this;
		accept: any[];
		allowNested: boolean;
		autoSync: boolean;
		copyOnly: boolean;
		current: HTMLElement;
		delay: number;
		generateText: boolean;
		horizontal: boolean;
		isSource: boolean;
		map: Object;
		selection: Object;
		selfAccept: boolean;
		selfCopy: boolean;
		singular: boolean;
		skipForm: boolean;
		withHandles: boolean;
		checkAcceptance(source: Object, nodes: any[]): boolean;
		clearItems(): void;
		copyState(keyPressed: boolean, self?: boolean): any;
		creator(): void;
		deleteSelectedNodes(): Function;
		delItem(key: String): void;
		destroy(): void;
		emit(type: any, event: any): any;
		forInItems(f: Function, o?: Object): String;
		forInSelectedItems(f: Function, o?: Object): void;
		getAllNodes(): any;
		getItem(key: String): any;
		getSelectedNodes(): any;
		insertNodes(
		addSelected: boolean, data: any[], before?: boolean, anchor?: HTMLElement
	): Function;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		selectAll(): any;
		selectNone(): any;
		setItem(key: String, data: any): void;
		startup(): void;
		sync(): Function;
		onDndCancel(): void;
		onDndDrop(source: Object, nodes: any[], copy: boolean, target: Object): void;
		onDndSourceOver(source: Object): void;
		onDndStart(source: Object, nodes: any[], copy: boolean): void;
		onDraggingOut(): void;
		onDraggingOver(): void;
		onDrop(source: Object, nodes: any[], copy: boolean): void;
		onDropExternal(source: Object, nodes: any[], copy: boolean): void;
		onDropInternal(nodes: any[], copy: boolean): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseOut(e: Event): void;
		onMouseOver(e: Event): void;
		onMouseUp(e: Event): void;
		onOutEvent(): void;
		onOverEvent(): void;
		onSelectStart(e: Event): void
	}

	
}

declare module 'Container' {
				declare class ___ContainerArgs  {
		constructor(): this;
		dropParent: HTMLElement;
		skipForm: boolean;
		creator(): void
	}

	
}

declare module 'Moveable' {
				declare class ___MoveableArgs  {
		constructor(): this;
		delay: number;
		handle: HTMLElement;
		mover: Object;
		skip: boolean
	}

	
}

declare module 'autoscroll' {
		declare interface _validOverflow {
		auto: number,
		scroll: number
	}

	declare interface _validNodes {
		div: number,
		p: number,
		td: number
	}

			
}

declare module 'common' {
		declare interface _empty {
		
	}

	declare interface _defaultCreatorNodes {
		div: string,
		ol: string,
		p: string,
		ul: string
	}

			
}

declare module 'move' {
				declare class parentConstrainedMoveable extends undefined$Moveable {
		constructor(node: HTMLElement, params?: Object): this;
		area: string;
		delay: number;
		handle: string;
		skip: boolean;
		within: boolean;
		constraints(): void;
		destroy(): void;
		emit(type: any, event: any): any;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		onDragDetected(e: Event): void;
		onFirstMove(mover: dojo.dnd.Mover): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseUp(e: Event): void;
		onMove(mover: dojo.dnd.Mover, leftTop: Object): void;
		onMoved(mover: dojo.dnd.Mover, leftTop: Object): void;
		onMoveStart(mover: dojo.dnd.Mover): void;
		onMoveStop(mover: dojo.dnd.Mover): void;
		onMoving(mover: dojo.dnd.Mover, leftTop: Object): void;
		onSelectStart(e: Event): void
	}

	declare class boxConstrainedMoveable extends undefined$Moveable {
		constructor(node: HTMLElement, params?: Object): this;
		box: Object;
		delay: number;
		handle: string;
		skip: boolean;
		within: boolean;
		constraints(): void;
		destroy(): void;
		emit(type: any, event: any): any;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		onDragDetected(e: Event): void;
		onFirstMove(mover: dojo.dnd.Mover): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseUp(e: Event): void;
		onMove(mover: dojo.dnd.Mover, leftTop: Object): void;
		onMoved(mover: dojo.dnd.Mover, leftTop: Object): void;
		onMoveStart(mover: dojo.dnd.Mover): void;
		onMoveStop(mover: dojo.dnd.Mover): void;
		onMoving(mover: dojo.dnd.Mover, leftTop: Object): void;
		onSelectStart(e: Event): void
	}

	declare class constrainedMoveable extends undefined$Moveable {
		constructor(node: HTMLElement, params?: Object): this;
		delay: number;
		handle: string;
		skip: boolean;
		within: boolean;
		constraints(): void;
		destroy(): void;
		emit(type: any, event: any): any;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		onDragDetected(e: Event): void;
		onFirstMove(mover: dojo.dnd.Mover): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseUp(e: Event): void;
		onMove(mover: dojo.dnd.Mover, leftTop: Object): void;
		onMoved(mover: dojo.dnd.Mover, leftTop: Object): void;
		onMoveStart(mover: dojo.dnd.Mover): void;
		onMoveStop(mover: dojo.dnd.Mover): void;
		onMoving(mover: dojo.dnd.Mover, leftTop: Object): void;
		onSelectStart(e: Event): void
	}

	
}

declare module 'errors' {
		declare interface create {
		(name: any, ctor: any, base: any, props: any): void
	}

	declare interface CancelError {
		(): void
	}

	declare interface RequestError {
		(): void
	}

	declare interface RequestTimeoutError {
		(): void
	}

			
}

declare module 'io' {
		declare interface iframe {
		create(fname: String, onloadstr: String, uri: String): void,
		doc(iframeNode: any): void,
		setSrc(iframe: any, src: any, replace: any): void
	}

	declare interface script {
		attach(id: any, url: any, frameDocument: any): void,
		get(args: Object): any,
		remove(id: any, frameDocument: any): void
	}

			
}

declare module 'promise' {
		declare interface all {
		(value: Promise<T>[]): Promise<T[]>
	}

	declare interface all {
		(value: Object): Promise<any>
	}

	declare interface first {
		(objectOrArray?: Object): void
	}

	declare interface first {
		(objectOrArray?: any[]): void
	}

	declare interface instrumentation {
		(Deferred: any): void
	}

	declare interface Callback<T, U> {
		(arg: T): U | Promise<U>
	}

	declare interface Promise<T> {
		always<U>(callbackOrErrback: Callback<any, U>): Promise<U>,
		cancel(reason: any, strict?: boolean): any,
		isCanceled(): boolean,
		isFulfilled(): boolean,
		isRejected(): boolean,
		isResolved(): boolean,
		otherwise<U>(errback?: Callback<any, U>): Promise<U>,
		then<U>(
		callback?: Callback<T, U>, errback?: Callback<any, U>, progback?: Callback<any, U>
	): Promise<U>,
		toString(): String,
		trace(): Promise<T>,
		traceRejected(): Promise<T>
	}

	declare interface tracer {
		on(type: String, listener: Function): void
	}

			
}

declare module 'rpc' {
				declare class JsonpService extends undefined$RpcService {
		constructor(args: any, requiredArgs: any): this;
		serviceUrl: string;
		strictArgChecks: boolean;
		bind(
		method: String, parameters: dojo._base.array, deferredRequestHandler: dojo.Deferred, url: any
	): void;
		createRequest(parameters: any): Object;
		errorCallback(deferredRequestHandler: dojo._base.Deferred): Function;
		generateMethod(method: String, parameters: dojo._base.array, url: String): any;
		parseResults(obj: Object): Object;
		processSmd(object: any): void;
		resultCallback(deferredRequestHandler: dojo._base.Deferred): any
	}

	declare class JsonService extends undefined$RpcService {
		constructor(args: Object): this;
		bustCache: boolean;
		contentType: string;
		lastSubmissionId: number;
		serviceUrl: string;
		strictArgChecks: boolean;
		bind(
		method: String, parameters: any[], deferredRequestHandler: dojo.Deferred, url: any
	): void;
		callRemote(method: String, params: any[]): any;
		createRequest(method: String, params: dojo._base.array): any;
		errorCallback(deferredRequestHandler: dojo._base.Deferred): Function;
		generateMethod(method: String, parameters: dojo._base.array, url: String): any;
		parseResults(obj: Object): any;
		processSmd(object: any): void;
		resultCallback(deferredRequestHandler: dojo._base.Deferred): any
	}

	declare class RpcService  {
		constructor(args: Object): this;
		serviceUrl: string;
		strictArgChecks: boolean;
		errorCallback(deferredRequestHandler: dojo._base.Deferred): Function;
		generateMethod(method: String, parameters: dojo._base.array, url: String): any;
		parseResults(obj: Object): Object;
		processSmd(object: any): void;
		resultCallback(deferredRequestHandler: dojo._base.Deferred): any
	}

	
}

declare module 'selector' {
		declare interface lite {
		(selector: any, root: any): void
	}

	declare interface lite {
		match: Object
	}

	declare interface acme {
		(query: String, root?: String): void
	}

	declare interface acme {
		(query: String, root?: HTMLElement): void
	}

	declare interface acme {
		filter(nodeList: HTMLElement[], filter: String, root?: String): void,
		filter(nodeList: HTMLElement[], filter: String, root?: HTMLElement): void
	}

	declare interface _loader {
		load(id: any, parentRequire: any, loaded: any, config: any): any
	}

			
}

declare module 'store' {
		declare interface Observable {
		(store: dojo.store.api.Store): void
	}

		declare class Cache extends undefined$Store {
		constructor(masterStore: any, cachingStore: any, options?: Object): this;
		idProperty: string;
		queryEngine(query: Object, options: dojo.store.api.Store.QueryOptions): any;
		add(object: Object, directives?: any): number;
		evict(id: number): void;
		get(id: number, directives?: Object): dojo.store.api.Store.QueryResults;
		getChildren(
		parent: Object, options?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		getIdentity(object: Object): any;
		getMetadata(object: Object): Object;
		put(object: Object, directives?: dojo.store.api.Store.PutDirectives): number;
		query(
		query: Object, directives?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		query(
		query: String, directives?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		remove(id: number): void;
		transaction(): dojo.store.api.Store.Transaction
	}

	declare class DataStore extends undefined$Store {
		constructor(options?: Object): this;
		idProperty: string;
		store: Object;
		target: string;
		add(object: Object, directives: dojo.store.api.Store.PutDirectives): any;
		get(id: Object, options?: any): any;
		getChildren(
		parent: Object, options?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		getIdentity(object: Object): any;
		getMetadata(object: Object): Object;
		put(object: Object, options?: Object): void;
		query(query: Object, options?: Object): any;
		queryEngine(query: Object, options?: dojo.store.api.Store.QueryOptions): any;
		remove(id: Object): void;
		transaction(): dojo.store.api.Store.Transaction
	}

	declare class Memory extends undefined$Store {
		constructor(options: dojo.store.Memory): this;
		data: any[];
		idProperty: string;
		index: Object;
		add(object: Object, options?: dojo.store.api.Store.PutDirectives): any;
		get(id: number): any;
		getChildren(
		parent: Object, options?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		getIdentity(object: Object): any;
		getMetadata(object: Object): Object;
		put(object: Object, options?: dojo.store.api.Store.PutDirectives): any;
		query(query: Object, options?: dojo.store.api.Store.QueryOptions): any;
		queryEngine(query: Object, options?: dojo.store.api.Store.QueryOptions): any;
		remove(id: number): any;
		setData(data: Object[]): void;
		transaction(): dojo.store.api.Store.Transaction
	}

	declare class JsonRest extends undefined$Store {
		constructor(options: dojo.store.JsonRest): this;
		accepts: string;
		ascendingPrefix: string;
		descendingPrefix: string;
		headers: Object;
		idProperty: string;
		queryEngine(query: Object, options: dojo.store.api.Store.QueryOptions): any;
		target: string;
		add(object: Object, options?: Object): any;
		get(id: number, options?: Object): any;
		getChildren(
		parent: Object, options?: dojo.store.api.Store.QueryOptions
	): dojo.store.api.Store.QueryResults;
		getIdentity(object: Object): any;
		getMetadata(object: Object): Object;
		put(object: Object, options?: Object): any;
		query(query: Object, options?: Object): any;
		remove(id: number, options?: Object): any;
		transaction(): dojo.store.api.Store.Transaction
	}

	
}

declare module 'Store' {
				declare class PutDirectives  {
		constructor(): this;
		before: Object;
		id: string;
		overwrite: boolean;
		parent: Object
	}

	declare class QueryOptions  {
		constructor(): this;
		count: number;
		sort: Object;
		start: number
	}

	declare class QueryResults  {
		constructor(): this;
		total: number;
		filter(callback: any, thisObject: any): dojo.store.api.Store.QueryResults;
		forEach(callback: any, thisObject: any): void;
		map(callback: any, thisObject: any): dojo.store.api.Store.QueryResults;
		observe(listener: Function, includeAllUpdates: any): void;
		then(callback: any, errorHandler: any): void
	}

	declare class SortInformation  {
		constructor(): this;
		attribute: string;
		descending: boolean
	}

	declare class Transaction  {
		constructor(): this;
		abort(callback: any, thisObject: any): void;
		commit(): void
	}

	
}

declare module 'date' {
		declare interface stamp {
		fromISOString(formattedString: String, defaultTime?: number): any,
		toISOString(dateObject: Date, options?: Object): any
	}

	declare interface locale {
		addCustomFormats(packageName: String, bundleName: String): void,
		format(dateObject: Date, options?: Object): any,
		getNames(item: String, type: String, context?: String, locale?: String): any,
		isWeekend(dateObject?: Date, locale?: String): boolean,
		parse(value: String, options?: Object): any,
		regexp(options?: Object): any
	}

			
}

declare module 'locale' {
				declare class ___FormatOptions  {
		constructor(): this;
		am: string;
		datePattern: string;
		formatLength: string;
		fullYear: boolean;
		locale: string;
		pm: string;
		selector: string;
		strict: boolean;
		timePattern: string
	}

	
}

declare module 'router' {
				declare class RouterBase  {
		constructor(kwArgs: any): this;
		globMatch: RegExp;
		globReplacement: string;
		idMatch: RegExp;
		idReplacement: string;
		destroy(): void;
		go(path: string, replace?: boolean): any;
		register(route: String, callback: Function): any;
		register(route: RegExp, callback: Function): any;
		registerBefore(route: String, callback: Function): any;
		registerBefore(route: RegExp, callback: Function): any;
		startup(defaultPath: any): void
	}

	
}

declare module 'currency' {
				declare class ___FormatOptions  {
		constructor(): this;
		currency: string;
		fractional: boolean;
		locale: string;
		pattern: string;
		places: number;
		round: number;
		symbol: string;
		type: string
	}

	declare class ___ParseOptions  {
		constructor(): this;
		currency: string;
		fractional: boolean;
		locale: string;
		pattern: string;
		places: number;
		strict: boolean;
		symbol: string;
		type: string
	}

	
}

declare module 'dom_prop' {
		declare interface names {
		class: string,
		colspan: string,
		for: string,
		frameborder: string,
		readonly: string,
		rowspan: string,
		tabindex: string,
		valuetype: string
	}

			
}

declare module 'gears' {
		declare interface available {
		
	}

			
}

declare module 'html' {
				declare class _ContentSetter  {
		constructor(params: Object, node: String): this;
		cleanContent: boolean;
		content: string;
		extractContent: boolean;
		id: Object;
		node: HTMLElement;
		parseContent: boolean;
		parserScope: string;
		startup: boolean;
		empty(): void;
		set(cont: String, params?: Object): any;
		set(cont: HTMLElement, params?: Object): any;
		set(cont: NodeList, params?: Object): any;
		setContent(): void;
		tearDown(): void;
		onBegin(): any;
		onContentError(err: any): String;
		onEnd(): any;
		onExecError(err: any): String
	}

	
}

declare module 'i18n' {
		declare interface cache {
		
	}

			
}

declare module 'number_' {
				declare class ___FormatAbsoluteOptions  {
		constructor(): this;
		decimal: string;
		group: string;
		places: number;
		round: number
	}

	declare class ___IntegerRegexpFlags  {
		constructor(): this;
		groupSize: number;
		groupSize2: number;
		separator: string;
		signed: boolean
	}

	declare class ___FormatOptions  {
		constructor(): this;
		fractional: boolean;
		locale: string;
		pattern: string;
		places: number;
		round: number;
		type: string
	}

	declare class ___RealNumberRegexpFlags  {
		constructor(): this;
		decimal: string;
		eSigned: boolean;
		exponent: boolean;
		fractional: boolean;
		places: number
	}

	declare class ___ParseOptions  {
		constructor(): this;
		fractional: boolean;
		locale: string;
		pattern: string;
		strict: boolean;
		type: string
	}

	declare class ___RegexpOptions  {
		constructor(): this;
		locale: string;
		pattern: string;
		places: number;
		strict: boolean;
		type: string
	}

	
}

declare module 'robotx' {
		declare interface _runsemaphore {
		lock: any[],
		unlock(): any
	}

			
}

declare module 'robot' {
		declare interface _runsemaphore {
		lock: any[],
		unlock(): any
	}

			
}

declare module 'main' {
		declare interface _hasResource {
		
	}

	declare interface _contentHandlers {
		auto(xhr: any): void,
		javascript(xhr: any): any,
		json(xhr: any): any,
		json_comment_filtered(xhr: any): any,
		json_comment_optional(xhr: any): any,
		olson_zoneinfo(xhr: any): void,
		text(xhr: any): any,
		xml(xhr: any): any
	}

	declare interface cldr {
		monetary: Object,
		supplemental: Object
	}

	declare interface _nodeDataCache {
		
	}

	declare interface colors {
		makeGrey(g: number, a?: number): void
	}

	declare interface back {
		addToHistory(args: Object): void,
		getHash(): any,
		goBack(): void,
		goForward(): void,
		init(): void
	}

	declare interface data {
		api: Object,
		util: Object,
		ItemFileReadStore(): void,
		ItemFileWriteStore(): void,
		ObjectStore(): void
	}

	declare interface config {
		addOnLoad: Function,
		afterOnLoad: boolean,
		baseUrl: Object,
		callback: Function,
		debugContainerId: string,
		debugHeight: number,
		defaultDuration: number,
		deferredInstrumentation: boolean,
		deps: Function,
		dojoBlankHtmlUrl: string,
		extraLocale: any[],
		ioPublish: Object,
		isDebug: boolean,
		locale: string,
		modulePaths: Object,
		parseOnLoad: boolean,
		require: Object,
		transparentColor: any[],
		urchin: string,
		useCustomLogger: Object,
		useDeferredInstrumentation: boolean
	}

	declare interface contentHandlers {
		auto(xhr: any): void,
		javascript(xhr: any): any,
		json(xhr: any): any,
		json_comment_filtered(xhr: any): any,
		json_comment_optional(xhr: any): any,
		olson_zoneinfo(xhr: any): void,
		text(xhr: any): any,
		xml(xhr: any): any
	}

	declare interface date {
		stamp: Object,
		add(date: Date, interval: String, amount: number): any,
		compare(date1: Date, date2?: Date, portion?: String): number,
		difference(date1: Date, date2?: Date, interval?: String): any,
		getDaysInMonth(dateObject: Date): number,
		getTimezoneName(dateObject: Date): any,
		isLeapYear(dateObject: Date): boolean
	}

	declare interface currency {
		format(value: number, options?: dojo.currency.___FormatOptions): any,
		parse(expression: String, options?: Object): any,
		regexp(options: Object): any
	}

	declare interface dnd {
		autoscroll: Object,
		move: Object,
		AutoSource(): void,
		Avatar(): void,
		Container(): void,
		Manager(): void,
		Moveable(): void,
		Mover(): void,
		Selector(): void,
		Source(): void,
		Target(): void,
		TimedMoveable(): void
	}

	declare interface doc {
		documentElement: Object,
		dojoClick: boolean
	}

	declare interface gears {
		available: Object
	}

	declare interface global {
		$(): any,
		GoogleSearchStoreCallback_undefined_NaN(start: any, data: any, responseCode: any, errorMsg: any): void,
		jQuery(): any,
		swfIsInHTML(): void,
		undefined_onload(): void
	}

	declare interface dijit {
		form: Object,
		layout: Object,
		range: Object,
		registry: Object,
		tree: Object,
		byId(id: any): any,
		Calendar(): void,
		CalendarLite(): void,
		CheckedMenuItem(): void,
		ColorPalette(): void,
		Declaration(): void,
		Destroyable(): void,
		Dialog(): void,
		DialogUnderlay(): void,
		DropDownMenu(): void,
		Dye(): void,
		Editor(): void,
		Fieldset(): void,
		InlineEditBox(): void,
		Menu(): void,
		MenuBar(): void,
		MenuBarItem(): void,
		MenuItem(): void,
		MenuSeparator(): void,
		PopupMenuBarItem(): void,
		PopupMenuItem(): void,
		ProgressBar(): void,
		RadioButtonMenuItem(): void,
		TitlePane(): void,
		Toolbar(): void,
		ToolbarSeparator(): void,
		Tooltip(): void,
		TooltipDialog(): void,
		Tree(): void,
		WidgetSet(): void
	}

	declare interface io {
		iframe: Object,
		script: Object
	}

	declare interface fx {
		easing: Object,
		chain(animations: dojo._base.fx.Animation[]): any,
		combine(animations: dojo._base.fx.Animation[]): any,
		slideTo(args: Object): any,
		Toggler(): void,
		wipeIn(args: Object): any,
		wipeOut(args: Object): any
	}

	declare interface html {
		set(node: HTMLElement, cont: String, params?: Object): any,
		set(node: HTMLElement, cont: HTMLElement, params?: Object): any,
		set(node: HTMLElement, cont: NodeList, params?: Object): any
	}

	declare interface dojox {
		analytics: Object,
		app: Object,
		atom: Object,
		av: Object,
		BidiComplex: Object,
		calc: Object,
		calendar: Object,
		charting: Object,
		collections: Object,
		color: Object,
		css3: Object,
		data: Object,
		date: Object,
		dgauges: Object,
		dnd: Object,
		drawing: Object,
		dtl: Object,
		editor: Object,
		embed: Object,
		encoding: Object,
		enhanced: Object,
		flash: Object,
		form: Object,
		fx: Object,
		gantt: Object,
		gauges: Object,
		geo: Object,
		gesture: Object,
		gfx: Object,
		gfx3d: Object,
		grid: Object,
		help: Object,
		highlight: Object,
		html: Object,
		image: Object,
		io: Object,
		jq: Object,
		json: Object,
		jsonPath: Object,
		lang: Object,
		layout: Object,
		math: Object,
		mdnd: Object,
		mobile: Object,
		mvc: Object,
		openlayers: Object,
		rails: Object,
		robot: Object,
		rpc: Object,
		secure: Object,
		sketch: Object,
		sql: Object,
		string: Object,
		testing: Object,
		timing: Object,
		treemap: Object,
		uuid: Object,
		validate: Object,
		widget: Object,
		xml: Object,
		socket(argsOrUrl: Object): any,
		sprintf(format: String, filler: any): void
	}

	declare interface i18n {
		cache: Object,
		dynamic: boolean,
		unitTests: any[],
		getL10nName(moduleName: any, bundleName: any, locale: any): String,
		getLocalization(moduleName: any, bundleName: any, locale: any): any,
		load(id: any, require: any, load: any): void,
		normalize(id: any, toAbsMid: any): any,
		normalizeLocale(locale: any): any
	}

	declare interface scopeMap {
		dijit: any[],
		dojo: any[],
		dojox: any[]
	}

	declare interface regexp {
		buildGroupRE(arr: Object, re: Function, nonCapture?: boolean): any,
		buildGroupRE(arr: any[], re: Function, nonCapture?: boolean): any,
		escapeString(str: String, except?: String): any,
		group(expression: String, nonCapture?: boolean): String
	}

	declare interface mouseButtons {
		LEFT: number,
		MIDDLE: number,
		RIGHT: number,
		isButton(e: Event, button: number): boolean,
		isLeft(e: Event): boolean,
		isMiddle(e: Event): boolean,
		isRight(e: Event): boolean
	}

	declare interface rpc {
		JsonpService(): void,
		JsonService(): void,
		RpcService(): void
	}

	declare interface number_ {
		format(value: number, options?: Object): any,
		parse(expression: String, options?: Object): number,
		regexp(options?: Object): any,
		round(value: number, places?: number, increment?: number): number
	}

	declare interface keys {
		ALT: number,
		BACKSPACE: number,
		CAPS_LOCK: number,
		CLEAR: number,
		copyKey: number,
		CTRL: number,
		DELETE: number,
		DOWN_ARROW: number,
		DOWN_DPAD: number,
		END: number,
		ENTER: number,
		ESCAPE: number,
		F1: number,
		F10: number,
		F11: number,
		F12: number,
		F13: number,
		F14: number,
		F15: number,
		F2: number,
		F3: number,
		F4: number,
		F5: number,
		F6: number,
		F7: number,
		F8: number,
		F9: number,
		HELP: number,
		HOME: number,
		INSERT: number,
		LEFT_ARROW: number,
		LEFT_DPAD: number,
		LEFT_WINDOW: number,
		META: number,
		NUM_LOCK: number,
		NUMPAD_0: number,
		NUMPAD_1: number,
		NUMPAD_2: number,
		NUMPAD_3: number,
		NUMPAD_4: number,
		NUMPAD_5: number,
		NUMPAD_6: number,
		NUMPAD_7: number,
		NUMPAD_8: number,
		NUMPAD_9: number,
		NUMPAD_DIVIDE: number,
		NUMPAD_ENTER: number,
		NUMPAD_MINUS: number,
		NUMPAD_MULTIPLY: number,
		NUMPAD_PERIOD: number,
		NUMPAD_PLUS: number,
		PAGE_DOWN: number,
		PAGE_UP: number,
		PAUSE: number,
		RIGHT_ARROW: number,
		RIGHT_DPAD: number,
		RIGHT_WINDOW: number,
		SCROLL_LOCK: number,
		SELECT: number,
		SHIFT: number,
		SPACE: number,
		TAB: number,
		UP_ARROW: number,
		UP_DPAD: number
	}

	declare interface tests {
		
	}

	declare interface version {
		flag: string,
		major: number,
		minor: number,
		patch: number,
		revision: number,
		toString(): String
	}

	declare interface string_ {
		pad(text: String, size: number, ch?: String, end?: boolean): number,
		rep(str: String, num: number): String,
		substitute(template: String, map: Object, transform?: Function, thisObject?: Object): any,
		substitute(template: String, map: any[], transform?: Function, thisObject?: Object): any,
		trim(str: String): String
	}

	declare interface touch {
		cancel(node: HTMLElement, listener: Function): any,
		enter(node: HTMLElement, listener: Function): any,
		leave(node: HTMLElement, listener: Function): any,
		move(node: HTMLElement, listener: Function): any,
		out(node: HTMLElement, listener: Function): any,
		over(node: HTMLElement, listener: Function): any,
		press(node: HTMLElement, listener: Function): any,
		release(node: HTMLElement, listener: Function): any
	}

	declare interface store {
		util: Object,
		Cache(masterStore: any, cachingStore: any, options: any): any,
		DataStore(): void,
		JsonRest(): void,
		Memory(): void,
		Observable(store: dojo.store.api.Store): any
	}

	declare interface window {
		get(doc: HTMLDocument): any,
		getBox(doc?: HTMLDocument): Object,
		scrollIntoView(node: HTMLElement, pos: Object): void
	}

		declare class ___IoArgs  {
		constructor(): this;
		content: Object;
		form: HTMLElement;
		handleAs: string;
		ioPublish: boolean;
		preventCache: boolean;
		rawBody: string;
		timeout: number;
		url: string;
		error(response: Object, ioArgs: dojo.main.___IoCallbackArgs): void;
		handle(
		loadOrError: String, response: Object, ioArgs: dojo.main.___IoCallbackArgs
	): void;
		load(response: Object, ioArgs: dojo.main.___IoCallbackArgs): void
	}

	declare class ___IoCallbackArgs  {
		constructor(): this;
		args: Object;
		canDelete: boolean;
		handleAs: string;
		id: string;
		json: Object;
		query: string;
		url: string;
		xhr: Object
	}

	declare class ___IoPublish  {
		constructor(): this;
		done: string;
		error: string;
		load: string;
		send: string;
		start: string;
		stop: string
	}

	declare class ___XhrArgs  {
		constructor(): this;
		content: Object;
		contentType: string;
		failOk: boolean;
		form: HTMLElement;
		handleAs: string;
		headers: Object;
		ioPublish: boolean;
		preventCache: boolean;
		rawBody: string;
		sync: boolean;
		timeout: number;
		url: string;
		error(response: Object, ioArgs: dojo.main.___IoCallbackArgs): void;
		handle(
		loadOrError: String, response: Object, ioArgs: dojo.main.___IoCallbackArgs
	): void;
		load(response: Object, ioArgs: dojo.main.___IoCallbackArgs): void
	}

	declare class Stateful  {
		constructor(): this;
		get(name: String): any;
		postscript(params?: Object): void;
		set(name: String, value: Object): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	
}

declare module 'dojo/request' {
					declare module.exports: request


}

declare module 'dojo/request.__BaseOptions' {
					declare module.exports: ___BaseOptions


}

declare module 'dojo/request.__MethodOptions' {
					declare module.exports: ___MethodOptions


}

declare module 'dojo/request.__Options' {
					declare module.exports: ___Options


}

declare module 'dojo/request.__Promise' {
					declare module.exports: ___Promise


}

declare module 'dojo/request/handlers' {
					declare module.exports: handlers


}

declare module 'dojo/request/iframe' {
					declare module.exports: iframe


}

declare module 'dojo/request/iframe.__MethodOptions' {
					declare module.exports: ___MethodOptions


}

declare module 'dojo/request/iframe.__BaseOptions' {
					declare module.exports: ___BaseOptions


}

declare module 'dojo/request/iframe.__Options' {
					declare module.exports: ___Options


}

declare module 'dojo/request/notify' {
					declare module.exports: notify


}

declare module 'dojo/request/registry' {
					declare module.exports: registry


}

declare module 'dojo/request/node' {
					declare module.exports: node


}

declare module 'dojo/request/node.__MethodOptions' {
					declare module.exports: ___MethodOptions


}

declare module 'dojo/request/node.__Options' {
					declare module.exports: ___Options


}

declare module 'dojo/request/node.__BaseOptions' {
					declare module.exports: ___BaseOptions


}

declare module 'dojo/request/watch' {
					declare module.exports: watch


}

declare module 'dojo/request/script' {
					declare module.exports: script


}

declare module 'dojo/request/script.__MethodOptions' {
					declare module.exports: ___MethodOptions


}

declare module 'dojo/request/script.__BaseOptions' {
					declare module.exports: ___BaseOptions


}

declare module 'dojo/request/script.__Options' {
					declare module.exports: ___Options


}

declare module 'dojo/request/xhr' {
					declare module.exports: xhr


}

declare module 'dojo/request/xhr.__BaseOptions' {
					declare module.exports: ___BaseOptions


}

declare module 'dojo/request/xhr.__MethodOptions' {
					declare module.exports: ___MethodOptions


}

declare module 'dojo/request/xhr.__Options' {
					declare module.exports: ___Options


}

declare module 'dojo/request/default' {
					declare module.exports: default_


}

declare module 'dojo/request/util' {
					declare module.exports: util


}

declare module 'dojo/AdapterRegistry' {
					declare module.exports: AdapterRegistry


}

declare module 'dojo/cache' {
					declare module.exports: cache


}

declare module 'dojo/cookie' {
					declare module.exports: cookie


}

declare module 'dojo/domReady' {
					declare module.exports: domReady


}

declare module 'dojo/hash' {
					declare module.exports: hash


}

declare module 'dojo/has' {
					declare module.exports: has


}

declare module 'dojo/hccss' {
					declare module.exports: hccss


}

declare module 'dojo/NodeList-data' {
					declare module.exports: NodeList_data


}

declare module 'dojo/NodeList-html' {
					declare module.exports: NodeList_html


}

declare module 'dojo/NodeList-fx' {
					declare module.exports: NodeList_fx


}

declare module 'dojo/NodeList-dom' {
					declare module.exports: NodeList_dom


}

declare module 'dojo/NodeList-manipulate' {
					declare module.exports: NodeList_manipulate


}

declare module 'dojo/NodeList-traverse' {
					declare module.exports: NodeList_traverse


}

declare module 'dojo/on' {
					declare module.exports: on


}

declare module 'dojo/query' {
					declare module.exports: query


}

declare module 'dojo/ready' {
					declare module.exports: ready


}

declare module 'dojo/sniff' {
					declare module.exports: sniff


}

declare module 'dojo/when' {
					declare module.exports: when


}

declare module 'dojo/date' {
					declare module.exports: date


}

declare module 'dojo/date/stamp' {
					declare module.exports: stamp


}

declare module 'dojo/date/locale' {
					declare module.exports: locale


}

declare module 'dojo/date/locale.__FormatOptions' {
					declare module.exports: ___FormatOptions


}

declare module 'dojo/fx' {
					declare module.exports: fx


}

declare module 'dojo/fx/Toggler' {
					declare module.exports: Toggler


}

declare module 'dojo/fx/easing' {
					declare module.exports: easing


}

declare module 'dojo/router' {
					declare module.exports: router


}

declare module 'dojo/router/RouterBase' {
					declare module.exports: undefined


}

declare module 'dojo/aspect' {
					declare module.exports: aspect


}

declare module 'dojo/back' {
					declare module.exports: back


}

declare module 'dojo/colors' {
					declare module.exports: colors


}

declare module 'dojo/currency' {
					declare module.exports: currency


}

declare module 'dojo/currency.__FormatOptions' {
					declare module.exports: ___FormatOptions


}

declare module 'dojo/currency.__ParseOptions' {
					declare module.exports: ___ParseOptions


}

declare module 'dojo/dom' {
					declare module.exports: dom


}

declare module 'dojo/dom-attr' {
					declare module.exports: dom_attr


}

declare module 'dojo/dom-class' {
					declare module.exports: dom_class


}

declare module 'dojo/dom-form' {
					declare module.exports: dom_form


}

declare module 'dojo/dom-construct' {
					declare module.exports: dom_construct


}

declare module 'dojo/dom-prop' {
					declare module.exports: dom_prop


}

declare module 'dojo/dom-prop.names' {
					declare module.exports: names


}

declare module 'dojo/dom-style' {
					declare module.exports: dom_style


}

declare module 'dojo/dom-geometry' {
					declare module.exports: dom_geometry


}

declare module 'dojo/gears' {
					declare module.exports: gears


}

declare module 'dojo/gears.available' {
					declare module.exports: available


}

declare module 'dojo/html' {
					declare module.exports: html


}

declare module 'dojo/html._ContentSetter' {
					declare module.exports: _ContentSetter


}

declare module 'dojo/io-query' {
					declare module.exports: io_query


}

declare module 'dojo/i18n' {
					declare module.exports: i18n


}

declare module 'dojo/i18n.cache' {
					declare module.exports: cache


}

declare module 'dojo/json' {
					declare module.exports: json


}

declare module 'dojo/loadInit' {
					declare module.exports: loadInit


}

declare module 'dojo/keys' {
					declare module.exports: keys


}

declare module 'dojo/mouse' {
					declare module.exports: mouse


}

declare module 'dojo/node' {
					declare module.exports: node


}

declare module 'dojo/number' {
					declare module.exports: number_


}

declare module 'dojo/number.__FormatAbsoluteOptions' {
					declare module.exports: ___FormatAbsoluteOptions


}

declare module 'dojo/number.__IntegerRegexpFlags' {
					declare module.exports: ___IntegerRegexpFlags


}

declare module 'dojo/number.__FormatOptions' {
					declare module.exports: ___FormatOptions


}

declare module 'dojo/number.__RealNumberRegexpFlags' {
					declare module.exports: ___RealNumberRegexpFlags


}

declare module 'dojo/number.__ParseOptions' {
					declare module.exports: ___ParseOptions


}

declare module 'dojo/number.__RegexpOptions' {
					declare module.exports: ___RegexpOptions


}

declare module 'dojo/parser' {
					declare module.exports: parser


}

declare module 'dojo/regexp' {
					declare module.exports: regexp


}

declare module 'dojo/require' {
					declare module.exports: require


}

declare module 'dojo/robotx' {
					declare module.exports: robotx


}

declare module 'dojo/robotx._runsemaphore' {
					declare module.exports: _runsemaphore


}

declare module 'dojo/robot' {
					declare module.exports: robot


}

declare module 'dojo/robot._runsemaphore' {
					declare module.exports: _runsemaphore


}

declare module 'dojo/main' {
					declare module.exports: main


}

declare module 'dojo/main.__IoArgs' {
					declare module.exports: ___IoArgs


}

declare module 'dojo/main.__IoCallbackArgs' {
					declare module.exports: ___IoCallbackArgs


}

declare module 'dojo/main.__IoPublish' {
					declare module.exports: ___IoPublish


}

declare module 'dojo/main.__XhrArgs' {
					declare module.exports: ___XhrArgs


}

declare module 'dojo/main.Stateful' {
					declare module.exports: Stateful


}

declare module 'dojo/main._hasResource' {
					declare module.exports: _hasResource


}

declare module 'dojo/main._contentHandlers' {
					declare module.exports: _contentHandlers


}

declare module 'dojo/main.cldr' {
					declare module.exports: cldr


}

declare module 'dojo/main._nodeDataCache' {
					declare module.exports: _nodeDataCache


}

declare module 'dojo/main.colors' {
					declare module.exports: colors


}

declare module 'dojo/main.back' {
					declare module.exports: back


}

declare module 'dojo/main.data' {
					declare module.exports: data


}

declare module 'dojo/main.config' {
					declare module.exports: config


}

declare module 'dojo/main.contentHandlers' {
					declare module.exports: contentHandlers


}

declare module 'dojo/main.date' {
					declare module.exports: date


}

declare module 'dojo/main.currency' {
					declare module.exports: currency


}

declare module 'dojo/main.dnd' {
					declare module.exports: dnd


}

declare module 'dojo/main.doc' {
					declare module.exports: doc


}

declare module 'dojo/main.gears' {
					declare module.exports: gears


}

declare module 'dojo/main.global' {
					declare module.exports: global


}

declare module 'dojo/main.dijit' {
					declare module.exports: dijit


}

declare module 'dojo/main.io' {
					declare module.exports: io


}

declare module 'dojo/main.fx' {
					declare module.exports: fx


}

declare module 'dojo/main.html' {
					declare module.exports: html


}

declare module 'dojo/main.dojox' {
					declare module.exports: dojox


}

declare module 'dojo/main.i18n' {
					declare module.exports: i18n


}

declare module 'dojo/main.scopeMap' {
					declare module.exports: scopeMap


}

declare module 'dojo/main.regexp' {
					declare module.exports: regexp


}

declare module 'dojo/main.mouseButtons' {
					declare module.exports: mouseButtons


}

declare module 'dojo/main.rpc' {
					declare module.exports: rpc


}

declare module 'dojo/main.number' {
					declare module.exports: number_


}

declare module 'dojo/main.keys' {
					declare module.exports: keys


}

declare module 'dojo/main.tests' {
					declare module.exports: tests


}

declare module 'dojo/main.version' {
					declare module.exports: version


}

declare module 'dojo/main.string' {
					declare module.exports: string_


}

declare module 'dojo/main.touch' {
					declare module.exports: touch


}

declare module 'dojo/main.store' {
					declare module.exports: store


}

declare module 'dojo/main.window' {
					declare module.exports: window


}

declare module 'dojo/string' {
					declare module.exports: string_


}

declare module 'dojo/text' {
					declare module.exports: text


}

declare module 'dojo/topic' {
					declare module.exports: topic


}

declare module 'dojo/uacss' {
					declare module.exports: uacss


}

declare module 'dojo/window' {
					declare module.exports: window


}

declare module 'dojo/touch' {
					declare module.exports: touch


}

declare module 'dojo/DeferredList' {
					declare module.exports: undefined


}

declare module 'dojo/Deferred' {
					declare module.exports: undefined


}

declare module 'dojo/Evented' {
					declare module.exports: undefined


}

declare module 'dojo/NodeList' {
					declare module.exports: undefined


}

declare module 'dojo/NodeList._nodeDataCache' {
					declare module.exports: _nodeDataCache


}

declare module 'dojo/Stateful' {
					declare module.exports: undefined


}

declare module 'dojo/_base/declare' {
					declare module.exports: declare


}

declare module 'dojo/_base/declare.__DeclareCreatedObject' {
					declare module.exports: ___DeclareCreatedObject


}

declare module 'dojo/_base/Deferred' {
					declare module.exports: Deferred


}

declare module 'dojo/_base/url' {
					declare module.exports: url


}

declare module 'dojo/_base/url.authority' {
					declare module.exports: authority


}

declare module 'dojo/_base/url.password' {
					declare module.exports: password


}

declare module 'dojo/_base/url.port' {
					declare module.exports: port


}

declare module 'dojo/_base/url.fragment' {
					declare module.exports: fragment


}

declare module 'dojo/_base/url.query' {
					declare module.exports: query


}

declare module 'dojo/_base/url.user' {
					declare module.exports: user


}

declare module 'dojo/_base/url.scheme' {
					declare module.exports: scheme


}

declare module 'dojo/_base/xhr' {
					declare module.exports: xhr


}

declare module 'dojo/_base/xhr.contentHandlers' {
					declare module.exports: contentHandlers


}

declare module 'dojo/_base/browser' {
					declare module.exports: browser


}

declare module 'dojo/_base/array' {
					declare module.exports: array


}

declare module 'dojo/_base/connect' {
					declare module.exports: connect


}

declare module 'dojo/_base/event' {
					declare module.exports: event


}

declare module 'dojo/_base/html' {
					declare module.exports: html


}

declare module 'dojo/_base/json' {
					declare module.exports: json


}

declare module 'dojo/_base/fx' {
					declare module.exports: fx


}

declare module 'dojo/_base/query' {
					declare module.exports: query


}

declare module 'dojo/_base/NodeList' {
					declare module.exports: NodeList


}

declare module 'dojo/_base/sniff' {
					declare module.exports: sniff


}

declare module 'dojo/_base/lang' {
					declare module.exports: lang


}

declare module 'dojo/_base/unload' {
					declare module.exports: unload


}

declare module 'dojo/_base/window' {
					declare module.exports: window


}

declare module 'dojo/_base/window.doc' {
					declare module.exports: doc


}

declare module 'dojo/_base/window.global' {
					declare module.exports: global


}

declare module 'dojo/_base/kernel' {
					declare module.exports: kernel


}

declare module 'dojo/_base/kernel.__IoCallbackArgs' {
					declare module.exports: ___IoCallbackArgs


}

declare module 'dojo/_base/kernel.__IoPublish' {
					declare module.exports: ___IoPublish


}

declare module 'dojo/_base/kernel.__IoArgs' {
					declare module.exports: ___IoArgs


}

declare module 'dojo/_base/kernel.__XhrArgs' {
					declare module.exports: ___XhrArgs


}

declare module 'dojo/_base/kernel.Stateful' {
					declare module.exports: Stateful


}

declare module 'dojo/_base/kernel._contentHandlers' {
					declare module.exports: _contentHandlers


}

declare module 'dojo/_base/kernel._hasResource' {
					declare module.exports: _hasResource


}

declare module 'dojo/_base/kernel._nodeDataCache' {
					declare module.exports: _nodeDataCache


}

declare module 'dojo/_base/kernel.back' {
					declare module.exports: back


}

declare module 'dojo/_base/kernel.cldr' {
					declare module.exports: cldr


}

declare module 'dojo/_base/kernel.colors' {
					declare module.exports: colors


}

declare module 'dojo/_base/kernel.config' {
					declare module.exports: config


}

declare module 'dojo/_base/kernel.contentHandlers' {
					declare module.exports: contentHandlers


}

declare module 'dojo/_base/kernel.dnd' {
					declare module.exports: dnd


}

declare module 'dojo/_base/kernel.date' {
					declare module.exports: date


}

declare module 'dojo/_base/kernel.doc' {
					declare module.exports: doc


}

declare module 'dojo/_base/kernel.data' {
					declare module.exports: data


}

declare module 'dojo/_base/kernel.currency' {
					declare module.exports: currency


}

declare module 'dojo/_base/kernel.dijit' {
					declare module.exports: dijit


}

declare module 'dojo/_base/kernel.global' {
					declare module.exports: global


}

declare module 'dojo/_base/kernel.gears' {
					declare module.exports: gears


}

declare module 'dojo/_base/kernel.fx' {
					declare module.exports: fx


}

declare module 'dojo/_base/kernel.html' {
					declare module.exports: html


}

declare module 'dojo/_base/kernel.io' {
					declare module.exports: io


}

declare module 'dojo/_base/kernel.dojox' {
					declare module.exports: dojox


}

declare module 'dojo/_base/kernel.i18n' {
					declare module.exports: i18n


}

declare module 'dojo/_base/kernel.mouseButtons' {
					declare module.exports: mouseButtons


}

declare module 'dojo/_base/kernel.rpc' {
					declare module.exports: rpc


}

declare module 'dojo/_base/kernel.regexp' {
					declare module.exports: regexp


}

declare module 'dojo/_base/kernel.number' {
					declare module.exports: number_


}

declare module 'dojo/_base/kernel.scopeMap' {
					declare module.exports: scopeMap


}

declare module 'dojo/_base/kernel.tests' {
					declare module.exports: tests


}

declare module 'dojo/_base/kernel.keys' {
					declare module.exports: keys


}

declare module 'dojo/_base/kernel.store' {
					declare module.exports: store


}

declare module 'dojo/_base/kernel.string' {
					declare module.exports: string_


}

declare module 'dojo/_base/kernel.version' {
					declare module.exports: version


}

declare module 'dojo/_base/kernel.touch' {
					declare module.exports: touch


}

declare module 'dojo/_base/kernel.window' {
					declare module.exports: window


}

declare module 'dojo/_base/config' {
					declare module.exports: config


}

declare module 'dojo/_base/config.modulePaths' {
					declare module.exports: modulePaths


}

declare module 'dojo/_base/Color' {
					declare module.exports: undefined


}

declare module 'dojo/_base/Color.named' {
					declare module.exports: named


}

declare module 'dojo/cldr/monetary' {
					declare module.exports: monetary


}

declare module 'dojo/cldr/supplemental' {
					declare module.exports: supplemental


}

declare module 'dojo/data/ItemFileReadStore' {
					declare module.exports: undefined


}

declare module 'dojo/data/ObjectStore' {
					declare module.exports: undefined


}

declare module 'dojo/data/ItemFileWriteStore' {
					declare module.exports: undefined


}

declare module 'dojo/data/api/Item' {
					declare module.exports: undefined


}

declare module 'dojo/data/api/Identity' {
					declare module.exports: undefined


}

declare module 'dojo/data/api/Request' {
					declare module.exports: undefined


}

declare module 'dojo/data/api/Notification' {
					declare module.exports: undefined


}

declare module 'dojo/data/api/Read' {
					declare module.exports: undefined


}

declare module 'dojo/data/api/Write' {
					declare module.exports: undefined


}

declare module 'dojo/data/util/filter' {
					declare module.exports: filter


}

declare module 'dojo/data/util/simpleFetch' {
					declare module.exports: simpleFetch


}

declare module 'dojo/data/util/sorter' {
					declare module.exports: sorter


}

declare module 'dojo/dnd/autoscroll' {
					declare module.exports: autoscroll


}

declare module 'dojo/dnd/autoscroll._validOverflow' {
					declare module.exports: _validOverflow


}

declare module 'dojo/dnd/autoscroll._validNodes' {
					declare module.exports: _validNodes


}

declare module 'dojo/dnd/common' {
					declare module.exports: common


}

declare module 'dojo/dnd/common._empty' {
					declare module.exports: _empty


}

declare module 'dojo/dnd/common._defaultCreatorNodes' {
					declare module.exports: _defaultCreatorNodes


}

declare module 'dojo/dnd/move' {
					declare module.exports: move


}

declare module 'dojo/dnd/move.parentConstrainedMoveable' {
					declare module.exports: parentConstrainedMoveable


}

declare module 'dojo/dnd/move.boxConstrainedMoveable' {
					declare module.exports: boxConstrainedMoveable


}

declare module 'dojo/dnd/move.constrainedMoveable' {
					declare module.exports: constrainedMoveable


}

declare module 'dojo/dnd/Avatar' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/Manager' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/Container' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/Container.__ContainerArgs' {
					declare module.exports: ___ContainerArgs


}

declare module 'dojo/dnd/AutoSource' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/Mover' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/Moveable' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/Moveable.__MoveableArgs' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/Selector' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/TimedMoveable' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/Target' {
					declare module.exports: undefined


}

declare module 'dojo/dnd/Source' {
					declare module.exports: undefined


}

declare module 'dojo/errors/create' {
					declare module.exports: create


}

declare module 'dojo/errors/CancelError' {
					declare module.exports: CancelError


}

declare module 'dojo/errors/RequestError' {
					declare module.exports: RequestError


}

declare module 'dojo/errors/RequestTimeoutError' {
					declare module.exports: RequestTimeoutError


}

declare module 'dojo/io/iframe' {
					declare module.exports: iframe


}

declare module 'dojo/io/script' {
					declare module.exports: script


}

declare module 'dojo/promise/all' {
					declare module.exports: all


}

declare module 'dojo/promise/first' {
					declare module.exports: first


}

declare module 'dojo/promise/instrumentation' {
					declare module.exports: instrumentation


}

declare module 'dojo/promise/tracer' {
					declare module.exports: tracer


}

declare module 'dojo/promise/Promise' {
		declare interface Promise<T> {
		
	}

			declare module.exports: undefined


}

declare module 'dojo/rpc/JsonpService' {
					declare module.exports: undefined


}

declare module 'dojo/rpc/JsonService' {
					declare module.exports: undefined


}

declare module 'dojo/rpc/RpcService' {
					declare module.exports: undefined


}

declare module 'dojo/selector/lite' {
					declare module.exports: lite


}

declare module 'dojo/selector/acme' {
					declare module.exports: acme


}

declare module 'dojo/selector/_loader' {
					declare module.exports: _loader


}

declare module 'dojo/store/Observable' {
					declare module.exports: Observable


}

declare module 'dojo/store/Cache' {
					declare module.exports: undefined


}

declare module 'dojo/store/DataStore' {
					declare module.exports: undefined


}

declare module 'dojo/store/Memory' {
					declare module.exports: undefined


}

declare module 'dojo/store/JsonRest' {
					declare module.exports: undefined


}

declare module 'dojo/store/api/Store' {
					declare module.exports: undefined


}

declare module 'dojo/store/api/Store.PutDirectives' {
					declare module.exports: undefined


}

declare module 'dojo/store/api/Store.QueryOptions' {
					declare module.exports: undefined


}

declare module 'dojo/store/api/Store.QueryResults' {
					declare module.exports: undefined


}

declare module 'dojo/store/api/Store.SortInformation' {
					declare module.exports: undefined


}

declare module 'dojo/store/api/Store.Transaction' {
					declare module.exports: undefined


}

declare module 'dojo/store/util/QueryResults' {
					declare module.exports: QueryResults


}

declare module 'dojo/store/util/SimpleQueryEngine' {
					declare module.exports: SimpleQueryEngine


}