declare module "redux-saga" {
  declare export var SAGA_LOCATION: "@@redux-saga/LOCATION";
  declare export var CANCEL: "@@redux-saga/CANCEL_PROMISE";

  declare export type TEnd = {| +type: "@@redux-saga/CHANNEL_END" |};
  declare export var END: TEnd;

  declare export var isEnd: {
    (input: TEnd): true,
    (input: mixed): false
  };

  declare export type Predicate<T> = (arg: T) => boolean;

  declare export type MulticastChannel<T> = $ReadOnly<{|
    take(cb: (message: T | TEnd) => void, matcher?: Predicate<T>): void,
    put(message: T | TEnd): void,
    close(): void
  |}>;

  declare export interface Buffer<T> {
    isEmpty(): boolean;
    put(message: T): void;
    take(): T | void;
    flush(): Array<T>;
  }

  declare export interface Task<T> {
    isRunning: () => boolean;
    isCancelled: () => boolean;
    result: () => T | void;
    error: () => Error | void;
    cancel: () => void;
    done: Promise<T>;
  }

  declare export interface SagaMonitor {
    effectTriggered: (options: {
      +effectId: number,
      +parentEffectId: number,
      +label: string,
      +effect: Effect
    }) => void;
    effectResolved: (effectId: number, result: mixed) => void;
    effectRejected: (effectId: number, error: Error) => void;
    effectCancelled: (effectId: number) => void;
    actionDispatched: (action: mixed) => void;
  }

  declare export type Saga<T> = Generator<Effect, T, any>;

  declare export type Unsubscribe = () => void;

  declare export type Subscribe<T> = (
    cb: (input: T | TEnd) => void
  ) => Unsubscribe;

  declare export interface EventChannel<T> {
    take(cb: (message: T | TEnd) => void): void;
    flush(cb: (items: Array<T> | TEnd) => void): void;
    close(): void;
  }

  declare export var eventChannel: <T>(
    subscribe: Subscribe<T>,
    buffer?: Buffer<T>
  ) => EventChannel<T>;

  declare export interface Channel<T> {
    take(cb: (message: T | TEnd) => void): void;
    put(message: T | TEnd): void;
    flush(cb: (items: Array<T> | TEnd) => void): void;
    close(): void;
  }

  declare export function channel<T>(buffer?: Buffer<T>): Channel<T>;

  declare export var buffers: $ReadOnly<{|
    none: <T>() => Buffer<T>,
    fixed: <T>(limit?: number) => Buffer<T>,
    dropping: <T>(limit?: number) => Buffer<T>,
    sliding: <T>(limit?: number) => Buffer<T>,
    expanding: <T>(initialSize?: number) => Buffer<T>
  |}>;

  declare export function multicastChannel<T>(): MulticastChannel<T>;

  declare export function stdChannel<T>(): MulticastChannel<T>;

  declare type RunSagaOptions = {
    +subscribe?: (emit: (input: any) => any) => () => void,
    +dispatch?: (output: any) => any,
    +getState?: () => any,
    +sagaMonitor?: SagaMonitor,
    +logger?: (
      level: "info" | "warning" | "error",
      ...args: Array<any>
    ) => void,
    +onError?: (error: Error) => void
  };

