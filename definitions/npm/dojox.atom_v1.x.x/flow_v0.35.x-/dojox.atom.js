

declare module 'dojox.atom' {
					
}

declare module 'io' {
		declare interface model {
		util: Object,
		AtomItem(): void,
		Category(): void,
		Collection(): void,
		Content(): void,
		Entry(): void,
		Feed(): void,
		Generator(): void,
		Link(): void,
		Node(): void,
		Person(): void,
		Service(): void,
		Workspace(): void
	}

		declare class Connection  {
		constructor(sync: boolean, preventCache: boolean): this;
		alertsEnabled: boolean;
		preventCache: boolean;
		addEntry(
		entry: any, url: any, callback: any, errorCallback: any, retrieveEntry: any, scope: any
	): any;
		deleteEntry(entry: any, callback: any, errorCallback: any, xmethod: any, scope: any): any;
		getEntry(url: any, callback: any, errorCallback: any, scope: any): any;
		getFeed(url: String, callback: Function, errorCallback: Function, scope: Object): any;
		getService(url: any, callback: any, errorCallback: any, scope: any): any;
		updateEntry(
		entry: any, callback: any, errorCallback: any, retrieveUpdated: any, xmethod: any, scope: any
	): any
	}

	
}

declare module 'model' {
		declare interface _actions {
		node: Object,
		obj: Object,
		author(obj: any, node: any): void,
		category(obj: any, node: any): void,
		content(obj: any, node: any): void,
		contributor(obj: any, node: any): void,
		email(obj: any, node: any): void,
		entry(obj: any, node: any): void,
		generator(obj: any, node: any): void,
		icon(obj: any, node: any): void,
		id(obj: any, node: any): void,
		issued(obj: any, node: any): void,
		link(obj: any, node: any): void,
		modified(obj: any, node: any): void,
		name(obj: any, node: any): void,
		published(obj: any, node: any): void,
		rights(obj: any, node: any): void,
		subtitle(obj: any, node: any): void,
		summary(obj: any, node: any): void,
		title(obj: any, node: any): void,
		updated(obj: any, node: any): void,
		uri(obj: any, node: any): void
	}

	declare interface _Constants {
		APP_NS: string,
		ATOM_NS: string,
		ATOM_URI: string,
		PURL_NS: string
	}

	declare interface util {
		createDate(node: HTMLElement): any,
		escapeHtml(str: String): any,
		getNodename(node: HTMLElement): String,
		unEscapeHtml(str: String): any
	}

		declare class AtomItem  {
		constructor(args: any): this;
		accept(tag: any): any;
		addAttribute(name: any, value: any): void;
		addAuthor(name: String, email: String, uri: String): void;
		addCategory(scheme: String, term: String, label: String): void;
		addContent(content: any): void;
		addContributor(name: String, email: String, uri: String): void;
		addExtension(
		name_space: String, name: String, attributes: any[], content: String, shortNS: String
	): void;
		addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
		addNamespace(fullName: any, shortName: any): void;
		buildFromDom(node: any): void;
		destroy(): void;
		getAttribute(name: any): any;
		getCategories(scheme: String): any;
		getExtensions(name_space: String, name: String): any[];
		removeBasicLinks(): number;
		removeCategories(scheme: String, term: String): number;
		removeExtensions(name_space: String, name: String): void;
		removeLink(href: String, rel: String): number;
		setTitle(str: String, type: String): void;
		toString(): any
	}

	declare class Category  {
		constructor(scheme: String, term: String, label: String): this;
		addAttribute(name: any, value: any): void;
		addContent(content: any): void;
		buildFromDom(node: HTMLElement): void;
		getAttribute(name: any): any;
		toString(): any
	}

	declare class Collection  {
		constructor(href: any, title: any): this;
		accept(tag: any): any;
		addAttribute(name: any, value: any): void;
		addAuthor(name: String, email: String, uri: String): void;
		addCategory(scheme: String, term: String, label: String): void;
		addContent(content: any): void;
		addContributor(name: String, email: String, uri: String): void;
		addExtension(
		name_space: String, name: String, attributes: any[], content: String, shortNS: String
	): void;
		addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
		addNamespace(fullName: any, shortName: any): void;
		buildFromDom(node: HTMLElement): void;
		destroy(): void;
		getAttribute(name: any): any;
		getCategories(scheme: String): any;
		getExtensions(name_space: String, name: String): any[];
		removeBasicLinks(): number;
		removeCategories(scheme: String, term: String): number;
		removeExtensions(name_space: String, name: String): void;
		removeLink(href: String, rel: String): number;
		setTitle(str: String, type: String): void;
		toString(): any
	}

