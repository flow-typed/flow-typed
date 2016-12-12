

declare module 'react-0.13.3' {
					
}

declare module 'npm$namespace$___React' {
	declare type ReactType = ComponentClass<any> | string;

	declare type HTMLElement = DOMElement<HTMLAttributes>;

	declare type SVGElement = DOMElement<SVGAttributes>;

	declare type HTMLFactory = DOMFactory<HTMLAttributes>;

	declare type SVGFactory = DOMFactory<SVGAttributes>;

	declare type SVGElementFactory = DOMFactory<SVGElementAttributes>;

	declare type ReactText = string | number;

	declare type ReactChild = ReactElement<any> | ReactText;

	declare type ReactFragment = {
		
	} | Array<ReactChild | any[] | boolean>;

	declare type ReactNode = ReactChild | ReactFragment | boolean;

	declare type HTMLComponent = DOMComponent<HTMLAttributes>;

	declare type SVGComponent = DOMComponent<SVGAttributes>;

	declare interface ReactElement<P> {
		type: string | ComponentClass<P>,
		props: P,
		key: string | number,
		ref: string | ((component: Component<P, any>) => any)
	}

	declare interface ClassicElement<P> {
		type: string | ClassicComponentClass<P>,
		ref: string | ((component: ClassicComponent<P, any>) => any)
	}

	declare interface DOMElement<P> {
		type: string,
		ref: string | ((component: DOMComponent<P>) => any)
	}

	declare interface Factory<P> {
		(props?: P, ...children: ReactNode[]): ReactElement<P>
	}

	declare interface ClassicFactory<P> {
		(props?: P, ...children: ReactNode[]): ClassicElement<P>
	}

	declare interface DOMFactory<P> {
		(props?: P, ...children: ReactNode[]): DOMElement<P>
	}

	declare interface ClassicComponent<P, S> {
		replaceState(nextState: S, callback?: () => any): void,
		getDOMNode<TElement>(): TElement,
		getDOMNode(): Element,
		isMounted(): boolean,
		getInitialState(): S,
		setProps(nextProps: P, callback?: () => any): void,
		replaceProps(nextProps: P, callback?: () => any): void
	}

	declare interface DOMComponent<P> {
		tagName: string
	}

	declare interface ChildContextProvider<CC> {
		getChildContext(): CC
	}

	declare interface ComponentClass<P> {
		new (props?: P, context?: any): Component<P, any>,
		propTypes?: ValidationMap<P>,
		contextTypes?: ValidationMap<any>,
		childContextTypes?: ValidationMap<any>,
		defaultProps?: P
	}

	declare interface ClassicComponentClass<P> {
		new (props?: P, context?: any): ClassicComponent<P, any>,
		getDefaultProps(): P,
		displayName?: string
	}

	declare interface ComponentLifecycle<P, S> {
		componentWillMount(): void,
		componentDidMount(): void,
		componentWillReceiveProps(nextProps: P, nextContext: any): void,
		shouldComponentUpdate(nextProps: P, nextState: S, nextContext: any): boolean,
		componentWillUpdate(nextProps: P, nextState: S, nextContext: any): void,
		componentDidUpdate(prevProps: P, prevState: S, prevContext: any): void,
		componentWillUnmount(): void
	}

	declare interface Mixin<P, S> {
		mixins?: Mixin<P, S>,
		statics?: {
		[key: string]: any
	},
		displayName?: string,
		propTypes?: ValidationMap<any>,
		contextTypes?: ValidationMap<any>,
		childContextTypes?: ValidationMap<any>,
		getDefaultProps(): P,
		getInitialState(): S
	}

	declare interface ComponentSpec<P, S> {
		render(): ReactElement<any>,
		[propertyName: string]: any
	}

	declare interface SyntheticEvent {
		bubbles: boolean,
		cancelable: boolean,
		currentTarget: EventTarget,
		defaultPrevented: boolean,
		eventPhase: number,
		isTrusted: boolean,
		nativeEvent: Event,
		preventDefault(): void,
		stopPropagation(): void,
		target: EventTarget,
		timeStamp: Date,
		type: string
	}

	declare interface DragEvent {
		dataTransfer: DataTransfer
	}

	declare interface ClipboardEvent {
		clipboardData: DataTransfer
	}

	declare interface KeyboardEvent {
		altKey: boolean,
		charCode: number,
		ctrlKey: boolean,
		getModifierState(key: string): boolean,
		key: string,
		keyCode: number,
		locale: string,
		location: number,
		metaKey: boolean,
		repeat: boolean,
		shiftKey: boolean,
		which: number
	}

	declare interface FocusEvent {
		relatedTarget: EventTarget
	}

	declare interface FormEvent {
		
	}

	declare interface MouseEvent {
		altKey: boolean,
		button: number,
		buttons: number,
		clientX: number,
		clientY: number,
		ctrlKey: boolean,
		getModifierState(key: string): boolean,
		metaKey: boolean,
		pageX: number,
		pageY: number,
		relatedTarget: EventTarget,
		screenX: number,
		screenY: number,
		shiftKey: boolean
	}

	declare interface TouchEvent {
		altKey: boolean,
		changedTouches: TouchList,
		ctrlKey: boolean,
		getModifierState(key: string): boolean,
		metaKey: boolean,
		shiftKey: boolean,
		targetTouches: TouchList,
		touches: TouchList
	}

	declare interface UIEvent {
		detail: number,
		view: AbstractView
	}

	declare interface WheelEvent {
		deltaMode: number,
		deltaX: number,
		deltaY: number,
		deltaZ: number
	}

	declare interface EventHandler<E> {
		(event: E): void
	}

	declare interface DragEventHandler {
		
	}

	declare interface ClipboardEventHandler {
		
	}

	declare interface KeyboardEventHandler {
		
	}

	declare interface FocusEventHandler {
		
	}

	declare interface FormEventHandler {
		
	}

	declare interface MouseEventHandler {
		
	}

	declare interface TouchEventHandler {
		
	}

	declare interface UIEventHandler {
		
	}

	declare interface WheelEventHandler {
		
	}

	declare interface Props<T> {
		children?: ReactNode,
		key?: string | number,
		ref?: string | ((component: T) => any)
	}

