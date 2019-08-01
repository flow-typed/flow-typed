/* Helper types from 'redux'
 *
 * NOTE THAT THE BELOW TYPES ARE COPIED DIRECTLY FROM THE LIBDEF
 * FOR 'redux'.  CHANGES SHOULD BE MIRRORED BACK HERE TO ENSURE
 * CONSISTENCY ACROSS VERSIONS.
 *
 * Equivalent to:
 *    import type { StoreCreator, Action } from 'redux';
 */
type Action<T> = { type: T, ... };

type DispatchAPI<A> = (action: A) => A;

type Dispatch<A: { type: *, ... }> = DispatchAPI<A>;

type Reducer<S, A> = (state: S | void, action: A) => S;

type StoreEnhancer<S, A, D = Dispatch<A>> = (
  next: StoreCreator<S, A, D>
) => StoreCreator<S, A, D>;

type Store<S, A, D = Dispatch<A>> = {
  // rewrite MiddlewareAPI members in order to get nicer error messages (intersections produce long messages)
  dispatch: D,
  getState(): S,
  subscribe(listener: () => void): () => void,
  replaceReducer(nextReducer: Reducer<S, A>): void,
  ...
};

type StoreCreator<S, A, D = Dispatch<A>> = {
  (reducer: Reducer<S, A>, enhancer?: StoreEnhancer<S, A, D>): Store<S, A, D>,
  (
    reducer: Reducer<S, A>,
    preloadedState: S,
    enhancer?: StoreEnhancer<S, A, D>
  ): Store<S, A, D>,
  ...
};
/* END OF COPIED 'redux' TYPES */

declare module 'redux-reactors' {
  declare export type ReactorAction<S, T> = {|
    type: T,
    payload: mixed,
    __REACTOR__: Reducer<S, ReactorAction<S, T>>,
  |};

  declare export function reactorEnhancer<
    S,
    ActionType,
    A: Action<ActionType> | ReactorAction<S, ActionType>,
    D
  >(createStore: StoreCreator<S, A, D>): StoreCreator<S, A, D>;

  declare export function createReactor<S, T>(
    type: T,
    __REACTOR__: Reducer<S, ReactorAction<S, T>>
  ): (payload: mixed) => ReactorAction<S, T>;
}
