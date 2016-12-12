

declare module 'ui-grid' {
					
}

declare module 'npm$namespace$uiGrid' {
	declare export type IGridInstance = IGridInstanceOf<any>;

	declare export type IGridOptions = IGridOptionsOf<any>;

	declare export type IGridApi = IGridApiOf<any>;

	declare export type IGridRow = IGridRowOf<any>;

	declare export type IGridColumn = IGridColumnOf<any>;

	declare export type IColumnDef = IColumnDefOf<any>;

	declare export interface IUiGridConstants {
		LOG_DEBUG_MESSAGES: boolean,
		LOG_WARN_MESSAGES: boolean,
		LOG_ERROR_MESSAGES: boolean,
		CUSTOM_FILTERS: RegExp,
		COL_FIELD: RegExp,
		MODEL_COL_FIELD: RegExp,
		TOOLTIP: RegExp,
		DISPLAY_CELL_TEMPLATE: RegExp,
		TEMPLATE_REGEXP: RegExp,
		FUNC_REGEXP: RegExp,
		DOT_REGEXP: RegExp,
		APOS_REGEXP: RegExp,
		BRACKET_REGEXP: RegExp,
		COL_CLASS_PREFIX: string,
		events: {
		GRID_SCROLL: string,
		COLUMN_MENU_SHOWN: string,
		ITEM_DRAGGING: string,
		COLUMN_HEADER_CLICK: string
	},
		keymap: {
		TAB: number,
		STRG: number,
		CAPSLOCK: number,
		CTRL: number,
		CTRLRIGHT: number,
		CTRLR: number,
		SHIFT: number,
		RETURN: number,
		ENTER: number,
		BACKSPACE: number,
		BCKSP: number,
		ALT: number,
		ALTR: number,
		ALTRIGHT: number,
		SPACE: number,
		WIN: number,
		MAC: number,
		FN: number,
		PG_UP: number,
		PG_DOWN: number,
		UP: number,
		DOWN: number,
		LEFT: number,
		RIGHT: number,
		ESC: number,
		DEL: number,
		F1: number,
		F2: number,
		F3: number,
		F4: number,
		F5: number,
		F6: number,
		F7: number,
		F8: number,
		F9: number,
		F10: number,
		F11: number,
		F12: number
	},
		ASC: string,
		DESC: string,
		filter: {
		STARTS_WITH: number,
		ENDS_WITH: number,
		EXACT: number,
		CONTAINS: number,
		GREATER_THAN: number,
		GREATER_THAN_OR_EQUAL: number,
		LESS_THAN: number,
		LESS_THAN_OR_EQUAL: number,
		NOT_EQUAL: number,
		SELECT: string,
		INPUT: string
	},
		scrollDirection: {
		UP: string,
		DOWN: string,
		LEFT: string,
		RIGHT: string,
		NONE: string
	},
		aggregationTypes: {
		sum: number,
		count: number,
		avg: number,
		min: number,
		max: number
	},
		CURRENCY_SYMBOLS: Array<string>,
		dataChange: {
		ALL: string,
		EDIT: string,
		ROW: string,
		COLUMN: string,
		OPTIONS: string
	},
		scrollbars: {
		NEVER: number,
		ALWAYS: number
	}
	}

	declare export interface IGridInstanceOf<TEntity> {
		addRowHeaderColumn(colDef: IColumnDefOf<TEntity>): void,
		assignTypes(): void,
		buildColumnDefsFromData(rowBuilder: IRowBuilder<TEntity>): void,
		buildColumns(options: IBuildColumnsOptions): ng.IPromise<any>,
		buildStyles(): void,
		callDataChangeCallbacks(type: number): void,
		clearAllFilters(
		refreshRows: boolean, clearConditions: boolean, clearFlags: boolean
	): ng.IPromise<any>,
		columnRefreshCallback(name: string): void,
		createLeftContainer(): void,
		createRightContainer(): void,
		flagScrollingHorizontally(): void,
		flagScrollingVertically(): void,
		getCellDisplayValue(row: IGridRowOf<TEntity>, col: IGridColumnOf<TEntity>): string,
		getCellValue(row: IGridRowOf<TEntity>, col: IGridColumnOf<TEntity>): any,
		getColDef(name: string): IColumnDefOf<TEntity>,
		getColumn(name: string): IGridColumnOf<TEntity>,
		getColumnSorting(): Array<IGridColumnOf<TEntity>>,
		getGridQualifiedColField(col: IGridColumnOf<TEntity>): string,
		getOnlyDataColumns(): Array<IGridColumnOf<TEntity>>,
		getRow(rowEntity: TEntity, rows?: Array<IGridRowOf<TEntity>>): IGridRowOf<TEntity>,
		handleWindowResize($event: ng.IAngularEvent): void,
		hasLeftContainer(): boolean,
		hasRightContainer(): boolean,
		hasLeftContainerColumns(): boolean,
		hasRightContainerColumns(): boolean,
		isRTL(): boolean,
		isRowHeaderColumn(column: IGridColumnOf<TEntity>): boolean,
		modifyRows(newRawData: Array<TEntity>): ng.IPromise<any>,
		notifyDataChange(type: string): void,
		precompileCellTemplates(): void,
		processRowBuilders(gridRow: IGridRowOf<TEntity>): IGridRowOf<TEntity>,
		processRowsCallback(name: string): void,
		queueGridRefresh(): void,
		queueRefresh(): void,
		redrawCanvas(rowsAdded?: boolean): void,
		refresh(rowsAltered?: boolean): void,
		refreshCanvas(buildStyles?: boolean): ng.IPromise<any>,
		refreshRows(): ng.IPromise<any>,
		registerColumnBuilder(columnBuilder: IColumnBuilder<TEntity>): void,
		registerColumnsProcessor(columnProcessor: IColumnProcessor<TEntity>, priority: number): void,
		registerDataChangeCallback(
		callback: (grid: IGridInstanceOf<TEntity>) => void, types?: Array<string>
	): Function,
		registerRowBuilder(rowBuilder: IRowBuilder<TEntity>): void,
		registerRowsProcessor(rowProcessor: IRowProcessor<TEntity>, priority: number): void,
		registerStyleComputation(styleComputation: ($scope: ng.IScope) => string): void,
		removeRowsProcessor(rows: IRowProcessor<TEntity>): void,
		resetColumnSorting(excludedColumn: IGridColumnOf<TEntity>): void,
		scrollTo(rowEntity?: TEntity, colDef?: IColumnDefOf<TEntity>): ng.IPromise<any>,
		scrollToIfNecessary(
		gridRow: IGridRowOf<TEntity>, gridCol: IGridColumnOf<TEntity>
	): ng.IPromise<any>,
		sortColumn(
		column: IGridColumnOf<TEntity>, direction?: string, add?: boolean
	): ng.IPromise<IGridColumnOf<TEntity>>,
		updateCanvasHeight(): void,
		updateFooterHeightCallback(name: string): void,
		appScope?: ng.IScope,
		columns: Array<IGridColumn>,
		columnFooterHeight?: number,
		footerHeight?: number,
		gridHeight?: number,
		isScrollingHorizontally?: boolean,
		isScrollingVertically?: boolean,
		scrollDirection?: number
	}

