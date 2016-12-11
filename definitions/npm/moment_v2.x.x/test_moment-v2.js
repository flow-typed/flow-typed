// @flow
import moment from 'moment';

// Parse
const m3: moment = moment([123, 123]);

//$ExpectError
moment.unix('1234');

// Display
const A: Date = moment().toDate();
const x: string = moment().toISOString();

// Get + Set
// $ExpectError
moment().millisecond().seconds();
moment().milliseconds(100).seconds();

// Manipulate
const m1: moment = moment().add(2, 'day');
moment().add({day: 1})
const m2: moment = moment().subtract(1, 's');
moment().subtract({day: 1})
const m: moment = moment.utc();

// Query
moment().isBefore();
moment().isSame();
moment().isAfter();
moment().isSameOrBefore();
moment().isSameOrAfter();
