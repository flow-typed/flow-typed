
declare module 'moment' {
  declare type RelativeTimeKey = 's' | 'm' | 'mm' | 'h' | 'hh' | 'd' | 'dd' | 'M' | 'MM' | 'y' | 'yy';
  declare type CalendarKey = 'sameDay' | 'nextDay' | 'lastDay' | 'nextWeek' | 'lastWeek' | 'sameElse' | string;
  declare type LongDateFormatKey = 'LTS' | 'LT' | 'L' | 'LL' | 'LLL' | 'LLLL' | 'lts' | 'lt' | 'l' | 'll' | 'lll' | 'llll';
  declare interface Locale {
    calendar(key?: CalendarKey, m?: Moment, now?: Moment): string,
    longDateFormat(key: LongDateFormatKey): string,
    invalidDate(): string,
    ordinal(n: number): string,
    preparse(inp: string): string,
    postformat(inp: string): string,
    relativeTime(
      n: number,
      withoutSuffix: boolean,
      key: RelativeTimeKey,
      isFuture: boolean): string,
    pastFuture(diff: number, absRelTime: string): string,
    set(config: Object): void,
    months(): string[],
    months(m: Moment, format?: string): string,
    monthsShort(): string[],
    monthsShort(m: Moment, format?: string): string,
    monthsParse(monthName: string, format: string, strict: boolean): number,
    monthsRegex(strict: boolean): RegExp,
    monthsShortRegex(strict: boolean): RegExp,
    week(m: Moment): number,
    firstDayOfYear(): number,
    firstDayOfWeek(): number,
    weekdays(): string[],
    weekdays(m: Moment, format?: string): string,
    weekdaysMin(): string[],
    weekdaysMin(m: Moment): string,
    weekdaysShort(): string[],
    weekdaysShort(m: Moment): string,
    weekdaysParse(weekdayName: string, format: string, strict: boolean): number,
    weekdaysRegex(strict: boolean): RegExp,
    weekdaysShortRegex(strict: boolean): RegExp,
    weekdaysMinRegex(strict: boolean): RegExp,
    isPM(input: string): boolean,
    meridiem(hour: number, minute: number, isLower: boolean): string
  }

  declare interface StandaloneFormatSpec {
    format: string[],
    standalone: string[],
    isFormat?: RegExp
  }

  declare interface WeekSpec {
    dow: number,
    doy: number
  }

  declare type CalendarSpecVal = string | ((m?: MomentInput, now?: Moment) => string);

  declare interface CalendarSpec {
    sameDay?: CalendarSpecVal,
    nextDay?: CalendarSpecVal,
    lastDay?: CalendarSpecVal,
    nextWeek?: CalendarSpecVal,
    lastWeek?: CalendarSpecVal,
    sameElse?: CalendarSpecVal, [x: string]: CalendarSpecVal | void
  }

  declare type RelativeTimeSpecVal = (string | ((
    n: number,
    withoutSuffix: boolean,
    key: RelativeTimeKey,
    isFuture: boolean) => string)
    );

  declare type RelativeTimeFuturePastVal = string | ((relTime: string) => string);

  declare interface RelativeTimeSpec {
    future: RelativeTimeFuturePastVal,
    past: RelativeTimeFuturePastVal,
    s: RelativeTimeSpecVal,
    m: RelativeTimeSpecVal,
    mm: RelativeTimeSpecVal,
    h: RelativeTimeSpecVal,
    hh: RelativeTimeSpecVal,
    d: RelativeTimeSpecVal,
    dd: RelativeTimeSpecVal,
    M: RelativeTimeSpecVal,
    MM: RelativeTimeSpecVal,
    y: RelativeTimeSpecVal,
    yy: RelativeTimeSpecVal
  }

  declare interface LongDateFormatSpec {
    LTS: string,
    LT: string,
    L: string,
    LL: string,
    LLL: string,
    LLLL: string,
    lts?: string,
    lt?: string,
    l?: string,
    ll?: string,
    lll?: string,
    llll?: string
  }

  declare type MonthWeekdayFn = (momentToFormat: Moment, format?: string) => string;

  declare type WeekdaySimpleFn = (momentToFormat: Moment) => string;

  declare interface LocaleSpecification {
    months?: string[] | StandaloneFormatSpec | MonthWeekdayFn,
    monthsShort?: string[] | StandaloneFormatSpec | MonthWeekdayFn,
    weekdays?: string[] | StandaloneFormatSpec | MonthWeekdayFn,
    weekdaysShort?: string[] | StandaloneFormatSpec | WeekdaySimpleFn,
    weekdaysMin?: string[] | StandaloneFormatSpec | WeekdaySimpleFn,
    meridiemParse?: RegExp,
    meridiem?: (hour: number, minute: number, isLower: boolean) => string,
    isPM?: (input: string) => boolean,
    longDateFormat?: LongDateFormatSpec,
    calendar?: CalendarSpec,
    relativeTime?: RelativeTimeSpec,
    invalidDate?: string,
    ordinal?: (n: number) => string,
    ordinalParse?: RegExp,
    week?: WeekSpec, [x: string]: any
  }

