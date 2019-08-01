// @flow
import { describe, it } from 'flow-typed-test';
import lolex from 'lolex';

describe('lolex', () => {
  it('install', () => {
    lolex.install({
      target: global,
      now: 150,
      loopLimit: 250,
    });

    // $ExpectError
    lolex.install(true);
  });

  it('clock', () => {
    const clock = lolex.install();

    clock.next();
    clock.tick(150);
    clock.runAll();
    const timeoutId = clock.setTimeout(() => {});
    const intervalId = clock.setInterval(() => {});
    clock.clearTimeout(timeoutId);
    // $ExpectError
    clock.clearTimeout(intervalId);
    clock.clearInterval(intervalId);
    clock.runToFrame();
  });
});
