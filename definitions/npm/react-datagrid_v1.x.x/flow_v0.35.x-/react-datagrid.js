

declare module 'react-datagrid' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactDataGrid' {
		declare interface DataGridProps {
		dataSource: any[] | string | ((query: {
		pageSize: number,
		skip: number
	}) => Promise<any[]>),
		dataSourceCount?: number,
		idProperty: string,
		columns: Column[],
		onSortChange?: (sortInfo: SortInfo[]) => void,
		sortInfo?: SortInfo[],
		style?: ___React.CSSProperties,
		rowStyle?: ___React.CSSProperties | ((data: any, props: RowProps) => React.CSSProperties),
		withColumnMenu?: boolean,
		onColumnOrderChange?: (index: number, dropIndex: number) => void,
		onColumnResize?: (
		firstCol: Column, firstSize: number, secondCol: Column, secondSize: number
	) => void,
		onSelectionChange?: (newSelected: {
		
	}, data: any) => void,
		onColumnVisibilityChange?: (column: Column, visibility: boolean) => void,
		selected?: {
		
	},
		groupBy?: any[],
		onFilter?: (column: Column, value: any, allFilterValues: any[]) => void,
		liveFilter?: boolean,
		emptyText?: string,
		loading?: boolean,
		loadMaskOverHeader?: boolean,
		showCellBorders?: boolean | string,
		rowHeight?: number,
		pagination?: boolean,
		defaultPageSize?: number,
		defaultPage?: number,
		pageSize?: number,
		page?: number,
		paginationToolbarProps?: PaginationToolbarProps,
		onPageChange?: (page: number) => void,
		onPageSizeChange?: (pageSize: number, props: DataGridProps) => void
	}

	declare interface SortInfo {
		name: string,
		dir: string
	}

	declare interface Column {
		name: string,
		title?: string | React.ReactElement<any>,
		render?: (value: any, data: any, cellProps: CellProps) => any,
		style?: ___React.CSSProperties,
		textAlign?: string,
		className?: string,
		width?: number,
		minWidth?: number,
		flex?: number,
		defaultVisible?: boolean,
		defaultHidden?: boolean,
		visible?: boolean
	}

	declare interface CellProps {
		rowIndex: number,
		index: number,
		style: React.CSSProperties,
		className: string
	}

	declare interface RowProps {
		index: number,
		overClassName: string,
		selectedClassName: string,
		className: string
	}

	declare interface PaginationToolbarProps {
		pageSizes: number[],
		showPageSize: boolean,
		showRefreshIcon: boolean,
		iconSize: number,
		iconProps: {
		style: React.SVGAttributes,
		overStyle: React.SVGAttributes,
		disabledStyle: React.SVGAttributes
	}
	}

		declare export class DataGrid extends ___React$Component<DataGridProps, {
		
	}> {
		
	}

	
}