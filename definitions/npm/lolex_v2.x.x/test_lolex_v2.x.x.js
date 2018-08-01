// @flow
import lolex from 'lolex';

lolex.install({
  target: global,
  now: 150,
  loopLimit: 250,
});

// $ExpectError
lolex.install(true);

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
