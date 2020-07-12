import { describe, it } from "flow-typed-test";
import slash from "slash";

describe("slash()", () => {
  it("should validate", () => {
    (slash("\\path"): string);

    // $FlowExpectedError
    (slash(): string);

    // $FlowExpectedError
    (slash("\\path"): void);
  });
});
