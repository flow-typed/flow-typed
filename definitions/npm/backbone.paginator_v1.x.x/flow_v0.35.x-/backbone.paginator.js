

declare module 'backbone.paginator' {
					
}

declare module 'npm$namespace$Backbone' {
	declare type PageableGetPageOptions = CollectionFetchOptions | Silenceable;

	declare interface PageableState {
		firstPage?: number,
		lastPage?: number,
		currentPage?: number,
		pageSize?: number,
		totalPages?: number,
		totalRecords?: number,
		sortKey?: string,
		order?: number
	}

	declare interface PageableQueryParams {
		currentPage?: string,
		pageSize?: string,
		totalPages?: string,
		totalRecords?: string,
		sortKey?: string,
		order?: string,
		directions?: any
	}

	declare interface PageableInitialOptions {
		comparator?: (...options: any[]) => number,
		full?: boolean,
		state?: PageableState,
		queryParam?: PageableQueryParams
	}

	declare interface PageableParseLinksOptions {
		xhr?: JQueryXHR
	}

	declare interface PageableSetSortingOptions<TModel> {
		side?: string,
		full?: boolean,
		sortValue?: (model: TModel, sortKey: string) => any | string
	}

	declare interface PageableSwitchModeOptions {
		fetch?: boolean,
		resetState?: boolean
	}

		declare class PageableCollection<TModel> extends Collection<TModel> {
		fullCollection: Collection<TModel>;
		mode: string;
		queryParams: PageableQueryParams;
		state: PageableState;
		constructor(models?: TModel[], options?: PageableInitialOptions): this;
		fetch(options?: CollectionFetchOptions): JQueryXHR;
		getFirstPage(options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;
		getLastPage(options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;
		getNextPage(options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;
		getPage(
		index: number | string, options?: PageableGetPageOptions
	): JQueryXHR | PageableCollection<TModel>;
		getPageByOffset(
		offset: number, options?: PageableGetPageOptions
	): JQueryXHR | PageableCollection<TModel>;
		getPreviousPage(options?: PageableGetPageOptions): JQueryXHR | PageableCollection<TModel>;
		hasNextPage(): boolean;
		hasPreviousPage(): boolean;
		parse(resp: any, options?: any): any[];
		parseLinks(resp: any, options?: PageableParseLinksOptions): any;
		parseRecords(resp: any, options?: any): any[];
		parseState(
		resp: any, queryParams: PageableQueryParams, state: PageableState, options?: any
	): PageableState;
		setPageSize(
		pageSize: number, options?: CollectionFetchOptions
	): JQueryXHR | PageableCollection<TModel>;
		setSorting(
		sortKey: string, order?: number, options?: PageableSetSortingOptions<TModel>
	): PageableCollection<TModel>;
		switchMode(
		mode?: string, options?: PageableSwitchModeOptions
	): JQueryXHR | PageableCollection<TModel>;
		sync(method: string, model: TModel | Collection<TModel>, options?: any): JQueryXHR;
		noConflict(): typeof PageableCollection
	}

	
}