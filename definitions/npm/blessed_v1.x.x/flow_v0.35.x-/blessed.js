

declare module 'blessed' {
			declare export function screen(options?: Widgets.IScreenOptions): Widgets.Screen

	declare export function box(options?: Widgets.BoxOptions): Widgets.BoxElement

	declare export function text(options?: Widgets.TextOptions): Widgets.TextElement

	declare export function line(options?: Widgets.LineOptions): Widgets.LineElement

	declare export function scrollablebox(options?: Widgets.BoxOptions): Widgets.BoxElement

	declare export function scrollabletext(options?: Widgets.BoxOptions): Widgets.BoxElement

	declare export function bigtext(options?: Widgets.BigTextOptions): Widgets.BigTextElement

	declare export function list(options?: Widgets.ListOptions<Widgets.ListElementStyle>): Widgets.ListElement

	declare export function filemanager(options?: Widgets.FileManagerOptions): Widgets.FileManagerElement

	declare export function listtable(options?: Widgets.ListTableOptions): Widgets.ListTableElement

	declare export function listbar(options?: Widgets.ListbarOptions): Widgets.ListbarElement

	declare export function form<TFormData>(options?: Widgets.FormOptions): Widgets.FormElement<TFormData>

	declare export function input(options?: Widgets.InputOptions): Widgets.InputElement

	declare export function textarea(options?: Widgets.TextareaOptions): Widgets.TextareaElement

	declare export function textbox(options?: Widgets.TextboxOptions): Widgets.TextboxElement

	declare export function button(options?: Widgets.ButtonOptions): Widgets.ButtonElement

	declare export function checkbox(options?: Widgets.CheckboxOptions): Widgets.CheckboxElement

	declare export function radioset(options?: Widgets.RadioSetOptions): Widgets.RadioSetElement

	declare export function radiobutton(options?: Widgets.RadioButtonOptions): Widgets.RadioButtonElement

	declare export function table(options?: Widgets.TableOptions): Widgets.TableElement

	declare export function prompt(options?: Widgets.PromptOptions): Widgets.PromptElement

	declare export function question(options?: Widgets.QuestionOptions): Widgets.QuestionElement

	declare export function message(options?: Widgets.MessageOptions): Widgets.MessageElement

	declare export function loading(options?: Widgets.LoadingOptions): Widgets.LoadingElement

	declare export function progressbar(options?: Widgets.ProgressBarOptions): Widgets.ProgressBarElement

	declare export function terminal(options?: Widgets.TerminalOptions): Widgets.TerminalElement

	declare export function layout(options?: Widgets.LayoutOptions): Widgets.LayoutElement

	declare export function escape(item: any): any

	declare export class BlessedProgram  {
		hideCursor: () => void;
		move: any;
		showCursor: any
	}

	
}

declare module 'Types' {
	declare export type TTopLeft = string | number | "center";

	declare export type TPosition = string | number;

	declare export type TMouseAction = "mousedown" | "mouseup" | "mousemove";

	declare export type TStyle = {
		type?: string,
		bg?: string,
		fg?: string,
		ch?: string,
		bold?: boolean,
		underline?: boolean,
		blink?: boolean,
		inverse?: boolean,
		invisible?: boolean,
		transparent?: boolean,
		border?: "line" | "bg" | TBorder,
		hover?: boolean,
		focus?: boolean,
		label?: string,
		track?: {
		bg?: string,
		fg?: string
	},
		scrollbar?: {
		bg?: string,
		fg?: string
	}
	};

	declare export type TBorder = {
		type?: "line" | "bg",
		ch?: string,
		bg?: number,
		fg?: number,
		bold?: string,
		underline?: string
	};

	declare export type TCursor = {
		artificial: boolean,
		shape: boolean,
		blink: boolean,
		color: string
	};

	declare export type TAlign = "left" | "center" | "right";

	declare export type ListbarCommand = {
		key: string,
		callback: () => void
	};

	declare export type TImage = {
		width: number,
		height: number,
		bmp: any,
		cellmap: any
	};

	declare export type Cursor = {
		artificial: boolean,
		shape: boolean,
		blink: boolean,
		color: string
	};

				
}

declare module 'Events' {
		declare export interface IMouseEventArg {
		x: number,
		y: number,
		action: Types.TMouseAction
	}

	declare export interface IKeyEventArg {
		full: string,
		name: string,
		shift: boolean,
		ctrl: boolean,
		meta: boolean,
		sequence: string
	}

			
}

