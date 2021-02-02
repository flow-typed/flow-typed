import camelCase from 'camelcase';

const result: string = camelCase('foo-bar');
//=> 'fooBar'

// $FlowExpectedError
camelCase(42);

// $FlowExpectedError
(camelCase('foo-bar'): number);
