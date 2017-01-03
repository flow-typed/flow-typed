// @flow
/**
 * Flowtype definitions for moment
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type moment$MomentComparable = moment$Moment |
    string |
    number |
    Date |
    number[];

declare interface moment$MomentDateObject {
    years?: number,
        months?: number,
        date?: number,
        hours?: number,
        minutes?: number,
        seconds?: number,
        milliseconds?: number
}

declare interface moment$MomentInput {

    /**
     * Year 
     */
    years?: number,

        /**
         * Year 
         */
        year?: number,

        /**
         * Year 
         */
        y?: number,

        /**
         * Month 
         */
        months?: number,

        /**
         * Month 
         */
        month?: number,

        /**
         * Month 
         */
        M?: number,

        /**
         * Week 
         */
        weeks?: number,

        /**
         * Week 
         */
        week?: number,

        /**
         * Week 
         */
        w?: number,

        /**
         * Day/Date 
         */
        days?: number,

        /**
         * Day/Date 
         */
        day?: number,

        /**
         * Day/Date 
         */
        date?: number,

        /**
         * Day/Date 
         */
        d?: number,

        /**
         * Hour 
         */
        hours?: number,

        /**
         * Hour 
         */
        hour?: number,

        /**
         * Hour 
         */
        h?: number,

        /**
         * Minute 
         */
        minutes?: number,

        /**
         * Minute 
         */
        minute?: number,

        /**
         * Minute 
         */
        m?: number,

        /**
         * Second 
         */
        seconds?: number,

        /**
         * Second 
         */
        second?: number,

        /**
         * Second 
         */
        s?: number,

        /**
         * Millisecond 
         */
        milliseconds?: number,

        /**
         * Millisecond 
         */
        millisecond?: number,

        /**
         * Millisecond 
         */
        ms?: number
}

declare interface moment$Duration {
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
        add(n: number, p: string): moment$Duration,
        add(n: number): moment$Duration,
        add(d: moment$Duration): moment$Duration,
        subtract(n: number, p: string): moment$Duration,
        subtract(n: number): moment$Duration,
        subtract(d: moment$Duration): moment$Duration,
        toISOString(): string,
        toJSON(): string
}

declare interface moment$MomentLocale {
    ordinal(n: number): string
}

declare interface moment$MomentCreationData {
    input?: string,
        format?: string,
        locale: moment$MomentLocale,
        isUTC: boolean,
        strict?: boolean
}

declare interface moment$Moment {
    format(format: string): string,
        format(): string,
        fromNow(withoutSuffix?: boolean): string,
        startOf(unitOfTime: string): moment$Moment,
        endOf(unitOfTime: string): moment$Moment,

        /**
         * Mutates the original moment by adding time. (deprecated in 2.8.0)
         * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
         * @param amount the amount you want to add
         */
        add(unitOfTime: string, amount: number): moment$Moment,

        /**
         * Mutates the original moment by adding time.
         * @param amount the amount you want to add
         * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
         */
        add(amount: number, unitOfTime: string): moment$Moment,

        /**
         * Mutates the original moment by adding time. Note that the order of arguments can be flipped.
         * @param amount the amount you want to add
         * @param unitOfTime the unit of time you want to add (eg "years" / "hours" etc)
         */
        add(amount: string, unitOfTime: string): moment$Moment,

        /**
         * Mutates the original moment by adding time.
         * @param objectLiteral an object literal that describes multiple time units {days:7,months:1}
         */
        add(objectLiteral: moment$MomentInput): moment$Moment,

        /**
         * Mutates the original moment by adding time.
         * @param duration a length of time
         */
        add(duration: moment$Duration): moment$Moment,

        /**
         * Mutates the original moment by subtracting time. (deprecated in 2.8.0)
         * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
         * @param amount the amount you want to subtract
         */
        subtract(unitOfTime: string, amount: number): moment$Moment,

        /**
         * Mutates the original moment by subtracting time.
         * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
         * @param amount the amount you want to subtract
         */
        subtract(amount: number, unitOfTime: string): moment$Moment,

        /**
         * Mutates the original moment by subtracting time. Note that the order of arguments can be flipped.
         * @param amount the amount you want to add
         * @param unitOfTime the unit of time you want to subtract (eg "years" / "hours" etc)
         */
        subtract(amount: string, unitOfTime: string): moment$Moment,

        /**
         * Mutates the original moment by subtracting time.
         * @param objectLiteral an object literal that describes multiple time units {days:7,months:1}
         */
        subtract(objectLiteral: moment$MomentInput): moment$Moment,

