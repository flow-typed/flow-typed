// @flow
import { describe, it } from 'flow-typed-test';
import PasswordValidator from 'password-validator';

describe('password-validator', () => {
  it('should work with valid arguments', () => {
    const schema = new PasswordValidator();

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

    (schema.validate('3L}Ls4[4}qQB>UgN'): boolean);
    // $FlowExpectedError[incompatible-cast] if passing options it could be array
    const valid = (schema.validate('3L}Ls4[4}qQB>UgN', {}): boolean);

    if (typeof valid === 'boolean') {
      (valid: boolean)
    } else {
      valid[0].test.toLowerCase();
    }
  });

  it('should fail with incorrect arguments', () => {
    const schema = new PasswordValidator();

    // $FlowExpectedError[extra-arg]
    new PasswordValidator('extra-arg');

    // $FlowExpectedError[extra-arg]
    schema.is('foo');

    // $FlowExpectedError[incompatible-call]
    schema.has('foo');
    // $FlowExpectedError[extra-arg]
    schema.has(/.*/, 'foo', 'bar');

    // $FlowExpectedError[incompatible-call]
    schema.not('foo');
    // $FlowExpectedError[extra-arg]
    schema.not(/.*/, 'foo', 'bar');

    // $FlowExpectedError[incompatible-call]
    schema.is().min();
    // $FlowExpectedError[incompatible-call]
    schema.is().min('1');
    // $FlowExpectedError[extra-arg]
    schema.is().min(1, 'foo', 'bar');

    // $FlowExpectedError[incompatible-call]
    schema.is().max();
    // $FlowExpectedError[incompatible-call]
    schema.is().max('1');
    // $FlowExpectedError[extra-arg]
    schema.is().max(1, 'foo', 'bar');

    // $FlowExpectedError[incompatible-call]
    schema.has().spaces('1');
    // $FlowExpectedError[extra-arg]
    schema.has().spaces(1, 'foo', 'bar');

    // $FlowExpectedError[incompatible-call]
    schema.has().symbols('1');
    // $FlowExpectedError[extra-arg]
    schema.has().symbols(1, 'foo', 'bar');

    // $FlowExpectedError[incompatible-call]
    schema.has().uppercase('1');
    // $FlowExpectedError[extra-arg]
    schema.has().uppercase(1, 'foo', 'bar');

    // $FlowExpectedError[incompatible-call]
    schema.has().letters('1');
    // $FlowExpectedError[extra-arg]
    schema.has().letters(1, 'foo', 'bar');

    // $FlowExpectedError[incompatible-call]
    schema.has().digits('1');
    // $FlowExpectedError[extra-arg]
    schema.has().digits(1, 'foo', 'bar');

    // $FlowExpectedError[incompatible-call]
    schema.has().oneOf([1, 2, 3]);
    // $FlowExpectedError[extra-arg]
    schema.has().oneOf(['foo', 'bar', 'baz'], 'foo', 'bar');
  });
});
