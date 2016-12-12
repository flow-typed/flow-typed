

declare module 'dojox.app' {
					
}

declare module 'app' {
		declare interface main {
		(config: any, node: any): void
	}

		declare class Controller  {
		constructor(app: any, events: any): this;
		bind(evented: Object, event: String, handler: Function): Function;
		unbind(evented: Object, event: String): Function
	}

	declare class View extends dijit$_TemplatedMixin, dijit$_WidgetsInTemplateMixin {
		constructor(params: any): this;
		attachScope: Object;
		contextRequire: Function;
		searchContainerNode: boolean;
		templatePath: string;
		templateString: string;
		widgetsInTemplate: boolean;
		afterActivate(): void;
		afterDeactivate(): void;
		beforeActivate(): void;
		beforeDeactivate(): void;
		buildRendering(): void;
		connect(obj: any, event: any, method: any): any;
		destroy(preserveDom?: boolean): void;
		destroyRendering(): void;
		init(): void;
		load(): any;
		own(): any;
		start(): any;
		startup(): void;
		getCachedTemplate(): any
	}

	declare class ViewBase  {
		constructor(params: any): this;
		afterActivate(): void;
		afterDeactivate(): void;
		beforeActivate(): void;
		beforeDeactivate(): void;
		destroy(): void;
		init(): void;
		load(): any;
		start(): any
	}

	
}

declare module 'controllers' {
				declare class History extends undefined$Controller {
		constructor(): this;
		currentState: Object;
		bind(evented: Object, event: String, handler: Function): Function;
		unbind(evented: Object, event: String): Function;
		onDomNodeChange(evt: any): void;
		onPopState(evt: Object): void;
		onStartTransition(evt: Object): void
	}

	declare class HistoryHash extends undefined$Controller {
		constructor(app: any): this;
		bind(evented: Object, event: String, handler: Function): Function;
		unbind(evented: Object, event: String): Function;
		onDomNodeChange(evt: any): void;
		onStartTransition(evt: Object): void
	}

	declare class BorderLayout extends undefined$LayoutBase {
		constructor(app: any, events: any): this;
		bind(evented: Object, event: String, handler: Function): Function;
		hideView(view: any): void;
		initLayout(event: Object): void;
		layoutView(event: Object): void;
		showView(view: any): void;
		unbind(evented: Object, event: String): Function;
		onResize(): void
	}

	declare class LayoutBase extends undefined$Controller {
		constructor(app: any, events: any): this;
		bind(evented: Object, event: String, handler: Function): Function;
		hideView(view: any): void;
		initLayout(event: Object): void;
		layoutView(event: Object): void;
		showView(view: any): void;
		unbind(evented: Object, event: String): Function;
		onResize(): void
	}

	declare class Load extends undefined$Controller {
		constructor(app: any, events: any): this;
		bind(evented: Object, event: String, handler: Function): Function;
		createChild(parent: Object, childId: String, subIds: String, params: any): any;
		createView(
		parent: Object, id: String, name: String, mixin: String, params: Object, type: String
	): any;
		init(event: any): void;
		load(event: Object): any;
		loadChild(
		parent: Object, childId: String, subIds: String, params: Object, loadEvent: Object
	): any;
		loadView(loadEvent: Object): any;
		proceedLoadView(loadEvt: Object): void;
		unbind(evented: Object, event: String): Function
	}

	declare class Layout extends undefined$LayoutBase {
		constructor(app: any, events: any): this;
		bind(evented: Object, event: String, handler: Function): Function;
		hideView(view: any): void;
		initLayout(event: Object): void;
		layoutView(event: Object): void;
		resizeSelectedChildren(w: any): void;
		showView(view: any): void;
		unbind(evented: Object, event: String): Function;
		onResize(): void
	}

	declare class Transition extends undefined$Controller {
		constructor(app: any, events: any): this;
		proceeding: boolean;
		waitingQueue: any[];
		bind(evented: Object, event: String, handler: Function): Function;
		proceedTransition(transitionEvt: Object): void;
		transition(event: Object): void;
		unbind(evented: Object, event: String): Function;
		onDomNodeChange(evt: any): void;
		onStartTransition(evt: Object): void
	}

	
}

