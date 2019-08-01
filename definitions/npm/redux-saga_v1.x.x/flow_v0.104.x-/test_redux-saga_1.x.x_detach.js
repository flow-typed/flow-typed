// @flow
import { describe, it } from "flow-typed-test";
import { detach, type ForkEffect } from "redux-saga";
import { fork } from "redux-saga/effects";

describe("detach(ForkEffect): ForkEffect*", () => {
  const simpleForkEffect = fork(() => true);

  it("must return detached ForkEffect", () => {
    const detachedForkEffect = detach(simpleForkEffect);

    // $ExpectError
    (simpleForkEffect.payload.detached: true);

    (detachedForkEffect.payload.detached: true);
  });

  it("must raises an error when first argument isn't ForkEffect", () => {
    // $ExpectError
    detach({ type: "FORK" });
  });
});
