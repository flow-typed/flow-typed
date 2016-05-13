declare module 'redux' {
  declare type State = any;
  declare type Action = Object;
  declare type AsyncAction = any;
  declare type Reducer<S, A> = (state: S, action: A) => S;
  declare type BaseDispatch = (a: Action) => Action;
  declare type Dispatch = (a: Action | AsyncAction) => any;
  declare type ActionCreator = (...args: any) => Action | AsyncAction;
  declare type MiddlewareAPI = { dispatch: Dispatch, getState: () => State };
  declare type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch;
  declare type Store = {
    dispatch: Dispatch,
    getState: () => State,
    subscribe: (listener: () => void) => () => void,
    replaceReducer: (reducer: Reducer) => void
  };
  declare type StoreCreator = (reducer: Reducer, initialState: ?State) => Store;
  declare type StoreEnhancer = (next: StoreCreator) => StoreCreator;
  declare type ActionCreatorOrObjectOfACs = ActionCreator | { [key: string]: ActionCreator };
  declare type Reducers = { [key: string]: Reducer };
  declare class Redux {
    bindActionCreators<actionCreators: ActionCreatorOrObjectOfACs>(actionCreators: actionCreators, dispatch: Dispatch): actionCreators;
    combineReducers(reducers: Reducers): Reducer;
    createStore(reducer: Reducer, initialState?: State, enhancer?: StoreEnhancer): Store;
    applyMiddleware(...middlewares: Array<Middleware>): StoreEnhancer;
    compose(...functions: Array<Function | StoreEnhancer>): Function;
  }
  declare var exports: Redux;
}
