

declare module 'SlickGrid' {
		declare interface DOMEvent {
		
	}

			
}

declare module 'npm$namespace$Slick' {
		declare export interface Column<T> {
		asyncPostRender?: (cellNode: any, row: any, dataContext: any, colDef: any) => void,
		behavior?: any,
		cannotTriggerInsert?: boolean,
		cssClass?: string,
		defaultSortAsc?: boolean,
		editor?: any,
		field?: string,
		focusable?: boolean,
		formatter?: Formatter<T>,
		headerCssClass?: string,
		id?: string,
		maxWidth?: number,
		minWidth?: number,
		name?: string,
		rerenderOnResize?: boolean,
		resizable?: boolean,
		selectable?: boolean,
		sortable?: boolean,
		toolTip?: string,
		width?: number
	}

	declare export interface EditorFactory {
		getEditor<T>(column: Column<T>): Editors.Editor<T>
	}

	declare export interface FormatterFactory<T> {
		getFormatter(column: Column<T>): Formatter<any>
	}

	declare export interface GridOptions<T> {
		asyncEditorLoading?: boolean,
		asyncEditorLoadDelay?: number,
		asyncPostRenderDelay?: number,
		autoEdit?: boolean,
		autoHeight?: boolean,
		cellFlashingCssClass?: string,
		cellHighlightCssClass?: string,
		dataItemColumnValueExtractor?: any,
		defaultColumnWidth?: number,
		defaultFormatter?: Formatter<T>,
		editable?: boolean,
		editCommandHandler?: any,
		editorFactory?: EditorFactory,
		editorLock?: EditorLock<T>,
		enableAddRow?: boolean,
		enableAsyncPostRender?: boolean,
		enableCellRangeSelection?: any,
		enableCellNavigation?: boolean,
		enableColumnReorder?: boolean,
		enableRowReordering?: any,
		enableTextSelectionOnCells?: boolean,
		explicitInitialization?: boolean,
		forceFitColumns?: boolean,
		forceSyncScrolling?: boolean,
		formatterFactory?: FormatterFactory<T>,
		fullWidthRows?: boolean,
		headerRowHeight?: number,
		leaveSpaceForNewRows?: boolean,
		multiColumnSort?: boolean,
		multiSelect?: boolean,
		rowHeight?: number,
		selectedCellCssClass?: string,
		showHeaderRow?: boolean,
		syncColumnCellResize?: boolean,
		topPanelHeight?: number
	}

	declare export interface DataProvider<T> {
		getLength(): number,
		getItem(index: number): T,
		getItemMetadata(index: number): RowMetadata<T>
	}

	declare export interface SlickData {
		
	}

	declare export interface RowMetadata<T> {
		cssClasses?: string,
		focusable?: boolean,
		selectable?: boolean,
		columns?: {
		[index: string]: ColumnMetadata<T>,
		[index: number]: ColumnMetadata<T>
	}
	}

	declare export interface ColumnMetadata<T> {
		focusable?: boolean,
		selectable?: boolean,
		formatter?: Formatter<T>,
		editor?: Slick.Editors.Editor<T>,
		colspan?: number | string
	}

	declare export interface GridEventArgs<T> {
		grid: Grid<T>
	}

	declare export interface OnCellCssStylesChangedEventArgs<T> {
		key: string,
		hash: CellCssStylesHash
	}

	declare export interface OnSelectedRowsChangedEventArgs<T> {
		rows: number[]
	}

	declare export interface OnDragEndEventArgs<T> {
		
	}

	declare export interface OnDragEventArgs<T> {
		
	}

	declare export interface OnDragStartEventArgs<T> {
		
	}

	declare export interface OnDragInitEventArgs<T> {
		
	}

	declare export interface OnActiveCellPositionChangedEventArgs<T> {
		
	}

	declare export interface OnActiveCellChangedEventArgs<T> {
		row: number,
		cell: number
	}

