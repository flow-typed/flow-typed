//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Grid } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Grid1 = require('@material-ui/core/Grid').default;
    const Grid0 = require('@material-ui/core/Grid/Grid').default;

    <Grid1 />;
    <Grid0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Grid
      classes={{
        container: 'str',
        item: 'str',
        'direction-xs-column': 'str',
        'direction-xs-column-reverse': 'str',
        'direction-xs-row-reverse': 'str',
        'wrap-xs-nowrap': 'str',
        'wrap-xs-wrap-reverse': 'str',
        'align-items-xs-center': 'str',
        'align-items-xs-flex-start': 'str',
        'align-items-xs-flex-end': 'str',
        'align-items-xs-baseline': 'str',
        'align-content-xs-center': 'str',
        'align-content-xs-flex-start': 'str',
        'align-content-xs-flex-end': 'str',
        'align-content-xs-space-between': 'str',
        'align-content-xs-space-around': 'str',
        'justify-xs-center': 'str',
        'justify-xs-flex-end': 'str',
        'justify-xs-space-between': 'str',
        'justify-xs-space-around': 'str',
        'spacing-xs-1': 'str',
        'spacing-xs-2': 'str',
        'spacing-xs-3': 'str',
        'spacing-xs-4': 'str',
        'spacing-xs-5': 'str',
        'spacing-xs-6': 'str',
        'spacing-xs-7': 'str',
        'spacing-xs-8': 'str',
        'spacing-xs-9': 'str',
        'spacing-xs-10': 'str',
        'grid-xs-auto': 'str',
        'grid-xs-true': 'str',
        'grid-xs-1': 'str',
        'grid-xs-2': 'str',
        'grid-xs-3': 'str',
        'grid-xs-4': 'str',
        'grid-xs-5': 'str',
        'grid-xs-6': 'str',
        'grid-xs-7': 'str',
        'grid-xs-8': 'str',
        'grid-xs-9': 'str',
        'grid-xs-10': 'str',
        'grid-xs-11': 'str',
        'grid-xs-12': 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Grid
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Grid
      classes={{
        // $ExpectError: need string value
        container: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Grid
      alignContent={'stretch'}
      alignItems={'flex-end'}
      container={false}
      direction={'row-reverse'}
      item={false}
      justify={'space-evenly'}
      spacing={10}
      wrap={'wrap-reverse'}
      zeroMinWidth={false}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Grid
      // $ExpectError: `__stretch` is missing in enum
      alignContent={'__stretch'}
      // $ExpectError: `__flex-end` is missing in enum
      alignItems={'__flex-end'}
      // $ExpectError
      container={'need string'}
      // $ExpectError: `__row-reverse` is missing in enum
      direction={'__row-reverse'}
      // $ExpectError
      item={'need string'}
      // $ExpectError: `__space-evenly` is missing in enum
      justify={'__space-evenly'}
      // $ExpectError: `11` is missing in enum
      spacing={11}
      // $ExpectError: `__wrap-reverse` is missing in enum
      wrap={'__wrap-reverse'}
      // $ExpectError
      zeroMinWidth={'need string'}
    />;
  });
});

describe('breakpoint props', () => {
  it('should passes when used properly', () => {
    <Grid xs={false} sm={'auto'} md={1} lg={12} xl={6} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Grid
      // $ExpectError: `murAmur` is missing in enum
      xs={'murAmur'}
      // $ExpectError: `__auto` is missing in enum
      sm={'__auto'}
      // $ExpectError: `0` is missing in enum
      md={0}
      // $ExpectError: `13` is missing in enum
      lg={13}
      // $ExpectError: `69` is missing in enum
      xl={69}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Grid aria-hidden="true" />;
  });
});
