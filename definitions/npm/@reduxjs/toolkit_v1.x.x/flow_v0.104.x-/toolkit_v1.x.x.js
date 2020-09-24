declare module '@reduxjs/toolkit' {
  import type { AnyAction, Action, Reducer } from 'redux';

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
  declare type CaseReducers<S, AS = Actions<string>> = $ObjMapi<AS, (K, V) => {| [K]: CaseReducer<S, V> |}>;

  /**
   * Defines a mapping from action types to corresponding action object shapes.
   *
   * @deprecated This should not be used manually - it is only used for internal
   *             inference purposes and should not have any further value.
   *             It might be removed in the future.
   * @public
   */
  declare type Actions<T = string> = Record<T, Action>;


  /**
   * Basic type for all action creators.
   *
   * @inheritdoc {redux#ActionCreator}
   */
  declare interface BaseActionCreator<P, T = string> {
    type: T;
    match: Action<unknown> => boolean;
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
  declare function createAction(type: T): ActionCreatorWithoutPayload<typeof T>;
  declare function createAction<P = void>(type: T): ActionCreatorWithPayload<P, typeof T>;

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
  declare function createReducer<S, CR = {| [string]: (S, Action<string>) => S |}>(initialState: S, actionsMap: CR): (state: S | void, action: A) => S;


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
  declare function createReducer<S>(initialState: S, builderCallback: (builder: ActionReducerMapBuilder<S>) => void): (state: S | void, action: A) => S;
}