        /**
         * Mutates the original moment by subtracting time.
         * @param duration a length of time
         */
        subtract(duration: moment$Duration): moment$Moment,
        calendar(): string,
        calendar(start: moment$Moment): string,
        calendar(start: moment$Moment, formats: moment$MomentCalendar): string,
        clone(): moment$Moment,

        /**
         * 
         * @return  Unix timestamp, or milliseconds since the epoch.
         */
        valueOf(): number,
        local(): moment$Moment,
        utc(): moment$Moment,
        isValid(): boolean,
        invalidAt(): number,
        year(y: number): moment$Moment,
        year(): number,
        quarter(): number,
        quarter(q: number): moment$Moment,
        month(M: number): moment$Moment,
        month(M: string): moment$Moment,
        month(): number,
        day(d: number): moment$Moment,
        day(d: string): moment$Moment,
        day(): number,
        date(d: number): moment$Moment,
        date(): number,
        hour(h: number): moment$Moment,
        hour(): number,
        hours(h: number): moment$Moment,
        hours(): number,
        minute(m: number): moment$Moment,
        minute(): number,
        minutes(m: number): moment$Moment,
        minutes(): number,
        second(s: number): moment$Moment,
        second(): number,
        seconds(s: number): moment$Moment,
        seconds(): number,
        millisecond(ms: number): moment$Moment,
        millisecond(): number,
        milliseconds(ms: number): moment$Moment,
        milliseconds(): number,
        weekday(): number,
        weekday(d: number): moment$Moment,
        isoWeekday(): number,
        isoWeekday(d: number): moment$Moment,
        weekYear(): number,
        weekYear(d: number): moment$Moment,
        isoWeekYear(): number,
        isoWeekYear(d: number): moment$Moment,
        week(): number,
        week(d: number): moment$Moment,
        weeks(): number,
        weeks(d: number): moment$Moment,
        isoWeek(): number,
        isoWeek(d: number): moment$Moment,
        isoWeeks(): number,
        isoWeeks(d: number): moment$Moment,
        weeksInYear(): number,
        isoWeeksInYear(): number,
        dayOfYear(): number,
        dayOfYear(d: number): moment$Moment,
        from(f: moment$MomentComparable, suffix?: boolean): string,
        to(f: moment$MomentComparable, suffix?: boolean): string,
        toNow(withoutPrefix?: boolean): string,
        diff(b: moment$MomentComparable): number,
        diff(b: moment$MomentComparable, unitOfTime: string): number,
        diff(b: moment$MomentComparable, unitOfTime: string, round: boolean): number,
        toArray(): number[],
        toDate(): Date,
        toISOString(): string,
        toJSON(): string,
        unix(): number,
        isLeapYear(): boolean,
        zone(): number,
        zone(b: number): moment$Moment,
        zone(b: string): moment$Moment,
        utcOffset(): number,
        utcOffset(b: number): moment$Moment,
        utcOffset(b: string): moment$Moment,
        daysInMonth(): number,
        isDST(): boolean,
        isBefore(): boolean,
        isBefore(b: moment$MomentComparable, granularity?: string): boolean,
        isAfter(): boolean,
        isAfter(b: moment$MomentComparable, granularity?: string): boolean,
        isSame(b: moment$MomentComparable, granularity?: string): boolean,
        isBetween(
            a: moment$MomentComparable,
            b: moment$MomentComparable,
            granularity?: string,
            inclusivity?: string): boolean,

        /**
         * 
         * @since  2.10.7+
         */
        isSameOrBefore(b: moment$MomentComparable, granularity?: string): boolean,
        isSameOrAfter(b: moment$MomentComparable, granularity?: string): boolean,

        /**
         * 
         * @deprecated  since version 2.8.0
         */
        lang(language: string): moment$Moment,
        lang(reset: boolean): moment$Moment,
        lang(): moment$MomentLanguage,
        locale(language: string): moment$Moment,
        locale(reset: boolean): moment$Moment,
        locale(): string,

        /**
         * 
         * @since  2.12.0+
         */
        locales(): string[],
        localeData(language: string): moment$Moment,
        localeData(reset: boolean): moment$Moment,
        localeData(): moment$MomentLanguageData,

        /**
         * 
         * @deprecated  since version 2.7.0
         */
        max(date: moment$Moment |
            string |
            number |
            Date |
            any[]): moment$Moment,
        max(date: string, format: string): moment$Moment,

