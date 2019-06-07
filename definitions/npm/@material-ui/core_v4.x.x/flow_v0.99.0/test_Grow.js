//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Grow } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Grow1 = require('@material-ui/core/Grow').default;
    const Grow0 = require('@material-ui/core/Grow/Grow').default;

    <Grow1 />;
    <Grow0 />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Grow timeout={'auto'} />;

    <Grow timeout={1} />;

    <Grow timeout={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Grow
      // $ExpectError: invalid value
      timeout={'auto__'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Grow aria-hidden="true" />;
  });
});
