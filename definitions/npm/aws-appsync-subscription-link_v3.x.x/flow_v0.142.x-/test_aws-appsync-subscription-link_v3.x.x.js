// @flow

import { describe, it } from 'flow-typed-test';
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import { createHttpLink } from '@apollo/client';

describe("createSubscriptionHandshakeLink", () => {
  const httpLink = createHttpLink({ uri: "http://example.com", headers: { Authorization: "Bearer xxx" } });
  const auth = {
    type: "AMAZON_COGNITO_USER_POOLS",
    jwtToken: "yyy",
  };
  const url = "http://example.com";
  const region = "us-east-1";

  it("constructs given valid options", () => {
    createSubscriptionHandshakeLink({ url, region, auth, keepAliveTimeoutMs: 1234 }, httpLink);
    createSubscriptionHandshakeLink({ url, region, auth }, httpLink);
    createSubscriptionHandshakeLink({ url, region, auth });
  });

  it("requires url option", () => {
    // $FlowExpectedError[incompatible-call]
    createSubscriptionHandshakeLink({ region, auth });
  });

  it("requires region option", () => {
    // $FlowExpectedError[incompatible-call]
    createSubscriptionHandshakeLink({ url, auth });
  });

  it("requires auth option", () => {
    // $FlowExpectedError[incompatible-call]
    createSubscriptionHandshakeLink({ url, region });
  });

  it("checks resultsFetcherLink type", () => {
    // $FlowExpectedError[incompatible-call]
    createSubscriptionHandshakeLink({ url, region, auth }, { wrong: "type" });
  });

  it("checks auth type", () => {
    // $FlowExpectedError[incompatible-call]
    createSubscriptionHandshakeLink({ url, region, auth: { wrong: "type" } });
  });
});