        /**
         * 
         * @deprecated  since version 2.7.0
         */
        min(date: moment$Moment |
            string |
            number |
            Date |
            any[]): moment$Moment,
        min(date: string, format: string): moment$Moment,
        get(unit: string): number,
        set(unit: string, value: number): moment$Moment,
        set(objectLiteral: moment$MomentInput): moment$Moment,

        /**
         * This returns an object containing year, month, day-of-month, hour, minute, seconds, milliseconds.
         * @since  2.10.5+
         */
        toObject(): moment$MomentDateObject,

        /**
         * 
         * @since  2.10.7+
         */
        creationData(): moment$MomentCreationData
}

declare type moment$formatFunction = () => string;

declare interface moment$MomentCalendar {
    lastDay?: string | moment$formatFunction,
        sameDay?: string | moment$formatFunction,
        nextDay?: string | moment$formatFunction,
        lastWeek?: string | moment$formatFunction,
        nextWeek?: string | moment$formatFunction,
        sameElse?: string | moment$formatFunction
}

declare interface moment$BaseMomentLanguage {
    months?: any,
        monthsShort?: any,
        weekdays?: any,
        weekdaysShort?: any,
        weekdaysMin?: any,
        relativeTime?: moment$MomentRelativeTime,
        meridiem?: (hour: number, minute: number, isLowercase: boolean) => string,
        calendar?: moment$MomentCalendar,
        ordinal?: (num: number) => string,
        week?: moment$MomentLanguageWeek
}

declare type moment$MomentLanguage = {
    longDateFormat?: moment$MomentLongDateFormat
} & moment$BaseMomentLanguage


declare interface moment$MomentLanguageWeek {
    dow?: number,
        doy?: number
}

declare interface moment$MomentLanguageData {

    /**
     * Get the full localized month name of a moment object
     * @param  a moment object
     * @return  full month name
     */
    months(aMoment: moment$Moment): string,

        /**
         * Get the short localized month name of a moment object
         * @param  a moment object
         * @return  short month name
         */
        monthsShort(aMoment: moment$Moment): string,

        /**
         * Parses a month name and returns the month id (0-11)
         * @param  string of month to parse
         * @return  month id (0 to 11) of input
         */
        monthsParse(longOrShortMonthString: string): number,

        /**
         * Gets the full weekday name of a moment object (eg. Monday)
         * @param  a moment object
         * @return  full weekday name
         */
        weekdays(aMoment: moment$Moment): string,

        /**
         * Gets the short weekday name of a moment object (eg. Mon)
         * @param  a moment object
         * @return  short weekday name
         */
        weekdaysShort(aMoment: moment$Moment): string,

        /**
         * Gets the min weekday name of a moment object (eg. Mo)
         * @param  a moment object
         * @return  min weekday name
         */
        weekdaysMin(aMoment: moment$Moment): string,

        /**
         * Parses a weekday name and returns the weekday id (0-6)
         * @param  string of weekday to parse
         * @return  weekday id (0 to 6) of input
         */
        weekdaysParse(longOrShortMonthString: string): number,

        /**
         * Returns the full format of abbreviated date-time formats
         * @param  date-time format such as LT, L, LL and so on
         * @return  full date format string
         */
        longDateFormat(dateFormat: string): string,

        /**
         * Returns whether a string represents PM
         * @param  date string to check
         * @return  true if string represents PM
         */
        isPM(amPmString: string): boolean,

        /**
         * Returns am/pm string for particular time-of-day in upper/lower case
         * @param  hour
         * @param  minute
         * @param  whether to return in lowercase
         * @return  'am' or 'pm'
         */
        meridiem(hour: number, minute: number, isLowercase: boolean): string,

        /**
         * Returns a format that would be used for calendar representation.
         * @param  one of 'sameDay', 'nextDay', 'lastDay', 'nextWeek', 'prevWeek', 'sameElse'
         * @param  a moment object
         * @return  date format string
         */
        calendar(key: string, aMoment: moment$Moment): string,

        /**
         * Returns relative time string (eg. a year ago)
         * @param  the relative number
         * @param  whether to drop the suffix
         * @param  one of 's', 'm', 'mm', 'h', 'hh', 'd', 'dd', 'M', 'MM', 'y', 'yy'. Single letter when number is 1.
         * @param  whether this represents a future date
         * @return  humanized representation of relative time
         */
        relativeTime(number: number, withoutSuffix: boolean, key: string, isFuture: boolean): string,

        /**
         * Converts relative time string to past or future string depending on difference
         * @param  positive or negative number
         * @param  relative time string
         * @return  humanized representation of relative time
         */
        pastFuture(diff: number, relTime: string): string,

