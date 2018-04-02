// @flow

import { DateTime, Duration, Interval, Settings, Info, Zone } from "luxon";

class CustomZone extends Zone {
  static offsetName(
    ts: number,
    opts?: {
      format?: ?string,
      localeCode?: ?string
    }
  ): string {
    return "date";
  }
  equals(otherZone: Zone): boolean {
    return this === otherZone;
  }
  offset(ts: number): number {
    return 0;
  }
}

(Settings.defaultLocale: string);
(Settings.defaultNumberingSystem: ?string);
(Settings.defaultOutputCalendar: ?string);
(Settings.defaultZone: Zone);
(Settings.defaultZoneName: string);
(Settings.now(): number);
(Settings.throwOnInvalid: boolean);
Settings.resetCaches();
Settings.defaultZone = new CustomZone();

(Info.eras("long"): Array<string>);
(Info.eras("long", { locale: "de-DE" }): Array<string>);
// $ExpectError
(Info.eras("long", { foo: "bar" }): Array<string>);

(Info.features().intl: boolean);
(Info.features().intlTokens: boolean);
(Info.features().timezones: boolean);

(Info.hasDST("America/Chicago"): boolean);
(Info.hasDST(new CustomZone()): boolean);

(Info.meridiems(): Array<string>);
(Info.meridiems({ locale: "de-DE" }): Array<string>);

(Info.months("long"): Array<string>);
(Info.months("narrow", { locale: "de-DE" }): Array<string>);
(Info.months("short", { numberingSystem: "arab" }): Array<string>);
(Info.months("2-digit", {
  numberingSystem: "latn",
  outputCalendar: "buddhist"
}): Array<string>);
// $ExpectError
(Info.months("long", { foo: "bar" }): Array<string>);

(Info.monthsFormat("long"): Array<string>);
(Info.monthsFormat("narrow", { locale: "de-DE" }): Array<string>);
(Info.monthsFormat("short", { numberingSystem: "arab" }): Array<string>);
(Info.monthsFormat("2-digit", {
  numberingSystem: "latn",
  outputCalendar: "buddhist"
}): Array<string>);
// $ExpectError
(Info.monthsFormat("long", { foo: "bar" }): Array<string>);

(Info.weekdays("long"): Array<string>);
(Info.weekdays("narrow", { locale: "de-DE" }): Array<string>);
(Info.weekdays("short", { numberingSystem: "arab" }): Array<string>);
(Info.weekdays("long", {
  numberingSystem: "latn",
  outputCalendar: "buddhist"
}): Array<string>);
// $ExpectError
(Info.weekdays("long", { foo: "bar" }): Array<string>);

(Info.weekdaysFormat("long"): Array<string>);
(Info.weekdaysFormat("narrow", { locale: "de-DE" }): Array<string>);
(Info.weekdaysFormat("short", { numberingSystem: "arab" }): Array<string>);
(Info.weekdaysFormat("long", {
  numberingSystem: "latn",
  outputCalendar: "buddhist"
}): Array<string>);
// $ExpectError
(Info.weekdaysFormat("long", { foo: "bar" }): Array<string>);

(DateTime.local().toJSDate(): Date);
DateTime.local(2012).toJSDate();
DateTime.local(2012, 1, 16).toJSDate();

(DateTime.utc().toJSDate(): Date);
DateTime.utc(2012).toJSDate();
DateTime.utc(2012, 1, 16).toJSDate();

var date: DateTime = DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT");
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", {});
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", { zone: "America/Chicago" });
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", { zone: new CustomZone() });
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", { locale: "en-US" });
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", {
  zone: "America/Chicago",
  setZone: true,
  locale: "en-US",
  outputCalendar: "gregory",
  numberingSystem: "buddhist"
});
// $ExpectError
DateTime.fromHTTP();
// $ExpectError
DateTime.fromHTTP({});
// $ExpectError
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", { foo: "bar" });
// $ExpectError
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", { zone: 2 });
// $ExpectError
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", { locale: 2 });
// $ExpectError
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", { setZone: "yes" });
// $ExpectError
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", { outputCalendar: 2 });
// $ExpectError
DateTime.fromHTTP("Sun, 06 Nov 1994 08:49:37 GMT", { numberingSystem: 2 });

