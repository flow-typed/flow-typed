import type { dtl } from 'npm$namespace$dojox'

declare module 'dojox.dtl' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface dtl {
		
	}

			
}

declare module 'dtl' {
		declare interface _base {
		BOOLS: Object,
		data: Object,
		date: Object,
		dates: Object,
		dijit: Object,
		dom: Object,
		html: Object,
		htmlstrings: Object,
		integers: Object,
		lists: Object,
		loader: Object,
		logic: Object,
		loop: Object,
		misc: Object,
		objects: Object,
		register: Object,
		strings: Object,
		text: Object,
		TOKEN_ATTR: number,
		TOKEN_BLOCK: number,
		TOKEN_CHANGE: number,
		TOKEN_COMMENT: number,
		TOKEN_CUSTOM: number,
		TOKEN_NODE: number,
		TOKEN_TEXT: number,
		TOKEN_VAR: number,
		AttributeNode(key: any, value: any): void,
		ChangeNode(node: any, up: boolean, root: boolean): void,
		Context(dict: Object): void,
		DomBuffer(parent: HTMLElement): void,
		DomInline(args: any, node: any): void,
		DomTemplate(obj: String): void,
		DomTemplate(obj: HTMLElement): void,
		DomTemplate(obj: dojo._base.url): void,
		Inline(args: any, node: any): void,
		mark_safe(value: any): void,
		quickFilter(str: any): void,
		Template(template: String, isString: boolean): void,
		Template(template: dojo._base.url, isString: boolean): void
	}

	declare interface dom {
		getTemplate(text: any): Object,
		tokenize(nodes: HTMLElement): any[]
	}

	declare interface _DomTemplated {
		(): void
	}

	declare interface Context {
		(dict: Object): void
	}

		declare class _Templated extends dijit$_TemplatedMixin {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		attachScope: Object;
		searchContainerNode: boolean;
		templatePath: string;
		templateString: string;
		buildRendering(): void;
		destroyRendering(): void;
		getCachedTemplate(templatePath: any, templateString: any, alwaysUseString: any): any;
		render(): void;
		startup(): void;
		getCachedTemplate(): any
	}

	declare class DomInline  {
		constructor(args: Object, node: HTMLElement): this;
		attributeMap: Object;
		baseClass: string;
		class: string;
		containerNode: HTMLElement;
		context: Object;
		declaredClass: string;
		dir: string;
		domNode: HTMLElement;
		focused: boolean;
		id: string;
		lang: string;
		ownerDocument: Object;
		srcNodeRef: HTMLElement;
		style: string;
		title: string;
		tooltip: string;
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
		destroy(preserveDom: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom: boolean): void;
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
		render(context: dojox.dtl.Context): void;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(name: String, callback: Function): any
	}

	declare class Inline  {
		constructor(args: Object, node: HTMLElement): this;
		attributeMap: Object;
		baseClass: string;
		class: string;
		containerNode: HTMLElement;
		context: Object;
		declaredClass: string;
		dir: string;
		domNode: HTMLElement;
		focused: boolean;
		id: string;
		lang: string;
		ownerDocument: Object;
		srcNodeRef: HTMLElement;
		style: string;
		title: string;
		tooltip: string;
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
		destroy(preserveDom: boolean): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom: boolean): void;
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
		render(context: Object): void;
		render(context: dojox.dtl.Context): void;
		set(name: any, value: any): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		watch(name: String, callback: Function): any
	}

	
}

declare module '_base' {
		declare interface _base {
		escape(value: any): void,
		safe(value: any): void
	}

	declare interface BOOLS {
		checked: number,
		disabled: number,
		readonly: number
	}

	declare interface date {
		
	}

	declare interface data {
		
	}

	declare interface dates {
		
	}

	declare interface dijit {
		
	}

	declare interface dom {
		getTemplate(text: any): Object,
		tokenize(nodes: HTMLElement): any[]
	}

	declare interface html {
		
	}

	declare interface htmlstrings {
		
	}

	declare interface integers {
		
	}

	declare interface loader {
		
	}

	declare interface lists {
		
	}

	declare interface loop {
		
	}

	declare interface logic {
		
	}

