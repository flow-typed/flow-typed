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

  it('handles arithmetics', () => {
    const a = new BN(21);
    const b = new BN(42);

    new BN(21)
      .neg()
      .abs()
      .iadd(a)
      .sub(b)
      .mul(a)
      .muln(20)
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
      .maskn(21)
      .ishrn(4, 1, {
        words: [],
        length: 0,
      })
      .ushln(128);
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

  it('handles utilities', () => {
    const a = new BN();

    a.clone().toString();
    a.toString(16);
    a.toArray('le', 8);
    a.zeroBits();
    a.byteLength();
    a.cmp(new BN(2));
    a.toRed(BN.red('p192')).fromRed();
  });
});