	declare interface DOMAttributesBase<T> {
		onCopy?: ClipboardEventHandler,
		onCut?: ClipboardEventHandler,
		onPaste?: ClipboardEventHandler,
		onKeyDown?: KeyboardEventHandler,
		onKeyPress?: KeyboardEventHandler,
		onKeyUp?: KeyboardEventHandler,
		onFocus?: FocusEventHandler,
		onBlur?: FocusEventHandler,
		onChange?: FormEventHandler,
		onInput?: FormEventHandler,
		onSubmit?: FormEventHandler,
		onClick?: MouseEventHandler,
		onContextMenu?: MouseEventHandler,
		onDoubleClick?: MouseEventHandler,
		onDrag?: DragEventHandler,
		onDragEnd?: DragEventHandler,
		onDragEnter?: DragEventHandler,
		onDragExit?: DragEventHandler,
		onDragLeave?: DragEventHandler,
		onDragOver?: DragEventHandler,
		onDragStart?: DragEventHandler,
		onDrop?: DragEventHandler,
		onMouseDown?: MouseEventHandler,
		onMouseEnter?: MouseEventHandler,
		onMouseLeave?: MouseEventHandler,
		onMouseMove?: MouseEventHandler,
		onMouseOut?: MouseEventHandler,
		onMouseOver?: MouseEventHandler,
		onMouseUp?: MouseEventHandler,
		onTouchCancel?: TouchEventHandler,
		onTouchEnd?: TouchEventHandler,
		onTouchMove?: TouchEventHandler,
		onTouchStart?: TouchEventHandler,
		onScroll?: UIEventHandler,
		onWheel?: WheelEventHandler,
		className?: string,
		id?: string,
		dangerouslySetInnerHTML?: {
		___html: string
	}
	}

	declare interface DOMAttributes {
		
	}

	declare interface CSSProperties {
		boxFlex?: number,
		boxFlexGroup?: number,
		columnCount?: number,
		flex?: number | string,
		flexGrow?: number,
		flexShrink?: number,
		fontWeight?: number | string,
		lineClamp?: number,
		lineHeight?: number | string,
		opacity?: number,
		order?: number,
		orphans?: number,
		widows?: number,
		zIndex?: number,
		zoom?: number,
		fontSize?: number | string,
		fillOpacity?: number,
		strokeOpacity?: number,
		strokeWidth?: number,
		[propertyName: string]: any
	}

	declare interface HTMLAttributesBase<T> {
		accept?: string,
		acceptCharset?: string,
		accessKey?: string,
		action?: string,
		allowFullScreen?: boolean,
		allowTransparency?: boolean,
		alt?: string,
		async?: boolean,
		autoComplete?: boolean,
		autoFocus?: boolean,
		autoPlay?: boolean,
		cellPadding?: number | string,
		cellSpacing?: number | string,
		charSet?: string,
		checked?: boolean,
		classID?: string,
		cols?: number,
		colSpan?: number,
		content?: string,
		contentEditable?: boolean,
		contextMenu?: string,
		controls?: any,
		coords?: string,
		crossOrigin?: string,
		data?: string,
		dateTime?: string,
		defaultChecked?: boolean,
		defaultValue?: string,
		defer?: boolean,
		dir?: string,
		disabled?: boolean,
		download?: any,
		draggable?: boolean,
		encType?: string,
		form?: string,
		formAction?: string,
		formEncType?: string,
		formMethod?: string,
		formNoValidate?: boolean,
		formTarget?: string,
		frameBorder?: number | string,
		headers?: string,
		height?: number | string,
		hidden?: boolean,
		high?: number,
		href?: string,
		hrefLang?: string,
		htmlFor?: string,
		httpEquiv?: string,
		icon?: string,
		label?: string,
		lang?: string,
		list?: string,
		loop?: boolean,
		low?: number,
		manifest?: string,
		marginHeight?: number,
		marginWidth?: number,
		max?: number | string,
		maxLength?: number,
		media?: string,
		mediaGroup?: string,
		method?: string,
		min?: number | string,
		multiple?: boolean,
		muted?: boolean,
		name?: string,
		noValidate?: boolean,
		open?: boolean,
		optimum?: number,
		pattern?: string,
		placeholder?: string,
		poster?: string,
		preload?: string,
		radioGroup?: string,
		readOnly?: boolean,
		rel?: string,
		required?: boolean,
		role?: string,
		rows?: number,
		rowSpan?: number,
		sandbox?: string,
		scope?: string,
		scoped?: boolean,
		scrolling?: string,
		seamless?: boolean,
		selected?: boolean,
		shape?: string,
		size?: number,
		sizes?: string,
		span?: number,
		spellCheck?: boolean,
		src?: string,
		srcDoc?: string,
		srcSet?: string,
		start?: number,
		step?: number | string,
		style?: CSSProperties,
		tabIndex?: number,
		target?: string,
		title?: string,
		type?: string,
		useMap?: string,
		value?: string,
		width?: number | string,
		wmode?: string,
		autoCapitalize?: boolean,
		autoCorrect?: boolean,
		property?: string,
		itemProp?: string,
		itemScope?: boolean,
		itemType?: string,
		unselectable?: boolean
	}

	declare interface HTMLAttributes {
		
	}

	declare interface SVGElementAttributes {
		viewBox?: string,
		preserveAspectRatio?: string
	}

	declare interface SVGAttributes {
		ref?: string | ((component: SVGComponent) => void),
		cx?: number | string,
		cy?: number | string,
		d?: string,
		dx?: number | string,
		dy?: number | string,
		fill?: string,
		fillOpacity?: number | string,
		fontFamily?: string,
		fontSize?: number | string,
		fx?: number | string,
		fy?: number | string,
		gradientTransform?: string,
		gradientUnits?: string,
		height?: number | string,
		markerEnd?: string,
		markerMid?: string,
		markerStart?: string,
		offset?: number | string,
		opacity?: number | string,
		patternContentUnits?: string,
		patternUnits?: string,
		points?: string,
		preserveAspectRatio?: string,
		r?: number | string,
		rx?: number | string,
		ry?: number | string,
		spreadMethod?: string,
		stopColor?: string,
		stopOpacity?: number | string,
		stroke?: string,
		strokeDasharray?: string,
		strokeLinecap?: string,
		strokeMiterlimit?: string,
		strokeOpacity?: number | string,
		strokeWidth?: number | string,
		textAnchor?: string,
		transform?: string,
		version?: string,
		viewBox?: string,
		width?: number | string,
		x1?: number | string,
		x2?: number | string,
		x?: number | string,
		y1?: number | string,
		y2?: number | string,
		y?: number | string
	}

