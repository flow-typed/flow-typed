// @flow

import { describe, it } from 'flow-typed-test';
import title, { type Options } from '@zeit/title';

describe('The `title` function', () => {
  it('should accept strings as first parameter', () => {
    title('');
    // $ExpectError
    title(123);
  });

  it('should accept an `Options` object as second parameter', () => {
    title('', { specials: [''] });
    // $ExpectError
    title('', {});
    // $ExpectError
    title('', []);
    // $ExpectError
    title('', { specials: '' });
  });

  it('should enforce immutability for its `Options` parameter', () => {
    let options: Options = { specials: [''] };
    title('', options);
    // $ExpectError
    options.specials.push('');
    title('', options);

    let newOptions = { specials: [...options.specials, ''] };
    title('', newOptions);
  });
});
