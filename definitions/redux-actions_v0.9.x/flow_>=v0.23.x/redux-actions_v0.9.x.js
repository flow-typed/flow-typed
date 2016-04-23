declare module 'redux-actions' {
  declare function createAction(type: string, payloadCreator?: Function, metaCreator?: Function): any;
  declare function handleAction(type: string, reducer: Object|Function): void;
  declare function handleActions(reducerMap: Object, defaultState?: Object): void;
}
