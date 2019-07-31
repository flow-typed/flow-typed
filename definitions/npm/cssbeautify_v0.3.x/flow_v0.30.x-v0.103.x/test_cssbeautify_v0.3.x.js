// @flow

import { describe, it } from 'flow-typed-test';
import cssbeautify from 'cssbeautify';

describe('The `cssbeautify` function', () => {
  it('should accept strings as first parameter', () => {
    cssbeautify('');
    // $ExpectError
    cssbeautify(123);
  });

  it('should accept an `Options` object as second parameter', () => {
    cssbeautify('', {});
    cssbeautify('', { indent: '' });
    cssbeautify('', { openbrace: 'end-of-line' });
    cssbeautify('', { autosemicolon: false });
    // $ExpectError
    cssbeautify('', []);
    // $ExpectError
    cssbeautify('', { test: '' });
  });

  it('should return a string', () => {
    (cssbeautify(''): string);
    // $ExpectError
    (cssbeautify(''): number);
  });
});
