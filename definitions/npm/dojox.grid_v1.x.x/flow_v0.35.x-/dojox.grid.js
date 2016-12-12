

declare module 'dojox.grid' {
					
}

declare module 'grid' {
		declare interface _Builder {
		
	}

	declare interface util {
		gridViewTag: string,
		keyEvents: any[],
		mouseEvents: any[],
		na: string,
		rowIndexTag: string,
		arrayCompare(inA: any, inB: any): void,
		arrayInsert(inArray: any, inIndex: any, inValue: any): void,
		arrayRemove(inArray: any, inIndex: any): void,
		arraySwap(inArray: any, inI: any, inJ: any): void,
		fire(ob: any, ev: any, args: any): any,
		funnelEvents(inNode: any, inObject: any, inMethod: any, inEvents: any): void,
		removeNode(inNode: any): any,
		setStyleHeightPx(inElement: any, inHeight: any): void
	}

		declare class _EditManager  {
		constructor(inGrid: dojox.grid._Grid): this;
		info: Object;
		apply(): void;
		applyCellEdit(inValue: any, inCell: any, inRowIndex: any): void;
		applyRowEdit(): void;
		cancel(): void;
		cellFocus(inCell: any, inRowIndex: number): void;
		destroy(): void;
		dispatchEvent(e: any): number;
		editorApply(): void;
		editorCancel(): void;
		focusEditor(): void;
		isEditCell(inRowIndex: number, inCellIndex: number): any;
		isEditing(): any;
		isEditRow(inRowIndex: number): any;
		restore(inView: Object, inRowIndex: number): void;
		rowClick(e: any): void;
		save(inRowIndex: number, inView: Object): void;
		setEditCell(inCell: Object, inRowIndex: number): void;
		start(inCell: any, inRowIndex: any, inEditing: any): void;
		styleRow(inRow: any): void
	}

	declare class _Layout  {
		constructor(inGrid: any): this;
		cells: any[];
		defaultWidth: string;
		structure: Object;
		addCellDef(inRowIndex: any, inCellIndex: any, inDef: any): any;
		addRowDef(inRowIndex: any, inDef: any): any[];
		addRowsDef(inDef: any): any[];
		addViewDef(inDef: any): Object;
		moveColumn(
		sourceViewIndex: any, destViewIndex: any, cellIndex: any, targetIndex: any, before: any
	): void;
		setColumnVisibility(columnIndex: any, visible: any): boolean;
		setStructure(inStructure: any): void
	}

	declare class _FocusManager  {
		constructor(inGrid: any): this;
		focusClass: string;
		focusView: Object;
		tabbingOut: boolean;
		blurHeader(): void;
		colSizeAdjust(e: any, colIdx: any, delta: any): void;
		destroy(): void;
		doBlur(e: any): void;
		doColHeaderBlur(e: any): void;
		doColHeaderFocus(e: any): void;
		doContextMenu(e: any): void;
		doFocus(e: any): void;
		doLastNodeBlur(e: any): void;
		doLastNodeFocus(e: any): void;
		findAndFocusGridCell(): any;
		focusGrid(inSkipFocusCell: any): void;
		focusGridView(): void;
		focusHeader(): void;
		getHeaderIndex(): any;
		initFocusView(): void;
		isFirstFocusCell(): boolean;
		isFocusCell(inCell: Object, inRowIndex: number): any;
		isLastFocusCell(): boolean;
		isNavHeader(): any;
		isNoFocusCell(): boolean;
		move(inRowDelta: number, inColDelta: number): void;
		next(): void;
		nextKey(e: any): void;
		previous(): void;
		previousKey(e: any): void;
		scrollIntoView(): any;
		setFocusCell(inCell: Object, inRowIndex: number): void;
		setFocusIndex(inRowIndex: number, inCellIndex: number): void;
		styleRow(inRow: any): void;
		tabOut(inFocusNode: any): void
	}

	declare class _Events  {
		constructor(): this;
		cellOverClass: string;
		onApplyCellEdit(inValue: String, inRowIndex: number, inFieldIndex: number): void;
		onApplyEdit(inRowIndex: number): void;
		onCancelEdit(inRowIndex: number): void;
		onCanDeselect(inRowIndex: number): any;
		onCanSelect(inRowIndex: number): any;
		onCellClick(e: Event): void;
		onCellContextMenu(e: Event): void;
		onCellDblClick(e: Event): void;
		onCellFocus(inCell: Object, inRowIndex: number): void;
		onCellMouseDown(e: Event): void;
		onCellMouseOut(e: Event): void;
		onCellMouseOver(e: Event): void;
		onContentEvent(e: any): void;
		onDeselected(inRowIndex: number): void;
		onHeaderCellClick(e: Event): void;
		onHeaderCellContextMenu(e: Event): void;
		onHeaderCellDblClick(e: Event): void;
		onHeaderCellMouseDown(e: Event): void;
		onHeaderCellMouseOut(e: Event): void;
		onHeaderCellMouseOver(e: Event): void;
		onHeaderClick(e: Event): void;
		onHeaderContextMenu(e: Event): void;
		onHeaderDblClick(e: Event): void;
		onHeaderEvent(e: any): void;
		onHeaderMouseOut(e: Event): void;
		onHeaderMouseOver(e: Event): void;
		onKeyDown(e: any): void;
		onKeyEvent(e: any): void;
		onMouseDown(e: Event): void;
		onMouseDownRow(e: Event): void;
		onMouseOut(e: Event): void;
		onMouseOutRow(e: Event): void;
		onMouseOver(e: Event): void;
		onMouseOverRow(e: Event): void;
		onRowClick(e: Event): void;
		onRowContextMenu(e: Event): void;
		onRowDblClick(e: Event): void;
		onRowMouseDown(e: Event): void;
		onRowMouseOut(e: Event): void;
		onRowMouseOver(e: Event): void;
		onSelected(inRowIndex: number): void;
		onSelectionChanged(): void;
		onStartEdit(inCell: Object, inRowIndex: number): void;
		onStyleRow(inRow: Object): void
	}

	declare class _RowManager  {
		constructor(inGrid: any): this;
		linesToEms: number;
		overRow: number;
		applyStyles(inRow: any): void;
		isOver(inRowIndex: any): boolean;
		prepareStylingRow(inRowIndex: any, inRowNode: any): Object;
		setOverRow(inRowIndex: any): void;
		styleRowNode(inRowIndex: any, inRowNode: any): void;
		updateStyles(inRowIndex: any): void
	}

	declare class _SelectionPreserver  {
		constructor(selection: any): this;
		destroy(): void;
		reset(): void
	}

	declare class _Scroller  {
		constructor(inContentNodes: any): this;
		averageRowHeight: number;
		contentNode: Object;
		defaultPageHeight: number;
		defaultRowHeight: number;
		dummy: number;
		firstVisibleRow: number;
		keepPages: number;
		keepRows: number;
		lastVisibleRow: number;
		pacifying: boolean;
		pacifyTicks: number;
		page: number;
		pageCount: number;
		pageTop: number;
		rowCount: number;
		scrollboxNode: Object;
		windowHeight: number;
		buildPage(inPageIndex: any, inReuseNode: any, inPos: any): void;
		calcLastPageHeight(): number;
		createPageNode(): any;
		destroy(): void;
		destroyPage(inPageIndex: any): void;
		doPacify(): boolean;
		endPacify(): void;
		findPage(inTop: any): void;
		findScrollTop(inRow: any): number;
		findTopRow(inScrollTop: any): number;
		getDefaultNodes(): Object;
		getDefaultPageNode(inPageIndex: any): any;
		getFirstVisibleRow(inPage: any, inPageTop: number, inScrollTop: any): any;
		getLastPageRow(inPage: any): number;
		getLastVisibleRow(inPage: any, inBottom: number, inScrollBottom: any): number;
		getPageHeight(inPageIndex: any): any;
		getPageNodePosition(inNode: any): any;
		getPageRow(inPage: any): number;
		getScrollBottom(inTop: any): number;
		init(inRowCount: any, inKeepRows: any, inRowsPerPage: any): void;
		installPage(inPageIndex: any): void;
		invalidate(): void;
		invalidateNodes(): void;
		invalidatePageNode(inPageIndex: any, inNodes: any): any;
		measurePage(inPageIndex: any): any;
		needPage(inPageIndex: any, inPos: any): any;
		onscroll(): void;
		pacify(inShouldPacify: any): void;
		pageExists(inPageIndex: any): any;
		popPage(): any;
		positionPage(inPageIndex: any, inPos: any): void;
		positionPageNode(inNode: any, inPos: any): void;
		preparePage(inPageIndex: any, inReuseNode: any): void;
		processEvent(e: any): any;
		processNodeEvent(e: any, inNode: any): boolean;
		pushPage(inPageIndex: any): any;
		removePage(inPageIndex: any): void;
		removeRow(inRowIndex: any): void;
		renderPage(inPageIndex: any): void;
		renderRow(inRowIndex: any, inPageNode: any): void;
		repositionPages(inPageIndex: any): void;
		resize(): void;
		rowHeightChanged(inRowIndex: any, fromAsynRendering: any): void;
		scroll(inTop: any): void;
		setContentNodes(inNodes: any): void;
		setKeepInfo(inKeepRows: any): void;
		setPacifying(inPacifying: any): void;
		startPacify(): void;
		updateContentHeight(inDh: any): void;
		updatePageHeight(inPageIndex: any, fromBuild: any, fromAsynRendering: any): any;
		updateRowCount(inRowCount: any): void
	}

