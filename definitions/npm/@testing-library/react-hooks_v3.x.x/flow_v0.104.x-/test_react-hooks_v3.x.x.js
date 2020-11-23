// @flow

import * as React from 'react';
import { act, renderHook, cleanup } from '@testing-library/react-hooks';
import { describe, it } from 'flow-typed-test';

describe('act', () => {
  it('should fail on invalid inputs', () => {
    // $FlowExpectedError[incompatible-call]
    act(1);
    // $FlowExpectedError[extra-arg]
    act(() => {}, 1);
    // $FlowExpectedError[incompatible-call]
    act(() => 1);
  });

  it('should pass on correct inputs', () => {
    act(() => {});
    act(() => Promise.resolve());
  });

  it('should fail on incorrect usage of result', () => {
    // $FlowExpectedError[incompatible-type]
    act(() => {}) + 1;
    // $FlowExpectedError[prop-missing]
    act(() => {}).doesNotExist();
    // $FlowExpectedError[incompatible-call]
    act(() => {}).then(1);
    // $FlowExpectedError[incompatible-call]
    act(() => {}).then(() => {}, 1);
  });

  it('should pass on correct usage of result', () => {
    act(() => {}).then(() => {});
    act(() => {}).then(
      () => {},
      () => {}
    );
  });
});

describe('renderHook', () => {
  const useHook = (initialValue: number) => {
    const [value, setValue] = React.useState(initialValue);
    return { value, setValue };
  };

  const TestContext = React.createContext<number>(10);

  describe('options', () => {
    it('should accept valid callbacks', () => {
      renderHook(() => {});
      renderHook(() => useHook(0));
      // $FlowExpectedError[incompatible-call]
      renderHook();
      // $FlowExpectedError[incompatible-call]
      renderHook(0);
    });

    it('should accept valid initial props', () => {
      renderHook(({ initialValue }) => useHook(initialValue), {
        initialProps: { initialValue: 0 },
      });
      // $FlowExpectedError[incompatible-call]
      renderHook(({ initialValue }) => useHook(initialValue), {
        initialProps: { initialValue: 'bad' },
      });
      // $FlowExpectedError[prop-missing]
      renderHook(({ initialValue }) => useHook(initialValue), {
        initialProps: { missing: 'bad' },
      });
    });

    it('should accept valid wrappers', () => {
      renderHook(() => useHook(0), { wrapper: () => null });
      renderHook(() => useHook(0), {
        wrapper: ({ children }) => {
          (children: React.Node);

          return null;
        },
      });
      renderHook(() => useHook(0), {
        initialProps: { initialValue: 0 },
        wrapper: ({ initialValue }) => {
          (initialValue: number);

          return null;
        },
      });
      // $FlowExpectedError[incompatible-call]
      renderHook(() => useHook(0), { wrapper: null });
    });
  });

  describe('return', () => {
    it('should contain the result', () => {
      const { result } = renderHook(() => useHook(0));

      result.current.value + 1;
      result.current.value + 'bad';
      result.current.setValue(20);
      result.current.setValue('bad');

      result.error && result.error.message.toString();
      // $FlowExpectedError[incompatible-use]
      result.error.message;
    });

    it('should contain the rerender function', () => {
      const { rerender } = renderHook(
        ({ initialValue }: {| initialValue: number |}) => useHook(initialValue),
        { initialProps: { initialValue: 0 } }
      );

      rerender();
      rerender({ initialValue: 0 });
      // $FlowExpectedError[incompatible-exact]
      rerender({});
      // $FlowExpectedError[incompatible-call]
      rerender({ initialValue: 'bad' });
      // $FlowExpectedError[prop-missing]
      rerender({ initialValue: 0, missing: 'bad' });
    });

    it('should contain the unmount function', () => {
      const { unmount } = renderHook(() => useHook(0));

      (unmount: () => boolean);
    });

    it('should contain the waitForNextUpdate function', async () => {
      const { waitForNextUpdate } = renderHook(() => useHook(0));

      await waitForNextUpdate();
      await waitForNextUpdate({});
      await waitForNextUpdate({ timeout: 10 });
      // $FlowExpectedError[incompatible-call]
      await waitForNextUpdate({ timeout: 'bad' });
      // $FlowExpectedError[prop-missing]
      await waitForNextUpdate({ missing: 'bad' });
    });

    it('should contain the waitFor function', async () => {
      const { waitFor } = renderHook(() => useHook(0));

      await waitFor(() => {});
      await waitFor(() => true);
      // $FlowExpectedError[incompatible-call]
      await waitFor(() => null);

      await waitFor(() => {}, {});

      await waitFor(() => {}, { interval: 0 });
      // $FlowExpectedError[incompatible-call]
      await waitFor(() => {}, { interval: null });

      await waitFor(() => {}, { timeout: 0 });
      // $FlowExpectedError[incompatible-call]
      await waitFor(() => {}, { timeout: null });

      await waitFor(() => {}, { suppressErrors: true });
      // $FlowExpectedError[incompatible-call]
      await waitFor(() => {}, { suppressErrors: null });
    });

    it('should contain the waitForValueToChange function', async () => {
      const { waitForValueToChange } = renderHook(() => useHook(0));

      await waitForValueToChange(() => {});

      await waitForValueToChange(() => {}, {});

      await waitForValueToChange(() => {}, { interval: 0 });
      // $FlowExpectedError[incompatible-call]
      await waitForValueToChange(() => {}, { interval: null });

      await waitForValueToChange(() => {}, { timeout: 0 });
      // $FlowExpectedError[incompatible-call]
      await waitForValueToChange(() => {}, { timeout: null });

      await waitForValueToChange(() => {}, { suppressErrors: true });
      // $FlowExpectedError[incompatible-call]
      await waitForValueToChange(() => {}, { suppressErrors: null });
    });
  });
});

describe('cleanup', () => {
  it('should return the correct type', () => {
    (cleanup(): Promise<void>);
    // $FlowExpectedError[incompatible-cast]
    (cleanup(): void);
  });
});
