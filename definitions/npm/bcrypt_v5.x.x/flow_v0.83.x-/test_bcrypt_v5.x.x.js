// @flow
import { describe, it } from 'flow-typed-test';

const bcrypt = require('bcrypt');

describe('bcrypt', () => {
  it('genSaltSync', () => {
    (bcrypt.genSaltSync(): string);
    bcrypt.genSaltSync(10);
    bcrypt.genSaltSync(10, 'a');

    // $FlowExpectedError[incompatible-cast]
    (bcrypt.genSaltSync(): number);
    // $FlowExpectedError[incompatible-call]
    bcrypt.genSaltSync('test');
    // $FlowExpectedError[incompatible-call]
    bcrypt.genSaltSync('10', 'c');
    // $FlowExpectedError[extra-arg]
    bcrypt.genSaltSync(10, 'b', 'c');
  });

  it('genSalt', () => {
    bcrypt.genSalt().then((salt) => {
      (salt: string);
      // $FlowExpectedError[incompatible-cast]
      (salt: number);
    });
    bcrypt.genSalt(10);
    bcrypt.genSalt(10, 'a');

    bcrypt.genSalt((err, salt) => {
      if (err) {
        (err: Error);
      }
      salt.toLowerCase();
    });
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        (err: Error);
      }
      salt.toLowerCase();
    });
    bcrypt.genSalt(10, 'a', (err, salt) => {
      if (err) {
        (err: Error);
      }
      salt.toLowerCase();
    });

    // $FlowExpectedError[incompatible-call]
    bcrypt.genSalt('test');
    // $FlowExpectedError[incompatible-call]
    bcrypt.genSalt('10', 'c');
  });

  it('hashSync', () => {

  });

  it('hash', () => {

  });

  it('compareSync', () => {

  });

  it('compare', () => {

  });

  it('getRounds', () => {

  });
});
