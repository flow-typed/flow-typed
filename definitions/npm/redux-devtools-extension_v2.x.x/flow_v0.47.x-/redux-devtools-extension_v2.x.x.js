import type { ActionCreator, StoreEnhancer } from 'redux';
import typeof { compose } from 'redux';

declare type $npm$ReduxDevtoolsExtension$DevToolsOptions = {
  name?: string,
  actionCreators?: Array<ActionCreator<any>> | { [string]: ActionCreator<any> },
  latency?: number,
  maxAge?: number,
  serialize?: boolean | {
    date?: boolean;
    regex?: boolean;
    undefined?: boolean;
    error?: boolean;
    symbol?: boolean;
    map?: boolean;
    set?: boolean;
    function?: boolean | Function;
  },
  actionSanitizer?: <A: { type: $Subtype<string> }>(action: A, id: number) => A,
  stateSanitizer?: <S>(state: S, index: number) => S,
  actionsBlacklist?: string | string[],
  actionsWhitelist?: string | string[],
  predicate?: <S, A: { type: $Subtype<string> }>(state: S, action: A) => boolean,
  shouldRecordChanges?: boolean,
  pauseActionType?: string,
  autoPause?: boolean,
  shouldStartLocked?: boolean,
  shouldHotReload?: boolean,
  shouldCatchErrors?: boolean,
  features?: {
    pause?: boolean,
    lock?: boolean,
    persist?: boolean,
    export?: boolean | "custom",
    import?: boolean | "custom",
    jump?: boolean,
    skip?: boolean,
    reorder?: boolean,
    dispatch?: boolean,
    test?: boolean
  }
};

declare function $npm$ReduxDevtoolsExtension$composeWithDevTools<A, B>(ab: A => B): A => B;
declare function $npm$ReduxDevtoolsExtension$composeWithDevTools(options: $npm$ReduxDevtoolsExtension$DevToolsOptions): compose;
declare function $npm$ReduxDevtoolsExtension$composeWithDevTools<A, B, C>(
  bc: B => C,
  ab: A => B
): A => C;
declare function $npm$ReduxDevtoolsExtension$composeWithDevTools<A, B, C, D>(
  cd: C => D,
  bc: B => C,
  ab: A => B
): A => D;
declare function $npm$ReduxDevtoolsExtension$composeWithDevTools<A, B, C, D, E>(
  de: D => E,
  cd: C => D,
  bc: B => C,
  ab: A => B
): A => E;
declare function $npm$ReduxDevtoolsExtension$composeWithDevTools<A, B, C, D, E, F>(
  ef: E => F,
  de: D => E,
  cd: C => D,
  bc: B => C,
  ab: A => B
): A => F;
declare function $npm$ReduxDevtoolsExtension$composeWithDevTools<A, B, C, D, E, F, G>(
  fg: F => G,
  ef: E => F,
  de: D => E,
  cd: C => D,
  bc: B => C,
  ab: A => B
): A => G;
declare function $npm$ReduxDevtoolsExtension$composeWithDevTools<A, B, C, D, E, F, G, H>(
  gh: G => H,
  fg: F => G,
  ef: E => F,
  de: D => E,
  cd: C => D,
  bc: B => C,
  ab: A => B
): A => H;
declare function $npm$ReduxDevtoolsExtension$composeWithDevTools<A, B, C, D, E, F, G, H, I>(
  hi: H => I,
  gh: G => H,
  fg: F => G,
  ef: E => F,
  de: D => E,
  cd: C => D,
  bc: B => C,
  ab: A => B
): A => H;

declare function $npm$ReduxDevtoolsExtension$devToolsEnhancer<S, A>(options?: $npm$ReduxDevtoolsExtension$DevToolsOptions): StoreEnhancer<S, A>;

declare module 'redux-devtools-extension' {
  declare export type DevToolsOptions = $npm$ReduxDevtoolsExtension$DevToolsOptions;

  declare export var composeWithDevTools: typeof $npm$ReduxDevtoolsExtension$composeWithDevTools;
  declare export var devToolsEnhancer: typeof $npm$ReduxDevtoolsExtension$devToolsEnhancer;
}

declare module 'redux-devtools-extension/developmentOnly' {
  declare export type DevToolsOptions = $npm$ReduxDevtoolsExtension$DevToolsOptions;

  declare export var composeWithDevTools: typeof $npm$ReduxDevtoolsExtension$composeWithDevTools;
  declare export var devToolsEnhancer: typeof $npm$ReduxDevtoolsExtension$devToolsEnhancer;
}

declare module 'redux-devtools-extension/logOnly' {
  declare export type DevToolsOptions = $npm$ReduxDevtoolsExtension$DevToolsOptions;

  declare export var composeWithDevTools: typeof $npm$ReduxDevtoolsExtension$composeWithDevTools;
  declare export var devToolsEnhancer: typeof $npm$ReduxDevtoolsExtension$devToolsEnhancer;
}

declare module 'redux-devtools-extension/logOnlyInProduction' {
  declare export type DevToolsOptions = $npm$ReduxDevtoolsExtension$DevToolsOptions;

  declare export var composeWithDevTools: typeof $npm$ReduxDevtoolsExtension$composeWithDevTools;
  declare export var devToolsEnhancer: typeof $npm$ReduxDevtoolsExtension$devToolsEnhancer;
}
