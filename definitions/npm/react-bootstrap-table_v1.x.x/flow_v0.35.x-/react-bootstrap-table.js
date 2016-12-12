

declare module 'react-bootstrap-table' {
	declare export type SelectRowMode = "none" | "radio" | "checkbox";

	declare export type CellEditClickMode = "none" | "click" | "dbclick";

	declare export type SortOrder = "asc" | "desc";

	declare export type DataAlignType = "left" | "center" | "right" | "start" | "end";

	declare export type FilterType = "TextFilter" | "RegexFilter" | "SelectFilter" | "NumberFilter" | "DateFilter" | "CustomFilter";

	declare export interface BootstrapTableProps {
		data: any[],
		remote?: boolean,
		keyField?: string,
		height?: string,
		maxHeight?: string,
		striped?: boolean,
		hover?: boolean,
		condensed?: boolean,
		bordered?: boolean,
		pagination?: boolean,
		trClassName?: string | ((rowData: any, rowIndex: number) => string),
		insertRow?: boolean,
		deleteRow?: boolean,
		columnFilter?: boolean,
		search?: boolean,
		searchPlaceholder?: string,
		multiColumnSearch?: boolean,
		exportCSV?: boolean,
		csvFileName?: string,
		selectRow?: SelectRow,
		cellEdit?: CellEdit,
		options?: Options,
		fetchInfo?: FetchInfo,
		tableStyle?: any,
		containerStyle?: any,
		headerStyle?: any,
		bodyStyle?: any,
		ignoreSinglePage?: boolean
	}

	declare export interface SelectRow {
		mode: SelectRowMode,
		clickToSelect?: boolean,
		clickToSelectAndEditCell?: boolean,
		bgColor?: string,
		className?: string,
		selected?: string[],
		hideSelectColumn?: boolean,
		showOnlySelected?: boolean,
		onSelect?: (row: any, isSelected: Boolean, event: any) => boolean,
		onSelectAll?: (isSelected: boolean, currentSelectedAndDisplayData: any) => boolean
	}

	declare export interface CellEdit {
		mode: CellEditClickMode,
		blurToSave?: boolean,
		beforeSaveCell?: (row: any, cellName: string, cellValue: any) => boolean,
		afterSaveCell?: (row: any, cellName: string, cellValue: any) => void
	}

	declare export interface Options {
		sortName?: string,
		sortOrder?: SortOrder,
		defaultSortName?: string,
		defaultSortOrder?: SortOrder,
		sortIndicator?: boolean,
		noDataText?: string | ReactElement<any>,
		searchDelayTime?: number,
		exportCSVText?: string,
		ignoreEditable?: boolean,
		clearSearch?: boolean,
		afterTableComplete?: Function,
		afterDeleteRow?: (rowKeys: string[]) => void,
		afterInsertRow?: (row: any) => void,
		prePage?: string,
		nextPage?: string,
		firstPage?: string,
		lastPage?: string,
		page?: number,
		sizePerPageList?: number[],
		sizePerPage?: number,
		paginationSize?: number,
		onPageChange?: (page: number, sizePerPage: number) => void,
		onSizePerPageList?: (sizePerPage: number) => void,
		onSortChange?: (sortName: string, sortOrder: SortOrder) => void,
		afterSearch?: (search: string, result: any) => void,
		afterColumnFilter?: (filterConds: any[], result: any) => void,
		onRowClick?: (row: any) => void,
		onMouseEnter?: Function,
		onMouseLeave?: Function,
		onRowMouseOver?: Function,
		onRowMouseOut?: Function,
		handleConfirmDeleteRow?: (next: Function, rowKeys: any[]) => void,
		paginationShowsTotal?: boolean,
		onSearchChange?: Function,
		onAddRow?: Function,
		onExportToCSV?: Function,
		insertText?: string,
		deleteText?: string,
		saveText?: string,
		closeText?: string
	}

	declare interface FetchInfo {
		dataTotalSize?: number
	}

	declare export interface BootstrapTable {
		handleAddRow(row: any): void,
		handleAddRowAtBegin(row: any): void,
		handleDropRow(rowKeys: any[]): void,
		handleFilterData(filter: any): void,
		handleSearch(search: string): void,
		handleSort(order: SortOrder, field: string): void,
		getPageByRowKey(rowKey: string): any,
		handleExportCSV(): void,
		cleanSelected(): void
	}

	declare export interface TableHeaderColumnProps {
		dataField: string,
		isKey?: boolean,
		width?: string,
		dataAlign?: DataAlignType,
		dataSort?: boolean,
		caretRender?: Function,
		dataFormat?: (cell: any, row: any) => string | ReactElement<any>,
		filterFormatted?: boolean,
		hidden?: boolean,
		searchable?: boolean,
		sortFunc?: (a: any, b: any, order: SortOrder, sortField: any, extraData: any) => number,
		sortFuncExtraData?: any,
		className?: string | ((cell: any, row: any, rowIndex: number, columnIndex: number) => string),
		columnClassName?: String | ((cell: any, row: any, rowIndex: number, columnIndex: number) => string),
		editable?: boolean | Editable,
		autoValue?: boolean,
		filter?: Filter,
		onSort?: Function,
		csvFormat?: Function,
		columnTitle?: boolean,
		sort?: SortOrder,
		formatExtraData?: any
	}

	declare export interface Editable {
		type?: string,
		validator?: (cell: any) => boolean,
		options?: any,
		cols?: number,
		rows?: number
	}

	declare export interface Filter {
		type?: FilterType,
		defaultValue?: any,
		delay?: number,
		placeholder?: string | RegExp,
		numberComparators: string[]
	}

	declare export interface TableHeaderColumn {
		
	}

		declare export class TableDataSet extends EventEmitter {
		constructor(data: any): this;
		setData(data: any): void;
		clear(): void;
		getData(): any
	}

	
}