	declare interface misc {
		
	}

	declare interface objects {
		
	}

	declare interface register {
		filters(base: String, locations: Object): void,
		tags(base: String, locations: Object): void
	}

	declare interface strings {
		
	}

	declare interface text {
		getFilter(name: any, errorless: any): any,
		getTag(name: any, errorless: any): any,
		getTemplate(file: any): any,
		getTemplateString(file: any): String,
		tokenize(str: any): any
	}

			
}

declare module 'dom' {
		declare interface _uppers {
		
	}

	declare interface _attributes {
		
	}

			
}

declare module '_DomTemplated' {
		declare interface buildRendering {
		(): void
	}

	declare interface render {
		(context: dojox.dtl.Context, tpl: dojox.dtl._DomTemplated): void
	}

	declare interface setTemplate {
		(template: String, context: dojox.dtl.Context): void
	}

	declare interface setTemplate {
		(template: dojo._base.url, context: dojox.dtl.Context): void
	}

			
}

declare module 'Context' {
		declare interface extend {
		(obj: dojox.dtl.Context): any
	}

	declare interface extend {
		(obj: Object): any
	}

	declare interface filter {
		(filter: dojox.dtl.Context): any
	}

	declare interface filter {
		(filter: Object): any
	}

	declare interface filter {
		(filter: String[]): any
	}

	declare interface get {
		(key: any, otherwise: any): any
	}

	declare interface getKeys {
		(): any[]
	}

	declare interface getThis {
		(): any
	}

	declare interface hasKey {
		(key: String): boolean
	}

	declare interface pop {
		(): void
	}

	declare interface push {
		(): any
	}

	declare interface setThis {
		(scope: Object): void
	}

	declare interface update {
		(dict: any): any
	}

			
}

declare module 'contrib' {
		declare interface objects {
		key(value: any, arg: any): any
	}

	declare interface dijit {
		widgetsInTemplate: boolean,
		AttachNode(keys: any, object: any): void,
		data_dojo_attach_event(parser: any, token: any): any,
		data_dojo_attach_point(parser: any, token: any): any,
		data_dojo_type(parser: any, token: any): any,
		dojoAttachEvent(parser: any, token: any): any,
		dojoAttachPoint(parser: any, token: any): any,
		dojoType(parser: any, token: any): any,
		DojoTypeNode(node: any, parsed: any): void,
		EventNode(command: any, obj: any): void,
		on(parser: any, token: any): any
	}

	declare interface data {
		bind_data(parser: any, token: any): any,
		bind_query(parser: any, token: any): any,
		BindDataNode(items: any, query: any, store: any, alias: any): void
	}

	declare interface dom {
		buffer(parser: any, token: any): any,
		BufferNode(nodelist: any, options: any): void,
		html(parser: any, token: any): any,
		style_(parser: any, token: any): any,
		StyleNode(styles: any): void
	}

			
}

declare module 'ext_dojo' {
		declare interface NodeList {
		(array: any): void
	}

			
}

declare module 'NodeList' {
		declare interface addClass {
		(className: String): void
	}

	declare interface addClass {
		(className: any[]): void
	}

	declare interface addClassFx {
		(cssClass: any, args: any): {
		type: Function,
		value: any
	}
	}

	declare interface addContent {
		(content: String, position: String): Function
	}

	declare interface addContent {
		(content: HTMLElement, position: String): Function
	}

	declare interface addContent {
		(content: Object, position: String): Function
	}

	declare interface addContent {
		(content: dojo.NodeList, position: String): Function
	}

	declare interface addContent {
		(content: String, position: number): Function
	}

	declare interface addContent {
		(content: HTMLElement, position: number): Function
	}

	declare interface addContent {
		(content: Object, position: number): Function
	}

	declare interface addContent {
		(content: dojo.NodeList, position: number): Function
	}

	declare interface adopt {
		(queryOrListOrNode: String, position: String): any
	}

	declare interface adopt {
		(queryOrListOrNode: any[], position: String): any
	}

	declare interface adopt {
		(queryOrListOrNode: HTMLElement, position: String): any
	}

	declare interface after {
		(content: String): any
	}

