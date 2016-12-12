import type { drawing } from 'npm$namespace$dojox'

declare module 'dojox.drawing' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface drawing {
		
	}

			
}

declare module 'drawing' {
		declare interface defaults {
		anchors: Object,
		angleSnap: number,
		arrows: Object,
		button: Object,
		clickable: boolean,
		clickMode: boolean,
		current: Object,
		currentHit: Object,
		disabled: Object,
		highlighted: Object,
		hitHighlighted: Object,
		hitNorm: Object,
		hitSelected: Object,
		labelSameColor: boolean,
		norm: Object,
		renderHitLayer: boolean,
		renderHitLines: boolean,
		selected: Object,
		text: Object,
		textDisabled: Object,
		textMode: Object,
		useSelectedStyle: boolean,
		zAngle: number,
		zAxis: boolean,
		zAxisEnabled: boolean,
		copy(): any
	}

		declare class _base  {
		constructor(props: Object, node: HTMLElement): this;
		height: number;
		mode: string;
		ready: boolean;
		width: number;
		addPlugin(plugin: Object): void;
		addStencil(type: String, options: Object): any;
		addUI(type: String, options: Object): any;
		changeDefaults(newStyle: Object, value: boolean): void;
		exporter(): any;
		get(name: any): void;
		getConstructor(abbr: String): any;
		getShapeProps(data: Object, mode: any): any;
		importer(objects: any[]): void;
		initPlugins(): void;
		registerTool(type: String): void;
		removeAll(): void;
		removeStencil(stencil: Object): void;
		resize(box: Object): void;
		selectAll(): void;
		set(name: any, value: any): void;
		setTool(type: String): void;
		startup(): void;
		toSelected(func: String): void;
		unSetTool(): void;
		onDeleteStencil(stencil: Object): void;
		onRenderStencil(stencil: Object): void;
		onSurfaceReady(): void
	}

	declare class Drawing  {
		constructor(props: Object, node: HTMLElement): this;
		height: number;
		mode: string;
		ready: boolean;
		width: number;
		addPlugin(plugin: Object): void;
		addStencil(type: String, options: Object): any;
		addUI(type: String, options: Object): any;
		changeDefaults(newStyle: Object, value: boolean): void;
		exporter(): any;
		get(name: any): void;
		getConstructor(abbr: String): any;
		getShapeProps(data: Object, mode: any): any;
		importer(objects: any[]): void;
		initPlugins(): void;
		registerTool(type: String): void;
		removeAll(): void;
		removeStencil(stencil: Object): void;
		resize(box: Object): void;
		selectAll(): void;
		set(name: any, value: any): void;
		setTool(type: String): void;
		startup(): void;
		toSelected(func: String): void;
		unSetTool(): void;
		onDeleteStencil(stencil: Object): void;
		onRenderStencil(stencil: Object): void;
		onSurfaceReady(): void
	}

	declare class Grid extends undefined$_Plugin {
		constructor(options: any): this;
		anchors: Object;
		button: Object;
		canvas: Object;
		drawing: Object;
		gap: number;
		keys: Object;
		major: number;
		majorColor: string;
		minor: number;
		minorColor: string;
		mouse: Object;
		node: Object;
		stencils: Object;
		type: string;
		util: Object;
		zoom: number;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		setGrid(options: any): any;
		setZoom(zoom: any): void
	}

