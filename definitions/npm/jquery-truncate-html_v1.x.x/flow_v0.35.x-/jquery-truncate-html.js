

declare module 'jquery-truncate-html' {
		declare interface TruncateOptions {
		length?: number,
		stripTags?: boolean,
		words?: boolean,
		noBreaks?: boolean,
		ellipsis?: string
	}

	declare interface JQuery {
		truncate(options: TruncateOptions): JQuery
	}

	declare interface JQueryStatic {
		truncate(html: string, options: TruncateOptions): string
	}

			
}