	declare interface after {
		(content: HTMLElement): any
	}

	declare interface after {
		(content: NodeList): any
	}

	declare interface andSelf {
		(): any
	}

	declare interface anim {
		(properties: Object, duration: number, easing: Function, onEnd: Function, delay: number): any
	}

	declare interface animateProperty {
		(args: Object): any
	}

	declare interface append {
		(content: String): any
	}

	declare interface append {
		(content: HTMLElement): any
	}

	declare interface append {
		(content: NodeList): any
	}

	declare interface appendTo {
		(query: String): any
	}

	declare interface at {
		(index: number[]): any
	}

	declare interface attr {
		(property: String, value: String): any
	}

	declare interface before {
		(content: String): any
	}

	declare interface before {
		(content: HTMLElement): any
	}

	declare interface before {
		(content: NodeList): any
	}

	declare interface children {
		(query: String): any
	}

	declare interface clone {
		(): any
	}

	declare interface closest {
		(query: String, root: String): any
	}

	declare interface closest {
		(query: String, root: HTMLElement): any
	}

	declare interface concat {
		(item: Object): any
	}

	declare interface connect {
		(methodName: String, objOrFunc: Object, funcName: String): void
	}

	declare interface connect {
		(methodName: String, objOrFunc: Function, funcName: String): void
	}

	declare interface connect {
		(methodName: String, objOrFunc: String, funcName: String): void
	}

	declare interface coords {
		(): void
	}

	declare interface data {
		(key: Object, value: any): any
	}

	declare interface data {
		(key: String, value: any): any
	}

	declare interface delegate {
		(selector: String, eventName: String, fn: Function): any
	}

	declare interface dtl {
		(template: String, context: Object): Function
	}

	declare interface empty {
		(): any
	}

	declare interface end {
		(): any
	}

	declare interface even {
		(): any
	}

	declare interface every {
		(callback: Function, thisObject: Object): any
	}

	declare interface fadeIn {
		(args: Object): any
	}

	declare interface fadeOut {
		(args: Object): any
	}

	declare interface filter {
		(filter: String): any
	}

	declare interface filter {
		(filter: Function): any
	}

	declare interface first {
		(): any
	}

	declare interface forEach {
		(callback: any, thisObj: any): Function
	}

	declare interface html {
		(value: String): any
	}

	declare interface html {
		(value: HTMLElement): any
	}

	declare interface html {
		(value: NodeList): any
	}

	declare interface indexOf {
		(value: Object, fromIndex: number): any
	}

	declare interface innerHTML {
		(value: String): any
	}

	declare interface innerHTML {
		(value: HTMLElement): any
	}

	declare interface innerHTML {
		(value: NodeList): any
	}

	declare interface insertAfter {
		(query: String): any
	}

	declare interface insertBefore {
		(query: String): any
	}

	declare interface instantiate {
		(declaredClass: String, properties: Object): any
	}

	declare interface instantiate {
		(declaredClass: Object, properties: Object): any
	}

	declare interface last {
		(): any
	}

	declare interface lastIndexOf {
		(value: Object, fromIndex: number): any
	}

	declare interface map {
		(func: Function, obj: Function): any
	}

	declare interface marginBox {
		(): void
	}

	declare interface next {
		(query: String): any
	}

	declare interface nextAll {
		(query: String): any
	}

	declare interface odd {
		(): any
	}

	declare interface on {
		(eventName: any, listener: any): any
	}

	declare interface orphan {
		(filter: String): any
	}

	declare interface parent {
		(query: String): any
	}

	declare interface parents {
		(query: String): any
	}

	declare interface place {
		(queryOrNode: String, position: String): any
	}

	declare interface place {
		(queryOrNode: HTMLElement, position: String): any
	}

	declare interface position {
		(): any
	}

	declare interface prepend {
		(content: String): any
	}

	declare interface prepend {
		(content: HTMLElement): any
	}

	declare interface prepend {
		(content: NodeList): any
	}

	declare interface prependTo {
		(query: String): any
	}

	declare interface prev {
		(query: String): any
	}

	declare interface prevAll {
		(query: String): any
	}

	declare interface query {
		(queryStr: String): any
	}

