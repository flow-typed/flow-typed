

declare module 'simplebar' {
		declare interface SimplebarOptions {
		autoHide?: boolean,
		wrapContent?: boolean
	}

	declare interface JQuery {
		simplebar: {
		(options?: SimplebarOptions): JQuery
	}
	}

	declare interface JQueryStatic {
		simplebar: {
		(options?: SimplebarOptions): JQuery
	}
	}

			
}