declare module '@reduxjs/toolkit' {
  // These types are copied directly from the redux libdef.
  // Importing them in this libdef causes a loss in type coverage.
  import type { Action, Reducer } from 'redux';

  declare type DispatchAPI<A> = (action: A) => A;

  declare type Dispatch<A: { type: any, ... }> = DispatchAPI<A>;

  declare type MiddlewareAPI<S, A, D = Dispatch<A>> = {
    dispatch: D,
    getState(): S,
    ...
  };

  declare type Middleware<S, A, D = Dispatch<A>> = (
    api: MiddlewareAPI<S, A, D>
  ) => (next: D) => D;

  declare type StoreCreator<S, A, D = Dispatch<A>> = {
    (reducer: Reducer<S, A>, enhancer?: StoreEnhancer<S, A, D>): Store<S, A, D>,
    (
      reducer: Reducer<S, A>,
      preloadedState: S,
      enhancer?: StoreEnhancer<S, A, D>
    ): Store<S, A, D>,
    ...
  };

  declare type StoreEnhancer<S, A, D = Dispatch<A>> = (
    next: StoreCreator<S, A, D>
  ) => StoreCreator<S, A, D>;

  declare type Store<S, A, D = Dispatch<A>> = {
    // rewrite MiddlewareAPI members in order to get nicer error messages (intersections produce long messages)
    dispatch: D,
    getState(): S,
    subscribe(listener: () => void): () => void,
    replaceReducer(nextReducer: Reducer<S, A>): void,
    ...
  };

  // --------------------

  declare type Middlewares<S> = $ReadOnlyArray<Middleware<S, { type: any, ... }>>;

