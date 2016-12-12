import type { highlight } from 'npm$namespace$dojox'

declare module 'dojox.highlight' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface highlight {
		
	}

			
}

declare module 'highlight' {
		declare interface _base {
		constants: Object,
		languages: string,
		Code(props: Object, node: String): void,
		Code(props: Object, node: HTMLElement): void
	}

			
}

declare module '_base' {
		declare interface constants {
		APOS_STRING_MODE: Object,
		BACKSLASH_ESCAPE: Object,
		C_BLOCK_COMMENT_MODE: Object,
		C_LINE_COMMENT_MODE: Object,
		C_NUMBER_MODE: Object,
		C_NUMBER_RE: string,
		HASH_COMMENT_MODE: Object,
		IDENT_RE: string,
		NUMBER_RE: string,
		QUOTE_STRING_MODE: Object,
		UNDERSCORE_IDENT_RE: string
	}

			
}

declare module 'pygments' {
		declare interface css {
		defaultMode: Object,
		modes: any[]
	}

	declare interface html {
		case_insensitive: boolean,
		defaultMode: Object,
		modes: any[]
	}

	declare interface javascript {
		defaultMode: Object,
		modes: any[]
	}

	declare interface xml {
		defaultMode: Object,
		modes: any[]
	}

			
}

declare module 'css' {
		declare interface defaultMode {
		contains: any[],
		keywords: Object,
		lexems: any[]
	}

	declare interface defaultMode {
		contains: any[],
		illegal: string,
		keywords: Object,
		lexems: any[]
	}

			
}

declare module 'html' {
		declare interface defaultMode {
		contains: any[]
	}

	declare interface defaultMode {
		contains: any[]
	}

	declare interface HTML_ATTR {
		begin: string,
		className: string,
		end: string
	}

	declare interface HTML_VALUE {
		begin: string,
		className: string,
		end: string
	}

	declare interface HTML_DOCTYPE {
		begin: string,
		className: string,
		end: string,
		relevance: number
	}

	declare interface HTML_TAGS {
		a: number,
		abbr: number,
		acronym: number,
		address: number,
		applet: number,
		area: number,
		b: number,
		base: number,
		basefont: number,
		bdo: number,
		big: number,
		blockquote: number,
		body: number,
		br: number,
		button: number,
		caption: number,
		center: number,
		cite: number,
		code: number,
		col: number,
		colgroup: number,
		dd: number,
		del: number,
		dfn: number,
		dir: number,
		div: number,
		dl: number,
		dt: number,
		em: number,
		fieldset: number,
		font: number,
		form: number,
		frame: number,
		frameset: number,
		h1: number,
		h2: number,
		h3: number,
		h4: number,
		h5: number,
		h6: number,
		head: number,
		hr: number,
		html: number,
		i: number,
		iframe: number,
		img: number,
		input: number,
		ins: number,
		isindex: number,
		kbd: number,
		label: number,
		legend: number,
		li: number,
		link: number,
		map: number,
		menu: number,
		meta: number,
		noframes: number,
		noscript: number,
		object: number,
		ol: number,
		optgroup: number,
		option: number,
		p: number,
		param: number,
		pre: number,
		q: number,
		s: number,
		samp: number,
		script: number,
		select: number,
		small: number,
		span: number,
		strike: number,
		strong: number,
		style: number,
		sub: number,
		sup: number,
		table: number,
		tbody: number,
		td: number,
		textarea: number,
		tfoot: number,
		th: number,
		thead: number,
		title: number,
		tr: number,
		tt: number,
		u: number,
		ul: number,
		var: number,
		xml: number,
		xmlns: number
	}

			
}

declare module 'javascript' {
		declare interface defaultMode {
		contains: any[],
		keywords: Object,
		lexems: any[]
	}

	declare interface defaultMode {
		contains: any[],
		keywords: Object,
		lexems: any[]
	}

			
}