  declare export var runSaga: {
    <R, Fn: () => Saga<R>>(options: RunSagaOptions, saga: Fn): Task<R>,
    <R, T1, Fn: (t1: T1) => Saga<R>>(
      options: RunSagaOptions,
      saga: Fn,
      t1: T1
    ): Task<R>,
    <R, T1, T2, Fn: (t1: T1, t2: T2) => Saga<R>>(
      options: RunSagaOptions,
      saga: Fn,
      t1: T1,
      t2: T2
    ): Task<R>,
    <R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => Saga<R>>(
      options: RunSagaOptions,
      saga: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): Task<R>,
    <R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => Saga<R>>(
      options: RunSagaOptions,
      saga: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): Task<R>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => Saga<R>
    >(
      options: RunSagaOptions,
      saga: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): Task<R>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => Saga<R>
    >(
      options: RunSagaOptions,
      saga: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): Task<R>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => Saga<R>
    >(
      options: RunSagaOptions,
      saga: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): Task<R>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8
      ) => Saga<R>
    >(
      options: RunSagaOptions,
      saga: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): Task<R>
  };

  declare interface SagaMiddleware {
    // TODO: This should be aligned with the official redux typings sometime
    (api: any): (next: any) => any;
    run: {
      <R, Fn: () => Saga<R>>(saga: Fn): Task<R>,
      <R, T1, Fn: (t1: T1) => Saga<R>>(saga: Fn, t1: T1): Task<R>,
      <R, T1, T2, Fn: (t1: T1, t2: T2) => Saga<R>>(
        saga: Fn,
        t1: T1,
        t2: T2
      ): Task<R>,
      <R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => Saga<R>>(
        saga: Fn,
        t1: T1,
        t2: T2,
        t3: T3
      ): Task<R>,
      <R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => Saga<R>>(
        saga: Fn,
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4
      ): Task<R>,
      <
        R,
        T1,
        T2,
        T3,
        T4,
        T5,
        Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => Saga<R>
      >(
        saga: Fn,
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5
      ): Task<R>,
      <
        R,
        T1,
        T2,
        T3,
        T4,
        T5,
        T6,
        Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => Saga<R>
      >(
        saga: Fn,
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6
      ): Task<R>,
      <
        R,
        T1,
        T2,
        T3,
        T4,
        T5,
        T6,
        T7,
        Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => Saga<R>
      >(
        saga: Fn,
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7
      ): Task<R>,
      <
        R,
        T1,
        T2,
        T3,
        T4,
        T5,
        T6,
        T7,
        T8,
        Fn: (
          t1: T1,
          t2: T2,
          t3: T3,
          t4: T4,
          t5: T5,
          t6: T6,
          t7: T7,
          t8: T8
        ) => Saga<R>
      >(
        saga: Fn,
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8
      ): Task<R>
    };
  }

  declare type createSagaMiddleware = (options?: {
    +sagaMonitor?: SagaMonitor,
    +logger?: (
      level: "info" | "warning" | "error",
      ...args: Array<any>
    ) => void,
    +onError?: (error: Error) => void
  }) => SagaMiddleware;

  declare export default createSagaMiddleware;

  // Effect types
  declare export type PatternPart = string | (any => boolean);
  declare export type Pattern = PatternPart | $ReadOnlyArray<PatternPart>;

  declare export interface IEffect<T, P> {
    +type: T;
    +payload: P;
  }

  declare export type TakeEffect<
    P: Pattern | void,
    C: Channel<*> | void,
    M: true | void
  > = IEffect<
    "TAKE",
    $ReadOnly<{|
      pattern: P,
      channel: C,
      maybe: M
    |}>
  >;

  declare export type PutEffect<
    A: Object,
    C: Channel<*> | null,
    R: { resolve: true } | void
  > = IEffect<
    "PUT",
    $ReadOnly<{|
      action: A,
      channel: C,
      ...$Exact<R>
    |}>
  >;

  declare export type CallEffect<
    Ctx,
    Fn: Function,
    Args: $ReadOnlyArray<*>
  > = IEffect<
    "CALL",
    $ReadOnly<{|
      context: Ctx,
      fn: Fn,
      args: Args
    |}>
  >;

  declare export type ForkEffect<
    Ctx,
    Fn: Function,
    D: { detached: true } | void,
    Args: $ReadOnlyArray<*>
  > = IEffect<
    "FORK",
    $ReadOnly<{|
      context: Ctx,
      fn: Fn,
      args: Args,
      ...$Exact<D>
    |}>
  >;

  declare export function detach<T1, T2, T3>(
    effect: ForkEffect<T1, T2, *, T3>
  ): ForkEffect<T1, T2, { detached: true }, T3>;

  declare export type CpsEffect<
    Ctx,
    Fn: Function,
    Args: $ReadOnlyArray<*>
  > = IEffect<
    "CPS",
    $ReadOnly<{|
      context: Ctx,
      fn: Fn,
      args: Args
    |}>
  >;

  declare export type JoinEffect<T: Task<*>> = IEffect<"JOIN", T>;

  declare export type SELF_CANCELLATION = "@@redux-saga/SELF_CANCELLATION"; // Symbol

  declare export type CancelEffect<T: Task<*> | SELF_CANCELLATION> = IEffect<
    "CANCEL",
    T
  >;

  declare export type SelectEffect<
    Fn: Function | void,
    Args: $ReadOnlyArray<*>
  > = IEffect<
    "SELECT",
    $ReadOnly<{|
      selector: Fn,
      args: Args
    |}>
  >;

  declare export type ActionChannelEffect<
    T,
    P: Pattern,
    B: Buffer<T> | void
  > = IEffect<
    "ACTION_CHANNEL",
    $ReadOnly<{|
      buffer: B,
      pattern: P
    |}>
  >;

  declare export type FlushEffect<T: Channel<*> | void> = IEffect<"FLUSH", T>;

  declare export type CancelledEffect = IEffect<"CANCELLED", {}>;

  declare export type SetContextEffect<T: {}> = IEffect<"SET_CONTEXT", T>;

  declare export type GetContextEffect<T> = IEffect<"GET_CONTEXT", T>;

  declare export type RaceEffect<
    R: { +[name: string]: Effect } | $ReadOnlyArray<Effect>
  > = IEffect<"RACE", R>;

  declare export type AllEffect = IEffect<
    "ALL",
    { +[name: string]: Effect } | $ReadOnlyArray<Effect>
  >;

  declare export type Effect =
    | TakeEffect<*, *, *>
    | PutEffect<*, *, *>
    | CallEffect<*, *, *>
    | ForkEffect<*, *, *, *>
    | CpsEffect<*, *, *>
    | JoinEffect<*>
    | CancelEffect<*>
    | SelectEffect<*, *>
    | ActionChannelEffect<*, *>
    | FlushEffect<*>
    | CancelledEffect
    | SetContextEffect<*>
    | GetContextEffect<*>
    | RaceEffect<*>
    | AllEffect;
}

