//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Collapse } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Collapse1 = require('@material-ui/core/Collapse').default;
    const Collapse0 = require('@material-ui/core/Collapse/Collapse').default;

    <Collapse1 />;
    <Collapse0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Collapse
      classes={{
        container: 'str',
        entered: 'str',
        wrapper: 'str',
        wrapperInner: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Collapse
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Collapse
      classes={{
        // $ExpectError: need string value
        container: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Collapse
      in={true}
      component={'div'}
      collapsedHeight={'0px'}
      timeout={'auto'}
    />;

    <Collapse timeout={1} />;

    <Collapse
      in={undefined}
      component={undefined}
      collapsedHeight={undefined}
      timeout={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Collapse
      // $ExpectError
      in={'need bool'}
      // $ExpectError: need react element
      component={{}}
      // $ExpectError: need string
      collapsedHeight={1}
      // $ExpectError: invalid value
      timeout={'auto__'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Collapse aria-hidden="true" />;
  });
});
