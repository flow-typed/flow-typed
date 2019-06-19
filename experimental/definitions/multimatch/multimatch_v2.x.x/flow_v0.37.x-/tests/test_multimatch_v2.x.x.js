import { describe, it } from "flow-typed-test";
import multimatch from "multimatch";

describe("multimatch()", () => {
  it("should validate critical use paths", () => {
    const result = (multimatch("path", "pa*"): string[]);
    (result[0]: string);

    // $ExpectError
    (multimatch("path", "pa*"): void);

    multimatch(["path", "multi"], "pa*");

    // $ExpectError
    multimatch(null, "pa*");

    multimatch("path", ["pa*", "multi"]);

    // $ExpectError
    multimatch("path", null);
  });

  it("should validate options", () => {
    multimatch("path", "pa*", undefined);
    multimatch("path", "pa*", {
      debug: true,
      dot: true,
      flipNegate: true,
      matchBase: true,
      nobrace: true,
      nocase: true,
      nocommnet: true,
      noext: true,
      noglobstar: true,
      nonegate: true,
      nonull: true
    });
    multimatch("path", "pa*", {});
    multimatch("path", "pa*", {
      debug: true
    });

    // $ExpectError
    multimatch("path", "pa*", null);
    // $ExpectError
    multimatch("path", "pa*", {
      foo: "bar"
    });
  });
});
