//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Container } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Container1 = require('@material-ui/core/Container').default;
    const Container0 = require('@material-ui/core/Container/Container').default;

    <Container1 />;
    <Container0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Container
      classes={{
        root: 'str',
        fixed: 'str',
        maxWidthXs: 'str',
        maxWidthSm: 'str',
        maxWidthMd: 'str',
        maxWidthLg: 'str',
        maxWidthXl: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Container
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Container
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Container fixed={false} maxWidth={'lg'} />;
    <Container fixed={true} maxWidth={false} />;
    <Container fixed={undefined} maxWidth={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError
    <Container fixed={'need boolean'} />;
    // $ExpectError
    <Container maxWidth={'ups...'} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Container aria-hidden="true" />;
  });
});
