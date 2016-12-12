

declare module 'bull' {
			declare function Bull(
		queueName: string, redisPort: number, redisHost: string, redisOpt?: Redis.ClientOpts
	): Bull.Queue

		declare module.exports: undefined


}

declare module 'Bull' {
		declare export interface DoneCallback {
		(error?: Error, value?: any): void
	}

	declare export interface Job {
		jobId: string,
		data: Object,
		progress(value: any): Promise<void>,
		remove(): Promise<void>,
		retry(): Promise<void>
	}

	declare export interface Backoff {
		type: string,
		delay: number
	}

	declare export interface AddOptions {
		delay?: number,
		attempts?: number,
		backoff?: number | Backoff,
		lifo?: boolean,
		timeout?: number
	}

	declare export interface Queue {
		process(concurrency: number, callback: (job: Job, done: DoneCallback) => void): void,
		process(callback: (job: Job, done: DoneCallback) => void): void,
		process(concurrency: number, callback: (job: Job) => void): Promise<any>,
		process(callback: (job: Job) => void): Promise<any>,
		add(data: Object, opts?: AddOptions): Promise<Job>,
		pause(): Promise<void>,
		resume(): Promise<void>,
		count(): Promise<number>,
		empty(): Promise<void>,
		close(): Promise<void>,
		getJob(jobId: string): Promise<Job>,
		clean(gracePeriod: number, jobsState?: string): Promise<Job[]>,
		on(eventName: string, callback: EventCallback): void
	}

	declare interface EventCallback {
		(...args: any[]): void
	}

	declare interface ReadyEventCallback {
		(): void
	}

	declare interface ErrorEventCallback {
		(error: Error): void
	}

	declare interface JobPromise {
		cancel(): void
	}

	declare interface ActiveEventCallback {
		(job: Job, jobPromise: JobPromise): void
	}

	declare interface ProgressEventCallback {
		(job: Job, progress: any): void
	}

	declare interface CompletedEventCallback {
		(job: Job, result: Object): void
	}

	declare interface FailedEventCallback {
		(job: Job, error: Error): void
	}

	declare interface PausedEventCallback {
		(): void
	}

	declare interface ResumedEventCallback {
		(job?: Job): void
	}

	declare interface CleanedEventCallback {
		(jobs: Job[], type: string): void
	}

			
}

declare module 'bull/lib/priority-queue' {
			declare function PQueue(
		queueName: string, redisPort: number, redisHost: string, redisOpt?: Redis.ClientOpts
	): PQueue.PriorityQueue

		declare module.exports: undefined


}

declare module 'PQueue' {
		declare export interface AddOptions {
		priority?: string
	}

	declare export interface PriorityQueue {
		add(data: Object, opts?: PQueue.AddOptions): Promise<Bull.Job>
	}

			
}