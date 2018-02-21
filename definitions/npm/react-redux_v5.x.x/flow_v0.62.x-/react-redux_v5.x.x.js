import type { Dispatch, Store } from "redux";

declare module "react-redux" {
  import type {ComponentType} from 'react';

  declare export class Provider<S, A> extends React$Component<{
    store: Store<S, A>,
    children?: any
  }> {}

  declare export function createProvider(
    storeKey?: string,
    subKey?: string
  ): Provider<*, *>;

  declare type ConnectOptions = {|
    pure?: boolean,
    withRef?: boolean
  |};

  declare type MapStateToProps<P: Object, R: Object> = (state: Object, props: P) => R;
  declare type MapDispatchToProps<A, OP: Object, DP: Object> = (dispatch: Dispatch<A>, ownProps: OP) => DP
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

  declare export function connect<P: Object, R: Object, PR: Object>(
    mapStateToProps: MapStateToProps<P, R>,
    mapDispatchToProps?: null
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<PR, {dispatch: any}>, R> & P>;
  declare export function connect<PR: Object>(
    mapStateToProps?: null,
    mapDispatchToProps?: null
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, {dispatch: any}>>;
  declare export function connect<A, OP: Object, P: Object, SP: Object, DP: Object,PR: Object>(
    mapStateToProps: MapStateToProps<P, SP>,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<PR, SP>, DP> & P & OP>;
  declare export function connect<A, OP: Object, DP: Object,PR: Object>(
    mapStateToProps?: null,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, DP> & OP>;
  declare export function connect<PR: Object, MDP: Object>(
    mapStateToProps?: null,
    mapDispatchToProps: MDP
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, MDP>>;
  declare export function connect<P: Object, R: Object, PR: Object, MDP: Object>(
    mapStateToProps: MapStateToProps<P, R>,
    mapDispatchToPRops: MDP
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<PR, R>, MDP> & P>;
  declare export function connect<A, OP: Object, P: Object, SP: Object, DP: Object, PR: Object, MP: Object, MRP: Object>(
    mapStateToProps: MapStateToProps<P, SP>,
    mapDispatchToProps: ?MapDispatchToProps<A, OP, DP>,
    mergeProps: MergeProps<SP, DP, MP, MRP>
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, MRP> & P & OP & MP>;
  declare export function connect<A, OP: Object, P: Object, SP: Object, DP: Object, PR: Object, MP: Object, MRP: Object>(
    mapStateToProps: ?MapStateToProps<P, SP>,
    mapDispatchToProps: ?MapDispatchToProps<A, OP, DP>,
    mergeProps: ?MergeProps<SP, DP, MP, MRP>,
    options: ConnectOptions
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, MRP> & P & OP & MP>;
}