	declare interface ReactDOM {
		a: HTMLFactory,
		abbr: HTMLFactory,
		address: HTMLFactory,
		area: HTMLFactory,
		article: HTMLFactory,
		aside: HTMLFactory,
		audio: HTMLFactory,
		b: HTMLFactory,
		base: HTMLFactory,
		bdi: HTMLFactory,
		bdo: HTMLFactory,
		big: HTMLFactory,
		blockquote: HTMLFactory,
		body: HTMLFactory,
		br: HTMLFactory,
		button: HTMLFactory,
		canvas: HTMLFactory,
		caption: HTMLFactory,
		cite: HTMLFactory,
		code: HTMLFactory,
		col: HTMLFactory,
		colgroup: HTMLFactory,
		data: HTMLFactory,
		datalist: HTMLFactory,
		dd: HTMLFactory,
		del: HTMLFactory,
		details: HTMLFactory,
		dfn: HTMLFactory,
		dialog: HTMLFactory,
		div: HTMLFactory,
		dl: HTMLFactory,
		dt: HTMLFactory,
		em: HTMLFactory,
		embed: HTMLFactory,
		fieldset: HTMLFactory,
		figcaption: HTMLFactory,
		figure: HTMLFactory,
		footer: HTMLFactory,
		form: HTMLFactory,
		h1: HTMLFactory,
		h2: HTMLFactory,
		h3: HTMLFactory,
		h4: HTMLFactory,
		h5: HTMLFactory,
		h6: HTMLFactory,
		head: HTMLFactory,
		header: HTMLFactory,
		hr: HTMLFactory,
		html: HTMLFactory,
		i: HTMLFactory,
		iframe: HTMLFactory,
		img: HTMLFactory,
		input: HTMLFactory,
		ins: HTMLFactory,
		kbd: HTMLFactory,
		keygen: HTMLFactory,
		label: HTMLFactory,
		legend: HTMLFactory,
		li: HTMLFactory,
		link: HTMLFactory,
		main: HTMLFactory,
		map: HTMLFactory,
		mark: HTMLFactory,
		menu: HTMLFactory,
		menuitem: HTMLFactory,
		meta: HTMLFactory,
		meter: HTMLFactory,
		nav: HTMLFactory,
		noscript: HTMLFactory,
		object: HTMLFactory,
		ol: HTMLFactory,
		optgroup: HTMLFactory,
		option: HTMLFactory,
		output: HTMLFactory,
		p: HTMLFactory,
		param: HTMLFactory,
		picture: HTMLFactory,
		pre: HTMLFactory,
		progress: HTMLFactory,
		q: HTMLFactory,
		rp: HTMLFactory,
		rt: HTMLFactory,
		ruby: HTMLFactory,
		s: HTMLFactory,
		samp: HTMLFactory,
		script: HTMLFactory,
		section: HTMLFactory,
		select: HTMLFactory,
		small: HTMLFactory,
		source: HTMLFactory,
		span: HTMLFactory,
		strong: HTMLFactory,
		style: HTMLFactory,
		sub: HTMLFactory,
		summary: HTMLFactory,
		sup: HTMLFactory,
		table: HTMLFactory,
		tbody: HTMLFactory,
		td: HTMLFactory,
		textarea: HTMLFactory,
		tfoot: HTMLFactory,
		th: HTMLFactory,
		thead: HTMLFactory,
		time: HTMLFactory,
		title: HTMLFactory,
		tr: HTMLFactory,
		track: HTMLFactory,
		u: HTMLFactory,
		ul: HTMLFactory,
		var: HTMLFactory,
		video: HTMLFactory,
		wbr: HTMLFactory,
		svg: SVGElementFactory,
		circle: SVGFactory,
		defs: SVGFactory,
		ellipse: SVGFactory,
		g: SVGFactory,
		line: SVGFactory,
		linearGradient: SVGFactory,
		mask: SVGFactory,
		path: SVGFactory,
		pattern: SVGFactory,
		polygon: SVGFactory,
		polyline: SVGFactory,
		radialGradient: SVGFactory,
		rect: SVGFactory,
		stop: SVGFactory,
		symbol: SVGFactory,
		text: SVGFactory,
		tspan: SVGFactory,
		use: SVGFactory
	}

	declare interface Validator<T> {
		(object: T, key: string, componentName: string): Error
	}

	declare interface Requireable<T> {
		isRequired: Validator<T>
	}

	declare interface ValidationMap<T> {
		[key: string]: Validator<T>
	}

	declare interface ReactPropTypes {
		any: Requireable<any>,
		array: Requireable<any>,
		bool: Requireable<any>,
		func: Requireable<any>,
		number: Requireable<any>,
		object: Requireable<any>,
		string: Requireable<any>,
		node: Requireable<any>,
		element: Requireable<any>,
		instanceOf(expectedClass: {
		
	}): Requireable<any>,
		oneOf(types: any[]): Requireable<any>,
		oneOfType(types: Validator<any>[]): Requireable<any>,
		arrayOf(type: Validator<any>): Requireable<any>,
		objectOf(type: Validator<any>): Requireable<any>,
		shape(type: ValidationMap<any>): Requireable<any>
	}

	declare interface ReactChildren {
		map<T>(
		children: ReactNode, fn: (child: ReactChild, index: number) => T
	): {
		[key: string]: T
	},
		forEach(children: ReactNode, fn: (child: ReactChild, index: number) => any): void,
		count(children: ReactNode): number,
		only(children: ReactNode): ReactChild
	}

	declare interface AbstractView {
		styleMedia: StyleMedia,
		document: Document
	}

	declare interface Touch {
		identifier: number,
		target: EventTarget,
		screenX: number,
		screenY: number,
		clientX: number,
		clientY: number,
		pageX: number,
		pageY: number
	}

	declare interface TouchList {
		[index: number]: Touch,
		length: number,
		item(index: number): Touch,
		identifiedTouch(identifier: number): Touch
	}

	declare function createClass<P, S>(spec: ComponentSpec<P, S>): ClassicComponentClass<P>

	declare function createFactory<P>(type: string): DOMFactory<P>

	declare function createFactory<P>(type: ClassicComponentClass<P> | string): ClassicFactory<P>

	declare function createFactory<P>(type: ComponentClass<P>): Factory<P>

	declare function createElement<P>(type: string, props?: P, ...children: ReactNode[]): DOMElement<P>

	declare function createElement<P>(
		type: ClassicComponentClass<P> | string, props?: P, ...children: ReactNode[]
	): ClassicElement<P>

	declare function createElement<P>(
		type: ComponentClass<P>, props?: P, ...children: ReactNode[]
	): ReactElement<P>

	declare function cloneElement<P>(element: DOMElement<P>, props?: P, ...children: ReactNode[]): DOMElement<P>

	declare function cloneElement<P>(
		element: ClassicElement<P>, props?: P, ...children: ReactNode[]
	): ClassicElement<P>

	declare function cloneElement<P>(
		element: ReactElement<P>, props?: P, ...children: ReactNode[]
	): ReactElement<P>

	declare function render<P>(
		element: DOMElement<P>, container: Element, callback?: () => any
	): DOMComponent<P>

	declare function render<P, S>(
		element: ClassicElement<P>, container: Element, callback?: () => any
	): ClassicComponent<P, S>

	declare function render<P, S>(
		element: ReactElement<P>, container: Element, callback?: () => any
	): Component<P, S>

