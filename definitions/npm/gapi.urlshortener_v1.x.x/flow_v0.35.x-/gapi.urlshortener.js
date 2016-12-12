

declare module 'gapi.urlshortener' {
		declare interface GoogleApiUrlShortenerUrlResource {
		kind: string,
		id: string,
		longUrl: string,
		status: string,
		created: string,
		analytics: {
		allTime: GoogleApiUrlShortenerUrlResourceAnalyticsObject,
		month: GoogleApiUrlShortenerUrlResourceAnalyticsObject,
		week: GoogleApiUrlShortenerUrlResourceAnalyticsObject,
		day: GoogleApiUrlShortenerUrlResourceAnalyticsObject,
		twoHours: GoogleApiUrlShortenerUrlResourceAnalyticsObject
	}
	}

	declare interface GoogleApiUrlShortenerUrlResourceAnalyticsObject {
		shortUrlClicks: string,
		longUrlClicks: string,
		referrers: GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject[],
		countries: GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject[],
		browsers: GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject[],
		platforms: GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject[]
	}

	declare interface GoogleApiUrlShortenerUrlResourceAnalyticsArrayObject {
		count: string,
		id: string
	}

			
}

declare module 'urlshortener' {
		declare export interface url {
		get(
		object: {
		shortUrl: string,
		projection?: string,
		fields?: string
	}
	): HttpRequest<GoogleApiUrlShortenerUrlResource>,
		insert(
		object: {
		fields?: string,
		RequestBody?: string
	}
	): HttpRequest<GoogleApiUrlShortenerUrlResource>,
		list(
		object: {
		projection?: string,
		start-token?: string,
		fields?: string
	}
	): HttpRequest<GoogleApiUrlShortenerUrlResource>
	}

			
}