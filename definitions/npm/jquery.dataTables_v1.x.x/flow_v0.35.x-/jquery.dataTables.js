

declare module 'jquery.dataTables' {
		declare interface JQuery {
		DataTable(param?: DataTables.Settings): DataTables.DataTable
	}

			
}

declare module 'npm$namespace$DataTables' {
		declare export interface DataTable {
		data(): DataTable,
		order: OrderMethods,
		cell(
		cellSelector: (string | Node | Function | JQuery | Object) | (string | Node | Function | JQuery | Object)[], modifier?: ObjectSelectorModifier
	): CellMethods,
		cell(
		rowSelector: (string | Node | Function | JQuery | Object) | (string | Node | Function | JQuery | Object)[], cellSelector: (string | Node | Function | JQuery | Object) | (string | Node | Function | JQuery | Object)[], modifier?: ObjectSelectorModifier
	): CellMethods,
		cells(modifier?: ObjectSelectorModifier): CellsMethods,
		cells(
		cellSelector: (string | Node | Function | JQuery | Object) | (string | Node | Function | JQuery | Object)[], modifier?: ObjectSelectorModifier
	): CellsMethods,
		cells(
		rowSelector: (string | Node | Function | JQuery | Object) | (string | Node | Function | JQuery | Object)[], cellSelector: (string | Node | Function | JQuery | Object) | (string | Node | Function | JQuery | Object)[], modifier?: ObjectSelectorModifier
	): CellsMethods,
		column: ColumnMethodsModel,
		columns: ColumnsMethodsModel,
		row: RowMethodsModel,
		rows: RowsMethodsModel,
		table(
		tableSelector: (string | Node | Function | JQuery | Object) | (string | Node | Function | JQuery | Object)[]
	): TableMethods,
		tables(): TablesMethods,
		tables(
		tableSelector: (string | Node | Function | JQuery | Object) | (string | Node | Function | JQuery | Object)[]
	): TablesMethods
	}

	declare export interface DataTables {
		[index: number]: DataTable
	}

	declare interface ObjectSelectorModifier {
		order?: string,
		search?: string,
		page?: string
	}

	declare interface DataTableCore {
		$(
		selector: string | Node | Node[] | JQuery, modifier?: ObjectSelectorModifier
	): JQuery,
		ajax: AjaxMethodModel,
		clear(): DataTable,
		destroy(remove?: boolean): DataTable,
		draw(paging?: boolean | string): DataTable,
		i18n(token: string, def: any | string, numeric?: number): string,
		init(): Settings,
		off(event: string, callback?: Function): DataTable,
		on(event: string, callback: Function): DataTable,
		one(event: string, callback: Function): DataTable,
		page: PageMethods,
		search(): string,
		search(
		input: string, regex?: boolean, smart?: boolean, caseInsen?: boolean
	): DataTable,
		settings(): DataTable,
		state: StateMethods
	}

	declare interface AjaxMethods {
		load(callback?: Function, resetPaging?: boolean): DataTable
	}

	declare interface AjaxMethodModel {
		json(): Object,
		params(): Object,
		reload(callback?: Function, resetPaging?: boolean): DataTable,
		url(): string,
		url(url: string): AjaxMethods
	}

	declare interface OrderMethods {
		(): (string | number)[][],
		(order?: (string | number)[]): DataTable,
		(order?: (string | number)[][]): DataTable,
		(order: (string | number)[], ...args: any[]): DataTable,
		listener(node: string | Node | JQuery, column: number, callback: Function): DataTable
	}

	declare interface PageMethods {
		(): number,
		(page: number | string): DataTable,
		info(): PageMethodeModelInfoReturn,
		len(): number,
		len(length: number): DataTable
	}

	declare interface PageMethodeModelInfoReturn {
		page: number,
		pages: number,
		start: number,
		end: number,
		length: number,
		recordsTotal: number,
		recordsDisplay: number,
		serverSide: boolean
	}