declare module 'Widgets' {
		declare export interface NodeChildProcessExecOptions {
		cwd?: string,
		stdio?: any,
		customFds?: any,
		env?: any,
		encoding?: string,
		timeout?: number,
		maxBuffer?: number,
		killSignal?: string
	}

	declare export interface IDestroyable {
		destroy(): void
	}

	declare export interface IOptions {
		
	}

	declare export interface IHasOptions<T> {
		options: T
	}

	declare export interface TputsOptions {
		terminal?: string,
		extended?: boolean,
		debug?: boolean,
		termcap?: string,
		terminfoFile?: string,
		terminfoPrefix?: string,
		termcapFile?: string
	}

	declare export interface IDestroyable {
		destroy(): void
	}

	declare export interface INodeOptions {
		name?: string,
		screen?: Screen,
		parent?: Node,
		children?: Node[],
		focusable?: boolean
	}

	declare export interface IScreenOptions {
		program?: BlessedProgram,
		smartCSR?: boolean,
		fastCSR?: boolean,
		useBCE?: boolean,
		resizeTimeout?: number,
		tabSize?: number,
		autoPadding?: boolean,
		cursor?: Types.TCursor,
		log?: (...msg: any[]) => void,
		dump?: string,
		debug?: (...msg: string[]) => void,
		ignoreLocked?: boolean,
		dockBorders?: boolean,
		ignoreDockContrast?: boolean,
		fullUnicode?: boolean,
		sendFocus?: boolean,
		warnings?: boolean,
		forceUnicode?: boolean,
		input?: stream.Writable,
		output?: stream.Readable,
		tput?: Tput,
		focused?: BlessedElement,
		width?: Types.TPosition,
		height?: Types.TPosition,
		cols?: number,
		rows?: number,
		top?: Types.TTopLeft,
		left?: Types.TTopLeft,
		right?: Types.TPosition,
		bottom?: Types.TPosition,
		atop?: Types.TTopLeft,
		aleft?: Types.TTopLeft,
		aright?: Types.TPosition,
		abottom?: Types.TPosition,
		grabKeys?: any,
		lockKeys?: boolean,
		hover?: any,
		terminal?: string,
		title?: string
	}

	declare export interface Padding {
		left?: number,
		right?: number,
		top?: number,
		bottom?: number
	}

	declare export interface Position {
		left: number | string,
		right: number | string,
		top: number | string,
		bottom: number | string
	}

	declare export interface Border {
		type?: "line" | "bg",
		ch?: string,
		bg?: number,
		fg?: number,
		bold?: string,
		underline?: string
	}

	declare export interface ElementOptions {
		tags?: boolean,
		fg?: string,
		bg?: string,
		bold?: string,
		underline?: string,
		style?: any,
		border?: Border | "line" | "bg",
		content?: string,
		clickable?: boolean,
		input?: boolean,
		keyable?: boolean,
		focused?: BlessedElement,
		hidden?: boolean,
		label?: string,
		hoverText?: string,
		align?: "left" | "center" | "right",
		valign?: "top" | "middle" | "bottom",
		shrink?: boolean,
		padding?: number | Padding,
		top?: Types.TTopLeft,
		left?: Types.TTopLeft,
		right?: Types.TPosition,
		bottom?: Types.TPosition,
		width?: number | string,
		height?: number | string,
		position?: Position,
		scrollable?: boolean,
		ch?: string,
		draggable?: boolean,
		shadow?: boolean
	}

	declare export interface Coords {
		xl: number,
		xi: number,
		yl: number,
		yi: number,
		base: number,
		_contentEnd: {
		x: number,
		y: number
	},
		notop: Types.TTopLeft,
		noleft: Types.TTopLeft,
		noright: Types.TPosition,
		nobot: Types.TPosition
	}

	declare export interface LabelOptions {
		text: string,
		side: Types.TAlign
	}

	declare export interface ScrollableBoxOptions {
		baseLimit?: number,
		alwaysScroll?: boolean,
		scrollbar?: {
		style?: any,
		track?: any,
		ch?: string
	}
	}

	declare export interface ScrollableTextOptions {
		mouse?: boolean | (() => void),
		keys?: string | string[] | boolean,
		vi?: boolean
	}

	declare export interface BoxOptions {
		bindings?: any
	}

	declare export interface TextOptions {
		fill?: boolean,
		align?: Types.TAlign
	}

	declare export interface LineOptions {
		orientation?: "vertical" | "horizontal",
		type?: string,
		bg?: string,
		fg?: string,
		ch?: string
	}

