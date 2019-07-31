declare module '@react-native-community/netinfo' {
  declare export type CellularGeneration = '2g' | '3g' | '4g';

  declare export type UnknownStateType = 'none' | 'unknown';
  declare export type CellularStateType = 'cellular';
  declare export type OtherStateType =
    | 'wifi'
    | 'bluetooth'
    | 'ethernet'
    | 'wimax'
    | 'vpn'
    | 'other';

  declare export type StateType =
    | UnknownStateType
    | CellularStateType
    | OtherStateType;

  declare export type NetInfoStateDescriptor<T, D> = $ReadOnly<{|
    type: T,
    isConnected: boolean,
    isInternetReachable: boolean,
    details: D,
  |}>;

  // https://github.com/react-native-community/react-native-netinfo/blob/master/README.md#netinfostate
  declare export type NetInfoState =
    | NetInfoStateDescriptor<UnknownStateType, null>
    | NetInfoStateDescriptor<
        CellularStateType,
        {|
          +isConnectionExpensive: boolean,
          +cellularGeneration: ?CellularGeneration,
        |}
      >
    | NetInfoStateDescriptor<
        OtherStateType,
        {|
          +isConnectionExpensive: boolean,
        |}
      >;

  declare export type NetInfoSubscription = () => void;

  declare export function useNetInfo(): NetInfoState;

  declare export function fetch(): Promise<NetInfoState>;

  declare export function addEventListener(
    listener: (NetInfoState) => mixed
  ): NetInfoSubscription;

  declare export default $ReadOnly<{|
    fetch: typeof fetch,
    addEventListener: typeof addEventListener,
    useNetInfo: typeof useNetInfo,
  |}>;
}
