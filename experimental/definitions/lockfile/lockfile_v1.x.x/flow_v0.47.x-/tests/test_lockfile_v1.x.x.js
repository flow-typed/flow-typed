// @flow
import type { Callback, LockOptions } from "lockfile";
import * as locker from "lockfile";

const lockFileName: string = "/path/foo/bar.txt";
const lockOpts: LockOptions = {
  wait: 1000,
  pollPeriod: 100,
  stale: 5 * 60 * 1000,
  retries: 100,
  retryWait: 100
};

locker.lock(lockFileName, lockOpts, () => {
  return;
});

locker.unlock(lockFileName, function() {
  return;
});

// $ExpectError
locker.lock(1234, lockOpts, () => {
  return;
});

// $ExpectError
locker.unlock(1234, function() {
  return;
});

// $ExpectError
locker.lock(lockFileName, "foo", () => {
  return;
});
