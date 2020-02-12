// @flow
import { describe, it } from "flow-typed-test";
import { pipe } from "ramda";

// f - function
// a - argument
// unf - unary function
function f1(a1: number): number {
  return 69;
}

function f2(a1: number, a2: string): number {
  return 69;
}

function f3(a1: number, a2: string, a3: boolean): number {
  return 69;
}

function f4(a1: number, a2: string, a3: boolean, a4: number): number {
  return 69;
}

function f5(a1: number, a2: string, a3: boolean, a4: number, a5: string): number {
  return 69;
}

function unf1(a1: number): string {
  return "69";
}

function unf2(a1: string): boolean {
  return false;
}

function unf3(a1: boolean): number {
  return 69;
}

function unf4(a1: number): string {
  return "69";
}

function unf5(a1: string): boolean {
  return true;
}

describe("pipe(...fn)", () => {
  describe('call "pipe" with unary function', () => {
    it("rises an error when function chain broken", () => {
      // $ExpectError - unf1 return string but unf3 first argument boolean
      pipe(f1, unf1, unf3, unf4, unf5)(1);
    });

    it("passes when used properly", () => {
      (pipe(f1, unf1, unf2, unf3, unf4, unf5)(1): boolean);
      (pipe(f1, unf1, unf2, unf3, unf4)(1): string);
      (pipe(f1, unf1, unf2, unf3)(1): number);
      (pipe(f1, unf1, unf2)(1): boolean);
      (pipe(f1, unf1)(1): string);
      (pipe(f1)(1): number);
    });

    it("raises an error when passed more arguments than it need", () => {
      // $ExpectError - too many arguments
      pipe(f1)(1, "1", true);
    });

    it("raises an error when passed too few arguments", () => {
      // $ExpectError - too few arguments
      pipe(f1)();
    });

    it("raises an error when passed an invalid argument", () => {
      //$ExpectError - boolean  is incompatible with number
      pipe(f1, unf1)(true);
    });

    it("raises an error when trying to recognize an unexpected type", () => {
      //$ExpectError - boolean  is incompatible with string
      (pipe(f1, unf1)(1): boolean);
    });
  });

  describe('call "pipe" with double function', () => {
    it("rises an error when function chain broken", () => {
      // $ExpectError - unf1 return string but unf3 first argument boolean
      pipe(f2, unf1, unf3, unf4, unf5)(1, "2");
    });

    it("passes when used properly", () => {
      (pipe(f2, unf1, unf2, unf3, unf4, unf5)(1, "2"): boolean);
      (pipe(f2, unf1, unf2, unf3, unf4)(1, "2"): string);
      (pipe(f2, unf1, unf2, unf3)(1, "2"): number);
      (pipe(f2, unf1, unf2)(1, "2"): boolean);
      (pipe(f2, unf1)(1, "2"): string);
    });

    it("raises an error when passed more arguments than it need", () => {
      // $ExpectError - too many arguments
      pipe(f2)(1, "2", true, 4, "5");
    });

    it("raises an error when passed too few arguments", () => {
      // $ExpectError - too few arguments
      pipe(f2)(1);
    });

    it("raises an error when passed an invalid argument", () => {
      //$ExpectError - boolean  is incompatible with string
      pipe(f2, unf1)(1, true);
    });

    it("raises an error when trying to recognize an unexpected type", () => {
      //$ExpectError - boolean  is incompatible with string
      (pipe(f2, unf1)(1, "2"): boolean);
    });
  });

  describe('call "pipe" with triple function', () => {
    it("rises an error when function chain broken", () => {
      // $ExpectError - unf1 return string but unf3 first argument boolean
      pipe(f3, unf1, unf3, unf4, unf5)(1, "2", true);
    });

    it("passes when used properly", () => {
      (pipe(f3, unf1, unf2, unf3, unf4, unf5)(1, "2", true): boolean);
      (pipe(f3, unf1, unf2, unf3, unf4)(1, "2", true): string);
      (pipe(f3, unf1, unf2, unf3)(1, "2", true): number);
      (pipe(f3, unf1, unf2)(1, "2", true): boolean);
      (pipe(f3, unf1)(1, "2", true): string);
    });

    it("raises an error when passed more arguments than it need", () => {
      // $ExpectError - too many arguments
      pipe(f3)(1, "2", true, 4, "5");
    });

    it("raises an error when passed too few arguments", () => {
      // $ExpectError - too few arguments
      pipe(f3)(1, "2");
    });

    it("raises an error when passed an invalid argument", () => {
      //$ExpectError - number is incompatible with boolean
      pipe(f3, unf1)(1, "2", 999);
    });

    it("raises an error when trying to recognize an unexpected type", () => {
      //$ExpectError - boolean  is incompatible with string
      (pipe(f3, unf1)(1, "2", true): boolean);
    });
  });

  describe('call "pipe" with function that takes 4 arguments', () => {
    it("rises an error when function chain broken", () => {
      // $ExpectError - unf1 return string but unf3 first argument boolean
      pipe(f4, unf1, unf3, unf4, unf5)(1, "2", true, 4);
    });

    it("passes when used properly", () => {
      (pipe(f4, unf1, unf2, unf3, unf4, unf5)(1, "2", true, 4): boolean);
      (pipe(f4, unf1, unf2, unf3, unf4)(1, "2", true, 4): string);
      (pipe(f4, unf1, unf2, unf3)(1, "2", true, 4): number);
      (pipe(f4, unf1, unf2)(1, "2", true, 4): boolean);
      (pipe(f4, unf1)(1, "2", true, 4): string);
    });

    it("raises an error when passed more arguments than it need", () => {
      // $ExpectError - too many arguments
      pipe(f4)(1, "2", true, 4, "5", 6, false);
    });

    it("raises an error when passed too few arguments", () => {
      // $ExpectError - too few arguments
      pipe(f4)(1, "2", true);
    });

    it("raises an error when passed an invalid argument", () => {
      //$ExpectError - string is incompatible with number
      pipe(f4, unf1)(1, "2", true, "new number");
    });

    it("raises an error when trying to recognize an unexpected type", () => {
      //$ExpectError - boolean  is incompatible with string
      (pipe(f4, unf1)(1, "2", true, 4): boolean);
    });
  });

  describe('call "pipe" with function that takes 5 arguments', () => {
    it("rises an error when function chain broken", () => {
      // $ExpectError - unf1 return string but unf3 first argument boolean
      pipe(f5, unf1, unf3, unf4, unf5)(1, "2", true, 4, "5");
    });

    it("passes when used properly", () => {
      (pipe(f5, unf1, unf2, unf3, unf4, unf5)(1, "2", true, 4, "5"): boolean);
      (pipe(f5, unf1, unf2, unf3, unf4)(1, "2", true, 4, "5"): string);
      (pipe(f5, unf1, unf2, unf3)(1, "2", true, 4, "5"): number);
      (pipe(f5, unf1, unf2)(1, "2", true, 4, "5"): boolean);
      (pipe(f5, unf1)(1, "2", true, 4, "5"): string);
    });

    it("raises an error when passed more arguments than it need", () => {
      // $ExpectError - too many arguments
      pipe(f5)(1, "2", true, 4, "5", 6, 7, 8);
    });

    it("raises an error when passed too few arguments", () => {
      // $ExpectError - too few arguments
      pipe(f5)(1, "2", true, 4);
    });

    it("raises an error when passed an invalid argument", () => {
      //$ExpectError - boolean is incompatible with string
      pipe(f5, unf1)(1, "2", true, 4, false);
    });

    it("raises an error when trying to recognize an unexpected type", () => {
      //$ExpectError - boolean  is incompatible with string
      (pipe(f5, unf1)(1, "2", true, 4, "5"): boolean);
    });
  });
});
