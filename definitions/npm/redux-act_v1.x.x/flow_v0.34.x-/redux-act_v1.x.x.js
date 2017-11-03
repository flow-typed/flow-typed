type Reducer$On<S> = (actionCreator: mixed, reduceFunction: (S) => mixed) => mixed;
type Reducer$Off = (actionCreator: mixed) => mixed;
type Reducer$OnOff<S> = (on: Reducer$On<S>, off: Reducer$Off) => void;

declare module 'redux-act' {
  declare module.exports: {
    createReducer<ReducerState>(
      handlers: {|[key: string]: (ReducerState, payload: mixed) => ReducerState|} | Reducer$OnOff<ReducerState>,
      defaultState?: ReducerState,
    ): {
      (): (state: ReducerState, payload?: mixed, meta?: mixed) => ReducerState,

      // TODO: Document parameters & add tests
      options: () => mixed,
      has: (actionCreator: mixed) => boolean,
      on: Reducer$On<ReducerState>,
      off: Reducer$Off,
      assignAll: ({}|Array<mixed>, {}|Array<mixed>) => mixed,
      bindAll: ({}|Array<mixed>, {}|Array<mixed>) => mixed,
      batch: ({}|Array<mixed>) => mixed,
      disbatch: (mixed, void|Array<mixed>) => mixed,
    },

    createAction<ReducerPayload, ReducerMetadata>(
      description: string,
      payloadReducer?: () => ReducerPayload,
      metaReducer?: () => ReducerMetadata,
    ): {
      (): (payload: ReducerPayload) => mixed,
      toString: () => string,
      getType: () => string,

      // TODO: Document parameters & add tests
      assignTo: (mixed) => void,
      bindTo: (mixed) => mixed,
      assigned: () => boolean,
      bound: () => boolean,
      dispatched: () => boolean,
      raw: () => mixed,
    },

    // TODO: Document properties & add tests
    types: {
      add: (string) => void,
      remove: (string) => void,
      has: (string) => boolean,
      all: () => Array<string>,
      clear: () => void,
    },
  };
}
