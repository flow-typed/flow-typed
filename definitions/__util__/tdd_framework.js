// @flow

/**
 * TDD language that can used in tests for more descriptive test writing and smaller scopes.
 * Note that we don't actually run tests, these are simply present to mimic the TDD verbs we know and love.
 *
 * Usage:
 *
 *    import { describe, it } from 'flow-typed-test';
 *
 *    describe('#someFunction', () => {
 *      it('should do something', () => {
 *        // test...
 *      })
 *
 *      // you can also do type checks outside an it statement
 *    })
 *
 * It is set up such that you don't need to import these functions, you can just use them naturally as if they were
 * available in the global scope.
 */

declare module 'flow-typed-test' {
  declare export function describe(label: string, fn: (...any) => void): void;
  declare export function it(label: string, fn: (...any) => void): void;
}
