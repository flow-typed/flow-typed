

declare module 'gapi.analytics' {
		declare interface DataQuery {
		ids?: string,
		start-date?: string,
		30daysAgo?: string,
		end-date?: string,
		yesterday?: string,
		metrics?: string,
		dimensions?: string,
		sort?: string,
		filters?: string,
		segment?: string,
		samplingLevel?: string,
		include-empty-rows?: string,
		start-index?: string,
		max-results?: string
	}

	declare interface View {
		accountId?: string,
		webPropertyId?: string,
		webViewId?: string
	}

			
}

declare module 'provisioning' {
			declare export function createAccountTicket(): Promise<any>

		
}

declare module 'ga' {
			declare export function get(data?: DataQuery): Promise<any>

		
}

declare module 'mcf' {
			declare export function get(data?: DataQuery): Promise<any>

		
}

declare module 'realtime' {
			declare export function get(data?: DataQuery): Promise<any>

		
}

declare module 'parameters' {
		declare export interface AnalyticsParameter {
		type?: string,
		description?: string,
		default?: string,
		enum?: string[],
		enumDescriptions?: string[],
		location?: string
	}

		declare export class alt extends AnalyticsParameter {
		
	}

	declare export class fields extends AnalyticsParameter {
		
	}

	declare export class key extends AnalyticsParameter {
		
	}

	declare export class oauth_token extends AnalyticsParameter {
		
	}

	declare export class prettyPrint extends AnalyticsParameter {
		
	}

	declare export class quotaUser extends AnalyticsParameter {
		
	}

	declare export class userIP extends AnalyticsParameter {
		
	}

	
}

declare module 'accountSummaries' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'accountUserLinks' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'accounts' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'customDataSources' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'customDimensions' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'customMetrics' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'experiments' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'filters' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'goals' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'profileFilterLinks' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'profileUserLinks' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'profiles' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'remarketingAudience' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'segments' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'unsampledReports' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'uploads' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'webPropertyAdWordsLinks' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'webproperties' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'webpropertyUserLinks' {
			declare export function list(view?: View): Promise<any>

		
}

declare module 'column' {
			declare export function list(): Promise<any>

		
}