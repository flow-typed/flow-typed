// @flow
import type { $Interval, $Log, AngularPromise } from 'angular';
import { describe, it } from 'flow-typed-test';

describe('angular $Interval', () => {
  it('can be called', () => {
    it('with two args: fn, delay', () => {
      function testInterval($interval: $Interval) {
        $interval(() => {}, 0);
      }
    });

    it('with third argument as number', () => {
      function testInterval($interval: $Interval) {
        $interval(() => {}, 0, 1);
      }
    });

    it('with fourth argument as boolean', () => {
      function testInterval($interval: $Interval) {
        $interval(() => {}, 0, 1, true);
      }
    });

    it('with additional arguments to be passed to the function', () => {
      function testInterval($interval: $Interval) {
        $interval((a, b, c) => {}, 0, 1, false, 'a', 'b', 'c');
      }
    });
  });

  it('cannot be called', () => {
    it('with something other than a number in the third argument', () => {
      function testInterval($interval: $Interval) {
        //$ExpectError
        $interval(() => {}, 0, true);
      }
    });

    it('with something other than a boolean in the fourth argument', () => {
      function testInterval($interval: $Interval) {
        //$ExpectError
        $interval(() => {}, 0, 1, 2);
      }
    });

    it('with less than two arguments', () => {
      function testInterval($interval: $Interval) {
        //$ExpectError
        $interval(() => {});
        //$ExpectError
        $interval();
      }
    });

    it('with something other than [function, number] in first two arguments', () => {
      function testInterval($interval: $Interval) {
        //$ExpectError
        $interval(123, 1);
        //$ExpectError
        $interval(123, () => {});
        //$ExpectError
        $interval(() => {}, 'string');
      }
    });
  });

  it('returns back the angular promise', () => {
    function testInterval($interval: $Interval) {
      ($interval(() => {}, 0): AngularPromise<*>);
    }
  });
});

describe('angular $Log', () => {
  describe('log', () => {
    it('can be passed an argument of any type or none at all', () => {
      function testLog($log: $Log) {
        $log.log('anything');
        $log.log(1);
        $log.log(() => {});
        $log.log(null);
        $log.log({ a: 1 });
        $log.log(['a', 1, 3, { a: 10 }]);
        $log.log(Symbol('test'));
        $log.log();
      }
    });

    it('cannot pass more than one argument', () => {
      function testLog($log: $Log) {
        //$ExpectError
        $log.log(1, 'x');
      }
    });

    it('returns back nothing', () => {
      function testLog($log: $Log) {
        ($log.log(1): void);
      }
    });
  });

  describe('info', () => {
    it('can be passed an argument of any type or none at all', () => {
      function testLog($log: $Log) {
        $log.info('anything');
        $log.info(1);
        $log.info(() => {});
        $log.info(null);
        $log.info({ a: 1 });
        $log.info(['a', 1, 3, { a: 10 }]);
        $log.info(Symbol('test'));
        $log.info();
      }
    });

    it('cannot pass more than one argument', () => {
      function testLog($log: $Log) {
        //$ExpectError
        $log.info(1, 'x');
      }
    });

    it('returns back nothing', () => {
      function testLog($log: $Log) {
        ($log.info(1): void);
      }
    });
  });

  describe('warn', () => {
    it('can be passed an argument of any type or none at all', () => {
      function testLog($log: $Log) {
        $log.warn('anything');
        $log.warn(1);
        $log.warn(() => {});
        $log.warn(null);
        $log.warn({ a: 1 });
        $log.warn(['a', 1, 3, { a: 10 }]);
        $log.warn(Symbol('test'));
        $log.warn();
      }
    });

    it('cannot pass more than one argument', () => {
      function testLog($log: $Log) {
        //$ExpectError
        $log.warn(1, 'x');
      }
    });

    it('returns back nothing', () => {
      function testLog($log: $Log) {
        ($log.warn(1): void);
      }
    });
  });

  describe('error', () => {
    it('can be passed an argument of any type or none at all', () => {
      function testLog($log: $Log) {
        $log.error('anything');
        $log.error(1);
        $log.error(() => {});
        $log.error(null);
        $log.error({ a: 1 });
        $log.error(['a', 1, 3, { a: 10 }]);
        $log.error(Symbol('test'));
        $log.error();
      }
    });

    it('cannot pass more than one argument', () => {
      function testLog($log: $Log) {
        //$ExpectError
        $log.error(1, 'x');
      }
    });

    it('returns back nothing', () => {
      function testLog($log: $Log) {
        ($log.error(1): void);
      }
    });
  });

  describe('debug', () => {
    it('can be passed an argument of any type or none at all', () => {
      function testLog($log: $Log) {
        $log.debug('anything');
        $log.debug(1);
        $log.debug(() => {});
        $log.debug(null);
        $log.debug({ a: 1 });
        $log.debug(['a', 1, 3, { a: 10 }]);
        $log.debug(Symbol('test'));
        $log.debug();
      }
    });

    it('cannot pass more than one argument', () => {
      function testLog($log: $Log) {
        //$ExpectError
        $log.debug(1, 'x');
      }
    });

    it('returns back nothing', () => {
      function testLog($log: $Log) {
        ($log.debug(1): void);
      }
    });
  });
});
