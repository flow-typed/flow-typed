// @flow
import { it, describe } from "flow-typed-test";
import {
  capitalize,
  contains,
  createChainedFunction,
  requirePropFactory,
  ownerWindow,
  isMuiElement,
  setRef
} from "@material-ui/core/utils";

describe("ownerWindow", () => {
  it("should passed when use properly", () => {
    declare var div: Node;

    ownerWindow(div);
    ownerWindow(div, {});
  });

  it("should raises an error when first argument is not Node", () => {
    // $ExpectError
    ownerWindow("not Node");
  });

  it("should raises an error when do not pass required args", () => {
    // $ExpectError - first argument is required
    ownerWindow();
  });
});

describe("isMuiElement", () => {
  const likeElement = {
    type: {
      muiName: "some name"
    }
  };

  it("should passed when use properly", () => {
    const muiNames = ["string"];

    (isMuiElement(likeElement, muiNames): boolean);
  });

  it("should raises an error when second argument is not array of strings", () => {
    // $ExpectError
    isMuiElement(likeElement, [1]);
  });

  it("should raises an error when do not pass required args", () => {
    // $ExpectError - first argument is required
    isMuiElement();

    // $ExpectError - second argument is required
    isMuiElement(likeElement);
  });
});

describe("contains", () => {
  const obj = { a: 1, b: "str" };
  const pred1 = { a: 1 };
  const pred2 = { c: true };

  it("should passed when use properly", () => {
    (contains(obj, pred1): boolean);
    (contains(obj, pred2): boolean);
  });

  it("should raises an error when use not objects", () => {
    // $ExpectError - first argument must be Object
    contains("not object", pred1);
    // $ExpectError - second argument must be Object
    contains(obj, true);
  });

  it("should raises an error when not pass all required args", () => {
    // $ExpectError - first argument is required
    contains();
    // $ExpectError - second argument is required
    contains(obj);
  });

  it("should raises an error when return not boolean", () => {
    // $ExpectError - function return boolean only
    (contains(obj, pred2): number);
  });
});

describe("capitalize", () => {
  it("should passed when use properly", () => {
    const str = "string";

    (capitalize(str): string);
  });

  it("should raises an error", () => {
    const num = 1;

    // $ExpectError - first argument must be a string
    capitalize(num);

    // $ExpectError - first argument is required
    capitalize();

    // $ExpectError - function always return string
    (capitalize("str"): number);
  });
});
