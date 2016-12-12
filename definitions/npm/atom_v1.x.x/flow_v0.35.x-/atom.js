import type { IAtom, IBufferedNodeProcessStatic, IBufferedProcessStatic, IGitStatic, IWorkspaceViewStatic, ITaskStatic, IWorkspaceStatic } from 'npm$namespace$AtomCore'

declare module 'atom' {
		declare interface Window {
		atom: AtomCore.IAtom,
		measure(description: string, fn: Function): any,
		profile(description: string, fn: Function): any
	}

	declare interface ISelectListItem {
		eventName: string,
		eventDescription: string
	}

		declare class View extends spacePen$View, Emissary$ISubscriber {
		subscribeWith(eventEmitter: any, methodName: string, args: any): any;
		addSubscription(subscription: any): any;
		subscribe(eventEmitterOrSubscription: any, ...args: any[]): any;
		subscribeToCommand(eventEmitter: any, ...args: any[]): any;
		unsubscribe(object?: any): any
	}

	declare class EditorView extends View {
		characterWidthCache: any;
		configDefaults: any;
		nextEditorId: number;
		content(params: any): void;
		classes(_arg?: {
		mini?: any
	}): string;
		vScrollMargin: number;
		hScrollMargin: number;
		lineHeight: any;
		charWidth: any;
		charHeight: any;
		cursorViews: any[];
		selectionViews: any[];
		lineCache: any[];
		isFocused: any;
		editor: AtomCore.IEditor;
		attached: any;
		lineOverdraw: number;
		pendingChanges: any[];
		newCursors: any[];
		newSelections: any[];
		redrawOnReattach: any;
		bottomPaddingInLines: number;
		active: boolean;
		id: number;
		gutter: AtomCore.IGutterView;
		overlayer: JQuery;
		scrollView: JQuery;
		renderedLines: JQuery;
		underlayer: JQuery;
		hiddenInput: JQuery;
		verticalScrollbar: JQuery;
		verticalScrollbarContent: JQuery;
		constructor(editor: AtomCore.IEditor): this;
		initialize(editorOrOptions: AtomCore.IEditor): void;
		initialize(
		editorOrOptions?: {
		editor: AtomCore.IEditor,
		mini: any,
		placeholderText: any
	}
	): void;
		initialize(editorOrOptions: {
		
	}): void;
		bindKeys(): void;
		getEditor(): AtomCore.IEditor;
		getText(): string;
		setText(text: string): void;
		insertText(text: string, options?: any): TextBuffer.IRange[];
		setHeightInLines(heightInLines: number): number;
		setWidthInChars(widthInChars: number): number;
		pageDown(): void;
		pageUp(): void;
		getPageRows(): number;
		setShowInvisibles(showInvisibles: boolean): void;
		setInvisibles(
		invisibles: {
		eol: string,
		space: string,
		tab: string,
		cr: string
	}
	): void;
		setShowIndentGuide(showIndentGuide: boolean): void;
		setPlaceholderText(placeholderText: string): void;
		getPlaceholderText(): string;
		checkoutHead(): boolean;
		configure(): Emissary.ISubscription;
		handleEvents(): void;
		handleInputEvents(): void;
		bringHiddenInputIntoView(): JQuery;
		selectOnMousemoveUntilMouseup(): any;
		afterAttach(onDom: any): any;
		edit(editor: AtomCore.IEditor): any;
		getModel(): AtomCore.IEditor;
		setModel(editor: AtomCore.IEditor): any;
		showBufferConflictAlert(editor: AtomCore.IEditor): any;
		scrollTop(scrollTop: number, options?: any): any;
		scrollBottom(scrollBottom?: number): any;
		scrollLeft(scrollLeft?: number): number;
		scrollRight(scrollRight?: number): any;
		scrollToBottom(): any;
		scrollToCursorPosition(): any;
		scrollToBufferPosition(bufferPosition: any, options: any): any;
		scrollToScreenPosition(screenPosition: any, options: any): any;
		scrollToPixelPosition(pixelPosition: any, options: any): any;
		highlightFoldsContainingBufferRange(bufferRange: any): any;
		saveScrollPositionForEditor(): any;
		toggleSoftTabs(): any;
		toggleSoftWrap(): any;
		calculateWidthInChars(): number;
		calculateHeightInLines(): number;
		getScrollbarWidth(): number;
		setSoftWrap(softWrap: boolean): any;
		setFontSize(fontSize: number): any;
		getFontSize(): number;
		setFontFamily(fontFamily?: string): any;
		getFontFamily(): string;
		setLineHeight(lineHeight: number): any;
		redraw(): any;
		splitLeft(): any;
		splitRight(): any;
		splitUp(): any;
		splitDown(): any;
		getPane(): any;
		remove(selector: any, keepData: any): any;
		beforeRemove(): any;
		getCursorView(index?: number): any;
		getCursorViews(): any[];
		addCursorView(cursor: any, options: any): any;
		removeCursorView(cursorView: any): any;
		getSelectionView(index?: number): any;
		getSelectionViews(): any[];
		addSelectionView(selection: any): any;
		removeSelectionView(selectionView: any): any;
		removeAllCursorAndSelectionViews(): any[];
		appendToLinesView(view: any): any;
		scrollVertically(pixelPosition: any, _arg: any): any;
		scrollHorizontally(pixelPosition: any): any;
		calculateDimensions(): number;
		recalculateDimensions(): any;
		updateLayerDimensions(): any;
		isHidden(): boolean;
		clearRenderedLines(): void;
		resetDisplay(): any;
		requestDisplayUpdate(): any;
		updateDisplay(options?: any): any;
		updateCursorViews(): any;
		shouldUpdateCursor(cursorView: any): any;
		updateSelectionViews(): any[];
		shouldUpdateSelection(selectionView: any): any;
		syncCursorAnimations(): any[];
		autoscroll(suppressAutoscroll?: any): any[];
		updatePlaceholderText(): any;
		updateRenderedLines(scrollViewWidth: any): any;
		computeSurroundingEmptyLineChanges(change: any): any;
		computeIntactRanges(renderFrom: any, renderTo: any): any;
		truncateIntactRanges(intactRanges: any, renderFrom: any, renderTo: any): any;
		clearDirtyRanges(intactRanges: any): any;
		clearLine(lineElement: any): any;
		fillDirtyRanges(intactRanges: any, renderFrom: any, renderTo: any): any;
		updatePaddingOfRenderedLines(): any;
		getFirstVisibleScreenRow(): number;
		getLastVisibleScreenRow(): number;
		isScreenRowVisible(): boolean;
		handleScreenLinesChange(change: any): any;
		buildLineElementForScreenRow(screenRow: any): any;
		buildLineElementsForScreenRows(startRow: any, endRow: any): any;
		htmlForScreenRows(startRow: any, endRow: any): any;
		htmlForScreenLine(screenLine: any, screenRow: any): any;
		buildIndentation(screenRow: any, editor: any): any;
		buildHtmlEndOfLineInvisibles(screenLine: any): any;
		getEndOfLineInvisibles(screenLine: any): any;
		lineElementForScreenRow(screenRow: any): any;
		toggleLineCommentsInSelection(): any;
		pixelPositionForBufferPosition(position: any): any;
		pixelPositionForScreenPosition(position: any): any;
		positionLeftForLineAndColumn(lineElement: any, screenRow: any, screenColumn: any): any;
		measureToColumn(lineElement: any, tokenizedLine: any, screenColumn: any): any;
		getCharacterWidthCache(scopes: any, char: any): any;
		setCharacterWidthCache(scopes: any, char: any, val: any): any;
		clearCharacterWidthCache(): any;
		pixelOffsetForScreenPosition(position: any): any;
		screenPositionFromMouseEvent(e: any): any;
		highlightCursorLine(): any;
		copyPathToClipboard(): any;
		buildLineHtml(_arg: any): any;
		updateScopeStack(line: any, scopeStack: any, desiredScopes: any): any;
		pushScope(line: any, scopeStack: any, scope: any): any;
		popScope(line: any, scopeStack: any): any;
		buildEmptyLineHtml(
		showIndentGuide: any, eolInvisibles: any, htmlEolInvisibles: any, indentation: any, editor: any, mini: any
	): any;
		replaceSelectedText(replaceFn: (str: string) => string): any;
		consolidateSelections(e: any): any;
		logCursorScope(): any;
		logScreenLines(start: any, end: any): any;
		logRenderedLines(): any
	}

