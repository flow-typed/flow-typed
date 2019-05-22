//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { DialogContentText } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const DialogContentText1 = require('@material-ui/core/DialogContentText')
      .default;
    const DialogContentText0 = require('@material-ui/core/DialogContentText/DialogContentText')
      .default;

    <DialogContentText1 />;
    <DialogContentText0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <DialogContentText
      classes={{
        root: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <DialogContentText
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <DialogContentText
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('inherited Typography props', () => {
  it('should passes when used properly', () => {
    <DialogContentText
      align={'justify'}
      color={'textPrimary'}
      component={'p'}
      display={'inline'}
      gutterBottom={false}
      noWrap={false}
      paragraph={false}
      variant={'h1'}
      variantMapping={{ h1: 'div' }}
    />;

    <DialogContentText
      align={undefined}
      color={undefined}
      component={undefined}
      display={undefined}
      gutterBottom={undefined}
      noWrap={undefined}
      paragraph={undefined}
      variant={undefined}
      variantMapping={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <DialogContentText
      // $ExpectError
      align={'flex-start'}
      // $ExpectError
      color={'textPrim___'}
      // $ExpectError
      component={{}}
      // $ExpectError
      display={'inline-block'}
      // $ExpectError
      gutterBottom={'need boolean'}
      // $ExpectError
      noWrap={'need boolean'}
      // $ExpectError
      paragraph={'need boolean'}
      // $ExpectError: invalid valiant
      variant={'h999'}
      // $ExpectError: XXXX is missing
      variantMapping={{ XXXX: 'div' }}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <DialogContentText aria-hidden="true" />;
  });
});
