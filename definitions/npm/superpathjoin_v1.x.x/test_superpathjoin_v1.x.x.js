// @flow

import { describe, it } from 'flow-typed-test';
import { superpathjoin } from 'superpathjoin';

describe('The `superpathjoin` function', () => {
  it('default export', () => {
    (superpathjoin: Function);
    (superpathjoin(): string);
  });

  it('should accept strings', () => {
    superpathjoin('');
    superpathjoin('foo');
    superpathjoin('foo', 'bar', 'baz');
  });

  it('should accept strings (variadic)', () => {
    superpathjoin(true && 'foo');
    superpathjoin(false && 'foo');
  });

  it('should accept numbers', () => {
    superpathjoin(1);
    superpathjoin(1, 2, 3);
  });

  it('should accept numbers (variadic)', () => {
    superpathjoin(true && 42);
    superpathjoin(false && 42);
  });

  it('should accept booleans', () => {
    superpathjoin(false);
    superpathjoin('foo', 'bar', 'baz', true);
  });

  it('should accept null values', () => {
    superpathjoin(null);
    superpathjoin('foo', null, 'bar', 'baz', true);
  });

  it('should accept undefined values', () => {
    let dummy;

    superpathjoin(undefined);
    superpathjoin(dummy);
  });

  it('should not accept objects', () => {
    // $ExpectError
    superpathjoin({});
    // $ExpectError
    superpathjoin('foo', {}, 'bar');
  });

  it('should not accept arrays', () => {
    // $ExpectError
    superpathjoin([]);
    // $ExpectError
    superpathjoin('foo', [], 'bar');
  });
});
