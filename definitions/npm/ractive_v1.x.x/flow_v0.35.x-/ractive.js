import type { Static } from 'npm$namespace$Ractive'

declare module 'ractive' {
	declare type _RactiveEvent = Event;

				declare module.exports: Static


}

declare module 'npm$namespace$Ractive' {
		declare export interface Node {
		_ractive: any
	}

	declare export interface Promise {
		
	}

	declare export interface AnimationPromise {
		stop(): void
	}

	declare export interface AdaptorPlugin {
		
	}

	declare export interface ComponentPlugin {
		
	}

	declare export interface DecoratorPlugin {
		(node: HTMLElement, ...args: any[]): {
		update?: (...args: any[]) => void,
		teardown: () => void
	}
	}

	declare export interface EventPlugin {
		
	}

	declare export interface TransitionPlugin {
		(t: Transition, params: Object): void
	}

	declare export interface AdaptorPlugins {
		[key: string]: AdaptorPlugin
	}

	declare export interface ComponentPlugins {
		[key: string]: ComponentPlugin
	}

	declare export interface DecoratorPlugins {
		[key: string]: DecoratorPlugin
	}

	declare export interface EventPlugins {
		[key: string]: EventPlugin
	}

	declare export interface TransitionPlugins {
		[key: string]: TransitionPlugin
	}

	declare export interface Event {
		context: any,
		component?: Ractive,
		index: {
		[key: string]: number
	},
		keypath: string,
		name: string,
		node: HTMLElement,
		original: _RactiveEvent
	}

	declare export interface NodeInfo {
		ractive: Ractive,
		keypath: string,
		index: {
		[key: string]: number
	}
	}

	declare export interface Observe {
		cancel(): void
	}

	declare export interface Transition {
		isIntro: boolean,
		name: string,
		node: HTMLElement,
		animateStyle(
		prop: string, value: any, options: TransitionAnimateOptions, complete: Function
	): void,
		animateStyle(props: Object, options: TransitionAnimateOptions, complete: Function): void,
		complete(noReset?: boolean): void,
		getStyle(prop: string): string,
		getStyle(props: string[]): Object,
		processParams(params: any, defaults?: Object): Object,
		resetStyle(): void,
		setStyle(prop: string, value: any): Transition,
		setStyle(props: Object): Transition
	}

	declare export interface TransitionAnimateOptions {
		duration: number,
		easing?: string,
		delay: number
	}

	declare export interface AnimateOptions {
		duration?: number,
		easing?: string | Function,
		step?: (t: number, value: number) => void,
		complate?: (t: number, value: number) => void
	}

	declare export interface ObserveOptions {
		init?: boolean
	}

	declare export interface ObserveOnceOptions {
		context?: any,
		defer?: boolean
	}

	declare export interface ParseOptions {
		preserveWhitespace: boolean,
		sanitize: any
	}

	declare export interface SanitizeOptions {
		elements: string[],
		eventAttributes?: boolean
	}

	declare export interface NewOptions {
		adapt?: (string | AdaptorPlugin)[],
		adaptors?: AdaptorPlugins,
		append?: boolean | any,
		complete?: Function,
		components?: ComponentPlugins,
		computed?: Object,
		css?: string,
		data?: Object | Function,
		decorators?: DecoratorPlugins,
		delimiters?: string[],
		easing?: string | Function,
		el?: string | HTMLElement | any,
		events?: EventPlugins,
		interpolators?: {
		[key: string]: any
	},
		onchange?: (options: NewOptions) => void,
		oncomplete?: () => void,
		onconfig?: () => void,
		onconstruct?: (options: NewOptions) => void,
		ondetach?: () => void,
		oninit?: () => void,
		oninsert?: () => void,
		onrender?: () => void,
		onunrender?: () => void,
		onupdate?: () => void,
		onteardown?: () => void,
		partials?: {
		[key: string]: any
	},
		sanitize?: boolean | SanitizeOptions,
		staticDelimiters?: string[],
		staticTripleDelimiters?: string[],
		template?: any,
		transitions?: TransitionPlugins,
		tripleDelimiters?: string[],
		lazy?: boolean,
		magic?: boolean,
		modifyArrays?: boolean,
		noCSSTransform?: boolean,
		noIntro?: boolean,
		preserveWhitespace?: boolean,
		stripComments?: boolean,
		transitionsEnabled?: boolean,
		twoway?: boolean
	}

