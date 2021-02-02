/* @flow */
/* eslint-disable */

jest.autoMockOff();
jest.clearAllMocks();
jest.resetAllMocks();

// $FlowExpectedError property `atoMockOff` not found in object type
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

// $FlowExpectedError property `toHaveBeeenCalledWith` not found in object type
expect("someVal").toHaveBeeenCalledWith("a");

// $FlowExpectedError property `fn` not found in Array
mockFn.mock.calls.fn();

describe("name", () => {});
describe.only("name", () => {});
describe.skip("name", () => {});

test("test", () => expect("foo").toMatchSnapshot());
test.only("test", () => expect("foo").toMatchSnapshot());
test.skip("test", () => expect("foo").toMatchSnapshot());

// $FlowExpectedError property `fonly` not found in object type
test.fonly("test", () => expect("foo").toMatchSnapshot());

xtest("test", () => {});

// $FlowExpectedError property `bar` not found in object type
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
  // $FlowExpectedError property `pass` not found in object literal
  foo(actual, expected) {
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

// $FlowExpectedError
import { shallow } from "enzyme";
const Dummy = () => <div />;
const wrapper = shallow(<Dummy />);

expect(wrapper).toBeChecked();

expect(wrapper).toBeDisabled();

expect(wrapper).toBeEmpty();

expect(wrapper).toBePresent();

expect(wrapper).toContainReact(<Dummy />);
// $FlowExpectedError
expect(wrapper).toContainReact();
// $FlowExpectedError
expect(wrapper).toContainReact("string");

expect(wrapper).toHaveClassName("class");
// $FlowExpectedError
expect(wrapper).toHaveClassName();
// $FlowExpectedError
expect(wrapper).toHaveClassName(true);

expect(wrapper).toHaveHTML("<span>test</span>");
// $FlowExpectedError
expect(wrapper).toHaveHTML();
// $FlowExpectedError
expect(wrapper).toHaveHTML(true);

expect(wrapper).toHaveProp("test");
expect(wrapper).toHaveProp("test", "test");
// $FlowExpectedError
expect(wrapper).toHaveProp();
// $FlowExpectedError
expect(wrapper).toHaveProp(true);

expect(wrapper).toHaveRef("test");
// $FlowExpectedError
expect(wrapper).toHaveRef();
// $FlowExpectedError
expect(wrapper).toHaveRef(true);

expect(wrapper).toHaveState("test");
expect(wrapper).toHaveState("test", "test");
// $FlowExpectedError
expect(wrapper).toHaveState();
// $FlowExpectedError
expect(wrapper).toHaveState(true);

expect(wrapper).toHaveStyle("color");
expect(wrapper).toHaveStyle("color", "#ccc");
// $FlowExpectedError
expect(wrapper).toHaveStyle();
// $FlowExpectedError
expect(wrapper).toHaveStyle(true);

expect(wrapper).toHaveTagName("marquee");
// $FlowExpectedError
expect(wrapper).toHaveTagName();
// $FlowExpectedError
expect(wrapper).toHaveTagName(true);

expect(wrapper).toHaveText("test");
// $FlowExpectedError
expect(wrapper).toHaveText();
// $FlowExpectedError
expect(wrapper).toHaveText(true);

expect(wrapper).toIncludeText("test");
// $FlowExpectedError
expect(wrapper).toIncludeText();
// $FlowExpectedError
expect(wrapper).toIncludeText(true);

expect(wrapper).toHaveValue("test");

expect(wrapper).toMatchElement(<Dummy />);
// $FlowExpectedError
expect(wrapper).toMatchElement();
// $FlowExpectedError
expect(wrapper).toMatchElement(true);

expect(wrapper).toMatchSelector("span");
// $FlowExpectedError
expect(wrapper).toMatchSelector();
// $FlowExpectedError
expect(wrapper).toMatchSelector(true);
