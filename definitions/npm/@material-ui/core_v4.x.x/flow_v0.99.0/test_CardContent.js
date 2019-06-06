//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { CardContent } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const CardContent1 = require('@material-ui/core/CardContent').default;
    const CardContent0 = require('@material-ui/core/CardContent/CardContent')
      .default;

    <CardContent1 />;
    <CardContent0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <CardContent
      classes={{
        root: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <CardContent
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <CardContent
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <CardContent aria-hidden="true" />;
  });
});
