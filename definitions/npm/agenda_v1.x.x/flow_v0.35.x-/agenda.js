

declare module 'agenda' {
		declare interface Callback {
		(err?: Error): void
	}

	declare interface ResultCallback<T> {
		(err?: Error, result?: T): void
	}

		declare class Agenda extends EventEmitter {
		constructor(config?: Agenda.AgendaConfiguration, cb?: ResultCallback<Collection>): this;
		database(
		url: string, collection?: string, options?: any, cb?: ResultCallback<Collection>
	): Agenda;
		mongo(db: Db, collection?: string, cb?: ResultCallback<Collection>): Agenda;
		name(value: string): Agenda;
		processEvery(interval: string | number): Agenda;
		maxConcurrency(value: number): Agenda;
		defaultConcurrency(value: number): Agenda;
		lockLimit(value: number): Agenda;
		defaultLockLimit(value: number): Agenda;
		defaultLockLifetime(value: number): Agenda;
		create(name: string, data?: any): Agenda.Job;
		jobs(query: any, cb: ResultCallback<Agenda.Job[]>): void;
		purge(cb?: ResultCallback<number>): void;
		define(
		name: string, handler: (job?: Agenda.Job, done?: (err?: Error) => void) => void
	): void;
		define(
		name: string, options: Agenda.JobOptions, handler: (job?: Agenda.Job, done?: (err?: Error) => void) => void
	): void;
		every(
		interval: number | string, names: string, data?: any, options?: any, cb?: ResultCallback<Agenda.Job>
	): Agenda.Job;
		every(
		interval: number | string, names: string[], data?: any, options?: any, cb?: ResultCallback<Agenda.Job[]>
	): Agenda.Job[];
		schedule(
		when: Date | string, names: string, data?: any, cb?: ResultCallback<Agenda.Job>
	): Agenda.Job;
		schedule(
		when: Date | string, names: string[], data?: any, cb?: ResultCallback<Agenda.Job[]>
	): Agenda.Job[];
		now(name: string, data?: any, cb?: ResultCallback<Agenda.Job>): Agenda.Job;
		cancel(query: any, cb?: ResultCallback<number>): void;
		start(): void;
		stop(cb: Callback): void
	}

	declare module.exports: undefined


}

declare module 'Agenda' {
		declare interface AgendaConfiguration {
		processEvery?: string | number,
		defaultConcurrency?: number,
		maxConcurrency?: number,
		defaultLockLimit?: number,
		lockLimit?: number,
		defaultLockLifetime?: number,
		mongo?: {
		db: Db,
		collection?: string
	},
		db?: {
		address: string,
		collection?: string,
		options?: any
	}
	}

	declare interface JobAttributes {
		_id: ObjectID,
		name: string,
		type: string,
		data: {
		[name: string]: any
	},
		priority: number,
		repeatInterval: string | number,
		repeatTimezone: string,
		lastModifiedBy: string,
		nextRunAt: Date,
		lockedAt: Date,
		lastRunAt: Date,
		lastFinishedAt: Date,
		failReason: string,
		failCount: number,
		failedAt: Date,
		disabled: boolean
	}

	declare interface Job {
		attrs: JobAttributes,
		repeatEvery(interval: string | number, options?: {
		timezone?: string
	}): Job,
		repeatAt(time: string): Job,
		disable(): Job,
		enable(): Job,
		unique(value: any, opts?: {
		insertOnly?: boolean
	}): Job,
		schedule(time: string | Date): Job,
		priority(value: string | number): Job,
		fail(reason: string | Error): Job,
		run(cb?: ResultCallback<Job>): Job,
		isRunning(): boolean,
		save(cb?: ResultCallback<Job>): Job,
		remove(cb?: Callback): void,
		touch(cb?: Callback): void,
		computeNextRunAt(): Job
	}

	declare interface JobOptions {
		concurrency?: number,
		lockLimit?: number,
		lockLifetime?: number,
		priority?: string | number
	}

			
}