	declare interface StateMethods {
		(): StateReturnModel,
		clear(): DataTable,
		loaded(): StateReturnModel,
		save(): DataTable
	}

	declare interface StateReturnModel {
		time: number,
		start: number,
		length: number,
		order: (string | number)[][],
		search: SearchSettings,
		columns: StateReturnModelColumns[]
	}

	declare interface StateReturnModelColumns {
		search: SearchSettings,
		visible: boolean
	}

	declare interface UtilityMethods {
		any(): boolean,
		concat(a: Object, ...b: Object[]): DataTable,
		count(): number,
		each(fn: Function): DataTable,
		eq(idx: number): DataTable,
		filter(fn: Function): DataTable,
		flatten(): DataTable,
		indexOf(value: any): number,
		join(separator: string): string,
		lastIndexOf(value: any): number,
		length: number,
		map(fn: Function): DataTable,
		pluck(property: number | string): DataTable,
		pop(): any,
		push(value_1: any | any[], ...value_2: any[]): number,
		reduce(fn: Function, initialValue?: any): any,
		reduceRight(fn: Function, initialValue?: any): any,
		reverse(): DataTable,
		shift(): any,
		sort(fn?: Function): DataTable,
		splice(
		index: number, howMany: number, value_1?: any | any[], ...value_2: any[]
	): any[],
		to$(): JQuery,
		toArray(): any[],
		toJQuery(): JQuery,
		unique(): DataTable,
		unshift(value_1: any | any[], ...value_2: any[]): number
	}

	declare interface CommonSubMethods {
		cache(t: string): DataTable
	}

	declare interface CommonCellMethods {
		invalidate(source?: string): DataTable,
		render(t: string): any
	}

	declare interface CellMethods {
		data(): any,
		data(data: any): DataTable,
		index(): CellIndexReturn,
		node(): Node
	}

	declare interface CellIndexReturn {
		row: number,
		column: number,
		columnVisible: number
	}

	declare interface CellsMethods {
		data(): DataTable,
		every(
		fn: (
		cellRowIdx: number, cellColIdx: number, tableLoop: number, cellLoop: number
	) => void
	): DataTable,
		indexes(): DataTable,
		nodes(): DataTable
	}

	declare interface CommonColumnMethod {
		footer(): any,
		header(): Node,
		order(direction: string): DataTable,
		visible(): boolean,
		visible(show: boolean, redrawCalculations?: boolean): DataTable
	}

	declare interface ColumnMethodsModel {
		(columnSelector: any, modifier?: ObjectSelectorModifier): ColumnMethods,
		index(t: string, index: number): number
	}

	declare interface ColumnMethods {
		data(): DataTable,
		dataSrc(): number | string | Function,
		index(t?: string): DataTable,
		nodes(): DataTable[]
	}

	declare interface ColumnsMethodsModel {
		(modifier?: ObjectSelectorModifier): ColumnsMethods,
		(columnSelector: any, modifier?: ObjectSelectorModifier): ColumnsMethods,
		adjust(): DataTable
	}

	declare interface ColumnsMethods {
		data(): DataTable,
		dataSrc(): DataTable,
		every(fn: (colIdx: number, tableLoop: number, colLoop: number) => void): DataTable,
		indexes(t?: string): DataTable,
		nodes(): DataTable[][]
	}

	declare interface CommonRowMethod {
		invalidate(source?: string): DataTable
	}

	declare interface RowChildMethodModel {
		(): JQuery,
		(showRemove: boolean): RowChildMethods,
		(data: (string | Node | JQuery) | (string | Node | JQuery)[], className?: string): RowChildMethods,
		hide(): DataTable,
		isShown(): DataTable,
		remove(): DataTable,
		show(): DataTable
	}

	declare interface RowChildMethods {
		hide(): DataTable,
		remove(): DataTable,
		show(): DataTable
	}

