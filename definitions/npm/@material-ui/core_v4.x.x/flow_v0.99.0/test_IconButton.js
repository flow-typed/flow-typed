//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { IconButton } from '@material-ui/core';
import type { IconButtonProps } from '@material-ui/core/IconButton';

describe('imports', () => {
  it('should passes when used properly', () => {
    const IconButton1 = require('@material-ui/core/IconButton').default;
    const IconButton0 = require('@material-ui/core/IconButton/IconButton')
      .default;

    <IconButton1 />;
    <IconButton0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <IconButton
      classes={{
        root: 'str',
        edgeStart: 'str',
        edgeEnd: 'str',
        colorInherit: 'str',
        colorPrimary: 'str',
        colorSecondary: 'str',
        disabled: 'str',
        sizeSmall: 'str',
        label: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <IconButton
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <IconButton
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <IconButton color={'secondary'} edge={'start'} size={'medium'} />;
    <IconButton edge={false} />;

    <IconButton color={undefined} edge={undefined} size={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <IconButton
      // $ExpectError: `__secondary` is missing in enum
      color={'__secondary'}
      // $ExpectError: `__start` is missing in enum
      edge={'__start'}
      // $ExpectError: `__medium` is missing in enum
      size={'__medium'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <IconButton aria-hidden="true" />;
  });
});

describe('inherited ButtonBase props', () => {
  it('should passes when used inherited props properly', () => {
    <IconButton
      action={async () => {}}
      centerRipple={false}
      disabled={false}
      disableRipple={false}
      disableTouchRipple={false}
      focusRipple={false}
      focusVisibleClassName={'str'}
      onFocusVisible={async () => {}}
      TouchRippleProps={{
        center: true,
        classes: {
          root: 'str',
          ripple: 'str',
          rippleVisible: 'str',
          ripplePulsate: 'str',
          child: 'str',
          childLeaving: 'str',
          childPulsate: 'str',
        },
      }}
      href={'http://'}
    />;

    <IconButton
      onFocusVisible={() => {}}
      action={actions => {
        (actions.focusVisible: () => void);

        // $ExpectError: check any
        (actions.focusVisible: number);
      }}
      TouchRippleProps={{}}
    />;

    <IconButton
      action={undefined}
      centerRipple={undefined}
      disabled={undefined}
      disableRipple={undefined}
      disableTouchRipple={undefined}
      focusRipple={undefined}
      focusVisibleClassName={undefined}
      onFocusVisible={undefined}
      TouchRippleProps={undefined}
      href={undefined}
    />;
  });

  it('should fail with error when passing incompatible for inherited props', () => {
    <IconButton
      TouchRippleProps={{
        // $ExpectError
        center: 'need bool',
        classes: {
          // $ExpectError: root must be string
          root: true,
        },
      }}
    />;

    <IconButton
      TouchRippleProps={{
        // $ExpectError: the `classes` enum does not contain `murAmur` prop
        classes: {
          murAmur: 'true',
        },
      }}
    />;

    <IconButton
      // $ExpectError
      action={'need function'}
      // $ExpectError
      centerRipple={'need bool'}
      // $ExpectError
      disabled={'need bool'}
      // $ExpectError
      disableRipple={'need bool'}
      // $ExpectError
      disableTouchRipple={'need bool'}
      // $ExpectError
      focusRipple={'need bool'}
      // $ExpectError: need string
      focusVisibleClassName={69}
      // $ExpectError
      onFocusVisible={'need function'}
      // $ExpectError: need object
      TouchRippleProps={[1]}
      // $ExpectError
      href={0}
    />;
  });
});

describe('exported props', () => {
  it('should not be any', () => {
    declare var testProps: IconButtonProps;

    (testProps.disabled: ?boolean);

    // $ExpectError: check any
    (testProps.disabled: ?number);
  });
});
