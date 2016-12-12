import type { IStyleProviderStatic, ISearchProviderStatic, ISelectionProviderStatic, IEventProviderStatic, IAggregateStatic, IRenderedRangeStatic, IDimensionStatic, IRowStatic, IColumnStatic, IFooterStatic } from 'npm$namespace$ngGrid'

declare module 'ng-grid' {
				declare class ngGridReorderable  {
		constructor(): this
	}

	
}

declare module 'npm$namespace$ngGrid' {
		declare export interface IDomAccessProvider {
		previousColumn: IColumn,
		grid: IGridInstance,
		changeUserSelect(elm: angular.IAugmentedJQuery, value: string): void,
		focusCellElement($scope: IGridScope, index: number): void,
		selectionHandlers($scope: IGridScope, elm: angular.IAugmentedJQuery): void
	}

	declare export interface IStyleProviderStatic {
		new ($scope: IGridScope, grid: IGridInstance): IStyleProvider
	}

	declare export interface IStyleProvider {
		
	}

	declare export interface ISearchProviderStatic {
		new (
		$scope: IGridScope, grid: IGridInstance, $filter: angular.IFilterService
	): ISearchProvider
	}

	declare export interface ISearchProvider {
		fieldMap: any,
		extFilter: boolean,
		evalFilter(): void
	}

	declare export interface ISelectionProviderStatic {
		new (
		grid: IGridInstance, $scope: IGridScope, $parse: angular.IParseService
	): ISelectionProvider
	}

	declare export interface ISelectionProvider {
		multi: boolean,
		selectedItems: any[],
		selectedIndex: number,
		lastClickedRow: any,
		ignoreSelectedItemChanges: boolean,
		pKeyParser: angular.ICompiledExpression,
		ChangeSelection(rowItem: any, event: any): void,
		getSelection(entity: any): number,
		getSelectionIndex(entity: any): number,
		setSelection(rowItem: IRow, isSelected: boolean): void,
		toggleSelectAll(checkAll: boolean, bypass: boolean, selectFiltered: boolean): void
	}

	declare export interface IEventProviderStatic {
		new (
		grid: IGridInstance, $scope: IGridScope, domUtilityService: service.IDomUtilityService, $timeout: angular.ITimeoutService
	): IEventProvider
	}

	declare export interface IEventProvider {
		colToMove: IColumn,
		groupToMove: any,
		assignEvents(): void,
		assignGridEventHandlers(): void,
		dragStart(event: any): void,
		dragOver(event: any): void,
		setDraggables(): void,
		onGroupMouseDown(event: any): void,
		onGroupDrop(event: any): void,
		onHeaderMouseDown(event: any): void,
		onHeaderDrop(event: any): void
	}

	declare export interface IAggregateStatic {
		new (
		aggEntity: any, rowFactory: IRowFactory, rowHeight: number, groupInitState: boolean
	): IAggregate
	}

	declare export interface IAggregate {
		rowIndex: number,
		offsetTop: number,
		entity: any,
		label: string,
		field: string,
		depth: number,
		parent: any,
		children: any[],
		aggChildren: any[],
		aggIndex: number,
		collapsed: boolean,
		groupInitState: boolean,
		rowFactory: IRowFactory,
		rowHeight: number,
		isAggRow: boolean,
		offsetLeft: number,
		aggLabelFilter: any
	}

	declare export interface IRowConfig {
		enableCellSelection: boolean,
		enableRowSelection: boolean,
		jqueryUITheme: boolean,
		rowClasses: string[],
		rowHeight: number,
		selectWithCheckboxOnly: boolean,
		selectedItems: any[],
		afterSelectionChangeCallback(): void,
		beforeSelectionChangeCallback(): void
	}

	declare export interface IRenderedRangeStatic {
		new (top: number, bottom: number): IRenderedRange
	}

	declare export interface IRenderedRange {
		bottomRow: number,
		topRow: number
	}

