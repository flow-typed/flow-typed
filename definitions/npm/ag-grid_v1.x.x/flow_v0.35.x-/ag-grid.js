

declare module 'ag-grid' {
					
}

declare module 'grid' {
		declare interface CsvExportParams {
		skipHeader?: boolean,
		skipFooters?: boolean,
		skipGroups?: boolean,
		fileName?: string
	}

	declare interface TextAndNumberFilterParameters {
		newRowsAction?: string
	}

	declare interface ColDef {
		sort?: string,
		sortedAt?: number,
		sortingOrder?: string[],
		headerName: string,
		field: string,
		headerValueGetter?: string | Function,
		colId?: string,
		hide?: boolean,
		headerTooltip?: string,
		valueGetter?: string | Function,
		headerCellRenderer?: Function | Object,
		headerClass?: string | string[] | ((params: any) => string | string[]),
		width?: number,
		minWidth?: number,
		maxWidth?: number,
		cellClass?: string | string[] | ((cellClassParams: any) => string | string[]),
		cellStyle?: {
		
	} | ((params: any) => {
		
	}),
		cellRenderer?: Function | {
		
	},
		floatingCellRenderer?: Function | {
		
	},
		aggFunc?: string,
		comparator?: Function,
		checkboxSelection?: boolean,
		suppressMenu?: boolean,
		suppressSorting?: boolean,
		unSortIcon?: boolean,
		suppressSizeToFit?: boolean,
		suppressResize?: boolean,
		headerGroup?: string,
		headerGroupShow?: string,
		editable?: boolean | (Function),
		newValueHandler?: Function,
		volatile?: boolean,
		template?: string,
		templateUrl?: string,
		filter?: string | Function,
		filterParams?: SetFilterParameters | TextAndNumberFilterParameters,
		cellClassRules?: {
		[cssClassName: string]: (Function | string)
	},
		onCellValueChanged?: Function,
		onCellClicked?: Function,
		onCellDoubleClicked?: Function,
		onCellContextMenu?: Function
	}

	declare interface SetFilterParameters {
		cellRenderer?: Function,
		cellHeight?: number,
		values?: any,
		newRowsAction?: string,
		suppressRemoveEntries?: boolean
	}

	declare interface RowNode {
		id?: number,
		data?: any,
		parent?: RowNode,
		level?: number,
		group?: boolean,
		firstChild?: boolean,
		lastChild?: boolean,
		childIndex?: number,
		floating?: boolean,
		floatingTop?: boolean,
		floatingBottom?: boolean,
		quickFilterAggregateText?: string,
		footer?: boolean,
		children?: RowNode[],
		field?: string,
		key?: any,
		childrenAfterFilter?: RowNode[],
		childrenAfterSort?: RowNode[],
		allChildrenCount?: number,
		expanded?: boolean,
		sibling?: RowNode,
		_childrenMap?: {
		
	}
	}

	declare interface GridOptions {
		virtualPaging?: boolean,
		toolPanelSuppressPivot?: boolean,
		toolPanelSuppressValues?: boolean,
		rowsAlreadyGrouped?: boolean,
		suppressRowClickSelection?: boolean,
		suppressCellSelection?: boolean,
		sortingOrder?: string[],
		suppressMultiSort?: boolean,
		suppressHorizontalScroll?: boolean,
		unSortIcon?: boolean,
		rowHeight?: number,
		rowBuffer?: number,
		enableColResize?: boolean,
		enableCellExpressions?: boolean,
		enableSorting?: boolean,
		enableServerSideSorting?: boolean,
		enableFilter?: boolean,
		enableServerSideFilter?: boolean,
		colWidth?: number,
		suppressMenuHide?: boolean,
		singleClickEdit?: boolean,
		debug?: boolean,
		icons?: any,
		angularCompileRows?: boolean,
		angularCompileFilters?: boolean,
		angularCompileHeaders?: boolean,
		localeText?: any,
		localeTextFunc?: Function,
		suppressScrollLag?: boolean,
		groupSuppressAutoColumn?: boolean,
		groupSelectsChildren?: boolean,
		groupHidePivotColumns?: boolean,
		groupIncludeFooter?: boolean,
		groupUseEntireRow?: boolean,
		groupSuppressRow?: boolean,
		groupSuppressBlankHeader?: boolean,
		forPrint?: boolean,
		groupColumnDef?: any,
		context?: any,
		rowStyle?: any,
		rowClass?: any,
		groupDefaultExpanded?: any,
		slaveGrids?: GridOptions[],
		rowSelection?: string,
		rowDeselection?: boolean,
		rowData?: any[],
		floatingTopRowData?: any[],
		floatingBottomRowData?: any[],
		showToolPanel?: boolean,
		groupKeys?: string[],
		groupAggFields?: string[],
		columnDefs?: any[],
		datasource?: any,
		pinnedColumnCount?: number,
		groupHeaders?: boolean,
		headerHeight?: number,
		groupRowInnerRenderer(params: any): void,
		groupRowRenderer?: Function | Object,
		isScrollLag(): boolean,
		isExternalFilterPresent(): boolean,
		doesExternalFilterPass(node: RowNode): boolean,
		getRowStyle?: any,
		getRowClass?: any,
		headerCellRenderer?: any,
		groupAggFunction(nodes: any[]): any,
		onReady(api: any): void,
		onModelUpdated(): void,
		onCellClicked(params: any): void,
		onCellDoubleClicked(params: any): void,
		onCellContextMenu(params: any): void,
		onCellValueChanged(params: any): void,
		onCellFocused(params: any): void,
		onRowSelected(params: any): void,
		onSelectionChanged(): void,
		onBeforeFilterChanged(): void,
		onAfterFilterChanged(): void,
		onFilterModified(): void,
		onBeforeSortChanged(): void,
		onAfterSortChanged(): void,
		onVirtualRowRemoved(params: any): void,
		onRowClicked(params: any): void,
		api?: GridApi,
		columnApi?: ColumnApi
	}

	declare interface Filter {
		getGui(): any,
		isFilterActive(): boolean,
		doesFilterPass(params: any): boolean,
		afterGuiAttached(params?: {
		hidePopup?: Function
	}): void,
		onNewRowsLoaded(): void
	}