declare module "redux-saga/effects" {
  import type {
    ActionChannelEffect,
    AllEffect,
    Buffer,
    CallEffect,
    CancelEffect,
    CancelledEffect,
    Channel,
    CpsEffect,
    Effect,
    FlushEffect,
    ForkEffect,
    GetContextEffect,
    JoinEffect,
    Pattern,
    PutEffect,
    RaceEffect,
    Saga,
    SelectEffect,
    SetContextEffect,
    TakeEffect,
    Task
  } from "redux-saga";

  declare export var retry: {
    <R, MT: number, D: number, Fn: () => R>(
      maxTries: MT,
      delay: D,
      fn: Fn
    ): CallEffect<null, Function, [MT, D, Fn]>,

    <R, T1, MT: number, D: number, Fn: T1 => R>(
      maxTries: MT,
      delay: D,
      fn: Fn,
      T1
    ): CallEffect<null, Function, [MT, D, Fn, T1]>,

    <R, T1, T2, MT: number, D: number, Fn: (T1, T2) => R>(
      maxTries: MT,
      delay: D,
      fn: Fn,
      T1,
      T2
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2]>,

    <R, T1, T2, T3, MT: number, D: number, Fn: (T1, T2, T3) => R>(
      maxTries: MT,
      delay: D,
      fn: Fn,
      T1,
      T2,
      T3
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3]>,

    <R, T1, T2, T3, T4, MT: number, D: number, Fn: (T1, T2, T3, T4) => R>(
      maxTries: MT,
      delay: D,
      fn: Fn,
      T1,
      T2,
      T3,
      T4
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3, T4]>,

    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      MT: number,
      D: number,
      Fn: (T1, T2, T3, T4, T5) => R
    >(
      maxTries: MT,
      delay: D,
      fn: Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3, T4, T5]>,

    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      MT: number,
      D: number,
      Fn: (T1, T2, T3, T4, T5, T6) => R
    >(
      maxTries: MT,
      delay: D,
      fn: Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3, T4, T5, T6]>
  };