        /**
         * Convert number to ordinal string 1 -> 1st
         * @param  the number
         * @return  ordinal string
         */
        ordinal(number: number): string,

        /**
         * Called before parsing every input string
         */
        preparse(str: string): string,

        /**
         * Called after formatting on every string
         */
        postformat(str: string): string,

        /**
         * Returns week-of-year of a moment object
         * @param  a moment object
         * @return  number of the week
         */
        week(aMoment: moment$Moment): number,

        /**
         * Returns a translation of 'Invalid date'
         * @return  translation of 'Invalid date'
         */
        invalidDate(): string,

        /**
         * Returns the first day of the week (0-6, Sunday to Saturday)
         * @return  first day of the week
         */
        firstDayOfWeek(): number,

        /**
         * This and the first day of week are used to determine which is
         * the first week of the year. dow == 1 and doy == 4 means week starts
        Monday and first week that has Thursday is the first week of the
        year (but doy is NOT simply Thursday).
         * @return  number between 0-15
        */
        firstDayOfYear(): number
}

declare interface moment$MomentLongDateFormat {
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

declare interface moment$MomentRelativeTime {
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

declare interface moment$MomentBuiltinFormat {
    ___momentBuiltinFormatBrand: any
}

declare type moment$MomentFormatSpecification = string | moment$MomentBuiltinFormat | (string | moment$MomentBuiltinFormat)[];

declare interface moment$MomentStatic {
    version: string,
        fn: moment$Moment,
        (): moment$Moment,
        (date: number): moment$Moment,
        (date: number[]): moment$Moment,
        (date: string, format?: moment$MomentFormatSpecification, strict?: boolean): moment$Moment,
        (date: string, format?: moment$MomentFormatSpecification, language?: string, strict?: boolean): moment$Moment,
        (date: Date): moment$Moment,
        (date: moment$Moment): moment$Moment,
        (date: Object): moment$Moment,
        utc(): moment$Moment,
        utc(date: number): moment$Moment,
        utc(date: number[]): moment$Moment,
        utc(date: string, format?: string, strict?: boolean): moment$Moment,
        utc(
            date: string,
            format?: string,
            language?: string,
            strict?: boolean): moment$Moment,
        utc(date: string, formats: string[], strict?: boolean): moment$Moment,
        utc(
            date: string,
            formats: string[],
            language?: string,
            strict?: boolean): moment$Moment,
        utc(date: Date): moment$Moment,
        utc(date: moment$Moment): moment$Moment,
        utc(date: Object): moment$Moment,
        unix(timestamp: number): moment$Moment,
        invalid(parsingFlags?: Object): moment$Moment,
        isMoment(): boolean,
        isMoment(m: any): Moment,
        isDate(m: any): Date,
        isDuration(): boolean,
        isDuration(d: any): Duration,

        /**
         * 
         * @deprecated  since version 2.8.0
         */
        lang(language?: string): string,
        lang(language?: string, definition?: moment$MomentLanguage): string,
        locale(language?: string): string,
        locale(language?: string[]): string,
        locale(language?: string, definition?: moment$MomentLanguage): string,
        localeData(language?: string): moment$MomentLanguageData,
        longDateFormat: any,
        relativeTime: any,
        meridiem: (hour: number, minute: number, isLowercase: boolean) => string,
        calendar: any,
        ordinal: (num: number) => string,
        duration(milliseconds: Number): moment$Duration,
        duration(num: Number, unitOfTime: string): moment$Duration,
        duration(input: moment$MomentInput): moment$Duration,
        duration(object: any): moment$Duration,
        duration(): moment$Duration,
        parseZone(date: string): moment$Moment,
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
        min(...moments: moment$Moment[]): moment$Moment,
        min(moments: moment$Moment[]): moment$Moment,
        max(...moments: moment$Moment[]): moment$Moment,
        max(moments: moment$Moment[]): moment$Moment,
        normalizeUnits(unit: string): string,
        relativeTimeThreshold(threshold: string): number | boolean,
        relativeTimeThreshold(threshold: string, limit: number): boolean,

        /**
         * 
         * @since  2.10.7+
         */
        now(): number,

        /**
         * Constant used to enable explicit ISO_8601 format parsing.
         */
        ISO_8601: moment$MomentBuiltinFormat,
        defaultFormat: string
}
declare module 'moment' {
    declare     var moment: moment$MomentStatic;
    declare module.exports: typeof moment
}
declare module 'moment/moment' {
    declare     var moment: moment$MomentStatic;
    declare module.exports: typeof moment
}
declare var moment: moment$MomentStatic;