	declare function groupCellRendererFactory(
		gridOptionsWrapper: GridOptionsWrapper, selectionRendererFactory: SelectionRendererFactory, expressionService: ExpressionService
	): (params: any) => HTMLSpanElement

	declare class ColumnChangeEvent  {
		constructor(type: string): this;
		toString(): string;
		withColumn(column: Column): ColumnChangeEvent;
		withColumnGroup(columnGroup: ColumnGroup): ColumnChangeEvent;
		withFromIndex(fromIndex: number): ColumnChangeEvent;
		withPinnedColumnCount(pinnedColumnCount: number): ColumnChangeEvent;
		withToIndex(toIndex: number): ColumnChangeEvent;
		getFromIndex(): number;
		getToIndex(): number;
		getPinnedColumnCount(): number;
		getType(): string;
		getColumn(): Column;
		getColumnGroup(): ColumnGroup;
		isPivotChanged(): boolean;
		isValueChanged(): boolean;
		isIndividualColumnResized(): boolean
	}

	declare class Utils  {
		iterateObject(object: any, callback: (key: string, value: any) => void): void;
		cloneObject(object: any): any;
		map<TItem, TResult>(array: TItem[], callback: (item: TItem) => TResult): TResult[];
		forEach<T>(array: T[], callback: (item: T, index: number) => void): void;
		filter<T>(array: T[], callback: (item: T) => boolean): T[];
		assign(object: any, source: any): void;
		getFunctionParameters(func: any): any;
		find(collection: any, predicate: any, value: any): any;
		toStrings<T>(array: T[]): string[];
		iterateArray<T>(array: T[], callback: (item: T, index: number) => void): void;
		isNode(o: any): boolean;
		isElement(o: any): boolean;
		isNodeOrElement(o: any): boolean;
		addChangeListener(element: HTMLElement, listener: EventListener): void;
		makeNull(value: any): any;
		removeAllChildren(node: HTMLElement): void;
		removeElement(parent: HTMLElement, cssSelector: string): void;
		removeFromParent(node: Element): void;
		isVisible(element: HTMLElement): boolean;
		loadTemplate(template: string): Node;
		querySelectorAll_addCssClass(eParent: any, selector: string, cssClass: string): void;
		querySelectorAll_removeCssClass(eParent: any, selector: string, cssClass: string): void;
		querySelectorAll_replaceCssClass(
		eParent: any, selector: string, cssClassToRemove: string, cssClassToAdd: string
	): void;
		addOrRemoveCssClass(element: HTMLElement, className: string, addOrRemove: boolean): void;
		addCssClass(element: HTMLElement, className: string): void;
		offsetHeight(element: HTMLElement): number;
		offsetWidth(element: HTMLElement): number;
		removeCssClass(element: HTMLElement, className: string): void;
		removeFromArray<T>(array: T[], object: T): void;
		defaultComparator(valueA: any, valueB: any): number;
		formatWidth(width: number | string): string;
		useRenderer<TParams>(
		eParent: Element, eRenderer: (params: TParams) => Node | string, params: TParams
	): void;
		createIcon(
		iconName: any, gridOptionsWrapper: any, colDefWrapper: any, svgFactoryFunc: () => Node
	): HTMLSpanElement;
		addStylesToElement(eElement: any, styles: any): void;
		getScrollbarWidth(): number;
		isKeyPressed(event: KeyboardEvent, keyToCheck: number): boolean;
		setVisible(element: HTMLElement, visible: boolean): void;
		isBrowserIE(): boolean;
		isBrowserSafari(): boolean
	}

	declare class Constants  {
		STEP_EVERYTHING: number;
		STEP_FILTER: number;
		STEP_SORT: number;
		STEP_MAP: number;
		ASC: string;
		DESC: string;
		ROW_BUFFER_SIZE: number;
		MIN_COL_WIDTH: number;
		SUM: string;
		MIN: string;
		MAX: string;
		KEY_TAB: number;
		KEY_ENTER: number;
		KEY_BACKSPACE: number;
		KEY_DELETE: number;
		KEY_ESCAPE: number;
		KEY_SPACE: number;
		KEY_DOWN: number;
		KEY_UP: number;
		KEY_LEFT: number;
		KEY_RIGHT: number
	}

	declare class Column  {
		colIdSequence: number;
		colDef: ColDef;
		actualWidth: any;
		visible: any;
		colId: any;
		pinned: boolean;
		index: number;
		aggFunc: string;
		pivotIndex: number;
		sort: string;
		sortedAt: number;
		constructor(colDef: ColDef, actualWidth: any): this;
		isGreaterThanMax(width: number): boolean;
		getMinimumWidth(): number;
		setMinimum(): void
	}

	declare class ColumnGroup  {
		pinned: any;
		name: any;
		allColumns: Column[];
		displayedColumns: Column[];
		expandable: boolean;
		expanded: boolean;
		actualWidth: number;
		constructor(pinned: any, name: any): this;
		getMinimumWidth(): number;
		addColumn(column: any): void;
		calculateExpandable(): void;
		calculateActualWidth(): void;
		calculateDisplayedColumns(): void;
		addToVisibleColumns(colsToAdd: any): void
	}

