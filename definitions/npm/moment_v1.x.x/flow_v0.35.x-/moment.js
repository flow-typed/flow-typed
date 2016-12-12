import type { MomentStatic } from 'npm$namespace$moment'

declare module 'moment' {
					declare module.exports: MomentStatic


}

declare module 'npm$namespace$moment' {
	declare type MomentComparable = Moment | string | number | Date | number[];

	declare type formatFunction = () => string;

	declare type MomentFormatSpecification = string | MomentBuiltinFormat | (string | MomentBuiltinFormat)[];

	declare interface MomentDateObject {
		years?: number,
		months?: number,
		date?: number,
		hours?: number,
		minutes?: number,
		seconds?: number,
		milliseconds?: number
	}

	declare interface MomentInput {
		years?: number,
		year?: number,
		y?: number,
		months?: number,
		month?: number,
		M?: number,
		weeks?: number,
		week?: number,
		w?: number,
		days?: number,
		day?: number,
		date?: number,
		d?: number,
		hours?: number,
		hour?: number,
		h?: number,
		minutes?: number,
		minute?: number,
		m?: number,
		seconds?: number,
		second?: number,
		s?: number,
		milliseconds?: number,
		millisecond?: number,
		ms?: number
	}

	declare interface Duration {
		humanize(withSuffix?: boolean): string,
		as(units: string): number,
		milliseconds(): number,
		asMilliseconds(): number,
		seconds(): number,
		asSeconds(): number,
		minutes(): number,
		asMinutes(): number,
		hours(): number,
		asHours(): number,
		days(): number,
		asDays(): number,
		weeks(): number,
		asWeeks(): number,
		months(): number,
		asMonths(): number,
		years(): number,
		asYears(): number,
		add(n: number, p: string): Duration,
		add(n: number): Duration,
		add(d: Duration): Duration,
		subtract(n: number, p: string): Duration,
		subtract(n: number): Duration,
		subtract(d: Duration): Duration,
		toISOString(): string,
		toJSON(): string
	}

	declare interface MomentLocale {
		ordinal(n: number): string
	}

	declare interface MomentCreationData {
		input?: string,
		format?: string,
		locale: MomentLocale,
		isUTC: boolean,
		strict?: boolean
	}

