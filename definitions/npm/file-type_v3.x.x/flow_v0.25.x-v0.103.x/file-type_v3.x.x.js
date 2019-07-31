declare module 'file-type' {
  declare module.exports: (buffer: Buffer | Uint8Array) => ?{ ext: string, mime: string };
}
