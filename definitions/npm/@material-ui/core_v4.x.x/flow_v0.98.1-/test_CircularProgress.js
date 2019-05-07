//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { CircularProgress } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const CircularProgress1 = require('@material-ui/core/CircularProgress')
      .default;
    const CircularProgress0 = require('@material-ui/core/CircularProgress/CircularProgress')
      .default;

    <CircularProgress1 />;
    <CircularProgress0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <CircularProgress
      classes={{
        root: 'str',
        static: 'str',
        indeterminate: 'str',
        colorPrimary: 'str',
        colorSecondary: 'str',
        svg: 'str',
        circle: 'str',
        circleStatic: 'str',
        circleIndeterminate: 'str',
        circleDisableShrink: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <CircularProgress
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <CircularProgress
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <CircularProgress
      color={'primary'}
      disableShrink={false}
      size={111}
      thickness={222}
      value={444}
      variant="determinate"
    />;
    <CircularProgress
      color={undefined}
      disableShrink={undefined}
      size={undefined}
      thickness={undefined}
      value={undefined}
      variant={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <CircularProgress
      // $ExpectError
      color={'#fff'}
      // $ExpectError
      disableShrink={111}
      // $ExpectError
      size={false}
      // $ExpectError
      thickness={'need number'}
      // $ExpectError
      value={'need number'}
      // $ExpectError
      variant="ups..."
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <CircularProgress aria-hidden="true" />;
  });
});
