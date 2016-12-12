

declare module 'dojox.mdnd' {
					
}

declare module 'mdnd' {
				declare class AreaManager  {
		constructor(): this;
		areaClass: string;
		autoRefresh: boolean;
		dragHandleClass: string;
		addDragItem(
		area: HTMLElement, node: HTMLElement, index: number, notCheckParent: boolean
	): any;
		destroy(): void;
		findCurrentIndexArea(coords: Object, size: Object): any;
		init(): void;
		placeDropIndicator(coords: Object, size: Object): any;
		registerByClass(): void;
		registerByNode(area: HTMLElement, notInitAreas: boolean): void;
		removeDragItem(area: HTMLElement, node: HTMLElement): any;
		unregister(area: HTMLElement): any;
		onDrag(node: HTMLElement, coords: Object, size: Object, mousePosition: Object): void;
		onDragEnter(coords: Object, size: Object): void;
		onDragExit(coords: Object, size: Object): void;
		onDragStart(node: HTMLElement, coords: Object, size: Object): void;
		onDrop(node: HTMLElement): void;
		onDropCancel(): void
	}

	declare class AutoScroll  {
		constructor(): this;
		interval: number;
		marginMouse: number;
		recursiveTimer: number;
		checkAutoScroll(e: Event): void;
		destroy(): void;
		getViewport(): void;
		init(): void;
		setAutoScrollMaxPage(): void;
		setAutoScrollNode(node: HTMLElement): void;
		stopAutoScroll(): void
	}

	declare class DropIndicator  {
		constructor(): this;
		node: HTMLElement;
		destroy(): void;
		place(area: HTMLElement, nodeRef: HTMLElement, size: Object): any;
		remove(): void
	}

	declare class LazyManager  {
		constructor(): this;
		cancelDrag(): void;
		destroy(): void;
		getItem(draggedNode: HTMLElement): Object;
		startDrag(e: Event, draggedNode: HTMLElement): void
	}

	declare class Moveable  {
		constructor(params: Object, node: HTMLElement): this;
		dragDistance: number;
		handle: HTMLElement;
		skip: boolean;
		destroy(): void;
		initOffsetDrag(e: Event): void;
		isFormElement(e: Event): any;
		onDrag(node: HTMLElement, coords: Object, size: Object, mousePosition: Object): void;
		onDragEnd(node: HTMLElement): void;
		onDragStart(node: HTMLElement, coords: Object, size: Object): void;
		onFirstMove(e: Event): void;
		onMouseDown(e: Event): void;
		onMouseUp(e: Event): void;
		onMove(e: Event): void
	}

	declare class PureSource extends undefined$Selector {
		constructor(node: HTMLElement, params?: Object): this;
		allowNested: boolean;
		copyOnly: boolean;
		current: HTMLElement;
		generateText: boolean;
		horizontal: boolean;
		isSource: boolean;
		map: Object;
		selection: Object;
		singular: boolean;
		skipForm: boolean;
		targetState: string;
		withHandles: boolean;
		clearItems(): void;
		copyState(keyPressed: boolean): any;
		creator(): void;
		deleteSelectedNodes(): Function;
		delItem(key: String): void;
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
		markupFactory(params: Object, node: HTMLElement): any;
		on(type: any, listener: any): any;
		selectAll(): any;
		selectNone(): any;
		setItem(key: String, data: any): void;
		startup(): void;
		sync(): Function;
		onDndCancel(): void;
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

declare module 'adapter' {
				declare class DndFromDojo  {
		constructor(): this;
		dropIndicatorSize: Object;
		isAccepted(node: HTMLElement, accept: Object): any;
		subscribeDnd(): void;
		unsubscribeDnd(): void;
		onDndSource(source: Object): void;
		onDragEnter(): void;
		onDragExit(): void;
		onDragStart(source: Object, nodes: any[], copy: boolean): void;
		onDrop(source: Object, nodes: any[], copy: boolean): void;
		onDropCancel(): void;
		onMouseMove(e: Event): void
	}

	declare class DndToDojo  {
		constructor(): this;
		isAccepted(draggedNode: HTMLElement, target: Object): boolean;
		refresh(): void;
		refreshByType(type: String): void;
		register(area: HTMLElement, type: String, dojoTarget: boolean): void;
		unregister(): void;
		unregisterByNode(area: HTMLElement): void;
		unregisterByType(type: String): void;
		onDragEnter(e: Event): void;
		onDragExit(e: Event): void;
		onDrop(e: Event): void;
		onMouseMove(e: Event): void
	}

	
}

declare module 'dropMode' {
				declare class DefaultDropMode  {
		constructor(): this;
		addArea(areas: any[], object: Object): any;
		destroy(): void;
		getDragPoint(coords: Object, size: Object, mousePosition: Object): any;
		getDropIndex(targetArea: Object, coords: Object): any;
		getTargetArea(areaList: any[], coords: Object, currentIndexArea: number): any;
		initItems(area: Object): void;
		refreshItems(area: Object, indexItem: number, size: Object, added: boolean): void;
		updateAreas(areaList: any[]): void
	}

	declare class OverDropMode  {
		constructor(): this;
		addArea(areas: any[], object: Object): any;
		destroy(): void;
		getDragPoint(coords: Object, size: Object, mousePosition: Object): any;
		getDropIndex(targetArea: Object, coords: Object): any;
		getTargetArea(areaList: any[], coords: Object, currentIndexArea: number): any;
		initItems(area: Object): void;
		refreshItems(area: Object, indexItem: number, size: Object, added: boolean): void;
		updateAreas(areaList: any[]): void
	}

	declare class VerticalDropMode  {
		constructor(): this;
		addArea(areas: any[], object: Object): any;
		destroy(): void;
		getDragPoint(coords: Object, size: Object, mousePosition: Object): any;
		getDropIndex(targetArea: Object, coords: Object): any;
		getTargetArea(areaList: any[], coords: Object, currentIndexArea: number): any;
		initItems(area: Object): void;
		refreshItems(area: Object, indexItem: number, size: Object, added: boolean): void;
		updateAreas(areaList: any[]): void
	}

	
}

declare module 'dojox/mdnd/AutoScroll' {
					declare module.exports: AutoScroll


}

declare module 'dojox/mdnd/DropIndicator' {
					declare module.exports: DropIndicator


}

declare module 'dojox/mdnd/AreaManager' {
					declare module.exports: AreaManager


}

declare module 'dojox/mdnd/LazyManager' {
					declare module.exports: LazyManager


}

declare module 'dojox/mdnd/Moveable' {
					declare module.exports: Moveable


}

declare module 'dojox/mdnd/PureSource' {
					declare module.exports: PureSource


}

declare module 'dojox/mdnd/adapter/DndFromDojo' {
					declare module.exports: DndFromDojo


}

declare module 'dojox/mdnd/adapter/DndToDojo' {
					declare module.exports: DndToDojo


}

declare module 'dojox/mdnd/dropMode/DefaultDropMode' {
					declare module.exports: DefaultDropMode


}

declare module 'dojox/mdnd/dropMode/OverDropMode' {
					declare module.exports: OverDropMode


}

declare module 'dojox/mdnd/dropMode/VerticalDropMode' {
					declare module.exports: VerticalDropMode


}