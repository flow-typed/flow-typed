// @flow
import Bluebird from 'bluebird';

const defer: Bluebird.Defer = Bluebird.defer();
const promise: Bluebird<*> = defer.promise;
(promise.isFulfilled(): bool);
promise.reflect().then(inspection => {
  (inspection.isCancelled(): bool);
  (inspection.pending(): bool);
});

// $ExpectError
new Bluebird();

Bluebird.all([
  new Bluebird(() => {}),
]);
Bluebird.map([1], (x: number) => new Bluebird(() => {})).all();
Bluebird.reject('test');
Bluebird.all([
  1
]);
