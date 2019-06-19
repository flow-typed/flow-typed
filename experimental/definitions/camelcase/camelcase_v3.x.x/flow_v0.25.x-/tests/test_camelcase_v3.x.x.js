import camelCase from 'camelcase';

const result: string = camelCase('foo-bar');
//=> 'fooBar'

// $ExpectError
camelCase(42);

// $ExpectError
(camelCase('foo-bar'): number);
