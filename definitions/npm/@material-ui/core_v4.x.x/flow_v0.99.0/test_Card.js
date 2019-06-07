//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Card } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Card1 = require('@material-ui/core/Card').default;
    const Card0 = require('@material-ui/core/Card/Card').default;

    <Card1 />;
    <Card0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Card
      classes={{
        root: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Card
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Card
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Card raised={false} />;
    <Card raised={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError
    <Card raised={'need boolean'} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Card aria-hidden="true" />;
  });
});
