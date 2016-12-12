

declare module 'gregorian-calendar' {
				declare class GregorianCalendar  {
		constructor(locale?: Object): this;
		set(
		year: Number, month: Number, dayOfMonth: Number, hourOfDay: Number, minutes: Number, seconds: Number, milliseconds: Number
	): void;
		setTime(time: Number): void;
		getTime(): Number;
		setTimezoneOffset(timezoneOffset: Number): void;
		getTimezoneOffset(): Number;
		setYear(year: Number): void;
		getYear(): Number;
		setMonth(month: Number): void;
		rollSetMonth(month: Number): void;
		getMonth(): Number;
		setDayOfMonth(day: Number): void;
		getDayOfMonth(): Number;
		setHourOfDay(hour: Number): void;
		getHourOfDay(): Number;
		setMinutes(minute: Number): void;
		getMinutes(): Number;
		setSeconds(second: Number): void;
		getSeconds(): Number;
		setMilliSeconds(second: Number): void;
		getMilliSeconds(): Number;
		getWeekOfYear(): Number;
		getWeekOfMonth(): Number;
		getDayOfYear(): Number;
		getDayOfWeek(): Number;
		getDayOfWeekInMonth(): Number;
		addYear(amount: Number): void;
		addMonth(amount: Number): void;
		addDayOfMonth(amount: Number): void;
		addHourOfDay(amount: Number): void;
		addMinute(amount: Number): void;
		addSecond(amount: Number): void;
		addMilliSecond(amount: Number): void;
		getWeekYear(): Number;
		setWeekDate(weekYear: Number, weekOfYear: Number, dayOfWeek: Number): void;
		getWeeksInWeekYear(): Number;
		clone(): GregorianCalendar;
		equals(other: GregorianCalendar): boolean;
		compareToDay(other: GregorianCalendar): Number;
		clear(): void
	}

	declare module.exports: undefined


}

declare module 'gregorian-calendar-format' {
				declare class DateTimeFormat  {
		Style: DateTimeStyle;
		constructor(pattern: string, locale?: Object): this;
		format(calendar: GregorianCalendar): String;
		parse(dateString: String, {Object}: <<UNKNOWN PARAM FORMAT>>): GregorianCalendar;
		getDateTimeInstance(
		dateStyle: DateTimeStyle, timeStyle: DateTimeStyle, locale?: Object
	): DateTimeFormat
	}

	declare module.exports: undefined


}