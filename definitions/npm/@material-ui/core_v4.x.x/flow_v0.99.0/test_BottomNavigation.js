//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { BottomNavigation } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const BottomNavigation1 = require('@material-ui/core/BottomNavigation')
      .default;
    const BottomNavigation0 = require('@material-ui/core/BottomNavigation/BottomNavigation')
      .default;

    <BottomNavigation1>
      <i />
    </BottomNavigation1>;
    <BottomNavigation0>
      <i />
    </BottomNavigation0>;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <BottomNavigation
      classes={{
        root: 'srt',
      }}
    >
      <i />
    </BottomNavigation>;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <BottomNavigation
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    >
      <i />
    </BottomNavigation>;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <BottomNavigation
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    >
      <i />
    </BottomNavigation>;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <BottomNavigation
      showLabels={false}
      value={123}
      onChange={async (event: {}, value) => {}}
    >
      <i />
    </BottomNavigation>;

    <BottomNavigation
      showLabels={undefined}
      value={undefined}
      onChange={undefined}
    >
      <i />
    </BottomNavigation>;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: children is required
    <BottomNavigation />;

    // $ExpectError: need function
    <BottomNavigation onChange={'str'}>
      <i />
    </BottomNavigation>;
    // $ExpectError
    <BottomNavigation showLabels={'need boolean'}>
      <i />
    </BottomNavigation>;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <BottomNavigation aria-hidden="true">
      <i />
    </BottomNavigation>;
  });
});
