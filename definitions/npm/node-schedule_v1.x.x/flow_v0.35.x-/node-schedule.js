

declare module 'node-schedule' {
	declare type Recurrence = number | Range | string;

	declare type RecurrenceSegment = Recurrence | Recurrence[];

	declare export interface JobCallback {
		(): void
	}

	declare export interface RecurrenceSpec {
		date?: RecurrenceSegment,
		dayOfWeek?: RecurrenceSegment,
		hour?: RecurrenceSegment,
		minute?: RecurrenceSegment,
		month?: RecurrenceSegment,
		second?: RecurrenceSegment,
		year?: RecurrenceSegment
	}

	declare export function scheduleJob(
		name: string, rule: RecurrenceRule | RecurrenceSpec | Date | string, callback: JobCallback
	): Job

	declare export function scheduleJob(
		rule: RecurrenceRule | RecurrenceSpec | Date | string, callback: JobCallback
	): Job

	declare export function rescheduleJob(job: Job | string, spec: RecurrenceRule | RecurrenceSpec | Date | string): Job

	declare export function cancelJob(job: Job | string): boolean

	declare export class Job extends EventEmitter {
		name: string;
		constructor(name: string | JobCallback, job?: JobCallback | Function, callback?: Function): this;
		trackInvocation(invokation: Invocation): boolean;
		stopTrackingInvocation(invocation: Invocation): boolean;
		triggeredJobs(): number;
		setTriggeredJobs(triggeredJobs: number): void;
		cancel(reschedule?: boolean): boolean;
		cancelNext(reschedule?: boolean): boolean;
		reschedule(spec: RecurrenceRule | string | number): boolean;
		nextInvocation(): Date;
		pendingInvocations(): Invocation[];
		invoke(): void;
		runOnDate(date: Date): void;
		schedule(date: Date | string | number): boolean
	}

	declare export class Range  {
		constructor(start?: number, end?: number, step?: number): this;
		contains(value: number): boolean
	}

	declare export class RecurrenceRule  {
		date: RecurrenceSegment;
		dayOfWeek: RecurrenceSegment;
		hour: RecurrenceSegment;
		minute: RecurrenceSegment;
		month: RecurrenceSegment;
		second: RecurrenceSegment;
		year: RecurrenceSegment;
		constructor(year?: RecurrenceSegment, month?: RecurrenceSegment, date?: RecurrenceSegment, dayOfWeek?: RecurrenceSegment, hour?: RecurrenceSegment, minute?: RecurrenceSegment, second?: RecurrenceSegment): this;
		nextInvocationDate(base: Date): Date
	}

	declare export class Invocation  {
		fireDate: Date;
		job: Job;
		recurrenceRule: RecurrenceRule;
		timerID: number;
		constructor(job: Job, fireDate: Date, recurrenceRule: RecurrenceRule): this
	}

	
}