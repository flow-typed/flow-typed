// @flow
// Adopted from: https://github.com/avajs/ava/blob/3a4afc6cf35aeffb6b019c6b75fa9b8e071bb53d/index.js.flow
// See: https://github.com/avajs/ava/pull/2098

declare module 'ava' {
  declare interface PromiseLike<R> {
    then(onFulfill: null | void, onReject: null | void): Promise<R>;
    then<U>(
      onFulfill: null | void,
      onReject: (error: mixed) => Promise<U> | U
    ): Promise<R | U>;
    then<U>(
      onFulfill: (value: R) => Promise<U> | U,
      onReject: null | void | ((error: mixed) => Promise<U> | U)
    ): Promise<U>;
  }

  declare interface ObservableLike {
    subscribe(observer: (value: mixed) => void): void;
  }

  declare type Constructor = Class<{
    constructor(...args: Array<mixed>): mixed,
    ...
  }>;

  declare type ThrowsExpectation = {|
    code?: string | number,
    instanceOf?: Constructor,
    is?: Error,
    message?: string | RegExp,
    name?: string
  |};

  declare type SnapshotOptions = {|
    id?: string
  |};

  declare type Assertions = {|
    assert: {|
      (actual: mixed, message?: string): void,
      skip(actual: mixed, message?: string): void,
    |},
    deepEqual: {|
      (actual: mixed, expected: mixed, message?: string): void,
      skip(actual: mixed, expected: mixed, message?: string): void,
    |},
    fail: {|
      (message?: string): void,
      skip(message?: string): void,
    |},
    false: {|
      (actual: mixed, message?: string): void,
      skip(actual: mixed, message?: string): void,
    |},
    falsy: {|
      (actual: mixed, message?: string): void,
      skip(actual: mixed, message?: string): void,
    |},
    is: {|
      (actual: mixed, expected: mixed, message?: string): void,
      skip(actual: mixed, expected: mixed, message?: string): void,
    |},
    not: {|
      (actual: mixed, expected: mixed, message?: string): void,
      skip(actual: mixed, expected: mixed, message?: string): void,
    |},
    notDeepEqual: {|
      (actual: mixed, expected: mixed, message?: string): void,
      skip(actual: mixed, expected: mixed, message?: string): void,
    |},
    notRegex: {|
      (string: string, regex: RegExp, message?: string): void,
      skip(string: string, regex: RegExp, message?: string): void,
    |},
    notThrows: {|
      (fn: () => mixed, message?: string): void,
      skip(fn: () => mixed, message?: string): void,
    |},
    notThrowsAsync: {|
      (fn: () => PromiseLike<mixed>, message?: string): Promise<void>,
      (promise: PromiseLike<mixed>, message?: string): Promise<void>,
      skip(fn: PromiseLike<mixed>, message?: string): Promise<void>,
      skip(promise: () => PromiseLike<mixed>, message?: string): Promise<void>,
    |},
    pass: {|
      (message?: string): void,
      skip(message?: string): void,
    |},
    regex: {|
      (string: string, regex: RegExp, message?: string): void,
      skip(string: string, regex: RegExp, message?: string): void,
    |},
    snapshot: {|
      (expected: mixed, message?: string): void,
      (expected: mixed, options: SnapshotOptions, message?: string): void,
      skip(expected: mixed, message?: string): void,
      skip(expected: mixed, options: SnapshotOptions, message?: string): void,
    |},
    throws: {|
      <ThrownError: Error>(
        fn: () => mixed,
        expectations?: null,
        message?: string
      ): ThrownError,
      <ThrownError: Error>(
        fn: () => mixed,
        constructor: Constructor,
        message?: string
      ): ThrownError,
      <ThrownError: Error>(
        fn: () => mixed,
        regex: RegExp,
        message?: string
      ): ThrownError,
      <ThrownError: Error>(
        fn: () => mixed,
        errorMessage: string,
        message?: string
      ): ThrownError,
      <ThrownError: Error>(
        fn: () => mixed,
        expectations: ThrowsExpectation,
        message?: string
      ): ThrownError,
      skip(fn: () => mixed, expectations?: mixed, message?: string): void,
    |},
    throwsAsync: {|
      <ThrownError: Error>(
        fn: () => PromiseLike<mixed>,
        expectations?: null,
        message?: string
      ): Promise<ThrownError>,
      <ThrownError: Error>(
        fn: () => PromiseLike<mixed>,
        constructor: Constructor,
        message?: string
      ): Promise<ThrownError>,
      <ThrownError: Error>(
        fn: () => PromiseLike<mixed>,
        regex: RegExp,
        message?: string
      ): Promise<ThrownError>,
      <ThrownError: Error>(
        fn: () => PromiseLike<mixed>,
        errorMessage: string,
        message?: string
      ): Promise<ThrownError>,
      <ThrownError: Error>(
        fn: () => PromiseLike<mixed>,
        expectations: ThrowsExpectation,
        message?: string
      ): Promise<ThrownError>,
      <ThrownError: Error>(
        promise: PromiseLike<mixed>,
        expectations?: null,
        message?: string
      ): Promise<ThrownError>,
      <ThrownError: Error>(
        promise: PromiseLike<mixed>,
        constructor: Constructor,
        message?: string
      ): Promise<ThrownError>,
      <ThrownError: Error>(
        promise: PromiseLike<mixed>,
        regex: RegExp,
        message?: string
      ): Promise<ThrownError>,
      <ThrownError: Error>(
        promise: PromiseLike<mixed>,
        errorMessage: string,
        message?: string
      ): Promise<ThrownError>,
      <ThrownError: Error>(
        promise: PromiseLike<mixed>,
        expectations: ThrowsExpectation,
        message?: string
      ): Promise<ThrownError>,
      skip(thrower: mixed, expectations?: mixed, message?: string): void,
    |},
    true: {|
      (actual: mixed, message?: string): void,
      skip(actual: mixed, message?: string): void,
    |},
    truthy: {|
      (actual: mixed, message?: string): void,
      skip(actual: mixed, message?: string): void,
    |},
  |};

