

declare module 'offline-js' {
		declare interface OfflineOptions {
		checkOnLoad?: boolean,
		interceptRequests?: boolean,
		requests?: boolean,
		game?: boolean,
		checks?: OfflineChecks,
		reconnect: {
		initialDelay: number,
		delay: number
	}
	}

	declare interface OfflineChecks {
		xhr?: OfflineCheck,
		image?: OfflineCheck,
		active?: string
	}

	declare interface OfflineCheck {
		url: string
	}

			
}