var date: DateTime = DateTime.fromObject({ year: 2017, month: 1, day: 23 });
DateTime.fromObject({ year: 2017, month: 1, day: 23 });
DateTime.fromObject({ year: 2017, month: 1, day: 23, zone: "America/Chicago" });
DateTime.fromObject({ year: 2017, month: 1, day: 23, zone: new CustomZone() });
DateTime.fromObject({ year: 2017, month: 1, day: 23, locale: "en-US" });
DateTime.fromObject({
  year: 2017,
  month: 1,
  day: 23,
  zone: "America/Chicago",
  setZone: true,
  locale: "en-US",
  outputCalendar: "gregory",
  numberingSystem: "buddhist"
});
// $ExpectError
DateTime.fromObject();
// $ExpectError
DateTime.fromObject("blah");
// $ExpectError
DateTime.fromObject({ year: 2017, month: 1, day: 23, foo: "bar" });
// $ExpectError
DateTime.fromObject({ year: 2017, month: "January", day: 23 });
// $ExpectError
DateTime.fromObject({ year: 2017, month: 1, day: "Monday" });
// $ExpectError
DateTime.fromObject({ year: 2017, month: 1, day: 23, zone: 2 });
// $ExpectError
DateTime.fromObject({ year: 2017, month: 1, day: 23, locale: 2 });
// $ExpectError
DateTime.fromObject({ year: 2017, month: 1, day: 23, setZone: "yes" });
// $ExpectError
DateTime.fromObject({ year: 2017, month: 1, day: 23, outputCalendar: 2 });
// $ExpectError
DateTime.fromObject({ year: 2017, month: 1, day: 23, numberingSystem: 2 });

var date: DateTime = DateTime.fromISO("2017-01-28T23:00:01");
DateTime.fromISO("2017-01-28T23:00:01", {});
DateTime.fromISO("2017-01-28T23:00:01", { zone: "America/Chicago" });
DateTime.fromISO("2017-01-28T23:00:01", { zone: new CustomZone() });
DateTime.fromISO("2017-01-28T23:00:01", { locale: "en-US" });
DateTime.fromISO("2017-01-28T23:00:01", {
  zone: "America/Chicago",
  setZone: true,
  locale: "en-US",
  outputCalendar: "gregory",
  numberingSystem: "buddhist"
});
// $ExpectError
DateTime.fromISO();
// $ExpectError
DateTime.fromISO("2017-01-28T23:00:01", { foo: "bar" });
// $ExpectError
DateTime.fromISO("2017-01-28T23:00:01", { zone: 2 });
// $ExpectError
DateTime.fromISO("2017-01-28T23:00:01", { locale: 2 });
// $ExpectError
DateTime.fromISO("2017-01-28T23:00:01", { setZone: "yes" });
// $ExpectError
DateTime.fromISO("2017-01-28T23:00:01", { outputCalendar: 2 });
// $ExpectError
DateTime.fromISO("2017-01-28T23:00:01", { numberingSystem: 2 });

var date: DateTime = DateTime.fromJSDate(new Date());
DateTime.fromJSDate(new Date(), {});
DateTime.fromJSDate(new Date(), { zone: "America/Chicago" });
DateTime.fromJSDate(new Date(), { zone: new CustomZone() });
DateTime.fromJSDate(new Date(), { locale: "en-US" });
DateTime.fromJSDate(new Date(), {
  zone: "America/Chicago",
  setZone: true,
  locale: "en-US",
  outputCalendar: "gregory",
  numberingSystem: "buddhist"
});
// $ExpectError
DateTime.fromJSDate();
// $ExpectError
DateTime.fromJSDate(1234234123);
// $ExpectError
DateTime.fromJSDate(new Date(), { foo: "bar" });
// $ExpectError
DateTime.fromJSDate(new Date(), { zone: 2 });
// $ExpectError
DateTime.fromJSDate(new Date(), { locale: 2 });
// $ExpectError
DateTime.fromJSDate(new Date(), { setZone: "yes" });
// $ExpectError
DateTime.fromJSDate(new Date(), { outputCalendar: 2 });
// $ExpectError
DateTime.fromJSDate(new Date(), { numberingSystem: 2 });

