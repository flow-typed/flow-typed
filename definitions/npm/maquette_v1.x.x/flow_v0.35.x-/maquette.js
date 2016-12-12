

declare module 'maquette' {
					declare module.exports: undefined


}

declare module 'npm$namespace$maquette' {
	declare export type VNodeChild = string | VNode | VNodeChildren;

	declare interface Touch {
		clientX: number,
		clientY: number,
		identifier: number,
		pageX: number,
		pageY: number,
		screenX: number,
		screenY: number,
		target: EventTarget
	}

	declare interface TouchList {
		length: number,
		item(index: number): Touch,
		[index: number]: Touch
	}

	declare interface TouchEvent {
		altKey: boolean,
		changedTouches: TouchList,
		ctrlKey: boolean,
		metaKey: boolean,
		shiftKey: boolean,
		targetTouches: TouchList,
		touches: TouchList
	}

	declare export interface VNodeProperties {
		enterAnimation?: ((element: Element, properties?: VNodeProperties) => void) | string,
		exitAnimation?: ((
		element: Element, removeElement: () => void, properties?: VNodeProperties
	) => void) | string,
		updateAnimation?: (
		element: Element, properties?: VNodeProperties, previousProperties?: VNodeProperties
	) => void,
		afterCreate?: (
		element: Element, projectionOptions: ProjectionOptions, vnodeSelector: string, properties: VNodeProperties, children: VNode[]
	) => void,
		afterUpdate?: (
		element: Element, projectionOptions: ProjectionOptions, vnodeSelector: string, properties: VNodeProperties, children: VNode[]
	) => void,
		key?: Object,
		classes?: {
		[index: string]: boolean
	},
		styles?: {
		[index: string]: string
	},
		ontouchcancel?: (ev?: TouchEvent) => boolean | void,
		ontouchend?: (ev?: TouchEvent) => boolean | void,
		ontouchmove?: (ev?: TouchEvent) => boolean | void,
		ontouchstart?: (ev?: TouchEvent) => boolean | void,
		action?: string,
		encoding?: string,
		enctype?: string,
		method?: string,
		name?: string,
		target?: string,
		onblur?: (ev?: FocusEvent) => boolean | void,
		onchange?: (ev?: Event) => boolean | void,
		onclick?: (ev?: MouseEvent) => boolean | void,
		ondblclick?: (ev?: MouseEvent) => boolean | void,
		onfocus?: (ev?: FocusEvent) => boolean | void,
		oninput?: (ev?: Event) => boolean | void,
		onkeydown?: (ev?: KeyboardEvent) => boolean | void,
		onkeypress?: (ev?: KeyboardEvent) => boolean | void,
		onkeyup?: (ev?: KeyboardEvent) => boolean | void,
		onload?: (ev?: Event) => boolean | void,
		onmousedown?: (ev?: MouseEvent) => boolean | void,
		onmouseenter?: (ev?: MouseEvent) => boolean | void,
		onmouseleave?: (ev?: MouseEvent) => boolean | void,
		onmousemove?: (ev?: MouseEvent) => boolean | void,
		onmouseout?: (ev?: MouseEvent) => boolean | void,
		onmouseover?: (ev?: MouseEvent) => boolean | void,
		onmouseup?: (ev?: MouseEvent) => boolean | void,
		onmousewheel?: (ev?: MouseWheelEvent) => boolean | void,
		onscroll?: (ev?: UIEvent) => boolean | void,
		onsubmit?: (ev?: Event) => boolean | void,
		spellcheck?: boolean,
		tabIndex?: number,
		title?: string,
		accessKey?: string,
		id?: string,
		autocomplete?: string,
		checked?: boolean,
		placeholder?: string,
		readOnly?: boolean,
		src?: string,
		value?: string,
		alt?: string,
		srcset?: string,
		[index: string]: Object
	}

	declare export interface ProjectionOptions {
		transitions?: {
		enter: (element: Element, properties: VNodeProperties, enterAnimation: string) => void,
		exit: (
		element: Element, properties: VNodeProperties, exitAnimation: string, removeElement: () => void
	) => void
	}
	}

	declare export interface VNodeChildren {
		
	}

	declare export interface VNode {
		vnodeSelector: string,
		properties: VNodeProperties,
		children: Array<VNode>
	}

	declare export interface Component {
		renderMaquette(): VNode
	}

	declare export interface CalculationCache<Result> {
		invalidate(): void,
		result(inputs: Array<Object>, calculation: () => Result): Result
	}

	declare export interface Mapping<Source, Target> {
		results: Array<Target>,
		map(newSources: Array<Source>): void
	}

	declare export interface MaquetteDom {
		append(
		parentNode: Element, vnode: VNode, projectionOptions?: ProjectionOptions
	): Projection,
		create(vnode: VNode, projectionOptions?: ProjectionOptions): Projection,
		insertBefore(beforeNode: Element, vnode: VNode): Projection,
		merge(domNode: Element, vnode: VNode): Projection
	}

	declare export interface Projection {
		update(updatedVnode: VNode): void,
		domNode: Element
	}

	declare export interface Projector {
		append(parentNode: Element, renderMaquetteFunction: () => VNode): void,
		detach(renderMaquetteFunction: () => VNode): Projection,
		evaluateHyperscript(rootNode: Element, parameters: {
		[index: string]: Object
	}): void,
		insertBefore(beforeNode: Element, renderMaquetteFunction: () => VNode): void,
		merge(domNode: Element, renderMaquetteFunction: () => VNode): void,
		replace(domNode: Element, renderMaquetteFunction: () => VNode): void,
		resume(): void,
		scheduleRender(): void,
		stop(): void
	}

	declare export function createCache<Result>(): CalculationCache<Result>

	declare export function createMapping<Source, Target>(
		getSourceKey: (source: Source) => (string | number), createResult: (source: Source, index: number) => Target, updateResult: (source: Source, target: Target, index: number) => void
	): Mapping<Source, Target>

	declare export function createProjector(projectionOptions?: ProjectionOptions): Projector

	declare export function h(
		selector: string, properties: VNodeProperties, children: Array<VNodeChild>
	): VNode

	declare export function h(selector: string, children: Array<VNodeChild>): VNode

	declare export function h(selector: string, properties: VNodeProperties): VNode

	declare export function h(selector: string): VNode

		
}