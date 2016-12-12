

declare module 'jquery.dataTables-1.9.4' {
		declare interface JQuery {
		dataTable(param?: DataTables.Options): DataTables.DataTable
	}

			
}

declare module 'npm$namespace$DataTables' {
		declare export interface DataTable {
		$(selector: string, opts?: RowParams): JQuery,
		$(selector: Node[], opts?: RowParams): JQuery,
		$(selector: JQuery, opts?: RowParams): JQuery,
		_(selector: string, opts?: RowParams): any[],
		_(selector: Node[], opts?: RowParams): any[],
		_(selector: JQuery, opts?: RowParams): any[],
		fnAddData(data: any, redraw?: boolean): number[],
		fnAdjustColumnSizing(redraw?: boolean): void,
		fnClearTable(redraw?: boolean): void,
		fnClose(node: Node): number,
		fnDeleteRow(index: number, callback?: () => void, redraw?: boolean): any[],
		fnDeleteRow(tr: Node, callback?: () => void, redraw?: boolean): any[],
		fnDestroy(remove?: boolean): void,
		fnDraw(complete?: boolean): void,
		fnFilter(
		input: string, column?: number, regex?: boolean, smart?: boolean, showGlobal?: boolean, caseInsensitive?: boolean
	): void,
		fnGetData(row?: Node, col?: number): any,
		fnGetData(row?: number, col?: number): any,
		fnGetNodes(row?: number): any,
		fnGetPosition(node: Node): any,
		fnIsOpen(tr: Node): boolean,
		fnOpen(node: Node, html: string, clazz: string): Node,
		fnOpen(node: Node, html: Node, clazz: string): Node,
		fnOpen(node: Node, html: JQuery, clazz: string): Node,
		fnPageChange(action: string, redraw?: boolean): void,
		fnPageChange(page: number, redraw?: boolean): void,
		fnSetColumnVis(column: number, show: boolean, redraw?: boolean): void,
		fnSettings(): Settings,
		fnSort(col: number): void,
		fnSort(col: any[][]): void,
		fnSortListener(node: Node, column: number, callback?: () => void): void,
		fnUpdate(
		data: any, row: Node, column?: number, redraw?: boolean, action?: boolean
	): number,
		fnUpdate(
		data: any, dataIndex: number, column?: number, redraw?: boolean, action?: boolean
	): number,
		fnVersionCheck(version: string): boolean
	}

	declare export interface Static {
		fnVersionCheck(version: string): boolean,
		fnIsDataTable(table: Node): boolean,
		fnTables(visible?: boolean): Node[]
	}

	declare export interface RowParams {
		filter?: string,
		order?: string,
		page?: string
	}

	declare export interface Options {
		aaData?: any[],
		aaSorting?: any[],
		aaSortingFixed?: any[],
		ajax?: any,
		aLengthMenu?: any[],
		aoColumns?: ColumnOptions[],
		aoColumnDefs?: ColumnDef[],
		aoSearchCols?: any[],
		asStripClasses?: string[],
		bAutoWidth?: boolean,
		bDeferRender?: boolean,
		bDestroy?: boolean,
		bFilter?: boolean,
		bInfo?: boolean,
		bJQueryUI?: boolean,
		bLengthChange?: boolean,
		bPaginate?: boolean,
		bProcessing?: boolean,
		bRetrieve?: boolean,
		bScrollAutoCss?: boolean,
		bScrollCollapse?: boolean,
		bScrollInfinite?: boolean,
		bServerSide?: boolean,
		bSort?: boolean,
		bSortCellsTop?: boolean,
		bSortClasses?: boolean,
		bStateSave?: boolean,
		fnCookieCallback?: CookieCallback,
		fnCreatedRow?: RowCreatedCallback,
		fnDrawCallback?: DrawCallback,
		fnFooterCallback?: FooterCallback,
		fnFormatNumber?: FormatNumber,
		fnHeaderCallback?: HeaderCallback,
		fnInfoCallback?: InfoCallback,
		fnInitComplete?: InitComplete,
		fnPreDrawCallback?: PreDrawCallback,
		fnRowCallback?: RowCallback,
		fnStateLoadCallback?: StateLoadCallback,
		fnStateLoadParams?: StateLoadParams,
		fnStateLoaded?: StateLoaded,
		fnStateSaveCallback?: StateSaveCallback,
		fnStateSaveParams?: StateSaveParams,
		iCookieDuration?: number,
		iDeferLoading?: any,
		iDisplayLength?: number,
		iDisplayStart?: number,
		iScrollLoadGap?: number,
		iTabIndex?: number,
		oLanguage?: LanguageOptions,
		oSearch?: any,
		sAjaxDataProp?: string,
		sAjaxSource?: string,
		sCookiePrefix?: string,
		sDom?: string,
		sPaginationType?: string,
		sScrollX?: string,
		sScrollXInner?: string,
		sScrollY?: string,
		sServerMethod?: string
	}