var date: DateTime = DateTime.fromMillis(123412323);
DateTime.fromMillis(123412323, {});
DateTime.fromMillis(123412323, { zone: "America/Chicago" });
DateTime.fromMillis(123412323, { zone: new CustomZone() });
DateTime.fromMillis(123412323, { locale: "en-US" });
DateTime.fromMillis(123412323, {
  zone: "America/Chicago",
  setZone: true,
  locale: "en-US",
  outputCalendar: "gregory",
  numberingSystem: "buddhist"
});
// $ExpectError
DateTime.fromMillis();
// $ExpectError
DateTime.fromMillis("1234234123");
// $ExpectError
DateTime.fromMillis(123412323, { foo: "bar" });
// $ExpectError
DateTime.fromMillis(123412323, { zone: 2 });
// $ExpectError
DateTime.fromMillis(123412323, { locale: 2 });
// $ExpectError
DateTime.fromMillis(123412323, { setZone: "yes" });
// $ExpectError
DateTime.fromMillis(123412323, { outputCalendar: 2 });
// $ExpectError
DateTime.fromMillis(123412323, { numberingSystem: 2 });

var date: DateTime = DateTime.fromRFC2822("12/15/2017, 12:47:25 PM");
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", {});
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", { zone: "America/Chicago" });
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", { zone: new CustomZone() });
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", { locale: "en-US" });
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", {
  zone: "America/Chicago",
  setZone: true,
  locale: "en-US",
  outputCalendar: "gregory",
  numberingSystem: "buddhist"
});
// $ExpectError
DateTime.fromRFC2822();
// $ExpectError
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", { foo: "bar" });
// $ExpectError
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", { zone: 2 });
// $ExpectError
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", { locale: 2 });
// $ExpectError
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", { setZone: "yes" });
// $ExpectError
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", { outputCalendar: 2 });
// $ExpectError
DateTime.fromRFC2822("12/15/2017, 12:47:25 PM", { numberingSystem: 2 });

var date: DateTime = DateTime.fromSQL("12/15/2017, 12:47:25 PM");
DateTime.fromSQL("12/15/2017, 12:47:25 PM", {});
DateTime.fromSQL("12/15/2017, 12:47:25 PM", { zone: "America/Chicago" });
DateTime.fromSQL("12/15/2017, 12:47:25 PM", { zone: new CustomZone() });
DateTime.fromSQL("12/15/2017, 12:47:25 PM", { locale: "en-US" });
DateTime.fromSQL("12/15/2017, 12:47:25 PM", {
  zone: "America/Chicago",
  setZone: true,
  locale: "en-US",
  outputCalendar: "gregory",
  numberingSystem: "buddhist"
});
// $ExpectError
DateTime.fromSQL();
// $ExpectError
DateTime.fromSQL("12/15/2017, 12:47:25 PM", { foo: "bar" });
// $ExpectError
DateTime.fromSQL("12/15/2017, 12:47:25 PM", { zone: 2 });
// $ExpectError
DateTime.fromSQL("12/15/2017, 12:47:25 PM", { locale: 2 });
// $ExpectError
DateTime.fromSQL("12/15/2017, 12:47:25 PM", { setZone: "yes" });
// $ExpectError
DateTime.fromSQL("12/15/2017, 12:47:25 PM", { outputCalendar: 2 });
// $ExpectError
DateTime.fromSQL("12/15/2017, 12:47:25 PM", { numberingSystem: 2 });

var date: DateTime = DateTime.fromFormat(
  '12/15/2017, 12:47:25 PM',
  'dd/MM/yyyy h:mm:ss a'
);
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {});
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  zone: 'America/Chicago',
});
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  zone: new CustomZone(),
});
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  locale: 'en-US',
});
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  zone: 'America/Chicago',
  setZone: true,
  locale: 'en-US',
  outputCalendar: 'gregory',
  numberingSystem: 'buddhist',
});
// $ExpectError
DateTime.fromFormat();
// $ExpectError
DateTime.fromFormat('12/15/2017, 12:47:25 PM');
// $ExpectError
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 2);
// $ExpectError
DateTime.fromFormat('12/15/2017, 12:47:25 PM', { zone: 'America/Chicago' });
// $ExpectError
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  foo: 'bar',
});
// $ExpectError
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  zone: 2,
});
// $ExpectError
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  locale: 2,
});
// $ExpectError
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  setZone: 'yes',
});
// $ExpectError
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  outputCalendar: 2,
});
// $ExpectError
DateTime.fromFormat('12/15/2017, 12:47:25 PM', 'dd/MM/yyyy h:mm:ss a', {
  numberingSystem: 2,
});

