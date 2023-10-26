// @flow
import { describe, test } from 'flow-typed-test';
import * as React from 'react';
import { useDebounce, useDebouncedCallback, useThrottledCallback } from 'use-debounce';

describe('use-debounce', () => {
  test('useDebounce', () => {
    const [value, debouncedState] = useDebounce('test', 1000, {
      maxWait: 1,
      leading: true,
      trailing: true,
      equalityFn: (a, b) => {
        return a.toLowerCase() === b.toLowerCase();
      },
    });
    (value: string);

    // $FlowExpectedError[incompatible-cast] infers as a string
    (value: number);
  });

  test('useDebouncedCallback', () => {
    const [value, setValue] = React.useState('test');
    // Debounce callback
    const debounced = useDebouncedCallback(
      // function
      (value: string) => {
        setValue(value);
      },
      // delay in ms
      1000
    );

    debounced('test');
    // $FlowExpectedError[incompatible-call] it matches the type of the callback
    debounced(123);

    debounced.cancel();
    debounced.flush();
    debounced.isPending();

    // $FlowExpectedError[incompatible-call]
    debounced.foo();
  });

  test('useThrottledCallback', () => {
    const [value, setValue] = React.useState('test');
    // Debounce callback
    const debounced = useThrottledCallback(
      // function
      (value: string) => {
        setValue(value);
      },
      // delay in ms
      1000
    );

    debounced('test');
    // $FlowExpectedError[incompatible-call] it matches the type of the callback
    debounced(123);

    debounced.cancel();
    debounced.flush();
    debounced.isPending();

    // $FlowExpectedError[incompatible-call]
    debounced.foo();
  });
});
