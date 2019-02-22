// @flow
import type { $Interval, $Log, AngularPromise } from 'angular';

function testInterval($interval: $Interval) {
  // can be called with two args: fn, delay
  $interval(() => {}, 0);
  // can be called with two args
  $interval(() => {}, 0);
  // third argument is a number
  $interval(() => {}, 0, 1);
  // fourth argument is a boolean
  $interval(() => {}, 0, 1, true);
  // remaining arguments are passed to the function
  $interval((a, b, c) => {}, 0, 1, false, 'a', 'b', 'c');
  //$ExpectError third argument must be a number
  $interval(() => {}, 0, true);
  //$ExpectError fourth argument must be a boolean
  $interval(() => {}, 0, 1, 2);
  //$ExpectError must have two arguments
  $interval();
  //$ExpectError must have two arguments
  $interval(() => {});
  //$ExpectError must have two arguments minimum where fn is Function and delay is number
  $interval(123, 1);
  //$ExpectError must have two arguments minimum where fn is Function and delay is number
  $interval(() => {}, 'string');
  // returns back angular promise
  ($interval(() => {}, 0): AngularPromise<*>);
}

function testLog($log: $Log) {
  // can be pass an argument of any type or none at all
  $log.log('anything');
  $log.log(1);
  $log.log(() => {});
  $log.log(null);
  $log.log({ a: 1 });
  $log.log(['a', 1, 3, { a: 10 }]);
  $log.log(Symbol('test'));
  $log.log();

  //$ExpectError cannot pass more than one argument
  $log.log(1, 'x');

  // returns back nothing
  ($log.log(1): void);

  // can be pass an argument of any type or none at all
  $log.info('anything');
  $log.info(1);
  $log.info(() => {});
  $log.info(null);
  $log.info({ a: 1 });
  $log.info(['a', 1, 3, { a: 10 }]);
  $log.info(Symbol('test'));
  $log.info();

  //$ExpectError cannot pass more than one argument
  $log.info(1, 'x');

  // returns back nothing
  ($log.info(1): void);

  // can be pass an argument of any type or none at all
  $log.warn('anything');
  $log.warn(1);
  $log.warn(() => {});
  $log.warn(null);
  $log.warn({ a: 1 });
  $log.warn(['a', 1, 3, { a: 10 }]);
  $log.warn(Symbol('test'));
  $log.warn();

  //$ExpectError cannot pass more than one argument
  $log.warn(1, 'x');

  // returns back nothing
  ($log.warn(1): void);

  // can be pass an argument of any type or none at all
  $log.error('anything');
  $log.error(1);
  $log.error(() => {});
  $log.error(null);
  $log.error({ a: 1 });
  $log.error(['a', 1, 3, { a: 10 }]);
  $log.error(Symbol('test'));
  $log.error();

  //$ExpectError cannot pass more than one argument
  $log.error(1, 'x');

  // returns back nothing
  ($log.error(1): void);

  // can be pass an argument of any type or none at all
  $log.debug('anything');
  $log.debug(1);
  $log.debug(() => {});
  $log.debug(null);
  $log.debug({ a: 1 });
  $log.debug(['a', 1, 3, { a: 10 }]);
  $log.debug(Symbol('test'));
  $log.debug();

  //$ExpectError cannot pass more than one argument
  $log.debug(1, 'x');

  // returns back nothing
  ($log.debug(1): void);
}