	declare class GridOptionsWrapper  {
		init(gridOptions: GridOptions, eventService: EventService): void;
		isRowSelection(): boolean;
		isRowDeselection(): boolean;
		isRowSelectionMulti(): boolean;
		getContext(): any;
		isVirtualPaging(): boolean;
		isShowToolPanel(): boolean;
		isToolPanelSuppressPivot(): boolean;
		isToolPanelSuppressValues(): boolean;
		isRowsAlreadyGrouped(): boolean;
		isGroupSelectsChildren(): boolean;
		isGroupHidePivotColumns(): boolean;
		isGroupIncludeFooter(): boolean;
		isGroupSuppressBlankHeader(): boolean;
		isSuppressRowClickSelection(): boolean;
		isSuppressCellSelection(): boolean;
		isSuppressMultiSort(): boolean;
		isGroupSuppressAutoColumn(): boolean;
		isForPrint(): boolean;
		isSuppressHorizontalScroll(): boolean;
		isUnSortIcon(): boolean;
		isSuppressMenuHide(): boolean;
		getRowStyle(): any;
		getRowClass(): any;
		getRowStyleFunc(): any;
		getRowClassFunc(): any;
		getHeaderCellRenderer(): any;
		getApi(): GridApi;
		isEnableColResize(): boolean;
		isSingleClickEdit(): boolean;
		getGroupDefaultExpanded(): any;
		getGroupKeys(): string[];
		getGroupAggFunction(): (nodes: any[]) => any;
		getGroupAggFields(): string[];
		getRowData(): any[];
		isGroupUseEntireRow(): boolean;
		getGroupColumnDef(): any;
		isGroupSuppressRow(): boolean;
		isAngularCompileRows(): boolean;
		isAngularCompileFilters(): boolean;
		isAngularCompileHeaders(): boolean;
		isDebug(): boolean;
		getColumnDefs(): any[];
		getDatasource(): any;
		getRowBuffer(): number;
		isEnableSorting(): boolean;
		isEnableCellExpressions(): boolean;
		isEnableServerSideSorting(): boolean;
		isEnableFilter(): boolean;
		isEnableServerSideFilter(): boolean;
		isSuppressScrollLag(): boolean;
		getIcons(): any;
		getIsScrollLag(): () => boolean;
		getSortingOrder(): string[];
		getSlaveGrids(): GridOptions[];
		getGroupRowRenderer(): Object | Function;
		getRowHeight(): number;
		getHeaderHeight(): number;
		setHeaderHeight(headerHeight: number): void;
		isGroupHeaders(): boolean;
		setGroupHeaders(groupHeaders: boolean): void;
		getFloatingTopRowData(): any[];
		setFloatingTopRowData(rows: any[]): void;
		getFloatingBottomRowData(): any[];
		setFloatingBottomRowData(rows: any[]): void;
		isExternalFilterPresent(): boolean;
		doesExternalFilterPass(node: RowNode): boolean;
		getGroupRowInnerRenderer(): (params: any) => void;
		getColWidth(): number;
		getPinnedColCount(): number;
		getLocaleTextFunc(): Function;
		globalEventHandler(eventName: string, event?: any): void
	}

	declare class LoggerFactory  {
		init(gridOptionsWrapper: GridOptionsWrapper): void;
		create(name: string): Logger
	}

	declare class Logger  {
		constructor(name: string, logging: boolean): this;
		log(message: string): void
	}

	declare class Events  {
		EVENT_COLUMN_EVERYTHING_CHANGED: string;
		EVENT_COLUMN_PIVOT_CHANGE: string;
		EVENT_COLUMN_VALUE_CHANGE: string;
		EVENT_COLUMN_MOVED: string;
		EVENT_COLUMN_VISIBLE: string;
		EVENT_COLUMN_GROUP_OPENED: string;
		EVENT_COLUMN_RESIZED: string;
		EVENT_COLUMN_PINNED_COUNT_CHANGED: string;
		EVENT_MODEL_UPDATED: string;
		EVENT_CELL_CLICKED: string;
		EVENT_CELL_DOUBLE_CLICKED: string;
		EVENT_CELL_CONTEXT_MENU: string;
		EVENT_CELL_VALUE_CHANGED: string;
		EVENT_CELL_FOCUSED: string;
		EVENT_ROW_SELECTED: string;
		EVENT_SELECTION_CHANGED: string;
		EVENT_BEFORE_FILTER_CHANGED: string;
		EVENT_AFTER_FILTER_CHANGED: string;
		EVENT_FILTER_MODIFIED: string;
		EVENT_BEFORE_SORT_CHANGED: string;
		EVENT_AFTER_SORT_CHANGED: string;
		EVENT_VIRTUAL_ROW_REMOVED: string;
		EVENT_ROW_CLICKED: string;
		EVENT_READY: string
	}

	declare class EventService  {
		addEventListener(eventType: string, listener: Function): void;
		addGlobalListener(listener: Function): void;
		removeEventListener(eventType: string, listener: Function): void;
		removeGlobalListener(listener: Function): void;
		dispatchEvent(eventType: string, event?: any): void
	}

	declare class MasterSlaveService  {
		init(
		gridOptionsWrapper: GridOptionsWrapper, columnController: ColumnController, gridPanel: GridPanel, loggerFactory: LoggerFactory, eventService: EventService
	): void;
		fireHorizontalScrollEvent(horizontalScroll: number): void;
		onScrollEvent(horizontalScroll: number): void;
		onColumnEvent(event: ColumnChangeEvent): void
	}

	declare class ColumnApi  {
		constructor(_columnController: ColumnController): this;
		sizeColumnsToFit(gridWidth: any): void;
		hideColumns(colIds: any, hide: any): void;
		columnGroupOpened(group: ColumnGroup, newValue: boolean): void;
		getColumnGroup(name: string): ColumnGroup;
		getDisplayNameForCol(column: any): string;
		getColumn(key: any): Column;
		setState(columnState: any): void;
		getState(): [any];
		isPinning(): boolean;
		getVisibleColAfter(col: Column): Column;
		getVisibleColBefore(col: Column): Column;
		setColumnVisible(column: Column, visible: boolean): void;
		getAllColumns(): Column[];
		getDisplayedColumns(): Column[];
		getPivotedColumns(): Column[];
		getValueColumns(): Column[];
		moveColumn(fromIndex: number, toIndex: number): void;
		movePivotColumn(fromIndex: number, toIndex: number): void;
		setColumnAggFunction(column: Column, aggFunc: string): void;
		setColumnWidth(column: Column, newWidth: number): void;
		removeValueColumn(column: Column): void;
		addValueColumn(column: Column): void;
		removePivotColumn(column: Column): void;
		setPinnedColumnCount(count: number): void;
		addPivotColumn(column: Column): void;
		getHeaderGroups(): ColumnGroup[];
		hideColumn(colId: any, hide: any): void
	}

