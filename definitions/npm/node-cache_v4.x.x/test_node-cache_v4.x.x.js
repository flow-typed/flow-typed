// @flow strict

import NodeCache from "node-cache";
import { describe, it } from "flow-typed-test";

describe("node-cache", () => {
  it("errors", () => {
    // $FlowExpectedError
    new NodeCache({ nonexisting: 1 });
  });

  it("works", () => {
    const cache = new NodeCache({ stdTTL: 60 });
    cache.set("foo", 42);
    cache.set("foo", "this is fine");
    (cache.get("foo"): mixed);
    cache.del("foo");
    cache.del(["foo"]);
    cache.flushAll();
  });
});
