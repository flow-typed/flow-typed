

declare module 'jqgrid' {
		declare interface JQueryJqGridColumn {
		align?: "left" | "center" | "right",
		cellattr?: (rowId: any, val: any, rowObject: any, cm: any, rdata: any) => string,
		classes?: string,
		datefmt?: string,
		editable?: boolean,
		formatter?: "integer" | "number" | "currency" | "date" | "email" | "link" | "showlink" | "checkbox" | "select" | "actions" | ((
		cellvalue: any, options: {
		rowId: any,
		colModel: any
	}, rowObject: any
	) => any),
		hidden?: boolean,
		index?: string,
		key?: boolean,
		label?: string,
		name: string,
		search?: boolean,
		sortable?: boolean,
		width?: number
	}

	declare interface IJqGridJsonReader {
		repeatitems: boolean,
		root: string | ((obj: any) => any),
		page: string | ((obj: any) => number),
		total: string | ((obj: any) => number),
		records: string | ((obj: {
		data: any[]
	}) => number)
	}

	declare interface JQueryJqGridOptions {
		autoencode?: boolean,
		autoWidth?: boolean,
		caption?: string,
		colModel?: JQueryJqGridColumn[],
		colNames?: string[],
		data?: any[],
		datatype?: "xml" | "xmlstring" | "json" | "jsonstring" | "local" | "javascript" | Function | "clientSide",
		forceFit?: boolean,
		gridview?: boolean,
		height?: number | string | "auto",
		loadonce?: boolean,
		jsonReader?: IJqGridJsonReader,
		mtype?: "GET" | "POST",
		multiboxonly?: boolean,
		multiselect?: boolean,
		pager?: string,
		rowList?: number[],
		rowNum?: number,
		shrinkToFit?: boolean | number,
		sortname?: string,
		sortorder?: "asc" | "desc",
		url?: string | "clientArray",
		viewrecords?: boolean,
		width?: number,
		gridComplete?: () => void,
		onRightClickRow?: (rowid: any, iRow: number, iCol: number, e: Event) => void,
		onSelectRow?: (id: string, status: any, e: Event) => void
	}

	declare interface JQueryJqGridStatic {
		(): JQuery,
		(gridName: string): any,
		(gridName: string, propName: string): any,
		(gridName: string, obj: any): any,
		(gridName: string, id: any, colname: any): any,
		(options: JQueryJqGridOptions): JQuery
	}

	declare interface JQueryStatic {
		jqGrid?: JQueryJqGridStatic
	}

	declare interface JQuery {
		jqGrid?: JQueryJqGridStatic,
		addJSONData(data: any[]): void,
		editRow(rowid: any, keys?: boolean): void,
		getGridParam(name: string): any,
		restoreRow(rowId: any, afterRestoreFunc?: (response: any) => void): void,
		saveRow(
		rowid: string, successfunc?: (response: any) => boolean, url?: string, extraparam?: any
	): void,
		saveRow(rowid: string, successfunc?: boolean, url?: string, extraparam?: any): void,
		setGridParam(obj: any): void
	}

			
}