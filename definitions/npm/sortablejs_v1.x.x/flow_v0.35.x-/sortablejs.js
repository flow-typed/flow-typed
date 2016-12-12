

declare module 'sortablejs' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Sortablejs' {
		declare interface SortableOptions {
		group?: any,
		sort?: boolean,
		delay?: number,
		disabled?: boolean,
		store?: {
		get: (sortable: Sortable) => any[],
		set: (sortable: Sortable) => any
	},
		animation?: number,
		handle?: string,
		filter?: any,
		draggable?: string,
		ghostClass?: string,
		chosenClass?: string,
		dataIdAttr?: string,
		forceFallback?: boolean,
		fallbackClass?: string,
		fallbackOnBody?: boolean,
		scroll?: boolean,
		scrollSensitivity?: number,
		scrollSpeed?: number,
		setData?: (dataTransfer: any, draggedElement: any) => any,
		onStart?: (event: any) => any,
		onEnd?: (event: any) => any,
		onAdd?: (event: any) => any,
		onUpdate?: (event: any) => any,
		onSort?: (event: any) => any,
		onRemove?: (event: any) => any,
		onFilter?: (event: any) => any,
		onMove?: (event: any) => boolean
	}

	declare interface SortableUtils {
		on(element: any, event: string, fn: (event: any) => any): void,
		off(element: any, event: string, fn: (event: any) => any): void,
		css(element: any): any,
		css(element: any, prop: string): any,
		css(element: any, prop: string, value: string): void,
		css(element: any, props: any): void,
		find(context: any, tagName: string, iterator?: (value: any) => any): any[],
		bind(context: any, fn: () => any): () => any,
		is(element: any, selector: string): boolean,
		closest(element: any, selector: string, context?: any): any,
		toggleClass(element: any, name: string, state: boolean): void
	}

		declare class DOMRect  {
		bottom: number;
		height: number;
		left: number;
		right: number;
		top: number;
		width: number;
		x: number;
		y: number
	}

	declare class Sortable  {
		options: SortableOptions;
		el: any;
		constructor(element: any, options: SortableOptions): this;
		active: Sortable;
		utils: SortableUtils;
		create(element: any, options: SortableOptions): Sortable;
		option(name: string, value: any): any;
		option(name: string): any;
		closest(element: any): any;
		sort(order: string[]): void;
		save(): void;
		destroy(): void;
		toArray(): string[]
	}

	
}