var date: DateTime = DateTime.invalid("test");
// $ExpectError
DateTime.invalid();

// Flow 0.40 - 0.45 allows these but they're incorrect...bug!
// DateTime.max();
// DateTime.min();

var date = DateTime.max(DateTime.local(), DateTime.utc(), DateTime.utc());
var date = DateTime.min(DateTime.local(), DateTime.utc(), DateTime.utc());
// $ExpectError
var date = DateTime.max(DateTime.local(), null, DateTime.utc());
// $ExpectError
var date = DateTime.min(DateTime.local(), null, DateTime.utc());

(date.day: number);
(date.daysInMonth: number);
(date.daysInYear: number);
(date.hour: number);
(date.invalidReason: ?string);
(date.isInDST: boolean);
(date.isInLeapYear: boolean);
(date.isOffsetFixed: boolean);
(date.isValid: boolean);
(date.locale: string);
(date.millisecond: number);
(date.minute: number);
(date.month: number);
(date.monthLong: string);
(date.monthShort: string);
(date.numberingSystem: ?string);
(date.offset: number);
(date.offsetNameLong: string);
(date.offsetNameShort: string);
(date.ordinal: number);
(date.outputCalendar: ?string);
(date.second: number);
(date.weekNumber: number);
(date.weekYear: number);
(date.weekday: number);
(date.weekdayLong: string);
(date.weekdayShort: string);
(date.year: number);
(date.zoneName: string);

(date.diff(DateTime.utc(), "year"): Duration);
(date.diff(DateTime.utc(), ["year", "month"]): Duration);
(date.diff(DateTime.utc(), ["year", "month"], {}): Duration);
(date.diff(DateTime.utc(), ["year", "month"], {
  conversionAccuracy: "longterm"
}): Duration);
// $ExpectError
(date.diff(new Date()): Duration);
// $ExpectError
(date.diff(DateTime.utc()): Duration);
// $ExpectError
(date.diff(DateTime.utc(), "glom"): Duration);
// $ExpectError
(date.diff(DateTime.utc(), ["year", "glom"]): Duration);
// $ExpectError
(date.diff(DateTime.utc(), ["year", "month"], { foo: "bar" }): Duration);

(date.diffNow("year"): Duration);
(date.diffNow(["year", "month"]): Duration);
(date.diffNow(["year", "month"], {}): Duration);
(date.diffNow(["year", "month"], { conversionAccuracy: "longterm" }): Duration);
// $ExpectError
(date.diff(new Date()): Duration);
// $ExpectError
(date.diff(DateTime.utc()): Duration);
// $ExpectError
(date.diffNow("glom"): Duration);
// $ExpectError
(date.diffNow(["year", "glom"]): Duration);
// $ExpectError
(date.diffNow(["year", "month"], { foo: "bar" }): Duration);

(date.startOf("year"): DateTime);
(date.startOf("month"): DateTime);
(date.startOf("day"): DateTime);
(date.startOf("seconds"): DateTime);
// $ExpectError
(date.startOf("secs"): DateTime);

(date.endOf("year"): DateTime);
(date.endOf("month"): DateTime);
(date.endOf("day"): DateTime);
(date.endOf("seconds"): DateTime);
// $ExpectError
(date.endOf("secs"): DateTime);

if (date.equals(DateTime.utc())) {
}
// $ExpectError
if (date.equals(new Date())) {
}

(date.get("year"): number);
(date.get("month"): number);
// $ExpectError
(date.get("secs"): number);

(date.hasSame(DateTime.utc(), "year"): boolean);
(date.hasSame(DateTime.utc(), "month"): boolean);
// $ExpectError
(date.hasSame(DateTime.utc(), "secs"): boolean);
// $ExpectError
(date.hasSame(new Date(), "month"): boolean);

(date.inspect(): string);

(date.minus({ day: 1 }): DateTime);
(date.minus(232): DateTime);
(date.minus(Duration.fromObject({ day: 1 })): DateTime);
// $ExpectError
(date.minus({ glab: 1 }): DateTime);

