// @flow

import { describe, it } from "flow-typed-test";
import status from "statuses";

describe("statuses ", () => {
  it("works as a function", () => {
    status(123);
    status("Processing");
    status("123");
    // $FlowExpectedError
    status(null);
    // $FlowExpectedError
    status({});
    // $FlowExpectedError
    status(() => {});
  });

  it("contains redirect, empty, and retry objects", () => {
    status.empty[404];
    status.retry[404];
    status.redirect[404];
    // $FlowExpectedError
    status.empty["zxc"];
    // $FlowExpectedError
    status.retry["qwe"];
    // $FlowExpectedError
    status.redirect["asd"];
  });

  it("provides maps with codes and messages", () => {
    status[123];
    status["Not Found"];
    // $FlowExpectedError
    status[{}];
  });
});
