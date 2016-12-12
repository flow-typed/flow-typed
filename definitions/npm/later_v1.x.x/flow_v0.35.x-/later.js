import type { IStatic } from 'npm$namespace$Later'

declare module 'later' {
					
}

declare module 'npm$namespace$Later' {
		declare export interface IScheduleData {
		schedules: IRecurrence[],
		exceptions: IRecurrence[],
		error: number
	}

	declare export interface IRecurrence {
		t?: number[],
		s?: number[],
		m?: number[],
		h?: number[],
		D?: number[],
		dw?: number[],
		dc?: number[],
		dy?: number[],
		wm?: number[],
		wy?: number[],
		M?: number[],
		Y?: number[],
		t_a?: number[],
		s_a?: number[],
		m_a?: number[],
		h_a?: number[],
		D_a?: number[],
		dw_a?: number[],
		dc_a?: number[],
		dy_a?: number[],
		wm_a?: number[],
		wy_a?: number[],
		M_a?: number[],
		Y_a?: number[],
		t_b?: number[],
		s_b?: number[],
		m_b?: number[],
		h_b?: number[],
		D_b?: number[],
		dw_b?: number[],
		dc_b?: number[],
		dy_b?: number[],
		wm_b?: number[],
		wy_b?: number[],
		M_b?: number[],
		Y_b?: number[],
		[timeperiodAndModifierName: string]: number[]
	}

	declare export interface IParseStatic {
		recur(): IRecurrenceBuilder,
		cron(input?: string): IScheduleData,
		text(input?: string): IScheduleData
	}

	declare export interface ITimer {
		clear(): void
	}

	declare export interface ISchedule {
		next(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[],
		nextRange(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[],
		prev(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[],
		prevRange(numberOfInst: number, dateFrom?: Date, dateTo?: Date): Date[]
	}

	declare export interface IRecurrenceBuilder {
		second(): IRecurrenceBuilder,
		minute(): IRecurrenceBuilder,
		hour(): IRecurrenceBuilder,
		time(): IRecurrenceBuilder,
		dayOfWeek(): IRecurrenceBuilder,
		dayOfWeekCount(): IRecurrenceBuilder,
		dayOfMonth(): IRecurrenceBuilder,
		dayOfYear(): IRecurrenceBuilder,
		weekOfMonth(): IRecurrenceBuilder,
		weekOfYear(): IRecurrenceBuilder,
		month(): IRecurrenceBuilder,
		year(): IRecurrenceBuilder,
		fullDate(): IRecurrenceBuilder,
		on(...values: number[]): IRecurrenceBuilder,
		on(value: string): IRecurrenceBuilder,
		on(date: Date): IRecurrenceBuilder,
		every(value?: number): IRecurrenceBuilder,
		every(value?: string): IRecurrenceBuilder,
		between(start: number, end: number): IRecurrenceBuilder,
		between(start: string, end: string): IRecurrenceBuilder,
		after(value: number): IRecurrenceBuilder,
		after(value: string): IRecurrenceBuilder,
		before(value: number): IRecurrenceBuilder,
		before(value: string): IRecurrenceBuilder,
		startingOn(value: number): IRecurrenceBuilder,
		startingOn(value: string): IRecurrenceBuilder,
		first(): IRecurrenceBuilder,
		last(): IRecurrenceBuilder,
		onWeekend(): IRecurrenceBuilder,
		onWeekday(): IRecurrenceBuilder,
		and(): IRecurrenceBuilder,
		except(): IRecurrenceBuilder,
		customPeriod(key: string): IRecurrenceBuilder,
		customModifier(key: string, values: number): IRecurrenceBuilder
	}

	declare export interface IDateProvider {
		UTC(): void,
		localTime(): void,
		next(Y?: number, M?: number, D?: number, h?: number, m?: number, s?: number): Date,
		prev(Y?: number, M?: number, D?: number, h?: number, m?: number, s?: number): Date,
		nextRollover(d: Date, val: number, constraint: IModifier, period: ITimePeriod): Date,
		prevRollover(d: Date, val: number, constraint: IModifier, period: ITimePeriod): Date
	}

	declare export interface ITimePeriod {
		name: string,
		range: number,
		val(date: Date): number,
		isValid(date: Date, value: any): boolean,
		extent(date?: Date): number[],
		start(date: Date): Date,
		end(date: Date): Date,
		next(date: Date, value: any): Date,
		prev(date: Date, value: any): Date
	}

	declare export interface IModifier {
		(constraint: ITimePeriod, value: number): ITimePeriod
	}

	declare export interface IModifierStatic {
		after: IModifier,
		before: IModifier
	}

	declare export interface IStatic {
		schedule(input: any): ISchedule,
		parse: IParseStatic,
		date: IDateProvider,
		setTimeout(callback: () => void, time: IScheduleData): ITimer,
		setInterval(callback: () => void, time: IScheduleData): ITimer,
		time: ITimePeriod,
		second: ITimePeriod,
		minute: ITimePeriod,
		hour: ITimePeriod,
		day: ITimePeriod,
		dayOfWeek: ITimePeriod,
		dayOfWeekCount: ITimePeriod,
		dayOfYear: ITimePeriod,
		weekOfMonth: ITimePeriod,
		weekOfYear: ITimePeriod,
		month: ITimePeriod,
		year: ITimePeriod,
		modifier: IModifierStatic
	}

			
}