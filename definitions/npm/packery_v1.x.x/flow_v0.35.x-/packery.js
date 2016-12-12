

declare module 'packery' {
		declare interface PackeryOptions {
		itemSelector?: string,
		columnWidth?: number,
		rowHeight?: number,
		gutter?: number,
		percentPosition?: boolean,
		stamp?: string,
		isHorizontal?: boolean,
		isOriginLeft?: boolean,
		isOriginTop?: boolean,
		transitionDuration?: string,
		containerStyle?: Object,
		isResizeBound?: boolean,
		isInitLayout?: boolean
	}

		declare class Packery  {
		constructor(element: Element, options?: Object): this;
		addItems(elements: Element): void;
		addItems(elements: NodeList): void;
		addItems(elements: Array<Element>): void;
		appended(elements: Element): void;
		appended(elements: NodeList): void;
		appended(elements: Array<Element>): void;
		bindDraggabillyEvents(draggie: any): void;
		bindResize(): void;
		bindUIDraggableEvents($element: any): void;
		data(element: Element): Packery;
		destroy(): void;
		fit(element: Element, x?: number, y?: number): void;
		getItemElements(): Array<Element>;
		getItem(element: Element): any;
		layout(): void;
		layoutItems(items: Array<any>): void;
		off(eventName: string, listener: Function): Packery;
		on(eventName: string, listener: Function): Packery;
		once(eventName: string, listener: Function): void;
		prepended(elements: Element): void;
		prepended(elements: NodeList): void;
		prepended(elements: Array<Element>): void;
		reloadItems(): void;
		remove(elements: Element): void;
		remove(elements: NodeList): void;
		remove(elements: Array<Element>): void;
		stamp(elements: Element): void;
		stamp(elements: NodeList): void;
		stamp(elements: Array<Element>): void;
		unbindResize(): void;
		unstamp(element: Element): void;
		unstamp(element: NodeList): void;
		unstamp(element: Array<Element>): void
	}

	declare module.exports: undefined


}