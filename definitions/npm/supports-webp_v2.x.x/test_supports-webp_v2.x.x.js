// @flow

import supportsWebP from "supports-webp";
import { it, describe } from "flow-typed-test";

describe("supports-webp", () => {
  it("works", async () => {
    const x: Promise<boolean> = supportsWebP;
    const y: boolean = await supportsWebP;
    supportsWebP.then(s => {
      const z: boolean = s;
    });
  });

  it("raises error", () => {
    // $FlowExpectedError - imported value is a Promise<boolean>
    const x: boolean = supportsWebP;
  });
});
