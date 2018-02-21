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

  /*

  S = State
  A = Action
  OP = OwnProps
  SP = StateProps
  DP = DispatchProps
  PR = Component props
  MP = Merge props
  MDP = Map dispatch to props object
  RSP = Returned state props
  RDP = Returned dispatch props
  RMP = Returned merge props

  */

  declare type MapStateToProps<SP: Object, RSP: Object> = (state: Object, props: SP) => RSP;

  declare type MapDispatchToProps<A, OP: Object, RDP: Object> = (dispatch: Dispatch<A>, ownProps: OP) => RDP;

  declare type MergeProps<SP: Object, DP: Object, MP: Object, RMP: Object> = (
    stateProps: SP,
    dispatchProps: DP,
    ownProps: MP
  ) => RMP;

  declare type ConnectOptions = {|
    pure?: boolean,
    withRef?: boolean
  |};

  declare export function connect<DP: Object, RSP: Object, PR: Object>(
    mapStateToProps: MapStateToProps<DP, RSP>,
    mapDispatchToProps?: null
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<PR, {dispatch: Dispatch<*>}>, RSP> & DP>;

  declare export function connect<PR: Object>(
    mapStateToProps?: null,
    mapDispatchToProps?: null
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, {dispatch: Dispatch<*>}>>;

  declare export function connect<A, DP: Object, SP: Object, RSP: Object, RDP: Object,PR: Object>(
    mapStateToProps: MapStateToProps<SP, RSP>,
    mapDispatchToProps: MapDispatchToProps<A, DP, RDP>
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<PR, RSP>, RDP> & SP & DP>;

  declare export function connect<A, OP: Object, DP: Object,PR: Object>(
    mapStateToProps?: null,
    mapDispatchToProps: MapDispatchToProps<A, OP, DP>
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, DP> & OP>;

  declare export function connect<PR: Object, MDP: Object>(
    mapStateToProps?: null,
    mapDispatchToProps: MDP
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, MDP>>;

  declare export function connect<SP: Object, RSP: Object, PR: Object, MDP: Object>(
    mapStateToProps: MapStateToProps<SP, RSP>,
    mapDispatchToPRops: MDP
  ): (ComponentType<PR>) => ComponentType<$Diff<$Diff<PR, RSP>, MDP> & SP>;

  declare export function connect<A, DP: Object, SP: Object, RSP: Object, RDP: Object, PR: Object, MP: Object, RMP: Object>(
    mapStateToProps: MapStateToProps<SP, RSP>,
    mapDispatchToProps: ?MapDispatchToProps<A, DP, RDP>,
    mergeProps: MergeProps<RSP, RDP, MP, RMP>
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, RMP> & SP & DP & MP>;

  declare export function connect<A, DP: Object, SP: Object, RSP: Object, RDP: Object, PR: Object, MP: Object, RMP: Object>(
    mapStateToProps: ?MapStateToProps<SP, RSP>,
    mapDispatchToProps: ?MapDispatchToProps<A, DP, RDP>,
    mergeProps: ?MergeProps<RSP, RDP, MP, RMP>,
    options: ConnectOptions
  ): (ComponentType<PR>) => ComponentType<$Diff<PR, RMP> & SP & DP & MP>;
}