	declare class ScrollView extends View {
		
	}

	declare class SelectListView extends View {
		content(): any;
		maxItems: number;
		scheduleTimeout: any;
		inputThrottle: number;
		cancelling: boolean;
		items: any[];
		list: JQuery;
		filterEditorView: JQuery;
		previouslyFocusedElement: JQuery;
		initialize(): any;
		schedulePopulateList(): number;
		setItems(items: any[]): any;
		setError(message?: string): any;
		setLoading(message?: string): any;
		getFilterQuery(): string;
		populateList(): any;
		getEmptyMessage(itemCount?: any, filteredItemCount?: any): string;
		setMaxItems(maxItems: number): void;
		selectPreviousItemView(): any;
		selectNextItemView(): any;
		selectItemView(view: any): any;
		scrollToItemView(view: any): any;
		getSelectedItemView(): any;
		getSelectedItem(): any;
		confirmSelection(): any;
		viewForItem(item: any): JQuery | string | HTMLElement | View;
		confirmed(item: any): any;
		getFilterKey(): any;
		focusFilterEditor(): any;
		storeFocusedElement(): any;
		restoreFocus(): any;
		cancelled(): any;
		cancel(): any
	}

	
}

declare module 'npm$namespace$AtomCore' {
		declare interface IWorkspaceViewStatic {
		new (): IWorkspaceView,
		version: number,
		configDefaults: any,
		content(): any
	}

	declare interface Decoration {
		destroy(): void
	}

	declare interface Marker {
		destroy(): void,
		getScreenRange(): Range
	}

	declare interface IWorkspaceView {
		fullScreen: boolean,
		open(uri: string, options: any): Q.Promise<View>,
		openSync(uri: string, options?: any): any,
		saveActivePaneItem(): any,
		saveActivePaneItemAs(): any,
		saveAll(): void,
		destroyActivePaneItem(): any,
		destroyActivePane(): any,
		increaseFontSize(): void,
		decreaseFontSize(): void,
		initialize(model: IWorkspace): any,
		initialize(view: View, args: any): void,
		model: IWorkspace,
		panes: IPaneContainerView,
		getModel(): IWorkspace,
		installShellCommands(): any,
		handleFocus(): any,
		afterAttach(onDom?: any): any,
		confirmClose(): boolean,
		updateTitle(): any,
		setTitle(title: string): any,
		getEditorViews(): any[],
		prependToTop(element: any): any,
		appendToTop(element: any): any,
		prependToBottom(element: any): any,
		appendToBottom(element: any): any,
		prependToLeft(element: any): any,
		appendToLeft(element: any): any,
		prependToRight(element: any): any,
		appendToRight(element: any): any,
		getActivePaneView(): IPaneView,
		getActiveView(): View,
		focusPreviousPaneView(): any,
		focusNextPaneView(): any,
		focusPaneViewAbove(): any,
		focusPaneViewBelow(): any,
		focusPaneViewOnLeft(): any,
		focusPaneViewOnRight(): any,
		eachPaneView(callback: (paneView: IPaneView) => any): {
		off(): any
	},
		getPaneViews(): IPaneView[],
		eachEditorView(callback: (editorView: any) => any): {
		off(): any
	},
		beforeRemove(): any,
		command(eventName: string, handler: Function): any,
		command(eventName: string, selector: Function, handler: Function): any,
		command(eventName: string, options: any, handler: Function): any,
		command(eventName: string, selector: Function, options: any, handler: Function): any,
		statusBar: StatusBar.IStatusBarView
	}

	declare interface IPanes {
		
	}

	declare interface IPaneView {
		
	}

	declare interface IPaneContainerView {
		
	}

	declare interface ITreeView {
		
	}

	declare interface IGutterViewStatic {
		new (): IGutterView,
		content(): any
	}

	declare interface IGutterView {
		firstScreenRow: any,
		lastScreenRow: any,
		initialize(): void,
		initialize(view: View, args: any): void,
		afterAttach(onDom?: any): any,
		beforeRemove(): any,
		handleMouseEvents(e: JQueryMouseEventObject): any,
		getEditorView(): any,
		getEditor(): IEditor,
		getLineNumberElements(): HTMLCollection,
		getLineNumberElementsForClass(klass: string): NodeList,
		getLineNumberElement(bufferRow: number): NodeList,
		addClassToAllLines(klass: string): boolean,
		removeClassFromAllLines(klass: string): boolean,
		addClassToLine(bufferRow: number, klass: string): boolean,
		removeClassFromLine(bufferRow: number, klass: string): boolean,
		updateLineNumbers(changes: any[], startScreenRow?: number, endScreenRow?: number): any,
		prependLineElements(lineElements: any): void,
		appendLineElements(lineElements: any): void,
		removeLineElements(numberOfElements: number): void,
		buildLineElements(startScreenRow: any, endScreenRow: any): any,
		buildLineElementsHtml(startScreenRow: any, endScreenRow: any): any,
		updateFoldableClasses(changes: any[]): any,
		removeLineHighlights(): void,
		addLineHighlight(row: number, emptySelection?: boolean): any,
		highlightLines(): boolean
	}

	declare interface ICommandRegistry {
		add(target: string, commandName: Object, callback?: (event: any) => void): any,
		findCommands(params: Object): Object[],
		dispatch(selector: any, name: string): void
	}

	declare interface ICommandPanel {
		
	}

	declare interface IDisplayBufferStatic {
		new (_arg?: any): IDisplayBuffer
	}