(date.plus({ day: 1 }): DateTime);
(date.plus(232): DateTime);
(date.plus(Duration.fromObject({ day: 1 })): DateTime);
// $ExpectError
(date.plus({ glab: 1 }): DateTime);

(date.reconfigure({ zone: "America/Detroit" }): DateTime);

(date.resolvedLocaleOpts().locale: string);
(date.resolvedLocaleOpts().outputCalendar: string);
(date.resolvedLocaleOpts().numberingSystem: string);

(date.set({ year: 1, month: 2 }): DateTime);
(date.set({ minutes: 1, seconds: 2 }): DateTime);
(date.set({ minutes: 1, seconds: 2, ordinal: 255 }): DateTime);
// $ExpectError
(date.set({ minutes: 1, seconds: 2, simpsons: 3 }): DateTime);

(date.setLocale("de-DE"): DateTime);

(date.setZone("America/Detroit"): DateTime);
(date.setZone(new CustomZone()): DateTime);

(date.toFormat("yyyy/MM/dd"): string);
(date.toFormat("yyyy/MM/dd", { round: true }): string);

(date.toHTTP(): string);

(date.toISO(): string);
(date.toISO({}): string);
(date.toISO({
  suppressMilliseconds: true,
  suppressSeconds: true,
  includeOffset: true
}): string);
// $ExpectError
(date.toISO({ blah: true }): string);

(date.toISOTime(): string);
(date.toISOTime({}): string);
(date.toISOTime({
  suppressMilliseconds: true,
  suppressSeconds: true,
  includeOffset: true
}): string);
// $ExpectError
(date.toISOTime({ blah: true }): string);

(date.toISOWeekDate(): string);
(date.toJSDate(): Date);
(date.toLocal(): DateTime);

(date.toLocaleParts(): Array<{ type: string, value: number }>);
(date.toLocaleParts({ month: "numeric" }): Array<{
  type: string,
  value: number
}>);
(date.toLocaleParts({ year: "numeric" }): Array<{
  type: string,
  value: number
}>);
// $ExpectError
(date.toLocaleParts({ foo: "bar" }): Array<{ type: string, value: number }>);

(date.toLocaleString(): string);
(date.toLocaleString({ month: "numeric" }): string);
(date.toLocaleString({ year: "numeric" }): string);
// $ExpectError
(date.toLocaleString({ foo: "bar" }): string);

(date.toObject().year: number);
(date.toObject().month: number);
(date.toObject().day: number);
(date.toObject().hour: number);
(date.toObject().minute: number);
(date.toObject().second: number);
(date.toObject().millisecond: number);
(date.toObject({ includeConfig: true }).locale: string);
(date.toObject({ includeConfig: true }).outputCalendar: ?string);
(date.toObject({ includeConfig: true }).numberingSystem: ?string);
// $ExpectError
date.toObject({ includeConfig: false }).locale;
// $ExpectError
date.toObject({ includeConfig: false }).outputCalendar;
// $ExpectError
date.toObject({ includeConfig: false }).numberingSystem;

(date.toRFC2822(): string);

(date.toSQL(): string);
(date.toSQL({}): string);
(date.toSQL({ includeZone: true, includeOffset: true }): string);
// $ExpectError
(date.toSQL({ blah: true }): string);

(date.toSQLDate(): string);

(date.toSQLTime(): string);
(date.toSQLTime({}): string);
(date.toSQLTime({ includeZone: true, includeOffset: true }): string);
// $ExpectError
(date.toSQLTime({ blah: true }): string);

(date.toString(): string);

(date.toUTC(): DateTime);
(date.toUTC(32): DateTime);
(date.toUTC(32, { keepCalendarTime: true }): DateTime);

(date.until(DateTime.utc()): Duration);

(date.valueOf(): number);

(Duration.fromISO("lkasdfa"): Duration);
(Duration.fromISO("lkasdfa", {
  locale: "de-DE",
  numberingSystem: "gujr",
  conversionAccuracy: "casual"
}): Duration);
// $ExpectError
(Duration.fromISO(): Duration);
// $ExpectError
(Duration.fromISO("lkasdfa", { foo: "bar" }): Duration);

