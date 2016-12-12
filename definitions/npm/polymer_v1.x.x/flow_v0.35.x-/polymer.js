import type { PolymerStatic } from 'npm$namespace$polymer'

declare module 'polymer' {
					
}

declare module 'npm$namespace$polymer' {
	declare type PropConstructorType = StringConstructor | ObjectConstructor | BooleanConstructor | NumberConstructor | DateConstructor | ArrayConstructor;

	declare interface PropObjectType {
		type: PropConstructorType,
		value?: boolean | number | string | Function | Object,
		reflectToAttribute?: boolean,
		readOnly?: boolean,
		notify?: boolean,
		computed?: string,
		observer?: string
	}

	declare interface Base {
		[prop: string]: any,
		hostAttributes?: {
		[name: string]: any
	},
		reflectPropertiesToAttribute(name: string): void,
		serializeValueToAttribute(value: any, attribute: string, node?: Element): void,
		deserialize(value: string, type: NumberConstructor): number,
		deserialize(value: string, type: BooleanConstructor): boolean,
		deserialize(value: string, type: ObjectConstructor): Object,
		deserialize(value: string, type: ArrayConstructor): any[],
		deserialize(value: string, type: DateConstructor): Date,
		deserialize(value: string, type: StringConstructor): string,
		serialize(value: any): string,
		behaviors?: Object[],
		factoryImpl(...args: any[]): void,
		debounce(jobName: string, callback: Function, wait: number): void,
		isDebouncerActive(jobName: string): boolean,
		flushDebouncer(jobName: string): void,
		cancelDebouncer(jobName: string): void,
		extends?: string,
		getNativePrototype(tag: string): Object,
		properties?: {
		[prop: string]: (PropConstructorType | PropObjectType)
	},
		getPropertyInfo(property: string): Object,
		is: string,
		ready(): void,
		attachedCallback(): void,
		domHost(): Element,
		distributeContent(): void,
		elementMatches(selector: string, node?: Element): boolean,
		instanceTemplate(template: HTMLElement): DocumentFragment,
		$?: any,
		listeners?: {
		[key: string]: string
	},
		listen(node: Element, eventName: string, methodName: string): void,
		unlisten(node: Element, eventName: string, methodName: string): void,
		setScrollDirection(direction: string, node?: HTMLElement): void,
		notifyPath(path: string, value: any, fromAbove: any): void,
		set(path: string | (string | number)[], value: any, root?: Object): void,
		get(path: string | (string | number)[], root?: Object): any,
		linkPaths(to: string, from?: string): void,
		unlinkPaths(path: string): void,
		push(path: string, ...item: any[]): number,
		pop(path: string): any,
		splice(path: string, index: number, removeCount: number, ...item: any[]): number,
		shift(path: string): any,
		unshift(path: string, ...item: any[]): number,
		resolveUrl(url: string): string,
		scopeSubtree(container: Element, shouldObserve: boolean): void,
		$$(selector: string): Element,
		toggleClass(name: string, bool?: boolean, node?: HTMLElement): void,
		toggleAttribute(name: string, bool?: boolean, node?: HTMLElement): void,
		classFollows(name: string, toElement: HTMLElement, fromElement: HTMLElement): void,
		attributeFollows(name: string, toElement: HTMLElement, fromElement: HTMLElement): void,
		getContentChildNodes(selector: string): Node[],
		getContentChildren(selector: string): HTMLElement[],
		fire(type: string, detail?: any, options?: Object): CustomEvent,
		async(callback: () => void, waitTime?: number): number,
		cancelAsync(handle: number): void,
		arrayDelete(path: string | any[], item: any): any[],
		transform(transform: string, node?: HTMLElement): void,
		translate3d(x: number, y: number, z: number, node?: HTMLElement): void,
		importHref(href: string, onload?: Function, onerror?: Function): HTMLLinkElement,
		create(tag: string, props: Object): Element,
		isLightDescendant(node: HTMLElement): boolean,
		isLocalDescendant(node: HTMLElement): boolean,
		updateStyles(): void,
		registerCallback(): void,
		createdCallback(): void,
		attachedCallback(): void,
		detachedCallback(): void,
		attributeChangedCallback(name: string): void,
		extend(prototype: Object, api: Object): Object,
		mixin(target: Object, source: Object): Object,
		copyOwnProperty(name: string, source: Object, target: Object): void,
		observers?: string[],
		beforeRegister(): void,
		registered(): void,
		created(): void,
		attached(): void,
		detached(): void,
		attributeChanged(name: string, oldValue: any, newValue: any): void
	}

	declare interface DomApiStatic {
		(obj: Node | Base): DomApi,
		(obj: Event): EventApi,
		flush(): void
	}

	declare interface DomApi {
		appendChild(node: Node): Node,
		insertBefore(node: Node, refNode?: Node): Node,
		removeChild(node: Node): Node,
		replaceChild(node: Node, refNode: Node): Node,
		getOwnerRoot(): Node,
		querySelector(selector: string): Node,
		querySelectorAll(selector: string): Node[],
		getDestinationInsertionPoints(): Node[],
		getDistributedNodes(): Node[],
		queryDistributedElements(selector: string): Node[],
		setAttribute(name: string, value: any): void,
		removeAttribute(name: string): void,
		childNodes: Node[],
		children: Element[],
		parentNode: Node,
		firstChild: Node,
		lastChild: Node,
		nextSibling: Node,
		previousSibling: Node,
		firstElementChild: Element,
		lastElementChild: Element,
		nextElementSibling: Element,
		previousElementSibling: Element,
		textContent: string,
		innerHTML: string
	}

	declare interface EventApi {
		rootTarget: EventTarget,
		localTarget: EventTarget,
		path: Node[]
	}

	declare interface Settings {
		hasNativeCSSProperties: boolean,
		hasNativeImports: boolean,
		hasShadow: boolean,
		nativeShadow: boolean,
		useNativeCSSProperties: boolean,
		useNativeCustomElements: boolean,
		useNativeImports: boolean,
		useNativeShadow: boolean,
		usePolyfillProto: boolean,
		useShadow: boolean,
		wantShadow: boolean
	}

	declare interface RenderStatus {
		afterNextRender(element: Element, fn: Function, args?: any): void,
		hasRendered(): boolean,
		whenReady(cb: Function): void
	}

	declare interface ImportStatus {
		whenLoaded(cb: Function): void
	}

	declare interface PolymerStatic {
		Settings: Settings,
		dom: DomApiStatic,
		(prototype: Base | {
		new (): Base
	}): webcomponents.CustomElementConstructor,
		Class(prototype: Base | {
		new (): Base
	}): webcomponents.CustomElementConstructor,
		RenderStatus: RenderStatus,
		ImportStatus: ImportStatus
	}

			
}