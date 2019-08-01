// @flow

import { describe, it } from 'flow-typed-test';
import clsx from 'clsx';

describe('The `clsx` function', () => {
  it('clsx', () => {
    (clsx: Function);
    (clsx(): string);
  });

  it('strings', () => {
    clsx('');
    clsx('foo');
    clsx(true && 'foo');
    clsx(false && 'foo');
  });

  it('strings (variadic)', () => {
    clsx('');
    clsx('foo');
    clsx(true && 'foo');
    clsx(false && 'foo');
  });

  it('objects', () => {
    clsx({});
    clsx({ foo: true });
    clsx({ foo: true, bar: false });
    clsx({ foo: 'hiya', bar: 1 });
    clsx({ foo: 1, bar: 0, baz: 1 });
    clsx({ '-foo': 1, '--bar': 1 });
  });

  it('objects (variadic)', () => {
    clsx({}, {});
    clsx({ foo: 1 }, { bar: 2 });
    clsx({ foo: 1 }, null, { baz: 1, bat: 0 });
    clsx({ foo: 1 }, {}, {}, { bar: 'a' }, { baz: null, bat: Infinity });
  });

  it('arrays', () => {
    clsx([]);
    clsx(['foo']);
    clsx(['foo', 'bar']);
    clsx(['foo', 0 && 'bar', 1 && 'baz']);
  });

  it('arrays (nested)', () => {
    clsx([[[]]]);
    clsx([[['foo']]]);
    clsx([true, [['foo']]]);
    clsx(['foo', ['bar', ['', [['baz']]]]]);
  });

  it('arrays (variadic)', () => {
    clsx([], []);
    clsx(['foo'], ['bar']);
    clsx(['foo'], null, ['baz', ''], true, '', []);
  });
});

describe('compatibility check with `classnames`', () => {
  it('keeps object keys with truthy values', () => {
    clsx({ a: true, b: false, c: 0, d: null, e: undefined, f: 1 });
  });

  it('joins arrays of class names and ignore falsy values', () => {
    clsx('a', 0, null, undefined, true, 1, 'b');
  });

  it('supports heterogenous arguments', () => {
    clsx({ a: true }, 'b', 0);
  });

  it('should be trimmed', () => {
    clsx('', 'b', {}, '');
  });

  it('returns an empty string for an empty configuration', () => {
    clsx({});
  });

  it('supports an array of class names', () => {
    clsx(['a', 'b']);
  });

  it('joins array arguments with string arguments', () => {
    clsx(['a', 'b'], 'c');
    clsx('c', ['a', 'b']);
  });

  it('handles multiple array arguments', () => {
    clsx(['a', 'b'], ['c', 'd']);
  });

  it('handles arrays that include falsy and true values', () => {
    clsx(['a', 0, null, undefined, false, true, 'b']);
  });

  it('handles arrays that include arrays', () => {
    clsx(['a', ['b', 'c']]);
  });

  it('handles arrays that include objects', () => {
    clsx(['a', { b: true, c: false }]);
  });

  it('handles deep array recursion', () => {
    clsx(['a', ['b', ['c', { d: true }]]]);
  });

  it('handles arrays that are empty', () => {
    clsx('a', []);
  });

  it('handles nested arrays that have empty nested arrays', () => {
    clsx('a', [[]]);
  });

  it('handles all types of truthy and falsy property values as expected', () => {
    clsx({
      // falsy:
      null: null,
      emptyString: '',
      noNumber: NaN,
      zero: 0,
      negativeZero: -0,
      false: false,
      undefined: undefined,

      // truthy (literally anything else):
      nonEmptyString: 'foobar',
      whitespace: ' ',
      function: Object.prototype.toString,
      emptyObject: {},
      nonEmptyObject: { a: 1, b: 2 },
      emptyList: [],
      nonEmptyList: [1, 2, 3],
      greaterZero: 1,
    });
  });
});