	declare interface RowMethodsModel {
		(rowSelector: any, modifier?: ObjectSelectorModifier): RowMethods,
		add(data: any[] | Object): DataTable
	}

	declare interface RowMethods {
		child: RowChildMethodModel,
		data(): any[] | Object,
		data(d: any[] | Object): DataTable,
		id(hash?: boolean): string,
		id(hash?: boolean): string,
		index(): number,
		node(): Node,
		remove(): Node
	}

	declare interface RowsMethodsModel {
		(modifier?: ObjectSelectorModifier): RowsMethods,
		(rowSelector: any, modifier?: ObjectSelectorModifier): RowsMethods,
		add(data: any[]): DataTable
	}

	declare interface RowsMethods {
		data(): DataTable,
		data(d: any[] | Object): DataTable,
		every(fn: (rowIdx: number, tableLoop: number, rowLoop: number) => void): DataTable,
		ids(hash?: boolean): DataTable,
		indexes(): DataTable,
		nodes(): DataTable,
		remove(): DataTable
	}

	declare interface TableMethods {
		footer(): Node,
		header(): Node,
		body(): Node,
		container(): Node,
		node(): Node
	}

	declare interface TablesMethods {
		footer(): DataTable,
		header(): DataTable,
		body(): DataTable,
		containers(): DataTable,
		nodes(): DataTable
	}

	declare export interface StaticFunctions {
		isDataTable(table: string): boolean,
		tables(
		visible?: boolean | ObjectTablesStatic
	): DataTables.DataTable[] | DataTables.DataTable,
		versionCheck(version: string): boolean,
		util: StaticUtilFunctions,
		Api(selector: string | Node | Node[] | JQuery): DataTables.DataTable
	}

	declare export interface StaticUtilFunctions {
		escapeRegex(str: string): string,
		throttle(fn: Function, period?: number): Function
	}

	declare interface ObjectTablesStatic {
		visible: boolean,
		api: boolean
	}

	declare export interface Settings {
		autoWidth?: boolean,
		deferRender?: boolean,
		info?: boolean,
		jQueryUI?: boolean,
		lengthChange?: boolean,
		ordering?: boolean,
		paging?: boolean,
		processing?: boolean,
		scrollX?: boolean,
		scrollY?: string,
		searching?: boolean,
		serverSide?: boolean,
		stateSave?: boolean,
		ajax?: string | AjaxSettings | FunctionAjax,
		data?: Object,
		columns?: ColumnSettings[],
		columnDefs?: ColumnDefsSettings[],
		deferLoading?: number | number[],
		destroy?: boolean,
		displayStart?: number,
		dom?: string,
		lengthMenu?: (number | string)[] | (number | string)[][],
		orderCellsTop?: boolean,
		orderClasses?: boolean,
		order?: (string | number)[] | (string | number)[][],
		orderFixed?: (string | number)[] | (string | number)[][] | Object,
		orderMulti?: boolean,
		pageLength?: number,
		pagingType?: string,
		retrieve?: boolean,
		renderer?: string | RendererSettings,
		rowId?: string,
		scrollCollapse?: boolean,
		search?: SearchSettings,
		searchCols?: SearchSettings[],
		searchDelay?: number,
		stateDuration?: number,
		stripeClasses?: string[],
		tabIndex?: number,
		createdRow?: FunctionCreateRow,
		drawCallback?: FunctionDrawCallback,
		footerCallback?: FunctionFooterCallback,
		formatNumber?: FunctionFormatNumber,
		headerCallback?: FunctionHeaderCallback,
		infoCallback?: FunctionInfoCallback,
		initComplete?: FunctionInitComplete,
		preDrawCallback?: FunctionPreDrawCallback,
		rowCallback?: FunctionRowCallback,
		stateLoadCallback?: FunctionStateLoadCallback,
		stateLoaded?: FunctionStateLoaded,
		stateLoadParams?: FunctionStateLoadParams,
		stateSaveCallback?: FunctionStateSaveCallback,
		stateSaveParams?: FunctionStateSaveParams,
		language?: LanguageSettings
	}