	declare class Content  {
		constructor(tagName: any, value: any, src: any, type: any, xmlLang: any): this;
		addAttribute(name: any, value: any): void;
		addContent(content: any): void;
		buildFromDom(node: HTMLElement): void;
		getAttribute(name: any): any;
		toString(): any
	}

	declare class Entry  {
		constructor(id: String): this;
		accept(tag: any): any;
		addAttribute(name: any, value: any): void;
		addAuthor(name: String, email: String, uri: String): void;
		addCategory(scheme: String, term: String, label: String): void;
		addContent(content: any): void;
		addContributor(name: String, email: String, uri: String): void;
		addExtension(
		name_space: String, name: String, attributes: any[], content: String, shortNS: String
	): void;
		addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
		addNamespace(fullName: any, shortName: any): void;
		buildFromDom(node: any): void;
		destroy(): void;
		getAttribute(name: any): any;
		getCategories(scheme: String): any;
		getEditHref(): any;
		getExtensions(name_space: String, name: String): any[];
		removeBasicLinks(): number;
		removeCategories(scheme: String, term: String): number;
		removeExtensions(name_space: String, name: String): void;
		removeLink(href: String, rel: String): number;
		setEditHref(url: any): void;
		setTitle(str: String, type: String): void;
		toString(amPrimary: any): any
	}

	declare class Generator  {
		constructor(uri: String, version: String, value: String): this;
		addAttribute(name: any, value: any): void;
		addContent(content: any): void;
		buildFromDom(node: any): void;
		getAttribute(name: any): any;
		toString(): any
	}

	declare class Feed  {
		constructor(args: any): this;
		accept(tag: any): any;
		addAttribute(name: any, value: any): void;
		addAuthor(name: String, email: String, uri: String): void;
		addCategory(scheme: String, term: String, label: String): void;
		addContent(content: any): void;
		addContributor(name: String, email: String, uri: String): void;
		addEntry(entry: Object): void;
		addExtension(
		name_space: String, name: String, attributes: any[], content: String, shortNS: String
	): void;
		addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
		addNamespace(fullName: any, shortName: any): void;
		buildFromDom(node: any): void;
		createEntry(): any;
		destroy(): void;
		getAttribute(name: any): any;
		getCategories(scheme: String): any;
		getEntry(entryId: String): any;
		getExtensions(name_space: String, name: String): any[];
		getFirstEntry(): any;
		getSelfHref(): any;
		removeBasicLinks(): number;
		removeCategories(scheme: String, term: String): number;
		removeEntry(entry: Object): number;
		removeExtensions(name_space: String, name: String): void;
		removeLink(href: String, rel: String): number;
		setEntries(arrayOfEntry: any[]): void;
		setTitle(str: String, type: String): void;
		toString(): any
	}

	declare class Link  {
		constructor(href: any, rel: any, hrefLang: any, title: any, type: any): this;
		addAttribute(name: any, value: any): void;
		addContent(content: any): void;
		buildFromDom(node: any): void;
		getAttribute(name: any): any;
		toString(): any
	}

	declare class Node  {
		constructor(name_space: any, name: any, attributes: any, content: any, shortNs: any): this;
		addAttribute(name: any, value: any): void;
		addContent(content: any): void;
		buildFromDom(node: any): void;
		getAttribute(name: any): any;
		toString(): any
	}

	declare class Person  {
		constructor(personType: any, name: any, email: any, uri: any): this;
		accept(tag: any): any;
		addAttribute(name: any, value: any): void;
		addContent(content: any): void;
		buildFromDom(node: any): void;
		getAttribute(name: any): any;
		toString(): any
	}

	declare class Service  {
		constructor(href: any): this;
		accept(tag: any): any;
		addAttribute(name: any, value: any): void;
		addAuthor(name: String, email: String, uri: String): void;
		addCategory(scheme: String, term: String, label: String): void;
		addContent(content: any): void;
		addContributor(name: String, email: String, uri: String): void;
		addExtension(
		name_space: String, name: String, attributes: any[], content: String, shortNS: String
	): void;
		addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
		addNamespace(fullName: any, shortName: any): void;
		buildFromDom(node: HTMLElement): void;
		destroy(): void;
		getAttribute(name: any): any;
		getCategories(scheme: String): any;
		getCollection(url: String): any;
		getExtensions(name_space: String, name: String): any[];
		removeBasicLinks(): number;
		removeCategories(scheme: String, term: String): number;
		removeExtensions(name_space: String, name: String): void;
		removeLink(href: String, rel: String): number;
		setTitle(str: String, type: String): void;
		toString(): any
	}