declare module 'module' {
				declare class env  {
		constructor(): this;
		mode: string;
		init(): void
	}

	declare class lifecycle  {
		constructor(): this;
		lifecycle: Object;
		getStatus(): any;
		setStatus(newStatus: any): void
	}

	
}

declare module 'utils' {
		declare interface mvcModel {
		(config: Object, params: Object, item: String): void
	}

	declare interface nls {
		(config: Object, parent: Object): void
	}

	declare interface model {
		(config: Object, parent: Object, app: Object): void
	}

	declare interface simpleModel {
		(config: Object, params: Object, item: String): void
	}

	declare interface constraints {
		getAllSelectedChildren(view: dojox.app.View, selChildren: any[]): any,
		getSelectedChild(view: dojox.app.View, constraint: Object): any,
		register(constraint: any): void,
		setSelectedChild(view: dojox.app.View, constraint: Object, child: dojox.app.View): void
	}

	declare interface config {
		configMerge(target: Object, source: Object): any,
		configProcessHas(source: Object): any
	}

	declare interface layout {
		layoutChildren(
		container: HTMLElement, dim: Object, children: any[], changedRegionId: String, changedRegionSize: number
	): void,
		marginBox2contentBox(node: HTMLElement, mb: Object): Object
	}

	declare interface hash {
		addViewParams(hash: String, view: String, params: Object): any,
		buildWithParams(hash: String, params: Object): any,
		getParamObj(params: Object, viewPart: String): any,
		getParams(hash: String): any,
		getParamString(params: Object): any,
		getTarget(hash: String, defaultView: String): any
	}

			
}

declare module 'widgets' {
				declare class _ScrollableMixin extends undefined$scrollable {
		constructor(): this;
		allowNestedScrolls: boolean;
		appBars: boolean;
		constraint: boolean;
		dirLock: boolean;
		disableFlashScrollBar: boolean;
		fadeScrollBar: boolean;
		fixedFooterHeight: number;
		fixedHeaderHeight: number;
		height: string;
		isLocalFooter: boolean;
		propagatable: boolean;
		scrollableParams: Object;
		scrollBar: boolean;
		scrollDir: string;
		scrollType: number;
		threshold: number;
		touchNode: HTMLElement;
		weight: number;
		abort(): void;
		addCover(): void;
		adjustDestination(to: Object, pos: Object, dim: Object): boolean;
		buildRendering(): void;
		calcScrollBarPos(to: Object): Object;
		calcSpeed(distance: number, time: number): number;
		checkFixedBar(node: HTMLElement, local: boolean): any;
		cleanup(): void;
		createMask(): void;
		destroy(): void;
		findAppBars(): void;
		findDisp(node: HTMLElement): any;
		flashScrollBar(): void;
		getDim(): Object;
		getPos(): Object;
		getScreenSize(): Object;
		getSpeed(): Object;
		hideScrollBar(): void;
		init(params: Object): void;
		isFormElement(node: HTMLElement): boolean;
		isTopLevel(): boolean;
		makeTranslateStr(to: Object): String;
		removeCover(): void;
		reparent(): void;
		resetScrollBar(): void;
		resize(): void;
		scrollIntoView(node: HTMLElement, alignWithTop: boolean, duration: number): void;
		scrollScrollBarTo(to: Object): void;
		scrollTo(to: Object, doNotMoveScrollBar: boolean, node: HTMLElement): void;
		setKeyframes(from: Object, to: Object, idx: number): void;
		setSelectable(node: HTMLElement, selectable: boolean): void;
		showScrollBar(): void;
		slideScrollBarTo(to: Object, duration: number, easing: String): void;
		slideTo(to: Object, duration: number, easing: String): void;
		startup(): void;
		stopAnimation(): void;
		onAfterScroll(e: Event): void;
		onBeforeScroll(e: Event): boolean;
		onFlickAnimationEnd(e: any): void;
		onFlickAnimationStart(e: any): void;
		onTouchEnd(e: Event): void;
		onTouchMove(e: any): void;
		onTouchStart(e: any): void
	}

