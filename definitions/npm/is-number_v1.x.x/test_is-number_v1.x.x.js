import isNumber from 'is-number';

const a: boolean = isNumber(4);
//=> true

const b: boolean = isNumber(Infinity);
//=> false

// $ExpectError
(isNumber(4): string);