	declare export interface AjaxDataRequest {
		draw: number,
		start: number,
		length: number,
		data: any,
		order: AjaxDataRequestOrder[],
		columns: AjaxDataRequestColumn[],
		search: AjaxDataRequestSearch
	}

	declare export interface AjaxDataRequestSearch {
		value: string,
		regex: boolean
	}

	declare export interface AjaxDataRequestOrder {
		column: number,
		dir: string
	}

	declare export interface AjaxDataRequestColumn {
		data: string | number,
		name: string,
		searchable: boolean,
		orderable: boolean,
		search: AjaxDataRequestSearch
	}

	declare export interface AjaxData {
		draw: number,
		recordsTotal: number,
		recordsFiltered: number,
		data: any,
		error?: string
	}

	declare interface AjaxSettings {
		data?: Object | FunctionAjaxData,
		dataSrc?: string | Function
	}

	declare interface FunctionAjax {
		(data: Object, callback: Function, settings: SettingsLegacy): void
	}

	declare interface FunctionAjaxData {
		(data: Object, settings: Settings): string | Object
	}

	declare export interface ColumnSettings {
		cellType?: string,
		className?: string,
		contentPadding?: string,
		createdCell?: FunctionColumnCreatedCell,
		data?: number | string | ObjectColumnData | FunctionColumnData,
		defaultContent?: string,
		name?: string,
		orderable?: boolean,
		orderData?: number | number[],
		orderDataType?: string,
		orderSequence?: string[],
		render?: number | string | ObjectColumnRender | FunctionColumnRender,
		searchable?: boolean,
		title?: string,
		type?: string,
		visible?: boolean,
		width?: string
	}

	declare interface ColumnDefsSettings {
		targets: string | number | (number | string)[]
	}

	declare interface FunctionColumnCreatedCell {
		(cell: Node, cellData: any, rowData: any, row: number, col: number): void
	}

	declare interface FunctionColumnData {
		(row: any, t: string, s: any, meta: CellMetaSettings): void
	}

	declare interface ObjectColumnData {
		_: string,
		filter?: string,
		display?: string,
		type?: string,
		sort?: string
	}

	declare interface ObjectColumnRender {
		
	}

	declare interface FunctionColumnRender {
		(data: any, t: string, row: any, meta: CellMetaSettings): void
	}

	declare interface CellMetaSettings {
		row: number,
		col: number,
		settings: DataTables.Settings
	}

	declare export interface RendererSettings {
		header?: string,
		pageButton?: string
	}

	declare export interface SearchSettings {
		caseInsensitive?: boolean,
		regex?: boolean,
		smart?: boolean,
		search?: string
	}

	declare interface FunctionCreateRow {
		(row: Node, data: any[] | Object, dataIndex: number): void
	}

	declare interface FunctionDrawCallback {
		(settings: SettingsLegacy): void
	}

	declare interface FunctionFooterCallback {
		(tfoot: Node, data: any[], start: number, end: number, display: any[]): void
	}

	declare interface FunctionFormatNumber {
		(formatNumber: number): void
	}

	declare interface FunctionHeaderCallback {
		(thead: Node, data: any[], start: number, end: number, display: any[]): void
	}

	declare interface FunctionInfoCallback {
		(settings: SettingsLegacy, start: number, end: number, mnax: number, total: number, pre: string): void
	}

	declare interface FunctionInitComplete {
		(settings: SettingsLegacy, json: Object): void
	}

	declare interface FunctionPreDrawCallback {
		(settings: SettingsLegacy): void
	}

	declare interface FunctionRowCallback {
		(row: Node, data: any[] | Object, index: number): void
	}

	declare interface FunctionStateLoadCallback {
		(settings: SettingsLegacy): void
	}

	declare interface FunctionStateLoaded {
		(settings: SettingsLegacy, data: Object): void
	}

