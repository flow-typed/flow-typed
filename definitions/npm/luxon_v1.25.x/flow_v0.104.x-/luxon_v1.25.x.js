// @flow

declare module 'luxon' {
  declare export type UnitLength = 'narrow' | 'short' | 'long';
  declare export type WeekdayLength = UnitLength;
  declare export type EraLength = UnitLength;
  declare export type MonthLength =
    | 'numeric'
    | '2-digit'
    | 'narrow'
    | 'short'
    | 'long';
  declare export type NumericLength = 'numeric' | '2-digit';

  declare export type HourCycle = 'h11' | 'h12' | 'h23' | 'h24';

  declare export type IntlDateTimeFormatOptions = {|
    localeMatcher?: 'lookup' | 'best fit',
    timeZone?: string,
    hour12?: boolean,
    hourCycle?: HourCycle,
    formatMatcher?: 'basic' | 'best fit',
    weekday?: WeekdayLength,
    era?: EraLength,
    year?: NumericLength,
    month?: MonthLength,
    day?: NumericLength,
    hour?: NumericLength,
    minute?: NumericLength,
    second?: NumericLength,
    timeZoneName?: 'short' | 'long',
  |};

  declare export class Zone {
    static offsetName(
      ts: number,
      opts?: {|
        format?: 'long' | 'short',
        locale?: string,
      |}
    ): string;
    +isValid: boolean;
    +name: string;
    +type: string;
    +universal: boolean;
    equals(otherZone: Zone): boolean;
    offset(ts: number): number;
  }

  declare export class IANAZone extends Zone {
    constructor(ianaString: string): IANAZone;
    static create(name: string): IANAZone;
    static isValidSpecifier(s: string): boolean;
    static isValidZone(zone: string): boolean;
    static resetCache(): void;
  }

  declare export class FixedOffsetZone extends Zone {
    static utcInstance: FixedOffsetZone;
    static instance(offset: number): FixedOffsetZone;
    static parseSpecifier(s: string): FixedOffsetZone;
  }

  declare export class InvalidZone extends Zone {}

  declare export class LocalZone extends Zone {}

  declare export class Settings {
    static defaultLocale: string;
    static defaultNumberingSystem: ?string;
    static defaultOutputCalendar: ?string;
    static defaultZone: Zone;
    static defaultZoneName: string;
    static now: () => number;
    static throwOnInvalid: boolean;
    static resetCaches(): void;
  }

  declare type MonthWeekdayOptions = {|
    locale?: ?string,
    numberingSystem?: ?string,
    outputCalendar?: ?string,
  |};

  declare export class Info {
    static eras(
      length: EraLength,
      options?: {| locale?: ?string |}
    ): Array<string>;
    static features(): {|
      intl: boolean,
      intlTokens: boolean,
      timezones: boolean,
      relative: boolean,
    |};
    static hasDST(zone: string | Zone): boolean;
    static isValidIANAZone(zone: string): boolean;
    static meridiems(options?: {| locale?: ?string |}): Array<string>;
    static months(
      length: MonthLength,
      options?: MonthWeekdayOptions
    ): Array<string>;
    static monthsFormat(
      length: MonthLength,
      options?: MonthWeekdayOptions
    ): Array<string>;
    static weekdays(
      length: WeekdayLength,
      options?: MonthWeekdayOptions
    ): Array<string>;
    static weekdaysFormat(
      length: WeekdayLength,
      options?: MonthWeekdayOptions
    ): Array<string>;
  }

  declare export type ConversionAccuracy = 'longterm' | 'casual';

  declare export type DateTimeUnit =
    | 'year'
    | 'years'
    | 'quarter'
    | 'quarters'
    | 'month'
    | 'months'
    | 'day'
    | 'days'
    | 'hour'
    | 'hours'
    | 'minute'
    | 'minutes'
    | 'second'
    | 'seconds'
    | 'millisecond'
    | 'milliseconds'
    | 'weekNumber'
    | 'weekNumbers'
    | 'weekYear'
    | 'weekYears'
    | 'weekday'
    | 'weekdays'
    | 'week'
    | 'weeks'
    | 'ordinal';

  declare export type DurationUnit =
    | 'year'
    | 'years'
    | 'quarter'
    | 'quarters'
    | 'month'
    | 'months'
    | 'week'
    | 'weeks'
    | 'day'
    | 'days'
    | 'hour'
    | 'hours'
    | 'minute'
    | 'minutes'
    | 'second'
    | 'seconds'
    | 'millisecond'
    | 'milliseconds';

  declare export type ToRelativeUnit =
    | 'years'
    | 'quarters'
    | 'months'
    | 'weeks'
    | 'days'
    | 'hours'
    | 'minutes'
    | 'seconds';

