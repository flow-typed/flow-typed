//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { DialogTitle } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const DialogTitle1 = require('@material-ui/core/DialogTitle').default;
    const DialogTitle0 = require('@material-ui/core/DialogTitle/DialogTitle')
      .default;

    <DialogTitle1 />;
    <DialogTitle0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <DialogTitle
      classes={{
        root: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <DialogTitle
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <DialogTitle
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <DialogTitle disableTypography={false} />;
    <DialogTitle disableTypography={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <DialogTitle
      // $ExpectError: need boolean
      disableTypography={111}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <DialogTitle aria-hidden="true" />;
  });
});
