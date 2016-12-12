

declare module 'dojox.form' {
					
}

declare module 'form' {
		declare interface _HasDropDown {
		clone(src: any): any,
		delegate(obj: Object, props: Object[]): any,
		exists(name: String, obj: Object): boolean,
		extend(ctor: Object, props: Object): Object,
		getObject(name: String, create: boolean, context: Object): any,
		hitch(scope: Object, method: Function): any,
		hitch(scope: Object, method: String[]): any,
		isAlien(it: any): any,
		isArray(it: any): any,
		isArrayLike(it: any): any,
		isFunction(it: any): boolean,
		isObject(it: any): boolean,
		isString(it: any): boolean,
		mixin(dest: Object, sources: Object[]): Object,
		partial(method: Function): any,
		partial(method: String): any,
		replace(tmpl: String, map: Object, pattern: RegExp): String,
		replace(tmpl: String, map: Function, pattern: RegExp): String,
		setObject(name: String, value: any, context: Object): any,
		trim(str: String): String
	}

	declare interface DropDownStack {
		
	}

	declare interface RadioStack {
		
	}

		declare class _FormSelectWidget extends undefined$_FormValueWidget {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		labelAttr: Object;
		set(property: "labelAttr", value: Object): void;
		get(property: "labelAttr"): Object;
		watch(
		property: "labelAttr", callback: {
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
		loadChildrenOnOpen: boolean;
		set(property: "loadChildrenOnOpen", value: boolean): void;
		get(property: "loadChildrenOnOpen"): boolean;
		watch(
		property: "loadChildrenOnOpen", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		multiple: boolean;
		set(property: "multiple", value: boolean): void;
		get(property: "multiple"): boolean;
		watch(
		property: "multiple", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		onFetch: Function;
		set(property: "onFetch", value: Function): void;
		get(property: "onFetch"): Function;
		watch(
		property: "onFetch", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		onLoadDeferred: Object;
		set(property: "onLoadDeferred", value: Object): void;
		get(property: "onLoadDeferred"): Object;
		watch(
		property: "onLoadDeferred", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		options: Object;
		set(property: "options", value: Object): void;
		get(property: "options"): Object;
		watch(
		property: "options", callback: {
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
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		sortByLabel: boolean;
		set(property: "sortByLabel", value: boolean): void;
		get(property: "sortByLabel"): boolean;
		watch(
		property: "sortByLabel", callback: {
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
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
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
		addOption(option: dijit.form._FormSelectWidget.___SelectOption): void;
		addOption(option: dijit.form._FormSelectWidget.___SelectOption[]): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		compare(val1: any, val2: any): number;
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
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getOptions(valueOrIdx: any): any;
		getParent(): any;
		getValue(): any;
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
		removeOption(valueOrIdx: String): void;
		removeOption(valueOrIdx: dijit.form._FormSelectWidget.___SelectOption): void;
		removeOption(valueOrIdx: number): void;
		removeOption(valueOrIdx: any[]): void;
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setStore(store: dojo.store.api.Store, selectedValue: any, fetchArgs: Object): any;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateOption(newOption: dijit.form._FormSelectWidget.___SelectOption): void;
		updateOption(newOption: dijit.form._FormSelectWidget.___SelectOption[]): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
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
		onSetStore(): void;
		onShow(): void
	}

	declare class _SelectStackMixin  {
		constructor(): this;
		stackId: string;
		stackPrefix: string;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		destroy(): void;
		postCreate(): void;
		postMixInProperties(): void;
		onAddChild(pane: dijit._Widget, insertIndex: number): void;
		onRemoveChild(pane: dijit._Widget): void;
		onSelectChild(pane: dijit._Widget): void;
		onStartup(info: Object): void
	}

	declare class BusyButton extends undefined$Button {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		busyLabel: string;
		set(property: "busyLabel", value: string): void;
		get(property: "busyLabel"): string;
		watch(
		property: "busyLabel", callback: {
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		iconClass: string;
		set(property: "iconClass", value: string): void;
		get(property: "iconClass"): string;
		watch(
		property: "iconClass", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		isBusy: boolean;
		set(property: "isBusy", value: boolean): void;
		get(property: "isBusy"): boolean;
		watch(
		property: "isBusy", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		label: string;
		set(property: "label", value: string): void;
		get(property: "label"): string;
		watch(
		property: "label", callback: {
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
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		showLabel: boolean;
		set(property: "showLabel", value: boolean): void;
		get(property: "showLabel"): boolean;
		watch(
		property: "showLabel", callback: {
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
		timeout: Object;
		set(property: "timeout", value: Object): void;
		get(property: "timeout"): Object;
		watch(
		property: "timeout", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		useIcon: boolean;
		set(property: "useIcon", value: boolean): void;
		get(property: "useIcon"): boolean;
		watch(
		property: "useIcon", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		cancel(): void;
		compare(val1: any, val2: any): number;
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
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		getValue(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		makeBusy(): void;
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
		resetTimeout(timeout: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setLabel(content: String): void;
		setValue(value: String): void;
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
		onChange(newValue: any): void;
		onClick(event: Event): boolean;
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

	declare class CheckedMultiSelect extends undefined$_FormSelectWidget {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		dropDown: boolean;
		set(property: "dropDown", value: boolean): void;
		get(property: "dropDown"): boolean;
		watch(
		property: "dropDown", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		invalidMessage: string;
		set(property: "invalidMessage", value: string): void;
		get(property: "invalidMessage"): string;
		watch(
		property: "invalidMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		labelAttr: Object;
		set(property: "labelAttr", value: Object): void;
		get(property: "labelAttr"): Object;
		watch(
		property: "labelAttr", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		labelText: string;
		set(property: "labelText", value: string): void;
		get(property: "labelText"): string;
		watch(
		property: "labelText", callback: {
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
		loadChildrenOnOpen: boolean;
		set(property: "loadChildrenOnOpen", value: boolean): void;
		get(property: "loadChildrenOnOpen"): boolean;
		watch(
		property: "loadChildrenOnOpen", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		multiple: boolean;
		set(property: "multiple", value: boolean): void;
		get(property: "multiple"): boolean;
		watch(
		property: "multiple", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		onFetch: Function;
		set(property: "onFetch", value: Function): void;
		get(property: "onFetch"): Function;
		watch(
		property: "onFetch", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		onLoadDeferred: Object;
		set(property: "onLoadDeferred", value: Object): void;
		get(property: "onLoadDeferred"): Object;
		watch(
		property: "onLoadDeferred", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		options: Object;
		set(property: "options", value: Object): void;
		get(property: "options"): Object;
		watch(
		property: "options", callback: {
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
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		sortByLabel: boolean;
		set(property: "sortByLabel", value: boolean): void;
		get(property: "sortByLabel"): boolean;
		watch(
		property: "sortByLabel", callback: {
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
		tooltipPosition: Object;
		set(property: "tooltipPosition", value: Object): void;
		get(property: "tooltipPosition"): Object;
		watch(
		property: "tooltipPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
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
		addOption(option: dijit.form._FormSelectWidget.___SelectOption): void;
		addOption(option: dijit.form._FormSelectWidget.___SelectOption[]): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		compare(val1: any, val2: any): number;
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
		displayMessage(message: String): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getErrorMessage(isFocused: boolean): any;
		getOptions(valueOrIdx: any): any;
		getParent(): any;
		getValue(): any;
		invertSelection(onChange: boolean): void;
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
		removeOption(valueOrIdx: String): void;
		removeOption(valueOrIdx: dijit.form._FormSelectWidget.___SelectOption): void;
		removeOption(valueOrIdx: number): void;
		removeOption(valueOrIdx: any[]): void;
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setStore(store: dojo.store.api.Store, selectedValue: any, fetchArgs: Object): any;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateOption(newOption: dijit.form._FormSelectWidget.___SelectOption): void;
		updateOption(newOption: dijit.form._FormSelectWidget.___SelectOption[]): void;
		validate(isFocused: any): any;
		validator(): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onAfterAddOptionItem(item: any, option: any): void;
		onBlur(): void;
		onChange(newValue: any): void;
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
		onSetStore(): void;
		onShow(): void
	}

	declare class DateTextBox extends undefined$_DateTimeTextBox {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
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
		constraints: Object;
		set(property: "constraints", value: Object): void;
		get(property: "constraints"): Object;
		watch(
		property: "constraints", callback: {
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
		datePackage: string;
		set(property: "datePackage", value: string): void;
		get(property: "datePackage"): string;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		displayedValue: string;
		set(property: "displayedValue", value: string): void;
		get(property: "displayedValue"): string;
		watch(
		property: "displayedValue", callback: {
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
		dropDown: Object;
		set(property: "dropDown", value: Object): void;
		get(property: "dropDown"): Object;
		watch(
		property: "dropDown", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		dropDownDefaultValue: Date;
		set(property: "dropDownDefaultValue", value: Date): void;
		get(property: "dropDownDefaultValue"): Date;
		watch(
		property: "dropDownDefaultValue", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		dropDownPosition: Object;
		set(property: "dropDownPosition", value: Object): void;
		get(property: "dropDownPosition"): Object;
		watch(
		property: "dropDownPosition", callback: {
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
		forceWidth: boolean;
		set(property: "forceWidth", value: boolean): void;
		get(property: "forceWidth"): boolean;
		watch(
		property: "forceWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		hasDownArrow: boolean;
		set(property: "hasDownArrow", value: boolean): void;
		get(property: "hasDownArrow"): boolean;
		watch(
		property: "hasDownArrow", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		invalidMessage: string;
		set(property: "invalidMessage", value: string): void;
		get(property: "invalidMessage"): string;
		watch(
		property: "invalidMessage", callback: {
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
		lowercase: boolean;
		set(property: "lowercase", value: boolean): void;
		get(property: "lowercase"): boolean;
		watch(
		property: "lowercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxHeight: number;
		set(property: "maxHeight", value: number): void;
		get(property: "maxHeight"): number;
		watch(
		property: "maxHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		maxLength: string;
		set(property: "maxLength", value: string): void;
		get(property: "maxLength"): string;
		watch(
		property: "maxLength", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		message: string;
		set(property: "message", value: string): void;
		get(property: "message"): string;
		watch(
		property: "message", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		missingMessage: string;
		set(property: "missingMessage", value: string): void;
		get(property: "missingMessage"): string;
		watch(
		property: "missingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		placeHolder: string;
		set(property: "placeHolder", value: string): void;
		get(property: "placeHolder"): string;
		watch(
		property: "placeHolder", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		promptMessage: string;
		set(property: "promptMessage", value: string): void;
		get(property: "promptMessage"): string;
		watch(
		property: "promptMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		propercase: boolean;
		set(property: "propercase", value: boolean): void;
		get(property: "propercase"): boolean;
		watch(
		property: "propercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rangeMessage: string;
		set(property: "rangeMessage", value: string): void;
		get(property: "rangeMessage"): string;
		watch(
		property: "rangeMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		regExp: string;
		set(property: "regExp", value: string): void;
		get(property: "regExp"): string;
		watch(
		property: "regExp", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		selectOnClick: boolean;
		set(property: "selectOnClick", value: boolean): void;
		get(property: "selectOnClick"): boolean;
		watch(
		property: "selectOnClick", callback: {
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
		state: string;
		set(property: "state", value: string): void;
		get(property: "state"): string;
		watch(
		property: "state", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		tooltipPosition: Object;
		set(property: "tooltipPosition", value: Object): void;
		get(property: "tooltipPosition"): Object;
		watch(
		property: "tooltipPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		trim: boolean;
		set(property: "trim", value: boolean): void;
		get(property: "trim"): boolean;
		watch(
		property: "trim", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uppercase: boolean;
		set(property: "uppercase", value: boolean): void;
		get(property: "uppercase"): boolean;
		watch(
		property: "uppercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		value: Date;
		set(property: "value", value: Date): void;
		get(property: "value"): Date;
		watch(
		property: "value", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		closeDropDown(focus: boolean): void;
		compare(val1: Date, val2: Date): any;
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
		displayMessage(message: String): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		filter(val: any): any;
		focus(): void;
		format(value: Date, constraints: Object): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getDisplayedValue(): any;
		getErrorMessage(isFocused: boolean): any;
		getParent(): any;
		getPromptMessage(isFocused: boolean): any;
		getValue(): any;
		isFocusable(): any;
		isInRange(isFocused: boolean): any;
		isLeftToRight(): any;
		isLoaded(): boolean;
		isValid: {
		(isFocused: boolean): any
	};
		loadAndOpenDropDown(): any;
		loadDropDown(loadCallback: Function): void;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		openDropDown(): void;
		own(): any;
		parse(value: String, constraints: Object): any;
		pattern: {
		(options: Object): any
	};
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		popupClass: {
		(): void
	};
		postCreate(): void;
		postMixInProperties(): void;
		rangeCheck(
		primitive: number, constraints: dijit.form.RangeBoundTextBox.___Constraints
	): boolean;
		regExpGen(constraints: Object): void;
		reset(): void;
		serialize(val: any, options: Object): any;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setDisplayedValue(value: String): void;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toggleDropDown(): void;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validate(): any;
		validator(value: any, constraints: Object): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onInput(event: any): void;
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

	declare class DayTextBox extends undefined$DateTextBox {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
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
		constraints: Object;
		set(property: "constraints", value: Object): void;
		get(property: "constraints"): Object;
		watch(
		property: "constraints", callback: {
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
		datePackage: string;
		set(property: "datePackage", value: string): void;
		get(property: "datePackage"): string;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		displayedValue: string;
		set(property: "displayedValue", value: string): void;
		get(property: "displayedValue"): string;
		watch(
		property: "displayedValue", callback: {
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
		dropDown: Object;
		set(property: "dropDown", value: Object): void;
		get(property: "dropDown"): Object;
		watch(
		property: "dropDown", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		dropDownDefaultValue: Date;
		set(property: "dropDownDefaultValue", value: Date): void;
		get(property: "dropDownDefaultValue"): Date;
		watch(
		property: "dropDownDefaultValue", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		dropDownPosition: Object;
		set(property: "dropDownPosition", value: Object): void;
		get(property: "dropDownPosition"): Object;
		watch(
		property: "dropDownPosition", callback: {
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
		forceWidth: boolean;
		set(property: "forceWidth", value: boolean): void;
		get(property: "forceWidth"): boolean;
		watch(
		property: "forceWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		hasDownArrow: boolean;
		set(property: "hasDownArrow", value: boolean): void;
		get(property: "hasDownArrow"): boolean;
		watch(
		property: "hasDownArrow", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		invalidMessage: string;
		set(property: "invalidMessage", value: string): void;
		get(property: "invalidMessage"): string;
		watch(
		property: "invalidMessage", callback: {
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
		lowercase: boolean;
		set(property: "lowercase", value: boolean): void;
		get(property: "lowercase"): boolean;
		watch(
		property: "lowercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxHeight: number;
		set(property: "maxHeight", value: number): void;
		get(property: "maxHeight"): number;
		watch(
		property: "maxHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		maxLength: string;
		set(property: "maxLength", value: string): void;
		get(property: "maxLength"): string;
		watch(
		property: "maxLength", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		message: string;
		set(property: "message", value: string): void;
		get(property: "message"): string;
		watch(
		property: "message", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		missingMessage: string;
		set(property: "missingMessage", value: string): void;
		get(property: "missingMessage"): string;
		watch(
		property: "missingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		placeHolder: string;
		set(property: "placeHolder", value: string): void;
		get(property: "placeHolder"): string;
		watch(
		property: "placeHolder", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		promptMessage: string;
		set(property: "promptMessage", value: string): void;
		get(property: "promptMessage"): string;
		watch(
		property: "promptMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		propercase: boolean;
		set(property: "propercase", value: boolean): void;
		get(property: "propercase"): boolean;
		watch(
		property: "propercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rangeMessage: string;
		set(property: "rangeMessage", value: string): void;
		get(property: "rangeMessage"): string;
		watch(
		property: "rangeMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		regExp: string;
		set(property: "regExp", value: string): void;
		get(property: "regExp"): string;
		watch(
		property: "regExp", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		selectOnClick: boolean;
		set(property: "selectOnClick", value: boolean): void;
		get(property: "selectOnClick"): boolean;
		watch(
		property: "selectOnClick", callback: {
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
		state: string;
		set(property: "state", value: string): void;
		get(property: "state"): string;
		watch(
		property: "state", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		tooltipPosition: Object;
		set(property: "tooltipPosition", value: Object): void;
		get(property: "tooltipPosition"): Object;
		watch(
		property: "tooltipPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		trim: boolean;
		set(property: "trim", value: boolean): void;
		get(property: "trim"): boolean;
		watch(
		property: "trim", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uppercase: boolean;
		set(property: "uppercase", value: boolean): void;
		get(property: "uppercase"): boolean;
		watch(
		property: "uppercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		value: Date;
		set(property: "value", value: Date): void;
		get(property: "value"): Date;
		watch(
		property: "value", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		closeDropDown(focus: boolean): void;
		compare(val1: Date, val2: Date): any;
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
		displayMessage(message: String): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		filter(val: any): any;
		focus(): void;
		format(value: any): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getDisplayedValue(): any;
		getErrorMessage(isFocused: boolean): any;
		getParent(): any;
		getPromptMessage(isFocused: boolean): any;
		getValue(): any;
		isFocusable(): any;
		isInRange(isFocused: boolean): any;
		isLeftToRight(): any;
		isLoaded(): boolean;
		isValid: {
		(isFocused: boolean): any
	};
		loadAndOpenDropDown(): any;
		loadDropDown(loadCallback: Function): void;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		openDropDown(): void;
		own(): any;
		parse(displayVal: any): any;
		pattern: {
		(options?: Object): any
	};
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		popupClass: {
		(): void
	};
		postCreate(): void;
		postMixInProperties(): void;
		rangeCheck(
		primitive: number, constraints: dijit.form.RangeBoundTextBox.___Constraints
	): boolean;
		regExpGen(constraints: Object): void;
		reset(): void;
		serialize(val: any, options: Object): any;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setDisplayedValue(value: String): void;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toggleDropDown(): void;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validate(): any;
		validator(value: any): boolean;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onInput(event: any): void;
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

	declare class DropDownSelect extends undefined$_FormSelectWidget, dijit$_HasDropDown {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		dropDown: Object;
		set(property: "dropDown", value: Object): void;
		get(property: "dropDown"): Object;
		watch(
		property: "dropDown", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		dropDownPosition: Object;
		set(property: "dropDownPosition", value: Object): void;
		get(property: "dropDownPosition"): Object;
		watch(
		property: "dropDownPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		emptyLabel: string;
		set(property: "emptyLabel", value: string): void;
		get(property: "emptyLabel"): string;
		watch(
		property: "emptyLabel", callback: {
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
		forceWidth: boolean;
		set(property: "forceWidth", value: boolean): void;
		get(property: "forceWidth"): boolean;
		watch(
		property: "forceWidth", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		labelAttr: Object;
		set(property: "labelAttr", value: Object): void;
		get(property: "labelAttr"): Object;
		watch(
		property: "labelAttr", callback: {
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
		loadChildrenOnOpen: boolean;
		set(property: "loadChildrenOnOpen", value: boolean): void;
		get(property: "loadChildrenOnOpen"): boolean;
		watch(
		property: "loadChildrenOnOpen", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxHeight: number;
		set(property: "maxHeight", value: number): void;
		get(property: "maxHeight"): number;
		watch(
		property: "maxHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		message: string;
		set(property: "message", value: string): void;
		get(property: "message"): string;
		watch(
		property: "message", callback: {
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
		multiple: boolean;
		set(property: "multiple", value: boolean): void;
		get(property: "multiple"): boolean;
		watch(
		property: "multiple", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		onFetch: Function;
		set(property: "onFetch", value: Function): void;
		get(property: "onFetch"): Function;
		watch(
		property: "onFetch", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		onLoadDeferred: Object;
		set(property: "onLoadDeferred", value: Object): void;
		get(property: "onLoadDeferred"): Object;
		watch(
		property: "onLoadDeferred", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		options: Object;
		set(property: "options", value: Object): void;
		get(property: "options"): Object;
		watch(
		property: "options", callback: {
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
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		sortByLabel: boolean;
		set(property: "sortByLabel", value: boolean): void;
		get(property: "sortByLabel"): boolean;
		watch(
		property: "sortByLabel", callback: {
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
		state: string;
		set(property: "state", value: string): void;
		get(property: "state"): string;
		watch(
		property: "state", callback: {
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
		tooltipPosition: Object;
		set(property: "tooltipPosition", value: Object): void;
		get(property: "tooltipPosition"): Object;
		watch(
		property: "tooltipPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
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
		addOption(option: dijit.form._FormSelectWidget.___SelectOption): void;
		addOption(option: dijit.form._FormSelectWidget.___SelectOption[]): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		childSelector(node: HTMLElement): any;
		closeDropDown(focus: boolean): void;
		compare(val1: any, val2: any): number;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: any): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		focus(): void;
		focusChild(widget: dijit._WidgetBase): void;
		focusFirstChild(): void;
		focusLastChild(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getOptions(valueOrIdx: any): any;
		getParent(): any;
		getValue(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		isLoaded(): any;
		isValid: {
		(isFocused: boolean): boolean
	};
		loadAndOpenDropDown(): any;
		loadDropDown(loadCallback: Function): void;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		openDropDown(): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		removeOption(valueOrIdx: String): void;
		removeOption(valueOrIdx: dijit.form._FormSelectWidget.___SelectOption): void;
		removeOption(valueOrIdx: number): void;
		removeOption(valueOrIdx: any[]): void;
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setStore(store: dojo.store.api.Store, selectedValue: any, fetchArgs: Object): any;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toggleDropDown(): void;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		updateOption(newOption: dijit.form._FormSelectWidget.___SelectOption): void;
		updateOption(newOption: dijit.form._FormSelectWidget.___SelectOption[]): void;
		validate(isFocused: boolean): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
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
		onSetStore(): void;
		onShow(): void
	}

	declare class FileInput extends undefined$_FormWidget {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		cancelText: string;
		set(property: "cancelText", value: string): void;
		get(property: "cancelText"): string;
		watch(
		property: "cancelText", callback: {
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		label: string;
		set(property: "label", value: string): void;
		get(property: "label"): string;
		watch(
		property: "label", callback: {
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
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
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
		compare(val1: any, val2: any): number;
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
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		getValue(): any;
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
		reset(e: Event): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setLabel(label: String, cssClass: String): void;
		setValue(value: String): void;
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
		onChange(newValue: any): void;
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

	declare class FileInputAuto extends undefined$FileInput {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		blurDelay: number;
		set(property: "blurDelay", value: number): void;
		get(property: "blurDelay"): number;
		watch(
		property: "blurDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		cancelText: string;
		set(property: "cancelText", value: string): void;
		get(property: "cancelText"): string;
		watch(
		property: "cancelText", callback: {
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		duration: number;
		set(property: "duration", value: number): void;
		get(property: "duration"): number;
		watch(
		property: "duration", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		label: string;
		set(property: "label", value: string): void;
		get(property: "label"): string;
		watch(
		property: "label", callback: {
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
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		triggerEvent: string;
		set(property: "triggerEvent", value: string): void;
		get(property: "triggerEvent"): string;
		watch(
		property: "triggerEvent", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uploadMessage: string;
		set(property: "uploadMessage", value: string): void;
		get(property: "uploadMessage"): string;
		watch(
		property: "uploadMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		url: string;
		set(property: "url", value: string): void;
		get(property: "url"): string;
		watch(
		property: "url", callback: {
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
		compare(val1: any, val2: any): number;
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
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		getValue(): any;
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
		reset(e: any): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setLabel(label: String, cssClass: String): void;
		setMessage(title: String): void;
		setValue(value: String): void;
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
		onBeforeSend(): Object;
		onBlur(): void;
		onChange(newValue: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onComplete(data: any, ioArgs: any, widgetRef: any): void;
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

	declare class FileInputBlind extends undefined$FileInput {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		blurDelay: number;
		set(property: "blurDelay", value: number): void;
		get(property: "blurDelay"): number;
		watch(
		property: "blurDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		cancelText: string;
		set(property: "cancelText", value: string): void;
		get(property: "cancelText"): string;
		watch(
		property: "cancelText", callback: {
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		duration: number;
		set(property: "duration", value: number): void;
		get(property: "duration"): number;
		watch(
		property: "duration", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		label: string;
		set(property: "label", value: string): void;
		get(property: "label"): string;
		watch(
		property: "label", callback: {
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
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		triggerEvent: string;
		set(property: "triggerEvent", value: string): void;
		get(property: "triggerEvent"): string;
		watch(
		property: "triggerEvent", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uploadMessage: string;
		set(property: "uploadMessage", value: string): void;
		get(property: "uploadMessage"): string;
		watch(
		property: "uploadMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		url: string;
		set(property: "url", value: string): void;
		get(property: "url"): string;
		watch(
		property: "url", callback: {
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
		compare(val1: any, val2: any): number;
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
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		getValue(): any;
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
		reset(e: any): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setLabel(label: String, cssClass: String): void;
		setMessage(title: String): void;
		setValue(value: String): void;
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
		onBeforeSend(): Object;
		onBlur(): void;
		onChange(newValue: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onComplete(data: any, ioArgs: any, widgetRef: any): void;
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

	declare class FileUploader extends dijit$_Widget, dijit$_TemplatedMixin {
		constructor(): this;
		activeClass: string;
		set(property: "activeClass", value: string): void;
		get(property: "activeClass"): string;
		watch(
		property: "activeClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		deferredUploading: number;
		set(property: "deferredUploading", value: number): void;
		get(property: "deferredUploading"): number;
		watch(
		property: "deferredUploading", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		devMode: boolean;
		set(property: "devMode", value: boolean): void;
		get(property: "devMode"): boolean;
		watch(
		property: "devMode", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		disabledClass: string;
		set(property: "disabledClass", value: string): void;
		get(property: "disabledClass"): string;
		watch(
		property: "disabledClass", callback: {
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
		fileListId: string;
		set(property: "fileListId", value: string): void;
		get(property: "fileListId"): string;
		watch(
		property: "fileListId", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		fileMask: Object;
		set(property: "fileMask", value: Object): void;
		get(property: "fileMask"): Object;
		watch(
		property: "fileMask", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		flashFieldName: string;
		set(property: "flashFieldName", value: string): void;
		get(property: "flashFieldName"): string;
		watch(
		property: "flashFieldName", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		flashMovie: Function;
		set(property: "flashMovie", value: Function): void;
		get(property: "flashMovie"): Function;
		watch(
		property: "flashMovie", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		flashObject: Object;
		set(property: "flashObject", value: Object): void;
		get(property: "flashObject"): Object;
		watch(
		property: "flashObject", callback: {
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
		force: string;
		set(property: "force", value: string): void;
		get(property: "force"): string;
		watch(
		property: "force", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		hoverClass: string;
		set(property: "hoverClass", value: string): void;
		get(property: "hoverClass"): string;
		watch(
		property: "hoverClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		htmlFieldName: string;
		set(property: "htmlFieldName", value: string): void;
		get(property: "htmlFieldName"): string;
		watch(
		property: "htmlFieldName", callback: {
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
		insideNode: Object;
		set(property: "insideNode", value: Object): void;
		get(property: "insideNode"): Object;
		watch(
		property: "insideNode", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		isDebug: boolean;
		set(property: "isDebug", value: boolean): void;
		get(property: "isDebug"): boolean;
		watch(
		property: "isDebug", callback: {
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
		minFlashVersion: number;
		set(property: "minFlashVersion", value: number): void;
		get(property: "minFlashVersion"): number;
		watch(
		property: "minFlashVersion", callback: {
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
		progressBackgroundColor: string;
		set(property: "progressBackgroundColor", value: string): void;
		get(property: "progressBackgroundColor"): string;
		watch(
		property: "progressBackgroundColor", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		progressBackgroundUrl: string;
		set(property: "progressBackgroundUrl", value: string): void;
		get(property: "progressBackgroundUrl"): string;
		watch(
		property: "progressBackgroundUrl", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		progressMessage: string;
		set(property: "progressMessage", value: string): void;
		get(property: "progressMessage"): string;
		watch(
		property: "progressMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		progressWidgetId: string;
		set(property: "progressWidgetId", value: string): void;
		get(property: "progressWidgetId"): string;
		watch(
		property: "progressWidgetId", callback: {
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
		selectMultipleFiles: boolean;
		set(property: "selectMultipleFiles", value: boolean): void;
		get(property: "selectMultipleFiles"): boolean;
		watch(
		property: "selectMultipleFiles", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		serverTimeout: number;
		set(property: "serverTimeout", value: number): void;
		get(property: "serverTimeout"): number;
		watch(
		property: "serverTimeout", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		showProgress: boolean;
		set(property: "showProgress", value: boolean): void;
		get(property: "showProgress"): boolean;
		watch(
		property: "showProgress", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		skipServerCheck: boolean;
		set(property: "skipServerCheck", value: boolean): void;
		get(property: "skipServerCheck"): boolean;
		watch(
		property: "skipServerCheck", callback: {
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
		swfPath: Object;
		set(property: "swfPath", value: Object): void;
		get(property: "swfPath"): Object;
		watch(
		property: "swfPath", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		tabIndex: number;
		set(property: "tabIndex", value: number): void;
		get(property: "tabIndex"): number;
		watch(
		property: "tabIndex", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		uploaderType: string;
		set(property: "uploaderType", value: string): void;
		get(property: "uploaderType"): string;
		watch(
		property: "uploaderType", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uploadOnChange: boolean;
		set(property: "uploadOnChange", value: boolean): void;
		get(property: "uploadOnChange"): boolean;
		watch(
		property: "uploadOnChange", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		uploadUrl: string;
		set(property: "uploadUrl", value: string): void;
		get(property: "uploadUrl"): string;
		watch(
		property: "uploadUrl", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		version: Object;
		set(property: "version", value: Object): void;
		get(property: "version"): Object;
		watch(
		property: "version", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		createFlashUploader(): void;
		createHtmlUploader(): void;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		get(name: any): any;
		getButtonStyle(): void;
		getChildren(): any[];
		getDescendants(): any[];
		getHiddenNode(node: HTMLElement): any;
		getIndexInParent(): any;
		getNextSibling(): any;
		getParent(): any;
		getPreviousSibling(): any;
		getStyle(node: any): Object;
		getTempNodeStyle(node: any, _class: any, isDijitButton: any): any;
		getText(node: any): any;
		getTextStyle(node: any): Object;
		isButton(node: any): boolean;
		isFocusable(): any;
		isLeftToRight(): any;
		log(): void;
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
		removeFile(name: String, noListEdit: boolean): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setButtonStyle(): void;
		startup(): void;
		submit(form: HTMLFormElement): boolean;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		upload(data: Object): boolean;
		uploadFlash(): void;
		uploadHTML(): void;
		urlencode(url: any): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onCancel(): void;
		onChange(dataArray: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onComplete(dataArray: any): void;
		onDblClick(event: any): void;
		onError(evtObject: Object): void;
		onError(evtObject: String): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onLoad(uploader: dojox.form.FileUploader): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onProgress(dataArray: any): void;
		onReady(uploader: dojox.form.FileUploader): void;
		onShow(): void
	}

	declare class ListInput extends undefined$_FormValueWidget {
		constructor(): this;
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		constraints: Object;
		set(property: "constraints", value: Object): void;
		get(property: "constraints"): Object;
		watch(
		property: "constraints", callback: {
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
		delimiter: string;
		set(property: "delimiter", value: string): void;
		get(property: "delimiter"): string;
		watch(
		property: "delimiter", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		duration: number;
		set(property: "duration", value: number): void;
		get(property: "duration"): number;
		watch(
		property: "duration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		easingIn: Function;
		set(property: "easingIn", value: Function): void;
		get(property: "easingIn"): Function;
		watch(
		property: "easingIn", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
	}
	): {
		unwatch(): void
	};
		easingOut: Function;
		set(property: "easingOut", value: Function): void;
		get(property: "easingOut"): Function;
		watch(
		property: "easingOut", callback: {
		(property?: string, oldValue?: Function, newValue?: Function): void
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
		inputClass: string;
		set(property: "inputClass", value: string): void;
		get(property: "inputClass"): string;
		watch(
		property: "inputClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		inputHandler: string;
		set(property: "inputHandler", value: string): void;
		get(property: "inputHandler"): string;
		watch(
		property: "inputHandler", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		inputProperties: string;
		set(property: "inputProperties", value: string): void;
		get(property: "inputProperties"): string;
		watch(
		property: "inputProperties", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
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
		maxItems: number;
		set(property: "maxItems", value: number): void;
		get(property: "maxItems"): number;
		watch(
		property: "maxItems", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		readOnlyInput: boolean;
		set(property: "readOnlyInput", value: boolean): void;
		get(property: "readOnlyInput"): boolean;
		watch(
		property: "readOnlyInput", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		readOnlyItem: boolean;
		set(property: "readOnlyItem", value: boolean): void;
		get(property: "readOnlyItem"): boolean;
		watch(
		property: "readOnlyItem", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		regExp: string;
		set(property: "regExp", value: string): void;
		get(property: "regExp"): string;
		watch(
		property: "regExp", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		showCloseButtonWhenInvalid: boolean;
		set(property: "showCloseButtonWhenInvalid", value: boolean): void;
		get(property: "showCloseButtonWhenInvalid"): boolean;
		watch(
		property: "showCloseButtonWhenInvalid", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		showCloseButtonWhenValid: boolean;
		set(property: "showCloseButtonWhenValid", value: boolean): void;
		get(property: "showCloseButtonWhenValid"): boolean;
		watch(
		property: "showCloseButtonWhenValid", callback: {
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
		submitOnlyValidValue: boolean;
		set(property: "submitOnlyValidValue", value: boolean): void;
		get(property: "submitOnlyValidValue"): boolean;
		watch(
		property: "submitOnlyValidValue", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		useAnim: boolean;
		set(property: "useAnim", value: boolean): void;
		get(property: "useAnim"): boolean;
		watch(
		property: "useAnim", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		useArrowForEdit: boolean;
		set(property: "useArrowForEdit", value: boolean): void;
		get(property: "useArrowForEdit"): boolean;
		watch(
		property: "useArrowForEdit", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		useOnBlur: boolean;
		set(property: "useOnBlur", value: boolean): void;
		get(property: "useOnBlur"): boolean;
		watch(
		property: "useOnBlur", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		add(values: String): void;
		add(values: any[]): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		compare(val1: any[], val2: any[]): number;
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
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		getValue(): any;
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
		regExpGen(constraints: Object): any;
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		undo(): void;
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
		onChange(newValue: any): void;
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

	declare class FilePickerTextBox extends undefined$ValidationTextBox, dijit$_HasDropDown {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
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
		constraints: Object;
		set(property: "constraints", value: Object): void;
		get(property: "constraints"): Object;
		watch(
		property: "constraints", callback: {
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		displayedValue: string;
		set(property: "displayedValue", value: string): void;
		get(property: "displayedValue"): string;
		watch(
		property: "displayedValue", callback: {
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
		dropDown: Object;
		set(property: "dropDown", value: Object): void;
		get(property: "dropDown"): Object;
		watch(
		property: "dropDown", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		dropDownPosition: Object;
		set(property: "dropDownPosition", value: Object): void;
		get(property: "dropDownPosition"): Object;
		watch(
		property: "dropDownPosition", callback: {
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
		forceWidth: boolean;
		set(property: "forceWidth", value: boolean): void;
		get(property: "forceWidth"): boolean;
		watch(
		property: "forceWidth", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		invalidMessage: string;
		set(property: "invalidMessage", value: string): void;
		get(property: "invalidMessage"): string;
		watch(
		property: "invalidMessage", callback: {
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
		lowercase: boolean;
		set(property: "lowercase", value: boolean): void;
		get(property: "lowercase"): boolean;
		watch(
		property: "lowercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxHeight: number;
		set(property: "maxHeight", value: number): void;
		get(property: "maxHeight"): number;
		watch(
		property: "maxHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		maxLength: string;
		set(property: "maxLength", value: string): void;
		get(property: "maxLength"): string;
		watch(
		property: "maxLength", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		message: string;
		set(property: "message", value: string): void;
		get(property: "message"): string;
		watch(
		property: "message", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		missingMessage: string;
		set(property: "missingMessage", value: string): void;
		get(property: "missingMessage"): string;
		watch(
		property: "missingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		numPanes: number;
		set(property: "numPanes", value: number): void;
		get(property: "numPanes"): number;
		watch(
		property: "numPanes", callback: {
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
		pattern: string;
		set(property: "pattern", value: string): void;
		get(property: "pattern"): string;
		watch(
		property: "pattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		placeHolder: string;
		set(property: "placeHolder", value: string): void;
		get(property: "placeHolder"): string;
		watch(
		property: "placeHolder", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		promptMessage: string;
		set(property: "promptMessage", value: string): void;
		get(property: "promptMessage"): string;
		watch(
		property: "promptMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		propercase: boolean;
		set(property: "propercase", value: boolean): void;
		get(property: "propercase"): boolean;
		watch(
		property: "propercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		regExp: string;
		set(property: "regExp", value: string): void;
		get(property: "regExp"): string;
		watch(
		property: "regExp", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		searchDelay: number;
		set(property: "searchDelay", value: number): void;
		get(property: "searchDelay"): number;
		watch(
		property: "searchDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		selectOnClick: boolean;
		set(property: "selectOnClick", value: boolean): void;
		get(property: "selectOnClick"): boolean;
		watch(
		property: "selectOnClick", callback: {
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
		state: string;
		set(property: "state", value: string): void;
		get(property: "state"): string;
		watch(
		property: "state", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		tooltipPosition: Object;
		set(property: "tooltipPosition", value: Object): void;
		get(property: "tooltipPosition"): Object;
		watch(
		property: "tooltipPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		trim: boolean;
		set(property: "trim", value: boolean): void;
		get(property: "trim"): boolean;
		watch(
		property: "trim", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uppercase: boolean;
		set(property: "uppercase", value: boolean): void;
		get(property: "uppercase"): boolean;
		watch(
		property: "uppercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		valueItem: Object;
		set(property: "valueItem", value: Object): void;
		get(property: "valueItem"): Object;
		watch(
		property: "valueItem", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		closeDropDown(focus: boolean): void;
		compare(val1: any, val2: any): number;
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
		displayMessage(message: String): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		filter(val: any): any;
		focus(): void;
		format(value: String, constraints: Object): String;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getDisplayedValue(): any;
		getErrorMessage(isFocused: boolean): any;
		getParent(): any;
		getPromptMessage(isFocused: boolean): any;
		getValue(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		isLoaded(): boolean;
		isValid: {
		(isFocused: boolean): any
	};
		loadAndOpenDropDown(): any;
		loadDropDown(loadCallback: Function): void;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		openDropDown(): void;
		own(): any;
		parse(value: String, constraints: Object): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		regExpGen(constraints: Object): void;
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setDisplayedValue(value: String): void;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toggleDropDown(): void;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validate(isFocused: boolean): any;
		validator(value: any, constraints: Object): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onInput(event: any): void;
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

	declare class Manager extends dijit$_Widget, dijit$_WidgetsInTemplateMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		accept: string;
		set(property: "accept", value: string): void;
		get(property: "accept"): string;
		watch(
		property: "accept", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		accept-charset: string;
		set(property: "accept-charset", value: string): void;
		get(property: "accept-charset"): string;
		watch(
		property: "accept-charset", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		action: string;
		set(property: "action", value: string): void;
		get(property: "action"): string;
		watch(
		property: "action", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		encType: string;
		set(property: "encType", value: string): void;
		get(property: "encType"): string;
		watch(
		property: "encType", callback: {
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
		method: string;
		set(property: "method", value: string): void;
		get(property: "method"): string;
		watch(
		property: "method", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		target: string;
		set(property: "target", value: string): void;
		get(property: "target"): string;
		watch(
		property: "target", callback: {
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
		watching: boolean;
		set(property: "watching", value: boolean): void;
		get(property: "watching"): boolean;
		watch(
		property: "watching", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		addClass(className: String, names: Object): Function;
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
		disable(state: Object): any;
		disconnect(handle: any): void;
		elementValue(name: String, value: Object): any;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		enable(state: Object, defaultState: boolean): Function;
		formNodeValue(elem: String, value: Object): any;
		formNodeValue(elem: HTMLElement, value: Object): any;
		formNodeValue(elem: any[], value: Object): any;
		formPointValue(elem: String, value: Object): any;
		formPointValue(elem: Object, value: Object): any;
		formPointValue(elem: any[], value: Object): any;
		formWidgetValue(elem: String, value: Object): any;
		formWidgetValue(elem: Object, value: Object): any;
		formWidgetValue(elem: any[], value: Object): any;
		gatherClassState(className: String, names: Object): any;
		gatherDisplayState(names: Object): any;
		gatherEnableState(names: Object): any;
		gatherFormValues(names: Object): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		hide(state: Object): any;
		inspect(inspector: Function, state: Object, defaultValue: Object): any;
		inspectAttachedPoints(inspector: Function, state: Object, defaultValue: Object): Object;
		inspectFormNodes(inspector: Function, state: Object, defaultValue: Object): Object;
		inspectFormWidgets(inspector: Function, state: Object, defaultValue: Object): Object;
		isFocusable(): any;
		isLeftToRight(): any;
		isValid: {
		(): boolean
	};
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
		registerNode(node: String): any;
		registerNode(node: HTMLElement): any;
		registerNodeDescendants(node: String): any;
		registerNodeDescendants(node: HTMLElement): any;
		registerWidget(widget: String): any;
		registerWidget(widget: HTMLElement): any;
		registerWidget(widget: dijit.form._FormWidget): any;
		registerWidgetDescendants(widget: String): any;
		registerWidgetDescendants(widget: HTMLElement): any;
		registerWidgetDescendants(widget: dijit._Widget): any;
		removeClass(className: String, names: Object): Function;
		reset(): Function;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setFormValues(values: Object): Function;
		show(state: Object, defaultState: boolean): Function;
		startup(): void;
		submit(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unregisterNode(name: String): any;
		unregisterNodeDescendants(node: String): any;
		unregisterNodeDescendants(node: HTMLElement): any;
		unregisterWidget(name: string): any;
		unregisterWidgetDescendants(widget: String): any;
		unregisterWidgetDescendants(widget: HTMLElement): any;
		unregisterWidgetDescendants(widget: dijit._Widget): any;
		unsubscribe(handle: Object): void;
		validate(): boolean;
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
		onReset(): boolean;
		onShow(): void;
		onSubmit(): any
	}

	declare class RangeSlider  {
		constructor(): this;
		value: any[];
		destroy(): void;
		postCreate(): void;
		postMixInProperties(): void
	}

	declare class Rating extends undefined$_FormWidget {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
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
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		numStars: number;
		set(property: "numStars", value: number): void;
		get(property: "numStars"): number;
		watch(
		property: "numStars", callback: {
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
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
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
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(params?: Object): void;
		compare(val1: any, val2: any): number;
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
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		getValue(): any;
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
		setAttribute(key: String, value: number): void;
		setDisabled(disabled: boolean): void;
		setValue(value: String): void;
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
		onChange(newValue: any): void;
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
		onMouseOver(evt: any, value?: any): void;
		onMouseUp(event: any): void;
		onShow(): void;
		onStarClick(evt: Event): void
	}

	declare class TriStateCheckBox extends undefined$Button, undefined$_ToggleButtonMixin {
		constructor(): this;
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		checked: boolean;
		set(property: "checked", value: boolean): void;
		get(property: "checked"): boolean;
		watch(
		property: "checked", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		iconClass: string;
		set(property: "iconClass", value: string): void;
		get(property: "iconClass"): string;
		watch(
		property: "iconClass", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		label: string;
		set(property: "label", value: string): void;
		get(property: "label"): string;
		watch(
		property: "label", callback: {
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
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		showLabel: boolean;
		set(property: "showLabel", value: boolean): void;
		get(property: "showLabel"): boolean;
		watch(
		property: "showLabel", callback: {
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
		states: any[];
		set(property: "states", value: any[]): void;
		get(property: "states"): any[];
		watch(
		property: "states", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
	}
	): {
		unwatch(): void
	};
		stateValue: Object;
		set(property: "stateValue", value: Object): void;
		get(property: "stateValue"): Object;
		watch(
		property: "stateValue", callback: {
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
		click(): void;
		compare(val1: any, val2: any): number;
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
		fixState(): void;
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		getValue(): any;
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
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setChecked(checked: String): void;
		setChecked(checked: boolean): void;
		setDisabled(disabled: boolean): void;
		setLabel(content: String): void;
		setValue(value: String): void;
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
		onChange(newValue: any): void;
		onClick(event: Event): boolean;
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

	declare class MonthTextBox extends undefined$DateTextBox {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
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
		constraints: Object;
		set(property: "constraints", value: Object): void;
		get(property: "constraints"): Object;
		watch(
		property: "constraints", callback: {
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
		datePackage: string;
		set(property: "datePackage", value: string): void;
		get(property: "datePackage"): string;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		displayedValue: string;
		set(property: "displayedValue", value: string): void;
		get(property: "displayedValue"): string;
		watch(
		property: "displayedValue", callback: {
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
		dropDown: Object;
		set(property: "dropDown", value: Object): void;
		get(property: "dropDown"): Object;
		watch(
		property: "dropDown", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		dropDownDefaultValue: Date;
		set(property: "dropDownDefaultValue", value: Date): void;
		get(property: "dropDownDefaultValue"): Date;
		watch(
		property: "dropDownDefaultValue", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		dropDownPosition: Object;
		set(property: "dropDownPosition", value: Object): void;
		get(property: "dropDownPosition"): Object;
		watch(
		property: "dropDownPosition", callback: {
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
		forceWidth: boolean;
		set(property: "forceWidth", value: boolean): void;
		get(property: "forceWidth"): boolean;
		watch(
		property: "forceWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		hasDownArrow: boolean;
		set(property: "hasDownArrow", value: boolean): void;
		get(property: "hasDownArrow"): boolean;
		watch(
		property: "hasDownArrow", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		invalidMessage: string;
		set(property: "invalidMessage", value: string): void;
		get(property: "invalidMessage"): string;
		watch(
		property: "invalidMessage", callback: {
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
		lowercase: boolean;
		set(property: "lowercase", value: boolean): void;
		get(property: "lowercase"): boolean;
		watch(
		property: "lowercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxHeight: number;
		set(property: "maxHeight", value: number): void;
		get(property: "maxHeight"): number;
		watch(
		property: "maxHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		maxLength: string;
		set(property: "maxLength", value: string): void;
		get(property: "maxLength"): string;
		watch(
		property: "maxLength", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		message: string;
		set(property: "message", value: string): void;
		get(property: "message"): string;
		watch(
		property: "message", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		missingMessage: string;
		set(property: "missingMessage", value: string): void;
		get(property: "missingMessage"): string;
		watch(
		property: "missingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		placeHolder: string;
		set(property: "placeHolder", value: string): void;
		get(property: "placeHolder"): string;
		watch(
		property: "placeHolder", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		promptMessage: string;
		set(property: "promptMessage", value: string): void;
		get(property: "promptMessage"): string;
		watch(
		property: "promptMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		propercase: boolean;
		set(property: "propercase", value: boolean): void;
		get(property: "propercase"): boolean;
		watch(
		property: "propercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rangeMessage: string;
		set(property: "rangeMessage", value: string): void;
		get(property: "rangeMessage"): string;
		watch(
		property: "rangeMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		regExp: string;
		set(property: "regExp", value: string): void;
		get(property: "regExp"): string;
		watch(
		property: "regExp", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		selectOnClick: boolean;
		set(property: "selectOnClick", value: boolean): void;
		get(property: "selectOnClick"): boolean;
		watch(
		property: "selectOnClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selector: string;
		set(property: "selector", value: string): void;
		get(property: "selector"): string;
		watch(
		property: "selector", callback: {
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
		state: string;
		set(property: "state", value: string): void;
		get(property: "state"): string;
		watch(
		property: "state", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		tooltipPosition: Object;
		set(property: "tooltipPosition", value: Object): void;
		get(property: "tooltipPosition"): Object;
		watch(
		property: "tooltipPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		trim: boolean;
		set(property: "trim", value: boolean): void;
		get(property: "trim"): boolean;
		watch(
		property: "trim", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uppercase: boolean;
		set(property: "uppercase", value: boolean): void;
		get(property: "uppercase"): boolean;
		watch(
		property: "uppercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		value: Date;
		set(property: "value", value: Date): void;
		get(property: "value"): Date;
		watch(
		property: "value", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		closeDropDown(focus: boolean): void;
		compare(val1: Date, val2: Date): any;
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
		displayMessage(message: String): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		filter(val: any): any;
		focus(): void;
		format(value: any): number;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getDisplayedValue(): any;
		getErrorMessage(isFocused: boolean): any;
		getParent(): any;
		getPromptMessage(isFocused: boolean): any;
		getValue(): any;
		isFocusable(): any;
		isInRange(isFocused: boolean): any;
		isLeftToRight(): any;
		isLoaded(): boolean;
		isValid: {
		(isFocused: boolean): any
	};
		loadAndOpenDropDown(): any;
		loadDropDown(loadCallback: Function): void;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		openDropDown(): void;
		own(): any;
		parse(value: any, constraints: any): number;
		pattern: {
		(options: Object): any
	};
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		popupClass: {
		(): void
	};
		postCreate(): void;
		postMixInProperties(): void;
		rangeCheck(
		primitive: number, constraints: dijit.form.RangeBoundTextBox.___Constraints
	): boolean;
		regExpGen(constraints: Object): void;
		reset(): void;
		serialize(value: any, constraints: any): any;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setDisplayedValue(value: String): void;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toggleDropDown(): void;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validate(): any;
		validator(value: any): boolean;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onInput(event: any): void;
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

	declare class PasswordValidator extends undefined$_FormValueWidget {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
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
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		oldName: Object;
		set(property: "oldName", value: Object): void;
		get(property: "oldName"): Object;
		watch(
		property: "oldName", callback: {
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
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
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
		compare(val1: any, val2: any): number;
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
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getParent(): any;
		getValue(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		isValid: {
		(isFocused: boolean): any
	};
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
		pwCheck(password: String): boolean;
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validate(isFocused: boolean): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
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

	declare class TimeSpinner extends undefined$_Spinner {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		constraints: Object;
		set(property: "constraints", value: Object): void;
		get(property: "constraints"): Object;
		watch(
		property: "constraints", callback: {
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		displayedValue: string;
		set(property: "displayedValue", value: string): void;
		get(property: "displayedValue"): string;
		watch(
		property: "displayedValue", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		invalidMessage: string;
		set(property: "invalidMessage", value: string): void;
		get(property: "invalidMessage"): string;
		watch(
		property: "invalidMessage", callback: {
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
		largeDelta: number;
		set(property: "largeDelta", value: number): void;
		get(property: "largeDelta"): number;
		watch(
		property: "largeDelta", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		lowercase: boolean;
		set(property: "lowercase", value: boolean): void;
		get(property: "lowercase"): boolean;
		watch(
		property: "lowercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxLength: string;
		set(property: "maxLength", value: string): void;
		get(property: "maxLength"): string;
		watch(
		property: "maxLength", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		message: string;
		set(property: "message", value: string): void;
		get(property: "message"): string;
		watch(
		property: "message", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		minimumTimeout: number;
		set(property: "minimumTimeout", value: number): void;
		get(property: "minimumTimeout"): number;
		watch(
		property: "minimumTimeout", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		missingMessage: string;
		set(property: "missingMessage", value: string): void;
		get(property: "missingMessage"): string;
		watch(
		property: "missingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		pattern: string;
		set(property: "pattern", value: string): void;
		get(property: "pattern"): string;
		watch(
		property: "pattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		placeHolder: string;
		set(property: "placeHolder", value: string): void;
		get(property: "placeHolder"): string;
		watch(
		property: "placeHolder", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		promptMessage: string;
		set(property: "promptMessage", value: string): void;
		get(property: "promptMessage"): string;
		watch(
		property: "promptMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		propercase: boolean;
		set(property: "propercase", value: boolean): void;
		get(property: "propercase"): boolean;
		watch(
		property: "propercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rangeMessage: string;
		set(property: "rangeMessage", value: string): void;
		get(property: "rangeMessage"): string;
		watch(
		property: "rangeMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		regExp: string;
		set(property: "regExp", value: string): void;
		get(property: "regExp"): string;
		watch(
		property: "regExp", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		selectOnClick: boolean;
		set(property: "selectOnClick", value: boolean): void;
		get(property: "selectOnClick"): boolean;
		watch(
		property: "selectOnClick", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		smallDelta: number;
		set(property: "smallDelta", value: number): void;
		get(property: "smallDelta"): number;
		watch(
		property: "smallDelta", callback: {
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
		state: string;
		set(property: "state", value: string): void;
		get(property: "state"): string;
		watch(
		property: "state", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		tooltipPosition: Object;
		set(property: "tooltipPosition", value: Object): void;
		get(property: "tooltipPosition"): Object;
		watch(
		property: "tooltipPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		trim: boolean;
		set(property: "trim", value: boolean): void;
		get(property: "trim"): boolean;
		watch(
		property: "trim", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uppercase: boolean;
		set(property: "uppercase", value: boolean): void;
		get(property: "uppercase"): boolean;
		watch(
		property: "uppercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		adjust(val: Object, delta: number): any;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		compare(val1: any, val2: any): number;
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
		displayMessage(message: String): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		filter(val: any): any;
		focus(): void;
		format(time: any, locale: any): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getDisplayedValue(): any;
		getErrorMessage(isFocused: boolean): any;
		getParent(): any;
		getPromptMessage(isFocused: boolean): any;
		getValue(): any;
		isFocusable(): any;
		isInRange(isFocused: boolean): any;
		isLeftToRight(): any;
		isValid: {
		(): boolean
	};
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		parse(time: any, locale: any): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		rangeCheck(
		primitive: number, constraints: dijit.form.RangeBoundTextBox.___Constraints
	): boolean;
		regExpGen(constraints: Object): void;
		reset(): void;
		serialize(dateObject: Date, options: Object): any;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setDisplayedValue(value: String): void;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validate(): any;
		validator(value: any, constraints: Object): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onInput(event: any): void;
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

	declare class MultiComboBox extends undefined$ValidationTextBox, undefined$ComboBoxMixin {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		autoComplete: boolean;
		set(property: "autoComplete", value: boolean): void;
		get(property: "autoComplete"): boolean;
		watch(
		property: "autoComplete", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
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
		constraints: Object;
		set(property: "constraints", value: Object): void;
		get(property: "constraints"): Object;
		watch(
		property: "constraints", callback: {
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
		delimiter: string;
		set(property: "delimiter", value: string): void;
		get(property: "delimiter"): string;
		watch(
		property: "delimiter", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		displayedValue: string;
		set(property: "displayedValue", value: string): void;
		get(property: "displayedValue"): string;
		watch(
		property: "displayedValue", callback: {
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
		dropDown: Object;
		set(property: "dropDown", value: Object): void;
		get(property: "dropDown"): Object;
		watch(
		property: "dropDown", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		dropDownPosition: Object;
		set(property: "dropDownPosition", value: Object): void;
		get(property: "dropDownPosition"): Object;
		watch(
		property: "dropDownPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		fetchProperties: Object;
		set(property: "fetchProperties", value: Object): void;
		get(property: "fetchProperties"): Object;
		watch(
		property: "fetchProperties", callback: {
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
		forceWidth: boolean;
		set(property: "forceWidth", value: boolean): void;
		get(property: "forceWidth"): boolean;
		watch(
		property: "forceWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		hasDownArrow: boolean;
		set(property: "hasDownArrow", value: boolean): void;
		get(property: "hasDownArrow"): boolean;
		watch(
		property: "hasDownArrow", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		highlightMatch: string;
		set(property: "highlightMatch", value: string): void;
		get(property: "highlightMatch"): string;
		watch(
		property: "highlightMatch", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		ignoreCase: boolean;
		set(property: "ignoreCase", value: boolean): void;
		get(property: "ignoreCase"): boolean;
		watch(
		property: "ignoreCase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		invalidMessage: string;
		set(property: "invalidMessage", value: string): void;
		get(property: "invalidMessage"): string;
		watch(
		property: "invalidMessage", callback: {
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
		labelAttr: Object;
		set(property: "labelAttr", value: Object): void;
		get(property: "labelAttr"): Object;
		watch(
		property: "labelAttr", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		labelType: string;
		set(property: "labelType", value: string): void;
		get(property: "labelType"): string;
		watch(
		property: "labelType", callback: {
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
		lowercase: boolean;
		set(property: "lowercase", value: boolean): void;
		get(property: "lowercase"): boolean;
		watch(
		property: "lowercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxHeight: number;
		set(property: "maxHeight", value: number): void;
		get(property: "maxHeight"): number;
		watch(
		property: "maxHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		maxLength: string;
		set(property: "maxLength", value: string): void;
		get(property: "maxLength"): string;
		watch(
		property: "maxLength", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		message: string;
		set(property: "message", value: string): void;
		get(property: "message"): string;
		watch(
		property: "message", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		missingMessage: string;
		set(property: "missingMessage", value: string): void;
		get(property: "missingMessage"): string;
		watch(
		property: "missingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		pageSize: number;
		set(property: "pageSize", value: number): void;
		get(property: "pageSize"): number;
		watch(
		property: "pageSize", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		pattern: string;
		set(property: "pattern", value: string): void;
		get(property: "pattern"): string;
		watch(
		property: "pattern", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		placeHolder: string;
		set(property: "placeHolder", value: string): void;
		get(property: "placeHolder"): string;
		watch(
		property: "placeHolder", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		promptMessage: string;
		set(property: "promptMessage", value: string): void;
		get(property: "promptMessage"): string;
		watch(
		property: "promptMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		propercase: boolean;
		set(property: "propercase", value: boolean): void;
		get(property: "propercase"): boolean;
		watch(
		property: "propercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		queryExpr: string;
		set(property: "queryExpr", value: string): void;
		get(property: "queryExpr"): string;
		watch(
		property: "queryExpr", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		regExp: string;
		set(property: "regExp", value: string): void;
		get(property: "regExp"): string;
		watch(
		property: "regExp", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		searchAttr: string;
		set(property: "searchAttr", value: string): void;
		get(property: "searchAttr"): string;
		watch(
		property: "searchAttr", callback: {
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
		searchDelay: number;
		set(property: "searchDelay", value: number): void;
		get(property: "searchDelay"): number;
		watch(
		property: "searchDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		selectOnClick: boolean;
		set(property: "selectOnClick", value: boolean): void;
		get(property: "selectOnClick"): boolean;
		watch(
		property: "selectOnClick", callback: {
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
		state: string;
		set(property: "state", value: string): void;
		get(property: "state"): string;
		watch(
		property: "state", callback: {
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
		tooltipPosition: Object;
		set(property: "tooltipPosition", value: Object): void;
		get(property: "tooltipPosition"): Object;
		watch(
		property: "tooltipPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		trim: boolean;
		set(property: "trim", value: boolean): void;
		get(property: "trim"): boolean;
		watch(
		property: "trim", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uppercase: boolean;
		set(property: "uppercase", value: boolean): void;
		get(property: "uppercase"): boolean;
		watch(
		property: "uppercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		closeDropDown(focus: boolean): void;
		compare(val1: any, val2: any): number;
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
		displayMessage(message: String): void;
		doHighlight(label: String, find: String): any;
		dropDownClass(): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		filter(val: any): any;
		focus(): void;
		format(value: String, constraints: Object): String;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getDisplayedValue(): any;
		getErrorMessage(isFocused: boolean): any;
		getParent(): any;
		getPromptMessage(isFocused: boolean): any;
		getValue(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		isLoaded(): boolean;
		isValid: {
		(isFocused: boolean): any
	};
		loadAndOpenDropDown(): any;
		loadDropDown(loadCallback: Function): void;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		openDropDown(): any;
		own(): any;
		parse(value: String, constraints: Object): String;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		postCreate(): void;
		postMixInProperties(): void;
		regExpGen(constraints: Object): void;
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setDisplayedValue(value: String): void;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toggleDropDown(): void;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validate(isFocused: boolean): any;
		validator(value: any, constraints: Object): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onInput(event: any): void;
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
		onSearch(results: Object, query: Object, options: Object): void;
		onShow(): void
	}

	declare class Uploader extends undefined$_Base, undefined$Button {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		deferredUploading: number;
		set(property: "deferredUploading", value: number): void;
		get(property: "deferredUploading"): number;
		watch(
		property: "deferredUploading", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		devMode: Object;
		set(property: "devMode", value: Object): void;
		get(property: "devMode"): Object;
		watch(
		property: "devMode", callback: {
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
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
		errMsg: string;
		set(property: "errMsg", value: string): void;
		get(property: "errMsg"): string;
		watch(
		property: "errMsg", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		flashFieldName: string;
		set(property: "flashFieldName", value: string): void;
		get(property: "flashFieldName"): string;
		watch(
		property: "flashFieldName", callback: {
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
		focusedClass: string;
		set(property: "focusedClass", value: string): void;
		get(property: "focusedClass"): string;
		watch(
		property: "focusedClass", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		force: string;
		set(property: "force", value: string): void;
		get(property: "force"): string;
		watch(
		property: "force", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		iconClass: string;
		set(property: "iconClass", value: string): void;
		get(property: "iconClass"): string;
		watch(
		property: "iconClass", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		isDebug: boolean;
		set(property: "isDebug", value: boolean): void;
		get(property: "isDebug"): boolean;
		watch(
		property: "isDebug", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		label: string;
		set(property: "label", value: string): void;
		get(property: "label"): string;
		watch(
		property: "label", callback: {
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
		multiple: boolean;
		set(property: "multiple", value: boolean): void;
		get(property: "multiple"): boolean;
		watch(
		property: "multiple", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		preventCache: boolean;
		set(property: "preventCache", value: boolean): void;
		get(property: "preventCache"): boolean;
		watch(
		property: "preventCache", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		serverTimeout: number;
		set(property: "serverTimeout", value: number): void;
		get(property: "serverTimeout"): number;
		watch(
		property: "serverTimeout", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		showInput: string;
		set(property: "showInput", value: string): void;
		get(property: "showInput"): string;
		watch(
		property: "showInput", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		showLabel: boolean;
		set(property: "showLabel", value: boolean): void;
		get(property: "showLabel"): boolean;
		watch(
		property: "showLabel", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		skipServerCheck: boolean;
		set(property: "skipServerCheck", value: boolean): void;
		get(property: "skipServerCheck"): boolean;
		watch(
		property: "skipServerCheck", callback: {
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
		swfPath: string;
		set(property: "swfPath", value: string): void;
		get(property: "swfPath"): string;
		watch(
		property: "swfPath", callback: {
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
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uploadOnSelect: boolean;
		set(property: "uploadOnSelect", value: boolean): void;
		get(property: "uploadOnSelect"): boolean;
		watch(
		property: "uploadOnSelect", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		uploadType: string;
		set(property: "uploadType", value: string): void;
		get(property: "uploadType"): string;
		watch(
		property: "uploadType", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		url: string;
		set(property: "url", value: string): void;
		get(property: "url"): string;
		watch(
		property: "url", callback: {
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
		addDropTarget(node: any, onlyConnectDrop: boolean): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		compare(val1: any, val2: any): number;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		connectForm(): void;
		convertBytes(bytes: any): Object;
		create(): void;
		createXhr(): any;
		defer(fcn: Function, delay: number): Object;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		flashReset(): void;
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getFileList(): any[];
		getFileType(name: String): any;
		getFlashFileList(): any;
		getForm(): HTMLElement;
		getMimeType(): String;
		getParent(): any;
		getUrl(): any;
		getValue(): any;
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
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setLabel(content: String): void;
		setValue(value: String): void;
		startup(): void;
		submit(form: HTMLFormElement): void;
		subscribe(t: String, method: Function): any;
		supports(what: any): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		upload(formData: Object): void;
		uploadIFrame(data: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onAbort(): void;
		onBegin(dataArray: any[]): void;
		onBlur(): void;
		onCancel(): void;
		onChange(fileArray: any[]): void;
		onClick(event: Event): boolean;
		onClose(): boolean;
		onComplete(customEvent: Object): void;
		onDblClick(event: any): void;
		onError(evtObject: Object): void;
		onError(evtObject: String): void;
		onFileChange(fileArray: any): void;
		onFileProgress(fileArray: any): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onLoad(uploader: dojox.form.FileUploader): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onProgress(customEvent: Object): void;
		onReady(uploader: dojox.form.FileUploader): void;
		onShow(): void
	}

	declare class YearTextBox extends undefined$DateTextBox {
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
		alt: string;
		set(property: "alt", value: string): void;
		get(property: "alt"): string;
		watch(
		property: "alt", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		aria-label: string;
		set(property: "aria-label", value: string): void;
		get(property: "aria-label"): string;
		watch(
		property: "aria-label", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
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
		constraints: Object;
		set(property: "constraints", value: Object): void;
		get(property: "constraints"): Object;
		watch(
		property: "constraints", callback: {
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
		datePackage: string;
		set(property: "datePackage", value: string): void;
		get(property: "datePackage"): string;
		watch(
		property: "datePackage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		disabled: boolean;
		set(property: "disabled", value: boolean): void;
		get(property: "disabled"): boolean;
		watch(
		property: "disabled", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		displayedValue: string;
		set(property: "displayedValue", value: string): void;
		get(property: "displayedValue"): string;
		watch(
		property: "displayedValue", callback: {
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
		dropDown: Object;
		set(property: "dropDown", value: Object): void;
		get(property: "dropDown"): Object;
		watch(
		property: "dropDown", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		dropDownDefaultValue: Date;
		set(property: "dropDownDefaultValue", value: Date): void;
		get(property: "dropDownDefaultValue"): Date;
		watch(
		property: "dropDownDefaultValue", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		dropDownPosition: Object;
		set(property: "dropDownPosition", value: Object): void;
		get(property: "dropDownPosition"): Object;
		watch(
		property: "dropDownPosition", callback: {
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
		forceWidth: boolean;
		set(property: "forceWidth", value: boolean): void;
		get(property: "forceWidth"): boolean;
		watch(
		property: "forceWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		hasDownArrow: boolean;
		set(property: "hasDownArrow", value: boolean): void;
		get(property: "hasDownArrow"): boolean;
		watch(
		property: "hasDownArrow", callback: {
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
		intermediateChanges: boolean;
		set(property: "intermediateChanges", value: boolean): void;
		get(property: "intermediateChanges"): boolean;
		watch(
		property: "intermediateChanges", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		invalidMessage: string;
		set(property: "invalidMessage", value: string): void;
		get(property: "invalidMessage"): string;
		watch(
		property: "invalidMessage", callback: {
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
		lowercase: boolean;
		set(property: "lowercase", value: boolean): void;
		get(property: "lowercase"): boolean;
		watch(
		property: "lowercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		maxHeight: number;
		set(property: "maxHeight", value: number): void;
		get(property: "maxHeight"): number;
		watch(
		property: "maxHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		maxLength: string;
		set(property: "maxLength", value: string): void;
		get(property: "maxLength"): string;
		watch(
		property: "maxLength", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		message: string;
		set(property: "message", value: string): void;
		get(property: "message"): string;
		watch(
		property: "message", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		missingMessage: string;
		set(property: "missingMessage", value: string): void;
		get(property: "missingMessage"): string;
		watch(
		property: "missingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		name: string;
		set(property: "name", value: string): void;
		get(property: "name"): string;
		watch(
		property: "name", callback: {
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
		placeHolder: string;
		set(property: "placeHolder", value: string): void;
		get(property: "placeHolder"): string;
		watch(
		property: "placeHolder", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		promptMessage: string;
		set(property: "promptMessage", value: string): void;
		get(property: "promptMessage"): string;
		watch(
		property: "promptMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		propercase: boolean;
		set(property: "propercase", value: boolean): void;
		get(property: "propercase"): boolean;
		watch(
		property: "propercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rangeMessage: string;
		set(property: "rangeMessage", value: string): void;
		get(property: "rangeMessage"): string;
		watch(
		property: "rangeMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		readOnly: boolean;
		set(property: "readOnly", value: boolean): void;
		get(property: "readOnly"): boolean;
		watch(
		property: "readOnly", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		regExp: string;
		set(property: "regExp", value: string): void;
		get(property: "regExp"): string;
		watch(
		property: "regExp", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		required: boolean;
		set(property: "required", value: boolean): void;
		get(property: "required"): boolean;
		watch(
		property: "required", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		scrollOnFocus: boolean;
		set(property: "scrollOnFocus", value: boolean): void;
		get(property: "scrollOnFocus"): boolean;
		watch(
		property: "scrollOnFocus", callback: {
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
		selectOnClick: boolean;
		set(property: "selectOnClick", value: boolean): void;
		get(property: "selectOnClick"): boolean;
		watch(
		property: "selectOnClick", callback: {
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
		state: string;
		set(property: "state", value: string): void;
		get(property: "state"): string;
		watch(
		property: "state", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		tooltipPosition: Object;
		set(property: "tooltipPosition", value: Object): void;
		get(property: "tooltipPosition"): Object;
		watch(
		property: "tooltipPosition", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		trim: boolean;
		set(property: "trim", value: boolean): void;
		get(property: "trim"): boolean;
		watch(
		property: "trim", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		type: string;
		set(property: "type", value: string): void;
		get(property: "type"): string;
		watch(
		property: "type", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		uppercase: boolean;
		set(property: "uppercase", value: boolean): void;
		get(property: "uppercase"): boolean;
		watch(
		property: "uppercase", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		value: Date;
		set(property: "value", value: Date): void;
		get(property: "value"): Date;
		watch(
		property: "value", callback: {
		(property?: string, oldValue?: Date, newValue?: Date): void
	}
	): {
		unwatch(): void
	};
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		closeDropDown(focus: boolean): void;
		compare(val1: Date, val2: Date): any;
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
		displayMessage(message: String): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		filter(val: any): any;
		focus(): void;
		format(value: any): any;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getDisplayedValue(): any;
		getErrorMessage(isFocused: boolean): any;
		getParent(): any;
		getPromptMessage(isFocused: boolean): any;
		getValue(): any;
		isFocusable(): any;
		isInRange(isFocused: boolean): any;
		isLeftToRight(): any;
		isLoaded(): boolean;
		isValid: {
		(isFocused: boolean): any
	};
		loadAndOpenDropDown(): any;
		loadDropDown(loadCallback: Function): void;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		openDropDown(): void;
		own(): any;
		parse(value: String, constraints: dojo.date.locale.___FormatOptions): String;
		pattern: {
		(options: Object): any
	};
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		popupClass: {
		(): void
	};
		postCreate(): void;
		postMixInProperties(): void;
		rangeCheck(
		primitive: number, constraints: dijit.form.RangeBoundTextBox.___Constraints
	): boolean;
		regExpGen(constraints: Object): void;
		reset(): void;
		serialize(val: any, options: Object): any;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setDisabled(disabled: boolean): void;
		setDisplayedValue(value: String): void;
		setValue(value: String): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toggleDropDown(): void;
		toString(): string;
		undo(): void;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validate(): any;
		validator(value: any): boolean;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onChange(newValue: any): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onFocus(): void;
		onHide(): void;
		onInput(event: any): void;
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

declare module '_FormSelectWidget' {
		declare interface ___SelectOption {
		disabled: boolean,
		label: string,
		selected: boolean,
		value: string
	}

			
}

declare module 'DropDownSelect' {
				declare class _Menu extends dijit$DropDownMenu {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		activated: boolean;
		set(property: "activated", value: boolean): void;
		get(property: "activated"): boolean;
		watch(
		property: "activated", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
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
		autoFocus: boolean;
		set(property: "autoFocus", value: boolean): void;
		get(property: "autoFocus"): boolean;
		watch(
		property: "autoFocus", callback: {
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
		parentMenu: Object;
		set(property: "parentMenu", value: Object): void;
		get(property: "parentMenu"): Object;
		watch(
		property: "parentMenu", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		passivePopupDelay: number;
		set(property: "passivePopupDelay", value: number): void;
		get(property: "passivePopupDelay"): number;
		watch(
		property: "passivePopupDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		popupDelay: number;
		set(property: "popupDelay", value: number): void;
		get(property: "popupDelay"): number;
		watch(
		property: "popupDelay", callback: {
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
		selected: Object;
		set(property: "selected", value: Object): void;
		get(property: "selected"): Object;
		watch(
		property: "selected", callback: {
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
		destroy(preserveDom?: boolean): void;
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
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
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
		onCancel(closeAll: boolean): void;
		onClick(event: any): void;
		onDblClick(event: any): void;
		onExecute(): void;
		onFocus(): void;
		onHide(): void;
		onItemHover(item: dijit.MenuItem): void;
		onItemUnhover(item: dijit.MenuItem): void;
		onKeyboardSearch(
		item: dijit.MenuItem, evt: Event, searchString: String, numMatches: number
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

declare module 'manager' {
				declare class _ClassMixin  {
		constructor(): this;
		addClass(className: String, names: Object): Function;
		gatherClassState(className: String, names: Object): any;
		removeClass(className: String, names: Object): Function
	}

	declare class _EnableMixin  {
		constructor(): this;
		disable(state: Object): any;
		enable(state: Object, defaultState: boolean): Function;
		gatherEnableState(names: Object): any
	}

	declare class _DisplayMixin  {
		constructor(): this;
		gatherDisplayState(names: Object): any;
		hide(state: Object): any;
		show(state: Object, defaultState: boolean): Function
	}

	declare class _FormMixin  {
		constructor(): this;
		accept: string;
		accept-charset: string;
		action: string;
		encType: string;
		method: string;
		name: string;
		target: string;
		isValid: {
		(): boolean
	};
		reset(): Function;
		startup(): void;
		submit(): void;
		validate(): boolean;
		onReset(): boolean;
		onSubmit(): any
	}

	declare class _NodeMixin  {
		constructor(): this;
		destroy(): void;
		formNodeValue(elem: String, value: Object): any;
		formNodeValue(elem: HTMLElement, value: Object): any;
		formNodeValue(elem: any[], value: Object): any;
		inspectFormNodes(inspector: Function, state: Object, defaultValue: Object): Object;
		registerNode(node: String): any;
		registerNode(node: HTMLElement): any;
		registerNodeDescendants(node: String): any;
		registerNodeDescendants(node: HTMLElement): any;
		unregisterNode(name: String): any;
		unregisterNodeDescendants(node: String): any;
		unregisterNodeDescendants(node: HTMLElement): any
	}

	declare class _Mixin  {
		constructor(): this;
		watching: boolean;
		destroy(): void;
		formPointValue(elem: String, value: Object): any;
		formPointValue(elem: Object, value: Object): any;
		formPointValue(elem: any[], value: Object): any;
		formWidgetValue(elem: String, value: Object): any;
		formWidgetValue(elem: Object, value: Object): any;
		formWidgetValue(elem: any[], value: Object): any;
		inspect(inspector: Function, state: Object, defaultValue: Object): any;
		inspectAttachedPoints(inspector: Function, state: Object, defaultValue: Object): Object;
		inspectFormWidgets(inspector: Function, state: Object, defaultValue: Object): Object;
		registerWidget(widget: String): any;
		registerWidget(widget: HTMLElement): any;
		registerWidget(widget: dijit.form._FormWidget): any;
		registerWidgetDescendants(widget: String): any;
		registerWidgetDescendants(widget: HTMLElement): any;
		registerWidgetDescendants(widget: dijit._Widget): any;
		startup(): void;
		unregisterWidget(name: string): any;
		unregisterWidgetDescendants(widget: String): any;
		unregisterWidgetDescendants(widget: HTMLElement): any;
		unregisterWidgetDescendants(widget: dijit._Widget): any
	}

	declare class _ValueMixin  {
		constructor(): this;
		elementValue(name: String, value: Object): any;
		gatherFormValues(names: Object): any;
		setFormValues(values: Object): Function
	}

	
}

declare module 'uploader' {
				declare class _Flash  {
		constructor(): this;
		deferredUploading: number;
		devMode: Object;
		isDebug: boolean;
		preventCache: boolean;
		serverTimeout: number;
		skipServerCheck: boolean;
		swfPath: string;
		flashReset(): void;
		getFlashFileList(): any;
		postMixInProperties(): void;
		onFileChange(fileArray: any): void;
		onFileProgress(fileArray: any): void;
		onLoad(uploader: dojox.form.FileUploader): void;
		onReady(uploader: dojox.form.FileUploader): void
	}

	declare class _IFrame  {
		constructor(): this;
		postMixInProperties(): void;
		uploadIFrame(data: any): void
	}

	declare class _HTML5  {
		constructor(): this;
		errMsg: string;
		uploadType: string;
		addDropTarget(node: any, onlyConnectDrop: boolean): void;
		createXhr(): any;
		postCreate(): void;
		postMixInProperties(): void;
		upload(formData: Object): void
	}

	declare class _Base extends dijit$_Widget, dijit$_TemplatedMixin {
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
		connectForm(): void;
		convertBytes(bytes: any): Object;
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
		getFileType(name: String): any;
		getForm(): HTMLElement;
		getMimeType(): String;
		getParent(): any;
		getUrl(): any;
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
		startup(): void;
		subscribe(t: String, method: Function): any;
		supports(what: any): any;
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

	declare class FileList extends undefined$_Base {
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
		headerFilename: string;
		set(property: "headerFilename", value: string): void;
		get(property: "headerFilename"): string;
		watch(
		property: "headerFilename", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		headerFilesize: string;
		set(property: "headerFilesize", value: string): void;
		get(property: "headerFilesize"): string;
		watch(
		property: "headerFilesize", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		headerIndex: string;
		set(property: "headerIndex", value: string): void;
		get(property: "headerIndex"): string;
		watch(
		property: "headerIndex", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		headerType: string;
		set(property: "headerType", value: string): void;
		get(property: "headerType"): string;
		watch(
		property: "headerType", callback: {
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
		rowAmt: number;
		set(property: "rowAmt", value: number): void;
		get(property: "rowAmt"): number;
		watch(
		property: "rowAmt", callback: {
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
		uploader: Object;
		set(property: "uploader", value: Object): void;
		get(property: "uploader"): Object;
		watch(
		property: "uploader", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		uploaderId: string;
		set(property: "uploaderId", value: string): void;
		get(property: "uploaderId"): string;
		watch(
		property: "uploaderId", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		connectForm(): void;
		convertBytes(bytes: any): Object;
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
		getFileType(name: String): any;
		getForm(): HTMLElement;
		getMimeType(): String;
		getParent(): any;
		getUrl(): any;
		hideProgress(animate: boolean): void;
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
		reset(): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setUploader(): void;
		showProgress(animate: boolean): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		supports(what: any): any;
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

declare module 'plugins' {
		declare interface Flash {
		
	}

	declare interface HTML5 {
		
	}

	declare interface IFrame {
		
	}

			
}

declare module 'dojox/form/_HasDropDown' {
					declare module.exports: _HasDropDown


}

declare module 'dojox/form/DropDownStack' {
					declare module.exports: DropDownStack


}

declare module 'dojox/form/RadioStack' {
					declare module.exports: RadioStack


}

declare module 'dojox/form/_SelectStackMixin' {
					declare module.exports: _SelectStackMixin


}

declare module 'dojox/form/BusyButton' {
					declare module.exports: BusyButton


}

declare module 'dojox/form/_FormSelectWidget' {
					declare module.exports: _FormSelectWidget


}

declare module 'dojox/form/_FormSelectWidget.__SelectOption' {
					declare module.exports: ___SelectOption


}

declare module 'dojox/form/CheckedMultiSelect' {
					declare module.exports: CheckedMultiSelect


}

declare module 'dojox/form/DayTextBox' {
					declare module.exports: DayTextBox


}

declare module 'dojox/form/DropDownSelect' {
					declare module.exports: DropDownSelect


}

declare module 'dojox/form/DropDownSelect._Menu' {
					declare module.exports: _Menu


}

declare module 'dojox/form/FileInput' {
					declare module.exports: FileInput


}

declare module 'dojox/form/DateTextBox' {
					declare module.exports: DateTextBox


}

declare module 'dojox/form/FileInputBlind' {
					declare module.exports: FileInputBlind


}

declare module 'dojox/form/FileInputAuto' {
					declare module.exports: FileInputAuto


}

declare module 'dojox/form/FileUploader' {
					declare module.exports: FileUploader


}

declare module 'dojox/form/Manager' {
					declare module.exports: Manager


}

declare module 'dojox/form/FilePickerTextBox' {
					declare module.exports: FilePickerTextBox


}

declare module 'dojox/form/RangeSlider' {
					declare module.exports: RangeSlider


}

declare module 'dojox/form/ListInput' {
					declare module.exports: ListInput


}

declare module 'dojox/form/PasswordValidator' {
					declare module.exports: PasswordValidator


}

declare module 'dojox/form/Rating' {
					declare module.exports: Rating


}

declare module 'dojox/form/MonthTextBox' {
					declare module.exports: MonthTextBox


}

declare module 'dojox/form/MultiComboBox' {
					declare module.exports: MultiComboBox


}

declare module 'dojox/form/TimeSpinner' {
					declare module.exports: TimeSpinner


}

declare module 'dojox/form/TriStateCheckBox' {
					declare module.exports: TriStateCheckBox


}

declare module 'dojox/form/Uploader' {
					declare module.exports: Uploader


}

declare module 'dojox/form/YearTextBox' {
					declare module.exports: YearTextBox


}

declare module 'dojox/form/manager/_ClassMixin' {
					declare module.exports: _ClassMixin


}

declare module 'dojox/form/manager/_DisplayMixin' {
					declare module.exports: _DisplayMixin


}

declare module 'dojox/form/manager/_EnableMixin' {
					declare module.exports: _EnableMixin


}

declare module 'dojox/form/manager/_FormMixin' {
					declare module.exports: _FormMixin


}

declare module 'dojox/form/manager/_Mixin' {
					declare module.exports: _Mixin


}

declare module 'dojox/form/manager/_NodeMixin' {
					declare module.exports: _NodeMixin


}

declare module 'dojox/form/manager/_ValueMixin' {
					declare module.exports: _ValueMixin


}

declare module 'dojox/form/uploader/_HTML5' {
					declare module.exports: _HTML5


}

declare module 'dojox/form/uploader/_Flash' {
					declare module.exports: _Flash


}

declare module 'dojox/form/uploader/_IFrame' {
					declare module.exports: _IFrame


}

declare module 'dojox/form/uploader/_Base' {
					declare module.exports: _Base


}

declare module 'dojox/form/uploader/FileList' {
					declare module.exports: FileList


}

declare module 'dojox/form/uploader/plugins/Flash' {
					declare module.exports: Flash


}

declare module 'dojox/form/uploader/plugins/HTML5' {
					declare module.exports: HTML5


}

declare module 'dojox/form/uploader/plugins/IFrame' {
					declare module.exports: IFrame


}