  declare export type ToRelativeCalendarUnit =
    | 'years'
    | 'quarters'
    | 'months'
    | 'weeks'
    | 'days';

  declare export type ToSQLOptions = {|
    includeOffset?: boolean,
    includeZone?: boolean,
  |};

  declare export class Interval {
    static after(
      start: DateTime | DateTimeFromObjectOptions | Date,
      duration: Duration | number | DurationFromObjectOptions
    ): Interval;
    static before(
      end: DateTime | DateTimeFromObjectOptions | Date,
      duration: Duration | number | DurationFromObjectOptions
    ): Interval;
    static fromDateTimes(
      start: DateTime | DateTimeFromObjectOptions | Date,
      end: DateTime | DateTimeFromObjectOptions | Date
    ): Interval;
    static fromISO(string: string, options?: DateTimeFromOptions): Interval;
    static invalid(reason: string): Interval;
    static isInterval(o: any): boolean;
    static merge(intervals: Array<Interval>): Array<Interval>;
    static xor(intervals: Array<Interval>): Array<Interval>;
    end: DateTime;
    invalidExplanation: string | null;
    invalidReason: string | null;
    isValid: boolean;
    start: DateTime;
    abutsEnd(other: Interval): boolean;
    abutsStart(other: Interval): boolean;
    contains(dateTime: DateTime): boolean;
    count(unit?: DurationUnit): number;
    difference(...intervals: Array<Interval>): Interval;
    divideEqually(numberOfParts: number): Array<Interval>;
    engulfs(other: Interval): boolean;
    equals(other: Interval): boolean;
    hasSame(unit: DurationUnit): boolean;
    intersection(other: Interval): Interval;
    isAfter(dateTime: DateTime): boolean;
    isBefore(dateTime: DateTime): boolean;
    isEmpty(): boolean;
    length(unit: DurationUnit): number;
    overlaps(other: Interval): boolean;
    set(values: {| start?: DateTime, end?: DateTime |}): Interval;
    splitAt(...dateTimes: Array<DateTime>): Array<Interval>;
    splitBy(
      duration: number | Duration | DurationFromObjectOptions
    ): Array<Interval>;
    toDuration(
      unit: DurationUnit | Array<DurationUnit>,
      options?: {| conversionAccuracy?: ?ConversionAccuracy |}
    ): Duration;
    toFormat(dateFormat: string, options?: {| separator?: string |}): string;
    toISO(options?: ToISOTimeOptions): string;
    toString(): string;
    union(other: Interval): Interval;
    mapEndpoints(mapFn: (d: DateTime) => DateTime): Interval;
  }

  declare type DurationFromOptions = {|
    locale?: ?string,
    numberingSystem?: ?string,
    conversionAccuracy?: ?ConversionAccuracy,
  |};

  declare type DurationFromObjectOptions = {|
    year?: number,
    years?: number,
    quarter?: number,
    quarters?: number,
    month?: number,
    months?: number,
    week?: number,
    weeks?: number,
    day?: number,
    days?: number,
    hour?: number,
    hours?: number,
    minute?: number,
    minutes?: number,
    second?: number,
    seconds?: number,
    millsecond?: number,
    milliseconds?: number,
    locale?: ?string,
    numberingSystem?: ?string,
    conversionAccuracy?: ?ConversionAccuracy,
  |};

  declare export type DurationObject = {
    years?: number,
    months?: number,
    days?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    milliseconds?: number,
    ...
  };

  declare export type DurationConfig = {
    locale: string,
    numberingSystem: ?string,
    conversionAccuracy: ConversionAccuracy,
    ...
  };

  declare export class Duration {
    static fromISO(text: string, options?: DurationFromOptions): Duration;
    static fromObject(obj: DurationFromObjectOptions): Duration;
    static fromMillis(count: number, options?: DurationFromOptions): Duration;
    static invalid(reason: string): Duration;
    static isDuration(o: any): boolean;
    days: number;
    hours: number;
    invalidReason: string | null;
    invalidExplanation: string | null;
    isValid: boolean;
    locale: string;
    milliseconds: number;
    minutes: number;
    months: number;
    numberingSystem: string;
    quarters: number;
    seconds: number;
    weeks: number;
    years: number;
    as(unit: DurationUnit): number;
    equals(other: Duration): boolean;
    get(unit: DurationUnit): number;
    minus(duration: Duration | number | DurationFromObjectOptions): Duration;
    negate(): Duration;
    normalize(): Duration;
    plus(duration: Duration | number | DurationFromObjectOptions): Duration;
    reconfigure(options: DurationFromOptions): Duration;
    set(values: DurationFromObjectOptions): Duration;
    shiftTo(first: DurationUnit, ...rest: Array<DurationUnit>): Duration;
    toFormat(fmt: string, options?: {| floor?: boolean |}): string;
    toISO(): string;
    toJSON(): string;
    toObject(options: {| includeConfig: true |}): DurationObject &
      DurationConfig;
    toObject(options?: {| includeConfig?: boolean |}): DurationObject;
    toString(): string;
    valueOf(): number;
  }