	declare export interface BigTextOptions {
		font?: string,
		fontBold?: string,
		fch?: string
	}

	declare export interface ListElementStyle {
		selected?: any,
		item?: any
	}

	declare export interface ListOptions<TStyle> {
		style?: TStyle,
		items?: string[],
		search?: () => void,
		interactive?: boolean,
		invertSelected?: boolean
	}

	declare export interface FileManagerOptions {
		cwd?: string
	}

	declare export interface StyleListTable {
		header?: any,
		cell?: any
	}

	declare export interface ListTableOptions {
		rows?: string[],
		data?: string[][],
		pad?: number,
		noCellBorders?: boolean,
		style?: StyleListTable
	}

	declare export interface ListbarOptions {
		style?: ListElementStyle,
		commands: Types.ListbarCommand[],
		items: Types.ListbarCommand[],
		autoCommandKeys: boolean
	}

	declare export interface FormOptions {
		keys?: any,
		vi?: boolean
	}

	declare export interface InputOptions {
		
	}

	declare export interface TextareaOptions {
		inputOnFocus?: boolean
	}

	declare export interface TextboxOptions {
		secret?: boolean,
		censor?: boolean
	}

	declare export interface ButtonOptions {
		
	}

	declare export interface CheckboxOptions {
		checked?: boolean,
		mouse?: boolean
	}

	declare export interface RadioSetOptions {
		
	}

	declare export interface RadioButtonOptions {
		
	}

	declare export interface PromptOptions {
		
	}

	declare export interface QuestionOptions {
		
	}

	declare export interface MessageOptions {
		
	}

	declare export interface LoadingOptions {
		
	}

	declare export interface ProgressBarOptions {
		orientation: string,
		pch: string,
		filled: number,
		value: number,
		keys: boolean,
		mouse: boolean
	}

	declare export interface LogOptions {
		scrollback?: number,
		scrollOnInput?: boolean
	}

	declare export interface TableOptions {
		rows?: string[][],
		data?: string[][],
		pad?: number,
		noCellBorders?: boolean,
		fillCellBorders?: boolean
	}

	declare export interface TerminalOptions {
		handler?: (userInput: Buffer) => void,
		shell?: string,
		args?: any,
		cursor?: "line" | "underline" | "block",
		terminal?: string,
		env?: any
	}

	declare export interface ImageOptions {
		file: string,
		type: "ansi" | "overlay" | "w3m"
	}

	declare export interface ANSIImageOptions {
		file: string,
		scale: number,
		width: number | string,
		height: number | string,
		ascii: string,
		animate: boolean,
		speed: number,
		optimization: "mem" | "cpu"
	}

	declare export interface OverlayImageOptions {
		file: string,
		ansi: boolean,
		w3m: string,
		search: string
	}

	declare export interface VideoOptions {
		file: string,
		start: number
	}

	declare export interface LayoutOptions {
		renderer?: () => void,
		layout: "inline" | "inline-block" | "grid"
	}

		declare export class Tput extends IHasOptions<TputsOptions> {
		constructor(opts: TputsOptions): this;
		options: TputsOptions;
		debug: boolean;
		padding: boolean;
		extended: boolean;
		printf: boolean;
		termcap: string;
		terminfoPrefix: string;
		terminfoFile: string;
		termcapFile: string;
		error: Error;
		terminal: string;
		setup(): void;
		term(is: any): boolean;
		readTerminfo(term: string): string;
		parseTerminfo(
		data: any, file: string
	): {
		header: {
		dataSize: number,
		headerSize: number,
		magicNumber: boolean,
		namesSize: number,
		boolCount: number,
		numCount: number,
		strCount: number,
		strTableSize: number,
		extended: {
		dataSize: number,
		headerSize: number,
		boolCount: number,
		numCount: number,
		strCount: number,
		strTableSize: number,
		lastStrTableOffset: number
	}
	},
		name: string,
		names: string[],
		desc: string,
		bools: Object,
		numbers: Object,
		strings: Object
	}
	}

