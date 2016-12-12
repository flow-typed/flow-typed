

declare module 'cash' {
		declare interface OffsetType {
		top: number,
		left: number
	}

	declare interface CashStatic {
		isArray(n: any): boolean,
		isFunction(n: any): boolean,
		isNumeric(n: any): boolean,
		isString(str: any): boolean,
		extend(target: any, source: any): any,
		matches(element: Cash, selector: string): boolean,
		parseHTML(htmlString: string): Cash,
		each(collection: Array<any>, callback: Function): Array<any>,
		fn: any,
		(selector: string, context?: Element | Cash): Cash,
		(element: Element): Cash,
		(elementArray: Element[]): Cash
	}

	declare interface Cash {
		add(selector: string | Cash | Element, context?: Element): Cash,
		addClass(c: string): Cash,
		after(selector: Element | String): Cash,
		append(content: string | Element | Cash): Cash,
		appendTo(parent: string | Element | Cash): Cash,
		attr(name: string): any,
		attr(name: string, value: string): Cash,
		before(selector: string | Element): Cash,
		children(selector?: string): Cash,
		closest(selector?: string): Cash,
		clone(): Cash,
		css(prop: any): any,
		css(prop: string, value: any): Cash,
		data(name: any): any,
		data(name: string, value: any): Cash,
		each(callback: Function): Cash,
		empty(): Cash,
		eq(index: number): Cash,
		extend(target: any): any,
		filter(selector: Function): Cash,
		find(selector: string): Cash,
		first(): Cash,
		get(index: number): HTMLElement,
		has(selector: string): boolean,
		hasClass(c: string): boolean,
		height(): number,
		html(): string,
		html(content: string): Cash,
		index(elem?: Element): number,
		innerHeight(): number,
		innerWidth(): number,
		insertAfter(selector: string | Element | Cash): Cash,
		insertBefore(selector: string | Element | Cash): Cash,
		is(selector: string | Element | Cash): boolean,
		last(): Cash,
		next(): Cash,
		not(selector: string | Element | Cash): Cash,
		off(eventName: string, callback: Function): Cash,
		offset(): OffsetType,
		offsetParent(): OffsetType,
		on(
		eventName: string | Array<string>, delegate: any, callback?: Function, runOnce?: boolean
	): Cash,
		one(
		eventName: string | Array<string>, delegate: any, callback?: Function, runOnce?: boolean
	): Cash,
		outerHeight(flag?: boolean): number,
		outerWidth(flag?: boolean): number,
		parent(): Cash,
		parents(selector?: string): Cash,
		position(): OffsetType,
		prepend(content: string): Cash,
		prependTo(parent: string | Element | Cash): Cash,
		prev(): Cash,
		prop(name: string): any,
		prop(name: string, value: string): Cash,
		ready(fn: Function): void,
		remove(): Cash,
		removeAttr(name: string): Cash,
		removeClass(c?: string): Cash,
		removeData(key: string): Cash,
		removeProp(name: string): Cash,
		serialize(): string,
		siblings(): Cash,
		text(): string,
		text(content?: string): Cash,
		toggleClass(c: string, state?: boolean): Cash,
		trigger(eventName: string, data?: any): Cash,
		val(): any,
		val(value?: string): Cash,
		width(): number
	}

			declare module.exports: undefined


}