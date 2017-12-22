/* @flow */
/* eslint-disable */

jest.autoMockOff()
jest.clearAllMocks();
jest.resetAllMocks();

// $ExpectError property `atoMockOff` not found in object type
jest.atoMockOff()

const mockFn = jest.fn()
mockFn.mock.calls.map(String).map(a => a + a)

expect(1).toEqual(1)
expect(true).toBe(true)
expect(5).toBeGreaterThan(3)
expect(5).toBeLessThan(8)
expect('jester').toContain('jest')
expect({foo: 'bar'}).toHaveProperty('foo');
expect({foo: 'bar'}).toHaveProperty('foo', 'bar');
expect('foo').toMatchSnapshot('snapshot name');
expect({foo: 'bar'}).toMatchObject({baz: 'qux'});

mockFn('a')
expect('someVal').toBeCalled()
expect('someVal').toBeCalledWith('a')

// $ExpectError property `toHaveBeeenCalledWith` not found in object type
expect('someVal').toHaveBeeenCalledWith('a')

expect('someVal').toHaveBeenLastCalledWith('a')

// $ExpectError property `fn` not found in Array
mockFn.mock.calls.fn()

test('test', () => expect('foo').toMatchSnapshot());
test.only('test', () => expect('foo').toMatchSnapshot());
test.skip('test', () => expect('foo').toMatchSnapshot());

// $ExpectError property `fonly` not found in object type
test.fonly('test', () => expect('foo').toMatchSnapshot());

xtest('test', () => {});

// $ExpectError property `bar` not found in object type
expect.bar();

expect.extend({
  blah(actual, expected) {
    return {
      message: () => 'blah fail',
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

// Test method chaining fixes
jest
  .doMock('testModule1', () => { })
  .doMock('testModule2', () => { });

jest
  .dontMock('testModule1')
  .dontMock('testModule2');

jest
  .resetModules()
  .resetModules();

jest.spyOn({}, 'foo');

expect.addSnapshotSerializer(JSON.stringify);
expect.assertions(1);

expect.anything();
expect.any(Error);
expect.objectContaining({
  foo: 'bar'
});
expect.arrayContaining(['red', 'blue']);
expect.stringMatching('*this part*');

test.concurrent('test', () => {});

expect([1, 2, 3]).toHaveLength(3);
