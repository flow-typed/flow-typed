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


Bluebird.resolve([1,2,3]).then(function(arr) {
  let l = arr.length;
  // $ExpectError Property not found in Array
  arr.then(r => r);
})

let response = fetch('/').then(r => r.text())
Bluebird.resolve(response).then(function(responseBody) {
  let length: number = responseBody.length;
  // $ExpectError Property not found in string
  responseBody.then(r => r);
})

Bluebird.all([1, Bluebird.resolve(1), Promise.resolve(1)]).then(function(r: Array<number>) { })
Bluebird.all(['hello', Bluebird.resolve('world'), Promise.resolve('!')]).then(function(r: Array<string>) { })

// $ExpectError
Bluebird.all([1, Bluebird.resolve(1), Promise.resolve(1)]).then(function(r: Array<string>) { })

function foo(a: number, b: string) {
  throw new Error('oh no')
}
let fooPromise = Bluebird.method(foo)
fooPromise(1, 'b').catch(function(e: Error) {
  let m: string = e.message
})

// $ExpectError
fooPromise('a', 1)
// $ExpectError
fooPromise()