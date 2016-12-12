

declare module 'ko-grid' {
		declare interface IKg {
		domUtilityService: kg.DomUtilityService,
		defaultGridTemplate(): string,
		defaultRowTemplate(): string,
		defaultCellTemplate(): string,
		aggregateTemplate(): string,
		defaultHeaderRowTemplate(): string,
		defaultHeaderCellTemplate(): string
	}

			
}

declare module 'npm$namespace$kg' {
	declare type Direction = "asc" | "desc";

	declare interface DomUtilityService {
		UpdateGridLayout(grid: Grid<any>): void,
		BuildStyles(grid: Grid<any>): void
	}

	declare interface Row<EntityType> {
		selected: KnockoutObservable<boolean>,
		entity: EntityType
	}

	declare interface RowFactory<EntityType> {
		rowCache: Row<EntityType>[]
	}

	declare interface SelectionService<EntityType> {
		setSelection(row: Row<EntityType>, selected: boolean): void,
		multi: boolean,
		lastClickedRow: Row<EntityType>
	}

	declare interface Grid<EntityType> {
		configureColumnWidths(): void,
		rowFactory: RowFactory<EntityType>,
		config: GridOptions<EntityType>,
		$$selectionPhase: boolean,
		selectionService: SelectionService<EntityType>
	}

	declare interface Plugin<EntityType> {
		onGridInit(grid: Grid<EntityType>): void
	}

	declare interface GridOptions<EntityType> {
		afterSelectionChange(row: Row<EntityType>): void,
		beforeSelectionChange(row: Row<EntityType>): boolean,
		canSelectRows?: boolean,
		columnDefs?: ColumnDef[] | KnockoutObservable<ColumnDef[]>,
		columnWidth?: number,
		data?: KnockoutObservableArray<EntityType>,
		displaySelectionCheckbox: boolean,
		enableColumnResize?: boolean,
		enablePaging?: boolean,
		enableRowReordering?: boolean,
		enableSorting?: boolean,
		filterOptions?: FilterOptions,
		footerRowHeight?: number,
		footerVisible?: boolean,
		groups?: string[],
		headerRowHeight?: number,
		headerRowTemplate?: string | JQueryGenericPromise<string>,
		jqueryUIDraggable?: boolean,
		jqueryUITheme?: boolean,
		keepLastSelected?: boolean,
		maintainColumnRatios?: any,
		multiSelect?: boolean,
		pagingOptions?: PagingOptions,
		plugins?: Plugin<EntityType>[],
		rowHeight?: number,
		rowTemplate?: string | JQueryGenericPromise<string>,
		selectAllState?: KnockoutObservable<boolean>,
		selectedItems?: KnockoutObservableArray<any>,
		selectWithCheckboxOnly?: boolean,
		showColumnMenu?: boolean,
		showFilter?: boolean,
		showGroupPanel?: boolean,
		sortInfo?: SortInfo | KnockoutObservable<SortInfo>,
		tabIndex?: number,
		useExternalSorting?: boolean
	}

	declare interface SortInfo {
		column: SortColumn,
		direction: Direction
	}

	declare interface SortColumn {
		field: string,
		sortingAlgorithm?: ((a: any, b: any) => number)
	}

	declare interface ColumnDef {
		cellClass?: string,
		cellFormatter(val: any): string,
		cellTemplate?: string | JQueryGenericPromise<string>,
		displayName?: string,
		field: string,
		headerCellTemplate?: string | JQueryGenericPromise<string>,
		headerClass?: string,
		maxWidth?: number,
		resizable?: boolean,
		sortable?: boolean,
		sortFn?: ((a: any, b: any) => number),
		width?: string
	}

	declare interface FilterOptions {
		filterText?: KnockoutObservable<string>,
		useExternalFilter?: boolean,
		filterThrottle?: number
	}

	declare interface PagingOptions {
		pageSizes?: KnockoutObservableArray<number>,
		pageSize?: KnockoutObservable<number>,
		totalServerItems?: KnockoutObservable<number>,
		currentPage?: KnockoutObservable<number>
	}

			
}

declare module 'kg' {
					declare module.exports: undefined


}