

declare module 'gapi.youtubeAnalytics' {
					
}

declare module 'youtubeAnalytics' {
		declare export interface reports {
		query(
		object: {
		ids: string,
		start-date: string,
		end-date: string,
		metrics: string,
		dimensions?: string,
		filters?: string,
		max-results?: number,
		sort?: string,
		start-index?: number,
		fields?: string
	}
	): HttpRequest<any>
	}

			
}