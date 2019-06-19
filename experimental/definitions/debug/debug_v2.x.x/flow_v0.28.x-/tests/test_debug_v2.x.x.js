// @flow

import debug from 'debug';

const test = debug('test');

test('Hello %s', 'World');
test({a: 1, b: 2});
test(new Error('error'));

// $ExpectError
debug();