  declare type DateTimeFromOptions = {|
    zone?: ?(string | Zone),
    setZone?: ?boolean,
    locale?: ?string,
    outputCalendar?: ?string,
    numberingSystem?: ?string,
  |};

  declare type DateTimeJSOptions = {|
    zone?: string | Zone,
  |};

  declare type ToISOFormat = 'basic' | 'extended';

  declare type ToISODateOptions = {|
    format?: ToISOFormat,
  |};

  declare type ToISOTimeOptions = {|
    suppressMilliseconds?: ?boolean,
    suppressSeconds?: ?boolean,
    includeOffset?: ?boolean,
    format?: ToISOFormat,
  |};

  declare type SetZoneOptions = {|
    keepCalendarTime?: ?boolean, // Support deprecated name for keepLocalTime
    keepLocalTime?: ?boolean,
  |};

  declare type DateTimeFromObjectOptions = {|
    year?: number,
    years?: number,
    month?: number,
    months?: number,
    day?: number,
    days?: number,
    hour?: number,
    hours?: number,
    minute?: number,
    minutes?: number,
    second?: number,
    seconds?: number,
    millisecond?: number,
    milliseconds?: number,
    weekNumber?: number,
    weekNumbers?: number,
    weekYear?: number,
    weekYears?: number,
    weekday?: number,
    weekdays?: number,
    week?: number,
    weeks?: number,
    zone?: ?(string | Zone),
    setZone?: ?boolean,
    locale?: ?string,
    outputCalendar?: ?string,
    numberingSystem?: ?string,
  |};

  declare type DateTimeDiffOptions = {|
    conversionAccuracy?: ?ConversionAccuracy,
  |};

  declare export type DateTimeObject = {
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number,
    ...
  };

  declare export type DateTimeConfig = {
    locale: string,
    outputCalendar: ?string,
    numberingSystem: ?string,
    ...
  };

  declare export type ResolvedLocaleOptions = {
    locale: string,
    outputCalendar: string,
    numberingSystem: string,
    ...
  };

  declare export type ToRelativeOptions = {|
    base?: DateTime,
    locale?: string,
    style?: UnitLength,
    unit?: ToRelativeUnit,
    round?: boolean,
    padding?: number,
    numberingSystem?: ?string,
  |};

  declare export type ToRelativeCalendarOptions = {|
    base?: DateTime,
    locale?: string,
    unit?: ToRelativeCalendarUnit,
    numberingSystem?: ?string,
  |};

  declare export type ExplainedFormat = {|
    input: string,
    tokens: Array<{
      literal: boolean,
      val: string,
      ...
    }>,
    regex: RegExp,
    rawMatches: ?Array<string>,
    matches: Object,
    result: { [unit: DateTimeUnit]: number, ... },
    zone: ?Zone,
  |};