	declare interface IDisplayBuffer {
		constructor: IDisplayBufferStatic,
		verticalScrollMargin: number,
		horizontalScrollMargin: number,
		declaredPropertyValues: any,
		tokenizedBuffer: ITokenizedBuffer,
		buffer: TextBuffer.ITextBuffer,
		charWidthsByScope: any,
		markers: {
		[index: number]: IDisplayBufferMarker
	},
		foldsByMarkerId: any,
		maxLineLength: number,
		screenLines: ITokenizedLine[],
		rowMap: any,
		longestScreenRow: number,
		subscriptions: Emissary.ISubscription[],
		subscriptionsByObject: any,
		behaviors: any,
		subscriptionCounts: any,
		eventHandlersByEventName: any,
		pendingChangeEvent: any,
		softWrap: boolean,
		serializeParams(
		
	): {
		id: number,
		softWrap: boolean,
		editorWidthInChars: number,
		scrollTop: number,
		scrollLeft: number,
		tokenizedBuffer: any
	},
		deserializeParams(params: any): any,
		copy(): IDisplayBuffer,
		updateAllScreenLines(): any,
		emitChanged(eventProperties: any, refreshMarkers?: boolean): any,
		updateWrappedScreenLines(): any,
		setVisible(visible: any): any,
		getVerticalScrollMargin(): number,
		setVerticalScrollMargin(verticalScrollMargin: number): number,
		getHorizontalScrollMargin(): number,
		setHorizontalScrollMargin(horizontalScrollMargin: number): number,
		getHeight(): any,
		setHeight(height: any): any,
		getWidth(): any,
		setWidth(newWidth: any): any,
		getScrollTop(): number,
		setScrollTop(scrollTop: number): number,
		getScrollBottom(): number,
		setScrollBottom(scrollBottom: number): number,
		getScrollLeft(): number,
		setScrollLeft(scrollLeft: number): number,
		getScrollRight(): number,
		setScrollRight(scrollRight: number): number,
		getLineHeight(): any,
		setLineHeight(lineHeight: any): any,
		getDefaultCharWidth(): any,
		setDefaultCharWidth(defaultCharWidth: any): any,
		getScopedCharWidth(scopeNames: any, char: any): any,
		getScopedCharWidths(scopeNames: any): any,
		setScopedCharWidth(scopeNames: any, char: any, width: any): any,
		setScopedCharWidths(scopeNames: any, charWidths: any): any,
		clearScopedCharWidths(): any,
		getScrollHeight(): number,
		getScrollWidth(): number,
		getVisibleRowRange(): number[],
		intersectsVisibleRowRange(startRow: any, endRow: any): any,
		selectionIntersectsVisibleRowRange(selection: any): any,
		scrollToScreenRange(screenRange: any): any,
		scrollToScreenPosition(screenPosition: any): any,
		scrollToBufferPosition(bufferPosition: any): any,
		pixelRectForScreenRange(screenRange: TextBuffer.IRange): any,
		getTabLength(): number,
		setTabLength(tabLength: number): any,
		setSoftWrap(softWrap: boolean): boolean,
		getSoftWrap(): boolean,
		setEditorWidthInChars(editorWidthInChars: number): any,
		getEditorWidthInChars(): number,
		getSoftWrapColumn(): number,
		lineForRow(row: number): any,
		linesForRows(startRow: number, endRow: number): any,
		getLines(): any[],
		indentLevelForLine(line: any): any,
		bufferRowsForScreenRows(startScreenRow: any, endScreenRow: any): any,
		createFold(startRow: number, endRow: number): IFold,
		isFoldedAtBufferRow(bufferRow: number): boolean,
		isFoldedAtScreenRow(screenRow: number): boolean,
		destroyFoldWithId(id: number): any,
		unfoldBufferRow(bufferRow: number): any[],
		largestFoldStartingAtBufferRow(bufferRow: number): any,
		foldsStartingAtBufferRow(bufferRow: number): any,
		largestFoldStartingAtScreenRow(screenRow: any): any,
		largestFoldContainingBufferRow(bufferRow: any): any,
		outermostFoldsInBufferRowRange(startRow: any, endRow: any): any[],
		foldsContainingBufferRow(bufferRow: any): any[],
		screenRowForBufferRow(bufferRow: number): number,
		lastScreenRowForBufferRow(bufferRow: number): number,
		bufferRowForScreenRow(screenRow: number): number,
		screenRangeForBufferRange(bufferRange: TextBuffer.IPoint[]): TextBuffer.IRange,
		screenRangeForBufferRange(bufferRange: TextBuffer.IRange): TextBuffer.IRange,
		screenRangeForBufferRange(
		bufferRange: {
		start: TextBuffer.IPoint,
		end: TextBuffer.IPoint
	}
	): TextBuffer.IRange,
		screenRangeForBufferRange(
		bufferRange: {
		start: number[],
		end: TextBuffer.IPoint
	}
	): TextBuffer.IRange,
		screenRangeForBufferRange(
		bufferRange: {
		start: {
		row: number,
		col: number
	},
		end: TextBuffer.IPoint
	}
	): TextBuffer.IRange,
		screenRangeForBufferRange(
		bufferRange: {
		start: TextBuffer.IPoint,
		end: number[]
	}
	): TextBuffer.IRange,
		screenRangeForBufferRange(bufferRange: {
		start: number[],
		end: number[]
	}): TextBuffer.IRange,
		screenRangeForBufferRange(
		bufferRange: {
		start: {
		row: number,
		col: number
	},
		end: number[]
	}
	): TextBuffer.IRange,
		screenRangeForBufferRange(
		bufferRange: {
		start: TextBuffer.IPoint,
		end: {
		row: number,
		col: number
	}
	}
	): TextBuffer.IRange,
		screenRangeForBufferRange(
		bufferRange: {
		start: number[],
		end: {
		row: number,
		col: number
	}
	}
	): TextBuffer.IRange,
		screenRangeForBufferRange(
		bufferRange: {
		start: {
		row: number,
		col: number
	},
		end: {
		row: number,
		col: number
	}
	}
	): TextBuffer.IRange,
		bufferRangeForScreenRange(screenRange: TextBuffer.IPoint[]): TextBuffer.IRange,
		bufferRangeForScreenRange(screenRange: TextBuffer.IRange): TextBuffer.IRange,
		bufferRangeForScreenRange(
		screenRange: {
		start: TextBuffer.IPoint,
		end: TextBuffer.IPoint
	}
	): TextBuffer.IRange,
		bufferRangeForScreenRange(
		screenRange: {
		start: number[],
		end: TextBuffer.IPoint
	}
	): TextBuffer.IRange,
		bufferRangeForScreenRange(
		screenRange: {
		start: {
		row: number,
		col: number
	},
		end: TextBuffer.IPoint
	}
	): TextBuffer.IRange,
		bufferRangeForScreenRange(
		screenRange: {
		start: TextBuffer.IPoint,
		end: number[]
	}
	): TextBuffer.IRange,
		bufferRangeForScreenRange(screenRange: {
		start: number[],
		end: number[]
	}): TextBuffer.IRange,
		bufferRangeForScreenRange(
		screenRange: {
		start: {
		row: number,
		col: number
	},
		end: number[]
	}
	): TextBuffer.IRange,
		bufferRangeForScreenRange(
		screenRange: {
		start: TextBuffer.IPoint,
		end: {
		row: number,
		col: number
	}
	}
	): TextBuffer.IRange,
		bufferRangeForScreenRange(
		screenRange: {
		start: number[],
		end: {
		row: number,
		col: number
	}
	}
	): TextBuffer.IRange,
		bufferRangeForScreenRange(
		screenRange: {
		start: {
		row: number,
		col: number
	},
		end: {
		row: number,
		col: number
	}
	}
	): TextBuffer.IRange,
		pixelRangeForScreenRange(screenRange: TextBuffer.IPoint[], clip?: boolean): TextBuffer.IRange,
		pixelRangeForScreenRange(screenRange: TextBuffer.IRange, clip?: boolean): TextBuffer.IRange,
		pixelRangeForScreenRange(
		screenRange: {
		start: TextBuffer.IPoint,
		end: TextBuffer.IPoint
	}, clip?: boolean
	): TextBuffer.IRange,
		pixelRangeForScreenRange(
		screenRange: {
		start: number[],
		end: TextBuffer.IPoint
	}, clip?: boolean
	): TextBuffer.IRange,
		pixelRangeForScreenRange(
		screenRange: {
		start: {
		row: number,
		col: number
	},
		end: TextBuffer.IPoint
	}, clip?: boolean
	): TextBuffer.IRange,
		pixelRangeForScreenRange(
		screenRange: {
		start: TextBuffer.IPoint,
		end: number[]
	}, clip?: boolean
	): TextBuffer.IRange,
		pixelRangeForScreenRange(
		screenRange: {
		start: number[],
		end: number[]
	}, clip?: boolean
	): TextBuffer.IRange,
		pixelRangeForScreenRange(
		screenRange: {
		start: {
		row: number,
		col: number
	},
		end: number[]
	}, clip?: boolean
	): TextBuffer.IRange,
		pixelRangeForScreenRange(
		screenRange: {
		start: TextBuffer.IPoint,
		end: {
		row: number,
		col: number
	}
	}, clip?: boolean
	): TextBuffer.IRange,
		pixelRangeForScreenRange(
		screenRange: {
		start: number[],
		end: {
		row: number,
		col: number
	}
	}, clip?: boolean
	): TextBuffer.IRange,
		pixelRangeForScreenRange(
		screenRange: {
		start: {
		row: number,
		col: number
	},
		end: {
		row: number,
		col: number
	}
	}, clip?: boolean
	): TextBuffer.IRange,
		pixelPositionForScreenPosition(screenPosition: TextBuffer.IPoint, clip?: boolean): TextBuffer.IPoint,
		pixelPositionForScreenPosition(screenPosition: number[], clip?: boolean): TextBuffer.IPoint,
		pixelPositionForScreenPosition(
		screenPosition: {
		row: number,
		col: number
	}, clip?: boolean
	): TextBuffer.IPoint,
		screenPositionForPixelPosition(pixelPosition: any): TextBuffer.IPoint,
		pixelPositionForBufferPosition(bufferPosition: any): any,
		getLineCount(): number,
		getLastRow(): number,
		getMaxLineLength(): number,
		screenPositionForBufferPosition(bufferPosition: any, options: any): any,
		bufferPositionForScreenPosition(bufferPosition: any, options: any): any,
		scopesForBufferPosition(bufferPosition: any): any,
		bufferRangeForScopeAtPosition(selector: any, position: any): any,
		tokenForBufferPosition(bufferPosition: any): any,
		getGrammar(): IGrammar,
		setGrammar(grammar: IGrammar): any,
		reloadGrammar(): any,
		clipScreenPosition(screenPosition: any, options: any): any,
		findWrapColumn(line: any, softWrapColumn: any): any,
		rangeForAllLines(): TextBuffer.IRange,
		getMarker(id: number): IDisplayBufferMarker,
		getMarkers(): IDisplayBufferMarker[],
		getMarkerCount(): number,
		markScreenRange(range: TextBuffer.IRange, ...args: any[]): IDisplayBufferMarker,
		markBufferRange(range: TextBuffer.IRange, options?: any): IDisplayBufferMarker,
		markScreenPosition(screenPosition: TextBuffer.IPoint, options?: any): IDisplayBufferMarker,
		markBufferPosition(bufferPosition: TextBuffer.IPoint, options?: any): IDisplayBufferMarker,
		destroyMarker(id: number): any,
		findMarker(params?: any): IDisplayBufferMarker,
		findMarkers(params?: any): IDisplayBufferMarker[],
		translateToBufferMarkerParams(params?: any): any,
		findFoldMarker(attributes: any): IMarker,
		findFoldMarkers(attributes: any): IMarker[],
		getFoldMarkerAttributes(attributes?: any): any,
		pauseMarkerObservers(): any,
		resumeMarkerObservers(): any,
		refreshMarkerScreenPositions(): any,
		destroy(): any,
		logLines(start: number, end: number): any[],
		handleTokenizedBufferChange(tokenizedBufferChange: any): any,
		updateScreenLines(
		startBufferRow: any, endBufferRow: any, bufferDelta?: number, options?: any
	): any,
		buildScreenLines(startBufferRow: any, endBufferRow: any): any,
		findMaxLineLength(startScreenRow: any, endScreenRow: any, newScreenLines: any): any,
		handleBufferMarkersUpdated(): any,
		handleBufferMarkerCreated(marker: any): any,
		createFoldForMarker(maker: any): IFold,
		foldForMarker(marker: any): any
	}