	declare class ColumnController  {
		constructor(): this;
		init(
		angularGrid: Grid, selectionRendererFactory: SelectionRendererFactory, gridOptionsWrapper: GridOptionsWrapper, expressionService: ExpressionService, valueService: ValueService, masterSlaveController: MasterSlaveService, eventService: EventService
	): void;
		getColumnApi(): ColumnApi;
		isSetupComplete(): boolean;
		getHeaderGroups(): ColumnGroup[];
		getPinnedContainerWidth(): number;
		addPivotColumn(column: Column): void;
		setPinnedColumnCount(count: number): void;
		removePivotColumn(column: Column): void;
		addValueColumn(column: Column): void;
		removeValueColumn(column: Column): void;
		setColumnWidth(column: Column, newWidth: number): void;
		setColumnAggFunction(column: Column, aggFunc: string): void;
		movePivotColumn(fromIndex: number, toIndex: number): void;
		moveColumn(fromIndex: number, toIndex: number): void;
		getBodyContainerWidth(): number;
		getValueColumns(): Column[];
		getPivotedColumns(): Column[];
		getDisplayedColumns(): Column[];
		getAllColumns(): Column[];
		setColumnVisible(column: Column, visible: boolean): void;
		getVisibleColBefore(col: any): Column;
		getVisibleColAfter(col: Column): Column;
		isPinning(): boolean;
		getState(): [any];
		setState(columnState: any): void;
		getColumns(keys: any[]): Column[];
		getColumn(key: any): Column;
		getDisplayNameForCol(column: any): string;
		getColumnGroup(name: string): ColumnGroup;
		onColumnsChanged(): void;
		columnGroupOpened(group: ColumnGroup, newValue: boolean): void;
		hideColumns(colIds: any, hide: any): void;
		sizeColumnsToFit(gridWidth: any): void
	}

	declare class CsvCreator  {
		constructor(rowController: InMemoryRowController, columnController: ColumnController, grid: Grid, valueService: ValueService): this;
		exportDataAsCsv(params?: CsvExportParams): void;
		getDataAsCsv(params?: CsvExportParams): string
	}

	declare class ExpressionService  {
		init(loggerFactory: LoggerFactory): void;
		evaluate(expression: string, params: any): any
	}

	declare class TextFilter extends Filter {
		init(params: any): void;
		onNewRowsLoaded(): void;
		afterGuiAttached(): void;
		doesFilterPass(node: any): boolean;
		getGui(): any;
		isFilterActive(): boolean
	}

	declare class NumberFilter extends Filter {
		init(params: any): void;
		onNewRowsLoaded(): void;
		afterGuiAttached(): void;
		doesFilterPass(node: any): boolean;
		getGui(): any;
		isFilterActive(): boolean
	}

	declare class SetFilterModel  {
		constructor(colDef: ColDef, rowModel: any, valueGetter: any, doesRowPassOtherFilters: any): this;
		refreshAfterNewRowsLoaded(keepSelection: any, isSelectAll: boolean): void;
		refreshAfterAnyFilterChanged(): void;
		setMiniFilter(newMiniFilter: any): boolean;
		getMiniFilter(): any;
		getDisplayedValueCount(): any;
		getDisplayedValue(index: any): any;
		selectEverything(): void;
		isFilterActive(): boolean;
		selectNothing(): void;
		getUniqueValueCount(): any;
		getUniqueValue(index: any): any;
		unselectValue(value: any): void;
		selectValue(value: any): void;
		isValueSelected(value: any): boolean;
		isEverythingSelected(): boolean;
		isNothingSelected(): boolean;
		getModel(): any;
		setModel(model: any, isSelectAll: boolean): void
	}

	declare class SetFilter extends Filter {
		init(params: any): void;
		afterGuiAttached(): void;
		isFilterActive(): boolean;
		doesFilterPass(node: any): boolean;
		getGui(): any;
		onNewRowsLoaded(): void;
		onAnyFilterChanged(): void;
		getApi(): any
	}

	declare class PopupService  {
		init(ePopupParent: any): void;
		positionPopup(eventSource: any, ePopup: any, minWidth: any): void;
		addAsModalPopup(eChild: any, closeOnEsc: boolean): (event: any) => void
	}

	declare class FilterManager  {
		init(
		grid: Grid, gridOptionsWrapper: GridOptionsWrapper, $compile: any, $scope: any, columnController: ColumnController, popupService: PopupService, valueService: ValueService
	): void;
		setFilterModel(model: any): void;
		getFilterModel(): any;
		setRowModel(rowModel: any): void;
		isAdvancedFilterPresent(): boolean;
		isAnyFilterPresent(): boolean;
		isFilterPresentForCol(colId: any): any;
		setQuickFilter(newFilter: any): boolean;
		onFilterChanged(): void;
		isQuickFilterPresent(): boolean;
		doesRowPassOtherFilters(filterToSkip: any, node: any): boolean;
		doesRowPassFilter(node: any, filterToSkip?: any): boolean;
		refreshDisplayedValues(): void;
		onNewRowsLoaded(): void;
		getFilterApi(column: Column): any;
		showFilter(column: Column, eventSource: any): void
	}

	declare class TemplateService  {
		templateCache: any;
		waitingCallbacks: any;
		$scope: any;
		init($scope: any): void;
		getTemplate(url: any, callback: any): any;
		handleHttpResult(httpResult: any, url: any): void
	}

	declare class SelectionRendererFactory  {
		init(angularGrid: any, selectionController: any): void;
		createSelectionCheckbox(node: any, rowIndex: any): HTMLInputElement
	}

	declare class RenderedCell  {
		constructor(isFirstColumn: any, column: any, $compile: any, rowRenderer: RowRenderer, gridOptionsWrapper: GridOptionsWrapper, expressionService: ExpressionService, selectionRendererFactory: SelectionRendererFactory, selectionController: SelectionController, templateService: TemplateService, cellRendererMap: {
		[key: string]: any
	}, node: any, rowIndex: number, scope: any, columnController: ColumnController, valueService: ValueService, eventService: EventService): this;
		getColumn(): Column;
		getVGridCell(): ag.vdom.VHtmlElement;
		startEditing(key?: number): void;
		focusCell(forceBrowserFocus: boolean): void;
		createParams(): any;
		createEvent(event: any, eventSource: any): any;
		isCellEditable(): any;
		createSelectionCheckbox(): void;
		setSelected(state: boolean): void;
		isVolatile(): boolean;
		refreshCell(): void
	}

