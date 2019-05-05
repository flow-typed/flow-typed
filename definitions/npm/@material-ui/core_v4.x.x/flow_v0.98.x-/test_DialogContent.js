//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { DialogContent } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const DialogContent1 = require('@material-ui/core/DialogContent').default;
    const DialogContent0 = require('@material-ui/core/DialogContent/DialogContent')
      .default;

    <DialogContent1 />;
    <DialogContent0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <DialogContent
      classes={{
        root: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <DialogContent
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <DialogContent
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <DialogContent dividers={false} />;
    <DialogContent dividers={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <DialogContent
      // $ExpectError: need boolean
      dividers={111}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <DialogContent aria-hidden="true" />;
  });
});
