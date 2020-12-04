declare module "lockfile" {
  declare type Callback = (err: ?Error) => void | mixed;
  declare type LockOptions = {
    wait?: number,
    pollPeriod?: number,
    stale?: number,
    retries?: number,
    retryWait?: number,
    ...
  };
  declare interface LockFileExport {
    lock(fileName: string, opts: LockOptions, cb: Callback): void;
    lock(fileName: string, cb: Callback): void;
    lockSync(fileName: string, opts?: LockOptions): void;
    unlock(fileName: string, cb: Callback): void;
    unlockSync(fileName: string): void;
    check(fileName: string, opts: LockOptions, cb: Callback): void;
    check(fileName: string, cb: Callback): void;
    checkSync(fileName: string, opts?: LockOptions): boolean;
  }
  declare module.exports: LockFileExport;
}