	declare interface Moment {
		format(format: string): string,
		format(): string,
		fromNow(withoutSuffix?: boolean): string,
		startOf(unitOfTime: string): Moment,
		endOf(unitOfTime: string): Moment,
		add(unitOfTime: string, amount: number): Moment,
		add(amount: number, unitOfTime: string): Moment,
		add(amount: string, unitOfTime: string): Moment,
		add(objectLiteral: MomentInput): Moment,
		add(duration: Duration): Moment,
		subtract(unitOfTime: string, amount: number): Moment,
		subtract(amount: number, unitOfTime: string): Moment,
		subtract(amount: string, unitOfTime: string): Moment,
		subtract(objectLiteral: MomentInput): Moment,
		subtract(duration: Duration): Moment,
		calendar(): string,
		calendar(start: Moment): string,
		calendar(start: Moment, formats: MomentCalendar): string,
		clone(): Moment,
		valueOf(): number,
		local(): Moment,
		utc(): Moment,
		isValid(): boolean,
		invalidAt(): number,
		year(y: number): Moment,
		year(): number,
		quarter(): number,
		quarter(q: number): Moment,
		month(M: number): Moment,
		month(M: string): Moment,
		month(): number,
		day(d: number): Moment,
		day(d: string): Moment,
		day(): number,
		date(d: number): Moment,
		date(): number,
		hour(h: number): Moment,
		hour(): number,
		hours(h: number): Moment,
		hours(): number,
		minute(m: number): Moment,
		minute(): number,
		minutes(m: number): Moment,
		minutes(): number,
		second(s: number): Moment,
		second(): number,
		seconds(s: number): Moment,
		seconds(): number,
		millisecond(ms: number): Moment,
		millisecond(): number,
		milliseconds(ms: number): Moment,
		milliseconds(): number,
		weekday(): number,
		weekday(d: number): Moment,
		isoWeekday(): number,
		isoWeekday(d: number): Moment,
		weekYear(): number,
		weekYear(d: number): Moment,
		isoWeekYear(): number,
		isoWeekYear(d: number): Moment,
		week(): number,
		week(d: number): Moment,
		weeks(): number,
		weeks(d: number): Moment,
		isoWeek(): number,
		isoWeek(d: number): Moment,
		isoWeeks(): number,
		isoWeeks(d: number): Moment,
		weeksInYear(): number,
		isoWeeksInYear(): number,
		dayOfYear(): number,
		dayOfYear(d: number): Moment,
		from(f: MomentComparable, suffix?: boolean): string,
		to(f: MomentComparable, suffix?: boolean): string,
		toNow(withoutPrefix?: boolean): string,
		diff(b: MomentComparable): number,
		diff(b: MomentComparable, unitOfTime: string): number,
		diff(b: MomentComparable, unitOfTime: string, round: boolean): number,
		toArray(): number[],
		toDate(): Date,
		toISOString(): string,
		toJSON(): string,
		unix(): number,
		isLeapYear(): boolean,
		zone(): number,
		zone(b: number): Moment,
		zone(b: string): Moment,
		utcOffset(): number,
		utcOffset(b: number): Moment,
		utcOffset(b: string): Moment,
		daysInMonth(): number,
		isDST(): boolean,
		isBefore(): boolean,
		isBefore(b: MomentComparable, granularity?: string): boolean,
		isAfter(): boolean,
		isAfter(b: MomentComparable, granularity?: string): boolean,
		isSame(b: MomentComparable, granularity?: string): boolean,
		isBetween(
		a: MomentComparable, b: MomentComparable, granularity?: string, inclusivity?: string
	): boolean,
		isSameOrBefore(b: MomentComparable, granularity?: string): boolean,
		isSameOrAfter(b: MomentComparable, granularity?: string): boolean,
		lang(language: string): Moment,
		lang(reset: boolean): Moment,
		lang(): MomentLanguage,
		locale(language: string): Moment,
		locale(reset: boolean): Moment,
		locale(): string,
		locales(): string[],
		localeData(language: string): Moment,
		localeData(reset: boolean): Moment,
		localeData(): MomentLanguageData,
		max(date: Moment | string | number | Date | any[]): Moment,
		max(date: string, format: string): Moment,
		min(date: Moment | string | number | Date | any[]): Moment,
		min(date: string, format: string): Moment,
		get(unit: string): number,
		set(unit: string, value: number): Moment,
		set(objectLiteral: MomentInput): Moment,
		toObject(): MomentDateObject,
		creationData(): MomentCreationData
	}

	declare interface MomentCalendar {
		lastDay?: string | formatFunction,
		sameDay?: string | formatFunction,
		nextDay?: string | formatFunction,
		lastWeek?: string | formatFunction,
		nextWeek?: string | formatFunction,
		sameElse?: string | formatFunction
	}

	declare interface BaseMomentLanguage {
		months?: any,
		monthsShort?: any,
		weekdays?: any,
		weekdaysShort?: any,
		weekdaysMin?: any,
		relativeTime?: MomentRelativeTime,
		meridiem?: (hour: number, minute: number, isLowercase: boolean) => string,
		calendar?: MomentCalendar,
		ordinal?: (num: number) => string,
		week?: MomentLanguageWeek
	}

	declare interface MomentLanguage {
		longDateFormat?: MomentLongDateFormat
	}

	declare interface MomentLanguageWeek {
		dow?: number,
		doy?: number
	}

	declare interface MomentLanguageData {
		months(aMoment: Moment): string,
		monthsShort(aMoment: Moment): string,
		monthsParse(longOrShortMonthString: string): number,
		weekdays(aMoment: Moment): string,
		weekdaysShort(aMoment: Moment): string,
		weekdaysMin(aMoment: Moment): string,
		weekdaysParse(longOrShortMonthString: string): number,
		longDateFormat(dateFormat: string): string,
		isPM(amPmString: string): boolean,
		meridiem(hour: number, minute: number, isLowercase: boolean): string,
		calendar(key: string, aMoment: Moment): string,
		relativeTime(number: number, withoutSuffix: boolean, key: string, isFuture: boolean): string,
		pastFuture(diff: number, relTime: string): string,
		ordinal(number: number): string,
		preparse(str: string): string,
		postformat(str: string): string,
		week(aMoment: Moment): number,
		invalidDate(): string,
		firstDayOfWeek(): number,
		firstDayOfYear(): number
	}

