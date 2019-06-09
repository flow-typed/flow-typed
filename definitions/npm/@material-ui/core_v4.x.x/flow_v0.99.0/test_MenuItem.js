//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { MenuItem } from '@material-ui/core';
import type { MenuItemProps } from '@material-ui/core/MenuItem';

describe('imports', () => {
  it('should passes when used properly', () => {
    const MenuItem1 = require('@material-ui/core/MenuItem').default;
    const MenuItem0 = require('@material-ui/core/MenuItem/MenuItem').default;

    <MenuItem1 />;
    <MenuItem0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <MenuItem
      classes={{
        root: 'str',
        gutters: 'str',
        selected: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <MenuItem
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <MenuItem
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('inherited ListItem props', () => {
  it('should passes when used properly', () => {
    <MenuItem
      alignItems={'flex-start'}
      button={false}
      ContainerComponent={'div'}
      ContainerProps={{ 'aria-hidden': true }}
      dense={false}
      disabled={false}
      disableGutters={false}
      divider={false}
      focusVisibleClassName={'str'}
      selected={false}
      component={'li'}
    />;

    <MenuItem
      alignItems={undefined}
      button={undefined}
      ContainerComponent={undefined}
      ContainerProps={undefined}
      dense={undefined}
      disabled={undefined}
      disableGutters={undefined}
      divider={undefined}
      focusVisibleClassName={undefined}
      selected={undefined}
      component={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <MenuItem
      // $ExpectError: `__flex-start` is missing in enum
      alignItems={'__flex-start'}
      // $ExpectError
      button={'need boolean'}
      // $ExpectError: need a react component
      ContainerComponent={[]}
      // $ExpectError: need an object
      ContainerProps={123}
      // $ExpectError
      dense={'need boolean'}
      // $ExpectError
      disabled={'need boolean'}
      // $ExpectError
      disableGutters={'need boolean'}
      // $ExpectError
      divider={'need boolean'}
      // $ExpectError: need a string
      focusVisibleClassName={123}
      // $ExpectError
      selected={'need boolean'}
      // $ExpectError: need a react component
      component={[]}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <MenuItem aria-hidden="true" />;
  });
});

describe('exported props', () => {
  it('should not be any', () => {
    declare var testProps: MenuItemProps;

    (testProps.dense: ?boolean);

    // $ExpectError: check any
    (testProps.dense: ?number);
  });
});
