

declare module 'xdate' {
		declare interface formatters_info {
		i?: string,
		u?: string,
		xxx?: string,
		vvv?: (xdate: XDate, useutc: boolean) => string
	}

	declare interface locale_detail {
		monthNames?: string[],
		monthNamesShort?: string[],
		dayNames?: string[],
		dayNamesShort?: string[],
		amDesignator?: string,
		pmDesignator?: string
	}

		declare class XDate  {
		constructor(): this;
		constructor(utcmode: boolean): this;
		constructor(xdate: XDate, utcmode?: boolean): this;
		constructor(nativeDate: Date, utcmode?: boolean): this;
		constructor(milliseconds: number, utcmode?: boolean): this;
		constructor(year: number, month: number, date: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number, utcmode?: boolean): this;
		constructor(dateString: string, utcmode?: boolean): this;
		getFullYear(): number;
		getMonth(): number;
		getWeek(): number;
		getDate(): number;
		getDay(): number;
		getHours(): number;
		getMinutes(): number;
		getSeconds(): number;
		getMilliseconds(): number;
		getTime(): number;
		valueOf(): number;
		setFullYear(year: number, preventOverflow?: boolean): XDate;
		setMonth(month: number, preventOverflow?: boolean): XDate;
		setWeek(week: number, year?: number): XDate;
		setDate(date: number): XDate;
		setHours(hours: number): XDate;
		setMinutes(minutes: number): XDate;
		setSeconds(seconds: number): XDate;
		setMilliseconds(milliseconds: number): XDate;
		setTime(milliseconds: number): XDate;
		addYears(years: number, preventOverflow?: boolean): XDate;
		addMonths(months: number, preventOverflow?: boolean): XDate;
		addWeeks(weeks: number): XDate;
		addDays(days: number): XDate;
		addHours(hours: number): XDate;
		addMinutes(minutes: number): XDate;
		addSeconds(seconds: number): XDate;
		addMilliseconds(milliseconds: number): XDate;
		diffYears(otherDate: string): number;
		diffYears(otherDate: XDate): number;
		diffMonths(otherDate: string): number;
		diffMonths(otherDate: XDate): number;
		diffWeeks(otherDate: string): number;
		diffWeeks(otherDate: XDate): number;
		diffDays(otherDate: string): number;
		diffDays(otherDate: XDate): number;
		diffHours(otherDate: string): number;
		diffHours(otherDate: XDate): number;
		diffMinutes(otherDate: string): number;
		diffMinutes(otherDate: XDate): number;
		diffSeconds(otherDate: string): number;
		diffSeconds(otherDate: XDate): number;
		diffMilliseconds(otherDate: string): number;
		diffMilliseconds(otherDate: XDate): number;
		toString(formatString?: string, settings?: Object): string;
		toUTCString(formatString?: string, settings?: Object): string;
		toGMTString(formatString?: string, settings?: Object): string;
		toISOString(): string;
		toDateString(): string;
		toTimeString(): string;
		toLocaleString(): string;
		toLocaleDateString(): string;
		toLocaleTimeString(): string;
		getUTCFullYear(): number;
		getUTCMonth(): number;
		getUTCWeek(): number;
		getUTCDate(): number;
		getUTCDay(): number;
		getUTCHours(): number;
		getUTCMinutes(): number;
		getUTCSeconds(): number;
		getUTCMilliseconds(): number;
		setUTCFullYear(year: number): XDate;
		setUTCMonth(month: number): XDate;
		setUTCWeek(week: number, year?: number): XDate;
		setUTCDate(date: number): XDate;
		setUTCHours(hours: number): XDate;
		setUTCMinutes(minutes: number): XDate;
		setUTCSeconds(seconds: number): XDate;
		setUTCMilliseconds(milliseconds: number): XDate;
		getUTCMode(): boolean;
		setUTCMode(utcMode: boolean, doCoercion?: boolean): XDate;
		getTimezoneOffset(): number;
		clone(): XDate;
		clearTime(): XDate;
		valid(): boolean;
		toDate(): Date;
		getDaysInMonth(year: number, month: number): number;
		parse(dateString: string): number;
		now(): number;
		today(): XDate;
		UTC(
		year: number, month: number, date: number, hours: number, minutes: number, seconds: number, milliseconds: number
	): XDate;
		locales: {
		[key: string]: locale_detail
	};
		defaultLocale: string;
		formatters: formatters_info;
		getDaysInMonth(year: number, month: number): number;
		UTC(
		year: number, month: number, day: number, hours?: number, minutes?: number, seconds?: number, ms?: number
	): number
	}

	
}