	declare function unmountComponentAtNode(container: Element): boolean

	declare function renderToString(element: ReactElement<any>): string

	declare function renderToStaticMarkup(element: ReactElement<any>): string

	declare function isValidElement(object: {
		
	}): boolean

	declare function initializeTouchEvents(shouldUseTouch: boolean): void

	declare function findDOMNode<TElement>(componentOrElement: Component<any, any> | Element): TElement

	declare function findDOMNode(componentOrElement: Component<any, any> | Element): Element

	declare class Component<P, S> extends ComponentLifecycle<P, S> {
		propTypes: ValidationMap<any>;
		contextTypes: ValidationMap<any>;
		childContextTypes: ValidationMap<any>;
		defaultProps: Props<any>;
		constructor(props?: P, context?: any): this;
		setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
		setState(state: S, callback?: () => any): void;
		forceUpdate(callBack?: () => any): void;
		render(): JSX.Element;
		props: P;
		state: S;
		context: {
		
	};
		refs: {
		[key: string]: Component<any, any>
	}
	}

	
}

declare module 'react' {
					declare module.exports: undefined


}

declare module 'react/addons' {
	declare type ReactType = ComponentClass<any> | string;

	declare type HTMLElement = DOMElement<HTMLAttributes>;

	declare type SVGElement = DOMElement<SVGAttributes>;

	declare type HTMLFactory = DOMFactory<HTMLAttributes>;

	declare type SVGFactory = DOMFactory<SVGAttributes>;

	declare type SVGElementFactory = DOMFactory<SVGElementAttributes>;

	declare type ReactText = string | number;

	declare type ReactChild = ReactElement<any> | ReactText;

	declare type ReactFragment = {
		
	} | Array<ReactChild | any[] | boolean>;

	declare type ReactNode = ReactChild | ReactFragment | boolean;

	declare type HTMLComponent = DOMComponent<HTMLAttributes>;

	declare type SVGComponent = DOMComponent<SVGAttributes>;

	declare type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;

	declare type TransitionGroup = ComponentClass<TransitionGroupProps>;

	declare type UpdateSpec = UpdateSpecCommand | UpdateSpecPath;

	declare interface ReactElement<P> {
		type: string | ComponentClass<P>,
		props: P,
		key: string | number,
		ref: string | ((component: Component<P, any>) => any)
	}

	declare interface ClassicElement<P> {
		type: string | ClassicComponentClass<P>,
		ref: string | ((component: ClassicComponent<P, any>) => any)
	}

	declare interface DOMElement<P> {
		type: string,
		ref: string | ((component: DOMComponent<P>) => any)
	}

	declare interface Factory<P> {
		(props?: P, ...children: ReactNode[]): ReactElement<P>
	}

	declare interface ClassicFactory<P> {
		(props?: P, ...children: ReactNode[]): ClassicElement<P>
	}

	declare interface DOMFactory<P> {
		(props?: P, ...children: ReactNode[]): DOMElement<P>
	}

	declare interface ClassicComponent<P, S> {
		replaceState(nextState: S, callback?: () => any): void,
		getDOMNode<TElement>(): TElement,
		getDOMNode(): Element,
		isMounted(): boolean,
		getInitialState(): S,
		setProps(nextProps: P, callback?: () => any): void,
		replaceProps(nextProps: P, callback?: () => any): void
	}

	declare interface DOMComponent<P> {
		tagName: string
	}

	declare interface ChildContextProvider<CC> {
		getChildContext(): CC
	}

	declare interface ComponentClass<P> {
		new (props?: P, context?: any): Component<P, any>,
		propTypes?: ValidationMap<P>,
		contextTypes?: ValidationMap<any>,
		childContextTypes?: ValidationMap<any>,
		defaultProps?: P
	}

	declare interface ClassicComponentClass<P> {
		new (props?: P, context?: any): ClassicComponent<P, any>,
		getDefaultProps(): P,
		displayName?: string
	}

	declare interface ComponentLifecycle<P, S> {
		componentWillMount(): void,
		componentDidMount(): void,
		componentWillReceiveProps(nextProps: P, nextContext: any): void,
		shouldComponentUpdate(nextProps: P, nextState: S, nextContext: any): boolean,
		componentWillUpdate(nextProps: P, nextState: S, nextContext: any): void,
		componentDidUpdate(prevProps: P, prevState: S, prevContext: any): void,
		componentWillUnmount(): void
	}

	declare interface Mixin<P, S> {
		mixins?: Mixin<P, S>,
		statics?: {
		[key: string]: any
	},
		displayName?: string,
		propTypes?: ValidationMap<any>,
		contextTypes?: ValidationMap<any>,
		childContextTypes?: ValidationMap<any>,
		getDefaultProps(): P,
		getInitialState(): S
	}

	declare interface ComponentSpec<P, S> {
		render(): ReactElement<any>,
		[propertyName: string]: any
	}

	declare interface SyntheticEvent {
		bubbles: boolean,
		cancelable: boolean,
		currentTarget: EventTarget,
		defaultPrevented: boolean,
		eventPhase: number,
		isTrusted: boolean,
		nativeEvent: Event,
		preventDefault(): void,
		stopPropagation(): void,
		target: EventTarget,
		timeStamp: Date,
		type: string
	}

	declare interface DragEvent {
		dataTransfer: DataTransfer
	}

	declare interface ClipboardEvent {
		clipboardData: DataTransfer
	}

	declare interface KeyboardEvent {
		altKey: boolean,
		charCode: number,
		ctrlKey: boolean,
		getModifierState(key: string): boolean,
		key: string,
		keyCode: number,
		locale: string,
		location: number,
		metaKey: boolean,
		repeat: boolean,
		shiftKey: boolean,
		which: number
	}

	declare interface FocusEvent {
		relatedTarget: EventTarget
	}

	declare interface FormEvent {
		
	}

	declare interface MouseEvent {
		altKey: boolean,
		button: number,
		buttons: number,
		clientX: number,
		clientY: number,
		ctrlKey: boolean,
		getModifierState(key: string): boolean,
		metaKey: boolean,
		pageX: number,
		pageY: number,
		relatedTarget: EventTarget,
		screenX: number,
		screenY: number,
		shiftKey: boolean
	}

	declare interface TouchEvent {
		altKey: boolean,
		changedTouches: TouchList,
		ctrlKey: boolean,
		getModifierState(key: string): boolean,
		metaKey: boolean,
		shiftKey: boolean,
		targetTouches: TouchList,
		touches: TouchList
	}

	declare interface UIEvent {
		detail: number,
		view: AbstractView
	}

	declare interface WheelEvent {
		deltaMode: number,
		deltaX: number,
		deltaY: number,
		deltaZ: number
	}

	declare interface EventHandler<E> {
		(event: E): void
	}

