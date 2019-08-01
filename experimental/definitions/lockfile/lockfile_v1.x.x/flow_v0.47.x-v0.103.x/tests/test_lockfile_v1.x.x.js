// @flow
import type { Callback, LockOptions } from 'lockfile';
import * as locker from 'lockfile';

const lockFileName: string = '/path/foo/bar.txt';
const lockOpts: LockOptions = {
  wait: 1000,
  pollPeriod: 100,
  stale: 5 * 60 * 1000,
  retries: 100,
  retryWait: 100,
};

locker.lock(lockFileName, lockOpts, () => {
  return;
});

locker.lock(lockFileName, () => {
  return;
});

locker.lockSync(lockFileName);

locker.lockSync(lockFileName, lockOpts);

locker.unlock(lockFileName, function() {
  return;
});

locker.unlockSync(lockFileName);

locker.check(lockFileName, lockOpts, function() {
  return;
});

locker.check(lockFileName, function() {
  return;
});

locker.checkSync(lockFileName);

locker.checkSync(lockFileName, lockOpts);

// $ExpectError
locker.lock(1234, lockOpts, () => {
  return;
});

// $ExpectError
locker.lock(lockFileName, 'foo', () => {
  return;
});

// $ExpectError
locker.lock(1234, () => {
  return;
});

// $ExpectError
locker.lockSync(lockFileName, 'foo');

// $ExpectError
locker.lockSync(lockFileName, lockOpts, () => {});

// $ExpectError
locker.unlock(1234, function() {
  return;
});

// $ExpectError
locker.unlockSync(lockFileName, lockOpts);

// $ExpectError
locker.check(lockFileName, 'foo', function() {
  return;
});

// $ExpectError
locker.check(1234, function() {
  return;
});

// $ExpectError
locker.checkSync(lockFileName, 'foo');

// $ExpectError
locker.checkSync(1234, lockOpts);