	declare export class Node extends EventEmitter, IHasOptions<INodeOptions> {
		constructor(options: INodeOptions): this;
		focusable: boolean;
		options: INodeOptions;
		data: {
		[index: string]: any
	};
		_: {
		[index: string]: any
	};
		$: {
		[index: string]: any
	};
		type: string;
		index: number;
		screen: Screen;
		parent: Node;
		children: Node[];
		prepend(node: Node): void;
		append(node: Node): void;
		remove(node: Node): void;
		insert(node: Node, index: number): void;
		insertBefore(node: Node, refNode: Node): void;
		insertAfter(node: Node, refNode: Node): void;
		detach(): void;
		free(): void;
		forDescendants(iter: Function, s: any): void;
		forAncestors(iter: Function, s: any): void;
		collectDescendants(s: any): void;
		collectAncestors(s: any): void;
		emitDescendants(): void;
		emitAncestors(): void;
		hasDescendant(target: Node): void;
		hasAncestor(target: Node): boolean;
		destroy(): void;
		emitDescendants(type: string, ...args: any[]): void;
		get<T>(name: string, def: T): T;
		set<T>(name: string, value: T): void;
		on(event: string, listener: Function): this;
		on(event: "adopt", callback: (arg: Node) => void): this;
		on(event: "remove", callback: (arg: Node) => void): this;
		on(event: "reparent", callback: (arg: Node) => void): this;
		on(event: "attach", callback: (arg: Node) => void): this;
		on(event: "detach", callback: (arg: Node) => void): this
	}

	declare export class NodeWithEvents extends Node {
		key(name: string | string[], listener: Function): void;
		onceKey(name: string, listener: Function): void;
		unkey(name: string, listener: Function): void;
		removeKey(name: string, listener: Function): void;
		on(event: string, listener: Function): this;
		on(event: "resize", callback: () => void): this;
		on(event: "mouse", callback: (arg: Events.IMouseEventArg) => void): this;
		on(event: "mouseout", callback: (arg: Events.IMouseEventArg) => void): this;
		on(event: "mouseover", callback: (arg: Events.IMouseEventArg) => void): this;
		on(event: "mousedown", callback: (arg: Events.IMouseEventArg) => void): this;
		on(event: "mouseup", callback: (arg: Events.IMouseEventArg) => void): this;
		on(event: "mousewheel", callback: (arg: Events.IMouseEventArg) => void): this;
		on(event: "wheeldown", callback: (arg: Events.IMouseEventArg) => void): this;
		on(event: "wheelup", callback: (arg: Events.IMouseEventArg) => void): this;
		on(event: "mousemove", callback: (arg: Events.IMouseEventArg) => void): this;
		on(
		event: "keypress", callback: (ch: string, key: Events.IKeyEventArg) => void
	): this;
		on(event: "element click", callback: (arg: Screen) => void): this;
		on(event: "element mouseover", callback: (arg: Screen) => void): this;
		on(event: "element mouseout", callback: (arg: Screen) => void): this;
		on(event: "element mouseup", callback: (arg: Screen) => void): this;
		on(event: "focus", callback: (arg: Screen) => void): this;
		on(event: "blur", callback: (arg: Screen) => void): this;
		on(event: "prerender", callback: () => void): this;
		on(event: "render", callback: () => void): this;
		on(event: "warning", callback: (text: string) => void): this;
		on(event: "destroy", callback: () => void): this;
		on(event: "move", callback: () => void): this;
		on(event: "click", callback: (arg: Screen) => void): this;
		on(event: "show", callback: () => void): this;
		on(event: "hide", callback: () => void): this;
		on(event: "set content", callback: () => void): this;
		on(event: "parsed content", callback: () => void): this
	}

