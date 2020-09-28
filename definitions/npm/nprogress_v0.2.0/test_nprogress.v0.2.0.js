// @flow
import { describe, it } from "flow-typed-test";
import nprogress from "nprogress";

describe("config", () => {
  it("should fail on invalid config", () => {
    // $FlowExpectedError
    nprogress.configure();

    // $FlowExpectedError
    nprogress.configure({
      unknown: "blah"
    });
  });

  it("should pass on valid config", () => {
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
  });
});

describe("methods", () => {
  it("should fail on unknown method", () => {
    // $FlowExpectedError
    nprogress.unknown();
  });

  it("should pass on using known methods", () => {
    nprogress.start();

    nprogress.done();
    nprogress.done(true);

    nprogress.inc();
    nprogress.inc(2);

    nprogress.remove();

    nprogress.set(2);
  });

  it("should be able to chain methods", () => {
    nprogress
      .start()
      .inc(2)
      .set(2)
      .done(true)
      .remove();
  });
});

describe("properties", () => {
  it("can access properties correctly", () => {
    const version: string = nprogress.version;

    const status: number | null = nprogress.status;

    const isStarted: boolean = nprogress.isStarted();
  });
});
