declare module 'uuid-js' {
  declare class UUID<V: 1|4> {
    fromParts(timeLow: any, timeMid: any, timeHiAndVersion: any, clockSeqHiAndReserved: any, clockSeqLow: any, node: any): any;
    hex: string;
    toBytes(): Array<any>;
    toString(): string;
    toURN(): string;
    version: V;
  }
  declare function create<V: 1|4>(version?: V): UUID<V>;
  declare function firstFromTime(time: number): UUID<1>;
  declare function fromBinary(binary: any): UUID;
  declare function fromBytes(bytes: number[]): UUID;
  declare function fromURN(string: string): UUID;
  declare function lastFromTime(time: number): UUID<1>;
}
