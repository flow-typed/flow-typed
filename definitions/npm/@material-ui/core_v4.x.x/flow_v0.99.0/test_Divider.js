//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Divider } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Divider1 = require('@material-ui/core/Divider').default;
    const Divider0 = require('@material-ui/core/Divider/Divider').default;

    <Divider1 />;
    <Divider0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Divider
      classes={{
        root: 'str',
        absolute: 'str',
        inset: 'str',
        light: 'str',
        middle: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Divider
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Divider
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Divider absolute={false} light={false} variant={'fullWidth'} />;

    <Divider absolute={undefined} light={undefined} variant={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Divider
      // $ExpectError
      absolute={'need boolean'}
      // $ExpectError
      light={'need boolean'}
      // $ExpectError: `fullWidth__` is missing in enum
      variant={'fullWidth__'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Divider aria-hidden="true" />;
  });
});