	declare interface DragEventHandler {
		
	}

	declare interface ClipboardEventHandler {
		
	}

	declare interface KeyboardEventHandler {
		
	}

	declare interface FocusEventHandler {
		
	}

	declare interface FormEventHandler {
		
	}

	declare interface MouseEventHandler {
		
	}

	declare interface TouchEventHandler {
		
	}

	declare interface UIEventHandler {
		
	}

	declare interface WheelEventHandler {
		
	}

	declare interface Props<T> {
		children?: ReactNode,
		key?: string | number,
		ref?: string | ((component: T) => any)
	}

	declare interface DOMAttributesBase<T> {
		onCopy?: ClipboardEventHandler,
		onCut?: ClipboardEventHandler,
		onPaste?: ClipboardEventHandler,
		onKeyDown?: KeyboardEventHandler,
		onKeyPress?: KeyboardEventHandler,
		onKeyUp?: KeyboardEventHandler,
		onFocus?: FocusEventHandler,
		onBlur?: FocusEventHandler,
		onChange?: FormEventHandler,
		onInput?: FormEventHandler,
		onSubmit?: FormEventHandler,
		onClick?: MouseEventHandler,
		onDoubleClick?: MouseEventHandler,
		onDrag?: DragEventHandler,
		onDragEnd?: DragEventHandler,
		onDragEnter?: DragEventHandler,
		onDragExit?: DragEventHandler,
		onDragLeave?: DragEventHandler,
		onDragOver?: DragEventHandler,
		onDragStart?: DragEventHandler,
		onDrop?: DragEventHandler,
		onMouseDown?: MouseEventHandler,
		onMouseEnter?: MouseEventHandler,
		onMouseLeave?: MouseEventHandler,
		onMouseMove?: MouseEventHandler,
		onMouseOut?: MouseEventHandler,
		onMouseOver?: MouseEventHandler,
		onMouseUp?: MouseEventHandler,
		onTouchCancel?: TouchEventHandler,
		onTouchEnd?: TouchEventHandler,
		onTouchMove?: TouchEventHandler,
		onTouchStart?: TouchEventHandler,
		onScroll?: UIEventHandler,
		onWheel?: WheelEventHandler,
		className?: string,
		id?: string,
		dangerouslySetInnerHTML?: {
		___html: string
	}
	}

	declare interface DOMAttributes {
		
	}

	declare interface CSSProperties {
		boxFlex?: number,
		boxFlexGroup?: number,
		columnCount?: number,
		flex?: number | string,
		flexGrow?: number,
		flexShrink?: number,
		fontWeight?: number | string,
		lineClamp?: number,
		lineHeight?: number | string,
		opacity?: number,
		order?: number,
		orphans?: number,
		widows?: number,
		zIndex?: number,
		zoom?: number,
		fontSize?: number | string,
		fillOpacity?: number,
		strokeOpacity?: number,
		strokeWidth?: number,
		[propertyName: string]: any
	}

	declare interface HTMLAttributesBase<T> {
		accept?: string,
		acceptCharset?: string,
		accessKey?: string,
		action?: string,
		allowFullScreen?: boolean,
		allowTransparency?: boolean,
		alt?: string,
		async?: boolean,
		autoComplete?: boolean,
		autoFocus?: boolean,
		autoPlay?: boolean,
		cellPadding?: number | string,
		cellSpacing?: number | string,
		charSet?: string,
		checked?: boolean,
		classID?: string,
		cols?: number,
		colSpan?: number,
		content?: string,
		contentEditable?: boolean,
		contextMenu?: string,
		controls?: any,
		coords?: string,
		crossOrigin?: string,
		data?: string,
		dateTime?: string,
		defaultChecked?: boolean,
		defaultValue?: string,
		defer?: boolean,
		dir?: string,
		disabled?: boolean,
		download?: any,
		draggable?: boolean,
		encType?: string,
		form?: string,
		formAction?: string,
		formEncType?: string,
		formMethod?: string,
		formNoValidate?: boolean,
		formTarget?: string,
		frameBorder?: number | string,
		headers?: string,
		height?: number | string,
		hidden?: boolean,
		high?: number,
		href?: string,
		hrefLang?: string,
		htmlFor?: string,
		httpEquiv?: string,
		icon?: string,
		label?: string,
		lang?: string,
		list?: string,
		loop?: boolean,
		low?: number,
		manifest?: string,
		marginHeight?: number,
		marginWidth?: number,
		max?: number | string,
		maxLength?: number,
		media?: string,
		mediaGroup?: string,
		method?: string,
		min?: number | string,
		multiple?: boolean,
		muted?: boolean,
		name?: string,
		noValidate?: boolean,
		open?: boolean,
		optimum?: number,
		pattern?: string,
		placeholder?: string,
		poster?: string,
		preload?: string,
		radioGroup?: string,
		readOnly?: boolean,
		rel?: string,
		required?: boolean,
		role?: string,
		rows?: number,
		rowSpan?: number,
		sandbox?: string,
		scope?: string,
		scoped?: boolean,
		scrolling?: string,
		seamless?: boolean,
		selected?: boolean,
		shape?: string,
		size?: number,
		sizes?: string,
		span?: number,
		spellCheck?: boolean,
		src?: string,
		srcDoc?: string,
		srcSet?: string,
		start?: number,
		step?: number | string,
		style?: CSSProperties,
		tabIndex?: number,
		target?: string,
		title?: string,
		type?: string,
		useMap?: string,
		value?: string,
		width?: number | string,
		wmode?: string,
		autoCapitalize?: boolean,
		autoCorrect?: boolean,
		property?: string,
		itemProp?: string,
		itemScope?: boolean,
		itemType?: string,
		unselectable?: boolean
	}

	declare interface HTMLAttributes {
		
	}

	declare interface SVGElementAttributes {
		viewBox?: string,
		preserveAspectRatio?: string
	}

	declare interface SVGAttributes {
		ref?: string | ((component: SVGComponent) => void),
		cx?: number | string,
		cy?: number | string,
		d?: string,
		dx?: number | string,
		dy?: number | string,
		fill?: string,
		fillOpacity?: number | string,
		fontFamily?: string,
		fontSize?: number | string,
		fx?: number | string,
		fy?: number | string,
		gradientTransform?: string,
		gradientUnits?: string,
		height?: number | string,
		markerEnd?: string,
		markerMid?: string,
		markerStart?: string,
		offset?: number | string,
		opacity?: number | string,
		patternContentUnits?: string,
		patternUnits?: string,
		points?: string,
		preserveAspectRatio?: string,
		r?: number | string,
		rx?: number | string,
		ry?: number | string,
		spreadMethod?: string,
		stopColor?: string,
		stopOpacity?: number | string,
		stroke?: string,
		strokeDasharray?: string,
		strokeLinecap?: string,
		strokeMiterlimit?: string,
		strokeOpacity?: number | string,
		strokeWidth?: number | string,
		textAnchor?: string,
		transform?: string,
		version?: string,
		viewBox?: string,
		width?: number | string,
		x1?: number | string,
		x2?: number | string,
		x?: number | string,
		y1?: number | string,
		y2?: number | string,
		y?: number | string
	}

