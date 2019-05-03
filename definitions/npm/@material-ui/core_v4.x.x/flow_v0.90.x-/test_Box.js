//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Box } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Box1 = require('@material-ui/core/Box').default;
    const Box0 = require('@material-ui/core/Box/Box').default;

    <Box1 />;
    <Box0 />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Box flexWrap={'aaaaaaa'} bgcolor={'red'} clone={false} />;
    <Box bgcolor={undefined} clone={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: need string
    <Box bgcolor={1} />;
    // $ExpectError: need boolean
    <Box clone={'true'} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Box aria-hidden="true" />;
  });
});
