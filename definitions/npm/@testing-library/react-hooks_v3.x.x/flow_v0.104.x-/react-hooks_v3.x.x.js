// @flow
// Initially adapted from: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/testing-library__react-hooks.

declare module '@testing-library/react-hooks' {
  declare export type RenderHookOptions<P> = {|
    +initialProps?: P,
    +wrapper?: React$ComponentType<{|
      ...P,
      +children: React$Node,
    |}>,
  |};

  declare export type WaitOptions = {|
    +interval?: number,
    +timeout?: number,
    +suppressErrors?: boolean,
  |};

  declare type HookResult<R> = {|
    +current: R,
    +error?: Error,
  |};

  declare type RenderHookResult<P, R> = {|
    +result: HookResult<R>,
    +waitForNextUpdate: (
      options?: $Diff<WaitOptions, $Diff<WaitOptions, {| +timeout?: number |}>>
    ) => Promise<void>,
    +waitForValueToChange: (
      selector: () => any,
      options?: WaitOptions
    ) => Promise<void>,
    +waitFor: (
      callback: () => boolean | void,
      options?: WaitOptions
    ) => Promise<void>,
    +unmount: () => boolean,
    +rerender: (newProps?: P) => void,
  |};

  // From `react-test-renderer`.
  // See: https://github.com/flow-typed/flow-typed/blob/master/definitions/npm/react-test-renderer_v16.x.x/.

  declare type Thenable = {
    then(resolve: () => mixed, reject?: () => mixed): mixed,
    ...
  };

  /**
   * To prepare a component for assertions, wrap the code rendering it and
   * performing updates inside an act() call. This makes your test run closer to
   * how React works in the browser.
   */
  declare export function act(callback: () => void | Promise<void>): Thenable;

  /**
   * Renders a test component that will call the provided `callback`, including
   * any hooks it calls, every time it renders.
   */
  declare export function renderHook<P, R>(
    callback: (props: P) => R,
    options?: RenderHookOptions<P>
  ): RenderHookResult<P, R>;

  /**
   * Unmounts any rendered hooks rendered with `renderHook`, ensuring all
   * effects have been flushed.
   */
  declare export function cleanup(): Promise<void>;
}