	declare interface ReactDOM {
		a: HTMLFactory,
		abbr: HTMLFactory,
		address: HTMLFactory,
		area: HTMLFactory,
		article: HTMLFactory,
		aside: HTMLFactory,
		audio: HTMLFactory,
		b: HTMLFactory,
		base: HTMLFactory,
		bdi: HTMLFactory,
		bdo: HTMLFactory,
		big: HTMLFactory,
		blockquote: HTMLFactory,
		body: HTMLFactory,
		br: HTMLFactory,
		button: HTMLFactory,
		canvas: HTMLFactory,
		caption: HTMLFactory,
		cite: HTMLFactory,
		code: HTMLFactory,
		col: HTMLFactory,
		colgroup: HTMLFactory,
		data: HTMLFactory,
		datalist: HTMLFactory,
		dd: HTMLFactory,
		del: HTMLFactory,
		details: HTMLFactory,
		dfn: HTMLFactory,
		dialog: HTMLFactory,
		div: HTMLFactory,
		dl: HTMLFactory,
		dt: HTMLFactory,
		em: HTMLFactory,
		embed: HTMLFactory,
		fieldset: HTMLFactory,
		figcaption: HTMLFactory,
		figure: HTMLFactory,
		footer: HTMLFactory,
		form: HTMLFactory,
		h1: HTMLFactory,
		h2: HTMLFactory,
		h3: HTMLFactory,
		h4: HTMLFactory,
		h5: HTMLFactory,
		h6: HTMLFactory,
		head: HTMLFactory,
		header: HTMLFactory,
		hr: HTMLFactory,
		html: HTMLFactory,
		i: HTMLFactory,
		iframe: HTMLFactory,
		img: HTMLFactory,
		input: HTMLFactory,
		ins: HTMLFactory,
		kbd: HTMLFactory,
		keygen: HTMLFactory,
		label: HTMLFactory,
		legend: HTMLFactory,
		li: HTMLFactory,
		link: HTMLFactory,
		main: HTMLFactory,
		map: HTMLFactory,
		mark: HTMLFactory,
		menu: HTMLFactory,
		menuitem: HTMLFactory,
		meta: HTMLFactory,
		meter: HTMLFactory,
		nav: HTMLFactory,
		noscript: HTMLFactory,
		object: HTMLFactory,
		ol: HTMLFactory,
		optgroup: HTMLFactory,
		option: HTMLFactory,
		output: HTMLFactory,
		p: HTMLFactory,
		param: HTMLFactory,
		picture: HTMLFactory,
		pre: HTMLFactory,
		progress: HTMLFactory,
		q: HTMLFactory,
		rp: HTMLFactory,
		rt: HTMLFactory,
		ruby: HTMLFactory,
		s: HTMLFactory,
		samp: HTMLFactory,
		script: HTMLFactory,
		section: HTMLFactory,
		select: HTMLFactory,
		small: HTMLFactory,
		source: HTMLFactory,
		span: HTMLFactory,
		strong: HTMLFactory,
		style: HTMLFactory,
		sub: HTMLFactory,
		summary: HTMLFactory,
		sup: HTMLFactory,
		table: HTMLFactory,
		tbody: HTMLFactory,
		td: HTMLFactory,
		textarea: HTMLFactory,
		tfoot: HTMLFactory,
		th: HTMLFactory,
		thead: HTMLFactory,
		time: HTMLFactory,
		title: HTMLFactory,
		tr: HTMLFactory,
		track: HTMLFactory,
		u: HTMLFactory,
		ul: HTMLFactory,
		var: HTMLFactory,
		video: HTMLFactory,
		wbr: HTMLFactory,
		svg: SVGElementFactory,
		circle: SVGFactory,
		defs: SVGFactory,
		ellipse: SVGFactory,
		g: SVGFactory,
		line: SVGFactory,
		linearGradient: SVGFactory,
		mask: SVGFactory,
		path: SVGFactory,
		pattern: SVGFactory,
		polygon: SVGFactory,
		polyline: SVGFactory,
		radialGradient: SVGFactory,
		rect: SVGFactory,
		stop: SVGFactory,
		symbol: SVGFactory,
		text: SVGFactory,
		tspan: SVGFactory,
		use: SVGFactory
	}

	declare interface Validator<T> {
		(object: T, key: string, componentName: string): Error
	}

	declare interface Requireable<T> {
		isRequired: Validator<T>
	}

	declare interface ValidationMap<T> {
		[key: string]: Validator<T>
	}

	declare interface ReactPropTypes {
		any: Requireable<any>,
		array: Requireable<any>,
		bool: Requireable<any>,
		func: Requireable<any>,
		number: Requireable<any>,
		object: Requireable<any>,
		string: Requireable<any>,
		node: Requireable<any>,
		element: Requireable<any>,
		instanceOf(expectedClass: {
		
	}): Requireable<any>,
		oneOf(types: any[]): Requireable<any>,
		oneOfType(types: Validator<any>[]): Requireable<any>,
		arrayOf(type: Validator<any>): Requireable<any>,
		objectOf(type: Validator<any>): Requireable<any>,
		shape(type: ValidationMap<any>): Requireable<any>
	}

	declare interface ReactChildren {
		map<T>(
		children: ReactNode, fn: (child: ReactChild, index: number) => T
	): {
		[key: string]: T
	},
		forEach(children: ReactNode, fn: (child: ReactChild, index: number) => any): void,
		count(children: ReactNode): number,
		only(children: ReactNode): ReactChild
	}

	declare interface AbstractView {
		styleMedia: StyleMedia,
		document: Document
	}

	declare interface Touch {
		identifier: number,
		target: EventTarget,
		screenX: number,
		screenY: number,
		clientX: number,
		clientY: number,
		pageX: number,
		pageY: number
	}

	declare interface TouchList {
		[index: number]: Touch,
		length: number,
		item(index: number): Touch,
		identifiedTouch(identifier: number): Touch
	}

	declare interface TransitionGroupProps {
		component?: ReactType,
		childFactory?: (child: ReactElement<any>) => ReactElement<any>
	}

	declare interface CSSTransitionGroupProps {
		transitionName: string,
		transitionAppear?: boolean,
		transitionEnter?: boolean,
		transitionLeave?: boolean
	}

	declare interface ReactLink<T> {
		value: T,
		requestChange(newValue: T): void
	}