	declare interface remove {
		(filter: String): any
	}

	declare interface removeAttr {
		(name: String): void
	}

	declare interface removeClass {
		(className: String): any
	}

	declare interface removeClass {
		(className: any[]): any
	}

	declare interface removeClassFx {
		(cssClass: any, args: any): {
		type: Function,
		value: any
	}
	}

	declare interface removeData {
		(key: String): void
	}

	declare interface replaceAll {
		(query: String): any
	}

	declare interface replaceClass {
		(addClassStr: String, removeClassStr: String): void
	}

	declare interface replaceClass {
		(addClassStr: any[], removeClassStr: String): void
	}

	declare interface replaceClass {
		(addClassStr: String, removeClassStr: any[]): void
	}

	declare interface replaceClass {
		(addClassStr: any[], removeClassStr: any[]): void
	}

	declare interface replaceWith {
		(content: String): any
	}

	declare interface replaceWith {
		(content: HTMLElement): any
	}

	declare interface replaceWith {
		(content: NodeList): any
	}

	declare interface siblings {
		(query: String): any
	}

	declare interface slice {
		(begin: number, end: number): any
	}

	declare interface slideTo {
		(args: Object): any
	}

	declare interface some {
		(callback: Function, thisObject: Object): any
	}

	declare interface splice {
		(index: number, howmany: number, item: Object[]): any
	}

	declare interface style {
		(property: String, value: String): any
	}

	declare interface text {
		(value: String): any
	}

	declare interface toggleClass {
		(className: String, condition: boolean): void
	}

	declare interface toggleClassFx {
		(cssClass: any, force: any, args: any): {
		type: Function,
		value: any
	}
	}

	declare interface toString {
		(): any
	}

	declare interface val {
		(value: String): any
	}

	declare interface val {
		(value: any[]): any
	}

	declare interface wipeIn {
		(args: Object): any
	}

	declare interface wipeOut {
		(args: Object): any
	}

	declare interface wrap {
		(html: String): any
	}

	declare interface wrap {
		(html: HTMLElement): any
	}

	declare interface wrapAll {
		(html: String): any
	}

	declare interface wrapAll {
		(html: HTMLElement): any
	}

	declare interface wrapInner {
		(html: String): any
	}

	declare interface wrapInner {
		(html: HTMLElement): any
	}

	declare interface _nodeDataCache {
		
	}

			
}

declare module 'filter' {
		declare interface dates {
		date(value: any, arg: any): String,
		time(value: any, arg: any): String,
		timesince(value: any, arg: any): String,
		timeuntil(value: any, arg: any): String
	}

	declare interface htmlstrings {
		linebreaks(value: any): any,
		linebreaksbr(value: any): any,
		removetags(value: any, arg: any): any,
		striptags(value: any): any
	}

	declare interface integers {
		add(value: any, arg: any): number,
		get_digit(value: any, arg: any): number
	}

	declare interface logic {
		default_(value: any, arg: any): String,
		default_if_none(value: any, arg: any): String,
		divisibleby(value: any, arg: any): boolean,
		yesno(value: any, arg: any): any
	}

	declare interface misc {
		filesizeformat(value: any): String,
		phone2numeric(value: any): String,
		pluralize(value: any, arg: any): String,
		pprint(value: any): any
	}

	declare interface lists {
		dictsort(value: any, arg: any): any,
		dictsortreversed(value: any, arg: any): any,
		first(value: any): String,
		join(value: any, arg: any): any,
		length(value: any): any,
		length_is(value: any, arg: any): boolean,
		random(value: any): any,
		slice(value: any, arg: any): any,
		unordered_list(value: any): any
	}

	declare interface strings {
		addslashes(value: any): any,
		capfirst(value: any): number,
		center(value: any, arg: any): String,
		cut(value: any, arg: any): any,
		fix_ampersands(value: any): any,
		floatformat(value: any, arg: any): any,
		iriencode(value: any): any,
		linenumbers(value: any): any,
		ljust(value: any, arg: any): String,
		lower(value: any): any,
		make_list(value: any): any[],
		rjust(value: any, arg: any): String,
		slugify(value: any): any,
		stringformat(value: any, arg: any): any,
		title(value: any): String,
		truncatewords(value: any, arg: number): any,
		truncatewords_html(value: any, arg: any): String,
		upper(value: any): any,
		urlencode(value: any): any,
		urlize(value: any): any,
		urlizetrunc(value: any, arg: any): any,
		wordcount(value: any): number,
		wordwrap(value: String, arg: any): any
	}

			
}

