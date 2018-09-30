// @flow
import { describe, it } from "flow-typed-test";
import { multicastChannel, stdChannel, END, type TEnd } from "redux-saga";

const simpleMatcher = arg => !!arg;

describe("multicastChannel", () => {
  it("must create MulticastChannel", () => {
    const channel = multicastChannel();

    (channel.take((msg: string | TEnd) => {}): void);
    (channel.take((msg: string | TEnd) => {}, simpleMatcher): void);
    (channel.put("message"): void);
    (channel.close(): void);
  });

  it("created channel must be read only", () => {
    const channel = multicastChannel();

    // $ExpectError - take is read-only
    channel.take = 69;
    // $ExpectError - put is read-only
    channel.put = 69;
    // $ExpectError - close is read-only
    channel.close = 69;
  });

  it("created channel must be exact", () => {
    const channel = multicastChannel();

    // $ExpectError - exact type
    channel.abc = 69;
  });
});

describe("stdChannel", () => {
  /* all the tests that below is copy-paste */
  it("must create MulticastChannel", () => {
    const channel = stdChannel();

    (channel.take((msg: string | TEnd) => {}): void);
    (channel.take((msg: string | TEnd) => {}, simpleMatcher): void);
    (channel.put("message"): void);
    (channel.close(): void);
  });

  it("created channel must be read only", () => {
    const channel = stdChannel();

    // $ExpectError - take is read-only
    channel.take = 69;
    // $ExpectError - put is read-only
    channel.put = 69;
    // $ExpectError - close is read-only
    channel.close = 69;
  });

  it("created channel must be exact", () => {
    const channel = stdChannel();

    // $ExpectError - exact type
    channel.abc = 69;
  });
});
