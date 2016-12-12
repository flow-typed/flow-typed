

declare module 'dojox.dnd' {
					
}

declare module 'dnd' {
				declare class BoundingBoxController  {
		constructor(sources: dojox.dnd.Selector[], domNode: String): this;
		boundingBoxIsViable(evt: Object): boolean;
		destroy(): void;
		shouldStartDrawingBox(evt: Object): boolean
	}

	declare class Selector extends undefined$Selector {
		constructor(node: HTMLElement, params?: Object): this;
		allowNested: boolean;
		conservative: boolean;
		current: HTMLElement;
		map: Object;
		selection: Object;
		singular: boolean;
		skipForm: boolean;
		clearItems(): void;
		creator(): void;
		deleteSelectedNodes(): Function;
		delItem(key: String): void;
		deselectNode(node: String): Function;
		deselectNode(node: HTMLElement): Function;
		destroy(): void;
		emit(type: any, event: any): any;
		forInItems(f: Function, o: Object): String;
		forInSelectedItems(f: Function, o: Object): void;
		getAllNodes(): any;
		getItem(key: String): any;
		getSelectedNodes(): any;
		insertNodes(data: Object, before: boolean, anchor: HTMLElement): Function;
		insertNodes(
		addSelected: boolean, data: any[], before: boolean, anchor: HTMLElement
	): Function;
		isSelected(node: String): any;
		isSelected(node: HTMLElement): any;
		markupFactory(params: any, node: any, Ctor: any): any;
		on(type: any, listener: any): any;
		selectAll(): any;
		selectByBBox(
		left: number, top: number, right: number, bottom: number, add: boolean
	): Function;
		selectNode(node: String, add: boolean): Function;
		selectNode(node: HTMLElement, add: boolean): Function;
		selectNone(): any;
		setItem(key: String, data: any): void;
		shift(toNext: boolean, add: boolean): void;
		startup(): void;
		sync(): Function;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseOut(e: Event): void;
		onMouseOver(e: Event): void;
		onMouseUp(e: Event): void;
		onOutEvent(): void;
		onOverEvent(): void;
		onSelectStart(e: Event): void
	}

	
}

declare module 'dojox/dnd/BoundingBoxController' {
					declare module.exports: BoundingBoxController


}

declare module 'dojox/dnd/Selector' {
					declare module.exports: Selector


}