	declare export class Screen extends NodeWithEvents, IHasOptions<IScreenOptions> {
		constructor(opts: IScreenOptions): this;
		cleanSides: any;
		options: IScreenOptions;
		program: BlessedProgram;
		smartCSR: boolean;
		fastCSR: boolean;
		useBCE: boolean;
		resizeTimeout: number;
		tabSize: number;
		autoPadding: boolean;
		cursor: Types.TCursor;
		dump: string;
		ignoreLocked: boolean;
		dockBorders: boolean;
		ignoreDockContrast: boolean;
		fullUnicode: boolean;
		sendFocus: boolean;
		warnings: boolean;
		forceUnicode: boolean;
		input: stream.Writable;
		output: stream.Readable;
		tput: Tput;
		focused: BlessedElement;
		width: Types.TPosition;
		height: Types.TPosition;
		cols: number;
		rows: number;
		top: Types.TTopLeft;
		left: Types.TTopLeft;
		right: Types.TPosition;
		bottom: Types.TPosition;
		atop: Types.TTopLeft;
		aleft: Types.TTopLeft;
		aright: Types.TPosition;
		abottom: Types.TPosition;
		grabKeys: any;
		lockKeys: boolean;
		hover: any;
		terminal: string;
		title: string;
		log(...msg: any[]): void;
		debug(...msg: string[]): void;
		alloc(): void;
		realloc(): void;
		draw(start: number, end: number): void;
		render(): void;
		clearRegion(x1: number, x2: number, y1: number, y2: number): void;
		fillRegion(attr: string, ch: string, x1: number, x2: number, y1: number, y2: number): void;
		focusOffset(offset: number): any;
		focusPrevious(): void;
		focusNext(): void;
		focusPush(element: BlessedElement): void;
		focusPop(): BlessedElement;
		saveFocus(): BlessedElement;
		restoreFocus(): BlessedElement;
		rewindFocus(): BlessedElement;
		spawn(
		file: string, args: string[], options: NodeChildProcessExecOptions
	): child_process.ChildProcess;
		exec(
		file: string, args: string[], options: NodeChildProcessExecOptions, callback: Function
	): child_process.ChildProcess;
		readEditor(
		options: any, callback: (err: NodeJS.ErrnoException, data: Buffer) => void
	): void;
		readEditor(callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
		setEffects(
		el: BlessedElement, fel: BlessedElement, over: any, out: any, effects: any, temp: any
	): void;
		insertLine(n: number, y: number, top: number, bottom: number): void;
		deleteLine(n: number, y: number, top: number, bottom: number): void;
		insertBottom(top: number, bottom: number): void;
		insertTop(top: number, bottom: number): void;
		deleteBottom(top: number, bottom: number): void;
		deleteTop(top: number, bottom: number): void;
		enableMouse(el: BlessedElement): void;
		enableMouse(): void;
		enableKeys(el: BlessedElement): void;
		enableKeys(): void;
		enableInput(el: BlessedElement): void;
		enableInput(): void;
		copyToClipboard(text: string): void;
		cursorShape(shape: boolean, blink: boolean): any;
		cursorColor(color: string): void;
		cursorReset(): void;
		screenshot(xi: number, xl: number, yi: number, yl: number): string;
		screenshot(): void;
		destroy(): void;
		setTerminal(term: string): void
	}

	declare export class PositionCoords  {
		xi: number;
		xl: number;
		yi: number;
		yl: number
	}

	declare export class BlessedElement extends NodeWithEvents, IHasOptions<ElementOptions> {
		constructor(opts: ElementOptions): this;
		options: ElementOptions;
		name: string;
		border: Border;
		style: any;
		position: Position;
		content: string;
		hidden: boolean;
		visible: boolean;
		detached: boolean;
		bg: number;
		fg: number;
		bold: string;
		underline: string;
		width: number | string;
		height: number | string;
		top: Types.TTopLeft;
		left: Types.TTopLeft;
		right: Types.TPosition;
		bottom: Types.TPosition;
		atop: Types.TTopLeft;
		aleft: Types.TTopLeft;
		aright: Types.TPosition;
		abottom: Types.TPosition;
		draggable: boolean;
		itop: Types.TTopLeft;
		ileft: Types.TTopLeft;
		iheight: Types.TPosition;
		iwidth: Types.TPosition;
		rtop: Types.TTopLeft;
		rleft: Types.TTopLeft;
		rright: Types.TPosition;
		rbottom: Types.TPosition;
		lpos: PositionCoords;
		render(): Coords;
		hide(): void;
		show(): void;
		toggle(): void;
		focus(): void;
		onScreenEvent(type: string, handler: Function): void;
		removeScreenEvent(type: string, handler: Function): void;
		free(): void;
		destroy(): void;
		setIndex(z: number): void;
		setFront(): void;
		setBack(): void;
		setLabel(arg: string | LabelOptions): void;
		removeLabel(): any;
		setHover(arg: string | LabelOptions): void;
		removeHover(): void;
		enableMouse(): void;
		enableKeys(): void;
		enableInput(): void;
		enableDrag(): void;
		disableDrag(): void;
		screenshot(xi: number, xl: number, yi: number, yl: number): string;
		screenshot(): void;
		setContent(text: string): void;
		getContent(): string;
		setText(text: string): void;
		getText(): string;
		insertLine(i: number, lines: string | string[]): void;
		deleteLine(i: number): void;
		getLine(i: number): string;
		getBaseLine(i: number): string;
		setLine(i: number, line: string | string[]): void;
		setBaseLine(i: number, line: string | string[]): void;
		clearLine(i: number): void;
		clearBaseLine(i: number): void;
		insertTop(lines: string | string[]): void;
		insertBottom(lines: string | string[]): void;
		deleteTop(): void;
		deleteBottom(): void;
		unshiftLine(lines: string | string[]): void;
		shiftLine(i: number): void;
		pushLine(lines: string | string[]): void;
		popLine(i: number): string;
		getLines(): string[];
		getScreenLines(): string[];
		strWidth(text: string): string
	}

