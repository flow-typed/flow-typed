// @flow
import React from 'react';
import { describe, it } from 'flow-typed-test';
import * as hooks from 'react-use';

describe('react-use', () => {
  it('useAsync', () => {
    let MyComponent = () => {
      // $FlowExpectedError
      hooks.useAsync(() => console.log('foo'));

      type ResponseT = { data: string, ... };
      let loading, error, value;
      [loading, error, value] = hooks.useAsync<ResponseT>(async () =>
        Promise.resolve({ data: 'foo' })
      );

      [loading, error, value] = hooks.useAsync<ResponseT>(async () =>
        // $FlowExpectedError
        Promise.resolve()
      );

      // $FlowExpectedError
      hooks.useAsync(async () => Promise.resolve(), { foo: 'bar' });
    };
  });

  it('useAsyncFn', () => {
    let MyComponent = () => {
      // $FlowExpectedError
      hooks.useAsync(() => console.log('foo'));

      type ResponseT = { data: string, ... };
      let loading, error, value, fn;
      [[loading, error, value], fn] = hooks.useAsyncFn<ResponseT>(async () =>
        Promise.resolve({ data: 'foo' })
      );

      [[loading, error, value], fn] = hooks.useAsyncFn<ResponseT>(async () =>
        // $FlowExpectedError
        Promise.resolve()
      );

      // $FlowExpectedError
      hooks.useAsync(async () => Promise.resolve(), { foo: 'bar' });
    };
  });

  it('usePrevious', () => {
    let MyComponent = () => {
      const foo: number = 0;
      // $FlowExpectedError
      const bar: string = hooks.usePrevious(foo);
    };
  });

  it('useEffectOnce', () => {
    let MyComponent = () => {
      hooks.useEffectOnce(() => {
        console.log('should work');
      });

      hooks.useEffectOnce(() => {
        return () => console.log('should work');
      });

      // $FlowExpectedError
      hooks.useEffectOnce('should not work');

      // $FlowExpectedError
      hooks.useEffectOnce(() => 'should not work');
    };
  });
});
