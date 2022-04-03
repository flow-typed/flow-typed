// @flow
import { describe, it } from 'flow-typed-test';
import BN from 'bn.js';

describe('BN main usages', () => {
  it('support different constructors', () => {
    new BN(2);
    new BN('2');
    new BN('dead', 'hex');
    new BN('dead', 16);
    new BN('dead', 'hex', 'le');

    new BN([1, 2, 3, 4]);
    new BN([1, 2, 3, 4], 'le');
    new BN(Buffer.from('dead', 'hex'));
    new BN(new BN('dead', 'hex'));
  });

  it('prevents invalid constructors', () => {
    // $FlowExpectedError[incompatible-call]
    new BN({});

    // $FlowExpectedError[incompatible-call]
    new BN('dead', 'dec', 'le');

    // $FlowExpectedError[incompatible-call]
    new BN('dead', 'hex', 'le', {});
  });

  it('handles arithmetics', () => {
    const a = new BN(21);
    const b = new BN(42);

    new BN(21)
      .neg()
      .abs()
      .iadd(a)
      .sub(b)
      .mul(a)
      .sqr()
      .pow(b)
      .div(a)
      .mod(b)
      .addn(21);
  });

  it('handles bit operations', () => {
    const a = new BN(21);
    const b = new BN(42);

    new BN(21)
      .or(a)
      .iand(b)
      .xor(a)
      .setn(2, true)
      .shln(4)
      .ishrn(4, 1, {
        words: [],
        length: 0,
      })
      .maskn(21);
  });

  it('handles reduction', () => {
    const a = new BN(21);

    new BN(21)
      .gcd(a)
      .egcd(a)
      .invm(a);
  });

  it('handles fast reduction', () => {
    BN.red(new BN(21));
    BN.red('p224');
    BN.mont(new BN(21));

    const red = BN.red('p192');

    const a = new BN(128).toRed(red);
    const b = new BN(64).toRed(red);

    a.redAdd(b)
      .redSub(b)
      .redInvm()
      .redNeg();
  });

  it('prevents calling functions with wrong input types', () => {
    const a = new BN(21);

    // $FlowExpectedError[incompatible-call]
    a.mul(2);

    // $FlowExpectedError[incompatible-call]
    a.muln(new BN(2));
  });

  it('handles utilities', () => {
    const a = new BN();

    a.clone().toString();
    a.toString(16);
    a.toArray('le');
    a.zeroBits();
    a.byteLength();
    a.cmp(new BN(2));
    a.toRed(BN.red('p192')).fromRed();
  });

  it('prevents invalid utilities usage', () => {
    const a = new BN();

    // $FlowExpectedError[incompatible-call]
    a.toString('dec');

    // $FlowExpectedError[incompatible-call]
    a.toArray('other');
  });

  it('prevents calling functions that were added in later versions', () => {
    const a = new BN();

    // $FlowExpectedError[prop-missing]
    a.lt(2);

    // $FlowExpectedError[prop-missing]
    a.ltn(new BN(2));

    // $FlowExpectedError[prop-missing]
    a.toArrayLike(Buffer, 'le', 8);

    // $FlowExpectedError[prop-missing]
    a.toBuffer('be', 8);

    // $FlowExpectedError[prop-missing]
    a.toArrayLike(Buffer, 'le', 8);

    // $FlowExpectedError[prop-missing]
    a.umod(new BN(2));

    // $FlowExpectedError[prop-missing]
    a.uand(new BN(2));

    // $FlowExpectedError[prop-missing]
    a.iushrn(new BN(2));
  });
});
