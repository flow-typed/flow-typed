declare module 'effector' {
  //@flow strict

  declare export var version: string

  export type kind =
    | 'store'
    | 'event'
    | 'effect'
    | 'domain'

  export type mixed_non_void =
    | null
    | string
    | number
    | boolean
    | {...}
    | $ReadOnlyArray<mixed>

  export type Observer<A> = {+next?: (value: A) => void, ...}

  export type Subscription = {
    (): void,
    unsubscribe(): void,
    ...
  }
  interface CovariantUnit<+T> {
    +kind: kind;
  }
  interface ContravariantUnit<-T> {
    +kind: kind;
  }
  export interface Unit<T> extends CovariantUnit<T>, ContravariantUnit<T> {
    +kind: kind;
  }

  export type CompositeName = {|
    shortName: string,
    fullName: string,
    path: Array<string>,
  |}

  declare export class Event<Payload> implements Unit<Payload> {
    (payload: Payload): Payload;
    +kind: kind;
    watch(watcher: (payload: Payload) => any): Subscription;
    map<T>(fn: (payload: Payload) => T): Event<T>;
    filter(config: {|
      fn(payload: Payload): boolean,
    |}): Event<Payload>;
    filterMap<T>(fn: (payload: Payload) => T | void): Event<T>;
    prepend<Before>(fn: (_: Before) => Payload): Event<Before>;
    subscribe(observer: Observer<Payload>): Subscription;
    thru<U>(fn: (event: Event<Payload>) => U): U;
    getType(): string;
    compositeName: CompositeName;
    sid: string | null;
    shortName: string;
  }

  declare export class Effect<Params, Done, Fail = Error>
    implements Unit<Params> {
    (payload: Params): Promise<Done>;
    +kind: kind;
    +done: Event<{|
      +params: Params,
      +result: Done,
    |}>;
    +doneData: Event<Done>;
    +fail: Event<{|
      +params: Params,
      +error: Fail,
    |}>;
    +failData: Event<Fail>;
    +finally: Event<
      | {|
          +status: 'done',
          +params: Params,
          +result: Done,
        |}
      | {|
          +status: 'fail',
          +params: Params,
          +error: Fail,
        |},
    >;
    +use: {|
      (asyncFunction: (params: Params) => Promise<Done> | Done): this,
      getCurrent(): (params: Params) => Promise<Done>,
    |};
    pending: Store<boolean>;
    inFlight: Store<number>;
    watch(watcher: (payload: Params) => any): Subscription;
    prepend<Before>(fn: (_: Before) => Params): Event<Before>;
    filter(config: {|
      fn(payload: Params): boolean,
    |}): Event<Params>;
    filterMap<T>(fn: (payload: Params) => T | void): Event<T>;
    map<T>(fn: (params: Params) => T): Event<T>;
    subscribe(observer: Observer<Params>): Subscription;
    getType(): string;
    compositeName: CompositeName;
    sid: string | null;
    shortName: string;
  }

  declare export class Store<State> implements Unit<State> {
    +kind: kind;
    reset(triggers: Array<Unit<any>>): this;
    reset(...triggers: Array<Unit<any>>): this;
    getState(): State;
    map<T>(fn: (state: State, lastState?: T) => T, _: void): Store<T>;
    map<T>(fn: (state: State, lastState: T) => T, firstState: T): Store<T>;
    on<E>(
      triggers: Unit<E>[],
      handler: (state: State, payload: E) => State | void,
    ): this;
    on<E>(
      trigger: Unit<E>,
      handler: (state: State, payload: E) => State | void,
    ): this;
    off(trigger: Unit<any>): this;
    subscribe(listener: (state: State) => any): Subscription;
    +updates: Event<State>;
    watch<E>(
      watcher: (state: State, payload: void) => any,
      _: void,
    ): Subscription;
    watch<E>(
      trigger: Unit<E>,
      watcher: (state: State, payload: E) => any,
    ): Subscription;
    thru<U>(fn: (store: Store<State>) => U): U;
    defaultState: State;
    compositeName: CompositeName;
    sid: string | null;
    shortName: string;
  }

  declare export var is: {|
    unit(obj: mixed): boolean,
    store(obj: mixed): boolean,
    event(obj: mixed): boolean,
    effect(obj: mixed): boolean,
    domain(obj: mixed): boolean,
  |}

  declare class InternalStore<State> extends Store<State> implements Unit<State> {
    setState(state: State): void;
  }

  declare export class Domain {
    +kind: kind;
    onCreateEvent(hook: (newEvent: Event<mixed>) => any): Subscription;
    onCreateEffect(
      hook: (newEffect: Effect<mixed, mixed, mixed>) => any,
    ): Subscription;
    onCreateStore(
      hook: (newStore: InternalStore<mixed_non_void>) => any,
    ): Subscription;
    onCreateDomain(hook: (newDomain: Domain) => any): Subscription;
    event<Payload>(name?: string): Event<Payload>;
    event<Payload>(config: {name?: string, sid?: string, ...}): Event<Payload>;
    createEvent<Payload>(name?: string): Event<Payload>;
    createEvent<Payload>(config: {
      name?: string,
      sid?: string,
      ...
    }): Event<Payload>;
    effect<Params, Done, Fail>(
      name?: string,
      config?: {
        handler?: (params: Params) => Promise<Done> | Done,
        sid?: string,
        ...
      },
    ): Effect<Params, Done, Fail>;
    effect<Params, Done, Fail>(config: {
      handler?: (params: Params) => Promise<Done> | Done,
      sid?: string,
      name?: string,
      ...
    }): Effect<Params, Done, Fail>;
    createEffect<Params, Done, Fail>(
      name?: string,
      config?: {
        handler?: (params: Params) => Promise<Done> | Done,
        sid?: string,
        ...
      },
    ): Effect<Params, Done, Fail>;
    createEffect<Params, Done, Fail>(config: {
      handler?: (params: Params) => Promise<Done> | Done,
      sid?: string,
      name?: string,
      ...
    }): Effect<Params, Done, Fail>;
    domain(name?: string): Domain;
    createDomain(name?: string): Domain;
    store<State>(
      defaultState: State,
      config?: {name?: string, sid?: string, ...},
    ): Store<State>;
    createStore<State>(
      defaultState: State,
      config?: {name?: string, sid?: string, ...},
    ): Store<State>;
    sid: string | null;
    shortName: string;
    getType(): string;
    history: {
      domains: $ReadOnlySet<Domain>,
      stores: $ReadOnlySet<Store<any>>,
      effects: $ReadOnlySet<Effect<any, any, any>>,
      events: $ReadOnlySet<Event<any>>,
    };
  }
  export type ID = string
  export type StateRef = {|
    current: any,
    id: ID,
  |}
  //prettier-ignore
  export type Cmd =
    | Update
    | Run
    | Filter
    | Compute
    | Barrier

  export type Barrier = {|
    +id: ID,
    +type: 'barrier',
    +data: {|
      +barrierID: ID,
    |},
  |}
  export type Update = {|
    +id: ID,
    +type: 'update',
    +data: {|
      store: StateRef,
    |},
  |}
  export type Run = {|
    +id: ID,
    +type: 'run',
    +data: {|
      fn: (data: any, scope: {[field: string]: any, ...}) => any,
    |},
  |}
  export type Filter = {|
    +id: ID,
    +type: 'filter',
    +data: {|
      fn: (data: any, scope: {[field: string]: any, ...}) => boolean,
    |},
  |}
  export type Compute = {|
    +id: ID,
    +type: 'compute',
    +data: {|
      fn: (data: any, scope: {[field: string]: any, ...}) => any,
    |},
  |}
  export type Node = /*::interface extends Unit<any>*/ {
    +next: Array<Node>,
    +seq: Array<Cmd>,
    +scope: {[field: string]: any, ...},
    +meta: Object,
    +family: {|
      +type: 'regular' | 'crosslink',
      +links: Node[],
      +owners: Node[],
    |},
  }
  export type Step = Node
  declare export var step: {|
    compute(data: {|
      fn: (data: any, scope: {[field: string]: any, ...}) => any,
    |}): Compute,
    filter(data: {|
      fn: (data: any, scope: {[field: string]: any, ...}) => boolean,
    |}): Filter,
    update(data: {|
      store: StateRef,
    |}): Update,
    run(data: {|
      fn: (data: any, scope: {[field: string]: any, ...}) => any,
    |}): Run,
  |}
  declare export function forward<T>(opts: {|
    +from: CovariantUnit<T> | $ReadOnlyArray<CovariantUnit<T>>,
    +to: Unit<T> | $ReadOnlyArray<Unit<T>>,
  |}): Subscription

  declare export function merge<T>(events: $ReadOnlyArray<Unit<T>>): Event<T>

  declare export function clearNode(
    unit: Unit<any> | Node,
    opts?: {deep?: boolean, ...},
  ): void
  declare export function createNode(opts?: {|
    +node?: Array<Cmd>,
    +parent?: Array<Unit<any> | Node>,
    +child?: Array<Unit<any> | Node>,
    +scope?: {[field: string]: any, ...},
    +meta?: {[field: string]: any, ...},
    +family?: {
      +type?: 'regular' | 'crosslink',
      +owners?: Unit<any> | Node | Array<Unit<any> | Node>,
      +links?: Unit<any> | Node | Array<Unit<any> | Node>,
    },
  |}): Node

  declare export function launch<T>(unit: Unit<T>, payload: T): void
  declare export function launch<T>(config: {
    target: Unit<T>,
    params: T,
    defer?: boolean,
  }): void

  declare export function fromObservable<T>(observable: mixed): Event<T>

  declare export function createEvent<E>(eventName?: string): Event<E>
  declare export function createEvent<E>(config: {
    name?: string,
    sid?: string,
    ...
  }): Event<E>

  declare export function createEffect<Params, Done, Fail>(
    effectName?: string,
    config?: {
      handler?: (params: Params) => Promise<Done> | Done,
      sid?: string,
      ...
    },
  ): Effect<Params, Done, Fail>
  declare export function createEffect<Params, Done, Fail>(config: {
    name?: string,
    handler?: (params: Params) => Promise<Done> | Done,
    sid?: string,
    ...
  }): Effect<Params, Done, Fail>

  declare export function createStore<State>(
    defaultState: State,
    config?: {name?: string, sid?: string, ...},
  ): Store<State>
  declare export function setStoreName<State>(
    store: Store<State>,
    name: string,
  ): void

  type StoreObject = {+[key: string]: Store<any> | any, ...}
  type StoreTuple = $ReadOnlyArray<Store<any> | any>

  declare export function createStoreObject<State: StoreObject>(
    obj: State,
  ): Store<
    $ObjMap<
      State,
      //prettier-ignore
      <S>(field: Store<S> | S) => S,
    >,
  >
  declare export function createApi<
    S,
    Api: {+[name: string]: (store: S, e: any) => S, ...},
  >(
    store: Store<S>,
    api: Api,
  ): $ObjMap<Api, <E>(h: (store: S, e: E) => S) => Event<E>>
  declare export function split<
    S,
    Obj: {
      +[name: string]: (payload: S) => boolean,
      ...,
    },
  >(
    source: Unit<S>,
    cases: Obj,
  ): $ObjMap<
    {...Obj, __: (payload: S) => boolean, ...},
    (h: (payload: S) => boolean) => Event<S>,
  >

  declare export function restore<Done>(
    effect: Effect<any, Done, any>,
    defaultState: Done,
  ): Store<Done>
  declare export function restore<E>(event: Event<E>, defaultState: E): Store<E>
  declare export function restore<State: StoreObject>(
    state: State,
  ): $ObjMap<
    State,
    //prettier-ignore
    <S>(field: Store<S> | S) => Store<S>,
  >
  declare export function createDomain(domainName?: string): Domain

  declare export function sample<A>(config: {|
    +source: Unit<A>,
    +clock: Unit<any>,
    +name?: string,
  |}): Unit<A>
  declare export function sample<A, U: Unit<A>>(config: {|
    +source: Unit<A>,
    +clock: Unit<any>,
    +target: U,
  |}): U
  declare export function sample<A, B>(config: {|
    +source: Unit<A>,
    +target: Unit<B>,
    fn(source: A): B,
    +name?: string,
  |}): Unit<B>
  declare export function sample<A>(config: {|
    +source: Unit<A>,
    +target: Unit<A>,
    +name?: string,
  |}): Unit<A>
  declare export function sample<A, B, C>(config: {|
    +source: Unit<A>,
    +clock: Unit<B>,
    +target?: Unit<C>,
    fn(source: A, clock: B): C,
    +name?: string,
  |}): Unit<C>
  declare export function sample<A>(
    source: Store<A>,
    clock?: Store<any>,
  ): Store<A>
  declare export function sample<A>(
    source: Event<A> | Effect<A, any, any>,
    clock: Store<any>,
  ): Event<A>
  declare export function sample<A>(
    source: Event<A> | Store<A> | Effect<A, any, any>,
    clock: Event<any> | Effect<any, any, any>,
  ): Event<A>

  declare export function sample<A, B, C>(
    source: Store<A>,
    clock: Store<B>,
    fn: (source: A, clock: B) => C,
  ): Store<C>
  declare export function sample<A, B, C>(
    source: Event<A> | Effect<A, any, any>,
    clock: Store<B>,
    fn: (source: A, clock: B) => C,
  ): Event<C>
  declare export function sample<A, B, C>(
    source: Event<A> | Store<A> | Effect<A, any, any>,
    clock: Event<B> | Effect<B, any, any>,
    fn: (source: A, clock: B) => C,
  ): Event<C>

  declare export function guard<A>(config: {|
    +source: Unit<A>,
    +filter: Store<boolean> | ((value: A) => boolean),
  |}): Event<A>

  declare export function guard<A>(config: {|
    +source: Unit<A>,
    +filter: Store<boolean> | ((value: A) => boolean),
    +target: Unit<A>,
  |}): Unit<A>

  declare export function guard<A>(
    source: Unit<A>,
    config: {|
      +filter: Store<boolean> | ((value: A) => boolean),
    |},
  ): Event<A>

  declare export function guard<A>(
    source: Unit<A>,
    config: {|
      +filter: Store<boolean> | ((value: A) => boolean),
      +target: Unit<A>,
    |},
  ): Unit<A>

  declare export function attach<
    Params,
    Source: Store<any>,
    FXParams,
    FXResult,
    FXError,
  >(config: {|
    +source: Source,
    +effect: Effect<FXParams, FXResult, FXError>,
    +mapParams: (
      params: Params,
      source: $Call<<S>(field: Store<S> | S) => S, Source>,
    ) => FXParams,
  |}): Effect<Params, FXResult, FXError>

  declare export function attach<
    Params,
    Source: StoreObject,
    FXParams,
    FXResult,
    FXError,
  >(config: {|
    +source: Source,
    +effect: Effect<FXParams, FXResult, FXError>,
    +mapParams: (
      params: Params,
      source: $ObjMap<Source, <S>(field: Store<S> | S) => S>,
    ) => FXParams,
  |}): Effect<Params, FXResult, FXError>
  declare export function attach<Params, FXParams, FXResult, FXError>(config: {|
    +effect: Effect<FXParams, FXResult, FXError>,
    +mapParams: (params: Params) => FXParams,
  |}): Effect<Params, FXResult, FXError>

  declare export function attach<Params, FXParams, FXResult, FXError>(config: {|
    +effect: Effect<FXParams, FXResult, FXError>,
  |}): Effect<Params, FXResult, FXError>

  declare export function withRegion(unit: Unit<any> | Node, cb: () => void): void

  declare export function combine<State: StoreObject>(
    shape: State,
  ): Store<$ObjMap<State, <S>(field: Store<S> | S) => S>>
  declare export function combine<State: StoreTuple>(
    list: State,
  ): Store<$TupleMap<State, <S>(field: Store<S> | S) => S>>
  declare export function combine<A, R>(a: Store<A>, fn: (a: A) => R): Store<R>
  declare export function combine<State: StoreObject, R>(
    shape: State,
    fn: (shape: $ObjMap<State, <S>(field: Store<S> | S) => S>) => R,
  ): Store<R>
  declare export function combine<State: StoreTuple, R>(
    list: State,
    fn: (list: $TupleMap<State, <S>(field: Store<S> | S) => S>) => R,
  ): Store<R>
  declare export function combine<A, B, R>(
    a: Store<A>,
    b: Store<B>,
    fn: (a: A, b: B) => R,
  ): Store<R>
  declare export function combine<A, B, C, R>(
    a: Store<A>,
    b: Store<B>,
    c: Store<C>,
    fn: (a: A, b: B, c: C) => R,
  ): Store<R>
  declare export function combine<A, B, C, D, R>(
    a: Store<A>,
    b: Store<B>,
    c: Store<C>,
    d: Store<D>,
    fn: (a: A, b: B, c: C, d: D) => R,
  ): Store<R>
  declare export function combine<A, B, C, D, E, R>(
    a: Store<A>,
    b: Store<B>,
    c: Store<C>,
    d: Store<D>,
    e: Store<E>,
    fn: (a: A, b: B, c: C, d: D, e: E) => R,
  ): Store<R>
  declare export function combine<A, B, C, D, E, F, R>(
    a: Store<A>,
    b: Store<B>,
    c: Store<C>,
    d: Store<D>,
    e: Store<E>,
    f: Store<F>,
    fn: (a: A, b: B, c: C, d: D, e: E, f: F) => R,
  ): Store<R>
  declare export function combine<A, B, C, D, E, F, G, R>(
    a: Store<A>,
    b: Store<B>,
    c: Store<C>,
    d: Store<D>,
    e: Store<E>,
    f: Store<F>,
    g: Store<G>,
    fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => R,
  ): Store<R>
  declare export function combine<A, B, C, D, E, F, G, H, R>(
    a: Store<A>,
    b: Store<B>,
    c: Store<C>,
    d: Store<D>,
    e: Store<E>,
    f: Store<F>,
    g: Store<G>,
    h: Store<H>,
    fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H) => R,
  ): Store<R>
  declare export function combine<A, B, C, D, E, F, G, H, I, R>(
    a: Store<A>,
    b: Store<B>,
    c: Store<C>,
    d: Store<D>,
    e: Store<E>,
    f: Store<F>,
    g: Store<G>,
    h: Store<H>,
    i: Store<I>,
    fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I) => R,
  ): Store<R>
  declare export function combine<A, B, C, D, E, F, G, H, I, J, R>(
    a: Store<A>,
    b: Store<B>,
    c: Store<C>,
    d: Store<D>,
    e: Store<E>,
    f: Store<F>,
    g: Store<G>,
    h: Store<H>,
    i: Store<I>,
    j: Store<J>,
    fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J) => R,
  ): Store<R>
  declare export function combine<A, B, C, D, E, F, G, H, I, J, K, R>(
    a: Store<A>,
    b: Store<B>,
    c: Store<C>,
    d: Store<D>,
    e: Store<E>,
    f: Store<F>,
    g: Store<G>,
    h: Store<H>,
    i: Store<I>,
    j: Store<J>,
    k: Store<K>,
    fn: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, h: H, i: I, j: J, k: K) => R,
  ): Store<R>
}