	declare class _Grid extends dijit$_Widget, dijit$_TemplatedMixin {
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
		autoHeight: boolean;
		set(property: "autoHeight", value: boolean): void;
		get(property: "autoHeight"): boolean;
		watch(
		property: "autoHeight", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoRender: boolean;
		set(property: "autoRender", value: boolean): void;
		get(property: "autoRender"): boolean;
		watch(
		property: "autoRender", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		cellOverClass: string;
		set(property: "cellOverClass", value: string): void;
		get(property: "cellOverClass"): string;
		watch(
		property: "cellOverClass", callback: {
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
		classTag: string;
		set(property: "classTag", value: string): void;
		get(property: "classTag"): string;
		watch(
		property: "classTag", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		columnReordering: boolean;
		set(property: "columnReordering", value: boolean): void;
		get(property: "columnReordering"): boolean;
		watch(
		property: "columnReordering", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		defaultHeight: string;
		set(property: "defaultHeight", value: string): void;
		get(property: "defaultHeight"): string;
		watch(
		property: "defaultHeight", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		delayScroll: boolean;
		set(property: "delayScroll", value: boolean): void;
		get(property: "delayScroll"): boolean;
		watch(
		property: "delayScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		elasticView: number;
		set(property: "elasticView", value: number): void;
		get(property: "elasticView"): number;
		watch(
		property: "elasticView", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		errorMessage: string;
		set(property: "errorMessage", value: string): void;
		get(property: "errorMessage"): string;
		watch(
		property: "errorMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		escapeHTMLInData: boolean;
		set(property: "escapeHTMLInData", value: boolean): void;
		get(property: "escapeHTMLInData"): boolean;
		watch(
		property: "escapeHTMLInData", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		fastScroll: boolean;
		set(property: "fastScroll", value: boolean): void;
		get(property: "fastScroll"): boolean;
		watch(
		property: "fastScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		formatterScope: Object;
		set(property: "formatterScope", value: Object): void;
		get(property: "formatterScope"): Object;
		watch(
		property: "formatterScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		headerMenu: Object;
		set(property: "headerMenu", value: Object): void;
		get(property: "headerMenu"): Object;
		watch(
		property: "headerMenu", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		height: string;
		set(property: "height", value: string): void;
		get(property: "height"): string;
		watch(
		property: "height", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		initialWidth: string;
		set(property: "initialWidth", value: string): void;
		get(property: "initialWidth"): string;
		watch(
		property: "initialWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		invalidated: Object;
		set(property: "invalidated", value: Object): void;
		get(property: "invalidated"): Object;
		watch(
		property: "invalidated", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		keepRows: number;
		set(property: "keepRows", value: number): void;
		get(property: "keepRows"): number;
		watch(
		property: "keepRows", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		loadingMessage: string;
		set(property: "loadingMessage", value: string): void;
		get(property: "loadingMessage"): string;
		watch(
		property: "loadingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		noDataMessage: string;
		set(property: "noDataMessage", value: string): void;
		get(property: "noDataMessage"): string;
		watch(
		property: "noDataMessage", callback: {
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
		placeholderLabel: string;
		set(property: "placeholderLabel", value: string): void;
		get(property: "placeholderLabel"): string;
		watch(
		property: "placeholderLabel", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		rowCount: number;
		set(property: "rowCount", value: number): void;
		get(property: "rowCount"): number;
		watch(
		property: "rowCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeight: number;
		set(property: "rowHeight", value: number): void;
		get(property: "rowHeight"): number;
		watch(
		property: "rowHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowSelector: boolean;
		set(property: "rowSelector", value: boolean): void;
		get(property: "rowSelector"): boolean;
		watch(
		property: "rowSelector", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rowsPerPage: number;
		set(property: "rowsPerPage", value: number): void;
		get(property: "rowsPerPage"): number;
		watch(
		property: "rowsPerPage", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scrollRedrawThreshold: number;
		set(property: "scrollRedrawThreshold", value: number): void;
		get(property: "scrollRedrawThreshold"): number;
		watch(
		property: "scrollRedrawThreshold", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		selectable: boolean;
		set(property: "selectable", value: boolean): void;
		get(property: "selectable"): boolean;
		watch(
		property: "selectable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selectionMode: string;
		set(property: "selectionMode", value: string): void;
		get(property: "selectionMode"): string;
		watch(
		property: "selectionMode", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		singleClickEdit: boolean;
		set(property: "singleClickEdit", value: boolean): void;
		get(property: "singleClickEdit"): boolean;
		watch(
		property: "singleClickEdit", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		sortInfo: number;
		set(property: "sortInfo", value: number): void;
		get(property: "sortInfo"): number;
		watch(
		property: "sortInfo", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		structure: Object;
		set(property: "structure", value: Object): void;
		get(property: "structure"): Object;
		watch(
		property: "structure", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		summary: string;
		set(property: "summary", value: string): void;
		get(property: "summary"): string;
		watch(
		property: "summary", callback: {
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
		updating: boolean;
		set(property: "updating", value: boolean): void;
		get(property: "updating"): boolean;
		watch(
		property: "updating", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		addRow(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		beginUpdate(): void;
		buildRendering(): void;
		buildViews(): void;
		canSort(inSortInfo: number): boolean;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createLayout(): void;
		createManagers(): void;
		createScroller(): void;
		createSelection(): void;
		createView(inClass: any, idx: any): any;
		createViews(): void;
		defaultUpdate(): void;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchContentEvent(e: any): void;
		dispatchHeaderEvent(e: any): void;
		dispatchKeyEvent(e: any): void;
		doApplyCellEdit(inValue: any, inRowIndex: any, inFieldIndex: any): void;
		doApplyEdit(inRowIndex: any): void;
		doCancelEdit(inRowIndex: any): void;
		doclick(e: any): void;
		docontextmenu(e: any): void;
		dodblclick(e: any): void;
		doheaderclick(e: any): void;
		doheadercontextmenu(e: any): void;
		doheaderdblclick(e: any): void;
		dokeydown(e: any): void;
		doKeyEvent(e: any): void;
		doStartEdit(inCell: any, inRowIndex: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		endUpdate(): void;
		finishScrollJob(): void;
		get(name: any): any;
		getCell(inIndex: number): any;
		getCellName(inCell: any): String;
		getCellNodeTextDirection(inColIndex: any, inRowIndex: any): any;
		getChildren(): any[];
		getColumnTogglingItems(): any;
		getDescendants(): any[];
		getItem(inRowIndex: any): any;
		getParent(): any;
		getRowNode(inRowIndex: any): any;
		getSortAsc(inSortInfo: any): any;
		getSortIndex(inSortInfo: any): number;
		hasLayout(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		markupFactory(props: any, node: any, ctor: any, cellFunc: any): void;
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
		postrender(): void;
		postresize(): void;
		prerender(): void;
		removeSelectedRows(): void;
		render(): void;
		resize(changeSize: any, resultSize: any): void;
		rowHeightChanged(inRowIndex: number): void;
		scrollTo(inTop: number): void;
		scrollToRow(inRowIndex: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setCellNodeTextDirection(inColIndex: any, inRowIndex: any, textDir: any): void;
		setCellWidth(inIndex: any, inUnitWidth: any): void;
		setHeaderMenu(menu: dijit.Menu): void;
		setScrollTop(inTop: any): void;
		setSortIndex(inIndex: number, inAsc: boolean): void;
		setSortInfo(inSortInfo: any): void;
		setStructure(inStructure: Object): void;
		setStructure(inStructure: Object[]): void;
		setupHeaderMenu(): void;
		showMessage(message: any): void;
		sizeChange(): void;
		sort(): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		textSizeChanged(): void;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		update(): void;
		updateRow(inRowIndex: number): void;
		updateRowCount(inRowCount: number): void;
		updateRows(startIndex: number, howMany: number): void;
		updateRowStyles(inRowIndex: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onApplyCellEdit(inValue: String, inRowIndex: number, inFieldIndex: number): void;
		onApplyEdit(inRowIndex: number): void;
		onBlur(): void;
		onCancelEdit(inRowIndex: number): void;
		onCanDeselect(inRowIndex: number): any;
		onCanSelect(inRowIndex: number): any;
		onCellClick(e: Event): void;
		onCellContextMenu(e: Event): void;
		onCellDblClick(e: Event): void;
		onCellFocus(inCell: Object, inRowIndex: number): void;
		onCellMouseDown(e: Event): void;
		onCellMouseOut(e: Event): void;
		onCellMouseOver(e: Event): void;
		onClick(event: any): void;
		onClose(): boolean;
		onContentEvent(e: any): void;
		onDblClick(event: any): void;
		onDeselected(inRowIndex: number): void;
		onFocus(): void;
		onHeaderCellClick(e: Event): void;
		onHeaderCellContextMenu(e: Event): void;
		onHeaderCellDblClick(e: Event): void;
		onHeaderCellMouseDown(e: Event): void;
		onHeaderCellMouseOut(e: Event): void;
		onHeaderCellMouseOver(e: Event): void;
		onHeaderClick(e: Event): void;
		onHeaderContextMenu(e: Event): void;
		onHeaderDblClick(e: Event): void;
		onHeaderEvent(e: any): void;
		onHeaderMouseOut(e: Event): void;
		onHeaderMouseOver(e: Event): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyEvent(e: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseDownRow(e: Event): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOutRow(e: Event): void;
		onMouseOver(event: any): void;
		onMouseOverRow(e: Event): void;
		onMouseUp(event: any): void;
		onMoveColumn(): void;
		onResizeColumn(cellIdx: number): void;
		onRowClick(e: Event): void;
		onRowContextMenu(e: Event): void;
		onRowDblClick(e: Event): void;
		onRowMouseDown(e: Event): void;
		onRowMouseOut(e: Event): void;
		onRowMouseOver(e: Event): void;
		onSelected(inRowIndex: number): void;
		onSelectionChanged(): void;
		onShow(): void;
		onStartEdit(inCell: Object, inRowIndex: number): void;
		onStyleRow(inRow: Object): void
	}

	declare class _ViewManager  {
		constructor(inGrid: any): this;
		defaultWidth: number;
		views: any[];
		addView(inView: any): void;
		arrange(l: number, w: number): number;
		destroyViews(): void;
		findClient(inAutoWidth: any): any;
		forEach(inCallback: any): void;
		getContentNodes(): any[];
		getFirstScrollingView(): any;
		getViewWidth(inIndex: any): any;
		measureContent(): number;
		measureHeader(): number;
		normalizeHeaderNodeHeight(): void;
		normalizeRowNodeHeights(inRowNodes: any): void;
		render(): void;
		renderRow(inRowIndex: any, inNodes: any, skipRenorm: any): void;
		renormalizeRow(inRowIndex: any): void;
		resetHeaderNodeHeight(): void;
		resize(): void;
		rowRemoved(inRowIndex: any): void;
		setScrollTop(inTop: any): any;
		updateRow(inRowIndex: any, skipRenorm: any): void;
		updateRowStyles(inRowIndex: any): void;
		onEach(inMethod: any, inArgs: any): void
	}

	declare class _TreeView extends undefined$_View {
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
		classTag: string;
		set(property: "classTag", value: string): void;
		get(property: "classTag"): string;
		watch(
		property: "classTag", callback: {
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
		defaultWidth: string;
		set(property: "defaultWidth", value: string): void;
		get(property: "defaultWidth"): string;
		watch(
		property: "defaultWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		firstScroll: number;
		set(property: "firstScroll", value: number): void;
		get(property: "firstScroll"): number;
		watch(
		property: "firstScroll", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		lastTop: number;
		set(property: "lastTop", value: number): void;
		get(property: "lastTop"): number;
		watch(
		property: "lastTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		marginBottom: number;
		set(property: "marginBottom", value: number): void;
		get(property: "marginBottom"): number;
		watch(
		property: "marginBottom", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		rowPad: number;
		set(property: "rowPad", value: number): void;
		get(property: "rowPad"): number;
		watch(
		property: "rowPad", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		viewWidth: string;
		set(property: "viewWidth", value: string): void;
		get(property: "viewWidth"): string;
		watch(
		property: "viewWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		adaptHeight(minusScroll: any): void;
		adaptWidth(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		buildRow(inRowIndex: any, inRowNode: any): void;
		buildRowContent(inRowIndex: any, inRowNode: any): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		convertColPctToFixed(): boolean;
		createRowNode(inRowIndex: any): any;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchContentEvent(e: any): any;
		dispatchHeaderEvent(e: any): any;
		doContentEvent(e: any): void;
		doHeaderEvent(e: any): void;
		doscroll(inEvent: any): void;
		doStyleRowNode(inRowIndex: any, inRowNode: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		focus(): void;
		get(name: any): any;
		getCellNode(inRowIndex: any, inCellIndex: any): any;
		getChildren(): any[];
		getColumnsWidth(): number;
		getContentWidth(): String;
		getDescendants(): any[];
		getHeaderCellNode(inCellIndex: any): any;
		getParent(): any;
		getRowNode(inRowIndex: any): any;
		getScrollbarWidth(): any;
		getWidth(): String;
		hasHScrollbar(reset: any): boolean;
		hasVScrollbar(reset: any): boolean;
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
		render(): void;
		renderHeader(): void;
		renderRow(inRowIndex: any): any;
		resize(): void;
		rowRemoved(inRowIndex: any): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setColumnsWidth(width: any): void;
		setColWidth(inIndex: any, inWidth: any): void;
		setScrollTop(inTop: any): any;
		setSize(w: any, h: any): void;
		setStructure(inStructure: any): void;
		startup(): void;
		styleRow(inRowIndex: any, inRowNode: any): void;
		styleRowNode(inRowIndex: any, inRowNode: any): void;
		subscribe(t: String, method: Function): any;
		testFlexCells(): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		update(): void;
		updateRow(inRowIndex: any): any;
		updateRowStyles(inRowIndex: any): void;
		updateStructure(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onAfterRow(inRowIndex: any, cells: any, inRowNode: any): void;
		onBeforeRow(inRowIndex: any, cells: any): void;
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

	declare class _Selector extends undefined$_View {
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
		classTag: string;
		set(property: "classTag", value: string): void;
		get(property: "classTag"): string;
		watch(
		property: "classTag", callback: {
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
		defaultWidth: string;
		set(property: "defaultWidth", value: string): void;
		get(property: "defaultWidth"): string;
		watch(
		property: "defaultWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		firstScroll: number;
		set(property: "firstScroll", value: number): void;
		get(property: "firstScroll"): number;
		watch(
		property: "firstScroll", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		inputType: string;
		set(property: "inputType", value: string): void;
		get(property: "inputType"): string;
		watch(
		property: "inputType", callback: {
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
		lastTop: number;
		set(property: "lastTop", value: number): void;
		get(property: "lastTop"): number;
		watch(
		property: "lastTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		marginBottom: number;
		set(property: "marginBottom", value: number): void;
		get(property: "marginBottom"): number;
		watch(
		property: "marginBottom", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		noscroll: boolean;
		set(property: "noscroll", value: boolean): void;
		get(property: "noscroll"): boolean;
		watch(
		property: "noscroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		padBorderWidth: number;
		set(property: "padBorderWidth", value: number): void;
		get(property: "padBorderWidth"): number;
		watch(
		property: "padBorderWidth", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowPad: number;
		set(property: "rowPad", value: number): void;
		get(property: "rowPad"): number;
		watch(
		property: "rowPad", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		selectionMode: string;
		set(property: "selectionMode", value: string): void;
		get(property: "selectionMode"): string;
		watch(
		property: "selectionMode", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		viewWidth: string;
		set(property: "viewWidth", value: string): void;
		get(property: "viewWidth"): string;
		watch(
		property: "viewWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		adaptHeight(minusScroll: any): void;
		adaptWidth(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		buildRow(inRowIndex: any, inRowNode: any): void;
		buildRowContent(inRowIndex: any, inRowNode: any): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		convertColPctToFixed(): boolean;
		createRowNode(inRowIndex: any): any;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchContentEvent(e: any): any;
		dispatchHeaderEvent(e: any): any;
		doContentEvent(e: any): void;
		doHeaderEvent(e: any): void;
		doscroll(inEvent: any): void;
		doStyleRowNode(inRowIndex: any, inRowNode: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		focus(): void;
		get(name: any): any;
		getCellNode(inRowIndex: any, inCellIndex: any): any;
		getChildren(): any[];
		getColumnsWidth(): number;
		getContentWidth(): String;
		getDescendants(): any[];
		getHeaderCellNode(inCellIndex: any): any;
		getParent(): any;
		getRowNode(inRowIndex: any): any;
		getScrollbarWidth(): any;
		getWidth(): any;
		hasHScrollbar(reset: any): boolean;
		hasVScrollbar(reset: any): boolean;
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
		render(): void;
		renderHeader(): void;
		renderRow(inRowIndex: any): any;
		resize(): void;
		rowRemoved(inRowIndex: any): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setColumnsWidth(width: any): void;
		setColWidth(inIndex: any, inWidth: any): void;
		setScrollTop(inTop: any): any;
		setSize(w: any, h: any): void;
		setStructure(s: any): void;
		startup(): void;
		styleRow(inRowIndex: any, inRowNode: any): void;
		styleRowNode(inRowIndex: any, inRowNode: any): void;
		subscribe(t: String, method: Function): any;
		testFlexCells(): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		update(): void;
		updateRow(inRowIndex: any): any;
		updateRowStyles(inRowIndex: any): void;
		updateStructure(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onAfterRow(inRowIndex: any, cells: Object[], inRowNode: any): void;
		onBeforeRow(inRowIndex: any, cells: any): void;
		onBlur(): void;
		onClick(event: any): void;
		onClose(): boolean;
		onDblClick(event: any): void;
		onDeselected(inIndex: any): void;
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
		onSelected(inIndex: any): void;
		onShow(): void
	}

	declare class _RowSelector extends undefined$_View {
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
		classTag: string;
		set(property: "classTag", value: string): void;
		get(property: "classTag"): string;
		watch(
		property: "classTag", callback: {
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
		defaultWidth: string;
		set(property: "defaultWidth", value: string): void;
		get(property: "defaultWidth"): string;
		watch(
		property: "defaultWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		firstScroll: number;
		set(property: "firstScroll", value: number): void;
		get(property: "firstScroll"): number;
		watch(
		property: "firstScroll", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		lastTop: number;
		set(property: "lastTop", value: number): void;
		get(property: "lastTop"): number;
		watch(
		property: "lastTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		marginBottom: number;
		set(property: "marginBottom", value: number): void;
		get(property: "marginBottom"): number;
		watch(
		property: "marginBottom", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		noscroll: boolean;
		set(property: "noscroll", value: boolean): void;
		get(property: "noscroll"): boolean;
		watch(
		property: "noscroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		padBorderWidth: number;
		set(property: "padBorderWidth", value: number): void;
		get(property: "padBorderWidth"): number;
		watch(
		property: "padBorderWidth", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowPad: number;
		set(property: "rowPad", value: number): void;
		get(property: "rowPad"): number;
		watch(
		property: "rowPad", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		viewWidth: string;
		set(property: "viewWidth", value: string): void;
		get(property: "viewWidth"): string;
		watch(
		property: "viewWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		adaptHeight(minusScroll: any): void;
		adaptWidth(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		buildRow(inRowIndex: any, inRowNode: any): void;
		buildRowContent(inRowIndex: any, inRowNode: any): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		convertColPctToFixed(): boolean;
		createRowNode(inRowIndex: any): any;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchContentEvent(e: any): any;
		dispatchHeaderEvent(e: any): any;
		doContentEvent(e: any): void;
		doHeaderEvent(e: any): void;
		domouseout(e: any): void;
		domouseover(e: any): void;
		doscroll(inEvent: any): void;
		doStyleRowNode(inRowIndex: any, inRowNode: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		focus(): void;
		get(name: any): any;
		getCellNode(inRowIndex: any, inCellIndex: any): any;
		getChildren(): any[];
		getColumnsWidth(): number;
		getContentWidth(): String;
		getDescendants(): any[];
		getHeaderCellNode(inCellIndex: any): any;
		getParent(): any;
		getRowNode(inRowIndex: any): any;
		getScrollbarWidth(): any;
		getWidth(): any;
		hasHScrollbar(reset: any): boolean;
		hasVScrollbar(reset: any): boolean;
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
		render(): void;
		renderHeader(): void;
		renderRow(inRowIndex: any): any;
		resize(): void;
		rowRemoved(inRowIndex: any): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setColumnsWidth(width: any): void;
		setColWidth(inIndex: any, inWidth: any): void;
		setScrollTop(inTop: any): any;
		setSize(w: any, h: any): void;
		setStructure(inStructure: any): void;
		startup(): void;
		styleRow(inRowIndex: any, inRowNode: any): void;
		styleRowNode(inRowIndex: any, inRowNode: any): void;
		subscribe(t: String, method: Function): any;
		testFlexCells(): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		update(): void;
		updateRow(): void;
		updateRowStyles(inRowIndex: any): void;
		updateStructure(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onAfterRow(inRowIndex: any, cells: Object[], inRowNode: any): void;
		onAfterRow(inRowIndex: any, cells: Object[][], inRowNode: any): void;
		onBeforeRow(inRowIndex: any, cells: any): void;
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

	declare class DataSelection extends undefined$Selection {
		constructor(grid: any): this;
		mode: string;
		rangeStartIndex: number;
		selected: Object;
		selectedIndex: number;
		updating: number;
		addToSelection(inItemOrIndex: any): void;
		clear(): void;
		clickSelect(inIndex: any, inCtrlKey: any, inShiftKey: any): void;
		clickSelectEvent(e: any): void;
		deselect(inItemOrIndex: any): void;
		deselectAll(inItemOrIndex: any): void;
		deselectRange(inFrom: any, inTo: any): void;
		destroy(): void;
		getFirstSelected(): any;
		getNextSelected(inPrev: any): any;
		getSelected(): any[];
		getSelectedCount(): number;
		insert(inIndex: any): void;
		isSelected(inIndex: any): any;
		remove(inIndex: any): void;
		select(inIndex: any): void;
		selectRange(inFrom: any, inTo: any): void;
		setMode(mode: any): void;
		setSelected(inIndex: any, inSelect: any): void;
		toggleSelect(inIndex: any): void;
		onCanDeselect(inIndex: any): any;
		onCanSelect(inIndex: any): any;
		onChanged(): void;
		onChanging(): void;
		onDeselected(inIndex: any): void;
		onSelected(inIndex: any): void
	}

	declare class _View extends dijit$_Widget, dijit$_TemplatedMixin {
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
		classTag: string;
		set(property: "classTag", value: string): void;
		get(property: "classTag"): string;
		watch(
		property: "classTag", callback: {
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
		defaultWidth: string;
		set(property: "defaultWidth", value: string): void;
		get(property: "defaultWidth"): string;
		watch(
		property: "defaultWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		firstScroll: number;
		set(property: "firstScroll", value: number): void;
		get(property: "firstScroll"): number;
		watch(
		property: "firstScroll", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		lastTop: number;
		set(property: "lastTop", value: number): void;
		get(property: "lastTop"): number;
		watch(
		property: "lastTop", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		marginBottom: number;
		set(property: "marginBottom", value: number): void;
		get(property: "marginBottom"): number;
		watch(
		property: "marginBottom", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		rowPad: number;
		set(property: "rowPad", value: number): void;
		get(property: "rowPad"): number;
		watch(
		property: "rowPad", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		viewWidth: string;
		set(property: "viewWidth", value: string): void;
		get(property: "viewWidth"): string;
		watch(
		property: "viewWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		adaptHeight(minusScroll: any): void;
		adaptWidth(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		buildRow(inRowIndex: any, inRowNode: any): void;
		buildRowContent(inRowIndex: any, inRowNode: any): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		convertColPctToFixed(): boolean;
		createRowNode(inRowIndex: any): any;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchContentEvent(e: any): any;
		dispatchHeaderEvent(e: any): any;
		doContentEvent(e: any): void;
		doHeaderEvent(e: any): void;
		doscroll(inEvent: any): void;
		doStyleRowNode(inRowIndex: any, inRowNode: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		focus(): void;
		get(name: any): any;
		getCellNode(inRowIndex: any, inCellIndex: any): any;
		getChildren(): any[];
		getColumnsWidth(): number;
		getContentWidth(): String;
		getDescendants(): any[];
		getHeaderCellNode(inCellIndex: any): any;
		getParent(): any;
		getRowNode(inRowIndex: any): any;
		getScrollbarWidth(): any;
		getWidth(): String;
		hasHScrollbar(reset: any): boolean;
		hasVScrollbar(reset: any): boolean;
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
		render(): void;
		renderHeader(): void;
		renderRow(inRowIndex: any): any;
		resize(): void;
		rowRemoved(inRowIndex: any): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setColumnsWidth(width: any): void;
		setColWidth(inIndex: any, inWidth: any): void;
		setScrollTop(inTop: any): any;
		setSize(w: any, h: any): void;
		setStructure(inStructure: any): void;
		startup(): void;
		styleRow(inRowIndex: any, inRowNode: any): void;
		styleRowNode(inRowIndex: any, inRowNode: any): void;
		subscribe(t: String, method: Function): any;
		testFlexCells(): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		update(): void;
		updateRow(inRowIndex: any): any;
		updateRowStyles(inRowIndex: any): void;
		updateStructure(): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onAfterRow(inRowIndex: any, cells: Object[], inRowNode: any): void;
		onAfterRow(inRowIndex: any, cells: Object[][], inRowNode: any): void;
		onBeforeRow(inRowIndex: any, cells: any): void;
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

	declare class LazyTreeGridStoreModel extends undefined$ForestStoreModel {
		constructor(args: Object): this;
		childrenAttrs: Object;
		deferItemLoadingUntilExpand: boolean;
		labelAttr: string;
		newItemIdAttr: string;
		query: string;
		root: Object;
		rootId: string;
		rootLabel: string;
		serverStore: boolean;
		store: Object;
		destroy(): void;
		fetchItemByIdentity(keywordArgs: Object): void;
		getChildren(
		parentItem: dojo.data.api.Item, onComplete: {
		(items: Object[], size?: number): any
	}, onError: Function, queryObj?: Object
	): void;
		getIdentity(item: any): any;
		getLabel(item: any): any;
		getRoot(onItem: any, onError: any): void;
		isItem(something: any): boolean;
		mayHaveChildren(item: dojo.data.api.Item): any;
		newItem(args: dijit.tree.dndSource.___Item, parent: any, insertIndex: number): any;
		pasteItem(
		childItem: any, oldParentItem: any, newParentItem: any, bCopy: boolean, insertIndex: number
	): void;
		onAddToRoot(item: any): void;
		onChange(item: dojo.data.api.Item): void;
		onChildrenChange(parent: dojo.data.api.Item, newChildrenList: dojo.data.api.Item[]): void;
		onDelete(item: dojo.data.api.Item): void;
		onDeleteItem(item: any): void;
		onLeaveRoot(item: any): void;
		onNewItem(item: any, parentInfo: any): void;
		onNewRootItem(args: dijit.tree.dndSource.___Item): void;
		onSetItem(item: any, attribute: String, oldValue: Object, newValue: Object): void;
		onSetItem(item: any, attribute: String, oldValue: any[], newValue: Object): void;
		onSetItem(item: any, attribute: String, oldValue: Object, newValue: any[]): void;
		onSetItem(item: any, attribute: String, oldValue: any[], newValue: any[]): void
	}

	declare class Selection  {
		constructor(inGrid: any): this;
		mode: string;
		rangeStartIndex: number;
		selected: Object;
		selectedIndex: number;
		updating: number;
		addToSelection(inIndex: any): void;
		clear(): void;
		clickSelect(inIndex: any, inCtrlKey: any, inShiftKey: any): void;
		clickSelectEvent(e: any): void;
		deselect(inIndex: any): void;
		deselectAll(inExcept: any): void;
		deselectRange(inFrom: any, inTo: any): void;
		getFirstSelected(): number;
		getNextSelected(inPrev: any): number;
		getSelected(): any[];
		getSelectedCount(): number;
		insert(inIndex: any): void;
		isSelected(inIndex: any): any;
		remove(inIndex: any): void;
		select(inIndex: any): void;
		selectRange(inFrom: any, inTo: any): void;
		setMode(mode: any): void;
		setSelected(inIndex: any, inSelect: any): void;
		toggleSelect(inIndex: any): void;
		onCanDeselect(inIndex: any): any;
		onCanSelect(inIndex: any): any;
		onChanged(): void;
		onChanging(): void;
		onDeselected(inIndex: any): void;
		onSelected(inIndex: any): void
	}

	declare class TreeSelection extends undefined$DataSelection {
		constructor(grid: any): this;
		mode: string;
		rangeStartIndex: number;
		selected: Object;
		selectedIndex: number;
		updating: number;
		addToSelection(inItemOrIndex: any): void;
		clear(): void;
		clickSelect(inIndex: any, inCtrlKey: any, inShiftKey: any): void;
		clickSelectEvent(e: any): void;
		deselect(inItemOrIndex: any): void;
		deselectAll(inItemOrIndex: any): void;
		deselectRange(inFrom: any, inTo: any): void;
		destroy(): void;
		getFirstSelected(): any;
		getNextSelected(inPrev: any): any;
		getSelected(): any[];
		getSelectedCount(): number;
		insert(inIndex: any): void;
		isSelected(inIndex: any): any;
		remove(inIndex: any): void;
		select(inIndex: any): void;
		selectRange(inFrom: any, inTo: any): void;
		setMode(mode: any): void;
		setSelected(inIndex: any, inSelect: any): void;
		toggleSelect(inIndex: any): void;
		onCanDeselect(inIndex: any): any;
		onCanSelect(inIndex: any): any;
		onChanged(): void;
		onChanging(): void;
		onDeselected(inIndex: any): void;
		onSelected(inIndex: any): void
	}

	declare class DataGrid extends undefined$_Grid {
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
		autoHeight: boolean;
		set(property: "autoHeight", value: boolean): void;
		get(property: "autoHeight"): boolean;
		watch(
		property: "autoHeight", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoRender: boolean;
		set(property: "autoRender", value: boolean): void;
		get(property: "autoRender"): boolean;
		watch(
		property: "autoRender", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		cellOverClass: string;
		set(property: "cellOverClass", value: string): void;
		get(property: "cellOverClass"): string;
		watch(
		property: "cellOverClass", callback: {
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
		classTag: string;
		set(property: "classTag", value: string): void;
		get(property: "classTag"): string;
		watch(
		property: "classTag", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		columnReordering: boolean;
		set(property: "columnReordering", value: boolean): void;
		get(property: "columnReordering"): boolean;
		watch(
		property: "columnReordering", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		defaultHeight: string;
		set(property: "defaultHeight", value: string): void;
		get(property: "defaultHeight"): string;
		watch(
		property: "defaultHeight", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		delayScroll: boolean;
		set(property: "delayScroll", value: boolean): void;
		get(property: "delayScroll"): boolean;
		watch(
		property: "delayScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		elasticView: number;
		set(property: "elasticView", value: number): void;
		get(property: "elasticView"): number;
		watch(
		property: "elasticView", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		errorMessage: string;
		set(property: "errorMessage", value: string): void;
		get(property: "errorMessage"): string;
		watch(
		property: "errorMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		escapeHTMLInData: boolean;
		set(property: "escapeHTMLInData", value: boolean): void;
		get(property: "escapeHTMLInData"): boolean;
		watch(
		property: "escapeHTMLInData", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		fastScroll: boolean;
		set(property: "fastScroll", value: boolean): void;
		get(property: "fastScroll"): boolean;
		watch(
		property: "fastScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		fetchText: string;
		set(property: "fetchText", value: string): void;
		get(property: "fetchText"): string;
		watch(
		property: "fetchText", callback: {
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
		formatterScope: Object;
		set(property: "formatterScope", value: Object): void;
		get(property: "formatterScope"): Object;
		watch(
		property: "formatterScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		headerMenu: Object;
		set(property: "headerMenu", value: Object): void;
		get(property: "headerMenu"): Object;
		watch(
		property: "headerMenu", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		height: string;
		set(property: "height", value: string): void;
		get(property: "height"): string;
		watch(
		property: "height", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		initialWidth: string;
		set(property: "initialWidth", value: string): void;
		get(property: "initialWidth"): string;
		watch(
		property: "initialWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		invalidated: Object;
		set(property: "invalidated", value: Object): void;
		get(property: "invalidated"): Object;
		watch(
		property: "invalidated", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		items: Object;
		set(property: "items", value: Object): void;
		get(property: "items"): Object;
		watch(
		property: "items", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		keepRows: number;
		set(property: "keepRows", value: number): void;
		get(property: "keepRows"): number;
		watch(
		property: "keepRows", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		keepSelection: boolean;
		set(property: "keepSelection", value: boolean): void;
		get(property: "keepSelection"): boolean;
		watch(
		property: "keepSelection", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		loadingMessage: string;
		set(property: "loadingMessage", value: string): void;
		get(property: "loadingMessage"): string;
		watch(
		property: "loadingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		noDataMessage: string;
		set(property: "noDataMessage", value: string): void;
		get(property: "noDataMessage"): string;
		watch(
		property: "noDataMessage", callback: {
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
		placeholderLabel: string;
		set(property: "placeholderLabel", value: string): void;
		get(property: "placeholderLabel"): string;
		watch(
		property: "placeholderLabel", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		query: Object;
		set(property: "query", value: Object): void;
		get(property: "query"): Object;
		watch(
		property: "query", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		queryOptions: Object;
		set(property: "queryOptions", value: Object): void;
		get(property: "queryOptions"): Object;
		watch(
		property: "queryOptions", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rowCount: number;
		set(property: "rowCount", value: number): void;
		get(property: "rowCount"): number;
		watch(
		property: "rowCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeight: number;
		set(property: "rowHeight", value: number): void;
		get(property: "rowHeight"): number;
		watch(
		property: "rowHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowSelector: boolean;
		set(property: "rowSelector", value: boolean): void;
		get(property: "rowSelector"): boolean;
		watch(
		property: "rowSelector", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rowsPerPage: number;
		set(property: "rowsPerPage", value: number): void;
		get(property: "rowsPerPage"): number;
		watch(
		property: "rowsPerPage", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scrollRedrawThreshold: number;
		set(property: "scrollRedrawThreshold", value: number): void;
		get(property: "scrollRedrawThreshold"): number;
		watch(
		property: "scrollRedrawThreshold", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		selectable: boolean;
		set(property: "selectable", value: boolean): void;
		get(property: "selectable"): boolean;
		watch(
		property: "selectable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selectionMode: string;
		set(property: "selectionMode", value: string): void;
		get(property: "selectionMode"): string;
		watch(
		property: "selectionMode", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		singleClickEdit: boolean;
		set(property: "singleClickEdit", value: boolean): void;
		get(property: "singleClickEdit"): boolean;
		watch(
		property: "singleClickEdit", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		sortFields: Object;
		set(property: "sortFields", value: Object): void;
		get(property: "sortFields"): Object;
		watch(
		property: "sortFields", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		sortInfo: number;
		set(property: "sortInfo", value: number): void;
		get(property: "sortInfo"): number;
		watch(
		property: "sortInfo", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		store: Object;
		set(property: "store", value: Object): void;
		get(property: "store"): Object;
		watch(
		property: "store", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		structure: Object;
		set(property: "structure", value: Object): void;
		get(property: "structure"): Object;
		watch(
		property: "structure", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		summary: string;
		set(property: "summary", value: string): void;
		get(property: "summary"): string;
		watch(
		property: "summary", callback: {
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
		updateDelay: number;
		set(property: "updateDelay", value: number): void;
		get(property: "updateDelay"): number;
		watch(
		property: "updateDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		updating: boolean;
		set(property: "updating", value: boolean): void;
		get(property: "updating"): boolean;
		watch(
		property: "updating", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		addRow(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		beginUpdate(): void;
		buildRendering(): void;
		buildViews(): void;
		canEdit(inCell: any, inRowIndex: any): any;
		canSort(): boolean;
		cell_markupFactory(cellFunc: any, node: any, cellDef: any): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createLayout(): void;
		createManagers(): void;
		createScroller(): void;
		createSelection(): void;
		createView(inClass: any, idx: any): any;
		createViews(): void;
		defaultUpdate(): void;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchContentEvent(e: any): void;
		dispatchHeaderEvent(e: any): void;
		dispatchKeyEvent(e: any): void;
		doApplyCellEdit(inValue: any, inRowIndex: any, inAttrName: any): void;
		doApplyEdit(inRowIndex: any, inDataAttr?: any): void;
		doCancelEdit(inRowIndex: any): void;
		doclick(e: any): void;
		docontextmenu(e: any): void;
		dodblclick(e: any): void;
		doheaderclick(e: any): void;
		doheadercontextmenu(e: any): void;
		doheaderdblclick(e: any): void;
		dokeydown(e: any): void;
		doKeyEvent(e: any): void;
		doStartEdit(inCell: any, inRowIndex: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		endUpdate(): void;
		filter(query: any, reRender: any): void;
		finishScrollJob(): void;
		get(name: any): any;
		get(inRowIndex: number, inItem: any): any;
		getCell(inIndex: number): any;
		getCellName(inCell: any): any;
		getCellNodeTextDirection(inColIndex: any, inRowIndex: any): any;
		getChildren(): any[];
		getColumnTogglingItems(): any;
		getDescendants(): any[];
		getItem(idx: any): any;
		getItemIndex(item: any): any;
		getParent(): any;
		getRowNode(inRowIndex: any): any;
		getSortAsc(inSortInfo: any): any;
		getSortIndex(inSortInfo: any): number;
		getSortProps(): any;
		hasLayout(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		markupFactory(props: any, node: any, ctor: any, cellFunc: any): void;
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
		postrender(): void;
		postresize(): void;
		prerender(): void;
		removeSelectedRows(): void;
		render(): void;
		resize(changeSize: any, resultSize: any): void;
		rowHeightChanged(inRowIndex: number): void;
		scrollTo(inTop: number): void;
		scrollToRow(inRowIndex: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setCellNodeTextDirection(inColIndex: any, inRowIndex: any, textDir: any): void;
		setCellWidth(inIndex: any, inUnitWidth: any): void;
		setHeaderMenu(menu: dijit.Menu): void;
		setItems(items: any): void;
		setQuery(query: any, queryOptions: any): void;
		setScrollTop(inTop: any): void;
		setSortIndex(inIndex: number, inAsc: boolean): void;
		setSortInfo(inSortInfo: any): void;
		setStore(store: any, query: any, queryOptions: any): void;
		setStructure(inStructure: Object): void;
		setStructure(inStructure: Object[]): void;
		setStructure(inStructure: Object[][]): void;
		setupHeaderMenu(): void;
		showMessage(message: any): void;
		sizeChange(): void;
		sort(): void;
		startup(): void;
		styleRowState(inRow: any): void;
		subscribe(t: String, method: Function): any;
		textSizeChanged(): void;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		update(): void;
		updateRow(inRowIndex: number): void;
		updateRowCount(inRowCount: number): void;
		updateRows(startIndex: number, howMany: number): void;
		updateRowStyles(inRowIndex: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onApplyCellEdit(inValue: String, inRowIndex: number, inFieldIndex: number): void;
		onApplyEdit(inRowIndex: number): void;
		onBlur(): void;
		onCancelEdit(inRowIndex: number): void;
		onCanDeselect(inRowIndex: number): any;
		onCanSelect(inRowIndex: number): any;
		onCellClick(e: Event): void;
		onCellContextMenu(e: Event): void;
		onCellDblClick(e: Event): void;
		onCellFocus(inCell: Object, inRowIndex: number): void;
		onCellMouseDown(e: Event): void;
		onCellMouseOut(e: Event): void;
		onCellMouseOver(e: Event): void;
		onClick(event: any): void;
		onClose(): boolean;
		onContentEvent(e: any): void;
		onDblClick(event: any): void;
		onDeselected(inRowIndex: number): void;
		onFetchError(err: any, req: any): void;
		onFocus(): void;
		onHeaderCellClick(e: Event): void;
		onHeaderCellContextMenu(e: Event): void;
		onHeaderCellDblClick(e: Event): void;
		onHeaderCellMouseDown(e: Event): void;
		onHeaderCellMouseOut(e: Event): void;
		onHeaderCellMouseOver(e: Event): void;
		onHeaderClick(e: Event): void;
		onHeaderContextMenu(e: Event): void;
		onHeaderDblClick(e: Event): void;
		onHeaderEvent(e: any): void;
		onHeaderMouseOut(e: Event): void;
		onHeaderMouseOver(e: Event): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyEvent(e: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseDownRow(e: Event): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOutRow(e: Event): void;
		onMouseOver(event: any): void;
		onMouseOverRow(e: Event): void;
		onMouseUp(event: any): void;
		onMoveColumn(): void;
		onResizeColumn(cellIdx: number): void;
		onRowClick(e: Event): void;
		onRowContextMenu(e: Event): void;
		onRowDblClick(e: Event): void;
		onRowMouseDown(e: Event): void;
		onRowMouseOut(e: Event): void;
		onRowMouseOver(e: Event): void;
		onSelected(inRowIndex: number): void;
		onSelectionChanged(): void;
		onShow(): void;
		onStartEdit(inCell: Object, inRowIndex: number): void;
		onStyleRow(inRow: any): void
	}

	declare class EnhancedGrid extends undefined$DataGrid {
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
		autoHeight: boolean;
		set(property: "autoHeight", value: boolean): void;
		get(property: "autoHeight"): boolean;
		watch(
		property: "autoHeight", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoRender: boolean;
		set(property: "autoRender", value: boolean): void;
		get(property: "autoRender"): boolean;
		watch(
		property: "autoRender", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		cellOverClass: string;
		set(property: "cellOverClass", value: string): void;
		get(property: "cellOverClass"): string;
		watch(
		property: "cellOverClass", callback: {
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
		classTag: string;
		set(property: "classTag", value: string): void;
		get(property: "classTag"): string;
		watch(
		property: "classTag", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		columnReordering: boolean;
		set(property: "columnReordering", value: boolean): void;
		get(property: "columnReordering"): boolean;
		watch(
		property: "columnReordering", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		defaultHeight: string;
		set(property: "defaultHeight", value: string): void;
		get(property: "defaultHeight"): string;
		watch(
		property: "defaultHeight", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		delayScroll: boolean;
		set(property: "delayScroll", value: boolean): void;
		get(property: "delayScroll"): boolean;
		watch(
		property: "delayScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		elasticView: number;
		set(property: "elasticView", value: number): void;
		get(property: "elasticView"): number;
		watch(
		property: "elasticView", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		errorMessage: string;
		set(property: "errorMessage", value: string): void;
		get(property: "errorMessage"): string;
		watch(
		property: "errorMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		escapeHTMLInData: boolean;
		set(property: "escapeHTMLInData", value: boolean): void;
		get(property: "escapeHTMLInData"): boolean;
		watch(
		property: "escapeHTMLInData", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		fastScroll: boolean;
		set(property: "fastScroll", value: boolean): void;
		get(property: "fastScroll"): boolean;
		watch(
		property: "fastScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		fetchText: string;
		set(property: "fetchText", value: string): void;
		get(property: "fetchText"): string;
		watch(
		property: "fetchText", callback: {
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
		formatterScope: Object;
		set(property: "formatterScope", value: Object): void;
		get(property: "formatterScope"): Object;
		watch(
		property: "formatterScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		headerMenu: Object;
		set(property: "headerMenu", value: Object): void;
		get(property: "headerMenu"): Object;
		watch(
		property: "headerMenu", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		height: string;
		set(property: "height", value: string): void;
		get(property: "height"): string;
		watch(
		property: "height", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		initialWidth: string;
		set(property: "initialWidth", value: string): void;
		get(property: "initialWidth"): string;
		watch(
		property: "initialWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		invalidated: Object;
		set(property: "invalidated", value: Object): void;
		get(property: "invalidated"): Object;
		watch(
		property: "invalidated", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		items: Object;
		set(property: "items", value: Object): void;
		get(property: "items"): Object;
		watch(
		property: "items", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		keepRows: number;
		set(property: "keepRows", value: number): void;
		get(property: "keepRows"): number;
		watch(
		property: "keepRows", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		keepSelection: boolean;
		set(property: "keepSelection", value: boolean): void;
		get(property: "keepSelection"): boolean;
		watch(
		property: "keepSelection", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		loadingMessage: string;
		set(property: "loadingMessage", value: string): void;
		get(property: "loadingMessage"): string;
		watch(
		property: "loadingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		noDataMessage: string;
		set(property: "noDataMessage", value: string): void;
		get(property: "noDataMessage"): string;
		watch(
		property: "noDataMessage", callback: {
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
		placeholderLabel: string;
		set(property: "placeholderLabel", value: string): void;
		get(property: "placeholderLabel"): string;
		watch(
		property: "placeholderLabel", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		pluginMgr: Object;
		set(property: "pluginMgr", value: Object): void;
		get(property: "pluginMgr"): Object;
		watch(
		property: "pluginMgr", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		plugins: Object;
		set(property: "plugins", value: Object): void;
		get(property: "plugins"): Object;
		watch(
		property: "plugins", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		query: Object;
		set(property: "query", value: Object): void;
		get(property: "query"): Object;
		watch(
		property: "query", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		queryOptions: Object;
		set(property: "queryOptions", value: Object): void;
		get(property: "queryOptions"): Object;
		watch(
		property: "queryOptions", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rowCount: number;
		set(property: "rowCount", value: number): void;
		get(property: "rowCount"): number;
		watch(
		property: "rowCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeight: number;
		set(property: "rowHeight", value: number): void;
		get(property: "rowHeight"): number;
		watch(
		property: "rowHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowSelector: boolean;
		set(property: "rowSelector", value: boolean): void;
		get(property: "rowSelector"): boolean;
		watch(
		property: "rowSelector", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rowsPerPage: number;
		set(property: "rowsPerPage", value: number): void;
		get(property: "rowsPerPage"): number;
		watch(
		property: "rowsPerPage", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scrollRedrawThreshold: number;
		set(property: "scrollRedrawThreshold", value: number): void;
		get(property: "scrollRedrawThreshold"): number;
		watch(
		property: "scrollRedrawThreshold", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		selectable: boolean;
		set(property: "selectable", value: boolean): void;
		get(property: "selectable"): boolean;
		watch(
		property: "selectable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selectionMode: string;
		set(property: "selectionMode", value: string): void;
		get(property: "selectionMode"): string;
		watch(
		property: "selectionMode", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		singleClickEdit: boolean;
		set(property: "singleClickEdit", value: boolean): void;
		get(property: "singleClickEdit"): boolean;
		watch(
		property: "singleClickEdit", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		sortFields: Object;
		set(property: "sortFields", value: Object): void;
		get(property: "sortFields"): Object;
		watch(
		property: "sortFields", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		sortInfo: number;
		set(property: "sortInfo", value: number): void;
		get(property: "sortInfo"): number;
		watch(
		property: "sortInfo", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		store: Object;
		set(property: "store", value: Object): void;
		get(property: "store"): Object;
		watch(
		property: "store", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		structure: Object;
		set(property: "structure", value: Object): void;
		get(property: "structure"): Object;
		watch(
		property: "structure", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		summary: string;
		set(property: "summary", value: string): void;
		get(property: "summary"): string;
		watch(
		property: "summary", callback: {
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
		updateDelay: number;
		set(property: "updateDelay", value: number): void;
		get(property: "updateDelay"): number;
		watch(
		property: "updateDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		updating: boolean;
		set(property: "updating", value: boolean): void;
		get(property: "updating"): boolean;
		watch(
		property: "updating", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		addRow(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		beginUpdate(): void;
		buildRendering(): void;
		buildViews(): void;
		canEdit(inCell: any, inRowIndex: any): any;
		canSort(colIndex?: any, field?: any): boolean;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createLayout(): void;
		createManagers(): void;
		createScroller(): void;
		createSelection(): void;
		createView(): any;
		createViews(): void;
		defaultUpdate(): void;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchContentEvent(e: any): void;
		dispatchHeaderEvent(e: any): void;
		dispatchKeyEvent(e: any): void;
		doApplyCellEdit(inValue: any, inRowIndex: any, inAttrName: any): void;
		doApplyEdit(inRowIndex: any, inDataAttr: any): void;
		doCancelEdit(inRowIndex: any): void;
		doclick(e: any): void;
		docontextmenu(e: any): void;
		dodblclick(e: any): void;
		doheaderclick(e: any): void;
		doheadercontextmenu(e: any): void;
		doheaderdblclick(e: any): void;
		dokeydown(e: any): void;
		doKeyEvent(e: any): void;
		doStartEdit(inCell: any, inRowIndex: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		endUpdate(): void;
		filter(query: any, reRender: any): void;
		finishScrollJob(): void;
		get(inRowIndex: number, inItem: any): any;
		get(name: any): any;
		getCell(inIndex: number): any;
		getCellByField(field: any): any;
		getCellName(inCell: any): any;
		getCellNodeTextDirection(inColIndex: any, inRowIndex: any): any;
		getChildren(): any[];
		getColumnTogglingItems(): any;
		getDescendants(): any[];
		getItem(idx: any): any;
		getItemIndex(item: any): any;
		getParent(): any;
		getRowNode(inRowIndex: any): any;
		getSortAsc(inSortInfo: any): any;
		getSortIndex(inSortInfo: any): number;
		getSortProps(): any;
		hasLayout(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		markupFactory(props: any, node: any, ctor: any, cellFunc: any): void;
		mixin(target: any, source: any): void;
		on(type: String, func: Function): any;
		on(type: Function, func: Function): any;
		own(): any;
		placeAt(reference: String, position: String): any;
		placeAt(reference: HTMLElement, position: String): any;
		placeAt(reference: dijit._WidgetBase, position: String): any;
		placeAt(reference: String, position: number): any;
		placeAt(reference: HTMLElement, position: number): any;
		placeAt(reference: dijit._WidgetBase, position: number): any;
		plugin(name: String): any;
		postCreate(): void;
		postMixInProperties(): void;
		postrender(): void;
		postresize(): void;
		prerender(): void;
		registerPlugin(clazz: any, props: any): void;
		removeSelectedRows(): void;
		render(): void;
		resize(changeSize: any, resultSize: any): void;
		rowHeightChanged(inRowIndex: number): void;
		scrollTo(inTop: number): void;
		scrollToRow(inRowIndex: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setCellNodeTextDirection(inColIndex: any, inRowIndex: any, textDir: any): void;
		setCellWidth(inIndex: any, inUnitWidth: any): void;
		setHeaderMenu(menu: dijit.Menu): void;
		setItems(items: any): void;
		setQuery(query: any, queryOptions: any): void;
		setScrollTop(inTop: any): void;
		setSortIndex(inIndex: number, inAsc: boolean): void;
		setSortInfo(inSortInfo: any): void;
		setStore(store: any, query: any, queryOptions: any): void;
		setStructure(inStructure: Object): void;
		setStructure(inStructure: Object[]): void;
		setStructure(inStructure: Object[][]): void;
		setupHeaderMenu(): void;
		showMessage(message: any): void;
		sizeChange(): void;
		sort(): void;
		startup(): void;
		styleRowState(inRow: any): void;
		subscribe(t: String, method: Function): any;
		textSizeChanged(): void;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		update(): void;
		updateRow(inRowIndex: number): void;
		updateRowCount(inRowCount: number): void;
		updateRows(startIndex: number, howMany: number): void;
		updateRowStyles(inRowIndex: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onApplyCellEdit(inValue: String, inRowIndex: number, inFieldIndex: number): void;
		onApplyEdit(inRowIndex: number): void;
		onBlur(): void;
		onCancelEdit(inRowIndex: number): void;
		onCanDeselect(inRowIndex: number): any;
		onCanSelect(inRowIndex: number): any;
		onCellClick(e: Event): void;
		onCellContextMenu(e: Event): void;
		onCellDblClick(e: Event): void;
		onCellFocus(inCell: Object, inRowIndex: number): void;
		onCellMouseDown(e: Event): void;
		onCellMouseOut(e: Event): void;
		onCellMouseOver(e: Event): void;
		onClick(event: any): void;
		onClose(): boolean;
		onContentEvent(e: any): void;
		onDblClick(event: any): void;
		onDeselected(inRowIndex: number): void;
		onFetchError(err: any, req: any): void;
		onFocus(): void;
		onHeaderCellClick(e: Event): void;
		onHeaderCellContextMenu(e: Event): void;
		onHeaderCellDblClick(e: Event): void;
		onHeaderCellMouseDown(e: Event): void;
		onHeaderCellMouseOut(e: Event): void;
		onHeaderCellMouseOver(e: Event): void;
		onHeaderClick(e: Event): void;
		onHeaderContextMenu(e: Event): void;
		onHeaderDblClick(e: Event): void;
		onHeaderEvent(e: any): void;
		onHeaderMouseOut(e: Event): void;
		onHeaderMouseOver(e: Event): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyEvent(e: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseDownRow(e: Event): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOutRow(e: Event): void;
		onMouseOver(event: any): void;
		onMouseOverRow(e: Event): void;
		onMouseUp(e: any): void;
		onMoveColumn(): void;
		onResizeColumn(cellIdx: number): void;
		onRowClick(e: Event): void;
		onRowContextMenu(e: Event): void;
		onRowDblClick(e: Event): void;
		onRowMouseDown(e: Event): void;
		onRowMouseOut(e: Event): void;
		onRowMouseOver(e: Event): void;
		onSelected(inRowIndex: number): void;
		onSelectionChanged(): void;
		onShow(): void;
		onStartEdit(inCell: Object, inRowIndex: number): void;
		onStyleRow(inRow: any): void
	}

	declare class TreeGrid extends undefined$DataGrid {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		aggregator: Object;
		set(property: "aggregator", value: Object): void;
		get(property: "aggregator"): Object;
		watch(
		property: "aggregator", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		autoHeight: boolean;
		set(property: "autoHeight", value: boolean): void;
		get(property: "autoHeight"): boolean;
		watch(
		property: "autoHeight", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoRender: boolean;
		set(property: "autoRender", value: boolean): void;
		get(property: "autoRender"): boolean;
		watch(
		property: "autoRender", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		cellOverClass: string;
		set(property: "cellOverClass", value: string): void;
		get(property: "cellOverClass"): string;
		watch(
		property: "cellOverClass", callback: {
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
		classTag: string;
		set(property: "classTag", value: string): void;
		get(property: "classTag"): string;
		watch(
		property: "classTag", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		columnReordering: boolean;
		set(property: "columnReordering", value: boolean): void;
		get(property: "columnReordering"): boolean;
		watch(
		property: "columnReordering", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		defaultHeight: string;
		set(property: "defaultHeight", value: string): void;
		get(property: "defaultHeight"): string;
		watch(
		property: "defaultHeight", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		defaultOpen: boolean;
		set(property: "defaultOpen", value: boolean): void;
		get(property: "defaultOpen"): boolean;
		watch(
		property: "defaultOpen", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		delayScroll: boolean;
		set(property: "delayScroll", value: boolean): void;
		get(property: "delayScroll"): boolean;
		watch(
		property: "delayScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		elasticView: number;
		set(property: "elasticView", value: number): void;
		get(property: "elasticView"): number;
		watch(
		property: "elasticView", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		errorMessage: string;
		set(property: "errorMessage", value: string): void;
		get(property: "errorMessage"): string;
		watch(
		property: "errorMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		escapeHTMLInData: boolean;
		set(property: "escapeHTMLInData", value: boolean): void;
		get(property: "escapeHTMLInData"): boolean;
		watch(
		property: "escapeHTMLInData", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		expandoCell: number;
		set(property: "expandoCell", value: number): void;
		get(property: "expandoCell"): number;
		watch(
		property: "expandoCell", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		fastScroll: boolean;
		set(property: "fastScroll", value: boolean): void;
		get(property: "fastScroll"): boolean;
		watch(
		property: "fastScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		fetchText: string;
		set(property: "fetchText", value: string): void;
		get(property: "fetchText"): string;
		watch(
		property: "fetchText", callback: {
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
		formatterScope: Object;
		set(property: "formatterScope", value: Object): void;
		get(property: "formatterScope"): Object;
		watch(
		property: "formatterScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		headerMenu: Object;
		set(property: "headerMenu", value: Object): void;
		get(property: "headerMenu"): Object;
		watch(
		property: "headerMenu", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		height: string;
		set(property: "height", value: string): void;
		get(property: "height"): string;
		watch(
		property: "height", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		initialWidth: string;
		set(property: "initialWidth", value: string): void;
		get(property: "initialWidth"): string;
		watch(
		property: "initialWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		invalidated: Object;
		set(property: "invalidated", value: Object): void;
		get(property: "invalidated"): Object;
		watch(
		property: "invalidated", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		items: Object;
		set(property: "items", value: Object): void;
		get(property: "items"): Object;
		watch(
		property: "items", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		keepRows: number;
		set(property: "keepRows", value: number): void;
		get(property: "keepRows"): number;
		watch(
		property: "keepRows", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		keepSelection: boolean;
		set(property: "keepSelection", value: boolean): void;
		get(property: "keepSelection"): boolean;
		watch(
		property: "keepSelection", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		loadingMessage: string;
		set(property: "loadingMessage", value: string): void;
		get(property: "loadingMessage"): string;
		watch(
		property: "loadingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		noDataMessage: string;
		set(property: "noDataMessage", value: string): void;
		get(property: "noDataMessage"): string;
		watch(
		property: "noDataMessage", callback: {
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
		openAtLevels: any[];
		set(property: "openAtLevels", value: any[]): void;
		get(property: "openAtLevels"): any[];
		watch(
		property: "openAtLevels", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
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
		placeholderLabel: string;
		set(property: "placeholderLabel", value: string): void;
		get(property: "placeholderLabel"): string;
		watch(
		property: "placeholderLabel", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		query: Object;
		set(property: "query", value: Object): void;
		get(property: "query"): Object;
		watch(
		property: "query", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		queryOptions: Object;
		set(property: "queryOptions", value: Object): void;
		get(property: "queryOptions"): Object;
		watch(
		property: "queryOptions", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rowCount: number;
		set(property: "rowCount", value: number): void;
		get(property: "rowCount"): number;
		watch(
		property: "rowCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeight: number;
		set(property: "rowHeight", value: number): void;
		get(property: "rowHeight"): number;
		watch(
		property: "rowHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowSelector: boolean;
		set(property: "rowSelector", value: boolean): void;
		get(property: "rowSelector"): boolean;
		watch(
		property: "rowSelector", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rowsPerPage: number;
		set(property: "rowsPerPage", value: number): void;
		get(property: "rowsPerPage"): number;
		watch(
		property: "rowsPerPage", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scrollRedrawThreshold: number;
		set(property: "scrollRedrawThreshold", value: number): void;
		get(property: "scrollRedrawThreshold"): number;
		watch(
		property: "scrollRedrawThreshold", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		selectable: boolean;
		set(property: "selectable", value: boolean): void;
		get(property: "selectable"): boolean;
		watch(
		property: "selectable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selectionMode: string;
		set(property: "selectionMode", value: string): void;
		get(property: "selectionMode"): string;
		watch(
		property: "selectionMode", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		singleClickEdit: boolean;
		set(property: "singleClickEdit", value: boolean): void;
		get(property: "singleClickEdit"): boolean;
		watch(
		property: "singleClickEdit", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		sortChildItems: boolean;
		set(property: "sortChildItems", value: boolean): void;
		get(property: "sortChildItems"): boolean;
		watch(
		property: "sortChildItems", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		sortFields: Object;
		set(property: "sortFields", value: Object): void;
		get(property: "sortFields"): Object;
		watch(
		property: "sortFields", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		sortInfo: number;
		set(property: "sortInfo", value: number): void;
		get(property: "sortInfo"): number;
		watch(
		property: "sortInfo", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		store: Object;
		set(property: "store", value: Object): void;
		get(property: "store"): Object;
		watch(
		property: "store", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		structure: Object;
		set(property: "structure", value: Object): void;
		get(property: "structure"): Object;
		watch(
		property: "structure", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		summary: string;
		set(property: "summary", value: string): void;
		get(property: "summary"): string;
		watch(
		property: "summary", callback: {
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
		treeModel: Object;
		set(property: "treeModel", value: Object): void;
		get(property: "treeModel"): Object;
		watch(
		property: "treeModel", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		updateDelay: number;
		set(property: "updateDelay", value: number): void;
		get(property: "updateDelay"): number;
		watch(
		property: "updateDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		updating: boolean;
		set(property: "updating", value: boolean): void;
		get(property: "updating"): boolean;
		watch(
		property: "updating", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		addRow(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		beginUpdate(): void;
		buildRendering(): void;
		buildViews(): void;
		canEdit(inCell: any, inRowIndex: any): any;
		canSort(): boolean;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createLayout(): void;
		createManagers(): void;
		createScroller(): void;
		createSelection(): void;
		createView(inClass: any, idx: any): any;
		createViews(): void;
		defaultUpdate(): void;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchContentEvent(e: any): void;
		dispatchHeaderEvent(e: any): void;
		dispatchKeyEvent(e: any): void;
		doApplyCellEdit(inValue: any, inRowIndex: any, inAttrName: any): void;
		doApplyEdit(inRowIndex: any, inDataAttr: any): void;
		doCancelEdit(inRowIndex: any): void;
		doclick(e: any): void;
		docontextmenu(e: any): void;
		dodblclick(e: any): void;
		doheaderclick(e: any): void;
		doheadercontextmenu(e: any): void;
		doheaderdblclick(e: any): void;
		dokeydown(e: any): void;
		doKeyEvent(e: any): void;
		doStartEdit(inCell: any, inRowIndex: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		endUpdate(): void;
		filter(query: any, reRender: any): void;
		finishScrollJob(): void;
		get(inRowIndex: number, inItem: any): any;
		get(name: any): any;
		getCell(inIndex: number): any;
		getCellName(inCell: any): any;
		getCellNodeTextDirection(inColIndex: any, inRowIndex: any): any;
		getChildren(): any[];
		getColumnTogglingItems(): any;
		getDefaultOpenState(cellDef: any, item: any): any;
		getDescendants(): any[];
		getItem(idx: number): any;
		getItem(idx: any[]): any;
		getItem(idx: String): any;
		getItemIndex(item: any): any;
		getParent(): any;
		getRowNode(inRowIndex: any): any;
		getSortAsc(inSortInfo: any): any;
		getSortIndex(inSortInfo: any): number;
		getSortProps(): any;
		hasLayout(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		markupFactory(props: any, node: any, ctor: any, cellFunc: any): void;
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
		postrender(): void;
		postresize(): void;
		prerender(): void;
		removeSelectedRows(): void;
		render(): void;
		resize(changeSize: any, resultSize: any): void;
		rowHeightChanged(inRowIndex: number): void;
		scrollTo(inTop: number): void;
		scrollToRow(inRowIndex: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setCellNodeTextDirection(inColIndex: any, inRowIndex: any, textDir: any): void;
		setCellWidth(inIndex: any, inUnitWidth: any): void;
		setHeaderMenu(menu: dijit.Menu): void;
		setItems(items: any): void;
		setModel(treeModel: any): void;
		setQuery(query: any, queryOptions: any): void;
		setScrollTop(inTop: any): void;
		setSortIndex(inIndex: number, inAsc: boolean): void;
		setSortInfo(inSortInfo: any): void;
		setStore(store: any, query: any, queryOptions: any): void;
		setStructure(inStructure: Object): void;
		setStructure(inStructure: Object[]): void;
		setStructure(inStructure: Object[][]): void;
		setupHeaderMenu(): void;
		showMessage(message: any): void;
		sizeChange(): void;
		sort(): void;
		startup(): void;
		styleRowNode(inRowIndex: any, inRowNode: any): void;
		styleRowState(inRow: any): void;
		subscribe(t: String, method: Function): any;
		textSizeChanged(): void;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		update(): void;
		updateRow(inRowIndex: number): void;
		updateRowCount(inRowCount: number): void;
		updateRows(startIndex: number, howMany: number): void;
		updateRowStyles(inRowIndex: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onApplyCellEdit(inValue: String, inRowIndex: number, inFieldIndex: number): void;
		onApplyEdit(inRowIndex: number): void;
		onBlur(): void;
		onCancelEdit(inRowIndex: number): void;
		onCanDeselect(inRowIndex: number): any;
		onCanSelect(inRowIndex: any): any;
		onCellClick(e: Event): void;
		onCellContextMenu(e: Event): void;
		onCellDblClick(e: Event): void;
		onCellFocus(inCell: Object, inRowIndex: number): void;
		onCellMouseDown(e: Event): void;
		onCellMouseOut(e: Event): void;
		onCellMouseOver(e: Event): void;
		onClick(event: any): void;
		onClose(): boolean;
		onContentEvent(e: any): void;
		onDblClick(event: any): void;
		onDeselected(inRowIndex: number): void;
		onFetchError(err: any, req: any): void;
		onFocus(): void;
		onHeaderCellClick(e: Event): void;
		onHeaderCellContextMenu(e: Event): void;
		onHeaderCellDblClick(e: Event): void;
		onHeaderCellMouseDown(e: Event): void;
		onHeaderCellMouseOut(e: Event): void;
		onHeaderCellMouseOver(e: Event): void;
		onHeaderClick(e: Event): void;
		onHeaderContextMenu(e: Event): void;
		onHeaderDblClick(e: Event): void;
		onHeaderEvent(e: any): void;
		onHeaderMouseOut(e: Event): void;
		onHeaderMouseOver(e: Event): void;
		onHide(): void;
		onKeyDown(e: any): void;
		onKeyEvent(e: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseDownRow(e: Event): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOutRow(e: Event): void;
		onMouseOver(event: any): void;
		onMouseOverRow(e: Event): void;
		onMouseUp(event: any): void;
		onMoveColumn(): void;
		onResizeColumn(cellIdx: number): void;
		onRowClick(e: Event): void;
		onRowContextMenu(e: Event): void;
		onRowDblClick(e: Event): void;
		onRowMouseDown(e: Event): void;
		onRowMouseOut(e: Event): void;
		onRowMouseOver(e: Event): void;
		onSelected(inRowIndex: number): void;
		onSelectionChanged(): void;
		onShow(): void;
		onStartEdit(inCell: Object, inRowIndex: number): void;
		onStyleRow(row: any): void
	}

	declare class LazyTreeGrid extends undefined$TreeGrid {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		aggregator: Object;
		set(property: "aggregator", value: Object): void;
		get(property: "aggregator"): Object;
		watch(
		property: "aggregator", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		autoHeight: boolean;
		set(property: "autoHeight", value: boolean): void;
		get(property: "autoHeight"): boolean;
		watch(
		property: "autoHeight", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoRender: boolean;
		set(property: "autoRender", value: boolean): void;
		get(property: "autoRender"): boolean;
		watch(
		property: "autoRender", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		autoWidth: boolean;
		set(property: "autoWidth", value: boolean): void;
		get(property: "autoWidth"): boolean;
		watch(
		property: "autoWidth", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		cellOverClass: string;
		set(property: "cellOverClass", value: string): void;
		get(property: "cellOverClass"): string;
		watch(
		property: "cellOverClass", callback: {
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
		classTag: string;
		set(property: "classTag", value: string): void;
		get(property: "classTag"): string;
		watch(
		property: "classTag", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		colSpans: Object;
		set(property: "colSpans", value: Object): void;
		get(property: "colSpans"): Object;
		watch(
		property: "colSpans", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		columnReordering: boolean;
		set(property: "columnReordering", value: boolean): void;
		get(property: "columnReordering"): boolean;
		watch(
		property: "columnReordering", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		defaultHeight: string;
		set(property: "defaultHeight", value: string): void;
		get(property: "defaultHeight"): string;
		watch(
		property: "defaultHeight", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		defaultOpen: boolean;
		set(property: "defaultOpen", value: boolean): void;
		get(property: "defaultOpen"): boolean;
		watch(
		property: "defaultOpen", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		defaultState: Object;
		set(property: "defaultState", value: Object): void;
		get(property: "defaultState"): Object;
		watch(
		property: "defaultState", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		delayScroll: boolean;
		set(property: "delayScroll", value: boolean): void;
		get(property: "delayScroll"): boolean;
		watch(
		property: "delayScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		editable: boolean;
		set(property: "editable", value: boolean): void;
		get(property: "editable"): boolean;
		watch(
		property: "editable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		elasticView: number;
		set(property: "elasticView", value: number): void;
		get(property: "elasticView"): number;
		watch(
		property: "elasticView", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		errorMessage: string;
		set(property: "errorMessage", value: string): void;
		get(property: "errorMessage"): string;
		watch(
		property: "errorMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		escapeHTMLInData: boolean;
		set(property: "escapeHTMLInData", value: boolean): void;
		get(property: "escapeHTMLInData"): boolean;
		watch(
		property: "escapeHTMLInData", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		expandoCell: number;
		set(property: "expandoCell", value: number): void;
		get(property: "expandoCell"): number;
		watch(
		property: "expandoCell", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		fastScroll: boolean;
		set(property: "fastScroll", value: boolean): void;
		get(property: "fastScroll"): boolean;
		watch(
		property: "fastScroll", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		fetchText: string;
		set(property: "fetchText", value: string): void;
		get(property: "fetchText"): string;
		watch(
		property: "fetchText", callback: {
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
		formatterScope: Object;
		set(property: "formatterScope", value: Object): void;
		get(property: "formatterScope"): Object;
		watch(
		property: "formatterScope", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		headerMenu: Object;
		set(property: "headerMenu", value: Object): void;
		get(property: "headerMenu"): Object;
		watch(
		property: "headerMenu", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		height: string;
		set(property: "height", value: string): void;
		get(property: "height"): string;
		watch(
		property: "height", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		initialWidth: string;
		set(property: "initialWidth", value: string): void;
		get(property: "initialWidth"): string;
		watch(
		property: "initialWidth", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		invalidated: Object;
		set(property: "invalidated", value: Object): void;
		get(property: "invalidated"): Object;
		watch(
		property: "invalidated", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		items: Object;
		set(property: "items", value: Object): void;
		get(property: "items"): Object;
		watch(
		property: "items", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		keepRows: number;
		set(property: "keepRows", value: number): void;
		get(property: "keepRows"): number;
		watch(
		property: "keepRows", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		keepSelection: boolean;
		set(property: "keepSelection", value: boolean): void;
		get(property: "keepSelection"): boolean;
		watch(
		property: "keepSelection", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		loadingMessage: string;
		set(property: "loadingMessage", value: string): void;
		get(property: "loadingMessage"): string;
		watch(
		property: "loadingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		noDataMessage: string;
		set(property: "noDataMessage", value: string): void;
		get(property: "noDataMessage"): string;
		watch(
		property: "noDataMessage", callback: {
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
		openAtLevels: any[];
		set(property: "openAtLevels", value: any[]): void;
		get(property: "openAtLevels"): any[];
		watch(
		property: "openAtLevels", callback: {
		(property?: string, oldValue?: any[], newValue?: any[]): void
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
		placeholderLabel: string;
		set(property: "placeholderLabel", value: string): void;
		get(property: "placeholderLabel"): string;
		watch(
		property: "placeholderLabel", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		query: Object;
		set(property: "query", value: Object): void;
		get(property: "query"): Object;
		watch(
		property: "query", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		queryOptions: Object;
		set(property: "queryOptions", value: Object): void;
		get(property: "queryOptions"): Object;
		watch(
		property: "queryOptions", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		rowCount: number;
		set(property: "rowCount", value: number): void;
		get(property: "rowCount"): number;
		watch(
		property: "rowCount", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowHeight: number;
		set(property: "rowHeight", value: number): void;
		get(property: "rowHeight"): number;
		watch(
		property: "rowHeight", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		rowSelector: boolean;
		set(property: "rowSelector", value: boolean): void;
		get(property: "rowSelector"): boolean;
		watch(
		property: "rowSelector", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		rowsPerPage: number;
		set(property: "rowsPerPage", value: number): void;
		get(property: "rowsPerPage"): number;
		watch(
		property: "rowsPerPage", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		scrollRedrawThreshold: number;
		set(property: "scrollRedrawThreshold", value: number): void;
		get(property: "scrollRedrawThreshold"): number;
		watch(
		property: "scrollRedrawThreshold", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		selectable: boolean;
		set(property: "selectable", value: boolean): void;
		get(property: "selectable"): boolean;
		watch(
		property: "selectable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		selectionMode: string;
		set(property: "selectionMode", value: string): void;
		get(property: "selectionMode"): string;
		watch(
		property: "selectionMode", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		singleClickEdit: boolean;
		set(property: "singleClickEdit", value: boolean): void;
		get(property: "singleClickEdit"): boolean;
		watch(
		property: "singleClickEdit", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		sortChildItems: boolean;
		set(property: "sortChildItems", value: boolean): void;
		get(property: "sortChildItems"): boolean;
		watch(
		property: "sortChildItems", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		sortFields: Object;
		set(property: "sortFields", value: Object): void;
		get(property: "sortFields"): Object;
		watch(
		property: "sortFields", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		sortInfo: number;
		set(property: "sortInfo", value: number): void;
		get(property: "sortInfo"): number;
		watch(
		property: "sortInfo", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
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
		store: Object;
		set(property: "store", value: Object): void;
		get(property: "store"): Object;
		watch(
		property: "store", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		structure: Object;
		set(property: "structure", value: Object): void;
		get(property: "structure"): Object;
		watch(
		property: "structure", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
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
		summary: string;
		set(property: "summary", value: string): void;
		get(property: "summary"): string;
		watch(
		property: "summary", callback: {
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
		treeModel: Object;
		set(property: "treeModel", value: Object): void;
		get(property: "treeModel"): Object;
		watch(
		property: "treeModel", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		updateDelay: number;
		set(property: "updateDelay", value: number): void;
		get(property: "updateDelay"): number;
		watch(
		property: "updateDelay", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		updating: boolean;
		set(property: "updating", value: boolean): void;
		get(property: "updating"): boolean;
		watch(
		property: "updating", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		addRow(): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		beginUpdate(): void;
		buildRendering(): void;
		buildViews(): void;
		canEdit(inCell: any, inRowIndex: any): any;
		canSort(): boolean;
		collapse(itemId: String): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		createLayout(): void;
		createManagers(): void;
		createScroller(): void;
		createSelection(): void;
		createView(inClass: any, idx: any): any;
		createViews(): void;
		defaultUpdate(): void;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		dispatchContentEvent(e: any): void;
		dispatchHeaderEvent(e: any): void;
		dispatchKeyEvent(e: any): void;
		doApplyCellEdit(inValue: any, inRowIndex: any, inAttrName: any): void;
		doApplyEdit(inRowIndex: any, inDataAttr: any): void;
		doCancelEdit(inRowIndex: any): void;
		doclick(e: any): void;
		docontextmenu(e: any): void;
		dodblclick(e: any): void;
		doheaderclick(e: any): void;
		doheadercontextmenu(e: any): void;
		doheaderdblclick(e: any): void;
		dokeydown(e: any): void;
		doKeyEvent(e: any): void;
		doStartEdit(inCell: any, inRowIndex: any): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		endUpdate(): void;
		expand(itemId: String): void;
		expandoFetch(rowIndex: any, open: any): void;
		filter(query: any, reRender: any): void;
		finishScrollJob(): void;
		get(inRowIndex: number, inItem: any): any;
		get(name: any): any;
		getCell(inIndex: number): any;
		getCellName(inCell: any): any;
		getCellNodeTextDirection(inColIndex: any, inRowIndex: any): any;
		getChildren(): any[];
		getColumnTogglingItems(): any;
		getDefaultOpenState(cellDef: any, item: any): any;
		getDescendants(): any[];
		getItem(idx: number): any;
		getItem(idx: any[]): any;
		getItem(idx: String): any;
		getItemIndex(item: any): any;
		getParent(): any;
		getRowNode(inRowIndex: any): any;
		getSortAsc(inSortInfo: any): any;
		getSortIndex(inSortInfo: any): number;
		getSortProps(): any;
		getState(): Object;
		hasLayout(): any;
		isFocusable(): any;
		isLeftToRight(): any;
		markupFactory(props: any, node: any, ctor: any, cellFunc: any): void;
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
		postrender(): void;
		postresize(): void;
		prerender(): void;
		refresh(keepState: boolean): void;
		removeSelectedRows(): void;
		render(): void;
		resize(changeSize: any, resultSize: any): void;
		rowHeightChanged(inRowIndex: number): void;
		scrollTo(inTop: number): void;
		scrollToRow(inRowIndex: number): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setCellNodeTextDirection(inColIndex: any, inRowIndex: any, textDir: any): void;
		setCellWidth(inIndex: any, inUnitWidth: any): void;
		setHeaderMenu(menu: dijit.Menu): void;
		setItems(items: any): void;
		setModel(treeModel: any): void;
		setQuery(query: any, queryOptions: any): void;
		setScrollTop(inTop: any): void;
		setSortIndex(inIndex: any, inAsc: any): void;
		setSortInfo(inSortInfo: any): void;
		setStore(store: any, query: any, queryOptions: any): void;
		setStructure(inStructure: Object): void;
		setStructure(inStructure: Object[]): void;
		setStructure(inStructure: Object[][]): void;
		setupHeaderMenu(): void;
		showMessage(message: any): void;
		sizeChange(): void;
		sort(): void;
		startup(): void;
		styleRowNode(rowIndex: any, rowNode: any): void;
		styleRowState(inRow: any): void;
		subscribe(t: String, method: Function): any;
		textSizeChanged(): void;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		update(): void;
		updateRow(inRowIndex: number): void;
		updateRowCount(inRowCount: number): void;
		updateRows(startIndex: number, howMany: number): void;
		updateRowStyles(inRowIndex: any): void;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onApplyCellEdit(inValue: String, inRowIndex: number, inFieldIndex: number): void;
		onApplyEdit(inRowIndex: number): void;
		onBlur(): void;
		onCancelEdit(inRowIndex: number): void;
		onCanDeselect(inRowIndex: number): any;
		onCanSelect(inRowIndex: any): any;
		onCellClick(e: Event): void;
		onCellContextMenu(e: Event): void;
		onCellDblClick(e: Event): void;
		onCellFocus(inCell: Object, inRowIndex: number): void;
		onCellMouseDown(e: Event): void;
		onCellMouseOut(e: Event): void;
		onCellMouseOver(e: Event): void;
		onClick(event: any): void;
		onClose(): boolean;
		onContentEvent(e: any): void;
		onDblClick(event: any): void;
		onDeselected(inRowIndex: number): void;
		onFetchError(err: any, req: any): void;
		onFocus(): void;
		onHeaderCellClick(e: Event): void;
		onHeaderCellContextMenu(e: Event): void;
		onHeaderCellDblClick(e: Event): void;
		onHeaderCellMouseDown(e: Event): void;
		onHeaderCellMouseOut(e: Event): void;
		onHeaderCellMouseOver(e: Event): void;
		onHeaderClick(e: Event): void;
		onHeaderContextMenu(e: Event): void;
		onHeaderDblClick(e: Event): void;
		onHeaderEvent(e: any): void;
		onHeaderMouseOut(e: Event): void;
		onHeaderMouseOver(e: Event): void;
		onHide(): void;
		onKeyDown(e: any): void;
		onKeyEvent(e: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onMouseDown(event: any): void;
		onMouseDownRow(e: Event): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOutRow(e: Event): void;
		onMouseOver(event: any): void;
		onMouseOverRow(e: Event): void;
		onMouseUp(event: any): void;
		onMoveColumn(): void;
		onResizeColumn(cellIdx: number): void;
		onRowClick(e: Event): void;
		onRowContextMenu(e: Event): void;
		onRowDblClick(e: Event): void;
		onRowMouseDown(e: Event): void;
		onRowMouseOut(e: Event): void;
		onRowMouseOver(e: Event): void;
		onSelected(inRowIndex: number): void;
		onSelectionChanged(): void;
		onSetState(): void;
		onShow(): void;
		onStartEdit(inCell: Object, inRowIndex: number): void;
		onStyleRow(row: any): void
	}

	
}

declare module 'bidi' {
		declare interface _BidiMixin {
		
	}

			
}

declare module 'cells' {
		declare interface dijit {
		CheckBox(): void,
		ComboBox(): void,
		DateTextBox(): void,
		Editor(): void
	}

	declare interface tree {
		formatAggregate(inItem: any, level: any, inRowIndexes: any): any,
		formatAtLevel(
		inRowIndexes: any, inItem: any, level: any, summaryRow: any, toggleClass: any, cellClasses: any
	): String,
		formatIndexes(inRowIndexes: any, inItem: any): any,
		getOpenState(itemId: any): any
	}

		declare class _base  {
		constructor(inProps: any): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		hidden: boolean;
		noresize: boolean;
		styles: string;
		value: Object;
		AlwaysEdit(): void;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		Bool(): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		Cell(): void;
		dispatchEvent(m: any, e: any): any;
		focus(inRowIndex: number, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: number): any;
		formatNode(inNode: any, inDatum: any, inRowIndex: number): void;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(inRowIndex: number): any;
		isFlex(): any;
		markupFactory(node: any, cellDef: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		RowIndex(): void;
		save(inRowIndex: number): void;
		Select(): void;
		setValue(inRowIndex: number, inValue: any): void
	}

	
}

declare module '_base' {
				declare class Cell  {
		constructor(): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		hidden: boolean;
		KEY_HANDLER: string;
		keyFilter: RegExp;
		LRE: string;
		noresize: boolean;
		PDF: string;
		RLE: string;
		styles: string;
		value: Object;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		dispatchEvent(m: any, e: any): any;
		doKey(e: any): void;
		focus(inRowIndex: number, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): String;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): void;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(inRowIndex: number): any;
		isFlex(): any;
		markupFactory(node: any, cellDef: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: number, inValue: any): void
	}

	declare class AlwaysEdit  {
		constructor(): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		hidden: boolean;
		keyFilter: RegExp;
		noresize: boolean;
		styles: string;
		value: Object;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		applyStaticValue(inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		dispatchEvent(m: any, e: any): any;
		doKey(e: any): void;
		focus(inRowIndex: number, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): String;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): void;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(inRowIndex: number): any;
		isFlex(): any;
		markupFactory(node: any, cell: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: number, inValue: any): void
	}

	declare class Bool  {
		constructor(): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		hidden: boolean;
		keyFilter: RegExp;
		noresize: boolean;
		styles: string;
		value: Object;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		applyStaticValue(inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		dispatchEvent(m: any, e: any): any;
		doclick(e: any): void;
		doKey(e: any): void;
		focus(inRowIndex: number, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): String;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): void;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(inRowIndex: number): any;
		isFlex(): any;
		markupFactory(node: any, cell: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: number, inValue: any): void
	}

	declare class RowIndex  {
		constructor(): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		hidden: boolean;
		keyFilter: RegExp;
		name: string;
		noresize: boolean;
		styles: string;
		value: Object;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		dispatchEvent(m: any, e: any): any;
		doKey(e: any): void;
		focus(inRowIndex: number, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): String;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): void;
		get(inRowIndex: any): number;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(inRowIndex: number): any;
		isFlex(): any;
		markupFactory(node: any, cellDef: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		postscript(): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: number, inValue: any): void
	}

	declare class Select  {
		constructor(inCell: any): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		hidden: boolean;
		keyFilter: RegExp;
		noresize: boolean;
		options: any[];
		returnIndex: number;
		styles: string;
		value: Object;
		values: any[];
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		dispatchEvent(m: any, e: any): any;
		doKey(e: any): void;
		focus(inRowIndex: number, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): any;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): void;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(inRowIndex: any): any;
		isFlex(): any;
		markupFactory(node: any, cell: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: number, inValue: any): void
	}

	
}

declare module 'dijit' {
				declare class _Widget extends undefined$_base {
		constructor(inCell: any): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		getWidgetPropsCallOrig: Object;
		hidden: boolean;
		noresize: boolean;
		styles: string;
		value: Object;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		attachWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		createWidget(inNode: any, inDatum: any, inRowIndex: any): any;
		dispatchEvent(m: any, e: any): any;
		focus(inRowIndex: any, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): String;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): any;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(inRowIndex: any): any;
		getWidgetProps(inDatum: any): any;
		isFlex(): any;
		markupFactory(node: any, cell: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: any, inValue: any): void;
		sizeWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		widgetClass(): void
	}

	declare class CheckBox extends undefined$_base {
		constructor(inCell: any): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		hidden: boolean;
		noresize: boolean;
		styles: string;
		value: Object;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		attachWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		createWidget(inNode: any, inDatum: any, inRowIndex: any): any;
		dispatchEvent(m: any, e: any): any;
		focus(inRowIndex: any, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): String;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): any;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(): any;
		getWidgetProps(inDatum: any): Object;
		isFlex(): any;
		markupFactory(node: any, cell: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: any, inValue: any): void;
		sizeWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		widgetClass(): void
	}

	declare class Editor extends undefined$_base {
		constructor(inCell: any): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		hidden: boolean;
		noresize: boolean;
		styles: string;
		value: Object;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		attachWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		createWidget(inNode: any, inDatum: any, inRowIndex: any): any;
		dispatchEvent(m: any, e: any): any;
		focus(inRowIndex: any, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): String;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): void;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(inRowIndex: any): any;
		getWidgetProps(inDatum: any): Object;
		isFlex(): any;
		markupFactory(node: any, cell: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		populateEditor(): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: any, inValue: any): void;
		sizeWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		widgetClass(): void
	}

	declare class DateTextBox extends undefined$_base {
		constructor(inCell: any): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		hidden: boolean;
		noresize: boolean;
		styles: string;
		value: Object;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		attachWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		createWidget(inNode: any, inDatum: any, inRowIndex: any): any;
		dispatchEvent(m: any, e: any): any;
		focus(inRowIndex: any, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): String;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): any;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(inRowIndex: any): any;
		getWidgetProps(inDatum: any): any;
		isFlex(): any;
		markupFactory(node: any, cell: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: any, inValue: any): void;
		sizeWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		widgetClass(): void
	}

	declare class ComboBox extends undefined$_base {
		constructor(inCell: any): this;
		alwaysEditing: boolean;
		classes: string;
		defaultValue: string;
		draggable: boolean;
		editable: boolean;
		formatter: Object;
		getWidgetPropsCallOrig: Object;
		hidden: boolean;
		noresize: boolean;
		styles: string;
		value: Object;
		apply(inRowIndex: number): void;
		applyEdit(inValue: any, inRowIndex: any): void;
		attachWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		cancel(inRowIndex: number): void;
		cancelEdit(inRowIndex: any): void;
		cancelFormatNode(): void;
		canResize(): any;
		createWidget(inNode: any, inDatum: any, inRowIndex: any): any;
		dispatchEvent(m: any, e: any): any;
		focus(inRowIndex: any, inNode: any): void;
		format(inRowIndex: number, inItem: any): any;
		formatEditing(inDatum: any, inRowIndex: any): String;
		formatNode(inNode: any, inDatum: any, inRowIndex: any): any;
		getEditNode(inRowIndex: any): number;
		getHeaderNode(): any;
		getNode(inRowIndex: number): any;
		getValue(): any;
		getWidgetProps(inDatum: any): any;
		isFlex(): any;
		markupFactory(node: any, cell: any): void;
		needFormatNode(inDatum: any, inRowIndex: any): void;
		registerOnBlur(inNode: any, inRowIndex: any): void;
		restore(inRowIndex: number): void;
		save(inRowIndex: number): void;
		setValue(inRowIndex: any, inValue: any): void;
		sizeWidget(inNode: any, inDatum: any, inRowIndex: any): void;
		widgetClass(): void
	}

	
}

declare module 'enhanced' {
				declare class _Plugin  {
		constructor(inGrid: dojox.grid.EnhancedGrid, option: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		init(): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class _Events  {
		constructor(inGrid: any): this;
		cellActiveClass: string;
		headerCellActiveClass: string;
		rowActiveClass: string;
		dokeyup(e: Event): void;
		domousedown(e: any): void;
		domouseup(e: any): void;
		onCellClick(e: any): void;
		onCellDblClick(e: any): void;
		onCellMouseDown(e: any): void;
		onCellMouseUp(e: Event): void;
		onHeaderCellClick(e: any): void;
		onHeaderCellMouseDown(e: any): void;
		onHeaderCellMouseOut(e: any): void;
		onHeaderCellMouseUp(e: any): void;
		onKeyDown(e: any): void;
		onMouseUp(e: Event): void;
		onMouseUpRow(e: any): void;
		onRowClick(e: any): void;
		onRowContextMenu(e: any): void;
		onRowMouseUp(e: any): void;
		onRowSelectorMouseDown(e: any): void;
		onRowSelectorMouseUp(e: any): void;
		onSelectedRegionContextMenu(e: Event): void
	}

	declare class _PluginManager  {
		constructor(inGrid: any): this;
		registry: string;
		destroy(): void;
		forEach(func: any, args: any): void;
		getPlugin(name: String): any;
		getPluginClazz(clazz: Function): any;
		getPluginClazz(clazz: String): any;
		isFixedCell(cell: Object): any;
		loadPlugin(name: String): any;
		pluginExisted(name: String): any;
		postInit(): void;
		preInit(): void;
		registerPlugin(clazz: String, props: Object): void;
		startup(): void
	}

	declare class _FocusManager extends undefined$_FocusManager {
		constructor(grid: any): this;
		focusClass: string;
		focusView: Object;
		tabbingOut: boolean;
		addArea(area: any): void;
		blurHeader(): void;
		colSizeAdjust(e: any, colIdx: any, delta: any): void;
		contentMouseEvent(evt: any): void;
		currentArea(areaName: String, toBlurOld: any): any;
		destroy(): void;
		doBlur(e: any): void;
		doColHeaderBlur(e: any): void;
		doColHeaderFocus(e: any): void;
		doContextMenu(e: any): void;
		doFocus(e: any): void;
		doLastNodeBlur(e: any): void;
		doLastNodeFocus(e: any): void;
		findAndFocusGridCell(): void;
		focusArea(areaId?: number, evt?: any): boolean;
		focusArea(areaId: String, evt: any): void;
		focusArea(areaId: Object, evt: any): void;
		focusGrid(inSkipFocusCell: any): void;
		focusGridView(): void;
		focusHeader(evt?: any, step?: any): boolean;
		getArea(areaName: any): any;
		getHeaderIndex(): any;
		headerMouseEvent(evt: any): void;
		ignoreArea(name: any): void;
		initFocusView(): void;
		isFirstFocusCell(): boolean;
		isFocusCell(inCell: Object, inRowIndex: number): any;
		isLastFocusCell(): boolean;
		isNavHeader(): any;
		isNoFocusCell(): boolean;
		move(inRowDelta: number, inColDelta: number): void;
		next(): void;
		nextKey(e: any): void;
		placeArea(name: any, pos: any, otherAreaName: any): void;
		previous(): void;
		previousKey(e: any): void;
		removeArea(areaName: any): void;
		scrollIntoView(): any;
		setFocusCell(inCell: Object, inRowIndex: number): void;
		setFocusIndex(inRowIndex: number, inCellIndex: number): void;
		styleRow(inRow: any): void;
		tab(step: any, evt: any): void;
		tabOut(inFocusNode: any): void
	}

	
}

declare module 'plugins' {
		declare interface _StoreLayer {
		wrap(
		store: any, funcName: any, layer: dojox.grid.enhanced.plugins._StoreLayer._StoreLayer, layerFuncName: any
	): any
	}

		declare class _SelectionPreserver extends undefined$_SelectionPreserver {
		constructor(selection: any): this;
		destroy(): void;
		reset(): void;
		onSelectedById(id: any, rowIndex: any, value: any): void
	}

	declare class _RowMapLayer  {
		constructor(grid: any): this;
		layerFuncName: string;
		tags: any[];
		clearMapping(): void;
		enabled(toEnable: boolean): boolean;
		initialize(store: any): void;
		invalidate(): void;
		name(): any;
		originFetch(): any;
		setMapping(mapping: Object): void;
		uninitialize(): void
	}

	declare class AutoScroll extends undefined$_Plugin {
		constructor(grid: any, args: any): this;
		autoScrollInterval: number;
		autoScrollMargin: number;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		init(): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class Cookie extends undefined$_Plugin {
		constructor(grid: any, args: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		addCookieHandler(args: Object): void;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		getCookieEnabled(cookieName: String): any;
		init(): void;
		removeCookie(): void;
		setCookieEnabled(cookieName: String, enabled: boolean): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class CellMerge extends undefined$_Plugin {
		constructor(grid: any, args: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		getMergedCells(): any;
		getMergedCellsByRow(rowIndex: any): any;
		init(): void;
		mergeCells(
		rowTester: any, startColumnIndex: number, endColumnIndex: number, majorColumnIndex: number
	): any;
		subscribe(topic: any, method: any): any;
		unmergeCells(mergeHandler: Object): void;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class Exporter extends undefined$_Plugin {
		constructor(grid: dojox.grid.EnhancedGrid, args: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		writerNames: string;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		exportGrid(type: String, args: Object, onExported: any): void;
		exportSelected(type: String, writerArgs: Object, onExported: any): any;
		init(): void;
		registerWriter(fileType: String, writerClsName: String): void;
		setExportFormatter(formatter: any): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class DnD extends undefined$_Plugin {
		constructor(grid: any, args: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		connect(obj: any, event: any, method: any): any;
		copyOnly(isCopyOnly: any): boolean;
		destroy(): void;
		disconnect(handle: any): void;
		init(): void;
		setupConfig(config: Object): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onDraggingOut(sourcePlugin: any): void;
		onDraggingOver(sourcePlugin: any): void;
		onDragIn(sourcePlugin: any, isCopy: any): void;
		onDragOut(isMove: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class Filter extends undefined$_Plugin {
		constructor(grid: any, args: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		init(): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class Dialog extends dijit$Dialog {
		constructor(params?: Object, srcNodeRef?: HTMLElement): this;
		active: boolean;
		set(property: "active", value: boolean): void;
		get(property: "active"): boolean;
		watch(
		property: "active", callback: {
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
		autofocus: boolean;
		set(property: "autofocus", value: boolean): void;
		get(property: "autofocus"): boolean;
		watch(
		property: "autofocus", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		closable: boolean;
		set(property: "closable", value: boolean): void;
		get(property: "closable"): boolean;
		watch(
		property: "closable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		content: string;
		set(property: "content", value: string): void;
		get(property: "content"): string;
		watch(
		property: "content", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		cssStateNodes: Object;
		set(property: "cssStateNodes", value: Object): void;
		get(property: "cssStateNodes"): Object;
		watch(
		property: "cssStateNodes", callback: {
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
		doLayout: boolean;
		set(property: "doLayout", value: boolean): void;
		get(property: "doLayout"): boolean;
		watch(
		property: "doLayout", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		draggable: boolean;
		set(property: "draggable", value: boolean): void;
		get(property: "draggable"): boolean;
		watch(
		property: "draggable", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		duration: number;
		set(property: "duration", value: number): void;
		get(property: "duration"): number;
		watch(
		property: "duration", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		errorMessage: string;
		set(property: "errorMessage", value: string): void;
		get(property: "errorMessage"): string;
		watch(
		property: "errorMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		extractContent: boolean;
		set(property: "extractContent", value: boolean): void;
		get(property: "extractContent"): boolean;
		watch(
		property: "extractContent", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		hovering: boolean;
		set(property: "hovering", value: boolean): void;
		get(property: "hovering"): boolean;
		watch(
		property: "hovering", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		href: string;
		set(property: "href", value: string): void;
		get(property: "href"): string;
		watch(
		property: "href", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
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
		ioArgs: Object;
		set(property: "ioArgs", value: Object): void;
		get(property: "ioArgs"): Object;
		watch(
		property: "ioArgs", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		isLayoutContainer: boolean;
		set(property: "isLayoutContainer", value: boolean): void;
		get(property: "isLayoutContainer"): boolean;
		watch(
		property: "isLayoutContainer", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		isLoaded: boolean;
		set(property: "isLoaded", value: boolean): void;
		get(property: "isLoaded"): boolean;
		watch(
		property: "isLoaded", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		loadingMessage: string;
		set(property: "loadingMessage", value: string): void;
		get(property: "loadingMessage"): string;
		watch(
		property: "loadingMessage", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		maxRatio: number;
		set(property: "maxRatio", value: number): void;
		get(property: "maxRatio"): number;
		watch(
		property: "maxRatio", callback: {
		(property?: string, oldValue?: number, newValue?: number): void
	}
	): {
		unwatch(): void
	};
		onLoadDeferred: Object;
		set(property: "onLoadDeferred", value: Object): void;
		get(property: "onLoadDeferred"): Object;
		watch(
		property: "onLoadDeferred", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		open: boolean;
		set(property: "open", value: boolean): void;
		get(property: "open"): boolean;
		watch(
		property: "open", callback: {
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
		parseOnLoad: boolean;
		set(property: "parseOnLoad", value: boolean): void;
		get(property: "parseOnLoad"): boolean;
		watch(
		property: "parseOnLoad", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		parserScope: string;
		set(property: "parserScope", value: string): void;
		get(property: "parserScope"): string;
		watch(
		property: "parserScope", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		preload: boolean;
		set(property: "preload", value: boolean): void;
		get(property: "preload"): boolean;
		watch(
		property: "preload", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		preventCache: boolean;
		set(property: "preventCache", value: boolean): void;
		get(property: "preventCache"): boolean;
		watch(
		property: "preventCache", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		refNode: Object;
		set(property: "refNode", value: Object): void;
		get(property: "refNode"): Object;
		watch(
		property: "refNode", callback: {
		(property?: string, oldValue?: Object, newValue?: Object): void
	}
	): {
		unwatch(): void
	};
		refocus: boolean;
		set(property: "refocus", value: boolean): void;
		get(property: "refocus"): boolean;
		watch(
		property: "refocus", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
	}
	): {
		unwatch(): void
	};
		refreshOnShow: boolean;
		set(property: "refreshOnShow", value: boolean): void;
		get(property: "refreshOnShow"): boolean;
		watch(
		property: "refreshOnShow", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		state: string;
		set(property: "state", value: string): void;
		get(property: "state"): string;
		watch(
		property: "state", callback: {
		(property?: string, oldValue?: string, newValue?: string): void
	}
	): {
		unwatch(): void
	};
		stopParser: boolean;
		set(property: "stopParser", value: boolean): void;
		get(property: "stopParser"): boolean;
		watch(
		property: "stopParser", callback: {
		(property?: string, oldValue?: boolean, newValue?: boolean): void
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
		addChild(widget: dijit._WidgetBase, insertIndex: number): void;
		attr(name: String, value: Object): any;
		attr(name: Object, value: Object): any;
		buildRendering(): void;
		cancel(): void;
		connect(obj: Object, event: String, method: String): any;
		connect(obj: any, event: String, method: String): any;
		connect(obj: Object, event: Function, method: String): any;
		connect(obj: any, event: Function, method: String): any;
		connect(obj: Object, event: String, method: Function): any;
		connect(obj: any, event: String, method: Function): any;
		connect(obj: Object, event: Function, method: Function): any;
		connect(obj: any, event: Function, method: Function): any;
		connectChildren(inStartup: boolean): void;
		create(params: any, srcNodeRef: any): void;
		defer(fcn: Function, delay: number): Object;
		destroy(): void;
		destroyDescendants(preserveDom: boolean): void;
		destroyRecursive(preserveDom: boolean): void;
		destroyRendering(preserveDom?: boolean): void;
		disconnect(handle: any): void;
		disconnectChildren(): void;
		emit(type: String, eventObj: Object, callbackArgs: any[]): any;
		execute(formContents: Object): void;
		focus(): void;
		get(name: any): any;
		getChildren(): any[];
		getDescendants(): any[];
		getIndexOfChild(child: dijit._WidgetBase): any;
		getParent(): any;
		getValues(): any;
		hasChildren(): boolean;
		hide(): any;
		ioMethod(args: Object): any;
		isFocusable(): any;
		isLeftToRight(): any;
		isValid: {
		(): boolean
	};
		markupFactory(params: any, node: any, ctor: any): any;
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
		refresh(): any;
		removeChild(widget: dijit._WidgetBase): void;
		removeChild(widget: number): void;
		reset(): void;
		resize(changeSize: any, resultSize: any): void;
		set(name: any, value: any): any;
		setAttribute(attr: String, value: any): void;
		setContent(data: String): void;
		setContent(data: HTMLElement): void;
		setContent(data: NodeList): void;
		setHref(href: String): any;
		setHref(href: URL): any;
		setValues(val: any): any;
		show(): any;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toString(): string;
		uninitialize(): boolean;
		unsubscribe(handle: Object): void;
		validate(): any;
		watch(
		property: string, callback: {
		(property?: string, oldValue?: any, newValue?: any): void
	}
	): {
		unwatch(): void
	};
		getCachedTemplate(): any;
		onBlur(): void;
		onCancel(): void;
		onClick(event: any): void;
		onClose(): boolean;
		onContentError(error: Error): void;
		onDblClick(event: any): void;
		onDownloadEnd(): void;
		onDownloadError(error: Error): any;
		onDownloadStart(): any;
		onExecute(): void;
		onFocus(): void;
		onHide(): void;
		onKeyDown(event: any): void;
		onKeyPress(event: any): void;
		onKeyUp(event: any): void;
		onLoad(data: any): void;
		onMouseDown(event: any): void;
		onMouseEnter(event: any): void;
		onMouseLeave(event: any): void;
		onMouseMove(event: any): void;
		onMouseOut(event: any): void;
		onMouseOver(event: any): void;
		onMouseUp(event: any): void;
		onShow(): void;
		onUnload(): void;
		onValidStateChange(isValid: boolean): void
	}

	declare class IndirectSelection extends undefined$_Plugin {
		constructor(): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		addRowSelectCell(option: any): void;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		init(): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class GridSource extends undefined$Source {
		constructor(node: HTMLElement, params?: Object): this;
		accept: any[];
		allowNested: boolean;
		autoSync: boolean;
		copyOnly: boolean;
		current: HTMLElement;
		delay: number;
		generateText: boolean;
		horizontal: boolean;
		insertNodesForGrid: boolean;
		isSource: boolean;
		map: Object;
		selection: Object;
		selfAccept: boolean;
		selfCopy: boolean;
		singular: boolean;
		skipForm: boolean;
		withHandles: boolean;
		checkAcceptance(source: any, nodes: any): any;
		clearItems(): void;
		copyState(keyPressed: boolean, self: boolean): any;
		creator(): void;
		deleteSelectedNodes(): Function;
		delItem(key: String): void;
		destroy(): void;
		emit(type: any, event: any): any;
		forInItems(f: Function, o: Object): String;
		forInSelectedItems(f: Function, o: Object): void;
		getAllNodes(): any;
		getCellContent(grid: any, leftTopCell: any, rightBottomCell: any): void;
		getColumnContent(grid: any, colIndexes: any): void;
		getItem(key: String): any;
		getRowContent(grid: any, rowIndexes: any): void;
		getSelectedNodes(): any;
		insertNodes(data: Object, before: boolean, anchor: HTMLElement): Function;
		insertNodes(
		addSelected: boolean, data: any[], before: boolean, anchor: HTMLElement
	): Function;
		markupFactory(params: any, node: any): any;
		on(type: any, listener: any): any;
		selectAll(): any;
		selectNone(): any;
		setItem(key: String, data: any): void;
		startup(): void;
		sync(): Function;
		onDndCancel(): void;
		onDndDrop(source: Object, nodes: any[], copy: boolean, target: Object): void;
		onDndSourceOver(source: Object): void;
		onDndStart(source: Object, nodes: any[], copy: boolean): void;
		onDraggingOut(): void;
		onDraggingOver(): void;
		onDrop(source: Object, nodes: any[], copy: boolean): void;
		onDropExternal(source: any, nodes: any, copy: any): void;
		onDropGridCells(grid: any, leftTopCell: any, rightBottomCell: any): void;
		onDropGridColumns(grid: any, colIndexes: any): void;
		onDropGridRows(grid: any, rowIndexes: any): void;
		onDropInternal(nodes: any[], copy: boolean): void;
		onMouseDown(e: Event): void;
		onMouseMove(e: Event): void;
		onMouseOut(e: Event): void;
		onMouseOver(e: Event): void;
		onMouseUp(e: Event): void;
		onOutEvent(): void;
		onOverEvent(): void;
		onSelectStart(e: Event): void
	}

	declare class Menu extends undefined$_Plugin {
		constructor(): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		types: Object;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		init(): void;
		showMenu(e: Event): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class Pagination extends undefined$_Plugin {
		constructor(inGrid: dojox.grid.EnhancedGrid, option: any): this;
		defaultPage: number;
		defaultPageSize: number;
		description: boolean;
		gotoButton: boolean;
		grid: Object;
		maxPageStep: number;
		name: string;
		option: Object;
		pageSizes: any[];
		pageStepper: boolean;
		position: Object;
		privates: Object;
		sizeSwitch: boolean;
		changePageSize(size: any): void;
		connect(obj: any, event: any, method: any): any;
		currentPage(page: number): any;
		currentPageSize(size: number): any;
		currentPageSize(size: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		firstPage(): void;
		getTotalPageNum(): any;
		getTotalRowCount(): any;
		gotoFirstPage(): void;
		gotoLastPage(): void;
		gotoPage(page: any): void;
		init(): void;
		lastPage(): void;
		nextPage(): void;
		prevPage(): void;
		removeSelectedRows(): void;
		scrollToRow(inRowIndex: number): any;
		showGotoPageButton(flag: boolean): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class NestedSorting extends undefined$_Plugin {
		constructor(): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		clearSort(): void;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		getSortProps(): any;
		init(): void;
		initCookieHandler(): void;
		isAsc(cellIndex: any): boolean;
		isDesc(cellIndex: any): boolean;
		removeSortData(cellIdx: any): void;
		setSortData(cellIdx: any, attr: any, value: any): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class Printer extends undefined$_Plugin {
		constructor(grid: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		exportSelectedToHTML(args: Object, onExported: any): void;
		exportToHTML(args: Object, onExported: any): void;
		init(): void;
		normalizeRowHeight(doc: any): void;
		printGrid(args: Object): void;
		printSelected(args: Object): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class Rearrange extends undefined$_Plugin {
		constructor(grid: any, args: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		changeCells(sourceGrid: any, cellsToMove: any, target: any): void;
		clearCells(cellsToClear: any): void;
		connect(obj: any, event: any, method: any): any;
		copyCells(cellsToMove: any, target: any): void;
		destroy(): void;
		disconnect(handle: any): void;
		init(): void;
		insertRows(sourceGrid: any, rowsToMove: any, targetPos: any): void;
		moveCells(cellsToMove: any, target: any): void;
		moveColumns(colsToMove: number[], targetPos: number): void;
		moveRows(rowsToMove: number[], targetPos: number): void;
		removeRows(rowsToRemove: any): void;
		setArgs(args: any): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class Search extends undefined$_Plugin {
		constructor(grid: any, args: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		connect(obj: any, event: any, method: any): any;
		destroy(): void;
		disconnect(handle: any): void;
		init(): void;
		searchRow(
		searchArgs: Object, onSearched: {
		(index: number, item: Object): any
	}
	): void;
		searchRow(
		searchArgs: RegExp, onSearched: {
		(index: number, item: Object): any
	}
	): void;
		searchRow(
		searchArgs: String, onSearched: {
		(index: number, item: Object): any
	}
	): void;
		subscribe(topic: any, method: any): any;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(store: any): void;
		onStartUp(): void
	}

	declare class Selector extends undefined$_Plugin {
		constructor(grid: any, args: any): this;
		grid: Object;
		name: string;
		option: Object;
		privates: Object;
		clear(type: String): void;
		connect(obj: any, event: any, method: any): any;
		deselect(type: any, rowIndex: any, colIndex: any): void;
		destroy(): void;
		disconnect(handle: any): void;
		getLastSelectedRange(type: any): any;
		getSelected(type: String, includeExceptions: boolean): any;
		getSelectedCount(type: String, includeExceptions: boolean): any;
		getSelectedType(): any;
		init(): void;
		isSelected(type: String, rowIndex: number, colIndex: number): any;
		isSelecting(type: String): any;
		select(type: String, rowIndex: number, colIndex: number): void;
		selectEnabled(toEnable: boolean): any;
		selectRange(type: String, start: number, end: number, toSelect: any): void;
		selectRange(type: String, start: Object, end: number, toSelect: any): void;
		selectRange(type: String, start: number, end: Object, toSelect: any): void;
		selectRange(type: String, start: Object, end: Object, toSelect: any): void;
		setupConfig(config: Object): void;
		subscribe(topic: any, method: any): any;
		toggleSelect(type: any, rowIndex: any, colIndex: any): void;
		unsubscribe(handle: any): void;
		onPostInit(): void;
		onPreInit(): void;
		onSetStore(): void;
		onStartUp(): void
	}

	
}

declare module 'exporter' {
				declare class _ExportWriter  {
		constructor(writerArgs?: Object): this;
		argObj: Object;
		afterContent(): any;
		afterContentRow(argObj: Object): any;
		afterHeader(): any;
		afterSubrow(argObj: Object): any;
		afterView(argObj: Object): any;
		beforeContent(items: any[]): any;
		beforeContentRow(argObj: Object): any;
		beforeHeader(grid: dojox.grid.EnhancedGrid): any;
		beforeSubrow(argObj: Object): any;
		beforeView(argObj: Object): any;
		handleCell(argObj: Object): any;
		toString(): any
	}

	declare class CSVWriter extends undefined$_ExportWriter {
		constructor(writerArgs?: Object): this;
		argObj: Object;
		afterContent(): any;
		afterContentRow(argObj: Object): any;
		afterHeader(): any;
		afterSubrow(argObj: Object): any;
		afterView(argObj: Object): any;
		beforeContent(items: any[]): any;
		beforeContentRow(arg_obj: Object): boolean;
		beforeHeader(grid: dojox.grid.EnhancedGrid): any;
		beforeSubrow(argObj: Object): any;
		beforeView(argObj: Object): any;
		handleCell(arg_obj: Object): void;
		toString(): number
	}

	declare class TableWriter extends undefined$_ExportWriter {
		constructor(writerArgs?: Object): this;
		argObj: Object;
		afterContent(): void;
		afterContentRow(argObj: Object): any;
		afterHeader(): any;
		afterSubrow(arg_obj: Object): void;
		afterView(arg_obj: Object): void;
		beforeContent(items: any[]): any;
		beforeContentRow(argObj: Object): any;
		beforeHeader(grid: dojox.grid.EnhancedGrid): any;
		beforeSubrow(arg_obj: Object): boolean;
		beforeView(arg_obj: Object): boolean;
		handleCell(arg_obj: Object): void;
		toString(): any
	}

	
}

declare module 'filter' {
		declare interface _ConditionExpr {
		
	}

	declare interface _DataExprs {
		BooleanExpr(): void,
		DateExpr(): void,
		NumberExpr(): void,
		StringExpr(): void,
		TimeExpr(): void
	}

	declare interface _FilterExpr {
		BooleanExpr(): void,
		Contains(): void,
		DateExpr(): void,
		EndsWith(): void,
		EqualTo(): void,
		IsEmpty(): void,
		LargerThan(): void,
		LargerThanOrEqualTo(): void,
		LessThan(): void,
		LessThanOrEqualTo(): void,
		LogicALL(): void,
		LogicAND(): void,
		LogicANY(): void,
		LogicNOT(): void,
		LogicOR(): void,
		LogicXOR(): void,
		Matches(): void,
		NumberExpr(): void,
		StartsWith(): void,
		StringExpr(): void,
		TimeExpr(): void
	}

	declare interface FilterLayer {
		ClientSideFilterLayer(): void,
		ServerSideFilterLayer(): void,
		wrap(
		store: any, funcName: any, layer: dojox.grid.enhanced.plugins._StoreLayer._StoreLayer, layerFuncName: any
	): any
	}

		declare class FilterBuilder  {
		constructor(): this;
		defaultArgs: Object;
		supportedOps: Object;
		supportedTypes: Object;
		buildExpression(def: any): any
	}

	declare class FilterDefDialog  {
		constructor(args: any): this;
		curColIdx: number;
		plugin: Object;
		addCriteriaBoxes(cnt: number): void;
		canFilter(): boolean;
		clearFilter(noRefresh: any): void;
		closeDialog(): void;
		destroy(): void;
		getColumnLabelByValue(v: any): any;
		getColumnType(colIndex: number): any;
		getConditionLabelByValue(type: any, c: any): any;
		getCriteria(idx: number): any;
		getExprForColumn(value: any, colIdx: any, type: any, condition: any): Object;
		getExprForCriteria(rule: any): any;
		getFilter(): Object;
		removeCriteriaBoxes(cnt: number, isIdx: boolean): void;
		removeCriteriaBoxes(cnt: Object, isIdx: boolean): void;
		removeCriteriaBoxes(cnt: number[], isIdx: boolean): void;
		setFilter(rules: any, ruleRelation: any): void;
		showDialog(colIndex: number): void;
		onCancel(e: any): void;
		onClearFilter(e: any): void;
		onFilter(e: any): void;
		onMoveColumn(
		sourceViewIndex: any, destViewIndex: any, cellIndex: any, targetIndex: any, before: any
	): void;
		onRendered(cbox: any): void
	}

	declare class FilterStatusTip  {
		constructor(args: any): this;
		closeDialog(): void;
		destroy(): void;
		showDialog(pos_x: number, pos_y: number, columnIdx: any): void
	}

	declare class ClearFilterConfirm extends dijit$_Widget, dijit$_TemplatedMixin {
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
		plugin: Object;
		set(property: "plugin", value: Object): void;
		get(property: "plugin"): Object;
		watch(
		property: "plugin", callback: {
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

	declare class FilterBar extends dijit$_Widget, dijit$_TemplatedMixin {
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
		plugin: Object;
		set(property: "plugin", value: Object): void;
		get(property: "plugin"): Object;
		watch(
		property: "plugin", callback: {
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
		getColumnIdx(coordX: number): number;
		getDescendants(): any[];
		getParent(): any;
		isFilterBarShown(): boolean;
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
		showFilterBar(toShow: any, useAnim: any, animArgs: any): void;
		startup(): void;
		subscribe(t: String, method: Function): any;
		toggleClearFilterBtn(toHide: any): void;
		toggleFilterBar(useAnim: any, animArgs: any): void;
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

declare module '_ConditionExpr' {
				declare class _DataExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): String
	}

	declare class _BiOpExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class _OperatorExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class _ConditionExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): any
	}

	declare class _UniOpExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	
}

declare module '_DataExprs' {
				declare class _ConditionExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): any
	}

	declare class _BiOpExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class _OperatorExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class _UniOpExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class _DataExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): String
	}

	declare class BooleanExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): String
	}

	declare class TimeExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): any
	}

	declare class NumberExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): String
	}

	declare class DateExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): any
	}

	declare class StringExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): String
	}

	
}

declare module '_FilterExpr' {
				declare class _BiOpExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class _DataExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): String
	}

	declare class _OperatorExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class _ConditionExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): any
	}

	declare class _UniOpExpr  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class Contains  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class DateExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): any
	}

	declare class EndsWith  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class IsEmpty  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class BooleanExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): String
	}

	declare class LargerThan  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class EqualTo  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class LargerThanOrEqualTo  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class LessThan  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class LogicANY  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class LogicAND  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class LessThanOrEqualTo  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class LogicNOT  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class LogicALL  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class LogicOR  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class Matches  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class LogicXOR  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class StringExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): String
	}

	declare class TimeExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): any
	}

	declare class StartsWith  {
		constructor(): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colArg: Object): Object
	}): any;
		getName(): any;
		toObject(): Object
	}

	declare class NumberExpr  {
		constructor(dataValue?: any, isColumn?: boolean, convertArgs?: Object): this;
		applyRow(datarow: Object, getter: {
		(row: Object, colIdx: number): Object
	}): Object;
		getName(): any;
		getValue(): any;
		toObject(): String
	}

	
}

declare module 'FilterLayer' {
				declare class _ServerSideLayer  {
		constructor(args: any): this;
		layerFuncName: string;
		tags: any[];
		command(cmdName: String, cmdContent: any): any;
		enabled(toEnable: boolean): any;
		initialize(store: any): void;
		invalidate(): void;
		name(): any;
		originFetch(): any;
		uninitialize(store: any): void;
		useCommands(toUse: boolean): boolean;
		onCommandError(error: Error): void;
		onCommandLoad(response: String, userRequest: dojo.data.api.Request): void
	}

	declare class _StoreLayer  {
		constructor(): this;
		layerFuncName: string;
		tags: any[];
		enabled(toEnable: boolean): boolean;
		initialize(store: any): void;
		invalidate(): void;
		name(): any;
		originFetch(): any;
		uninitialize(store: any): void
	}

	declare class ServerSideFilterLayer  {
		constructor(args: any): this;
		layerFuncName: string;
		tags: any[];
		command(cmdName: String, cmdContent: any): any;
		enabled(toEnable: boolean): any;
		filterDef(filter: dojox.grid.enhanced.plugins.filter._ConditionExpr): any;
		filterDef(filter: any): any;
		initialize(store: any): void;
		invalidate(): void;
		name(): any;
		originFetch(): any;
		uninitialize(store: any): void;
		useCommands(toUse: boolean): boolean;
		onCommandError(error: Error): void;
		onCommandLoad(responce: String, userRequest: Object): void;
		onFilterDefined(filter: any): void;
		onFiltered(filteredSize: number, totalSize: number): void
	}

	declare class ClientSideFilterLayer  {
		constructor(args: any): this;
		layerFuncName: string;
		tags: any[];
		enabled(toEnable: boolean): boolean;
		fetchAllOnFirstFilter(toFetchAll: boolean): any;
		filterDef(filter: dojox.grid.enhanced.plugins.filter._ConditionExpr): any;
		filterDef(filter: any): any;
		initialize(store: any): void;
		name(): any;
		originFetch(): any;
		setGetter(getter: Function): void;
		uninitialize(store: any): void;
		onFilterDefined(filter: any): void;
		onFiltered(filteredSize: number, totalSize: number): void;
		onRowMappingChange(mapping: any): void
	}

	
}

declare module '_StoreLayer' {
				declare class _StoreLayer  {
		constructor(): this;
		layerFuncName: string;
		tags: any[];
		enabled(toEnable: boolean): boolean;
		initialize(store: any): void;
		invalidate(): void;
		name(): any;
		originFetch(): any;
		uninitialize(store: any): void
	}

	declare class _ServerSideLayer  {
		constructor(args: any): this;
		layerFuncName: string;
		tags: any[];
		command(cmdName: String, cmdContent: any): any;
		enabled(toEnable: boolean): any;
		initialize(store: any): void;
		invalidate(): void;
		name(): any;
		originFetch(): any;
		uninitialize(store: any): void;
		useCommands(toUse: boolean): boolean;
		onCommandError(error: Error): void;
		onCommandLoad(response: String, userRequest: dojo.data.api.Request): void
	}

	
}

declare module 'dojox/grid/_Builder' {
					declare module.exports: _Builder


}

declare module 'dojox/grid/util' {
					declare module.exports: util


}

declare module 'dojox/grid/_EditManager' {
					declare module.exports: _EditManager


}

declare module 'dojox/grid/_RowManager' {
					declare module.exports: _RowManager


}

declare module 'dojox/grid/_Layout' {
					declare module.exports: _Layout


}

declare module 'dojox/grid/_Events' {
					declare module.exports: _Events


}

declare module 'dojox/grid/_FocusManager' {
					declare module.exports: _FocusManager


}

declare module 'dojox/grid/_SelectionPreserver' {
					declare module.exports: _SelectionPreserver


}

declare module 'dojox/grid/_Scroller' {
					declare module.exports: _Scroller


}

declare module 'dojox/grid/_ViewManager' {
					declare module.exports: _ViewManager


}

declare module 'dojox/grid/_TreeView' {
					declare module.exports: _TreeView


}

declare module 'dojox/grid/_View' {
					declare module.exports: _View


}

declare module 'dojox/grid/_Selector' {
					declare module.exports: _Selector


}

declare module 'dojox/grid/_RowSelector' {
					declare module.exports: _RowSelector


}

declare module 'dojox/grid/DataSelection' {
					declare module.exports: DataSelection


}

declare module 'dojox/grid/_Grid' {
					declare module.exports: _Grid


}

declare module 'dojox/grid/DataGrid' {
					declare module.exports: DataGrid


}

declare module 'dojox/grid/LazyTreeGridStoreModel' {
					declare module.exports: LazyTreeGridStoreModel


}

declare module 'dojox/grid/TreeSelection' {
					declare module.exports: TreeSelection


}

declare module 'dojox/grid/Selection' {
					declare module.exports: Selection


}

declare module 'dojox/grid/LazyTreeGrid' {
					declare module.exports: LazyTreeGrid


}

declare module 'dojox/grid/EnhancedGrid' {
					declare module.exports: EnhancedGrid


}

declare module 'dojox/grid/TreeGrid' {
					declare module.exports: TreeGrid


}

declare module 'dojox/grid/bidi/_BidiMixin' {
					declare module.exports: _BidiMixin


}

declare module 'dojox/grid/cells/dijit' {
					declare module.exports: dijit


}

declare module 'dojox/grid/cells/dijit._Widget' {
					declare module.exports: _Widget


}

declare module 'dojox/grid/cells/dijit.CheckBox' {
					declare module.exports: CheckBox


}

declare module 'dojox/grid/cells/dijit.DateTextBox' {
					declare module.exports: DateTextBox


}

declare module 'dojox/grid/cells/dijit.Editor' {
					declare module.exports: Editor


}

declare module 'dojox/grid/cells/dijit.ComboBox' {
					declare module.exports: ComboBox


}

declare module 'dojox/grid/cells/tree' {
					declare module.exports: tree


}

declare module 'dojox/grid/cells/_base' {
					declare module.exports: _base


}

declare module 'dojox/grid/cells/_base.AlwaysEdit' {
					declare module.exports: AlwaysEdit


}

declare module 'dojox/grid/cells/_base.Bool' {
					declare module.exports: Bool


}

declare module 'dojox/grid/cells/_base.Cell' {
					declare module.exports: Cell


}

declare module 'dojox/grid/cells/_base.Select' {
					declare module.exports: Select


}

declare module 'dojox/grid/cells/_base.RowIndex' {
					declare module.exports: RowIndex


}

declare module 'dojox/grid/enhanced/_Events' {
					declare module.exports: _Events


}

declare module 'dojox/grid/enhanced/_Plugin' {
					declare module.exports: _Plugin


}

declare module 'dojox/grid/enhanced/_PluginManager' {
					declare module.exports: _PluginManager


}

declare module 'dojox/grid/enhanced/_FocusManager' {
					declare module.exports: _FocusManager


}

declare module 'dojox/grid/enhanced/plugins/_StoreLayer' {
					declare module.exports: _StoreLayer


}

declare module 'dojox/grid/enhanced/plugins/_StoreLayer._ServerSideLayer' {
					declare module.exports: _ServerSideLayer


}

declare module 'dojox/grid/enhanced/plugins/_StoreLayer._StoreLayer' {
					declare module.exports: _StoreLayer


}

declare module 'dojox/grid/enhanced/plugins/_RowMapLayer' {
					declare module.exports: _RowMapLayer


}

declare module 'dojox/grid/enhanced/plugins/_SelectionPreserver' {
					declare module.exports: _SelectionPreserver


}

declare module 'dojox/grid/enhanced/plugins/AutoScroll' {
					declare module.exports: AutoScroll


}

declare module 'dojox/grid/enhanced/plugins/DnD' {
					declare module.exports: DnD


}

declare module 'dojox/grid/enhanced/plugins/CellMerge' {
					declare module.exports: CellMerge


}

declare module 'dojox/grid/enhanced/plugins/Exporter' {
					declare module.exports: Exporter


}

declare module 'dojox/grid/enhanced/plugins/Cookie' {
					declare module.exports: Cookie


}

declare module 'dojox/grid/enhanced/plugins/Filter' {
					declare module.exports: Filter


}

declare module 'dojox/grid/enhanced/plugins/Dialog' {
					declare module.exports: Dialog


}

declare module 'dojox/grid/enhanced/plugins/IndirectSelection' {
					declare module.exports: IndirectSelection


}

declare module 'dojox/grid/enhanced/plugins/Menu' {
					declare module.exports: Menu


}

declare module 'dojox/grid/enhanced/plugins/Printer' {
					declare module.exports: Printer


}

declare module 'dojox/grid/enhanced/plugins/NestedSorting' {
					declare module.exports: NestedSorting


}

declare module 'dojox/grid/enhanced/plugins/Rearrange' {
					declare module.exports: Rearrange


}

declare module 'dojox/grid/enhanced/plugins/Search' {
					declare module.exports: Search


}

declare module 'dojox/grid/enhanced/plugins/Pagination' {
					declare module.exports: Pagination


}

declare module 'dojox/grid/enhanced/plugins/GridSource' {
					declare module.exports: GridSource


}

declare module 'dojox/grid/enhanced/plugins/Selector' {
					declare module.exports: Selector


}

declare module 'dojox/grid/enhanced/plugins/exporter/_ExportWriter' {
					declare module.exports: _ExportWriter


}

declare module 'dojox/grid/enhanced/plugins/exporter/CSVWriter' {
					declare module.exports: CSVWriter


}

declare module 'dojox/grid/enhanced/plugins/exporter/TableWriter' {
					declare module.exports: TableWriter


}

declare module 'dojox/grid/enhanced/plugins/filter/_ConditionExpr' {
					declare module.exports: _ConditionExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_ConditionExpr._BiOpExpr' {
					declare module.exports: _BiOpExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_ConditionExpr._OperatorExpr' {
					declare module.exports: _OperatorExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_ConditionExpr._UniOpExpr' {
					declare module.exports: _UniOpExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_ConditionExpr._ConditionExpr' {
					declare module.exports: _ConditionExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_ConditionExpr._DataExpr' {
					declare module.exports: _DataExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs' {
					declare module.exports: _DataExprs


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs._BiOpExpr' {
					declare module.exports: _BiOpExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs._ConditionExpr' {
					declare module.exports: _ConditionExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs._OperatorExpr' {
					declare module.exports: _OperatorExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs._UniOpExpr' {
					declare module.exports: _UniOpExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs.NumberExpr' {
					declare module.exports: NumberExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs.DateExpr' {
					declare module.exports: DateExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs._DataExpr' {
					declare module.exports: _DataExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs.StringExpr' {
					declare module.exports: StringExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs.BooleanExpr' {
					declare module.exports: BooleanExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_DataExprs.TimeExpr' {
					declare module.exports: TimeExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr' {
					declare module.exports: _FilterExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr._ConditionExpr' {
					declare module.exports: _ConditionExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr._OperatorExpr' {
					declare module.exports: _OperatorExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr._BiOpExpr' {
					declare module.exports: _BiOpExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.BooleanExpr' {
					declare module.exports: BooleanExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr._DataExpr' {
					declare module.exports: _DataExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr._UniOpExpr' {
					declare module.exports: _UniOpExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.EndsWith' {
					declare module.exports: EndsWith


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.Contains' {
					declare module.exports: Contains


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.DateExpr' {
					declare module.exports: DateExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.EqualTo' {
					declare module.exports: EqualTo


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LargerThan' {
					declare module.exports: LargerThan


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.IsEmpty' {
					declare module.exports: IsEmpty


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LessThanOrEqualTo' {
					declare module.exports: LessThanOrEqualTo


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LessThan' {
					declare module.exports: LessThan


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LargerThanOrEqualTo' {
					declare module.exports: LargerThanOrEqualTo


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LogicALL' {
					declare module.exports: LogicALL


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LogicAND' {
					declare module.exports: LogicAND


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LogicANY' {
					declare module.exports: LogicANY


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.Matches' {
					declare module.exports: Matches


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LogicOR' {
					declare module.exports: LogicOR


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LogicNOT' {
					declare module.exports: LogicNOT


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.LogicXOR' {
					declare module.exports: LogicXOR


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.StringExpr' {
					declare module.exports: StringExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.NumberExpr' {
					declare module.exports: NumberExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.TimeExpr' {
					declare module.exports: TimeExpr


}

declare module 'dojox/grid/enhanced/plugins/filter/_FilterExpr.StartsWith' {
					declare module.exports: StartsWith


}

declare module 'dojox/grid/enhanced/plugins/filter/FilterLayer' {
					declare module.exports: FilterLayer


}

declare module 'dojox/grid/enhanced/plugins/filter/FilterLayer._ServerSideLayer' {
					declare module.exports: _ServerSideLayer


}

declare module 'dojox/grid/enhanced/plugins/filter/FilterLayer._StoreLayer' {
					declare module.exports: _StoreLayer


}

declare module 'dojox/grid/enhanced/plugins/filter/FilterLayer.ServerSideFilterLayer' {
					declare module.exports: ServerSideFilterLayer


}

declare module 'dojox/grid/enhanced/plugins/filter/FilterLayer.ClientSideFilterLayer' {
					declare module.exports: ClientSideFilterLayer


}

declare module 'dojox/grid/enhanced/plugins/filter/FilterBuilder' {
					declare module.exports: FilterBuilder


}

declare module 'dojox/grid/enhanced/plugins/filter/FilterStatusTip' {
					declare module.exports: FilterStatusTip


}

declare module 'dojox/grid/enhanced/plugins/filter/FilterDefDialog' {
					declare module.exports: FilterDefDialog


}

declare module 'dojox/grid/enhanced/plugins/filter/ClearFilterConfirm' {
					declare module.exports: ClearFilterConfirm


}

declare module 'dojox/grid/enhanced/plugins/filter/FilterBar' {
					declare module.exports: FilterBar


}