  declare type ExecutionContext<Context> = Assertions & {|
    context: Context,
    +title: string,

    log: {|
      (...values: Array<mixed>): void,
      skip(...values: Array<mixed>): void,
    |},
    plan: {|
      (count: number): void,
      skip(count: number): void,
    |},
    timeout(ms: number): void,
  |};

  declare type CbExecutionContext<Context> = ExecutionContext<Context> & {|
    end(error?: mixed): void,
  |};

  declare type ImplementationResult = PromiseLike<void> | ObservableLike | void;
  declare type Implementation<Context> = (
    t: ExecutionContext<Context>
  ) => ImplementationResult;
  declare type CbImplementation<Context> = (
    t: CbExecutionContext<Context>
  ) => ImplementationResult;

  declare type Macro<Context> = {|
    (t: ExecutionContext<Context>, ...args: Array<mixed>): ImplementationResult,
    title?: (providedTitle: string | void, ...args: Array<mixed>) => string,
  |};

  declare type CbMacro<Context> = {|
    (t: CbExecutionContext<Context>, ...args: Array<mixed>): ImplementationResult,
    title?: (providedTitle: string | void, ...args: Array<mixed>) => string,
  |};

  declare export type TestInterface<Context = void> = {|
    (
      title: string,
      implementation: Implementation<Context> | Macro<Context>
    ): void,
    (
      title: string,
      macro: Macro<Context> | Macro<Context>[],
      ...args: Array<mixed>
    ): void,

    (macro: Macro<Context> | Macro<Context>[], ...args: Array<mixed>): void,
    after: After<Context>,
    afterEach: After<Context>,
    before: Before<Context>,
    beforeEach: Before<Context>,
    cb: Cb<Context>,
    failing: FailingInterface<Context>,
    serial: SerialInterface<Context>,
    only: OnlyInterface<Context>,
    skip: Skip<Context>,
    todo: TodoDeclaration,
  |};

  declare type After<Context> = {|
    (implementation: Implementation<Context> | Macro<Context>): void,
    (macro: Macro<Context> | Macro<Context>[], ...args: Array<mixed>): void,
    (
      title: string,
      implementation: Implementation<Context> | Macro<Context>
    ): void,
    (
      title: string,
      macro: Macro<Context> | Macro<Context>[],
      ...args: Array<mixed>
    ): void,
    always: {|
      (implementation: Implementation<Context> | Macro<Context>): void,
      (macro: Macro<Context> | Macro<Context>[], ...args: Array<mixed>): void,
      (
        title: string,
        implementation: Implementation<Context> | Macro<Context>
      ): void,
      (
        title: string,
        macro: Macro<Context> | Macro<Context>[],
        ...args: Array<mixed>
      ): void,
      cb: HookCb<Context>,
      skip: HookSkip<Context>,
    |},
    cb: HookCb<Context>,
    skip: HookSkip<Context>,
  |};

  declare type Before<Context> = {|
    (implementation: Implementation<Context> | Macro<Context>): void,
    (macro: Macro<Context> | Macro<Context>[], ...args: Array<mixed>): void,
    (
      title: string,
      implementation: Implementation<Context> | Macro<Context>
    ): void,
    (
      title: string,
      macro: Macro<Context> | Macro<Context>[],
      ...args: Array<mixed>
    ): void,
    cb: HookCb<Context>,
    skip: HookSkip<Context>,
  |};

