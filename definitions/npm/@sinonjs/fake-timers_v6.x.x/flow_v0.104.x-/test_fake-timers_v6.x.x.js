// @flow
import { describe, it } from 'flow-typed-test';
import FakeTimers from '@sinonjs/fake-timers';

describe('@sinonjs/fake-timers', () => {
  it('install', () => {
    FakeTimers.install({
      target: global,
      now: 150,
      loopLimit: 250,
    });

    // $FlowExpectedError
    FakeTimers.install(true);
  });

  it('clock', () => {
    const clock = FakeTimers.install();

    clock.next();
    clock.tick(150);
    clock.runAll();
    const timeoutId = clock.setTimeout(() => {});
    const intervalId = clock.setInterval(() => {});
    clock.clearTimeout(timeoutId);

    // $FlowExpectedError
    clock.clearTimeout(intervalId);
    clock.clearInterval(intervalId);
    clock.runToFrame();
  });
});
