/* @flow */
type ConnectAll = <D, P, S, C: React$Component<D, P, S>, SP, DP, Dispatch: Function>(
  mapStateToProps: (state: Object, ownProps: $Diff<$Diff<$Diff<P, DP>, SP>, D>) => SP,
  mapDispatchToProps: (dispatch: Dispatch, ownProps: $Diff<$Diff<$Diff<P, DP>, SP>, D>) => DP,
  mergeProps: null | void,
  options?: {pure?: boolean, withRef?: boolean}
) => (component: Class<C>) => Class<React$Component<D, $Diff<$Diff<P, DP>, SP>, S>>;

type ConnectAllStateless = <P, SP, DP, Dispatch: Function>(
  mapStateToProps: (state: Object, ownProps: $Diff<$Diff<P, DP>, SP>) => SP,
  mapDispatchToProps: (dispatch: Dispatch, ownProps: $Diff<$Diff<P, DP>, SP>) => DP,
  mergeProps: null | void,
  options?: {pure?: boolean, withRef?: boolean}
) => (component: (props: P) => any) => Class<React$Component<void, $Diff<$Diff<P, DP>, SP>, void>>;

type ConnectMerged = <D, P, S, C: React$Component<D, P, S>, SP, DP, MP, Dispatch: Function>(
  mapStateToProps: (state: Object, ownProps: $Diff<$Diff<P, MP>, D>) => SP,
  mapDispatchToProps: (dispatch: Dispatch, ownProps: $Diff<$Diff<P, MP>, D>) => DP,
  mergeProps: (stateProps: SP, dispatchProps: DP, ownProps: $Diff<$Diff<P, MP>, D>) => MP,
  options?: {pure?: boolean, withRef?: boolean}
) => (component: Class<C>) => Class<React$Component<D, $Diff<P, MP>, S>>;

type ConnectMergedStateless = <P, SP, DP, MP, Dispatch: Function>(
  mapStateToProps: (state: Object, ownProps: $Diff<P, MP>) => SP,
  mapDispatchToProps: (dispatch: Dispatch, ownProps: $Diff<P, MP>) => DP,
  mergeProps: (stateProps: SP, dispatchProps: DP, ownProps: $Diff<P, MP>) => MP,
  options?: {pure?: boolean, withRef?: boolean}
) => (component: (props: P) => any) => Class<React$Component<void, $Diff<P, MP>, void>>;

type ConnectNoState = <D, P, S, C: React$Component<D, P, S>, DP, Dispatch: Function>(
    mapStateToProps: null | void,
    mapDispatchToProps: (dispatch: Dispatch, ownProps: $Diff<$Diff<P, DP>, D>) => DP,
    mergeProps: null | void,
    options?: {pure?: boolean, withRef?: boolean}
  ) => (component: Class<C>) => Class<React$Component<D, $Diff<P, DP>, S>>;

type ConnectNoStateStatless = <P, DP, Dispatch: Function>(
    mapStateToProps: null | void,
    mapDispatchToProps: (dispatch: Dispatch, ownProps: $Diff<P, DP>) => DP,
    mergeProps: null | void,
    options?: {pure?: boolean, withRef?: boolean}
  ) => (component: (props: P) => any) => Class<React$Component<void, $Diff<P, DP>, void>>;

type ConnectDispatch = <D, P, S, C: React$Component<D, P, S>, SP, Dispatch: Function>(
  mapStateToProps: (state: Object, ownProps: $Diff<$Diff<$Diff<P, {dispatch: Dispatch}>, SP>, D>) => SP,
  mapDispatchToProps: null | void,
  mergeProps: null | void,
  options?: {pure?: boolean, withRef?: boolean}
) => (component: Class<C>) => Class<React$Component<D, $Diff<$Diff<P, {dispatch: Dispatch}>, SP>, S>>;

type ConnectDispatchStateless = <P, SP, Dispatch: Function>(
  mapStateToProps: (state: Object, ownProps: $Diff<$Diff<P, {dispatch: Dispatch}>, SP>) => SP,
  mapDispatchToProps: null | void,
  mergeProps: null | void,
  options?: {pure?: boolean, withRef?: boolean}
) => (component: (props: P) => any) => Class<React$Component<void, $Diff<$Diff<P, {dispatch: Dispatch}>, SP>, void>>;

type ConnectDefault = <D, P, S, C: React$Component<D, P, S>, Dispatch: Function>() =>
  (component: Class<C>) => Class<React$Component<D, $Diff<P, {dispatch: Dispatch}>, S>>;

type ConnectDefaultStateless = () =>
  <P>(component: (props: P) => any) => Class<React$Component<void, $Diff<P, {dispatch: Function}>, void>>;

declare module 'react-redux' {
  declare var exports: {
    connect: ConnectAll
      & ConnectAllStateless
      & ConnectMerged
      & ConnectMergedStateless
      & ConnectNoState
      & ConnectNoStateStatless
      & ConnectDispatch
      & ConnectDispatchStateless
      & ConnectDefault
      & ConnectDefaultStateless;
    Provider: ReactClass<{store: Object, children?: any}>;
  }
}