	declare interface MomentLongDateFormat {
		L: string,
		LL: string,
		LLL: string,
		LLLL: string,
		LT: string,
		LTS: string,
		l?: string,
		ll?: string,
		lll?: string,
		llll?: string,
		lt?: string,
		lts?: string
	}

	declare interface MomentRelativeTime {
		future: any,
		past: any,
		s: any,
		m: any,
		mm: any,
		h: any,
		hh: any,
		d: any,
		dd: any,
		M: any,
		MM: any,
		y: any,
		yy: any
	}

	declare interface MomentBuiltinFormat {
		___momentBuiltinFormatBrand: any
	}

	declare interface MomentStatic {
		version: string,
		fn: Moment,
		(): Moment,
		(date: number): Moment,
		(date: number[]): Moment,
		(date: string, format?: MomentFormatSpecification, strict?: boolean): Moment,
		(date: string, format?: MomentFormatSpecification, language?: string, strict?: boolean): Moment,
		(date: Date): Moment,
		(date: Moment): Moment,
		(date: Object): Moment,
		utc(): Moment,
		utc(date: number): Moment,
		utc(date: number[]): Moment,
		utc(date: string, format?: string, strict?: boolean): Moment,
		utc(date: string, format?: string, language?: string, strict?: boolean): Moment,
		utc(date: string, formats: string[], strict?: boolean): Moment,
		utc(date: string, formats: string[], language?: string, strict?: boolean): Moment,
		utc(date: Date): Moment,
		utc(date: Moment): Moment,
		utc(date: Object): Moment,
		unix(timestamp: number): Moment,
		invalid(parsingFlags?: Object): Moment,
		isMoment(): boolean,
		isMoment(m: any): Moment,
		isDate(m: any): Date,
		isDuration(): boolean,
		isDuration(d: any): Duration,
		lang(language?: string): string,
		lang(language?: string, definition?: MomentLanguage): string,
		locale(language?: string): string,
		locale(language?: string[]): string,
		locale(language?: string, definition?: MomentLanguage): string,
		localeData(language?: string): MomentLanguageData,
		longDateFormat: any,
		relativeTime: any,
		meridiem: (hour: number, minute: number, isLowercase: boolean) => string,
		calendar: any,
		ordinal: (num: number) => string,
		duration(milliseconds: Number): Duration,
		duration(num: Number, unitOfTime: string): Duration,
		duration(input: MomentInput): Duration,
		duration(object: any): Duration,
		duration(): Duration,
		parseZone(date: string): Moment,
		months(): string[],
		months(index: number): string,
		months(format: string): string[],
		months(format: string, index: number): string,
		monthsShort(): string[],
		monthsShort(index: number): string,
		monthsShort(format: string): string[],
		monthsShort(format: string, index: number): string,
		weekdays(): string[],
		weekdays(index: number): string,
		weekdays(format: string): string[],
		weekdays(format: string, index: number): string,
		weekdaysShort(): string[],
		weekdaysShort(index: number): string,
		weekdaysShort(format: string): string[],
		weekdaysShort(format: string, index: number): string,
		weekdaysMin(): string[],
		weekdaysMin(index: number): string,
		weekdaysMin(format: string): string[],
		weekdaysMin(format: string, index: number): string,
		min(...moments: Moment[]): Moment,
		min(moments: Moment[]): Moment,
		max(...moments: Moment[]): Moment,
		max(moments: Moment[]): Moment,
		normalizeUnits(unit: string): string,
		relativeTimeThreshold(threshold: string): number | boolean,
		relativeTimeThreshold(threshold: string, limit: number): boolean,
		now(): number,
		ISO_8601: MomentBuiltinFormat,
		defaultFormat: string
	}

			
}

declare module 'moment/moment' {
					declare module.exports: MomentStatic


}