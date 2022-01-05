// @flow
import { describe, it } from 'flow-typed-test';

const validator = require('email-validator');

describe('email-validator', () => {
  it('validates', () => {
    (validator('test'): boolean);

    // $FlowExpectedError[incompatible-cast]
    (validator('test'): string);
    // $FlowExpectedError[incompatible-call]
    validator(123);
  });
});
