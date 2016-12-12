

declare module 'dojox.geo' {
					
}

declare module 'charting' {
		declare interface _base {
		hideTooltip(gfxObject: dojox.gfx.shape.Shape): void,
		showTooltip(innerHTML: String, gfxObject: dojox.gfx.shape.Shape, positions: String[]): void
	}

		declare class _Marker  {
		constructor(markerData: any, map: any): this;
		hide(): void;
		show(featureId: any, evt: any): void
	}

	declare class Feature  {
		constructor(parent: any, name: any, shapeData: any): this;
		isSelected: boolean;
		markerText: Object;
		init(): void;
		select(selected: boolean): void;
		setValue(value: number): void;
		unsetColor(): void;
		unsetValue(): void
	}

	declare class KeyboardInteractionSupport  {
		constructor(map: dojox.geo.charting.Map, options?: Object): this;
		connect(): void;
		disconnect(): void;
		keydownHandler(e: KeyboardEvent): void;
		onBlur(): void;
		onFocus(e: Event): void
	}

	declare class TouchInteractionSupport  {
		constructor(map: dojox.geo.charting.Map): this;
		connect(): void;
		disconnect(): void
	}

	declare class MouseInteractionSupport  {
		constructor(map: dojox.geo.charting.Map, options?: Object): this;
		mouseClickThreshold: number;
		connect(): void;
		disconnect(): void;
		setEnablePan(enable: boolean): void;
		setEnableZoom(enable: boolean): void
	}

	declare class Map  {
		constructor(container: HTMLElement, shapeData: String): this;
		colorAnimationDuration: number;
		dataBindingAttribute: Object;
		dataBindingValueFunction: Object;
		dataStore: Object;
		defaultColor: string;
		enableFeatureZoom: boolean;
		highlightColor: string;
		series: any[];
		showTooltips: boolean;
		addSeries(series: URL): void;
		addSeries(series: Object[]): void;
		deselectAll(): void;
		fitToMapArea(
		mapArea: Object, pixelMargin: number, animate: boolean, onAnimationEnd: Function
	): void;
		fitToMapContents(pixelMargin: number, animate: boolean, onAnimationEnd: Function): void;
		getMapCenter(): any;
		getMapScale(): any;
		mapCoordsToScreenCoords(mapX: number, mapY: number): any;
		resize(adjustMapCenter: boolean, adjustMapScale: boolean, animate: boolean): void;
		screenCoordsToMapCoords(screenX: number, screenY: number): any;
		setDataBindingAttribute(prop: String): void;
		setDataBindingValueFunction(valueFunction: Function): void;
		setDataStore(dataStore: dojo.data.ItemFileReadStore, dataBindingProp: String): void;
		setMapCenter(
		centerX: number, centerY: number, animate: boolean, onAnimationEnd: Function
	): void;
		setMapCenterAndScale(
		centerX: number, centerY: number, scale: number, animate: boolean, onAnimationEnd: Function
	): void;
		setMapScale(scale: number, animate: boolean, onAnimationEnd: Function): void;
		setMapScaleAt(
		scale: number, fixedMapX: number, fixedMapY: number, animate: boolean, onAnimationEnd: Function
	): void;
		setMarkerData(markerFile: String): void;
		onFeatureClick(feature: dojox.geo.charting.Feature): void;
		onFeatureOver(feature: dojox.geo.charting.Feature): void;
		onZoomEnd(feature: dojox.geo.charting.Feature): void
	}

	
}