	declare export interface OnBeforeDestroyEventArgs<T> {
		
	}

	declare export interface OnBeforeCellEditorDestroyEventArgs<T> {
		editor: Editors.Editor<T>
	}

	declare export interface OnBeforeEditCellEventArgs<T> {
		row: number,
		cell: number,
		item: T,
		column: Column<T>
	}

	declare export interface OnCellChangeEventArgs<T> {
		row: number,
		cell: number,
		item: T
	}

	declare export interface OnColumnsResizedEventArgs<T> {
		
	}

	declare export interface OnColumnsReorderedEventArgs<T> {
		
	}

	declare export interface OnValidationErrorEventArgs<T> {
		editor: Editors.Editor<T>,
		cellNode: HTMLElement,
		validationResults: ValidateResults,
		row: number,
		cell: number,
		column: Column<T>
	}

	declare export interface OnAddNewRowEventArgs<T> {
		item: T,
		column: Column<T>
	}

	declare export interface OnKeyDownEventArgs<T> {
		row: number,
		cell: number
	}

	declare export interface OnContextMenuEventArgs<T> {
		
	}

	declare export interface OnDblClickEventArgs<T> {
		row: number,
		cell: number
	}

	declare export interface OnClickEventArgs<T> {
		row: number,
		cell: number
	}

	declare export interface OnMouseLeaveEventArgs<T> {
		
	}

	declare export interface OnMouseEnterEventArgs<T> {
		
	}

	declare export interface OnBeforeHeaderRowCellDestroyEventArgs<T> {
		node: HTMLElement,
		column: Column<T>
	}

	declare export interface OnHeaderRowCellRenderedEventArgs<T> {
		node: HTMLElement,
		column: Column<T>
	}

	declare export interface OnBeforeHeaderCellDestroyEventArgs<T> {
		node: HTMLElement,
		column: Column<T>
	}

	declare export interface OnHeaderCellRenderedEventArgs<T> {
		node: HTMLElement,
		column: Column<T>
	}

	declare export interface OnHeaderClickEventArgs<T> {
		column: Column<T>
	}

	declare export interface OnHeaderContextMenuEventArgs<T> {
		column: Column<T>
	}

	declare export interface OnHeaderMouseEventArgs<T> {
		column: Column<T>
	}

	declare export interface OnSortEventArgs<T> {
		multiColumnSort: boolean,
		sortCol?: Column<T>,
		sortAsc: boolean,
		sortCols?: SortColumn<T>[]
	}

	declare export interface OnScrollEventArgs<T> {
		scrollLeft: number,
		scrollTop: number
	}

	declare export interface OnViewportChangedEventArgs<T> {
		
	}

	declare export interface SortColumn<T> {
		sortCol: Column<T>,
		sortAsc: boolean
	}

	declare export interface Cell {
		row: number,
		cell: number
	}

	declare export interface CellPosition {
		bottom: number,
		height: number,
		right: number,
		visible: boolean,
		width: number
	}

	declare export interface Position {
		top: number,
		left: number
	}

	declare export interface CellCssStylesHash {
		[index: number]: {
		[id: string]: string
	}
	}

	declare export interface Viewport {
		top: number,
		bottom: number,
		leftPx: number,
		rightPx: number
	}

	declare export interface ValidateResults {
		valid: boolean,
		msg: string
	}

	declare export interface Formatter<T> {
		(row: number, cell: number, value: any, columnDef: Column<T>, dataContext: SlickData): string
	}

	declare export interface PluginOptions {
		
	}

		declare export class EventData  {
		constructor(): this;
		stopPropagation(): void;
		isPropagationStopped(): boolean;
		stopImmediatePropagation(): void;
		isImmediatePropagationStopped(): boolean
	}

