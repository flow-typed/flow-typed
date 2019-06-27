//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { ListItem } from '@material-ui/core';
import type { ListItemProps } from '@material-ui/core/ListItem';

describe('imports', () => {
  it('should passes when used properly', () => {
    const ListItem1 = require('@material-ui/core/ListItem').default;
    const ListItem0 = require('@material-ui/core/ListItem/ListItem').default;

    <ListItem1 />;
    <ListItem0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <ListItem
      classes={{
        root: 'str',
        container: 'str',
        focusVisible: 'str',
        default: 'str',
        dense: 'str',
        disabled: 'str',
        divider: 'str',
        gutters: 'str',
        button: 'str',
        secondaryAction: 'str',
        selected: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <ListItem
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <ListItem
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <ListItem
      alignItems={'flex-start'}
      button={false}
      autoFocus={false}
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

    <ListItem
      autoFocus={undefined}
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
    <ListItem
      // $ExpectError: `__flex-start` is missing in enum
      alignItems={'__flex-start'}
      // $ExpectError
      autoFocus={'need boolean'}
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
    <ListItem aria-hidden="true" />;
  });
});

describe('exported props', () => {
  it('should not be any', () => {
    declare var testProps: ListItemProps;

    (testProps.button: ?boolean);

    // $ExpectError: check any
    (testProps.button: ?number);
  });
});
