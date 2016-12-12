

declare module 'jquery.bbq' {
		declare interface JQueryParam {
		querystring(url?: string, coerce?: boolean, merge_mode?: number): string,
		querystring(url?: string, coerce?: any, merge_mode?: number): string,
		fragment: JQueryBbq.ParamFragment,
		sorted(obj: any, traditional?: boolean): string
	}

	declare interface JQueryStatic {
		bbq: JQueryBbq.JQuery,
		deparam: JQueryBbq.JQueryDeparam,
		elemUrlAttr(tag_attr?: any): any
	}

	declare interface JQuery {
		querystring(attr?: any, params?: any, merge_mode?: number): JQuery,
		fragment(attr?: any, params?: any, merge_mode?: number): JQuery,
		hashchange(eventData?: any, handler?: (eventObject: JQueryBbq.EventObject) => any): JQuery,
		hashchange(handler: (eventObject: JQueryBbq.EventObject) => any): JQuery
	}

			
}

declare module 'npm$namespace$JQueryBbq' {
		declare interface JQuery {
		pushState(params?: string, merge_mode?: number): void,
		pushState(params?: any, merge_mode?: number): void,
		getState(key?: string, coerce?: boolean): any,
		getState(coerce?: boolean): any,
		removeState(...key: any[]): void
	}

	declare interface ParamFragment {
		(url?: string): string,
		(url: string, params: any, merge_mode?: number): string,
		noEscape: (chars?: string) => void,
		ajaxCrawlable(state?: boolean): boolean
	}

	declare interface JQueryDeparam {
		(params: string, coerce?: boolean): any,
		querystring(url?: string, coerce?: boolean): any,
		fragment(url?: string, coerce?: boolean): any
	}

	declare interface EventObject {
		fragment: string,
		getState(key?: string, coerce?: boolean)
	}

			
}