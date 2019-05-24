//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { CardHeader } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const CardHeader1 = require('@material-ui/core/CardHeader').default;
    const CardHeader0 = require('@material-ui/core/CardHeader/CardHeader')
      .default;

    <CardHeader1 />;
    <CardHeader0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <CardHeader
      classes={{
        root: 'str',
        avatar: 'str',
        action: 'str',
        content: 'str',
        title: 'str',
        subheader: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <CardHeader
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <CardHeader
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <CardHeader
      action={<i />}
      avatar={<i />}
      component={'div'}
      disableTypography={false}
      subheader={<i />}
      title={<i />}
      subheaderTypographyProps={{
        align: 'justify',
      }}
      titleTypographyProps={{
        color: 'textPrimary',
      }}
    />;

    <CardHeader
      action={undefined}
      avatar={undefined}
      component={undefined}
      disableTypography={undefined}
      subheader={undefined}
      title={undefined}
      subheaderTypographyProps={undefined}
      titleTypographyProps={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <CardHeader
      // $ExpectError: need react node
      action={{}}
      // $ExpectError: need react node
      avatar={{}}
      // $ExpectError: need react element
      component={{}}
      // $ExpectError
      disableTypography={'need boolean'}
      // $ExpectError: need react node
      subheader={{}}
      // $ExpectError: need react node
      title={{}}
      subheaderTypographyProps={{
        // $ExpectError: invalid Typography props
        align: 'justif__',
      }}
      titleTypographyProps={{
        // $ExpectError: invalid Typography props
        color: 'textPrimar__',
      }}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <CardHeader aria-hidden="true" />;
  });
});
