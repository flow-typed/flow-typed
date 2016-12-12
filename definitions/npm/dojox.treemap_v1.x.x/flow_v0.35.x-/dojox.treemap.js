

declare module 'dojox.treemap' {
					
}

declare module 'treemap' {
		declare interface _utils {
		find(array: any[], callback: Function): any,
		group(items: any[], groupingFunctions: any[], measureFunction: Function): Object,
		initElements(items: any, areaFunc: any): Object,
		solve(items: any, width: any, height: any, areaFunc: any, rtl: any): Object
	}

		declare class DrillDownUp  {
		constructor(): this;
		drillDown(renderer: HTMLElement): void;
		drillUp(renderer: HTMLElement): void;
		postCreate(): void
	}

	declare class GroupLabel  {
		constructor(): this;
		createRenderer(item: any, level: any, kind: any): any;
		styleRenderer(renderer: any, item: any, level: any, kind: any): void
	}

	declare class Keyboard extends dijit$_FocusMixin {
		constructor(): this;
		tabIndex: string;
		createRenderer(item: any, level: any, kind: any): any;
		postCreate(): void
	}

	declare class ScaledLabel  {
		constructor(): this;
		createRenderer(item: any, level: any, kind: any): any;
		styleRenderer(renderer: any, item: any, level: any, kind: any): void;
		onRendererUpdated(evt: any): void
	}

