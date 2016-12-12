

declare module 'timezonecomplete' {
					
}

declare module '___timezonecomplete/basics' {
			declare export function timeUnitToMilliseconds(unit: TimeUnit): number

	declare export function timeUnitToString(unit: TimeUnit, amount?: number): string

	declare export function stringToTimeUnit(s: string): TimeUnit

	declare export function isLeapYear(year: number): boolean

	declare export function daysInYear(year: number): number

	declare export function daysInMonth(year: number, month: number): number

	declare export function dayOfYear(year: number, month: number, day: number): number

	declare export function lastWeekDayOfMonth(year: number, month: number, weekDay: WeekDay): number

	declare export function firstWeekDayOfMonth(year: number, month: number, weekDay: WeekDay): number

	declare export function weekDayOnOrAfter(year: number, month: number, day: number, weekDay: WeekDay): number

	declare export function weekDayOnOrBefore(year: number, month: number, day: number, weekDay: WeekDay): number

	declare export function weekOfMonth(year: number, month: number, day: number): number

	declare export function weekNumber(year: number, month: number, day: number): number

	declare export function unixToTimeNoLeapSecs(unixMillis: number): TimeStruct

	declare export function timeToUnixNoLeapSecs(
		year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, milli?: number
	): number

	declare export function timeToUnixNoLeapSecs(tm: TimeStruct): number

	declare export function weekDayNoLeapSecs(unixMillis: number): WeekDay

	declare export function secondOfDay(hour: number, minute: number, second: number): number

	declare export class TimeStruct  {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
		milli: number;
		fromUnix(unixMillis: number): TimeStruct;
		fromDate(d: Date, df: DateFunctions): TimeStruct;
		fromString(s: string): TimeStruct;
		constructor(year?: number, month?: number, day?: number, hour?: number, minute?: number, second?: number, milli?: number): this;
		validate(): boolean;
		yearDay(): number;
		toUnixNoLeapSecs(): number;
		equals(other: TimeStruct): boolean;
		lessThan(other: TimeStruct): boolean;
		clone(): TimeStruct;
		valueOf(): number;
		toString(): string;
		inspect(): string
	}

	
}

declare module '___timezonecomplete/datetime' {
			declare export function nowLocal(): DateTime

	declare export function nowUtc(): DateTime

	declare export function now(timeZone?: TimeZone): DateTime

	declare export class DateTime  {
		timeSource: TimeSource;
		nowLocal(): DateTime;
		nowUtc(): DateTime;
		now(timeZone?: TimeZone): DateTime;
		fromExcel(n: number, timeZone?: TimeZone): DateTime;
		constructor(): this;
		constructor(isoString: string, timeZone?: TimeZone): this;
		constructor(date: Date, getFuncs: DateFunctions, timeZone?: TimeZone): this;
		constructor(year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number, timeZone?: TimeZone): this;
		constructor(unixTimestamp: number, timeZone?: TimeZone): this;
		clone(): DateTime;
		zone(): TimeZone;
		zoneAbbreviation(dstDependent?: boolean): string;
		offset(): number;
		year(): number;
		month(): number;
		day(): number;
		hour(): number;
		minute(): number;
		second(): number;
		millisecond(): number;
		weekDay(): WeekDay;
		dayOfYear(): number;
		weekNumber(): number;
		weekOfMonth(): number;
		secondOfDay(): number;
		unixUtcMillis(): number;
		utcYear(): number;
		utcMonth(): number;
		utcDay(): number;
		utcHour(): number;
		utcMinute(): number;
		utcSecond(): number;
		utcDayOfYear(): number;
		utcMillisecond(): number;
		utcWeekDay(): WeekDay;
		utcWeekNumber(): number;
		utcWeekOfMonth(): number;
		utcSecondOfDay(): number;
		convert(zone?: TimeZone): DateTime;
		toZone(zone?: TimeZone): DateTime;
		toDate(): Date;
		add(duration: Duration): DateTime;
		add(amount: number, unit: TimeUnit): DateTime;
		addLocal(duration: Duration): DateTime;
		addLocal(amount: number, unit: TimeUnit): DateTime;
		sub(duration: Duration): DateTime;
		sub(amount: number, unit: TimeUnit): DateTime;
		subLocal(duration: Duration): DateTime;
		subLocal(amount: number, unit: TimeUnit): DateTime;
		diff(other: DateTime): Duration;
		startOfDay(): DateTime;
		lessThan(other: DateTime): boolean;
		lessEqual(other: DateTime): boolean;
		equals(other: DateTime): boolean;
		identical(other: DateTime): boolean;
		greaterThan(other: DateTime): boolean;
		greaterEqual(other: DateTime): boolean;
		min(other: DateTime): DateTime;
		max(other: DateTime): DateTime;
		toIsoString(): string;
		format(formatString: string): string;
		toString(): string;
		inspect(): string;
		valueOf(): any;
		toUtcString(): string
	}

	
}

