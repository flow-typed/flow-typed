

declare module 'metismenu' {
		declare interface MetisMenuOptions {
		toggle?: boolean,
		doubleTapToGo?: boolean,
		activeClass?: string,
		collapseClass?: string,
		collapseInClass?: string,
		collapsingClass?: string
	}

	declare interface JQuery {
		metisMenu(options?: MetisMenuOptions): JQuery
	}

			
}