  declare export var debounce: {
    <R, MS: number, P: Pattern, Fn: () => R>(
      ms: MS,
      pattern: P,
      saga: Fn
    ): ForkEffect<null, Function, void, void, [MS, P, Fn]>,

    <R, T1, MS: number, P: Pattern, Fn: T1 => R>(
      ms: MS,
      pattern: P,
      saga: Fn,
      T1
    ): ForkEffect<null, Function, void, void, [MS, P, Fn, T1]>,

    <R, T1, T2, MS: number, P: Pattern, Fn: (T1, T2) => R>(
      ms: MS,
      pattern: P,
      saga: Fn,
      T1,
      T2
    ): ForkEffect<null, Function, void, void, [MS, P, Fn, T1, T2]>,

    <R, T1, T2, T3, MS: number, P: Pattern, Fn: (T1, T2, T3) => R>(
      ms: MS,
      pattern: P,
      saga: Fn,
      T1,
      T2,
      T3
    ): ForkEffect<null, Function, void, void, [MS, P, Fn, T1, T2, T3]>,

    <R, T1, T2, T3, T4, MS: number, P: Pattern, Fn: (T1, T2, T3, T4) => R>(
      ms: MS,
      pattern: P,
      saga: Fn,
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<null, Function, void, void, [MS, P, Fn, T1, T2, T3, T4]>,

    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      MS: number,
      P: Pattern,
      Fn: (T1, T2, T3, T4, T5) => R
    >(
      ms: MS,
      pattern: P,
      saga: Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<null, Function, void, void, [MS, P, Fn, T1, T2, T3, T4, T5]>,

    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      MS: number,
      P: Pattern,
      Fn: (T1, T2, T3, T4, T5, T6) => R
    >(
      ms: MS,
      pattern: P,
      saga: Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<
      null,
      Function,
      void,
      void,
      [MS, P, Fn, T1, T2, T3, T4, T5, T6]
    >
  };

  declare export function delay<T1: number>(
    timeout: T1
  ): CallEffect<null, (ms: T1) => Promise<true>, [T1]>;

  declare export var take: {
    <P: Pattern>(pattern: P): TakeEffect<P, void, void>,
    (channel: Channel<*>): TakeEffect<void, Channel<*>, void>,
    +maybe: {
      <P: Pattern>(pattern: P): TakeEffect<P, void, true>,
      (channel: Channel<*>): TakeEffect<void, Channel<*>, true>
    }
  };

  declare export var put: {
    <A: Object>(action: A): PutEffect<A, null, void>,
    <A: Object>(channel: Channel<*>, action: A): PutEffect<A, Channel<*>, void>
  };

  declare export var putResolve: {
    <A: Object>(action: A): PutEffect<A, null, { resolve: true }>,
    <A: Object>(
      channel: Channel<*>,
      action: A
    ): PutEffect<A, Channel<*>, { resolve: true }>
  };

  declare export var call: {
    // normal calls
    <R, Fn: () => R>(fn: Fn): CallEffect<null, Fn, []>,
    <R, T1, Fn: (t1: T1) => R>(fn: Fn, t1: T1): CallEffect<null, Fn, [T1]>,
    <R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      fn: Fn,
      t1: T1,
      t2: T2
    ): CallEffect<null, Fn, [T1, T2]>,
    <R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): CallEffect<null, Fn, [T1, T2, T3]>,
    <R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): CallEffect<null, Fn, [T1, T2, T3, T4]>,
    <R, T1, T2, T3, T4, T5, Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5, T6]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // with context
    <Ctx, R, Fn: () => R>(cfn: [Ctx, Fn]): CallEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: (t1: T1) => R>(
      cfn: [Ctx, Fn],
      t1: T1
    ): CallEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2
    ): CallEffect<Ctx, Fn, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3
    ): CallEffect<Ctx, Fn, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var apply: {
    <Ctx, R, Fn: () => R>(ctx: Ctx, fn: Fn): CallEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: (t1: T1) => R>(
      ctx: Ctx,
      fn: Fn,
      t1: T1
    ): CallEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2
    ): CallEffect<Ctx, Fn, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): CallEffect<Ctx, Fn, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
    >(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R
    >(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R
    >(
      ctx: Ctx,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare type NodeCallback<R> = {
    (err: Error): void,
    (err: null | void | false, result: R): void
  };

  declare export var cps: {
    // normal calls
    <R, Fn: (cb: NodeCallback<R>) => void>(fn: Fn): CpsEffect<null, Fn, []>,
    <R, T1, Fn: (t1: T1, cb: NodeCallback<R>) => void>(
      fn: Fn,
      t1: T1
    ): CpsEffect<null, Fn, [T1]>,
    <R, T1, T2, Fn: (t1: T1, t2: T2, cb: NodeCallback<R>) => void>(
      fn: Fn,
      t1: T1,
      t2: T2
    ): CpsEffect<null, Fn, [T1, T2]>,
    <R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3, cb: NodeCallback<R>) => void>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): CpsEffect<null, Fn, [T1, T2, T3]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, cb: NodeCallback<R>) => void
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): CpsEffect<null, Fn, [T1, T2, T3, T4]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, cb: NodeCallback<R>) => void
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): CpsEffect<null, Fn, [T1, T2, T3, T4, T5]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        cb: NodeCallback<R>
      ) => void
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): CpsEffect<null, Fn, [T1, T2, T3, T4, T5, T6]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        cb: NodeCallback<R>
      ) => void
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): CpsEffect<null, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8,
        cb: NodeCallback<R>
      ) => void
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): CpsEffect<null, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // with context
    <Ctx, R, Fn: (cb: NodeCallback<R>) => void>(
      cfn: [Ctx, Fn]
    ): CpsEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: (t1: T1, cb: NodeCallback<R>) => void>(
      cfn: [Ctx, Fn],
      t1: T1
    ): CpsEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (t1: T1, t2: T2, cb: NodeCallback<R>) => void>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2
    ): CpsEffect<Ctx, Fn, [T1, T2]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      Fn: (t1: T1, t2: T2, t3: T3, cb: NodeCallback<R>) => void
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3
    ): CpsEffect<Ctx, Fn, [T1, T2, T3]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, cb: NodeCallback<R>) => void
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, cb: NodeCallback<R>) => void
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        cb: NodeCallback<R>
      ) => void
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        cb: NodeCallback<R>
      ) => void
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8,
        cb: NodeCallback<R>
      ) => void
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var fork: {
    // normal calls
    <R, Fn: () => R>(fn: Fn): ForkEffect<null, Fn, void, []>,
    <R, T1, Fn: (t1: T1) => R>(
      fn: Fn,
      t1: T1
    ): ForkEffect<null, Fn, void, [T1]>,
    <R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      fn: Fn,
      t1: T1,
      t2: T2
    ): ForkEffect<null, Fn, void, [T1, T2]>,
    <R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<null, Fn, void, [T1, T2, T3]>,
    <R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4]>,
    <R, T1, T2, T3, T4, T5, Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4, T5]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4, T5, T6]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // with context
    <Ctx, R, Fn: () => R>(cfn: [Ctx, Fn]): ForkEffect<Ctx, Fn, void, []>,
    <Ctx, R, T1, Fn: (t1: T1) => R>(
      cfn: [Ctx, Fn],
      t1: T1
    ): ForkEffect<Ctx, Fn, void, [T1]>,
    <Ctx, R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2
    ): ForkEffect<Ctx, Fn, void, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5, T6]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var spawn: {
    // normal calls
    <R, Fn: () => R>(fn: Fn): ForkEffect<null, Fn, true, [], true>,
    <R, T1, Fn: (t1: T1) => R>(
      fn: Fn,
      t1: T1
    ): ForkEffect<null, Fn, true, [T1], true>,
    <R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      fn: Fn,
      t1: T1,
      t2: T2
    ): ForkEffect<null, Fn, true, [T1, T2], true>,
    <R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<null, Fn, true, [T1, T2, T3], true>,
    <R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<null, Fn, true, [T1, T2, T3, T4], true>,
    <R, T1, T2, T3, T4, T5, Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<null, Fn, true, [T1, T2, T3, T4, T5], true>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<null, Fn, true, [T1, T2, T3, T4, T5, T6], true>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<null, Fn, true, [T1, T2, T3, T4, T5, T6, T7], true>,
    <
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): ForkEffect<null, Fn, true, [T1, T2, T3, T4, T5, T6, T7, T8], true>,

    // with context
    <Ctx, R, Fn: () => R>(cfn: [Ctx, Fn]): ForkEffect<Ctx, Fn, true, [], true>,
    <Ctx, R, T1, Fn: (t1: T1) => R>(
      cfn: [Ctx, Fn],
      t1: T1
    ): ForkEffect<Ctx, Fn, true, [T1], true>,
    <Ctx, R, T1, T2, Fn: (t1: T1, t2: T2) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2
    ): ForkEffect<Ctx, Fn, true, [T1, T2], true>,
    <Ctx, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<Ctx, Fn, true, [T1, T2, T3], true>,
    <Ctx, R, T1, T2, T3, T4, Fn: (t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<Ctx, Fn, true, [T1, T2, T3, T4], true>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<Ctx, Fn, true, [T1, T2, T3, T4, T5], true>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<Ctx, Fn, true, [T1, T2, T3, T4, T5, T6], true>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<Ctx, Fn, true, [T1, T2, T3, T4, T5, T6, T7], true>,
    <
      Ctx,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7, t8: T8) => R
    >(
      cfn: [Ctx, Fn],
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): ForkEffect<Ctx, Fn, true, [T1, T2, T3, T4, T5, T6, T7, T8], true>
  };

  declare export var join: {
    <T: Task<*>>(task: T): JoinEffect<T>,
    (task: Task<*>, ...tasks: $ReadOnlyArray<Task<any>>): AllEffect
  };

  declare export var cancel: {
    (): CancelEffect<"@@redux-saga/SELF_CANCELLATION">,
    <T: Task<*>>(task: T): CancelEffect<T>,
    (task: Task<*>, ...tasks: $ReadOnlyArray<Task<any>>): AllEffect
  };

  declare export var select: {
    (): SelectEffect<void, []>,
    <S, R, Fn: (state: S) => R>(fn: Fn): SelectEffect<Fn, []>,
    <S, R, T1, Fn: (state: S, t1: T1) => R>(
      fn: Fn,
      t1: T1
    ): SelectEffect<Fn, [T1]>,
    <S, R, T1, T2, Fn: (state: S, t1: T1, t2: T2) => R>(
      fn: Fn,
      t1: T1,
      t2: T2
    ): SelectEffect<Fn, [T1, T2]>,
    <S, R, T1, T2, T3, Fn: (state: S, t1: T1, t2: T2, t3: T3) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): SelectEffect<Fn, [T1, T2, T3]>,
    <S, R, T1, T2, T3, T4, Fn: (state: S, t1: T1, t2: T2, t3: T3, t4: T4) => R>(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): SelectEffect<Fn, [T1, T2, T3, T4]>,
    <
      S,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (state: S, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): SelectEffect<Fn, [T1, T2, T3, T4, T5]>,
    <
      S,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (state: S, t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): SelectEffect<Fn, [T1, T2, T3, T4, T5, T6]>,
    <
      S,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        state: S,
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7
      ) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): SelectEffect<Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      S,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        state: S,
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8
      ) => R
    >(
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): SelectEffect<Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var actionChannel: {
    <P: Pattern>(pattern: P): ActionChannelEffect<P, void>,
    <T, P: Pattern, B: Buffer<T>>(
      pattern: P,
      buffer: B
    ): ActionChannelEffect<P, B>
  };

  declare export var flush: {
    <T: Channel<*>>(channel: T): FlushEffect<T>
  };

  declare export var cancelled: {
    (): CancelledEffect
  };

  declare export var setContext: {
    <T>(ctx: T): SetContextEffect<T>
  };

  declare export var getContext: {
    <T: string>(prop: T): GetContextEffect<T>
  };

  declare export var race: {
    <R: { +[name: string]: Effect } | $ReadOnlyArray<Effect>>(
      effects: R
    ): RaceEffect<R>
  };

  declare export var all: {
    (effects: { +[name: string]: Effect }): AllEffect,
    (effects: $ReadOnlyArray<Effect>): AllEffect
  };

  declare export var takeEvery: {
    // normal calls
    <A, R, Fn: (action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn
    ): ForkEffect<null, Function, void, []>,
    <A, R, T1, Fn: (t1: T1, action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn,
      arg1: T1
    ): ForkEffect<null, Function, void, [T1]>,
    <A, R, T1, T2, Fn: (t1: T1, t2: T2, action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn,
      arg1: T1,
      arg2: T2
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3, action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn,
      arg1: T1,
      arg2: T2,
      arg3: T3
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, action: A) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      arg1: T1,
      arg2: T2,
      arg3: T3,
      arg4: T4
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, action: A) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      arg1: T1,
      arg2: T2,
      arg3: T3,
      arg4: T4,
      arg5: T5
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, action: A) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      arg1: T1,
      arg2: T2,
      arg3: T3,
      arg4: T4,
      arg5: T5,
      arg6: T6
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        arg1: T1,
        arg2: T2,
        arg3: T3,
        arg4: T4,
        arg5: T5,
        arg6: T6,
        arg7: T7,
        action: A
      ) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      arg1: T1,
      arg2: T2,
      arg3: T3,
      arg4: T4,
      arg5: T5,
      arg6: T6,
      arg7: T7
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        arg1: T1,
        arg2: T2,
        arg3: T3,
        arg4: T4,
        arg5: T5,
        arg6: T6,
        arg7: T7,
        arg8: T8
      ) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      arg1: T1,
      arg2: T2,
      arg3: T3,
      arg4: T4,
      arg5: T5,
      arg6: T6,
      arg7: T7,
      arg8: T8
      // replace all read only
    ): ForkEffect<null, Function, void, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // with channel
    <A, R, Fn: (action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, Fn: (t1: T1, action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn,
      t1: T1
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, Fn: (t1: T1, t2: T2, action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3, action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, action: A) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, action: A) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, action: A) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        action: A
      ) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8,
        action: A
      ) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>
  };

  declare export var takeLatest: {
    // normal calls
    <A, R, Fn: (action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, Fn: (t1: T1, action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn,
      t1: T1
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, Fn: (t1: T1, t2: T2, action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3, action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, action: A) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, action: A) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, action: A) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        action: A
      ) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8,
        action: A
      ) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,

    // with channel
    <A, R, Fn: (action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, Fn: (t1: T1, action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn,
      t1: T1
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, Fn: (t1: T1, t2: T2, action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3, action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, action: A) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, action: A) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, action: A) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        action: A
      ) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8,
        action: A
      ) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>
  };

  declare export var takeLeading: {
    // normal calls
    <A, R, Fn: (action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, Fn: (t1: T1, action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn,
      t1: T1
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, Fn: (t1: T1, t2: T2, action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3, action: A) => Saga<R>>(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, action: A) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, action: A) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, action: A) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        action: A
      ) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8,
        action: A
      ) => Saga<R>
    >(
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,

    // with channel
    <A, R, Fn: (action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, Fn: (t1: T1, action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn,
      t1: T1
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, Fn: (t1: T1, t2: T2, action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <A, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3, action: A) => Saga<R>>(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, action: A) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, action: A) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, action: A) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        action: A
      ) => Saga<R>
    >(
      channel: Channel<*>,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<null, Function, void, $ReadOnlyArray<any>>
  };

  declare export var throttle: {
    // normal calls
    <A, R, Fn: (action: A) => Saga<R>>(
      ms: number,
      pattern: Pattern,
      fn: Fn
    ): ForkEffect<null, Function, void, []>,
    <A, R, T1, Fn: (t1: T1, action: A) => Saga<R>>(
      ms: number,
      pattern: Pattern,
      fn: Fn,
      t1: T1
    ): ForkEffect<null, Function, void, [T1]>,
    <A, R, T1, T2, Fn: (t1: T1, t2: T2, action: A) => Saga<R>>(
      ms: number,
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2
    ): ForkEffect<null, Function, void, [T1, T2]>,
    <A, R, T1, T2, T3, Fn: (t1: T1, t2: T2, t3: T3, action: A) => Saga<R>>(
      ms: number,
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3
    ): ForkEffect<null, Function, void, [T1, T2, T3]>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, action: A) => Saga<R>
    >(
      ms: number,
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4
    ): ForkEffect<null, Function, void, [T1, T2, T3, T4]>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, action: A) => Saga<R>
    >(
      ms: number,
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5
    ): ForkEffect<null, Function, void, [T1, T2, T3, T4, T5]>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, action: A) => Saga<R>
    >(
      ms: number,
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6
    ): ForkEffect<null, Function, void, [T1, T2, T3, T4, T5, T6]>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        action: A
      ) => Saga<R>
    >(
      ms: number,
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7
    ): ForkEffect<null, Function, void, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (
        t1: T1,
        t2: T2,
        t3: T3,
        t4: T4,
        t5: T5,
        t6: T6,
        t7: T7,
        t8: T8,
        action: A
      ) => Saga<R>
    >(
      ms: number,
      pattern: Pattern,
      fn: Fn,
      t1: T1,
      t2: T2,
      t3: T3,
      t4: T4,
      t5: T5,
      t6: T6,
      t7: T7,
      t8: T8
    ): ForkEffect<null, Function, void, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };
}