	declare export interface LanguageOptions {
		oAria?: AriaOptions,
		oPaginate?: PaginateOptions,
		sEmptyTable?: string,
		sInfo?: string,
		sInfoEmpty?: string,
		sInfoFiltered?: string,
		sInfoPostFix?: string,
		sInfoThousands?: string,
		sLengthMenu?: string,
		sLoadingRecords?: string,
		sProcessing?: string,
		sSearch?: string,
		sUrl?: string,
		sZeroRecords?: string
	}

	declare export interface AriaOptions {
		sSortAscending?: string,
		sSortDescending?: string
	}

	declare export interface PaginateOptions {
		sFirst?: string,
		sLast?: string,
		sNext?: string,
		sPrevious?: string
	}

	declare export interface ColumnOptions {
		aDataSort?: number[],
		asSorting?: string[],
		bSearchable?: boolean,
		bSortable?: boolean,
		bVisible?: boolean,
		_bAutoType?: boolean,
		fnCreatedCell?: CreatedCell,
		iDataSort?: number,
		mData?: any,
		mRender?: any,
		sCellType?: string,
		sClass?: string,
		sContentPadding?: string,
		sDefaultContent?: string,
		sName?: string,
		sSortDataType?: string,
		sSortingClass?: string,
		sTitle?: string,
		sType?: string,
		sWidth?: string
	}

	declare export interface ColumnDef {
		aTargets: any[]
	}

	declare export interface Settings {
		oFeatures: Features,
		oScroll: ScrollingSettings,
		oLanguage: {
		fnInfoCallback: InfoCallback
	},
		oBrowser: {
		bScrollOversize: boolean
	},
		aanFeatures: Node[][],
		aoData: Row[],
		aiDisplay: number[],
		aiDisplayMaster: number[],
		aoColumns: Column[],
		aoHeader: any[],
		aoFooter: any[],
		asDataSearch: string[],
		oPreviousSearch: any,
		aoPreSearchCols: any[],
		aaSorting: any[][],
		aaSortingFixed: any[][],
		asStripeClasses: string[],
		asDestroyStripes: string[],
		sDestroyWidth: number,
		aoRowCallback: RowCallback[],
		aoHeaderCallback: HeaderCallback[],
		aoFooterCallback: FooterCallback[],
		aoDrawCallback: DrawCallback[],
		aoRowCreatedCallback: RowCreatedCallback[],
		aoPreDrawCallback: PreDrawCallback[],
		aoInitComplete: InitComplete[],
		aoStateSaveParams: StateSaveParams[],
		aoStateLoadParams: StateLoadParams[],
		aoStateLoaded: StateLoaded[],
		sTableId: string,
		nTable: Node,
		nTHead: Node,
		nTFoot: Node,
		nTBody: Node,
		nTableWrapper: Node,
		bDeferLoading: boolean,
		bInitialized: boolean,
		aoOpenRows: any[],
		sDom: string,
		sPaginationType: string,
		iCookieDuration: number,
		sCookiePrefix: string,
		fnCookieCallback: CookieCallback,
		aoStateSave: StateSaveCallback[],
		aoStateLoad: StateLoadCallback[],
		oLoadedState: any,
		sAjaxSource: string,
		sAjaxDataProp: string,
		bAjaxDataGet: boolean,
		jqXHR: any,
		fnServerData: any,
		aoServerParams: any[],
		sServerMethod: string,
		fnFormatNumber: FormatNumber,
		aLengthMenu: any[],
		iDraw: number,
		bDrawing: boolean,
		iDrawError: number,
		_iDisplayLength: number,
		_iDisplayStart: number,
		_iDisplayEnd: number,
		_iRecordsTotal: number,
		_iRecordsDisplay: number,
		bJUI: boolean,
		oClasses: any,
		bFiltered: boolean,
		bSorted: boolean,
		bSortCellsTop: boolean,
		oInit: any,
		aoDestroyCallback: any[],
		fnRecordsTotal: () => number,
		fnRecordsDisplay: () => number,
		fnDisplayEnd: () => number,
		oInstance: any,
		sInstance: string,
		iTabIndex: number,
		nScrollHead: Node,
		nScrollFoot: Node
	}

