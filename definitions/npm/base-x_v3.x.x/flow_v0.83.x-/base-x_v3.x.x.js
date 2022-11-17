declare module 'base-x' {
  declare type BaseX = {|
    decode(encoded: string): Buffer,
    encode(buffer: Buffer): string,
  |};

  declare module.exports: (alphabet: string) => BaseX;
}
