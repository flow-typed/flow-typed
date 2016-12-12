

declare module 'jquery.tinyscrollbar' {
		declare interface JQuery {
		tinyscrollbar(options?: JQueryTinyScrollbar.JQueryTinyScrollbarOptions): JQuery,
		tinyscrollbar_update(options?: any): JQuery
	}

			
}

declare module 'npm$namespace$JQueryTinyScrollbar' {
		declare export interface JQueryTinyScrollbarOptions {
		invertscroll?: boolean,
		axis?: string,
		wheel?: number,
		scroll?: boolean,
		lockscroll?: boolean,
		size?: any,
		sizethumb?: any
	}

			
}