	declare export interface IBuildColumnsOptions {
		orderByColumnDefs?: boolean
	}

	declare export interface IStyleComputation {
		($scope: ng.IScope): string
	}

	declare export interface IColumnBuilder<TEntity> {
		(colDef: IColumnDefOf<TEntity>, col: IGridColumnOf<TEntity>, gridOptions: IGridOptionsOf<TEntity>): void
	}

	declare export interface IRowBuilder<TEntity> {
		(row: IGridRowOf<TEntity>, gridOptions: IGridOptionsOf<TEntity>): void
	}

	declare export interface IRowProcessor<TEntity> {
		(renderedRowsToProcess: Array<IGridRowOf<TEntity>>, columns: Array<IGridColumnOf<TEntity>>): Array<IGridRowOf<TEntity>>
	}

	declare export interface IColumnProcessor<TEntity> {
		(renderedColumnsToProcess: Array<IGridColumnOf<TEntity>>, rows: Array<IGridRowOf<TEntity>>): Array<IGridColumnOf<TEntity>>
	}

	declare export interface IGridOptionsOf<TEntity> {
		aggregationCalcThrottle?: number,
		appScopeProvider?: ng.IScope | Object,
		columnDefs?: Array<IColumnDefOf<TEntity>>,
		columnFooterHeight?: number,
		columnVirtualizationThreshold?: number,
		data?: Array<TEntity> | string,
		enableColumnMenus?: boolean,
		enableFiltering?: boolean,
		enableGridMenu?: boolean,
		enableHorizontalScrollbar?: boolean | number,
		enableMinHeightCheck?: boolean,
		enableRowHashing?: boolean,
		enableSorting?: boolean,
		enableVerticalScrollbar?: boolean | number,
		excessColumns?: number,
		excessRows?: number,
		excludeProperties?: Array<string>,
		flatEntityAccess?: boolean,
		footerTemplate?: string,
		gridFooterTemplate?: string,
		headerTemplate?: string,
		horizontalScrollThreshold?: number,
		infiniteScrollRowsFromEnd?: number,
		infiniteScrollUp?: boolean,
		infiniteScrollDown?: boolean,
		maxVisibleColumnCount?: number,
		minRowsToShow?: number,
		minimumColumnSize?: number,
		onRegisterApi?: (gridApi: IGridApiOf<TEntity>) => void,
		rowHeight?: number,
		rowTemplate?: string,
		scrollDebounce?: number,
		scrollThreshold?: number,
		showColumnFooter?: boolean,
		showGridFooter?: boolean,
		showHeader?: boolean,
		virtualizationThreshold?: number,
		useExternalFiltering?: boolean,
		useExternalSorting?: boolean,
		wheelScrollThrottle?: number,
		getRowIdentity(row: IGridRowOf<TEntity>): any,
		rowEquality(entityA: TEntity, entityB: TEntity): boolean,
		rowIdentity(row: IGridRowOf<TEntity>): any
	}

