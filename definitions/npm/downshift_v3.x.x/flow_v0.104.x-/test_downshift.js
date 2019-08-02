// @flow
import React from 'react';
import { it, describe } from 'flow-typed-test';

import Downshift, { resetIdCounter } from 'downshift';

describe('Downshift', () => {
  it("should pass when don't pass any props", () => {
    <Downshift />;
  });

  describe('children', () => {
    <Downshift>
      {({ getMenuProps }) => {
        (getMenuProps(): {...});

        (getMenuProps({ refKey: 'rootRef' }): {...});

        // $ExpectError: `refKey` must be a string
        (getMenuProps({ refKey: 1 }): {...});

        return <i />;
      }}
    </Downshift>;
  });

  describe('Exact generic type', () => {
    class StrDownshift extends Downshift<string> {}
    class NumDownshift extends Downshift<number> {}

    it('should pass when use properly', () => {
      <StrDownshift initialSelectedItem={'str'} />;
      <NumDownshift initialSelectedItem={0} />;
    });

    it('should raise an error when pass incompatible types', () => {
      // $ExpectError
      <StrDownshift initialSelectedItem={123} />;
      // $ExpectError
      <NumDownshift initialSelectedItem={'need number'} />;
    });
  });
});

describe('resetIdCounter', () => {
  it('should work properly', () => {
    (resetIdCounter(): void);
  });
});
