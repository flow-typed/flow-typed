//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { BottomNavigationAction } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const BottomNavigationAction1 = require('@material-ui/core/BottomNavigationAction')
      .default;
    const BottomNavigationAction0 = require('@material-ui/core/BottomNavigationAction/BottomNavigationAction')
      .default;

    <BottomNavigationAction1 />;
    <BottomNavigationAction0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <BottomNavigationAction
      classes={{
        root: 'str',
        selected: 'str',
        iconOnly: 'str',
        wrapper: 'str',
        label: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <BottomNavigationAction
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <BottomNavigationAction
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <BottomNavigationAction
      onFocusVisible={() => {}}
      action={actions => {
        (actions.focusVisible: () => void);

        // $ExpectError: check any
        (actions.focusVisible: number);
      }}
      TouchRippleProps={{}}
    />;

    <BottomNavigationAction
      icon={'string'}
      onClick={() => {}}
      onChange={() => {}}
      value={'11'}
    />;

    <BottomNavigationAction
      icon={<i />}
      label={<label />}
      onChange={async () => {}}
      onClick={async () => {}}
      selected={false}
      showLabel={false}
      value={11}
    />;

    <BottomNavigationAction
      icon={undefined}
      label={undefined}
      onChange={undefined}
      onClick={undefined}
      selected={undefined}
      showLabel={undefined}
      value={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <BottomNavigationAction
      // $ExpectError: need string or one react element (not array)
      icon={[<i />]}
      // $ExpectError
      label={{ need: 'react node' }}
      // $ExpectError: children is required
      onChange={'need function'}
      // $ExpectError: children is required
      onClick={'need function'}
      // $ExpectError: children is required
      selected={'need boolean'}
      // $ExpectError: children is required
      showLabel={'need boolean'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <BottomNavigationAction aria-hidden="true" />;
  });
});

describe('inherited ButtonBase props', () => {
  it('should passes when used inherited props properly', () => {
    <BottomNavigationAction
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

    <BottomNavigationAction
      onFocusVisible={() => {}}
      action={actions => {
        (actions.focusVisible: () => void);

        // $ExpectError: check any
        (actions.focusVisible: number);
      }}
      TouchRippleProps={{}}
    />;

    <BottomNavigationAction
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
    <BottomNavigationAction
      TouchRippleProps={{
        // $ExpectError
        center: 'need bool',
        classes: {
          // $ExpectError: root must be string
          root: true,
        },
      }}
    />;

    <BottomNavigationAction
      TouchRippleProps={{
        // $ExpectError: the `classes` enum does not contain `murAmur` prop
        classes: {
          murAmur: 'true',
        },
      }}
    />;

    <BottomNavigationAction
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
