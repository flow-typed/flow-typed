

declare module 'space-pen' {
		declare interface JQuery {
		view(): any,
		views(): any[]
	}

	declare interface JQuery {
		scrollBottom(): number,
		scrollBottom(newValue: number): JQuery,
		scrollDown(): JQuery,
		scrollUp(): JQuery,
		scrollToTop(): JQuery,
		scrollToBottom(): JQuery,
		scrollRight(): number,
		scrollRight(newValue: number): JQuery,
		pageUp(): JQuery,
		pageDown(): JQuery,
		isOnDom(): boolean,
		isVisible(): boolean,
		isHidden(): boolean,
		isDisabled(): boolean,
		enable(): JQuery,
		disable(): JQuery,
		insertAt(index: number, element: any): JQuery,
		removeAt(index: number): JQuery,
		indexOf(child: any): any,
		containsElement(element: any): boolean,
		preempt(eventName: any, handler: Function): any,
		handlers(eventName: any): any,
		hasParent(): boolean,
		hasFocus(): boolean,
		flashError(): number,
		trueHeight(): any,
		trueWidth(): any,
		document(eventName: any, docString: string): any,
		events(): any,
		command(eventName: any, handler: any): any,
		command(eventName: any, selector: any, handler: any): any,
		command(eventName: any, selector: any, options: any, handler: any): any,
		iconSize(size: number): void,
		intValue(): number
	}

		declare class View  {
		builderStack: Builder[];
		subview(name: any, view: any): void;
		text(str: string): void;
		tag(tagName: any, ...args: any[]): void;
		raw(str: string): void;
		pushBuilder(): void;
		popBuilder(): Builder;
		buildHtml(fn: () => void): string[];
		render(fn: () => void): JQuery;
		content(...args: any[]): void;
		a(...args: any[]): void;
		abbr(...args: any[]): void;
		address(...args: any[]): void;
		article(...args: any[]): void;
		aside(...args: any[]): void;
		audio(...args: any[]): void;
		b(...args: any[]): void;
		bdi(...args: any[]): void;
		bdo(...args: any[]): void;
		blockquote(...args: any[]): void;
		body(...args: any[]): void;
		button(...args: any[]): void;
		canvas(...args: any[]): void;
		caption(...args: any[]): void;
		cite(...args: any[]): void;
		code(...args: any[]): void;
		colgroup(...args: any[]): void;
		datalist(...args: any[]): void;
		dd(...args: any[]): void;
		del(...args: any[]): void;
		details(...args: any[]): void;
		dfn(...args: any[]): void;
		div(...args: any[]): void;
		dl(...args: any[]): void;
		dt(...args: any[]): void;
		em(...args: any[]): void;
		fieldset(...args: any[]): void;
		figcaption(...args: any[]): void;
		figure(...args: any[]): void;
		footer(...args: any[]): void;
		form(...args: any[]): void;
		h1(...args: any[]): void;
		h2(...args: any[]): void;
		h3(...args: any[]): void;
		h4(...args: any[]): void;
		h5(...args: any[]): void;
		h6(...args: any[]): void;
		head(...args: any[]): void;
		header(...args: any[]): void;
		hgroup(...args: any[]): void;
		html(...args: any[]): void;
		i(...args: any[]): void;
		iframe(...args: any[]): void;
		ins(...args: any[]): void;
		kbd(...args: any[]): void;
		label(...args: any[]): void;
		legend(...args: any[]): void;
		li(...args: any[]): void;
		map(...args: any[]): void;
		mark(...args: any[]): void;
		menu(...args: any[]): void;
		meter(...args: any[]): void;
		nav(...args: any[]): void;
		noscript(...args: any[]): void;
		object(...args: any[]): void;
		ol(...args: any[]): void;
		optgroup(...args: any[]): void;
		option(...args: any[]): void;
		output(...args: any[]): void;
		p(...args: any[]): void;
		pre(...args: any[]): void;
		progress(...args: any[]): void;
		q(...args: any[]): void;
		rp(...args: any[]): void;
		rt(...args: any[]): void;
		ruby(...args: any[]): void;
		s(...args: any[]): void;
		samp(...args: any[]): void;
		script(...args: any[]): void;
		section(...args: any[]): void;
		select(...args: any[]): void;
		small(...args: any[]): void;
		span(...args: any[]): void;
		strong(...args: any[]): void;
		style(...args: any[]): void;
		sub(...args: any[]): void;
		summary(...args: any[]): void;
		sup(...args: any[]): void;
		table(...args: any[]): void;
		tbody(...args: any[]): void;
		td(...args: any[]): void;
		textarea(...args: any[]): void;
		tfoot(...args: any[]): void;
		th(...args: any[]): void;
		thead(...args: any[]): void;
		time(...args: any[]): void;
		title(...args: any[]): void;
		tr(...args: any[]): void;
		u(...args: any[]): void;
		ul(...args: any[]): void;
		video(...args: any[]): void;
		area(...args: any[]): void;
		base(...args: any[]): void;
		br(...args: any[]): void;
		col(...args: any[]): void;
		command(...args: any[]): void;
		embed(...args: any[]): void;
		hr(...args: any[]): void;
		img(...args: any[]): void;
		input(...args: any[]): void;
		keygen(...args: any[]): void;
		link(...args: any[]): void;
		meta(...args: any[]): void;
		param(...args: any[]): void;
		source(...args: any[]): void;
		track(...args: any[]): void;
		wbrk(...args: any[]): void;
		initialize(view: View, args: any): void;
		constructor(...args: any[]): this;
		buildHtml(params: any): any;
		wireOutlets(view: View): void;
		bindEventHandlers(view: View): void;
		pushStack(elems: any): any;
		end(): any;
		command(commandName: any, selector: any, options: any, handler: any): any;
		preempt(eventName: any, handler: any): any
	}