declare module '___timezonecomplete/duration' {
			declare export function years(n: number): Duration

	declare export function months(n: number): Duration

	declare export function days(n: number): Duration

	declare export function hours(n: number): Duration

	declare export function minutes(n: number): Duration

	declare export function seconds(n: number): Duration

	declare export function milliseconds(n: number): Duration

	declare export class Duration  {
		years(n: number): Duration;
		months(n: number): Duration;
		days(n: number): Duration;
		hours(n: number): Duration;
		minutes(n: number): Duration;
		seconds(n: number): Duration;
		milliseconds(n: number): Duration;
		constructor(): this;
		constructor(input: string): this;
		constructor(amount: number, unit?: TimeUnit): this;
		clone(): Duration;
		as(unit: TimeUnit): number;
		convert(unit: TimeUnit): Duration;
		milliseconds(): number;
		millisecond(): number;
		seconds(): number;
		second(): number;
		minutes(): number;
		minute(): number;
		hours(): number;
		hour(): number;
		wholeHours(): number;
		days(): number;
		day(): number;
		months(): number;
		month(): number;
		years(): number;
		wholeYears(): number;
		amount(): number;
		unit(): TimeUnit;
		sign(): string;
		lessThan(other: Duration): boolean;
		lessEqual(other: Duration): boolean;
		equals(other: Duration): boolean;
		equalsExact(other: Duration): boolean;
		identical(other: Duration): boolean;
		greaterThan(other: Duration): boolean;
		greaterEqual(other: Duration): boolean;
		min(other: Duration): Duration;
		max(other: Duration): Duration;
		multiply(value: number): Duration;
		divide(value: number): Duration;
		add(value: Duration): Duration;
		sub(value: Duration): Duration;
		abs(): Duration;
		toFullString(): string;
		toHmsString(full?: boolean): string;
		toIsoString(): string;
		toString(): string;
		inspect(): string;
		valueOf(): any
	}

	
}

declare module '___timezonecomplete/period' {
			declare export function periodDstToString(p: PeriodDst): string

	declare export class Period  {
		constructor(start: DateTime, interval: Duration, dst?: PeriodDst): this;
		constructor(start: DateTime, amount: number, unit: TimeUnit, dst?: PeriodDst): this;
		start(): DateTime;
		interval(): Duration;
		amount(): number;
		unit(): TimeUnit;
		dst(): PeriodDst;
		findFirst(fromDate: DateTime): DateTime;
		findNext(prev: DateTime, count?: number): DateTime;
		isBoundary(occurrence: DateTime): boolean;
		equals(other: Period): boolean;
		identical(other: Period): boolean;
		toIsoString(): string;
		toString(): string;
		inspect(): string
	}

	
}

declare module '___timezonecomplete/timesource' {
		declare export interface TimeSource {
		now(): Date
	}

		declare export class RealTimeSource extends TimeSource {
		now(): Date
	}

	
}

declare module '___timezonecomplete/timezone' {
			declare export function local(): TimeZone

	declare export function utc(): TimeZone

	declare export function zone(offset: number): TimeZone

	declare export function zone(name: string, dst?: boolean): TimeZone

	declare export class TimeZone  {
		local(): TimeZone;
		utc(): TimeZone;
		zone(offset: number): TimeZone;
		zone(s: string, dst?: boolean): TimeZone;
		constructor(name: string, dst?: boolean): this;
		name(): string;
		dst(): boolean;
		kind(): TimeZoneKind;
		equals(other: TimeZone): boolean;
		identical(other: TimeZone): boolean;
		isUtc(): boolean;
		hasDst(): boolean;
		offsetForUtc(
		year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number
	): number;
		offsetForZone(
		year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number
	): number;
		offsetForUtcDate(date: Date, funcs: DateFunctions): number;
		offsetForZoneDate(date: Date, funcs: DateFunctions): number;
		abbreviationForUtc(
		year: number, month: number, day: number, hour?: number, minute?: number, second?: number, millisecond?: number, dstDependent?: boolean
	): string;
		normalizeZoneTime(localUnixMillis: number, opt?: NormalizeOption): number;
		toString(): string;
		inspect(): string;
		offsetToString(offset: number): string;
		stringToOffset(s: string): number
	}

	
}

declare module '___timezonecomplete/globals' {
			declare export function min(d1: DateTime, d2: DateTime): DateTime

	declare export function min(d1: Duration, d2: Duration): Duration

	declare export function max(d1: DateTime, d2: DateTime): DateTime

	declare export function max(d1: Duration, d2: Duration): Duration

	declare export function abs(d: Duration): Duration

		
}