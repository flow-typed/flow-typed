//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { NoSsr } from '@material-ui/core';

const requiredProps = {
  children: <i />,
};

describe('imports', () => {
  it('should passes when used properly', () => {
    const NoSsr1 = require('@material-ui/core/NoSsr').default;
    const NoSsr0 = require('@material-ui/core/NoSsr/NoSsr').default;

    <NoSsr1 {...requiredProps} />;
    <NoSsr0 {...requiredProps} />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <NoSsr defer={false} fallback={<i />}>
      <i />
    </NoSsr>;

    <NoSsr defer={undefined} fallback={undefined}>
      <i />
    </NoSsr>;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: `children` is required prop
    <NoSsr />;

    <NoSsr
      // $ExpectError
      defer={'need boolean'}
      // $ExpectError: need react node
      fallback={{}}
      {...requiredProps}
    />;

    // $ExpectError: `aria-hidden` is missing prop
    <NoSsr aria-hidden="true" {...requiredProps} />;
  });
});