(Duration.fromObject({ year: 1 }): Duration);
(Duration.fromObject({ years: 1 }): Duration);
(Duration.fromObject({ year: 1, months: 1 }): Duration);
(Duration.fromObject({
  year: 1,
  months: 1,
  locale: "de-DE",
  numberingSystem: "gujr",
  conversionAccuracy: "casual"
}): Duration);
// $ExpectError
(Duration.fromObject(): Duration);
// $ExpectError
(Duration.fromObject({ year: 1, months: 1, foo: "bar" }): Duration);

(Duration.fromMillis(23123412): Duration);
(Duration.fromMillis(23123412, {
  locale: "de-DE",
  numberingSystem: "gujr",
  conversionAccuracy: "casual"
}): Duration);
// $ExpectError
(Duration.fromMillis(): Duration);
// $ExpectError
(Duration.fromMillis(23123412, { foo: "bar" }): Duration);

(Duration.invalid("test"): Duration);
// $ExpectError
(Duration.invalid(): Duration);

var dur: Duration = Duration.invalid("test");

(dur.days: number);
(dur.hours: number);
(dur.invalidReason: ?string);
(dur.isValid: boolean);
(dur.locale: string);
(dur.milliseconds: number);
(dur.minutes: number);
(dur.months: number);
(dur.numberingSystem: string);
(dur.seconds: number);
(dur.weeks: number);
(dur.years: number);

(dur.as("year"): number);
(dur.as("years"): number);
(dur.as("month"): number);
(dur.as("months"): number);
(dur.as("week"): number);
(dur.as("weeks"): number);
(dur.as("day"): number);
(dur.as("days"): number);
(dur.as("hour"): number);
(dur.as("hours"): number);
(dur.as("minute"): number);
(dur.as("minutes"): number);
(dur.as("second"): number);
(dur.as("seconds"): number);
(dur.as("millisecond"): number);
(dur.as("milliseconds"): number);
// $ExpectError
(dur.as("date"): number);

(dur.equals(Duration.invalid("test")): boolean);
// $ExpectError
(dur.equals(new Date()): boolean);

(dur.get("year"): number);
(dur.get("years"): number);
(dur.get("month"): number);
(dur.get("months"): number);
(dur.get("week"): number);
(dur.get("weeks"): number);
(dur.get("day"): number);
(dur.get("days"): number);
(dur.get("hour"): number);
(dur.get("hours"): number);
(dur.get("minute"): number);
(dur.get("minutes"): number);
(dur.get("second"): number);
(dur.get("seconds"): number);
(dur.get("millisecond"): number);
(dur.get("milliseconds"): number);
// $ExpectError
(dur.get("date"): number);

(dur.inspect(): string);

(dur.negate(): Duration);
(dur.normalize(): Duration);

(dur.minus({ day: 1 }): Duration);
(dur.minus(232): Duration);
(dur.minus(Duration.fromObject({ day: 1 })): Duration);
// $ExpectError
(dur.minus({ glab: 1 }): Duration);

(dur.plus({ day: 1 }): Duration);
(dur.plus(232): Duration);
(dur.plus(Duration.fromObject({ day: 1 })): Duration);
// $ExpectError
(dur.plus({ glab: 1 }): Duration);

(dur.reconfigure({ locale: "de-DE" }): Duration);
(dur.reconfigure({ numberingSystem: "latn" }): Duration);
(dur.reconfigure({ conversionAccuracy: "longterm" }): Duration);
// $ExpectError
(dur.reconfigure({ foo: "bar" }): Duration);
// $ExpectError
(dur.reconfigure({ conversionAccuracy: "date" }): Duration);

(dur.set({ year: 1 }): Duration);
(dur.set({ months: 1 }): Duration);
(dur.set({ months: 1, locale: "de-DE" }): Duration);
// $ExpectError
(dur.set({ foos: 1 }): Duration);

(dur.shiftTo("years"): Duration);
(dur.shiftTo("years", "days"): Duration);
// $ExpectError
(dur.shiftTo("years", "mnths", "days"): Duration);

(dur.toFormat("yyyy/MM/dd"): string);
(dur.toFormat("yyyy/MM/dd", { round: true }): string);
// $ExpectError
(dur.toFormat("yyyy/MM/dd", { rnd: true }): string);

(dur.toISO(): string);
(dur.toJSON(): string);