	declare interface LinkedStateMixin {
		linkState<T>(key: string): ReactLink<T>
	}

	declare interface PureRenderMixin {
		
	}

	declare interface UpdateSpecCommand {
		$set?: any,
		$merge?: {
		
	},
		$apply(value: any): any
	}

	declare interface UpdateSpecPath {
		[key: string]: UpdateSpec
	}

	declare interface UpdateArraySpec {
		$push?: any[],
		$unshift?: any[],
		$splice?: any[][]
	}

	declare interface ComponentPerfContext {
		current: string,
		owner: string
	}

	declare interface NumericPerfContext {
		[key: string]: number
	}

	declare interface Measurements {
		exclusive: NumericPerfContext,
		inclusive: NumericPerfContext,
		render: NumericPerfContext,
		counts: NumericPerfContext,
		writes: NumericPerfContext,
		displayNames: {
		[key: string]: ComponentPerfContext
	},
		totalTime: number
	}

	declare interface MockedComponentClass {
		new (): any
	}

	declare interface SyntheticEventData {
		altKey?: boolean,
		button?: number,
		buttons?: number,
		clientX?: number,
		clientY?: number,
		changedTouches?: TouchList,
		charCode?: boolean,
		clipboardData?: DataTransfer,
		ctrlKey?: boolean,
		deltaMode?: number,
		deltaX?: number,
		deltaY?: number,
		deltaZ?: number,
		detail?: number,
		getModifierState(key: string): boolean,
		key?: string,
		keyCode?: number,
		locale?: string,
		location?: number,
		metaKey?: boolean,
		pageX?: number,
		pageY?: number,
		relatedTarget?: EventTarget,
		repeat?: boolean,
		screenX?: number,
		screenY?: number,
		shiftKey?: boolean,
		targetTouches?: TouchList,
		touches?: TouchList,
		view?: AbstractView,
		which?: number
	}

	declare interface EventSimulator {
		(element: Element, eventData?: SyntheticEventData): void,
		(component: Component<any, any>, eventData?: SyntheticEventData): void
	}

	declare function createClass<P, S>(spec: ComponentSpec<P, S>): ClassicComponentClass<P>

	declare function createFactory<P>(type: string): DOMFactory<P>

	declare function createFactory<P>(type: ClassicComponentClass<P> | string): ClassicFactory<P>

	declare function createFactory<P>(type: ComponentClass<P>): Factory<P>

	declare function createElement<P>(type: string, props?: P, ...children: ReactNode[]): DOMElement<P>

	declare function createElement<P>(
		type: ClassicComponentClass<P> | string, props?: P, ...children: ReactNode[]
	): ClassicElement<P>

	declare function createElement<P>(
		type: ComponentClass<P>, props?: P, ...children: ReactNode[]
	): ReactElement<P>

	declare function cloneElement<P>(element: DOMElement<P>, props?: P, ...children: ReactNode[]): DOMElement<P>

	declare function cloneElement<P>(
		element: ClassicElement<P>, props?: P, ...children: ReactNode[]
	): ClassicElement<P>

	declare function cloneElement<P>(
		element: ReactElement<P>, props?: P, ...children: ReactNode[]
	): ReactElement<P>

	declare function render<P>(
		element: DOMElement<P>, container: Element, callback?: () => any
	): DOMComponent<P>

	declare function render<P, S>(
		element: ClassicElement<P>, container: Element, callback?: () => any
	): ClassicComponent<P, S>

	declare function render<P, S>(
		element: ReactElement<P>, container: Element, callback?: () => any
	): Component<P, S>

	declare function unmountComponentAtNode(container: Element): boolean

	declare function renderToString(element: ReactElement<any>): string

	declare function renderToStaticMarkup(element: ReactElement<any>): string

	declare function isValidElement(object: {
		
	}): boolean

	declare function initializeTouchEvents(shouldUseTouch: boolean): void

	declare function findDOMNode<TElement>(componentOrElement: Component<any, any> | Element): TElement

	declare function findDOMNode(componentOrElement: Component<any, any> | Element): Element

	declare class Component<P, S> extends ComponentLifecycle<P, S> {
		propTypes: ValidationMap<any>;
		contextTypes: ValidationMap<any>;
		childContextTypes: ValidationMap<any>;
		defaultProps: Props<any>;
		constructor(props?: P, context?: any): this;
		setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
		setState(state: S, callback?: () => any): void;
		forceUpdate(callBack?: () => any): void;
		render(): JSX.Element;
		props: P;
		state: S;
		context: {
		
	};
		refs: {
		[key: string]: Component<any, any>
	}
	}

	declare class ShallowRenderer  {
		getRenderOutput<E>(): E;
		getRenderOutput(): ReactElement<any>;
		render(element: ReactElement<any>, context?: any): void;
		unmount(): void
	}

	
}

declare module 'addons' {
			declare export function batchedUpdates<A, B>(callback: (a: A, b: B) => any, a: A, b: B): void

	declare export function batchedUpdates<A>(callback: (a: A) => any, a: A): void

	declare export function batchedUpdates(callback: () => any): void

	declare export function classSet(cx: {
		[key: string]: boolean
	}): string

	declare export function classSet(...classList: string[]): string

	declare export function cloneWithProps<P>(element: DOMElement<P>, props: P): DOMElement<P>

	declare export function cloneWithProps<P>(element: ClassicElement<P>, props: P): ClassicElement<P>

	declare export function cloneWithProps<P>(element: ReactElement<P>, props: P): ReactElement<P>

	declare export function createFragment(object: {
		[key: string]: ReactNode
	}): ReactFragment

	declare export function update(value: any[], spec: UpdateArraySpec): any[]

	declare export function update(value: {
		
	}, spec: UpdateSpec): any

		
}

declare module 'ReactPerf' {
			declare export function start(): void

	declare export function stop(): void

	declare export function printInclusive(measurements: Measurements[]): void

	declare export function printExclusive(measurements: Measurements[]): void

	declare export function printWasted(measurements: Measurements[]): void

	declare export function printDOM(measurements: Measurements[]): void

	declare export function getLastMeasurements(): Measurements[]

		
}

declare module 'ReactTestUtils' {
			declare export function renderIntoDocument<P>(element: ReactElement<P>): Component<P, any>

	declare export function renderIntoDocument<C>(element: ReactElement<any>): C

	declare export function mockComponent(mocked: MockedComponentClass, mockTagName?: string): typeof ReactTestUtils

	declare export function isElementOfType(element: ReactElement<any>, type: ReactType): boolean

	declare export function isTextComponent(instance: Component<any, any>): boolean

	declare export function isDOMComponent(instance: Component<any, any>): boolean

	declare export function isCompositeComponent(instance: Component<any, any>): boolean

