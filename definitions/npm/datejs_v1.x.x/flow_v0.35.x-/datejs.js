

declare module 'datejs' {
		declare interface IDateJSLiteral {
		milliseconds: number,
		seconds: number,
		minutes: number,
		hours: number,
		days: number,
		months: number,
		years: number
	}

	declare interface DateConstructor {
		today(): Date,
		compare(date1: Date, date2: Date): number,
		equals(date1: Date, date2?: Date): boolean,
		getDayNumberFromName(dayName: string): number,
		getMonthNumberFromName(monthName: string): number,
		isLeapYear(year: number): boolean,
		getDaysInMonth(year: number, month: number): number,
		getTimezoneAbbreviation(timezoneOffset: number, isDayLightSavingsTime: boolean): string,
		getTimezoneOffset(timezoneAbbreviation?: string, isDayLightSavingsTime?: boolean): number,
		parse(dateString: string): Date,
		parseExact(dateString: string, formatString: string): Date,
		parseExact(dateString: string, formatArray: string[]): Date,
		validateDay(day: number, fullYear: number, monthNumber: number): boolean,
		validateHour(hour: number): boolean,
		validateMillisecond(milliseconds: number): boolean,
		validateMinute(minutes: number): boolean,
		validateMonth(month: number): boolean,
		validateSecond(second: number): boolean,
		validateYear(year: number): boolean
	}

	declare interface Date {
		add(config?: IDateJSLiteral): Date,
		addMilliseconds(milliseconds: number): Date,
		addSeconds(seconds: number): Date,
		addMinutes(minutes: number): Date,
		addHours(hours: number): Date,
		addDays(days: number): Date,
		addWeeks(weeks: number): Date,
		addMonths(months: number): Date,
		addYears(years: number): Date,
		clearTime(): Date,
		setTimeToNow(): Date,
		clone(): Date,
		between(startDate: Date, endDate: Date): boolean,
		compareTo(date: Date): number,
		equals(date: Date): boolean,
		isAfter(date: Date): boolean,
		isBefore(date: Date): boolean,
		isToday(date: Date): boolean,
		getElapsed(date: Date): number,
		getOrdinalNumber(): number,
		getTimezone(): string,
		getUTCOffset(): string,
		getWeek(): number,
		getISOWeek(): string,
		setWeek(week: number): Date,
		hasDaylightSavingTime(): boolean,
		isDaylightSavingTime(): boolean,
		moveToDayOfWeek(dayOfWeek: number, direction: number): Date,
		moveToFirstDayOfMonth(): Date,
		moveToLastDayOfMonth(): Date,
		moveToMonth(month: number, direction: number): Date,
		moveToNthOccurrence(dayOfWeek: number, occurrence: number): Date,
		set(config: IDateJSLiteral): Date,
		setTimezone(timezoneAbbreviation: string): Date,
		setTimezoneOffset(timezoneOffset: number): Date,
		toISOString(): string,
		toString(format?: string): string
	}

	declare interface IDateJS {
		
	}

	declare interface IDateJSStatic {
		
	}

			
}