(dur.toObject().years: ?number);
(dur.toObject().months: ?number);
(dur.toObject().days: ?number);
(dur.toObject().hours: ?number);
(dur.toObject().minutes: ?number);
(dur.toObject().seconds: ?number);
(dur.toObject().milliseconds: ?number);
(dur.toObject({ includeConfig: true }).locale: string);
(dur.toObject({ includeConfig: true }).numberingSystem: ?string);
(dur.toObject({ includeConfig: true }).conversionAccuracy: ?string);
// $ExpectError
dur.toObject({ includeConfig: false }).locale;
// $ExpectError
dur.toObject({ includeConfig: false }).numberingSystem;
// $ExpectError
dur.toObject({ includeConfig: false }).conversionAccuracy;

(dur.toString(): string);

(Interval.after(DateTime.utc(), Duration.fromObject({ year: 1 })): Interval);
(Interval.after(DateTime.utc(), { year: 1 }): Interval);
(Interval.after(DateTime.utc(), 1231234): Interval);
(Interval.after(
  { year: 2017, month: 1 },
  Duration.fromObject({ year: 1 })
): Interval);
(Interval.after({ year: 2017, month: 1 }, { year: 1 }): Interval);
(Interval.after({ year: 2017, month: 1 }, 123123): Interval);
// $ExpectError
(Interval.after({ year: 2017, month: 1, foo: "bar" }, { year: 1 }): Interval);
// $ExpectError
(Interval.after({ year: 2017, month: 1 }, { year: 1, foo: "bar" }): Interval);

(Interval.before(DateTime.utc(), Duration.fromObject({ year: 1 })): Interval);
(Interval.before(DateTime.utc(), { year: 1 }): Interval);
(Interval.before(DateTime.utc(), 1231234): Interval);
(Interval.before(
  { year: 2017, month: 1 },
  Duration.fromObject({ year: 1 })
): Interval);
(Interval.before({ year: 2017, month: 1 }, { year: 1 }): Interval);
(Interval.before({ year: 2017, month: 1 }, 123123): Interval);
// $ExpectError
(Interval.before({ year: 2017, month: 1, foo: "bar" }, { year: 1 }): Interval);
// $ExpectError
(Interval.before({ year: 2017, month: 1 }, { year: 1, foo: "bar" }): Interval);

(Interval.fromDateTimes(DateTime.utc(), DateTime.utc()): Interval);
(Interval.fromDateTimes(DateTime.utc(), { year: 2017, month: 1 }): Interval);
(Interval.fromDateTimes({ year: 2016, month: 1 }, DateTime.utc()): Interval);
(Interval.fromDateTimes(
  { year: 2016, month: 1 },
  { year: 2017, month: 1 }
): Interval);
(Interval.fromDateTimes(
  // $ExpectError
  { year: 2016, month: 1, foo: 'bar' },
  { year: 2017, month: 1 }
): Interval);
(Interval.fromDateTimes(
  { year: 2016, month: 1 },
  // $ExpectError
  { year: 2017, month: 1, foo: 'bar' }
): Interval);

(Interval.fromISO("23;lkj1"): Interval);
(Interval.fromISO("23;lkj1", {
  zone: "America/Chicago",
  locale: "de-DE"
}): Interval);
// $ExpectError
(Interval.fromISO("23;lkj1", { foo: "bar" }): Interval);

(Interval.invalid("test"): Interval);
// $ExpectError
(Interval.invalid(): Interval);

var int: Interval = Interval.invalid("test");

(Interval.merge([int]): Array<Interval>);
(Interval.merge([int, int, int]): Array<Interval>);
// $ExpectError
(Interval.merge(int, int, int): Array<Interval>);

(Interval.xor([int]): Array<Interval>);
(Interval.xor([int, int, int]): Array<Interval>);
// $ExpectError
(Interval.xor(int, int, int): Array<Interval>);

(int.end: DateTime);
(int.invalidReason: ?string);
(int.isValid: boolean);
(int.start: DateTime);

(int.abutsEnd(int): boolean);
(int.abutsStart(int): boolean);
(int.contains(date): boolean);

