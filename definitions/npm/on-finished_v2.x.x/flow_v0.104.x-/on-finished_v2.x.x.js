declare module 'on-finished' {

  declare function isFinished(msg: Object): boolean;

  declare module.exports: <T>(msg: T, listener: (err: Error | null, msg: T) => void) => T;
}
