declare module 'uuid' {
  declare type uuidOptionsV1 = {
    node?: Array<number>,
    clockseq?: number,
    msecs?: number | Date,
    nsecs?: number,
  }
  declare type uuidOptionsV4 = {
    random?: Array<number>,
    rng?: () => Array<number>,
  }
  declare class uuid {
    static v1(options: uuidOptionsV1, buffer: Array<void>, offset: number): Array<void>,
    static v1(options: uuidOptionsV1, buffer: Buffer, offset: number): Buffer,
    static v1(options: uuidOptionsV1, buffer: Array<void>): Array<void>,
    static v1(options: uuidOptionsV1, buffer: Buffer): Buffer,
    static v1(options: uuidOptionsV1): string,
    static v1(): string,

    static v4(options: uuidOptionsV4, buffer: Array<void>, offset: number): Array<void>,
    static v4(options: uuidOptionsV4, buffer: Buffer, offset: number): Buffer,
    static v4(options: uuidOptionsV4, buffer: Array<void>): Array<void>,
    static v4(options: uuidOptionsV4, buffer: Buffer): Buffer,
    static v4(options: uuidOptionsV4): string,
    static v4(): string,
  }
  declare var exports: typeof uuid;
}