	declare interface IViewRegistry {
		getView(selector: any): any
	}

	declare interface ICursorStatic {
		new (
		arg: {
		editor: IEditor,
		marker: IDisplayBufferMarker,
		id: number
	}
	): ICursor
	}

	declare interface ScopeDescriptor {
		scopes: string[]
	}

	declare interface ICursor {
		getScopeDescriptor(): ScopeDescriptor,
		screenPosition: any,
		bufferPosition: any,
		goalColumn: any,
		visible: boolean,
		needsAutoscroll: boolean,
		editor: IEditor,
		marker: IDisplayBufferMarker,
		id: number,
		destroy(): any,
		changePosition(options: any, fn: Function): any,
		getPixelRect(): any,
		setScreenPosition(screenPosition: any, options?: any): any,
		getScreenPosition(): TextBuffer.IPoint,
		getScreenRange(): TextBuffer.IRange,
		setBufferPosition(bufferPosition: any, options?: any): any,
		getBufferPosition(): TextBuffer.IPoint,
		autoscroll(): any,
		updateVisibility(): any,
		setVisible(visible: boolean): any,
		isVisible(): boolean,
		wordRegExp(arg?: any): any,
		isLastCursor(): boolean,
		isSurroundedByWhitespace(): boolean,
		isBetweenWordAndNonWord(): boolean,
		isInsideWord(): boolean,
		clearAutoscroll(): void,
		clearSelection(): void,
		getScreenRow(): number,
		getScreenColumn(): number,
		getBufferRow(): number,
		getBufferColumn(): number,
		getCurrentBufferLine(): string,
		moveUp(rowCount: number, arg?: any): any,
		moveDown(rowCount: number, arg?: any): any,
		moveLeft(arg?: any): any,
		moveRight(arg?: any): any,
		moveToTop(): any,
		moveToBottom(): void,
		moveToBeginningOfScreenLine(): void,
		moveToBeginningOfLine(): void,
		moveToFirstCharacterOfLine(): void,
		moveToEndOfScreenLine(): void,
		moveToEndOfLine(): void,
		moveToBeginningOfWord(): void,
		moveToEndOfWord(): void,
		moveToBeginningOfNextWord(): void,
		moveToPreviousWordBoundary(): void,
		moveToNextWordBoundary(): void,
		getBeginningOfCurrentWordBufferPosition(options?: any): TextBuffer.IPoint,
		getPreviousWordBoundaryBufferPosition(options?: any): TextBuffer.IPoint,
		getMoveNextWordBoundaryBufferPosition(options?: any): TextBuffer.IPoint,
		getEndOfCurrentWordBufferPosition(options?: any): TextBuffer.IPoint,
		getBeginningOfNextWordBufferPosition(options?: any): TextBuffer.IPoint,
		getCurrentWordBufferRange(options?: any): TextBuffer.IPoint,
		getCurrentLineBufferRange(options?: any): TextBuffer.IPoint,
		getCurrentParagraphBufferRange(): any,
		getCurrentWordPrefix(): string,
		isAtBeginningOfLine(): boolean,
		getIndentLevel(): number,
		isAtEndOfLine(): boolean,
		getScopes(): string[],
		hasPrecedingCharactersOnLine(): boolean,
		getMarker(): Marker
	}

	declare interface ILanguageMode {
		
	}

	declare interface ISelection {
		onDidChangeRange(
		callback: (
		event: {
		oldBufferRange: TextBuffer.IRange,
		oldScreenRange: TextBuffer.IRange,
		newBufferRange: TextBuffer.IRange,
		newScreenRange: TextBuffer.IRange,
		selection: ISelection
	}
	) => {
		
	}
	): Disposable,
		onDidDestroy(callback: () => {
		
	}): Disposable,
		getScreenRange(): TextBuffer.IRange,
		setScreenRange(
		screenRange: TextBuffer.IRange, options?: {
		preserveFolds?: boolean,
		autoscroll?: boolean
	}
	): void,
		getBufferRange(): TextBuffer.IRange,
		setBufferRange(
		bufferRange: TextBuffer.IRange, options?: {
		preserveFolds?: boolean,
		autoscroll?: boolean
	}
	): void,
		getBufferRowRange(): [number],
		isEmpty(): boolean,
		isReversed(): boolean,
		isSingleScreenLine(): boolean,
		getText(): string,
		intersectsBufferRange(bufferRange: TextBuffer.IRange): boolean,
		intersectsWith(otherSelection: ISelection): boolean,
		clear(options?: {
		autoscroll?: boolean
	}): void,
		selectToScreenPosition(position: any): void,
		selectToBufferPosition(position: any): void,
		selectRight(columnCount?: number): void,
		selectLeft(columnCount?: number): void,
		selectUp(rowCount: number): void,
		selectDown(rowCount: number): void,
		selectToTop(): void,
		selectToBottom(): void,
		selectAll(): void,
		selectToBeginningOfLine(): void,
		selectToFirstCharacterOfLine(): void,
		selectToEndOfLine(): void,
		selectToEndOfBufferLine(): void,
		selectToBeginningOfWord(): void,
		selectToEndOfWord(): void,
		selectToBeginningOfNextWord(): void,
		selectToPreviousWordBoundary(): void,
		selectToNextWordBoundary(): void,
		selectToPreviousSubwordBoundary(): void,
		selectToNextSubwordBoundary(): void,
		selectToBeginningOfNextParagraph(): void,
		selectToBeginningOfPreviousParagraph(): void,
		selectWord(): TextBuffer.IRange,
		expandOverWord(): void,
		selectLine(row?: number): void,
		expandOverLine(): void,
		insertText(
		text: string, options?: {
		select: boolean,
		autoIndent: boolean,
		autoIndentNewline: boolean,
		autoDecreaseIndent: boolean,
		normalizeLineEndings?: boolean,
		undo?: "skip"
	}
	): void,
		backspace(): void,
		deleteToPreviousWordBoundary(): void,
		deleteToNextWordBoundary(): void,
		deleteToBeginningOfWord(): void,
		deleteToBeginningOfLine(): void,
		delete(): void,
		deleteToEndOfLine(): void,
		deleteToEndOfWord(): void,
		deleteToBeginningOfSubword(): void,
		deleteToEndOfSubword(): void,
		deleteSelectedText(): void,
		deleteLine(): void,
		joinLines(): void,
		outdentSelectedRows(): void,
		autoIndentSelectedRows(): void,
		toggleLineComments(): void,
		cutToEndOfLine(): void,
		cutToEndOfBufferLine(): void,
		cut(maintainClipboard?: boolean, fullLine?: boolean): void,
		copy(maintainClipboard?: boolean, fullLine?: boolean): void,
		fold(): void,
		indentSelectedRows(): void,
		addSelectionBelow(): void,
		addSelectionAbove(): void,
		merge(
		otherSelection: ISelection, options?: {
		preserveFolds?: boolean,
		autoscroll?: boolean
	}
	): void,
		compare(otherSelection: ISelection): any
	}