	declare class GreekPalette extends dijit$_Widget, dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		active: boolean;
		set(property: "active", value: boolean): void;
		get(property: "active"): boolean;
		watch(
		property: "active", callback: {
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
		cellClass: string;
		set(property: "cellClass", value: string): void;
		get(property: "cellClass"): string;
		watch(
		property: "cellClass", callback: {
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
		cssStateNodes: Object;
		set(property: "cssStateNodes", value: Object): void;
		get(property: "cssStateNodes"): Object;
		watch(
		property: "cssStateNodes", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		defaultTimeout: number;
		set(property: "defaultTimeout", value: number): void;
		get(property: "defaultTimeout"): number;
		watch(
		property: "defaultTimeout", callback: {
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
		hovering: boolean;
		set(property: "hovering", value: boolean): void;
		get(property: "hovering"): boolean;
		watch(
		property: "hovering", callback: {
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
		paletteClass: string;
		set(property: "paletteClass", value: string): void;
		get(property: "paletteClass"): string;
		watch(
		property: "paletteClass", callback: {
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
		showPreview: boolean;
		set(property: "showPreview", value: boolean): void;
		get(property: "showPreview"): boolean;
		watch(
		property: "showPreview", callback: {
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
		tabIndex: string;
		set(property: "tabIndex", value: string): void;
		get(property: "tabIndex"): string;
		watch(
		property: "tabIndex", callback: {
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
		timeoutChangeRate: number;
		set(property: "timeoutChangeRate", value: number): void;
		get(property: "timeoutChangeRate"): number;
		watch(
		property: "timeoutChangeRate", callback: {
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
		value: string;
		set(property: "value", value: string): void;
		get(property: "value"): string;
		watch(
		property: "value", callback: {
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
		dyeClass(): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		focus(): void;
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
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		show(obj: any): void;
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
		onCancel(closeAll: boolean): void;
		onChange(val: any): void;
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

declare module 'defaults' {
		declare interface anchors {
		cap: string,
		color: string,
		fill: string,
		marginZero: number,
		minSize: number,
		size: number,
		style: string,
		width: number
	}

	declare interface arrows {
		length: number,
		width: number
	}

	declare interface button {
		down: Object,
		icon: Object,
		norm: Object,
		over: Object,
		selected: Object
	}

	declare interface disabled {
		cap: string,
		color: string,
		fill: string,
		style: string,
		width: number
	}

	declare interface hitHighlighted {
		cap: string,
		color: string,
		fill: Object,
		style: string,
		width: number
	}

	declare interface highlighted {
		cap: string,
		color: string,
		fill: string,
		style: string,
		width: number
	}

	declare interface hitNorm {
		cap: string,
		color: Object,
		fill: Object,
		style: string,
		width: number
	}

	declare interface hitSelected {
		cap: string,
		color: string,
		fill: Object,
		style: string,
		width: number
	}

	declare interface norm {
		cap: string,
		color: string,
		fill: string,
		style: string,
		width: number
	}

	declare interface selected {
		color: string,
		width: number
	}

	declare interface text {
		color: string,
		deleteEmptyCreate: boolean,
		deleteEmptyModify: boolean,
		family: string,
		minWidth: number,
		pad: number,
		size: string,
		weight: string
	}

	declare interface textDisabled {
		color: string,
		family: string,
		size: string,
		weight: string
	}

	declare interface textMode {
		create: Object,
		edit: Object
	}

			
}

declare module 'annotations' {
		declare interface Label {
		Label(): void
	}

		declare class Angle  {
		constructor(options: Object): this;
		angle: number;
		type: string;
		getAngleNode(): any;
		hideAngle(): void;
		showAngle(): void
	}

	declare class BoxShadow  {
		constructor(options: Object): this;
		showing: boolean;
		arrowPoints(): any[];
		createForEllipse(o: any, size: any, mult: any, d: any, r: any, p: any, c: any): void;
		createForLine(o: any, size: any, mult: any, d: any, r: any, p: any, c: any): void;
		createForPath(o: any, size: any, mult: any, pts: any, r: any, p: any, c: any): void;
		createForRect(o: any, size: any, mult: any, d: any, r: any, p: any, c: any): void;
		createForZArrow(o: any, size: any, mult: any, pts: any, r: any, p: any, c: any): void;
		destroy(): void;
		hide(): void;
		render(): void;
		show(): void;
		onRender(): void;
		onTransform(): void
	}

	declare class Arrow extends undefined$Path {
		constructor(options: Object): this;
		baseRender: boolean;
		closeColor: Object;
		closePath: boolean;
		closeRadius: number;
		drawingType: string;
		enabled: boolean;
		idx1: number;
		idx2: number;
		minimumSize: number;
		StencilData: Object;
		StencilPoints: any[];
		subShape: boolean;
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		arrowHead(x1: any, y1: any, x2: any, y2: any, style: any): any[];
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(data: Object): void;
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(points: any[]): void;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	
}

declare module 'Label' {
				declare class Label extends undefined$Text {
		constructor(options: Object): this;
		align: string;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		enabled: boolean;
		minimumSize: number;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		valign: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		beforeAttr(key: any, value: String): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(o: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getText(): any;
		getTransform(): Object;
		highlight(): void;
		makeFit(text: any, w: any): Object;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any[]): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(text: String): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setLabelCustom(text: String): void;
		setPoints(points: Object[]): void;
		setText(text: any): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		typesetter(text: any): any;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	
}

declare module 'library' {
		declare interface icons {
		arrow: Object,
		axes: Object,
		ellipse: Object,
		equation: Object,
		iconize: Object,
		line: Object,
		pan: Object,
		path: Object,
		pencil: Object,
		plus: Object,
		rect: Object,
		textBlock: Object,
		triangle: Object,
		vector: Object,
		zoom100: Object,
		zoomIn: Object,
		zoomOut: Object
	}

	declare interface greek {
		alpha: number,
		Alpha: number,
		Beta: number,
		beta: number,
		Chi: number,
		chi: number,
		delta: number,
		Delta: number,
		epsilon: number,
		Epsilon: number,
		Eta: number,
		eta: number,
		Gamma: number,
		gamma: number,
		iota: number,
		Iota: number,
		kappa: number,
		Kappa: number,
		lambda: number,
		Lambda: number,
		mu: number,
		Mu: number,
		nu: number,
		Nu: number,
		omega: number,
		Omega: number,
		omicron: number,
		Omicron: number,
		Phi: number,
		phi: number,
		pi: number,
		Pi: number,
		piv: number,
		psi: number,
		Psi: number,
		rho: number,
		Rho: number,
		sigma: number,
		Sigma: number,
		sigmaf: number,
		Tau: number,
		tau: number,
		theta: number,
		Theta: number,
		thetasym: number,
		upsih: number,
		Upsilon: number,
		upsilon: number,
		Xi: number,
		xi: number,
		Zeta: number,
		zeta: number
	}

			
}

declare module 'icons' {
		declare interface arrow {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface axes {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface ellipse {
		borderWidth: number,
		cx: number,
		cy: number,
		rx: number,
		ry: number,
		type: string
	}

	declare interface equation {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface line {
		borderWidth: number,
		type: string,
		x1: number,
		x2: number,
		y1: number,
		y2: number
	}

	declare interface iconize {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface pan {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface path {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface plus {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface pencil {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface rect {
		borderWidth: number,
		height: number,
		type: string,
		width: number,
		x: number,
		y: number
	}

	declare interface textBlock {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface triangle {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface zoom100 {
		text: string,
		type: string
	}

	declare interface vector {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface zoomOut {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

	declare interface zoomIn {
		borderWidth: number,
		closePath: boolean,
		points: any[],
		type: string
	}

			
}

declare module 'manager' {
		declare interface _registry {
		getRegistered(type: any, id: any): any,
		register(item: any, type: any): void
	}

	declare interface keys {
		alt: boolean,
		arrowIncrement: number,
		arrowShiftIncrement: number,
		cmmd: boolean,
		ctrl: boolean,
		listeners: any[],
		meta: boolean,
		shift: boolean,
		editMode(_isedit: any): void,
		enable(_enabled: any): void,
		init(): void,
		register(options: any): void,
		scanForFields(): void
	}

		declare class Canvas  {
		constructor(options: Object): this;
		baseClass: string;
		useScrollbars: boolean;
		zoom: number;
		getScrollOffset(): Object;
		getScrollWidth(): number;
		resize(width: any, height: any): void;
		setDimensions(width: any, height: any, scrollx: any, scrolly: any): void;
		setZoom(zoom: any): void;
		onScroll(): void
	}

	declare class Anchors  {
		constructor(options: Object): this;
		add(item: dojox.drawing.stencil._Base): void;
		remove(item: dojox.drawing.stencil._Base): void;
		onAddAnchor(anchor: Object): void;
		onAnchorDown(anchor: Object): void;
		onAnchorDrag(anchor: Object): void;
		onAnchorUp(anchor: Object): void;
		onChangeStyle(stencil: Object): void;
		onRenderStencil(): void;
		onReset(stencil: dojox.drawing.stencil._Base): void;
		onTransformPoint(anchor: Object): void
	}

	declare class StencilUI  {
		constructor(options: any): this;
		register(stencil: Object): Object;
		onOut(obj: Event): void;
		onOver(obj: Event): void;
		onUiDown(obj: Event): void;
		onUiUp(obj: Event): void
	}

	declare class Mouse  {
		constructor(options: Object): this;
		CustomEventMethod: Object;
		doublClickSpeed: number;
		zoom: number;
		create(evt: any, squelchErrors: any): Object;
		down(evt: any): void;
		drag(evt: any): void;
		eventName(name: any): any;
		EventObject(): void;
		init(node: HTMLElement): void;
		move(evt: any): void;
		out(obj: any): void;
		over(obj: any): void;
		overName(obj: any, evt: any): String;
		register(scope: Object): any;
		resize(width: any, height: any): void;
		scrollOffset(): Object;
		setCanvas(): void;
		setCursor(cursor: any, node: HTMLElement): void;
		setEventMode(mode: any): void;
		setZoom(zoom: any): void;
		unregister(handle: any): void;
		up(evt: any): void;
		onDown(obj: any): void;
		onDrag(obj: any): void;
		onMove(obj: any): void;
		onOut(obj: any): void;
		onOver(obj: any): void;
		onUp(obj: any): void
	}

	declare class Stencil  {
		constructor(options: any): this;
		throttleTime: number;
		deleteItem(stencil: Object): void;
		deselect(): void;
		deselectItem(stencil: Object): void;
		exporter(): any[];
		getRecentStencil(): any;
		hasSelected(): number;
		isSelected(stencil: Object): boolean;
		listStencils(): any;
		register(stencil: Object): any;
		removeAll(): void;
		saveMoveState(): void;
		saveThrottledState(): void;
		selectAll(): void;
		selectItem(idOrItem: String): void;
		selectItem(idOrItem: Object): void;
		setConstraint(): void;
		setRecentStencil(stencil: any): void;
		setSelectionGroup(): void;
		toSelected(func: String): void;
		unDelete(stencils: any[]): void;
		unregister(stencil: Object): void;
		withSelected(func: Function): void;
		withStencils(func: Function): void;
		withUnselected(func: Function): void;
		onAnchorUp(): void;
		onArrow(evt: KeyboardEvent): void;
		onBeginDrag(obj: Event): void;
		onDelete(noundo: boolean): void;
		onDeselect(stencil: any, keepObject: any): void;
		onDown(obj: Event): void;
		onDragEnd(obj: Event): void;
		onLabelDoubleClick(obj: Event): void;
		onLabelDown(obj: Event, evt: any): void;
		onLabelDrag(obj: Event): void;
		onLabelUp(obj: Event): void;
		onSelect(stencil: Object): void;
		onStencilDoubleClick(obj: Event): void;
		onStencilDown(obj: Event, evt: any): void;
		onStencilDrag(obj: Event): void;
		onStencilOut(obj: any): void;
		onStencilOver(obj: any): void;
		onStencilUp(obj: Event): void
	}

	declare class Undo  {
		constructor(options: any): this;
		add(stack: any): void;
		apply(scope: any, method: any, args: any): void;
		redo(): void;
		undo(): void;
		onKeyDown(evt: any): void
	}

	
}

declare module 'plugins' {
				declare class _Plugin  {
		constructor(options: any): this;
		anchors: Object;
		button: Object;
		canvas: Object;
		drawing: Object;
		keys: Object;
		mouse: Object;
		node: Object;
		stencils: Object;
		type: string;
		util: Object;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void
	}

	
}

declare module 'tools' {
		declare interface Zoom {
		Zoom100(): void,
		ZoomIn(): void,
		ZoomOut(): void
	}

		declare class Iconize extends undefined$_Plugin {
		constructor(options: any): this;
		anchors: Object;
		button: Object;
		canvas: Object;
		drawing: Object;
		keys: Object;
		mouse: Object;
		node: Object;
		setup: Object;
		stencils: Object;
		type: string;
		util: Object;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		makeIcon(p: any[]): void;
		onClick(): void
	}

	declare class Pan extends undefined$_Plugin {
		constructor(options: any): this;
		anchors: Object;
		button: Object;
		canvas: Object;
		drawing: Object;
		interval: number;
		keys: Object;
		keyScroll: boolean;
		mouse: Object;
		node: Object;
		selected: boolean;
		setup: Object;
		stencils: Object;
		type: string;
		util: Object;
		checkBounds(): void;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		onArrow(evt: any): void;
		onKeyDown(evt: any): void;
		onKeyUp(evt: any): void;
		onPanDrag(obj: any): void;
		onPanUp(obj: any): void;
		onSetPan(bool: boolean): void;
		onSetPan(bool: Event): void;
		onStencilDrag(obj: any): void;
		onStencilUp(obj: any): void;
		onUp(obj: any): void
	}

	declare class Arrow extends undefined$Line {
		constructor(options: any): this;
		anchorType: string;
		arrowEnd: boolean;
		arrowStart: boolean;
		baseRender: boolean;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minimumSize: number;
		setup: Object;
		showAngle: boolean;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(o: any): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		labelPosition(): Object;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Ellipse extends undefined$Ellipse {
		constructor(): this;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minimumSize: number;
		setup: Object;
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(o: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any[]): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Line extends undefined$Line {
		constructor(): this;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minimumSize: number;
		setup: Object;
		showAngle: boolean;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(o: any): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Path extends undefined$Path {
		constructor(): this;
		baseRender: boolean;
		closeColor: Object;
		closePath: boolean;
		closeRadius: number;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minimumSize: number;
		setup: Object;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		createGuide(obj: any): void;
		dataToPoints(data: Object): void;
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		makeSubPath(_closePath: any): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(points: any[]): void;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onCompletePath(_closePath: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: any): void;
		onDrag(obj: any): void;
		onModify(stencil: Object): void;
		onMove(obj: any): void;
		onRender(stencil: Object): void;
		onStartPath(obj: any): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Pencil extends undefined$Path {
		constructor(): this;
		baseRender: boolean;
		closeColor: Object;
		closePath: boolean;
		closeRadius: number;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minDist: number;
		minimumSize: number;
		setup: Object;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(data: Object): void;
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(points: any[]): void;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: any): void;
		onDrag(obj: any): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: any): void
	}

	declare class Rect extends undefined$Rect {
		constructor(): this;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minimumSize: number;
		setup: Object;
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(d: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any[]): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class TextBlock extends undefined$Text {
		constructor(options: any): this;
		align: string;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minimumSize: number;
		selectOnExec: boolean;
		setup: Object;
		showEmpty: boolean;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		valign: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		cleanText(txt: String, removeBreaks: boolean): any;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		connectTextField(): void;
		createAnchors(): void;
		createTextField(txt: String): any;
		dataToPoints(o: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		destroyAnchors(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		edit(): void;
		enable(): void;
		execText(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getSavedCaret(): Object;
		getSelection(node: any): void;
		getText(): any;
		getTransform(): Object;
		highlight(): void;
		insertText(node: any, val: any): void;
		makeFit(text: any, w: any): Object;
		measureText(str: String, width: number): Object;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any[]): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(text: String): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setSavedCaret(val: any): void;
		setSelection(node: any, what: any): void;
		setText(text: any): void;
		setTransform(mx: Object): void;
		showParent(obj: Event): void;
		transformPoints(mx: any): void;
		typesetter(text: any): any;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	
}

declare module 'Iconize' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'Pan' {
		declare interface setup {
		button: boolean,
		iconClass: string,
		name: string,
		tooltip: string
	}

	declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'Zoom' {
				declare class Zoom100 extends undefined$_Plugin {
		constructor(options: any): this;
		anchors: Object;
		button: Object;
		canvas: Object;
		drawing: Object;
		keys: Object;
		mouse: Object;
		node: Object;
		setup: Object;
		stencils: Object;
		type: string;
		util: Object;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		onClick(): void;
		onZoom100(): void
	}

	declare class ZoomIn extends undefined$_Plugin {
		constructor(options: any): this;
		anchors: Object;
		button: Object;
		canvas: Object;
		drawing: Object;
		keys: Object;
		mouse: Object;
		node: Object;
		setup: Object;
		stencils: Object;
		type: string;
		util: Object;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		onClick(): void;
		onZoomIn(): void
	}

	declare class ZoomOut extends undefined$_Plugin {
		constructor(options: any): this;
		anchors: Object;
		button: Object;
		canvas: Object;
		drawing: Object;
		keys: Object;
		mouse: Object;
		node: Object;
		setup: Object;
		stencils: Object;
		type: string;
		util: Object;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		onClick(): void;
		onZoomOut(): void
	}

	
}

declare module 'stencil' {
				declare class _Base  {
		constructor(options: any): this;
		drawingType: string;
		enabled: boolean;
		minimumSize: number;
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(data: Object): void;
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(points: any[]): void;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Ellipse extends undefined$_Base {
		constructor(options: any): this;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		enabled: boolean;
		minimumSize: number;
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(o: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any[]): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Image extends undefined$_Base {
		constructor(options: any): this;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		enabled: boolean;
		minimumSize: number;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(o: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getImageSize(render: any): void;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any[]): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(dbg?: any): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Line extends undefined$_Base {
		constructor(options: any): this;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		enabled: boolean;
		minimumSize: number;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(o: any): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Path extends undefined$_Base {
		constructor(options: any): this;
		baseRender: boolean;
		closeColor: Object;
		closePath: boolean;
		closeRadius: number;
		drawingType: string;
		enabled: boolean;
		minimumSize: number;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(data: Object): void;
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(points: any[]): void;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: Object): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Rect extends undefined$_Base {
		constructor(options: any): this;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		enabled: boolean;
		minimumSize: number;
		type: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(d: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any[]): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Text extends undefined$_Base {
		constructor(options: any): this;
		align: string;
		anchorType: string;
		baseRender: boolean;
		drawingType: string;
		enabled: boolean;
		minimumSize: number;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		valign: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(o: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getText(): any;
		getTransform(): Object;
		highlight(): void;
		makeFit(text: any, w: any): Object;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any[]): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(text?: String): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setText(text: any): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		typesetter(text: any): any;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	
}

declare module 'Arrow' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'Ellipse' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'Line' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'Path' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'Pencil' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'Rect' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'TextBlock' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'custom' {
				declare class Axes extends undefined$Path {
		constructor(options: any): this;
		baseRender: boolean;
		closeColor: Object;
		closePath: boolean;
		closeRadius: number;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minimumSize: number;
		setup: Object;
		showAngle: boolean;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		zScale: number;
		addShadow(args: Object): void;
		anchorPositionCheck(x: number, y: number, anchor: dojox.drawing.manager.Anchors): Object;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		checkClosePoint(firstPt: Object, currPt: Object, remove: boolean): boolean;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		createLabels(): void;
		dataToPoints(o: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(value: String): void;
		setLabelX(): Object;
		setLabelY(): Object;
		setLabelZ(): Object;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		zPoint(obj: any): Object;
		zSet(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: number): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Equation extends undefined$TextBlock {
		constructor(options: any): this;
		align: string;
		anchorType: string;
		baseRender: boolean;
		customType: string;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minimumSize: number;
		selectOnExec: boolean;
		setup: Object;
		showEmpty: boolean;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		valign: string;
		addShadow(args: Object): void;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		cleanText(txt: String, removeBreaks: boolean): any;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		connectTextField(): void;
		createAnchors(): void;
		createTextField(txt: String): any;
		dataToPoints(o: Object): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		destroyAnchors(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		edit(): void;
		enable(): void;
		execText(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getSavedCaret(): Object;
		getSelection(node: any): void;
		getText(): any;
		getTransform(): Object;
		highlight(): void;
		insertText(node: any, val: any): void;
		makeFit(text: any, w: any): Object;
		measureText(str: String, width: number): Object;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any[]): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(text: String): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setSavedCaret(val: any): void;
		setSelection(node: any, what: any): void;
		setText(text: any): void;
		setTransform(mx: Object): void;
		showParent(obj: Event): void;
		transformPoints(mx: any): void;
		typesetter(text: any): any;
		unhighlight(): void;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	declare class Vector extends undefined$Arrow {
		constructor(options: any): this;
		anchorType: string;
		arrowEnd: boolean;
		arrowStart: boolean;
		baseRender: boolean;
		drawingType: string;
		draws: boolean;
		enabled: boolean;
		minimumSize: number;
		setup: Object;
		showAngle: boolean;
		StencilData: Object;
		StencilPoints: any[];
		type: string;
		addShadow(args: Object): void;
		anchorConstrain(x: any, y: any): any;
		animate(options: any, create: any): void;
		applyTransform(mx: any): void;
		attr(key: String, value: String): void;
		attr(key: Object, value: String): void;
		attr(key: String, value: number): void;
		attr(key: Object, value: number): void;
		changeAxis(cosphi: any): void;
		connect(o: any, e: any, s: any, m: any, once: boolean): any;
		connectMouse(): void;
		connectMult(): void;
		dataToPoints(o: any): any[];
		deselect(useDelay: boolean): void;
		destroy(): void;
		disable(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		disconnectMouse(): void;
		enable(): void;
		exporter(): any;
		getAngle(): any;
		getBounds(absolute: boolean): Object;
		getLabel(): any;
		getRadius(): any;
		getTransform(): Object;
		highlight(): void;
		labelPosition(): Object;
		moveToBack(): void;
		moveToFront(): void;
		pointsToData(p: any): Object;
		preventNegativePos(): void;
		remove(): void;
		removeShadow(): void;
		render(): void;
		select(): void;
		setData(data: Object): void;
		setLabel(text: String): void;
		setPoints(points: Object[]): void;
		setTransform(mx: Object): void;
		transformPoints(mx: any): void;
		unhighlight(): void;
		zPoint(obj: any): any;
		onBeforeRender(stencil: Object): void;
		onChangeData(stencil: Object): void;
		onChangeStyle(stencil: Object): void;
		onChangeText(value: any): void;
		onDelete(stencil: dojox.drawing.stencil._Base): void;
		onDown(obj: Event): void;
		onDrag(obj: Event): void;
		onModify(stencil: Object): void;
		onMove(obj: Event): void;
		onRender(stencil: Object): void;
		onTransform(anchor: dojox.drawing.manager.Anchors): void;
		onTransformBegin(anchor: dojox.drawing.manager.Anchors): void;
		onTransformEnd(anchor: dojox.drawing.manager.Anchors): void;
		onUp(obj: Event): void
	}

	
}

declare module 'Axes' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'Equation' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'Vector' {
		declare interface setup {
		iconClass: string,
		name: string,
		tooltip: string
	}

			
}

declare module 'ui' {
				declare class Button  {
		constructor(options: any): this;
		callback: Object;
		enabled: boolean;
		hitched: Object;
		scope: Object;
		selected: boolean;
		toolType: string;
		type: string;
		attr(options: any): void;
		deselect(): void;
		disable(): void;
		enable(): void;
		makeOptions(d: Object, s: number): Object;
		select(): void;
		onClick(button: Object): void;
		onDown(): void;
		onOut(): void;
		onOver(): void;
		onUp(): void
	}

	declare class Tooltip extends undefined$_Plugin {
		constructor(options: any): this;
		anchors: Object;
		button: Object;
		canvas: Object;
		drawing: Object;
		height: number;
		keys: Object;
		mouse: Object;
		node: Object;
		stencils: Object;
		type: string;
		util: Object;
		width: number;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		onOut(): void;
		onOver(): void
	}

	declare class Toolbar  {
		constructor(props: any, node: any): this;
		margin: number;
		padding: number;
		radius: number;
		size: number;
		strPlugs: string;
		strSelected: string;
		strTools: string;
		toolPlugGap: number;
		addBack(): void;
		addPlugin(): void;
		addTool(): void;
		makeButtons(): void;
		onPlugClick(button: Object): void;
		onRenderStencil(stencil: Object): void;
		onToolClick(button: Object): void
	}

	
}

declare module 'dom' {
				declare class Toolbar  {
		constructor(props: any, node: any): this;
		baseClass: string;
		buttonClass: string;
		iconClass: string;
		createIcon(node: HTMLElement, constr: Function): void;
		createTool(node: HTMLElement): void;
		parse(): void;
		onClick(type: String): void;
		onSetTool(type: String): void
	}

	declare class Pan extends undefined$_Plugin {
		constructor(options: any): this;
		anchors: Object;
		button: Object;
		canvas: Object;
		drawing: Object;
		keys: Object;
		mouse: Object;
		node: Object;
		selected: boolean;
		setup: Object;
		stencils: Object;
		type: string;
		util: Object;
		checkBounds(): void;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		onKeyDown(evt: any): void;
		onKeyUp(evt: any): void;
		onPanDrag(obj: any): void;
		onSetPan(bool: boolean): void;
		onSetPan(bool: Event): void;
		onStencilDrag(obj: any): void;
		onStencilUp(obj: any): void
	}

	declare class Zoom extends undefined$_Plugin {
		constructor(options: any): this;
		anchors: Object;
		baseClass: string;
		botClass: string;
		button: Object;
		canvas: Object;
		drawing: Object;
		keys: Object;
		maxZoom: number;
		midClass: string;
		minZoom: number;
		mouse: Object;
		node: Object;
		stencils: Object;
		topClass: string;
		type: string;
		util: Object;
		zoomFactor: number;
		zoomInc: number;
		connect(): void;
		disconnect(handles: Object): void;
		disconnect(handles: any[]): void;
		makeButton(name: any, cls: any): void;
		onZoom100(evt: MouseEvent): void;
		onZoomIn(evt: MouseEvent): void;
		onZoomOut(evt: MouseEvent): void
	}

	
}

declare module 'util' {
		declare interface common {
		objects: Object,
		abbr(type: any): number,
		angle(obj: Event, snap: number): any,
		argsToObj(): any,
		attr(elem: Object, prop: String, value: any, squelchErrors: any): boolean,
		byId(id: String): any,
		constrainAngle(obj: Event, min: number, max: number): Event,
		degToRad(n: number): number,
		distance(): any,
		idSetStart(num: any): void,
		length(o: Event): any,
		lineSub(x1: number, y1: number, x2: number, y2: number, amt: number): Object,
		mixin(o1: any, o2: any): void,
		oppAngle(ang: number): number,
		pointOnCircle(cx: number, cy: number, radius: number, angle: number): Object,
		radians(o: Event): any,
		radToDeg(n: number): number,
		register(obj: Object): void,
		slope(p1: Object, p2: Object): number,
		snapAngle(obj: Event, ca: number): any,
		uid(str: String): String
	}

	declare interface oo {
		declare(): any,
		extend(): Function
	}

	declare interface positioning {
		angle(start: Object, end: Object): Object,
		label(start: Object, end: Object): Object
	}

	declare interface typeset {
		convertHTML(inText: any): any,
		convertLaTeX(inText: any): any
	}

			
}

declare module 'common' {
		declare interface objects {
		
	}

			
}

declare module 'dojox/drawing' {
					declare module.exports: drawing


}

declare module 'dojox/drawing/_base' {
					declare module.exports: _base


}

declare module 'dojox/drawing/Drawing' {
					declare module.exports: Drawing


}

declare module 'dojox/drawing/defaults' {
					declare module.exports: defaults


}

declare module 'dojox/drawing/defaults.arrows' {
					declare module.exports: arrows


}

declare module 'dojox/drawing/defaults.disabled' {
					declare module.exports: disabled


}

declare module 'dojox/drawing/defaults.anchors' {
					declare module.exports: anchors


}

declare module 'dojox/drawing/defaults.highlighted' {
					declare module.exports: highlighted


}

declare module 'dojox/drawing/defaults.button' {
					declare module.exports: button


}

declare module 'dojox/drawing/defaults.hitSelected' {
					declare module.exports: hitSelected


}

declare module 'dojox/drawing/defaults.hitNorm' {
					declare module.exports: hitNorm


}

declare module 'dojox/drawing/defaults.hitHighlighted' {
					declare module.exports: hitHighlighted


}

declare module 'dojox/drawing/defaults.selected' {
					declare module.exports: selected


}

declare module 'dojox/drawing/defaults.norm' {
					declare module.exports: norm


}

declare module 'dojox/drawing/defaults.textMode' {
					declare module.exports: textMode


}

declare module 'dojox/drawing/defaults.textDisabled' {
					declare module.exports: textDisabled


}

declare module 'dojox/drawing/defaults.text' {
					declare module.exports: text


}

declare module 'dojox/drawing/annotations/Label' {
					declare module.exports: Label


}

declare module 'dojox/drawing/annotations/Label.Label' {
					declare module.exports: Label


}

declare module 'dojox/drawing/annotations/Angle' {
					declare module.exports: Angle


}

declare module 'dojox/drawing/annotations/BoxShadow' {
					declare module.exports: BoxShadow


}

declare module 'dojox/drawing/annotations/Arrow' {
					declare module.exports: Arrow


}

declare module 'dojox/drawing/library/icons' {
					declare module.exports: icons


}

declare module 'dojox/drawing/library/icons.ellipse' {
					declare module.exports: ellipse


}

declare module 'dojox/drawing/library/icons.arrow' {
					declare module.exports: arrow


}

declare module 'dojox/drawing/library/icons.axes' {
					declare module.exports: axes


}

declare module 'dojox/drawing/library/icons.pan' {
					declare module.exports: pan


}

declare module 'dojox/drawing/library/icons.line' {
					declare module.exports: line


}

declare module 'dojox/drawing/library/icons.path' {
					declare module.exports: path


}

declare module 'dojox/drawing/library/icons.equation' {
					declare module.exports: equation


}

declare module 'dojox/drawing/library/icons.iconize' {
					declare module.exports: iconize


}

declare module 'dojox/drawing/library/icons.pencil' {
					declare module.exports: pencil


}

declare module 'dojox/drawing/library/icons.plus' {
					declare module.exports: plus


}

declare module 'dojox/drawing/library/icons.triangle' {
					declare module.exports: triangle


}

declare module 'dojox/drawing/library/icons.vector' {
					declare module.exports: vector


}

declare module 'dojox/drawing/library/icons.rect' {
					declare module.exports: rect


}

declare module 'dojox/drawing/library/icons.zoom100' {
					declare module.exports: zoom100


}

declare module 'dojox/drawing/library/icons.textBlock' {
					declare module.exports: textBlock


}

declare module 'dojox/drawing/library/icons.zoomIn' {
					declare module.exports: zoomIn


}

declare module 'dojox/drawing/library/icons.zoomOut' {
					declare module.exports: zoomOut


}

declare module 'dojox/drawing/library/greek' {
					declare module.exports: greek


}

declare module 'dojox/drawing/manager/_registry' {
					declare module.exports: _registry


}

declare module 'dojox/drawing/manager/keys' {
					declare module.exports: keys


}

declare module 'dojox/drawing/manager/Anchors' {
					declare module.exports: Anchors


}

declare module 'dojox/drawing/manager/Canvas' {
					declare module.exports: Canvas


}

declare module 'dojox/drawing/manager/StencilUI' {
					declare module.exports: StencilUI


}

declare module 'dojox/drawing/manager/Undo' {
					declare module.exports: Undo


}

declare module 'dojox/drawing/manager/Mouse' {
					declare module.exports: Mouse


}

declare module 'dojox/drawing/manager/Stencil' {
					declare module.exports: Stencil


}

declare module 'dojox/drawing/plugins/_Plugin' {
					declare module.exports: _Plugin


}

declare module 'dojox/drawing/plugins/drawing/Grid' {
					declare module.exports: Grid


}

declare module 'dojox/drawing/plugins/drawing/GreekPalette' {
					declare module.exports: GreekPalette


}

declare module 'dojox/drawing/plugins/tools/Zoom' {
					declare module.exports: Zoom


}

declare module 'dojox/drawing/plugins/tools/Zoom.Zoom100' {
					declare module.exports: Zoom100


}

declare module 'dojox/drawing/plugins/tools/Zoom.ZoomOut' {
					declare module.exports: ZoomOut


}

declare module 'dojox/drawing/plugins/tools/Zoom.ZoomIn' {
					declare module.exports: ZoomIn


}

declare module 'dojox/drawing/plugins/tools/Iconize' {
					declare module.exports: Iconize


}

declare module 'dojox/drawing/plugins/tools/Iconize.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/plugins/tools/Pan' {
					declare module.exports: Pan


}

declare module 'dojox/drawing/plugins/tools/Pan.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/stencil/_Base' {
					declare module.exports: _Base


}

declare module 'dojox/drawing/stencil/Line' {
					declare module.exports: Line


}

declare module 'dojox/drawing/stencil/Ellipse' {
					declare module.exports: Ellipse


}

declare module 'dojox/drawing/stencil/Path' {
					declare module.exports: Path


}

declare module 'dojox/drawing/stencil/Rect' {
					declare module.exports: Rect


}

declare module 'dojox/drawing/stencil/Image' {
					declare module.exports: Image


}

declare module 'dojox/drawing/stencil/Text' {
					declare module.exports: Text


}

declare module 'dojox/drawing/tools/Arrow' {
					declare module.exports: Arrow


}

declare module 'dojox/drawing/tools/Arrow.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/tools/Ellipse' {
					declare module.exports: Ellipse


}

declare module 'dojox/drawing/tools/Ellipse.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/tools/Pencil' {
					declare module.exports: Pencil


}

declare module 'dojox/drawing/tools/Pencil.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/tools/Rect' {
					declare module.exports: Rect


}

declare module 'dojox/drawing/tools/Rect.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/tools/Path' {
					declare module.exports: Path


}

declare module 'dojox/drawing/tools/Path.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/tools/Line' {
					declare module.exports: Line


}

declare module 'dojox/drawing/tools/Line.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/tools/TextBlock' {
					declare module.exports: TextBlock


}

declare module 'dojox/drawing/tools/TextBlock.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/tools/custom/Axes' {
					declare module.exports: Axes


}

declare module 'dojox/drawing/tools/custom/Axes.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/tools/custom/Vector' {
					declare module.exports: Vector


}

declare module 'dojox/drawing/tools/custom/Vector.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/tools/custom/Equation' {
					declare module.exports: Equation


}

declare module 'dojox/drawing/tools/custom/Equation.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/ui/Button' {
					declare module.exports: Button


}

declare module 'dojox/drawing/ui/Toolbar' {
					declare module.exports: Toolbar


}

declare module 'dojox/drawing/ui/Tooltip' {
					declare module.exports: Tooltip


}

declare module 'dojox/drawing/ui/dom/Toolbar' {
					declare module.exports: Toolbar


}

declare module 'dojox/drawing/ui/dom/Pan' {
					declare module.exports: Pan


}

declare module 'dojox/drawing/ui/dom/Pan.setup' {
					declare module.exports: setup


}

declare module 'dojox/drawing/ui/dom/Zoom' {
					declare module.exports: Zoom


}

declare module 'dojox/drawing/util/positioning' {
					declare module.exports: positioning


}

declare module 'dojox/drawing/util/oo' {
					declare module.exports: oo


}

declare module 'dojox/drawing/util/typeset' {
					declare module.exports: typeset


}

declare module 'dojox/drawing/util/common' {
					declare module.exports: common


}

declare module 'dojox/drawing/util/common.objects' {
					declare module.exports: objects


}