/* @flow */
/* eslint-disable */
jest.autoMockOff()

// $ExpectError property `atoMockOff` not found in object type
jest.atoMockOff()

const mockFn = jest.fn()
mockFn.mock.calls.map(String).map(a => a + a)

expect(1).toEqual(1)
expect(true).toBe(true)
expect(5).toBeGreaterThan(3)
expect(5).toBeLessThan(8)
expect('jester').toContain('jest')

mockFn('a')
expect('someVal').toBeCalled()
expect('someVal').toBeCalledWith('a')

// $ExpectError property `toHaveBeeenCalledWith` not found in object type
expect('someVal').toHaveBeeenCalledWith('a')

// $ExpectError property `fn` not found in Array
mockFn.mock.calls.fn()