	declare interface IDecorationParams {
		id?: number,
		class: string,
		type: any
	}

	declare interface IDecorationStatic {
		isType(decorationParams: IDecorationParams, type: any): boolean,
		new (
		marker: IDisplayBufferMarker, displayBuffer: IDisplayBuffer, params: IDecorationParams
	): IDecoration
	}

	declare interface IDecoration {
		marker: IDisplayBufferMarker,
		displayBuffer: IDisplayBuffer,
		params: IDecorationParams,
		id: number,
		flashQueue: any[],
		isDestroyed: boolean,
		destroy(): void,
		update(newParams: IDecorationParams): void,
		getMarker(): IDisplayBufferMarker,
		getParams(): IDecorationParams,
		isType(type: string): boolean,
		matchesPattern(decorationPattern: {
		[key: string]: IDecorationParams
	}): boolean,
		flash(klass: string, duration?: number): void,
		consumeNextFlash(): any
	}

	declare interface IEditor {
		deserializing: boolean,
		callDisplayBufferCreatedHook: boolean,
		registerEditor: boolean,
		buffer: TextBuffer.ITextBuffer,
		languageMode: ILanguageMode,
		cursors: ICursor[],
		selections: ISelection[],
		suppressSelectionMerging: boolean,
		updateBatchDepth: number,
		selectionFlashDuration: number,
		softTabs: boolean,
		displayBuffer: IDisplayBuffer,
		id: number,
		behaviors: any,
		declaredPropertyValues: any,
		eventHandlersByEventName: any,
		eventHandlersByNamespace: any,
		lastOpened: number,
		subscriptionCounts: any,
		subscriptionsByObject: any,
		subscriptions: Emissary.ISubscription[],
		destroy(): void,
		mini: any,
		serializeParams(
		
	): {
		id: number,
		softTabs: boolean,
		scrollTop: number,
		scrollLeft: number,
		displayBuffer: any
	},
		deserializeParams(params: any): any,
		subscribeToBuffer(): void,
		subscribeToDisplayBuffer(): void,
		getViewClass(): any,
		destroyed(): void,
		isDestroyed(): boolean,
		copy(): IEditor,
		getTitle(): string,
		getLongTitle(): string,
		setVisible(visible: boolean): void,
		setMini(mini: any): void,
		setScrollTop(scrollTop: any): void,
		getScrollTop(): number,
		setScrollLeft(scrollLeft: any): void,
		getScrollLeft(): number,
		setEditorWidthInChars(editorWidthInChars: any): void,
		getSoftWrapColumn(): number,
		getSoftTabs(): boolean,
		setSoftTabs(softTabs: boolean): void,
		getSoftWrap(): boolean,
		setSoftWrap(softWrap: any): void,
		getTabText(): string,
		getTabLength(): number,
		setTabLength(tabLength: any): void,
		usesSoftTabs(): boolean,
		clipBufferPosition(bufferPosition: any): void,
		clipBufferRange(range: any): void,
		indentationForBufferRow(bufferRow: any): void,
		setIndentationForBufferRow(bufferRow: any, newLevel: any, _arg: any): void,
		indentLevelForLine(line: any): number,
		buildIndentString(number: any): string,
		save(): void,
		saveAs(filePath: any): void,
		copyPathToClipboard(): void,
		getPath(): string,
		getText(): string,
		setText(text: any): void,
		getTextInRange(range: any): any,
		getLineCount(): number,
		getBuffer(): TextBuffer.ITextBuffer,
		getURI(): string,
		isBufferRowBlank(bufferRow: any): boolean,
		isBufferRowCommented(bufferRow: any): void,
		nextNonBlankBufferRow(bufferRow: any): void,
		getEofBufferPosition(): TextBuffer.IPoint,
		getLastBufferRow(): number,
		bufferRangeForBufferRow(row: any, options: any): TextBuffer.IRange,
		lineForBufferRow(row: number): string,
		lineLengthForBufferRow(row: number): number,
		scan(): any,
		scanInBufferRange(): any,
		backwardsScanInBufferRange(): any,
		isModified(): boolean,
		isEmpty(): boolean,
		shouldPromptToSave(): boolean,
		screenPositionForBufferPosition(bufferPosition: any, options?: any): TextBuffer.IPoint,
		bufferPositionForScreenPosition(screenPosition: any, options?: any): TextBuffer.IPoint,
		screenRangeForBufferRange(bufferRange: any): TextBuffer.IRange,
		bufferRangeForScreenRange(screenRange: any): TextBuffer.IRange,
		clipScreenPosition(screenPosition: any, options: any): TextBuffer.IRange,
		lineForScreenRow(row: any): ITokenizedLine,
		linesForScreenRows(start?: any, end?: any): ITokenizedLine[],
		getScreenLineCount(): number,
		getMaxScreenLineLength(): number,
		getLastScreenRow(): number,
		bufferRowsForScreenRows(startRow: any, endRow: any): any[],
		bufferRowForScreenRow(row: any): number,
		scopesForBufferPosition(bufferPosition: any): string[],
		bufferRangeForScopeAtCursor(selector: string): any,
		tokenForBufferPosition(bufferPosition: any): IToken,
		getCursorScopes(): string[],
		logCursorScope(): void,
		insertText(text: string, options?: any): TextBuffer.IRange[],
		insertNewline(): TextBuffer.IRange[],
		insertNewlineBelow(): TextBuffer.IRange[],
		insertNewlineAbove(): any,
		indent(options?: any): any,
		backspace(): any[],
		deleteToBeginningOfWord(): any[],
		deleteToBeginningOfLine(): any[],
		delete(): any[],
		deleteToEndOfLine(): any[],
		deleteToEndOfWord(): any[],
		deleteLine(): TextBuffer.IRange[],
		indentSelectedRows(): TextBuffer.IRange[][],
		outdentSelectedRows(): TextBuffer.IRange[][],
		toggleLineCommentsInSelection(): TextBuffer.IRange[],
		autoIndentSelectedRows(): TextBuffer.IRange[][],
		normalizeTabsInBufferRange(bufferRange: any): any,
		cutToEndOfLine(): boolean[],
		cutSelectedText(): boolean[],
		copySelectedText(): boolean[],
		pasteText(options?: any): TextBuffer.IRange[],
		undo(): any[],
		redo(): any[],
		foldCurrentRow(): any,
		unfoldCurrentRow(): any[],
		foldSelectedLines(): any[],
		foldAll(): any[],
		unfoldAll(): any[],
		foldAllAtIndentLevel(level: any): any,
		foldBufferRow(bufferRow: any): any,
		unfoldBufferRow(bufferRow: any): any,
		isFoldableAtBufferRow(bufferRow: any): boolean,
		isFoldableAtScreenRow(screenRow: any): boolean,
		createFold(startRow: any, endRow: any): IFold,
		destroyFoldWithId(id: any): any,
		destroyFoldsIntersectingBufferRange(bufferRange: any): any,
		toggleFoldAtBufferRow(bufferRow: any): any,
		isFoldedAtCursorRow(): boolean,
		isFoldedAtBufferRow(bufferRow: any): boolean,
		isFoldedAtScreenRow(screenRow: any): boolean,
		largestFoldContainingBufferRow(bufferRow: any): boolean,
		largestFoldStartingAtScreenRow(screenRow: any): any,
		outermostFoldsInBufferRowRange(startRow: any, endRow: any): any[],
		moveLineUp(): ISelection[],
		moveLineDown(): ISelection[],
		duplicateLines(): any[][],
		mutateSelectedText(fn: (selection: ISelection) => any): any,
		replaceSelectedText(options: any, fn: (selection: string) => any): any,
		decorationsForScreenRowRange(startScreenRow: any, endScreenRow: any): {
		[id: number]: IDecoration[]
	},
		decorateMarker(
		marker: IDisplayBufferMarker, decorationParams: {
		type: string,
		class: string
	}
	): IDecoration,
		decorationForId(id: number): IDecoration,
		getMarker(id: number): IDisplayBufferMarker,
		getMarkers(): IDisplayBufferMarker[],
		findMarkers(...args: any[]): IDisplayBufferMarker[],
		markScreenRange(...args: any[]): IDisplayBufferMarker,
		markBufferRange(...args: any[]): IDisplayBufferMarker,
		markScreenPosition(...args: any[]): IDisplayBufferMarker,
		markBufferPosition(...args: any[]): IDisplayBufferMarker,
		destroyMarker(...args: any[]): boolean,
		getMarkerCount(): number,
		hasMultipleCursors(): boolean,
		getCursors(): ICursor[],
		getCursor(): ICursor,
		addCursorAtScreenPosition(screenPosition: any): ICursor,
		addCursorAtBufferPosition(bufferPosition: any): ICursor,
		addCursor(marker: any): ICursor,
		removeCursor(cursor: any): ICursor[],
		addSelection(marker: any, options: any): ISelection,
		addSelectionForBufferRange(bufferRange: any, options: any): ISelection,
		setSelectedBufferRange(bufferRange: any, options: any): any,
		setSelectedBufferRanges(bufferRanges: any, options: any): any,
		removeSelection(selection: ISelection): any,
		clearSelections(): boolean,
		consolidateSelections(): boolean,
		selectionScreenRangeChanged(selection: any): void,
		getSelections(): ISelection[],
		getSelection(index?: number): ISelection,
		getLastSelection(): ISelection,
		getSelectionsOrderedByBufferPosition(): ISelection[],
		getLastSelectionInBuffer(): ISelection,
		selectionIntersectsBufferRange(bufferRange: any): any,
		setCursorScreenPosition(position: TextBuffer.IPoint, options?: any): any,
		getCursorScreenPosition(): TextBuffer.IPoint,
		getCursorScreenRow(): number,
		setCursorBufferPosition(position: any, options?: any): any,
		getCursorBufferPosition(): TextBuffer.IPoint,
		getSelectedScreenRange(): TextBuffer.IRange,
		getSelectedBufferRange(): TextBuffer.IRange,
		getSelectedBufferRanges(): TextBuffer.IRange[],
		getSelectedText(): string,
		getTextInBufferRange(range: TextBuffer.IRange): string,
		setTextInBufferRange(range: TextBuffer.IRange | any[], text: string): any,
		getCurrentParagraphBufferRange(): TextBuffer.IRange,
		getWordUnderCursor(options?: any): string,
		moveCursorUp(lineCount?: number): void,
		moveCursorDown(lineCount?: number): void,
		moveCursorLeft(): void,
		moveCursorRight(): void,
		moveCursorToTop(): void,
		moveCursorToBottom(): void,
		moveCursorToBeginningOfScreenLine(): void,
		moveCursorToBeginningOfLine(): void,
		moveCursorToFirstCharacterOfLine(): void,
		moveCursorToEndOfScreenLine(): void,
		moveCursorToEndOfLine(): void,
		moveCursorToBeginningOfWord(): void,
		moveCursorToEndOfWord(): void,
		moveCursorToBeginningOfNextWord(): void,
		moveCursorToPreviousWordBoundary(): void,
		moveCursorToNextWordBoundary(): void,
		moveCursorToBeginningOfNextParagraph(): void,
		moveCursorToBeginningOfPreviousParagraph(): void,
		moveToBottom(): void,
		scrollToCursorPosition(options: any): any,
		pageUp(): void,
		pageDown(): void,
		selectPageUp(): void,
		selectPageDown(): void,
		getRowsPerPage(): number,
		moveCursors(fn: (cursor: ICursor) => any): any,
		cursorMoved(event: any): void,
		selectToScreenPosition(position: TextBuffer.IPoint): any,
		selectRight(): ISelection[],
		selectLeft(): ISelection[],
		selectUp(rowCount?: number): ISelection[],
		selectDown(rowCount?: number): ISelection[],
		selectToTop(): ISelection[],
		selectAll(): ISelection[],
		selectToBottom(): ISelection[],
		selectToBeginningOfLine(): ISelection[],
		selectToFirstCharacterOfLine(): ISelection[],
		selectToEndOfLine(): ISelection[],
		selectToPreviousWordBoundary(): ISelection[],
		selectToNextWordBoundary(): ISelection[],
		selectLine(): ISelection[],
		selectLinesContainingCursors(): ISelection[],
		addSelectionBelow(): ISelection[],
		addSelectionAbove(): ISelection[],
		splitSelectionsIntoLines(): any[],
		transpose(): TextBuffer.IRange[],
		upperCase(): boolean[],
		lowerCase(): boolean[],
		joinLines(): any[],
		selectToBeginningOfWord(): ISelection[],
		selectToEndOfWord(): ISelection[],
		selectToBeginningOfNextWord(): ISelection[],
		selectWord(): ISelection[],
		selectToBeginningOfNextParagraph(): ISelection[],
		selectToBeginningOfPreviousParagraph(): ISelection[],
		selectMarker(marker: any): any,
		mergeCursors(): number[],
		expandSelectionsForward(): any,
		expandSelectionsBackward(fn: (selection: ISelection) => any): ISelection[],
		finalizeSelections(): boolean[],
		mergeIntersectingSelections(): any,
		preserveCursorPositionOnBufferReload(): Emissary.ISubscription,
		getGrammar(): IGrammar,
		setGrammar(grammer: IGrammar): void,
		reloadGrammar(): any,
		shouldAutoIndent(): boolean,
		shouldShowInvisibles(): boolean,
		updateInvisibles(): void,
		transact(fn: Function): any,
		beginTransaction(): ITransaction,
		commitTransaction(): any,
		abortTransaction(): any[],
		inspect(): string,
		logScreenLines(start: number, end: number): any[],
		handleTokenization(): void,
		handleGrammarChange(): void,
		handleMarkerCreated(marker: any): any,
		getSelectionMarkerAttributes(): {
		type: string,
		editorId: number,
		invalidate: string
	},
		getVerticalScrollMargin(): number,
		setVerticalScrollMargin(verticalScrollMargin: number): void,
		getHorizontalScrollMargin(): number,
		setHorizontalScrollMargin(horizontalScrollMargin: number): void,
		getLineHeightInPixels(): number,
		setLineHeightInPixels(lineHeightInPixels: number): void,
		batchCharacterMeasurement(fn: Function): void,
		getScopedCharWidth(scopeNames: any, char: any): any,
		setScopedCharWidth(scopeNames: any, char: any, width: any): any,
		getScopedCharWidths(scopeNames: any): any,
		clearScopedCharWidths(): any,
		getDefaultCharWidth(): number,
		setDefaultCharWidth(defaultCharWidth: number): void,
		setHeight(height: number): void,
		getHeight(): number,
		getClientHeight(): number,
		setWidth(width: number): void,
		getWidth(): number,
		getScrollTop(): number,
		setScrollTop(scrollTop: number): void,
		getScrollBottom(): number,
		setScrollBottom(scrollBottom: number): void,
		getScrollLeft(): number,
		setScrollLeft(scrollLeft: number): void,
		getScrollRight(): number,
		setScrollRight(scrollRight: number): void,
		getScrollHeight(): number,
		getScrollWidth(): number,
		getVisibleRowRange(): number,
		intersectsVisibleRowRange(startRow: any, endRow: any): any,
		selectionIntersectsVisibleRowRange(selection: any): any,
		pixelPositionForScreenPosition(screenPosition: any): any,
		pixelPositionForBufferPosition(bufferPosition: any): any,
		screenPositionForPixelPosition(pixelPosition: any): any,
		pixelRectForScreenRange(screenRange: any): any,
		scrollToScreenRange(screenRange: any, options: any): any,
		scrollToScreenPosition(screenPosition: any, options: any): any,
		scrollToBufferPosition(bufferPosition: any, options: any): any,
		horizontallyScrollable(): any,
		verticallyScrollable(): any,
		getHorizontalScrollbarHeight(): any,
		setHorizontalScrollbarHeight(height: any): any,
		getVerticalScrollbarWidth(): any,
		setVerticalScrollbarWidth(width: any): any,
		onDidChange(callback: Function): Disposable,
		onDidDestroy(callback: Function): Disposable,
		onDidStopChanging(callback: Function): Disposable,
		onDidChangeCursorPosition(callback: Function): Disposable,
		onDidSave(callback: (event: {
		path: string
	}) => void): Disposable,
		decorateMarker(marker: Marker, options: any): Decoration,
		getLastCursor(): ICursor
	}