	declare class TreeMap extends dijit$_WidgetBase, undefined$_Invalidating {
		constructor(): this;
		areaAttr: string;
		set(property: "areaAttr", value: string): void;
		get(property: "areaAttr"): string;
		watch(
		property: "areaAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		attributeMap: Object;
		set(property: "attributeMap", value: Object): void;
		get(property: "attributeMap"): Object;
		watch(
		property: "attributeMap", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		baseClass: string;
		set(property: "baseClass", value: string): void;
		get(property: "baseClass"): string;
		watch(
		property: "baseClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		class: string;
		set(property: "class", value: string): void;
		get(property: "class"): string;
		watch(
		property: "class", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		colorAttr: string;
		set(property: "colorAttr", value: string): void;
		get(property: "colorAttr"): string;
		watch(
		property: "colorAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		colorModel: Object;
		set(property: "colorModel", value: Object): void;
		get(property: "colorModel"): Object;
		watch(
		property: "colorModel", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		containerNode: HTMLElement;
		set(property: "containerNode", value: HTMLElement): void;
		get(property: "containerNode"): HTMLElement;
		watch(
		property: "containerNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		dir: string;
		set(property: "dir", value: string): void;
		get(property: "dir"): string;
		watch(
		property: "dir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		domNode: HTMLElement;
		set(property: "domNode", value: HTMLElement): void;
		get(property: "domNode"): HTMLElement;
		watch(
		property: "domNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		focused: boolean;
		set(property: "focused", value: boolean): void;
		get(property: "focused"): boolean;
		watch(
		property: "focused", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		groupAttrs: any[];
		set(property: "groupAttrs", value: any[]): void;
		get(property: "groupAttrs"): any[];
		watch(
		property: "groupAttrs", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		groupFuncs: any[];
		set(property: "groupFuncs", value: any[]): void;
		get(property: "groupFuncs"): any[];
		watch(
		property: "groupFuncs", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		id: string;
		set(property: "id", value: string): void;
		get(property: "id"): string;
		watch(
		property: "id", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		invalidatingProperties: Object;
		set(property: "invalidatingProperties", value: Object): void;
		get(property: "invalidatingProperties"): Object;
		watch(
		property: "invalidatingProperties", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		invalidRendering: boolean;
		set(property: "invalidRendering", value: boolean): void;
		get(property: "invalidRendering"): boolean;
		watch(
		property: "invalidRendering", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		itemToRenderer: Object;
		set(property: "itemToRenderer", value: Object): void;
		get(property: "itemToRenderer"): Object;
		watch(
		property: "itemToRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		labelAttr: string;
		set(property: "labelAttr", value: string): void;
		get(property: "labelAttr"): string;
		watch(
		property: "labelAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		labelThreshold: number;
		set(property: "labelThreshold", value: number): void;
		get(property: "labelThreshold"): number;
		watch(
		property: "labelThreshold", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		lang: string;
		set(property: "lang", value: string): void;
		get(property: "lang"): string;
		watch(
		property: "lang", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		ownerDocument: Object;
		set(property: "ownerDocument", value: Object): void;
		get(property: "ownerDocument"): Object;
		watch(
		property: "ownerDocument", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		query: Object;
		set(property: "query", value: Object): void;
		get(property: "query"): Object;
		watch(
		property: "query", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		queryOptions: Object;
		set(property: "queryOptions", value: Object): void;
		get(property: "queryOptions"): Object;
		watch(
		property: "queryOptions", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rootItem: Object;
		set(property: "rootItem", value: Object): void;
		get(property: "rootItem"): Object;
		watch(
		property: "rootItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		selectedItem: Object;
		set(property: "selectedItem", value: Object): void;
		get(property: "selectedItem"): Object;
		watch(
		property: "selectedItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		selectedItems: Object;
		set(property: "selectedItems", value: Object): void;
		get(property: "selectedItems"): Object;
		watch(
		property: "selectedItems", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		selectionMode: string;
		set(property: "selectionMode", value: string): void;
		get(property: "selectionMode"): string;
		watch(
		property: "selectionMode", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		srcNodeRef: HTMLElement;
		set(property: "srcNodeRef", value: HTMLElement): void;
		get(property: "srcNodeRef"): HTMLElement;
		watch(
		property: "srcNodeRef", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		store: Object;
		set(property: "store", value: Object): void;
		get(property: "store"): Object;
		watch(
		property: "store", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		style: string;
		set(property: "style", value: string): void;
		get(property: "style"): string;
		watch(
		property: "style", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		title: string;
		set(property: "title", value: string): void;
		get(property: "title"): string;
		watch(
		property: "title", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltip: string;
		set(property: "tooltip", value: string): void;
		get(property: "tooltip"): string;
		watch(
		property: "tooltip", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		tooltipAttr: string;
		set(property: "tooltipAttr", value: string): void;
		get(property: "tooltipAttr"): string;
		watch(
		property: "tooltipAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		areaFunc(item: Object, store: dojo.store.api.Store): number;
		buildRendering(): void;
		colorFunc(item: Object, store: dojo.store.api.Store): any;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createRenderer(item: Object, level: number, kind: String): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchChange(
		oldSelectedItem: Object, newSelectedItem: Object, renderer: Object, triggerEvent: Event
	): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getColorForItem(item: Object): any;
		getIdentity(item: any): any;
		getLabelForItem(item: Object): any;
		getParent(): any;
		invalidateRendering(): void;
		isFocusable(): any;
		isItemSelected(item: Object): any;
		isLeftToRight(): any;
		isValid: {
		(): void
	};
		labelFunc(item: Object, store: dojo.store.api.Store): any;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		refreshRendering(): void;
		resize(box: any): void;
		selectFromEvent(e: Event, item: Object, renderer: Object, dispatch: boolean): any;
		set(name: any, value: any): any;
		setItemSelected(item: Object, value: boolean): void;
		startup(): void;
		styleRenderer(renderer: HTMLElement, item: Object, level: number, kind: String): void;
		subscribe(t: String, method: Function): any;
		tooltipFunc(item: Object, store: dojo.store.api.Store): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(items: any): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onChange(): void;
		onFocus(): void;
		onItemRollOut(): void;
		onItemRollOver(): void;
		onRendererUpdated(): void
	}

	
}

declare module 'dojox/treemap/_utils' {
					declare module.exports: _utils


}

declare module 'dojox/treemap/GroupLabel' {
					declare module.exports: GroupLabel


}

declare module 'dojox/treemap/DrillDownUp' {
					declare module.exports: DrillDownUp


}

declare module 'dojox/treemap/Keyboard' {
					declare module.exports: Keyboard


}

declare module 'dojox/treemap/ScaledLabel' {
					declare module.exports: ScaledLabel


}

declare module 'dojox/treemap/TreeMap' {
					declare module.exports: TreeMap


}