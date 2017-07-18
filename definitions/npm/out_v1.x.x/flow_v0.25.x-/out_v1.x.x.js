declare module 'out' {
  declare module.exports: {
    (message: string, ...args: Array<mixed>): void;
    error(...args: Array<Error | mixed>): void;
    to(targets: Array<tty$WriteStream | stream$Writable>): void;
  }
}
