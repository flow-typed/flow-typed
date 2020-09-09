// based on https://github.com/darkskyapp/binary-search/blob/master/test.js
import { describe, it } from "flow-typed-test";
import bs from "binary-search";

describe("binarysearch", function() {
  var arr = [1, 2, 2, 2, 3, 5, 9],
      cmp = function(a, b) { return a - b; };

  it("should bail if not passed an array", function() {
    // $FlowExpectedError[incompatible-call]
    bs(undefined, 3, cmp);
  });

  it("should bail if not passed a comparator", function() {
    // $FlowExpectedError[incompatible-call]
    bs(arr, 3, undefined);
  });

  it("should return the index of an item in a sorted array", function() {
    bs(arr, 3, cmp);
  });

  it("should return the index of where the item would go plus one, negated, if the item is not found", function() {
    bs(arr, 4, cmp);
  });

  it("should return any valid index if an item exists multiple times in the array", function() {
    bs(arr, 2, cmp);
  });

  it("should work even on empty arrays", function() {
    bs([], 42, cmp);
  });

  it("should work even on arrays of doubles", function() {
    bs([0.0, 0.1, 0.2, 0.3, 0.4], 0.25, cmp);
  });

  it("should pass the index and array parameters to the comparator", function() {
    var indexes = [],
        indexCmp = function(a, b, i, array) {
          indexes.push(i);
          return cmp(a, b);
        };
    bs(arr, 3, indexCmp);
  });
});