//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { TableSortLabel } from '@material-ui/core';
import type { TableSortLabelProps } from '@material-ui/core/TableSortLabel';

describe('imports', () => {
  it('should passes when used properly', () => {
    const TableSortLabel1 = require('@material-ui/core/TableSortLabel').default;
    const TableSortLabel0 = require('@material-ui/core/TableSortLabel/TableSortLabel')
      .default;

    <TableSortLabel1 />;
    <TableSortLabel0 />;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <TableSortLabel
      classes={{
        root: 'str',
        active: 'str',
        icon: 'str',
        iconDirectionDesc: 'str',
        iconDirectionAsc: 'str',
      }}
    />;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <TableSortLabel
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    />;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <TableSortLabel
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    />;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <TableSortLabel
      active={false}
      direction={'asc'}
      hideSortIcon={false}
      IconComponent={() => <i />}
    />;

    <TableSortLabel
      active={undefined}
      direction={undefined}
      hideSortIcon={undefined}
      IconComponent={undefined}
    />;
  });

  it('should raises an error when pass incompatible types', () => {
    <TableSortLabel
      // $ExpectError
      active={'need boolean'}
      // $ExpectError: `__asc` is missing in enum
      direction={'__asc'}
      // $ExpectError
      hideSortIcon={'need boolean'}
      // $ExpectError: need react component
      IconComponent={{}}
    />;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <TableSortLabel aria-hidden="true" />;
  });
});

describe('inherited ButtonBase props', () => {
  it('should passes when used inherited props properly', () => {
    <TableSortLabel
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

    <TableSortLabel
      onFocusVisible={() => {}}
      action={actions => {
        (actions.focusVisible: () => void);

        // $ExpectError: check any
        (actions.focusVisible: number);
      }}
      TouchRippleProps={{}}
    />;

    <TableSortLabel
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
    <TableSortLabel
      TouchRippleProps={{
        // $ExpectError
        center: 'need bool',
        classes: {
          // $ExpectError: root must be string
          root: true,
        },
      }}
    />;

    <TableSortLabel
      TouchRippleProps={{
        // $ExpectError: the `classes` enum does not contain `murAmur` prop
        classes: {
          murAmur: 'true',
        },
      }}
    />;

    <TableSortLabel
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
    declare var testProps: TableSortLabelProps;

    (testProps.disabled: ?boolean);

    // $ExpectError: check any
    (testProps.disabled: ?number);
  });
});
