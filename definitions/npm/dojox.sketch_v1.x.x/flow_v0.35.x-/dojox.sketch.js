import type { sketch } from 'npm$namespace$dojox'

declare module 'dojox.sketch' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface sketch {
		
	}

			
}

declare module 'sketch' {
		declare interface Anchor {
		(an: any, id: any, isControl: any): void
	}

	declare interface Annotation {
		(figure: any, id: any): void
	}

	declare interface DoubleArrowAnnotation {
		(figure: any, id: any): void
	}

	declare interface Figure {
		(mixin: any): void
	}

	declare interface LeadAnnotation {
		(figure: any, id: any): void
	}

	declare interface PreexistingAnnotation {
		(figure: any, id: any): void
	}

	declare interface SingleArrowAnnotation {
		(figure: any, id: any): void
	}

	declare interface UnderlineAnnotation {
		(figure: any, id: any): void
	}

		declare class _Plugin  {
		constructor(args?: Object): this;
		button: Object;
		figure: Object;
		iconClassPrefix: string;
		itemGroup: string;
		queryCommand: Object;
		shape: string;
		useDefaultCommand: boolean;
		activate(e: any): void;
		attr(name: any, value: any): any;
		buttonClass(): void;
		connect(o: any, f: any, tf: any): void;
		destroy(f: any): void;
		setFigure(figure: dijit._Widget): void;
		setToolbar(toolbar: dijit._Widget): void;
		onActivate(): void;
		onMouseDown(e: any): void;
		onMouseMove(e: any): void;
		onMouseUp(e: any): void
	}

	declare class Slider extends undefined$_Plugin {
		constructor(args?: Object): this;
		button: Object;
		figure: Object;
		iconClassPrefix: string;
		itemGroup: string;
		queryCommand: Object;
		shape: string;
		useDefaultCommand: boolean;
		activate(e: any): void;
		attr(name: any, value: any): any;
		buttonClass(): void;
		connect(o: any, f: any, tf: any): void;
		destroy(f: any): void;
		reset(): void;
		setFigure(figure: dijit._Widget): void;
		setToolbar(t: any): void;
		onActivate(): void;
		onMouseDown(e: any): void;
		onMouseMove(e: any): void;
		onMouseUp(e: any): void
	}

	declare class UndoStack  {
		constructor(figure: any): this;
		add(cmd: String, ann: dojox.sketch.Annotation, before: String): void;
		apply(state: any, from: any, to: any): void;
		destroy(): void;
		redo(): void;
		undo(): void
	}

