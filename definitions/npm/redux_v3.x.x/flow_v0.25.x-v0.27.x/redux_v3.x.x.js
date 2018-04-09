declare module "redux" {
  declare type State = any;
  declare type Action = Object;
  declare type AsyncAction = any;
  declare type Reducer<S, A> = (state: S | void, action: A) => S;
  declare type BaseDispatch = (a: Action) => Action;
  declare type Dispatch = (a: Action | AsyncAction) => any;
  declare type ActionCreator = (...args: any) => Action | AsyncAction;
  declare type MiddlewareAPI = { dispatch: Dispatch, getState: () => State };
  declare type Middleware = (
    api: MiddlewareAPI
  ) => (next: Dispatch) => Dispatch;
  declare type Store = {
    dispatch: Dispatch,
    getState: () => State,
    subscribe: (listener: () => void) => () => void,
    replaceReducer: (reducer: Reducer<any, any>) => void
  };
  declare type StoreCreator = (
    reducer: Reducer<any, any>,
    initialState: ?State
  ) => Store;
  declare type StoreEnhancer = (next: StoreCreator) => StoreCreator;
  declare type ActionCreatorOrObjectOfACs =
    | ActionCreator
    | { [key: string]: ActionCreator };
  declare type Reducers = { [key: string]: Reducer<any, any> };
  declare class Redux {
    bindActionCreators<actionCreators: ActionCreatorOrObjectOfACs>(
      actionCreators: actionCreators,
      dispatch: Dispatch
    ): actionCreators;
    combineReducers(reducers: Reducers): Reducer<any, any>;
    createStore(
      reducer: Reducer<any, any>,
      initialState?: State,
      enhancer?: StoreEnhancer
    ): Store;
    applyMiddleware(...middlewares: Array<Middleware>): StoreEnhancer;
    compose(...functions: Array<Function | StoreEnhancer>): Function;
  }
  declare module.exports: Redux;
}