	declare export class ScrollableBoxElement extends BlessedElement {
		childBase: number;
		childOffset: number;
		scroll(offset: number, always?: boolean): void;
		scrollTo(index: number): void;
		setScroll(index: number): void;
		setScrollPerc(perc: number): void;
		getScroll(): void;
		getScrollHeight(): void;
		getScrollPerc(): void;
		resetScroll(): void;
		on(event: string, listener: Function): this;
		on(event: "scroll", callback: () => void): this
	}

	declare export class ScrollableTextElement extends ScrollableBoxElement {
		
	}

	declare export class BoxElement extends ScrollableTextElement, IHasOptions<BoxOptions> {
		constructor(opts: BoxOptions): this;
		options: BoxOptions
	}

	declare export class TextElement extends BlessedElement, IHasOptions<TextOptions> {
		constructor(opts: TextOptions): this;
		options: TextOptions
	}

	declare export class LineElement extends BoxElement, IHasOptions<LineOptions> {
		constructor(opts: LineOptions): this;
		options: LineOptions
	}

	declare export class BigTextElement extends BoxElement, IHasOptions<BigTextOptions> {
		constructor(opts: BigTextOptions): this;
		options: BigTextOptions
	}

	declare export class ListElement extends BoxElement, IHasOptions<ListOptions<ListElementStyle>> {
		constructor(opts: ListOptions<ListElementStyle>): this;
		options: ListOptions<ListElementStyle>;
		add(text: string): void;
		addItem(text: string): void;
		removeItem(child: BlessedElement): BlessedElement;
		pushItem(child: BlessedElement): number;
		popItem(): BlessedElement;
		unshiftItem(child: BlessedElement): number;
		shiftItem(): BlessedElement;
		insertItem(i: number, child: BlessedElement): void;
		getItem(child: BlessedElement): BlessedElement;
		setItem(child: BlessedElement, content: BlessedElement | string): void;
		spliceItem(i: number, n: number, ...items: BlessedElement[]): void;
		clearItems(): void;
		setItems(items: BlessedElement[]): void;
		getItemIndex(child: BlessedElement): number;
		select(index: number): void;
		move(offset: number): void;
		up(amount: number): void;
		down(amount: number): void;
		pick(callback: () => void): void;
		fuzzyFind(arg: string | RegExp | (() => void)): void;
		on(event: string, listener: Function): this;
		on(event: "select", callback: (item: BoxElement, index: number) => void): this;
		on(event: "cancel", callback: () => void): this;
		on(event: "action", callback: () => void): this;
		on(event: "create item", callback: () => void): this;
		on(event: "add item", callback: () => void): this;
		on(event: "remove item", callback: () => void): this;
		on(event: "insert item", callback: () => void): this;
		on(event: "set items", callback: () => void): this;
		on(
		event: "select item", callback: (item: BlessedElement, index: number) => void
	): this
	}

	declare export class FileManagerElement extends ListElement, IHasOptions<FileManagerOptions> {
		constructor(opts: FileManagerOptions): this;
		options: FileManagerOptions;
		cwd: string;
		refresh(cwd: string, callback: () => void): void;
		refresh(callback: () => void): void;
		refresh(): void;
		pick(cwd: string, callback: () => void): void;
		pick(callback: () => void): void;
		reset(cwd: string, callback: () => void): void;
		reset(callback: () => void): void;
		reset(): void;
		on(event: string, listener: Function): this;
		on(event: "cd", callback: (file: string, cwd: string) => void): this;
		on(event: "file", callback: (file: string) => void): this;
		on(event: "error", callback: (err: any, file: string) => void): this;
		on(event: "refresh", callback: () => void): this
	}

	declare export class ListTableElement extends ListElement, IHasOptions<ListTableOptions> {
		constructor(opts: ListTableOptions): this;
		options: ListTableOptions;
		setRows(rows: string[][]): void;
		setData(rows: string[][]): void
	}

