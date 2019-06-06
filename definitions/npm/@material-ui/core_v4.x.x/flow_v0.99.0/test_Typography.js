//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Typography } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Typography1 = require('@material-ui/core/Typography').default;
    const Typography0 = require('@material-ui/core/Typography/Typography')
      .default;

    <Typography1 />;
    <Typography0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Typography
      classes={{
        root: 'str',
        h1: 'str',
        h2: 'str',
        h3: 'str',
        h4: 'str',
        h5: 'str',
        h6: 'str',
        subtitle1: 'str',
        subtitle2: 'str',
        body1: 'str',
        body2: 'str',
        caption: 'str',
        button: 'str',
        overline: 'str',
        srOnly: 'str',
        alignLeft: 'str',
        alignCenter: 'str',
        alignRight: 'str',
        alignJustify: 'str',
        noWrap: 'str',
        gutterBottom: 'str',
        paragraph: 'str',
        colorInherit: 'str',
        colorSecondary: 'str',
        colorTextSecondary: 'str',
        colorError: 'str',
        displayInline: 'str',
        displayBlock: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Typography
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Typography
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Typography
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

    <Typography
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
    <Typography
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
    <Typography aria-hidden="true" />;
  });
});
