// @flow

import React from "react";
import CopyToClipboard, {CopyToClipboard as NamedCopyToClipboard} from "react-copy-to-clipboard";
import { it, describe } from "flow-typed-test";

describe('react-copy-to-clipboard', () => {
  describe('default', () => {
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
      // $FlowExpectedError
      <CopyToClipboard />;
    });
  });

  describe('named export', () => {
    it('should accept all parameters', () => {
      <NamedCopyToClipboard
        text="Lorem ipsum dolor sit amet"
        options={{ debug: true, message: 'Copy to clipboard: #{key}' }}
        onCopy={(text: string, result: boolean) => {}}
      >
        Copy
      </NamedCopyToClipboard>
    });
  
    it("should not fail without optional parameters", () => {
      <NamedCopyToClipboard text="Lorem ipsum dolor sit amet">
        Copy
      </NamedCopyToClipboard>
    });
  
    it("should fail without required parameters", () => {
      // $FlowExpectedError
      <NamedCopyToClipboard />;
    });
  });
});
