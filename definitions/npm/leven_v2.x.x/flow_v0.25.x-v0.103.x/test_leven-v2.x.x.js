// @flow

import leven from 'leven';

const distanceA: number = leven('foo', 'boo');

// $FlowExpectedError leven returns a number not a string
const distanceB: string = leven('foo', 'boo');

// $FlowExpectedError too few arguments
const distanceC: number = leven();

// $FlowExpectedError too few arguments
const distanceD: number = leven('foo');

// $FlowExpectedError leven expects two strings, not a number
const distanceE: number = leven(1, 'boo');

// $FlowExpectedError leven expects two strings, not a number
const distanceF: number = leven('foo', 1);
