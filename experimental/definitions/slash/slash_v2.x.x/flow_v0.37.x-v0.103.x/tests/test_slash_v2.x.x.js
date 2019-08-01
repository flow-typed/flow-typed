import { describe, it } from "flow-typed-test";
import slash from "slash";

describe("slash()", () => {
  it("should validate", () => {
    (slash("\\path"): string);

    // $ExpectError
    (slash(): string);

    // $ExpectError
    (slash("\\path"): void);
  });
});
