// @flow
import { describe, it } from 'flow-typed-test';
import input from 'input';


describe('input', function () {
  it('should work for checkboxes and select', function () {
    input.select(["mon", "tue", "wed"])
    input.select("What day is it?", ["mon", "tue", "wed"])
    input.select("What day is it?", ["mon", "tue", "wed"], {
      checked: true
    })
    input.checkboxes(["mon", "tue", "wed"])
    input.checkboxes("What day is it?", ["mon", "tue", "wed"])
    input.checkboxes("What day is it?", ["mon", "tue", "wed"], {
      checked: true
    })
  })
  it('should break for numbers ', function () {
    // $ExpectError
    input.select(12, ["mon", "tue", "wed"])
    // $ExpectError
    input.checkboxes("What day is it?", 42, ["mon", "tue", "wed"])
  })
  it('should break if checked isn\'t a string/function ', function () {
    // $ExpectError
    input.checkboxes("What day is it?", ["mon", "tue", "wed"], {
      checked: {
        foo: "bar"
      }
    })
  })
  it("should work for text password & confirm", function () {
    input.text("What's your name?")
    input.password("Three digits on the back?")
    input.confirm("Are tomatoes vegetables?")
  })
})
