

declare module 'dojox.dgauges' {
					
}

declare module 'dgauges' {
		declare interface _circularUtils {
		
	}

		declare class CircularRangeIndicator extends undefined$ScaleIndicatorBase {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		animationEaser: Object;
		set(property: "animationEaser", value: Object): void;
		get(property: "animationEaser"): Object;
		watch(
		property: "animationEaser", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endThickness: number;
		set(property: "endThickness", value: number): void;
		get(property: "endThickness"): number;
		watch(
		property: "endThickness", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		fill: Object;
		set(property: "fill", value: Object): void;
		get(property: "fill"): Object;
		watch(
		property: "fill", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		radius: number;
		set(property: "radius", value: number): void;
		get(property: "radius"): number;
		watch(
		property: "radius", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scale: Object;
		set(property: "scale", value: Object): void;
		get(property: "scale"): Object;
		watch(
		property: "scale", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		start: number;
		set(property: "start", value: number): void;
		get(property: "start"): number;
		watch(
		property: "start", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		startThickness: number;
		set(property: "startThickness", value: number): void;
		get(property: "startThickness"): number;
		watch(
		property: "startThickness", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		stroke: Object;
		set(property: "stroke", value: Object): void;
		get(property: "stroke"): Object;
		watch(
		property: "stroke", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		invalidateRendering(): void;
		postscript(mixin: any): void;
		refreshRendering(): void;
		set(name: string, value: Object): any;
		validateRendering(): void;
		valueChanged(indicator: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class CircularScale extends undefined$ScaleBase {
		constructor(): this;
		endAngle: number;
		set(property: "endAngle", value: number): void;
		get(property: "endAngle"): number;
		watch(
		property: "endAngle", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		labelGap: number;
		set(property: "labelGap", value: number): void;
		get(property: "labelGap"): number;
		watch(
		property: "labelGap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		labelPosition: string;
		set(property: "labelPosition", value: string): void;
		get(property: "labelPosition"): string;
		watch(
		property: "labelPosition", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		originX: number;
		set(property: "originX", value: number): void;
		get(property: "originX"): number;
		watch(
		property: "originX", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		originY: number;
		set(property: "originY", value: number): void;
		get(property: "originY"): number;
		watch(
		property: "originY", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		radius: number;
		set(property: "radius", value: number): void;
		get(property: "radius"): number;
		watch(
		property: "radius", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scaler: Object;
		set(property: "scaler", value: Object): void;
		get(property: "scaler"): Object;
		watch(
		property: "scaler", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		startAngle: number;
		set(property: "startAngle", value: number): void;
		get(property: "startAngle"): number;
		watch(
		property: "startAngle", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		tickStroke: Object;
		set(property: "tickStroke", value: Object): void;
		get(property: "tickStroke"): Object;
		watch(
		property: "tickStroke", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		addIndicator(
		name: String, indicator: dojox.dgauges.IndicatorBase, behindScale: boolean
	): any;
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		getIndicator(name: String): any;
		getIndicatorRenderer(name: String): any;
		invalidateRendering(): void;
		positionForValue(value: number): any;
		positionInRange(value: number): any;
		refreshRendering(): void;
		removeIndicator(name: String): any;
		set(name: string, value: Object): any;
		tickLabelFunc(tickItem: Object): any;
		tickShapeFunc(group: dojox.gfx.Group, scale: dojox.dgauges.ScaleBase, tickItem: Object): any;
		validateRendering(): void;
		valueForPosition(angle: number): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class CircularGauge extends undefined$GaugeBase {
		constructor(args: Object, node: HTMLElement): this;
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class CircularValueIndicator extends undefined$ScaleIndicatorBase {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		animationEaser: Object;
		set(property: "animationEaser", value: Object): void;
		get(property: "animationEaser"): Object;
		watch(
		property: "animationEaser", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		scale: Object;
		set(property: "scale", value: Object): void;
		get(property: "scale"): Object;
		watch(
		property: "scale", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		indicatorShapeFunc(group: dojox.gfx.Group, indicator: dojox.dgauges.IndicatorBase): any;
		invalidateRendering(): void;
		postscript(mixin: any): void;
		refreshRendering(): void;
		set(name: string, value: Object): any;
		validateRendering(): void;
		valueChanged(indicator: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class IndicatorBase extends undefined$_Invalidating {
		constructor(): this;
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
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		invalidateRendering(): void;
		postscript(mixin: any): void;
		refreshRendering(): void;
		set(name: string, value: Object): any;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class LogScaler extends dojo$Stateful {
		constructor(): this;
		majorTicks: Object;
		set(property: "majorTicks", value: Object): void;
		get(property: "majorTicks"): Object;
		watch(
		property: "majorTicks", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		multiplier: number;
		set(property: "multiplier", value: number): void;
		get(property: "multiplier"): number;
		watch(
		property: "multiplier", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		computeTicks(): any;
		get(name: string): any;
		getComputedMaximum(): any;
		getComputedMinimum(): any;
		getComputedMultiplier(): any;
		positionForValue(value: number): any;
		postscript(params: Object): void;
		set(name: string, value: Object): any;
		valueForPosition(position: number): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class MultiLinearScaler extends dojo$Stateful {
		constructor(): this;
		majorTicks: Object;
		set(property: "majorTicks", value: Object): void;
		get(property: "majorTicks"): Object;
		watch(
		property: "majorTicks", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		majorTickValues: any[];
		set(property: "majorTickValues", value: any[]): void;
		get(property: "majorTickValues"): any[];
		watch(
		property: "majorTickValues", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		minorTickCount: any[];
		set(property: "minorTickCount", value: any[]): void;
		get(property: "minorTickCount"): any[];
		watch(
		property: "minorTickCount", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		minorTicks: Object;
		set(property: "minorTicks", value: Object): void;
		get(property: "minorTicks"): Object;
		watch(
		property: "minorTicks", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		computeTicks(): any;
		get(name: string): any;
		positionForValue(value: number): any;
		postscript(params: Object): void;
		set(name: string, value: Object): any;
		valueForPosition(position: number): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class LinearScaler extends dojo$Stateful {
		constructor(): this;
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		majorTicks: Object;
		set(property: "majorTicks", value: Object): void;
		get(property: "majorTicks"): Object;
		watch(
		property: "majorTicks", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicks: Object;
		set(property: "minorTicks", value: Object): void;
		get(property: "minorTicks"): Object;
		watch(
		property: "minorTicks", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		computeTicks(): any;
		get(name: string): any;
		getComputedMajorTickInterval(): any;
		getComputedMinorTickInterval(): any;
		positionForValue(value: number): any;
		postscript(params: Object): void;
		set(name: string, value: Object): any;
		valueForPosition(position: number): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class GaugeBase extends dijit$_WidgetBase, undefined$_Invalidating {
		constructor(args: Object, node: HTMLElement): this;
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class RectangularSegmentedRangeIndicator extends undefined$IndicatorBase {
		constructor(): this;
		endThickness: number;
		set(property: "endThickness", value: number): void;
		get(property: "endThickness"): number;
		watch(
		property: "endThickness", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		fill: Object;
		set(property: "fill", value: Object): void;
		get(property: "fill"): Object;
		watch(
		property: "fill", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		paddingBottom: number;
		set(property: "paddingBottom", value: number): void;
		get(property: "paddingBottom"): number;
		watch(
		property: "paddingBottom", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingLeft: number;
		set(property: "paddingLeft", value: number): void;
		get(property: "paddingLeft"): number;
		watch(
		property: "paddingLeft", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingRight: number;
		set(property: "paddingRight", value: number): void;
		get(property: "paddingRight"): number;
		watch(
		property: "paddingRight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingTop: number;
		set(property: "paddingTop", value: number): void;
		get(property: "paddingTop"): number;
		watch(
		property: "paddingTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		ranges: any[];
		set(property: "ranges", value: any[]): void;
		get(property: "ranges"): any[];
		watch(
		property: "ranges", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		rounded: boolean;
		set(property: "rounded", value: boolean): void;
		get(property: "rounded"): boolean;
		watch(
		property: "rounded", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		segments: number;
		set(property: "segments", value: number): void;
		get(property: "segments"): number;
		watch(
		property: "segments", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		segmentSpacing: number;
		set(property: "segmentSpacing", value: number): void;
		get(property: "segmentSpacing"): number;
		watch(
		property: "segmentSpacing", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		start: number;
		set(property: "start", value: number): void;
		get(property: "start"): number;
		watch(
		property: "start", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		startThickness: number;
		set(property: "startThickness", value: number): void;
		get(property: "startThickness"): number;
		watch(
		property: "startThickness", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		stroke: Object;
		set(property: "stroke", value: Object): void;
		get(property: "stroke"): Object;
		watch(
		property: "stroke", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		invalidateRendering(): void;
		postscript(mixin: any): void;
		refreshRendering(): void;
		set(name: string, value: Object): any;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class ScaleBase extends undefined$_Invalidating {
		constructor(): this;
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		labelGap: number;
		set(property: "labelGap", value: number): void;
		get(property: "labelGap"): number;
		watch(
		property: "labelGap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		labelPosition: string;
		set(property: "labelPosition", value: string): void;
		get(property: "labelPosition"): string;
		watch(
		property: "labelPosition", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		scaler: Object;
		set(property: "scaler", value: Object): void;
		get(property: "scaler"): Object;
		watch(
		property: "scaler", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		tickStroke: Object;
		set(property: "tickStroke", value: Object): void;
		get(property: "tickStroke"): Object;
		watch(
		property: "tickStroke", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		addIndicator(
		name: String, indicator: dojox.dgauges.IndicatorBase, behindScale: boolean
	): any;
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		getIndicator(name: String): any;
		getIndicatorRenderer(name: String): any;
		invalidateRendering(): void;
		positionForValue(value: number): any;
		refreshRendering(): void;
		removeIndicator(name: String): any;
		set(name: string, value: Object): any;
		tickLabelFunc(tickItem: Object): any;
		tickShapeFunc(group: dojox.gfx.Group, scale: dojox.dgauges.ScaleBase, tickItem: Object): any;
		validateRendering(): void;
		valueForPosition(position: number): number;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class RectangularScale extends undefined$ScaleBase {
		constructor(): this;
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		labelGap: number;
		set(property: "labelGap", value: number): void;
		get(property: "labelGap"): number;
		watch(
		property: "labelGap", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		labelPosition: string;
		set(property: "labelPosition", value: string): void;
		get(property: "labelPosition"): string;
		watch(
		property: "labelPosition", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		paddingBottom: number;
		set(property: "paddingBottom", value: number): void;
		get(property: "paddingBottom"): number;
		watch(
		property: "paddingBottom", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingLeft: number;
		set(property: "paddingLeft", value: number): void;
		get(property: "paddingLeft"): number;
		watch(
		property: "paddingLeft", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingRight: number;
		set(property: "paddingRight", value: number): void;
		get(property: "paddingRight"): number;
		watch(
		property: "paddingRight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingTop: number;
		set(property: "paddingTop", value: number): void;
		get(property: "paddingTop"): number;
		watch(
		property: "paddingTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scaler: Object;
		set(property: "scaler", value: Object): void;
		get(property: "scaler"): Object;
		watch(
		property: "scaler", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		tickStroke: Object;
		set(property: "tickStroke", value: Object): void;
		get(property: "tickStroke"): Object;
		watch(
		property: "tickStroke", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		addIndicator(
		name: String, indicator: dojox.dgauges.IndicatorBase, behindScale: boolean
	): any;
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		getIndicator(name: String): any;
		getIndicatorRenderer(name: String): any;
		invalidateRendering(): void;
		positionForValue(value: any): any;
		refreshRendering(): void;
		removeIndicator(name: String): any;
		set(name: string, value: Object): any;
		tickLabelFunc(tickItem: Object): any;
		tickShapeFunc(group: dojox.gfx.Group, scale: dojox.dgauges.ScaleBase, tickItem: Object): any;
		validateRendering(): void;
		valueForPosition(pos: any): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class RectangularValueIndicator extends undefined$ScaleIndicatorBase {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		animationEaser: Object;
		set(property: "animationEaser", value: Object): void;
		get(property: "animationEaser"): Object;
		watch(
		property: "animationEaser", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		paddingBottom: number;
		set(property: "paddingBottom", value: number): void;
		get(property: "paddingBottom"): number;
		watch(
		property: "paddingBottom", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingLeft: number;
		set(property: "paddingLeft", value: number): void;
		get(property: "paddingLeft"): number;
		watch(
		property: "paddingLeft", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingRight: number;
		set(property: "paddingRight", value: number): void;
		get(property: "paddingRight"): number;
		watch(
		property: "paddingRight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingTop: number;
		set(property: "paddingTop", value: number): void;
		get(property: "paddingTop"): number;
		watch(
		property: "paddingTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scale: Object;
		set(property: "scale", value: Object): void;
		get(property: "scale"): Object;
		watch(
		property: "scale", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		indicatorShapeFunc(group: dojox.gfx.Group, indicator: dojox.dgauges.IndicatorBase): any;
		invalidateRendering(): void;
		postscript(mixin: any): void;
		refreshRendering(): void;
		set(name: string, value: Object): any;
		validateRendering(): void;
		valueChanged(indicator: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class RectangularRangeIndicator extends undefined$ScaleIndicatorBase {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		animationEaser: Object;
		set(property: "animationEaser", value: Object): void;
		get(property: "animationEaser"): Object;
		watch(
		property: "animationEaser", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		endThickness: number;
		set(property: "endThickness", value: number): void;
		get(property: "endThickness"): number;
		watch(
		property: "endThickness", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		fill: Object;
		set(property: "fill", value: Object): void;
		get(property: "fill"): Object;
		watch(
		property: "fill", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		paddingBottom: number;
		set(property: "paddingBottom", value: number): void;
		get(property: "paddingBottom"): number;
		watch(
		property: "paddingBottom", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingLeft: number;
		set(property: "paddingLeft", value: number): void;
		get(property: "paddingLeft"): number;
		watch(
		property: "paddingLeft", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingRight: number;
		set(property: "paddingRight", value: number): void;
		get(property: "paddingRight"): number;
		watch(
		property: "paddingRight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		paddingTop: number;
		set(property: "paddingTop", value: number): void;
		get(property: "paddingTop"): number;
		watch(
		property: "paddingTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scale: Object;
		set(property: "scale", value: Object): void;
		get(property: "scale"): Object;
		watch(
		property: "scale", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		start: number;
		set(property: "start", value: number): void;
		get(property: "start"): number;
		watch(
		property: "start", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		startThickness: number;
		set(property: "startThickness", value: number): void;
		get(property: "startThickness"): number;
		watch(
		property: "startThickness", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		stroke: Object;
		set(property: "stroke", value: Object): void;
		get(property: "stroke"): Object;
		watch(
		property: "stroke", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		invalidateRendering(): void;
		postscript(mixin: any): void;
		refreshRendering(): void;
		set(name: string, value: Object): any;
		validateRendering(): void;
		valueChanged(indicator: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class TextIndicator extends undefined$IndicatorBase {
		constructor(): this;
		align: string;
		set(property: "align", value: string): void;
		get(property: "align"): string;
		watch(
		property: "align", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		color: Object;
		set(property: "color", value: Object): void;
		get(property: "color"): Object;
		watch(
		property: "color", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		indicator: Object;
		set(property: "indicator", value: Object): void;
		get(property: "indicator"): Object;
		watch(
		property: "indicator", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		labelFunc: Object;
		set(property: "labelFunc", value: Object): void;
		get(property: "labelFunc"): Object;
		watch(
		property: "labelFunc", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		x: number;
		set(property: "x", value: number): void;
		get(property: "x"): number;
		watch(
		property: "x", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		y: number;
		set(property: "y", value: number): void;
		get(property: "y"): number;
		watch(
		property: "y", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		invalidateRendering(): void;
		refreshRendering(): any;
		set(name: string, value: Object): any;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	declare class RectangularGauge extends undefined$GaugeBase {
		constructor(): this;
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		addElement(name: String, element: Object, location?: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class ScaleIndicatorBase extends undefined$IndicatorBase {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		animationEaser: Object;
		set(property: "animationEaser", value: Object): void;
		get(property: "animationEaser"): Object;
		watch(
		property: "animationEaser", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		scale: Object;
		set(property: "scale", value: Object): void;
		get(property: "scale"): Object;
		watch(
		property: "scale", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		addInvalidatingProperties(properties: String[]): void;
		get(name: string): any;
		invalidateRendering(): void;
		postscript(mixin: any): void;
		refreshRendering(): void;
		set(name: string, value: Object): any;
		validateRendering(): void;
		valueChanged(indicator: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	}
	}

	
}

declare module 'components' {
		declare interface utils {
		brightness(col: number, b: number): number,
		createGradient(entries: any[]): number,
		genericCircularGauge(
		scale: number, indicator: dojox.dgauges.IndicatorBase, originX: number, originY: number, radius: number, startAngle: number, endAngle: number, orientation: String, font: Object, labelPosition: String, tickShapeFunc: Object
	): number
	}

		declare class DefaultPropertiesMixin  {
		constructor(): this;
		animationDuration: number;
		interactionArea: string;
		interactionMode: string;
		majorTickInterval: number;
		maximum: number;
		minimum: number;
		minorTickInterval: number;
		minorTicksEnabled: boolean;
		snapInterval: number;
		value: number
	}

	
}

declare module 'black' {
				declare class CircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class HorizontalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class SemiCircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class VerticalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	
}

declare module 'classic' {
				declare class HorizontalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class CircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class SemiCircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class VerticalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	
}

declare module 'default_' {
				declare class SemiCircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class HorizontalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class CircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class VerticalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	
}

declare module 'green' {
				declare class CircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class HorizontalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class SemiCircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class VerticalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	
}

declare module 'grey' {
				declare class SemiCircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(args: any, node: any): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class CircularLinearGauge extends undefined$CircularGauge, undefined$DefaultPropertiesMixin {
		constructor(args: any, node: any): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object): any;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group): void;
		drawForeground(g: dojox.gfx.Group): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): any;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class HorizontalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	declare class VerticalLinearGauge extends undefined$RectangularGauge, undefined$DefaultPropertiesMixin {
		constructor(): this;
		animationDuration: number;
		set(property: "animationDuration", value: number): void;
		get(property: "animationDuration"): number;
		watch(
		property: "animationDuration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		borderColor: Object;
		set(property: "borderColor", value: Object): void;
		get(property: "borderColor"): Object;
		watch(
		property: "borderColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		fillColor: Object;
		set(property: "fillColor", value: Object): void;
		get(property: "fillColor"): Object;
		watch(
		property: "fillColor", callback: {
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
		font: Object;
		set(property: "font", value: Object): void;
		get(property: "font"): Object;
		watch(
		property: "font", callback: {
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
		indicatorColor: Object;
		set(property: "indicatorColor", value: Object): void;
		get(property: "indicatorColor"): Object;
		watch(
		property: "indicatorColor", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		interactionArea: string;
		set(property: "interactionArea", value: string): void;
		get(property: "interactionArea"): string;
		watch(
		property: "interactionArea", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		interactionMode: string;
		set(property: "interactionMode", value: string): void;
		get(property: "interactionMode"): string;
		watch(
		property: "interactionMode", callback: {
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
		majorTickInterval: number;
		set(property: "majorTickInterval", value: number): void;
		get(property: "majorTickInterval"): number;
		watch(
		property: "majorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		minorTickInterval: number;
		set(property: "minorTickInterval", value: number): void;
		get(property: "minorTickInterval"): number;
		watch(
		property: "minorTickInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		minorTicksEnabled: boolean;
		set(property: "minorTicksEnabled", value: boolean): void;
		get(property: "minorTicksEnabled"): boolean;
		watch(
		property: "minorTicksEnabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		orientation: string;
		set(property: "orientation", value: string): void;
		get(property: "orientation"): string;
		watch(
		property: "orientation", callback: {
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
		snapInterval: number;
		set(property: "snapInterval", value: number): void;
		get(property: "snapInterval"): number;
		watch(
		property: "snapInterval", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		addElement(name: String, element: Object, location: String): void;
		addInvalidatingProperties(properties: String[]): void;
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
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		drawBackground(g: dojox.gfx.Group, w: number, h: number): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getChildren(): any[];
		getElement(name: String): any;
		getElementRenderer(name: String): any;
		getParent(): any;
		invalidateRendering(): void;
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
		refreshRendering(): void;
		removeElement(name: String): Object;
		resize(width: number, height: number): any;
		resize(width: Object, height: number): any;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validateRendering(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		onBlur(): void;
		onEndEditing(event: any): void;
		onFocus(): void;
		onStartEditing(event: any): void
	}

	
}

declare module 'dojox/dgauges/_circularUtils' {
					declare module.exports: _circularUtils


}

declare module 'dojox/dgauges/CircularScale' {
					declare module.exports: CircularScale


}

declare module 'dojox/dgauges/CircularValueIndicator' {
					declare module.exports: CircularValueIndicator


}

declare module 'dojox/dgauges/CircularGauge' {
					declare module.exports: CircularGauge


}

declare module 'dojox/dgauges/CircularRangeIndicator' {
					declare module.exports: CircularRangeIndicator


}

declare module 'dojox/dgauges/IndicatorBase' {
					declare module.exports: IndicatorBase


}

declare module 'dojox/dgauges/LinearScaler' {
					declare module.exports: LinearScaler


}

declare module 'dojox/dgauges/LogScaler' {
					declare module.exports: LogScaler


}

declare module 'dojox/dgauges/MultiLinearScaler' {
					declare module.exports: MultiLinearScaler


}

declare module 'dojox/dgauges/GaugeBase' {
					declare module.exports: GaugeBase


}

declare module 'dojox/dgauges/RectangularScale' {
					declare module.exports: RectangularScale


}

declare module 'dojox/dgauges/RectangularSegmentedRangeIndicator' {
					declare module.exports: RectangularSegmentedRangeIndicator


}

declare module 'dojox/dgauges/RectangularRangeIndicator' {
					declare module.exports: RectangularRangeIndicator


}

declare module 'dojox/dgauges/RectangularValueIndicator' {
					declare module.exports: RectangularValueIndicator


}

declare module 'dojox/dgauges/ScaleBase' {
					declare module.exports: ScaleBase


}

declare module 'dojox/dgauges/TextIndicator' {
					declare module.exports: TextIndicator


}

declare module 'dojox/dgauges/ScaleIndicatorBase' {
					declare module.exports: ScaleIndicatorBase


}

declare module 'dojox/dgauges/RectangularGauge' {
					declare module.exports: RectangularGauge


}

declare module 'dojox/dgauges/components/utils' {
					declare module.exports: utils


}

declare module 'dojox/dgauges/components/DefaultPropertiesMixin' {
					declare module.exports: DefaultPropertiesMixin


}

declare module 'dojox/dgauges/components/black/CircularLinearGauge' {
					declare module.exports: CircularLinearGauge


}

declare module 'dojox/dgauges/components/black/SemiCircularLinearGauge' {
					declare module.exports: SemiCircularLinearGauge


}

declare module 'dojox/dgauges/components/black/HorizontalLinearGauge' {
					declare module.exports: HorizontalLinearGauge


}

declare module 'dojox/dgauges/components/black/VerticalLinearGauge' {
					declare module.exports: VerticalLinearGauge


}

declare module 'dojox/dgauges/components/classic/CircularLinearGauge' {
					declare module.exports: CircularLinearGauge


}

declare module 'dojox/dgauges/components/classic/HorizontalLinearGauge' {
					declare module.exports: HorizontalLinearGauge


}

declare module 'dojox/dgauges/components/classic/VerticalLinearGauge' {
					declare module.exports: VerticalLinearGauge


}

declare module 'dojox/dgauges/components/classic/SemiCircularLinearGauge' {
					declare module.exports: SemiCircularLinearGauge


}

declare module 'dojox/dgauges/components/default/CircularLinearGauge' {
					declare module.exports: CircularLinearGauge


}

declare module 'dojox/dgauges/components/default/HorizontalLinearGauge' {
					declare module.exports: HorizontalLinearGauge


}

declare module 'dojox/dgauges/components/default/SemiCircularLinearGauge' {
					declare module.exports: SemiCircularLinearGauge


}

declare module 'dojox/dgauges/components/default/VerticalLinearGauge' {
					declare module.exports: VerticalLinearGauge


}

declare module 'dojox/dgauges/components/green/HorizontalLinearGauge' {
					declare module.exports: HorizontalLinearGauge


}

declare module 'dojox/dgauges/components/green/CircularLinearGauge' {
					declare module.exports: CircularLinearGauge


}

declare module 'dojox/dgauges/components/green/SemiCircularLinearGauge' {
					declare module.exports: SemiCircularLinearGauge


}

declare module 'dojox/dgauges/components/green/VerticalLinearGauge' {
					declare module.exports: VerticalLinearGauge


}

declare module 'dojox/dgauges/components/grey/CircularLinearGauge' {
					declare module.exports: CircularLinearGauge


}

declare module 'dojox/dgauges/components/grey/SemiCircularLinearGauge' {
					declare module.exports: SemiCircularLinearGauge


}

declare module 'dojox/dgauges/components/grey/HorizontalLinearGauge' {
					declare module.exports: HorizontalLinearGauge


}

declare module 'dojox/dgauges/components/grey/VerticalLinearGauge' {
					declare module.exports: VerticalLinearGauge


}