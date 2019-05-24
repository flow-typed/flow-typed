//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { CardActions } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const CardActions1 = require('@material-ui/core/CardActions').default;
    const CardActions0 = require('@material-ui/core/CardActions/CardActions')
      .default;

    <CardActions1 />;
    <CardActions0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <CardActions
      classes={{
        root: 'str',
        spacing: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <CardActions
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <CardActions
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <CardActions disableSpacing={false} />;
    <CardActions disableSpacing={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError
    <CardActions disableSpacing={'need boolean'} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <CardActions aria-hidden="true" />;
  });
});
