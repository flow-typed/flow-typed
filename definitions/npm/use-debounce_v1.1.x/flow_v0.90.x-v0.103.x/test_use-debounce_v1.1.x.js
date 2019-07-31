// @flow

import { describe, it } from 'flow-typed-test';

import React, { useState, useEffect } from 'react';
import { useDebounce, useDebouncedCallback } from 'use-debounce';

describe('The `useDebounce` hook', () => {
  it('should validate on default usage', () => {
    function Input() {
      const [text, setText] = useState('Hello');
      const [value] = useDebounce(text, 1000);

      return (
        <>
          <input
            defaultValue="Hello"
            onChange={evt => {
              setText(evt.target.value);
            }}
          />
          <p>Actual value: {text}</p>
          <p>Debounce value: {value}</p>
        </>
      );
    }
  });

  it('should accept valid signatures', () => {
    useDebounce('', 100);
    useDebounce('', 100, {});
    useDebounce('', 100, { maxWait: 100 });

    // $ExpectError
    useDebounce(null);
    // $ExpectError
    useDebounce('', {});
    // $ExpectError
    useDebounce('', 100, { test: 100 });
  });

  it('should return typed destructured vars', () => {
    const [value, cancel] = useDebounce('value', 100);

    (value: string);
    (cancel: () => void);
  });
});

describe('The `useDebouncedCallback` hook', () => {
  it('should validate on default usage', () => {
    function One() {
      const [value, setValue] = useState('Hello');
      const [debouncedCallback] = useDebouncedCallback(
        value => {
          setValue(value);
        },
        1000,
        []
      );

      return (
        <div>
          <input
            defaultValue="Hello"
            onChange={evt => debouncedCallback(evt.target.value)}
          />
          <p>Debounced value: {value}</p>
        </div>
      );
    }

    function Two() {
      const [value, setValue] = useState('Hello');
      const [debouncedFunction, cancel] = useDebouncedCallback(
        value => {
          setValue(value);
        },
        500,
        [],
        { maxWait: 2000 }
      );

      return (
        <>
          <input
            defaultValue="Hello"
            onChange={evt => debouncedFunction(evt.target.value)}
          />
          <p>Debounced value: {value}</p>
          <button onClick={cancel}>Cancel Debounce cycle</button>
        </>
      );
    }

    function Three() {
      const [debouncedCallback, cancel, callPending] = useDebouncedCallback(
        value => {},
        500,
        [],
        { maxWait: 2000 }
      );

      useEffect(
        () => () => {
          callPending();
        },
        []
      );

      return (
        <input
          defaultValue="Hello"
          onChange={evt => debouncedCallback(evt.target.value)}
        />
      );
    }
  });

  it('should accept valid signatures', () => {
    useDebouncedCallback(value => {}, 100, []);
    useDebouncedCallback(value => {}, 100, []);
    useDebouncedCallback(value => {}, 100, [], { maxWait: 100 });

    // $ExpectError
    useDebouncedCallback(null);
    // $ExpectError
    useDebouncedCallback(() => {}, {});
    // $ExpectError
    useDebouncedCallback(() => {}, 100, { test: 100 });
  });

  it('should return typed destructured vars', () => {
    const [debouncedCallback, cancel, callPending] = useDebouncedCallback(
      () => {},
      100,
      []
    );

    (debouncedCallback: () => void);
    (cancel: () => void);
    (callPending: () => void);
  });
});