	declare export interface IGridCoreApi<TEntity> {
		addRowHeaderColumn(column: IColumnDefOf<TEntity>): void,
		addToGridMenu(grid: IGridInstanceOf<TEntity>, items: Array<IMenuItem>): void,
		clearAllFilters(
		refreshRows?: boolean, clearConditions?: boolean, clearFlags?: boolean
	): ng.IPromise<Array<IGridRowOf<TEntity>>>,
		clearRowInvisible(rowEntity: TEntity): void,
		getVisibleRows(grid: IGridInstanceOf<TEntity>): Array<IGridRowOf<TEntity>>,
		handleWindowResize(): void,
		notifyDataChange(type: string): void,
		refresh(rowsAltered?: boolean): ng.IPromise<any>,
		refreshRows(): ng.IPromise<boolean>,
		registerColumnsProcessor(processorFunction: IColumnProcessor<TEntity>, priority: number): void,
		registerRowsProcessor(rowProcessor: IRowProcessor<TEntity>, priority: number): void,
		scrollTo(entity: TEntity, colDef: IColumnDefOf<TEntity>): void,
		scrollToIfNecessary(gridRow: IGridRowOf<TEntity>, gridCol: IGridColumnOf<TEntity>): void,
		sortHandleNulls(a: any, b: any): number,
		queueGridRefresh(): void,
		queueRefresh(): void,
		on: {
		canvasHeightChanged: (scope: ng.IScope, handler: canvasHeightChangedHandler) => void,
		columnVisibilityChanged: (scope: ng.IScope, callBack: columnVisibilityChangedHandler<TEntity>) => void,
		filterChanged: (scope: ng.IScope, handler: filterChangedHandler<TEntity>) => void,
		rowsRendered: (scope: ng.IScope, handler: rowsRenderedHandler<TEntity>) => void,
		rowsVisibleChanged: (scope: ng.IScope, handler: rowsVisibleChangedHandler<TEntity>) => void,
		scrollBegin: (scope: ng.IScope, handler: scrollBeginHandler) => void,
		scrollEnd: (scope: ng.IScope, handler: scrollEndHandler) => void,
		sortChanged: (scope: ng.IScope, handler: sortChangedHandler<TEntity>) => void
	}
	}

	declare export interface columnVisibilityChangedHandler<TEntity> {
		(column: IGridColumnOf<TEntity>): void
	}

	declare export interface canvasHeightChangedHandler {
		(oldHeight: number, newHeight: number): void
	}

	declare export interface filterChangedHandler<TEntity> {
		(gridApi: IGridApiOf<TEntity>): void
	}

	declare export interface rowsRenderedHandler<TEntity> {
		(gridApi: IGridApiOf<TEntity>): void
	}

	declare export interface rowsVisibleChangedHandler<TEntity> {
		(gridApi: IGridApiOf<TEntity>): void
	}

	declare export interface scrollBeginHandler {
		(scrollEvent: JQueryMouseEventObject): void
	}

	declare export interface scrollEndHandler {
		(scrollEvent: JQueryMouseEventObject): void
	}

	declare export interface sortChangedHandler<TEntity> {
		(grid: IGridInstanceOf<TEntity>, columns: Array<IGridColumnOf<TEntity>>): void
	}

	declare export interface ISharedTreeConstants {
		rowHeaderColName: string,
		EXPANDED: string,
		COLLAPSED: string,
		aggregation: {
		COUNT: string,
		SUM: string,
		MAX: string,
		MIN: string,
		AVG: string
	}
	}

	declare export interface IGridApiConstructor<TEntity> {
		new (grid: IGridInstanceOf<TEntity>): IGridApiOf<TEntity>
	}

	declare export interface IGridApiOf<TEntity> {
		registerEvent(featureName: string, eventName: string): void,
		registerEventsFromObject(eventObjectMap: any): void,
		registerMethod(
		featureName: string, methodName: string, callBackFn: Function, _this: any
	): void,
		registerMethodsFromObject(eventObjectMap: any, _this: any): void,
		suppressEvents(listenerFuncs: Function | Array<Function>, callBackFn: Function): void,
		core: IGridCoreApi<TEntity>,
		cellNav: cellNav.ICellNavApi<TEntity>,
		colMovable: moveColumns.IGridMoveColumnsApi,
		colResizable: resizeColumns.IGridResizeColumnsApi,
		edit: edit.IGridEditApi<TEntity>,
		expandable: expandable.IGridExpandableApi<TEntity>,
		exporter: exporter.IGridExporterApi,
		grouping: grouping.IGridGroupingApi<TEntity>,
		importer: importer.IGridImporterApi,
		infiniteScroll: infiniteScroll.IGridInfiniteScrollApi<TEntity>,
		pagination: pagination.IGridPaginationApi,
		pinning: pinning.IGridPinningApi<TEntity>,
		rowEdit: rowEdit.IGridRowEditApi<TEntity>,
		saveState: saveState.IGridSaveStateApi,
		selection: selection.IGridSelectionApi<TEntity>,
		treeBase: treeBase.IGridTreeBaseApi<TEntity>,
		grid: IGridInstanceOf<TEntity>
	}

	declare export interface IGridRowConstructor<TEntity> {
		new (
		entity: TEntity, index: number, reference: IGridInstanceOf<TEntity>
	): IGridRowOf<TEntity>
	}

	declare export interface IGridRowOf<TEntity> {
		entity: TEntity,
		grid: IGridInstanceOf<TEntity>,
		height: number,
		uid: string,
		visible: boolean,
		exporterEnableExporting: boolean,
		clearRowInvisible(row: IGridRowOf<TEntity>): void,
		clearRowInvisible(reason: string, fromRowsProcessor: boolean): void,
		evaluateRowVisibility(fromRowProcessor: boolean): void,
		getEntityQualifiedColField(col: IGridColumnOf<TEntity>): string,
		getQualifiedColField(col: IGridColumnOf<TEntity>): string,
		setRowInvisible(row: IGridRowOf<TEntity>): void,
		setThisRowInvisible(reason: string, fromRowsProcessor: boolean): void
	}

