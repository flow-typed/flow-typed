//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { ExpansionPanelSummary } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const ExpansionPanelSummary1 = require('@material-ui/core/ExpansionPanelSummary')
      .default;
    const ExpansionPanelSummary0 = require('@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary')
      .default;

    <ExpansionPanelSummary1 />;
    <ExpansionPanelSummary0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <ExpansionPanelSummary
      classes={{
        root: 'str',
        expanded: 'str',
        focused: 'str',
        disabled: 'str',
        content: 'str',
        expandIcon: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <ExpansionPanelSummary
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <ExpansionPanelSummary
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <ExpansionPanelSummary
      disabled={false}
      expanded={false}
      expandIcon={<i />}
      IconButtonProps={{ edge: 'start' }}
      onChange={() => {}}
    />;

    <ExpansionPanelSummary onChange={async () => {}} />;

    <ExpansionPanelSummary
      disabled={undefined}
      expanded={undefined}
      expandIcon={undefined}
      IconButtonProps={undefined}
      onChange={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <ExpansionPanelSummary
      // $ExpectError
      disabled={'need boolean'}
      // $ExpectError
      expanded={'need boolean'}
      // $ExpectError: need react node
      expandIcon={{}}
      IconButtonProps={{
        // $ExpectError: invalid IconButtonProp
        edge: '__start',
      }}
      // $ExpectError: children is required
      onChange={'need function'}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <ExpansionPanelSummary aria-hidden="true" />;
  });
});

describe('inherited ButtonBase props', () => {
  it('should passes when used inherited props properly', () => {
    <ExpansionPanelSummary
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

    <ExpansionPanelSummary
      onFocusVisible={() => {}}
      action={actions => {
        (actions.focusVisible: () => void);

        // $ExpectError: check any
        (actions.focusVisible: number);
      }}
      TouchRippleProps={{}}
    />;

    <ExpansionPanelSummary
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
    <ExpansionPanelSummary
      TouchRippleProps={{
        // $ExpectError
        center: 'need bool',
        classes: {
          // $ExpectError: root must be string
          root: true,
        },
      }}
    />;

    <ExpansionPanelSummary
      TouchRippleProps={{
        // $ExpectError: the `classes` enum does not contain `murAmur` prop
        classes: {
          murAmur: 'true',
        },
      }}
    />;

    <ExpansionPanelSummary
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