declare module 'misc' {
		declare interface _phone2numeric {
		a: number,
		b: number,
		c: number,
		d: number,
		e: number,
		f: number,
		g: number,
		h: number,
		i: number,
		j: number,
		k: number,
		l: number,
		m: number,
		n: number,
		o: number,
		p: number,
		r: number,
		s: number,
		t: number,
		u: number,
		v: number,
		w: number,
		x: number,
		y: number
	}

			
}

declare module 'strings' {
		declare interface _strings {
		
	}

	declare interface _truncate_singlets {
		area: boolean,
		base: boolean,
		br: boolean,
		col: boolean,
		hr: boolean,
		img: boolean,
		input: boolean,
		link: boolean,
		param: boolean
	}

			
}

declare module 'render' {
		declare interface dom {
		Render(attachPoint: HTMLElement, tpl: dojox.dtl._DomTemplated): void
	}

	declare interface html {
		Render(attachPoint: HTMLElement, tpl: dojox.dtl._DomTemplated): void
	}

			
}

declare module 'tag' {
		declare interface date {
		now(parser: any, token: any): void,
		NowNode(format: any, node: any): void
	}

	declare interface logic {
		for_(parser: any, token: any): any,
		ForNode(assign: any, loop: any, reversed: any, nodelist: any): void,
		if_(parser: any, token: any): any,
		ifequal(parser: any, token: any): any,
		IfEqualNode(var1: any, var2: any, trues: any, falses: any, negate: any): void,
		IfNode(bools: any, trues: any, falses: any, type: any): void,
		ifnotequal(parser: any, token: any): any
	}

	declare interface loader {
		block(parser: any, token: any): any,
		BlockNode(name: any, nodelist: any): void,
		extends_(parser: any, token: any): any,
		ExtendsNode(getTemplate: any, nodelist: any, shared: any, parent: any, key: any): void,
		include(parser: any, token: any): any,
		IncludeNode(path: any, constant: any, getTemplate: any, text: any, parsed: any): void,
		ssi(parser: any, token: any): any
	}

	declare interface loop {
		cycle(parser: any, token: any): any,
		CycleNode(cyclevars: any, name: any, text: any, shared: any): void,
		ifchanged(parser: any, token: any): any,
		IfChangedNode(nodes: any, vars: any, shared: any): void,
		regroup(parser: any, token: any): any,
		RegroupNode(expression: any, key: any, alias: any): void
	}

	declare interface misc {
		comment(parser: any, token: any): any,
		debug(parser: any, token: any): any,
		DebugNode(text: any): void,
		filter(parser: any, token: any): any,
		FilterNode(varnode: any, nodelist: any): void,
		firstof(parser: any, token: any): any,
		FirstOfNode(vars: any, text: any): void,
		spaceless(parser: any, token: any): any,
		SpacelessNode(nodelist: any, text: any): void,
		templatetag(parser: any, token: any): any,
		TemplateTagNode(tag: any, text: any): void,
		widthratio(parser: any, token: any): any,
		WidthRatioNode(current: any, max: any, width: any, text: any): void,
		with_(parser: any, token: any): any,
		WithNode(target: any, alias: any, nodelist: any): void
	}

			
}

declare module 'utils' {
		declare interface date {
		DateFormat(format: String): void
	}

			
}

declare module 'dojox/dtl' {
					declare module.exports: dtl


}

declare module 'dojox/dtl/_Templated' {
					declare module.exports: _Templated


}

declare module 'dojox/dtl/Context' {
					declare module.exports: Context


}

declare module 'dojox/dtl/_DomTemplated' {
					declare module.exports: _DomTemplated


}

declare module 'dojox/dtl/DomInline' {
					declare module.exports: DomInline


}