	declare export class Event<T>  {
		constructor(): this;
		subscribe(fn: (e: EventData, data: T) => any): void;
		subscribe(fn: (e: DOMEvent, data: T) => any): void;
		unsubscribe(fn: (e: EventData, data: T) => any): void;
		unsubscribe(fn: (e: DOMEvent, data: T) => any): void;
		notify(args?: T, e?: EventData, scope?: any): any;
		notify(args?: T, e?: DOMEvent, scope?: any): any
	}

	declare export class EventHandler  {
		constructor(): this;
		subscribe(event: EventData, handler: Function): EventHandler;
		unsubscribe(event: EventData, handler: Function): EventHandler;
		unsubscribeAll(): EventHandler
	}

	declare export class Range  {
		constructor(fromRow: number, fromCell: number, toRow?: number, toCell?: number): this;
		fromRow: number;
		fromCell: number;
		toRow: number;
		toCell: number;
		isSingleRow(): boolean;
		isSingleCell(): boolean;
		contains(row: number, cell: number): boolean;
		toString(): string
	}

	declare export class NonDataRow  {
		
	}

	declare export class Group<T> extends NonDataRow {
		constructor(): this;
		level: number;
		count: number;
		value: any;
		title: string;
		collapsed: boolean;
		totals: GroupTotals<T>;
		rows: T[];
		groups: Group<T>[];
		groupingKey: any;
		equals(group: Group<T>): boolean
	}

	declare export class GroupTotals<T> extends NonDataRow {
		constructor(): this;
		group: Group<T>
	}

	declare export class EditorLock<T>  {
		constructor(): this;
		isActive(editController: Editors.Editor<T>): boolean;
		activate(editController: Editors.Editor<T>): void;
		deactivate(editController: Editors.Editor<T>): void;
		commitCurrentEdit(): boolean;
		cancelCurrentEdit(): boolean
	}

	declare export class SelectionModel<T, E>  {
		init(grid: Grid<T>): void;
		destroy(): void;
		onSelectedRangesChanged: Slick.Event<E>
	}

