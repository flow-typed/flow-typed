declare module 'zustand' {
  declare type State = { ... };

  declare type StateListener<T> = (state: T) => void;
  declare type StateSelector<T: State, U> = (state: T) => U;
  declare type PartialState<T: State> = $Shape<T> | ((state: T) => $Shape<T>);
  declare type EqualityChecker<T> = (state: T, newState: any) => boolean;
  declare type SubscribeOptions<T: State, U> = {|
    selector?: StateSelector<T, U>,
    equalityFn?: EqualityChecker<U>,
    currentSlice?: U,
    subscribeError?: Error,
  |};
  declare type SetState<T: State> = (partial: PartialState<T>) => void;
  declare type GetState<T: State> = () => T;
  declare type Subscribe<T: State> = <U>(
    listener: StateListener<U | void>,
    options?: SubscribeOptions<T, U>
  ) => () => void;
  declare type Destroy = () => void;

  declare type UseStore<T: State> = <U>(
    selector?: StateSelector<T, U>,
    equalityFn?: EqualityChecker<U>
  ) => U;
  declare type StoreApi<T: State> = {|
    setState: SetState<T>,
    getState: GetState<T>,
    subscribe: Subscribe<T>,
    destroy: Destroy,
  |};
  declare type StateCreator<T: State> = (
    set: SetState<T>,
    get: GetState<T>,
    api: StoreApi<T>
  ) => T;

  declare function create<TState: State>(
    createState: StateCreator<TState>
  ): [UseStore<TState>, StoreApi<TState>];

  declare module.exports: typeof create;
}
