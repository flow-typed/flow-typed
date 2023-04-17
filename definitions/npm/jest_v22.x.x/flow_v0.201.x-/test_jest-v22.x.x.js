/* @flow */
/* eslint-disable */
import * as React from 'react';

jest.autoMockOff();
jest.clearAllMocks();
jest.resetAllMocks();
jest.restoreAllMocks();

// $FlowExpectedError[prop-missing] property `atoMockOff` not found in object type
jest.atoMockOff();

const mockFn = jest.fn();
mockFn.mock.calls.map(String).map((a) => a + a);

type Foo = { doStuff: string => number, ... };
const foo: Foo = {
  doStuff(str: string): number {
    return 5;
  }
};

foo.doStuff = jest.fn().mockImplementation((str) => 10);
foo.doStuff = jest.fn().mockImplementation((str) => parseInt(str, 10));
foo.doStuff = jest.fn().mockImplementation((str) => str.indexOf('a'));
// $FlowExpectedError[prop-missing] function `doesntExist` not found in string.
foo.doStuff = jest.fn().mockImplementation((str) => str.doesntExist());
// $FlowExpectedError[incompatible-call] Mock function expected to return number, not string.
foo.doStuff = jest.fn().mockImplementation((str) => '10');
foo.doStuff = jest.fn().mockImplementationOnce((str) => 10);
foo.doStuff = jest.fn().mockImplementationOnce((str) => parseInt(str, 10));
foo.doStuff = jest.fn().mockImplementationOnce((str) => str.indexOf('a'));
// $FlowExpectedError[prop-missing] function `doesntExist` not found in string.
foo.doStuff = jest.fn().mockImplementationOnce((str) => str.doesntExist());
// $FlowExpectedError[incompatible-call] Mock function expected to return number, not string.
foo.doStuff = jest.fn().mockImplementationOnce((str) => '10');

foo.doStuff = jest.fn().mockReturnValue(10);
// $FlowExpectedError[incompatible-call] Mock function expected to return number, not string.
foo.doStuff = jest.fn().mockReturnValue('10');

foo.doStuff = jest.fn().mockReturnValueOnce(10);
// $FlowExpectedError[incompatible-call] Mock function expected to return number, not string.
foo.doStuff = jest.fn().mockReturnValueOnce('10');

foo.doStuff = jest.fn().mockName("10");
// $FlowExpectedError[incompatible-call] mockName expects a string, not a number
foo.doStuff = jest.fn().mockName(10);

const mockedDoStuff = (foo.doStuff = jest.fn().mockImplementation((str) => 10));
mockedDoStuff.mock.calls[0][0].indexOf('a');
// $FlowExpectedError[prop-missing] function `doesntExist` not found in string.
mockedDoStuff.mock.calls[0][0].doesntExist('a');

mockedDoStuff.mock.instances[0] > 5;
// $FlowExpectedError[prop-missing] function `doesntExist` not found in number.
mockedDoStuff.mock.instances[0].indexOf('a');

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

// $FlowExpectedError[incompatible-call] property `toHaveBeeenCalledWith` not found in object type
expect("someVal").toHaveBeeenCalledWith("a");

// $FlowExpectedError[prop-missing] property `fn` not found in Array
mockFn.mock.calls.fn();

class AClass {}
function aFunction() {}

describe('name', () => {});
describe(AClass, () => {});
describe(aFunction, () => {});

describe.only('name', () => {});
describe.only(AClass, () => {});
describe.only(aFunction, () => {});

describe.skip('name', () => {});
describe.skip(AClass, () => {});
describe.skip(aFunction, () => {});

test("test", () => expect("foo").toMatchSnapshot());
test(AClass, () => expect("foo").toMatchSnapshot());
test(aFunction, () => expect("foo").toMatchSnapshot());
test.only("test", () => expect("foo").toMatchSnapshot());
test.skip("test", () => expect("foo").toMatchSnapshot());

// $FlowExpectedError[prop-missing] property `fonly` not found in object type
test.fonly('test', () => expect('foo').toMatchSnapshot());

test('name', (done) => {
  done();
});
test.only('name', (done) => {
  done();
});
test.skip('name', (done) => {
  done();
});

// $FlowExpectedError[incompatible-call] tests should return void or Promise.
test('name', () => 5);
test('name', async () => {});
test('name', () => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] describe does not support Promises.
describe('name', () => new Promise((resolve, reject) => {}));

beforeEach(() => {});
beforeEach(() => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] Lifecycle methods should return void or Promise.
beforeEach(() => 5);

beforeAll(() => {});
beforeAll(() => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] Lifecycle methods should return void or Promise.
beforeAll(() => 5);