	declare export class Grid<T>  {
		constructor(container: string | HTMLElement | JQuery, data: T[] | DataProvider<T>, columns: Column<T>[], options: GridOptions<T>): this;
		init(): void;
		destroy(): void;
		getData(): any;
		getDataItem(index: number): T;
		setData(newData: T[], scrollToTop: boolean): void;
		setData(newData: DataProvider<T>, scrollToTop: boolean): void;
		getDataLength(): number;
		getOptions(): GridOptions<any>;
		getSelectedRows(): number[];
		getSelectionModel(): SelectionModel<any, any>;
		setOptions(options: GridOptions<T>): void;
		setSelectedRows(rowsArray: number[]): void;
		setSelectionModel(selectionModel: SelectionModel<T, any>): void;
		autosizeColumns(): void;
		getColumnIndex(id: string): number;
		getColumns(): Column<T>[];
		setColumns(columnDefinitions: Column<T>[]): void;
		setSortColumn(columnId: string, ascending: boolean): void;
		setSortColumns(cols: {
		columnId: string,
		sortAsc: boolean
	}[]): void;
		getSortColumns(): {
		columnId: string,
		sortAsc: boolean
	}[];
		updateColumnHeader(columnId: string, title?: string, toolTip?: string): void;
		addCellCssStyles(key: string, hash: CellCssStylesHash): void;
		canCellBeActive(row: number, col: number): boolean;
		canCellBeSelected(row: number, col: number): boolean;
		editActiveCell(editor: Editors.Editor<T>): void;
		flashCell(row: number, cell: number, speed?: number): void;
		getActiveCell(): Cell;
		getActiveCellNode(): HTMLElement;
		getActiveCellPosition(): CellPosition;
		getCellCssStyles(key: string): CellCssStylesHash;
		getCellEditor(): Editors.Editor<any>;
		getCellFromEvent(e: DOMEvent): Cell;
		getCellFromPoint(x: number, y: number): Cell;
		getCellNode(row: number, cell: number): HTMLElement;
		getCellNodeBox(row: number, cell: number): CellPosition;
		gotoCell(row: number, cell: number, forceEdit?: boolean): void;
		getTopPanel(): HTMLElement;
		setTopPanelVisibility(visible: boolean): void;
		setHeaderRowVisibility(visible: boolean): void;
		getHeaderRow(): HTMLElement;
		getHeaderRowColumn(columnId: string): Column<any>;
		getGridPosition(): CellPosition;
		navigateDown(): boolean;
		navigateLeft(): boolean;
		navigateNext(): boolean;
		navigatePrev(): boolean;
		navigateRight(): boolean;
		navigateUp(): boolean;
		removeCellCssStyles(key: string): void;
		resetActiveCell(): void;
		setActiveCell(row: number, cell: number): void;
		setCellCssStyles(key: string, hash: CellCssStylesHash): void;
		onScroll: Slick.Event<OnScrollEventArgs<T>>;
		onSort: Slick.Event<OnSortEventArgs<T>>;
		onHeaderMouseEnter: Slick.Event<OnHeaderMouseEventArgs<T>>;
		onHeaderMouseLeave: Slick.Event<OnHeaderMouseEventArgs<T>>;
		onHeaderContextMenu: Slick.Event<OnHeaderContextMenuEventArgs<T>>;
		onHeaderClick: Slick.Event<OnHeaderClickEventArgs<T>>;
		onHeaderCellRendered: Slick.Event<OnHeaderCellRenderedEventArgs<T>>;
		onBeforeHeaderCellDestroy: Slick.Event<OnBeforeHeaderCellDestroyEventArgs<T>>;
		onHeaderRowCellRendered: Slick.Event<OnHeaderRowCellRenderedEventArgs<T>>;
		onBeforeHeaderRowCellDestroy: Slick.Event<OnBeforeHeaderRowCellDestroyEventArgs<T>>;
		onMouseEnter: Slick.Event<OnMouseEnterEventArgs<T>>;
		onMouseLeave: Slick.Event<OnMouseLeaveEventArgs<T>>;
		onClick: Slick.Event<OnClickEventArgs<T>>;
		onDblClick: Slick.Event<OnDblClickEventArgs<T>>;
		onContextMenu: Slick.Event<OnContextMenuEventArgs<T>>;
		onKeyDown: Slick.Event<OnKeyDownEventArgs<T>>;
		onAddNewRow: Slick.Event<OnAddNewRowEventArgs<T>>;
		onValidationError: Slick.Event<OnValidationErrorEventArgs<T>>;
		onColumnsReordered: Slick.Event<OnColumnsReorderedEventArgs<T>>;
		onColumnsResized: Slick.Event<OnColumnsResizedEventArgs<T>>;
		onCellChange: Slick.Event<OnCellChangeEventArgs<T>>;
		onBeforeEditCell: Slick.Event<OnBeforeEditCellEventArgs<T>>;
		onBeforeCellEditorDestroy: Slick.Event<OnBeforeCellEditorDestroyEventArgs<T>>;
		onBeforeDestroy: Slick.Event<OnBeforeDestroyEventArgs<T>>;
		onActiveCellChanged: Slick.Event<OnActiveCellChangedEventArgs<T>>;
		onActiveCellPositionChanged: Slick.Event<OnActiveCellPositionChangedEventArgs<T>>;
		onDragInit: Slick.Event<OnDragInitEventArgs<T>>;
		onDragStart: Slick.Event<OnDragStartEventArgs<T>>;
		onDrag: Slick.Event<OnDragEventArgs<T>>;
		onDragEnd: Slick.Event<OnDragEndEventArgs<T>>;
		onSelectedRowsChanged: Slick.Event<OnSelectedRowsChangedEventArgs<T>>;
		onCellCssStylesChanged: Slick.Event<OnCellCssStylesChangedEventArgs<T>>;
		onViewportChanged: Slick.Event<OnViewportChangedEventArgs<T>>;
		registerPlugin(plugin: Plugin<T>): void;
		unregisterPlugin(plugin: Plugin<T>): void;
		render(): void;
		invalidate(): void;
		invalidateRow(row: number): void;
		invalidateRows(rows: number[]): void;
		invalidateAllRows(): void;
		updateCell(row: number, cell: number): void;
		updateRow(row: number): void;
		getViewport(viewportTop?: number, viewportLeft?: number): Viewport;
		getRenderedRange(viewportTop?: number, viewportLeft?: number): Viewport;
		resizeCanvas(): void;
		updateRowCount(): void;
		scrollRowIntoView(row: number, doPaging: boolean): void;
		scrollRowToTop(row: number): void;
		scrollCellIntoView(row: number, cell: number, doPaging: boolean): void;
		getCanvasNode(): HTMLCanvasElement;
		focus(): void;
		getEditorLock(): EditorLock<any>;
		getEditController(): {
		commitCurrentEdit(): boolean,
		cancelCurrentEdit(): boolean
	}
	}

