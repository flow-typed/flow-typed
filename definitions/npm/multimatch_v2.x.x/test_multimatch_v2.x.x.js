import { describe, it } from "flow-typed-test";
import multimatch from "multimatch";

describe("multimatch()", () => {
  it("should validate critical use paths", () => {
    const result = (multimatch("path", "pa*"): string[]);
    (result[0]: string);

    // $FlowExpectedError
    (multimatch("path", "pa*"): void);

    multimatch(["path", "multi"], "pa*");

    // $FlowExpectedError
    multimatch(null, "pa*");

    multimatch("path", ["pa*", "multi"]);

    // $FlowExpectedError
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

    // $FlowExpectedError
    multimatch("path", "pa*", null);
    // $FlowExpectedError
    multimatch("path", "pa*", {
      foo: "bar"
    });
  });
});