	declare export interface IRowFactory {
		aggCache: any,
		dataChanged: boolean,
		groupedData: any,
		numberOfAggregates: number,
		parentCache: any[],
		parsedData: any[],
		renderedRange: IRenderedRange,
		rowConfig: IRowConfig,
		rowHeight: number,
		selectionProvider: ISelectionProvider,
		UpdateViewableRange(newRange: IRenderedRange): void,
		buildAggregateRow(aggEntity: any, rowIndex: number): IAggregate,
		buildEntityRow(entity: any, rowIndex: number): IRow,
		filteredRowsChanged(): void,
		fixRowCache(): void,
		getGrouping(groups: any): void,
		parseGroupData(groupData: any): void,
		renderedChange(): void,
		renderedChangeNoGroups(): void
	}

	declare export interface IDimensionStatic {
		new (options: any): IDimension
	}

	declare export interface IDimension {
		outerHeight?: number,
		outerWidth?: number,
		autoFitHeight?: boolean
	}

	declare export interface IElementDimension {
		rootMaxH?: number,
		rootMaxW?: number,
		rowIndexCellW?: number,
		rowSelectedCellW?: number,
		scrollH?: number,
		scrollW?: number
	}

	declare export interface IRowStatic {
		new (
		entity: any, config: IRowConfig, selectionProvider: ISelectionProvider, rowIndex: number, $utils: any
	): IRow
	}

	declare export interface IRow {
		entity: any,
		config: IRowConfig,
		selectionProvider: ISelectionProvider,
		rowIndex: number,
		utils: any,
		selected: boolean,
		cursor: string,
		offsetTop: number,
		rowDisplayIndex: number,
		afterSelectionChange(): void,
		beforeSelectionChange(): void,
		setSelection(isSelected: boolean): void,
		continueSelection(event: any): void,
		ensureEntity(expected: any): void,
		toggleSelected(event: any): boolean,
		alternatingRowClass(): void,
		getProperty(path: string): any,
		copy(): IRow,
		setVars(fromRow: IRow): void
	}

	declare export interface IColumnStatic {
		new (
		config: IGridOptions, $scope: IGridScope, grid: IGridInstance, domUtilityService: service.IDomUtilityService, $templateCache: angular.ITemplateCacheService, $utils: any
	): IColumn
	}

	declare export interface IColumn {
		colDef: IColumnDef,
		width: number,
		groupIndex: number,
		isGroupedBy: boolean,
		minWidth: number,
		maxWidth: number,
		enableCellEdit: boolean,
		cellEditableCondition: any,
		headerRowHeight: number,
		displayName: string,
		index: number,
		isAggCol: boolean,
		cellClass: string,
		sortPriority: number,
		cellFilter: any,
		field: string,
		aggLabelFilter: any,
		visible: boolean,
		sortable: boolean,
		resizable: boolean,
		pinnable: boolean,
		pinned: boolean,
		originalIndex: number,
		groupable: boolean,
		sortDirection: string,
		sortingAlgorithm: Function,
		headerClass: string,
		cursor: string,
		headerCellTemplate: string,
		cellTemplate: string,
		groupedByClass(): string,
		toggleVisible(): void,
		showSortButtonUp(): boolean,
		showSortButtonDown(): boolean,
		noSortVisible(): boolean,
		sort(event: any): boolean,
		gripClick(): any,
		gripOnMouseDown(event: any): any,
		onMouseMove(event: any): void,
		gripOnMouseUp(event: any): void,
		copy(): IColumn,
		setVars(fromCol: IColumn): void
	}

