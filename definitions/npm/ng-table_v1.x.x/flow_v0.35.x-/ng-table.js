

declare module 'ng-table' {
				declare class NgTableParams<T>  {
		data: T[];
		constructor(baseParameters?: NgTable.IParamValues<T>, baseSettings?: NgTable.ISettings<T>): this;
		count(): number;
		count(count: number): NgTableParams<T>;
		filter(trim?: boolean): NgTable.IFilterValues;
		filter(filter: NgTable.IFilterValues): NgTableParams<T>;
		generatePagesArray(
		currentPage?: number, totalItems?: number, pageSize?: number, maxBlocks?: number
	): NgTable.IPageButton[];
		group(): NgTable.Grouping<T>;
		group(field: string, sortDirection?: string): NgTableParams<T>;
		group(group: NgTable.Grouping<T>): NgTableParams<T>;
		hasErrorState(): boolean;
		hasFilter(): boolean;
		hasFilterChanges(): boolean;
		hasGroup(): boolean;
		hasGroup(group: string | NgTable.IGroupingFunc<T>, sortDirection?: string): boolean;
		isDataReloadRequired(): boolean;
		orderBy(): string[];
		reload<TResult>(): ng.IPromise<TResult[]>;
		settings(): NgTable.ISettings<T>;
		settings(newSettings: NgTable.ISettings<T>): NgTableParams<T>;
		sorting(): NgTable.ISortingValues;
		sorting(sorting: NgTable.ISortingValues): NgTableParams<T>;
		sorting(field: string, direction: string): NgTableParams<T>;
		page(): number;
		page(page: number): NgTableParams<T>;
		total(): number;
		total(total: number): NgTableParams<T>;
		url(asString?: boolean): {
		[name: string]: string
	} | string[]
	}

	
}

declare module 'npm$namespace$NgTable' {
	declare type Grouping<T> = IGroupValues | IGroupingFunc<T>;

	declare type FilterComparator<T> = boolean | IFilterComparatorFunc<T>;

	declare type SelectData = ISelectOption[] | ISelectDataFunc;

	declare interface IDataSettings {
		applyPaging?: boolean
	}

	declare interface IDefaults {
		params?: IParamValues<any>,
		settings?: ISettings<any>
	}

	declare interface IFilterValues {
		[name: string]: any
	}

	declare interface ISortingValues {
		[name: string]: string
	}

	declare interface IGroupValues {
		[name: string]: string
	}

	declare interface IGroupingFunc<T> {
		(item: T): string,
		sortDirection?: string
	}

	declare interface IParamValues<T> {
		page?: number,
		count?: number,
		filter?: IFilterValues,
		sorting?: ISortingValues,
		group?: string | Grouping<T>
	}

	declare interface IFilterComparatorFunc<T> {
		(actual: T, expected: T): boolean
	}

	declare interface IFilterFunc<T> {
		(data: T[], filter: IFilterValues, filterComparator: FilterComparator<T>): T[]
	}

	declare interface IFilterSettings<T> {
		filterComparator?: FilterComparator<T>,
		filterDelay?: number,
		filterDelayThreshold?: number,
		filterFilterName?: string,
		filterFn?: IFilterFunc<T>,
		filterLayout?: string
	}

	declare interface IGroupSettings {
		defaultSort?: string,
		isExpanded?: boolean
	}

	declare interface IPageButton {
		type: string,
		number?: number,
		active: boolean,
		current?: boolean
	}

	declare interface ISettings<T> {
		$loading?: boolean,
		dataset?: T[],
		dataOptions?: {
		
	},
		total?: number,
		defaultSort?: string,
		filterOptions?: IFilterSettings<T>,
		groupOptions?: IGroupSettings,
		counts?: number[],
		interceptors?: IInterceptor<T>[],
		paginationMaxBlocks?: number,
		paginationMinBlocks?: number,
		sortingIndicator?: string,
		getData?: Data.IGetDataFunc<T> | Data.IInterceptableGetDataFunc<T>,
		getGroups?: Data.IGetGroupFunc<T>
	}

	declare interface IFilterConfigValues {
		defaultBaseUrl?: string,
		defaultExt?: string,
		aliasUrls?: {
		[name: string]: string
	}
	}

	declare interface IFilterConfigProvider {
		$get: IFilterConfig,
		resetConfigs(): void,
		setConfig(customConfig: IFilterConfigValues): void
	}

	declare interface IFilterTemplateDefMap {
		[name: string]: string | IFilterTemplateDef
	}

	declare interface IFilterTemplateDef {
		id: string,
		placeholder: string
	}

	declare interface IFilterConfig {
		config: IFilterConfigValues,
		getTemplateUrl(filterDef: string | IFilterTemplateDef, filterKey?: string): string,
		getUrlForAlias(aliasName: string, filterKey?: string): string
	}

	declare interface InternalTableParams<T> {
		isNullInstance: boolean
	}

	declare interface IInterceptor<T> {
		response?: <TData>(data: TData, params: NgTableParams<T>) => TData,
		responseError?: (reason: any, params: NgTableParams<T>) => any
	}

	declare interface ISelectOption {
		id: string | number,
		title: string
	}

	declare interface ISelectDataFunc {
		(): ISelectOption[] | ng.IPromise<ISelectOption[]>
	}

	declare interface ITableParamsConstructor<T> {
		new (
		baseParameters?: IParamValues<T>, baseSettings?: ISettings<T>
	): NgTableParams<T>
	}

			
}

declare module 'Data' {
	declare type DataResult<T> = T | IDataRowGroup<T>;

	declare interface IDataRowGroup<T> {
		data: T[],
		$hideRows: boolean,
		value: string
	}

