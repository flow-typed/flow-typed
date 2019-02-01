declare module "redux-saga" {
  // These types are copied directly from the redux libdef.
  // Importing them in this libdef causes a loss in type coverage.

  // * uncomment next line:
  // import type { Middleware} from 'redux';

  // * remove next types
  declare type DispatchAPI<A> = (action: A) => A;
  declare type Dispatch<A: { type: string }> = DispatchAPI<A>;

  declare type MiddlewareAPI<S, A, D = Dispatch<A>> = {
    dispatch: D,
    getState(): S
  };

  declare type Middleware<S, A, D = Dispatch<A>> = (api: MiddlewareAPI<S, A, D>) => (next: D) => D;

  //////////////////////////////////////////////////////////////////////////

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

  declare export interface Task<RT> {
    isRunning: () => boolean;
    isCancelled: () => boolean;
    result: () => RT | void;
    error: () => Error | void;
    cancel: () => void;
    toPromise(): Promise<RT>;
    setContext<C: {}>(props: $Shape<C>): void;
  }

  declare export interface SagaMonitor {
    effectTriggered?: (desc: {
      +effectId: number,
      +parentEffectId: number,
      +label: string,
      +root?: boolean,
      +effect: Effect
    }) => void;
    effectResolved?: (effectId: number, result: mixed) => void;
    effectRejected?: (effectId: number, error: any) => void;
    effectCancelled?: (effectId: number) => void;

    actionDispatched?: <A>(action: A) => void;
  }

  declare export type Saga<T> = Generator<Effect, T, any>;

  declare export type Unsubscribe = () => void;

  declare export type Subscribe<T> = (cb: (input: T | TEnd) => void) => Unsubscribe;

  declare export interface TakeableChannel<T> {
    take(cb: (message: T | TEnd) => void): void
  }

  declare export interface PuttableChannel<T> {
    put(message: T | TEnd): void
  }

  declare export interface FlushableChannel<T> {
    flush(cb: (items: Array<T> | TEnd) => void): void
  }


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

  declare export type Logger = (level: "info" | "warning" | "error", ...args: Array<any>) => void;

  declare export type EffectMiddleware = (next: (effect: mixed) => void) => (effect: mixed) => void;

  declare export interface PredicateTakeableChannel<T> {
    take(cb: (message: T | TEnd) => void, matcher?: Predicate<T>): void;
  }

  declare type RunSagaOptions<A, S> = {|
    channel?: PredicateTakeableChannel<A>,
    dispatch?: (input: A) => mixed,
    getState?: () => S,
    context?: {},
    sagaMonitor?: SagaMonitor,
    logger?: Logger,
    effectMiddlewares?: Array<EffectMiddleware>,
    onError?: (error: Error) => void
  |};

  declare export var runSaga: {
    <A, S, R, Fn: () => Saga<R>>(options: RunSagaOptions<A, S>, saga: Fn): Task<R>,
    <A, S, R, T1, Fn: T1 => Saga<R>>(options: RunSagaOptions<A, S>, saga: Fn, T1): Task<R>,
    <A, S, R, T1, T2, Fn: (T1, T2) => Saga<R>>(
      options: RunSagaOptions<A, S>,
      saga: Fn,
      T1,
      T2
    ): Task<R>,
    <A, S, R, T1, T2, T3, Fn: (T1, T2, T3) => Saga<R>>(
      options: RunSagaOptions<A, S>,
      saga: Fn,
      T1,
      T2,
      T3
    ): Task<R>,
    <A, S, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => Saga<R>>(
      options: RunSagaOptions<A, S>,
      saga: Fn,
      T1,
      T2,
      T3,
      T4
    ): Task<R>,
    <A, S, R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => Saga<R>>(
      options: RunSagaOptions<A, S>,
      saga: Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): Task<R>,
    <A, S, R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => Saga<R>>(
      options: RunSagaOptions<A, S>,
      saga: Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): Task<R>,
    <A, S, R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => Saga<R>>(
      options: RunSagaOptions<A, S>,
      saga: Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): Task<R>,
    <A, S, R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => Saga<R>>(
      options: RunSagaOptions<A, S>,
      saga: Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): Task<R>
  };

  declare export type SagaMiddleware<C: {}> =
    {
        <S, A, D>(api: MiddlewareAPI<S, A, D>): (next: D) => D,
        run: {
          <R, Fn: () => Saga<R>>(saga: Fn): Task<R>,
          <R, T1, Fn: T1 => Saga<R>>(saga: Fn, T1): Task<R>,
          <R, T1, T2, Fn: (T1, T2) => Saga<R>>(saga: Fn, T1, T2): Task<R>,
          <R, T1, T2, T3, Fn: (T1, T2, T3) => Saga<R>>(saga: Fn, T1, T2, T3): Task<R>,
          <R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => Saga<R>>(saga: Fn, T1, T2, T3, T4): Task<R>,
          <R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => Saga<R>>(
            saga: Fn,
            T1,
            T2,
            T3,
            T4,
            T5
          ): Task<R>,
          <R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => Saga<R>>(
            saga: Fn,
            T1,
            T2,
            T3,
            T4,
            T5,
            T6
          ): Task<R>,
          <R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => Saga<R>>(
            saga: Fn,
            T1,
            T2,
            T3,
            T4,
            T5,
            T6,
            T7
          ): Task<R>,
          <R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => Saga<R>>(
            saga: Fn,
            T1,
            T2,
            T3,
            T4,
            T5,
            T6,
            T7,
            T8
          ): Task<R>
        },
        setContext: (props: $Shape<C>) => void
      };

  declare export type Emit<T> = (input: T) => void;

  declare export type SagaMiddlewareOptions<C: {}> = {|
    context?: C,
    sagaMonitor?: SagaMonitor,
    logger?: Logger,
    effectMiddlewares?: Array<EffectMiddleware>,
    emitter?: <A>(emit: Emit<A>) => Emit<any>,
    onError?: (error: Error) => void
  |};

  declare function sagaMiddlewareFactory<C>(options?: SagaMiddlewareOptions<C>): SagaMiddleware<C>;

  declare export default typeof sagaMiddlewareFactory;

  // Effect types
  declare export type SubPattern = string | (any => boolean);

  declare export type Pattern = SubPattern | Array<SubPattern>;

  declare export interface IEffect<T, P, C: boolean> {
    +type: T;
    +payload: P;
    +combinator: C;
  }

  declare export type AllTakeEffect<
    M: { maybe: true } | void
  > = IEffect<
    "TAKE",
    $ReadOnly<{|
      pattern: '*',
      ...$Exact<M>
    |}>,
    false
  >;

  declare export type TakeEffect<
    P: { pattern: Pattern } | void,
    C: { channel: TakeableChannel<*> } | void,
    M: { maybe: true } | void
  > = IEffect<
    "TAKE",
    $ReadOnly<{|
      ...$Exact<P>,
      ...$Exact<C>,
      ...$Exact<M>
    |}>,
    false
  >;

  declare export type PutEffect<
    A: {},
    C: PuttableChannel<*> | null,
    R: { resolve: true } | void
  > = IEffect<
    "PUT",
    $ReadOnly<{|
      action: A,
      channel: C,
      ...$Exact<R>
    |}>,
    false
  >;

  declare export type CallEffect<Ctx, Fn: Function | string, Args: $ReadOnlyArray<*>> = IEffect<
    "CALL",
    $ReadOnly<{|
      context: Ctx,
      fn: Fn,
      args: Args
    |}>,
    false
  >;

  declare export type ForkEffect<
    Ctx,
    Fn: (...args: Array<*>) => *,
    D: { detached: true } | void,
    Args: $ReadOnlyArray<*>
  > = IEffect<
    "FORK",
    $ReadOnly<{|
      context: Ctx,
      fn: Fn,
      args: Args,
      ...$Exact<D>
    |}>,
    false
  >;

  declare export function detach<T1, T2, T3>(
    effect: ForkEffect<T1, T2, *, T3>
  ): ForkEffect<T1, T2, { detached: true }, T3>;

  declare export type CpsEffect<Ctx, Fn: (...args: Array<*>) => *, Args: $ReadOnlyArray<*>> = IEffect<
    "CPS",
    $ReadOnly<{|
      context: Ctx,
      fn: Fn,
      args: Args
    |}>,
    false
  >;

  declare export type JoinEffect<T: Task<*> | Array<Task<*>>> = IEffect<"JOIN", T, false>;

  declare export type SELF_CANCELLATION = "@@redux-saga/SELF_CANCELLATION";

  declare export type CancelEffect<
    T: Task<*> | $ReadOnlyArray<Task<*>> | SELF_CANCELLATION
  > = IEffect<"CANCEL", T, false>;

  declare export type SelectEffect<Fn: Function | void, Args: $ReadOnlyArray<*>> = IEffect<
    "SELECT",
    $ReadOnly<{|
      selector: Fn,
      args: Args
    |}>,
    false
  >;

  declare export type ActionChannelEffect<T, P: Pattern | void, B: Buffer<T> | void> = IEffect<
    "ACTION_CHANNEL",
    $ReadOnly<{|
      buffer: B,
      pattern: P
    |}>,
    false
  >;

  declare export type FlushEffect<CH: FlushableChannel<*>> = IEffect<"FLUSH", CH, false>;

  declare export type CancelledEffect = IEffect<"CANCELLED", {||}, false>;

  declare export type SetContextEffect<T: {}> = IEffect<"SET_CONTEXT", T, false>;

  declare export type GetContextEffect<T> = IEffect<"GET_CONTEXT", T, false>;

  declare export type RaceEffect<R: { +[name: string]: Effect } | $ReadOnlyArray<Effect>> = IEffect<
    "RACE",
    R,
    true
  >;

  declare export type AllEffect = IEffect<
    "ALL",
    { +[name: string]: Effect } | $ReadOnlyArray<Effect>,
    true
  >;

  declare export type Effect =
    | ActionChannelEffect<*, *, *>
    | AllEffect
    | CallEffect<*, *, *>
    | CancelEffect<*>
    | CancelledEffect
    | CpsEffect<*, *, *>
    | FlushEffect<*>
    | ForkEffect<*, *, *, *>
    | GetContextEffect<*>
    | JoinEffect<*>
    | PutEffect<*, *, *>
    | RaceEffect<*>
    | SelectEffect<*, *>
    | SetContextEffect<*>
    | TakeEffect<*, *, *>
    | AllTakeEffect<*>;
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
    Task,
    TakeableChannel,
    PuttableChannel,
    FlushableChannel,
    AllTakeEffect,
  } from "redux-saga";

  declare export var effectTypes: $ReadOnly<{|
    TAKE: 'TAKE',
    PUT: 'PUT',
    ALL: 'ALL',
    RACE: 'RACE',
    CALL: 'CALL',
    CPS: 'CPS',
    FORK: 'FORK',
    JOIN: 'JOIN',
    CANCEL: 'CANCEL',
    SELECT: 'SELECT',
    ACTION_CHANNEL: 'ACTION_CHANNEL',
    CANCELLED: 'CANCELLED',
    FLUSH: 'FLUSH',
    GET_CONTEXT: 'GET_CONTEXT',
    SET_CONTEXT: 'SET_CONTEXT'
  |}>;

  declare export var put: {
    <A: {}>(action: A): PutEffect<A, null, void>,
    <A: {}, T, CH: PuttableChannel<T>>(channel: CH, action: A): PutEffect<A, CH, void>
  };

  declare export var putResolve: {
    <A: {}>(action: A): PutEffect<A, null, { resolve: true }>,
    <A: {}, T, CH: PuttableChannel<T>>(channel: CH, action: A): PutEffect<A, CH, { resolve: true }>
  };

  declare export var call: {
    // call(fn, ...args)
    <R, Fn: () => R>(Fn): CallEffect<null, Fn, []>,
    <R, T1, Fn: T1 => R>(Fn, T1): CallEffect<null, Fn, [T1]>,
    <R, T1, T2, Fn: (T1, T2) => R>(Fn, T1, T2): CallEffect<null, Fn, [T1, T2]>,
    <R, T1, T2, T3, Fn: (T1, T2, T3) => R>(Fn, T1, T2, T3): CallEffect<null, Fn, [T1, T2, T3]>,
    <R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4
    ): CallEffect<null, Fn, [T1, T2, T3, T4]>,
    <R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5]>,
    <R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5, T6]>,
    <R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): CallEffect<null, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // call([context, fn], ...args)
    <Ctx, R, Fn: () => R>(cfn: [Ctx, Fn]): CallEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: T1 => R>(cfn: [Ctx, Fn], T1): CallEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (T1, T2) => R>(cfn: [Ctx, Fn], T1, T2): CallEffect<Ctx, Fn, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3
    ): CallEffect<Ctx, Fn, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <Ctx, R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // call([context, fnName], ...args)
    <R, FnName: string, Fn: () => R, Ctx: { [FnName]: Fn }>(
      cfn: [Ctx, FnName]
    ): CallEffect<Ctx, Fn, []>,
    <R, FnName: string, T1, Fn: T1 => R, Ctx: { [FnName]: Fn }>(
      cfn: [Ctx, FnName],
      T1
    ): CallEffect<Ctx, Fn, [T1]>,
    <R, FnName: string, T1, T2, Fn: (T1, T2) => R, Ctx: { [FnName]: Fn }>(
      cfn: [Ctx, FnName],
      T1,
      T2
    ): CallEffect<Ctx, Fn, [T1, T2]>,
    <R, FnName: string, T1, T2, T3, Fn: (T1, T2, T3) => R, Ctx: { [FnName]: Fn }>(
      cfn: [Ctx, FnName],
      T1,
      T2,
      T3
    ): CallEffect<Ctx, Fn, [T1, T2, T3]>,
    <R, FnName: string, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R, Ctx: { [FnName]: Fn }>(
      cfn: [Ctx, FnName],
      T1,
      T2,
      T3,
      T4
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <R, FnName: string, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R, Ctx: { [FnName]: Fn }>(
      cfn: [Ctx, FnName],
      T1,
      T2,
      T3,
      T4,
      T5
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <
      R,
      FnName: string,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (T1, T2, T3, T4, T5, T6) => R,
      Ctx: { [FnName]: Fn }
    >(
      cfn: [Ctx, FnName],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>,
    <
      R,
      FnName: string,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (T1, T2, T3, T4, T5, T6, T7) => R,
      Ctx: { [FnName]: Fn }
    >(
      cfn: [Ctx, FnName],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <
      R,
      FnName: string,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R,
      Ctx: { [FnName]: Fn }
    >(
      cfn: [Ctx, FnName],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // call({context, fn}, ...args)
    <Ctx, R, Fn: () => R>(cfn: { context: Ctx, fn: Fn }): CallEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: T1 => R>(cfn: { context: Ctx, fn: Fn }, T1): CallEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (T1, T2) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2
    ): CallEffect<Ctx, Fn, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3
    ): CallEffect<Ctx, Fn, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <Ctx, R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var apply: {
    // apply(context, fn, args)
    <Ctx, R, Fn: () => R>(Ctx, Fn): CallEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: T1 => R>(Ctx, Fn, T1): CallEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (T1, T2) => R>(Ctx, Fn, T1, T2): CallEffect<Ctx, Fn, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      Ctx,
      Fn,
      T1,
      T2,
      T3
    ): CallEffect<Ctx, Fn, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      Ctx,
      Fn,
      T1,
      T2,
      T3,
      T4
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <Ctx, R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      Ctx,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      Ctx,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      Ctx,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      Ctx,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): CallEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare type NodeCallback<R> = {
    (err: Error): void,
    (err: null | void | false, result: R): void
  };

  declare export var cps: {
    // cps(fn, ...args)
    <R, Fn: (NodeCallback<R>) => void>(Fn): CpsEffect<null, Fn, []>,
    <R, T1, Fn: (T1, NodeCallback<R>) => void>(Fn, T1): CpsEffect<null, Fn, [T1]>,
    <R, T1, T2, Fn: (T1, T2, NodeCallback<R>) => void>(Fn, T1, T2): CpsEffect<null, Fn, [T1, T2]>,
    <R, T1, T2, T3, Fn: (T1, T2, T3, NodeCallback<R>) => void>(
      Fn,
      T1,
      T2,
      T3
    ): CpsEffect<null, Fn, [T1, T2, T3]>,
    <R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4, NodeCallback<R>) => void>(
      Fn,
      T1,
      T2,
      T3,
      T4
    ): CpsEffect<null, Fn, [T1, T2, T3, T4]>,
    <R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5, NodeCallback<R>) => void>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): CpsEffect<null, Fn, [T1, T2, T3, T4, T5]>,
    <R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6, NodeCallback<R>) => void>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CpsEffect<null, Fn, [T1, T2, T3, T4, T5, T6]>,
    <R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7, NodeCallback<R>) => void>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
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
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8, NodeCallback<R>) => void
    >(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): CpsEffect<null, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // cps([context, fn], ...args)
    <Ctx, R, Fn: (NodeCallback<R>) => void>(cfn: [Ctx, Fn]): CpsEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: (T1, NodeCallback<R>) => void>(cfn: [Ctx, Fn], T1): CpsEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (T1, T2, NodeCallback<R>) => void>(
      cfn: [Ctx, Fn],
      T1,
      T2
    ): CpsEffect<Ctx, Fn, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (T1, T2, T3, NodeCallback<R>) => void>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3
    ): CpsEffect<Ctx, Fn, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4, NodeCallback<R>) => void>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <Ctx, R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5, NodeCallback<R>) => void>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6, NodeCallback<R>) => void>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7, NodeCallback<R>) => void>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
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
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8, NodeCallback<R>) => void
    >(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // cps({context, fn}, ...args)
    <Ctx, R, Fn: (NodeCallback<R>) => void>(cfn: { context: Ctx, fn: Fn }): CpsEffect<Ctx, Fn, []>,
    <Ctx, R, T1, Fn: (T1, NodeCallback<R>) => void>(
      cfn: { context: Ctx, fn: Fn },
      T1
    ): CpsEffect<Ctx, Fn, [T1]>,
    <Ctx, R, T1, T2, Fn: (T1, T2, NodeCallback<R>) => void>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2
    ): CpsEffect<Ctx, Fn, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (T1, T2, T3, NodeCallback<R>) => void>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3
    ): CpsEffect<Ctx, Fn, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4, NodeCallback<R>) => void>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4]>,
    <Ctx, R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5, NodeCallback<R>) => void>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6, NodeCallback<R>) => void>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7, NodeCallback<R>) => void>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
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
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8, NodeCallback<R>) => void
    >(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): CpsEffect<Ctx, Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var fork: {
    // fork(fn, ...args)
    <R, Fn: () => R>(Fn): ForkEffect<null, Fn, void, []>,
    <R, T1, Fn: T1 => R>(Fn, T1): ForkEffect<null, Fn, void, [T1]>,
    <R, T1, T2, Fn: (T1, T2) => R>(Fn, T1, T2): ForkEffect<null, Fn, void, [T1, T2]>,
    <R, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      Fn,
      T1,
      T2,
      T3
    ): ForkEffect<null, Fn, void, [T1, T2, T3]>,
    <R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4]>,
    <R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4, T5]>,
    <R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4, T5, T6]>,
    <R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4, T5, T6, T7]>,
    <R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<null, Fn, void, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // fork([context, fn], ...args)
    <Ctx, R, Fn: () => R>(cfn: [Ctx, Fn]): ForkEffect<Ctx, Fn, void, []>,
    <Ctx, R, T1, Fn: T1 => R>(cfn: [Ctx, Fn], T1): ForkEffect<Ctx, Fn, void, [T1]>,
    <Ctx, R, T1, T2, Fn: (T1, T2) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2
    ): ForkEffect<Ctx, Fn, void, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4]>,
    <Ctx, R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5, T6]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5, T6, T7]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // fork({context, fn}, ...args)
    <Ctx, R, Fn: () => R>(cfn: { context: Ctx, fn: Fn }): ForkEffect<Ctx, Fn, void, []>,
    <Ctx, R, T1, Fn: T1 => R>(cfn: { context: Ctx, fn: Fn }, T1): ForkEffect<Ctx, Fn, void, [T1]>,
    <Ctx, R, T1, T2, Fn: (T1, T2) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2
    ): ForkEffect<Ctx, Fn, void, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4]>,
    <Ctx, R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5, T6]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5, T6, T7]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      cfn: { context: Ctx, fn: Fn },
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<Ctx, Fn, void, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var spawn: {
    // spawn(fn, ...args)
    <R, Fn: () => R>(Fn): ForkEffect<null, Fn, { detached: true }, []>,
    <R, T1, Fn: T1 => R>(Fn, T1): ForkEffect<null, Fn, { detached: true }, [T1]>,
    <R, T1, T2, Fn: (T1, T2) => R>(Fn, T1, T2): ForkEffect<null, Fn, { detached: true }, [T1, T2]>,
    <R, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      Fn,
      T1,
      T2,
      T3
    ): ForkEffect<null, Fn, { detached: true }, [T1, T2, T3]>,
    <R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<null, Fn, { detached: true }, [T1, T2, T3, T4]>,
    <R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<null, Fn, { detached: true }, [T1, T2, T3, T4, T5]>,
    <R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<null, Fn, { detached: true }, [T1, T2, T3, T4, T5, T6]>,
    <R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<null, Fn, { detached: true }, [T1, T2, T3, T4, T5, T6, T7]>,
    <R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<null, Fn, { detached: true }, [T1, T2, T3, T4, T5, T6, T7, T8]>,

    // spawn([context, fn], ...args)
    <Ctx, R, Fn: () => R>(cfn: [Ctx, Fn]): ForkEffect<Ctx, Fn, { detached: true }, []>,
    <Ctx, R, T1, Fn: T1 => R>(cfn: [Ctx, Fn], T1): ForkEffect<Ctx, Fn, { detached: true }, [T1]>,
    <Ctx, R, T1, T2, Fn: (T1, T2) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2
    ): ForkEffect<Ctx, Fn, { detached: true }, [T1, T2]>,
    <Ctx, R, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3
    ): ForkEffect<Ctx, Fn, { detached: true }, [T1, T2, T3]>,
    <Ctx, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<Ctx, Fn, { detached: true }, [T1, T2, T3, T4]>,
    <Ctx, R, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<Ctx, Fn, { detached: true }, [T1, T2, T3, T4, T5]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<Ctx, Fn, { detached: true }, [T1, T2, T3, T4, T5, T6]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<Ctx, Fn, { detached: true }, [T1, T2, T3, T4, T5, T6, T7]>,
    <Ctx, R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      cfn: [Ctx, Fn],
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<Ctx, Fn, { detached: true }, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var join: {
    // join(task)
    // join([...tasks])
    <T: Task<*>>(task: T): JoinEffect<T>,
    <T: Array<Task<*>>>(tasks: T): JoinEffect<T>
  };

  declare export var cancel: {
    // cancel()
    // cancel(task)
    // cancel([...tasks])
    (): CancelEffect<"@@redux-saga/SELF_CANCELLATION">,
    <T: Task<*>>(task: T): CancelEffect<T>,
    <T: Task<*>>(tasks: Array<T>): CancelEffect<$ReadOnlyArray<T>>
  };

  declare export var select: {
    // select(selector, ...args)
    (): SelectEffect<void, []>,
    <S, R, Fn: S => R>(Fn): SelectEffect<Fn, []>,
    <S, R, T1, Fn: (S, T1) => R>(Fn, T1): SelectEffect<Fn, [T1]>,
    <S, R, T1, T2, Fn: (S, T1, T2) => R>(Fn, T1, T2): SelectEffect<Fn, [T1, T2]>,
    <S, R, T1, T2, T3, Fn: (S, T1, T2, T3) => R>(Fn, T1, T2, T3): SelectEffect<Fn, [T1, T2, T3]>,
    <S, R, T1, T2, T3, T4, Fn: (S, T1, T2, T3, T4) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4
    ): SelectEffect<Fn, [T1, T2, T3, T4]>,
    <S, R, T1, T2, T3, T4, T5, Fn: (S, T1, T2, T3, T4, T5) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): SelectEffect<Fn, [T1, T2, T3, T4, T5]>,
    <S, R, T1, T2, T3, T4, T5, T6, Fn: (S, T1, T2, T3, T4, T5, T6) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): SelectEffect<Fn, [T1, T2, T3, T4, T5, T6]>,
    <S, R, T1, T2, T3, T4, T5, T6, T7, Fn: (S, T1, T2, T3, T4, T5, T6, T7) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): SelectEffect<Fn, [T1, T2, T3, T4, T5, T6, T7]>,
    <S, R, T1, T2, T3, T4, T5, T6, T7, T8, Fn: (S, T1, T2, T3, T4, T5, T6, T7, T8) => R>(
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): SelectEffect<Fn, [T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var actionChannel: {
    // actionChannel(pattern, [buffer])
    <BT>(): ActionChannelEffect<BT, void, void>,
    <BT, P: Pattern>(pattern: P): ActionChannelEffect<BT, P, void>,
    <BT, T, P: Pattern, B: Buffer<T>>(pattern: P, buffer: B): ActionChannelEffect<BT, P, B>
  };

  declare export var flush: {
    // flush(channel)
    <T, CH: FlushableChannel<T>>(channel: CH): FlushEffect<CH>
  };

  declare export var cancelled: {
    // cancelled()
    (): CancelledEffect
  };

  declare export var setContext: {
    // setContext(props)
    <T: {}>(props: T): SetContextEffect<T>
  };

  declare export var getContext: {
    // getContext(prop)
    <T: string>(prop: T): GetContextEffect<T>
  };

  declare export var race: {
    // race(effects)
    // race([...effects])
    <R: { +[name: string]: Effect }>(effects: R): RaceEffect<R>,
    <R: $ReadOnlyArray<Effect>>(effects: R): RaceEffect<R>
  };

  declare export var all: {
    // all(effects)
    // all([...effects])
    (effects: { +[name: string]: Effect }): AllEffect,
    (effects: $ReadOnlyArray<Effect>): AllEffect
  };

  declare export var take: {
    // take(pattern)
    // take(channel)
    (): AllTakeEffect<void>,
    <T, CH: TakeableChannel<T>>(channel: CH): TakeEffect<void, { channel: CH }, void>,
    <P: Pattern>(pattern: P): TakeEffect<{ pattern: P }, void, void>
  };

  declare export var takeMaybe: {
    // takeMaybe(pattern)
    // takeMaybe(channel)
    (): AllTakeEffect<{ maybe: true }>,
    <T, CH: TakeableChannel<T>>(channel: CH): TakeEffect<void, { channel: CH }, { maybe: true }>,
    <P: Pattern>(pattern: P): TakeEffect<{ pattern: P }, void, { maybe: true }>
  };

  declare export var takeEvery: {
    // takeEvery(pattern, saga, ...args)
    // takeEvery(channel, saga, ...args)
    <A, R, P: TakeableChannel<*> | Pattern, Fn: A => R>(P, Fn): ForkEffect<null, Fn, void, [P, Fn]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, Fn: (T1, A) => R>(
      P,
      Fn,
      T1
    ): ForkEffect<null, Fn, void, [P, Fn, T1]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, Fn: (T1, T2, A) => R>(
      P,
      Fn,
      T1,
      T2
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, Fn: (T1, T2, T3, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, Fn: (T1, T2, T3, T4, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5, T6]>,
    <
      A,
      R,
      P: TakeableChannel<*> | Pattern,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (T1, T2, T3, T4, T5, T6, T7, A) => R
    >(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5, T6, T7]>,
    <
      A,
      R,
      P: TakeableChannel<*> | Pattern,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8, A) => R
    >(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var takeLatest: {
    // takeLatest(pattern, saga, ...args)
    // takeLatest(channel, saga, ...args)
    <A, R, P: TakeableChannel<*> | Pattern, Fn: A => R>(P, Fn): ForkEffect<null, Fn, void, [P, Fn]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, Fn: (T1, A) => R>(
      P,
      Fn,
      T1
    ): ForkEffect<null, Fn, void, [P, Fn, T1]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, Fn: (T1, T2, A) => R>(
      P,
      Fn,
      T1,
      T2
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, Fn: (T1, T2, T3, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, Fn: (T1, T2, T3, T4, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5, T6]>,
    <
      A,
      R,
      P: TakeableChannel<*> | Pattern,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (T1, T2, T3, T4, T5, T6, T7, A) => R
    >(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5, T6, T7]>,
    <
      A,
      R,
      P: TakeableChannel<*> | Pattern,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8, A) => R
    >(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var takeLeading: {
    // takeLeading(pattern, saga, ...args)
    // takeLeading(channel, saga, ...args)
    <A, R, P: TakeableChannel<*> | Pattern, Fn: A => R>(P, Fn): ForkEffect<null, Fn, void, [P, Fn]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, Fn: (T1, A) => R>(
      P,
      Fn,
      T1
    ): ForkEffect<null, Fn, void, [P, Fn, T1]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, Fn: (T1, T2, A) => R>(
      P,
      Fn,
      T1,
      T2
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, Fn: (T1, T2, T3, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, Fn: (T1, T2, T3, T4, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5]>,
    <A, R, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6, A) => R>(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5, T6]>,
    <
      A,
      R,
      P: TakeableChannel<*> | Pattern,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (T1, T2, T3, T4, T5, T6, T7, A) => R
    >(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5, T6, T7]>,
    <
      A,
      R,
      P: TakeableChannel<*> | Pattern,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8, A) => R
    >(
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<null, Fn, void, [P, Fn, T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var delay: {
    // delay(ms, [val])
    <T1: number>(timeout: T1): CallEffect<null, (ms: T1) => Promise<true>, [T1]>,
    <T1: number, T2>(timeout: T1, T2): CallEffect<null, (ms: T1) => Promise<true>, [T1, T2]>
  };

  declare export var throttle: {
    // throttle(ms, pattern, saga, ...args)
    // throttle(ms, channel, saga, ...args)
    <MS: number, P: TakeableChannel<*> | Pattern, A, R, Fn: A => R>(
      MS,
      P,
      Fn
    ): ForkEffect<null, Fn, void, [MS, P, Fn]>,
    <MS: number, P: TakeableChannel<*> | Pattern, A, R, T1, Fn: (T1, A) => R>(
      MS,
      P,
      Fn,
      T1
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1]>,
    <MS: number, P: TakeableChannel<*> | Pattern, A, R, T1, T2, Fn: (T1, T2, A) => R>(
      MS,
      P,
      Fn,
      T1,
      T2
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2]>,
    <MS: number, P: TakeableChannel<*> | Pattern, A, R, T1, T2, T3, Fn: (T1, T2, T3, A) => R>(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3]>,
    <MS: number, P: TakeableChannel<*> | Pattern, A, R, T1, T2, T3, T4, Fn: (T1, T2, T3, T4, A) => R>(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4]>,
    <
      MS: number,
      P: TakeableChannel<*> | Pattern,
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      Fn: (T1, T2, T3, T4, T5, A) => R
    >(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4, T5]>,
    <
      MS: number,
      P: TakeableChannel<*> | Pattern,
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (T1, T2, T3, T4, T5, T6, A) => R
    >(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4, T5, T6]>,
    <
      MS: number,
      P: TakeableChannel<*> | Pattern,
      A,
      R,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (T1, T2, T3, T4, T5, T6, T7, A) => R
    >(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4, T5, T6, T7]>,
    <
      MS: number,
      P: TakeableChannel<*> | Pattern,
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
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8, A) => R
    >(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var debounce: {
    // debounce(ms, pattern, saga, ...args)
    // debounce(ms, channel, saga, ...args)
    <R, MS: number, P: TakeableChannel<*> | Pattern, Fn: () => R>(
      MS,
      P,
      Fn
    ): ForkEffect<null, Fn, void, [MS, P, Fn]>,
    <R, MS: number, P: TakeableChannel<*> | Pattern, T1, Fn: T1 => R>(
      MS,
      P,
      Fn,
      T1
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1]>,
    <R, MS: number, P: TakeableChannel<*> | Pattern, T1, T2, Fn: (T1, T2) => R>(
      MS,
      P,
      Fn,
      T1,
      T2
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2]>,
    <R, MS: number, P: TakeableChannel<*> | Pattern, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3]>,
    <R, MS: number, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4]>,
    <R, MS: number, P: TakeableChannel<*> | Pattern, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4, T5]>,
    <
      R,
      MS: number,
      P: TakeableChannel<*> | Pattern,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      Fn: (T1, T2, T3, T4, T5, T6) => R
    >(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4, T5, T6]>,
    <
      R,
      MS: number,
      P: TakeableChannel<*> | Pattern,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      Fn: (T1, T2, T3, T4, T5, T6, T7) => R
    >(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4, T5, T6, T7]>,
    <
      R,
      MS: number,
      P: TakeableChannel<*> | Pattern,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R
    >(
      MS,
      P,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): ForkEffect<null, Fn, void, [MS, P, Fn, T1, T2, T3, T4, T5, T6, T7, T8]>
  };

  declare export var retry: {
    // retry(maxTries, delay, fn, ...args)
    <R, MT: number, D: number, Fn: () => R>(MT, D, Fn): CallEffect<null, Function, [MT, D, Fn]>,
    <R, MT: number, D: number, T1, Fn: T1 => R>(
      MT,
      D,
      Fn,
      T1
    ): CallEffect<null, Function, [MT, D, Fn, T1]>,
    <R, MT: number, D: number, T1, T2, Fn: (T1, T2) => R>(
      MT,
      D,
      Fn,
      T1,
      T2
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2]>,
    <R, MT: number, D: number, T1, T2, T3, Fn: (T1, T2, T3) => R>(
      MT,
      D,
      Fn,
      T1,
      T2,
      T3
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3]>,
    <R, MT: number, D: number, T1, T2, T3, T4, Fn: (T1, T2, T3, T4) => R>(
      MT,
      D,
      Fn,
      T1,
      T2,
      T3,
      T4
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3, T4]>,
    <R, MT: number, D: number, T1, T2, T3, T4, T5, Fn: (T1, T2, T3, T4, T5) => R>(
      MT,
      D,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3, T4, T5]>,
    <R, MT: number, D: number, T1, T2, T3, T4, T5, T6, Fn: (T1, T2, T3, T4, T5, T6) => R>(
      MT,
      D,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3, T4, T5, T6]>,
    <R, MT: number, D: number, T1, T2, T3, T4, T5, T6, T7, Fn: (T1, T2, T3, T4, T5, T6, T7) => R>(
      MT,
      D,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3, T4, T5, T6, T7]>,
    <
      R,
      MT: number,
      D: number,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      Fn: (T1, T2, T3, T4, T5, T6, T7, T8) => R
    >(
      MT,
      D,
      Fn,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8
    ): CallEffect<null, Function, [MT, D, Fn, T1, T2, T3, T4, T5, T6, T7, T8]>
  };
}