	declare export interface Features {
		bAutoWidth: boolean,
		bDeferRender: boolean,
		bFilter: boolean,
		bInfo: boolean,
		bLengthChange: boolean,
		bPaginate: boolean,
		bProcessing: boolean,
		bServerSide: boolean,
		bSort: boolean,
		bSortClasses: boolean,
		bStateSave: boolean
	}

	declare export interface ScrollingSettings {
		bAutoCss: boolean,
		bCollapse: boolean,
		bInfinite: boolean,
		iBarWidth: number,
		iLoadGap: number,
		sX: string,
		sY: string
	}

	declare export interface Row {
		nTr: Node,
		_aData: any,
		_aSortData: any[],
		_anHidden: Node[],
		_sRowStripe: string
	}

	declare export interface Column {
		aDataSort: any,
		asSorting: string[],
		bSearchable: boolean,
		bSortable: boolean,
		bVisible: boolean,
		_bAutoType: boolean,
		fnCreatedCell: CreatedCell,
		fnGetData: (data: any, specific: string) => any,
		fnSetData: (data: any, value: any) => void,
		mData: any,
		mRender: any,
		nTh: Node,
		nIf: Node,
		sClass: string,
		sContentPadding: string,
		sDefaultContent: string,
		sName: string,
		sSortDataType: string,
		sSortingClass: string,
		sSortingClassJUI: string,
		sTitle: string,
		sType: string,
		sWidth: string,
		sWidthOrig: string
	}

	declare export interface CookieCallback {
		(name: string, data: any, expires: string, path: string, cookie: string): void
	}

	declare export interface RowCreatedCallback {
		(row: Node, data: any[], dataIndex: number): void
	}

	declare export interface DrawCallback {
		(settings: Settings): void
	}

	declare export interface FooterCallback {
		(foot: Element, data: any[], start: number, end: number, display: number[]): void
	}

	declare export interface FormatNumber {
		(toFormat: number): string
	}

	declare export interface HeaderCallback {
		(head: Element, data: any[], start: number, end: number, display: number[]): void
	}

	declare export interface InfoCallback {
		(settings: Settings, start: number, end: number, max: number, total: number, pre: string): string
	}

	declare export interface InitComplete {
		(settings: Settings, json: any): void
	}

	declare export interface PreDrawCallback {
		(settings: Settings): boolean
	}

	declare export interface RowCallback {
		(row: Settings, data: any[], displayIndex: number, displayIndexFull: number): void
	}

	declare export interface StateLoadCallback {
		(settings: Settings): any
	}

	declare export interface StateLoadParams {
		(settings: Settings, data: any): void
	}

	declare export interface StateLoaded {
		(settings: Settings, data: any): void
	}

	declare export interface StateSaveCallback {
		(settings: any, data: any): void
	}

	declare export interface StateSaveParams {
		(settings: any, data: any): void
	}

	declare export interface CreatedCell {
		(nTd: Node, cellData: any, rowData: any, row: number, col: number): void
	}

			
}