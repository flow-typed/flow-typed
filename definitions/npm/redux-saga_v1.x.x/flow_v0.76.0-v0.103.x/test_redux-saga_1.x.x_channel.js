// @flow
import { describe, it } from "flow-typed-test";
import { channel, buffers, END, type TEnd, type Channel, type Buffer } from "redux-saga";

describe("channel", () => {
  it("returned Channel must be read only object", () => {
    const ch = channel();

    // $FlowExpectedError - read-only
    ch.close = "hi david";
    // $FlowExpectedError - read-only
    ch.take = "hi david";
    // $FlowExpectedError - read-only
    ch.put = "hi david";
    // $FlowExpectedError - read-only
    ch.flush = "hi david";
  });

  it("returned Channel must be exact type", () => {
    const ch = channel();
    // $FlowExpectedError- exact type
    ch.anyOtherProp = "anyValue";
  });

  it("must passes when first argument buffer or nothing", () => {
    const ch = channel();

    (ch: Channel<*>);

    const ch2 = channel(buffers.none());

    (ch2: Channel<*>);
  });

  it("must raises an error first argument isn't buffer or nothing", () => {
    // $FlowExpectedError number isn't Buffer
    const ch = channel(1);

    // $FlowExpectedError object isn't Buffer
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

    // $FlowExpectedError
    const cbTake = (a: string | TEnd) => {};
    (ch.take(cbTake): void);

    // $FlowExpectedError
    const cbFlush = (a: Array<boolean> | TEnd) => {};
    (ch.flush(cbFlush): void);

    // $FlowExpectedError
    (ch.put("oppsss"): void);
  });

  it("must raises an error when call 'take' without args", () => {
    const ch = channel();

    // $FlowExpectedError
    ch.take();
  });

  it("must raises an error when call 'flush' without args", () => {
    const ch = channel();

    // $FlowExpectedError
    ch.flush();
  });

  it("must raises an error when call 'put' without args", () => {
    declare var buffer: Buffer<number>;
    const ch = channel(buffer);

    // $FlowExpectedError
    ch.put();
  });
});
