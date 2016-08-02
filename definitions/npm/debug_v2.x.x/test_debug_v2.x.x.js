// @flow

import debug from 'debug';

const test = debug('test');

test('Hello %s', 'World');

// $ExpectError
debug();