	declare class Container extends dijit$_WidgetBase, dijit$_Container {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		allowNestedScrolls: boolean;
		set(property: "allowNestedScrolls", value: boolean): void;
		get(property: "allowNestedScrolls"): boolean;
		watch(
		property: "allowNestedScrolls", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		appBars: boolean;
		set(property: "appBars", value: boolean): void;
		get(property: "appBars"): boolean;
		watch(
		property: "appBars", callback: {
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
		constraint: boolean;
		set(property: "constraint", value: boolean): void;
		get(property: "constraint"): boolean;
		watch(
		property: "constraint", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		dirLock: boolean;
		set(property: "dirLock", value: boolean): void;
		get(property: "dirLock"): boolean;
		watch(
		property: "dirLock", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		disableFlashScrollBar: boolean;
		set(property: "disableFlashScrollBar", value: boolean): void;
		get(property: "disableFlashScrollBar"): boolean;
		watch(
		property: "disableFlashScrollBar", callback: {
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
		fadeScrollBar: boolean;
		set(property: "fadeScrollBar", value: boolean): void;
		get(property: "fadeScrollBar"): boolean;
		watch(
		property: "fadeScrollBar", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		fixedFooter: string;
		set(property: "fixedFooter", value: string): void;
		get(property: "fixedFooter"): string;
		watch(
		property: "fixedFooter", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		fixedFooterHeight: number;
		set(property: "fixedFooterHeight", value: number): void;
		get(property: "fixedFooterHeight"): number;
		watch(
		property: "fixedFooterHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		fixedHeader: string;
		set(property: "fixedHeader", value: string): void;
		get(property: "fixedHeader"): string;
		watch(
		property: "fixedHeader", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		fixedHeaderHeight: number;
		set(property: "fixedHeaderHeight", value: number): void;
		get(property: "fixedHeaderHeight"): number;
		watch(
		property: "fixedHeaderHeight", callback: {
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
		height: string;
		set(property: "height", value: string): void;
		get(property: "height"): string;
		watch(
		property: "height", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		isLocalFooter: boolean;
		set(property: "isLocalFooter", value: boolean): void;
		get(property: "isLocalFooter"): boolean;
		watch(
		property: "isLocalFooter", callback: {
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
		propagatable: boolean;
		set(property: "propagatable", value: boolean): void;
		get(property: "propagatable"): boolean;
		watch(
		property: "propagatable", callback: {
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
		scrollableParams: Object;
		set(property: "scrollableParams", value: Object): void;
		get(property: "scrollableParams"): Object;
		watch(
		property: "scrollableParams", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		scrollBar: boolean;
		set(property: "scrollBar", value: boolean): void;
		get(property: "scrollBar"): boolean;
		watch(
		property: "scrollBar", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollDir: string;
		set(property: "scrollDir", value: string): void;
		get(property: "scrollDir"): string;
		watch(
		property: "scrollDir", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		scrollType: number;
		set(property: "scrollType", value: number): void;
		get(property: "scrollType"): number;
		watch(
		property: "scrollType", callback: {
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
		threshold: number;
		set(property: "threshold", value: number): void;
		get(property: "threshold"): number;
		watch(
		property: "threshold", callback: {
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
		touchNode: HTMLElement;
		set(property: "touchNode", value: HTMLElement): void;
		get(property: "touchNode"): HTMLElement;
		watch(
		property: "touchNode", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
	}
	): {
		unwatch(): void
	};
		weight: number;
		set(property: "weight", value: number): void;
		get(property: "weight"): number;
		watch(
		property: "weight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		abort(): void;
		addChild(widget: dijit._WidgetBase, insertIndex: number): void;
		addCover(): void;
		adjustDestination(to: Object, pos: Object, dim: Object): boolean;
		buildRendering(): void;
		calcScrollBarPos(to: Object): Object;
		calcSpeed(distance: number, time: number): number;
		checkFixedBar(node: HTMLElement, local: boolean): any;
		cleanup(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createMask(): void;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		findAppBars(): void;
		findDisp(node: HTMLElement): any;
		flashScrollBar(): void;
		get(name: any): any;
		getChildren(): any[];
		getDim(): Object;
		getIndexInParent(): any;
		getIndexOfChild(child: dijit._WidgetBase): any;
		getNextSibling(): any;
		getParent(): any;
		getPos(): Object;
		getPreviousSibling(): any;
		getScreenSize(): Object;
		getSpeed(): Object;
		hasChildren(): boolean;
		hideScrollBar(): void;
		init(params: Object): void;
		isFocusable(): any;
		isFormElement(node: HTMLElement): boolean;
		isLeftToRight(): any;
		isTopLevel(): boolean;
		layout(): void;
		makeTranslateStr(to: Object): String;
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
		removeCover(): void;
		reparent(): void;
		resetScrollBar(): void;
		resize(changeSize?: Object, resultSize?: Object): void;
		scrollIntoView(node: HTMLElement, alignWithTop: boolean, duration: number): void;
		scrollScrollBarTo(to: Object): void;
		scrollTo(to: Object, doNotMoveScrollBar: boolean, node: HTMLElement): void;
		set(name: any, value: any): any;
		setKeyframes(from: Object, to: Object, idx: number): void;
		setSelectable(node: HTMLElement, selectable: boolean): void;
		showScrollBar(): void;
		slideScrollBarTo(to: Object, duration: number, easing: String): void;
		slideTo(to: Object, duration: number, easing: String): void;
		startup(): void;
		stopAnimation(): void;
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
		onAfterScroll(e: Event): void;
		onBeforeScroll(e: Event): boolean;
		onBlur(): void;
		onFlickAnimationEnd(e: any): void;
		onFlickAnimationStart(e: any): void;
		onFocus(): void;
		onTouchEnd(e: Event): void;
		onTouchMove(e: any): void;
		onTouchStart(e: any): void
	}

	
}

declare module 'dojox/app/main' {
					declare module.exports: main


}

declare module 'dojox/app/Controller' {
					declare module.exports: Controller


}

declare module 'dojox/app/ViewBase' {
					declare module.exports: ViewBase


}

declare module 'dojox/app/View' {
					declare module.exports: View


}

declare module 'dojox/app/controllers/BorderLayout' {
					declare module.exports: BorderLayout


}

declare module 'dojox/app/controllers/History' {
					declare module.exports: History


}

declare module 'dojox/app/controllers/HistoryHash' {
					declare module.exports: HistoryHash


}

declare module 'dojox/app/controllers/Layout' {
					declare module.exports: Layout


}

declare module 'dojox/app/controllers/LayoutBase' {
					declare module.exports: LayoutBase


}

declare module 'dojox/app/controllers/Load' {
					declare module.exports: Load


}

declare module 'dojox/app/controllers/Transition' {
					declare module.exports: Transition


}

declare module 'dojox/app/module/env' {
					declare module.exports: env


}

declare module 'dojox/app/module/lifecycle' {
					declare module.exports: lifecycle


}

declare module 'dojox/app/utils/mvcModel' {
					declare module.exports: mvcModel


}

declare module 'dojox/app/utils/nls' {
					declare module.exports: nls


}

declare module 'dojox/app/utils/model' {
					declare module.exports: model


}

declare module 'dojox/app/utils/simpleModel' {
					declare module.exports: simpleModel


}

declare module 'dojox/app/utils/config' {
					declare module.exports: config


}

declare module 'dojox/app/utils/constraints' {
					declare module.exports: constraints


}

declare module 'dojox/app/utils/layout' {
					declare module.exports: layout


}

declare module 'dojox/app/utils/hash' {
					declare module.exports: hash


}

declare module 'dojox/app/widgets/_ScrollableMixin' {
					declare module.exports: _ScrollableMixin


}

declare module 'dojox/app/widgets/Container' {
					declare module.exports: Container


}