

declare module 'angular-google-analytics-service' {
					
}

declare module 'analytics' {
		declare interface AnalyticsService {
		log: Array<Object>,
		offlineQueue: Array<Object>,
		getUrl: () => string,
		createScriptTag: () => void,
		createAnalyticsScriptTag: () => void,
		set: (key: string, value: any, accountName?: string) => void,
		trackPage: (
		pageURL: string, title?: string, dimensions?: {
		[expr: string]: any
	}
	) => void,
		trackEvent: (
		category: string, action: string, label: string, value?: any, nonInteractionFlag?: boolean, dimensions?: {
		[expr: string]: any
	}
	) => void,
		trackException: (descrption: string, isFatal: boolean) => void,
		offline: (offlineMode: boolean) => void
	}

			
}