  declare interface MomentObjectOutput {
    years: number,
    months: number,
    date: number,
    hours: number,
    minutes: number,
    seconds: number,
    milliseconds: number
  }

  declare interface Duration {
    humanize(withSuffix?: boolean): string,
    abs(): Duration,
    as(units: unitOfTimeBase): number,
    get(units: unitOfTimeBase): number,
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
    add(inp?: DurationInputArg1, unit?: unitOfTimeDurationConstructor): Duration,
    subtract(inp?: DurationInputArg1, unit?: unitOfTimeDurationConstructor): Duration,
    locale(): string,
    locale(locale: LocaleSpecifier): Duration,
    localeData(): Locale,
    toISOString(): string,
    toJSON(): string
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

  declare interface MomentParsingFlags {
    empty: boolean,
    unusedTokens: string[],
    unusedInput: string[],
    overflow: number,
    charsLeftOver: number,
    nullInput: boolean,
    invalidMonth: string | void,
    invalidFormat: boolean,
    userInvalidated: boolean,
    iso: boolean,
    parsedDateParts: any[],
    meridiem: string | void
  }

  declare interface MomentParsingFlagsOpt {
    empty?: boolean,
    unusedTokens?: string[],
    unusedInput?: string[],
    overflow?: number,
    charsLeftOver?: number,
    nullInput?: boolean,
    invalidMonth?: string,
    invalidFormat?: boolean,
    userInvalidated?: boolean,
    iso?: boolean,
    parsedDateParts?: any[],
    meridiem?: string
  }

  declare interface MomentBuiltinFormat {
    ___momentBuiltinFormatBrand: any
  }

  declare type MomentFormatSpecification = string | MomentBuiltinFormat | (string | MomentBuiltinFormat)[];

  // nested namespace/module unitOfTime
  declare export type unitOfTimeBase = (
    "year" | "years" | "y" |
    "month" | "months" | "M" |
    "week" | "weeks" | "w" |
    "day" | "days" | "d" |
    "hour" | "hours" | "h" |
    "minute" | "minutes" | "m" |
    "second" | "seconds" | "s" |
    "millisecond" | "milliseconds" | "ms"
    );

  declare export type unitOfTimeQuarter = "quarter" | "quarters" | "Q";

  declare type unitOfTimeIsoWeek = "isoWeek" | "isoWeeks" | "W";

  declare type unitOfTimeDate = "date" | "dates" | "D";

  declare type unitOfTimeDurationConstructor = unitOfTimeBase | unitOfTimeQuarter;

  declare type unitOfTimeStartOf = unitOfTimeBase | unitOfTimeQuarter | unitOfTimeIsoWeek | unitOfTimeDate;

  //declare type unitOfTime$MomentConstructor = unitOfTimeBase | unitOfTimeDate;

  declare type unitOfTimeAll = unitOfTimeBase |
    unitOfTimeQuarter |
    unitOfTimeIsoWeek |
    unitOfTimeDate |
    "weekYear" | "weekYears" | "gg" |
    "isoWeekYear" | "isoWeekYears" | "GG" |
    "dayOfYear" | "dayOfYears" | "DDD" |
    "weekday" | "weekdays" | "e" |
    "isoWeekday" | "isoWeekdays" | "E";

  declare interface MomentInputObject {
    years?: number,
    year?: number,
    y?: number,
    months?: number,
    month?: number,
    M?: number,
    days?: number,
    day?: number,
    d?: number,
    dates?: number,
    date?: number,
    D?: number,
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

  declare type DurationInputObject = {
    quarters?: number,
    quarter?: number,
    Q?: number,
    weeks?: number,
    week?: number,
    w?: number
  } & MomentInputObject


  declare type MomentSetObject = {
    weekYears?: number,
    weekYear?: number,
    gg?: number,
    isoWeekYears?: number,
    isoWeekYear?: number,
    GG?: number,
    quarters?: number,
    quarter?: number,
    Q?: number,
    weeks?: number,
    week?: number,
    w?: number,
    isoWeeks?: number,
    isoWeek?: number,
    W?: number,
    dayOfYears?: number,
    dayOfYear?: number,
    DDD?: number,
    weekdays?: number,
    weekday?: number,
    e?: number,
    isoWeekdays?: number,
    isoWeekday?: number,
    E?: number
  } & MomentInputObject


  declare interface FromTo {
    from: MomentInput,
    to: MomentInput
  }

  declare type MomentInput = ?(Moment |
    Date |
    string |
    number |
    (number | string)[] |
  MomentInputObject);

  declare type DurationInputArg1 = ?(Duration |
    number |
    string |
    FromTo |
    DurationInputObject);

  declare type LocaleSpecifier = string |
    Moment |
    Duration |
    string[] |
    boolean;

  declare interface MomentCreationData {
    input: MomentInput,
    format?: MomentFormatSpecification,
    locale: Locale,
    isUTC: boolean,
    strict?: boolean
  }

