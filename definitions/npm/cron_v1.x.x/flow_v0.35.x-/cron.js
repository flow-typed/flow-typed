

declare module 'cron' {
		declare interface CronJobStatic {
		new (
		cronTime: string | Date, onTick: () => void, onComplete?: () => void, start?: boolean, timeZone?: string, context?: any
	): CronJob,
		new (
		options: {
		cronTime: string | Date,
		onTick: () => void,
		onComplete?: () => void,
		start?: boolean,
		timeZone?: string,
		context?: any
	}
	): CronJob
	}

	declare interface CronJob {
		start(): void,
		stop(): void
	}

	declare interface CronTimeStatic {
		new (time: string | Date): CronTime
	}

	declare interface CronTime {
		
	}

			
}