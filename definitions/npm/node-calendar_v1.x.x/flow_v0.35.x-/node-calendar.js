

declare module 'node-calendar' {
		declare interface IWeekRow<T> {
		[dayIndex: number]: T
	}

	declare interface IMonthGrid<T> {
		[weekRowIndex: number]: IWeekRow<T>
	}

	declare interface IMonthRow<T> {
		[monthColumnIndex: number]: IMonthGrid<T>
	}

	declare interface IYearGrid<T> {
		[monthRowIndex: number]: IMonthRow<T>
	}

	declare export function isleap(year: number): boolean

	declare export function leapdays(y1: number, y2: number): number

	declare export function monthrange(year: number, month: number): [number, number]

	declare export function setlocale(locale?: string): void

	declare export function timegm(timegmt: [number, number, number, number, number, number]): number

	declare export function weekday(year: number, month: number, day: number): number

	declare export class Calendar  {
		constructor(firstweekday?: number): this;
		getfirstweekday(): number;
		setfirstweekday(firstweekday: number): void;
		iterweekdays(): number[];
		itermonthdates(year: number, month: number): Date[];
		itermonthdays(year: number, month: number): number[];
		itermonthdays2(year: number, month: number): [number, number][];
		monthdatescalendar(year: number, month: number): IMonthGrid<Date>;
		monthdayscalendar(year: number, month: number): IMonthGrid<number>;
		monthdays2calendar(year: number, month: number): IMonthGrid<[number, number]>;
		yeardatescalendar(year: number, width?: number): IYearGrid<Date>;
		yeardayscalendar(year: number, width?: number): IYearGrid<number>;
		yeardays2calendar(year: number, width?: number): IYearGrid<[number, number]>
	}

	declare export class IllegalLocaleError extends Error {
		name: string;
		message: string;
		constructor(message?: string): this
	}

	declare export class IllegalDayError extends Error {
		name: string;
		message: string;
		constructor(message?: string): this
	}

	declare export class IllegalMonthError extends Error {
		name: string;
		message: string;
		constructor(message?: string): this
	}

	declare export class IllegalTimeError extends Error {
		name: string;
		message: string;
		constructor(message?: string): this
	}

	declare export class IllegalWeekdayError extends Error {
		name: string;
		message: string;
		constructor(message?: string): this
	}

	
}