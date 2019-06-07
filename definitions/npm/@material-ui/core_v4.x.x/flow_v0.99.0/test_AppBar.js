//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { AppBar } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const AppBar1 = require('@material-ui/core/AppBar').default;
    const AppBar0 = require('@material-ui/core/AppBar/AppBar').default;

    <AppBar1 />;
    <AppBar0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <AppBar
      classes={{
        root: 'str',
        positionFixed: 'str',
        positionAbsolute: 'str',
        positionSticky: 'str',
        positionStatic: 'str',
        positionRelative: 'str',
        colorDefault: 'str',
        colorPrimary: 'str',
        colorSecondary: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <AppBar
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <AppBar
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <AppBar color={'primary'} position={'sticky'} />;
    <AppBar color={undefined} position={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError
    <AppBar color={'colorDominator'} />;
    // $ExpectError
    <AppBar position={'hard'} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <AppBar aria-hidden="true" />;
  });
});
