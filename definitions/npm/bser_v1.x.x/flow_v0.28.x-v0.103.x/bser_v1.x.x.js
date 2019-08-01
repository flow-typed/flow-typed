declare module 'bser' {
  /*
  TODO: Support importing of other libdefs
  import typeof Int64 from 'node-int64'; 
  */
  declare type BserValidTypes =
    | number
    | string
    | boolean
    | null
    /* |Int64 */
    | Array<BserValidTypes>
    | { [key: string]: BserValidTypes };


  declare export class Accumulator {
    buf: Buffer,
    readOffset: number,
    writeOffset: number,
    constructor(initsize?: number): Accumulator,
    writeAvail(): number,
    readAvail(): number,
    reserve(size: number): void,
    append(buf: string|Buffer): void,
    assertReadableSize(size: number): void,
    peekString(size: number): string,
    readString(size: number): string,
    peekInt(size: number): number/* |Int64 */,
    readInt(size: number): number/* |Int64 */,
    peekDouble(): number,
    readDouble(): number,
    readAdvance(size: number): void,
    writeByte(value: number): void,
    writeInt(value: number, size: number): void,
    writeDouble(value: number): void,
    
  }
  declare export class BunserBuf extends events$EventEmitter {
    buf: Accumulator,
    state: number,
    append(buf: string|Buffer, synchronous: true): BserValidTypes,
    append(buf: string|Buffer, synchronous?: false): void,
    processLater(): void,
    process(synchronous: true): BserValidTypes,
    process(synchronous?: false): void,
    raise(reason: string): void,
    expectCode(expected: number): void,
    decodeAny(): BserValidTypes,
    decodeArray(): Array<BserValidTypes>,
    decodeObject(): { [key: string]: BserValidTypes },
    decodeTemplate(): Array<BserValidTypes>,
    decodeString(): string,
    decodeInt(relaxSizeAsserts: true): number/* |Int64 */|false,
    decodeInt(relaxSizeAsserts?: false): number/* |Int64 */,
  }

  declare export function loadFromBuffer(input: string|Buffer): BserValidTypes;
  declare export function dumpToBuffer(val: BserValidTypes): Accumulator;
}