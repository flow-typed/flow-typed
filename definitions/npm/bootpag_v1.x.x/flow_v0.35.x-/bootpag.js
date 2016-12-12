

declare module 'bootpag' {
		declare interface JQuery {
		bootpag(options: JqueryBootpag.Options): JQuery,
		on(eventName: "page", handler: JqueryBootpag.PageEventHandler): JQuery
	}

			
}

declare module 'npm$namespace$JqueryBootpag' {
		declare export interface Options {
		total: number,
		maxVisible: number,
		page?: number,
		leaps?: boolean,
		next?: string,
		prev?: string,
		href?: string,
		hrefVariable?: string,
		firstLastUse?: boolean,
		first?: string,
		last?: string,
		wrapClass?: string,
		activeClass?: string,
		disabledClass?: string,
		nextClass?: string,
		prevClass?: string,
		lastClass?: string,
		firstClass?: string
	}

	declare interface PageEventHandler {
		(event: JQueryEventObject, pageNumber: number): any
	}

			
}