	declare export interface IGridColumnConstructor<TEntity> {
		new (
		gridCol: IColumnDefOf<TEntity>, index: number, grid: IGridInstanceOf<TEntity>
	): IGridColumnOf<TEntity>
	}

	declare export interface IGridColumnOf<TEntity> {
		colDef: uiGrid.IColumnDefOf<TEntity>,
		displayName?: string,
		field?: string,
		filter?: IFilterOptions,
		filters?: Array<IFilterOptions>,
		grid: IGridInstanceOf<TEntity>,
		name?: string,
		sort?: ISortInfo,
		sortingAlgorithm?: (
		a: any, b: any, rowA: IGridRowOf<TEntity>, rowB: IGridRowOf<TEntity>, direction: string
	) => number,
		width: number,
		GridColumn(
		colDef: IColumnDefOf<TEntity>, uid: number, grid: IGridInstanceOf<TEntity>
	): void,
		getAggregationText(label: string): void,
		getAggregationValue(): string,
		getColClass(prefixDot: boolean): string,
		getColClassDefinition(): string,
		getRenderContainer(): any,
		hideColumn(): void,
		isPinnedLeft(): boolean,
		isPinnedRight(): boolean,
		setPropertyOrDefault(colDef: IColumnDefOf<TEntity>, propName: string, defaultValue: any): void,
		showColumn(): void,
		updateColumnDef(colDef: IColumnDefOf<TEntity>, isNew: boolean): void
	}

	declare export interface IColumnDefOf<TEntity> {
		aggregationHideLabel?: boolean,
		aggregationType?: number | Function,
		cellClass?: string | ICellClassGetter<TEntity>,
		cellFilter?: string,
		cellTemplate?: string,
		cellTooltip?: boolean | string | ICellTooltipGetter<TEntity>,
		displayName?: string,
		enableColumnMenu?: boolean,
		enableColumnMenus?: boolean,
		enableFiltering?: boolean,
		enableHiding?: boolean,
		enableSorting?: boolean,
		field?: string,
		filter?: IFilterOptions,
		filterCellFiltered?: boolean,
		filterHeaderTemplate?: string,
		filters?: Array<IFilterOptions>,
		footerCellClass?: string | IHeaderFooterCellClassGetter<TEntity>,
		footerCellFilter?: string,
		footerCellTemplate?: string,
		headerCellClass?: string | IHeaderFooterCellClassGetter<TEntity>,
		headerCellFilter?: string,
		headerCellTemplate?: string,
		headerTooltip?: boolean | string | IHeaderTooltipGetter<TEntity>,
		maxWidth?: number,
		menuItems?: Array<IMenuItem>,
		minWidth?: number,
		name?: string,
		sort?: ISortInfo,
		sortCellFiltered?: boolean,
		sortDirectionCycle?: Array<IUiGridConstants>,
		sortingAlgorithm?: (
		a: any, b: any, rowA: IGridRowOf<TEntity>, rowB: IGridRowOf<TEntity>, direction: string
	) => number,
		suppressRemoveSort?: boolean,
		type?: string,
		visible?: boolean,
		width?: number | string
	}

	declare export interface ICellClassGetter<TEntity> {
		(grid?: IGridInstanceOf<TEntity>, gridRow?: IGridRowOf<TEntity>, gridCol?: IGridColumnOf<TEntity>, rowRenderIndex?: number, colRenderIndex?: number): string
	}

	declare export interface ICellTooltipGetter<TEntity> {
		(gridRow: IGridRowOf<TEntity>, gridCol: IGridColumnOf<TEntity>): string
	}

	declare export interface IHeaderTooltipGetter<TEntity> {
		(gridCol: IGridColumnOf<TEntity>): string
	}

	declare export interface IHeaderFooterCellClassGetter<TEntity> {
		(grid: IGridInstanceOf<TEntity>, gridRow: IGridRowOf<TEntity>, gridCol: IGridColumnOf<TEntity>, rowRenderIndex: number, colRenderIndex: number): string
	}

	declare export interface IMenuItem {
		title?: string,
		icon?: string,
		action?: ($event: ng.IAngularEvent) => void,
		shown?: () => boolean,
		active?: () => boolean,
		context?: any,
		leaveOpen?: boolean
	}

	declare export interface ISortInfo {
		direction?: string,
		ignoreSort?: boolean,
		priority?: number
	}

	declare export interface IFilterOptions {
		condition?: number | ((
		searchTerm: string, cellValue: any, row: IGridRow, column: IGridColumn
	) => boolean),
		term?: string,
		placeholder?: string,
		ariaLabel?: string,
		noTerm?: boolean,
		flags?: IFilterFlags,
		type?: number | string,
		selectOptions?: Array<ISelectOption>,
		disableCancelFilterButton?: boolean
	}

	declare export interface ISelectOption {
		value: number | string,
		label: string
	}

	declare export interface IFilterFlags {
		caseSensitive?: boolean
	}

			
}

declare module 'cellNav' {
		declare export interface IColumnDef {
		allowCellFocus?: boolean
	}

	declare export interface IGridOptions {
		modifierKeysToMultiSelectCells?: boolean
	}