	declare export interface IGridScope {
		elementsNeedMeasuring: boolean,
		columns: any[],
		renderedRows: any[],
		renderedColumns: any[],
		headerRow: any,
		rowHeight: number,
		jqueryUITheme: any,
		showSelectionCheckbox: boolean,
		enableCellSelection: boolean,
		enableCellEditOnFocus: boolean,
		footer: IFooter,
		selectedItems: any[],
		multiSelect: boolean,
		showFooter: boolean,
		footerRowHeight: number,
		showColumnMenu: boolean,
		forceSyncScrolling: boolean,
		showMenu: boolean,
		configGroups: any[],
		gridId: string,
		enablePaging: boolean,
		pagingOptions: IPagingOptions,
		i18n: any,
		selectionProvider: ISelectionProvider,
		adjustScrollLeft(scrollLeft: number): void,
		adjustScrollTop(scrollTop: number, force: boolean): void,
		toggleShowMenu(): void,
		toggleSelectAll(): void,
		totalFilteredItemsLength(): number,
		showGroupPanel(): any,
		topPanelHeight(): number,
		viewportDimHeight(): number,
		groupBy(col: IColumn): void,
		removeGroup(index: number): void,
		togglePin(col: IColumn): void,
		totalRowWidth(): number,
		headerScrollerDim(): any
	}

	declare export interface IGridInstance {
		$canvas: angular.IAugmentedJQuery,
		$viewport: angular.IAugmentedJQuery,
		$groupPanel: angular.IAugmentedJQuery,
		$footerPanel: angular.IAugmentedJQuery,
		$headerScroller: angular.IAugmentedJQuery,
		$headerContainer: angular.IAugmentedJQuery,
		$headers: angular.IAugmentedJQuery,
		$topPanel: angular.IAugmentedJQuery,
		$root: angular.IAugmentedJQuery,
		config: IGridOptions,
		data: any,
		elementDims: IElementDimension,
		eventProvider: IEventProvider,
		filteredRows: IRow[],
		footerController: any,
		gridId: string,
		lastSortedColumns: IColumn[],
		lateBindColumns: boolean,
		maxCanvasHt: number,
		prevScrollIndex: number,
		prevScrollTop: number,
		rootDim: IDimension,
		rowCache: IRow[],
		rowFactory: IRowFactory,
		rowMap: IRow[],
		searchProvider: ISearchProvider,
		styleProvider: IStyleProvider,
		buildColumnDefsFromData(): void,
		buildColumns(): void,
		calcMaxCanvasHeight(): void,
		clearSortingData(): void,
		configureColumnWidths(): void,
		fixColumnIndexes(): void,
		fixGroupIndexes(): void,
		getTemplate(key: string): angular.IPromise<any>,
		init(): angular.IPromise<any>,
		initTemplates(): angular.IPromise<any>,
		minRowsToRender(): void,
		refreshDomSizes(): void,
		resizeOnData(col: IColumn): void,
		setRenderedRows(newRows: IRow[]): void,
		sortActual(): void,
		sortColumnsInit(): void,
		sortData(col: IColumn, event: any): void
	}

	declare export interface IFooterStatic {
		new ($scope: IGridScope, grid: IGridInstance): IFooter
	}

	declare export interface IFooter {
		
	}

	declare export interface IGridOptions {
		aggregateTemplate?: string,
		afterSelectionChange?: (rowItem?: IRow, event?: any) => void,
		beforeSelectionChange?: (rowItem?: IRow, event?: any) => boolean,
		checkboxCellTemplate?: string,
		checkboxHeaderTemplate?: string,
		columnDefs?: IColumnDef[],
		data?: any,
		dataUpdated?: Function,
		enableCellEdit?: boolean,
		enableCellSelection?: boolean,
		enableColumnResize?: boolean,
		enableColumnReordering?: boolean,
		enableColumnHeavyVirt?: boolean,
		enablePaging?: boolean,
		enablePinning?: boolean,
		enableRowReordering?: boolean,
		enableRowSelection?: boolean,
		enableSorting?: boolean,
		excludeProperties?: any,
		filterOptions?: IFilterOptions,
		footerRowHeight?: number,
		groups?: string[],
		headerRowHeight?: number,
		headerRowTemplate?: string,
		jqueryUIDraggable?: boolean,
		jqueryUITheme?: boolean,
		keepLastSelected?: boolean,
		maintainColumnRatios?: boolean,
		multiSelect?: boolean,
		pagingOptions?: IPagingOptions,
		pinSelectionCheckbox?: boolean,
		plugins?: any[],
		rowHeight?: number,
		rowTemplate?: string,
		selectedItems?: any[],
		selectItem?: (idx: number, state: boolean) => any,
		selectWithCheckboxOnly?: boolean,
		showColumnMenu?: boolean,
		showFilter?: boolean,
		showFooter?: boolean,
		showGroupPanel?: boolean,
		showSelectionCheckbox?: boolean,
		sortInfo?: any,
		tabIndex?: number,
		useExternalSorting?: boolean,
		i18n?: string,
		virtualizationThreshold?: number,
		enableHighlighting?: boolean
	}

