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
    (bcrypt.hashSync('test', 10): string);
    bcrypt.hashSync('test', '123');

    // $FlowExpectedError[incompatible-call]
    bcrypt.hashSync();
    // $FlowExpectedError[incompatible-call]
    bcrypt.hashSync('test');
    // $FlowExpectedError[incompatible-call]
    bcrypt.hashSync(10);
    // $FlowExpectedError[incompatible-call]
    bcrypt.hashSync('test', true);
    // $FlowExpectedError[extra-arg]
    bcrypt.hashSync('test', 10, 'test');
  });

  it('hash', () => {
    bcrypt.hash('test', 10).then((hashedPassword) => {
      (hashedPassword: string);
      // $FlowExpectedError[incompatible-cast]
      (hashedPassword: number);
    });
    bcrypt.hash('test', 10, (err, hashedPassword) => {
      if (err) {
        (err: Error);
      }

      (hashedPassword: string);
      // $FlowExpectedError[incompatible-cast]
      (hashedPassword: number);
    });
    bcrypt.hash('test', '123');

    // $FlowExpectedError[incompatible-call]
    bcrypt.hash();
    // $FlowExpectedError[incompatible-call]
    bcrypt.hash('test');
    // $FlowExpectedError[incompatible-call]
    bcrypt.hash(10);
    // $FlowExpectedError[incompatible-call]
    bcrypt.hash('test', true);
    // $FlowExpectedError[incompatible-call]
    bcrypt.hash('test', 10, 'test');
  });

  it('compareSync', () => {

  });

  it('compare', () => {

  });

  it('getRounds', () => {

  });
});
