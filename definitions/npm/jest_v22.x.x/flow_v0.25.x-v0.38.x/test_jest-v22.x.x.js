/* @flow */
/* eslint-disable */

jest.autoMockOff();
jest.clearAllMocks();
jest.resetAllMocks();
jest.restoreAllMocks();

// $ExpectError property `atoMockOff` not found in object type
jest.atoMockOff();

const mockFn = jest.fn();
mockFn.mock.calls.map(String).map(a => a + a);

expect(1).toEqual(1);
expect(true).toBe(true);
expect(5).toBeGreaterThan(3);
expect(5).toBeLessThan(8);
expect("jester").toContain("jest");
expect({ foo: "bar" }).toHaveProperty("foo");
expect({ foo: "bar" }).toHaveProperty("foo", "bar");
expect("foo").toMatchSnapshot("snapshot name");
expect({ foo: "bar" }).toMatchObject({ baz: "qux" });
expect("foobar").toMatch(/foo/);
expect("foobar").toMatch("foo");

mockFn("a");
expect("someVal").toBeCalled();
expect("someVal").toBeCalledWith("a");

// $ExpectError property `toHaveBeeenCalledWith` not found in object type
expect("someVal").toHaveBeeenCalledWith("a");

// $ExpectError property `fn` not found in Array
mockFn.mock.calls.fn();

class AClass {}
function aFunction() {}

describe("name", () => {});
describe(AClass, () => {});
describe(aFunction, () => {});

describe.only("name", () => {});
describe.only(AClass, () => {});
describe.only(aFunction, () => {});

describe.skip("name", () => {});
describe.skip(AClass, () => {});
describe.skip(aFunction, () => {});

test("test", () => expect("foo").toMatchSnapshot());
test(AClass, () => expect("foo").toMatchSnapshot());
test(aFunction, () => expect("foo").toMatchSnapshot());
test.only("test", () => expect("foo").toMatchSnapshot());
test.skip("test", () => expect("foo").toMatchSnapshot());

// $ExpectError property `fonly` not found in object type
test.fonly("test", () => expect("foo").toMatchSnapshot());

xtest("test", () => {});

// $ExpectError property `bar` not found in object type
expect.bar();

expect.extend({
  blah(actual, expected) {
    return {
      message: () => "blah fail",
      pass: false
    };
  }
});

expect.extend({
  foo(actual, expected) {
    // $ExpectError property `pass` not found in object literal
    return {};
  }
});

const err = new Error("err");
expect(() => {
  throw err;
}).toThrowError("err");

expect(() => {
  throw err;
}).toThrowError(/err/);

expect(() => {
  throw err;
}).toThrowError(err);

expect(() => {}).toThrow("err");
expect(() => {}).toThrow(/err/);
expect(() => {}).toThrow(err);

// Test method chaining fixes
jest.doMock("testModule1", () => {}).doMock("testModule2", () => {});

jest.dontMock("testModule1").dontMock("testModule2");

jest.resetModules().resetModules();

jest.spyOn({}, "foo");

jest.setTimeout(1000);

expect.addSnapshotSerializer(JSON.stringify);
expect.assertions(1);
expect.hasAssertions();

expect.anything();
expect.any(Error);
expect.objectContaining({
  foo: "bar"
});
expect.arrayContaining(["red", "blue"]);
expect.stringMatching("*this part*");

test.concurrent("test", () => {});

expect([1, 2, 3]).toHaveLength(3);

(async () => {
  await expect(Promise.reject("ok")).rejects.toBe("ok");
  await expect(Promise.resolve("ok")).resolves.toBe("ok");
})();

/**
 *  Plugin: jest-enzyme
 */

// $ExpectError
import { shallow } from "enzyme";
const Dummy = () => <div />;
const wrapper = shallow(<Dummy />);

expect(wrapper).toBeChecked();

expect(wrapper).toBeDisabled();

expect(wrapper).toBeEmpty();

expect(wrapper).toBePresent();

expect(wrapper).toContainReact(<Dummy />);
// $ExpectError
expect(wrapper).toContainReact();
// $ExpectError
expect(wrapper).toContainReact("string");

expect(wrapper).toHaveClassName("class");
// $ExpectError
expect(wrapper).toHaveClassName();
// $ExpectError
expect(wrapper).toHaveClassName(true);

expect(wrapper).toHaveHTML("<span>test</span>");
// $ExpectError
expect(wrapper).toHaveHTML();
// $ExpectError
expect(wrapper).toHaveHTML(true);

expect(wrapper).toHaveProp("test");
expect(wrapper).toHaveProp("test", "test");
// $ExpectError
expect(wrapper).toHaveProp();
// $ExpectError
expect(wrapper).toHaveProp(true);

expect(wrapper).toHaveRef("test");
// $ExpectError
expect(wrapper).toHaveRef();
// $ExpectError
expect(wrapper).toHaveRef(true);

expect(wrapper).toHaveState("test");
expect(wrapper).toHaveState("test", "test");
// $ExpectError
expect(wrapper).toHaveState();
// $ExpectError
expect(wrapper).toHaveState(true);

expect(wrapper).toHaveStyle("color");
expect(wrapper).toHaveStyle("color", "#ccc");
// $ExpectError
expect(wrapper).toHaveStyle();
// $ExpectError
expect(wrapper).toHaveStyle(true);

expect(wrapper).toHaveTagName("marquee");
// $ExpectError
expect(wrapper).toHaveTagName();
// $ExpectError
expect(wrapper).toHaveTagName(true);

expect(wrapper).toHaveText("test");
// $ExpectError
expect(wrapper).toHaveText();
// $ExpectError
expect(wrapper).toHaveText(true);

expect(wrapper).toIncludeText("test");
// $ExpectError
expect(wrapper).toIncludeText();
// $ExpectError
expect(wrapper).toIncludeText(true);

expect(wrapper).toHaveValue("test");

expect(wrapper).toMatchElement(<Dummy />);
// $ExpectError
expect(wrapper).toMatchElement();
// $ExpectError
expect(wrapper).toMatchElement(true);

expect(wrapper).toMatchSelector("span");
// $ExpectError
expect(wrapper).toMatchSelector();
// $ExpectError
expect(wrapper).toMatchSelector(true);
