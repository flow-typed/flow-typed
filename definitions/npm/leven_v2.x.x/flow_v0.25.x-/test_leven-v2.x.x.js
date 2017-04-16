// @flow

import leven from 'leven';

const distanceA: number = leven('foo', 'boo');

// $ExpectError leven returns a number not a string
const distanceB: string = leven('foo', 'boo');

// $ExpectError too few arguments
const distanceC: number = leven();

// $ExpectError too few arguments
const distanceD: number = leven('foo');

// $ExpectError leven expects two strings, not a number
const distanceE: number = leven(1, 'boo');

// $ExpectError leven expects two strings, not a number
const distanceF: number = leven('foo', 1);
