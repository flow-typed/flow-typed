

declare module 'linq.jquery' {
		declare interface JQuery {
		toEnumerable(): linqjs.Enumerable
	}

	declare interface JQueryStatic {
		Enumerable: linq.EnumerableStatic
	}

			
}

declare module 'npm$namespace$linqjs' {
		declare interface Enumerable {
		tojQuery(): JQuery,
		tojQueryAsArray(): JQuery
	}

			
}