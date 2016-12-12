

declare module 'analytics-node' {
					


}

declare module 'npm$namespace$AnalyticsNode' {
		declare interface Integrations {
		[index: string]: boolean
	}

		declare export class Analytics  {
		constructor(writeKey: string, opts?: {
		flushAt?: number,
		flushAfter?: number
	}): this;
		identify(
		message: {
		userId: string | number,
		traits?: Object,
		timestamp?: Date,
		context?: Object,
		integrations?: Integrations
	}
	): Analytics;
		track(
		message: {
		userId: string | number,
		event: string,
		properties?: Object,
		timestamp?: Date,
		context?: Object,
		integrations?: Integrations
	}
	): Analytics;
		page(
		message: {
		userId: string | number,
		category?: string,
		name?: string,
		properties?: Object,
		timestamp?: Date,
		context?: Object,
		integrations?: Integrations
	}
	): Analytics;
		alias(
		message: {
		previousId: string | number,
		userId: string | number,
		integrations?: Integrations
	}
	): Analytics;
		group(
		message: {
		userId: string | number,
		groupId: string | number,
		traits?: Object,
		context?: Object,
		timestamp?: Date,
		anonymous_id?: string | number,
		integrations?: Integrations
	}
	): Analytics;
		flush(
		fn?: (
		err: Error, batch: {
		batch: Array<{
		type: string
	}>,
		messageId: string,
		sentAt: Date,
		timestamp: Date
	}
	) => void
	): Analytics
	}

	
}