	declare interface IGrammar {
		bundledPackage: boolean,
		emitter: any,
		fileTypes: [string],
		firstLineRegex: any,
		foldingStopMarker: any,
		includedGrammarScopes: [any],
		initialRule: any,
		injectionSelector: any,
		injections: any,
		maxTokensPerLine: Number,
		name: string,
		packageName: string,
		path: string,
		rawPatterns: [any],
		rawRepository: any,
		registration: Disposable,
		registry: any,
		repository: Object,
		scopeName: string,
		tokenizeLines: (text: string) => any
	}

	declare interface IGrammars {
		grammarForScopeName(scope: string): IGrammar
	}

	declare interface IPane {
		itemForURI: (uri: string) => IEditor,
		items: any[],
		activeItem: any,
		serializeParams(): any,
		deserializeParams(params: any): any,
		getViewClass(): any,
		isActive(): boolean,
		isDestroyed(): boolean,
		focus(): void,
		blur(): void,
		activate(): void,
		getPanes(): IPane[],
		getItems(): any[],
		getActiveItem(): any,
		getActiveEditor(): any,
		itemAtIndex(index: number): any,
		activateNextItem(): any,
		activatePreviousItem(): any,
		getActiveItemIndex(): number,
		activateItemAtIndex(index: number): any,
		activateItem(item: any): any,
		addItem(item: any, index: number): any,
		addItems(items: any[], index: number): any[],
		removeItem(item: any, destroying: any): void,
		moveItem(item: any, newIndex: number): void,
		moveItemToPane(item: any, pane: IPane, index: number): void,
		destroyActiveItem(): boolean,
		destroyItem(item: any): boolean,
		destroyItems(): any[],
		destroyInactiveItems(): any[],
		destroy(): void,
		destroyed(): any[],
		promptToSaveItem(item: any): boolean,
		saveActiveItem(): void,
		saveActiveItemAs(): void,
		saveItem(item: any, nextAction: Function): void,
		saveItemAs(item: any, nextAction: Function): void,
		saveItems(): any[],
		activateItemForURI(uri: any): any,
		copyActiveItem(): void,
		splitLeft(params: any): IPane,
		splitRight(params: any): IPane,
		splitUp(params: any): IPane,
		splitDown(params: any): IPane,
		split(orientation: string, side: string, params: any): IPane,
		findLeftmostSibling(): IPane,
		findOrCreateRightmostSibling(): IPane
	}

