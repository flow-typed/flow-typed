// @flow
import { describe, it } from "flow-typed-test";
import { eventChannel, buffers, type TEnd, type Subscribe } from "redux-saga";

describe("eventChannel", () => {
  const SimpleUnSubscribeFn = () => {};
  const simpleSubscribeFn = () => {
    return SimpleUnSubscribeFn;
  };

  it("returned Channel must be read only object", () => {
    const ch = eventChannel(simpleSubscribeFn);

    // $ExpectError - read-only
    ch.close = "hi belarus";
    // $ExpectError - read-only
    ch.take = "hi belarus";
    // $ExpectError - read-only
    ch.flush = "hi belarus";
  });

  it("returned Channel must be exact type", () => {
    const ch = eventChannel(simpleSubscribeFn);
    // $ExpectError- exact type
    ch.anyOtherProp = "anyValue";
  });

  it("must passes when used properly", () => {
    type BASE_TYPE = {| +isActive: boolean |};

    declare var subscribeFn: Subscribe<BASE_TYPE>;

    const ch = eventChannel(subscribeFn, buffers.none());

    (ch.close(): void);

    const cbTake = (a: BASE_TYPE | TEnd) => {};
    (ch.take(cbTake): void);

    const cbFlush = (a: Array<BASE_TYPE> | TEnd) => {};
    (ch.flush(cbFlush): void);
  });

  it("must raises an error when passed incompatible types", () => {
    type T = string;

    declare var subscribeFn: Subscribe<T>;

    const ch = eventChannel(subscribeFn, buffers.none());

    // $ExpectError
    const cbTake = (a: number | TEnd) => {};
    (ch.take(cbTake): void);

    // $ExpectError
    const cbFlush = (a: Array<boolean> | TEnd) => {};
    (ch.flush(cbFlush): void);
  });

  it("must raises an error when call 'take' without args", () => {
    declare var subscribeFn: Subscribe<string>;

    const ch = eventChannel(subscribeFn, buffers.none());

    // $ExpectError
    ch.take();
  });

  it("must raises an error when call 'flush' without args", () => {
    declare var subscribeFn: Subscribe<string>;

    const ch = eventChannel(subscribeFn, buffers.none());

    // $ExpectError
    ch.flush();
  });
});
