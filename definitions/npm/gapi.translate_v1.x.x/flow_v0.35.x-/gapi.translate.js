

declare module 'gapi.translate' {
		declare interface GoogleApiTranslateTranslationListResponse {
		data: {
		translations: {
		translatedText: string,
		detectedSourceLanguage: string
	}[]
	}
	}

	declare interface GoogleApiTranslateLanguageListResponse {
		data: {
		languages: {
		language: string,
		name: string
	}[]
	}
	}

	declare interface GoogleApiTranslateDetectionListResponse {
		data: {
		detections: {
		language: string,
		confidence: number
	}[][]
	}
	}

			
}

declare module 'language' {
		declare export interface detections {
		list(
		object: {
		q: string[],
		fields?: string
	}
	): HttpRequest<GoogleApiTranslateDetectionListResponse>
	}

	declare export interface languages {
		list(
		object: {
		target?: string,
		fields?: string
	}
	): HttpRequest<GoogleApiTranslateLanguageListResponse>
	}

	declare export interface translations {
		list(
		object: {
		q: string[],
		target: string,
		cid?: string[],
		format?: string,
		source?: string,
		fields?: string,
		prettyprint?: string
	}
	): HttpRequest<GoogleApiTranslateTranslationListResponse>
	}

			
}