declare module 'xml' {
		declare interface defaultMode {
		contains: any[]
	}

	declare interface XML_ATTR {
		begin: string,
		className: string,
		contains: any[],
		end: string
	}

	declare interface defaultMode {
		contains: any[]
	}

	declare interface XML_VALUE {
		begin: string,
		className: string,
		end: string
	}

	declare interface XML_COMMENT {
		begin: string,
		className: string,
		end: string
	}

			
}

declare module 'languages' {
		declare interface cpp {
		defaultMode: Object,
		modes: any[]
	}

	declare interface css {
		case_insensitive: boolean,
		defaultMode: Object,
		modes: any[]
	}

	declare interface django {
		case_insensitive: boolean,
		defaultMode: Object,
		modes: any[]
	}

	declare interface delphi {
		case_insensitive: boolean,
		defaultMode: Object,
		modes: any[]
	}

	declare interface groovy {
		defaultMode: Object,
		GROOVY_KEYWORDS: Object,
		modes: any[]
	}

	declare interface html {
		case_insensitive: boolean,
		defaultMode: Object,
		HTML_ATTR: Object,
		HTML_DOCTYPE: Object,
		HTML_TAGS: Object,
		HTML_VALUE: Object,
		modes: any[]
	}

	declare interface java {
		defaultMode: Object,
		modes: any[]
	}

	declare interface javascript {
		defaultMode: Object,
		modes: any[]
	}

	declare interface python {
		defaultMode: Object,
		modes: any[]
	}

	declare interface sql {
		case_insensitive: boolean,
		defaultMode: Object,
		modes: any[]
	}

	declare interface xquery {
		case_insensitive: boolean,
		defaultMode: Object,
		modes: any[],
		XQUERY_COMMENT: Object
	}

	declare interface xml {
		case_insensitive: boolean,
		defaultMode: Object,
		modes: any[],
		XML_ATTR: Object,
		XML_COMMENT: Object,
		XML_VALUE: Object
	}

			
}

declare module 'cpp' {
		declare interface defaultMode {
		contains: any[],
		illegal: string,
		keywords: Object,
		lexems: any[]
	}

			
}

declare module 'django' {
		declare interface defaultMode {
		contains: any[]
	}

			
}

declare module 'delphi' {
		declare interface defaultMode {
		contains: any[],
		illegal: string,
		keywords: Object,
		lexems: any[]
	}

			
}

declare module 'groovy' {
		declare interface defaultMode {
		contains: any[],
		illegal: string,
		keywords: Object,
		lexems: any[]
	}

	declare interface GROOVY_KEYWORDS {
		abstract: number,
		assert: number,
		boolean: number,
		break: number,
		byte: number,
		case: number,
		catch: number,
		char: number,
		class: number,
		const: number,
		continue: number,
		def: number,
		do: number,
		double: number,
		else: number,
		extends: number,
		false: number,
		final: number,
		finally: number,
		float: number,
		for: number,
		goto: number,
		if: number,
		implements: number,
		import: number,
		instanceof: number,
		int: number,
		interface: number,
		long: number,
		native: number,
		new: number,
		package: number,
		private: number,
		protected: number,
		public: number,
		return: number,
		short: number,
		static: number,
		strictfp: number,
		super: number,
		switch: number,
		synchronized: number,
		this: number,
		throw: number,
		throws: number,
		transient: number,
		true: number,
		try: number,
		void: number,
		volatile: number,
		while: number
	}

			
}

declare module 'java' {
		declare interface defaultMode {
		contains: any[],
		illegal: string,
		keywords: Object,
		lexems: any[]
	}

			
}

declare module 'python' {
		declare interface defaultMode {
		contains: any[],
		illegal: string,
		keywords: Object,
		lexems: any[]
	}

			
}

declare module 'sql' {
		declare interface defaultMode {
		contains: any[],
		keywords: Object,
		lexems: any[]
	}

			
}

