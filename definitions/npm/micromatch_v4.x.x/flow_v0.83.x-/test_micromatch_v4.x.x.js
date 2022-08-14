// @flow
import { describe, test } from 'flow-typed-test';

const micromatch = require('micromatch');

describe('micromatch', () => {
  test('main', () => {
    (micromatch(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*']): Array<string>);
  });
});