	declare export interface IGridRow {
		allowCellFocus?: boolean
	}

	declare export interface ICellNavApi<TEntity> {
		getCurrentSelection(): Array<IRowCol<TEntity>>,
		getFocusedCell(): IRowCol<TEntity>,
		rowColSelectIndex(rowCol: IRowCol<TEntity>): number,
		scrollToFocus(rowEntity: TEntity, colDef: IColumnDef): ng.IPromise<any>,
		on: {
		navigate: (scope: ng.IScope, handler: navigateHandler<TEntity>) => void,
		viewportKeyDown: (scope: ng.IScope, handler: viewportKeyDownHandler<TEntity>) => void,
		viewportKeyPress: (scope: ng.IScope, handler: viewportKeyPressHandler<TEntity>) => void
	}
	}

	declare export interface navigateHandler<TEntity> {
		(newRowCol: IRowCol<TEntity>, oldRowCol: IRowCol<TEntity>): void
	}

	declare export interface viewportKeyDownHandler<TEntity> {
		(event: JQueryKeyEventObject, rowCol: IRowCol<TEntity>): void
	}

	declare export interface viewportKeyPressHandler<TEntity> {
		(event: JQueryKeyEventObject, rowCol: IRowCol<TEntity>): void
	}

	declare export interface IRowColConstructor<TEntity> {
		new (row: uiGrid.IGridRowOf<TEntity>, col: IGridColumnOf<TEntity>): IRowCol<TEntity>
	}

	declare export interface IRowCol<TEntity> {
		row: uiGrid.IGridRowOf<TEntity>,
		col: IGridColumnOf<TEntity>,
		getIntersectionValueRaw(): String | Number | Object,
		getIntersectionValueFiltered(): String | Number | Object
	}

	declare export interface IUiGridCellNavConstants {
		FEATURE_NAME: string,
		CELL_NAV_EVENT: string,
		direction: {
		LEFT: number,
		RIGHT: number,
		UP: number,
		DOWN: number,
		PG_UP: number,
		PG_DOWN: number
	},
		EVENT_TYPE: {
		KEYDOWN: number,
		CLICK: number,
		CLEAR: number
	}
	}

			
}

declare module 'edit' {
		declare export interface IColumnDef<TEntity> {
		cellEditableCondition?: any | {
		($scope: ng.IScope): boolean
	},
		editDropdownFilter?: string,
		editDropdownIdLabel?: string,
		editDropdownOptionsArray?: Array<IEditDropdown>,
		editDropdownRowEntityOptionsArrayPath?: string,
		editDropdownValueLabel?: string,
		editFileChooserCallback?: (
		gridRow: uiGrid.IGridRowOf<TEntity>, gridCol: IGridColumnOf<TEntity>, files: FileList
	) => void,
		editModelField?: string,
		editableCellTemplate?: string,
		enableCellEdit?: boolean,
		enableCellEditOnFocus?: boolean
	}

	declare export interface IEditDropdown {
		id: number | string,
		value: any
	}

	declare export interface IGridOptions {
		cellEditableCondition?: any | {
		($scope: ng.IScope): boolean
	},
		editableCellTemplate?: string,
		enableCellEdit?: boolean,
		enableCellEditOnFocus?: boolean
	}

	declare export interface IGridRow {
		enableCellEdit?: boolean
	}

	declare export interface IGridEditApi<TEntity> {
		on: {
		afterCellEdit: (scope: ng.IScope, handler: afterCellEditHandler<TEntity>) => void,
		beginCellEdit: (scope: ng.IScope, handler: beginCellEditHandler<TEntity>) => void,
		cancelCellEdit: (scope: ng.IScope, handler: cancelCellEditHandler<TEntity>) => void
	}
	}

	declare export interface afterCellEditHandler<TEntity> {
		(rowEntity: TEntity, colDef: IColumnDef<TEntity>, newValue: any, oldValue: any): void
	}

	declare export interface beginCellEditHandler<TEntity> {
		(rowEntity: TEntity, colDef: IColumnDef<TEntity>, triggerEvent: JQueryEventObject): void
	}

	declare export interface cancelCellEditHandler<TEntity> {
		(rowEntity: TEntity, colDef: IColumnDef<TEntity>): void
	}

	declare export interface IUiGridEditConstants {
		EDITABLE_CELL_TEMPLATE: string,
		EDITABLE_CELL_DIRECTIVE: string,
		events: {
		BEGIN_CELL_EDIT: string,
		END_CELL_EDIT: string,
		CANCEL_CELL_EDIT: string
	}
	}

			
}

declare module 'expandable' {
		declare export interface IGridOptions {
		expandableRowHeaderWidth?: number,
		enableExpandable?: boolean,
		enableExpandableRowHeader?: boolean,
		expandableRowHeight?: number,
		expandableRowScope?: ng.IScope | Object,
		expandableRowTemplate?: string
	}

	declare export interface IGridExpandableApi<TEntity> {
		collapseAllRows(): void,
		expandAllRows(): void,
		toggleAllRows(): void,
		toggleRowExpansion(rowEntity: TEntity): void,
		on: {
		rowExpandedStateChanged: (scope: ng.IScope, handler: rowExpandedStateChangedHandler<TEntity>) => void
	}
	}

	declare export interface rowExpandedStateChangedHandler<TEntity> {
		(row: IGridRowOf<TEntity>): void
	}