declare module 'xquery' {
		declare interface defaultMode {
		contains: any[],
		keywords: Object,
		lexems: any[]
	}

	declare interface XQUERY_COMMENT {
		begin: string,
		className: string,
		end: string
	}

			
}

declare module 'widget' {
				declare class Code extends dijit$_Widget, dijit$_Templated {
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
		listType: string;
		set(property: "listType", value: string): void;
		get(property: "listType"): string;
		watch(
		property: "listType", callback: {
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
		range: Object;
		set(property: "range", value: Object): void;
		get(property: "range"): Object;
		watch(
		property: "range", callback: {
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
		setRange(range: any[]): void;
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

declare module 'dojox/highlight' {
					declare module.exports: highlight


}

declare module 'dojox/highlight/_base' {
					declare module.exports: _base


}

declare module 'dojox/highlight/_base.constants' {
					declare module.exports: constants


}

declare module 'dojox/highlight/languages/css' {
					declare module.exports: css


}

declare module 'dojox/highlight/languages/css.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/delphi' {
					declare module.exports: delphi


}

declare module 'dojox/highlight/languages/delphi.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/cpp' {
					declare module.exports: cpp


}

declare module 'dojox/highlight/languages/cpp.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/django' {
					declare module.exports: django


}

declare module 'dojox/highlight/languages/django.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/html' {
					declare module.exports: html


}

declare module 'dojox/highlight/languages/html.HTML_ATTR' {
					declare module.exports: HTML_ATTR


}

declare module 'dojox/highlight/languages/html.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/html.HTML_VALUE' {
					declare module.exports: HTML_VALUE


}

declare module 'dojox/highlight/languages/html.HTML_DOCTYPE' {
					declare module.exports: HTML_DOCTYPE


}

declare module 'dojox/highlight/languages/html.HTML_TAGS' {
					declare module.exports: HTML_TAGS


}

declare module 'dojox/highlight/languages/groovy' {
					declare module.exports: groovy


}

declare module 'dojox/highlight/languages/groovy.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/groovy.GROOVY_KEYWORDS' {
					declare module.exports: GROOVY_KEYWORDS


}

declare module 'dojox/highlight/languages/javascript' {
					declare module.exports: javascript


}

declare module 'dojox/highlight/languages/javascript.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/java' {
					declare module.exports: java


}

declare module 'dojox/highlight/languages/java.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/python' {
					declare module.exports: python


}

declare module 'dojox/highlight/languages/python.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/sql' {
					declare module.exports: sql


}

declare module 'dojox/highlight/languages/sql.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/xquery' {
					declare module.exports: xquery


}

declare module 'dojox/highlight/languages/xquery.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/xquery.XQUERY_COMMENT' {
					declare module.exports: XQUERY_COMMENT


}

declare module 'dojox/highlight/languages/xml' {
					declare module.exports: xml


}

declare module 'dojox/highlight/languages/xml.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/xml.XML_ATTR' {
					declare module.exports: XML_ATTR


}

declare module 'dojox/highlight/languages/xml.XML_COMMENT' {
					declare module.exports: XML_COMMENT


}

declare module 'dojox/highlight/languages/xml.XML_VALUE' {
					declare module.exports: XML_VALUE


}

declare module 'dojox/highlight/languages/pygments/css' {
					declare module.exports: css


}

declare module 'dojox/highlight/languages/pygments/css.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/pygments/xml' {
					declare module.exports: xml


}

declare module 'dojox/highlight/languages/pygments/xml.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/pygments/html' {
					declare module.exports: html


}

declare module 'dojox/highlight/languages/pygments/html.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/languages/pygments/javascript' {
					declare module.exports: javascript


}

declare module 'dojox/highlight/languages/pygments/javascript.defaultMode' {
					declare module.exports: defaultMode


}

declare module 'dojox/highlight/widget/Code' {
					declare module.exports: Code


}