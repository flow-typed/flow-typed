//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { CardMedia } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const CardMedia1 = require('@material-ui/core/CardMedia').default;
    const CardMedia0 = require('@material-ui/core/CardMedia/CardMedia').default;

    <CardMedia1 />;
    <CardMedia0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <CardMedia
      classes={{
        root: 'str',
        media: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <CardMedia
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <CardMedia
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <CardMedia image={'str'} src={'str'} />;

    <CardMedia image={undefined} src={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <CardMedia
      // $ExpectError: need string
      image={false}
      // $ExpectError: need string
      src={false}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <CardMedia aria-hidden="true" />;
  });
});
