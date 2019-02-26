// @flow
import type { $Timeout, AngularPromise } from 'angular';
import { describe, it } from 'flow-typed-test';

describe('angular $Timeout', () => {
  it('can be called', () => {
    it('without arguments', () => {
      function testTimeout($timeout: $Timeout) {
        $timeout();
      }
    });

    it('with first argument as a function', () => {
      function testTimeout($timeout: $Timeout) {
        $timeout(() => {});
      }
    });

    it('with second argument as number', () => {
      function testTimeout($timeout: $Timeout) {
        $timeout(() => {}, 123);
      }
    });

    it('with third argument as boolean', () => {
      function testTimeout($timeout: $Timeout) {
        $timeout(() => {}, 123, true);
      }
    });

    it('with fourth argument as anything', () => {
      function testTimeout($timeout: $Timeout) {
        $timeout(() => {}, 123, true, 123);
        $timeout(() => {}, 123, true, 'text');
        $timeout(() => {}, 123, true, {});
      }
    });
  });

  it('cannot be called', () => {
    it('with something other than function as first argument', () => {
      function testTimeout($timeout: $Timeout) {
        //$ExpectError
        $timeout(123);
      }
    });

    it('with something other than a number in the second argument', () => {
      function testTimeout($timeout: $Timeout) {
        //$ExpectError
        $timeout(() => {}, '123');
      }
    });

    it('with something other than a boolean in the third argument', () => {
      function testTimeout($timeout: $Timeout) {
        //$ExpectError
        $timeout(() => {}, 123, 'text');
      }
    });
  });

  it('returns back the angular promise', () => {
    function testTimeout($timeout: $Timeout) {
      ($timeout(): AngularPromise<*>);
    }
  });
});
