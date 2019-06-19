declare module 'base64url' {
  declare module.exports: {
    (value: string | Buffer, encoding?: buffer$Encoding): string;
    encode(value: string | Buffer, encoding?: buffer$Encoding): string;
    decode(value: string, encoding?: buffer$Encoding): string;
    toBuffer(value: string): Buffer;
    fromBase64(value: string): string;
    toBase64(value: string): string;
  };
}
