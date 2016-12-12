import type { DocConstructor, PositionConstructor } from 'npm$namespace$CodeMirror'

declare module 'codemirror' {
			declare function CodeMirror(host: HTMLElement, options?: CodeMirror.EditorConfiguration): CodeMirror.Editor

	declare function CodeMirror(
		callback: (host: HTMLElement) => void, options?: CodeMirror.EditorConfiguration
	): CodeMirror.Editor

		declare module.exports: undefined


}

declare module 'npm$namespace$CodeMirror' {
		declare interface Editor {
		hasFocus(): boolean,
		findPosH(
		start: CodeMirror.Position, amount: number, unit: string, visually: boolean
	): {
		line: number,
		ch: number,
		hitSide?: boolean
	},
		findPosV(
		start: CodeMirror.Position, amount: number, unit: string
	): {
		line: number,
		ch: number,
		hitSide?: boolean
	},
		setOption(option: string, value: any): void,
		getOption(option: string): any,
		addKeyMap(map: any, bottom?: boolean): void,
		removeKeyMap(map: any): void,
		addOverlay(mode: any, options?: any): void,
		removeOverlay(mode: any): void,
		getDoc(): CodeMirror.Doc,
		swapDoc(doc: CodeMirror.Doc): CodeMirror.Doc,
		getValue(seperator?: string): string,
		setValue(content: string): void,
		setGutterMarker(line: any, gutterID: string, value: HTMLElement): CodeMirror.LineHandle,
		clearGutter(gutterID: string): void,
		addLineClass(line: any, where: string, _class_: string): CodeMirror.LineHandle,
		removeLineClass(line: any, where: string, class_: string): CodeMirror.LineHandle,
		lineInfo(
		line: any
	): {
		line: any,
		handle: any,
		text: string,
		gutterMarkers: any,
		textClass: string,
		bgClass: string,
		wrapClass: string,
		widgets: any
	},
		addWidget(pos: CodeMirror.Position, node: HTMLElement, scrollIntoView: boolean): void,
		addLineWidget(
		line: any, node: HTMLElement, options?: {
		coverGutter: boolean,
		noHScroll: boolean,
		above: boolean,
		showIfHidden: boolean
	}
	): CodeMirror.LineWidget,
		setSize(width: any, height: any): void,
		scrollTo(x: number, y: number): void,
		getScrollInfo(): CodeMirror.ScrollInfo,
		scrollIntoView(pos: CodeMirror.Position, margin?: number): void,
		scrollIntoView(
		pos: {
		left: number,
		top: number,
		right: number,
		bottom: number
	}, margin: number
	): void,
		scrollIntoView(pos: {
		line: number,
		ch: number
	}, margin?: number): void,
		scrollIntoView(
		pos: {
		from: CodeMirror.Position,
		to: CodeMirror.Position
	}, margin: number
	): void,
		cursorCoords(
		where: boolean, mode: string
	): {
		left: number,
		top: number,
		bottom: number
	},
		cursorCoords(
		where: CodeMirror.Position, mode: string
	): {
		left: number,
		top: number,
		bottom: number
	},
		charCoords(
		pos: CodeMirror.Position, mode: string
	): {
		left: number,
		right: number,
		top: number,
		bottom: number
	},
		coordsChar(object: {
		left: number,
		top: number
	}, mode?: string): CodeMirror.Position,
		defaultTextHeight(): number,
		defaultCharWidth(): number,
		getViewport(): {
		from: number,
		to: number
	},
		refresh(): void,
		getTokenAt(
		pos: CodeMirror.Position
	): {
		start: number,
		end: number,
		string: string,
		type: string,
		state: any
	},
		getStateAfter(line?: number): any,
		operation<T>(fn: () => T): T,
		indentLine(line: number, dir?: string): void,
		focus(): void,
		getInputField(): HTMLTextAreaElement,
		getWrapperElement(): HTMLElement,
		getScrollerElement(): HTMLElement,
		getGutterElement(): HTMLElement,
		on(eventName: string, handler: (instance: CodeMirror.Editor) => void): void,
		off(eventName: string, handler: (instance: CodeMirror.Editor) => void): void,
		on(
		eventName: "change", handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList) => void
	): void,
		off(
		eventName: "change", handler: (instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList) => void
	): void,
		on(
		eventName: "changes", handler: (
		instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]
	) => void
	): void,
		off(
		eventName: "changes", handler: (
		instance: CodeMirror.Editor, change: CodeMirror.EditorChangeLinkedList[]
	) => void
	): void,
		on(
		eventName: "beforeChange", handler: (
		instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable
	) => void
	): void,
		off(
		eventName: "beforeChange", handler: (
		instance: CodeMirror.Editor, change: CodeMirror.EditorChangeCancellable
	) => void
	): void,
		on(
		eventName: "cursorActivity", handler: (instance: CodeMirror.Editor) => void
	): void,
		off(
		eventName: "cursorActivity", handler: (instance: CodeMirror.Editor) => void
	): void,
		on(
		eventName: "beforeSelectionChange", handler: (
		instance: CodeMirror.Editor, selection: {
		head: CodeMirror.Position,
		anchor: CodeMirror.Position
	}
	) => void
	): void,
		off(
		eventName: "beforeSelectionChange", handler: (
		instance: CodeMirror.Editor, selection: {
		head: CodeMirror.Position,
		anchor: CodeMirror.Position
	}
	) => void
	): void,
		on(
		eventName: "viewportChange", handler: (instance: CodeMirror.Editor, from: number, to: number) => void
	): void,
		off(
		eventName: "viewportChange", handler: (instance: CodeMirror.Editor, from: number, to: number) => void
	): void,
		on(
		eventName: "gutterClick", handler: (
		instance: CodeMirror.Editor, line: number, gutter: string, clickEvent: Event
	) => void
	): void,
		off(
		eventName: "gutterClick", handler: (
		instance: CodeMirror.Editor, line: number, gutter: string, clickEvent: Event
	) => void
	): void,
		on(eventName: "focus", handler: (instance: CodeMirror.Editor) => void): void,
		off(eventName: "focus", handler: (instance: CodeMirror.Editor) => void): void,
		on(eventName: "blur", handler: (instance: CodeMirror.Editor) => void): void,
		off(eventName: "blur", handler: (instance: CodeMirror.Editor) => void): void,
		on(eventName: "scroll", handler: (instance: CodeMirror.Editor) => void): void,
		off(eventName: "scroll", handler: (instance: CodeMirror.Editor) => void): void,
		on(eventName: "update", handler: (instance: CodeMirror.Editor) => void): void,
		off(eventName: "update", handler: (instance: CodeMirror.Editor) => void): void,
		on(
		eventName: "renderLine", handler: (instance: CodeMirror.Editor, line: number, element: HTMLElement) => void
	): void,
		off(
		eventName: "renderLine", handler: (instance: CodeMirror.Editor, line: number, element: HTMLElement) => void
	): void,
		state: any
	}

	declare interface EditorFromTextArea {
		save(): void,
		toTextArea(): void,
		getTextArea(): HTMLTextAreaElement
	}

	declare interface DocConstructor {
		new (text: string, mode?: any, firstLineNumber?: number, lineSep?: string): Doc,
		(text: string, mode?: any, firstLineNumber?: number, lineSep?: string): Doc
	}

	declare interface Doc {
		getValue(seperator?: string): string,
		setValue(content: string): void,
		getRange(from: Position, to: CodeMirror.Position, seperator?: string): string,
		replaceRange(replacement: string, from: CodeMirror.Position, to?: CodeMirror.Position): void,
		getLine(n: number): string,
		setLine(n: number, text: string): void,
		removeLine(n: number): void,
		lineCount(): number,
		firstLine(): number,
		lastLine(): number,
		getLineHandle(num: number): CodeMirror.LineHandle,
		getLineNumber(handle: CodeMirror.LineHandle): number,
		eachLine(f: (line: CodeMirror.LineHandle) => void): void,
		eachLine(start: number, end: number, f: (line: CodeMirror.LineHandle) => void): void,
		markClean(): void,
		isClean(): boolean,
		getSelection(): string,
		replaceSelection(replacement: string, collapse?: string): void,
		getCursor(start?: string): CodeMirror.Position,
		listSelections(): {
		anchor: CodeMirror.Position,
		head: CodeMirror.Position
	}[],
		somethingSelected(): boolean,
		setCursor(pos: CodeMirror.Position): void,
		setSelection(anchor: CodeMirror.Position, head: CodeMirror.Position): void,
		extendSelection(from: CodeMirror.Position, to?: CodeMirror.Position): void,
		setExtending(value: boolean): void,
		getEditor(): CodeMirror.Editor,
		copy(copyHistory: boolean): CodeMirror.Doc,
		linkedDoc(
		options: {
		sharedHist?: boolean,
		from?: number,
		to?: number,
		mode: any
	}
	): CodeMirror.Doc,
		unlinkDoc(doc: CodeMirror.Doc): void,
		iterLinkedDocs(fn: (doc: CodeMirror.Doc, sharedHist: boolean) => void): void,
		undo(): void,
		redo(): void,
		historySize(): {
		undo: number,
		redo: number
	},
		clearHistory(): void,
		getHistory(): any,
		setHistory(history: any): void,
		markText(
		from: CodeMirror.Position, to: CodeMirror.Position, options?: CodeMirror.TextMarkerOptions
	): TextMarker,
		setBookmark(
		pos: CodeMirror.Position, options?: {
		widget?: HTMLElement,
		insertLeft?: boolean
	}
	): CodeMirror.TextMarker,
		findMarks(from: CodeMirror.Position, to: CodeMirror.Position): TextMarker[],
		findMarksAt(pos: CodeMirror.Position): TextMarker[],
		getAllMarks(): CodeMirror.TextMarker[],
		getMode(): any,
		posFromIndex(index: number): CodeMirror.Position,
		indexFromPos(object: CodeMirror.Position): number,
		state: any
	}

	declare interface LineHandle {
		text: string
	}

	declare interface ScrollInfo {
		left: any,
		top: any,
		width: any,
		height: any,
		clientWidth: any,
		clientHeight: any
	}

	declare interface TextMarker {
		clear(): void,
		find(): CodeMirror.Range,
		getOptions(copyWidget: boolean): CodeMirror.TextMarkerOptions
	}

	declare interface LineWidget {
		clear(): void,
		changed(): void
	}

	declare interface EditorChange {
		from: CodeMirror.Position,
		to: CodeMirror.Position,
		text: string[],
		removed: string[],
		origin: string
	}

	declare interface EditorChangeLinkedList {
		next?: CodeMirror.EditorChangeLinkedList
	}

	declare interface EditorChangeCancellable {
		update(from?: CodeMirror.Position, to?: CodeMirror.Position, text?: string): void,
		cancel(): void
	}

	declare interface PositionConstructor {
		new (line: number, ch?: number): Position,
		(line: number, ch?: number): Position
	}

	declare interface Range {
		from: CodeMirror.Position,
		to: CodeMirror.Position
	}

	declare interface Position {
		ch: number,
		line: number
	}

	declare interface EditorConfiguration {
		value?: any,
		mode?: any,
		theme?: string,
		indentUnit?: number,
		smartIndent?: boolean,
		tabSize?: number,
		indentWithTabs?: boolean,
		electricChars?: boolean,
		rtlMoveVisually?: boolean,
		keyMap?: string,
		extraKeys?: any,
		lineWrapping?: boolean,
		lineNumbers?: boolean,
		firstLineNumber?: number,
		lineNumberFormatter?: (line: number) => string,
		gutters?: string[],
		fixedGutter?: boolean,
		readOnly?: any,
		showCursorWhenSelecting?: boolean,
		undoDepth?: number,
		historyEventDelay?: number,
		tabindex?: number,
		autofocus?: boolean,
		dragDrop?: boolean,
		onDragEvent?: (instance: CodeMirror.Editor, event: Event) => boolean,
		onKeyEvent?: (instance: CodeMirror.Editor, event: Event) => boolean,
		cursorBlinkRate?: number,
		cursorHeight?: number,
		workTime?: number,
		workDelay?: number,
		pollInterval?: number,
		flattenSpans?: boolean,
		maxHighlightLength?: number,
		viewportMargin?: number,
		lint?: boolean | LintOptions,
		placeholder?: string
	}

	declare interface TextMarkerOptions {
		className?: string,
		inclusiveLeft?: boolean,
		inclusiveRight?: boolean,
		atomic?: boolean,
		collapsed?: boolean,
		clearOnEnter?: boolean,
		clearWhenEmpty?: boolean,
		replacedWith?: HTMLElement,
		handleMouseEvents?: boolean,
		readOnly?: boolean,
		addToHistory?: boolean,
		startStyle?: string,
		endStyle?: string,
		css?: string,
		title?: string,
		shared?: boolean
	}

	declare interface StringStream {
		lastColumnPos: number,
		lastColumnValue: number,
		lineStart: number,
		pos: number,
		start: number,
		string: string,
		tabSize: number,
		eol(): boolean,
		sol(): boolean,
		peek(): string,
		next(): string,
		eat(match: string): string,
		eat(match: RegExp): string,
		eat(match: (char: string) => boolean): string,
		eatWhile(match: string): boolean,
		eatWhile(match: RegExp): boolean,
		eatWhile(match: (char: string) => boolean): boolean,
		eatSpace(): boolean,
		skipToEnd(): void,
		skipTo(ch: string): boolean,
		match(pattern: string, consume?: boolean, caseFold?: boolean): boolean,
		match(pattern: RegExp, consume?: boolean): string[],
		backUp(n: number): void,
		column(): number,
		indentation(): number,
		current(): string
	}

	declare interface Mode<T> {
		token(stream: StringStream, state: T): string,
		startState?: () => T,
		blankLine?: (state: T) => void,
		copyState?: (state: T) => T,
		indent?: (state: T, textAfter: string) => number,
		lineComment?: string,
		blockCommentStart?: string,
		blockCommentEnd?: string,
		blockCommentLead?: string,
		electricChars?: string,
		electricinput?: RegExp
	}

	declare interface ModeFactory<T> {
		(config: CodeMirror.EditorConfiguration, modeOptions?: any): Mode<T>
	}

	declare interface LintStateOptions {
		async: boolean,
		hasGutters: boolean
	}

	declare interface LintOptions {
		getAnnotations: AnnotationsCallback
	}

	declare interface AnnotationsCallback {
		(content: string, updateLintingCallback: UpdateLintingCallback, options: LintStateOptions, codeMirror: Editor): void
	}

	declare interface UpdateLintingCallback {
		(codeMirror: Editor, annotations: Annotation[]): void
	}

	declare interface Annotation {
		from: Position,
		message?: string,
		severity?: string,
		to?: Position
	}

	declare function fromTextArea(
		host: HTMLTextAreaElement, options?: EditorConfiguration
	): CodeMirror.EditorFromTextArea

	declare function defineExtension(name: string, value: any): void

	declare function defineDocExtension(name: string, value: any): void

	declare function defineOption(name: string, default_: any, updateFunc: Function): void

	declare function defineInitHook(func: Function): void

	declare function registerHelper(namespace: string, name: string, helper: any): void

	declare function on(element: any, eventName: string, handler: Function): void

	declare function off(element: any, eventName: string, handler: Function): void

	declare function on(
		doc: Doc, eventName: "change", handler: (instance: Doc, change: EditorChange) => void
	): void

	declare function off(
		doc: Doc, eventName: "change", handler: (instance: Doc, change: EditorChange) => void
	): void

	declare function on(
		doc: Doc, eventName: "beforeChange", handler: (instance: Doc, change: EditorChangeCancellable) => void
	): void

	declare function off(
		doc: Doc, eventName: "beforeChange", handler: (instance: Doc, change: EditorChangeCancellable) => void
	): void

	declare function on(
		doc: Doc, eventName: "cursorActivity", handler: (instance: CodeMirror.Editor) => void
	): void

	declare function off(
		doc: Doc, eventName: "cursorActivity", handler: (instance: CodeMirror.Editor) => void
	): void

	declare function on(
		doc: Doc, eventName: "beforeSelectionChange", handler: (
		instance: CodeMirror.Editor, selection: {
		head: Position,
		anchor: Position
	}
	) => void
	): void

	declare function off(
		doc: Doc, eventName: "beforeSelectionChange", handler: (
		instance: CodeMirror.Editor, selection: {
		head: Position,
		anchor: Position
	}
	) => void
	): void

	declare function on(line: LineHandle, eventName: "delete", handler: () => void): void

	declare function off(line: LineHandle, eventName: "delete", handler: () => void): void

	declare function on(
		line: LineHandle, eventName: "change", handler: (line: LineHandle, change: EditorChange) => void
	): void

	declare function off(
		line: LineHandle, eventName: "change", handler: (line: LineHandle, change: EditorChange) => void
	): void

	declare function on(marker: TextMarker, eventName: "beforeCursorEnter", handler: () => void): void

	declare function off(marker: TextMarker, eventName: "beforeCursorEnter", handler: () => void): void

	declare function on(marker: TextMarker, eventName: "clear", handler: () => void): void

	declare function off(marker: TextMarker, eventName: "clear", handler: () => void): void

	declare function on(marker: TextMarker, eventName: "hide", handler: () => void): void

	declare function off(marker: TextMarker, eventName: "hide", handler: () => void): void

	declare function on(marker: TextMarker, eventName: "unhide", handler: () => void): void

	declare function off(marker: TextMarker, eventName: "unhide", handler: () => void): void

	declare function on(line: LineWidget, eventName: "redraw", handler: () => void): void

	declare function off(line: LineWidget, eventName: "redraw", handler: () => void): void

	declare function signal(target: any, name: string, ...args: any[]): void

	declare function defineMode(id: string, modefactory: ModeFactory<any>): void

	declare function defineMode<T>(id: string, modefactory: ModeFactory<T>): void

	declare function getMode<T>(config: CodeMirror.EditorConfiguration, mode: any): Mode<T>

	declare function overlayMode<T, S>(base: Mode<T>, overlay: Mode<S>, combine?: boolean): Mode<any>

	declare function MergeView(
		element: HTMLElement, options?: MergeView.MergeViewEditorConfiguration
	): MergeView.MergeViewEditor

		
}

declare module 'MergeView' {
		declare interface MergeViewEditorConfiguration {
		allowEditingOriginals?: boolean,
		collapseIdentical?: boolean | number,
		connect?: string,
		onCollapse(mergeView: MergeViewEditor, line: number, size: number, mark: TextMarker): void,
		orig: any,
		origLeft?: any,
		origRight?: any,
		revertButtons?: boolean,
		showDifferences?: boolean
	}

	declare interface MergeViewEditor {
		editor(): Editor,
		left: DiffView,
		leftChunks(): MergeViewDiffChunk,
		leftOriginal(): Editor,
		right: DiffView,
		rightChunks(): MergeViewDiffChunk,
		rightOriginal(): Editor,
		setShowDifferences(showDifferences: boolean): void
	}

	declare interface MergeViewDiffChunk {
		editFrom: number,
		editTo: number,
		origFrom: number,
		origTo: number
	}

	declare interface DiffView {
		forceUpdate(): (mode: string) => void,
		setShowDifferences(showDifferences: boolean): void
	}

			
}