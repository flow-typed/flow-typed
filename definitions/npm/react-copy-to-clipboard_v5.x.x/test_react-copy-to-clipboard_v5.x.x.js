// @flow

import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { it, describe } from "flow-typed-test";

describe('react-copy-to-clipboard', () => {
  it('should accept all parameters', () => {
    <CopyToClipboard
      text="Lorem ipsum dolor sit amet"
      options={{ debug: true, message: 'Copy to clipboard: #{key}' }}
      onCopy={(text: string, result: boolean) => {}}
    >
      Copy
    </CopyToClipboard>
  });

  it("should not fail without optional parameters", () => {
    <CopyToClipboard text="Lorem ipsum dolor sit amet">
      Copy
    </CopyToClipboard>
  });

  it("should fail without required parameters", () => {
    // $ExpectError
    <CopyToClipboard />;
  });
});