  declare type DevToolsOptions = {|
    /**
     * the instance name to be showed on the monitor page. Default value is `document.title`.
     * If not specified and there's no document title, it will consist of `tabId` and `instanceId`.
     */
    name?: string,
    /**
     * action creators functions to be available in the Dispatcher.
     */
    actionCreators?: BaseActionCreator<any>[] | {
      [key: string]: BaseActionCreator<any>,
      ...
    },
    /**
     * if more than one action is dispatched in the indicated interval, all new actions will be collected and sent at once.
     * It is the joint between performance and speed. When set to `0`, all actions will be sent instantly.
     * Set it to a higher value when experiencing perf issues (also `maxAge` to a lower value).
     *
     * @default 500 ms.
     */
    latency?: number,
    /**
     * (> 1) - maximum allowed actions to be stored in the history tree. The oldest actions are removed once maxAge is reached. It's critical for performance.
     *
     * @default 50
     */
    maxAge?: number,
    /**
     * See detailed documentation at https://github.com/reduxjs/redux-devtools/blob/%40redux-devtools/extension%403.2.1/extension/docs/API/Arguments.md#serialize
     */
    serialize?: boolean | {|
      options?: boolean | {|
        date?: boolean,
        regex?: boolean,
        undefined?: boolean,
        error?: boolean,
        symbol?: boolean,
        map?: boolean,
        set?: boolean,
        function?: boolean | (...args: Array<any>) => any,
      |},
      replacer?: (key: string, value: mixed) => mixed,
      reviver?: (key: string, value: mixed) => mixed,
      immutable?: mixed,
      refs?: mixed[],
    |},
    /**
     * function which takes `action` object and id number as arguments, and should return `action` object back.
     */
    actionSanitizer?: <A: Action<any>>(action: A, id: number) => A,
    /**
     * function which takes `state` object and index as arguments, and should return `state` object back.
     */
    stateSanitizer?: <S>(state: S, index: number) => S,
    /**
     * *string or array of strings as regex* - actions types to be hidden / shown in the monitors (while passed to the reducers).
     * If `actionsWhitelist` specified, `actionsBlacklist` is ignored.
     */
    actionsBlacklist?: string | string[],
    /**
     * *string or array of strings as regex* - actions types to be hidden / shown in the monitors (while passed to the reducers).
     * If `actionsWhitelist` specified, `actionsBlacklist` is ignored.
     */
    actionsWhitelist?: string | string[],
    /**
     * called for every action before sending, takes `state` and `action` object, and returns `true` in case it allows sending the current data to the monitor.
     * Use it as a more advanced version of `actionsBlacklist`/`actionsWhitelist` parameters.
     */
    predicate?: <S, A: Action<any>>(state: S, action: A) => boolean,
    /**
     * if specified as `false`, it will not record the changes till clicking on `Start recording` button.
     * Available only for Redux enhancer, for others use `autoPause`.
     *
     * @default true
     */
    shouldRecordChanges?: boolean,
    /**
     * if specified, whenever clicking on `Pause recording` button and there are actions in the history log, will add this action type.
     * If not specified, will commit when paused. Available only for Redux enhancer.
     *
     * @default "@@PAUSED""
     */
    pauseActionType?: string,
    /**
     * auto pauses when the extension’s window is not opened, and so has zero impact on your app when not in use.
     * Not available for Redux enhancer (as it already does it but storing the data to be sent).
     *
     * @default false
     */
    autoPause?: boolean,
    /**
     * if specified as `true`, it will not allow any non-monitor actions to be dispatched till clicking on `Unlock changes` button.
     * Available only for Redux enhancer.
     *
     * @default false
     */
    shouldStartLocked?: boolean,
    /**
     * if set to `false`, will not recompute the states on hot reloading (or on replacing the reducers). Available only for Redux enhancer.
     *
     * @default true
     */
    shouldHotReload?: boolean,
    /**
     * if specified as `true`, whenever there's an exception in reducers, the monitors will show the error message, and next actions will not be dispatched.
     *
     * @default false
     */
    shouldCatchErrors?: boolean,
    /**
     * If you want to restrict the extension, specify the features you allow.
     * If not specified, all of the features are enabled. When set as an object, only those included as `true` will be allowed.
     * Note that except `true`/`false`, `import` and `export` can be set as `custom` (which is by default for Redux enhancer), meaning that the importing/exporting occurs on the client side.
     * Otherwise, you'll get/set the data right from the monitor part.
     */
    features?: {|
      /**
       * start/pause recording of dispatched actions
       */
      pause?: boolean,
      /**
       * lock/unlock dispatching actions and side effects
       */
      lock?: boolean,
      /**
       * persist states on page reloading
       */
      persist?: boolean,
      /**
       * export history of actions in a file
       */
      export?: boolean | 'custom',
      /**
       * import history of actions from a file
       */
      import?: boolean | 'custom',
      /**
       * jump back and forth (time travelling)
       */
      jump?: boolean,
      /**
       * skip (cancel) actions
       */
      skip?: boolean,
      /**
       * drag and drop actions in the history list
       */
      reorder?: boolean,
      /**
       * dispatch custom actions or action creators
       */
      dispatch?: boolean,
      /**
       * generate tests for the selected actions
       */
      test?: boolean,
    |},
    /**
     * Set to true or a stacktrace-returning function to record call stack traces for dispatched actions.
     * Defaults to false.
     */
    trace?: boolean | (<A: Action<any>>(action: A) => string),
    /**
     * The maximum number of stack trace entries to record per action. Defaults to 10.
     */
    traceLimit?: number,
  |};

  declare interface TypedActionCreator<Type = string> {
    (...args: any[]): Action<Type>;
    type: Type;
  }

  declare type ExtractReturnType = <R>(() => R) => R;
  declare type ReturnType<Fn> = $Call<ExtractReturnType, Fn>;

  /**
   * A builder for an action <-> reducer map.
   *
   * @public
   */
  declare interface ActionReducerMapBuilder<State> {
    /**
     * Add a case reducer for actions created by this action creator.
     * @param actionCreator
     * @param reducer
     */
    addCase<ActionCreator = TypedActionCreator<string>>(actionCreator: ActionCreator, reducer: (State, ReturnType<ActionCreator>) => void): ActionReducerMapBuilder<State>;
    /**
     * Add a case reducer for actions with the specified type.
     * @param type
     * @param reducer
     */
    // addCase<Type = string, A = Action<Type>>(type: Type, reducer: CaseReducer<State, A>): ActionReducerMapBuilder<State>;
    /**
     * Adds a reducer for all actions, using `matcher` as a filter function.
     * If multiple matcher reducers match, all of them will be executed in the order
     * they were defined if - even if a case reducer already matched.
     * @param matcher A matcher function. In TypeScript, this should be a [type predicate](https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates)
     *   function
     * @param reducer
     */
    // addMatcher<A extends AnyAction>(matcher: ActionMatcher<A>, reducer: CaseReducer<State, A>): Omit<ActionReducerMapBuilder<State>, 'addCase'>;
    /**
     * Adds a "default case" reducer that is executed if no case reducer and no matcher
     * reducer was executed for this action.
     * @param reducer
     */
    // addDefaultCase(reducer: CaseReducer<State, AnyAction>): {};
  }

