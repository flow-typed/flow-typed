//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { FormGroup } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const FormGroup1 = require('@material-ui/core/FormGroup').default;
    const FormGroup0 = require('@material-ui/core/FormGroup/FormGroup').default;

    <FormGroup1 />;
    <FormGroup0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <FormGroup
      classes={{
        root: 'str',
        row: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <FormGroup
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <FormGroup
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <FormGroup row={false} />;
    <FormGroup row={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <FormGroup
      // $ExpectError: need boolean
      row={'need boolean'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <FormGroup aria-hidden="true" />;
  });
});
