

declare module 'dynatable' {
		declare interface JQuery {
		dynatable: JQueryDynatable.Dynatable
	}

	declare interface JQueryStatic {
		dynatableSetup(options: JQueryDynatable.Options): void
	}

			
}

declare module 'npm$namespace$JQueryDynatable' {
		declare interface Features {
		paginate?: boolean,
		sort?: boolean,
		pushState?: boolean,
		search?: boolean,
		recordCount?: boolean,
		perPageSelect?: boolean
	}

	declare interface Column {
		index: number,
		label: string,
		id: string,
		attributeWriter: (record: any) => any,
		attributeReader: (cell: Element, record: any) => string,
		sorts: Array<string>,
		hidden: boolean,
		textAlign: string
	}

	declare interface Table {
		defaultColumnIdStyle?: string,
		columns?: Array<JQueryDynatable.Column>,
		headRowSelector?: string,
		bodyRowSelector?: string,
		headRowClass?: string
	}

	declare interface Inputs {
		queries?: JQuery,
		sorts?: any,
		multisort?: Array<string>,
		page?: any,
		queryEvent?: string,
		recordCountTarget?: JQuery,
		recordCountPlacement?: string,
		paginationLinkTarget?: string | Element | JQuery,
		paginationLinkPlacement?: string,
		paginationClass?: string,
		paginationLinkClass?: string,
		paginationPrevClass?: string,
		paginationNextClass?: string,
		paginationActiveClass?: string,
		paginationDisabledClass?: string,
		paginationPrev?: string,
		paginationNext?: string,
		paginationGap?: Array<number>,
		searchTarget?: string | Element | JQuery,
		searchPlacement?: string,
		searchText?: string,
		perPageTarget?: string | Element | JQuery,
		perPagePlacement?: string,
		perPageText?: string,
		pageText?: string,
		recordCountPageBoundTemplate?: string,
		recordCountPageUnboundedTemplate?: string,
		recordCountTotalTemplate?: string,
		recordCountFilteredTemplate?: string,
		recordCountText?: string,
		recordCountTextTemplate?: string,
		recordCountTemplate?: string,
		processingText?: string
	}

	declare interface Dataset {
		ajax?: boolean,
		ajaxUrl?: string,
		ajaxCache?: boolean,
		ajaxOnLoad?: boolean,
		ajaxMethod?: string,
		ajaxDataType?: string,
		totalRecordCount?: string,
		queries?: Object,
		queryRecordCount?: string,
		page?: number,
		perPageDefault?: number,
		perPageOptions?: Array<number>,
		sorts?: Object,
		sortsKeys?: Array<string>,
		sortTypes?: Object,
		records?: any
	}

	declare interface Writers {
		_rowWriter?: (
		rowIndex: number, record: any, columns: Array<Column>, cellWriter: Function
	) => string,
		_cellWriter?: (column: Column, record: any) => string,
		_attributeWriter?: (record: any) => any
	}

	declare interface Readers {
		_rowReader?: (index: number, thisRef: any, record: any) => any,
		_attributeReader?: (cell: Element, record: any) => any
	}

	declare interface Params {
		dynatable?: string,
		queries?: string,
		sorts?: string,
		page?: string,
		perPage?: string,
		offset?: string,
		records?: string,
		record?: Object,
		queryRecordCount?: string,
		totalRecordCount?: string
	}

	declare interface Options {
		features?: Features,
		table?: Table,
		inputs?: Inputs,
		dataset?: Dataset,
		writers?: Writers,
		readers?: Readers,
		params?: Params
	}

	declare interface DOM {
		update(): void
	}

	declare interface DOMColumns {
		add(
		$column: JQuery, position: number, skipAppend?: boolean, skipUpdate?: boolean
	): void,
		attachGeneratedAttributes($cell: JQuery): JQuery,
		generate($cell?: JQuery): JQuery,
		getFromTable(): void | JQuery,
		init(): void,
		initOnLoad(): boolean,
		remove(columnIndexOrId: number | string): void,
		removeFromArray(index: number): void,
		removeFromTable(columnId: string): void
	}