(int.count("year"): number);
(int.count("years"): number);
(int.count("month"): number);
(int.count("months"): number);
(int.count("day"): number);
(int.count("days"): number);
(int.count("hour"): number);
(int.count("hours"): number);
(int.count("minute"): number);
(int.count("minutes"): number);
(int.count("second"): number);
(int.count("seconds"): number);
(int.count("millisecond"): number);
(int.count("milliseconds"): number);
(int.count("week"): number);
(int.count("weeks"): number);
// $ExpectError
(int.count("wks"): number);
// $ExpectError
(int.count("weekNumber"): number);
// $ExpectError
(int.count("weekNumbers"): number);
// $ExpectError
(int.count("weekYear"): number);
// $ExpectError
(int.count("weekYears"): number);
// $ExpectError
(int.count("weekday"): number);
// $ExpectError
(int.count("weekdays"): number);
// $ExpectError
(int.count("ordinal"): number);

(int.difference(): Interval);
(int.difference(int): Interval);
(int.difference(int, int, int): Interval);

(int.divideEqually(3): Array<Interval>);
(int.engulfs(int): boolean);
(int.equals(int): boolean);

(int.hasSame("year"): boolean);
(int.hasSame("years"): boolean);
(int.hasSame("month"): boolean);
(int.hasSame("months"): boolean);
(int.hasSame("day"): boolean);
(int.hasSame("days"): boolean);
(int.hasSame("hour"): boolean);
(int.hasSame("hours"): boolean);
(int.hasSame("minute"): boolean);
(int.hasSame("minutes"): boolean);
(int.hasSame("second"): boolean);
(int.hasSame("seconds"): boolean);
(int.hasSame("millisecond"): boolean);
(int.hasSame("milliseconds"): boolean);
(int.hasSame("week"): boolean);
(int.hasSame("weeks"): boolean);
// $ExpectError
(int.hasSame("wks"): boolean);
// $ExpectError
(int.hasSame("weekNumber"): number);
// $ExpectError
(int.hasSame("weekNumbers"): number);
// $ExpectError
(int.hasSame("weekYear"): number);
// $ExpectError
(int.hasSame("weekYears"): number);
// $ExpectError
(int.hasSame("weekday"): number);
// $ExpectError
(int.hasSame("weekdays"): number);
// $ExpectError
(int.hasSame("ordinal"): number);

(int.inspect(): string);

(int.intersection(int): Interval);

(int.isAfter(date): boolean);
(int.isBefore(date): boolean);
(int.isEmpty(): boolean);

(int.length("year"): number);
(int.length("years"): number);
(int.length("month"): number);
(int.length("months"): number);
(int.length("day"): number);
(int.length("days"): number);
(int.length("hour"): number);
(int.length("hours"): number);
(int.length("minute"): number);
(int.length("minutes"): number);
(int.length("second"): number);
(int.length("seconds"): number);
(int.length("millisecond"): number);
(int.length("milliseconds"): number);
(int.length("week"): number);
(int.length("weeks"): number);
// $ExpectError
(int.length("wks"): number);
// $ExpectError
(int.length("weekNumber"): number);
// $ExpectError
(int.length("weekNumbers"): number);
// $ExpectError
(int.length("weekYear"): number);
// $ExpectError
(int.length("weekYears"): number);
// $ExpectError
(int.length("weekday"): number);
// $ExpectError
(int.length("weekdays"): number);
// $ExpectError
(int.length("ordinal"): number);

(int.overlaps(int): boolean);

(int.set({ start: date }): Interval);
(int.set({ end: date }): Interval);
(int.set({ start: date, end: date }): Interval);
// $ExpectError
(int.set({ foo: "bar" }): Interval);

(int.splitAt(): Array<Interval>);
(int.splitAt(date): Array<Interval>);
(int.splitAt(date, date, date): Array<Interval>);
(int.toDuration("year"): Duration);
(int.toDuration(["year", "month"]): Duration);
(int.toDuration(["year", "month"], {
  conversionAccuracy: "longterm"
}): Duration);
(int.toDuration("year", { conversionAccuracy: "longterm" }): Duration);
// $ExpectError
(int.toDuration("year", { conversionAccuracy: "blah" }): Duration);
// $ExpectError
(int.toDuration("year", { foo: "bar" }): Duration);

(int.toISO(): string);
(int.toISO({
  suppressMilliseconds: true,
  suppressSeconds: true,
  includeOffset: true
}): string);
// $ExpectError
(int.toISO({
  suressMilliseconds: true,
  suppressSeconds: true,
  includeOffset: true
}): string);

(int.toString(): string);

(int.union(int): Interval);
