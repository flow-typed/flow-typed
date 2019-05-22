//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Avatar } from '@material-ui/core';
import type { AvatarProps } from '@material-ui/core/Avatar';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Avatar1 = require('@material-ui/core/Avatar').default;
    const Avatar0 = require('@material-ui/core/Avatar/Avatar').default;

    <Avatar1 />;
    <Avatar0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Avatar
      classes={{
        root: 'str',
        colorDefault: 'str',
        img: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Avatar
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Avatar
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Avatar
      alt={'text'}
      childrenClassName={'som-class-name'}
      imgProps={{ crossorigin: 'anonymous' }}
      sizes={'str'}
      src={'str'}
      srcSet={'str'}
    />;

    <Avatar
      alt={undefined}
      childrenClassName={undefined}
      imgProps={undefined}
      sizes={undefined}
      src={undefined}
      srcSet={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: need string
    <Avatar alt={69} />;
    // $ExpectError: need string
    <Avatar childrenClassName={69} />;
    // $ExpectError: need object
    <Avatar imgProps={'ups...'} />;
    // $ExpectError: need string
    <Avatar sizes={69} />;
    // $ExpectError: need string
    <Avatar src={69} />;
    // $ExpectError: need string
    <Avatar srcSet={69} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Avatar aria-hidden="true" />;
  });
});

describe('exported props', () => {
  it('should not be any', () => {
    declare var testProps: AvatarProps;

    (testProps.alt: ?string);

    // $ExpectError: check any
    (testProps.alt: ?number);
  });
});
