// see here for details
// https://medium.com/@samgoldman/ville-saukkonen-thanks-and-thanks-for-your-thoughtful-questions-24aedcfed518
// https://github.com/facebook/flow/issues/7125

// react-redux merges props as in:
// Object.assign({}, ownProps, stateProps, dispatchProps)

/*
  WC = Component being wrapped
  S = State
  A = Action
  OP = OwnProps
  SP = StateProps
  DP = DispatchProps
  MP = Merge props
  MDP = Map dispatch to props object
  RSP = Returned state props
  RDP = Returned dispatch props
  RMP = Returned merge props
  CP = Props for returned component
  Com = React Component
  ST = Static properties of Com
  EFO = Extra factory options (used only in connectAdvanced)
*/

declare module "react-redux" {
  // ------------------------------------------------------------
  // Typings for connect()
  // ------------------------------------------------------------

  declare type Equal<T: {}> = (next: T, prev: T) => boolean;
  declare export type Options<S, OP, SP, MP> = {|
    pure?: boolean,
    withRef?: boolean,
    areStatesEqual?: Equal<S>,
    areOwnPropsEqual?: Equal<OP>,
    areStatePropsEqual?: Equal<SP>,
    areMergedPropsEqual?: Equal<MP>,
    storeKey?: string,
  |};

  // A connected component wraps some component WC. Note that S (State) and D (Action)
  // are "phantom" type parameters, as they are not constrained by the definition but
  // rather by the context at the use site.
  declare class ConnectedComponent<OP, +WC> extends React$Component<OP> {
    static +WrappedComponent: WC;
    getWrappedInstance(): React$ElementRef<WC>;
  }

  declare type Dispatch<A> = (action: A) => A;

  declare type MapStateToProps<-S, -OP, +SP> = (state: S, ownProps: OP) => SP;
  declare type MapDispatchToPropsFn<A, -OP, +DP> = (
    dispatch: Dispatch<A>,
    ownProps: OP,
  ) => DP;

  // The connector function actaully perfoms the wrapping,
  // returning a connected component.
  declare type Connector<OP, C> = <WC: C>(
    WC,
  ) => Class<React$Component<OP>> & WC;

  // Putting it all together.
  // Adding $Shape<P> everywhere makes error messages clearer.

  // ------------------------------------------------------------
  // Simple case without the super powered `mergeProps` argument
  // ------------------------------------------------------------

  declare type Connector2<OP, MP> = <WC: React$ComponentType<MP>>(
    WC,
  ) => Class<React$Component<OP>> & WC;

  declare type ExtendProps<P, MP: P> = P;

  declare export function connect<-P, -OP, -SP: {||}, -DP: {||}, -S, -A>(
    mapStateToProps?: null | void,
    mapDispatchToProps?: null | void,
    mergeProps?: null | void,
    options?: ?Options<S, OP, {||}, {| ...OP, dispatch: Dispatch<A> |}>,
  ): Connector2<OP, ExtendProps<P, {| ...OP, dispatch: Dispatch<A> |}>>;

  declare export function connect<-P, -OP, -SP, -DP: {||}, -S, -A>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps?: null | void,
    mergeProps?: null | void,
    options?: ?Options<S, OP, SP, {| ...OP, ...SP |}>,
  ): Connector2<OP, ExtendProps<P, {| ...OP, ...SP |}>>;

  declare export function connect<-P, -OP, -SP, -DP, S, A>(
    mapStateToProps: null | void,
    mapDispatchToProps: MapDispatchToPropsFn<A, OP, DP> | DP,
    mergeProps?: null | void,
    options?: ?Options<S, OP, {||}, {| ...OP, ...DP |}>,
  ): Connector2<OP, ExtendProps<P, {| ...OP, ...DP |}>>;

  declare export function connect<-P, -OP, -SP, -DP, S, A>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: MapDispatchToPropsFn<A, OP, DP> | DP,
    mergeProps?: null | void,
    options?: ?Options<S, OP, SP, {| ...OP, ...SP, ...DP |}>,
  ): Connector2<OP, ExtendProps<P, {| ...OP, ...SP, ...DP |}>>;

  // ------------------------------------------------------------
  // Harder case with the super powered `mergeProps` argument
  // ------------------------------------------------------------

  declare type MergeProps<+P, -OP, -SP, -DP> = (
    stateProps: SP,
    dispatchProps: DP,
    ownProps: OP,
  ) => P;

  declare export function connect<-P, -OP, -S, -A, SP, DP: {||}>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: null | void,
    mergeProps: MergeProps<P, OP, SP, DP>,
    options?: ?Options<S, OP, SP, P>,
  ): Connector2<OP, P>;

  declare export function connect<-P, -OP, -S, -A, SP: {||}, DP>(
    mapStateToProps: null | void,
    mapDispatchToProps: MapDispatchToPropsFn<A, OP, DP> | DP,
    mergeProps: MergeProps<P, OP, SP, DP>,
    options?: ?Options<S, OP, SP, P>,
  ): Connector2<OP, P>;

  declare export function connect<-P, -OP, -S, -A, SP, DP>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: MapDispatchToPropsFn<A, OP, DP> | DP,
    mergeProps: MergeProps<P, OP, SP, DP>,
    options?: ?Options<S, OP, SP, P>,
  ): Connector2<OP, P>;

  // ------------------------------------------------------------
  // Typings for Provider
  // ------------------------------------------------------------

  declare export class Provider<Store> extends React$Component<{
    store: Store,
    children?: React$Node,
  }> {}

  declare export function createProvider(
    storeKey?: string,
    subKey?: string,
  ): Class<Provider<*>>;

  // ------------------------------------------------------------
  // Typings for connectAdvanced()
  // ------------------------------------------------------------

  declare type ConnectAdvancedOptions = {
    getDisplayName?: (name: string) => string,
    methodName?: string,
    renderCountProp?: string,
    shouldHandleStateChanges?: boolean,
    storeKey?: string,
    withRef?: boolean,
  };

  declare type SelectorFactoryOptions<Com> = {
    getDisplayName: (name: string) => string,
    methodName: string,
    renderCountProp: ?string,
    shouldHandleStateChanges: boolean,
    storeKey: string,
    withRef: boolean,
    displayName: string,
    wrappedComponentName: string,
    WrappedComponent: Com,
  };

  declare type MapStateToPropsEx<S: Object, SP: Object, RSP: Object> = (
    state: S,
    props: SP,
  ) => RSP;

  declare type SelectorFactory<
    Com: React$ComponentType<*>,
    Dispatch,
    S: Object,
    OP: Object,
    EFO: Object,
    CP: Object,
  > = (
    dispatch: Dispatch,
    factoryOptions: SelectorFactoryOptions<Com> & EFO,
  ) => MapStateToPropsEx<S, OP, CP>;

  declare export function connectAdvanced<
    Com: React$ComponentType<*>,
    A,
    S: Object,
    OP: Object,
    CP: Object,
    EFO: Object,
    ST: { [_: $Keys<Com>]: any },
  >(
    selectorFactory: SelectorFactory<Com, A, S, OP, EFO, CP>,
    connectAdvancedOptions: ?(ConnectAdvancedOptions & EFO),
  ): (component: Com) => React$ComponentType<OP> & $Shape<ST>;
}
