// @flow
import { describe, it } from 'flow-typed-test';

const equal = require('fast-deep-equal');

describe('fast-deep-equal', () => {
  it('with import', () => {
    (equal({foo: 'bar'}, {foo: 'bar'}): boolean);
    (equal('test', 123): boolean);
    (equal(undefined, 'test'): boolean);
    equal();

    // $FlowExpectedError[incompatible-cast] always returns boolean
    (equal(): string);
  });
});
