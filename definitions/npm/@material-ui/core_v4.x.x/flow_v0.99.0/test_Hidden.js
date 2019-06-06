//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Hidden } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Hidden1 = require('@material-ui/core/Hidden').default;
    const Hidden0 = require('@material-ui/core/Hidden/Hidden').default;

    <Hidden1 />;
    <Hidden0 />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Hidden
      implementation={'css'}
      only={['sm', 'lg']}
      initialWidth={'xl'}
      lgDown={false}
      lgUp={false}
      mdDown={false}
      mdUp={false}
      smDown={false}
      smUp={false}
      xlDown={false}
      xlUp={false}
      xsDown={false}
      xsUp={false}
    />;

    <Hidden implementation={'js'} only={'lg'} />;

    <Hidden
      implementation={undefined}
      only={undefined}
      initialWidth={undefined}
      lgDown={undefined}
      lgUp={undefined}
      mdDown={undefined}
      mdUp={undefined}
      smDown={undefined}
      smUp={undefined}
      xlDown={undefined}
      xlUp={undefined}
      xsDown={undefined}
      xsUp={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Hidden
      // $ExpectError: `__ups` is missing in enum
      implementation={'__ups'}
      // $ExpectError: `__ups` is missing in enum
      only={'__ups'}
      // $ExpectError: `__ups` is missing in enum
      initialWidth={'__ups'}
      // $ExpectError
      lgDown={'need boolean'}
      // $ExpectError
      lgUp={'need boolean'}
      // $ExpectError
      mdDown={'need boolean'}
      // $ExpectError
      mdUp={'need boolean'}
      // $ExpectError
      smDown={'need boolean'}
      // $ExpectError
      smUp={'need boolean'}
      // $ExpectError
      xlDown={'need boolean'}
      // $ExpectError
      xlUp={'need boolean'}
      // $ExpectError
      xsDown={'need boolean'}
      // $ExpectError
      xsUp={'need boolean'}
    />;

    // $ExpectError: `aria-hidden` is missing prop
    <Hidden aria-hidden="true" />;
  });
});