  declare export class DateTime {
    static DATETIME_FULL: IntlDateTimeFormatOptions;
    static DATETIME_FULL_WITH_SECONDS: IntlDateTimeFormatOptions;
    static DATETIME_HUGE: IntlDateTimeFormatOptions;
    static DATETIME_HUGE_WITH_SECONDS: IntlDateTimeFormatOptions;
    static DATETIME_MED: IntlDateTimeFormatOptions;
    static DATETIME_MED_WITH_SECONDS: IntlDateTimeFormatOptions;
    static DATETIME_SHORT: IntlDateTimeFormatOptions;
    static DATETIME_SHORT_WITH_SECONDS: IntlDateTimeFormatOptions;
    static DATE_FULL: IntlDateTimeFormatOptions;
    static DATE_HUGE: IntlDateTimeFormatOptions;
    static DATE_MED: IntlDateTimeFormatOptions;
    static DATE_MED_WITH_WEEKDAY: IntlDateTimeFormatOptions;
    static DATE_SHORT: IntlDateTimeFormatOptions;
    static TIME_24_SIMPLE: IntlDateTimeFormatOptions;
    static TIME_24_WITH_LONG_OFFSET: IntlDateTimeFormatOptions;
    static TIME_24_WITH_SECONDS: IntlDateTimeFormatOptions;
    static TIME_24_WITH_SHORT_OFFSET: IntlDateTimeFormatOptions;
    static TIME_SIMPLE: IntlDateTimeFormatOptions;
    static TIME_WITH_LONG_OFFSET: IntlDateTimeFormatOptions;
    static TIME_WITH_SECONDS: IntlDateTimeFormatOptions;
    static TIME_WITH_SHORT_OFFSET: IntlDateTimeFormatOptions;
    static local(
      year?: number,
      month?: number,
      day?: number,
      hour?: number,
      minute?: number,
      second?: number,
      millisecond?: number
    ): DateTime;
    static utc(
      year?: number,
      month?: number,
      day?: number,
      hour?: number,
      minute?: number,
      second?: number,
      millisecond?: number
    ): DateTime;
    static fromHTTP(text: string, options?: DateTimeFromOptions): DateTime;
    static fromObject(obj: DateTimeFromObjectOptions): DateTime;
    static fromISO(text: string, options?: DateTimeFromOptions): DateTime;
    static fromJSDate(date: Date, options?: DateTimeJSOptions): DateTime;
    static fromMillis(
      millseconds: number,
      options?: DateTimeFromOptions
    ): DateTime;
    static fromSeconds(
      seconds: number,
      options?: DateTimeFromOptions
    ): DateTime;
    static fromRFC2822(text: string, options?: DateTimeFromOptions): DateTime;
    static fromSQL(text: string, options?: DateTimeFromOptions): DateTime;
    static fromFormat(
      text: string,
      fmt: string,
      options?: DateTimeFromOptions
    ): DateTime;
    static fromFormatExplain(
      text: string,
      fmt: string,
      options?: DateTimeFromOptions
    ): ExplainedFormat;
    static invalid(reason: string, explanation?: string): DateTime;
    static isDateTime(o: any): boolean;
    static max(first: DateTime, ...rest: Array<DateTime>): DateTime;
    static min(first: DateTime, ...rest: Array<DateTime>): DateTime;
    day: number;
    daysInMonth: number;
    daysInYear: number;
    hour: number;
    invalidReason: string | null;
    invalidExplanation: string | null;
    isInDST: boolean;
    isInLeapYear: boolean;
    isOffsetFixed: boolean;
    isValid: boolean;
    locale: string;
    millisecond: number;
    minute: number;
    month: number;
    monthLong: string;
    monthShort: string;
    numberingSystem: string;
    offset: number;
    offsetNameLong: string;
    offsetNameShort: string;
    ordinal: number;
    outputCalendar: string;
    quarter: number;
    second: number;
    weekNumber: number;
    weekYear: number;
    weekday: number;
    weekdayLong: string;
    weekdayShort: string;
    weeksInWeekYear: number;
    year: number;
    zoneName: string;
    diff(
      otherDateTime: DateTime,
      unit?: DateTimeUnit | Array<DateTimeUnit>,
      options?: DateTimeDiffOptions
    ): Duration;
    diffNow(
      unit?: DateTimeUnit | Array<DateTimeUnit>,
      options?: DateTimeDiffOptions
    ): Duration;
    endOf(unit: DateTimeUnit): DateTime;
    equals(other: DateTime): boolean;
    get(unit: DateTimeUnit): number;
    hasSame(other: DateTime, unit: DateTimeUnit): boolean;
    minus(duration: Duration | number | DurationFromObjectOptions): DateTime;
    plus(duration: Duration | number | DurationFromObjectOptions): DateTime;
    reconfigure(options: DateTimeFromOptions): DateTime;
    resolvedLocaleOpts(
      options?: IntlDateTimeFormatOptions
    ): ResolvedLocaleOptions;
    set(values: { [unit: DateTimeUnit]: number, ... }): DateTime;
    setLocale(locale: string): DateTime;
    setZone(zone: string | Zone, options?: SetZoneOptions): DateTime;
    startOf(unit: DateTimeUnit): DateTime;
    toBSON(): Date;
    toFormat(fmt: string, options?: {| round?: ?boolean |}): string;
    toHTTP(): string;
    toISO(options?: ToISOTimeOptions): string;
    toISODate(options?: ToISODateOptions): string;
    toISOTime(options?: ToISOTimeOptions): string;
    toISOWeekDate(): string;
    toJSDate(): Date;
    toLocal(): DateTime;
    toLocaleParts(
      options?: IntlDateTimeFormatOptions
    ): Array<{
      type: string,
      value: number,
      ...
    }>;
    toLocaleString(options?: IntlDateTimeFormatOptions): string;
    toRelative(options?: ToRelativeOptions): string;
    toRelativeCalendar(options?: ToRelativeCalendarOptions): string;
    toMillis(): number;
    toObject(options: {| includeConfig: true |}): DateTimeObject &
      DateTimeConfig;
    toObject(options?: {| includeConfig?: ?boolean |}): DateTimeObject;
    toRFC2822(): string;
    toSQL(opts?: ToSQLOptions): string;
    toSQLDate(): string;
    toSQLTime(opts?: ToSQLOptions): string;
    toString(): string;
    toSeconds(): number;
    toUTC(offset?: number, options?: SetZoneOptions): DateTime;
    until(other: DateTime): Interval;
    valueOf(): number;
  }
}
