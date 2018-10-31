// @flow
import { describe, it } from "flow-typed-test";

import createGetItemLayoutFn from "react-native-section-list-get-item-layout";

describe("default export", () => {
  it("must raise an error when call without some arguments", () => {
    // $ExpectError
    createGetItemLayoutFn();
  });
});
