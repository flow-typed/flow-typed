//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { GridListTile } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const GridListTile1 = require('@material-ui/core/GridListTile').default;
    const GridListTile0 = require('@material-ui/core/GridListTile/GridListTile')
      .default;

    <GridListTile1 />;
    <GridListTile0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <GridListTile
      classes={{
        root: 'str',
        tile: 'str',
        imgFullHeight: 'str',
        imgFullWidth: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <GridListTile
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <GridListTile
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <GridListTile component={() => <i />} cols={1} rows={1} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <GridListTile
      // $ExpectError
      component={['need react component']}
      // $ExpectError
      cols={'need number'}
      // $ExpectError
      rows={'need number'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <GridListTile aria-hidden="true" />;
  });
});
