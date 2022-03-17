declare module 'base64-arraybuffer' {
  declare function encode(arraybuffer: ArrayBuffer): string;

  declare function decode(base64: string): ArrayBuffer;
}
