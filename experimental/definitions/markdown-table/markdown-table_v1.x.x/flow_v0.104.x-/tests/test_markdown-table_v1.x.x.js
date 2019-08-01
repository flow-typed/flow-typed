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

    // $ExpectError
    markdownTable();
    // $ExpectError
    markdownTable(null);
    // $ExpectError
    markdownTable([[], null]);
    // $ExpectError
    markdownTable([[], undefined]);
    // $ExpectError
    markdownTable(null);
    // $ExpectError
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

    // $ExpectError
    markdownTable([], {
      foo: "bar"
    });

    // $ExpectError
    markdownTable([], {
      delimiter: 1
    });
  });
});