  /**
   * An action with a string type and an associated payload. This is the
   * type of action returned by `createAction()` action creators.
   *
   * @template P The type of the action's payload.
   * @template T the type used for the action type.
   *
   * @public
   */
  declare type PayloadAction<P = void, T = string> = {|
    payload: P,
    type: T,
  |};

  /**
   * An *case reducer* is a reducer function for a specific action type. Case
   * reducers can be composed to full reducers using `createReducer()`.
   *
   * Unlike a normal Redux reducer, a case reducer is never called with an
   * `undefined` state to determine the initial state. Instead, the initial
   * state is explicitly specified as an argument to `createReducer()`.
   *
   * In addition, a case reducer can choose to mutate the passed-in `state`
   * value directly instead of returning a new state. This does not actually
   * cause the store state to be mutated directly; instead, thanks to
   * [immer](https://github.com/mweststrate/immer), the mutations are
   * translated to copy operations that result in a new state.
   *
   * @public
   */
  declare type CaseReducer<S = any, A = Action<string>> = (state: S, action: A) => S | void;

  /**
   * A mapping from action types to case reducers for `createReducer()`.
   *
   * @deprecated This should not be used manually - it is only used
   *             for internal inference purposes and using it manually
   *             would lead to type erasure.
   *             It might be removed in the future.
   * @public
   */
  declare type CaseReducers<S, AS = Actions<string>, K = any, V = any> = $ObjMapi<AS, (K, V) => {| [key: K]: CaseReducer<S, V> |}>;

  /**
   * Defines a mapping from action types to corresponding action object shapes.
   *
   * @deprecated This should not be used manually - it is only used for internal
   *             inference purposes and should not have any further value.
   *             It might be removed in the future.
   * @public
   */
  declare type Actions<T = string> = {|
    [key: T]: Action<T>,
  |};


  /**
   * Basic type for all action creators.
   *
   * @inheritdoc {redux#ActionCreator}
   */
  declare interface BaseActionCreator<P, T = string> {
    type: T;
    match: Action<mixed> => boolean;
  }

  /**
   * An action creator of type `T` that takes no payload.
   *
   * @inheritdoc {redux#ActionCreator}
   *
   * @public
   */
  declare interface ActionCreatorWithoutPayload<T = string> extends BaseActionCreator<void, T> {
    /**
     * Calling this {@link redux#ActionCreator} will
     * return a {@link PayloadAction} of type `T` with a payload of `undefined`
     */
    (): PayloadAction<void, T>;
  }

  /**
  * An action creator of type `T` that requires a payload of type P.
  *
  * @inheritdoc {redux#ActionCreator}
  *
  * @public
  */
 declare interface ActionCreatorWithPayload<P, T = string> extends BaseActionCreator<P, T> {
    /**
     * Calling this {@link redux#ActionCreator} with an argument will
     * return a {@link PayloadAction} of type `T` with a payload of `P`
     */
    (payload: P): PayloadAction<P, T>;
  }

  /**
   * A utility function to create an action creator for the given action type
   * string. The action creator accepts a single argument, which will be included
   * in the action object as a field called payload. The action creator function
   * will also have its toString() overriden so that it returns the action type,
   * allowing it to be used in reducer logic that is looking for that action type.
   *
   * @param type The action type to use for created actions.
   *
   * @public
   */
  declare function createAction<T>(type: T): ActionCreatorWithoutPayload<T>;
  declare function createAction<P = void, T = any>(type: T): ActionCreatorWithPayload<P, T>;

