//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Link, Typography } from '@material-ui/core';
import type { LinkProps } from '@material-ui/core/Link';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Link1 = require('@material-ui/core/Link').default;
    const Link0 = require('@material-ui/core/Link/Link').default;

    <Link1 />;
    <Link0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Link
      classes={{
        root: 'str',
        button: 'str',
        focusVisible: 'str',
        underlineAlways: 'str',
        underlineHover: 'str',
        underlineNone: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Link
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Link
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Link underline={'hover'} TypographyClasses={{ subtitle2: 'str' }} />;

    <Link underline={undefined} TypographyClasses={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Link
      // $ExpectError: `__hover` is missing in enum
      underline={'__hover'}
      // $ExpectError: `__subtitle2` is missing in classes
      TypographyClasses={{ __subtitle2: 'str' }}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Link aria-hidden="true" />;
  });
});

describe('exported props', () => {
  it('should not be any', () => {
    declare var testProps: LinkProps;

    (testProps.underline: ?('none' | 'hover' | 'always'));

    // $ExpectError: check any
    (testProps.underline: number);
  });
});

describe('inherited Typography props', () => {
  it('should passes when used properly', () => {
    <Link
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

    <Link
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
    <Link
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
