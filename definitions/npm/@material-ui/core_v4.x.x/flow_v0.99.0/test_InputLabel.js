//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { FormLabel, InputLabel } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const InputLabel1 = require('@material-ui/core/InputLabel').default;
    const InputLabel0 = require('@material-ui/core/InputLabel/InputLabel')
      .default;

    <InputLabel1 />;
    <InputLabel0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <InputLabel
      classes={{
        root: 'str',
        focused: 'str',
        disabled: 'str',
        error: 'str',
        required: 'str',
        asterisk: 'str',
        formControl: 'str',
        marginDense: 'str',
        shrink: 'str',
        animated: 'str',
        filled: 'str',
        outlined: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <InputLabel
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <InputLabel
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <InputLabel disableAnimation={false} shrink={false} variant={'standard'} />;

    <InputLabel
      disableAnimation={undefined}
      shrink={undefined}
      variant={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <InputLabel
      // $ExpectError
      disableAnimation={'heed boolean'}
      // $ExpectError
      shrink={'heed boolean'}
      // $ExpectError: `__outlined` is missing in enum
      variant={'__outlined'}
    />;
  });
});

describe('inherited FormLabel props', () => {
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
    <InputLabel aria-hidden="true" />;
  });
});
