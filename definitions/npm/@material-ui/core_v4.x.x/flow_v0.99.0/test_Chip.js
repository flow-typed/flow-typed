//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Chip } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Chip1 = require('@material-ui/core/Chip').default;
    const Chip0 = require('@material-ui/core/Chip/Chip').default;

    <Chip1 />;
    <Chip0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Chip
      classes={{
        root: 'str',
        colorPrimary: 'str',
        colorSecondary: 'str',
        clickable: 'str',
        clickableColorPrimary: 'str',
        clickableColorSecondary: 'str',
        deletable: 'str',
        deletableColorPrimary: 'str',
        deletableColorSecondary: 'str',
        outlined: 'str',
        outlinedPrimary: 'str',
        outlinedSecondary: 'str',
        avatar: 'str',
        avatarColorPrimary: 'str',
        avatarColorSecondary: 'str',
        avatarChildren: 'str',
        icon: 'str',
        iconColorPrimary: 'str',
        iconColorSecondary: 'str',
        label: 'str',
        deleteIcon: 'str',
        deleteIconColorPrimary: 'str',
        deleteIconColorSecondary: 'str',
        deleteIconOutlinedColorPrimary: 'str',
        deleteIconOutlinedColorSecondary: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Chip
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Chip
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Chip
      avatar={<i />}
      clickable={false}
      color={'primary'}
      deleteIcon={<i />}
      icon={<i />}
      label={[<i />, <i />]}
      onDelete={() => {}}
      variant={'default'}
    />;

    <Chip onDelete={async () => {}} variant={'outlined'} />;

    <Chip
      avatar={undefined}
      clickable={undefined}
      color={undefined}
      deleteIcon={undefined}
      icon={undefined}
      label={undefined}
      onDelete={undefined}
      variant={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Chip
      // $ExpectError
      avatar={'need react element'}
      // $ExpectError
      clickable={'need boolean'}
      // $ExpectError: invalid color
      color={'primary__'}
      // $ExpectError
      deleteIcon={'need react element'}
      // $ExpectError
      icon={'need react element'}
      // $ExpectError: need react node
      label={{}}
      // $ExpectError
      onDelete={'need function'}
      // $ExpectError: invalid variant
      variant={'default__'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Chip aria-hidden="true" />;
  });
});