	declare class RenderedRow  {
		vPinnedRow: any;
		vBodyRow: any;
		constructor(gridOptionsWrapper: GridOptionsWrapper, valueService: ValueService, parentScope: any, angularGrid: Grid, columnController: ColumnController, expressionService: ExpressionService, cellRendererMap: {
		[key: string]: any
	}, selectionRendererFactory: SelectionRendererFactory, $compile: any, templateService: TemplateService, selectionController: SelectionController, rowRenderer: RowRenderer, eBodyContainer: HTMLElement, ePinnedContainer: HTMLElement, node: any, rowIndex: number, eventService: EventService): this;
		onRowSelected(selected: boolean): void;
		softRefresh(): void;
		getRenderedCellForColumn(column: Column): RenderedCell;
		getCellForCol(column: Column): any;
		destroy(): void;
		isDataInList(rows: any[]): boolean;
		isNodeInList(nodes: RowNode[]): boolean;
		isGroup(): boolean;
		setMainRowWidth(width: number): void;
		getRowNode(): any;
		getRowIndex(): any;
		refreshCells(colIds: string[]): void
	}

	declare class SvgFactory  {
		theInstance: SvgFactory;
		getInstance(): SvgFactory;
		createFilterSvg(): Element;
		createColumnShowingSvg(): Element;
		createColumnHiddenSvg(): Element;
		createMenuSvg(): Element;
		createArrowUpSvg(): Element;
		createArrowLeftSvg(): Element;
		createArrowDownSvg(): Element;
		createArrowRightSvg(): Element;
		createSmallArrowDownSvg(): Element;
		createArrowUpDownSvg(): Element
	}

	declare class RowRenderer  {
		init(
		columnModel: any, gridOptionsWrapper: GridOptionsWrapper, gridPanel: GridPanel, angularGrid: Grid, selectionRendererFactory: SelectionRendererFactory, $compile: any, $scope: any, selectionController: SelectionController, expressionService: ExpressionService, templateService: TemplateService, valueService: ValueService, eventService: EventService
	): void;
		setRowModel(rowModel: any): void;
		onIndividualColumnResized(column: Column): void;
		setMainRowWidths(): void;
		refreshAllFloatingRows(): void;
		refreshView(refreshFromIndex?: any): void;
		softRefreshView(): void;
		refreshRows(rowNodes: RowNode[]): void;
		refreshCells(rowNodes: RowNode[], colIds: string[]): void;
		rowDataChanged(rows: any): void;
		refreshGroupRows(): void;
		drawVirtualRows(): void;
		getFirstVirtualRenderedRow(): number;
		getLastVirtualRenderedRow(): number;
		getRenderedNodes(): any[];
		getIndexOfRenderedNode(node: any): number;
		navigateToNextCell(key: any, rowIndex: number, column: Column): void;
		onRowSelected(rowIndex: number, selected: boolean): void;
		focusCell(
		eCell: any, rowIndex: number, colIndex: number, colDef: ColDef, forceBrowserFocus: any
	): void;
		getFocusedCell(): any;
		setFocusedCell(rowIndex: any, colIndex: any): void;
		startEditingNextCell(rowIndex: any, column: any, shiftKey: any): void
	}

	declare class SelectionController  {
		init(
		angularGrid: Grid, gridPanel: GridPanel, gridOptionsWrapper: GridOptionsWrapper, $scope: any, rowRenderer: RowRenderer, eventService: EventService
	): void;
		getSelectedNodesById(): any;
		getSelectedRows(): any;
		getSelectedNodes(): any;
		getBestCostNodeSelection(): any;
		setRowModel(rowModel: any): void;
		deselectAll(): void;
		selectAll(): void;
		selectNode(node: any, tryMulti: any, suppressEvents?: any): void;
		deselectIndex(rowIndex: any): void;
		deselectNode(node: any): void;
		selectIndex(index: any, tryMulti: any, suppressEvents?: any): void;
		isNodeSelected(node: any): boolean
	}

	declare class RenderedHeaderElement  {
		constructor(eRoot: HTMLElement): this;
		getERoot(): HTMLElement;
		destroy(): void;
		refreshFilterIcon(): void;
		refreshSortIcon(): void;
		onDragStart(): void;
		onDragging(dragChange: number): void;
		onIndividualColumnResized(column: Column): void;
		addDragHandler(eDraggableElement: any): void;
		stopDragging(listenersToRemove: any): void
	}

	declare class RenderedHeaderCell extends RenderedHeaderElement {
		constructor(column: Column, parentGroup: RenderedHeaderGroupCell, gridOptionsWrapper: GridOptionsWrapper, parentScope: any, filterManager: FilterManager, columnController: ColumnController, $compile: any, angularGrid: Grid, eRoot: HTMLElement): this;
		getGui(): HTMLElement;
		destroy(): void;
		refreshFilterIcon(): void;
		refreshSortIcon(): void;
		onDragStart(): void;
		onDragging(dragChange: number): void;
		onIndividualColumnResized(column: Column): void
	}

	declare class RenderedHeaderGroupCell extends RenderedHeaderElement {
		constructor(columnGroup: ColumnGroup, gridOptionsWrapper: GridOptionsWrapper, columnController: ColumnController, eRoot: HTMLElement, angularGrid: Grid, parentScope: any, filterManager: FilterManager, $compile: any): this;
		getGui(): HTMLElement;
		destroy(): void;
		refreshFilterIcon(): void;
		refreshSortIcon(): void;
		onIndividualColumnResized(column: Column): void;
		onDragStart(): void;
		onDragging(dragChange: any): void
	}

	declare class HeaderRenderer  {
		init(
		gridOptionsWrapper: GridOptionsWrapper, columnController: ColumnController, gridPanel: GridPanel, angularGrid: Grid, filterManager: FilterManager, $scope: any, $compile: any
	): void;
		refreshHeader(): void;
		updateSortIcons(): void;
		updateFilterIcons(): void;
		onIndividualColumnResized(column: Column): void
	}

	declare class GroupCreator  {
		init(valueService: ValueService): void;
		group(rowNodes: RowNode[], groupedCols: Column[], expandByDefault: any): RowNode[];
		isExpanded(expandByDefault: any, level: any): boolean
	}

