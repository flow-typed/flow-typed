// @flow
import { describe, it } from "flow-typed-test";
import { channel, buffers, END, type TEnd, type Channel, type Buffer } from "redux-saga";

describe("channel", () => {
  it("returned Channel must be read only object", () => {
    const ch = channel();

    // $FlowExpectedError[cannot-write] - read-only
    ch.close = "hi david";
    // $FlowExpectedError[cannot-write] - read-only
    ch.take = "hi david";
    // $FlowExpectedError[cannot-write] - read-only
    ch.put = "hi david";
    // $FlowExpectedError[cannot-write] - read-only
    ch.flush = "hi david";
  });

  it("returned Channel must be exact type", () => {
    const ch = channel();
    // $FlowExpectedError[prop-missing]- exact type
    ch.anyOtherProp = "anyValue";
  });

  it("must passes when first argument buffer or nothing", () => {
    const ch = channel();

    (ch: Channel<any>);

    const ch2 = channel(buffers.none());

    (ch2: Channel<any>);
  });

  it("must raises an error first argument isn't buffer or nothing", () => {
    // $FlowExpectedError[prop-missing] number isn't Buffer
    const ch = channel(1);

    // $FlowExpectedError[prop-missing] object isn't Buffer
    const ch2 = channel({});
  });

  it("must passes when used properly", () => {
    type T = number;

    declare var buffer: Buffer<T>;

    const ch = channel(buffer);

    (ch.close(): void);

    const cbTake = (a: T | TEnd) => {};
    (ch.take(cbTake): void);

    const cbFlush = (a: Array<T> | TEnd) => {};
    (ch.flush(cbFlush): void);

    (ch.put(123): void);
    (ch.put(END): void);
  });

  it("must raises an error when passed incompatible types", () => {
    type T = number;

    declare var buffer: Buffer<T>;

    const ch = channel(buffer);

    (ch.close(): void);

    const cbTake = (a: string | TEnd) => {};
    // $FlowExpectedError[incompatible-call]
    (ch.take(cbTake): void);

    const cbFlush = (a: Array<boolean> | TEnd) => {};
    // $FlowExpectedError[incompatible-call]
    (ch.flush(cbFlush): void);

    // $FlowExpectedError[incompatible-call]
    (ch.put("oppsss"): void);
  });

  it("must raises an error when call 'take' without args", () => {
    const ch = channel();

    // $FlowExpectedError[incompatible-call]
    ch.take();
  });

  it("must raises an error when call 'flush' without args", () => {
    const ch = channel();

    // $FlowExpectedError[incompatible-call]
    ch.flush();
  });

  it("must raises an error when call 'put' without args", () => {
    declare var buffer: Buffer<number>;
    const ch = channel(buffer);

    // $FlowExpectedError[incompatible-call]
    ch.put();
  });
});
