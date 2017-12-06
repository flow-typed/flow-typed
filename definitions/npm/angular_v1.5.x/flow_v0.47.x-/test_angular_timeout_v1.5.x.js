// @flow
import type {$Timeout, AngularPromise} from 'angular';

function testTimeout($timeout: $Timeout) {
  //can be called without arguments
  $timeout();
  //first argument is a function
  $timeout(() => {});
  //$ExpectError takes in only function as first argument
  $timeout(123);
  //second argument is number
  $timeout(() => {}, 123);
  //$ExpectError takes in only number as second argument
  $timeout(() => {}, '123');
  //third argument is boolean
  $timeout(() => {}, 123, true);
  //$ExpectError takes in only number as third argument
  $timeout(() => {}, 123, 'text');
  //fourth argument can be anything
  $timeout(() => {}, 123, true, 123);
  $timeout(() => {}, 123, true, 'text');
  $timeout(() => {}, 123, true, {});
  //returns back angular promise
  ($timeout(): AngularPromise<*>);
}
