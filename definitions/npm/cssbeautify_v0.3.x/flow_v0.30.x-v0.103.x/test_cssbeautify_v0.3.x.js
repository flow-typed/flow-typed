// @flow

import { describe, it } from 'flow-typed-test';
import cssbeautify from 'cssbeautify';

describe('The `cssbeautify` function', () => {
  it('should accept strings as first parameter', () => {
    cssbeautify('');
    // $FlowExpectedError
    cssbeautify(123);
  });

  it('should accept an `Options` object as second parameter', () => {
    cssbeautify('', {});
    cssbeautify('', { indent: '' });
    cssbeautify('', { openbrace: 'end-of-line' });
    cssbeautify('', { autosemicolon: false });
    // $FlowExpectedError
    cssbeautify('', []);
    // $FlowExpectedError
    cssbeautify('', { test: '' });
  });

  it('should return a string', () => {
    (cssbeautify(''): string);
    // $FlowExpectedError
    (cssbeautify(''): number);
  });
});