	declare class InMemoryRowController  {
		constructor(): this;
		init(
		gridOptionsWrapper: GridOptionsWrapper, columnController: ColumnController, angularGrid: any, filterManager: FilterManager, $scope: any, groupCreator: GroupCreator, valueService: ValueService, eventService: EventService
	): void;
		getModel(): any;
		forEachInMemory(callback: Function): void;
		forEachNode(callback: Function): void;
		forEachNodeAfterFilter(callback: Function): void;
		forEachNodeAfterFilterAndSort(callback: Function): void;
		updateModel(step: any): void;
		doAggregate(): void;
		expandOrCollapseAll(expand: boolean, rowNodes: RowNode[]): void;
		onPivotChanged(): void;
		setAllRows(rows: RowNode[], firstId?: number): void
	}

	declare class VirtualPageRowController  {
		rowRenderer: any;
		datasourceVersion: any;
		gridOptionsWrapper: any;
		angularGrid: any;
		datasource: any;
		virtualRowCount: any;
		foundMaxRow: any;
		pageCache: any;
		pageCacheSize: any;
		pageLoadsInProgress: any;
		pageLoadsQueued: any;
		pageAccessTimes: any;
		accessTime: any;
		maxConcurrentDatasourceRequests: any;
		maxPagesInCache: any;
		pageSize: any;
		overflowSize: any;
		init(rowRenderer: any, gridOptionsWrapper: any, angularGrid: any): void;
		setDatasource(datasource: any): void;
		reset(): void;
		createNodesFromRows(pageNumber: any, rows: any): any;
		removeFromLoading(pageNumber: any): void;
		pageLoadFailed(pageNumber: any): void;
		pageLoaded(pageNumber: any, rows: any, lastRow: any): void;
		putPageIntoCacheAndPurge(pageNumber: any, rows: any): void;
		checkMaxRowAndInformRowRenderer(pageNumber: any, lastRow: any): void;
		isPageAlreadyLoading(pageNumber: any): boolean;
		doLoadOrQueue(pageNumber: any): void;
		addToQueueAndPurgeQueue(pageNumber: any): void;
		findLeastRecentlyAccessedPage(pageIndexes: any): number;
		checkQueueForNextLoad(): void;
		loadPage(pageNumber: any): void;
		requestIsDaemon(datasourceVersionCopy: any): boolean;
		getVirtualRow(rowIndex: any): any;
		forEachNode(callback: any): void;
		getModel(
		
	): {
		getVirtualRow: (index: any) => any,
		getVirtualRowCount: () => any,
		forEachInMemory: (callback: any) => void,
		forEachNode: (callback: any) => void,
		forEachNodeAfterFilter: (callback: any) => void,
		forEachNodeAfterFilterAndSort: (callback: any) => void
	}
	}

	declare class PaginationController  {
		eGui: any;
		btNext: any;
		btPrevious: any;
		btFirst: any;
		btLast: any;
		lbCurrent: any;
		lbTotal: any;
		lbRecordCount: any;
		lbFirstRowOnPage: any;
		lbLastRowOnPage: any;
		ePageRowSummaryPanel: any;
		angularGrid: any;
		callVersion: any;
		gridOptionsWrapper: any;
		datasource: any;
		pageSize: any;
		rowCount: any;
		foundMaxRow: any;
		totalPages: any;
		currentPage: any;
		init(angularGrid: any, gridOptionsWrapper: any): void;
		setDatasource(datasource: any): void;
		reset(): void;
		setTotalLabels(): void;
		calculateTotalPages(): void;
		pageLoaded(rows: any, lastRowIndex: any): void;
		updateRowLabels(): void;
		loadPage(): void;
		isCallDaemon(versionCopy: any): boolean;
		onBtNext(): void;
		onBtPrevious(): void;
		onBtFirst(): void;
		onBtLast(): void;
		isZeroPagesToDisplay(): boolean;
		enableOrDisableButtons(): void;
		createTemplate(): string;
		getGui(): any;
		setupComponents(): void
	}

	declare class BorderLayout  {
		constructor(params: any): this;
		addSizeChangeListener(listener: Function): void;
		fireSizeChanged(): void;
		getGui(): any;
		doLayout(): boolean;
		getCentreHeight(): number;
		setEastVisible(visible: any): void;
		setOverlayVisible(visible: any): void;
		setSouthVisible(visible: any): void
	}

	declare class GridPanel  {
		init(
		gridOptionsWrapper: GridOptionsWrapper, columnModel: ColumnController, rowRenderer: RowRenderer, masterSlaveService: MasterSlaveService
	): void;
		getLayout(): BorderLayout;
		getPinnedFloatingTop(): HTMLElement;
		getFloatingTopContainer(): HTMLElement;
		getPinnedFloatingBottom(): HTMLElement;
		getFloatingBottomContainer(): HTMLElement;
		ensureIndexVisible(index: any): void;
		ensureColIndexVisible(index: any): void;
		showLoading(loading: any): void;
		getWidthForSizeColsToFit(): number;
		setRowModel(rowModel: any): void;
		getBodyContainer(): HTMLElement;
		getBodyViewport(): HTMLElement;
		getPinnedColsContainer(): HTMLElement;
		getHeaderContainer(): HTMLElement;
		getRoot(): HTMLElement;
		getPinnedHeader(): HTMLElement;
		getRowsParent(): HTMLElement[];
		setBodyContainerWidth(): void;
		setPinnedColContainerWidth(): void;
		showPinnedColContainersIfNeeded(): void;
		onBodyHeightChange(): void;
		setHorizontalScrollPosition(hScrollPosition: number): void
	}

	declare class DragAndDropService  {
		theInstance: DragAndDropService;
		getInstance(): DragAndDropService;
		dragItem: any;
		constructor(): this;
		stopDragging(): void;
		setDragCssClasses(eListItem: any, dragging: any): void;
		addDragSource(eDragSource: any, dragSourceCallback: any): void;
		onMouseDownDragSource(eDragSource: any, dragSourceCallback: any): void;
		addDropTarget(eDropTarget: any, dropTargetCallback: any): void
	}

