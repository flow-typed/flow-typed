

declare module 'jquery.highlight-bartaz' {
		declare interface JQuery {
		unhighlight(options?: {
		element?: string,
		className?: string
	}): JQuery,
		highlight(
		words: string | string[], options?: {
		element?: string,
		className?: string,
		caseSensitive?: boolean,
		wordsOnly?: boolean
	}
	): JQuery
	}

			
}