//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { DialogActions } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const DialogActions1 = require('@material-ui/core/DialogActions').default;
    const DialogActions0 = require('@material-ui/core/DialogActions/DialogActions')
      .default;

    <DialogActions1 />;
    <DialogActions0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <DialogActions
      classes={{
        root: 'str',
        spacing: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <DialogActions
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <DialogActions
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <DialogActions disableSpacing={false} />;
    <DialogActions disableSpacing={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <DialogActions
      // $ExpectError: need boolean
      disableSpacing={111}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <DialogActions aria-hidden="true" />;
  });
});
