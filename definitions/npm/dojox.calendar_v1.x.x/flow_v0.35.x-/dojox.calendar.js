

declare module 'dojox.calendar' {
					
}

declare module 'calendar' {
		declare interface time {
		floor(
		date: Date, unit: String, steps: number, reuse: boolean, dateClassObj: Object
	): Date,
		floorToDay(d: any, reuse: boolean, dateClassObj: Object): Date,
		floorToMonth(d: any, reuse: boolean, dateClassObj: Object): Date,
		floorToWeek(
		d: Date, dateClassObj: Object, dateModule: Object, firstDayOfWeek: number, locale: String
	): any,
		isStartOfDay(d: Date, dateClassObj: Object, dateModule: Object): boolean,
		isToday(d: Date, dateClassObj: Object): boolean,
		newDate(obj: Object, dateClassObj: Object): any
	}

		declare class _RendererMixin extends dojo$Stateful {
		constructor(): this;
		edited: boolean;
		set(property: "edited", value: boolean): void;
		get(property: "edited"): boolean;
		watch(
		property: "edited", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		hovered: boolean;
		set(property: "hovered", value: boolean): void;
		get(property: "hovered"): boolean;
		watch(
		property: "hovered", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		item: Object;
		set(property: "item", value: Object): void;
		get(property: "item"): Object;
		watch(
		property: "item", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		owner: Object;
		set(property: "owner", value: Object): void;
		get(property: "owner"): Object;
		watch(
		property: "owner", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selected: boolean;
		set(property: "selected", value: boolean): void;
		get(property: "selected"): boolean;
		watch(
		property: "selected", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		storeState: boolean;
		set(property: "storeState", value: boolean): void;
		get(property: "storeState"): boolean;
		watch(
		property: "storeState", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		visibilityLimits: Object;
		set(property: "visibilityLimits", value: Object): void;
		get(property: "visibilityLimits"): Object;
		watch(
		property: "visibilityLimits", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		get(name: string): any;
		getDisplayValue(part: any): any;
		postscript(params: Object): void;
		set(name: string, value: Object): any;
		updateRendering(w: number, h: number): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class _ScrollBarBase extends dijit$_WidgetBase {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
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
		containerSize: number;
		set(property: "containerSize", value: number): void;
		get(property: "containerSize"): number;
		watch(
		property: "containerSize", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		direction: string;
		set(property: "direction", value: string): void;
		get(property: "direction"): string;
		watch(
		property: "direction", callback: {
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
		maximum: number;
		set(property: "maximum", value: number): void;
		get(property: "maximum"): number;
		watch(
		property: "maximum", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minimum: number;
		set(property: "minimum", value: number): void;
		get(property: "minimum"): number;
		watch(
		property: "minimum", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		value: number;
		set(property: "value", value: number): void;
		get(property: "value"): number;
		watch(
		property: "value", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
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
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onChange(value: number): void;
		onFocus(): void;
		onScroll(value: number): void
	}

	declare class Calendar extends undefined$CalendarBase {
		constructor(args: Object): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		animateRange: boolean;
		set(property: "animateRange", value: boolean): void;
		get(property: "animateRange"): boolean;
		watch(
		property: "animateRange", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		animationRangeDuration: number;
		set(property: "animationRangeDuration", value: number): void;
		get(property: "animationRangeDuration"): number;
		watch(
		property: "animationRangeDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		columnView: Object;
		set(property: "columnView", value: Object): void;
		get(property: "columnView"): Object;
		watch(
		property: "columnView", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		columnViewProps: Object;
		set(property: "columnViewProps", value: Object): void;
		get(property: "columnViewProps"): Object;
		watch(
		property: "columnViewProps", callback: {
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
		contextRequire: Function;
		set(property: "contextRequire", value: Function): void;
		get(property: "contextRequire"): Function;
		watch(
		property: "contextRequire", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		createItemFunc: Function;
		set(property: "createItemFunc", value: Function): void;
		get(property: "createItemFunc"): Function;
		watch(
		property: "createItemFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		createOnGridClick: boolean;
		set(property: "createOnGridClick", value: boolean): void;
		get(property: "createOnGridClick"): boolean;
		watch(
		property: "createOnGridClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		currentView: Object;
		set(property: "currentView", value: Object): void;
		get(property: "currentView"): Object;
		watch(
		property: "currentView", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		date: Date;
		set(property: "date", value: Date): void;
		get(property: "date"): Date;
		watch(
		property: "date", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		dateInterval: string;
		set(property: "dateInterval", value: string): void;
		get(property: "dateInterval"): string;
		watch(
		property: "dateInterval", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		dateIntervalSteps: number;
		set(property: "dateIntervalSteps", value: number): void;
		get(property: "dateIntervalSteps"): number;
		watch(
		property: "dateIntervalSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		datePackage: Object;
		set(property: "datePackage", value: Object): void;
		get(property: "datePackage"): Object;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endDate: Date;
		set(property: "endDate", value: Date): void;
		get(property: "endDate"): Date;
		watch(
		property: "endDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		firstDayOfWeek: number;
		set(property: "firstDayOfWeek", value: number): void;
		get(property: "firstDayOfWeek"): number;
		watch(
		property: "firstDayOfWeek", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		formatItemTimeFunc: Object;
		set(property: "formatItemTimeFunc", value: Object): void;
		get(property: "formatItemTimeFunc"): Object;
		watch(
		property: "formatItemTimeFunc", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		hoveredItem: Object;
		set(property: "hoveredItem", value: Object): void;
		get(property: "hoveredItem"): Object;
		watch(
		property: "hoveredItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		matrixView: Object;
		set(property: "matrixView", value: Object): void;
		get(property: "matrixView"): Object;
		watch(
		property: "matrixView", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		matrixViewProps: Object;
		set(property: "matrixViewProps", value: Object): void;
		get(property: "matrixViewProps"): Object;
		watch(
		property: "matrixViewProps", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		maxDate: Date;
		set(property: "maxDate", value: Date): void;
		get(property: "maxDate"): Date;
		watch(
		property: "maxDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		minDate: Date;
		set(property: "minDate", value: Date): void;
		get(property: "minDate"): Date;
		watch(
		property: "minDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		startDate: Date;
		set(property: "startDate", value: Date): void;
		get(property: "startDate"): Date;
		watch(
		property: "startDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		viewChangeDuration: number;
		set(property: "viewChangeDuration", value: number): void;
		get(property: "viewChangeDuration"): number;
		watch(
		property: "viewChangeDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		viewContainer: HTMLElement;
		set(property: "viewContainer", value: HTMLElement): void;
		get(property: "viewContainer"): HTMLElement;
		watch(
		property: "viewContainer", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		views: Object;
		set(property: "views", value: Object): void;
		get(property: "views"): Object;
		watch(
		property: "views", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		widgetsInTemplate: boolean;
		set(property: "widgetsInTemplate", value: boolean): void;
		get(property: "widgetsInTemplate"): boolean;
		watch(
		property: "widgetsInTemplate", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		addView(view: dojox.calendar.ViewBase, index: number): void;
		buildRendering(): void;
		columnViewColumnHeaderClick(e: Object): void;
		computeTimeInterval(): any;
		configureButtons(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		dayButtonClick(e: any): void;
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
		floorDate(date: Date, unit: String, steps: number, reuse: boolean): any;
		floorToDay(date: Date, reuse: boolean): any;
		floorToWeek(d: any): any;
		fourDaysButtonClick(e: any): void;
		get(name: any): any;
		getChildren(): any[];
		getIdentity(item: any): any;
		getItemStoreState(item: any): any;
		getParent(): any;
		goToday(): void;
		installDefaultViewsActions(views: any): void;
		invalidateRendering(): void;
		isFocusable(): any;
		isItemEditable(item: Object, rendererKind: String): any;
		isItemHovered(item: Object): any;
		isItemMoveEnabled(item: Object, rendererKind: String): any;
		isItemResizeEnabled(item: Object, rendererKind: String): any;
		isItemSelected(item: Object): any;
		isLeftToRight(): any;
		isStartOfDay(d: Date): any;
		isToday(date: Date): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		matrixViewRowHeaderClick(e: Object): void;
		monthButtonClick(e: any): void;
		newDate(obj: Object): any;
		nextRange(): void;
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
		previousRange(): void;
		refreshRendering(): void;
		removeView(view: dojox.calendar.ViewBase): void;
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		resize(): void;
		selectFromEvent(e: Event, item: Object, renderer: Object, dispatch: boolean): any;
		set(name: any, value: any): any;
		setItemSelected(item: Object, value: boolean): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		todayButtonClick(e: any): void;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(obj: any, stateOnly: any): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		weekButtonClick(e: any): void;
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(): void;
		onColumnHeaderClick(e: Object): void;
		onCurrentViewChange(e: Event): void;
		onExpandRendererClick(e: Object): void;
		onFocus(): void;
		onGridClick(e: Object): void;
		onGridDoubleClick(e: Object): void;
		onItemClick(e: Object): void;
		onItemContextMenu(e: Object): void;
		onItemDoubleClick(e: Object): void;
		onItemEditBegin(e: Object): void;
		onItemEditBeginGesture(e: Object): void;
		onItemEditEnd(e: Object): void;
		onItemEditEndGesture(e: Object): void;
		onItemEditMoveGesture(e: Object): void;
		onItemEditResizeGesture(e: Object): void;
		onItemRollOut(e: Object): void;
		onItemRollOver(e: Object): void;
		onRendererCreated(e: Object): void;
		onRendererDestroyed(e: Object): void;
		onRendererRecycled(e: Object): void;
		onRendererReused(e: Object): void;
		onRenderersLayoutDone(view: dojox.calendar.ViewBase): void;
		onRowHeaderClick(e: Object): void;
		onTimeIntervalChange(e: Object): void;
		onViewAdded(view: dojox.calendar.ViewBase): void;
		onViewConfigurationChange(view: dojox.calendar.ViewBase): void;
		onViewRemoved(view: dojox.calendar.ViewBase): void
	}

	declare class CalendarBase extends dijit$_WidgetBase, dijit$_TemplatedMixin {
		constructor(args: Object): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		animateRange: boolean;
		set(property: "animateRange", value: boolean): void;
		get(property: "animateRange"): boolean;
		watch(
		property: "animateRange", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		animationRangeDuration: number;
		set(property: "animationRangeDuration", value: number): void;
		get(property: "animationRangeDuration"): number;
		watch(
		property: "animationRangeDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		columnView: Object;
		set(property: "columnView", value: Object): void;
		get(property: "columnView"): Object;
		watch(
		property: "columnView", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		columnViewProps: Object;
		set(property: "columnViewProps", value: Object): void;
		get(property: "columnViewProps"): Object;
		watch(
		property: "columnViewProps", callback: {
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
		contextRequire: Function;
		set(property: "contextRequire", value: Function): void;
		get(property: "contextRequire"): Function;
		watch(
		property: "contextRequire", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		createItemFunc: Function;
		set(property: "createItemFunc", value: Function): void;
		get(property: "createItemFunc"): Function;
		watch(
		property: "createItemFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		createOnGridClick: boolean;
		set(property: "createOnGridClick", value: boolean): void;
		get(property: "createOnGridClick"): boolean;
		watch(
		property: "createOnGridClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		currentView: Object;
		set(property: "currentView", value: Object): void;
		get(property: "currentView"): Object;
		watch(
		property: "currentView", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		date: Date;
		set(property: "date", value: Date): void;
		get(property: "date"): Date;
		watch(
		property: "date", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		dateInterval: string;
		set(property: "dateInterval", value: string): void;
		get(property: "dateInterval"): string;
		watch(
		property: "dateInterval", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		dateIntervalSteps: number;
		set(property: "dateIntervalSteps", value: number): void;
		get(property: "dateIntervalSteps"): number;
		watch(
		property: "dateIntervalSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		datePackage: Object;
		set(property: "datePackage", value: Object): void;
		get(property: "datePackage"): Object;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endDate: Date;
		set(property: "endDate", value: Date): void;
		get(property: "endDate"): Date;
		watch(
		property: "endDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		firstDayOfWeek: number;
		set(property: "firstDayOfWeek", value: number): void;
		get(property: "firstDayOfWeek"): number;
		watch(
		property: "firstDayOfWeek", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		formatItemTimeFunc: Object;
		set(property: "formatItemTimeFunc", value: Object): void;
		get(property: "formatItemTimeFunc"): Object;
		watch(
		property: "formatItemTimeFunc", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		hoveredItem: Object;
		set(property: "hoveredItem", value: Object): void;
		get(property: "hoveredItem"): Object;
		watch(
		property: "hoveredItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		matrixView: Object;
		set(property: "matrixView", value: Object): void;
		get(property: "matrixView"): Object;
		watch(
		property: "matrixView", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		matrixViewProps: Object;
		set(property: "matrixViewProps", value: Object): void;
		get(property: "matrixViewProps"): Object;
		watch(
		property: "matrixViewProps", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		maxDate: Date;
		set(property: "maxDate", value: Date): void;
		get(property: "maxDate"): Date;
		watch(
		property: "maxDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		minDate: Date;
		set(property: "minDate", value: Date): void;
		get(property: "minDate"): Date;
		watch(
		property: "minDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		startDate: Date;
		set(property: "startDate", value: Date): void;
		get(property: "startDate"): Date;
		watch(
		property: "startDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		viewChangeDuration: number;
		set(property: "viewChangeDuration", value: number): void;
		get(property: "viewChangeDuration"): number;
		watch(
		property: "viewChangeDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		viewContainer: HTMLElement;
		set(property: "viewContainer", value: HTMLElement): void;
		get(property: "viewContainer"): HTMLElement;
		watch(
		property: "viewContainer", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		views: Object;
		set(property: "views", value: Object): void;
		get(property: "views"): Object;
		watch(
		property: "views", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		widgetsInTemplate: boolean;
		set(property: "widgetsInTemplate", value: boolean): void;
		get(property: "widgetsInTemplate"): boolean;
		watch(
		property: "widgetsInTemplate", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		addView(view: dojox.calendar.ViewBase, index: number): void;
		buildRendering(): void;
		columnViewColumnHeaderClick(e: Object): void;
		computeTimeInterval(): any;
		configureButtons(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		dayButtonClick(e: any): void;
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
		floorDate(date: Date, unit: String, steps: number, reuse: boolean): any;
		floorToDay(date: Date, reuse: boolean): any;
		floorToWeek(d: any): any;
		fourDaysButtonClick(e: any): void;
		get(name: any): any;
		getChildren(): any[];
		getIdentity(item: any): any;
		getItemStoreState(item: any): any;
		getParent(): any;
		goToday(): void;
		invalidateRendering(): void;
		isFocusable(): any;
		isItemEditable(item: Object, rendererKind: String): any;
		isItemHovered(item: Object): any;
		isItemMoveEnabled(item: Object, rendererKind: String): any;
		isItemResizeEnabled(item: Object, rendererKind: String): any;
		isItemSelected(item: Object): any;
		isLeftToRight(): any;
		isStartOfDay(d: Date): any;
		isToday(date: Date): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		matrixViewRowHeaderClick(e: Object): void;
		monthButtonClick(e: any): void;
		newDate(obj: Object): any;
		nextRange(): void;
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
		previousRange(): void;
		refreshRendering(): void;
		removeView(view: dojox.calendar.ViewBase): void;
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		resize(): void;
		selectFromEvent(e: Event, item: Object, renderer: Object, dispatch: boolean): any;
		set(name: any, value: any): any;
		setItemSelected(item: Object, value: boolean): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		todayButtonClick(e: any): void;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(obj: any, stateOnly: any): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		weekButtonClick(e: any): void;
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(): void;
		onColumnHeaderClick(e: Object): void;
		onCurrentViewChange(e: Event): void;
		onExpandRendererClick(e: Object): void;
		onFocus(): void;
		onGridClick(e: Object): void;
		onGridDoubleClick(e: Object): void;
		onItemClick(e: Object): void;
		onItemContextMenu(e: Object): void;
		onItemDoubleClick(e: Object): void;
		onItemEditBegin(e: Object): void;
		onItemEditBeginGesture(e: Object): void;
		onItemEditEnd(e: Object): void;
		onItemEditEndGesture(e: Object): void;
		onItemEditMoveGesture(e: Object): void;
		onItemEditResizeGesture(e: Object): void;
		onItemRollOut(e: Object): void;
		onItemRollOver(e: Object): void;
		onRendererCreated(e: Object): void;
		onRendererDestroyed(e: Object): void;
		onRendererRecycled(e: Object): void;
		onRendererReused(e: Object): void;
		onRenderersLayoutDone(view: dojox.calendar.ViewBase): void;
		onRowHeaderClick(e: Object): void;
		onTimeIntervalChange(e: Object): void;
		onViewAdded(view: dojox.calendar.ViewBase): void;
		onViewConfigurationChange(view: dojox.calendar.ViewBase): void;
		onViewRemoved(view: dojox.calendar.ViewBase): void
	}

	declare class ExpandRenderer extends dijit$_WidgetBase, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		columnIndex: number;
		set(property: "columnIndex", value: number): void;
		get(property: "columnIndex"): number;
		watch(
		property: "columnIndex", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		date: Date;
		set(property: "date", value: Date): void;
		get(property: "date"): Date;
		watch(
		property: "date", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
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
		down: boolean;
		set(property: "down", value: boolean): void;
		get(property: "down"): boolean;
		watch(
		property: "down", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		items: Object;
		set(property: "items", value: Object): void;
		get(property: "items"): Object;
		watch(
		property: "items", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		owner: Object;
		set(property: "owner", value: Object): void;
		get(property: "owner"): Object;
		watch(
		property: "owner", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		rowIndex: number;
		set(property: "rowIndex", value: number): void;
		get(property: "rowIndex"): number;
		watch(
		property: "rowIndex", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		up: boolean;
		set(property: "up", value: boolean): void;
		get(property: "up"): boolean;
		watch(
		property: "up", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
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
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onFocus(): void
	}

	declare class HorizontalRenderer extends dijit$_WidgetBase, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		arrowPadding: number;
		set(property: "arrowPadding", value: number): void;
		get(property: "arrowPadding"): number;
		watch(
		property: "arrowPadding", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		edited: boolean;
		set(property: "edited", value: boolean): void;
		get(property: "edited"): boolean;
		watch(
		property: "edited", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		hovered: boolean;
		set(property: "hovered", value: boolean): void;
		get(property: "hovered"): boolean;
		watch(
		property: "hovered", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		item: Object;
		set(property: "item", value: Object): void;
		get(property: "item"): Object;
		watch(
		property: "item", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		owner: Object;
		set(property: "owner", value: Object): void;
		get(property: "owner"): Object;
		watch(
		property: "owner", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selected: boolean;
		set(property: "selected", value: boolean): void;
		get(property: "selected"): boolean;
		watch(
		property: "selected", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		storeState: boolean;
		set(property: "storeState", value: boolean): void;
		get(property: "storeState"): boolean;
		watch(
		property: "storeState", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		visibilityLimits: Object;
		set(property: "visibilityLimits", value: Object): void;
		get(property: "visibilityLimits"): Object;
		watch(
		property: "visibilityLimits", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDisplayValue(part: any): any;
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
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
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRendering(w: number, h: number): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onFocus(): void
	}

	declare class Keyboard  {
		constructor(): this;
		allDayKeyboardLeftRightSteps: string;
		allDayKeyboardLeftRightUnit: number;
		allDayKeyboardUpDownSteps: string;
		allDayKeyboardUpDownUnit: number;
		focusedItem: Object;
		keyboardLeftRightSteps: number;
		keyboardLeftRightUnit: string;
		keyboardUpDownSteps: number;
		keyboardUpDownUnit: string;
		maxScrollAnimationDuration: number;
		resizeModifier: string;
		showFocus: boolean;
		tabIndex: string;
		postCreate(): void;
		onFocusChange(e: any): void
	}

	declare class LabelRenderer extends dijit$_WidgetBase, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		edited: boolean;
		set(property: "edited", value: boolean): void;
		get(property: "edited"): boolean;
		watch(
		property: "edited", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		hovered: boolean;
		set(property: "hovered", value: boolean): void;
		get(property: "hovered"): boolean;
		watch(
		property: "hovered", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		item: Object;
		set(property: "item", value: Object): void;
		get(property: "item"): Object;
		watch(
		property: "item", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		owner: Object;
		set(property: "owner", value: Object): void;
		get(property: "owner"): Object;
		watch(
		property: "owner", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selected: boolean;
		set(property: "selected", value: boolean): void;
		get(property: "selected"): boolean;
		watch(
		property: "selected", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		storeState: boolean;
		set(property: "storeState", value: boolean): void;
		get(property: "storeState"): boolean;
		watch(
		property: "storeState", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		visibilityLimits: Object;
		set(property: "visibilityLimits", value: Object): void;
		get(property: "visibilityLimits"): Object;
		watch(
		property: "visibilityLimits", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDisplayValue(part: any): any;
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
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
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRendering(w: number, h: number): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onFocus(): void
	}

	declare class MobileCalendar extends undefined$CalendarBase {
		constructor(args: Object): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		animateRange: boolean;
		set(property: "animateRange", value: boolean): void;
		get(property: "animateRange"): boolean;
		watch(
		property: "animateRange", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		animationRangeDuration: number;
		set(property: "animationRangeDuration", value: number): void;
		get(property: "animationRangeDuration"): number;
		watch(
		property: "animationRangeDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		columnView: Object;
		set(property: "columnView", value: Object): void;
		get(property: "columnView"): Object;
		watch(
		property: "columnView", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		columnViewProps: Object;
		set(property: "columnViewProps", value: Object): void;
		get(property: "columnViewProps"): Object;
		watch(
		property: "columnViewProps", callback: {
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
		contextRequire: Function;
		set(property: "contextRequire", value: Function): void;
		get(property: "contextRequire"): Function;
		watch(
		property: "contextRequire", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		createItemFunc: Function;
		set(property: "createItemFunc", value: Function): void;
		get(property: "createItemFunc"): Function;
		watch(
		property: "createItemFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		createOnGridClick: boolean;
		set(property: "createOnGridClick", value: boolean): void;
		get(property: "createOnGridClick"): boolean;
		watch(
		property: "createOnGridClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		currentView: Object;
		set(property: "currentView", value: Object): void;
		get(property: "currentView"): Object;
		watch(
		property: "currentView", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		date: Date;
		set(property: "date", value: Date): void;
		get(property: "date"): Date;
		watch(
		property: "date", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		dateInterval: string;
		set(property: "dateInterval", value: string): void;
		get(property: "dateInterval"): string;
		watch(
		property: "dateInterval", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		dateIntervalSteps: number;
		set(property: "dateIntervalSteps", value: number): void;
		get(property: "dateIntervalSteps"): number;
		watch(
		property: "dateIntervalSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		datePackage: Object;
		set(property: "datePackage", value: Object): void;
		get(property: "datePackage"): Object;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endDate: Date;
		set(property: "endDate", value: Date): void;
		get(property: "endDate"): Date;
		watch(
		property: "endDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		firstDayOfWeek: number;
		set(property: "firstDayOfWeek", value: number): void;
		get(property: "firstDayOfWeek"): number;
		watch(
		property: "firstDayOfWeek", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		formatItemTimeFunc: Object;
		set(property: "formatItemTimeFunc", value: Object): void;
		get(property: "formatItemTimeFunc"): Object;
		watch(
		property: "formatItemTimeFunc", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		hoveredItem: Object;
		set(property: "hoveredItem", value: Object): void;
		get(property: "hoveredItem"): Object;
		watch(
		property: "hoveredItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		matrixView: Object;
		set(property: "matrixView", value: Object): void;
		get(property: "matrixView"): Object;
		watch(
		property: "matrixView", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		matrixViewProps: Object;
		set(property: "matrixViewProps", value: Object): void;
		get(property: "matrixViewProps"): Object;
		watch(
		property: "matrixViewProps", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		maxDate: Date;
		set(property: "maxDate", value: Date): void;
		get(property: "maxDate"): Date;
		watch(
		property: "maxDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		minDate: Date;
		set(property: "minDate", value: Date): void;
		get(property: "minDate"): Date;
		watch(
		property: "minDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		startDate: Date;
		set(property: "startDate", value: Date): void;
		get(property: "startDate"): Date;
		watch(
		property: "startDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		viewChangeDuration: number;
		set(property: "viewChangeDuration", value: number): void;
		get(property: "viewChangeDuration"): number;
		watch(
		property: "viewChangeDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		viewContainer: HTMLElement;
		set(property: "viewContainer", value: HTMLElement): void;
		get(property: "viewContainer"): HTMLElement;
		watch(
		property: "viewContainer", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		views: Object;
		set(property: "views", value: Object): void;
		get(property: "views"): Object;
		watch(
		property: "views", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		widgetsInTemplate: boolean;
		set(property: "widgetsInTemplate", value: boolean): void;
		get(property: "widgetsInTemplate"): boolean;
		watch(
		property: "widgetsInTemplate", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		addView(view: dojox.calendar.ViewBase, index: number): void;
		buildRendering(): void;
		columnViewColumnHeaderClick(e: Object): void;
		computeTimeInterval(): any;
		configureButtons(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		dayButtonClick(e: any): void;
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
		floorDate(date: Date, unit: String, steps: number, reuse: boolean): any;
		floorToDay(date: Date, reuse: boolean): any;
		floorToWeek(d: any): any;
		fourDaysButtonClick(e: any): void;
		get(name: any): any;
		getChildren(): any[];
		getIdentity(item: any): any;
		getItemStoreState(item: any): any;
		getParent(): any;
		goToday(): void;
		installDefaultViewsActions(views: any): void;
		invalidateRendering(): void;
		isFocusable(): any;
		isItemEditable(item: Object, rendererKind: String): any;
		isItemHovered(item: Object): any;
		isItemMoveEnabled(item: Object, rendererKind: String): any;
		isItemResizeEnabled(item: Object, rendererKind: String): any;
		isItemSelected(item: Object): any;
		isLeftToRight(): any;
		isStartOfDay(d: Date): any;
		isToday(date: Date): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		matrixViewRowHeaderClick(e: Object): void;
		monthButtonClick(e: any): void;
		newDate(obj: Object): any;
		nextRange(): void;
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
		previousRange(): void;
		refreshRendering(): void;
		removeView(view: dojox.calendar.ViewBase): void;
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		resize(): void;
		selectFromEvent(e: Event, item: Object, renderer: Object, dispatch: boolean): any;
		set(name: any, value: any): any;
		setItemSelected(item: Object, value: boolean): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		todayButtonClick(e: any): void;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(obj: any, stateOnly: any): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		weekButtonClick(e: any): void;
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(): void;
		onColumnHeaderClick(e: Object): void;
		onCurrentViewChange(e: Event): void;
		onExpandRendererClick(e: Object): void;
		onFocus(): void;
		onGridClick(e: Object): void;
		onGridDoubleClick(e: Object): void;
		onItemClick(e: Object): void;
		onItemContextMenu(e: Object): void;
		onItemDoubleClick(e: Object): void;
		onItemEditBegin(e: Object): void;
		onItemEditBeginGesture(e: Object): void;
		onItemEditEnd(e: Object): void;
		onItemEditEndGesture(e: Object): void;
		onItemEditMoveGesture(e: Object): void;
		onItemEditResizeGesture(e: Object): void;
		onItemRollOut(e: Object): void;
		onItemRollOver(e: Object): void;
		onRendererCreated(e: Object): void;
		onRendererDestroyed(e: Object): void;
		onRendererRecycled(e: Object): void;
		onRendererReused(e: Object): void;
		onRenderersLayoutDone(view: dojox.calendar.ViewBase): void;
		onRowHeaderClick(e: Object): void;
		onTimeIntervalChange(e: Object): void;
		onViewAdded(view: dojox.calendar.ViewBase): void;
		onViewConfigurationChange(view: dojox.calendar.ViewBase): void;
		onViewRemoved(view: dojox.calendar.ViewBase): void
	}

	declare class MobileHorizontalRenderer extends dijit$_WidgetBase, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		arrowPadding: number;
		set(property: "arrowPadding", value: number): void;
		get(property: "arrowPadding"): number;
		watch(
		property: "arrowPadding", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		edited: boolean;
		set(property: "edited", value: boolean): void;
		get(property: "edited"): boolean;
		watch(
		property: "edited", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		hovered: boolean;
		set(property: "hovered", value: boolean): void;
		get(property: "hovered"): boolean;
		watch(
		property: "hovered", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		item: Object;
		set(property: "item", value: Object): void;
		get(property: "item"): Object;
		watch(
		property: "item", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		mobile: boolean;
		set(property: "mobile", value: boolean): void;
		get(property: "mobile"): boolean;
		watch(
		property: "mobile", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		owner: Object;
		set(property: "owner", value: Object): void;
		get(property: "owner"): Object;
		watch(
		property: "owner", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selected: boolean;
		set(property: "selected", value: boolean): void;
		get(property: "selected"): boolean;
		watch(
		property: "selected", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		storeState: boolean;
		set(property: "storeState", value: boolean): void;
		get(property: "storeState"): boolean;
		watch(
		property: "storeState", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		visibilityLimits: Object;
		set(property: "visibilityLimits", value: Object): void;
		get(property: "visibilityLimits"): Object;
		watch(
		property: "visibilityLimits", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDisplayValue(part: any): any;
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
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
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRendering(w: number, h: number): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onFocus(): void
	}

	declare class MobileVerticalRenderer extends dijit$_WidgetBase, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		edited: boolean;
		set(property: "edited", value: boolean): void;
		get(property: "edited"): boolean;
		watch(
		property: "edited", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		hovered: boolean;
		set(property: "hovered", value: boolean): void;
		get(property: "hovered"): boolean;
		watch(
		property: "hovered", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		item: Object;
		set(property: "item", value: Object): void;
		get(property: "item"): Object;
		watch(
		property: "item", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		mobile: boolean;
		set(property: "mobile", value: boolean): void;
		get(property: "mobile"): boolean;
		watch(
		property: "mobile", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		owner: Object;
		set(property: "owner", value: Object): void;
		get(property: "owner"): Object;
		watch(
		property: "owner", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selected: boolean;
		set(property: "selected", value: boolean): void;
		get(property: "selected"): boolean;
		watch(
		property: "selected", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		storeState: boolean;
		set(property: "storeState", value: boolean): void;
		get(property: "storeState"): boolean;
		watch(
		property: "storeState", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		visibilityLimits: Object;
		set(property: "visibilityLimits", value: Object): void;
		get(property: "visibilityLimits"): Object;
		watch(
		property: "visibilityLimits", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDisplayValue(part: any): any;
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
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
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRendering(w: number, h: number): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onFocus(): void
	}

	declare class Mouse  {
		constructor(): this;
		triggerExtent: number;
		postMixInProperties(): void;
		onItemRollOut(e: Object): void;
		onItemRollOver(e: Object): void
	}

	declare class StoreMixin extends dojo$Stateful {
		constructor(): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		get(name: string): any;
		getItemStoreState(item: any): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		postscript(params: Object): void;
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		set(name: string, value: Object): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class Touch  {
		constructor(): this;
		autoScrollTouchMargin: number;
		touchEndEditingTimer: number;
		touchStartEditingTimer: number;
		postMixInProperties(): void
	}

	declare class VerticalRenderer extends dijit$_WidgetBase, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		edited: boolean;
		set(property: "edited", value: boolean): void;
		get(property: "edited"): boolean;
		watch(
		property: "edited", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		hovered: boolean;
		set(property: "hovered", value: boolean): void;
		get(property: "hovered"): boolean;
		watch(
		property: "hovered", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		item: Object;
		set(property: "item", value: Object): void;
		get(property: "item"): Object;
		watch(
		property: "item", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		owner: Object;
		set(property: "owner", value: Object): void;
		get(property: "owner"): Object;
		watch(
		property: "owner", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selected: boolean;
		set(property: "selected", value: boolean): void;
		get(property: "selected"): boolean;
		watch(
		property: "selected", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		storeState: boolean;
		set(property: "storeState", value: boolean): void;
		get(property: "storeState"): boolean;
		watch(
		property: "storeState", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		visibilityLimits: Object;
		set(property: "visibilityLimits", value: Object): void;
		get(property: "visibilityLimits"): Object;
		watch(
		property: "visibilityLimits", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDisplayValue(part: any): any;
		getParent(): any;
		isFocusable(): any;
		isLeftToRight(): any;
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
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRendering(w: number, h: number): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onFocus(): void
	}

	declare class ViewBase extends dijit$_WidgetBase, undefined$StoreMixin {
		constructor(args: Object): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		allowResizeLessThan24H: boolean;
		set(property: "allowResizeLessThan24H", value: boolean): void;
		get(property: "allowResizeLessThan24H"): boolean;
		watch(
		property: "allowResizeLessThan24H", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowStartEndSwap: boolean;
		set(property: "allowStartEndSwap", value: boolean): void;
		get(property: "allowStartEndSwap"): boolean;
		watch(
		property: "allowStartEndSwap", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowSubColumnMove: boolean;
		set(property: "allowSubColumnMove", value: boolean): void;
		get(property: "allowSubColumnMove"): boolean;
		watch(
		property: "allowSubColumnMove", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		autoScroll: boolean;
		set(property: "autoScroll", value: boolean): void;
		get(property: "autoScroll"): boolean;
		watch(
		property: "autoScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		createOnGridClick: boolean;
		set(property: "createOnGridClick", value: boolean): void;
		get(property: "createOnGridClick"): boolean;
		watch(
		property: "createOnGridClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		datePackage: Object;
		set(property: "datePackage", value: Object): void;
		get(property: "datePackage"): Object;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		doubleTapDelay: number;
		set(property: "doubleTapDelay", value: number): void;
		get(property: "doubleTapDelay"): number;
		watch(
		property: "doubleTapDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		formatItemTimeFunc: Function;
		set(property: "formatItemTimeFunc", value: Function): void;
		get(property: "formatItemTimeFunc"): Function;
		watch(
		property: "formatItemTimeFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		hoveredItem: Object;
		set(property: "hoveredItem", value: Object): void;
		get(property: "hoveredItem"): Object;
		watch(
		property: "hoveredItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		itemToRendererKindFunc: Function;
		set(property: "itemToRendererKindFunc", value: Function): void;
		get(property: "itemToRendererKindFunc"): Function;
		watch(
		property: "itemToRendererKindFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
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
		layoutPriorityFunction: Function;
		set(property: "layoutPriorityFunction", value: Function): void;
		get(property: "layoutPriorityFunction"): Function;
		watch(
		property: "layoutPriorityFunction", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		liveLayout: boolean;
		set(property: "liveLayout", value: boolean): void;
		get(property: "liveLayout"): boolean;
		watch(
		property: "liveLayout", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		minDurationSteps: number;
		set(property: "minDurationSteps", value: number): void;
		get(property: "minDurationSteps"): number;
		watch(
		property: "minDurationSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minDurationUnit: string;
		set(property: "minDurationUnit", value: string): void;
		get(property: "minDurationUnit"): string;
		watch(
		property: "minDurationUnit", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		rendererList: any[];
		set(property: "rendererList", value: any[]): void;
		get(property: "rendererList"): any[];
		watch(
		property: "rendererList", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		rendererPool: any[];
		set(property: "rendererPool", value: any[]): void;
		get(property: "rendererPool"): any[];
		watch(
		property: "rendererPool", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		resizeCursor: string;
		set(property: "resizeCursor", value: string): void;
		get(property: "resizeCursor"): string;
		watch(
		property: "resizeCursor", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollable: boolean;
		set(property: "scrollable", value: boolean): void;
		get(property: "scrollable"): boolean;
		watch(
		property: "scrollable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollMethod: string;
		set(property: "scrollMethod", value: string): void;
		get(property: "scrollMethod"): string;
		watch(
		property: "scrollMethod", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		snapSteps: number;
		set(property: "snapSteps", value: number): void;
		get(property: "snapSteps"): number;
		watch(
		property: "snapSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		snapUnit: string;
		set(property: "snapUnit", value: string): void;
		get(property: "snapUnit"): string;
		watch(
		property: "snapUnit", callback: {
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
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		stayInView: boolean;
		set(property: "stayInView", value: boolean): void;
		get(property: "stayInView"): boolean;
		watch(
		property: "stayInView", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
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
		viewKind: string;
		set(property: "viewKind", value: string): void;
		get(property: "viewKind"): string;
		watch(
		property: "viewKind", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		afterActivate(): void;
		afterDeactivate(): void;
		applyRendererZIndex(
		item: Object, renderer: Object, hovered: boolean, selected: boolean, edited: boolean, focused: boolean
	): void;
		beforeActivate(): void;
		beforeDeactivate(): void;
		buildRendering(): void;
		computeOverlapping(layoutItems: Object[], func: any): any;
		computeProjectionOnDate(renderData: Object, refDate: Date, date: Date[], max: number): any;
		computeRangeOverlap(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createItemFunc(view: dojox.calendar.ViewBase, d: Date, e: MouseEvent): void;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: any): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchChange(
		oldSelectedItem: Object, newSelectedItem: Object, renderer: Object, triggerEvent: Event
	): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		ensureMinimalDuration(
		renderData: Object, item: Object, unit: String, steps: number, editKind: String
	): void;
		ensureVisibility(
		start: Date, end: Date, margin: number, visibilityTarget: String, duration: number
	): void;
		floorDate(date: Date, unit: String, steps: number, reuse: boolean): any;
		floorToDay(date: Date, reuse: boolean): any;
		floorToMonth(date: Date, reuse: boolean): any;
		get(name: any): any;
		getChildren(): any[];
		getCSSPrefix(): String;
		getIdentity(item: any): any;
		getItemStoreState(item: any): any;
		getParent(): any;
		getRenderers(item: Object): any;
		getSubColumn(e: Event, x: number, y: number, touchIndex: number): any;
		getSubColumnIndex(value: String): number;
		getTime(e: Event, x: number, y: number, touchIndex: number): any;
		getWeekNumberLabel(date: Date): any;
		invalidateLayout(): void;
		invalidateRendering(): void;
		isAscendantHasClass(node: HTMLElement, ancestor: HTMLElement, className: String): any;
		isFocusable(): any;
		isItemBeingEdited(item: Object): any;
		isItemEditable(item: Object, rendererKind: String): any;
		isItemFocused(item: Object): any;
		isItemHovered(item: Object): any;
		isItemMoveEnabled(item: Object, rendererKind: String): any;
		isItemResizeEnabled(item: Object, rendererKind: String): any;
		isItemSelected(item: any): any;
		isLeftToRight(): any;
		isOverlapping(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		isSameDay(date1: Date, date2: Date): any;
		isStartOfDay(d: Date): any;
		isToday(date: Date): any;
		isWeekEnd(date: Date): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		newDate(obj: Object): any;
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
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		resize(): void;
		scrollView(dir: number): void;
		selectFromEvent(e: any, item: any, renderer: any, dispatch: any): void;
		set(name: any, value: any): any;
		setItemSelected(item: any, value: any): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(obj: Object, stateOnly: boolean): void;
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
		onGridClick(e: Object): void;
		onGridDoubleClick(e: Object): void;
		onItemClick(e: Object): void;
		onItemContextMenu(e: Object): void;
		onItemDoubleClick(e: Object): void;
		onItemEditBegin(e: any): void;
		onItemEditBeginGesture(e: Object): void;
		onItemEditEnd(e: any): void;
		onItemEditEndGesture(e: Object): void;
		onItemEditMoveGesture(e: Object): void;
		onItemEditResizeGesture(e: Object): void;
		onRendererCreated(e: Object): void;
		onRendererDestroyed(e: Object): void;
		onRendererRecycled(e: Object): void;
		onRendererReused(e: Object): void;
		onRenderersLayoutDone(view: any): void
	}

	declare class ColumnViewSecondarySheet extends undefined$MatrixView {
		constructor(): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		allowResizeLessThan24H: boolean;
		set(property: "allowResizeLessThan24H", value: boolean): void;
		get(property: "allowResizeLessThan24H"): boolean;
		watch(
		property: "allowResizeLessThan24H", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowStartEndSwap: boolean;
		set(property: "allowStartEndSwap", value: boolean): void;
		get(property: "allowStartEndSwap"): boolean;
		watch(
		property: "allowStartEndSwap", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowSubColumnMove: boolean;
		set(property: "allowSubColumnMove", value: boolean): void;
		get(property: "allowSubColumnMove"): boolean;
		watch(
		property: "allowSubColumnMove", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		autoScroll: boolean;
		set(property: "autoScroll", value: boolean): void;
		get(property: "autoScroll"): boolean;
		watch(
		property: "autoScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		cellHeaderLongPattern: string;
		set(property: "cellHeaderLongPattern", value: string): void;
		get(property: "cellHeaderLongPattern"): string;
		watch(
		property: "cellHeaderLongPattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		cellHeaderShortPattern: string;
		set(property: "cellHeaderShortPattern", value: string): void;
		get(property: "cellHeaderShortPattern"): string;
		watch(
		property: "cellHeaderShortPattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		cellPaddingTop: number;
		set(property: "cellPaddingTop", value: number): void;
		get(property: "cellPaddingTop"): number;
		watch(
		property: "cellPaddingTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		columnCount: number;
		set(property: "columnCount", value: number): void;
		get(property: "columnCount"): number;
		watch(
		property: "columnCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		createOnGridClick: boolean;
		set(property: "createOnGridClick", value: boolean): void;
		get(property: "createOnGridClick"): boolean;
		watch(
		property: "createOnGridClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		datePackage: Object;
		set(property: "datePackage", value: Object): void;
		get(property: "datePackage"): Object;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		doubleTapDelay: number;
		set(property: "doubleTapDelay", value: number): void;
		get(property: "doubleTapDelay"): number;
		watch(
		property: "doubleTapDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		expandDuration: number;
		set(property: "expandDuration", value: number): void;
		get(property: "expandDuration"): number;
		watch(
		property: "expandDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		expandEasing: Function;
		set(property: "expandEasing", value: Function): void;
		get(property: "expandEasing"): Function;
		watch(
		property: "expandEasing", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		expandRenderer: Object;
		set(property: "expandRenderer", value: Object): void;
		get(property: "expandRenderer"): Object;
		watch(
		property: "expandRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		expandRendererHeight: number;
		set(property: "expandRendererHeight", value: number): void;
		get(property: "expandRendererHeight"): number;
		watch(
		property: "expandRendererHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		formatItemTimeFunc: Function;
		set(property: "formatItemTimeFunc", value: Function): void;
		get(property: "formatItemTimeFunc"): Function;
		watch(
		property: "formatItemTimeFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		horizontalRenderer: Object;
		set(property: "horizontalRenderer", value: Object): void;
		get(property: "horizontalRenderer"): Object;
		watch(
		property: "horizontalRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		horizontalRendererHeight: number;
		set(property: "horizontalRendererHeight", value: number): void;
		get(property: "horizontalRendererHeight"): number;
		watch(
		property: "horizontalRendererHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		hoveredItem: Object;
		set(property: "hoveredItem", value: Object): void;
		get(property: "hoveredItem"): Object;
		watch(
		property: "hoveredItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		itemToRendererKindFunc: Function;
		set(property: "itemToRendererKindFunc", value: Function): void;
		get(property: "itemToRendererKindFunc"): Function;
		watch(
		property: "itemToRendererKindFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		labelRenderer: Object;
		set(property: "labelRenderer", value: Object): void;
		get(property: "labelRenderer"): Object;
		watch(
		property: "labelRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		labelRendererHeight: number;
		set(property: "labelRendererHeight", value: number): void;
		get(property: "labelRendererHeight"): number;
		watch(
		property: "labelRendererHeight", callback: {
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
		layoutDuringResize: boolean;
		set(property: "layoutDuringResize", value: boolean): void;
		get(property: "layoutDuringResize"): boolean;
		watch(
		property: "layoutDuringResize", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		layoutPriorityFunction: Function;
		set(property: "layoutPriorityFunction", value: Function): void;
		get(property: "layoutPriorityFunction"): Function;
		watch(
		property: "layoutPriorityFunction", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		liveLayout: boolean;
		set(property: "liveLayout", value: boolean): void;
		get(property: "liveLayout"): boolean;
		watch(
		property: "liveLayout", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		minDurationSteps: number;
		set(property: "minDurationSteps", value: number): void;
		get(property: "minDurationSteps"): number;
		watch(
		property: "minDurationSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minDurationUnit: string;
		set(property: "minDurationUnit", value: string): void;
		get(property: "minDurationUnit"): string;
		watch(
		property: "minDurationUnit", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		naturalRowsHeight: Object;
		set(property: "naturalRowsHeight", value: Object): void;
		get(property: "naturalRowsHeight"): Object;
		watch(
		property: "naturalRowsHeight", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		percentOverlap: number;
		set(property: "percentOverlap", value: number): void;
		get(property: "percentOverlap"): number;
		watch(
		property: "percentOverlap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		refEndTime: Object;
		set(property: "refEndTime", value: Object): void;
		get(property: "refEndTime"): Object;
		watch(
		property: "refEndTime", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		refStartTime: Object;
		set(property: "refStartTime", value: Object): void;
		get(property: "refStartTime"): Object;
		watch(
		property: "refStartTime", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		renderData: Object;
		set(property: "renderData", value: Object): void;
		get(property: "renderData"): Object;
		watch(
		property: "renderData", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rendererList: any[];
		set(property: "rendererList", value: any[]): void;
		get(property: "rendererList"): any[];
		watch(
		property: "rendererList", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		rendererPool: any[];
		set(property: "rendererPool", value: any[]): void;
		get(property: "rendererPool"): any[];
		watch(
		property: "rendererPool", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		resizeAnimationDuration: number;
		set(property: "resizeAnimationDuration", value: number): void;
		get(property: "resizeAnimationDuration"): number;
		watch(
		property: "resizeAnimationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		resizeCursor: string;
		set(property: "resizeCursor", value: string): void;
		get(property: "resizeCursor"): string;
		watch(
		property: "resizeCursor", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		roundToDay: boolean;
		set(property: "roundToDay", value: boolean): void;
		get(property: "roundToDay"): boolean;
		watch(
		property: "roundToDay", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rowCount: number;
		set(property: "rowCount", value: number): void;
		get(property: "rowCount"): number;
		watch(
		property: "rowCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scrollable: boolean;
		set(property: "scrollable", value: boolean): void;
		get(property: "scrollable"): boolean;
		watch(
		property: "scrollable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollMethod: string;
		set(property: "scrollMethod", value: string): void;
		get(property: "scrollMethod"): string;
		watch(
		property: "scrollMethod", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		showCellLabel: boolean;
		set(property: "showCellLabel", value: boolean): void;
		get(property: "showCellLabel"): boolean;
		watch(
		property: "showCellLabel", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		snapSteps: number;
		set(property: "snapSteps", value: number): void;
		get(property: "snapSteps"): number;
		watch(
		property: "snapSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		snapUnit: string;
		set(property: "snapUnit", value: string): void;
		get(property: "snapUnit"): string;
		watch(
		property: "snapUnit", callback: {
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
		startDate: Date;
		set(property: "startDate", value: Date): void;
		get(property: "startDate"): Date;
		watch(
		property: "startDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		stayInView: boolean;
		set(property: "stayInView", value: boolean): void;
		get(property: "stayInView"): boolean;
		watch(
		property: "stayInView", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		styleGridCellFunc: Function;
		set(property: "styleGridCellFunc", value: Function): void;
		get(property: "styleGridCellFunc"): Function;
		watch(
		property: "styleGridCellFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		triggerExtent: number;
		set(property: "triggerExtent", value: number): void;
		get(property: "triggerExtent"): number;
		watch(
		property: "triggerExtent", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		verticalGap: number;
		set(property: "verticalGap", value: number): void;
		get(property: "verticalGap"): number;
		watch(
		property: "verticalGap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		viewKind: string;
		set(property: "viewKind", value: string): void;
		get(property: "viewKind"): string;
		watch(
		property: "viewKind", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		afterActivate(): void;
		afterDeactivate(): void;
		beforeActivate(): void;
		beforeDeactivate(): void;
		buildRendering(): void;
		collapseRow(duration: number, easing: Function, apply: any): void;
		computeOverlapping(layoutItems: Object[], func: any): any;
		computeProjectionOnDate(renderData: Object, refDate: Date, date: Date[], max: number): any;
		computeRangeOverlap(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createItemFunc(view: dojox.calendar.ViewBase, d: Date, e: MouseEvent): void;
		defaultStyleGridCell(node: HTMLElement, date: Date, renderData: Object): void;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: any): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchChange(
		oldSelectedItem: Object, newSelectedItem: Object, renderer: Object, triggerEvent: Event
	): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		ensureMinimalDuration(
		renderData: Object, item: Object, unit: String, steps: number, editKind: String
	): void;
		ensureVisibility(
		start: Date, end: Date, margin: number, visibilityTarget: String, duration: number
	): void;
		expandRendererClickHandler(e: Event, renderer: Object): void;
		expandRow(
		rowIndex: number, colIndex: number, duration: number, easing: Function, apply: any
	): number;
		floorDate(date: Date, unit: String, steps: number, reuse: boolean): any;
		floorToDay(date: Date, reuse: boolean): any;
		floorToMonth(date: Date, reuse: boolean): any;
		get(name: any): any;
		getChildren(): any[];
		getCSSPrefix(): String;
		getExpandedRowIndex(): number;
		getIdentity(item: any): any;
		getItemStoreState(item: any): any;
		getParent(): any;
		getRenderers(item: Object): any;
		getSubColumn(e: Event, x: number, y: number, touchIndex: number): any;
		getSubColumnIndex(value: String): number;
		getTime(e: Event, x: number, y: number, touchIndex: number): any;
		getWeekNumberLabel(date: Date): any;
		invalidateLayout(): void;
		invalidateRendering(): void;
		isAscendantHasClass(node: HTMLElement, ancestor: HTMLElement, className: String): any;
		isFocusable(): any;
		isItemBeingEdited(item: Object): any;
		isItemEditable(item: Object, rendererKind: String): any;
		isItemFocused(item: Object): any;
		isItemHovered(item: Object): any;
		isItemMoveEnabled(item: Object, rendererKind: String): any;
		isItemResizeEnabled(item: Object, rendererKind: String): any;
		isItemSelected(item: any): any;
		isLeftToRight(): any;
		isOverlapping(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		isSameDay(date1: Date, date2: Date): any;
		isStartOfDay(d: Date): any;
		isToday(date: Date): any;
		isWeekEnd(date: Date): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		newDate(obj: Object): any;
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
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		resize(e: any): void;
		scrollView(dir: number): void;
		selectFromEvent(e: any, item: any, renderer: any, dispatch: any): void;
		set(name: any, value: any): any;
		setItemSelected(item: any, value: any): void;
		startup(): void;
		styleColumnHeaderCell(node: HTMLElement, date: Date, renderData: Object): void;
		styleGridCell(node: HTMLElement, date: Date, renderData: Object): void;
		styleRowHeaderCell(node: HTMLElement, date: Date, renderData: Object): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(obj: Object, stateOnly: boolean): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(): void;
		onExpandAnimationEnd(expand: boolean): void;
		onExpandRendererClick(e: Object): void;
		onFocus(): void;
		onGridClick(e: Object): void;
		onGridDoubleClick(e: Object): void;
		onItemClick(e: Object): void;
		onItemContextMenu(e: Object): void;
		onItemDoubleClick(e: Object): void;
		onItemEditBegin(e: any): void;
		onItemEditBeginGesture(e: Object): void;
		onItemEditEnd(e: any): void;
		onItemEditEndGesture(e: Object): void;
		onItemEditMoveGesture(e: Object): void;
		onItemEditResizeGesture(e: Object): void;
		onRendererCreated(e: Object): void;
		onRendererDestroyed(e: Object): void;
		onRendererRecycled(e: Object): void;
		onRendererReused(e: Object): void;
		onRenderersLayoutDone(view: any): void;
		onRowHeaderClick(e: Object): void
	}

	declare class ColumnView extends undefined$SimpleColumnView {
		constructor(): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		allowResizeLessThan24H: boolean;
		set(property: "allowResizeLessThan24H", value: boolean): void;
		get(property: "allowResizeLessThan24H"): boolean;
		watch(
		property: "allowResizeLessThan24H", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowStartEndSwap: boolean;
		set(property: "allowStartEndSwap", value: boolean): void;
		get(property: "allowStartEndSwap"): boolean;
		watch(
		property: "allowStartEndSwap", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowSubColumnMove: boolean;
		set(property: "allowSubColumnMove", value: boolean): void;
		get(property: "allowSubColumnMove"): boolean;
		watch(
		property: "allowSubColumnMove", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		autoScroll: boolean;
		set(property: "autoScroll", value: boolean): void;
		get(property: "autoScroll"): boolean;
		watch(
		property: "autoScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		columnCount: number;
		set(property: "columnCount", value: number): void;
		get(property: "columnCount"): number;
		watch(
		property: "columnCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		columnHeaderDatePattern: string;
		set(property: "columnHeaderDatePattern", value: string): void;
		get(property: "columnHeaderDatePattern"): string;
		watch(
		property: "columnHeaderDatePattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		createOnGridClick: boolean;
		set(property: "createOnGridClick", value: boolean): void;
		get(property: "createOnGridClick"): boolean;
		watch(
		property: "createOnGridClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		datePackage: Object;
		set(property: "datePackage", value: Object): void;
		get(property: "datePackage"): Object;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		doubleTapDelay: number;
		set(property: "doubleTapDelay", value: number): void;
		get(property: "doubleTapDelay"): number;
		watch(
		property: "doubleTapDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		formatItemTimeFunc: Function;
		set(property: "formatItemTimeFunc", value: Function): void;
		get(property: "formatItemTimeFunc"): Function;
		watch(
		property: "formatItemTimeFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		headerPadding: number;
		set(property: "headerPadding", value: number): void;
		get(property: "headerPadding"): number;
		watch(
		property: "headerPadding", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		horizontalGap: number;
		set(property: "horizontalGap", value: number): void;
		get(property: "horizontalGap"): number;
		watch(
		property: "horizontalGap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		hourSize: number;
		set(property: "hourSize", value: number): void;
		get(property: "hourSize"): number;
		watch(
		property: "hourSize", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		hoveredItem: Object;
		set(property: "hoveredItem", value: Object): void;
		get(property: "hoveredItem"): Object;
		watch(
		property: "hoveredItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		itemToRendererKindFunc: Function;
		set(property: "itemToRendererKindFunc", value: Function): void;
		get(property: "itemToRendererKindFunc"): Function;
		watch(
		property: "itemToRendererKindFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
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
		layoutPriorityFunction: Function;
		set(property: "layoutPriorityFunction", value: Function): void;
		get(property: "layoutPriorityFunction"): Function;
		watch(
		property: "layoutPriorityFunction", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		liveLayout: boolean;
		set(property: "liveLayout", value: boolean): void;
		get(property: "liveLayout"): boolean;
		watch(
		property: "liveLayout", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxHours: number;
		set(property: "maxHours", value: number): void;
		get(property: "maxHours"): number;
		watch(
		property: "maxHours", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minColumnWidth: number;
		set(property: "minColumnWidth", value: number): void;
		get(property: "minColumnWidth"): number;
		watch(
		property: "minColumnWidth", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minDurationSteps: number;
		set(property: "minDurationSteps", value: number): void;
		get(property: "minDurationSteps"): number;
		watch(
		property: "minDurationSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minDurationUnit: string;
		set(property: "minDurationUnit", value: string): void;
		get(property: "minDurationUnit"): string;
		watch(
		property: "minDurationUnit", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		minHours: number;
		set(property: "minHours", value: number): void;
		get(property: "minHours"): number;
		watch(
		property: "minHours", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		percentOverlap: number;
		set(property: "percentOverlap", value: number): void;
		get(property: "percentOverlap"): number;
		watch(
		property: "percentOverlap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		renderData: Object;
		set(property: "renderData", value: Object): void;
		get(property: "renderData"): Object;
		watch(
		property: "renderData", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rendererList: any[];
		set(property: "rendererList", value: any[]): void;
		get(property: "rendererList"): any[];
		watch(
		property: "rendererList", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		rendererPool: any[];
		set(property: "rendererPool", value: any[]): void;
		get(property: "rendererPool"): any[];
		watch(
		property: "rendererPool", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		resizeCursor: string;
		set(property: "resizeCursor", value: string): void;
		get(property: "resizeCursor"): string;
		watch(
		property: "resizeCursor", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rowHeaderFirstLabelOffset: number;
		set(property: "rowHeaderFirstLabelOffset", value: number): void;
		get(property: "rowHeaderFirstLabelOffset"): number;
		watch(
		property: "rowHeaderFirstLabelOffset", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeaderGridSlotDuration: number;
		set(property: "rowHeaderGridSlotDuration", value: number): void;
		get(property: "rowHeaderGridSlotDuration"): number;
		watch(
		property: "rowHeaderGridSlotDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeaderLabelOffset: number;
		set(property: "rowHeaderLabelOffset", value: number): void;
		get(property: "rowHeaderLabelOffset"): number;
		watch(
		property: "rowHeaderLabelOffset", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeaderLabelSlotDuration: number;
		set(property: "rowHeaderLabelSlotDuration", value: number): void;
		get(property: "rowHeaderLabelSlotDuration"): number;
		watch(
		property: "rowHeaderLabelSlotDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeaderTimePattern: string;
		set(property: "rowHeaderTimePattern", value: string): void;
		get(property: "rowHeaderTimePattern"): string;
		watch(
		property: "rowHeaderTimePattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		scrollable: boolean;
		set(property: "scrollable", value: boolean): void;
		get(property: "scrollable"): boolean;
		watch(
		property: "scrollable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollBarRTLPosition: string;
		set(property: "scrollBarRTLPosition", value: string): void;
		get(property: "scrollBarRTLPosition"): string;
		watch(
		property: "scrollBarRTLPosition", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		scrollMethod: string;
		set(property: "scrollMethod", value: string): void;
		get(property: "scrollMethod"): string;
		watch(
		property: "scrollMethod", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		secondarySheetProps: Object;
		set(property: "secondarySheetProps", value: Object): void;
		get(property: "secondarySheetProps"): Object;
		watch(
		property: "secondarySheetProps", callback: {
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
		showTimeIndicator: boolean;
		set(property: "showTimeIndicator", value: boolean): void;
		get(property: "showTimeIndicator"): boolean;
		watch(
		property: "showTimeIndicator", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		snapSteps: number;
		set(property: "snapSteps", value: number): void;
		get(property: "snapSteps"): number;
		watch(
		property: "snapSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		snapUnit: string;
		set(property: "snapUnit", value: string): void;
		get(property: "snapUnit"): string;
		watch(
		property: "snapUnit", callback: {
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
		startDate: Date;
		set(property: "startDate", value: Date): void;
		get(property: "startDate"): Date;
		watch(
		property: "startDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		startTimeOfDay: Object;
		set(property: "startTimeOfDay", value: Object): void;
		get(property: "startTimeOfDay"): Object;
		watch(
		property: "startTimeOfDay", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		stayInView: boolean;
		set(property: "stayInView", value: boolean): void;
		get(property: "stayInView"): boolean;
		watch(
		property: "stayInView", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		styleGridCellFunc: Function;
		set(property: "styleGridCellFunc", value: Function): void;
		get(property: "styleGridCellFunc"): Function;
		watch(
		property: "styleGridCellFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		subColumns: Object;
		set(property: "subColumns", value: Object): void;
		get(property: "subColumns"): Object;
		watch(
		property: "subColumns", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		timeIndicatorRefreshInterval: number;
		set(property: "timeIndicatorRefreshInterval", value: number): void;
		get(property: "timeIndicatorRefreshInterval"): number;
		watch(
		property: "timeIndicatorRefreshInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		timeSlotDuration: number;
		set(property: "timeSlotDuration", value: number): void;
		get(property: "timeSlotDuration"): number;
		watch(
		property: "timeSlotDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		verticalRenderer: Object;
		set(property: "verticalRenderer", value: Object): void;
		get(property: "verticalRenderer"): Object;
		watch(
		property: "verticalRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		viewKind: string;
		set(property: "viewKind", value: string): void;
		get(property: "viewKind"): string;
		watch(
		property: "viewKind", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		afterActivate(): void;
		afterDeactivate(): void;
		applyRendererZIndex(
		item: Object, renderer: Object, hovered: boolean, selected: boolean, edited: boolean, focused: boolean
	): void;
		beforeActivate(): void;
		beforeDeactivate(): void;
		buildRendering(): void;
		computeOverlapping(layoutItems: Object[], func: any): any;
		computeProjectionOnDate(renderData: Object, refDate: Date, date: Date[], max: number): any;
		computeRangeOverlap(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createItemFunc(view: dojox.calendar.ViewBase, d: Date, e: MouseEvent): void;
		defaultStyleGridCell(
		node: HTMLElement, date: Date, hours: number, minutes: number, renderData: Object
	): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: any): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchChange(
		oldSelectedItem: Object, newSelectedItem: Object, renderer: Object, triggerEvent: Event
	): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		ensureMinimalDuration(
		renderData: Object, item: Object, unit: String, steps: number, editKind: String
	): void;
		ensureVisibility(
		start: Date, end: Date, margin: number, visibilityTarget: String, duration: number
	): void;
		ensureVisibility(
		start: Date, end: Date, visibilityTarget: String, margin: number, duration: number
	): void;
		floorDate(date: Date, unit: String, steps: number, reuse: boolean): any;
		floorToDay(date: Date, reuse: boolean): any;
		floorToMonth(date: Date, reuse: boolean): any;
		get(name: any): any;
		getChildren(): any[];
		getCSSPrefix(): String;
		getIdentity(item: any): any;
		getItemStoreState(item: any): any;
		getParent(): any;
		getRenderers(item: Object): any;
		getSecondarySheet(): any;
		getSubColumn(e: Event, x: number, y: number, touchIndex: number): any;
		getSubColumnIndex(value: String): number;
		getTime(e: Event, x: number, y: number, touchIndex: number): any;
		getTimeOfDay(pos: number, rd: Object): Object;
		getWeekNumberLabel(date: Date): any;
		invalidateRendering(): void;
		isAscendantHasClass(node: HTMLElement, ancestor: HTMLElement, className: String): any;
		isFocusable(): any;
		isItemBeingEdited(item: Object): any;
		isItemEditable(item: Object, rendererKind: String): any;
		isItemFocused(item: Object): any;
		isItemHovered(item: Object): any;
		isItemMoveEnabled(item: Object, rendererKind: String): any;
		isItemResizeEnabled(item: Object, rendererKind: String): any;
		isItemSelected(item: any): any;
		isLeftToRight(): any;
		isOverlapping(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		isSameDay(date1: Date, date2: Date): any;
		isStartOfDay(d: Date): any;
		isToday(date: Date): any;
		isWeekEnd(date: Date): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		newDate(obj: Object): any;
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
		postscript(): void;
		refreshRendering(): void;
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		resizeSecondarySheet(height: number): void;
		scrollView(dir: number): void;
		scrollViewHorizontal(dir: number): void;
		secondarySheetClass(): void;
		selectFromEvent(e: any, item: any, renderer: any, dispatch: any): void;
		set(name: any, value: any): any;
		setItemSelected(item: any, value: any): void;
		startup(): void;
		styleColumnHeaderCell(node: HTMLElement, date: Date, renderData: Object): void;
		styleGridCell(
		node: HTMLElement, date: Date, hours: any, minutes: any, renderData: Object
	): void;
		styleRowHeaderCell(node: HTMLElement, h: number, m: any, renderData: Object): void;
		styleSubColumnHeaderCell(node: HTMLElement, date: any, renderData: Object): void;
		subColumnLabelFunc(value: any): any;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(obj: any, stateOnly: any): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(): void;
		onColumnHeaderClick(e: Object): void;
		onFocus(): void;
		onGridClick(e: Object): void;
		onGridDoubleClick(e: Object): void;
		onItemClick(e: Object): void;
		onItemContextMenu(e: Object): void;
		onItemDoubleClick(e: Object): void;
		onItemEditBegin(e: any): void;
		onItemEditBeginGesture(e: Object): void;
		onItemEditEnd(e: any): void;
		onItemEditEndGesture(e: Object): void;
		onItemEditMoveGesture(e: Object): void;
		onItemEditResizeGesture(e: Object): void;
		onRendererCreated(e: Object): void;
		onRendererDestroyed(e: Object): void;
		onRendererRecycled(e: Object): void;
		onRendererReused(e: Object): void;
		onRenderersLayoutDone(view: any): void;
		onRowHeaderClick(e: any): void
	}

	declare class MatrixView extends undefined$ViewBase, dijit$_TemplatedMixin {
		constructor(): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		allowResizeLessThan24H: boolean;
		set(property: "allowResizeLessThan24H", value: boolean): void;
		get(property: "allowResizeLessThan24H"): boolean;
		watch(
		property: "allowResizeLessThan24H", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowStartEndSwap: boolean;
		set(property: "allowStartEndSwap", value: boolean): void;
		get(property: "allowStartEndSwap"): boolean;
		watch(
		property: "allowStartEndSwap", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowSubColumnMove: boolean;
		set(property: "allowSubColumnMove", value: boolean): void;
		get(property: "allowSubColumnMove"): boolean;
		watch(
		property: "allowSubColumnMove", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		autoScroll: boolean;
		set(property: "autoScroll", value: boolean): void;
		get(property: "autoScroll"): boolean;
		watch(
		property: "autoScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		cellHeaderLongPattern: string;
		set(property: "cellHeaderLongPattern", value: string): void;
		get(property: "cellHeaderLongPattern"): string;
		watch(
		property: "cellHeaderLongPattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		cellHeaderShortPattern: string;
		set(property: "cellHeaderShortPattern", value: string): void;
		get(property: "cellHeaderShortPattern"): string;
		watch(
		property: "cellHeaderShortPattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		cellPaddingTop: number;
		set(property: "cellPaddingTop", value: number): void;
		get(property: "cellPaddingTop"): number;
		watch(
		property: "cellPaddingTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		columnCount: number;
		set(property: "columnCount", value: number): void;
		get(property: "columnCount"): number;
		watch(
		property: "columnCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		createOnGridClick: boolean;
		set(property: "createOnGridClick", value: boolean): void;
		get(property: "createOnGridClick"): boolean;
		watch(
		property: "createOnGridClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		datePackage: Object;
		set(property: "datePackage", value: Object): void;
		get(property: "datePackage"): Object;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		doubleTapDelay: number;
		set(property: "doubleTapDelay", value: number): void;
		get(property: "doubleTapDelay"): number;
		watch(
		property: "doubleTapDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		expandDuration: number;
		set(property: "expandDuration", value: number): void;
		get(property: "expandDuration"): number;
		watch(
		property: "expandDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		expandEasing: Function;
		set(property: "expandEasing", value: Function): void;
		get(property: "expandEasing"): Function;
		watch(
		property: "expandEasing", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		expandRenderer: Object;
		set(property: "expandRenderer", value: Object): void;
		get(property: "expandRenderer"): Object;
		watch(
		property: "expandRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		expandRendererHeight: number;
		set(property: "expandRendererHeight", value: number): void;
		get(property: "expandRendererHeight"): number;
		watch(
		property: "expandRendererHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		formatItemTimeFunc: Function;
		set(property: "formatItemTimeFunc", value: Function): void;
		get(property: "formatItemTimeFunc"): Function;
		watch(
		property: "formatItemTimeFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		horizontalRenderer: Object;
		set(property: "horizontalRenderer", value: Object): void;
		get(property: "horizontalRenderer"): Object;
		watch(
		property: "horizontalRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		horizontalRendererHeight: number;
		set(property: "horizontalRendererHeight", value: number): void;
		get(property: "horizontalRendererHeight"): number;
		watch(
		property: "horizontalRendererHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		hoveredItem: Object;
		set(property: "hoveredItem", value: Object): void;
		get(property: "hoveredItem"): Object;
		watch(
		property: "hoveredItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		itemToRendererKindFunc: Function;
		set(property: "itemToRendererKindFunc", value: Function): void;
		get(property: "itemToRendererKindFunc"): Function;
		watch(
		property: "itemToRendererKindFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		labelRenderer: Object;
		set(property: "labelRenderer", value: Object): void;
		get(property: "labelRenderer"): Object;
		watch(
		property: "labelRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		labelRendererHeight: number;
		set(property: "labelRendererHeight", value: number): void;
		get(property: "labelRendererHeight"): number;
		watch(
		property: "labelRendererHeight", callback: {
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
		layoutDuringResize: boolean;
		set(property: "layoutDuringResize", value: boolean): void;
		get(property: "layoutDuringResize"): boolean;
		watch(
		property: "layoutDuringResize", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		layoutPriorityFunction: Function;
		set(property: "layoutPriorityFunction", value: Function): void;
		get(property: "layoutPriorityFunction"): Function;
		watch(
		property: "layoutPriorityFunction", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		liveLayout: boolean;
		set(property: "liveLayout", value: boolean): void;
		get(property: "liveLayout"): boolean;
		watch(
		property: "liveLayout", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		minDurationSteps: number;
		set(property: "minDurationSteps", value: number): void;
		get(property: "minDurationSteps"): number;
		watch(
		property: "minDurationSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minDurationUnit: string;
		set(property: "minDurationUnit", value: string): void;
		get(property: "minDurationUnit"): string;
		watch(
		property: "minDurationUnit", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		naturalRowsHeight: Object;
		set(property: "naturalRowsHeight", value: Object): void;
		get(property: "naturalRowsHeight"): Object;
		watch(
		property: "naturalRowsHeight", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		percentOverlap: number;
		set(property: "percentOverlap", value: number): void;
		get(property: "percentOverlap"): number;
		watch(
		property: "percentOverlap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		refEndTime: Object;
		set(property: "refEndTime", value: Object): void;
		get(property: "refEndTime"): Object;
		watch(
		property: "refEndTime", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		refStartTime: Object;
		set(property: "refStartTime", value: Object): void;
		get(property: "refStartTime"): Object;
		watch(
		property: "refStartTime", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		renderData: Object;
		set(property: "renderData", value: Object): void;
		get(property: "renderData"): Object;
		watch(
		property: "renderData", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rendererList: any[];
		set(property: "rendererList", value: any[]): void;
		get(property: "rendererList"): any[];
		watch(
		property: "rendererList", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		rendererPool: any[];
		set(property: "rendererPool", value: any[]): void;
		get(property: "rendererPool"): any[];
		watch(
		property: "rendererPool", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		resizeAnimationDuration: number;
		set(property: "resizeAnimationDuration", value: number): void;
		get(property: "resizeAnimationDuration"): number;
		watch(
		property: "resizeAnimationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		resizeCursor: string;
		set(property: "resizeCursor", value: string): void;
		get(property: "resizeCursor"): string;
		watch(
		property: "resizeCursor", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		roundToDay: boolean;
		set(property: "roundToDay", value: boolean): void;
		get(property: "roundToDay"): boolean;
		watch(
		property: "roundToDay", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rowCount: number;
		set(property: "rowCount", value: number): void;
		get(property: "rowCount"): number;
		watch(
		property: "rowCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scrollable: boolean;
		set(property: "scrollable", value: boolean): void;
		get(property: "scrollable"): boolean;
		watch(
		property: "scrollable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollMethod: string;
		set(property: "scrollMethod", value: string): void;
		get(property: "scrollMethod"): string;
		watch(
		property: "scrollMethod", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		showCellLabel: boolean;
		set(property: "showCellLabel", value: boolean): void;
		get(property: "showCellLabel"): boolean;
		watch(
		property: "showCellLabel", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		snapSteps: number;
		set(property: "snapSteps", value: number): void;
		get(property: "snapSteps"): number;
		watch(
		property: "snapSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		snapUnit: string;
		set(property: "snapUnit", value: string): void;
		get(property: "snapUnit"): string;
		watch(
		property: "snapUnit", callback: {
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
		startDate: Date;
		set(property: "startDate", value: Date): void;
		get(property: "startDate"): Date;
		watch(
		property: "startDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		stayInView: boolean;
		set(property: "stayInView", value: boolean): void;
		get(property: "stayInView"): boolean;
		watch(
		property: "stayInView", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		styleGridCellFunc: Function;
		set(property: "styleGridCellFunc", value: Function): void;
		get(property: "styleGridCellFunc"): Function;
		watch(
		property: "styleGridCellFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		triggerExtent: number;
		set(property: "triggerExtent", value: number): void;
		get(property: "triggerExtent"): number;
		watch(
		property: "triggerExtent", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		verticalGap: number;
		set(property: "verticalGap", value: number): void;
		get(property: "verticalGap"): number;
		watch(
		property: "verticalGap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		viewKind: string;
		set(property: "viewKind", value: string): void;
		get(property: "viewKind"): string;
		watch(
		property: "viewKind", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		afterActivate(): void;
		afterDeactivate(): void;
		beforeActivate(): void;
		beforeDeactivate(): void;
		buildRendering(): void;
		collapseRow(duration: number, easing: Function, apply: any): void;
		computeOverlapping(layoutItems: Object[], func: any): any;
		computeProjectionOnDate(renderData: Object, refDate: Date, date: Date[], max: number): any;
		computeRangeOverlap(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createItemFunc(view: dojox.calendar.ViewBase, d: Date, e: MouseEvent): void;
		defaultStyleGridCell(node: HTMLElement, date: Date, renderData: Object): void;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: any): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchChange(
		oldSelectedItem: Object, newSelectedItem: Object, renderer: Object, triggerEvent: Event
	): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		ensureMinimalDuration(
		renderData: Object, item: Object, unit: String, steps: number, editKind: String
	): void;
		ensureVisibility(
		start: Date, end: Date, margin: number, visibilityTarget: String, duration: number
	): void;
		expandRendererClickHandler(e: Event, renderer: Object): void;
		expandRow(
		rowIndex: number, colIndex: number, duration: number, easing: Function, apply: any
	): number;
		floorDate(date: Date, unit: String, steps: number, reuse: boolean): any;
		floorToDay(date: Date, reuse: boolean): any;
		floorToMonth(date: Date, reuse: boolean): any;
		get(name: any): any;
		getChildren(): any[];
		getCSSPrefix(): String;
		getExpandedRowIndex(): number;
		getIdentity(item: any): any;
		getItemStoreState(item: any): any;
		getParent(): any;
		getRenderers(item: Object): any;
		getSubColumn(e: Event, x: number, y: number, touchIndex: number): any;
		getSubColumnIndex(value: String): number;
		getTime(e: Event, x: number, y: number, touchIndex: number): any;
		getWeekNumberLabel(date: Date): any;
		invalidateLayout(): void;
		invalidateRendering(): void;
		isAscendantHasClass(node: HTMLElement, ancestor: HTMLElement, className: String): any;
		isFocusable(): any;
		isItemBeingEdited(item: Object): any;
		isItemEditable(item: Object, rendererKind: String): any;
		isItemFocused(item: Object): any;
		isItemHovered(item: Object): any;
		isItemMoveEnabled(item: Object, rendererKind: String): any;
		isItemResizeEnabled(item: Object, rendererKind: String): any;
		isItemSelected(item: any): any;
		isLeftToRight(): any;
		isOverlapping(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		isSameDay(date1: Date, date2: Date): any;
		isStartOfDay(d: Date): any;
		isToday(date: Date): any;
		isWeekEnd(date: Date): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		newDate(obj: Object): any;
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
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		resize(e?: any): void;
		scrollView(dir: number): void;
		selectFromEvent(e: any, item: any, renderer: any, dispatch: any): void;
		set(name: any, value: any): any;
		setItemSelected(item: any, value: any): void;
		startup(): void;
		styleColumnHeaderCell(node: HTMLElement, date: Date, renderData: Object): void;
		styleGridCell(node: HTMLElement, date: Date, renderData: Object): void;
		styleRowHeaderCell(node: HTMLElement, date: Date, renderData: Object): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(obj: Object, stateOnly: boolean): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(): void;
		onExpandAnimationEnd(expand: boolean): void;
		onExpandRendererClick(e: Object): void;
		onFocus(): void;
		onGridClick(e: Object): void;
		onGridDoubleClick(e: Object): void;
		onItemClick(e: Object): void;
		onItemContextMenu(e: Object): void;
		onItemDoubleClick(e: Object): void;
		onItemEditBegin(e: any): void;
		onItemEditBeginGesture(e: Object): void;
		onItemEditEnd(e: any): void;
		onItemEditEndGesture(e: Object): void;
		onItemEditMoveGesture(e: Object): void;
		onItemEditResizeGesture(e: Object): void;
		onRendererCreated(e: Object): void;
		onRendererDestroyed(e: Object): void;
		onRendererRecycled(e: Object): void;
		onRendererReused(e: Object): void;
		onRenderersLayoutDone(view: any): void;
		onRowHeaderClick(e: Object): void
	}

	declare class MonthColumnView extends undefined$ViewBase, dijit$_TemplatedMixin {
		constructor(): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		allowResizeLessThan24H: boolean;
		set(property: "allowResizeLessThan24H", value: boolean): void;
		get(property: "allowResizeLessThan24H"): boolean;
		watch(
		property: "allowResizeLessThan24H", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowStartEndSwap: boolean;
		set(property: "allowStartEndSwap", value: boolean): void;
		get(property: "allowStartEndSwap"): boolean;
		watch(
		property: "allowStartEndSwap", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowSubColumnMove: boolean;
		set(property: "allowSubColumnMove", value: boolean): void;
		get(property: "allowSubColumnMove"): boolean;
		watch(
		property: "allowSubColumnMove", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		autoScroll: boolean;
		set(property: "autoScroll", value: boolean): void;
		get(property: "autoScroll"): boolean;
		watch(
		property: "autoScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		columnCount: number;
		set(property: "columnCount", value: number): void;
		get(property: "columnCount"): number;
		watch(
		property: "columnCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		columnHeaderFormatLength: string;
		set(property: "columnHeaderFormatLength", value: string): void;
		get(property: "columnHeaderFormatLength"): string;
		watch(
		property: "columnHeaderFormatLength", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		createOnGridClick: boolean;
		set(property: "createOnGridClick", value: boolean): void;
		get(property: "createOnGridClick"): boolean;
		watch(
		property: "createOnGridClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		datePackage: Object;
		set(property: "datePackage", value: Object): void;
		get(property: "datePackage"): Object;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		daySize: number;
		set(property: "daySize", value: number): void;
		get(property: "daySize"): number;
		watch(
		property: "daySize", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		doubleTapDelay: number;
		set(property: "doubleTapDelay", value: number): void;
		get(property: "doubleTapDelay"): number;
		watch(
		property: "doubleTapDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		formatItemTimeFunc: Function;
		set(property: "formatItemTimeFunc", value: Function): void;
		get(property: "formatItemTimeFunc"): Function;
		watch(
		property: "formatItemTimeFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		gridCellDatePattern: string;
		set(property: "gridCellDatePattern", value: string): void;
		get(property: "gridCellDatePattern"): string;
		watch(
		property: "gridCellDatePattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		horizontalGap: number;
		set(property: "horizontalGap", value: number): void;
		get(property: "horizontalGap"): number;
		watch(
		property: "horizontalGap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		hoveredItem: Object;
		set(property: "hoveredItem", value: Object): void;
		get(property: "hoveredItem"): Object;
		watch(
		property: "hoveredItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		itemToRendererKindFunc: Function;
		set(property: "itemToRendererKindFunc", value: Function): void;
		get(property: "itemToRendererKindFunc"): Function;
		watch(
		property: "itemToRendererKindFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
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
		layoutPriorityFunction: Function;
		set(property: "layoutPriorityFunction", value: Function): void;
		get(property: "layoutPriorityFunction"): Function;
		watch(
		property: "layoutPriorityFunction", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		liveLayout: boolean;
		set(property: "liveLayout", value: boolean): void;
		get(property: "liveLayout"): boolean;
		watch(
		property: "liveLayout", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		minDurationSteps: number;
		set(property: "minDurationSteps", value: number): void;
		get(property: "minDurationSteps"): number;
		watch(
		property: "minDurationSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minDurationUnit: string;
		set(property: "minDurationUnit", value: string): void;
		get(property: "minDurationUnit"): string;
		watch(
		property: "minDurationUnit", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		percentOverlap: number;
		set(property: "percentOverlap", value: number): void;
		get(property: "percentOverlap"): number;
		watch(
		property: "percentOverlap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		renderData: Object;
		set(property: "renderData", value: Object): void;
		get(property: "renderData"): Object;
		watch(
		property: "renderData", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rendererList: any[];
		set(property: "rendererList", value: any[]): void;
		get(property: "rendererList"): any[];
		watch(
		property: "rendererList", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		rendererPool: any[];
		set(property: "rendererPool", value: any[]): void;
		get(property: "rendererPool"): any[];
		watch(
		property: "rendererPool", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		resizeCursor: string;
		set(property: "resizeCursor", value: string): void;
		get(property: "resizeCursor"): string;
		watch(
		property: "resizeCursor", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		roundToDay: boolean;
		set(property: "roundToDay", value: boolean): void;
		get(property: "roundToDay"): boolean;
		watch(
		property: "roundToDay", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollable: boolean;
		set(property: "scrollable", value: boolean): void;
		get(property: "scrollable"): boolean;
		watch(
		property: "scrollable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollBarRTLPosition: string;
		set(property: "scrollBarRTLPosition", value: string): void;
		get(property: "scrollBarRTLPosition"): string;
		watch(
		property: "scrollBarRTLPosition", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		scrollMethod: string;
		set(property: "scrollMethod", value: string): void;
		get(property: "scrollMethod"): string;
		watch(
		property: "scrollMethod", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		scrollPosition: number;
		set(property: "scrollPosition", value: number): void;
		get(property: "scrollPosition"): number;
		watch(
		property: "scrollPosition", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		showCellLabel: boolean;
		set(property: "showCellLabel", value: boolean): void;
		get(property: "showCellLabel"): boolean;
		watch(
		property: "showCellLabel", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		showHiddenItems: boolean;
		set(property: "showHiddenItems", value: boolean): void;
		get(property: "showHiddenItems"): boolean;
		watch(
		property: "showHiddenItems", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		snapSteps: number;
		set(property: "snapSteps", value: number): void;
		get(property: "snapSteps"): number;
		watch(
		property: "snapSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		snapUnit: string;
		set(property: "snapUnit", value: string): void;
		get(property: "snapUnit"): string;
		watch(
		property: "snapUnit", callback: {
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
		startDate: Date;
		set(property: "startDate", value: Date): void;
		get(property: "startDate"): Date;
		watch(
		property: "startDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		stayInView: boolean;
		set(property: "stayInView", value: boolean): void;
		get(property: "stayInView"): boolean;
		watch(
		property: "stayInView", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		styleGridCellFunc: Function;
		set(property: "styleGridCellFunc", value: Function): void;
		get(property: "styleGridCellFunc"): Function;
		watch(
		property: "styleGridCellFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
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
		verticalRenderer: Object;
		set(property: "verticalRenderer", value: Object): void;
		get(property: "verticalRenderer"): Object;
		watch(
		property: "verticalRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		viewKind: string;
		set(property: "viewKind", value: string): void;
		get(property: "viewKind"): string;
		watch(
		property: "viewKind", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		afterActivate(): void;
		afterDeactivate(): void;
		applyRendererZIndex(
		item: Object, renderer: Object, hovered: boolean, selected: boolean, edited: boolean, focused: boolean
	): void;
		beforeActivate(): void;
		beforeDeactivate(): void;
		computeOverlapping(layoutItems: Object[], func: any): any;
		computeProjectionOnDate(renderData: Object, refDate: Date, date: Date[], max: number): any;
		computeRangeOverlap(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createItemFunc(view: dojox.calendar.ViewBase, d: Date, e: MouseEvent): void;
		defaultStyleGridCell(
		node: HTMLElement, date: Date, col: number, row: number, renderData: Object
	): void;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: any): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchChange(
		oldSelectedItem: Object, newSelectedItem: Object, renderer: Object, triggerEvent: Event
	): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		ensureMinimalDuration(
		renderData: Object, item: Object, unit: String, steps: number, editKind: String
	): void;
		ensureVisibility(
		start: Date, end: Date, margin: number, visibilityTarget: String, duration: number
	): void;
		ensureVisibility(
		start: Date, end: Date, visibilityTarget: String, margin: number, duration: number
	): void;
		floorDate(date: Date, unit: String, steps: number, reuse: boolean): any;
		floorToDay(date: Date, reuse: boolean): any;
		floorToMonth(date: Date, reuse: boolean): any;
		get(name: any): any;
		getChildren(): any[];
		getCSSPrefix(): String;
		getIdentity(item: any): any;
		getItemStoreState(item: any): any;
		getParent(): any;
		getRenderers(item: Object): any;
		getSubColumn(e: Event, x: number, y: number, touchIndex: number): any;
		getSubColumnIndex(value: String): number;
		getTime(e: Event, x: number, y: number, touchIndex: number): any;
		getWeekNumberLabel(date: Date): any;
		invalidateLayout(): void;
		invalidateRendering(): void;
		isAscendantHasClass(node: HTMLElement, ancestor: HTMLElement, className: String): any;
		isFocusable(): any;
		isItemBeingEdited(item: Object): any;
		isItemEditable(item: Object, rendererKind: String): any;
		isItemFocused(item: Object): any;
		isItemHovered(item: Object): any;
		isItemMoveEnabled(item: Object, rendererKind: String): any;
		isItemResizeEnabled(item: Object, rendererKind: String): any;
		isItemSelected(item: any): any;
		isLeftToRight(): any;
		isOverlapping(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		isSameDay(date1: Date, date2: Date): any;
		isStartOfDay(d: Date): any;
		isToday(date: Date): any;
		isWeekEnd(date: Date): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		newDate(obj: Object): any;
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
		postscript(): void;
		refreshRendering(): void;
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		resize(): void;
		scrollView(dir: number): void;
		selectFromEvent(e: any, item: any, renderer: any, dispatch: any): void;
		set(name: any, value: any): any;
		setItemSelected(item: any, value: any): void;
		startup(): void;
		styleColumnHeaderCell(node: HTMLElement, date: Date, renderData: Object): void;
		styleGridCell(
		node: HTMLElement, date: Date, col: number, row: number, renderData: Object
	): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(obj: Object, stateOnly: boolean): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(): void;
		onColumnHeaderClick(e: Object): void;
		onFocus(): void;
		onGridClick(e: Object): void;
		onGridDoubleClick(e: Object): void;
		onItemClick(e: Object): void;
		onItemContextMenu(e: Object): void;
		onItemDoubleClick(e: Object): void;
		onItemEditBegin(e: any): void;
		onItemEditBeginGesture(e: Object): void;
		onItemEditEnd(e: any): void;
		onItemEditEndGesture(e: Object): void;
		onItemEditMoveGesture(e: Object): void;
		onItemEditResizeGesture(e: Object): void;
		onRendererCreated(e: Object): void;
		onRendererDestroyed(e: Object): void;
		onRendererRecycled(e: Object): void;
		onRendererReused(e: Object): void;
		onRenderersLayoutDone(view: any): void
	}

	declare class SimpleColumnView extends undefined$ViewBase, dijit$_TemplatedMixin {
		constructor(): this;
		allDayAttr: string;
		set(property: "allDayAttr", value: string): void;
		get(property: "allDayAttr"): string;
		watch(
		property: "allDayAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		allowResizeLessThan24H: boolean;
		set(property: "allowResizeLessThan24H", value: boolean): void;
		get(property: "allowResizeLessThan24H"): boolean;
		watch(
		property: "allowResizeLessThan24H", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowStartEndSwap: boolean;
		set(property: "allowStartEndSwap", value: boolean): void;
		get(property: "allowStartEndSwap"): boolean;
		watch(
		property: "allowStartEndSwap", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		allowSubColumnMove: boolean;
		set(property: "allowSubColumnMove", value: boolean): void;
		get(property: "allowSubColumnMove"): boolean;
		watch(
		property: "allowSubColumnMove", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		attachScope: Object;
		set(property: "attachScope", value: Object): void;
		get(property: "attachScope"): Object;
		watch(
		property: "attachScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		autoScroll: boolean;
		set(property: "autoScroll", value: boolean): void;
		get(property: "autoScroll"): boolean;
		watch(
		property: "autoScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		columnCount: number;
		set(property: "columnCount", value: number): void;
		get(property: "columnCount"): number;
		watch(
		property: "columnCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		columnHeaderDatePattern: string;
		set(property: "columnHeaderDatePattern", value: string): void;
		get(property: "columnHeaderDatePattern"): string;
		watch(
		property: "columnHeaderDatePattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		createOnGridClick: boolean;
		set(property: "createOnGridClick", value: boolean): void;
		get(property: "createOnGridClick"): boolean;
		watch(
		property: "createOnGridClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		cssClassFunc: Function;
		set(property: "cssClassFunc", value: Function): void;
		get(property: "cssClassFunc"): Function;
		watch(
		property: "cssClassFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		datePackage: Object;
		set(property: "datePackage", value: Object): void;
		get(property: "datePackage"): Object;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		decodeDate: Object;
		set(property: "decodeDate", value: Object): void;
		get(property: "decodeDate"): Object;
		watch(
		property: "decodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		displayedItemsInvalidated: boolean;
		set(property: "displayedItemsInvalidated", value: boolean): void;
		get(property: "displayedItemsInvalidated"): boolean;
		watch(
		property: "displayedItemsInvalidated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		doubleTapDelay: number;
		set(property: "doubleTapDelay", value: number): void;
		get(property: "doubleTapDelay"): number;
		watch(
		property: "doubleTapDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		encodeDate: Object;
		set(property: "encodeDate", value: Object): void;
		get(property: "encodeDate"): Object;
		watch(
		property: "encodeDate", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endTimeAttr: string;
		set(property: "endTimeAttr", value: string): void;
		get(property: "endTimeAttr"): string;
		watch(
		property: "endTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		formatItemTimeFunc: Function;
		set(property: "formatItemTimeFunc", value: Function): void;
		get(property: "formatItemTimeFunc"): Function;
		watch(
		property: "formatItemTimeFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		horizontalGap: number;
		set(property: "horizontalGap", value: number): void;
		get(property: "horizontalGap"): number;
		watch(
		property: "horizontalGap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		hourSize: number;
		set(property: "hourSize", value: number): void;
		get(property: "hourSize"): number;
		watch(
		property: "hourSize", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		hoveredItem: Object;
		set(property: "hoveredItem", value: Object): void;
		get(property: "hoveredItem"): Object;
		watch(
		property: "hoveredItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		itemToRendererKindFunc: Function;
		set(property: "itemToRendererKindFunc", value: Function): void;
		get(property: "itemToRendererKindFunc"): Function;
		watch(
		property: "itemToRendererKindFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
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
		layoutPriorityFunction: Function;
		set(property: "layoutPriorityFunction", value: Function): void;
		get(property: "layoutPriorityFunction"): Function;
		watch(
		property: "layoutPriorityFunction", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		liveLayout: boolean;
		set(property: "liveLayout", value: boolean): void;
		get(property: "liveLayout"): boolean;
		watch(
		property: "liveLayout", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxHours: number;
		set(property: "maxHours", value: number): void;
		get(property: "maxHours"): number;
		watch(
		property: "maxHours", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minColumnWidth: number;
		set(property: "minColumnWidth", value: number): void;
		get(property: "minColumnWidth"): number;
		watch(
		property: "minColumnWidth", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minDurationSteps: number;
		set(property: "minDurationSteps", value: number): void;
		get(property: "minDurationSteps"): number;
		watch(
		property: "minDurationSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minDurationUnit: string;
		set(property: "minDurationUnit", value: string): void;
		get(property: "minDurationUnit"): string;
		watch(
		property: "minDurationUnit", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		minHours: number;
		set(property: "minHours", value: number): void;
		get(property: "minHours"): number;
		watch(
		property: "minHours", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		moveEnabled: boolean;
		set(property: "moveEnabled", value: boolean): void;
		get(property: "moveEnabled"): boolean;
		watch(
		property: "moveEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		percentOverlap: number;
		set(property: "percentOverlap", value: number): void;
		get(property: "percentOverlap"): number;
		watch(
		property: "percentOverlap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		renderData: Object;
		set(property: "renderData", value: Object): void;
		get(property: "renderData"): Object;
		watch(
		property: "renderData", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rendererList: any[];
		set(property: "rendererList", value: any[]): void;
		get(property: "rendererList"): any[];
		watch(
		property: "rendererList", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		rendererPool: any[];
		set(property: "rendererPool", value: any[]): void;
		get(property: "rendererPool"): any[];
		watch(
		property: "rendererPool", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		resizeCursor: string;
		set(property: "resizeCursor", value: string): void;
		get(property: "resizeCursor"): string;
		watch(
		property: "resizeCursor", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		resizeEnabled: boolean;
		set(property: "resizeEnabled", value: boolean): void;
		get(property: "resizeEnabled"): boolean;
		watch(
		property: "resizeEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rowHeaderFirstLabelOffset: number;
		set(property: "rowHeaderFirstLabelOffset", value: number): void;
		get(property: "rowHeaderFirstLabelOffset"): number;
		watch(
		property: "rowHeaderFirstLabelOffset", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeaderGridSlotDuration: number;
		set(property: "rowHeaderGridSlotDuration", value: number): void;
		get(property: "rowHeaderGridSlotDuration"): number;
		watch(
		property: "rowHeaderGridSlotDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeaderLabelOffset: number;
		set(property: "rowHeaderLabelOffset", value: number): void;
		get(property: "rowHeaderLabelOffset"): number;
		watch(
		property: "rowHeaderLabelOffset", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeaderLabelSlotDuration: number;
		set(property: "rowHeaderLabelSlotDuration", value: number): void;
		get(property: "rowHeaderLabelSlotDuration"): number;
		watch(
		property: "rowHeaderLabelSlotDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeaderTimePattern: string;
		set(property: "rowHeaderTimePattern", value: string): void;
		get(property: "rowHeaderTimePattern"): string;
		watch(
		property: "rowHeaderTimePattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		scrollable: boolean;
		set(property: "scrollable", value: boolean): void;
		get(property: "scrollable"): boolean;
		watch(
		property: "scrollable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollBarRTLPosition: string;
		set(property: "scrollBarRTLPosition", value: string): void;
		get(property: "scrollBarRTLPosition"): string;
		watch(
		property: "scrollBarRTLPosition", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		scrollMethod: string;
		set(property: "scrollMethod", value: string): void;
		get(property: "scrollMethod"): string;
		watch(
		property: "scrollMethod", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		searchContainerNode: boolean;
		set(property: "searchContainerNode", value: boolean): void;
		get(property: "searchContainerNode"): boolean;
		watch(
		property: "searchContainerNode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		showTimeIndicator: boolean;
		set(property: "showTimeIndicator", value: boolean): void;
		get(property: "showTimeIndicator"): boolean;
		watch(
		property: "showTimeIndicator", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		snapSteps: number;
		set(property: "snapSteps", value: number): void;
		get(property: "snapSteps"): number;
		watch(
		property: "snapSteps", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		snapUnit: string;
		set(property: "snapUnit", value: string): void;
		get(property: "snapUnit"): string;
		watch(
		property: "snapUnit", callback: {
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
		startDate: Date;
		set(property: "startDate", value: Date): void;
		get(property: "startDate"): Date;
		watch(
		property: "startDate", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		startTimeAttr: string;
		set(property: "startTimeAttr", value: string): void;
		get(property: "startTimeAttr"): string;
		watch(
		property: "startTimeAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		startTimeOfDay: Object;
		set(property: "startTimeOfDay", value: Object): void;
		get(property: "startTimeOfDay"): Object;
		watch(
		property: "startTimeOfDay", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		stayInView: boolean;
		set(property: "stayInView", value: boolean): void;
		get(property: "stayInView"): boolean;
		watch(
		property: "stayInView", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		styleGridCellFunc: Function;
		set(property: "styleGridCellFunc", value: Function): void;
		get(property: "styleGridCellFunc"): Function;
		watch(
		property: "styleGridCellFunc", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		subColumnAttr: string;
		set(property: "subColumnAttr", value: string): void;
		get(property: "subColumnAttr"): string;
		watch(
		property: "subColumnAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		subColumns: Object;
		set(property: "subColumns", value: Object): void;
		get(property: "subColumns"): Object;
		watch(
		property: "subColumns", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		summaryAttr: string;
		set(property: "summaryAttr", value: string): void;
		get(property: "summaryAttr"): string;
		watch(
		property: "summaryAttr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templatePath: string;
		set(property: "templatePath", value: string): void;
		get(property: "templatePath"): string;
		watch(
		property: "templatePath", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		templateString: string;
		set(property: "templateString", value: string): void;
		get(property: "templateString"): string;
		watch(
		property: "templateString", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		timeIndicatorRefreshInterval: number;
		set(property: "timeIndicatorRefreshInterval", value: number): void;
		get(property: "timeIndicatorRefreshInterval"): number;
		watch(
		property: "timeIndicatorRefreshInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		timeSlotDuration: number;
		set(property: "timeSlotDuration", value: number): void;
		get(property: "timeSlotDuration"): number;
		watch(
		property: "timeSlotDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		verticalRenderer: Object;
		set(property: "verticalRenderer", value: Object): void;
		get(property: "verticalRenderer"): Object;
		watch(
		property: "verticalRenderer", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		viewKind: string;
		set(property: "viewKind", value: string): void;
		get(property: "viewKind"): string;
		watch(
		property: "viewKind", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		afterActivate(): void;
		afterDeactivate(): void;
		applyRendererZIndex(
		item: Object, renderer: Object, hovered: boolean, selected: boolean, edited: boolean, focused: boolean
	): void;
		beforeActivate(): void;
		beforeDeactivate(): void;
		buildRendering(): void;
		computeOverlapping(layoutItems: Object[], func: any): any;
		computeProjectionOnDate(renderData: Object, refDate: Date, date: Date[], max: number): any;
		computeRangeOverlap(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createItemFunc(view: dojox.calendar.ViewBase, d: Date, e: MouseEvent): void;
		defaultStyleGridCell(
		node: HTMLElement, date: Date, hours: number, minutes: number, renderData: Object
	): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: any): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchChange(
		oldSelectedItem: Object, newSelectedItem: Object, renderer: Object, triggerEvent: Event
	): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		ensureMinimalDuration(
		renderData: Object, item: Object, unit: String, steps: number, editKind: String
	): void;
		ensureVisibility(
		start: Date, end: Date, margin: number, visibilityTarget: String, duration: number
	): void;
		ensureVisibility(
		start: Date, end: Date, visibilityTarget: String, margin: number, duration: number
	): void;
		floorDate(date: Date, unit: String, steps: number, reuse: boolean): any;
		floorToDay(date: Date, reuse: boolean): any;
		floorToMonth(date: Date, reuse: boolean): any;
		get(name: any): any;
		getChildren(): any[];
		getCSSPrefix(): String;
		getIdentity(item: any): any;
		getItemStoreState(item: any): any;
		getParent(): any;
		getRenderers(item: Object): any;
		getSubColumn(e: Event, x: number, y: number, touchIndex: number): any;
		getSubColumnIndex(value: String): number;
		getTime(e: Event, x: number, y: number, touchIndex: number): any;
		getTimeOfDay(pos: number, rd: Object): Object;
		getWeekNumberLabel(date: Date): any;
		invalidateLayout(): void;
		invalidateRendering(): void;
		isAscendantHasClass(node: HTMLElement, ancestor: HTMLElement, className: String): any;
		isFocusable(): any;
		isItemBeingEdited(item: Object): any;
		isItemEditable(item: Object, rendererKind: String): any;
		isItemFocused(item: Object): any;
		isItemHovered(item: Object): any;
		isItemMoveEnabled(item: Object, rendererKind: String): any;
		isItemResizeEnabled(item: Object, rendererKind: String): any;
		isItemSelected(item: any): any;
		isLeftToRight(): any;
		isOverlapping(
		renderData: Object, start1: Date, end1: Date, start2: Date, end2: Date, includeLimits: boolean
	): any;
		isSameDay(date1: Date, date2: Date): any;
		isStartOfDay(d: Date): any;
		isToday(date: Date): any;
		isWeekEnd(date: Date): any;
		itemToRenderItem(item: Object, store: dojo.store.api.Store): any;
		newDate(obj: Object): any;
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
		postscript(): void;
		refreshRendering(): void;
		renderItemToItem(renderItem: Object, store: dojo.store.api.Store): any;
		resize(e?: any): void;
		scrollView(dir: number): void;
		scrollViewHorizontal(dir: number): void;
		selectFromEvent(e: any, item: any, renderer: any, dispatch: any): void;
		set(name: any, value: any): any;
		setItemSelected(item: any, value: any): void;
		startup(): void;
		styleColumnHeaderCell(node: HTMLElement, date: Date, renderData: Object): void;
		styleGridCell(
		node: HTMLElement, date: Date, hours: any, minutes: any, renderData: Object
	): void;
		styleRowHeaderCell(node: HTMLElement, h: number, m: any, renderData: Object): void;
		styleSubColumnHeaderCell(node: HTMLElement, date: any, renderData: Object): void;
		subColumnLabelFunc(value: any): any;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateRenderers(obj: Object, stateOnly: boolean): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(): void;
		onColumnHeaderClick(e: Object): void;
		onFocus(): void;
		onGridClick(e: Object): void;
		onGridDoubleClick(e: Object): void;
		onItemClick(e: Object): void;
		onItemContextMenu(e: Object): void;
		onItemDoubleClick(e: Object): void;
		onItemEditBegin(e: any): void;
		onItemEditBeginGesture(e: Object): void;
		onItemEditEnd(e: any): void;
		onItemEditEndGesture(e: Object): void;
		onItemEditMoveGesture(e: Object): void;
		onItemEditResizeGesture(e: Object): void;
		onRendererCreated(e: Object): void;
		onRendererDestroyed(e: Object): void;
		onRendererRecycled(e: Object): void;
		onRendererReused(e: Object): void;
		onRenderersLayoutDone(view: any): void
	}

	
}

declare module 'dojox/calendar/time' {
					declare module.exports: time


}

declare module 'dojox/calendar/_RendererMixin' {
					declare module.exports: _RendererMixin


}

declare module 'dojox/calendar/_ScrollBarBase' {
					declare module.exports: _ScrollBarBase


}

declare module 'dojox/calendar/ExpandRenderer' {
					declare module.exports: ExpandRenderer


}

declare module 'dojox/calendar/HorizontalRenderer' {
					declare module.exports: HorizontalRenderer


}

declare module 'dojox/calendar/Calendar' {
					declare module.exports: Calendar


}

declare module 'dojox/calendar/Keyboard' {
					declare module.exports: Keyboard


}

declare module 'dojox/calendar/CalendarBase' {
					declare module.exports: CalendarBase


}

declare module 'dojox/calendar/LabelRenderer' {
					declare module.exports: LabelRenderer


}

declare module 'dojox/calendar/MobileHorizontalRenderer' {
					declare module.exports: MobileHorizontalRenderer


}

declare module 'dojox/calendar/MobileVerticalRenderer' {
					declare module.exports: MobileVerticalRenderer


}

declare module 'dojox/calendar/Mouse' {
					declare module.exports: Mouse


}

declare module 'dojox/calendar/MobileCalendar' {
					declare module.exports: MobileCalendar


}

declare module 'dojox/calendar/StoreMixin' {
					declare module.exports: StoreMixin


}

declare module 'dojox/calendar/Touch' {
					declare module.exports: Touch


}

declare module 'dojox/calendar/MatrixView' {
					declare module.exports: MatrixView


}

declare module 'dojox/calendar/VerticalRenderer' {
					declare module.exports: VerticalRenderer


}

declare module 'dojox/calendar/MonthColumnView' {
					declare module.exports: MonthColumnView


}

declare module 'dojox/calendar/SimpleColumnView' {
					declare module.exports: SimpleColumnView


}

declare module 'dojox/calendar/ViewBase' {
					declare module.exports: ViewBase


}

declare module 'dojox/calendar/ColumnView' {
					declare module.exports: ColumnView


}

declare module 'dojox/calendar/ColumnViewSecondarySheet' {
					declare module.exports: ColumnViewSecondarySheet


}