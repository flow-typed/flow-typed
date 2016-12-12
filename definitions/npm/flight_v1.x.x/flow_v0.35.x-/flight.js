import type { DebugStatic, FlightStatic } from 'npm$namespace$Flight'

declare module 'flight' {
					
}

declare module 'npm$namespace$Flight' {
		declare export interface Base {
		attributes(obj: Object): void,
		defaultAttrs(obj: Object): void,
		select(attr: string): JQuery,
		initialize(node: any, options: Object): void,
		on(eventType: string, handler: Function): void,
		on(eventType: string, handler: Object): void,
		on(selector: string, eventType: string, handler: Function): void,
		on(selector: Document, eventType: string, handler: Function): void,
		on(selector: Element, eventType: string, handler: Function): void,
		on(selector: Element[], eventType: string, handler: Function): void,
		on(selector: string, eventType: string, handler: Object): void,
		on(selector: Document, eventType: string, handler: Object): void,
		on(selector: Element, eventType: string, handler: Object): void,
		on(selector: Element[], eventType: string, handler: Object): void,
		off(eventType: string, handler?: Function): void,
		off(selector: string, eventType: string, handler?: Function): void,
		off(selector: Document, eventType: string, handler?: Function): void,
		off(selector: Element, eventType: string, handler?: Function): void,
		off(selector: Element[], eventType: string, handler?: Function): void,
		off(selector: string, eventType: Object, handler?: Function): void,
		off(selector: Document, eventType: Object, handler?: Function): void,
		off(selector: Element, eventType: Object, handler?: Function): void,
		off(selector: Element[], eventType: Object, handler?: Function): void,
		off(selector: string, eventType: string, handler?: Object): void,
		off(selector: Document, eventType: string, handler?: Object): void,
		off(selector: Element, eventType: string, handler?: Object): void,
		off(selector: Element[], eventType: string, handler?: Object): void,
		off(selector: string, eventType: Object, handler?: Object): void,
		off(selector: Document, eventType: Object, handler?: Object): void,
		off(selector: Element, eventType: Object, handler?: Object): void,
		off(selector: Element[], eventType: Object, handler?: Object): void,
		trigger(eventType: string): void,
		trigger(selector: string, eventType: string, eventPayload?: Object): void,
		trigger(selector: Document, eventType: string, eventPayload?: Object): void,
		trigger(selector: Element, eventType: string, eventPayload?: Object): void,
		trigger(selector: Element[], eventType: string, eventPayload?: Object): void,
		trigger(eventType: Object): void,
		trigger(selector: string, eventType: Object, eventPayload?: Object): void,
		trigger(selector: Document, eventType: Object, eventPayload?: Object): void,
		trigger(selector: Element, eventType: Object, eventPayload?: Object): void,
		trigger(selector: Element[], eventType: Object, eventPayload?: Object): void,
		teardown(): void
	}

	declare export interface Advice {
		after(method: string, fn: Function): void,
		around(method: string, fn: Function): void,
		before(method: string, fn: Function): void
	}

	declare export interface Component {
		node: Element,
		$node: JQuery
	}

	declare export interface AdviceStatic {
		withAdvice(): Function
	}

	declare export interface ComponentStatic {
		(...fns: Function[]): ComponentStatic,
		attachTo(selector: string, options?: Object): void,
		attachTo(selector: Element, options?: Object): void,
		attachTo(selector: JQuery, options?: Object): void,
		teardownAll(): void
	}

	declare export interface ComposeStatic {
		mixin(base: Object, mixins: Function[]): void
	}

	declare export interface DebugStatic {
		events: {
		logAll(): void,
		logByAction(action: string): void,
		logByName(name: string): void,
		logNone(): void
	}
	}

	declare export interface UtilsStatic {
		compose(fn1: Function, fn2: Function, ...fns: Function[]): Function,
		countThen(num: number, base: Function): Function,
		debounce(func: Function, wait: number, immediate: boolean): Function,
		delegate(rules: Object): void,
		isDomObj(obj: Object): boolean,
		isEnumerable(obj: Object, property: string): boolean,
		merge(obj1: Object, obj2: Object, deepClone?: boolean): Object,
		merge(obj1: Object, obj2: Object, ...args: any[]): Object,
		push(base: Object, extra: Object, protect?: boolean): void,
		throttle(func: Function, wait: number): Function,
		toArray(obj: Object, from?: number): any[],
		uniqueArray(array: any[]): any[]
	}

	declare export interface EventData {
		el: HTMLElement
	}

	declare export interface FlightStatic {
		advice: AdviceStatic,
		component: ComponentStatic,
		compose: ComposeStatic,
		utils: UtilsStatic
	}

			
}