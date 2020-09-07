// @flow

import React from "react";
import ReactCreditCard from "react-credit-cards";
import type { CallbackArgument } from "react-credit-cards";
import { it, describe } from "flow-typed-test";

describe('react-credit-cards', () => {
  const callback = (type: CallbackArgument, isValid: boolean) => {};

  it('should accept all parameters', () => {
    <ReactCreditCard
      preview
      acceptedCards={[]}
      cvc="123"
      focused="number"
      expiry="04/18"
      issuer="visa"
      locale={{ valid: "valid through" }}
      name="Name Surname"
      number="4111111111111111"
      placeholders={{name: "YOUR NAME"}}
      callback={callback}
    />
  });

  it('should accept alternative parameters', () => {
    <ReactCreditCard
      preview
      acceptedCards={[]}
      cvc={123}
      focused="number"
      expiry="012017"
      issuer="visa"
      locale={{ valid: "valid through" }}
      name="Name Surname"
      number={4111111111111111}
      placeholders={{name: "YOUR NAME"}}
      callback={callback}
    />
  });

  it("should not fail without optional parameters", () => {
    <ReactCreditCard
      cvc="123"
      expiry="04/18"
      name="Name Surname"
      number="4111111111111111"
    />
  });

  it("should fail without required parameters", () => {
    // $FlowExpectedError
    <ReactCreditCard />;
  });
});
