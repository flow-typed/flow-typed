// @flow
import { describe, it } from 'flow-typed-test';

const validator = require('email-validator');

describe('email-validator', () => {
  it('validates', () => {
    (validator.validate('test'): boolean);

    // $FlowExpectedError[incompatible-cast]
    (validator.validate('test'): string);
    // $FlowExpectedError[incompatible-call]
    validator.validate(123);
  });

  it('has only one property', () => {
    // $FlowExpectedError[prop-missing]
    validator.blah();
  });
});
