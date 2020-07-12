// @flow

import React from "react";
import Truncate from "react-truncate";
import { it, describe } from "flow-typed-test";

describe('react-truncate', () => {
  const handleTruncate = (isTruncated: boolean) => {};

  it('should accept all parameters', () => {
    <Truncate
      lines={5}
      ellipsis
      trimWhitespace
      onTruncate={handleTruncate}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Truncate>;
  });

  it("should not fail without optional parameters", () => {
    <Truncate>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Truncate>;
  });

  it("should fail without required parameters", () => {
    // $FlowExpectedError
    <Truncate />;
  });
});
