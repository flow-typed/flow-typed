// @flow

import { describe, it } from "flow-typed-test";
import status from "statuses";

describe("statuses ", () => {
  it("works as a function", () => {
    status(123);
    status("Processing");
    status("123");
    // $ExpectError
    status(null);
    // $ExpectError
    status({});
    // $ExpectError
    status(() => {});
  });

  it("contains redirect, empty, and retry objects", () => {
    status.empty[404];
    status.retry[404];
    status.redirect[404];
    // $ExpectError
    status.empty["zxc"];
    // $ExpectError
    status.retry["qwe"];
    // $ExpectError
    status.redirect["asd"];
  });

  it("provides maps with codes and messages", () => {
    status[123];
    status["Not Found"];
    // $ExpectError
    status[{}];
  });
});