	declare interface IDefaultGetData<T> {
		(data: T[], params: NgTableParams<T>): T[],
		applyPaging(data: T[], params: NgTableParams<T>): T[],
		getFilterFn(params: NgTableParams<T>): IFilterFunc<T>,
		getOrderByFn(params?: NgTableParams<T>): void
	}

	declare interface IDefaultGetDataProvider {
		$get<T>(): IDefaultGetData<T>,
		filterFilterName: string,
		sortingFilterName: string
	}

	declare interface IGetDataBcShimFunc<T> {
		(originalFunc: ILegacyGetDataFunc<T>): {
		(params: NgTableParams<T>): ng.IPromise<T[]>
	}
	}

	declare interface IGetDataFunc<T> {
		(params: NgTableParams<T>): T[] | ng.IPromise<T[]>
	}

	declare interface IGetGroupFunc<T> {
		(params: NgTableParams<T>): {
		[name: string]: IDataRowGroup<T>[]
	}
	}

	declare interface IInterceptableGetDataFunc<T> {
		(params: NgTableParams<T>): TResult
	}

	declare interface ILegacyGetDataFunc<T> {
		($defer: ng.IDeferred<T[]>, params: NgTableParams<T>): void
	}

			
}

declare module 'Events' {
	declare type EventSelector<T> = NgTableParams<T> | IEventSelectorFunc;

	declare interface IEventSelectorFunc {
		(publisher: NgTableParams<any>): boolean
	}

	declare interface IDatasetChangedListener<T> {
		(publisher: NgTableParams<T>, newDataset: T[], oldDataset: T[]): any
	}

	declare interface IAfterCreatedListener {
		(publisher: NgTableParams<any>): any
	}

	declare interface IAfterReloadDataListener<T> {
		(publisher: NgTableParams<T>, newData: NgTable.Data.DataResult<T>[], oldData: NgTable.Data.DataResult<T>[]): any
	}

	declare interface IPagesChangedListener {
		(publisher: NgTableParams<any>, newPages: NgTable.IPageButton[], oldPages: NgTable.IPageButton[]): any
	}

	declare interface IUnregistrationFunc {
		(): void
	}

	declare interface IEventsChannel {
		onAfterCreated(
		listener: Events.IAfterCreatedListener, scope: ng.IScope, eventFilter?: Events.IEventSelectorFunc
	): IUnregistrationFunc,
		onAfterCreated(
		listener: Events.IAfterCreatedListener, eventFilter?: Events.IEventSelectorFunc
	): IUnregistrationFunc,
		onAfterReloadData<T>(
		listener: Events.IAfterReloadDataListener<T>, scope: ng.IScope, eventFilter?: Events.EventSelector<T>
	): IUnregistrationFunc,
		onAfterReloadData<T>(
		listener: Events.IAfterReloadDataListener<T>, eventFilter?: Events.EventSelector<T>
	): IUnregistrationFunc,
		onDatasetChanged<T>(
		listener: Events.IDatasetChangedListener<T>, scope: ng.IScope, eventFilter?: Events.EventSelector<T>
	): IUnregistrationFunc,
		onDatasetChanged<T>(
		listener: Events.IDatasetChangedListener<T>, eventFilter?: Events.EventSelector<T>
	): IUnregistrationFunc,
		onPagesChanged<T>(
		listener: Events.IPagesChangedListener, scope: ng.IScope, eventFilter?: Events.EventSelector<T>
	): IUnregistrationFunc,
		onPagesChanged<T>(
		listener: Events.IPagesChangedListener, eventFilter?: Events.EventSelector<T>
	): IUnregistrationFunc,
		publishAfterCreated<T>(publisher: NgTableParams<T>): void,
		publishAfterReloadData<T>(publisher: NgTableParams<T>, newData: T[], oldData: T[]): void,
		publishDatasetChanged<T>(publisher: NgTableParams<T>, newDataset: T[], oldDataset: T[]): void,
		publishPagesChanged<T>(
		publisher: NgTableParams<T>, newPages: NgTable.IPageButton[], oldPages: NgTable.IPageButton[]
	): void
	}

			
}

declare module 'Columns' {
	declare type ColumnFieldContext = ng.IScope & {
		$column: IColumnDef,
		$columns: IColumnDef[]
	};

	declare type DynamicTableColField<T> = IDynamicTableColFieldFunc<T> | T;

	declare interface IColumnField<T> {
		(context?: ColumnFieldContext): T,
		assign($scope: ng.IScope, value: T): void
	}

	declare interface IColumnDef {
		class: IColumnField<string>,
		data?: SelectData,
		id: number,
		filter: IColumnField<IFilterTemplateDefMap>,
		filterData: IColumnField<ng.IPromise<SelectData> | SelectData>,
		groupable: IColumnField<string | boolean>,
		headerTemplateURL: IColumnField<string | boolean>,
		headerTitle: IColumnField<string>,
		show: IColumnField<boolean>,
		sortable: IColumnField<string | boolean>,
		title: IColumnField<string>,
		titleAlt: IColumnField<string>
	}

	declare interface IDynamicTableColFieldFunc<T> {
		(context: ColumnFieldContext): T
	}

	declare interface IDynamicTableColDef {
		class?: DynamicTableColField<string>,
		filter?: DynamicTableColField<IFilterTemplateDefMap>,
		filterData?: DynamicTableColField<ng.IPromise<SelectData> | SelectData>,
		groupable?: DynamicTableColField<string | boolean>,
		headerTemplateURL?: DynamicTableColField<string | boolean>,
		headerTitle?: DynamicTableColField<string>,
		show?: DynamicTableColField<boolean>,
		sortable?: DynamicTableColField<string | boolean>,
		title?: DynamicTableColField<string>,
		titleAlt?: DynamicTableColField<string>
	}

			
}