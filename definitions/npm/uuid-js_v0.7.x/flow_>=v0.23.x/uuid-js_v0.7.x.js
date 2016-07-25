declare module 'uuid-js' {
  declare class UUID<V> {
    fromParts(timeLow: mixed, timeMid: mixed, timeHiAndVersion: mixed, clockSeqHiAndReserved: mixed, clockSeqLow: mixed, node: mixed): mixed;
    hex: string;
    toBytes(): Array<mixed>;
    toString(): string;
    toURN(): string;
    version: V;
  }
  declare function create(version?: 4): UUID<4>;
  declare function create(version: 1): UUID<1>;
  declare function firstFromTime(time: number): UUID<1>;
  declare function fromBinary(binary: mixed): UUID<*>;
  declare function fromBytes(bytes: number[]): UUID<*>;
  declare function fromURN(string: string): UUID<*>;
  declare function lastFromTime(time: number): UUID<1>;
}
