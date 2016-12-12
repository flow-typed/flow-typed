

declare module 'succinct' {
		declare interface JQuery {
		succinct(settings?: JQuerySuccinct.Options): JQuery
	}

			
}

declare module 'npm$namespace$JQuerySuccinct' {
		declare interface Options {
		size?: number,
		omission?: string,
		ignore?: boolean
	}

			
}