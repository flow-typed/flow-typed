// @flow
import moment from 'moment';

const m: moment = moment.utc();
const m1: moment = m.add(2, 'day');
const m2: moment = m.subtract(1, 's');
const m3: moment = moment([123, 123]);
const A: Date = m.toDate();
const x: string = m.toISOString();

//$ExpectError
moment.unix('1234');
// $ExpectError
moment().millisecond().seconds();

moment().milliseconds(100).seconds();
