// @flow
import { describe, it } from "flow-typed-test";

import createGetItemLayoutFn from "react-native-section-list-get-item-layout";

describe("default export", () => {
  function getItemHeight(
    rowData: any,
    sectionIndex: number,
    rowIndex: number
  ): number {
    return 1;
  }

  describe("getItemLayout(data,index)", () => {
    const getItemLayout = createGetItemLayoutFn({ getItemHeight });

    it("passes when used properly", () => {
      (getItemLayout([{ title: "section1", data: [1, 2, 3] }], 123): {
        length: number,
        offset: number,
        index: number
      });
    });

    it("must raise an error when call without arguments", () => {
      // $ExpectError - required argument
      getItemLayout();
    });
  });

  describe("Parameters", () => {
    function getSeparatorHeight(sectIdx: number, rowIndex: number): number {
      return 1;
    }
    function getSectionHeaderHeight(sectIdx: number): number {
      return 1;
    }
    function getSectionFooterHeight(sectIdx: number): number {
      return 1;
    }

    it('passes when using only "getItemHeight" function', () => {
      (createGetItemLayoutFn({ getItemHeight }): Function);
    });

    it("passes when using all supported getters", () => {
      (createGetItemLayoutFn({
        getItemHeight,
        getSeparatorHeight,
        getSectionHeaderHeight,
        getSectionFooterHeight,
        listHeaderHeight: 69
      }): Function);
    });

    describe("listHeaderHeight", () => {
      it('passes when "listHeaderHeight" is number or function', () => {
        (createGetItemLayoutFn({
          getItemHeight,
          listHeaderHeight: 69
        }): Function);

        (createGetItemLayoutFn({
          getItemHeight,
          listHeaderHeight: () => 69
        }): Function);
      });
    });

    it("must raise an error when call without arguments", () => {
      // $ExpectError - required argument
      createGetItemLayoutFn();
    });

    it("must raise an error when call with unsupported properties", () => {
      // $ExpectError -  `someProp` is missing in `Parameters`
      createGetItemLayoutFn({ getItemHeight, someProp: "any" });
    });

    it("must raise an error when 'getItemHeight' function return not number ", () => {
      // $ExpectError -  `getItemHeight` must return number
      createGetItemLayoutFn({ getItemHeight: () => "" });
    });

    it("must raise an error when 'getSeparatorHeight' function return not number ", () => {
      // $ExpectError -  `getSeparatorHeight` must return number
      createGetItemLayoutFn({ getSeparatorHeight: () => "" });
    });

    it("must raise an error when 'getSectionHeaderHeight' function return not number ", () => {
      // $ExpectError -  `getSectionHeaderHeight` must return number
      createGetItemLayoutFn({ getSectionHeaderHeight: () => "" });
    });

    it("must raise an error when 'getSectionFooterHeight' function return not number ", () => {
      // $ExpectError -  `getSectionFooterHeight` must return number
      createGetItemLayoutFn({ getSectionFooterHeight: () => "" });
    });

    it("must raise an error when 'listHeaderHeight' function return not number ", () => {
      // $ExpectError -  `listHeaderHeight` must return number
      createGetItemLayoutFn({ listHeaderHeight: () => "" });

      // $ExpectError -  `listHeaderHeight` must return number
      createGetItemLayoutFn({ listHeaderHeight: "" });
    });
  });
});
