//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Fab } from '@material-ui/core';
import type { FabProps } from '@material-ui/core/Fab';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Fab1 = require('@material-ui/core/Fab').default;
    const Fab0 = require('@material-ui/core/Fab/Fab').default;

    <Fab1 />;
    <Fab0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Fab
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
    <Fab
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Fab
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Fab color={'secondary'} size={'small'} variant={'round'} />;

    <Fab color={undefined} variant={undefined} size={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Fab
      // $ExpectError: `__secondary` is missing in enum
      color={'__secondary'}
      // $ExpectError: `__round` is missing in enum
      variant={'__round'}
      // $ExpectError: `__medium` is missing in enum
      size={'__medium'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Fab aria-hidden="true" />;
  });
});

describe('inherited ButtonBase props', () => {
  it('should passes when used inherited props properly', () => {
    <Fab
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

    <Fab
      onFocusVisible={() => {}}
      action={actions => {
        (actions.focusVisible: () => void);

        // $ExpectError: check any
        (actions.focusVisible: number);
      }}
      TouchRippleProps={{}}
    />;

    <Fab
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
    <Fab
      TouchRippleProps={{
        // $ExpectError
        center: 'need bool',
        classes: {
          // $ExpectError: root must be string
          root: true,
        },
      }}
    />;

    <Fab
      TouchRippleProps={{
        // $ExpectError: the `classes` enum does not contain `murAmur` prop
        classes: {
          murAmur: 'true',
        },
      }}
    />;

    <Fab
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
    declare var testProps: FabProps;

    (testProps.disabled: ?boolean);

    // $ExpectError: check any
    (testProps.disabled: ?number);
  });
});
