// @flow
import { describe, it } from 'flow-typed-test';
import type { PasswordPolicySchema } from 'password-validator';
import PasswordValidator from 'password-validator';

describe('password-validator', () => {
  it('should work with valid arguments', () => {
    const schema: PasswordPolicySchema = new PasswordValidator();

    // prettier-ignore
    schema
      .is().min(8)
      .is().max(100)
      .has().uppercase()
      .has().lowercase()
      .has().digits()
      .has().symbols()
      .has().not().spaces()
      .has(/(.*[A-Z]){2,}/);

    schema.validate('3L}Ls4[4}qQB>UgN');
  });

  it('should fail with incorrect arguments', () => {
    const schema = new PasswordValidator();

    // $FlowExpectedError
    schema.is('foo');

    // $FlowExpectedError
    schema.has('foo');

    // $FlowExpectedError
    schema.not('foo');

    // $FlowExpectedError
    schema.is().min();
    // $FlowExpectedError
    schema.is().min('1');

    // $FlowExpectedError
    schema.is().max();
    // $FlowExpectedError
    schema.is().max('1');

    // $FlowExpectedError
    schema.has().spaces('1');

    // $FlowExpectedError
    schema.has().symbols('1');

    // $FlowExpectedError
    schema.has().uppercase('1');

    // $FlowExpectedError
    schema.has().letters('1');

    // $FlowExpectedError
    schema.has().digits('1');

    // $FlowExpectedError
    schema.has().oneOf([1, 2, 3]);
  });
});
