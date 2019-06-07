//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { FormHelperText } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const FormHelperText1 = require('@material-ui/core/FormHelperText').default;
    const FormHelperText0 = require('@material-ui/core/FormHelperText/FormHelperText')
      .default;

    <FormHelperText1 />;
    <FormHelperText0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <FormHelperText
      classes={{
        root: 'str',
        error: 'str',
        disabled: 'str',
        marginDense: 'str',
        focused: 'str',
        filled: 'str',
        contained: 'str',
        required: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <FormHelperText
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <FormHelperText
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <FormHelperText
      disabled={false}
      error={false}
      filled={false}
      focused={false}
      required={false}
      component={'p'}
      margin={'dense'}
      variant={'standard'}
    />;

    <FormHelperText
      disabled={undefined}
      error={undefined}
      filled={undefined}
      focused={undefined}
      required={undefined}
      component={undefined}
      margin={undefined}
      variant={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <FormHelperText
      // $ExpectError
      disabled={'need boolean'}
      // $ExpectError
      error={'need boolean'}
      // $ExpectError
      filled={'need boolean'}
      // $ExpectError
      focused={'need boolean'}
      // $ExpectError
      required={'need boolean'}
      // $ExpectError: need react component
      component={[]}
      // $ExpectError: `__dense` is missing in enum
      margin={'__dense'}
      // $ExpectError: `__standard` is missing in enum
      variant={'__standard'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <FormHelperText aria-hidden="true" />;
  });
});