declare module 'widget' {
				declare class Legend extends dijit$_Widget {
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
		horizontal: boolean;
		set(property: "horizontal", value: boolean): void;
		get(property: "horizontal"): boolean;
		watch(
		property: "horizontal", callback: {
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
		legendBody: Object;
		set(property: "legendBody", value: Object): void;
		get(property: "legendBody"): Object;
		watch(
		property: "legendBody", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		map: Object;
		set(property: "map", value: Object): void;
		get(property: "map"): Object;
		watch(
		property: "map", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		observer: string;
		set(property: "observer", value: string): void;
		get(property: "observer"): string;
		watch(
		property: "observer", callback: {
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
		swatchSize: number;
		set(property: "swatchSize", value: number): void;
		get(property: "swatchSize"): number;
		watch(
		property: "swatchSize", callback: {
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
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
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
		getDescendants(): any[];
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
		refresh(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
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
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onShow(): void
	}

	declare class Map extends dijit$_Widget {
		constructor(options: Object, div: HTMLElement): this;
		adjustMapCenterOnResize: Object;
		set(property: "adjustMapCenterOnResize", value: Object): void;
		get(property: "adjustMapCenterOnResize"): Object;
		watch(
		property: "adjustMapCenterOnResize", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		adjustMapScaleOnResize: Object;
		set(property: "adjustMapScaleOnResize", value: Object): void;
		get(property: "adjustMapScaleOnResize"): Object;
		watch(
		property: "adjustMapScaleOnResize", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		animateOnResize: Object;
		set(property: "animateOnResize", value: Object): void;
		get(property: "animateOnResize"): Object;
		watch(
		property: "animateOnResize", callback: {
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
		colorAnimationDuration: number;
		set(property: "colorAnimationDuration", value: number): void;
		get(property: "colorAnimationDuration"): number;
		watch(
		property: "colorAnimationDuration", callback: {
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
		dataBindingAttribute: string;
		set(property: "dataBindingAttribute", value: string): void;
		get(property: "dataBindingAttribute"): string;
		watch(
		property: "dataBindingAttribute", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		dataBindingValueFunction: Object;
		set(property: "dataBindingValueFunction", value: Object): void;
		get(property: "dataBindingValueFunction"): Object;
		watch(
		property: "dataBindingValueFunction", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		dataStore: Object;
		set(property: "dataStore", value: Object): void;
		get(property: "dataStore"): Object;
		watch(
		property: "dataStore", callback: {
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
		enableFeatureZoom: Object;
		set(property: "enableFeatureZoom", value: Object): void;
		get(property: "enableFeatureZoom"): Object;
		watch(
		property: "enableFeatureZoom", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		enableKeyboardSupport: boolean;
		set(property: "enableKeyboardSupport", value: boolean): void;
		get(property: "enableKeyboardSupport"): boolean;
		watch(
		property: "enableKeyboardSupport", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		enableMousePan: Object;
		set(property: "enableMousePan", value: Object): void;
		get(property: "enableMousePan"): Object;
		watch(
		property: "enableMousePan", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		enableMouseSupport: Object;
		set(property: "enableMouseSupport", value: Object): void;
		get(property: "enableMouseSupport"): Object;
		watch(
		property: "enableMouseSupport", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		enableMouseZoom: Object;
		set(property: "enableMouseZoom", value: Object): void;
		get(property: "enableMouseZoom"): Object;
		watch(
		property: "enableMouseZoom", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		enableTouchSupport: Object;
		set(property: "enableTouchSupport", value: Object): void;
		get(property: "enableTouchSupport"): Object;
		watch(
		property: "enableTouchSupport", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		markerData: string;
		set(property: "markerData", value: string): void;
		get(property: "markerData"): string;
		watch(
		property: "markerData", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		mouseClickThreshold: number;
		set(property: "mouseClickThreshold", value: number): void;
		get(property: "mouseClickThreshold"): number;
		watch(
		property: "mouseClickThreshold", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		observer: string;
		set(property: "observer", value: string): void;
		get(property: "observer"): string;
		watch(
		property: "observer", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		onFeatureClick: Object;
		set(property: "onFeatureClick", value: Object): void;
		get(property: "onFeatureClick"): Object;
		watch(
		property: "onFeatureClick", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		onFeatureOver: Object;
		set(property: "onFeatureOver", value: Object): void;
		get(property: "onFeatureOver"): Object;
		watch(
		property: "onFeatureOver", callback: {
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
		series: string;
		set(property: "series", value: string): void;
		get(property: "series"): string;
		watch(
		property: "series", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		shapeData: string;
		set(property: "shapeData", value: string): void;
		get(property: "shapeData"): string;
		watch(
		property: "shapeData", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		showTooltips: boolean;
		set(property: "showTooltips", value: boolean): void;
		get(property: "showTooltips"): boolean;
		watch(
		property: "showTooltips", callback: {
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
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		create(params: Object, srcNodeRef: HTMLElement): void;
		create(params: Object, srcNodeRef: String): void;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getInnerMap(): any;
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
		resize(b: Object, height: number): void;
		resize(b: number, height: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
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
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onShow(): void
	}

	declare class Map extends dijit$_Widget {
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
		baseLayerType: string;
		set(property: "baseLayerType", value: string): void;
		get(property: "baseLayerType"): string;
		watch(
		property: "baseLayerType", callback: {
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
		initialLocation: string;
		set(property: "initialLocation", value: string): void;
		get(property: "initialLocation"): string;
		watch(
		property: "initialLocation", callback: {
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
		map: Object;
		set(property: "map", value: Object): void;
		get(property: "map"): Object;
		watch(
		property: "map", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		observer: string;
		set(property: "observer", value: string): void;
		get(property: "observer"): string;
		watch(
		property: "observer", callback: {
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
		touchHandler: boolean;
		set(property: "touchHandler", value: boolean): void;
		get(property: "touchHandler"): boolean;
		watch(
		property: "touchHandler", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
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
		getDescendants(): any[];
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
		resize(b: Object, h: number): void;
		resize(b: number, h: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
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
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onShow(): void
	}

	
}

declare module 'openlayers' {
		declare interface _base {
		BaseLayerType: Object,
		EPSG4326: Object,
		GreatCircle: Object,
		widget: Object,
		Collection(): void,
		Feature(): void,
		Geometry(): void,
		GeometryFeature(): void,
		GfxLayer(): void,
		JsonImport(): void,
		Layer(): void,
		LineString(): void,
		Map(): void,
		parseDMS(v: String, toDecimal: boolean): number,
		Point(): void,
		TouchInteractionSupport(): void,
		WidgetFeature(): void
	}

	declare interface GreatCircle {
		DEG2RAD: number,
		RAD2DEG: number,
		TOLERANCE: number,
		toGeometryFeature(
		p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number
	): any,
		toLineString(
		p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number
	): any,
		toPointArray(
		p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number
	): any[]
	}

	declare interface Patch {
		patchGFX(): void
	}

		declare class Collection extends undefined$Geometry {
		constructor(coords: Object): this;
		coordinates: any[];
		getGeometries(): any;
		setGeometries(g: any[]): void
	}

	declare class Feature  {
		constructor(): this;
		getCoordinateSystem(): any;
		getLayer(): any;
		remove(): void;
		render(): void;
		setCoordinateSystem(cs: Object): void
	}

	declare class Geometry  {
		constructor(coords: Object): this;
		coordinates: Object
	}

	declare class GfxLayer extends undefined$Layer {
		constructor(name: any, options: any): this;
		added(): void;
		addFeature(f: dojox.geo.openlayers.Feature): void;
		addFeature(f: dojox.geo.openlayers.Feature[]): void;
		clear(): void;
		getDojoMap(): any;
		getFeatureAt(i: number): any;
		getFeatureCount(): any;
		getFeatures(): any;
		getSurface(): any;
		getViewport(): any;
		moveTo(event: any): void;
		redraw(): void;
		removeFeature(f: dojox.geo.openlayers.Feature): void;
		removeFeature(f: dojox.geo.openlayers.Feature[]): void;
		removeFeatureAt(index: number): void;
		renderFeature(f: dojox.geo.openlayers.Feature): void;
		setMap(map: any): void;
		setViewport(g: Object): void;
		onMapResize(): void
	}

	declare class GeometryFeature extends undefined$Feature {
		constructor(geometry: dojox.geo.openlayers.Geometry): this;
		createShape(s: dojox.gfx.Surface, g: dojox.geo.openlayers.Geometry): any;
		getCoordinateSystem(): any;
		getFill(): any;
		getLayer(): any;
		getShape(): any;
		getShapeProperties(): any;
		getStroke(): any;
		remove(): void;
		render(g?: dojox.geo.openlayers.Geometry): void;
		renderCollection(g: dojox.geo.openlayers.Geometry): void;
		renderLineString(g: dojox.geo.openlayers.Geometry): void;
		renderPoint(g: dojox.geo.openlayers.Point): void;
		setCoordinateSystem(cs: Object): void;
		setFill(f: Object): Function;
		setShapeProperties(s: Object): Function;
		setStroke(s: Object): Function
	}

	declare class LineString extends undefined$Geometry {
		constructor(coords: Object): this;
		coordinates: Object;
		getPoints(): any;
		setPoints(p: Object[]): void
	}

	declare class JsonImport  {
		constructor(params: Object): this;
		loadData(): void
	}

	declare class Layer  {
		constructor(name: String, options: Object): this;
		added(): void;
		addFeature(f: dojox.geo.openlayers.Feature): void;
		addFeature(f: dojox.geo.openlayers.Feature[]): void;
		clear(): void;
		getDojoMap(): any;
		getFeatureAt(i: number): any;
		getFeatureCount(): any;
		getFeatures(): any;
		moveTo(event: MouseEvent): void;
		redraw(): void;
		removeFeature(f: dojox.geo.openlayers.Feature): void;
		removeFeature(f: dojox.geo.openlayers.Feature[]): void;
		removeFeatureAt(index: number): void;
		renderFeature(f: dojox.geo.openlayers.Feature): void
	}

	declare class Map  {
		constructor(div: any, options: any): this;
		olMap: Object;
		addLayer(layer: dojox.geo.openlayers.Layer): void;
		fitTo(o: Object): void;
		getBaseLayerType(): any;
		getLayer(property: String, value: Object): any;
		getLayerCount(): any;
		getOLMap(): any;
		getScale(geodesic: boolean): any;
		initialFit(params: any): void;
		layerIndex(layer: dojox.geo.openlayers.Layer, index: number): any;
		removeLayer(layer: dojox.geo.openlayers.Layer): void;
		setBaseLayerType(type: dojox.geo.openlayers.Layer): any;
		transform(p: any, from: Object, to: any): any;
		transformXY(x: number, y: number, from: Object, to: Object): any
	}

	declare class Point extends undefined$Geometry {
		constructor(coords: Object): this;
		coordinates: Object;
		getPoint(): any;
		setPoint(p: Object): void
	}

	declare class TouchInteractionSupport  {
		constructor(map: dojox.geo.openlayers.Map): this
	}

	declare class WidgetFeature extends undefined$Feature {
		constructor(params: Object): this;
		getCoordinateSystem(): any;
		getLayer(): any;
		getParameters(): any;
		remove(): void;
		render(): void;
		setCoordinateSystem(cs: Object): void;
		setParameters(params: Object): void
	}

	
}

declare module '_base' {
		declare interface ___JsonImportArgs {
		error: Function,
		nextFeature: Function,
		url: string
	}

	declare interface ___MapArgs {
		baseLayerName: string,
		baseLayerOptions: string,
		baseLayerType: string,
		baseLayerUrl: string
	}

	declare interface ___WidgetFeatureArgs {
		createWidget: Function,
		dijitId: string,
		dojoType: string,
		height: number,
		latitude: number,
		longitude: number,
		widget: Object,
		width: number
	}

	declare interface BaseLayerType {
		ARCGIS: string,
		BING: string,
		GOOGLE: string,
		OSM: string,
		VIRTUAL_EARTH: string,
		WMS: string,
		YAHOO: string
	}

	declare interface GreatCircle {
		DEG2RAD: number,
		RAD2DEG: number,
		TOLERANCE: number,
		toGeometryFeature(
		p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number
	): any,
		toLineString(
		p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number
	): any,
		toPointArray(
		p1: dojox.geo.openlayers.Point, p2: dojox.geo.openlayers.Point, increment: number
	): any[]
	}

	declare interface widget {
		Map(): void
	}

		declare class Collection extends undefined$Geometry {
		constructor(coords: Object): this;
		coordinates: any[];
		getGeometries(): any;
		setGeometries(g: any[]): void
	}

	declare class Feature  {
		constructor(): this;
		getCoordinateSystem(): any;
		getLayer(): any;
		remove(): void;
		render(): void;
		setCoordinateSystem(cs: Object): void
	}

	declare class Geometry  {
		constructor(coords: Object): this;
		coordinates: Object
	}

	declare class GfxLayer extends undefined$Layer {
		constructor(name: any, options: any): this;
		added(): void;
		addFeature(f: dojox.geo.openlayers.Feature): void;
		addFeature(f: dojox.geo.openlayers.Feature[]): void;
		clear(): void;
		getDojoMap(): any;
		getFeatureAt(i: number): any;
		getFeatureCount(): any;
		getFeatures(): any;
		getSurface(): any;
		getViewport(): any;
		moveTo(event: any): void;
		redraw(): void;
		removeFeature(f: dojox.geo.openlayers.Feature): void;
		removeFeature(f: dojox.geo.openlayers.Feature[]): void;
		removeFeatureAt(index: number): void;
		renderFeature(f: dojox.geo.openlayers.Feature): void;
		setMap(map: any): void;
		setViewport(g: Object): void;
		onMapResize(): void
	}

	declare class GeometryFeature extends undefined$Feature {
		constructor(geometry: dojox.geo.openlayers.Geometry): this;
		createShape(s: dojox.gfx.Surface, g: dojox.geo.openlayers.Geometry): any;
		getCoordinateSystem(): any;
		getFill(): any;
		getLayer(): any;
		getShape(): any;
		getShapeProperties(): any;
		getStroke(): any;
		remove(): void;
		render(g?: dojox.geo.openlayers.Geometry): void;
		renderCollection(g: dojox.geo.openlayers.Geometry): void;
		renderLineString(g: dojox.geo.openlayers.Geometry): void;
		renderPoint(g: dojox.geo.openlayers.Point): void;
		setCoordinateSystem(cs: Object): void;
		setFill(f: Object): Function;
		setShapeProperties(s: Object): Function;
		setStroke(s: Object): Function
	}

	declare class JsonImport  {
		constructor(params: Object): this;
		loadData(): void
	}

	declare class Layer  {
		constructor(name: String, options: Object): this;
		added(): void;
		addFeature(f: dojox.geo.openlayers.Feature): void;
		addFeature(f: dojox.geo.openlayers.Feature[]): void;
		clear(): void;
		getDojoMap(): any;
		getFeatureAt(i: number): any;
		getFeatureCount(): any;
		getFeatures(): any;
		moveTo(event: MouseEvent): void;
		redraw(): void;
		removeFeature(f: dojox.geo.openlayers.Feature): void;
		removeFeature(f: dojox.geo.openlayers.Feature[]): void;
		removeFeatureAt(index: number): void;
		renderFeature(f: dojox.geo.openlayers.Feature): void
	}

	declare class LineString extends undefined$Geometry {
		constructor(coords: Object): this;
		coordinates: Object;
		getPoints(): any;
		setPoints(p: Object[]): void
	}

	declare class Map  {
		constructor(div: any, options: any): this;
		olMap: Object;
		addLayer(layer: dojox.geo.openlayers.Layer): void;
		fitTo(o: Object): void;
		getBaseLayerType(): any;
		getLayer(property: String, value: Object): any;
		getLayerCount(): any;
		getOLMap(): any;
		getScale(geodesic: boolean): any;
		initialFit(params: any): void;
		layerIndex(layer: dojox.geo.openlayers.Layer, index: number): any;
		removeLayer(layer: dojox.geo.openlayers.Layer): void;
		setBaseLayerType(type: dojox.geo.openlayers.Layer): any;
		transform(p: any, from: Object, to: any): any;
		transformXY(x: number, y: number, from: Object, to: Object): any
	}

	declare class Point extends undefined$Geometry {
		constructor(coords: Object): this;
		coordinates: Object;
		getPoint(): any;
		setPoint(p: Object): void
	}

	declare class TouchInteractionSupport  {
		constructor(map: dojox.geo.openlayers.Map): this
	}

	declare class WidgetFeature extends undefined$Feature {
		constructor(params: Object): this;
		getCoordinateSystem(): any;
		getLayer(): any;
		getParameters(): any;
		remove(): void;
		render(): void;
		setCoordinateSystem(cs: Object): void;
		setParameters(params: Object): void
	}

	
}

declare module 'dojox/geo/charting/_base' {
					declare module.exports: _base


}

declare module 'dojox/geo/charting/_Marker' {
					declare module.exports: _Marker


}

declare module 'dojox/geo/charting/Feature' {
					declare module.exports: Feature


}

declare module 'dojox/geo/charting/KeyboardInteractionSupport' {
					declare module.exports: KeyboardInteractionSupport


}

declare module 'dojox/geo/charting/MouseInteractionSupport' {
					declare module.exports: MouseInteractionSupport


}

declare module 'dojox/geo/charting/TouchInteractionSupport' {
					declare module.exports: TouchInteractionSupport


}

declare module 'dojox/geo/charting/Map' {
					declare module.exports: Map


}

declare module 'dojox/geo/charting/widget/Legend' {
					declare module.exports: Legend


}

declare module 'dojox/geo/charting/widget/Map' {
					declare module.exports: Map


}

declare module 'dojox/geo/openlayers/_base' {
					declare module.exports: _base


}

declare module 'dojox/geo/openlayers/_base.Geometry' {
					declare module.exports: Geometry


}

declare module 'dojox/geo/openlayers/_base.Collection' {
					declare module.exports: Collection


}

declare module 'dojox/geo/openlayers/_base.Feature' {
					declare module.exports: Feature


}

declare module 'dojox/geo/openlayers/_base.JsonImport' {
					declare module.exports: JsonImport


}

declare module 'dojox/geo/openlayers/_base.GfxLayer' {
					declare module.exports: GfxLayer


}

declare module 'dojox/geo/openlayers/_base.LineString' {
					declare module.exports: LineString


}

declare module 'dojox/geo/openlayers/_base.Layer' {
					declare module.exports: Layer


}

declare module 'dojox/geo/openlayers/_base.GeometryFeature' {
					declare module.exports: GeometryFeature


}

declare module 'dojox/geo/openlayers/_base.Point' {
					declare module.exports: Point


}

declare module 'dojox/geo/openlayers/_base.Map' {
					declare module.exports: Map


}

declare module 'dojox/geo/openlayers/_base.TouchInteractionSupport' {
					declare module.exports: TouchInteractionSupport


}

declare module 'dojox/geo/openlayers/_base.WidgetFeature' {
					declare module.exports: WidgetFeature


}

declare module 'dojox/geo/openlayers/_base.__JsonImportArgs' {
					declare module.exports: ___JsonImportArgs


}

declare module 'dojox/geo/openlayers/_base.__WidgetFeatureArgs' {
					declare module.exports: ___WidgetFeatureArgs


}

declare module 'dojox/geo/openlayers/_base.__MapArgs' {
					declare module.exports: ___MapArgs


}

declare module 'dojox/geo/openlayers/_base.BaseLayerType' {
					declare module.exports: BaseLayerType


}

declare module 'dojox/geo/openlayers/_base.GreatCircle' {
					declare module.exports: GreatCircle


}

declare module 'dojox/geo/openlayers/_base.widget' {
					declare module.exports: widget


}

declare module 'dojox/geo/openlayers/GreatCircle' {
					declare module.exports: GreatCircle


}

declare module 'dojox/geo/openlayers/Patch' {
					declare module.exports: Patch


}

declare module 'dojox/geo/openlayers/Collection' {
					declare module.exports: Collection


}

declare module 'dojox/geo/openlayers/Feature' {
					declare module.exports: Feature


}

declare module 'dojox/geo/openlayers/Geometry' {
					declare module.exports: Geometry


}

declare module 'dojox/geo/openlayers/GfxLayer' {
					declare module.exports: GfxLayer


}

declare module 'dojox/geo/openlayers/JsonImport' {
					declare module.exports: JsonImport


}

declare module 'dojox/geo/openlayers/Layer' {
					declare module.exports: Layer


}

declare module 'dojox/geo/openlayers/LineString' {
					declare module.exports: LineString


}

declare module 'dojox/geo/openlayers/GeometryFeature' {
					declare module.exports: GeometryFeature


}

declare module 'dojox/geo/openlayers/Point' {
					declare module.exports: Point


}

declare module 'dojox/geo/openlayers/WidgetFeature' {
					declare module.exports: WidgetFeature


}

declare module 'dojox/geo/openlayers/TouchInteractionSupport' {
					declare module.exports: TouchInteractionSupport


}

declare module 'dojox/geo/openlayers/Map' {
					declare module.exports: Map


}

declare module 'dojox/geo/openlayers/widget/Map' {
					declare module.exports: Map


}