	declare interface ISerializationStatic<T> {
		deserialize(data: ISerializationInfo): T,
		new (data: T): ISerialization
	}

	declare interface ISerialization {
		serialize(): ISerializationInfo
	}

	declare interface ISerializationInfo {
		deserializer: string
	}

	declare interface IBrowserWindow {
		getPosition(): number[],
		getSize(): number[]
	}

	declare interface IAtomWindowDimentions {
		x: number,
		y: number,
		width: number,
		height: number
	}

	declare interface IProjectStatic {
		pathForRepositoryUrl(repoUrl: string): string,
		new (arg?: {
		path: any,
		buffers: any[]
	}): IProject
	}

	declare interface IProject {
		path: string,
		rootDirectory?: PathWatcher.IDirectory,
		rootDirectories: PathWatcher.IDirectory[],
		serializeParams(): any,
		deserializeParams(params: any): any,
		destroyed(): any,
		destroyRepo(): any,
		destroyUnretainedBuffers(): any,
		getRepo(): IGit,
		getPath(): string,
		setPath(projectPath: string): any,
		getRootDirectory(): PathWatcher.IDirectory,
		resolve(uri: string): string,
		relativize(fullPath: string): string,
		contains(pathToCheck: string): boolean,
		open(filePath: string, options?: any): Q.Promise<IEditor>,
		openSync(filePath: string, options?: any): IEditor,
		getBuffers(): TextBuffer.ITextBuffer,
		isPathModified(filePath: string): boolean,
		findBufferForPath(filePath: string): TextBuffer.ITextBuffer,
		bufferForPathSync(filePath: string): TextBuffer.ITextBuffer,
		bufferForPath(filePath: string): Q.Promise<TextBuffer.ITextBuffer>,
		bufferForId(id: any): TextBuffer.ITextBuffer,
		buildBufferSync(absoluteFilePath: string): TextBuffer.ITextBuffer,
		buildBuffer(absoluteFilePath: string): Q.Promise<TextBuffer.ITextBuffer>,
		addBuffer(buffer: TextBuffer.ITextBuffer, options?: any): any,
		addBufferAtIndex(buffer: TextBuffer.ITextBuffer, index: number, options?: any): any,
		scan(regex: any, options: any, iterator: any): Q.Promise<any>,
		replace(
		regex: any, replacementText: any, filePaths: any, iterator: any
	): Q.Promise<any>,
		buildEditorForBuffer(buffer: any, editorOptions: any): IEditor,
		eachBuffer(...args: any[]): any,
		onDidChangePaths(callback: Function): Disposable
	}

	declare interface IWorkspaceStatic {
		new (): IWorkspace
	}

	declare interface IWorkspacePanelOptions {
		item: any,
		visible?: boolean,
		priority?: number
	}

	declare interface Panel {
		getItem(): any,
		getPriority(): any,
		isVisible(): boolean,
		show(): void,
		hide(): void
	}

	declare interface IWorkspace {
		addBottomPanel(options: IWorkspacePanelOptions): Panel,
		addLeftPanel(options: IWorkspacePanelOptions): Panel,
		addRightPanel(options: IWorkspacePanelOptions): Panel,
		addTopPanel(options: IWorkspacePanelOptions): Panel,
		addModalPanel(options: IWorkspacePanelOptions): Panel,
		addOpener(opener: Function): any,
		deserializeParams(params: any): any,
		serializeParams(): {
		paneContainer: any,
		fullScreen: boolean
	},
		eachEditor(callback: Function): void,
		getTextEditors(): IEditor[],
		open(uri: string, options: any): Q.Promise<View>,
		openLicense(): void,
		openSync(uri: string, options: any): any,
		openUriInPane(uri: string, pane: any, options: any): Q.Promise<View>,
		observeTextEditors(callback: Function): Disposable,
		reopenItemSync(): any,
		registerOpener(opener: (urlToOpen: string) => any): void,
		unregisterOpener(opener: Function): void,
		getOpeners(): any,
		getActivePane(): IPane,
		getActivePaneItem(): IPane,
		getActiveTextEditor(): IEditor,
		getPanes(): any,
		saveAll(): void,
		activateNextPane(): any,
		activatePreviousPane(): any,
		paneForURI: (uri: string) => IPane,
		saveActivePaneItem(): any,
		saveActivePaneItemAs(): any,
		destroyActivePaneItem(): any,
		destroyActivePane(): any,
		getActiveEditor(): IEditor,
		increaseFontSize(): void,
		decreaseFontSize(): void,
		resetFontSize(): void,
		itemOpened(item: any): void,
		onPaneItemDestroyed(item: any): void,
		destroyed(): void,
		isTextEditor(object: any): boolean,
		onDidChangeActivePaneItem(item: any): Disposable
	}

	declare interface IAtomSettings {
		appVersion: string,
		bootstrapScript: string,
		devMode: boolean,
		initialPath: string,
		pathToOpen: string,
		resourcePath: string,
		shellLoadTime: number,
		windowState: string
	}

	declare interface IAtomState {
		mode: string,
		packageStates: any,
		project: any,
		syntax: any,
		version: number,
		windowDimensions: any,
		workspace: any
	}

	declare interface IDeserializerManager {
		deserializers: Function,
		add: Function,
		remove: Function,
		deserialize: Function,
		get: Function
	}

	declare interface IConfig {
		get(keyPath: string): any
	}

	declare interface IKeymapManager {
		defaultTarget: HTMLElement
	}

	declare interface IPackage {
		mainModulePath: string,
		mainModule: any,
		enable(): void,
		disable(): void,
		isTheme(): boolean,
		getType(): string,
		getStylesheetType(): string,
		load(): IPackage,
		reset(): void,
		activate(): Q.Promise<any[]>,
		activateNow(): void
	}