declare module 'dojox/dtl/Inline' {
					declare module.exports: Inline


}

declare module 'dojox/dtl/_base' {
					declare module.exports: _base


}

declare module 'dojox/dtl/_base._base' {
					declare module.exports: _base


}

declare module 'dojox/dtl/_base.BOOLS' {
					declare module.exports: BOOLS


}

declare module 'dojox/dtl/_base.data' {
					declare module.exports: data


}

declare module 'dojox/dtl/_base.date' {
					declare module.exports: date


}

declare module 'dojox/dtl/_base.dates' {
					declare module.exports: dates


}

declare module 'dojox/dtl/_base.dijit' {
					declare module.exports: dijit


}

declare module 'dojox/dtl/_base.html' {
					declare module.exports: html


}

declare module 'dojox/dtl/_base.htmlstrings' {
					declare module.exports: htmlstrings


}

declare module 'dojox/dtl/_base.dom' {
					declare module.exports: dom


}

declare module 'dojox/dtl/_base.integers' {
					declare module.exports: integers


}

declare module 'dojox/dtl/_base.logic' {
					declare module.exports: logic


}

declare module 'dojox/dtl/_base.loader' {
					declare module.exports: loader


}

declare module 'dojox/dtl/_base.loop' {
					declare module.exports: loop


}

declare module 'dojox/dtl/_base.misc' {
					declare module.exports: misc


}

declare module 'dojox/dtl/_base.objects' {
					declare module.exports: objects


}

declare module 'dojox/dtl/_base.strings' {
					declare module.exports: strings


}

declare module 'dojox/dtl/_base.register' {
					declare module.exports: register


}

declare module 'dojox/dtl/_base.text' {
					declare module.exports: text


}

declare module 'dojox/dtl/dom' {
					declare module.exports: dom


}

declare module 'dojox/dtl/dom._uppers' {
					declare module.exports: _uppers


}

declare module 'dojox/dtl/dom._attributes' {
					declare module.exports: _attributes


}

declare module 'dojox/dtl/contrib/data' {
					declare module.exports: data


}

declare module 'dojox/dtl/contrib/objects' {
					declare module.exports: objects


}

declare module 'dojox/dtl/contrib/dom' {
					declare module.exports: dom


}

declare module 'dojox/dtl/contrib/dijit' {
					declare module.exports: dijit


}

declare module 'dojox/dtl/ext-dojo/NodeList' {
					declare module.exports: NodeList


}

declare module 'dojox/dtl/ext-dojo/NodeList._nodeDataCache' {
					declare module.exports: _nodeDataCache


}

declare module 'dojox/dtl/filter/dates' {
					declare module.exports: dates


}

declare module 'dojox/dtl/filter/htmlstrings' {
					declare module.exports: htmlstrings


}

declare module 'dojox/dtl/filter/integers' {
					declare module.exports: integers


}

declare module 'dojox/dtl/filter/logic' {
					declare module.exports: logic


}

declare module 'dojox/dtl/filter/misc' {
					declare module.exports: misc


}

declare module 'dojox/dtl/filter/misc._phone2numeric' {
					declare module.exports: _phone2numeric


}

declare module 'dojox/dtl/filter/lists' {
					declare module.exports: lists


}

declare module 'dojox/dtl/filter/strings' {
					declare module.exports: strings


}

declare module 'dojox/dtl/filter/strings._strings' {
					declare module.exports: _strings


}

declare module 'dojox/dtl/filter/strings._truncate_singlets' {
					declare module.exports: _truncate_singlets


}

declare module 'dojox/dtl/render/html' {
					declare module.exports: html


}

declare module 'dojox/dtl/render/dom' {
					declare module.exports: dom


}

declare module 'dojox/dtl/tag/date' {
					declare module.exports: date


}

declare module 'dojox/dtl/tag/loader' {
					declare module.exports: loader


}

declare module 'dojox/dtl/tag/logic' {
					declare module.exports: logic


}

declare module 'dojox/dtl/tag/loop' {
					declare module.exports: loop


}

declare module 'dojox/dtl/tag/misc' {
					declare module.exports: misc


}

declare module 'dojox/dtl/utils/date' {
					declare module.exports: date


}