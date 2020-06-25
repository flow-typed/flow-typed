// @flow
import moment from "moment";
import { describe, it } from 'flow-typed-test';

describe('Parse, moment()', () => {
  const m3: moment = moment([123, 123]);
  // https://momentjs.com/docs/#/parsing/now/
  moment();
  moment([]);
  moment({});

  const maybeString: ?string = '2015-01-01'
  moment(maybeString)

  const voidString: string | void = '2015-01-01'
  moment(voidString)

  moment('2015-01-01');
  moment("12-25-1995", "MM-DD-YYYY");
  moment('It is 2012-05-25', 'YYYY-MM-DD', true);
  // https://momentjs.com/docs/#/parsing/string-formats/
  moment("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);
  moment("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr');
  moment("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], true);
  moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr', true);
  // $FlowExpectedError
  moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr', 1);
  // https://momentjs.com/docs/#/parsing/object/
  moment({ hour: 15, minute: 10 });
  moment({ y: 2010, M: 3, d: 5, h: 15, m: 10, s: 3, ms: 123 });
  moment({
    year: 2010,
    month: 3,
    day: 5,
    hour: 15,
    minute: 10,
    second: 3,
    millisecond: 123
  });
  moment({
    years: 2010,
    months: 3,
    days: 5,
    hours: 15,
    minutes: 10,
    seconds: 3,
    milliseconds: 123
  });
  moment({
    years: 2010,
    months: 3,
    date: 5,
    hours: 15,
    minutes: 10,
    seconds: 3,
    milliseconds: 123
  });
  moment({
    years: "2010",
    months: "3",
    date: "5",
    hours: "15",
    minutes: "10",
    seconds: "3",
    milliseconds: "123"
  }); // from 2.11.0

  moment({ hour: null, minute: 10 });

  // https://momentjs.com/docs/#/parsing/array/
  moment([2015, 0]); // This would equal 2015-01-01
  // $FlowExpectedError only numbers are valid for Array API
  moment(["2015"]);
  moment('2015-01-01', true);

  // $FlowExpectedError only string values can have formatting parameters
  moment([2015, 0], "MM-DD-YYYY");
  // $FlowExpectedError
  moment([2015, 0], "MM-DD-YYYY", true);
  // $FlowExpectedError
  moment([2015, 0], moment.ISO_8601);
  // $FlowExpectedError
  moment({ hour: 15, minute: 10 }, "MM-DD-YYYY");
  // // https://momentjs.com/docs/#/parsing/special-formats/
  moment("2010-01-01T05:06:07", moment.ISO_8601);
  moment("2010-01-01T05:06:07", ["YYYY", moment.ISO_8601]);
  // https://momentjs.com/docs/#/parsing/unix-timestamp-milliseconds/
  moment(1318781876406);
  // https://momentjs.com/docs/#/parsing/date/
  moment(new Date());
  // https://momentjs.com/docs/#/parsing/moment-clone/
  moment(moment());

  // Moment project also allows null and undefined to be passed in,
  // at least if you look at their TypeScript definitions.
  // https://github.com/moment/moment/commit/c891a4fcb0492539184eac73229b7a8053a5bbf8
  // https://github.com/moment/moment/blob/2.22.2/moment.d.ts#L400
  moment(null);
  moment(undefined);
});

// https://momentjs.com/docs/#/parsing/unix-timestamp/
describe('Parse, moment.unix()', () => {
  moment.unix(123);
  // $FlowExpectedError
  moment.unix("1234");
  // $FlowExpectedError
  moment.unix(undefined);
  // $FlowExpectedError
  moment.unix();
});

// https://momentjs.com/docs/#/parsing/utc/
// Basically all the same things as moment(), as the docs say:
// "If you want to parse or display a moment in UTC, you can use moment.utc() instead of moment()."
describe('Parse, moment.utc()', () => {
  const m: moment = moment.utc();
  moment.utc(1318781876406);
  moment.utc([2015, 0]);
  // $FlowExpectedError only numbers allowed with Array API
  moment.utc(["2015", "0"]);

  moment.utc('2015-01-01');
  moment.utc("12-25-1995", "MM-DD-YYYY");
  moment.utc('It is 2012-05-25', 'YYYY-MM-DD', true);
  moment.utc("12-25-1995", ["MM-DD-YYYY", "YYYY-MM-DD"]);
  moment.utc("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr');
  moment.utc("29-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], true);
  moment.utc("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr', true);
  // $FlowExpectedError
  moment.utc("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr', 1);
  moment.utc('2015-01-01', true);

  moment.utc({ hour: 15, minute: 10 });

  // $FlowExpectedError only string values can have formatting parameters
  moment.utc([2015, 0], "MM-DD-YYYY");
  // $FlowExpectedError
  moment.utc([2015, 0], "MM-DD-YYYY", true);
  // $FlowExpectedError
  moment.utc([2015, 0], moment.ISO_8601);
  // $FlowExpectedError
  moment.utc({ hour: 15, minute: 10 }, "MM-DD-YYYY");

  // Special formatting
  moment.utc("2010-01-01T05:06:07", moment.ISO_8601);
  moment.utc("2010-01-01T05:06:07", ["YYYY", moment.ISO_8601]);
  moment.utc(new Date());
  moment.utc(moment());

  // null and undefined allowed as per moment TypeScript definitions
  // https://github.com/moment/moment/blob/2.22.2/moment.d.ts#L400
  // https://github.com/moment/moment/blob/2.22.2/moment.d.ts#L622
  moment.utc(null);
  moment.utc(undefined);
});

// https://momentjs.com/docs/#/parsing/parse-zone/
describe('Parse, moment.parseZone()', () => {
  const m: moment = moment.parseZone();
  moment.parseZone("2013-01-01T00:00:00-13:00");
  moment.parseZone("2013 01 01 05 -13:00", "YYYY MM DD HH ZZ");
  moment.parseZone("2013-01-01-13:00", ["DD MM YYYY ZZ", "YYYY MM DD ZZ"]);
  moment.parseZone("2013 01 01 05 -13:00", "YYYY MM DD HH ZZ", true);
  moment.parseZone("2013 01 01 -13:00", "YYYY MM DD ZZ", true);
  moment.parseZone("2013 01 01 -13:00", "YYYY MM DD ZZ", "fr");
  moment.parseZone("2013 01 01 -13:00", "YYYY MM DD ZZ", "fr", true);
  moment.parseZone("2013 01 01 -13:00", ["DD MM YYYY ZZ", "YYYY MM DD ZZ"], true);
  moment.parseZone("2013 01 01 -13:00", ["DD MM YYYY ZZ", "YYYY MM DD ZZ"], "fr", true);

  // $FlowExpectedError needs a format string before the strictness flag
  moment.parseZone("2013-01-01T00:00:00-13:00", true);

  // null and undefined allowed as per moment TypeScript definitions
  // https://github.com/moment/moment/blob/2.22.2/moment.d.ts#L400
  // https://github.com/moment/moment/blob/2.22.2/moment.d.ts#L650
  moment.parseZone(null);
  moment.parseZone(undefined);

  it('is invalid to use special, undocumented formats', () => {
    // The following cases do generate valid moment objects, but this
    // seems to be an undocumented API. If the moment project decides to
    // document some of these APIs, then the types can be changed.

    // $FlowExpectedError
    moment.parseZone(new Date());
    // $FlowExpectedError
    moment.parseZone(moment());
    // $FlowExpectedError
    moment.parseZone({ hour: 15, minute: 10 });
    // $FlowExpectedError
    moment.parseZone(1318781876406);
    // $FlowExpectedError
    moment.parseZone([2015, 0]);
  });
});

// Display
const A: Date = moment().toDate();
describe('toISOString', () => {
  it('should take no parameters', () => {
    const x: string = moment().toISOString();
  });

  it('should take a boolean', () => {
    const y: string = moment().toISOString(true);
  });

  // $FlowExpectedError - should fail on non-boolean value
  const y: string = moment().toISOString('foo');
});

// Get + Set
// $FlowExpectedError
moment().millisecond().seconds();
moment().milliseconds(100).seconds();
(moment().weekday(): number);
moment().weekday(1);
// $FlowExpectedError weekday does not take string arguments
moment().weekday("monday");
(moment().isoWeekday(): number);
moment().isoWeekday(1);
// ...but isoWeekday does accept string argument
moment().isoWeekday("monday");
moment().dayOfYear();
moment().dayOfYear(1);
// $FlowExpectedError dayOfYear does not accept string arguments
moment().dayOfYear("what");

// Manipulate
const m1: moment = moment().add(2, "day");
moment().add({ day: 1 });
const m2: moment = moment().subtract(1, "s");
moment().subtract({ day: 1 });

// Query
moment().isBefore();
moment().isSame();
moment().isAfter();
moment().isSameOrBefore();
moment().isSameOrAfter();
moment.isDate(new Date());
moment().isBefore(new Date(), "day");
moment().isSame(new Date(), "day");

// CalendarTime
moment().calendar(null, {
  sameDay: "HH:mm"
});
moment().calendar(null, {
  sameDay: () => "HH:mm"
});
moment().calendar(null, {
  // $FlowExpectedError
  sameDay: (a: number) => "HH:mm"
});
moment().calendar(null, {
  // $FlowExpectedError
  sameDay: 2
});
moment().calendar(null, {
  // $FlowExpectedError (>=0.56.0)
  sameElse: () => {}
});

// UTC offsets
let n: number;
n = moment().utcOffset();
n = moment().utcOffset(0).utcOffset();
n = moment().utcOffset(-1.5).utcOffset();
n = moment().utcOffset(-90).utcOffset();
n = moment().utcOffset("-01:30").utcOffset();
n = moment().utcOffset("+00:10").utcOffset();

// Optional 2nd and 3rd arguments
n = moment().utcOffset(0, true).utcOffset();
n = moment().utcOffset(0, false).utcOffset();
n = moment().utcOffset(0, true, true).utcOffset();

const getLocale: string = moment.locale();
const setLocale: string = moment.locale("en");
const setArrayLocale: string = moment.locale(["en", "de"]);

// Locales
const localeData = moment().locale('fr').localeData();

// Customize
moment.defineLocale('fakeLocale');
moment.defineLocale('fakeLocale', { parentLocale: 'xyz' });
// $FlowExpectedError
moment.defineLocale('fakeLocale', 'not an object');
// $FlowExpectedError
moment.defineLocale(); // no arguments

describe('now', () => {
  it('takes no parameter', () => {
    moment.now()
    // $FlowExpectedError
    moment.now('Lorem')
  });

  it('returns a number', () => {
    const a: number = moment.now()
    // $FlowExpectedError
    const b: string = moment.now()
  })
});
