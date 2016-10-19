declare module 'redux-actions' {
  declare function createAction(type: string, payloadCreator?: Function, metaCreator?: Function): Function;
  declare function handleAction(type: string, reducer: Object|Function): Function;
  declare function handleActions(reducerMap: Object, defaultState?: Object): Function;
}