	declare interface InputsSearch {
		attach(): void,
		create(): JQuery,
		init(): void,
		initOnLoad(): boolean
	}

	declare interface PaginationLinks {
		attach(): void,
		buildLink(
		page: number, label: string | number, linkClass: string, conditional: boolean, conditionalClass: string
	): string,
		create(): string,
		init(): void,
		initOnLoad(): boolean
	}

	declare interface PaginationPage {
		init(): void,
		initOnLoad(): boolean,
		set(page: number): void
	}

	declare interface PaginationPerPage {
		attach(): void,
		create(): JQuery,
		init(): void,
		initOnLoad(): boolean,
		set(number: number, skipResetPage?: boolean): void
	}

	declare interface ProcessingIndicator {
		attach(): void,
		create(): JQuery,
		hide(): void,
		init(): void,
		position(): JQuery,
		show(): void
	}

	declare interface Queries {
		add(name: string, value: any): Dynatable,
		functions: QueriesFunctions,
		init(): void,
		initOnLoad(): boolean,
		remove(name: string): Dynatable,
		run(): any,
		runSearch(q: any): void,
		setupInputs(): void
	}

	declare interface QueriesFunctions {
		search(record: any, queryValue: string): boolean
	}

	declare interface Records {
		count(): number,
		getFromTable(): Array<Object>,
		init(): void,
		initOnLoad(): boolean,
		pageBounds(): Array<number>,
		paginate(): void,
		resetOriginal(): void,
		sort(): number,
		updateFromJson(data: any): void
	}

	declare interface RecordsCount {
		attach(): void,
		create(): JQuery,
		init(): void,
		initOnLoad(): boolean
	}

	declare interface Settings {
		dataset: Dataset,
		features: Features,
		inputs: Inputs,
		params: Params,
		readers: Readers,
		table: Table,
		writers: Writers
	}

	declare interface Sorts {
		add(attr: string, direction: number): Dynatable,
		clear(): void,
		functions: SortsFunctions,
		guessType(a: any, b: any, attr: string): string,
		init(): void,
		initOnLoad(): boolean,
		remove(attr: string): Dynatable
	}

	declare interface SortsFunctions {
		number(a: any, b: any, attr: string, direction: number): number,
		originalPlacement(a: any, b: any): number,
		string(a: any, b: any, attr: string, direction: number): number
	}

	declare interface SortsHeaders {
		appendArrowDown($link: JQuery): void,
		appendArrowUp($link: JQuery): void,
		attach(): void,
		attachOne(cell: Element): void,
		create(cell: Element): JQuery,
		init(): void,
		initOnLoad(): boolean,
		removeAll(): void,
		removeAllArrows(): void,
		removeArrow($link: JQuery): void,
		removeOne(cell: Element): void,
		sortedByColumn($link: JQuery, column: Column): boolean,
		sortedByColumnValue(column: Column): number,
		toggleSort(e: Event, $link: JQuery, column: Column): void
	}

	declare interface State {
		init(): void,
		initOnLoad(): boolean,
		pop(event: Event): void,
		push(data: Object): void
	}

	declare interface Dynatable {
		(options?: Options): JQuery,
		init(element: Element, options: Options): Dynatable,
		process(skipPushState?: boolean): void,
		$element: JQuery,
		dom: DOM,
		domColumns: DOMColumns,
		element: Element,
		inputsSearch: InputsSearch,
		paginationLinks: PaginationLinks,
		paginationPage: PaginationPage,
		paginationPerPage: PaginationPerPage,
		processingIndicator: ProcessingIndicator,
		queries: Queries,
		records: Records,
		recordsCount: RecordsCount,
		settings: Settings,
		sorts: Sorts,
		sortsHeaders: SortsHeaders,
		state: State
	}

			
}