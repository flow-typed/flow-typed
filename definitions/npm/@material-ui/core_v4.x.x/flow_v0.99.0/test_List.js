//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { List } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const List1 = require('@material-ui/core/List').default;
    const List0 = require('@material-ui/core/List/List').default;

    <List1 />;
    <List0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <List
      classes={{
        root: 'str',
        padding: 'str',
        dense: 'str',
        subheader: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <List
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <List
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <List
      component={'a'}
      dense={false}
      disablePadding={false}
      subheader={<i />}
    />;

    <List
      component={undefined}
      dense={undefined}
      disablePadding={undefined}
      subheader={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <List
      // $ExpectError: need a react component
      component={123}
      // $ExpectError
      dense={'need boolean'}
      // $ExpectError
      disablePadding={'need boolean'}
      // $ExpectError: need a react element, not array
      subheader={[<i />]}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <List aria-hidden="true" />;
  });
});
