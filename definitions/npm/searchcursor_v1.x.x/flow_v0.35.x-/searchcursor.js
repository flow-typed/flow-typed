

declare module 'searchcursor' {
					
}

declare module 'npm$namespace$CodeMirror' {
		declare interface Doc {
		getSearchCursor(query: string | RegExp, start?: Position, caseFold?: boolean): SearchCursor
	}

	declare interface SearchCursor {
		find(reverse: boolean): boolean | any[],
		findNext(): boolean | any[],
		findPrevious(): boolean | any[],
		from(): Position,
		to(): Position,
		replace(text: string, origin?: string): void
	}

			
}