	declare class Workspace  {
		constructor(title: any): this;
		accept(tag: any): any;
		addAttribute(name: any, value: any): void;
		addAuthor(name: String, email: String, uri: String): void;
		addCategory(scheme: String, term: String, label: String): void;
		addContent(content: any): void;
		addContributor(name: String, email: String, uri: String): void;
		addExtension(
		name_space: String, name: String, attributes: any[], content: String, shortNS: String
	): void;
		addLink(href: String, rel: String, hrefLang: String, title: String, type: String): void;
		addNamespace(fullName: any, shortName: any): void;
		buildFromDom(node: HTMLElement): void;
		destroy(): void;
		getAttribute(name: any): any;
		getCategories(scheme: String): any;
		getExtensions(name_space: String, name: String): any[];
		removeBasicLinks(): number;
		removeCategories(scheme: String, term: String): number;
		removeExtensions(name_space: String, name: String): void;
		removeLink(href: String, rel: String): number;
		setTitle(str: String, type: String): void;
		toString(): any
	}

	
}

declare module 'widget' {
				declare class FeedEntryEditor extends undefined$FeedEntryViewer {
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
		displayEntrySections: string;
		set(property: "displayEntrySections", value: string): void;
		get(property: "displayEntrySections"): string;
		watch(
		property: "displayEntrySections", callback: {
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
		enableEdit: boolean;
		set(property: "enableEdit", value: boolean): void;
		get(property: "enableEdit"): boolean;
		watch(
		property: "enableEdit", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		enableMenu: boolean;
		set(property: "enableMenu", value: boolean): void;
		get(property: "enableMenu"): boolean;
		watch(
		property: "enableMenu", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		enableMenuFade: boolean;
		set(property: "enableMenuFade", value: boolean): void;
		get(property: "enableMenuFade"): boolean;
		watch(
		property: "enableMenuFade", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		entryNewButton: Object;
		set(property: "entryNewButton", value: Object): void;
		get(property: "entryNewButton"): Object;
		watch(
		property: "entryNewButton", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		entrySelectionTopic: string;
		set(property: "entrySelectionTopic", value: string): void;
		get(property: "entrySelectionTopic"): string;
		watch(
		property: "entrySelectionTopic", callback: {
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
		addChild(widget: dijit._WidgetBase, insertIndex: number): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		cancelEdits(): any;
		clear(): void;
		clearEditors(): void;
		clearNodes(): void;
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
		getDescendants(): any[];
		getEntry(): any;
		getFeed(): any;
		getIndexOfChild(child: dijit._WidgetBase): any;
		getParent(): any;
		hasChildren(): boolean;
		isFieldValid(field: String): any;
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
		saveEdits(): any;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setAuthors(authorsAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setAuthorsHeader(authorHeaderNode: HTMLElement, entry: Object): void;
		setContent(contentAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setContentHeader(contentHeaderNode: HTMLElement, entry: Object): void;
		setContributors(contributorsAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setContributorsHeader(contributorsHeaderNode: HTMLElement, entry: Object): void;
		setDisplaySections(sectionsArray: any[]): any;
		setEntry(entry: Object, feed: Object, leaveMenuState: boolean): void;
		setFieldValidity(field: String, isValid: boolean): any;
		setId(idAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setIdHeader(idHeaderNode: HTMLElement, entry: Object): void;
		setSummary(summaryAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setSummaryHeader(summaryHeaderNode: HTMLElement, entry: Object): void;
		setTitle(titleAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setTitleHeader(titleHeaderNode: HTMLElement, entry: Object): void;
		setUpdated(updatedAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setUpdatedHeader(updatedHeaderNode: HTMLElement, entry: Object): void;
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

	declare class FeedViewer extends dijit$_Widget, dijit$_Templated {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		alertsEnabled: boolean;
		set(property: "alertsEnabled", value: boolean): void;
		get(property: "alertsEnabled"): boolean;
		watch(
		property: "alertsEnabled", callback: {
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
		entrySelectionTopic: string;
		set(property: "entrySelectionTopic", value: string): void;
		get(property: "entrySelectionTopic"): string;
		watch(
		property: "entrySelectionTopic", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		feedViewerTable: Object;
		set(property: "feedViewerTable", value: Object): void;
		get(property: "feedViewerTable"): Object;
		watch(
		property: "feedViewerTable", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		feedViewerTableBody: Object;
		set(property: "feedViewerTableBody", value: Object): void;
		get(property: "feedViewerTableBody"): Object;
		watch(
		property: "feedViewerTableBody", callback: {
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
		localSaveOnly: boolean;
		set(property: "localSaveOnly", value: boolean): void;
		get(property: "localSaveOnly"): boolean;
		watch(
		property: "localSaveOnly", callback: {
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
		xmethod: boolean;
		set(property: "xmethod", value: boolean): void;
		get(property: "xmethod"): boolean;
		watch(
		property: "xmethod", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		addCategoryIncludeFilter(filter: Object): any;
		addChild(widget: dijit._WidgetBase, insertIndex: number): void;
		appendEntry(entry: Object): any;
		appendGrouping(titleText: String): any;
		AtomEntryCategoryFilter(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		CategoryIncludeFilter(): void;
		clear(): any;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		defer(fcn: Function, delay: number): Object;
		deleteEntry(entryRow: Object): void;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		FeedViewerEntry(): void;
		FeedViewerGrouping(): void;
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
		removeCategoryIncludeFilter(filter: Object): any;
		removeChild(widget: dijit._WidgetBase): void;
		removeChild(widget: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setFeed(feed: Object): any;
		setFeedFromUrl(url: String): any;
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
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onEntrySelected(entry: Object): any;
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

	declare class FeedEntryViewer extends dijit$_Widget, dijit$_Templated {
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
		displayEntrySections: string;
		set(property: "displayEntrySections", value: string): void;
		get(property: "displayEntrySections"): string;
		watch(
		property: "displayEntrySections", callback: {
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
		enableMenu: boolean;
		set(property: "enableMenu", value: boolean): void;
		get(property: "enableMenu"): boolean;
		watch(
		property: "enableMenu", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		enableMenuFade: boolean;
		set(property: "enableMenuFade", value: boolean): void;
		get(property: "enableMenuFade"): boolean;
		watch(
		property: "enableMenuFade", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		entrySelectionTopic: string;
		set(property: "entrySelectionTopic", value: string): void;
		get(property: "entrySelectionTopic"): string;
		watch(
		property: "entrySelectionTopic", callback: {
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
		addChild(widget: dijit._WidgetBase, insertIndex: number): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		clear(): void;
		clearNodes(): void;
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
		EntryHeader(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getEntry(): any;
		getFeed(): any;
		getIndexOfChild(child: dijit._WidgetBase): any;
		getParent(): any;
		hasChildren(): boolean;
		isFieldValid(field: String): any;
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
		setAuthors(authorsAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setAuthorsHeader(authorHeaderNode: HTMLElement, entry: Object): void;
		setContent(contentAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setContentHeader(contentHeaderNode: HTMLElement, entry: Object): void;
		setContributors(contributorsAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setContributorsHeader(contributorsHeaderNode: HTMLElement, entry: Object): void;
		setDisplaySections(sectionsArray: any[]): any;
		setEntry(entry: Object, feed: Object, leaveMenuState: boolean): void;
		setFieldValidity(field: String, isValid: boolean): any;
		setId(idAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setIdHeader(idHeaderNode: HTMLElement, entry: Object): void;
		setSummary(summaryAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setSummaryHeader(summaryHeaderNode: HTMLElement, entry: Object): void;
		setTitle(titleAnchorNode: any, editMode: any, entry: any): void;
		setTitleHeader(titleHeaderNode: HTMLElement, entry: Object): void;
		setUpdated(updatedAnchorNode: HTMLElement, editMode: boolean, entry: Object): void;
		setUpdatedHeader(updatedHeaderNode: HTMLElement, entry: Object): void;
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

declare module 'FeedViewer' {
				declare class AtomEntryCategoryFilter  {
		constructor(): this;
		isFilter: boolean;
		label: string;
		scheme: string;
		term: string
	}

	declare class CategoryIncludeFilter  {
		constructor(scheme: any, term: any, label: any): this;
		match(entry: any): any
	}

	declare class FeedViewerEntry extends dijit$_Widget, dijit$_Templated {
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
		deleteButton: Object;
		set(property: "deleteButton", value: Object): void;
		get(property: "deleteButton"): Object;
		watch(
		property: "deleteButton", callback: {
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
		entry: Object;
		set(property: "entry", value: Object): void;
		get(property: "entry"): Object;
		watch(
		property: "entry", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		entryNode: Object;
		set(property: "entryNode", value: Object): void;
		get(property: "entryNode"): Object;
		watch(
		property: "entryNode", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		feed: Object;
		set(property: "feed", value: Object): void;
		get(property: "feed"): Object;
		watch(
		property: "feed", callback: {
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
		timeNode: Object;
		set(property: "timeNode", value: Object): void;
		get(property: "timeNode"): Object;
		watch(
		property: "timeNode", callback: {
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
		defer(fcn: Function, delay: number): Object;
		deleteEntry(event: Object): any;
		destroy(preserveDom?: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disableDelete(): any;
		disconnect(handle: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		enableDelete(): any;
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
		setTime(timeText: String): any;
		setTitle(text: String): any;
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
		onClick(e: Object): void;
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

	declare class FeedViewerGrouping extends dijit$_Widget, dijit$_Templated {
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
		groupingNode: Object;
		set(property: "groupingNode", value: Object): void;
		get(property: "groupingNode"): Object;
		watch(
		property: "groupingNode", callback: {
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
		titleNode: Object;
		set(property: "titleNode", value: Object): void;
		get(property: "titleNode"): Object;
		watch(
		property: "titleNode", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setText(text: any): void;
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

declare module 'FeedEntryViewer' {
				declare class EntryHeader extends dijit$_Widget, dijit$_Templated {
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
		addChild(widget: dijit._WidgetBase, insertIndex: number): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		clear(): void;
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
		setListHeader(title: String): void;
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

declare module 'dojox/atom/io/model' {
					declare module.exports: model


}

declare module 'dojox/atom/io/model.Category' {
					declare module.exports: Category


}

declare module 'dojox/atom/io/model.Content' {
					declare module.exports: Content


}

declare module 'dojox/atom/io/model.AtomItem' {
					declare module.exports: AtomItem


}

declare module 'dojox/atom/io/model.Generator' {
					declare module.exports: Generator


}

declare module 'dojox/atom/io/model.Entry' {
					declare module.exports: Entry


}

declare module 'dojox/atom/io/model.Collection' {
					declare module.exports: Collection


}

declare module 'dojox/atom/io/model.Feed' {
					declare module.exports: Feed


}

declare module 'dojox/atom/io/model.Link' {
					declare module.exports: Link


}

declare module 'dojox/atom/io/model.Node' {
					declare module.exports: Node


}

declare module 'dojox/atom/io/model.Person' {
					declare module.exports: Person


}

declare module 'dojox/atom/io/model.Service' {
					declare module.exports: Service


}

declare module 'dojox/atom/io/model.Workspace' {
					declare module.exports: Workspace


}

declare module 'dojox/atom/io/model._Constants' {
					declare module.exports: _Constants


}

declare module 'dojox/atom/io/model._actions' {
					declare module.exports: _actions


}

declare module 'dojox/atom/io/model.util' {
					declare module.exports: util


}

declare module 'dojox/atom/io/Connection' {
					declare module.exports: Connection


}

declare module 'dojox/atom/widget/FeedViewer' {
					declare module.exports: FeedViewer


}

declare module 'dojox/atom/widget/FeedViewer.CategoryIncludeFilter' {
					declare module.exports: CategoryIncludeFilter


}

declare module 'dojox/atom/widget/FeedViewer.AtomEntryCategoryFilter' {
					declare module.exports: AtomEntryCategoryFilter


}

declare module 'dojox/atom/widget/FeedViewer.FeedViewerEntry' {
					declare module.exports: FeedViewerEntry


}

declare module 'dojox/atom/widget/FeedViewer.FeedViewerGrouping' {
					declare module.exports: FeedViewerGrouping


}

declare module 'dojox/atom/widget/FeedEntryViewer' {
					declare module.exports: FeedEntryViewer


}

declare module 'dojox/atom/widget/FeedEntryViewer.EntryHeader' {
					declare module.exports: EntryHeader


}

declare module 'dojox/atom/widget/FeedEntryEditor' {
					declare module.exports: FeedEntryEditor


}