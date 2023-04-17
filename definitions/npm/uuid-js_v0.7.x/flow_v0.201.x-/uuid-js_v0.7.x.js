declare module "uuid-js" {
  declare class UUID<V> {
    fromParts(
      timeLow: mixed,
      timeMid: mixed,
      timeHiAndVersion: mixed,
      clockSeqHiAndReserved: mixed,
      clockSeqLow: mixed,
      node: mixed
    ): mixed;
    hex: string;
    toBytes(): Array<mixed>;
    toString(): string;
    toURN(): string;
    version: V;
  }
  declare function create(version?: 4): UUID<4>;
  declare function create(version: 1): UUID<1>;
  declare function firstFromTime(time: number): UUID<1>;
  declare function fromBinary(binary: mixed): UUID<any>;
  declare function fromBytes(bytes: number[]): UUID<any>;
  declare function fromURN(string: string): UUID<any>;
  declare function lastFromTime(time: number): UUID<1>;
}