	declare export class Plugin<T>  {
		constructor(options?: PluginOptions): this;
		init(grid: Grid<T>): void;
		destroy(): void
	}

	
}

declare module 'Editors' {
		declare export interface EditorOptions<T> {
		column: Column<T>,
		container: HTMLElement,
		grid: Grid<T>
	}

		declare export class Editor<T>  {
		constructor(args: EditorOptions<T>): this;
		init(): void;
		destroy(): void;
		focus(): void;
		loadValue(item: any): void;
		applyValue(item: any, state: string): void;
		isValueChanged(): boolean;
		serializeValue(): any;
		validate(): ValidateResults
	}

	declare export class Text<T> extends Editor<T> {
		constructor(args: EditorOptions<T>): this;
		getValue(): string;
		setValue(val: string): void;
		serializeValue(): string
	}

	declare export class Integer<T> extends Editor<T> {
		constructor(args: EditorOptions<T>): this;
		serializeValue(): number
	}

	declare export class Date<T> extends Editor<T> {
		constructor(args: EditorOptions<T>): this;
		show(): void;
		hide(): void;
		position(position: Position): void;
		serializeValue(): string
	}

	declare export class YesNoSelect<T> extends Editor<T> {
		constructor(args: EditorOptions<T>): this;
		serializeValue(): boolean
	}

	declare export class Checkbox<T> extends Editor<T> {
		constructor(args: EditorOptions<T>): this;
		serializeValue(): boolean
	}

	declare export class PercentComplete<T> extends Editor<T> {
		constructor(args: EditorOptions<T>): this;
		serializeValue(): number
	}

	declare export class LongText<T> extends Editor<T> {
		constructor(args: EditorOptions<T>): this;
		handleKeyDown(e: DOMEvent): void;
		save(): void;
		cancel(): void;
		hide(): void;
		show(): void;
		position(position: Position): void;
		serializeValue(): string
	}

	
}

declare module 'Formatters' {
					
}

declare module 'Data' {
		declare export interface DataViewOptions<T> {
		groupItemMetadataProvider?: GroupItemMetadataProvider<T>,
		inlineFilters?: boolean
	}

	declare export interface GroupingOptions<T> {
		getter?: ((item?: T) => any) | string,
		formatter?: (item?: T) => string,
		comparer?: (a: Group<T>, b: Group<T>) => number,
		predefinedValues?: any[],
		aggregators?: Aggregators.Aggregator<T>[],
		aggregateEmpty?: boolean,
		aggregateCollapsed?: boolean,
		aggregateChildGroups?: boolean,
		collapsed?: boolean,
		displayTotalsRow?: boolean
	}

	declare export interface PagingOptions {
		pageSize?: number,
		pageNum?: number,
		totalRows?: number,
		totalPages?: number
	}

