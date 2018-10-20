// @flow
import { describe, it } from "flow-typed-test";
import { channel, buffers, END, type TEnd, type Channel, type Buffer } from "redux-saga";

describe("channel", () => {
  it("returned Channel must be read only object", () => {
    const ch = channel();

    // $ExpectError - read-only
    ch.close = "hi david";
    // $ExpectError - read-only
    ch.take = "hi david";
    // $ExpectError - read-only
    ch.put = "hi david";
    // $ExpectError - read-only
    ch.flush = "hi david";
  });

  it("returned Channel must be exact type", () => {
    const ch = channel();
    // $ExpectError- exact type
    ch.anyOtherProp = "anyValue";
  });

  it("must passes when first argument buffer or nothing", () => {
    const ch = channel();

    (ch: Channel<*>);

    const ch2 = channel(buffers.none());

    (ch2: Channel<*>);
  });

  it("must raises an error first argument isn't buffer or nothing", () => {
    // $ExpectError number isn't Buffer
    const ch = channel(1);

    // $ExpectError object isn't Buffer
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

    // $ExpectError
    const cbTake = (a: string | TEnd) => {};
    (ch.take(cbTake): void);

    // $ExpectError
    const cbFlush = (a: Array<boolean> | TEnd) => {};
    (ch.flush(cbFlush): void);

    // $ExpectError
    (ch.put("oppsss"): void);
  });

  it("must raises an error when call 'take' without args", () => {
    const ch = channel();

    // $ExpectError
    ch.take();
  });

  it("must raises an error when call 'flush' without args", () => {
    const ch = channel();

    // $ExpectError
    ch.flush();
  });

  it("must raises an error when call 'put' without args", () => {
    declare var buffer: Buffer<number>;
    const ch = channel(buffer);

    // $ExpectError
    ch.put();
  });
});
