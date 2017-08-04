// @flow
import Bluebird from 'bluebird';
import type { Disposable } from 'bluebird';

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
Bluebird.map(Bluebird.resolve([1]), (x: number) => new Bluebird(() => {})).all();
Bluebird.reject('test');
Bluebird.all([
  1
]);

function mapper(x: number): Promise<number> {
  return Bluebird.resolve(x);
}
let mapResult: Promise<number[]> = Bluebird.map([1], mapper);
let mapSeriesResult: Promise<number[]> = Bluebird.mapSeries([1], mapper);

Bluebird.resolve([1,2,3]).then(function(arr) {
  let l = arr.length;
  // $ExpectError Property not found in Array
  arr.then(r => r);
});

let response = fetch('/').then(r => r.text())
Bluebird.resolve(response).then(function(responseBody) {
  let length: number = responseBody.length;
  // $ExpectError Property not found in string
  responseBody.then(r => r);
});

Bluebird.all([1, Bluebird.resolve(1), Promise.resolve(1)]).then(function(r: Array<number>) { });
Bluebird.all(['hello', Bluebird.resolve('world'), Promise.resolve('!')]).then(function(r: Array<string>) { });

Bluebird.join(1, Bluebird.resolve(2), function (a, b) { return a + b }).then(function (s) { return s + 1 })
Bluebird.join(
  1,
  Bluebird.resolve(2),
  Promise.resolve(3),
  function (a, b) { return a + b }).then(function (s) { return s + 1 })

Bluebird.join(1, Bluebird.resolve(2),
  function (a, b) { return Bluebird.resolve(a + b) }).then(function (s) { return s + 1 })

// $ExpectError
Bluebird.all([1, Bluebird.resolve(1), Promise.resolve(1)]).then(function(r: Array<string>) { });

function foo(a: number, b: string) {
  throw new Error('oh no');
}
let fooPromise = Bluebird.method(foo);
fooPromise(1, 'b').catch(function(e: Error) {
  let m: string = e.message;
});

function fooPlain (a: number, b: string) {
  return 1;
}
let fooPlainPromise = Bluebird.method(fooPlain);
fooPlainPromise(1, 'a').then(function (n: number) {
  let n2 = n;
});

function fooNative (a: number, b: string) {
  return Promise.resolve(2);
}
let fooNativePromise = Bluebird.method(fooNative);
fooNativePromise(1, 'a').then(function (n: number) {
  let n2 = n;
});

function fooBluebird (a: number, b: string) {
  return Bluebird.resolve(3);
}
let fooBluebirdPromise = Bluebird.method(fooBluebird);
fooBluebirdPromise(1, 'a').then(function (n: number) {
  let n2 = n;
});

// $ExpectError
fooPromise('a', 1)
// $ExpectError
fooPromise()

Bluebird.resolve(['arr', { some: 'value' }, 42])
  .spread((someString: string, map: Object, answer: number) => answer)
  .then(answer => answer * 2);

Bluebird.reduce([5, Bluebird.resolve(6), Promise.resolve(7)], (memo, next) => memo + next);
Bluebird.reduce([5, Bluebird.resolve(6), Promise.resolve(7)], (memo, next) => memo + next, 1);
Bluebird.reduce([5, Bluebird.resolve(6), Promise.resolve(7)], (memo, next) => memo + next, Bluebird.resolve(1));
Bluebird.reduce([5, Bluebird.resolve(6), Promise.resolve(7)], (memo, next) => memo + next, Promise.resolve(1));

Bluebird.reduce(Promise.resolve([5, Bluebird.resolve(6), Promise.resolve(7)]), (memo, next) => memo + next);
Bluebird.reduce(Bluebird.resolve([5, Bluebird.resolve(6), Promise.resolve(7)]), (memo, next) => memo + next, 1);

Bluebird.reduce([1, Bluebird.resolve(2), Promise.resolve(3)], (prev, num) => Promise.resolve(prev * num));
Bluebird.reduce([1, Bluebird.resolve(2), Promise.resolve(3)], (prev, num) => Bluebird.resolve(prev * num));
//$ExpectError
Bluebird.reduce([1, Bluebird.resolve(2), Promise.resolve(3)], (prev, num) => Bluebird.resolve(prev * num), 'hello');

type PromiseOutput<T> = () => Promise<T>;
let givePromise1: PromiseOutput<number> = () => Promise.resolve(1);
let givePromise2: PromiseOutput<number> = () => Bluebird.resolve(2);
// $ExpectError
let givePromise3: PromiseOutput<number> = () => Bluebird.resolve('hello');

type PromiseInput<T> = (input: Promise<T>) => Function
let takePromise: PromiseInput<number> = (promise) => promise.then
takePromise(Promise.resolve(1));
takePromise(Bluebird.resolve(1));
// $ExpectError
takePromise(Bluebird.resolve('hello'));

Bluebird.delay(500);
// $ExpectError
Bluebird.delay('500');
Bluebird.delay(500, 1);
Bluebird.delay(500, Promise.resolve(5));
Bluebird.delay(500, Bluebird.resolve(5));

Bluebird.resolve().return(5).then((result: number) => {});
Bluebird.resolve().thenReturn(5).then((result: number) => {});
// $ExpectError
Bluebird.resolve().return(5).then((result: string) => {});
// $ExpectError
Bluebird.resolve().thenReturn(5).then((result: string) => {});

let disposable: Disposable<boolean> = Bluebird.resolve(true).disposer((value: boolean) => {});
Bluebird.using(disposable, (value: boolean) => 9).then((result: number) => {});
// $ExpectError
Bluebird.using(disposable, (value: number) => 9);
// $ExpectError
Bluebird.using(disposable, (value: boolean) => 9).then((result: boolean) => {});