  /**
   * A utility function that allows defining a reducer as a mapping from action
   * type to *case reducer* functions that handle these action types. The
   * reducer's initial state is passed as the first argument.
   *
   * The body of every case reducer is implicitly wrapped with a call to
   * `produce()` from the [immer](https://github.com/mweststrate/immer) library.
   * This means that rather than returning a new state object, you can also
   * mutate the passed-in state object directly; these mutations will then be
   * automatically and efficiently translated into copies, giving you both
   * convenience and immutability.
   *
   * @param initialState The initial state to be returned by the reducer.
   * @param actionsMap A mapping from action types to action-type-specific
   *   case reducers.
   *
   * @public
   */
  declare function createReducer<S, CR = {| [string]: (S, Action<string>) => S |}, A = any>(
    initialState: S,
    actionsMap: CR
  ): (state: S | void, action: A) => S;


  /**
   * A utility function that allows defining a reducer as a mapping from action
   * type to *case reducer* functions that handle these action types. The
   * reducer's initial state is passed as the first argument.
   *
   * The body of every case reducer is implicitly wrapped with a call to
   * `produce()` from the [immer](https://github.com/mweststrate/immer) library.
   * This means that rather than returning a new state object, you can also
   * mutate the passed-in state object directly; these mutations will then be
   * automatically and efficiently translated into copies, giving you both
   * convenience and immutability.
   * @param initialState The initial state to be returned by the reducer.
   * @param builderCallback A callback that receives a *builder* object to define
   *   case reducers via calls to `builder.addCase(actionCreatorOrType, reducer)`.
   *
   * @public
   */
  declare function createReducer<S, A>(
    initialState: S,
    builderCallback: (builder: ActionReducerMapBuilder<S>) => void,
  ): (state: S | void, action: A) => S;

  /**
   * Callback function type, to be used in `ConfigureStoreOptions.enhancers`
   */
  declare type ConfigureEnhancersCallback = <S, A>(defaultEnhancers: $ReadOnlyArray<StoreEnhancer<S, A>>) => Array<StoreEnhancer<S, A>>;

  declare type ReducersMapObject = <V>(V) => Reducer<V, Action<any>>;

  /**
   * Options for `configureStore()`.
   */
  declare type ConfigureStoreOptions<S, A, M> = {|
    /**
     * A single reducer function that will be used as the root reducer, or an
     * object of slice reducers that will be passed to `combineReducers()`.
     */
    reducer: Reducer<S, A> | $ObjMap<S, ReducersMapObject>,
    /**
     * An array of Redux middleware to install. If not supplied, defaults to
     * the set of middleware returned by `getDefaultMiddleware()`.
     *
     * @example `middleware: (gDM) => gDM().concat(logger, apiMiddleware, yourCustomMiddleware)`
     * @see https://redux-toolkit.js.org/api/getDefaultMiddleware#intended-usage
     */
    middleware?: M | ((gDM: () => M) => M),
    /**
     * Whether to enable Redux DevTools integration. Defaults to `true`.
     *
     * Additional configuration can be done by passing Redux DevTools options
     */
    devTools?: boolean | DevToolsOptions,
    /**
     * The initial state, same as Redux's createStore.
     * You may optionally specify it to hydrate the state
     * from the server in universal apps, or to restore a previously serialized
     * user session. If you use `combineReducers()` to produce the root reducer
     * function (either directly or indirectly by passing an object as `reducer`),
     * this must be an object with the same shape as the reducer map keys.
     */
    preloadedState?: { [key: string]: any, ... },
    /**
     * The store enhancers to apply. See Redux's `createStore()`.
     * All enhancers will be included before the DevTools Extension enhancer.
     * If you need to customize the order of enhancers, supply a callback
     * function that will receive the original array (ie, `[applyMiddleware]`),
     * and should return a new array (such as `[applyMiddleware, offline]`).
     * If you only need to add middleware, you can use the `middleware` parameter instead.
     */
    enhancers?: StoreEnhancer<S, A>[] | ConfigureEnhancersCallback,
  |};

  /**
   * A friendly abstraction over the standard Redux `createStore()` function.
   *
   * @param config The store configuration.
   * @returns A configured Redux store.
   *
   * @public
   */
  declare function configureStore<S = any, A: Action<any> = Action<any>, M: Middlewares<S> = []>(options: ConfigureStoreOptions<S, A, M>): Store<S, A>;
}
