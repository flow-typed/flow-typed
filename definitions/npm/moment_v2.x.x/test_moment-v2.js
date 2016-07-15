// @flow
import moment from 'moment';

const m: moment = moment().utc();
// $ExpectError
const invalid: moment = moment([123, 123]);
const m1: momemnt = m.add(2, 'day');
const m2: moment = m.subtract(1, 's');
const A: Date = m.toDate();
const x: string = m.toISOString();