	declare interface FunctionStateLoadParams {
		(settings: SettingsLegacy, data: Object): void
	}

	declare interface FunctionStateSaveCallback {
		(settings: SettingsLegacy, data: Object): void
	}

	declare interface FunctionStateSaveParams {
		(settings: SettingsLegacy, data: Object): void
	}

	declare interface LanguageSettings {
		emptyTable?: string,
		info?: string,
		infoEmpty?: string,
		infoFiltered?: string,
		infoPostFix?: string,
		thousands?: string,
		lengthMenu?: string,
		loadingRecords?: string,
		processing?: string,
		search?: string,
		zeroRecords?: string,
		paginate?: LanguagePaginateSettings,
		aria?: LanguageAriaSettings,
		url?: string
	}

	declare interface LanguagePaginateSettings {
		first: string,
		last: string,
		next: string,
		previous: string
	}

	declare interface LanguageAriaSettings {
		sortAscending: string,
		sortDescending: string
	}

	declare interface ArrayStringNode {
		[index: string]: Node
	}

	declare export interface SettingsLegacy {
		ajax: any,
		oApi: any,
		oFeatures: FeaturesLegacy,
		oScroll: ScrollingLegacy,
		oLanguage: LanguageLegacy,
		oBrowser: {
		bScrollOversize: boolean
	},
		aanFeatures: ArrayStringNode[][],
		aoData: RowLegacy[],
		aiDisplay: number[],
		aiDisplayMaster: number[],
		aoColumns: ColumnLegacy[],
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
		aoRowCallback: FunctionRowCallback[],
		aoHeaderCallback: FunctionHeaderCallback[],
		aoFooterCallback: FunctionFooterCallback[],
		aoDrawCallback: FunctionDrawCallback[],
		aoRowCreatedCallback: FunctionCreateRow[],
		aoPreDrawCallback: FunctionPreDrawCallback[],
		aoInitComplete: FunctionInitComplete[],
		aoStateSaveParams: FunctionStateSaveParams[],
		aoStateLoadParams: FunctionStateLoadParams[],
		aoStateLoaded: FunctionStateLoaded[],
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
		fnCookieCallback: CookieCallbackLegacy,
		aoStateSave: FunctionStateSaveCallback[],
		aoStateLoad: FunctionStateLoadCallback[],
		oLoadedState: any,
		sAjaxSource: string,
		sAjaxDataProp: string,
		bAjaxDataGet: boolean,
		jqXHR: any,
		fnServerData: any,
		aoServerParams: any[],
		sServerMethod: string,
		fnFormatNumber: FunctionFormatNumber,
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

	declare export interface FeaturesLegacy {
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

	declare export interface ScrollingLegacy {
		bAutoCss: boolean,
		bCollapse: boolean,
		bInfinite: boolean,
		iBarWidth: number,
		iLoadGap: number,
		sX: string,
		sY: string
	}

	declare export interface RowLegacy {
		nTr: Node,
		_aData: any,
		_aSortData: any[],
		_anHidden: Node[],
		_sRowStripe: string
	}

	declare export interface ColumnLegacy {
		aDataSort: any,
		asSorting: string[],
		bSearchable: boolean,
		bSortable: boolean,
		bVisible: boolean,
		_bAutoType: boolean,
		fnCreatedCell: FunctionColumnCreatedCell,
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

	declare export interface CookieCallbackLegacy {
		(name: string, data: any, expires: string, path: string, cookie: string): void
	}

	declare export interface LanguageLegacy {
		oAria?: LanguageAriaLegacy,
		oPaginate?: LanguagePaginateLegacy,
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

	declare export interface LanguageAriaLegacy {
		sSortAscending?: string,
		sSortDescending?: string
	}

	declare export interface LanguagePaginateLegacy {
		sFirst?: string,
		sLast?: string,
		sNext?: string,
		sPrevious?: string
	}

			
}