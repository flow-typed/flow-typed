import type { IMathJax } from 'npm$namespace$jax'

declare module 'mathjax' {
					
}

declare module 'npm$namespace$jax' {
		declare export interface IMathJax {
		Hub?: IMathJaxHub,
		Ajax?: IAjax,
		Message?: IMessage,
		HTML?: IHTML,
		Callback?: ICallback,
		Localization?: ILocalization,
		InputJax?: IInputJax,
		OutputJax?: IOutputJax
	}

	declare export interface ICallback {
		(fn: Function): ICallbackObject,
		(fns: Function[]): ICallbackObject,
		(objs: any[]): ICallbackObject,
		(obj: any): ICallbackObject,
		(code: string): ICallbackObject,
		Delay(time: number, callback: any): ICallbackObject,
		Queue(...args: any[]): IQueue,
		Signal(name: string): ISignal,
		ExecuteHooks(hooks: any[], data: any[], reset: boolean): ICallbackObject,
		Hooks(reset: boolean): IHooks
	}

	declare export interface IHooks {
		Add(hook: any, priority: number): ICallbackObject,
		Remove(hook: ICallbackObject): void,
		Execute(): ICallbackObject
	}

	declare export interface IQueue {
		pending: number,
		running: number,
		queue: any[],
		Push(specs: any[]): ICallbackObject,
		Process(): void,
		Suspend(): void,
		Resume(): void,
		wait(callback: Function): Function,
		call(): void
	}

	declare export interface ISignal {
		name: string,
		posted: any[],
		listeners: ICallbackObject[],
		Post(message: string): ICallbackObject,
		Post(message: string, callback: ICallbackObject): ICallbackObject,
		Clear(): ICallbackObject,
		Clear(callback: ICallbackObject): ICallbackObject,
		Interest(callback: ICallbackObject): ICallbackObject,
		Interest(callback: ICallbackObject, ignorePast: boolean): ICallbackObject,
		NoInterest(callback: ICallbackObject): void,
		MessageHook(message: string, callback: ICallbackObject): ICallbackObject,
		ExecuteHook(message: string): void
	}

	declare export interface ICallbackObject {
		hook: number,
		data: any[],
		object: any,
		called: boolean,
		autoReset: boolean,
		reset(): void
	}

	declare export interface IMathJaxHub {
		config?: IMathJaxConfig,
		processUpdateTime?: number,
		processUpdateDelay?: number,
		signal?: ISignal,
		queue?: any,
		Browser?: IBrowserInfo,
		inputJax?: any,
		outputJax?: any,
		Register?: IRegister,
		Config(config: IMathJaxConfig): void,
		Configured(): void,
		Queue(callBack: any): any,
		Typeset(element: any, callBack: any): any,
		PreProcess(element: any, callBack: any): any,
		Process(element: any, callBack: any): any,
		Update(element: any, callBack: any): any,
		Reprocess(element: any, callBack: any): any,
		Rerender(element: any, callBack: any): any,
		getAllJax(element: any): any[],
		getJaxByType(type: string, element: any): void,
		getJaxByInputType(type: string, element: any): void,
		getJaxFor(element: any): any,
		isJax(element: any): number,
		setRenderer(renderer: string, type: string): void,
		Insert(dst: any, src: any): any,
		formatError(script: any, error: any): void
	}

	declare export interface IRegister {
		PreProcessor(callBack: any): void,
		MessageHook(type: string, callBack: any): void,
		StartupHook(type: string, callBack: any): void,
		LoadHook(file: string, callBack: Function): void
	}

	declare export interface IBrowserInfo {
		version: string,
		isMac?: boolean,
		isPC?: boolean,
		isMobile?: boolean,
		isFirefox?: boolean,
		isSafari?: boolean,
		isChrome?: boolean,
		isOpera?: boolean,
		isMSIE?: boolean,
		isKonqueror?: boolean,
		versionAtLeast(version: string): void,
		Select(choices: any): void
	}

