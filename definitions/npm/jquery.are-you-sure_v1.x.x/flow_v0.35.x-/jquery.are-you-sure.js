

declare module 'jquery.are-you-sure' {
		declare interface AreYouSureOptions {
		message?: string,
		dirtyClass?: string,
		change?: Function,
		fieldSelector?: string,
		silent?: boolean
	}

	declare interface AreYouSure {
		(): JQuery,
		(options: AreYouSureOptions): JQuery
	}

	declare interface JQuery {
		areYouSure: AreYouSure
	}

			
}