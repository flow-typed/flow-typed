// @flow
import { describe, test } from 'flow-typed-test';

const micromatch = require('micromatch');

describe('micromatch', () => {
  test('main', () => {
    (micromatch(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*']): Array<string>);
    micromatch(['foo', 'bar', 'baz', 'qux'], 'test');

    // $FlowExpectedError[incompatible-cast]
    (micromatch(['foo', 'bar', 'baz', 'qux'], ['f*', 'b*']): string);
    // $FlowExpectedError[incompatible-call]
    micromatch('test', 'test');
    // $FlowExpectedError[incompatible-call]
    micromatch(['foo', 'bar', 'baz', 'qux']);
    // $FlowExpectedError[incompatible-call]
    micromatch(['foo', 'bar', 'baz', 'qux'], 1);
  });

  test('options', () => {

  });
});
