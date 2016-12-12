

declare module 'chocolatechipjs' {
	declare type ByteString = string;

	declare type USVString = string;

	declare type DOMString = string;

	declare type OpenEndedDictionary = Object;

	declare interface ChocolateChipStatic {
		(selector: string | HTMLElement | Document, context?: HTMLElement | ChocolateChipElementArray): ChocolateChipElementArray,
		(callback: () => any): void,
		(element: HTMLElement): ChocolateChipElementArray,
		(elementArray: ChocolateChipElementArray): ChocolateChipElementArray,
		(document: Document): Document[],
		(): Document[],
		extend(object: Object): Object,
		extend(target: Object, object: Object): Object,
		fn: {
		extend(object: Object): HTMLElement[]
	},
		version: string,
		libraryName: string,
		noop(): void,
		uuid: number,
		uuidNum(): number,
		makeUuid(): string,
		make(selector: string): ChocolateChipElementArray,
		html(selector: string): ChocolateChipElementArray,
		replace(
		newElement: ChocolateChipElementArray, oldElement: ChocolateChipElementArray
	): void,
		require(url: string, callback: Function): Function,
		processJSON(json: string, name?: string): any,
		serialize(element: any): string,
		json(reponse: Response): JSON,
		delay(callback: Function, duration?: number): any,
		defer(callback: Function): Function,
		returnResult(result: HTMLElement[]): any[],
		each<T>(array: T[], callback: (ctx: T, idx: number) => any): any,
		concat(...string: string[]): string,
		w(string: string): string[],
		camelize(string: string): string,
		deCamelize(string: string): string,
		capitalize(string: string, boolean?: boolean): string,
		isString(obj: any): boolean,
		isArray(obj: any): boolean,
		isFunction(obj: any): boolean,
		isObject(obj: any): boolean,
		isEmptyObject(obj: any): boolean,
		isEmptyObject(obj: any): boolean,
		isNumber(obj: any): boolean,
		isInteger(obj: any): boolean,
		isFloat(obj: any): boolean,
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
		isWebkit: boolean,
		isMobile: boolean,
		isDesktop: boolean,
		isSafari: boolean,
		isChrome: boolean,
		isNativeAndroid: boolean,
		serialize(form: HTMLFormElement | ChocolateChipElementArray): string,
		form2JSON(rootNode: string | HTMLElement, delimiter: string): Object,
		subscribe(topic: string, callback: (topic: string, data: any) => any): boolean,
		unsubscribe(topic: string): void,
		publish(topic: string, data: any): string,
		templates: Object,
		template: {
		(template: string, variable?: string): Function,
		repeater: {
		(): void,
		(element: ChocolateChipElementArray, template: string, data: any): void
	},
		data: any,
		index: number
	},
		chch_cache: {
		data: {
		
	},
		events: {
		keys: any[],
		values: any[],
		set: Function,
		hasKey: Function,
		_delete: Function
	}
	}
	}

	declare interface ChocolateChipElementArray {
		each(func: (ctx: any, idx: number) => void): void,
		unique(): ChocolateChipElementArray,
		eq(index: number): ChocolateChipElementArray,
		index(): number,
		index(selector: string | HTMLElement[]): number,
		is(selector: string): ChocolateChipElementArray,
		is(element: any): ChocolateChipElementArray,
		isnt(selector: string): ChocolateChipElementArray,
		isnt(element: any): ChocolateChipElementArray,
		has(selector: string): ChocolateChipElementArray,
		has(contained: HTMLElement): ChocolateChipElementArray,
		hasnt(selector: string): ChocolateChipElementArray,
		hasnt(contained: HTMLElement): ChocolateChipElementArray,
		find(selector: string): ChocolateChipElementArray,
		find(element: HTMLElement): ChocolateChipElementArray,
		prev(): ChocolateChipElementArray,
		next(): ChocolateChipElementArray,
		first(): ChocolateChipElementArray,
		last(): ChocolateChipElementArray,
		children(selector?: string): ChocolateChipElementArray,
		parent(selector?: string): ChocolateChipElementArray,
		ancestor(selector: string | number): ChocolateChipElementArray,
		closest(selector: string | number): ChocolateChipElementArray,
		siblings(selector?: string): ChocolateChipElementArray,
		html(): ChocolateChipElementArray,
		html(htmlString: string): ChocolateChipElementArray,
		css(propertyName: string): string,
		css(propertyName: string, value: string): ChocolateChipElementArray,
		css(properties: Object): ChocolateChipElementArray,
		attr(attributeName: string): string,
		attr(attributeName: string, value: string): ChocolateChipElementArray,
		removeAttr(attributeName: string): ChocolateChipElementArray,
		hasAttr(attributeName: string): ChocolateChipElementArray,
		prop(propertyName: string): boolean,
		prop(propertyName: string, value: any | boolean): ChocolateChipElementArray,
		removeProp(property: string): ChocolateChipElementArray,
		addClass(className: string): ChocolateChipElementArray,
		removeClass(className?: string): ChocolateChipElementArray,
		toggleClass(className: string, swtch?: boolean): ChocolateChipElementArray,
		hasClass(className: string): ChocolateChipElementArray,
		data(key: string, value: any): ChocolateChipElementArray,
		data(key: string): any,
		removeData(key?: string): any,
		dataset(key: string, value: any): ChocolateChipElementArray,
		dataset(key: string): ChocolateChipElementArray,
		data(key: string): any,
		data(key: string, value?: any): ChocolateChipElementArray,
		val(): any,
		val(value: string): ChocolateChipElementArray,
		enable(): ChocolateChipElementArray,
		disable(): ChocolateChipElementArray,
		show(duration?: number | string, callback?: Function): ChocolateChipElementArray,
		hide(duration?: number | string, callback?: Function): ChocolateChipElementArray,
		before(
		content: ChocolateChipElementArray | HTMLElement | string
	): ChocolateChipElementArray,
		after(
		content: ChocolateChipElementArray | HTMLElement | string
	): ChocolateChipElementArray,
		append(
		content: ChocolateChipElementArray | HTMLElement | Text | string
	): ChocolateChipElementArray,
		prepend(
		content: ChocolateChipElementArray | HTMLElement | Text | string
	): ChocolateChipElementArray,
		prependTo(target: any[] | HTMLElement | string): ChocolateChipElementArray,
		appendTo(target: any[] | HTMLElement | string): ChocolateChipElementArray,
		insert(content: string, position?: number | string): ChocolateChipElementArray,
		clone(value?: boolean): ChocolateChipElementArray,
		wrap(wrappingElement: string): ChocolateChipElementArray,
		unwrap(): ChocolateChipElementArray,
		remove(selector?: string): ChocolateChipElementArray,
		empty(): ChocolateChipElementArray,
		offset(): {
		top: number,
		bottom: number,
		left: number,
		right: number
	},
		width(): number,
		height(): number,
		text(): string,
		text(text: string | number): HTMLElement,
		animate(options: Object, duration?: string, easing?: string): void,
		bind(
		eventType: string, handler: (eventObject: Event) => any, useCapture?: boolean
	): ChocolateChipStatic,
		unbind(
		eventType?: string, handler?: (eventObject: Event) => any, useCapture?: boolean
	): ChocolateChipStatic,
		delegate(
		selector: any, eventType: string, handler: (eventObject: Event) => any, useCapture?: boolean
	): ChocolateChipStatic,
		undelegate(
		selector?: any, eventType?: string, handler?: (eventObject: Event) => any, useCapture?: boolean
	): ChocolateChipStatic,
		on(
		eventType: string, selector: any, handler?: (eventObject: Event) => any, capturePhase?: boolean
	): ChocolateChipStatic,
		off(
		eventType?: string, selector?: any, handler?: (eventObject: Event) => any, capturePhase?: boolean
	): ChocolateChipStatic,
		trigger(eventType: string): void
	}

