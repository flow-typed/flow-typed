//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { CardActionArea } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const CardActionArea1 = require('@material-ui/core/CardActionArea').default;
    const CardActionArea0 = require('@material-ui/core/CardActionArea/CardActionArea')
      .default;

    <CardActionArea1 />;
    <CardActionArea0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <CardActionArea
      classes={{
        root: 'str',
        focusVisible: 'str',
        focusHighlight: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <CardActionArea
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <CardActionArea
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <CardActionArea focusVisibleClassName={'string'} />;

    <CardActionArea focusVisibleClassName={undefined} />;
  });

  it('should raises an error when pass incompatible types', () => {
    <CardActionArea
      // $ExpectError: need string
      focusVisibleClassName={123}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <CardActionArea aria-hidden="true" />;
  });
});

describe('CardActionArea props', () => {
  it('should passes when used inherited props properly', () => {
    <CardActionArea
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

    <CardActionArea
      onFocusVisible={() => {}}
      action={actions => {
        (actions.focusVisible: () => void);

        // $ExpectError: check any
        (actions.focusVisible: number);
      }}
      TouchRippleProps={{}}
    />;

    <CardActionArea
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
    <CardActionArea
      TouchRippleProps={{
        // $ExpectError
        center: 'need bool',
        classes: {
          // $ExpectError: root must be string
          root: true,
        },
      }}
    />;

    <CardActionArea
      TouchRippleProps={{
        // $ExpectError: the `classes` enum does not contain `murAmur` prop
        classes: {
          murAmur: 'true',
        },
      }}
    />;

    <CardActionArea
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
