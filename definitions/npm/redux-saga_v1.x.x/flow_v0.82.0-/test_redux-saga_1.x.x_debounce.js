// @flow
import { describe, it } from "flow-typed-test";
import { type Saga, type Channel } from "redux-saga";
import { debounce } from "redux-saga/effects";

describe("debounce effect", () => {
  describe("structure", () => {
    const c = debounce(0, "ACTION", () => {});

    it('type must be equal "FORK"', () => {
      (c.type: "FORK");
    });

    it("returned object must be read only", () => {
      // $ExpectError: read-only  property
      c.type = "anyType";
      // $ExpectError: read-only  property
      c.payload = {};
    });

    it("returned object must be exact", () => {
      // $ExpectError: exact type
      c.abc = 69;
    });
  });

  function* s0(): Saga<number> {
    return 69;
  }

  function* s1(a: number): Saga<number> {
    return 69;
  }

  function* s2(a: number, b: string): Saga<number> {
    return 69;
  }

  function* s3(a: number, b: string, c: number): Saga<number> {
    return 69;
  }

  function* s4(a: number, b: string, c: number, d: string): Saga<number> {
    return 69;
  }

  function* s5(a: number, b: string, c: number, d: string, e: number): Saga<number> {
    return 69;
  }

  function* s6(a: number, b: string, c: number, d: string, e: number, f: string): Saga<number> {
    return 69;
  }

  function* s7(
    a: number,
    b: string,
    c: number,
    d: string,
    e: number,
    f: string,
    g: number
  ): Saga<number> {
    return 69;
  }

  function* s8(
    a: number,
    b: string,
    c: number,
    d: string,
    e: number,
    f: string,
    g: number,
    h: string
  ): Saga<number> {
    return 69;
  }

  describe("debounce(ms, pattern, saga, ...args)", () => {
    it("passes when used properly", () => {
      const fork0 = debounce(69, "TEST", s0);
      const fork1 = debounce(69, "TEST", s1, 1);
      const fork2 = debounce(69, "TEST", s2, 1, "2");
      const fork3 = debounce(69, "TEST", s3, 1, "2", 3);
      const fork4 = debounce(69, "TEST", s4, 1, "2", 3, "4");
      const fork5 = debounce(69, "TEST", s5, 1, "2", 3, "4", 5);
      const fork6 = debounce(69, "TEST", s6, 1, "2", 3, "4", 5, "6");
      const fork7 = debounce(69, "TEST", s7, 1, "2", 3, "4", 5, "6", 7);
      const fork8 = debounce(69, "TEST", s8, 1, "2", 3, "4", 5, "6", 7, "8");

      (fork0.type: "FORK");

      (fork0.payload.args: [number, string, typeof s0]);
      (fork1.payload.args: [number, string, typeof s1, number]);
      (fork2.payload.args: [number, string, typeof s2, number, string]);
      (fork3.payload.args: [number, string, typeof s3, number, string, number]);
      (fork4.payload.args: [number, string, typeof s4, number, string, number, string]);
      (fork5.payload.args: [number, string, typeof s5, number, string, number, string, number]);
      (fork6.payload.args: [
        number,
        string,
        typeof s6,
        number,
        string,
        number,
        string,
        number,
        string
      ]);
      (fork7.payload.args: [
        number,
        string,
        typeof s7,
        number,
        string,
        number,
        string,
        number,
        string,
        number
      ]);
      (fork8.payload.args: [
        number,
        string,
        typeof s8,
        number,
        string,
        number,
        string,
        number,
        string,
        number,
        string
      ]);
    });
  });

  describe("debounce(ms, channel, saga, ...args)", () => {
    declare var ch: Channel<any>;

    const fork0 = debounce(69, ch, s0);
    const fork1 = debounce(69, ch, s1, 1);
    const fork2 = debounce(69, ch, s2, 1, "2");
    const fork3 = debounce(69, ch, s3, 1, "2", 3);
    const fork4 = debounce(69, ch, s4, 1, "2", 3, "4");
    const fork5 = debounce(69, ch, s5, 1, "2", 3, "4", 5);
    const fork6 = debounce(69, ch, s6, 1, "2", 3, "4", 5, "6");
    const fork7 = debounce(69, ch, s7, 1, "2", 3, "4", 5, "6", 7);
    const fork8 = debounce(69, ch, s8, 1, "2", 3, "4", 5, "6", 7, "8");

    (fork0.payload.args: [number, typeof ch, typeof s0]);
    (fork1.payload.args: [number, typeof ch, typeof s1, number]);
    (fork2.payload.args: [number, typeof ch, typeof s2, number, string]);
    (fork3.payload.args: [number, typeof ch, typeof s3, number, string, number]);
    (fork4.payload.args: [number, typeof ch, typeof s4, number, string, number, string]);
    (fork5.payload.args: [number, typeof ch, typeof s5, number, string, number, string, number]);
    (fork6.payload.args: [
      number,
      typeof ch,
      typeof s6,
      number,
      string,
      number,
      string,
      number,
      string
    ]);
    (fork7.payload.args: [
      number,
      typeof ch,
      typeof s7,
      number,
      string,
      number,
      string,
      number,
      string,
      number
    ]);
    (fork8.payload.args: [
      number,
      typeof ch,
      typeof s8,
      number,
      string,
      number,
      string,
      number,
      string,
      number,
      string
    ]);
  });
});
