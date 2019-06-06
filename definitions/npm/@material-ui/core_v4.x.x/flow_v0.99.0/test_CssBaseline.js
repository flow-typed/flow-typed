//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { CssBaseline } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const CssBaseline1 = require('@material-ui/core/CssBaseline').default;
    const CssBaseline0 = require('@material-ui/core/CssBaseline/CssBaseline')
      .default;

    <CssBaseline1 />;
    <CssBaseline0 />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <CssBaseline>{null}</CssBaseline>;

    <CssBaseline>
      <div />
    </CssBaseline>;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: children must be React Node
    <CssBaseline>{() => {}}</CssBaseline>;
    // $ExpectError
    <CssBaseline missingProps="ups" />;
  });
});
