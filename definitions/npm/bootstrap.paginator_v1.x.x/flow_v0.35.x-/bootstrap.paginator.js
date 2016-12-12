

declare module 'bootstrap.paginator' {
		declare interface PaginatorOptions {
		alignment?: string,
		size?: string,
		itemContainerClass?: (
		type: <<UNKNOWN PARAM FORMAT>>, page: <<UNKNOWN PARAM FORMAT>>, current: <<UNKNOWN PARAM FORMAT>>
	) => string,
		currentPage?: number,
		numberOfPages?: number,
		totalPages?: number,
		pageUrl?: (
		type: <<UNKNOWN PARAM FORMAT>>, page: <<UNKNOWN PARAM FORMAT>>, current: <<UNKNOWN PARAM FORMAT>>
	) => string,
		shouldShowPage?: boolean,
		itemTexts?: (type: string, page: number, current: number) => string,
		tooltipTitles?: (
		type: <<UNKNOWN PARAM FORMAT>>, page: <<UNKNOWN PARAM FORMAT>>, current: <<UNKNOWN PARAM FORMAT>>
	) => string,
		useBootstrapTooltip?: boolean,
		bootstrapTooltipOptions?: {
		
	},
		bootstrapMajorVersion?: number,
		onPageClicked?: (
		event: <<UNKNOWN PARAM FORMAT>>, originalEvent: <<UNKNOWN PARAM FORMAT>>, type: <<UNKNOWN PARAM FORMAT>>, page: <<UNKNOWN PARAM FORMAT>>
	) => void,
		onPageChanged?: (
		event: <<UNKNOWN PARAM FORMAT>>, originalEvent: <<UNKNOWN PARAM FORMAT>>, type: <<UNKNOWN PARAM FORMAT>>, page: <<UNKNOWN PARAM FORMAT>>
	) => void
	}

	declare interface JQuery {
		bootstrapPaginator(): JQuery,
		bootstrapPaginator(options: PaginatorOptions): JQuery
	}

			
}