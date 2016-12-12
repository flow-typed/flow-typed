

declare module 'date-fns' {
	declare type DateOrStringOrNumber = Date | string | number;

		declare function addDays(date: DateOrStringOrNumber, amount: number): Date

	declare function addHours(date: DateOrStringOrNumber, amount: number): Date

	declare function addISOYears(date: DateOrStringOrNumber, amount: number): Date

	declare function addMilliseconds(date: DateOrStringOrNumber, amount: number): Date

	declare function addMinutes(date: DateOrStringOrNumber, amount: number): Date

	declare function addMonths(date: DateOrStringOrNumber, amount: number): Date

	declare function addQuarters(date: DateOrStringOrNumber, amount: number): Date

	declare function addSeconds(date: DateOrStringOrNumber, amount: number): Date

	declare function addWeeks(date: DateOrStringOrNumber, amount: number): Date

	declare function addYears(date: DateOrStringOrNumber, amount: number): Date

	declare function closestIndexTo(
		dateToCompare: DateOrStringOrNumber, datesArray: DateOrStringOrNumber[]
	): number

	declare function closestTo(dateToCompare: DateOrStringOrNumber, datesArray: DateOrStringOrNumber[]): Date

	declare function compareAsc(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function compareDesc(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInCalendarDays(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInCalendarISOWeeks(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInCalendarISOYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInCalendarMonths(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInCalendarQuarters(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInCalendarWeeks(
		dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber, options?: {
		weekStartsOn: number
	}
	): number

	declare function differenceInCalendarYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInDays(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInHours(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInISOYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInMilliseconds(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInMinutes(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInMonths(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInQuarters(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInSeconds(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInWeeks(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function differenceInYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number

	declare function distanceInWords(
		dateFrom: DateOrStringOrNumber, dateTo: DateOrStringOrNumber, options?: {
		includeSeconds: boolean
	}
	): string

	declare function distanceInWordsToNow(date: DateOrStringOrNumber, options?: {
		includeSeconds: boolean
	}): string

	declare function eachDay(startDate: DateOrStringOrNumber, endDate: DateOrStringOrNumber): Date[]

	declare function endOfDay(date: DateOrStringOrNumber): Date

	declare function endOfHour(date: DateOrStringOrNumber): Date

	declare function endOfISOWeek(date: DateOrStringOrNumber): Date

	declare function endOfISOYear(date: DateOrStringOrNumber): Date

	declare function endOfMinute(date: DateOrStringOrNumber): Date

	declare function endOfMonth(date: DateOrStringOrNumber): Date

	declare function endOfQuarter(date: DateOrStringOrNumber): Date

	declare function endOfSecond(date: DateOrStringOrNumber): Date

	declare function endOfToday(): Date

	declare function endOfTomorrow(): Date

	declare function endOfWeek(date: DateOrStringOrNumber, options?: {
		weekStartsOn: number
	}): Date

	declare function endOfYear(date: DateOrStringOrNumber): Date

	declare function endOfYesterday(): Date

	declare function format(date: DateOrStringOrNumber, format?: string): string

	declare function getDate(date: DateOrStringOrNumber): number

	declare function getDay(date: DateOrStringOrNumber): number

	declare function getDayOfYear(date: DateOrStringOrNumber): number

	declare function getDaysInMonth(date: DateOrStringOrNumber): number

	declare function getDaysInYear(date: DateOrStringOrNumber): number

	declare function getHours(date: DateOrStringOrNumber): number

	declare function getISOWeek(date: DateOrStringOrNumber): number

	declare function getISOWeeksInYear(date: DateOrStringOrNumber): number

	declare function getISOYear(date: DateOrStringOrNumber): number

	declare function getMilliseconds(date: DateOrStringOrNumber): number

	declare function getMinutes(date: DateOrStringOrNumber): number

	declare function getMonth(date: DateOrStringOrNumber): number

	declare function getQuarter(date: DateOrStringOrNumber): number

	declare function getSeconds(date: DateOrStringOrNumber): number

	declare function getYear(date: DateOrStringOrNumber): number

	declare function isAfter(dateToCompare: DateOrStringOrNumber, date: DateOrStringOrNumber): boolean

	declare function isBefore(dateToCompare: DateOrStringOrNumber, date: DateOrStringOrNumber): boolean

	declare function isDate(argument: any): boolean

	declare function isEqual(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isFirstDayOfMonth(date: DateOrStringOrNumber): boolean

	declare function isFriday(date: DateOrStringOrNumber): boolean

	declare function isFuture(date: DateOrStringOrNumber): boolean

	declare function isLastDayOfMonth(date: DateOrStringOrNumber): boolean

	declare function isLeapYear(date: DateOrStringOrNumber): boolean

	declare function isMonday(date: DateOrStringOrNumber): boolean

	declare function isPast(date: DateOrStringOrNumber): boolean

	declare function isSameDay(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isSameHour(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isSameISOWeek(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isSameISOYear(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isSameMinute(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isSameMonth(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isSameQuarter(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isSameSecond(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isSameWeek(
		dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber, options?: {
		weekStartsOn: number
	}
	): boolean

	declare function isSameYear(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean

	declare function isSaturday(date: DateOrStringOrNumber): boolean

	declare function isSunday(date: DateOrStringOrNumber): boolean

	declare function isThisHour(date: DateOrStringOrNumber): boolean

	declare function isThisISOWeek(date: DateOrStringOrNumber): boolean

	declare function isThisISOYear(date: DateOrStringOrNumber): boolean

	declare function isThisMinute(date: DateOrStringOrNumber): boolean

	declare function isThisMonth(date: DateOrStringOrNumber): boolean

	declare function isThisQuarter(date: DateOrStringOrNumber): boolean

	declare function isThisSecond(date: DateOrStringOrNumber): boolean

	declare function isThisWeek(date: DateOrStringOrNumber, options?: {
		weekStartsOn: number
	}): boolean

	declare function isThisYear(date: DateOrStringOrNumber): boolean

	declare function isThursday(date: DateOrStringOrNumber): boolean

	declare function isToday(date: DateOrStringOrNumber): boolean

	declare function isTomorrow(date: DateOrStringOrNumber): boolean

	declare function isTuesday(date: DateOrStringOrNumber): boolean

	declare function isValid(date: DateOrStringOrNumber): boolean

	declare function isWednesday(date: DateOrStringOrNumber): boolean

	declare function isWeekend(date: DateOrStringOrNumber): boolean

	declare function isWithinRange(
		date: DateOrStringOrNumber, startDate: DateOrStringOrNumber, endDate: DateOrStringOrNumber
	): boolean

	declare function isYesterday(date: DateOrStringOrNumber): boolean

	declare function lastDayOfISOWeek(date: DateOrStringOrNumber): Date

	declare function lastDayOfISOYear(date: DateOrStringOrNumber): Date

	declare function lastDayOfMonth(date: DateOrStringOrNumber): Date

	declare function lastDayOfQuarter(date: DateOrStringOrNumber): Date

	declare function lastDayOfWeek(date: DateOrStringOrNumber, options?: {
		weekStartsOn: number
	}): Date

	declare function lastDayOfYear(date: DateOrStringOrNumber): Date

	declare function max(...dates: DateOrStringOrNumber[]): Date

	declare function min(...dates: DateOrStringOrNumber[]): Date

	declare function parse(dateString: string): Date

	declare function setDate(date: DateOrStringOrNumber, dayOfMonth: number): Date

	declare function setDay(
		date: DateOrStringOrNumber, day: number, options?: {
		weekStartsOn: number
	}
	): Date

	declare function setDayOfYear(date: DateOrStringOrNumber, dayOfYear: number): Date

	declare function setHours(date: DateOrStringOrNumber, hours: number): Date

	declare function setISOWeek(date: DateOrStringOrNumber, isoWeek: number): Date

	declare function setISOYear(date: DateOrStringOrNumber, isoYear: number): Date

	declare function setMilliseconds(date: DateOrStringOrNumber, milliseconds: number): Date

	declare function setMinutes(date: DateOrStringOrNumber, minutes: number): Date

	declare function setMonth(date: DateOrStringOrNumber, month: number): Date

	declare function setQuarter(date: DateOrStringOrNumber, quarter: number): Date

	declare function setSeconds(date: DateOrStringOrNumber, seconds: number): Date

	declare function setYear(date: DateOrStringOrNumber, year: number): Date

	declare function startOfDay(date: DateOrStringOrNumber): Date

	declare function startOfHour(date: DateOrStringOrNumber): Date

	declare function startOfISOWeek(date: DateOrStringOrNumber): Date

	declare function startOfISOYear(date: DateOrStringOrNumber): Date

	declare function startOfMinute(date: DateOrStringOrNumber): Date

	declare function startOfMonth(date: DateOrStringOrNumber): Date

	declare function startOfQuarter(date: DateOrStringOrNumber): Date

	declare function startOfSecond(date: DateOrStringOrNumber): Date

	declare function startOfToday(): Date

	declare function startOfTomorrow(): Date

	declare function startOfWeek(date: DateOrStringOrNumber, options?: {
		weekStartsOn: number
	}): Date

	declare function startOfYear(date: DateOrStringOrNumber): Date

	declare function startOfYesterday(): Date

	declare function subDays(date: DateOrStringOrNumber, amount: number): Date

	declare function subHours(date: DateOrStringOrNumber, amount: number): Date

	declare function subISOYears(date: DateOrStringOrNumber, amount: number): Date

	declare function subMilliseconds(date: DateOrStringOrNumber, amount: number): Date

	declare function subMinutes(date: DateOrStringOrNumber, amount: number): Date

	declare function subMonths(date: DateOrStringOrNumber, amount: number): Date

	declare function subQuarters(date: DateOrStringOrNumber, amount: number): Date

	declare function subSeconds(date: DateOrStringOrNumber, amount: number): Date

	declare function subWeeks(date: DateOrStringOrNumber, amount: number): Date

	declare function subYears(date: DateOrStringOrNumber, amount: number): Date

		
}

declare module 'date-fns/add_days' {
					declare module.exports: undefined


}

declare module 'date-fns/add_hours' {
					declare module.exports: undefined


}

declare module 'date-fns/add_iso_years' {
					declare module.exports: undefined


}

declare module 'date-fns/add_milliseconds' {
					declare module.exports: undefined


}

declare module 'date-fns/add_minutes' {
					declare module.exports: undefined


}

declare module 'date-fns/add_months' {
					declare module.exports: undefined


}

declare module 'date-fns/add_quarters' {
					declare module.exports: undefined


}

declare module 'date-fns/add_seconds' {
					declare module.exports: undefined


}

declare module 'date-fns/add_weeks' {
					declare module.exports: undefined


}

declare module 'date-fns/add_years' {
					declare module.exports: undefined


}

declare module 'date-fns/closest_index_to' {
					declare module.exports: undefined


}

declare module 'date-fns/closest_to' {
					declare module.exports: undefined


}

declare module 'date-fns/compare_asc' {
					declare module.exports: undefined


}

declare module 'date-fns/compare_desc' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_calendar_days' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_calendar_iso_weeks' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_calendar_iso_years' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_calendar_months' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_calendar_quarters' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_calendar_weeks' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_calendar_years' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_days' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_hours' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_iso_years' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_milliseconds' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_minutes' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_months' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_quarters' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_seconds' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_weeks' {
					declare module.exports: undefined


}

declare module 'date-fns/difference_in_years' {
					declare module.exports: undefined


}

declare module 'date-fns/distance_in_words' {
					declare module.exports: undefined


}

declare module 'date-fns/distance_in_words_to_now' {
					declare module.exports: undefined


}

declare module 'date-fns/each_day' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_day' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_hour' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_iso_week' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_iso_year' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_minute' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_month' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_quarter' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_second' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_today' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_tomorrow' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_week' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_year' {
					declare module.exports: undefined


}

declare module 'date-fns/end_of_yesterday' {
					declare module.exports: undefined


}

declare module 'date-fns/format' {
					declare module.exports: undefined


}

declare module 'date-fns/get_date' {
					declare module.exports: undefined


}

declare module 'date-fns/get_day' {
					declare module.exports: undefined


}

declare module 'date-fns/get_day_of_year' {
					declare module.exports: undefined


}

declare module 'date-fns/get_days_in_month' {
					declare module.exports: undefined


}

declare module 'date-fns/get_days_in_year' {
					declare module.exports: undefined


}

declare module 'date-fns/get_hours' {
					declare module.exports: undefined


}

declare module 'date-fns/get_iso_week' {
					declare module.exports: undefined


}

declare module 'date-fns/get_iso_weeks_in_year' {
					declare module.exports: undefined


}

declare module 'date-fns/get_iso_year' {
					declare module.exports: undefined


}

declare module 'date-fns/get_milliseconds' {
					declare module.exports: undefined


}

declare module 'date-fns/get_minutes' {
					declare module.exports: undefined


}

declare module 'date-fns/get_month' {
					declare module.exports: undefined


}

declare module 'date-fns/get_quarter' {
					declare module.exports: undefined


}

declare module 'date-fns/get_seconds' {
					declare module.exports: undefined


}

declare module 'date-fns/get_year' {
					declare module.exports: undefined


}

declare module 'date-fns/is_after' {
					declare module.exports: undefined


}

declare module 'date-fns/is_before' {
					declare module.exports: undefined


}

declare module 'date-fns/is_date' {
					declare module.exports: undefined


}

declare module 'date-fns/is_equal' {
					declare module.exports: undefined


}

declare module 'date-fns/is_first_day_of_month' {
					declare module.exports: undefined


}

declare module 'date-fns/is_friday' {
					declare module.exports: undefined


}

declare module 'date-fns/is_future' {
					declare module.exports: undefined


}

declare module 'date-fns/is_last_day_of_month' {
					declare module.exports: undefined


}

declare module 'date-fns/is_leap_year' {
					declare module.exports: undefined


}

declare module 'date-fns/is_monday' {
					declare module.exports: undefined


}

declare module 'date-fns/is_past' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_day' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_hour' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_iso_week' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_iso_year' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_minute' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_month' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_quarter' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_second' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_week' {
					declare module.exports: undefined


}

declare module 'date-fns/is_same_year' {
					declare module.exports: undefined


}

declare module 'date-fns/is_saturday' {
					declare module.exports: undefined


}

declare module 'date-fns/is_sunday' {
					declare module.exports: undefined


}

declare module 'date-fns/is_this_hour' {
					declare module.exports: undefined


}

declare module 'date-fns/is_this_iso_week' {
					declare module.exports: undefined


}

declare module 'date-fns/is_this_iso_year' {
					declare module.exports: undefined


}

declare module 'date-fns/is_this_minute' {
					declare module.exports: undefined


}

declare module 'date-fns/is_this_month' {
					declare module.exports: undefined


}

declare module 'date-fns/is_this_quarter' {
					declare module.exports: undefined


}

declare module 'date-fns/is_this_second' {
					declare module.exports: undefined


}

declare module 'date-fns/is_this_week' {
					declare module.exports: undefined


}

declare module 'date-fns/is_this_year' {
					declare module.exports: undefined


}

declare module 'date-fns/is_thursday' {
					declare module.exports: undefined


}

declare module 'date-fns/is_today' {
					declare module.exports: undefined


}

declare module 'date-fns/is_tomorrow' {
					declare module.exports: undefined


}

declare module 'date-fns/is_tuesday' {
					declare module.exports: undefined


}

declare module 'date-fns/is_valid' {
					declare module.exports: undefined


}

declare module 'date-fns/is_wednesday' {
					declare module.exports: undefined


}

declare module 'date-fns/is_weekend' {
					declare module.exports: undefined


}

declare module 'date-fns/is_within_range' {
					declare module.exports: undefined


}

declare module 'date-fns/is_yesterday' {
					declare module.exports: undefined


}

declare module 'date-fns/last_day_of_iso_week' {
					declare module.exports: undefined


}

declare module 'date-fns/last_day_of_iso_year' {
					declare module.exports: undefined


}

declare module 'date-fns/last_day_of_month' {
					declare module.exports: undefined


}

declare module 'date-fns/last_day_of_quarter' {
					declare module.exports: undefined


}

declare module 'date-fns/last_day_of_week' {
					declare module.exports: undefined


}

declare module 'date-fns/last_day_of_year' {
					declare module.exports: undefined


}

declare module 'date-fns/max' {
					declare module.exports: undefined


}

declare module 'date-fns/min' {
					declare module.exports: undefined


}

declare module 'date-fns/parse' {
					declare module.exports: undefined


}

declare module 'date-fns/set_date' {
					declare module.exports: undefined


}

declare module 'date-fns/set_day' {
					declare module.exports: undefined


}

declare module 'date-fns/set_day_of_year' {
					declare module.exports: undefined


}

declare module 'date-fns/set_hours' {
					declare module.exports: undefined


}

declare module 'date-fns/set_iso_week' {
					declare module.exports: undefined


}

declare module 'date-fns/set_iso_year' {
					declare module.exports: undefined


}

declare module 'date-fns/set_milliseconds' {
					declare module.exports: undefined


}

declare module 'date-fns/set_minutes' {
					declare module.exports: undefined


}

declare module 'date-fns/set_month' {
					declare module.exports: undefined


}

declare module 'date-fns/set_quarter' {
					declare module.exports: undefined


}

declare module 'date-fns/set_seconds' {
					declare module.exports: undefined


}

declare module 'date-fns/set_year' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_day' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_hour' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_iso_week' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_iso_year' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_minute' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_month' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_quarter' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_second' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_today' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_tomorrow' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_week' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_year' {
					declare module.exports: undefined


}

declare module 'date-fns/start_of_yesterday' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_days' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_hours' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_iso_years' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_milliseconds' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_minutes' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_months' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_quarters' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_seconds' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_weeks' {
					declare module.exports: undefined


}

declare module 'date-fns/sub_years' {
					declare module.exports: undefined


}