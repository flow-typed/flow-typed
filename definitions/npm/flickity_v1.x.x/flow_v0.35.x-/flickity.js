

declare module 'flickity' {
		declare interface JQuery {
		flickity: FlickityJquery
	}

	declare interface FlickityJquery {
		(options?: FlickityOptions): JQuery,
		(command: string, ...params: any[]): JQuery
	}

	declare interface FlickityOptions {
		cellSelector?: string,
		initialIndex?: number,
		accessibility?: boolean,
		setGallerySize?: boolean,
		resize?: boolean,
		cellAlign?: string,
		contain?: boolean,
		imagesLoaded?: boolean,
		percentPosition?: boolean,
		rightToLeft?: boolean,
		draggable?: boolean,
		freeScroll?: boolean,
		wrapAround?: boolean,
		lazyLoad?: boolean | number,
		autoPlay?: boolean | number,
		watchCSS?: boolean | string,
		asNavFor?: string,
		selectedAttraction?: number,
		friction?: number,
		freeScrollFriction?: number,
		prevNextButtons?: boolean,
		pageDots?: boolean,
		arrowShape?: any
	}

		declare class Flickity  {
		constructor(selector: string, options?: FlickityOptions): this;
		constructor(element: Element, options?: FlickityOptions): this;
		selectedIndex: number;
		selectedElement: Element;
		cells: Element[];
		data(element: string): Flickity;
		data(element: Element): Flickity;
		select(index: number, isWrapped?: boolean, isInstant?: boolean): void;
		previous(isWrapped?: boolean): void;
		next(isWrapped?: boolean): void;
		resize(): void;
		reposition(): void;
		prepend(elements: Element | NodeList): void;
		append(elements: Element | NodeList): void;
		insert(elements: Element[] | Element | NodeList, index: number): void;
		remove(elements: Element[] | Element | NodeList): void;
		destroy(): void;
		reloadCells(): void;
		getCellElements(): Element[];
		listener(...params: any[]): void;
		on(
		eventname: string, callback: (eventt?: Event, cellElement?: Element) => any
	): void;
		on(
		eventname: string, callback: (event?: Event, pointer?: Element | Touch) => any
	): void;
		on(
		eventname: string, callback: (event?: Event, pointer?: Element | Touch, moveVector?: Object) => any
	): void;
		on(
		eventname: string, callback: (
		event?: Event, pointer?: Element | Touch, cellElement?: Element, cellIndex?: number
	) => any
	): void;
		off(
		eventname: string, callback: (event?: Event, cellElement?: Element) => any
	): void;
		off(
		eventname: string, callback: (event?: Event, pointer?: Element | Touch) => any
	): void;
		off(
		eventname: string, callback: (event?: Event, pointer?: Element | Touch, moveVector?: Object) => any
	): void;
		off(
		eventname: string, callback: (
		event?: Event, pointer?: Element | Touch, cellElement?: Element, cellIndex?: number
	) => any
	): void;
		once(
		eventname: string, callback: (event?: Event, cellElement?: Element) => any
	): void;
		once(
		eventname: string, callback: (event?: Event, pointer?: Element | Touch) => any
	): void;
		once(
		eventname: string, callback: (event?: Event, pointer?: Element | Touch, moveVector?: Object) => any
	): void;
		once(
		eventname: string, callback: (
		event?: Event, pointer?: Element | Touch, cellElement?: Element, cellIndex?: number
	) => any
	): void
	}

	
}