//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Button } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Button1 = require('@material-ui/core/Button').default;
    const Button0 = require('@material-ui/core/Button/Button').default;

    <Button1 />;
    <Button0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Button
      classes={{
        root: 'str',
        label: 'str',
        text: 'str',
        textPrimary: 'str',
        textSecondary: 'str',
        outlined: 'str',
        outlinedPrimary: 'str',
        outlinedSecondary: 'str',
        contained: 'str',
        containedPrimary: 'str',
        containedSecondary: 'str',
        focusVisible: 'str',
        disabled: 'str',
        colorInherit: 'str',
        sizeSmall: 'str',
        sizeLarge: 'str',
        fullWidth: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Button
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Button
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Button
      color={'primary'}
      fullWidth={false}
      href={'http://'}
      size={'large'}
      variant={'outlined'}
    />;

    <Button
      color={undefined}
      fullWidth={undefined}
      href={undefined}
      size={undefined}
      variant={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <Button
      // $ExpectError: `__primary` is missing in enum
      color={'__primary'}
      // $ExpectError
      fullWidth={'need boolean'}
      // $ExpectError: need string
      href={123}
      // $ExpectError: `__large` is missing in enum
      size={'__large'}
      // $ExpectError: `__outlined` is missing in enum
      variant={'__outlined'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Button aria-hidden="true" />;
  });
});

describe('inherited ButtonBase props', () => {
  it('should passes when used inherited props properly', () => {
    <Button
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

    <Button
      onFocusVisible={() => {}}
      action={actions => {
        (actions.focusVisible: () => void);

        // $ExpectError: check any
        (actions.focusVisible: number);
      }}
      TouchRippleProps={{}}
    />;

    <Button
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
    <Button
      TouchRippleProps={{
        // $ExpectError
        center: 'need bool',
        classes: {
          // $ExpectError: root must be string
          root: true,
        },
      }}
    />;

    <Button
      TouchRippleProps={{
        // $ExpectError: the `classes` enum does not contain `murAmur` prop
        classes: {
          murAmur: 'true',
        },
      }}
    />;

    <Button
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
