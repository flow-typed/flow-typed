import type { Static } from 'npm$namespace$Mithril'

declare module 'mithril' {
					declare module.exports: Static


}

declare module 'npm$namespace$Mithril' {
	declare type Children = Child | ChildArray;

	declare type Child = string | VirtualElement | Component<Controller>;

	declare interface ChildArray {
		
	}

	declare interface Static {
		(selector: string, ...children: Children[]): VirtualElement,
		(selector: string, attributes: Attributes, ...children: Children[]): VirtualElement,
		(component: Component<T>, ...args: any[]): Component<T>,
		prop<T>(promise: Thennable<T>): Promise<T>,
		prop<T>(value: T): BasicProperty<T>,
		prop<T>(): BasicProperty<T>,
		withAttr(
		property: string, callback: (value: any) => any, callbackThis?: any
	): (e: Event) => void,
		module<T>(rootElement: Node, component: Component<T>): T,
		mount<T>(rootElement: Node, component: Component<T>): T,
		component<T>(component: Component<T>, ...args: any[]): Component<T>,
		trust(html: string): TrustedString,
		render(
		rootElement: Element, children: VirtualElement | VirtualElement[], forceRecreation?: boolean
	): void,
		redraw: {
		(force?: boolean): void,
		strategy: BasicProperty<"all" | "diff" | "none">
	},
		route: {
		(rootElement: Element, defaultRoute: string, routes: Routes): void,
		(element: Element, isInitialized: boolean, context?: Context, vdom?: VirtualElement): void,
		(path: string, params?: any, shouldReplaceHistory?: boolean): void,
		(): string,
		param(key: string): string,
		mode: "search" | "hash" | "pathname",
		buildQueryString(data: Object): string,
		parseQueryString(data: string): Object
	},
		request(options: XHROptions): Promise<any>,
		request(options: JSONPOptions): Promise<any>,
		deferred: {
		(): Deferred<T>,
		onerror(e: Error): void
	},
		sync<T>(promises: Thennable<T>[]): Promise<T[]>,
		startComputation(): void,
		endComputation(): void,
		deps(mockWindow: Window): Window
	}

	declare interface TrustedString {
		$trusted: boolean
	}

	declare interface VirtualElement {
		tag: string,
		attrs: Attributes,
		children: Children[]
	}

	declare interface Event {
		preventDefault(): void
	}

	declare interface Context {
		onunload(): any,
		retain?: boolean
	}

	declare interface ElementConfig {
		(element: Element, isInitialized: boolean, context: Context, vdom: VirtualElement): void
	}

	declare interface Attributes {
		className?: string,
		class?: string,
		config?: ElementConfig,
		key?: string | number,
		[property: string]: any
	}

	declare interface Controller {
		onunload(evt: Event): any
	}

	declare interface ControllerFunction<T> {
		(...args: any[]): T
	}

	declare interface ControllerConstructor<T> {
		new (...args: any[]): T
	}

	declare interface Component<T> {
		controller: ControllerFunction<T> | ControllerConstructor<T>,
		view(ctrl?: T, ...args: any[]): VirtualElement
	}

	declare interface Property<T> {
		(): T,
		(value: T): T
	}

	declare interface BasicProperty<T> {
		toJSON(): T
	}

	declare interface Routes {
		[key: string]: Component<Controller>
	}

	declare interface Deferred<T> {
		resolve(value?: T): void,
		reject(reason?: any): void,
		promise: Promise<T>
	}

	declare interface SuccessCallback<T, U> {
		(value: T): U | Thennable<U>
	}

	declare interface ErrorCallback<T> {
		(value: Error): T | Thennable<T>
	}

	declare interface Thennable<T> {
		then<U>(success: SuccessCallback<T, U>): Thennable<U>,
		then<U, V>(
		success: SuccessCallback<T, U>, error: ErrorCallback<V>
	): Thennable<U | V>,
		catch(error: ErrorCallback<T>): Thennable<T>,
		catch<U>(error: ErrorCallback<U>): Thennable<T | U>
	}

	declare interface Promise<T> {
		then<U>(success: SuccessCallback<T, U>): Promise<U>,
		then<U, V>(success: SuccessCallback<T, U>, error: ErrorCallback<V>): Promise<U | V>,
		catch<U>(error: ErrorCallback<U>): Promise<T | U>
	}

	declare interface RequestOptions {
		data?: any,
		background?: boolean,
		initialValue?: any,
		unwrapSuccess(data: any): any,
		unwrapError(data: any): any,
		serialize(dataToSerialize: any): string,
		deserialize(dataToDeserialize: string): any,
		extract(xhr: XMLHttpRequest, options: this): string,
		type?: NO PRINT IMPLEMENTED: ConstructorType,
		url: string
	}

	declare interface JSONPOptions {
		dataType: "jsonp",
		callbackKey?: string,
		data?: Object
	}

	declare interface XHROptions {
		method: "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS",
		user?: string,
		password?: string,
		config(xhr: XMLHttpRequest, options: this): any,
		data?: Object
	}

			
}