	declare export function isCompositeComponentWithType(instance: Component<any, any>, type: ComponentClass<any>): boolean

	declare export function findAllInRenderedTree(
		tree: Component<any, any>, fn: (i: Component<any, any>) => boolean
	): Component<any, any>

	declare export function scryRenderedDOMComponentsWithClass(tree: Component<any, any>, className: string): DOMComponent<any>[]

	declare export function findRenderedDOMComponentWithClass(tree: Component<any, any>, className: string): DOMComponent<any>

	declare export function scryRenderedDOMComponentsWithTag(tree: Component<any, any>, tagName: string): DOMComponent<any>[]

	declare export function findRenderedDOMComponentWithTag(tree: Component<any, any>, tagName: string): DOMComponent<any>

	declare export function scryRenderedComponentsWithType<P>(tree: Component<any, any>, type: ComponentClass<P>): Component<P, {
		
	}>[]

	declare export function scryRenderedComponentsWithType<C>(tree: Component<any, any>, type: ComponentClass<any>): C[]

	declare export function findRenderedComponentWithType<P>(tree: Component<any, any>, type: ComponentClass<P>): Component<P, {
		
	}>

	declare export function findRenderedComponentWithType<C>(tree: Component<any, any>, type: ComponentClass<any>): C

	declare export function createRenderer(): ShallowRenderer

		
}

declare module 'ReactSimulate' {
					
}

declare module 'npm$namespace$JSX' {
		declare interface Element {
		
	}

	declare interface ElementClass {
		render(): JSX.Element
	}

	declare interface ElementAttributesProperty {
		props: {
		
	}
	}

	declare interface IntrinsicElements {
		a: React.HTMLAttributes,
		abbr: React.HTMLAttributes,
		address: React.HTMLAttributes,
		area: React.HTMLAttributes,
		article: React.HTMLAttributes,
		aside: React.HTMLAttributes,
		audio: React.HTMLAttributes,
		b: React.HTMLAttributes,
		base: React.HTMLAttributes,
		bdi: React.HTMLAttributes,
		bdo: React.HTMLAttributes,
		big: React.HTMLAttributes,
		blockquote: React.HTMLAttributes,
		body: React.HTMLAttributes,
		br: React.HTMLAttributes,
		button: React.HTMLAttributes,
		canvas: React.HTMLAttributes,
		caption: React.HTMLAttributes,
		cite: React.HTMLAttributes,
		code: React.HTMLAttributes,
		col: React.HTMLAttributes,
		colgroup: React.HTMLAttributes,
		data: React.HTMLAttributes,
		datalist: React.HTMLAttributes,
		dd: React.HTMLAttributes,
		del: React.HTMLAttributes,
		details: React.HTMLAttributes,
		dfn: React.HTMLAttributes,
		dialog: React.HTMLAttributes,
		div: React.HTMLAttributes,
		dl: React.HTMLAttributes,
		dt: React.HTMLAttributes,
		em: React.HTMLAttributes,
		embed: React.HTMLAttributes,
		fieldset: React.HTMLAttributes,
		figcaption: React.HTMLAttributes,
		figure: React.HTMLAttributes,
		footer: React.HTMLAttributes,
		form: React.HTMLAttributes,
		h1: React.HTMLAttributes,
		h2: React.HTMLAttributes,
		h3: React.HTMLAttributes,
		h4: React.HTMLAttributes,
		h5: React.HTMLAttributes,
		h6: React.HTMLAttributes,
		head: React.HTMLAttributes,
		header: React.HTMLAttributes,
		hr: React.HTMLAttributes,
		html: React.HTMLAttributes,
		i: React.HTMLAttributes,
		iframe: React.HTMLAttributes,
		img: React.HTMLAttributes,
		input: React.HTMLAttributes,
		ins: React.HTMLAttributes,
		kbd: React.HTMLAttributes,
		keygen: React.HTMLAttributes,
		label: React.HTMLAttributes,
		legend: React.HTMLAttributes,
		li: React.HTMLAttributes,
		link: React.HTMLAttributes,
		main: React.HTMLAttributes,
		map: React.HTMLAttributes,
		mark: React.HTMLAttributes,
		menu: React.HTMLAttributes,
		menuitem: React.HTMLAttributes,
		meta: React.HTMLAttributes,
		meter: React.HTMLAttributes,
		nav: React.HTMLAttributes,
		noscript: React.HTMLAttributes,
		object: React.HTMLAttributes,
		ol: React.HTMLAttributes,
		optgroup: React.HTMLAttributes,
		option: React.HTMLAttributes,
		output: React.HTMLAttributes,
		p: React.HTMLAttributes,
		param: React.HTMLAttributes,
		picture: React.HTMLAttributes,
		pre: React.HTMLAttributes,
		progress: React.HTMLAttributes,
		q: React.HTMLAttributes,
		rp: React.HTMLAttributes,
		rt: React.HTMLAttributes,
		ruby: React.HTMLAttributes,
		s: React.HTMLAttributes,
		samp: React.HTMLAttributes,
		script: React.HTMLAttributes,
		section: React.HTMLAttributes,
		select: React.HTMLAttributes,
		small: React.HTMLAttributes,
		source: React.HTMLAttributes,
		span: React.HTMLAttributes,
		strong: React.HTMLAttributes,
		style: React.HTMLAttributes,
		sub: React.HTMLAttributes,
		summary: React.HTMLAttributes,
		sup: React.HTMLAttributes,
		table: React.HTMLAttributes,
		tbody: React.HTMLAttributes,
		td: React.HTMLAttributes,
		textarea: React.HTMLAttributes,
		tfoot: React.HTMLAttributes,
		th: React.HTMLAttributes,
		thead: React.HTMLAttributes,
		time: React.HTMLAttributes,
		title: React.HTMLAttributes,
		tr: React.HTMLAttributes,
		track: React.HTMLAttributes,
		u: React.HTMLAttributes,
		ul: React.HTMLAttributes,
		var: React.HTMLAttributes,
		video: React.HTMLAttributes,
		wbr: React.HTMLAttributes,
		svg: React.SVGElementAttributes,
		circle: React.SVGAttributes,
		defs: React.SVGAttributes,
		ellipse: React.SVGAttributes,
		g: React.SVGAttributes,
		line: React.SVGAttributes,
		linearGradient: React.SVGAttributes,
		mask: React.SVGAttributes,
		path: React.SVGAttributes,
		pattern: React.SVGAttributes,
		polygon: React.SVGAttributes,
		polyline: React.SVGAttributes,
		radialGradient: React.SVGAttributes,
		rect: React.SVGAttributes,
		stop: React.SVGAttributes,
		text: React.SVGAttributes,
		tspan: React.SVGAttributes
	}

			
}