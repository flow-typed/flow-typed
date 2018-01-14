import type { Dispatch, Store } from "redux";

declare module "react-redux" {
  import type {ComponentType} from 'react';
  /*

    S = State
    A = Action
    OP = OwnProps
    SP = StateProps
    DP = DispatchProps

  */

  declare type MergeProps<SP, DP: Object, OP: Object, P: Object> = (
    stateProps: SP,
    dispatchProps: DP,
    ownProps: OP
  ) => P;

  declare type Context = { store: Store<*, *> };

  declare type ComponentWithDefaultProps<DP: {}, P: {}, CP: P> = Class<
    React$Component<CP>
  > & { defaultProps: DP };

  declare class ConnectedComponentWithDefaultProps<
    OP,
    DP,
    CP
  > extends React$Component<OP> {
    static defaultProps: DP, // <= workaround for https://github.com/facebook/flow/issues/4644
    static WrappedComponent: Class<React$Component<CP>>,
    getWrappedInstance(): React$Component<CP>,
    props: OP,
    state: void
  }

  declare class ConnectedComponent<OP, P> extends React$Component<OP> {
    static WrappedComponent: Class<React$Component<P>>,
    getWrappedInstance(): React$Component<P>,
    props: OP,
    state: void
  }

  declare type ConnectedComponentWithDefaultPropsClass<OP, DP, CP> = Class<
    ConnectedComponentWithDefaultProps<OP, DP, CP>
  >;

  declare type ConnectedComponentClass<OP, P> = Class<
    ConnectedComponent<OP, P>
  >;

  declare type Connector<OP, P> = (<DP: {}, CP: {}>(
    component: ComponentWithDefaultProps<DP, P, CP>
  ) => ConnectedComponentWithDefaultPropsClass<OP, DP, CP>) &
    ((component: React$ComponentType<P>) => ConnectedComponentClass<OP, P>);

  declare class Provider<S, A> extends React$Component<{
    store: Store<S, A>,
    children?: any
  }> {}

  declare function createProvider(
    storeKey?: string,
    subKey?: string
  ): Provider<*, *>;

  declare type ConnectOptions = {
    pure?: boolean,
    withRef?: boolean
  };

  declare type Null = null | void;

  declare type MapStateToProps<P: Object, R: Object> = (state: Object, props: P) => R;
  declare type MapDispatchToProps<A, OP: Object, DP: Object> = (dispatch: Dispatch<A>, ownProps: OP) => DP

  declare function connect<P: Object, R: Object, PR: Object>(
    mapStateToProps: MapStateToProps<P, R>
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<PR, {dispatch: any}>, R> & P>;
  declare function connect<R: Object, PR: Object>(
    mapStateToProps: MapStateToProps<R>
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<PR, {dispatch: any}>, R>>;
  declare function connect<PR: Object>(
    mapStateToProps?: null,
    mapDispatchToProps?: null
  ): (ComponentType<PR>) => ComponentType<PR>;
  declare function connect<A, OP: Object, P: Object, SP: Object, DP: Object,PR: Object>(
    mapStateToProps: MapStateToProps<P, SP>,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<$Diff<PR, {dispatch: any}>, SP>, DP> & P & OP>;
  declare function connect<A, OP: Object, DP: Object,PR: Object>(
    mapStateToProps?: null,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<PR, {dispatch: any}>, DP> & OP>;
}
