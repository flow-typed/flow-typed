declare module 'moment' {
  declare type MomentOptions = {
    y?: number|string,
    year?: number|string,
    years?: number|string,
    M?: number|string,
    month?: number|string,
    months?: number|string,
    d?: number|string,
    day?: number|string,
    days?: number|string,
    date?: number|string,
    h?: number|string,
    hour?: number|string,
    hours?: number|string,
    m?: number|string,
    minute?: number|string,
    minutes?: number|string,
    s?: number|string,
    second?: number|string,
    seconds?: number|string,
    ms?: number|string,
    millisecond?: number|string,
    milliseconds?: number|string,
  };

  declare type MomentObject = {
    years: number,
    months: number,
    date: number,
    hours: number,
    minutes: number,
    seconds: number,
    milliseconds: number,
  };

  declare type MomentCreationData = {
    input: string,
    format: string,
    locale: Object,
    isUTC: bool,
    strict: bool,
  };

  declare type CalendarFormats = {
    sameDay?: string,
    nextDay?: string,
    nextWeek?: string,
    lastDay?: string,
    lastWeek?: string,
    sameElse?: string,
  };
  declare class LocaleData {
    months(moment: Moment): string;
    monthsShort(moment: Moment): string;
    monthsParse(month: string): number;
    weekdays(moment: Moment): string;
    weekdaysShort(moment: Moment): string;
    weekdaysMin(moment: Moment): string;
    weekdaysParse(weekDay: string): number;
    longDateFormat(dateFormat: string): string;
    isPM(date: string): bool;
    meridiem(hours: number, minutes: number, isLower: bool): string;
    calendar(key: 'sameDay'|'nextDay'|'lastDay'|'nextWeek'|'prevWeek'|'sameElse', moment: Moment): string;
    relativeTime(number: number, withoutSuffix: bool, key: 's'|'m'|'mm'|'h'|'hh'|'d'|'dd'|'M'|'MM'|'y'|'yy', isFuture: bool): string;
    pastFuture(diff: any, relTime: string): string;
    ordinal(number: number): string;
    preparse(str: string): any;
    postformat(str: string): any;
    week(moment: Moment): string;
    invalidDate(): string;
    firstDayOfWeek(): number;
    firstDayOfYear(): number;
  }
  declare class MomentDuration {
    humanize(suffix?: bool): string;
    milliseconds(): number;
    asMilliseconds(): number;
    seconds(): number;
    asSeconds(): number;
    minutes(): number;
    asMinutes(): number;
    hours(): number;
    asHours(): number;
    days(): number;
    asDays(): number;
    months(): number;
    asMonths(): number;
    years(): number;
    asYears(): number;
    add(value: number|MomentDuration|Object, unit?: string): this;
    subtract(value: number|MomentDuration|Object, unit?: string): this;
    as(unit: string): number;
    get(unit: string): number;
    toJSON(): string;
  }
  declare class Moment {
    static ISO_8601: string;
    static (string?: string, format?: string|Array<string>, locale?: string, strict?: bool): Moment;
    static (initDate: ?Object|number|Date|Array<number>|Moment|string): Moment;
    static unix(seconds: number): Moment;
    static utc(): Moment;
    static utc(number: number|Array<number>): Moment;
    static utc(str: string, str2?: string|Array<string>, str3?: string): Moment;
    static utc(moment: Moment): Moment;
    static utc(date: Date): Moment;
    static parseZone(rawDate: string): Moment;
    isValid(): bool;
    invalidAt(): 0|1|2|3|4|5|6;
    creationData(): MomentCreationData;
    millisecond(): number;
    milliseconds(): number;
    millisecond(number: number): this;
    milliseconds(number: number): this;
    second(): number;
    seconds(): number;
    second(number: number): this;
    seconds(number: number): this;
    minute(): number;
    minutes(): number;
    minute(number: number): this;
    minutes(number: number): this;
    hour(): number;
    hours(): number;
    hour(number: number): this;
    hours(number: number): this;
    date(): number;
    dates(): number;
    date(number: number): this;
    dates(number: number): this;
    day(): number;
    days(): number;
    day(day: number|string): this;
    days(day: number|string): this;
    weekday(): number;
    weekday(number: number): this;
    isoWeekday(): number;
    isoWeekday(number: number): this;
    dayOfYear(): number;
    dayOfYear(number: number): this;
    week(): number;
    weeks(): number;
    week(number: number): this;
    weeks(number: number): this;
    isoWeek(): number;
    isoWeeks(): number;
    isoWeek(number: number): this;
    isoWeeks(number: number): this;
    month(): number;
    months(): number;
    month(number: number): this;
    months(number: number): this;
    quarter(): number;
    quarter(number: number): this;
    year(): number;
    years(): number;
    year(number: number): this;
    years(number: number): this;
    weekYear(): number;
    weekYear(number: number): this;
    isoWeekYear(): number;
    isoWeekYear(number: number): this;
    weeksInYear(): number;
    isoWeeksInYear(): number;
    get(string: string): number;
    set(unit: string, value: number): this;
    set(options: { unit: string, value: number }): this;
    static max(...dates: Array<Moment>): Moment;
    static min(...dates: Array<Moment>): Moment;
    add(value: number|MomentDuration|Moment|Object, unit?: string): this;
    subtract(value: number|MomentDuration|Moment|string, unit?: string): this;
    startOf(unit: string): this;
    endOf(unit: string): this;
    local(): void;
    utc(): void;
    utcOffset(offset?: number|string): void;
    format(format?: string): string;
    fromNow(removeSuffix?: bool): string;
    from(value: Moment|string|number|Date|Array<number>, removePrefix?: bool): string;
    toNow(removePrefix?: bool): string;
    to(value: Moment|string|number|Date|Array<number>, removePrefix?: bool): string;
    calendar(refTime?: any, formats?: CalendarFormats): void;
    diff(date: Moment|string|number|Date|Array<number>, format?: string, floating?: bool): number;
    valueOf(): number;
    unix(): number;
    daysInMonth(): number;
    toDate(): Date;
    toArray(): Array<number>;
    toJSON(): string;
    toISOString(): string;
    toObject(): MomentObject;
    isBefore(date: Moment|string|number|Date|Array<number>): bool;
    isSame(date: Moment|string|number|Date|Array<number>): bool;
    isAfter(date: Moment|string|number|Date|Array<number>): bool;
    isSameOrBefore(date: Moment|string|number|Date|Array<number>): bool;
    isSameOrAfter(date: Moment|string|number|Date|Array<number>): bool;
    isBetween(date: Moment|string|number|Date|Array<number>): bool;
    isDST(): bool;
    isDSTShifted(): bool;
    isLeapYear(): bool;
    clone(): Moment;
    static isMoment(obj: any): bool;
    static isDatE(obj: any): bool;
    static locale(locale: string, localeData?: Object): void;
    static locale(locales: Array<string>): void;
    locale(locale: string, customization?: Object|null): void;
    locale(): string;
    static months(): Array<string>;
    static monthShort(): Array<string>;
    static weekdays(): Array<string>;
    static weekdaysShort(): Array<string>;
    static weekdaysMin(): Array<string>;
    static months(): string;
    static monthShort(): string;
    static weekdays(): string;
    static weekdaysShort(): string;
    static weekdaysMin(): string;
    static localeData(key?: string): LocaleData;
    static duration(value: number|Object|string, unit?: string): MomentDuration;
    static isDuration(obj: any): bool;
    static normalizeUnits(unit: string): string;
    static invalid(object: any): Moment;
  }
  declare var exports: Class<Moment>;
}
