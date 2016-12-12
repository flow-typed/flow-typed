

declare module 'react-data-grid' {
					declare module.exports: undefined


}

declare module 'npm$namespace$AdazzleReactDataGrid' {
		declare interface GridProps {
		rowGetter: Array<Object> | ((rowIdx: number) => Object),
		rowsCount: number,
		columns?: Array<Column>,
		onRowUpdated?: (e: RowUpdateEvent) => void,
		onCellsDragged?: (e: CellDragEvent) => void,
		onDragHandleDoubleClick?: (e: DragHandleDoubleClickEvent) => void,
		onCellCopyPaste?: (e: CellCopyPasteEvent) => void,
		onGridRowsUpdated?: (e: GridRowsUpdatedEvent) => void,
		toolbar?: React.ReactElement<any>,
		contextMenu?: React.ReactElement<any>,
		rowRenderer?: React.ReactElement<any> | React.ComponentClass<any> | React.StatelessComponent<any>,
		emptyRowsView?: React.ComponentClass<any> | React.StatelessComponent<any>,
		minWidth?: number,
		minHeight?: number,
		rowHeight?: number,
		headerRowHeight?: number,
		minColumnWidth?: number,
		onColumnResize?: (index: number, width: number) => void,
		cellNavigationMode?: "none" | "loopOverRow" | "changeRow",
		onGridSort?: (sortColumn: string, sortDirection: "ASC" | "DESC" | "NONE") => void,
		onAddFilter?: (filter: Filter) => void,
		onClearFilters?: () => void,
		enableRowSelect?: boolean | "single" | "multi",
		onRowSelect?: (rows: Array<Object>) => void,
		rowKey?: string,
		enableCellSelect?: boolean,
		onCellSelected?: (coordinates: {
		rowIdx: number,
		idx: number
	}) => void,
		onCellDeSelected?: (coordinates: {
		rowIdx: number,
		idx: number
	}) => void,
		rowScrollTimeout?: number
	}

	declare interface Column {
		key: string,
		name: string,
		width?: number,
		resizable?: boolean,
		locked?: boolean,
		editable?: boolean,
		sortable?: boolean,
		filterable?: boolean,
		editor?: React.ReactElement<any>,
		formatter?: React.ReactElement<any> | React.ComponentClass<any> | React.StatelessComponent<any>,
		headerRenderer?: React.ReactElement<any> | React.ComponentClass<any> | React.StatelessComponent<any>,
		events?: {
		[name: string]: ColumnEventCallback
	}
	}

	declare interface ColumnEventCallback {
		(ev: React.SyntheticEvent, args: {
		rowIdx: number,
		idx: number,
		name: string
	}): void
	}

	declare interface RowUpdateEvent {
		rowIdx: number,
		updated: Object,
		cellKey: string,
		key: string
	}

	declare interface CellDragEvent {
		cellKey: string,
		fromRow: number,
		toRow: number,
		value: any
	}

	declare interface DragHandleDoubleClickEvent {
		rowIdx: number,
		idx: number,
		rowData: Object,
		e: React.SyntheticEvent
	}

	declare interface CellCopyPasteEvent {
		rowIdx: number,
		value: any,
		fromRow: number,
		toRow: number,
		cellKey: string
	}

	declare interface GridRowsUpdatedEvent {
		cellKey: string,
		fromRow: number,
		toRow: number,
		updated: Object,
		action: "cellUpdate" | "cellDrag" | "columnFill" | "copyPaste"
	}

	declare interface Filter {
		columnKey: string,
		filterTerm: string
	}

		declare export class ReactDataGrid extends React$Component<GridProps, {
		
	}> {
		
	}

	
}

declare module 'ReactDataGrid' {
				declare export class Row extends React$Component<any, any> {
		
	}

	declare export class Cell extends React$Component<any, any> {
		
	}

	
}

declare module 'Editors' {
				declare export class AutoComplete extends React$Component<any, {
		
	}> {
		
	}

	declare export class DropDownEditor extends React$Component<any, {
		
	}> {
		
	}

	declare export class SimpleTextEditor extends React$Component<any, {
		
	}> {
		
	}

	declare export class CheckboxEditor extends React$Component<any, {
		
	}> {
		
	}

	
}

declare module 'Formatters' {
				declare export class ImageFormatter extends React$Component<any, {
		
	}> {
		
	}

	
}

declare module 'npm$namespace$AdazzleReactDataGridPlugins' {
				declare export class Toolbar extends React$Component<any, any> {
		
	}

	
}

declare module 'Menu' {
			declare export function connect(Menu: any): any

	declare export function ContextMenuLayer(identifier: any, configure?: (props: any) => any): (Component: any) => any

	declare export class ContextMenu extends React$Component<any, {
		
	}> {
		
	}

	declare export class MenuHeader extends React$Component<any, {
		
	}> {
		
	}

	declare export class MenuItem extends React$Component<any, {
		
	}> {
		
	}

	declare export class SubMenu extends React$Component<any, {
		
	}> {
		
	}

	
}

declare module 'global' {
		declare interface Window {
		ReactDataGridPlugins: {
		Editors: typeof Editors,
		Formatters: typeof Formatters,
		Toolbar: typeof Toolbar,
		Menu: typeof Menu
	}
	}

			
}