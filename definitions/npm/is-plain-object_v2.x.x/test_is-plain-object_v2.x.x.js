import isPlainObject from 'is-plain-object';

const a: boolean = isPlainObject({});
//=> true

const b: boolean = isPlainObject('test');
//=> false

// $ExpectError
(isPlainObject({}): string);
