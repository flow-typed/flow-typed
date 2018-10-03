// @flow
import moment from "moment";
import { describe, it } from 'flow-typed-test';

// Parse
const m3: moment = moment([123, 123]);

// $ExpectError
moment.unix("1234");

// Display
const A: Date = moment().toDate();
describe('toISOString', () => {
  it('should take no parameters', () => {
    const x: string = moment().toISOString();
  });

  it('should take a boolean', () => {
    const y: string = moment().toISOString(true);
  });

  // $ExpectError - should fail on non-boolean value
  const y: string = moment().toISOString('foo');
});

// Get + Set
// $ExpectError
moment().millisecond().seconds();
moment().milliseconds(100).seconds();
(moment().weekday(): number);
moment().weekday(1);
// $ExpectError weekday does not take string arguments
moment().weekday("monday");
(moment().isoWeekday(): number);
moment().isoWeekday(1);
// ...but isoWeekday does accept string argument
moment().isoWeekday("monday");
moment().dayOfYear();
moment().dayOfYear(1);
// $ExpectError dayOfYear does not accept string arguments
moment().dayOfYear("what");

// Manipulate
const m1: moment = moment().add(2, "day");
moment().add({ day: 1 });
const m2: moment = moment().subtract(1, "s");
moment().subtract({ day: 1 });
const m: moment = moment.utc();

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
// $ExpectError
moment().calendar(null, {
  sameDay: (a: number) => "HH:mm"
});
// $ExpectError
moment().calendar(null, {
  sameDay: 2
});
// $ExpectError
moment().calendar(null, {
  // $ExpectError (>=0.56.0)
  sameElse: () => {}
});

// UTC offsets
let n: number;
n = moment().utcOffset();
n = m.utcOffset(0).utcOffset();
n = m.utcOffset(-1.5).utcOffset();
n = m.utcOffset(-90).utcOffset();
n = m.utcOffset("-01:30").utcOffset();
n = m.utcOffset("+00:10").utcOffset();

// Optional 2nd and 3rd arguments
n = m.utcOffset(0, true).utcOffset();
n = m.utcOffset(0, false).utcOffset();
n = m.utcOffset(0, true, true).utcOffset();

const getLocale: string = moment.locale();
const setLocale: string = moment.locale("en");
const setArrayLocale: string = moment.locale(["en", "de"]);