  declare export type Moment = {
    format(format?: string): string,
    startOf(unitOfTime: unitOfTimeStartOf): Moment,
    endOf(unitOfTime: unitOfTimeStartOf): Moment,
    add(amount?: DurationInputArg1, unit?: unitOfTimeDurationConstructor): Moment,
    subtract(amount?: DurationInputArg1, unit?: unitOfTimeDurationConstructor): Moment,
    calendar(time?: MomentInput, formats?: CalendarSpec): string,
    clone(): Moment,

    /**
     *
     * @return  Unix timestamp in milliseconds
     */
    valueOf(): number,
    local(keepLocalTime?: boolean): Moment,
    isLocal(): boolean,
    utc(keepLocalTime?: boolean): Moment,
    isUTC(): boolean,
    parseZone(): Moment,
    isValid(): boolean,
    invalidAt(): number,
    hasAlignedHourOffset(other?: MomentInput): boolean,
    creationData(): MomentCreationData,
    parsingFlags(): MomentParsingFlags,
    year(y: number): Moment,
    year(): number,
    quarter(): number,
    quarter(q: number): Moment,
    quarters(): number,
    quarters(q: number): Moment,
    month(M: number | string): Moment,
    month(): number,
    day(d: number | string): Moment,
    day(): number,
    days(d: number | string): Moment,
    days(): number,
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
    isoWeekday(d: number | string): Moment,
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
    from(inp: MomentInput, suffix?: boolean): string,
    to(inp: MomentInput, suffix?: boolean): string,
    fromNow(withoutSuffix?: boolean): string,
    toNow(withoutPrefix?: boolean): string,
    diff(b: MomentInput, unitOfTime?: unitOfTimeBase | unitOfTimeQuarter, precise?: boolean): number,
    toArray(): number[],
    toDate(): Date,
    toISOString(): string,
    inspect(): string,
    toJSON(): string,
    unix(): number,
    isLeapYear(): boolean,
    zone(b: number | string): Moment,
    utcOffset(): number,
    utcOffset(b: number | string, keepLocalTime?: boolean): Moment,
    isUtcOffset(): boolean,
    daysInMonth(): number,
    isDST(): boolean,
    zoneAbbr(): string,
    zoneName(): string,
    isBefore(inp?: MomentInput, granularity?: unitOfTimeStartOf): boolean,
    isAfter(inp?: MomentInput, granularity?: unitOfTimeStartOf): boolean,
    isSame(inp?: MomentInput, granularity?: unitOfTimeStartOf): boolean,
    isSameOrAfter(inp?: MomentInput, granularity?: unitOfTimeStartOf): boolean,
    isSameOrBefore(inp?: MomentInput, granularity?: unitOfTimeStartOf): boolean,
    isBetween(
      a: MomentInput,
      b: MomentInput,
      granularity?: unitOfTimeStartOf,
      inclusivity?: "()" | "[)" | "(]" | "[]"
    ): boolean,
    locale(): string,
    locale(locale: LocaleSpecifier): Moment,
    localeData(): Locale,
    get(unit: unitOfTimeAll): number,
    set(unit: unitOfTimeAll, value: number): Moment,
    set(objectLiteral: MomentSetObject): Moment,
    toObject(): MomentObjectOutput
  };


  declare export var version: string;
  declare export var fn: Moment;

  declare export function utc(
    inp?: MomentInput,
    format?: MomentFormatSpecification,
    strict?: boolean): Moment

  declare export function unix(timestamp: number): Moment
  declare export function invalid(flags?: MomentParsingFlagsOpt): Moment
  declare export function isMoment(m: any): Moment
  declare export function isDate(m: any): Date
  declare export function isDuration(d: any): Duration
  declare export function locale(language?: string): string
  declare export function localeData(key?: string | string[]): Locale
  declare export function duration(
    inp?: DurationInputArg1,
    unit?: unitOfTimeDurationConstructor): Duration
  declare export function parseZone(
    inp?: MomentInput,
    format?: MomentFormatSpecification,
    strict?: boolean): Moment
  declare export function months(): string[]
  declare export function monthsShort(): string[]
  declare export function weekdays(): string[]
  declare export function weekdaysShort(): string[]
  declare export function weekdaysMin(): string[]
  declare export function min(...moments: MomentInput[]): Moment
  declare export function max(...moments: MomentInput[]): Moment


  /**
   * Returns unix time in milliseconds. Overwrite for profit.
   */
  declare export function now(): number
  declare export function defineLocale(language: string, localeSpec: LocaleSpecification | void): Locale
  declare export function updateLocale(language: string, localeSpec: LocaleSpecification | void): Locale
  declare export function locales(): string[]
  declare export function normalizeUnits(unit: unitOfTimeAll): string
  declare export function relativeTimeThreshold(threshold: string): number | boolean
  declare export function relativeTimeRounding(fn: (num: number) => number): boolean
  declare export function calendarFormat(m: Moment, now: Moment): string
  declare export var ISO_8601: MomentBuiltinFormat;
  declare export var defaultFormat: string;
  declare export var defaultFormatUtc: string;
}
