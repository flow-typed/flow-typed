declare module "lockfile" {
  declare type Callback = (err: ?Error) => void | mixed;
  declare type LockOptions = {
    wait?: number,
    pollPeriod?: number,
    stale?: number,
    retries?: number,
    retryWait?: number
  };
  declare interface LockFileExport {
    lock(fileName: string, opts: LockOptions, cb: Callback): void,
    unlock(fileName: string, cb: Callback): void
  }
  declare module.exports: LockFileExport;
}
