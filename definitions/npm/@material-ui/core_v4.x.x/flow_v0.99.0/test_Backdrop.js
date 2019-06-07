//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Backdrop } from '@material-ui/core';

const requiredProps = {
  open: true,
};

describe('imports', () => {
  it('should passes when used properly', () => {
    const Backdrop1 = require('@material-ui/core/Backdrop').default;
    const Backdrop0 = require('@material-ui/core/Backdrop/Backdrop').default;

    <Backdrop1 {...requiredProps} />;
    <Backdrop0 {...requiredProps} />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Backdrop
      {...requiredProps}
      classes={{
        root: 'str',
        invisible: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Backdrop
      {...requiredProps}
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Backdrop
      {...requiredProps}
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Backdrop
      open={false}
      invisible={false}
      onClick={async () => {}}
      transitionDuration={250}
    />;

    <Backdrop {...requiredProps} transitionDuration={{ exit: 69 }} />;

    <Backdrop {...requiredProps} transitionDuration={{ enter: 69 }} />;

    <Backdrop
      {...requiredProps}
      transitionDuration={{ enter: 69, exit: 69 }}
    />;

    <Backdrop
      open={true}
      alt={undefined}
      childrenClassName={undefined}
      imgProps={undefined}
      sizes={undefined}
      src={undefined}
      srcSet={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: open required props
    <Backdrop />;

    // $ExpectError: `enter` must be number
    <Backdrop {...requiredProps} transitionDuration={{ enter: '69' }} />;

    // $ExpectError: `exit` must be number
    <Backdrop {...requiredProps} transitionDuration={{ exit: '69' }} />;

    // $ExpectError:  exact type test, `exit___` missing
    <Backdrop {...requiredProps} transitionDuration={{ exit___: 69 }} />;

    <Backdrop
      {...requiredProps}
      // $ExpectError: need boolean
      invisible={'not bool'}
      // $ExpectError: need function
      onClick={123}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Backdrop {...requiredProps} aria-hidden="true" />;
  });
});