	declare export class ListbarElement extends BoxElement, IHasOptions<ListbarOptions> {
		constructor(opts: ListbarOptions): this;
		options: ListbarOptions;
		setItems(commands: Types.ListbarCommand[]): void;
		add(item: Types.ListbarCommand, callback: () => void): void;
		addItem(item: Types.ListbarCommand, callback: () => void): void;
		appendItem(item: Types.ListbarCommand, callback: () => void): void;
		select(offset: number): void;
		removeItem(child: BlessedElement): void;
		move(offset: number): void;
		moveLeft(offset: number): void;
		moveRight(offset: number): void;
		selectTab(index: number): void;
		on(event: string, listener: Function): this;
		on(event: "set items", callback: () => void): this;
		on(event: "remove item", callback: () => void): this;
		on(event: "select tab", callback: () => void): this
	}

	declare export class FormElement<TFormData> extends BoxElement, IHasOptions<FormOptions> {
		constructor(opts: FormOptions): this;
		options: FormOptions;
		submission: TFormData;
		focusNext(): void;
		focusPrevious(): void;
		submit(): void;
		cancel(): void;
		reset(): void;
		on(event: string, listener: Function): this;
		on(event: "submit", callback: (out: TFormData) => void): this;
		on(event: "cancel", callback: () => void): this;
		on(event: "reset", callback: () => void): this
	}

	declare export class InputElement extends BoxElement {
		constructor(opts: InputOptions): this
	}

	declare export class TextareaElement extends InputElement, IHasOptions<TextareaOptions> {
		constructor(opts: TextareaOptions): this;
		options: TextareaOptions;
		value: string;
		submit(): void;
		cancel(): void;
		readInput(callback?: (err: any, value?: string) => void): void;
		input(callback: (err: any, value?: string) => void): void;
		setInput(callback: (err: any, value?: string) => void): void;
		readEditor(callback: (err: any, value?: string) => void): void;
		editor(callback: (err: any, value?: string) => void): void;
		setEditor(callback: (err: any, value?: string) => void): void;
		getValue(): string;
		clearValue(): void;
		setValue(text: string): void;
		on(event: string, listener: Function): this;
		on(event: "error", callback: (err: any) => void): this;
		on(event: "submit", callback: (value: any) => void): this;
		on(event: "cancel", callback: (value: any) => void): this;
		on(event: "action", callback: (value: any) => void): this
	}

	declare export class TextboxElement extends TextareaElement, IHasOptions<TextboxOptions> {
		constructor(opts: TextboxOptions): this;
		options: TextboxOptions;
		secret: boolean;
		censor: boolean
	}

	declare export class ButtonElement extends InputElement, IHasOptions<ButtonOptions> {
		constructor(opts: ButtonOptions): this;
		options: ButtonOptions;
		press(): void;
		on(event: string, listener: Function): this;
		on(event: "press", callback: () => void): this
	}

	declare export class CheckboxElement extends InputElement, IHasOptions<CheckboxOptions> {
		constructor(options?: CheckboxOptions): this;
		options: CheckboxOptions;
		text: string;
		checked: boolean;
		value: boolean;
		check(): void;
		uncheck(): void;
		toggle(): void
	}

	declare export class RadioSetElement extends BoxElement {
		constructor(opts: RadioSetOptions): this
	}

	declare export class RadioButtonElement extends CheckboxElement {
		constructor(opts: RadioButtonOptions): this
	}

	declare export class PromptElement extends BoxElement, IHasOptions<PromptOptions> {
		constructor(opts: PromptOptions): this;
		options: PromptOptions;
		input(text: string, value: string, callback: (err: any, value: string) => void): void;
		setInput(text: string, value: string, callback: (err: any, value: string) => void): void;
		readInput(text: string, value: string, callback: (err: any, value: string) => void): void
	}

	declare export class QuestionElement extends BoxElement, IHasOptions<QuestionOptions> {
		constructor(opts: QuestionOptions): this;
		options: QuestionOptions;
		ask(question: string, callback: (err: any, value: string) => void): void
	}

	declare export class MessageElement extends BoxElement, IHasOptions<MessageOptions> {
		constructor(opts: MessageOptions): this;
		options: MessageOptions;
		log(text: string, time: number, callback: (err: any) => void): void;
		log(text: string, callback: (err: any) => void): void;
		display(text: string, time: number, callback: (err: any) => void): void;
		display(text: string, callback: (err: any) => void): void;
		error(text: string, time: number, callback: () => void): void;
		error(text: string, callback: () => void): void
	}

	declare export class LoadingElement extends BoxElement, IHasOptions<LoadingOptions> {
		constructor(opts: LoadingOptions): this;
		options: LoadingOptions;
		load(text: string): void;
		stop(): void
	}

