//@flow
import { it, describe } from 'flow-typed-test';
import * as React from 'react';
import { Badge } from '@material-ui/core';

describe('imports', () => {
  it('should passes when used properly', () => {
    const Badge1 = require('@material-ui/core/Badge').default;
    const Badge0 = require('@material-ui/core/Badge/Badge').default;

    <Badge1>
      <i />
    </Badge1>;
    <Badge0>
      <i />
    </Badge0>;
  });
});

describe('classes', () => {
  it('should passes when used properly', () => {
    <Badge
      classes={{
        root: 'srt',
        badge: 'srt',
        colorPrimary: 'srt',
        colorSecondary: 'srt',
        colorError: 'str',
        invisible: 'srt',
        dot: 'srt',
      }}
    >
      <i />
    </Badge>;
  });

  it('should raises an error when pass not implemented prop to the classes property', () => {
    <Badge
      // $ExpectError: the `classes` enum does not contain `murAmur` prop
      classes={{
        murAmur: 'custom-class-name',
      }}
    >
      <i />
    </Badge>;
  });

  it('should raises an error when pass incompatible with string value', () => {
    <Badge
      classes={{
        // $ExpectError: need string value
        root: true,
      }}
    >
      <i />
    </Badge>;
  });
});

describe('own props', () => {
  it('should passes when used properly', () => {
    <Badge
      color={'error'}
      invisible={false}
      max={9}
      showZero={false}
      variant={'dot'}
      position={'sticky'}
      badgeContent={<span />}
    >
      <i />
    </Badge>;

    <Badge
      color={undefined}
      invisible={undefined}
      max={undefined}
      showZero={undefined}
      variant={undefined}
      position={undefined}
      badgeContent={undefined}
    >
      <i />
    </Badge>;
  });

  it('should raises an error when pass incompatible types', () => {
    // $ExpectError: children is required
    <Badge />;

    // $ExpectError: invalid color
    <Badge color={'colorDominator'}>
      <i />
    </Badge>;
    // $ExpectError invalid variant type
    <Badge variant={'hard'}>
      <i />
    </Badge>;
  });
});

describe('dom props', () => {
  it('should passes when pass some DOM props', () => {
    <Badge aria-hidden="true">
      <i />
    </Badge>;
  });
});
