import { describe, it } from "flow-typed-test";
import markdownTable from "markdown-table";

describe("markdownTable()", () => {
  it("should validate", () => {
    (markdownTable([["A", "B"], ["1", "2"]]): string);
    (markdownTable([["A", "B"], [1, 2]]): string);
    (markdownTable([["A", "B"], []]): string);
    (markdownTable([["A", "B"], [null, undefined]]): string);
    (markdownTable([["A", "B"]]): string);
    (markdownTable([[]]): string);
    (markdownTable([]): string);

    // $FlowExpectedError
    markdownTable();
    // $FlowExpectedError
    markdownTable(null);
    // $FlowExpectedError
    markdownTable([[], null]);
    // $FlowExpectedError
    markdownTable([[], undefined]);
    // $FlowExpectedError
    markdownTable(null);
    // $FlowExpectedError
    markdownTable(undefined);
  });

  it("options", () => {
    markdownTable([], undefined);
    markdownTable([], {});
    markdownTable([], {
      delimiter: " | ",
      end: " |",
      start: "| ",
      stringLength: value => 0
    });

    // $FlowExpectedError
    markdownTable([], {
      foo: "bar"
    });

    // $FlowExpectedError
    markdownTable([], {
      delimiter: 1
    });
  });
});