afterEach(() => {});
afterEach(() => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] Lifecycle methods should return void or Promise.
afterEach(() => 5);

afterAll(() => {});
afterAll(() => new Promise((resolve, reject) => {}));
// $FlowExpectedError[incompatible-call] Lifecycle methods should return void or Promise.
afterAll(() => 5);

xtest('test', () => {});

// $FlowExpectedError[prop-missing] property `bar` not found in object type
expect.bar();

expect.extend({
  blah(actual, expected) {
    return {
      message: () => 'blah fail',
      pass: false,
    };
  },
});

expect.extend({
  foo(actual, expected) {
    // $FlowExpectedError[prop-missing] property `pass` not found in object literal
    return {};
  },
});

const err = new Error('err');
expect(() => {
  throw err;
}).toThrowError('err');

expect(() => {
  throw err;
}).toThrowError(/err/);

expect(() => {
  throw err;
}).toThrowError(err);

expect(() => {}).toThrow('err');
expect(() => {}).toThrow(/err/);
expect(() => {}).toThrow(err);

// Test method chaining fixes
jest.doMock('testModule1', () => {}).doMock('testModule2', () => {});

jest.dontMock('testModule1').dontMock('testModule2');

jest.resetModules().resetModules();

jest.spyOn({}, 'foo', 'get');

jest.setTimeout(1000);

jest.runTimersToTime(3000);
jest.advanceTimersByTime(3000);

expect.addSnapshotSerializer({
  print: (val, serialize) => `Foo: ${serialize(val.foo)}`,
  test: (val) => val && val.hasOwnProperty('foo'),
});

// $FlowExpectedError[incompatible-call]
expect.addSnapshotSerializer(JSON.stringify);

expect.assertions(1);
expect.hasAssertions();

expect.anything();
expect.any(Error);
expect.objectContaining({
  foo: 'bar',
});
expect.arrayContaining(['red', 'blue']);
expect.stringMatching('*this part*');

test.concurrent('test', () => {});

expect([1, 2, 3]).toHaveLength(3);

(async () => {
  await expect(Promise.reject('ok')).rejects.toBe('ok');
  await expect(Promise.resolve('ok')).resolves.toBe('ok');
})();

/**
 *  Plugin: jest-enzyme
 */

// $FlowExpectedError[cannot-resolve-module]
import { shallow } from 'enzyme';
const Dummy = () => <div />;
const wrapper = shallow(<Dummy />);

expect(wrapper).toBeChecked();

expect(wrapper).toBeDisabled();

expect(wrapper).toBeEmpty();

expect(wrapper).toBeEmptyRender();

expect(wrapper).toBePresent();

expect(wrapper).toContainReact(<Dummy />);
// $FlowExpectedError[incompatible-call]
expect(wrapper).toContainReact();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toContainReact('string');

expect(wrapper).toExist();

expect(wrapper).toHaveClassName('class');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveClassName();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveClassName(true);

expect(wrapper).toHaveHTML('<span>test</span>');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveHTML();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveHTML(true);

