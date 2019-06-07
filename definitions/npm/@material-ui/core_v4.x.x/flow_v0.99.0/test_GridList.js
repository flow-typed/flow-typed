//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { GridList } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const GridList1 = require('@material-ui/core/GridList').default;
    const GridList0 = require('@material-ui/core/GridList/GridList').default;

    <GridList1 />;
    <GridList0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <GridList
      classes={{
        root: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <GridList
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <GridList
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <GridList cellHeight={'auto'} cols={1} spacing={2} />;

    <GridList cellHeight={1} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <GridList
      // $ExpectError
      cellHeight={'need number'}
      // $ExpectError
      cols={'need number'}
      // $ExpectError
      spacing={'need number'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <GridList aria-hidden="true" />;
  });
});