	declare export interface IAjax {
		timeout?: number,
		STATUS: ISTATUS,
		loaded: any,
		loading: boolean,
		loadHooks: any,
		Require(file: string, callBack: any): any,
		Load(file: string, callBack: any): any,
		loadComplete(file: string): void,
		loadTimeout(file: string): void,
		loadError(file: string): void,
		LoadHook(file: string, callBack: any): any,
		Preloading(...args: any[]): void,
		Styles(styles: any, callback: any): any,
		fileURL(file: string): string
	}

	declare export interface ISTATUS {
		OK: string,
		ERROR: string
	}

	declare export interface IMessage {
		Set(message: string, n: number, delay: number): number,
		Clear(n: number, delay: number): void,
		Remove(): void,
		File(file: string): number,
		filterText(text: string, n: number): string,
		Log(): string
	}

	declare export interface IHTML {
		Cookie?: ICookie,
		Element(type: string, attributes: any, contents: any): any,
		addElement(parent: any, type: string, attributes: any, content: any): any,
		TextNode(text: string): any,
		addText(parent: any, text: string): any,
		setScript(script: string, text: string): void,
		getScript(script: string): string
	}

	declare export interface ICookie {
		prefix?: string,
		expires?: number,
		Set(name: string, data: any): void,
		Get(name: string): any,
		Get(name: string, obj: any): any
	}

	declare export interface IMenuSettings {
		zoom?: string,
		CTRL?: boolean,
		ALT?: boolean,
		CMD?: boolean,
		Shift?: boolean,
		zscale?: string,
		context?: string,
		texHints?: boolean,
		mpContext?: boolean,
		mpMouse?: boolean
	}

	declare export interface IErrorSettings {
		message?: string[],
		style?: any
	}

	declare export interface IMathJaxConfig {
		MathZoom?: IMathZoom,
		MathMenu?: IMathMenu,
		MathEvents?: IMathEvents,
		FontWarnings?: IFontWarnings,
		Safe?: ISafe,
		MatchWebFonts?: IMatchWebFonts,
		SVG?: ISVGOutputProcessor,
		MMLorHTML?: IMMLorHTMLConfiguration,
		NativeMML?: INativeMMLOutputProcessor,
		HTML-CSS?: IHTMLCSSOutputProcessor,
		CommonHTML?: ICommonHTMLOutputProcessor,
		AsciiMath?: IAsciiMathInputProcessor,
		MathML?: IMathMLInputProcessor,
		TeX?: ITeXInputProcessor,
		jsMath2jax?: IJSMath2jaxPreprocessor,
		asciimath2jax?: IAsciimath2jaxPreprocessor,
		mml2jax?: IMML2jaxPreprocessor,
		tex2jax?: ITEX2jaxPreprocessor,
		jax?: string[],
		extensions?: string[],
		config?: string[],
		styleSheets?: string[],
		styles?: any,
		preJax?: any,
		postJax?: any,
		preRemoveClass?: string,
		showProcessingMessages?: boolean,
		messageStyle?: string,
		displayAlign?: string,
		displayIndent?: string,
		delayStartupUntil?: string,
		skipStartupTypeset?: boolean,
		elements?: string[],
		positionToHash?: boolean,
		showMathMenu?: boolean,
		showMathMenuMSIE?: boolean,
		menuSettings?: IMenuSettings,
		errorSettings?: IErrorSettings,
		v1.0-compatible?: boolean
	}

	declare export interface IMathZoom {
		styles: any
	}

	declare export interface IMathMenu {
		delay?: number,
		helpURL?: string,
		showRenderer?: boolean,
		showFontMenu?: boolean,
		showLocale?: boolean,
		showMathPlayer?: boolean,
		showContext?: boolean,
		semanticsAnnotations?: any,
		windowSettings?: any,
		styles?: any
	}

	declare export interface IMathEvents {
		hover?: number,
		styles?: any
	}