  declare type Cb<Context> = {|
    (
      title: string,
      implementation: CbImplementation<Context> | CbMacro<Context>
    ): void,
    (
      title: string,
      macro: CbMacro<Context> | CbMacro<Context>[],
      ...args: Array<mixed>
    ): void,
    (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<mixed>): void,
    failing: {|
      (
        title: string,
        implementation: CbImplementation<Context> | CbMacro<Context>
      ): void,
      (
        title: string,
        macro: CbMacro<Context> | CbMacro<Context>[],
        ...args: Array<mixed>
      ): void,
      (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<mixed>): void,
      only: CbOnlyInterface<Context>,
      skip: CbSkip<Context>,
    |},
    only: CbOnlyInterface<Context>,
    skip: CbSkip<Context>,
  |};

  declare type CbOnlyInterface<Context> = {|
    (
      title: string,
      implementation: CbImplementation<Context> | CbMacro<Context>
    ): void,
    (
      title: string,
      macro: CbMacro<Context> | CbMacro<Context>[],
      ...args: Array<mixed>
    ): void,
    (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<mixed>): void,
  |};

  declare type CbSkip<Context> = {|
    (
      title: string,
      implementation: CbImplementation<Context> | CbMacro<Context>
    ): void,
    (
      title: string,
      macro: CbMacro<Context> | CbMacro<Context>[],
      ...args: Array<mixed>
    ): void,
    (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<mixed>): void,
  |};

  declare type FailingInterface<Context> = {|
    (
      title: string,
      implementation: Implementation<Context> | Macro<Context>
    ): void,
    (
      title: string,
      macro: Macro<Context> | Macro<Context>[],
      ...args: Array<mixed>
    ): void,
    (macro: Macro<Context> | Macro<Context>[], ...args: Array<mixed>): void,
    only: OnlyInterface<Context>,
    skip: Skip<Context>,
  |};

  declare type HookCb<Context> = {|
    (implementation: CbImplementation<Context> | CbMacro<Context>): void,
    (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<mixed>): void,
    (
      title: string,
      implementation: CbImplementation<Context> | CbMacro<Context>
    ): void,
    (
      title: string,
      macro: CbMacro<Context> | CbMacro<Context>[],
      ...args: Array<mixed>
    ): void,
    skip: HookCbSkip<Context>,
  |};

  declare type HookCbSkip<Context> = {|
    (implementation: CbImplementation<Context> | CbMacro<Context>): void,
    (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<mixed>): void,
    (
      title: string,
      implementation: CbImplementation<Context> | CbMacro<Context>
    ): void,
    (
      title: string,
      macro: CbMacro<Context> | CbMacro<Context>[],
      ...args: Array<mixed>
    ): void,
  |};

  declare type HookSkip<Context> = {|
    (implementation: Implementation<Context> | Macro<Context>): void,
    (macro: Macro<Context> | Macro<Context>[], ...args: Array<mixed>): void,
    (
      title: string,
      implementation: Implementation<Context> | Macro<Context>
    ): void,
    (
      title: string,
      macro: Macro<Context> | Macro<Context>[],
      ...args: Array<mixed>
    ): void,
  |};

  declare type OnlyInterface<Context> = {|
    (
      title: string,
      implementation: Implementation<Context> | Macro<Context>
    ): void,
    (
      title: string,
      macro: Macro<Context> | Macro<Context>[],
      ...args: Array<mixed>
    ): void,
    (macro: Macro<Context> | Macro<Context>[], ...args: Array<mixed>): void,
  |};

  declare type SerialInterface<Context> = {|
    (
      title: string,
      implementation: Implementation<Context> | Macro<Context>
    ): void,
    (
      title: string,
      macro: Macro<Context> | Macro<Context>[],
      ...args: Array<mixed>
    ): void,
    (macro: Macro<Context> | Macro<Context>[], ...args: Array<mixed>): void,
    after: After<Context>,
    afterEach: After<Context>,
    before: Before<Context>,
    beforeEach: Before<Context>,
    cb: Cb<Context>,
    failing: FailingInterface<Context>,
    only: OnlyInterface<Context>,
    skip: Skip<Context>,
    todo: TodoDeclaration,
    meta: {|
      file: string,
    |},
  |};

  declare type Skip<Context> = {|
    (
      title: string,
      implementation: Implementation<Context> | Macro<Context>
    ): void,
    (
      title: string,
      macro: Macro<Context> | Macro<Context>[],
      ...args: Array<mixed>
    ): void,
    (macro: Macro<Context> | Macro<Context>[], ...args: Array<mixed>): void,
  |};

  declare type TodoDeclaration = (title: string) => void;

  declare export default TestInterface<>;
}
