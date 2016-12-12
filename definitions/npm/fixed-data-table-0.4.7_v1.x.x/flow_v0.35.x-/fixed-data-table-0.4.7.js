

declare module 'fixed-data-table-0.4.7' {
					
}

declare module 'npm$namespace$FixedDataTable' {
		declare export interface TableProps {
		width: number,
		height?: number,
		maxHeight?: number,
		ownerHeight?: number,
		overflowX?: string,
		overflowY?: string,
		rowsCount: number,
		rowHeight: number,
		rowHeightGetter?: Function,
		rowGetter: Function,
		rowClassNameGetter?: Function,
		groupHeaderHeight?: number,
		headerHeight: number,
		headerDataGetter?: Function,
		footerHeight?: number,
		footerData?: any,
		footerDataGetter?: Function,
		scrollLeft?: number,
		scrollToColumn?: number,
		scrollTop?: number,
		scrollToRow?: number,
		onScrollStart?: Function,
		onScrollEnd?: Function,
		onContentHeightChange?: Function,
		onRowClick?: Function,
		onRowDoubleClick?: Function,
		onRowMouseDown?: Function,
		onRowMouseEnter?: Function,
		onRowMouseLeave?: Function,
		onColumnResizeEndCallback?: Function,
		isColumnResizing?: boolean
	}

	declare interface ColumnProps {
		align?: string,
		headerClassName?: string,
		footerClassName?: string,
		cellClassName?: string,
		cellRenderer?: Function,
		cellDataGetter?: Function,
		dataKey: string | number,
		fixed?: boolean,
		headerRenderer?: Function,
		footerRenderer?: Function,
		columnData?: any,
		label: string,
		width: number,
		minWidth?: number,
		maxWidth?: number,
		flexGrow?: number,
		isResizable?: boolean,
		allowCellsRecycling?: boolean
	}

	declare export interface ColumnGroupProps {
		align?: string,
		fixed?: boolean,
		columnGroupData?: any,
		label?: string,
		groupHeaderRenderer?: Function
	}

		declare export class Table extends ___React$Component<TableProps, {
		
	}> {
		
	}

	declare export class Column extends ___React$Component<ColumnProps, {
		
	}> {
		
	}

	declare export class ColumnGroup extends ___React$Component<ColumnGroupProps, {
		
	}> {
		
	}

	
}

declare module 'fixed-data-table' {
					declare module.exports: undefined


}