	declare export interface IFontWarnings {
		messageStyle?: any,
		Message?: IHTMLMessages,
		HTML?: IHTMLSnippets,
		removeAfter?: number,
		fadeoutSteps?: number,
		fadeoutTime?: number
	}

	declare export interface IHTMLMessages {
		webFont?: any[],
		imageFonts?: any[],
		noFonts?: any[]
	}

	declare export interface IHTMLSnippets {
		closeBox?: string,
		webfonts?: string,
		fonts?: string,
		STIXfonts?: string,
		TeXfonts?: string
	}

	declare export interface ISafe {
		allow?: ISafeAllow,
		sizeMin?: number,
		sizeMax?: number,
		safeProtocols?: ISafeProtocols,
		safeStyles?: ISafeStyles,
		safeRequire?: ISafeRequire
	}

	declare export interface ISafeAllow {
		URLs?: string,
		classes?: string,
		cssIDs?: string,
		styles?: string,
		require?: string,
		fontsize?: string
	}

	declare export interface ISafeProtocols {
		http?: boolean,
		https?: boolean,
		file?: boolean,
		javascript?: boolean
	}

	declare export interface ISafeStyles {
		color?: boolean,
		backgroundColor?: boolean,
		border?: boolean,
		cursor?: boolean,
		margin?: boolean,
		padding?: boolean,
		textShadow?: boolean,
		fontFamily?: boolean,
		fontSize?: boolean,
		fontStyle?: boolean,
		fontWeight?: boolean,
		opacity?: boolean,
		outline?: boolean
	}

	declare export interface ISafeRequire {
		action?: boolean,
		amscd?: boolean,
		amsmath?: boolean,
		amssymbols?: boolean,
		autobold?: boolean,
		autoload-all?: boolean,
		bbox?: boolean,
		begingroup?: boolean,
		boldsymbol?: boolean,
		cancel?: boolean,
		color?: boolean,
		enclose?: boolean,
		extpfeil?: boolean,
		HTML?: boolean,
		mathchoice?: boolean,
		mhchem?: boolean,
		newcommand?: boolean,
		noErrors?: boolean,
		noUndefined?: boolean,
		unicode?: boolean,
		verb?: boolean
	}

	declare export interface IMatchWebFonts {
		matchFor?: IMatchFor,
		fontCheckDelay?: number,
		fontCheckTimeout?: number
	}

	declare export interface IMatchFor {
		HTML-CSS?: boolean,
		NativeMML?: boolean,
		SVG?: boolean
	}

	declare export interface ISVGOutputProcessor {
		scale?: number,
		minScaleAdjust?: number,
		font?: string,
		blacker?: number,
		undefinedFamily?: string[],
		mtextFontInherit?: boolean,
		addMMLclasses?: boolean,
		EqnChunk?: number,
		EqnChunkFactor?: number,
		EqnChunkDelay?: number,
		matchFontHeight?: boolean,
		linebreaks?: ILineBreaks,
		styles?: any,
		tooltip?: IToolTip
	}

	declare export interface ILineBreaks {
		automatic?: boolean,
		width?: string
	}

	declare export interface IToolTip {
		delayPost: number,
		delayClear: number,
		offsetX: number,
		offsetY: number
	}

	declare export interface IMMLorHTMLConfiguration {
		prefer?: IBrowserPreference
	}

	declare export interface IBrowserPreference {
		MSIE?: string,
		Firefox?: string,
		Safari?: string,
		Chrome?: string,
		Opera?: string,
		other?: string
	}

	declare export interface INativeMMLOutputProcessor {
		scale?: number,
		minScaleAdjust?: number,
		matchFontHeight?: boolean,
		styles?: any
	}

