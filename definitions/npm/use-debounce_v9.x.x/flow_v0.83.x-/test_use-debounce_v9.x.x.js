// @flow
import { describe, test } from 'flow-typed-test';
import * as React from 'react';
import { useDebounce, useDebouncedCallback, useThrottledCallback } from 'use-debounce';

describe('use-debounce', () => {
  test('useDebounce', () => {
    const [value] = useDebounce('test', 1000, {
      maxWait: 1,
      leading: true,
      trailing: true,
      equalityFn: (a, b) => {
        return a.toLowerCase() === b.toLowerCase();
      },
    });
    (value: string);
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
  })
});