	declare class Toolbar extends dijit$Toolbar {
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
		figure: Object;
		set(property: "figure", value: Object): void;
		get(property: "figure"): Object;
		watch(
		property: "figure", callback: {
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
		focusedChild: Object;
		set(property: "focusedChild", value: Object): void;
		get(property: "focusedChild"): Object;
		watch(
		property: "focusedChild", callback: {
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
		multiCharSearchDuration: number;
		set(property: "multiCharSearchDuration", value: number): void;
		get(property: "multiCharSearchDuration"): number;
		watch(
		property: "multiCharSearchDuration", callback: {
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
		plugins: Object;
		set(property: "plugins", value: Object): void;
		get(property: "plugins"): Object;
		watch(
		property: "plugins", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		addChild(widget: dijit._WidgetBase, insertIndex: number): void;
		addGroupItem(item: dojox.sketch._Plugin, group: any): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		childSelector(node: HTMLElement): any;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		connectKeyNavHandlers(prevKeyCodes: dojo.keys, nextKeyCodes: dojo.keys): void;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		focus(): void;
		focusChild(widget: dijit._WidgetBase, last: boolean): void;
		focusFirstChild(): void;
		focusLastChild(): void;
		focusNext(): void;
		focusPrev(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getIndexOfChild(child: dijit._WidgetBase): any;
		getParent(): any;
		hasChildren(): boolean;
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
		removeChild(widget: dijit._WidgetBase): void;
		removeChild(widget: number): void;
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setFigure(f: any): void;
		startup(): void;
		startupKeyNavChildren(): void;
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
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onKeyboardSearch(
		item: dijit._WidgetBase, evt: Event, searchString: String, numMatches: number
	): void;
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

declare module 'Annotation' {
		declare interface apply {
		(obj: any): void
	}

	declare interface beginEdit {
		(type: any): void
	}

	declare interface destroy {
		(): void
	}

	declare interface draw {
		(): void
	}

	declare interface drawBBox {
		(): void
	}

	declare interface endEdit {
		(): void
	}

	declare interface getBBox {
		(): void
	}

	declare interface getTextBox {
		(zoomfactor: any): void
	}

	declare interface getType {
		(): void
	}

	declare interface initialize {
		(): void
	}

	declare interface property {
		(name: any, value: any): void
	}

	declare interface readCommonAttrs {
		(obj: any): void
	}

	declare interface register {
		(name: any, toolclass: any): void
	}

	declare interface serialize {
		(): void
	}

	declare interface setBinding {
		(pt: any): void
	}

	declare interface setMode {
		(m: any): void
	}

	declare interface type {
		(): void
	}

	declare interface writeCommonAttrs {
		(): void
	}

	declare interface zoom {
		(pct: any): void
	}

	declare interface Modes {
		Edit: number,
		View: number
	}

			
}

declare module 'DoubleArrowAnnotation' {
		declare interface apply {
		(obj: any): void
	}

	declare interface destroy {
		(): void
	}

	declare interface draw {
		(obj: any): void
	}

	declare interface getBBox {
		(): void
	}

	declare interface getType {
		(): void
	}

	declare interface initialize {
		(obj: any): void
	}

	declare interface serialize {
		(): void
	}

	declare interface type {
		(): void
	}

	declare interface zoom {
		(pct: any): void
	}

	declare interface control {
		x: number,
		y: number
	}

	declare interface end {
		x: number,
		y: number
	}

	declare interface transform {
		dx: number,
		dy: number
	}

	declare interface start {
		x: number,
		y: number
	}

	declare interface textPosition {
		x: number,
		y: number
	}

			
}

declare module 'Figure' {
		declare interface add {
		(annotation: any): void
	}

	declare interface convert {
		(ann: any, t: any): void
	}

	declare interface destroy {
		(isLoading: any): void
	}

	declare interface draw {
		(): void
	}

	declare interface getAnnotator {
		(id: any): void
	}

	declare interface getFit {
		(): void
	}

	declare interface getValue {
		(): void
	}

	declare interface initialize {
		(node: any): void
	}

	declare interface initUndoStack {
		(): void
	}

	declare interface load {
		(obj: any, n: any): void
	}

	declare interface nextKey {
		(): void
	}

	declare interface redo {
		(): void
	}

	declare interface remove {
		(annotation: any): void
	}

	declare interface serialize {
		(): void
	}

	declare interface setTool {
		(t: dojox.sketch._Plugin): void
	}

	declare interface setValue {
		(text: any): void
	}

	declare interface undo {
		(): void
	}

	declare interface unzoom {
		(): void
	}

	declare interface zoom {
		(pct: any): void
	}

			
}

declare module 'LeadAnnotation' {
		declare interface apply {
		(obj: any): void
	}

	declare interface destroy {
		(): void
	}

	declare interface draw {
		(obj: any): void
	}

	declare interface getBBox {
		(): void
	}

	declare interface getType {
		(): void
	}

	declare interface initialize {
		(obj: any): void
	}

	declare interface serialize {
		(): void
	}

	declare interface type {
		(): void
	}

			
}

declare module 'PreexistingAnnotation' {
		declare interface apply {
		(obj: any): void
	}

	declare interface destroy {
		(): void
	}

	declare interface draw {
		(obj: any): void
	}

	declare interface getBBox {
		(): void
	}

	declare interface getType {
		(): void
	}

	declare interface initialize {
		(obj: any): void
	}

	declare interface serialize {
		(): void
	}

	declare interface type {
		(): void
	}

	declare interface zoom {
		(pct: any): void
	}

			
}

declare module 'SingleArrowAnnotation' {
		declare interface apply {
		(obj: any): void
	}

	declare interface destroy {
		(): void
	}

	declare interface draw {
		(obj: any): void
	}

	declare interface getBBox {
		(): void
	}

	declare interface getType {
		(): void
	}

	declare interface initialize {
		(obj: any): void
	}

	declare interface serialize {
		(): void
	}

	declare interface type {
		(): void
	}

	declare interface zoom {
		(pct: any): void
	}

			
}

declare module 'UnderlineAnnotation' {
		declare interface apply {
		(obj: any): void
	}

	declare interface destroy {
		(): void
	}

	declare interface draw {
		(obj: any): void
	}

	declare interface getBBox {
		(): void
	}

	declare interface getType {
		(): void
	}

	declare interface initialize {
		(obj: any): void
	}

	declare interface serialize {
		(): void
	}

	declare interface type {
		(): void
	}

	declare interface zoom {
		(pct: any): void
	}

			
}

declare module 'dojox/sketch' {
					declare module.exports: sketch


}

declare module 'dojox/sketch/_Plugin' {
					declare module.exports: _Plugin


}

declare module 'dojox/sketch/Slider' {
					declare module.exports: Slider


}

declare module 'dojox/sketch/UndoStack' {
					declare module.exports: UndoStack


}

declare module 'dojox/sketch/Toolbar' {
					declare module.exports: Toolbar


}

declare module 'dojox/sketch/Anchor' {
					declare module.exports: Anchor


}

declare module 'dojox/sketch/Annotation' {
					declare module.exports: Annotation


}

declare module 'dojox/sketch/Annotation.Modes' {
					declare module.exports: Modes


}

declare module 'dojox/sketch/DoubleArrowAnnotation' {
					declare module.exports: DoubleArrowAnnotation


}

declare module 'dojox/sketch/DoubleArrowAnnotation.control' {
					declare module.exports: control


}

declare module 'dojox/sketch/DoubleArrowAnnotation.start' {
					declare module.exports: start


}

declare module 'dojox/sketch/DoubleArrowAnnotation.textPosition' {
					declare module.exports: textPosition


}

declare module 'dojox/sketch/DoubleArrowAnnotation.transform' {
					declare module.exports: transform


}

declare module 'dojox/sketch/DoubleArrowAnnotation.end' {
					declare module.exports: end


}

declare module 'dojox/sketch/Figure' {
					declare module.exports: Figure


}

declare module 'dojox/sketch/PreexistingAnnotation' {
					declare module.exports: PreexistingAnnotation


}

declare module 'dojox/sketch/LeadAnnotation' {
					declare module.exports: LeadAnnotation


}

declare module 'dojox/sketch/SingleArrowAnnotation' {
					declare module.exports: SingleArrowAnnotation


}

declare module 'dojox/sketch/UnderlineAnnotation' {
					declare module.exports: UnderlineAnnotation


}