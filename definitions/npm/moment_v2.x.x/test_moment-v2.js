// @flow
import moment from 'moment';
import { describe, it } from 'flow-typed-test';

describe('moment', () => {
  it('moment()', () => {
    let m: moment;
    m = moment();
    m = moment('2018-01-01');
    m = moment([123, 123]);
    m = moment(undefined);
  });

  it('moment.utc()', () => {
    let m: moment;
    m = moment.utc();
    m = moment.utc('2018-01-01');
    m = moment.utc([123, 123]);
    m = moment.utc(undefined);
  });

  it('moment.unix()', () => {
    // $ExpectError
    moment.unix('1234');
  });

  it('export raw values', () => {
    const A: Date = moment().toDate();
    const x: string = moment().toISOString();
  });

  it('Get + Set', () => {
    // Get + Set
    // $ExpectError
    moment()
      .millisecond()
      .seconds();
    moment()
      .milliseconds(100)
      .seconds();
  });

  it('Manipulate', () => {
    // Manipulate
    const m1: moment = moment().add(2, 'day');
    moment().add({ day: 1 });
    const m2: moment = moment().subtract(1, 's');
    moment().subtract({ day: 1 });
  });

  it('Query', () => {
    moment().isBefore();
    moment().isSame();
    moment().isAfter();
    moment().isSameOrBefore();
    moment().isSameOrAfter();
    moment.isDate(new Date());
    moment().isBefore(new Date(), 'day');
    moment().isSame(new Date(), 'day');
  });

  it('moment.calendar()', () => {
    moment().calendar(null, {
      sameDay: 'HH:mm',
    });
    moment().calendar(null, {
      sameDay: () => 'HH:mm',
    });
    // $ExpectError
    moment().calendar(null, {
      sameDay: (a: number) => 'HH:mm',
    });
    // $ExpectError
    moment().calendar(null, {
      sameDay: 2,
    });
    // $ExpectError
    moment().calendar(null, {
      // $ExpectError (>=0.56.0)
      sameElse: () => {},
    });
  });

  it('moment.utcOffset()', () => {
    let n: number;
    n = moment().utcOffset();
    n = m.utcOffset(0).utcOffset();
    n = m.utcOffset(-1.5).utcOffset();
    n = m.utcOffset(-90).utcOffset();
    n = m.utcOffset('-01:30').utcOffset();
    n = m.utcOffset('+00:10').utcOffset();

    // Optional 2nd and 3rd arguments
    n = m.utcOffset(0, true).utcOffset();
    n = m.utcOffset(0, false).utcOffset();
    n = m.utcOffset(0, true, true).utcOffset();
  });

  it('moment.locale()', () => {
    const getLocale: string = moment.locale();
    const setLocale: string = moment.locale('en');
    const setArrayLocale: string = moment.locale(['en', 'de']);
  });
});
