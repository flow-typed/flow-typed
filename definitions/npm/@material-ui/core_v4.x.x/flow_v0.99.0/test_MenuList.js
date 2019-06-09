//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { MenuList } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const MenuList1 = require('@material-ui/core/MenuList').default;
    const MenuList0 = require('@material-ui/core/MenuList/MenuList').default;

    <MenuList1 />;
    <MenuList0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <MenuList
      classes={{
        root: 'str',
        padding: 'str',
        dense: 'str',
        subheader: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <MenuList
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <MenuList
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <MenuList disableListWrap={false} onKeyDown={async () => {}} />;

    <MenuList disableListWrap={undefined} onKeyDown={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <MenuList
      // $ExpectError
      disableListWrap={'need boolean'}
      // $ExpectError: need a function
      onKeyDown={123}
    />;
  });
});

describe('inherited List props', () => {
  it('should passes when used properly', () => {
    <MenuList dense={false} disablePadding={false} subheader={<i />} />;

    <MenuList
      dense={undefined}
      disablePadding={undefined}
      subheader={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <MenuList
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
    <MenuList aria-hidden="true" />;
  });
});
