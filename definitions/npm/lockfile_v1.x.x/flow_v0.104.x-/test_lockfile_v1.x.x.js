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

// $FlowExpectedError
locker.lock(1234, lockOpts, () => {
  return;
});

// $FlowExpectedError
locker.lock(lockFileName, 'foo', () => {
  return;
});

// $FlowExpectedError
locker.lock(1234, () => {
  return;
});

// $FlowExpectedError
locker.lockSync(lockFileName, 'foo');

// $FlowExpectedError
locker.lockSync(lockFileName, lockOpts, () => {});

// $FlowExpectedError
locker.unlock(1234, function() {
  return;
});

// $FlowExpectedError
locker.unlockSync(lockFileName, lockOpts);

// $FlowExpectedError
locker.check(lockFileName, 'foo', function() {
  return;
});

// $FlowExpectedError
locker.check(1234, function() {
  return;
});

// $FlowExpectedError
locker.checkSync(lockFileName, 'foo');

// $FlowExpectedError
locker.checkSync(1234, lockOpts);