	declare interface IPackageManager {
		packageDirPaths: string[],
		loadedPackages: any,
		activePackages: any,
		packageStates: any,
		packageActivators: any[],
		getApmPath(): string,
		getPackageDirPaths(): string,
		getPackageState(name: string): any,
		setPackageState(name: string, state: any): void,
		enablePackage(name: string): any,
		disablePackage(name: string): any,
		activate(): void,
		registerPackageActivator(activator: any, types: any): void,
		activatePackages(packages: any): void,
		activatePackage(name: string): Q.Promise<IPackage>,
		deactivatePackages(): void,
		deactivatePackage(name: string): void,
		getActivePackages(): any,
		getActivePackage(name: string): any,
		isPackageActive(name: string): boolean,
		unobserveDisabledPackages(): void,
		observeDisabledPackages(): void,
		loadPackages(): void,
		loadPackage(nameOrPath: string): void,
		unloadPackages(): void,
		unloadPackage(name: string): void,
		getLoadedPackage(name: string): any,
		isPackageLoaded(name: string): boolean,
		getLoadedPackages(): any,
		getLoadedPackagesForTypes(types: any): any[],
		resolvePackagePath(name: string): string,
		isPackageDisabled(name: string): boolean,
		hasAtomEngine(packagePath: string): boolean,
		isBundledPackage(name: string): boolean,
		getPackageDependencies(): any,
		getAvailablePackagePaths(): any[],
		getAvailablePackageNames(): any[],
		getAvailablePackageMetadata(): any[]
	}

	declare interface INotifications {
		addInfo: Function,
		addError: Function,
		addSuccess: Function,
		addWarning: Function
	}

	declare interface IThemeManager {
		
	}

	declare interface IContextMenuManager {
		
	}

	declare interface IMenuManager {
		
	}

	declare interface IClipboard {
		write(text: string, metadata?: any): any,
		read(): string
	}

	declare interface ISyntax {
		
	}

	declare interface IWindowEventHandler {
		
	}

	declare interface IAtomStatic {
		version: number,
		loadSettings: IAtomSettings,
		loadOrCreate(mode: "editor"): IAtom,
		loadOrCreate(mode: "spec"): IAtom,
		loadOrCreate(mode: string): IAtom,
		loadState(mode: any): void,
		getStatePath(mode: any): string,
		getConfigDirPath(): string,
		getStorageDirPath(): string,
		getLoadSettings(): IAtomSettings,
		getCurrentWindow(): IBrowserWindow,
		getVersion(): string,
		isReleasedVersion(): boolean,
		new (state: IAtomState): IAtom
	}

	declare interface IAtom {
		constructor: IAtomStatic,
		state: IAtomState,
		mode: string,
		deserializers: IDeserializerManager,
		config: IConfig,
		commands: ICommandRegistry,
		grammars: IGrammars,
		keymaps: IKeymapManager,
		keymap: IKeymapManager,
		packages: IPackageManager,
		themes: IThemeManager,
		contextManu: IContextMenuManager,
		menu: IMenuManager,
		notifications: INotifications,
		clipboard: IClipboard,
		syntax: ISyntax,
		views: IViewRegistry,
		windowEventHandler: IWindowEventHandler,
		subscribe: Function,
		unsubscribe: Function,
		loadTime: number,
		workspaceViewParentSelector: string,
		project: IProject,
		workspaceView: IWorkspaceView,
		workspace: IWorkspace,
		initialize: Function,
		setBodyPlatformClass: Function,
		getCurrentWindow(): IBrowserWindow,
		getWindowDimensions: Function,
		setWindowDimensions: Function,
		restoreWindowDimensions: Function,
		storeWindowDimensions: Function,
		getLoadSettings: Function,
		deserializeProject: Function,
		deserializeWorkspaceView: Function,
		deserializePackageStates: Function,
		deserializeEditorWindow: Function,
		startEditorWindow: Function,
		unloadEditorWindow: Function,
		loadThemes: Function,
		watchThemes: Function,
		open: Function,
		confirm: Function,
		showSaveDialog: Function,
		showSaveDialogSync: Function,
		openDevTools: Function,
		toggleDevTools: Function,
		executeJavaScriptInDevTools: Function,
		reload: Function,
		focus: Function,
		show: Function,
		hide: Function,
		setSize: Function,
		setPosition: Function,
		center: Function,
		displayWindow: Function,
		close: Function,
		exit: Function,
		inDevMode: Function,
		inSpecMode: Function,
		toggleFullScreen: Function,
		setFullScreen: Function,
		isFullScreen: Function,
		getVersion: Function,
		isReleasedVersion: Function,
		getGitHubAuthTokenName: Function,
		setGitHubAuthToken: Function,
		getGitHubAuthToken: Function,
		getConfigDirPath: Function,
		saveSync: Function,
		getWindowLoadTime(): number,
		crashMainProcess: Function,
		crashRenderProcess: Function,
		beep: Function,
		getUserInitScriptPath: Function,
		requireUserInitScript: Function,
		requireWithGlobals: Function,
		services: any
	}

	declare interface IBufferedNodeProcessStatic {
		new (arg: any): IBufferedNodeProcess
	}

	declare interface IBufferedNodeProcess {
		
	}

	declare interface IBufferedProcessStatic {
		new (arg: any): IBufferedProcess
	}

	declare interface IBufferedProcess {
		process: Function,
		killed: boolean,
		bufferStream: Function,
		kill: Function
	}

	declare interface IGitStatic {
		new (path: any, options: any): IGit
	}

	declare interface IGit {
		
	}

	declare interface ITokenizedBuffer {
		
	}

	declare interface ITokenizedLine {
		
	}

	declare interface IToken {
		
	}

	declare interface IFoldStatic {
		new (displayBuffer: IDisplayBuffer, marker: IMarker): IFold
	}

	declare interface IFold {
		id: number,
		displayBuffer: IDisplayBuffer,
		marker: IMarker
	}

	declare interface IDisplayBufferMarkerStatic {
		new (
		_arg: {
		bufferMarker: IMarker,
		displayBuffer: IDisplayBuffer
	}
	): IDisplayBufferMarker
	}

	declare interface IDisplayBufferMarker {
		constructor: IDisplayBufferMarkerStatic,
		id: number,
		bufferMarkerSubscription: any,
		oldHeadBufferPosition: TextBuffer.IPoint,
		oldHeadScreenPosition: TextBuffer.IPoint,
		oldTailBufferPosition: TextBuffer.IPoint,
		oldTailScreenPosition: TextBuffer.IPoint,
		wasValid: boolean,
		bufferMarker: IMarker,
		displayBuffer: IDisplayBuffer,
		globalPauseCount: number,
		globalQueuedEvents: any,
		subscriptions: Emissary.ISubscription[],
		subscriptionsByObject: any,
		copy(attributes?: any): IDisplayBufferMarker,
		getScreenRange(): TextBuffer.IRange,
		setScreenRange(screenRange: any, options: any): any,
		getBufferRange(): TextBuffer.IRange,
		setBufferRange(bufferRange: any, options: any): any,
		getPixelRange(): any,
		getHeadScreenPosition(): TextBuffer.IPoint,
		setHeadScreenPosition(screenPosition: any, options: any): any,
		getHeadBufferPosition(): TextBuffer.IPoint,
		setHeadBufferPosition(bufferPosition: any): any,
		getTailScreenPosition(): TextBuffer.IPoint,
		setTailScreenPosition(screenPosition: any, options: any): any,
		getTailBufferPosition(): TextBuffer.IPoint,
		setTailBufferPosition(bufferPosition: any): any,
		plantTail(): boolean,
		clearTail(): boolean,
		hasTail(): boolean,
		isReversed(): boolean,
		isValid(): boolean,
		isDestroyed(): boolean,
		getAttributes(): any,
		setAttributes(attributes: any): any,
		matchesAttributes(attributes: any): any,
		destroy(): any,
		isEqual(other: IDisplayBufferMarker): boolean,
		compare(other: IDisplayBufferMarker): boolean,
		inspect(): string,
		destroyed(): any,
		notifyObservers(_arg: any): any
	}

	declare interface ITransaction {
		
	}

	declare interface IMarker {
		
	}

	declare interface ITaskStatic {
		new (taskPath: any): ITask
	}

	declare interface ITask {
		
	}

		declare class Disposable  {
		constructor(disposalAction: any): this;
		dispose(): void
	}

	
}