	declare export interface IColumnDef {
		width?: any,
		minWidth?: any,
		visible?: boolean,
		field?: string,
		displayName?: string,
		sortable?: boolean,
		resizable?: boolean,
		groupable?: boolean,
		pinnable?: boolean,
		editableCellTemplate?: string,
		enableCellEdit?: boolean,
		cellEditableCondition?: string,
		sortFn?: (a: any, b: any) => number,
		cellTemplate?: string,
		cellClass?: string,
		headerClass?: string,
		headerCellTemplate?: string,
		cellFilter?: string,
		aggLabelFilter?: string,
		pinned?: boolean
	}

	declare export interface IFilterOptions {
		filterText?: string,
		useExternalFilter?: boolean
	}

	declare export interface IPagingOptions {
		pageSizes?: number[],
		pageSize?: number,
		totalServerItems?: number,
		currentPage?: number
	}

	declare export interface IPlugin {
		init(childScope: IGridScope, gridInstance: IGridInstance, services: any): void
	}

			
}

declare module 'service' {
		declare export interface IDomUtilityService {
		eventStorage: any,
		numberOfGrids: number,
		immediate: number,
		AssignGridContainers(
		$scope: IGridScope, rootel: angular.IAugmentedJQuery, grid: IGridInstance
	): void,
		getRealWidth(obj: IDimension): number,
		UpdateGridLayout($scope: IGridScope, grid: IGridInstance): void,
		setStyleText(grid: IGridInstance, css: string): void,
		BuildStyles($scope: IGridScope, grid: IGridInstance, digest: boolean): void,
		setColLeft(col: IColumn, colLeft: number, grid: IGridInstance): void,
		RebuildGrid($scope: IGridScope, grid: IGridInstance): void,
		digest($scope: IGridScope): void,
		ScrollH: number,
		ScrollW: number,
		LetterW: number
	}

	declare export interface ISortInfo {
		fields: string[]
	}

	declare export interface ISortService {
		colSortFnCache: any,
		isCustomSort: boolean,
		isSorting: boolean,
		guessSortFn(item: any): (a: any, b: any) => number,
		basicSort(a: any, b: any): number,
		sortNumber(a: number, b: number): number,
		sortNumberStr(a: string, b: string): number,
		sortAlpha(a: string, b: string): number,
		sortDate(a: Date, b: Date): number,
		sortBool(a: boolean, b: boolean): number,
		sortData(sortInfo: ISortInfo, data: any): void,
		Sort(sortInfo: ISortInfo, data: any): void,
		getSortFn(col: IColumn, data: any): (a: any, b: any) => number
	}

	declare export interface IUtilityService {
		visualLength(node: any): number,
		forIn(obj: any, action: (value: any, property: string) => {
		
	}): void,
		evalProperty(entity: any, path: string): any,
		endsWith(str: string, suffix: string): boolean,
		isNullOrUndefined(obj: any): boolean,
		getElementsByClassName(cl: string): any[],
		newId(): string,
		seti18n($scope: IGridScope, language: string): void,
		getInstanceType(o: any): string
	}

			
}