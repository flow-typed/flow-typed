

declare module 'gijgo' {
		declare interface JQuery {
		grid(settings: Gijgo.GridSettings<any>): Gijgo.Grid<any, any>,
		grid<Entity>(settings: Gijgo.GridSettings<Entity>): Gijgo.Grid<Entity, any>,
		grid<Entity, Params>(
		settings: Gijgo.GridSettings<Entity>
	): Gijgo.Grid<Entity, Params>,
		dialog(settings: Gijgo.DialogSettings): Gijgo.Dialog
	}

			
}

declare module 'Gijgo' {
		declare interface GridPager {
		limit?: number,
		sizes?: Array<number>,
		leftControls?: any,
		rightControls?: any
	}

	declare interface GridColumn {
		align?: string,
		cssClass?: string,
		decimalDigits?: number,
		editor?: any,
		events?: any,
		field?: string,
		format?: string,
		headerCssClass?: string,
		hidden?: boolean,
		icon?: string,
		minWidth?: number,
		priority?: number,
		sortable?: boolean,
		stopPropagation?: boolean,
		title?: string,
		tmpl?: string,
		tooltip?: string,
		type?: string,
		width?: number
	}

	declare interface GridDefaultParams {
		direction?: string,
		limit?: string,
		page?: string,
		sortBy?: string
	}

	declare interface GridMapping {
		dataField?: string,
		totalRecordsField?: string
	}

	declare interface GridSettings<Entity> {
		autoGenerateColumns?: boolean,
		autoLoad?: boolean,
		columns?: Array<GridColumn>,
		dataSource?: any,
		defaultColumnSettings?: GridColumn,
		defaultParams?: GridDefaultParams,
		detailTemplate?: string,
		fontSize?: string,
		mapping?: string,
		minWidth?: number,
		notFoundText?: string,
		pager?: GridPager,
		primaryKey?: string,
		resizableColumns?: boolean,
		resizeCheckInterval?: number,
		responsive?: boolean,
		selectionMethod?: string,
		selectionType?: string,
		showHiddenColumnsAsDetails?: boolean,
		title?: string,
		toolbarTemplate?: string,
		uiLibrary?: string,
		width?: number,
		params?: any,
		beforeEmptyRowInsert?: (e: any, $row: JQuery) => any,
		cellDataBound?: (
		e: any, $wrapper: JQuery, id: string, column: GridColumn, record: Entity
	) => any,
		cellDataChanged?: (
		e: any, $cell: JQuery, column: GridColumn, record: Entity, oldValue: any, newValue: any
	) => any,
		columnHide?: (e: any, column: GridColumn) => any,
		columnShow?: (e: any, column: GridColumn) => any,
		dataBinding?: (e: any, records: Array<Entity>) => any,
		dataBound?: (e: any, records: Array<Entity>, totalRecords: number) => any,
		destroying?: (e: any) => any,
		detailCollapse?: (e: any, detailWrapper: JQuery, record: Entity) => any,
		detailExpand?: (e: any, detailWrapper: JQuery, record: Entity) => any,
		initialized?: (e: any) => any,
		pageChanging?: (e: any, newPage: number) => any,
		pageSizeChange?: (e: any, newPage: number) => any,
		resize?: (e: any, newWidth: number, oldWidth: number) => any,
		rowDataBound?: (e: any, $row: JQuery, id: string, record: Entity) => any,
		rowRemoving?: (e: any, $row: JQuery, id: string, record: Entity) => any,
		rowSelect?: (e: any, $row: JQuery, id: string, record: Entity) => any,
		rowUnselect?: (e: any, $row: JQuery, id: string, record: Entity) => any
	}

	declare interface Grid<Entity, Params> {
		addRow(record: Entity): Grid<Entity, Params>,
		clear(showNotFoundText?: boolean): Grid<Entity, Params>,
		count(): number,
		destroy(keepTableTag?: boolean, keepWrapperTag?: boolean): void,
		getAll(): Array<Entity>,
		getById(id: string): Entity,
		getChanges(): Array<Entity>,
		getSelected(): string,
		getSelections(): Array<string>,
		hideColumn(field: string): Grid<Entity, Params>,
		makeResponsive(): void,
		reload(params?: Params): Grid<Entity, Params>,
		removeRow(id: string): Grid<Entity, Params>,
		render(response: any): Grid<Entity, Params>,
		selectAll(): Grid<Entity, Params>,
		setSelected(id: string | number): Grid<Entity, Params>,
		showColumn(field: string): Grid<Entity, Params>,
		title(text: any): any,
		unSelectAll(): Grid<Entity, Params>,
		updateRow(id: string, record: Entity): Grid<Entity, Params>
	}

	declare interface DialogSettings {
		autoOpen?: boolean,
		closeOnEscape?: boolean,
		draggable?: boolean,
		height?: number | string,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number,
		modal?: boolean,
		resizable?: boolean,
		title?: string,
		uiLibrary?: string,
		width?: number,
		closed?: (e: any) => any,
		closing?: (e: any) => any,
		drag?: (e: any) => any,
		dragStart?: (e: any) => any,
		dragStop?: (e: any) => any,
		initialized?: (e: any) => any,
		opened?: (e: any) => any,
		opening?: (e: any) => any,
		resize?: (e: any) => any,
		resizeStart?: (e: any) => any,
		resizeStop?: (e: any) => any
	}

	declare interface Dialog {
		close(): Dialog,
		isOpen(): boolean,
		open(): Dialog
	}

			
}