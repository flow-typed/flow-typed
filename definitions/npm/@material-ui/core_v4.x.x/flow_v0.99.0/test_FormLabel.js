//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { FormLabel } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const FormLabel1 = require('@material-ui/core/FormLabel').default;
    const FormLabel0 = require('@material-ui/core/FormLabel/FormLabel').default;

    <FormLabel1 />;
    <FormLabel0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <FormLabel
      classes={{
        root: 'str',
        focused: 'str',
        disabled: 'str',
        error: 'str',
        filled: 'str',
        required: 'str',
        asterisk: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <FormLabel
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <FormLabel
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <FormLabel
      disabled={false}
      error={false}
      filled={false}
      focused={false}
      required={false}
    />;

    <FormLabel
      disabled={undefined}
      error={undefined}
      filled={undefined}
      focused={undefined}
      required={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <FormLabel
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
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <FormLabel aria-hidden="true" />;
  });
});
