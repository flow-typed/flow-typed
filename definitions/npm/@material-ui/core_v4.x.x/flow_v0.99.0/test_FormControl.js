//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { FormControl } from '@material-ui/core';
import type { FormControlProps } from '@material-ui/core/FormControl';

describe('imports', () => {
  it('should passes when used properly', () => {
    const FormControl1 = require('@material-ui/core/FormControl').default;
    const FormControl0 = require('@material-ui/core/FormControl/FormControl')
      .default;

    <FormControl1 />;
    <FormControl0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <FormControl
      classes={{
        root: 'str',
        marginNormal: 'str',
        marginDense: 'str',
        fullWidth: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <FormControl
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <FormControl
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <FormControl
      disabled={false}
      error={false}
      fullWidth={false}
      margin={'dense'}
      onBlur={() => {}}
      onFocus={() => {}}
      required={false}
      variant={'standard'}
    />;

    <FormControl onBlur={async () => {}} onFocus={async () => {}} />;

    <FormControl
      disabled={undefined}
      error={undefined}
      fullWidth={undefined}
      margin={undefined}
      onBlur={undefined}
      onFocus={undefined}
      required={undefined}
      variant={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <FormControl
      // $ExpectError
      disabled={'need boolean'}
      // $ExpectError
      error={'need boolean'}
      // $ExpectError
      fullWidth={'need boolean'}
      // $ExpectError: `__dense` is missing in enum
      margin={'__dense'}
      // $ExpectError: need function
      onBlur={'need function'}
      // $ExpectError: need function
      onFocus={'need function'}
      // $ExpectError
      required={'need boolean'}
      // $ExpectError: `__standard` is missing in enum
      variant={'__standard'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <FormControl aria-hidden="true" />;
  });
});

describe('exported props', () => {
  it('should not be any', () => {
    declare var testProps: FormControlProps;

    (testProps.required: ?boolean);

    // $ExpectError: check any
    (testProps.required: ?number);
  });
});
