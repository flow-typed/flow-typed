//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Paper } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Paper1 = require('@material-ui/core/Paper').default;
    const Paper0 = require('@material-ui/core/Paper/Paper').default;

    <Paper1 />;
    <Paper0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Paper
      classes={{
        root: 'custom-class-name',
        rounded: 'custom-class-name',
        elevation0: 'custom-class-name',
        elevation1: 'custom-class-name',
        elevation2: 'custom-class-name',
        elevation3: 'custom-class-name',
        elevation4: 'custom-class-name',
        elevation5: 'custom-class-name',
        elevation6: 'custom-class-name',
        elevation7: 'custom-class-name',
        elevation8: 'custom-class-name',
        elevation9: 'custom-class-name',
        elevation10: 'custom-class-name',
        elevation11: 'custom-class-name',
        elevation12: 'custom-class-name',
        elevation13: 'custom-class-name',
        elevation14: 'custom-class-name',
        elevation15: 'custom-class-name',
        elevation16: 'custom-class-name',
        elevation17: 'custom-class-name',
        elevation18: 'custom-class-name',
        elevation19: 'custom-class-name',
        elevation20: 'custom-class-name',
        elevation21: 'custom-class-name',
        elevation22: 'custom-class-name',
        elevation23: 'custom-class-name',
        elevation24: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Paper
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Paper
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Paper elevation={1} square={false} />;
    <Paper elevation={undefined} square={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: need number
    <Paper elevation={'1'} />;
    // $ExpectError: need boolean
    <Paper square={'true'} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Paper aria-hidden="true" />;
  });
});
