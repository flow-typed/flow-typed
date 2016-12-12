import type { fx } from 'npm$namespace$dojox'

declare module 'dojox.fx' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface fx {
		
	}

			
}

declare module 'fx' {
		declare interface _base {
		addClass(node: String, cssClass: String, args: Object): any,
		addClass(node: HTMLElement, cssClass: String, args: Object): any,
		animateTimeline(options: Object, node: HTMLElement): void,
		flip(args: Object): void,
		flipCube(args: Object): void,
		flipGrid(args: Object): void,
		flipPage(args: Object): void,
		removeClass(node: any, cssClass: any, args: any): any,
		smoothScroll(args: Object): void,
		toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any,
		toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any
	}

	declare interface easing {
		
	}

	declare interface _arg {
		ShadowResizeArgs: {
		(args: Object): {
		x: number,
		y: number
	}
	},
		StyleArgs: {
		(args: Object): {
		node: HTMLElement,
		cssClass: string
	}
	}
	}

	declare interface flip {
		addClass(node: String, cssClass: String, args: Object): any,
		addClass(node: HTMLElement, cssClass: String, args: Object): any,
		animateTimeline(options: Object, node: HTMLElement): void,
		flip(args: Object): void,
		flipCube(args: Object): void,
		flipGrid(args: Object): void,
		flipPage(args: Object): void,
		removeClass(node: any, cssClass: any, args: any): any,
		smoothScroll(args: Object): void,
		toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any,
		toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any
	}

	declare interface style {
		addClass(node: String, cssClass: String, args: Object): any,
		addClass(node: HTMLElement, cssClass: String, args: Object): any,
		removeClass(node: any, cssClass: any, args: any): any,
		toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any,
		toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any
	}

	declare interface split {
		addClass(node: String, cssClass: String, args: Object): any,
		addClass(node: HTMLElement, cssClass: String, args: Object): any,
		animateTimeline(options: Object, node: HTMLElement): void,
		flip(args: Object): void,
		flipCube(args: Object): void,
		flipGrid(args: Object): void,
		flipPage(args: Object): void,
		removeClass(node: any, cssClass: any, args: any): any,
		smoothScroll(args: Object): void,
		toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any,
		toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any
	}

	declare interface text {
		backspace(args: Object): void,
		blockFadeIn(args: Object): void,
		blockFadeOut(args: Object): void,
		build(args: Object): void,
		converge(args: Object): void,
		disintegrate(args: Object): void,
		explode(args: Object): void,
		type(args: Object): void
	}

	declare interface Timeline {
		addClass(node: String, cssClass: String, args: Object): any,
		addClass(node: HTMLElement, cssClass: String, args: Object): any,
		animateTimeline(options: Object, node: HTMLElement): void,
		flip(args: Object): void,
		flipCube(args: Object): void,
		flipGrid(args: Object): void,
		flipPage(args: Object): void,
		removeClass(node: any, cssClass: any, args: any): any,
		smoothScroll(args: Object): void,
		toggleClass(node: String, cssClass: String, condition: boolean, args: Object): any,
		toggleClass(node: HTMLElement, cssClass: String, condition: boolean, args: Object): any
	}

	declare interface _core {
		(start: number, end: number): void
	}

	declare interface _core {
		(start: any[], end: number): void
	}

	declare interface _core {
		(start: number, end: any[]): void
	}

	declare interface _core {
		(start: any[], end: any[]): void
	}

	declare interface scroll {
		(args: Object): void
	}

		declare class Shadow extends dijit$_Widget {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		animate: boolean;
		set(property: "animate", value: boolean): void;
		get(property: "animate"): boolean;
		watch(
		property: "animate", callback: {
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
		node: HTMLElement;
		set(property: "node", value: HTMLElement): void;
		get(property: "node"): HTMLElement;
		watch(
		property: "node", callback: {
		(property?: string, oldValue?: HTMLElement, newValue?: HTMLElement): void
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
		opacity: number;
		set(property: "opacity", value: number): void;
		get(property: "opacity"): number;
		watch(
		property: "opacity", callback: {
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
		shadowOffset: number;
		set(property: "shadowOffset", value: number): void;
		get(property: "shadowOffset"): number;
		watch(
		property: "shadowOffset", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		shadowPng: string;
		set(property: "shadowPng", value: string): void;
		get(property: "shadowPng"): string;
		watch(
		property: "shadowPng", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		shadowThickness: number;
		set(property: "shadowThickness", value: number): void;
		get(property: "shadowThickness"): number;
		watch(
		property: "shadowThickness", callback: {
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
		resize(args: Object): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setOpacity(n: number, animArgs: Object): void;
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

declare module '_core' {
		declare interface getValue {
		(n: number): any
	}

			
}

declare module 'ext_dojo' {
		declare interface reverse {
		(): void
	}

	declare interface complex {
		
	}

	declare interface NodeList {
		
	}

	declare interface NodeList_style {
		
	}

			
}

declare module 'reverse' {
		declare interface gotoPercent {
		(percent: number, andPlay: boolean): Function
	}

	declare interface pause {
		(): Function
	}

	declare interface play {
		(delay: number, gotoStart: boolean): any
	}

	declare interface reverse {
		(keepPaused: boolean, reverseEase: Function): Function
	}

	declare interface status {
		(): String
	}

	declare interface stop {
		(gotoEnd: boolean): Function
	}

			
}

declare module 'dojox/fx' {
					declare module.exports: fx


}

declare module 'dojox/fx/Shadow' {
					declare module.exports: Shadow


}

declare module 'dojox/fx/_core' {
					declare module.exports: _core


}

declare module 'dojox/fx/scroll' {
					declare module.exports: scroll


}

declare module 'dojox/fx/_arg' {
					declare module.exports: _arg


}

declare module 'dojox/fx/easing' {
					declare module.exports: easing


}

declare module 'dojox/fx/_base' {
					declare module.exports: _base


}

declare module 'dojox/fx/flip' {
					declare module.exports: flip


}

declare module 'dojox/fx/style' {
					declare module.exports: style


}

declare module 'dojox/fx/text' {
					declare module.exports: text


}

declare module 'dojox/fx/split' {
					declare module.exports: split


}

declare module 'dojox/fx/Timeline' {
					declare module.exports: Timeline


}

declare module 'dojox/fx/ext-dojo/reverse' {
					declare module.exports: reverse


}

declare module 'dojox/fx/ext-dojo/complex' {
					declare module.exports: complex


}

declare module 'dojox/fx/ext-dojo/NodeList' {
					declare module.exports: NodeList


}

declare module 'dojox/fx/ext-dojo/NodeList-style' {
					declare module.exports: NodeList_style


}