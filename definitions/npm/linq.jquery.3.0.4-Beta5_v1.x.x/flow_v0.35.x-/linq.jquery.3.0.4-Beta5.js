

declare module 'linq.jquery.3.0.4-Beta5' {
		declare interface JQuery {
		toEnumerable(): linqjs.IEnumerable<JQuery>
	}

			
}

declare module 'linqjs' {
		declare interface IEnumerable<T> {
		tojQuery(): JQuery,
		tojQueryAsArray(): JQuery
	}

			
}