	declare export class ProgressBarElement extends InputElement, IHasOptions<ProgressBarOptions> {
		constructor(options?: ProgressBarOptions): this;
		options: ProgressBarOptions;
		progress(amount: number): void;
		setProgress(amount: number): void;
		reset(): void;
		on(event: string, listener: Function): this;
		on(event: "reset", callback: () => void): this;
		on(event: "complete", callback: () => void): this
	}

	declare export class Log extends ScrollableTextElement, IHasOptions<LogOptions> {
		constructor(options?: LogOptions): this;
		options: LogOptions;
		scrollback: number;
		scrollOnInput: boolean;
		log(text: string): void;
		add(text: string): void
	}

	declare export class TableElement extends BoxElement, IHasOptions<TableOptions> {
		constructor(opts: TableOptions): this;
		options: TableOptions;
		setData(rows: string[][]): void;
		setRows(rows: string[][]): void
	}

	declare export class TerminalElement extends BoxElement, IHasOptions<TerminalOptions> {
		constructor(opts: TerminalOptions): this;
		options: TerminalOptions;
		term: any;
		pty: any;
		write(data: string): void;
		screenshot(xi?: number, xl?: number, yi?: number, yl?: number): string
	}

	declare export class ImageElement extends BoxElement, IHasOptions<ImageOptions> {
		constructor(options?: ImageOptions): this;
		options: ImageOptions
	}

	declare export class ANSIImageElement extends BoxElement, IHasOptions<ANSIImageOptions> {
		constructor(options?: ANSIImageOptions): this;
		options: ANSIImageOptions;
		img: Types.TImage;
		setImage(img: string, callback: () => void): void;
		clearImage(callback: () => void): void;
		play(): void;
		pause(): void;
		stop(): void
	}

	declare export class OverlayImageElement extends BoxElement, IHasOptions<OverlayImageOptions> {
		constructor(options?: OverlayImageOptions): this;
		options: OverlayImageOptions;
		setImage(img: string, callback: () => void): void;
		clearImage(callback: () => void): void;
		imageSize(img: string, callback: () => void): void;
		termSize(callback: () => void): void;
		getPixelRatio(callback: () => void): void
	}

	declare export class VideoElement extends BoxElement, IHasOptions<VideoOptions> {
		constructor(options?: VideoOptions): this;
		options: VideoOptions;
		tty: any
	}

	declare export class LayoutElement extends BlessedElement, IHasOptions<LayoutOptions> {
		constructor(options?: LayoutOptions): this;
		options: LayoutOptions;
		renderer(coords: PositionCoords): void;
		isRendered(el: BlessedElement): boolean;
		getLast(i: number): Element;
		getLastCoords(i: number): PositionCoords
	}

	declare export class Program  {
		text(text: string, attr: string): string
	}

	
}

declare module 'widget' {
				declare export class Element extends Widgets$BlessedElement {
		
	}

	declare export class Node extends Widgets$Node {
		
	}

	declare export class Screen extends Widgets$Screen {
		
	}

	declare export class Box extends Widgets$BoxElement {
		
	}

	declare export class ScrollableBox extends Widgets$ScrollableBoxElement {
		
	}

	declare export class ScrollableText extends Widgets$ScrollableTextElement {
		
	}

	declare export class Text extends Widgets$BoxElement {
		
	}

	declare export class Line extends Widgets$LineElement {
		
	}

	declare export class BigText extends Widgets$BigTextElement {
		
	}

	declare export class List extends Widgets$ListElement {
		
	}

	declare export class FileManager extends Widgets$FileManagerElement {
		
	}

	declare export class ListTable extends Widgets$ListTableElement {
		
	}

	declare export class ListBar extends Widgets$ListbarElement {
		
	}

	declare export class Form<TFormData> extends Widgets$FormElement<TFormData> {
		
	}

	declare export class Textarea extends Widgets$TextareaElement {
		
	}

	declare export class Button extends Widgets$ButtonElement {
		
	}

	declare export class Checkbox extends Widgets$CheckboxElement {
		
	}

	declare export class RadioSet extends Widgets$RadioSetElement {
		
	}

	declare export class RadioButton extends Widgets$RadioButtonElement {
		
	}

	declare export class Prompt extends Widgets$PromptElement {
		
	}

	declare export class question extends Widgets$QuestionElement {
		
	}

	declare export class Message extends Widgets$MessageElement {
		
	}

	declare export class Loading extends Widgets$LoadingElement {
		
	}

	declare export class ProgressBar extends Widgets$ProgressBarElement {
		
	}

	declare export class Terminal extends Widgets$TerminalElement {
		
	}

	
}