//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Icon } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Icon1 = require('@material-ui/core/Icon').default;
    const Icon0 = require('@material-ui/core/Icon/Icon').default;

    <Icon1 />;
    <Icon0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Icon
      classes={{
        root: 'str',
        colorSecondary: 'str',
        colorAction: 'str',
        colorDisabled: 'str',
        colorError: 'str',
        colorPrimary: 'str',
        fontSizeInherit: 'str',
        fontSizeSmall: 'str',
        fontSizeLarge: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Icon
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Icon
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Icon fontSize={'small'} color={'disabled'} component={'span'} />;
    <Icon fontSize={'inherit'} color={'primary'} component={() => <i />} />;
    <Icon fontSize={undefined} color={undefined} component={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Icon
      // $ExpectError: `__small` is missing in enum
      fontSize={'__small'}
      // $ExpectError: `__disabled` is missing in enum
      color={'__disabled'}
      // $ExpectError: need react component
      component={{}}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Icon aria-hidden="true" />;
  });
});
