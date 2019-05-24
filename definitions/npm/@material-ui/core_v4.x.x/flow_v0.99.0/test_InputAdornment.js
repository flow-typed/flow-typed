//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { InputAdornment } from '@material-ui/core';

const requiredProps = { position: 'start' };

describe('imports', () => {
  it('should passes when used properly', () => {
    const InputAdornment1 = require('@material-ui/core/InputAdornment').default;
    const InputAdornment0 = require('@material-ui/core/InputAdornment/InputAdornment')
      .default;

    <InputAdornment1 {...requiredProps} />;
    <InputAdornment0 {...requiredProps} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <InputAdornment
      classes={{
        root: 'str',
        filled: 'str',
        positionStart: 'str',
        positionEnd: 'str',
        disablePointerEvents: 'str',
      }}
      {...requiredProps}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <InputAdornment
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
      {...requiredProps}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <InputAdornment
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
      {...requiredProps}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <InputAdornment
      disablePointerEvents={false}
      disableTypography={false}
      position={'start'}
      variant={'standard'}
      component={'div'}
    />;
    <InputAdornment component={() => <i />} position={'end'} />;
    <InputAdornment
      position={'end'}
      disablePointerEvents={undefined}
      disableTypography={undefined}
      variant={undefined}
      component={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: `position` is required props
    <InputAdornment />;

    <InputAdornment
      // $ExpectError
      disablePointerEvents={'need boolean'}
      // $ExpectError
      disableTypography={'need boolean'}
      // $ExpectError: `__start` is missing in enum
      position={'__start'}
      // $ExpectError: `__standard` is missing in enum
      variant={'__standard'}
      // $ExpectError: need react component
      component={{}}
      {...requiredProps}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <InputAdornment aria-hidden="true" {...requiredProps} />;
  });
});