	declare class AgList  {
		constructor(): this;
		setReadOnly(readOnly: boolean): void;
		setEmptyMessage(emptyMessage: any): void;
		getUniqueId(): any;
		addStyles(styles: any): void;
		addCssClass(cssClass: any): void;
		addDragSource(dragSource: any): void;
		addModelChangedListener(listener: Function): void;
		addItemSelectedListener(listener: any): void;
		addItemMovedListener(listener: any): void;
		addBeforeDropListener(listener: any): void;
		setModel(model: any): void;
		getModel(): any;
		setCellRenderer(cellRenderer: any): void;
		refreshView(): void;
		getGui(): any
	}

	declare class ColumnSelectionPanel  {
		layout: any;
		constructor(columnController: ColumnController, gridOptionsWrapper: GridOptionsWrapper, eventService: EventService): this;
		getDragSource(): any;
		getGui(): any
	}

	declare class GroupSelectionPanel  {
		gridOptionsWrapper: any;
		columnController: ColumnController;
		inMemoryRowController: any;
		cColumnList: any;
		layout: any;
		constructor(columnController: ColumnController, inMemoryRowController: any, gridOptionsWrapper: GridOptionsWrapper, eventService: EventService): this;
		addDragSource(dragSource: any): void
	}

	declare class AgDropdownList  {
		constructor(popupService: PopupService): this;
		setWidth(width: any): void;
		addItemSelectedListener(listener: any): void;
		fireItemSelected(item: any): void;
		setupComponents(): void;
		itemSelected(item: any): void;
		onClick(): void;
		getGui(): any;
		setSelected(item: any): void;
		setCellRenderer(cellRenderer: any): void;
		refreshView(): void;
		setModel(model: any): void
	}

	declare class ValuesSelectionPanel  {
		constructor(columnController: ColumnController, gridOptionsWrapper: GridOptionsWrapper, popupService: PopupService, eventService: EventService): this;
		getLayout(): any;
		addDragSource(dragSource: any): void
	}

	declare class VerticalStack  {
		isLayoutPanel: any;
		childPanels: any;
		eGui: any;
		constructor(): this;
		addPanel(panel: any, height: any): void;
		getGui(): any;
		doLayout(): void
	}

	declare class ToolPanel  {
		layout: any;
		constructor(): this;
		init(
		columnController: any, inMemoryRowController: any, gridOptionsWrapper: GridOptionsWrapper, popupService: PopupService, eventService: EventService
	): void
	}

	declare class GridApi  {
		constructor(grid: Grid, rowRenderer: RowRenderer, headerRenderer: HeaderRenderer, filterManager: FilterManager, columnController: ColumnController, inMemoryRowController: InMemoryRowController, selectionController: SelectionController, gridOptionsWrapper: GridOptionsWrapper, gridPanel: GridPanel, valueService: ValueService, masterSlaveService: MasterSlaveService, eventService: EventService): this;
		___getMasterSlaveService(): MasterSlaveService;
		getDataAsCsv(params?: CsvExportParams): string;
		exportDataAsCsv(params?: CsvExportParams): void;
		setDatasource(datasource: any): void;
		onNewDatasource(): void;
		setRowData(rowData: any): void;
		setRows(rows: any): void;
		onNewRows(): void;
		setFloatingTopRowData(rows: any[]): void;
		setFloatingBottomRowData(rows: any[]): void;
		onNewCols(): void;
		setColumnDefs(colDefs: ColDef[]): void;
		unselectAll(): void;
		refreshRows(rowNodes: RowNode[]): void;
		refreshCells(rowNodes: RowNode[], colIds: string[]): void;
		rowDataChanged(rows: any): void;
		refreshView(): void;
		softRefreshView(): void;
		refreshGroupRows(): void;
		refreshHeader(): void;
		isAnyFilterPresent(): boolean;
		isAdvancedFilterPresent(): boolean;
		isQuickFilterPresent(): boolean;
		getModel(): any;
		onGroupExpandedOrCollapsed(refreshFromIndex: any): void;
		expandAll(): void;
		collapseAll(): void;
		addVirtualRowListener(rowIndex: any, callback: any): void;
		setQuickFilter(newFilter: any): void;
		selectIndex(index: any, tryMulti: any, suppressEvents: any): void;
		deselectIndex(index: any): void;
		selectNode(node: any, tryMulti: any, suppressEvents: any): void;
		deselectNode(node: any): void;
		selectAll(): void;
		deselectAll(): void;
		recomputeAggregates(): void;
		sizeColumnsToFit(): void;
		showLoading(show: any): void;
		isNodeSelected(node: any): boolean;
		getSelectedNodesById(): {
		[nodeId: number]: RowNode
	};
		getSelectedNodes(): RowNode[];
		getSelectedRows(): any[];
		getBestCostNodeSelection(): any;
		getRenderedNodes(): any[];
		ensureColIndexVisible(index: any): void;
		ensureIndexVisible(index: any): void;
		ensureNodeVisible(comparator: any): void;
		forEachInMemory(callback: Function): void;
		forEachNode(callback: Function): void;
		forEachNodeAfterFilter(callback: Function): void;
		forEachNodeAfterFilterAndSort(callback: Function): void;
		getFilterApiForColDef(colDef: any): any;
		getFilterApi(key: any): any;
		getColumnDef(key: any): ColDef;
		onFilterChanged(): void;
		setSortModel(sortModel: any): void;
		getSortModel(): any;
		setFilterModel(model: any): void;
		getFilterModel(): any;
		getFocusedCell(): any;
		setFocusedCell(rowIndex: any, colIndex: any): void;
		setHeaderHeight(headerHeight: number): void;
		setGroupHeaders(groupHeaders: boolean): void;
		showToolPanel(show: any): void;
		isToolPanelShowing(): boolean;
		hideColumn(colId: any, hide: any): void;
		hideColumns(colIds: any, hide: any): void;
		getColumnState(): [any];
		setColumnState(state: any): void;
		doLayout(): void;
		getValue(colDef: ColDef, data: any, node: any): any;
		addEventListener(eventType: string, listener: Function): void;
		addGlobalListener(listener: Function): void;
		removeEventListener(eventType: string, listener: Function): void;
		removeGlobalListener(listener: Function): void;
		refreshPivot(): void
	}

