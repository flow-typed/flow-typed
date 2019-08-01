// @flow
import React from 'react';
import { describe, it } from 'flow-typed-test';
import * as hooks from 'react-use';

describe('react-use', () => {
  describe('usePrevious', () => {
    it('should error when casting to another type', () => {
      let MyComponent = () => {
        const foo: number = 0;
        // $ExpectError
        const bar: string = hooks.usePrevious(foo);
      };
    });
  });

  describe('useEffectOnce', () => {
    it('should error when casting to another type', () => {
      let MyComponent = () => {
        hooks.useEffectOnce(() => {
          console.log('should work');
        });

        hooks.useEffectOnce(() => {
          return () => console.log('should work');
        });

        // $ExpectError
        hooks.useEffectOnce('should not work');

        // $ExpectError
        hooks.useEffectOnce(() => 'should not work');
      };
    });
  });
});
