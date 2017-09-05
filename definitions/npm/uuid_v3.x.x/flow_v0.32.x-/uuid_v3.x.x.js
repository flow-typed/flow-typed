declare module 'uuid' {
  declare class uuid {
    static (options?: {|
      random?: number[],
      rng?: () => number[] | Buffer,
    |}, buffer?: number[] | Buffer, offset?: number): string;

    static v1(options?: {|
      node?: number[],
      clockseq?: number,
      msecs?: number | Date,
      nsecs?: number,
    |}, buffer?: number[] | Buffer, offset?: number): string;

    static v4(options?: {|
      random?: number[],
      rng?: () => number[] | Buffer,
    |}, buffer?: number[] | Buffer, offset?: number): string;
  }
  declare module.exports: Class<uuid>
}