	declare class ValueService  {
		init(
		gridOptionsWrapper: GridOptionsWrapper, expressionService: ExpressionService, columnController: ColumnController
	): void;
		getValue(colDef: ColDef, data: any, node: any): any
	}

	declare class Grid  {
		constructor(eGridDiv: any, gridOptions: any, globalEventListener?: Function, $scope?: any, $compile?: any, quickFilterOnScope?: any): this;
		getRowModel(): any;
		refreshPivot(): void;
		getEventService(): EventService;
		showToolPanel(show: any): void;
		isToolPanelShowing(): boolean;
		isUsingInMemoryModel(): boolean;
		setDatasource(datasource?: any): void;
		setFinished(): void;
		onQuickFilterChanged(newFilter: any): void;
		onFilterModified(): void;
		onFilterChanged(): void;
		onRowClicked(event: any, rowIndex: any, node: any): void;
		showLoadingPanel(show: any): void;
		updateModelAndRefresh(step: any, refreshFromIndex?: any): void;
		setRows(rows?: any, firstId?: any): void;
		ensureNodeVisible(comparator: any): void;
		getFilterModel(): any;
		setFocusedCell(rowIndex: any, colIndex: any): void;
		getSortModel(): any;
		setSortModel(sortModel: any): void;
		onSortingChanged(): void;
		addVirtualRowListener(rowIndex: any, callback: any): void;
		onVirtualRowSelected(rowIndex: any, selected: any): void;
		onVirtualRowRemoved(rowIndex: any): void;
		setColumnDefs(colDefs?: ColDef[]): void;
		updateBodyContainerWidthAfterColResize(): void;
		updatePinnedColContainerWidthAfterColResize(): void;
		doLayout(): void
	}

	declare class ComponentUtil  {
		SIMPLE_PROPERTIES: string[];
		SIMPLE_NUMBER_PROPERTIES: string[];
		SIMPLE_BOOLEAN_PROPERTIES: string[];
		WITH_IMPACT_NUMBER_PROPERTIES: string[];
		WITH_IMPACT_BOOLEAN_PROPERTIES: string[];
		WITH_IMPACT_OTHER_PROPERTIES: string[];
		CALLBACKS: string[];
		ALL_PROPERTIES: string[];
		copyAttributesToGridOptions(gridOptions: GridOptions, component: any): GridOptions;
		processOnChange(changes: any, gridOptions: GridOptions, component: any): void;
		toBoolean(value: any): boolean;
		toNumber(value: any): number
	}

	declare class AgGridNg2  {
		modelUpdated: any;
		cellClicked: any;
		cellDoubleClicked: any;
		cellContextMenu: any;
		cellValueChanged: any;
		cellFocused: any;
		rowSelected: any;
		selectionChanged: any;
		beforeFilterChanged: any;
		afterFilterChanged: any;
		filterModified: any;
		beforeSortChanged: any;
		afterSortChanged: any;
		virtualRowRemoved: any;
		rowClicked: any;
		ready: any;
		columnEverythingChanged: any;
		columnPivotChanged: any;
		columnValueChanged: any;
		columnMoved: any;
		columnVisible: any;
		columnGroupOpened: any;
		columnResized: any;
		columnPinnedCountChanged: any;
		virtualPaging: boolean;
		toolPanelSuppressPivot: boolean;
		toolPanelSuppressValues: boolean;
		rowsAlreadyGrouped: boolean;
		suppressRowClickSelection: boolean;
		suppressCellSelection: boolean;
		sortingOrder: string[];
		suppressMultiSort: boolean;
		suppressHorizontalScroll: boolean;
		unSortIcon: boolean;
		rowHeight: number;
		rowBuffer: number;
		enableColResize: boolean;
		enableCellExpressions: boolean;
		enableSorting: boolean;
		enableServerSideSorting: boolean;
		enableFilter: boolean;
		enableServerSideFilter: boolean;
		colWidth: number;
		suppressMenuHide: boolean;
		debug: boolean;
		icons: any;
		angularCompileRows: boolean;
		angularCompileFilters: boolean;
		angularCompileHeaders: boolean;
		localeText: any;
		localeTextFunc: Function;
		groupSuppressAutoColumn: boolean;
		groupSelectsChildren: boolean;
		groupHidePivotColumns: boolean;
		groupIncludeFooter: boolean;
		groupUseEntireRow: boolean;
		groupSuppressRow: boolean;
		groupSuppressBlankHeader: boolean;
		groupColumnDef: any;
		forPrint: boolean;
		context: any;
		rowStyle: any;
		rowClass: any;
		headerCellRenderer: any;
		groupDefaultExpanded: any;
		slaveGrids: GridOptions[];
		rowSelection: string;
		rowDeselection: boolean;
		rowData: any[];
		floatingTopRowData: any[];
		floatingBottomRowData: any[];
		showToolPanel: boolean;
		groupKeys: string[];
		groupAggFunction: (nodes: any[]) => void;
		groupAggFields: string[];
		columnDefs: any[];
		datasource: any;
		pinnedColumnCount: number;
		quickFilterText: string;
		groupHeaders: boolean;
		headerHeight: number;
		constructor(elementDef: any): this;
		onInit(): void;
		onChange(changes: any): void
	}

	
}

declare module 'vdom' {
				declare class VElement  {
		idSequence: number;
		constructor(): this;
		getId(): number;
		addElementAttachedListener(listener: (element: Element) => void): void;
		fireElementAttached(element: Element): void;
		elementAttached(element: Element): void;
		toHtmlString(): string
	}

	declare class VHtmlElement extends VElement {
		constructor(type: string): this;
		getElement(): HTMLElement;
		setInnerHtml(innerHtml: string): void;
		addStyles(styles: any): void;
		addClass(newClass: string): void;
		removeClass(oldClass: string): void;
		addClasses(classes: string[]): void;
		toHtmlString(): string;
		appendChild(child: any): void;
		setAttribute(key: string, value: string): void;
		addEventListener(event: string, listener: EventListener): void;
		elementAttached(element: Element): void;
		fireElementAttachedToChildren(element: Element): void
	}

	declare class VWrapperElement extends VElement {
		constructor(wrappedElement: Element): this;
		toHtmlString(): string;
		elementAttached(element: Element): void
	}

	
}