	declare export interface IGridRow {
		isExpanded?: boolean
	}

			
}

declare module 'exporter' {
		declare export interface IColumnDef {
		exporterPdfAlign?: string,
		exporterSuppressExport?: boolean
	}

	declare export interface IGridOptions<TEntity> {
		exporterAllDataFn?: () => ng.IPromise<Array<TEntity>>,
		exporterAllDataPromise?: () => ng.IPromise<Array<TEntity>>,
		exporterCsvColumnSeparator?: string,
		exporterCsvFilename?: string,
		exporterFieldCallback?: (
		grid: IGridInstanceOf<TEntity>, row: uiGrid.IGridRowOf<TEntity>, col: IGridColumnOf<TEntity>, value: any
	) => any,
		exporterHeaderFilter?: (displayName: string) => string,
		exporterHeaderFilterUseName?: boolean,
		exporterMenuCsv?: boolean,
		exporterMenuLabel?: string,
		exporterMenuPdf?: boolean,
		exporterOlderExcelCompatibility?: boolean,
		exporterPdfCustomFormatter?: (docDefinition: any) => any,
		exporterPdfDefaultStyle?: any,
		exporterPdfFilename?: string,
		exporterPdfFooter?: string | any | {
		(currentPage: number, pageCount: number): string
	},
		exporterPdfHeader?: string | any | {
		(currentPage: number, pageCount: number): string
	},
		exporterPdfMaxGridWidth?: number,
		exporterPdfOrientation?: string,
		exporterPdfPageSize?: string,
		exporterPdfTableHeaderStyle?: any,
		exporterPdfTableLayout?: any,
		exporterPdfTableStyle?: any,
		exporterSuppressColumns?: Array<string>,
		exporterSuppressMenu?: boolean
	}

	declare export interface IGridRow {
		exporterEnableExporting?: boolean
	}

	declare export interface IGridExporterApi {
		csvExport(rowTypes: string, colTypes: string): void,
		pdfExport(rowTypes: string, colTypes: string): void
	}

	declare export interface IUiGridExporterConstants {
		featureName: string,
		ALL: string,
		VISIBLE: string,
		SELECTED: string,
		CSV_CONTENT: string,
		BUTTON_LABEL: string,
		FILE_NAME: string
	}

			
}

declare module 'grouping' {
		declare export interface IColumnDef {
		enableGrouping?: boolean,
		grouping?: {
		groupPriority: number
	},
		groupingShowAggregationMenu?: boolean,
		groupingShowGroupingMenu?: boolean
	}

	declare export interface IGridOptions {
		enableGrouping?: boolean,
		enableGroupHeaderSelection?: boolean,
		groupingNullLabel?: string,
		groupingShowCounts?: boolean
	}

	declare export interface IGridGroupingApi<TEntity> {
		aggregateColumn(columnName: string, or: string | Function, aggregationLabel?: string): void,
		clearGrouping(): void,
		getGrouping(getExpanded: boolean): IGridGroupingConfiguration,
		groupColumn(columnName: string): void,
		setGrouping(config: IGridGroupingConfiguration): void,
		ungroupColumn(columnName: string): void,
		on: {
		aggregationChanged: (scope: ng.IScope, handler: aggregationChangedHandler<TEntity>) => void,
		groupingChanged: (scope: ng.IScope, handler: groupingChangedHandler<TEntity>) => void
	}
	}

	declare export interface IGridGroupingConfiguration {
		grouping: Array<IGripGroup>,
		treeAggregations: Array<IGridTreeAggregations>,
		expandedState?: IGridExpandedHash
	}

	declare export interface IGripGroup {
		field: string,
		colName: string,
		groupPriority: number
	}

	declare export interface IGridTreeAggregations {
		field: string,
		colName: string,
		aggregation: string
	}

	declare export interface IGridExpandedHash {
		[key: string]: IGridExpandedHash | string
	}

	declare export interface aggregationChangedHandler<TEntity> {
		(col: IGridColumnOf<TEntity>): void
	}

	declare export interface groupingChangedHandler<TEntity> {
		(col: IGridColumnOf<TEntity>): void
	}

	declare interface IUiGridGroupingConstants {
		featureName: string
	}

			
}

declare module 'importer' {
		declare export interface IGridOptions<TEntity> {
		importerDataAddCallback?: (grid: IGridInstanceOf<TEntity>, newObjects: Array<TEntity>) => void,
		importerErrorCallback?: (
		grid: IGridInstanceOf<TEntity>, errorKey: string, consoleMessage: string, context: any
	) => void,
		importerHeaderFilter?: (displayName: string) => string,
		importerObjectCallback?: (grid: IGridInstanceOf<TEntity>, newObject: TEntity) => TEntity,
		importerProcessHeaders?: (grid: IGridInstanceOf<TEntity>, headerArray: Array<string>) => Array<string>,
		enableImporter?: boolean,
		importerNewObject?: Function,
		importerShowMenu?: boolean
	}

	declare export interface IGridImporterApi {
		importFile(fileObject: File): void
	}

	declare export interface IUiGridImporterConstants {
		featureName: string
	}

			
}

declare module 'infiniteScroll' {
		declare export interface IGridOptions {
		enableInfiniteScroll?: boolean
	}

