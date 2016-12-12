

declare module 'react' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___React' {
	declare type ReactType = string | ComponentClass<any> | StatelessComponent<any>;

	declare type Key = string | number;

	declare type Ref<T> = string | ((instance: T) => any);

	declare type ComponentState = {
		
	} | void;

	declare type CElement<P, T> = ComponentElement<P, T>;

	declare type ClassicElement<P> = CElement<P, ClassicComponent<P, ComponentState>>;

	declare type CFactory<P, T> = ComponentFactory<P, T>;

	declare type ClassicFactory<P> = CFactory<P, ClassicComponent<P, ComponentState>>;

	declare type ReactText = string | number;

	declare type ReactChild = ReactElement<any> | ReactText;

	declare type ReactFragment = {
		
	} | Array<ReactChild | any[] | boolean>;

	declare type ReactNode = ReactChild | ReactFragment | boolean;

	declare type ReactInstance = Component<any, any> | Element;

	declare type SFC<P> = StatelessComponent<P>;

	declare type ClassType<P, T, C> = C & (NO PRINT IMPLEMENTED: ConstructorType) & (NO PRINT IMPLEMENTED: ConstructorType);

	declare type ReactEventHandler = EventHandler<SyntheticEvent>;

	declare type ClipboardEventHandler = EventHandler<ClipboardEvent>;

	declare type CompositionEventHandler = EventHandler<CompositionEvent>;

	declare type DragEventHandler = EventHandler<DragEvent>;

	declare type FocusEventHandler = EventHandler<FocusEvent>;

	declare type FormEventHandler = EventHandler<FormEvent>;

	declare type KeyboardEventHandler = EventHandler<KeyboardEvent>;

	declare type MouseEventHandler = EventHandler<MouseEvent>;

	declare type TouchEventHandler = EventHandler<TouchEvent>;

	declare type UIEventHandler = EventHandler<UIEvent>;

	declare type WheelEventHandler = EventHandler<WheelEvent>;

	declare type AnimationEventHandler = EventHandler<AnimationEvent>;

	declare type TransitionEventHandler = EventHandler<TransitionEvent>;

	declare interface Attributes {
		key?: Key
	}

	declare interface ClassAttributes<T> {
		ref?: Ref<T>
	}

	declare interface ReactElement<P> {
		type: string | ComponentClass<P> | SFC<P>,
		props: P,
		key?: Key
	}

	declare interface SFCElement<P> {
		type: SFC<P>
	}

	declare interface ComponentElement<P, T> {
		type: ComponentClass<P>,
		ref?: Ref<T>
	}

	declare interface DOMElement<P, T> {
		type: string,
		ref: Ref<T>
	}

	declare interface ReactHTMLElement<T> {
		
	}

	declare interface ReactSVGElement {
		
	}

	declare interface Factory<P> {
		(props?: P & Attributes, ...children: ReactNode[]): ReactElement<P>
	}

	declare interface SFCFactory<P> {
		(props?: P & Attributes, ...children: ReactNode[]): SFCElement<P>
	}

	declare interface ComponentFactory<P, T> {
		(props?: P & ClassAttributes<T>, ...children: ReactNode[]): CElement<P, T>
	}

	declare interface DOMFactory<P, T> {
		(props?: P & ClassAttributes<T>, ...children: ReactNode[]): DOMElement<P, T>
	}

	declare interface HTMLFactory<T> {
		
	}

	declare interface SVGFactory {
		
	}

	declare interface ClassicComponent<P, S> {
		replaceState(nextState: S, callback?: () => any): void,
		isMounted(): boolean,
		getInitialState(): S
	}

	declare interface ChildContextProvider<CC> {
		getChildContext(): CC
	}

	declare interface StatelessComponent<P> {
		(props: P, context?: any): ReactElement<any>,
		propTypes?: ValidationMap<P>,
		contextTypes?: ValidationMap<any>,
		defaultProps?: P,
		displayName?: string
	}

	declare interface ComponentClass<P> {
		new (props?: P, context?: any): Component<P, ComponentState>,
		propTypes?: ValidationMap<P>,
		contextTypes?: ValidationMap<any>,
		childContextTypes?: ValidationMap<any>,
		defaultProps?: P,
		displayName?: string
	}

	declare interface ClassicComponentClass<P> {
		new (props?: P, context?: any): ClassicComponent<P, ComponentState>,
		getDefaultProps(): P
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
		isDefaultPrevented(): boolean,
		stopPropagation(): void,
		isPropagationStopped(): boolean,
		persist(): void,
		target: EventTarget,
		timeStamp: Date,
		type: string
	}

	declare interface ClipboardEvent {
		clipboardData: DataTransfer
	}

	declare interface CompositionEvent {
		data: string
	}

	declare interface DragEvent {
		dataTransfer: DataTransfer
	}

	declare interface FocusEvent {
		relatedTarget: EventTarget
	}

	declare interface FormEvent {
		
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

	declare interface AnimationEvent {
		animationName: string,
		pseudoElement: string,
		elapsedTime: number
	}

	declare interface TransitionEvent {
		propertyName: string,
		pseudoElement: string,
		elapsedTime: number
	}

	declare interface EventHandler<E> {
		(event: E): void
	}

	declare interface Props<T> {
		children?: ReactNode,
		key?: Key,
		ref?: Ref<T>
	}

	declare interface HTMLProps<T> {
		
	}

	declare interface SVGProps {
		
	}

	declare interface DOMAttributes {
		children?: ReactNode,
		dangerouslySetInnerHTML?: {
		___html: string
	},
		onCopy?: ClipboardEventHandler,
		onCut?: ClipboardEventHandler,
		onPaste?: ClipboardEventHandler,
		onCompositionEnd?: CompositionEventHandler,
		onCompositionStart?: CompositionEventHandler,
		onCompositionUpdate?: CompositionEventHandler,
		onFocus?: FocusEventHandler,
		onBlur?: FocusEventHandler,
		onChange?: FormEventHandler,
		onInput?: FormEventHandler,
		onSubmit?: FormEventHandler,
		onLoad?: ReactEventHandler,
		onError?: ReactEventHandler,
		onKeyDown?: KeyboardEventHandler,
		onKeyPress?: KeyboardEventHandler,
		onKeyUp?: KeyboardEventHandler,
		onAbort?: ReactEventHandler,
		onCanPlay?: ReactEventHandler,
		onCanPlayThrough?: ReactEventHandler,
		onDurationChange?: ReactEventHandler,
		onEmptied?: ReactEventHandler,
		onEncrypted?: ReactEventHandler,
		onEnded?: ReactEventHandler,
		onLoadedData?: ReactEventHandler,
		onLoadedMetadata?: ReactEventHandler,
		onLoadStart?: ReactEventHandler,
		onPause?: ReactEventHandler,
		onPlay?: ReactEventHandler,
		onPlaying?: ReactEventHandler,
		onProgress?: ReactEventHandler,
		onRateChange?: ReactEventHandler,
		onSeeked?: ReactEventHandler,
		onSeeking?: ReactEventHandler,
		onStalled?: ReactEventHandler,
		onSuspend?: ReactEventHandler,
		onTimeUpdate?: ReactEventHandler,
		onVolumeChange?: ReactEventHandler,
		onWaiting?: ReactEventHandler,
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
		onSelect?: ReactEventHandler,
		onTouchCancel?: TouchEventHandler,
		onTouchEnd?: TouchEventHandler,
		onTouchMove?: TouchEventHandler,
		onTouchStart?: TouchEventHandler,
		onScroll?: UIEventHandler,
		onWheel?: WheelEventHandler,
		onAnimationStart?: AnimationEventHandler,
		onAnimationEnd?: AnimationEventHandler,
		onAnimationIteration?: AnimationEventHandler,
		onTransitionEnd?: TransitionEventHandler
	}

	declare interface CSSProperties {
		alignContent?: any,
		alignItems?: any,
		alignSelf?: any,
		alignmentAdjust?: any,
		alignmentBaseline?: any,
		animationDelay?: any,
		animationDirection?: any,
		animationIterationCount?: any,
		animationName?: any,
		animationPlayState?: any,
		appearance?: any,
		backfaceVisibility?: any,
		background?: any,
		backgroundAttachment?: "scroll" | "fixed" | "local",
		backgroundBlendMode?: any,
		backgroundColor?: any,
		backgroundComposite?: any,
		backgroundImage?: any,
		backgroundOrigin?: any,
		backgroundPosition?: any,
		backgroundRepeat?: any,
		baselineShift?: any,
		behavior?: any,
		border?: any,
		borderBottom?: any,
		borderBottomColor?: any,
		borderBottomLeftRadius?: any,
		borderBottomRightRadius?: any,
		borderBottomStyle?: any,
		borderBottomWidth?: any,
		borderCollapse?: any,
		borderColor?: any,
		borderCornerShape?: any,
		borderImageSource?: any,
		borderImageWidth?: any,
		borderLeft?: any,
		borderLeftColor?: any,
		borderLeftStyle?: any,
		borderLeftWidth?: any,
		borderRight?: any,
		borderRightColor?: any,
		borderRightStyle?: any,
		borderRightWidth?: any,
		borderSpacing?: any,
		borderStyle?: any,
		borderTop?: any,
		borderTopColor?: any,
		borderTopLeftRadius?: any,
		borderTopRightRadius?: any,
		borderTopStyle?: any,
		borderTopWidth?: any,
		borderWidth?: any,
		bottom?: any,
		boxAlign?: any,
		boxDecorationBreak?: any,
		boxDirection?: any,
		boxLineProgression?: any,
		boxLines?: any,
		boxOrdinalGroup?: any,
		boxFlex?: number,
		boxFlexGroup?: number,
		breakAfter?: any,
		breakBefore?: any,
		breakInside?: any,
		clear?: any,
		clip?: any,
		clipRule?: any,
		color?: any,
		columnCount?: number,
		columnFill?: any,
		columnGap?: any,
		columnRule?: any,
		columnRuleColor?: any,
		columnRuleWidth?: any,
		columnSpan?: any,
		columnWidth?: any,
		columns?: any,
		counterIncrement?: any,
		counterReset?: any,
		cue?: any,
		cueAfter?: any,
		cursor?: any,
		direction?: any,
		display?: any,
		fill?: any,
		fillOpacity?: number,
		fillRule?: any,
		filter?: any,
		flex?: number | string,
		flexAlign?: any,
		flexBasis?: any,
		flexDirection?: any,
		flexFlow?: any,
		flexGrow?: number,
		flexItemAlign?: any,
		flexLinePack?: any,
		flexOrder?: any,
		flexShrink?: number,
		float?: any,
		flowFrom?: any,
		font?: any,
		fontFamily?: any,
		fontKerning?: any,
		fontSize?: number | string,
		fontSizeAdjust?: any,
		fontStretch?: any,
		fontStyle?: any,
		fontSynthesis?: any,
		fontVariant?: any,
		fontVariantAlternates?: any,
		fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number,
		gridArea?: any,
		gridColumn?: any,
		gridColumnEnd?: any,
		gridColumnStart?: any,
		gridRow?: any,
		gridRowEnd?: any,
		gridRowPosition?: any,
		gridRowSpan?: any,
		gridTemplateAreas?: any,
		gridTemplateColumns?: any,
		gridTemplateRows?: any,
		height?: any,
		hyphenateLimitChars?: any,
		hyphenateLimitLines?: any,
		hyphenateLimitZone?: any,
		hyphens?: any,
		imeMode?: any,
		justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around",
		layoutGrid?: any,
		layoutGridChar?: any,
		layoutGridLine?: any,
		layoutGridMode?: any,
		layoutGridType?: any,
		left?: any,
		letterSpacing?: any,
		lineBreak?: any,
		lineClamp?: number,
		lineHeight?: number | string,
		listStyle?: any,
		listStyleImage?: any,
		listStylePosition?: any,
		listStyleType?: any,
		margin?: any,
		marginBottom?: any,
		marginLeft?: any,
		marginRight?: any,
		marginTop?: any,
		marqueeDirection?: any,
		marqueeStyle?: any,
		mask?: any,
		maskBorder?: any,
		maskBorderRepeat?: any,
		maskBorderSlice?: any,
		maskBorderSource?: any,
		maskBorderWidth?: any,
		maskClip?: any,
		maskOrigin?: any,
		maxFontSize?: any,
		maxHeight?: any,
		maxWidth?: any,
		minHeight?: any,
		minWidth?: any,
		opacity?: number,
		order?: number,
		orphans?: number,
		outline?: any,
		outlineColor?: any,
		outlineOffset?: any,
		overflow?: any,
		overflowStyle?: any,
		overflowX?: any,
		overflowY?: any,
		padding?: any,
		paddingBottom?: any,
		paddingLeft?: any,
		paddingRight?: any,
		paddingTop?: any,
		pageBreakAfter?: any,
		pageBreakBefore?: any,
		pageBreakInside?: any,
		pause?: any,
		pauseAfter?: any,
		pauseBefore?: any,
		perspective?: any,
		perspectiveOrigin?: any,
		pointerEvents?: any,
		position?: any,
		punctuationTrim?: any,
		quotes?: any,
		regionFragment?: any,
		restAfter?: any,
		restBefore?: any,
		right?: any,
		rubyAlign?: any,
		rubyPosition?: any,
		shapeImageThreshold?: any,
		shapeInside?: any,
		shapeMargin?: any,
		shapeOutside?: any,
		speak?: any,
		speakAs?: any,
		strokeOpacity?: number,
		strokeWidth?: number,
		tabSize?: any,
		tableLayout?: any,
		textAlign?: any,
		textAlignLast?: any,
		textDecoration?: any,
		textDecorationColor?: any,
		textDecorationLine?: any,
		textDecorationLineThrough?: any,
		textDecorationNone?: any,
		textDecorationOverline?: any,
		textDecorationSkip?: any,
		textDecorationStyle?: any,
		textDecorationUnderline?: any,
		textEmphasis?: any,
		textEmphasisColor?: any,
		textEmphasisStyle?: any,
		textHeight?: any,
		textIndent?: any,
		textJustifyTrim?: any,
		textKashidaSpace?: any,
		textLineThrough?: any,
		textLineThroughColor?: any,
		textLineThroughMode?: any,
		textLineThroughStyle?: any,
		textLineThroughWidth?: any,
		textOverflow?: any,
		textOverline?: any,
		textOverlineColor?: any,
		textOverlineMode?: any,
		textOverlineStyle?: any,
		textOverlineWidth?: any,
		textRendering?: any,
		textScript?: any,
		textShadow?: any,
		textTransform?: any,
		textUnderlinePosition?: any,
		textUnderlineStyle?: any,
		top?: any,
		touchAction?: any,
		transform?: any,
		transformOrigin?: any,
		transformOriginZ?: any,
		transformStyle?: any,
		transition?: any,
		transitionDelay?: any,
		transitionDuration?: any,
		transitionProperty?: any,
		transitionTimingFunction?: any,
		unicodeBidi?: any,
		unicodeRange?: any,
		userFocus?: any,
		userInput?: any,
		verticalAlign?: any,
		visibility?: any,
		voiceBalance?: any,
		voiceDuration?: any,
		voiceFamily?: any,
		voicePitch?: any,
		voiceRange?: any,
		voiceRate?: any,
		voiceStress?: any,
		voiceVolume?: any,
		whiteSpace?: any,
		whiteSpaceTreatment?: any,
		widows?: number,
		width?: any,
		wordBreak?: any,
		wordSpacing?: any,
		wordWrap?: any,
		wrapFlow?: any,
		wrapMargin?: any,
		wrapOption?: any,
		writingMode?: any,
		zIndex?: "auto" | number,
		zoom?: "auto" | number,
		[propertyName: string]: any
	}

	declare interface HTMLAttributes {
		defaultChecked?: boolean,
		defaultValue?: string | string[],
		accept?: string,
		acceptCharset?: string,
		accessKey?: string,
		action?: string,
		allowFullScreen?: boolean,
		allowTransparency?: boolean,
		alt?: string,
		async?: boolean,
		autoComplete?: string,
		autoFocus?: boolean,
		autoPlay?: boolean,
		capture?: boolean,
		cellPadding?: number | string,
		cellSpacing?: number | string,
		charSet?: string,
		challenge?: string,
		checked?: boolean,
		classID?: string,
		className?: string,
		cols?: number,
		colSpan?: number,
		content?: string,
		contentEditable?: boolean,
		contextMenu?: string,
		controls?: boolean,
		coords?: string,
		crossOrigin?: string,
		data?: string,
		dateTime?: string,
		default?: boolean,
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
		id?: string,
		inputMode?: string,
		integrity?: string,
		is?: string,
		keyParams?: string,
		keyType?: string,
		kind?: string,
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
		minLength?: number,
		multiple?: boolean,
		muted?: boolean,
		name?: string,
		nonce?: string,
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
		reversed?: boolean,
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
		srcLang?: string,
		srcSet?: string,
		start?: number,
		step?: number | string,
		style?: CSSProperties,
		summary?: string,
		tabIndex?: number,
		target?: string,
		title?: string,
		type?: string,
		useMap?: string,
		value?: string | string[],
		width?: number | string,
		wmode?: string,
		wrap?: string,
		about?: string,
		datatype?: string,
		inlist?: any,
		prefix?: string,
		property?: string,
		resource?: string,
		typeof?: string,
		vocab?: string,
		autoCapitalize?: string,
		autoCorrect?: string,
		autoSave?: string,
		color?: string,
		itemProp?: string,
		itemScope?: boolean,
		itemType?: string,
		itemID?: string,
		itemRef?: string,
		results?: number,
		security?: string,
		unselectable?: boolean,
		[key: string]: any
	}

	declare interface SVGAttributes {
		clipPath?: string,
		colorInterpolationFilters?: "auto" | "sRGB" | "linearRGB" | "inherit",
		cx?: number | string,
		cy?: number | string,
		d?: string,
		dx?: number | string,
		dy?: number | string,
		fill?: string,
		fillOpacity?: number | string,
		filter?: string,
		fontFamily?: string,
		fontSize?: number | string,
		fx?: number | string,
		fy?: number | string,
		gradientTransform?: string,
		gradientUnits?: string,
		in?: string,
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
		result?: string,
		rx?: number | string,
		ry?: number | string,
		spreadMethod?: string,
		stdDeviation?: number | string,
		stopColor?: string,
		stopOpacity?: number | string,
		stroke?: string,
		strokeDasharray?: string,
		strokeLinecap?: "butt" | "round" | "square" | "inherit",
		strokeLinejoin?: "miter" | "round" | "bevel" | "inherit",
		strokeMiterlimit?: string,
		strokeOpacity?: number | string,
		strokeWidth?: number | string,
		textAnchor?: string,
		transform?: string,
		type?: string,
		values?: string,
		version?: string,
		viewBox?: string,
		x1?: number | string,
		x2?: number | string,
		x?: number | string,
		xChannelSelector?: string,
		xlinkActuate?: string,
		xlinkArcrole?: string,
		xlinkHref?: string,
		xlinkRole?: string,
		xlinkShow?: string,
		xlinkTitle?: string,
		xlinkType?: string,
		xmlBase?: string,
		xmlLang?: string,
		xmlns?: string,
		xmlnsXlink?: string,
		xmlSpace?: string,
		y1?: number | string,
		y2?: number | string,
		y?: number | string,
		yChannelSelector?: string,
		z?: number | string,
		zoomAndPan?: string
	}

	declare interface ReactDOM {
		a: HTMLFactory<HTMLAnchorElement>,
		abbr: HTMLFactory<HTMLElement>,
		address: HTMLFactory<HTMLElement>,
		area: HTMLFactory<HTMLAreaElement>,
		article: HTMLFactory<HTMLElement>,
		aside: HTMLFactory<HTMLElement>,
		audio: HTMLFactory<HTMLAudioElement>,
		b: HTMLFactory<HTMLElement>,
		base: HTMLFactory<HTMLBaseElement>,
		bdi: HTMLFactory<HTMLElement>,
		bdo: HTMLFactory<HTMLElement>,
		big: HTMLFactory<HTMLElement>,
		blockquote: HTMLFactory<HTMLElement>,
		body: HTMLFactory<HTMLBodyElement>,
		br: HTMLFactory<HTMLBRElement>,
		button: HTMLFactory<HTMLButtonElement>,
		canvas: HTMLFactory<HTMLCanvasElement>,
		caption: HTMLFactory<HTMLElement>,
		cite: HTMLFactory<HTMLElement>,
		code: HTMLFactory<HTMLElement>,
		col: HTMLFactory<HTMLTableColElement>,
		colgroup: HTMLFactory<HTMLTableColElement>,
		data: HTMLFactory<HTMLElement>,
		datalist: HTMLFactory<HTMLDataListElement>,
		dd: HTMLFactory<HTMLElement>,
		del: HTMLFactory<HTMLElement>,
		details: HTMLFactory<HTMLElement>,
		dfn: HTMLFactory<HTMLElement>,
		dialog: HTMLFactory<HTMLElement>,
		div: HTMLFactory<HTMLDivElement>,
		dl: HTMLFactory<HTMLDListElement>,
		dt: HTMLFactory<HTMLElement>,
		em: HTMLFactory<HTMLElement>,
		embed: HTMLFactory<HTMLEmbedElement>,
		fieldset: HTMLFactory<HTMLFieldSetElement>,
		figcaption: HTMLFactory<HTMLElement>,
		figure: HTMLFactory<HTMLElement>,
		footer: HTMLFactory<HTMLElement>,
		form: HTMLFactory<HTMLFormElement>,
		h1: HTMLFactory<HTMLHeadingElement>,
		h2: HTMLFactory<HTMLHeadingElement>,
		h3: HTMLFactory<HTMLHeadingElement>,
		h4: HTMLFactory<HTMLHeadingElement>,
		h5: HTMLFactory<HTMLHeadingElement>,
		h6: HTMLFactory<HTMLHeadingElement>,
		head: HTMLFactory<HTMLHeadElement>,
		header: HTMLFactory<HTMLElement>,
		hgroup: HTMLFactory<HTMLElement>,
		hr: HTMLFactory<HTMLHRElement>,
		html: HTMLFactory<HTMLHtmlElement>,
		i: HTMLFactory<HTMLElement>,
		iframe: HTMLFactory<HTMLIFrameElement>,
		img: HTMLFactory<HTMLImageElement>,
		input: HTMLFactory<HTMLInputElement>,
		ins: HTMLFactory<HTMLModElement>,
		kbd: HTMLFactory<HTMLElement>,
		keygen: HTMLFactory<HTMLElement>,
		label: HTMLFactory<HTMLLabelElement>,
		legend: HTMLFactory<HTMLLegendElement>,
		li: HTMLFactory<HTMLLIElement>,
		link: HTMLFactory<HTMLLinkElement>,
		main: HTMLFactory<HTMLElement>,
		map: HTMLFactory<HTMLMapElement>,
		mark: HTMLFactory<HTMLElement>,
		menu: HTMLFactory<HTMLElement>,
		menuitem: HTMLFactory<HTMLElement>,
		meta: HTMLFactory<HTMLMetaElement>,
		meter: HTMLFactory<HTMLElement>,
		nav: HTMLFactory<HTMLElement>,
		noscript: HTMLFactory<HTMLElement>,
		object: HTMLFactory<HTMLObjectElement>,
		ol: HTMLFactory<HTMLOListElement>,
		optgroup: HTMLFactory<HTMLOptGroupElement>,
		option: HTMLFactory<HTMLOptionElement>,
		output: HTMLFactory<HTMLElement>,
		p: HTMLFactory<HTMLParagraphElement>,
		param: HTMLFactory<HTMLParamElement>,
		picture: HTMLFactory<HTMLElement>,
		pre: HTMLFactory<HTMLPreElement>,
		progress: HTMLFactory<HTMLProgressElement>,
		q: HTMLFactory<HTMLQuoteElement>,
		rp: HTMLFactory<HTMLElement>,
		rt: HTMLFactory<HTMLElement>,
		ruby: HTMLFactory<HTMLElement>,
		s: HTMLFactory<HTMLElement>,
		samp: HTMLFactory<HTMLElement>,
		script: HTMLFactory<HTMLElement>,
		section: HTMLFactory<HTMLElement>,
		select: HTMLFactory<HTMLSelectElement>,
		small: HTMLFactory<HTMLElement>,
		source: HTMLFactory<HTMLSourceElement>,
		span: HTMLFactory<HTMLSpanElement>,
		strong: HTMLFactory<HTMLElement>,
		style: HTMLFactory<HTMLStyleElement>,
		sub: HTMLFactory<HTMLElement>,
		summary: HTMLFactory<HTMLElement>,
		sup: HTMLFactory<HTMLElement>,
		table: HTMLFactory<HTMLTableElement>,
		tbody: HTMLFactory<HTMLTableSectionElement>,
		td: HTMLFactory<HTMLTableDataCellElement>,
		textarea: HTMLFactory<HTMLTextAreaElement>,
		tfoot: HTMLFactory<HTMLTableSectionElement>,
		th: HTMLFactory<HTMLTableHeaderCellElement>,
		thead: HTMLFactory<HTMLTableSectionElement>,
		time: HTMLFactory<HTMLElement>,
		title: HTMLFactory<HTMLTitleElement>,
		tr: HTMLFactory<HTMLTableRowElement>,
		track: HTMLFactory<HTMLTrackElement>,
		u: HTMLFactory<HTMLElement>,
		ul: HTMLFactory<HTMLUListElement>,
		var: HTMLFactory<HTMLElement>,
		video: HTMLFactory<HTMLVideoElement>,
		wbr: HTMLFactory<HTMLElement>,
		svg: SVGFactory,
		circle: SVGFactory,
		defs: SVGFactory,
		ellipse: SVGFactory,
		g: SVGFactory,
		image: SVGFactory,
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
		map<T>(children: ReactNode, fn: (child: ReactChild, index: number) => T): T[],
		forEach(children: ReactNode, fn: (child: ReactChild, index: number) => any): void,
		count(children: ReactNode): number,
		only(children: ReactNode): ReactElement<any>,
		toArray(children: ReactNode): ReactChild[]
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

	declare function createFactory<P, T>(type: string): DOMFactory<P, T>

	declare function createFactory<P>(type: SFC<P>): SFCFactory<P>

	declare function createFactory<P>(
		type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>
	): CFactory<P, ClassicComponent<P, ComponentState>>

	declare function createFactory<P, T, C>(type: ClassType<P, T, C>): CFactory<P, T>

	declare function createFactory<P>(type: ComponentClass<P> | SFC<P>): Factory<P>

	declare function createElement<P, T>(
		type: string, props?: P & ClassAttributes<T>, ...children: ReactNode[]
	): DOMElement<P, T>

	declare function createElement<P>(
		type: SFC<P>, props?: P & Attributes, ...children: ReactNode[]
	): SFCElement<P>

	declare function createElement<P>(
		type: ClassType<P, ClassicComponent<P, ComponentState>, ClassicComponentClass<P>>, props?: P & ClassAttributes<ClassicComponent<P, ComponentState>>, ...children: ReactNode[]
	): CElement<P, ClassicComponent<P, ComponentState>>

	declare function createElement<P, T, C>(
		type: ClassType<P, T, C>, props?: P & ClassAttributes<T>, ...children: ReactNode[]
	): CElement<P, T>

	declare function createElement<P>(
		type: ComponentClass<P> | SFC<P>, props?: P & Attributes, ...children: ReactNode[]
	): ReactElement<P>

	declare function cloneElement<P, T>(
		element: DOMElement<P, T>, props?: P & ClassAttributes<T>, ...children: ReactNode[]
	): DOMElement<P, T>

	declare function cloneElement<P, Q>(
		element: SFCElement<P>, props?: Q, ...children: ReactNode[]
	): SFCElement<P>

	declare function cloneElement<P, Q, T>(
		element: CElement<P, T>, props?: Q, ...children: ReactNode[]
	): CElement<P, T>

	declare function cloneElement<P, Q>(
		element: ReactElement<P>, props?: Q, ...children: ReactNode[]
	): ReactElement<P>

	declare function isValidElement<P>(object: {
		
	}): ReactElement

	declare class Component<P, S> extends ComponentLifecycle<P, S> {
		constructor(props?: P, context?: any): this;
		setState(f: (prevState: S, props: P) => S, callback?: () => any): void;
		setState(state: S, callback?: () => any): void;
		forceUpdate(callback?: () => any): void;
		render(): JSX.Element;
		props: P & {
		children?: ReactNode
	};
		state: S;
		context: any;
		refs: {
		[key: string]: ReactInstance
	}
	}

	declare class PureComponent<P, S> extends Component<P, S> {
		
	}

	
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

	declare interface IntrinsicAttributes {
		
	}

	declare interface IntrinsicClassAttributes<T> {
		
	}

	declare interface IntrinsicElements {
		a: React.HTMLProps<HTMLAnchorElement>,
		abbr: React.HTMLProps<HTMLElement>,
		address: React.HTMLProps<HTMLElement>,
		area: React.HTMLProps<HTMLAreaElement>,
		article: React.HTMLProps<HTMLElement>,
		aside: React.HTMLProps<HTMLElement>,
		audio: React.HTMLProps<HTMLAudioElement>,
		b: React.HTMLProps<HTMLElement>,
		base: React.HTMLProps<HTMLBaseElement>,
		bdi: React.HTMLProps<HTMLElement>,
		bdo: React.HTMLProps<HTMLElement>,
		big: React.HTMLProps<HTMLElement>,
		blockquote: React.HTMLProps<HTMLElement>,
		body: React.HTMLProps<HTMLBodyElement>,
		br: React.HTMLProps<HTMLBRElement>,
		button: React.HTMLProps<HTMLButtonElement>,
		canvas: React.HTMLProps<HTMLCanvasElement>,
		caption: React.HTMLProps<HTMLElement>,
		cite: React.HTMLProps<HTMLElement>,
		code: React.HTMLProps<HTMLElement>,
		col: React.HTMLProps<HTMLTableColElement>,
		colgroup: React.HTMLProps<HTMLTableColElement>,
		data: React.HTMLProps<HTMLElement>,
		datalist: React.HTMLProps<HTMLDataListElement>,
		dd: React.HTMLProps<HTMLElement>,
		del: React.HTMLProps<HTMLElement>,
		details: React.HTMLProps<HTMLElement>,
		dfn: React.HTMLProps<HTMLElement>,
		dialog: React.HTMLProps<HTMLElement>,
		div: React.HTMLProps<HTMLDivElement>,
		dl: React.HTMLProps<HTMLDListElement>,
		dt: React.HTMLProps<HTMLElement>,
		em: React.HTMLProps<HTMLElement>,
		embed: React.HTMLProps<HTMLEmbedElement>,
		fieldset: React.HTMLProps<HTMLFieldSetElement>,
		figcaption: React.HTMLProps<HTMLElement>,
		figure: React.HTMLProps<HTMLElement>,
		footer: React.HTMLProps<HTMLElement>,
		form: React.HTMLProps<HTMLFormElement>,
		h1: React.HTMLProps<HTMLHeadingElement>,
		h2: React.HTMLProps<HTMLHeadingElement>,
		h3: React.HTMLProps<HTMLHeadingElement>,
		h4: React.HTMLProps<HTMLHeadingElement>,
		h5: React.HTMLProps<HTMLHeadingElement>,
		h6: React.HTMLProps<HTMLHeadingElement>,
		head: React.HTMLProps<HTMLHeadElement>,
		header: React.HTMLProps<HTMLElement>,
		hgroup: React.HTMLProps<HTMLElement>,
		hr: React.HTMLProps<HTMLHRElement>,
		html: React.HTMLProps<HTMLHtmlElement>,
		i: React.HTMLProps<HTMLElement>,
		iframe: React.HTMLProps<HTMLIFrameElement>,
		img: React.HTMLProps<HTMLImageElement>,
		input: React.HTMLProps<HTMLInputElement>,
		ins: React.HTMLProps<HTMLModElement>,
		kbd: React.HTMLProps<HTMLElement>,
		keygen: React.HTMLProps<HTMLElement>,
		label: React.HTMLProps<HTMLLabelElement>,
		legend: React.HTMLProps<HTMLLegendElement>,
		li: React.HTMLProps<HTMLLIElement>,
		link: React.HTMLProps<HTMLLinkElement>,
		main: React.HTMLProps<HTMLElement>,
		map: React.HTMLProps<HTMLMapElement>,
		mark: React.HTMLProps<HTMLElement>,
		menu: React.HTMLProps<HTMLElement>,
		menuitem: React.HTMLProps<HTMLElement>,
		meta: React.HTMLProps<HTMLMetaElement>,
		meter: React.HTMLProps<HTMLElement>,
		nav: React.HTMLProps<HTMLElement>,
		noscript: React.HTMLProps<HTMLElement>,
		object: React.HTMLProps<HTMLObjectElement>,
		ol: React.HTMLProps<HTMLOListElement>,
		optgroup: React.HTMLProps<HTMLOptGroupElement>,
		option: React.HTMLProps<HTMLOptionElement>,
		output: React.HTMLProps<HTMLElement>,
		p: React.HTMLProps<HTMLParagraphElement>,
		param: React.HTMLProps<HTMLParamElement>,
		picture: React.HTMLProps<HTMLElement>,
		pre: React.HTMLProps<HTMLPreElement>,
		progress: React.HTMLProps<HTMLProgressElement>,
		q: React.HTMLProps<HTMLQuoteElement>,
		rp: React.HTMLProps<HTMLElement>,
		rt: React.HTMLProps<HTMLElement>,
		ruby: React.HTMLProps<HTMLElement>,
		s: React.HTMLProps<HTMLElement>,
		samp: React.HTMLProps<HTMLElement>,
		script: React.HTMLProps<HTMLElement>,
		section: React.HTMLProps<HTMLElement>,
		select: React.HTMLProps<HTMLSelectElement>,
		small: React.HTMLProps<HTMLElement>,
		source: React.HTMLProps<HTMLSourceElement>,
		span: React.HTMLProps<HTMLSpanElement>,
		strong: React.HTMLProps<HTMLElement>,
		style: React.HTMLProps<HTMLStyleElement>,
		sub: React.HTMLProps<HTMLElement>,
		summary: React.HTMLProps<HTMLElement>,
		sup: React.HTMLProps<HTMLElement>,
		table: React.HTMLProps<HTMLTableElement>,
		tbody: React.HTMLProps<HTMLTableSectionElement>,
		td: React.HTMLProps<HTMLTableDataCellElement>,
		textarea: React.HTMLProps<HTMLTextAreaElement>,
		tfoot: React.HTMLProps<HTMLTableSectionElement>,
		th: React.HTMLProps<HTMLTableHeaderCellElement>,
		thead: React.HTMLProps<HTMLTableSectionElement>,
		time: React.HTMLProps<HTMLElement>,
		title: React.HTMLProps<HTMLTitleElement>,
		tr: React.HTMLProps<HTMLTableRowElement>,
		track: React.HTMLProps<HTMLTrackElement>,
		u: React.HTMLProps<HTMLElement>,
		ul: React.HTMLProps<HTMLUListElement>,
		var: React.HTMLProps<HTMLElement>,
		video: React.HTMLProps<HTMLVideoElement>,
		wbr: React.HTMLProps<HTMLElement>,
		svg: React.SVGProps,
		circle: React.SVGProps,
		clipPath: React.SVGProps,
		defs: React.SVGProps,
		desc: React.SVGProps,
		ellipse: React.SVGProps,
		feBlend: React.SVGProps,
		feColorMatrix: React.SVGProps,
		feComponentTransfer: React.SVGProps,
		feComposite: React.SVGProps,
		feConvolveMatrix: React.SVGProps,
		feDiffuseLighting: React.SVGProps,
		feDisplacementMap: React.SVGProps,
		feDistantLight: React.SVGProps,
		feFlood: React.SVGProps,
		feFuncA: React.SVGProps,
		feFuncB: React.SVGProps,
		feFuncG: React.SVGProps,
		feFuncR: React.SVGProps,
		feGaussianBlur: React.SVGProps,
		feImage: React.SVGProps,
		feMerge: React.SVGProps,
		feMergeNode: React.SVGProps,
		feMorphology: React.SVGProps,
		feOffset: React.SVGProps,
		fePointLight: React.SVGProps,
		feSpecularLighting: React.SVGProps,
		feSpotLight: React.SVGProps,
		feTile: React.SVGProps,
		feTurbulence: React.SVGProps,
		filter: React.SVGProps,
		foreignObject: React.SVGProps,
		g: React.SVGProps,
		image: React.SVGProps,
		line: React.SVGProps,
		linearGradient: React.SVGProps,
		marker: React.SVGProps,
		mask: React.SVGProps,
		metadata: React.SVGProps,
		path: React.SVGProps,
		pattern: React.SVGProps,
		polygon: React.SVGProps,
		polyline: React.SVGProps,
		radialGradient: React.SVGProps,
		rect: React.SVGProps,
		stop: React.SVGProps,
		switch: React.SVGProps,
		symbol: React.SVGProps,
		text: React.SVGProps,
		textPath: React.SVGProps,
		tspan: React.SVGProps,
		use: React.SVGProps,
		view: React.SVGProps
	}

			
}