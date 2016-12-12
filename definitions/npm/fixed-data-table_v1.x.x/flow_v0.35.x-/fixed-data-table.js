

declare module 'fixed-data-table' {
					declare module.exports: undefined


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
		rowHeightGetter?: (index: number) => number,
		rowClassNameGetter?: (index: number) => string,
		groupHeaderHeight?: number,
		headerHeight?: number,
		footerHeight?: number,
		scrollLeft?: number,
		scrollToColumn?: number,
		scrollTop?: number,
		scrollToRow?: number,
		onScrollStart?: (x: number, y: number) => void,
		onScrollEnd?: (x: number, y: number) => void,
		onContentHeightChange?: (newHeight: number) => void,
		onRowClick?: (event: ___React.SyntheticEvent, rowIndex: number) => void,
		onRowDoubleClick?: (event: ___React.SyntheticEvent, rowIndex: number) => void,
		onRowMouseDown?: (event: ___React.SyntheticEvent, rowIndex: number) => void,
		onRowMouseEnter?: (event: ___React.SyntheticEvent, rowIndex: number) => void,
		onRowMouseLeave?: (event: ___React.SyntheticEvent, rowIndex: number) => void,
		onColumnResizeEndCallback?: (newColumnWidth: number, columnKey: string) => void,
		isColumnResizing?: boolean
	}

	declare interface ColumnProps {
		align?: string,
		fixed?: boolean,
		header?: string | ___React.ReactElement<any> | ((props: CellProps) => (string | ___React.ReactElement<any>)),
		cell?: string | ___React.ReactElement<any> | ((props: CellProps) => (string | ___React.ReactElement<any>)),
		footer?: string | ___React.ReactElement<any> | ((props: CellProps) => (string | ___React.ReactElement<any>)),
		columnKey?: string | number,
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
		header: string | ___React.ReactElement<any> | ((props: CellProps) => (string | ___React.ReactElement<any>))
	}

	declare export interface CellProps {
		rowIndex?: number,
		height?: number,
		width?: number,
		columnKey?: string | number
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

	declare export class Cell extends ___React$Component<CellProps, {
		
	}> {
		
	}

	
}