	declare export interface IHTMLCSSOutputProcessor {
		scale?: number,
		minScaleAdjust?: number,
		availableFonts?: string[],
		preferredFont?: string,
		webFont?: string,
		imageFont?: string,
		undefinedFamily?: string[],
		mtextFontInherit?: boolean,
		EqnChunk?: number,
		EqnChunkFactor?: number,
		EqnChunkDelay?: number,
		matchFontHeight?: boolean,
		linebreaks?: ILineBreaks,
		styles?: any,
		showMathMenu?: boolean,
		tooltip?: IToolTip
	}

	declare export interface ICommonHTMLOutputProcessor {
		scale?: number,
		minScaleAdjust?: number,
		mtextFontInherit?: boolean,
		linebreaks?: ILineBreaks
	}

	declare export interface IAsciiMathInputProcessor {
		displaystyle?: boolean,
		decimal?: string
	}

	declare export interface IMathMLInputProcessor {
		useMathMLspacing?: boolean
	}

	declare export interface ITeXInputProcessor {
		TagSide?: string,
		TagIndent?: string,
		MultLineWidth?: string,
		equationNumbers?: IEquationNumbers,
		Macros?: any,
		MAXMACROS?: number,
		MAXBUFFER?: number,
		extensions?: string[]
	}

	declare export interface IEquationNumbers {
		autoNumber?: string,
		formatNumber?: (n: number) => string,
		formatTag?: (n: number) => string,
		formatID?: () => string,
		formatURL?: (id: string) => string,
		useLabelIds?: boolean
	}

	declare export interface IJSMath2jaxPreprocessor {
		preview: any
	}

	declare export interface IAsciimath2jaxPreprocessor {
		delimiters?: any,
		preview?: any,
		skipTags?: string[],
		ignoreClass?: string,
		processClass?: string
	}

	declare export interface IMML2jaxPreprocessor {
		preview?: any
	}

	declare export interface ITEX2jaxPreprocessor {
		inlineMath?: any,
		displayMath?: any,
		balanceBraces?: boolean,
		processEscapes?: boolean,
		processEnvironments?: boolean,
		preview?: any,
		skipTags?: string[],
		ignoreClass?: string,
		processClass?: string
	}

	declare export interface ILocalization {
		locale: string,
		directory: string,
		strings: any,
		_(id: number, message: string, ...args: any[]): void,
		setLocale(locale: string): void,
		addTranslation(locale: string, domain: string, def: any): void,
		setCSS(div: any): any,
		fontFamily(): string,
		fontDirection(): string,
		plural(value: any): number,
		number(value: number): string,
		loadDomain(domain: string): ICallbackObject,
		loadDomain(domain: string, callback: ICallbackObject): ICallbackObject,
		Try(spec: any): void
	}

	declare export interface IInputJax {
		id: string,
		version: string,
		directory: string,
		elementJax: string,
		Process(script: any, state: any): any,
		Translate(script: any, state: any): IElementJax,
		Register(mimetype: string): void,
		needsUpdate(element: any): boolean
	}

	declare export interface IOutputJax {
		id: string,
		version: string,
		directory: string,
		fontDir: string,
		imageDir: string,
		preProcess(state: any): void,
		preTranslate(state: any): void,
		Translate(script: any, state: any): IElementJax,
		postTranslate(state: any): void,
		Register(mimetype: string): void,
		Remove(jax: any): void,
		getJaxFromMath(math: any): IElementJax,
		Zoom(jax: any, span: any, math: any, Mw: number, Mh: number): IZoomStruct
	}

	declare export interface IZoomStruct {
		Y: number,
		mW: number,
		mH: number,
		zW: number,
		zH: number
	}

	declare export interface IElementJax {
		id: string,
		version: string,
		directory: string,
		inputJax: string,
		outputJax: string,
		inputID: string,
		originalText: string,
		mimeType: string,
		Text(text: string): ICallbackObject,
		Text(text: string, callback: any): ICallbackObject,
		Rerender(callback: any): ICallbackObject,
		Reprocess(callback: any): ICallbackObject,
		Remove(): void,
		SourceElement(): any,
		needsUpdate(): boolean
	}

			
}