	declare interface Promise<T> {
		then<TResult>(
		onfulfilled?: (value: T) => TResult | Promise<TResult>, onrejected?: (reason: any) => TResult | Promise<TResult>
	): Promise<TResult>,
		catch(onrejected?: (reason: any) => T | Promise<T>): Promise<T>
	}

	declare interface PromiseConstructor {
		prototype: Promise<any>,
		new <T>(
		init: (
		resolve: (value?: T | Promise<T>) => void, reject: (reason?: any) => void
	) => void
	): Promise<T>,
		(init: (
		resolve: (value?: T | Promise<T>) => void, reject: (reason?: any) => void
	) => void): Promise<T>,
		all<T>(values: (T | Promise<T>)[]): Promise<T[]>,
		all(values: Promise<void>[]): Promise<void>,
		race<T>(values: (T | Promise<T>)[]): Promise<T>,
		reject(reason: any): Promise<void>,
		reject<T>(reason: any): Promise<T>,
		resolve<T>(value: T | Promise<T>): Promise<T>,
		resolve(): Promise<void>
	}

	declare interface fetch {
		(input: string, init?: {
		method?: string,
		headers?: {
		
	},
		body?: any,
		mode?: {
		cors: string,
		no-cors: string,
		same-origin: string
	},
		credentials?: {
		omit: string,
		same-origin: string,
		include: string
	},
		cache?: {
		default: string,
		no-store: string,
		reload: string,
		no-cache: string,
		force-cache: string,
		only-if-cached: string
	},
		timeout?: number
	}): Promise<any>
	}

	declare interface XMLHttpRequest {
		responseURL: string
	}

	declare interface Headers {
		(headers?: any): void,
		append(name: string, value: string): void,
		delete(name: string): any,
		get(name: string): any,
		getAll(name: string): any,
		has(name: string): any,
		set(name: string, value: string): any,
		forEach(callback: Function, thisArg: any): any
	}

	declare interface decode {
		(body: any): FormData
	}

	declare interface Request {
		(input: {
		url: string,
		request: Request
	}, init: Object): Request,
		clone(): Request,
		arrayBuffer(): ArrayBuffer,
		blob(): Blob,
		formData(): FormData,
		json(): JSON,
		text(): string,
		method: string,
		url: string,
		heaers: Headers,
		context: any,
		referrer: any,
		mode: string,
		credentials: any,
		cache: string,
		bodyUsed: boolean
	}

	declare interface URLSearchParams {
		(): URLSearchParams
	}

	declare interface Response {
		(body?: {
		blob: Blob,
		bormData: FormData,
		urlParams: URLSearchParams,
		url: string
	}, init?: {
		status?: string | number,
		statusText?: string,
		headers: Headers
	}): Response,
		clone(): Response,
		redirect(): Response,
		arrayBuffer(): ArrayBuffer,
		blob(): Blob,
		formData(): FormData,
		json(): JSON,
		text(): string,
		type: string,
		url: string,
		useFinalURL: boolean,
		ok: boolean,
		statusText: string,
		headers: Headers,
		bodyUsed: boolean
	}

	declare interface ChocolateChipStatic {
		JSONPCallbacks: string[],
		jsonp(
		url: string, options?: {
		timeout?: number,
		callbackName?: string,
		clear?: boolean
	}
	): any
	}

	declare interface Window {
		chocolatechipjs: ChocolateChipStatic,
		$: ChocolateChipStatic,
		jsonp: any
	}

			
}