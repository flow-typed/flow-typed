

declare module 'jquery.leanModal' {
		declare interface JQueryLeanModalOption {
		top?: number,
		overlay?: number,
		closeButton?: String
	}

	declare interface JQueryStatic {
		leanModal(): JQuery,
		leanModal(val: JQueryLeanModalOption): JQuery
	}

	declare interface JQuery {
		leanModal(): JQuery,
		leanModal(val: JQueryLeanModalOption): JQuery
	}

			
}