	declare class Builder  {
		document: any[];
		postProcessingSteps: any[];
		buildHtml(): any[];
		tag(name: string, ...args: any[]): void;
		openTag(name: string, attributes: any): void;
		closeTag(name: string): void;
		text(str: string): void;
		raw(str: string): void;
		subview(outletName: any, subview: View): void;
		extractOptions(args: any): any
	}

	declare class View  {
		builderStack: Builder[];
		subview(name: any, view: any): void;
		text(str: string): void;
		tag(tagName: any, ...args: any[]): void;
		raw(str: string): void;
		pushBuilder(): void;
		popBuilder(): Builder;
		buildHtml(fn: () => void): string[];
		render(fn: () => void): JQuery;
		content(...args: any[]): void;
		a(...args: any[]): any;
		abbr(...args: any[]): any;
		address(...args: any[]): any;
		article(...args: any[]): any;
		aside(...args: any[]): any;
		audio(...args: any[]): any;
		b(...args: any[]): any;
		bdi(...args: any[]): any;
		bdo(...args: any[]): any;
		blockquote(...args: any[]): any;
		body(...args: any[]): any;
		button(...args: any[]): any;
		canvas(...args: any[]): any;
		caption(...args: any[]): any;
		cite(...args: any[]): any;
		code(...args: any[]): any;
		colgroup(...args: any[]): any;
		datalist(...args: any[]): any;
		dd(...args: any[]): any;
		del(...args: any[]): any;
		details(...args: any[]): any;
		dfn(...args: any[]): any;
		div(...args: any[]): any;
		dl(...args: any[]): any;
		dt(...args: any[]): any;
		em(...args: any[]): any;
		fieldset(...args: any[]): any;
		figcaption(...args: any[]): any;
		figure(...args: any[]): any;
		footer(...args: any[]): any;
		form(...args: any[]): any;
		h1(...args: any[]): any;
		h2(...args: any[]): any;
		h3(...args: any[]): any;
		h4(...args: any[]): any;
		h5(...args: any[]): any;
		h6(...args: any[]): any;
		head(...args: any[]): any;
		header(...args: any[]): any;
		hgroup(...args: any[]): any;
		html(...args: any[]): any;
		i(...args: any[]): any;
		iframe(...args: any[]): any;
		ins(...args: any[]): any;
		kbd(...args: any[]): any;
		label(...args: any[]): any;
		legend(...args: any[]): any;
		li(...args: any[]): any;
		map(...args: any[]): any;
		mark(...args: any[]): any;
		menu(...args: any[]): any;
		meter(...args: any[]): any;
		nav(...args: any[]): any;
		noscript(...args: any[]): any;
		object(...args: any[]): any;
		ol(...args: any[]): any;
		optgroup(...args: any[]): any;
		option(...args: any[]): any;
		output(...args: any[]): any;
		p(...args: any[]): any;
		pre(...args: any[]): any;
		progress(...args: any[]): any;
		q(...args: any[]): any;
		rp(...args: any[]): any;
		rt(...args: any[]): any;
		ruby(...args: any[]): any;
		s(...args: any[]): any;
		samp(...args: any[]): any;
		script(...args: any[]): any;
		section(...args: any[]): any;
		select(...args: any[]): any;
		small(...args: any[]): any;
		span(...args: any[]): any;
		strong(...args: any[]): any;
		style(...args: any[]): any;
		sub(...args: any[]): any;
		summary(...args: any[]): any;
		sup(...args: any[]): any;
		table(...args: any[]): any;
		tbody(...args: any[]): any;
		td(...args: any[]): any;
		textarea(...args: any[]): any;
		tfoot(...args: any[]): any;
		th(...args: any[]): any;
		thead(...args: any[]): any;
		time(...args: any[]): any;
		title(...args: any[]): any;
		tr(...args: any[]): any;
		u(...args: any[]): any;
		ul(...args: any[]): any;
		video(...args: any[]): any;
		area(...args: any[]): any;
		base(...args: any[]): any;
		br(...args: any[]): any;
		col(...args: any[]): any;
		command(...args: any[]): any;
		embed(...args: any[]): any;
		hr(...args: any[]): any;
		img(...args: any[]): any;
		input(...args: any[]): any;
		keygen(...args: any[]): any;
		link(...args: any[]): any;
		meta(...args: any[]): any;
		param(...args: any[]): any;
		source(...args: any[]): any;
		track(...args: any[]): any;
		wbrk(...args: any[]): any;
		initialize(view: View, args: any): void;
		constructor(...args: any[]): this;
		buildHtml(params: any): any;
		wireOutlets(view: View): void;
		bindEventHandlers(view: View): void;
		pushStack(elems: any): any;
		end(): any;
		command(eventName: string, handler: any): any;
		command(eventName: string, selector: any, handler: any): any;
		command(eventName: string, selector: any, options: any, handler: any): any;
		preempt(eventName: any, handler: any): any
	}

	declare class Builder  {
		document: any[];
		postProcessingSteps: any[];
		buildHtml(): any[];
		tag(name: string, ...args: any[]): void;
		openTag(name: string, attributes: any): void;
		closeTag(name: string): void;
		text(str: string): void;
		raw(str: string): void;
		subview(outletName: any, subview: View): void;
		extractOptions(args: any): any
	}

	
}