

declare module 'jquery-backstretch' {
		declare interface JQueryStatic {
		backstretch(
		images: string[], config?: JQueryBackStretch.BackStretchOptions
	): JQueryBackStretch.BackStretch
	}

	declare interface JQuery {
		backstretch(
		images: string[], config?: JQueryBackStretch.BackStretchOptions
	): JQueryBackStretch.BackStretch,
		backstretch(method: string): JQuery
	}

			
}

declare module 'npm$namespace$JQueryBackStretch' {
		declare interface BackStretchOptions {
		centeredX?: boolean,
		centeredY?: boolean,
		duration?: number | string,
		fade?: number
	}

	declare interface BackStretch {
		resize(): BackStretch,
		show(newIndex: number): BackStretch,
		next(): BackStretch,
		prev(): BackStretch,
		pause(): BackStretch,
		resume(): BackStretch,
		destroy(preserveBackground?: boolean): void
	}

			
}