	declare export interface IGridInfiniteScrollApi<TEntity> {
		dataLoaded(scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>,
		dataRemovedBottom(scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>,
		dataRemovedBottom(
		grid: IGridInstanceOf<TEntity>, scrollUp: boolean, scrollDown: boolean
	): ng.IPromise<any>,
		dataRemovedTop(scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>,
		dataRemovedTop(
		grid: IGridInstanceOf<TEntity>, scrollUp: boolean, scrollDown: boolean
	): ng.IPromise<any>,
		resetScroll(scrollUp: boolean, scrollDown: boolean): ng.IPromise<any>,
		saveScrollPercentage(): void,
		on: {
		needLoadMoreData: Function,
		needLoadMoreDataTop: Function
	}
	}

			
}

declare module 'moveColumns' {
		declare export interface IColumnDef {
		enableColumnMoving?: boolean
	}

	declare export interface IGridOptions {
		enableColumnMoving?: boolean
	}

	declare export interface IGridMoveColumnsApi {
		moveColumn(originalPosition: number, newPosition: number): void,
		on: {
		columnPositionChanged?: (scope: ng.IScope, handler: columnPositionChangedHandler) => void
	}
	}

	declare export interface columnPositionChangedHandler {
		(colDef: IColumnDef, originalPosition: number, finalPosition: number): void
	}

			
}

declare module 'pagination' {
		declare export interface IGridOptions {
		enablePagination?: boolean,
		enablePaginationControls?: boolean,
		paginationCurrentPage?: number,
		paginationPageSize?: number,
		paginationPageSizes?: Array<number>,
		paginationTemplate?: string,
		totalItems?: number,
		useExternalPagination?: boolean
	}

	declare export interface IGridPaginationApi {
		getPage(): number,
		getTotalPages(): number,
		nextPage(): void,
		previousPage(): void,
		seek(page: number): void,
		on: {
		paginationChanged: (scope: ng.IScope, handler: paginationChangedHandler) => void
	}
	}

	declare export interface paginationChangedHandler {
		(newPage: number, pageSize: number): void
	}

			
}

declare module 'pinning' {
		declare export interface IColumnDef {
		enablePinning?: boolean,
		pinnedLeft?: boolean,
		pinnedRight?: boolean
	}

	declare export interface IGridOptions {
		enablePinning?: boolean
	}

	declare export interface IGridPinningApi<TEntity> {
		pinColumn(col: IGridColumnOf<TEntity>, container: string): void,
		columnPin: (scope: ng.IScope, handler: columnPinHandler) => void
	}

	declare export interface columnPinHandler {
		(colDef: IColumnDef, container: string): void
	}

	declare export interface IUiGridPinningConstants {
		container: {
		LEFT: string,
		RIGHT: string,
		NONE: string
	}
	}

			
}

declare module 'resizeColumns' {
		declare export interface IColumnDef {
		enableColumnResizing?: boolean
	}

	declare export interface IGridOptions {
		enableColumnResizing?: boolean
	}

	declare export interface IGridResizeColumnsApi {
		on: {
		columnSizeChanged: (scope: ng.IScope, handler: columnSizeChangedHandler) => void
	}
	}

	declare export interface columnSizeChangedHandler {
		(colDef: IColumnDef, delta: number): void
	}

			
}

declare module 'rowEdit' {
		declare export interface IGridOptions {
		rowEditWaitInterval?: number
	}

	declare export interface IGridRowEditApi<TEntity> {
		flushDirtyRows(grid?: IGridInstanceOf<TEntity>): ng.IPromise<Array<any>>,
		getDirtyRows(grid?: IGridInstanceOf<TEntity>): Array<IGridRowOf<TEntity>>,
		getErrorRows(grid?: IGridInstanceOf<TEntity>): Array<IGridRowOf<TEntity>>,
		setRowsClean(dataRows: Array<TEntity>): void,
		setRowsDirty(dataRows: Array<TEntity>): void,
		setSavePromise(rowEntity: Object, savePromise: ng.IPromise<any>): void,
		on: {
		saveRow: (scope: ng.IScope, handler: saveRowHandler<TEntity>) => void
	}
	}

	declare export interface saveRowHandler<TEntity> {
		(rowEntity: TEntity): void
	}

			
}

declare module 'saveState' {
		declare export interface IGridOptions {
		saveFilter?: boolean,
		saveFocus?: boolean,
		saveGrouping?: boolean,
		saveGroupingExpandedStates?: boolean,
		saveOrder?: boolean,
		savePinning?: boolean,
		saveRowIdentity?: boolean,
		saveScroll?: boolean,
		saveSelection?: boolean,
		saveSort?: boolean,
		saveTreeView?: boolean,
		saveVisible?: boolean,
		saveWidths?: boolean
	}

	declare export interface IGridSaveStateApi {
		restore($scope: ng.IScope, state: IGridSavedState): void,
		save(): IGridSavedState
	}

	declare export interface IGridSavedState {
		columns?: Array<ISavedColumn>,
		scrollFocus?: ISavedScrollFocus,
		selection: Array<IRowVal>,
		grouping: grouping.IGridGroupingConfiguration,
		treeView: treeBase.ITreeState
	}

	declare interface ISavedColumn {
		name: string,
		visible?: boolean,
		width?: number,
		sort?: ISortInfo,
		filters?: Array<IFilterOptions>,
		pinned?: string
	}

	declare interface ISavedScrollFocus {
		focus?: boolean,
		colName?: string,
		rowVal?: IRowVal
	}

	declare interface IRowVal {
		identity: boolean,
		row: number | any
	}

			
}

declare module 'selection' {
		declare export interface IGridOptions {
		enableFooterTotalSelected?: boolean,
		enableFullRowSelection?: boolean,
		enableRowHeaderSelection?: boolean,
		enableRowSelection?: boolean,
		enableSelectAll?: boolean,
		enableSelectionBatchEvent?: boolean,
		isRowSelectable?: (row: IGridRow) => boolean,
		modifierKeysToMultiSelect?: boolean,
		multiSelect?: boolean,
		noUnselect?: boolean,
		selectionRowHeaderWidth?: number
	}

	declare export interface IGridRow {
		enableSelection?: boolean,
		isSelected?: boolean,
		setSelected(selected: boolean): void
	}

	declare export interface IGridSelectionApi<TEntity> {
		clearSelectedRows(event?: ng.IAngularEvent): void,
		getSelectAllState(): boolean,
		getSelectedGridRows(): Array<uiGrid.IGridRowOf<TEntity>>,
		getSelectedRows(): Array<TEntity>,
		selectAllRows(event?: ng.IAngularEvent): void,
		selectAllVisibleRows(event?: ng.IAngularEvent): void,
		selectRow(rowEntity: TEntity, event?: ng.IAngularEvent): void,
		selectRowByVisibleIndex(index: number, event?: ng.IAngularEvent): void,
		setModifierKeysToMultiSelect(multiSelect: boolean): void,
		setMultiSelect(multiSelect: boolean): void,
		toggleRowSelection(rowEntity: TEntity, event?: ng.IAngularEvent): void,
		unSelectRow(rowEntity: TEntity, event?: ng.IAngularEvent): void,
		on: {
		rowSelectionChanged: (scope: ng.IScope, handler: rowSelectionChangedHandler<TEntity>) => void,
		rowSelectionChangedBatch: (scope: ng.IScope, handler: rowSelectionChangedBatchHandler<TEntity>) => void
	}
	}

	declare export interface rowSelectionChangedHandler<TEntity> {
		(row: uiGrid.IGridRowOf<TEntity>, event?: ng.IAngularEvent): void
	}

	declare export interface rowSelectionChangedBatchHandler<TEntity> {
		(row: Array<uiGrid.IGridRowOf<TEntity>>, event?: ng.IAngularEvent): void
	}

			
}

declare module 'treeBase' {
		declare export interface IColumnDef<TEntity> {
		customTreeAggregationFinalizerFn?: (aggregation: IGridTreeBaseAggregationObject) => void,
		customTreeAggregationFn?: (
		aggregation: IGridTreeBaseAggregationObject, fieldValue: any, numValue: number, row: IGridRowOf<TEntity>
	) => void,
		treeAggregationLabel?: string,
		treeAggregationType?: string,
		treeAggregationUpdateEntity?: boolean
	}

	declare export interface IGridOptions<TEntity> {
		showTreeExpandNoChildren?: boolean,
		showTreeRowHeader?: boolean,
		treeCustomAggregations?: {
		[index: string]: IGridTreeBaseCustomAggregation<TEntity>
	},
		treeIndent?: number,
		treeRowHeaderAlwaysVisible?: boolean,
		treeRowHeaderBaseWidth?: number
	}

	declare export interface IGridTreeBaseCustomAggregation<TEntity> {
		label: string,
		aggregationFn: (
		aggregation: IGridTreeBaseAggregationObject, fieldValue: any, numValue: number, row?: IGridRowOf<TEntity>
	) => void,
		finalizerFn?: (aggregation: IGridTreeBaseAggregationObject) => void
	}

	declare export interface IGridTreeBaseAggregationObject {
		count: number,
		sum: number,
		value: number,
		rendered?: string
	}

	declare export interface IGridTreeBaseApi<TEntity> {
		collapseAllRows(): void,
		collapseRow(row: IGridRowOf<TEntity>): void,
		collapseRowChildren(row: IGridRowOf<TEntity>): void,
		expandAllRows(): void,
		expandRow(row: IGridRowOf<TEntity>): void,
		getRowChildren(row: IGridRowOf<TEntity>): Array<IGridRowOf<TEntity>>,
		getTreeState(): ITreeState,
		setTreeState(config: ITreeState): void,
		toggleRowTreeState(row: IGridRowOf<TEntity>): void,
		on: {
		rowCollapsed: (scope: ng.IScope, handler: rowCollapsedHandler<TEntity>) => void,
		rowExpanded: (scope: ng.IScope, handler: rowExpandedHandler<TEntity>) => void
	}
	}

	declare export interface ITreeState {
		expandedState: {
		[index: string]: string
	}
	}

	declare export interface rowCollapsedHandler<TEntity> {
		(row: IGridRowOf<TEntity>): void
	}

	declare export interface rowExpandedHandler<TEntity> {
		(row: IGridRowOf<TEntity>): void
	}

	declare export interface IUiGridTreeBaseConstants {
		featureName: string
	}

			
}

declare module 'treeView' {
		declare export interface IGridOptions {
		enableTreeView?: boolean
	}

	declare export interface IUiGridTreeViewConstants {
		featureName: string
	}

			
}

declare module 'angular-ui-grid' {
					declare module.exports: undefined


}