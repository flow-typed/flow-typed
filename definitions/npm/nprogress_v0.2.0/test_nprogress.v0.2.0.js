// @flow
import nprogress from "nprogress";

// $ExpectError
nprogress.configure();

nprogress.configure({
  parent: "body",
  minimum: 0,
  trickle: true,
  trickleSpeed: 20,
  showSpinner: true,
  easing: "linear",
  speed: 20,
  template: '<div class="bar" role="bar"></div>'
});

// $ExpectError
nprogress.configure({
  unknown: "blah"
});

nprogress.start();

nprogress.done();
nprogress.done(true);

nprogress.inc();
nprogress.inc(2);

nprogress.remove();

nprogress.set(2);

const version: string = nprogress.version;

const status: number | null = nprogress.status;

const isStarted: boolean = nprogress.isStarted();

// Can chain methods
nprogress
  .start()
  .inc(2)
  .set(2)
  .done(true)
  .remove();
