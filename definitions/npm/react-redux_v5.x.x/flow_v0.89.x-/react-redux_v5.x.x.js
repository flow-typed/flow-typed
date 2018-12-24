/**
The order of type arguments for connect() is as follows:

connect<Props, OwnProps, StateProps, DispatchProps, State, Action>(…)

In Flow v0.89 only the first two are mandatory to specify. Other 4 can be repaced with the new awesome type placeholder:

connect<Props, OwnProps, _, _, _, _>(…)

But beware, in case of weird type errors somewhere in random places
just type everything and get to a green field and only then try to
remove the definitions you see bogus.

Decrypting the abbreviations:
  WC = Component being wrapped
  S = State
  A = Action
  OP = OwnProps
  SP = StateProps
  DP = DispatchProps
  MP = Merge props
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

  declare export type Options<S, OP, SP, MP> = {|
    pure?: boolean,
    withRef?: boolean,
    areStatesEqual?: (next: S, prev: S) => boolean,
    areOwnPropsEqual?: (next: OP, prev: OP) => boolean,
    areStatePropsEqual?: (next: SP, prev: SP) => boolean,
    areMergedPropsEqual?: (next: MP, prev: MP) => boolean,
    storeKey?: string,
  |};

  declare type Dispatch<A> = (action: A) => A;

  declare type MapStateToProps<-S, -OP, +SP> =
    | ((state: S, ownProps: OP) => SP)
    // If you want to use the factory function but get a strange error
    // like "function is not an object" then just type the factory function
    // like this:
    // const factory: (State, OwnProps) => (State, OwnProps) => StateProps
    // and provide the StateProps type to the SP type parameter.
    | ((state: S, ownProps: OP) => (state: S, ownProps: OP) => SP);

  declare type MapDispatchToPropsFn<A, -OP, +DP> =
    | ((dispatch: Dispatch<A>, ownProps: OP) => DP)
    // If you want to use the factory function but get a strange error
    // like "function is not an object" then just type the factory function
    // like this:
    // const factory: (Dispatch, OwnProps) => (Dispatch, OwnProps) => DispatchProps
    // and provide the DispatchProps type to the DP type parameter.
    | ((
        dispatch: Dispatch<A>,
        ownProps: OP,
      ) => (dispatch: Dispatch<A>, ownProps: OP) => DP);

  declare class ConnectedComponent<OP, +WC> extends React$Component<OP> {
    static +WrappedComponent: WC;
    getWrappedInstance(): React$ElementRef<WC>;
  }
  declare type Connector<P, OP, MP: P> = <WC: React$ComponentType<P>>(
    WC,
  ) => Class<ConnectedComponent<OP, WC>> & WC;

  // No `mergeProps` argument

  declare export function connect<-P, -OP, -SP, -DP, -S, -A>(
    mapStateToProps?: null | void,
    mapDispatchToProps?: null | void,
    mergeProps?: null | void,
    options?: ?Options<S, OP, {||}, {| ...OP, dispatch: Dispatch<A> |}>,
    // Got error like inexact OwnProps is incompatible with exact object type?
    // Just make your OP parameter an exact object.
  ): Connector<P, OP, {| ...OP, dispatch: Dispatch<A> |}>;

  declare export function connect<-P, -OP, -SP, -DP, -S, -A>(
    // If you get error here try adding return type to your mapStateToProps function
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps?: null | void,
    mergeProps?: null | void,
    options?: ?Options<S, OP, SP, {| ...OP, ...SP |}>,
    // Got error like inexact OwnProps is incompatible with exact object type?
    // Just make your OP parameter an exact object.
  ): Connector<P, OP, {| ...OP, ...SP |}>;

  declare export function connect<-P, -OP, -SP, -DP, S, A>(
    mapStateToProps: null | void,
    mapDispatchToProps: MapDispatchToPropsFn<A, OP, DP> | DP,
    mergeProps?: null | void,
    options?: ?Options<S, OP, {||}, {| ...OP, ...DP |}>,
    // Got error like inexact OwnProps is incompatible with exact object type?
    // Just make your OP parameter an exact object.
  ): Connector<P, OP, {| ...OP, ...DP |}>;

  declare export function connect<-P, -OP, -SP, -DP, S, A>(
    // If you get error here try adding return type to your mapStateToProps function
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: MapDispatchToPropsFn<A, OP, DP> | DP,
    mergeProps?: null | void,
    options?: ?Options<S, OP, SP, {| ...OP, ...SP, ...DP |}>,
    // Got error like inexact OwnProps is incompatible with exact object type?
    // Just make your OP parameter an exact object.
  ): Connector<P, OP, {| ...OP, ...SP, ...DP |}>;

  // With `mergeProps` argument

  declare type MergeProps<+P, -OP, -SP, -DP> = (
    stateProps: SP,
    dispatchProps: DP,
    ownProps: OP,
  ) => P;

  declare export function connect<-P, -OP, -S, -A, SP, DP>(
    mapStateToProps: null | void,
    mapDispatchToProps: null | void,
    // If you get error here try adding return type to you mapStateToProps function
    mergeProps: MergeProps<P, OP, SP, DP>,
    options?: ?Options<S, OP, SP, P>,
  ): Connector<P, OP, P>;

  declare export function connect<-P, -OP, -S, -A, SP, DP>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: null | void,
    // If you get error here try adding return type to you mapStateToProps function
    mergeProps: MergeProps<P, OP, SP, DP>,
    options?: ?Options<S, OP, SP, P>,
  ): Connector<P, OP, P>;

  declare export function connect<-P, -OP, -S, -A, SP, DP>(
    mapStateToProps: null | void,
    mapDispatchToProps: MapDispatchToPropsFn<A, OP, DP> | DP,
    mergeProps: MergeProps<P, OP, SP, DP>,
    options?: ?Options<S, OP, SP, P>,
  ): Connector<P, OP, P>;

  declare export function connect<-P, -OP, -S, -A, SP, DP>(
    mapStateToProps: MapStateToProps<S, OP, SP>,
    mapDispatchToProps: MapDispatchToPropsFn<A, OP, DP> | DP,
    mergeProps: MergeProps<P, OP, SP, DP>,
    options?: ?Options<S, OP, SP, P>,
  ): Connector<P, OP, P>;

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
