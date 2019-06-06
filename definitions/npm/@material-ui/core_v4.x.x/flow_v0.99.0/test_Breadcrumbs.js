//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Breadcrumbs } from '@material-ui/core';
import type { BreadcrumbsProps } from '@material-ui/core/Breadcrumbs';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Breadcrumbs1 = require('@material-ui/core/Breadcrumbs').default;
    const Breadcrumbs0 = require('@material-ui/core/Breadcrumbs/Breadcrumbs')
      .default;

    <Breadcrumbs1 />;
    <Breadcrumbs0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Breadcrumbs
      classes={{
        root: 'srt',
        ol: 'srt',
        separator: 'srt',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Breadcrumbs
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Breadcrumbs
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Breadcrumbs
      itemsAfterCollapse={false}
      itemsBeforeCollapse={false}
      maxItems={3}
      separator={<br />}
    />;

    <Breadcrumbs
      itemsAfterCollapse={undefined}
      itemsBeforeCollapse={undefined}
      maxItems={undefined}
      separator={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError
    <Breadcrumbs itemsBeforeCollapse={'need boolean'} />;
    // $ExpectError
    <Breadcrumbs maxItems={'need number'} />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Breadcrumbs aria-hidden="true" />;
  });
});

describe('exported props', () => {
  it('should not be any', () => {
    declare var testProps: BreadcrumbsProps;

    (testProps.maxItems: ?number);

    // $ExpectError: check any
    (testProps.maxItems: ?string);
  });
});
