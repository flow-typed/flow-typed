// @flow

/**
 * TDD language that can be imported into tests for more descriptive test writing and smaller scopes.
 * Note that we don't actually run tests, these are simply present to mimic the TDD verbs we know and love.
 *
 * Usage:
 *
 *    describe('#someFunction', () => {
 *      it('should do something', () => {
 *        // test...
 *      })
 *
 *      // you can also do type checks outside an it statement
 *    })
 *
 */
export const describe = (label: string, fn: (...any) => any): void => { fn() }
export const it = (label: string, fn: (...any) => any): void => { fn() }
