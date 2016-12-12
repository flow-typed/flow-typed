

declare module 'purl-jquery' {
		declare interface JQueryStatic {
		url(): purl.Url,
		url(someUrl: string): purl.Url
	}

	declare interface JQuery {
		url(): purl.Url
	}

			
}