	declare export interface ExtendOptions {
		beforeInit?: (options: ExtendOptions) => void,
		init?: (options: ExtendOptions) => void,
		isolated?: boolean
	}

	declare export interface DefaultsOptions {
		debug?: boolean
	}

	declare export interface Static {
		new (options: NewOptions): Ractive,
		extend(options: ExtendOptions): Static,
		getNodeInfo(node: HTMLElement): NodeInfo,
		parse(template: string, options?: ParseOptions): any,
		adaptors: AdaptorPlugins,
		components: ComponentPlugins,
		DEBUG: boolean,
		defaults: DefaultsOptions,
		decorators: DecoratorPlugins,
		easing: {
		[key: string]: (x: number) => number
	},
		events: EventPlugins,
		partials: {
		[key: string]: any
	},
		Promise: Promise,
		transitions: TransitionPlugins
	}

	declare export interface Ractive {
		add(keypath: string, number?: number): Promise,
		animate(keypath: string, value: any, options?: AnimateOptions): AnimationPromise,
		animate(map: Object, options?: AnimateOptions): AnimationPromise,
		detach(): DocumentFragment,
		find(selector: string): HTMLElement,
		findAll(selector: string, options?: {
		live: boolean
	}): HTMLElement[],
		findAllComponents(name: string, options?: {
		live: boolean
	}): Ractive[],
		findComponent(name?: string): Ractive,
		findContainer(name: string): Ractive,
		findParent(name: string): Ractive,
		fire(eventName: string, ...args: any[]): void,
		get(keypath: string): any,
		get(): Object,
		insert(target: any, anchor?: any): void,
		merge(
		keypath: string, value: any[], options?: {
		compare: boolean | string | Function
	}
	): Promise,
		observe(
		keypath: string, callback: (newValue: any, oldValue: any, keypath: string) => void, options?: ObserveOptions
	): Observe,
		observe(map: Object, options?: ObserveOptions): Observe,
		observeOnce(
		keypath: string, callback: (newValue: any, oldValue: any, keypath: string) => void, options?: ObserveOnceOptions
	): Observe,
		off(
		eventName?: string, handler?: (event?: Ractive.Event | any, ...args: any[]) => any
	): Ractive,
		on(
		eventName: string, handler: (event?: Ractive.Event | any, ...args: any[]) => any
	): Observe,
		on(
		map: {
		[eventName: string]: (event?: Ractive.Event | any, ...args: any[]) => any
	}
	): Observe,
		once(
		eventName: string, handler: (event?: Ractive.Event | any, ...args: any[]) => any
	): Observe,
		pop(keypath: string): Promise,
		push(keypath: string, value: any): Promise,
		render(target: any): void,
		reset(data?: Object): Promise,
		resetPartial(name: string, partial: any): Promise,
		resetTemplate(): void,
		set(keypath: string, value: any): Promise,
		set(map: Object): Promise,
		shift(keypath: string): Promise,
		splice(keypath: string, index: number, removeCount: number, ...add: any[]): Promise,
		subtract(keypath: string, number?: number): Promise,
		teardown(): Promise,
		toggle(keypath: string): Promise,
		toHTML(): string,
		unrender(): void,
		unshift(keypath: string, value: any): Promise,
		update(keypath?: string): Promise,
		updateModel(keypath?: string, cascade?: boolean): Promise,
		container: Ractive,
		nodes: Object,
		partials: Object,
		parent: Ractive,
		root: Ractive,
		transitions: Object
	}

			
}