	declare export interface RefreshHints {
		isFilterNarrowing?: boolean,
		isFilterExpanding?: boolean,
		isFilterUnchanged?: boolean,
		ignoreDiffsBefore?: boolean,
		ignoreDiffsAfter?: boolean
	}

	declare export interface OnRowCountChangedEventData {
		
	}

	declare export interface OnRowsChangedEventData {
		rows: number[]
	}

	declare export interface OnPagingInfoChangedEventData {
		
	}

	declare export interface GroupItemMetadataProviderOptions {
		groupCssClass?: string,
		groupTitleCssClass?: string,
		totalsCssClass?: string,
		groupFocusable?: boolean,
		totalsFocusable?: boolean,
		toggleCssClass?: string,
		toggleExpandedCssCass?: string,
		toggleCollapsedCssClass?: string,
		enableExpandCollapse?: boolean
	}

		declare export class DataView<T> extends DataProvider<T> {
		constructor(options?: DataViewOptions<T>): this;
		beginUpdate(): void;
		endUpdate(): void;
		setPagingOptions(args: PagingOptions): void;
		getPagingInfo(): PagingOptions;
		getItems(): T[];
		setItems(data: T[], objectIdProperty?: string): void;
		setFilter(filterFn: (item: T, args: any) => boolean): void;
		sort(comparer: Function, ascending: boolean): void;
		fastSort(field: string, ascending: boolean): void;
		fastSort(field: Function, ascending: boolean): void;
		reSort(): void;
		setGrouping(groupingInfos: GroupingOptions<T> | GroupingOptions<T>[]): void;
		getGrouping(): GroupingOptions<T>[];
		groupBy(valueGetter: any, valueFormatter: any, sortComparer: any): void;
		setAggregators(groupAggregators: any, includeCollapsed: any): void;
		collapseAllGroups(level?: number): void;
		expandAllGroups(level?: number): void;
		collapseGroup(...varArgs: string[]): void;
		expandGroup(...varArgs: string[]): void;
		getGroups(): Group<T>[];
		getIdxById(id: string): number;
		getRowById(id: string): number;
		getItemById(id: any): T;
		getItemByIdx(idx: number): T;
		mapRowsToIds(rowArray: T[]): string[];
		setRefreshHints(hints: RefreshHints): void;
		setFilterArgs(args: any): void;
		refresh(): void;
		updateItem(id: string, item: T): void;
		insertItem(insertBefore: number, item: T): void;
		addItem(item: T): void;
		deleteItem(id: string): void;
		syncGridSelection(grid: Grid<T>, preserveHidden: boolean): void;
		syncGridCellCssStyles(grid: Grid<T>, key: string): void;
		getLength(): number;
		getItem(index: number): T;
		getItemMetadata(index: number): RowMetadata<T>;
		onRowCountChanged: Slick.Event<OnRowCountChangedEventData>;
		onRowsChanged: Slick.Event<OnRowsChangedEventData>;
		onPagingInfoChanged: Slick.Event<OnPagingInfoChangedEventData>
	}

	declare export class GroupItemMetadataProvider<T>  {
		init(): void;
		destroy(): void;
		getGroupRowMetadata(item?: Group<T>): RowMetadata<T>;
		getTotalsRowMetadata(item?: GroupTotals<T>): RowMetadata<T>
	}

	
}

declare module 'Aggregators' {
				declare export class Aggregator<T>  {
		field: string;
		init(): void;
		accumulate(item: T): void;
		storeResult(groupTotals: GroupTotals<T>): void
	}

	declare export class Avg<T> extends Aggregator<T> {
		
	}

	declare export class Min<T> extends Aggregator<T> {
		
	}

	declare export class Max<T> extends Aggregator<T> {
		
	}

	declare export class Sum<T> extends Aggregator<T> {
		
	}

	
}