expect(wrapper).toHaveProp('test');
expect(wrapper).toHaveProp('test', 'test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveProp();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveProp(true);
expect(wrapper).toHaveProp({ test: 'test' });
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveProp({ test: 'test' }, 'test');

expect(wrapper).toHaveRef('test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveRef();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveRef(true);

expect(wrapper).toHaveState('test');
expect(wrapper).toHaveState('test', 'test');
expect(wrapper).toHaveState({ test: 'test' });
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveState({ test: 'test' }, 'test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveState();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveState(true);

expect(wrapper).toHaveStyle('color');
expect(wrapper).toHaveStyle('color', '#ccc');
expect(wrapper).toHaveStyle({ color: '#ccc' });
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveStyle({ color: '#ccc' }, 'test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveStyle();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveStyle(true);

expect(wrapper).toHaveTagName('marquee');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveTagName();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveTagName(true);

expect(wrapper).toHaveText('test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveText();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toHaveText(true);

expect(wrapper).toHaveValue('test');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toIncludeText();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toIncludeText(true);

expect(wrapper).toMatchElement(<Dummy />);
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchElement();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchElement(true);

expect(wrapper).toMatchSelector('span');
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchSelector();
// $FlowExpectedError[incompatible-call]
expect(wrapper).toMatchSelector(true);

/**
 * @testing-library/jest-dom
 */
{
  const element = document.createElement('div');

  expect(element).toHaveTextContent('123');
  // $FlowExpectedError[incompatible-call]: expected text content should be present
  expect(element).toHaveTextContent();
  // $FlowExpectedError[incompatible-call]: expected text content should be a string
  expect(element).toHaveTextContent(1);

  expect(element).toBeInTheDOM();

  expect(element).toHaveAttribute('foo');
  expect(element).toHaveAttribute('foo', 'bar');
  // $FlowExpectedError[incompatible-call]: attribute name should be present
  expect(element).toHaveAttribute();
  // $FlowExpectedError[incompatible-call]: attribute name should be a string
  expect(element).toHaveAttribute(1);
  // $FlowExpectedError[incompatible-call]: expected attribute value should be a string
  expect(element).toHaveAttribute('foo', 1);
}

{
  // in reality this would be a jquery object
  const jquery = '$(someSelector)';

  {
    expect(jquery).toExist();
    expect(jquery).not.toExist();

    expect(jquery).toHaveLength(1);
    // $FlowExpectedError[incompatible-call]: parameter required
    expect(jquery).toHaveLength();

    expect(jquery).toHaveId('username');

    expect(jquery).toHaveClass('myclass');
    expect(jquery).toHaveTag('div');
    expect(jquery).toHaveAttr('attr1');
    expect(jquery).toHaveAttr('attr1', 'value1');

    expect(jquery).toHaveProp('attr1');
    expect(jquery).toHaveProp('attr1', 'value1');

    expect(jquery).toHaveData('attr1');
    expect(jquery).toHaveData('attr1', 'value1');

    expect(jquery).toHaveText('MyText');
    expect(jquery).toHaveText(/MyTe.t/);

    expect(jquery).toHaveDescendantWithText('selector', 'text');
    expect(jquery).toHaveDescendantWithText('selector', /text/);

    expect(jquery).toHaveCss({ key: 'value' });
  }
}

{
  expect('').toBeEmpty();
  expect(1).toBeOneOf([1, 2, 3]);
  expect(null).toBeNil();

  {
    const greaterThanOneButNotThree = (n) => n > 1 && n !== 3;
    expect(100).toSatisfy(greaterThanOneButNotThree);
  }

  expect([]).toBeArray();

  expect([]).toBeArrayOfSize(0);

  expect([1, 2, 3]).toIncludeAllMembers([2, 1, 3]);

  expect([1, 2, 3]).toIncludeAnyMembers([2, 1, 3]);

  {
    const isOdd = (el) => el % 2 === 1;
    expect([1, 3, 5, 7]).toSatisfyAll(isOdd);
  }

  expect(false).toBeBoolean();
  expect(false).not.toBeTrue();

  expect(true).not.toBeFalse();
  expect(() => {}).toBeFunction();

  {
    const timeout = (n: number) => {};
    const mock1 = jest.fn(timeout(1));
    const mock2 = jest.fn(timeout(1));
    expect(mock1).toHaveBeenCalledBefore(mock2);
  }

  expect(1).toBeNumber();
  expect(NaN).toBeNaN();
  expect(1).toBeFinite();
  expect(1).toBePositive();
  expect(-1).toBeNegative();
  expect(2).toBeEven();
  expect(1).toBeOdd();
  expect(1).toBeWithin(1, 3);
  expect({}).toBeObject();
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainKey('a');
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainKeys(['a', 'b']);
  }
  {
    const o = { a: 'hello', b: 'world' };
    expect(o).toContainAllKeys(['a', 'b']);
  }
  {
    const o = { a: 'hello', b: 'world' };
    expect(o).toContainAnyKeys(['a']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainValue('foo');
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainValues(['foo']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainAllValues(['foo', 'bar', 'baz']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainAnyValues(['qux', 'foo']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainEntry(['a', 'foo']);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainEntries([['a', 'foo']]);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainAllEntries([['a', 'foo'], ['b', 'bar'], ['c', 'baz']]);
  }
  {
    const o = { a: 'foo', b: 'bar', c: 'baz' };
    expect(o).toContainAnyEntries([['a', 'qux'], ['a', 'foo']]);
  }
  {
    expect({ a: 1 }).toBeExtensible();
  }

  expect(Object.freeze({})).toBeFrozen();

  expect(Object.seal({})).toBeSealed();

  expect('').toBeString();
  expect('hello world').toEqualCaseInsensitive('hello world');
  expect('hello world').toStartWith('hello');
  expect('hello world').toEndWith('world');
  expect('hello world').toInclude('ell');
  expect('hello hello world').toIncludeRepeated('hello', 2);
  expect('hello world').toIncludeMultiple(['world', 'hello']);
}

{
  // Type hint becomes the returned type
  const FooModule1: string = jest.requireActual<string>('FooModule');
  // $FlowExpectedError[incompatible-type] Type hint becomes the returned type
  const FooModule2: number = jest.requireActual<string>('FooModule');
  // No type hint means we return any
  const FooModule3: boolean = jest.requireActual('FooModule');
}
