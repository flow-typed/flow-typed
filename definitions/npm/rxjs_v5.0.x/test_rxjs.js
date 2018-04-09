/* @flow */

import { Observable, Observer, Scheduler, Subject } from "rxjs";
import * as O from "rxjs/Observable";
import * as Obs from "rxjs/Observer";
import * as BS from "rxjs/BehaviorSubject";
import * as RS from "rxjs/ReplaySubject";
import * as S from "rxjs/Subject";
import * as Sub from "rxjs/Subscription";

const numbers: Observable<number> = Observable.of(1, 2, 3);
const strings: Observable<string> = numbers.map(x => x.toString());
// $ExpectError
const bogusStrings: Observable<string> = numbers.map(x => x);

(numbers.audit(() => strings): Observable<number>);

(numbers.auditTime(250): Observable<number>);

// $ExpectError
numbers.subscribe((x: string) => {});
strings.subscribe((x: string) => {});

(strings.elementAt(1): Observable<string>);
(strings.elementAt(1, ""): Observable<string>);
// $ExpectError
strings.elementAt(1, 5);

(Observable.of(numbers, numbers).concatAll(): Observable<number>);

// (numbers.pairwise(): Observable<Array<number>>);

(numbers.partition(x => x % 2 === 0): [Observable<number>, Observable<number>]);

(numbers.skipWhile(x => true): Observable<number>);

// $ExpectError -- need the typecast or the error appears at the declaration site
numbers.merge((strings: Observable<string>));

numbers.let(_numbers => strings);
numbers.letBind(_numbers => strings);
// $ExpectError -- need to return an observable
numbers.let(_numbers => 3);
// $ExpectError -- need to return an observable
numbers.letBind(_numbers => 3);

(numbers.map(number => Observable.of(number)).switch(): Observable<number>);
// $ExpectError -- .switch can't assert that it's operating on observables, but it can at least trace the type.
(numbers.map(number => Observable.of(number)).switch(): Observable<string>);

const combined: Observable<{ n: number, s: string }> = Observable.combineLatest(
  numbers,
  strings,
  (n, s) => ({ n, s })
);

const combined2: Observable<[number, string]> = Observable.combineLatest(
  numbers,
  strings
);

const combined3: Observable<[number]> = Observable.combineLatest(numbers);

(Observable.combineLatest(numbers, strings, strings): Observable<
  [number, string, string]
>);

const combinedBad: Observable<{
  n: number,
  s: string
  // $ExpectError
}> = Observable.combineLatest(numbers, numbers, (n, s) => ({ n, s }));

(numbers.combineLatest(strings): Observable<[number, string]>);
// $ExpectError
(numbers.combineLatest(numbers): Observable<[number, string]>);

(numbers.combineLatest(strings, (a: number, b: string) => ({
  a,
  b
})): Observable<{ a: number, b: string }>);

(numbers.combineLatest(strings, strings): Observable<[number, string, string]>);

(numbers.combineLatest(strings, strings, (a: number, b: string, c: string) => ({
  a,
  b,
  c
})): Observable<{ a: number, b: string, c: string }>);

const forked: Observable<{ n: number, s: string }> = Observable.forkJoin(
  numbers,
  strings,
  (n, s) => ({ n, s })
);

const forked2: Observable<[number, string]> = Observable.forkJoin(
  numbers,
  strings
);

const forked3a: Observable<Array<number>> = Observable.forkJoin(
  [1, 2, 3].map(number => Observable.of(number))
);

const forked3b: Observable<
  Array<number | string | boolean>
> = Observable.forkJoin([1, "2", 3, true].map(val => Observable.of(val)));

const forked3c: Observable<Array<any>> = Observable.forkJoin(
  [1, "2", 3, true].map(val => Observable.of(val))
);

const forked4a: Observable<number> = Observable.forkJoin(
  [1, 2, 3].map(number => Observable.of(number)),
  (...numbers: Array<number>) => numbers.reduce((a, b) => a + b)
);

const forked4b: Observable<number> = Observable.forkJoin(
  [1, "2", 3, true].map(val => Observable.of(val)),
  (...vals: Array<any>) => vals.map(Number).reduce((a, b) => a + b)
);

// $ExpectError
const forkedBad: Observable<{ n: number, s: string }> = Observable.forkJoin(
  numbers,
  numbers,
  (n, s) => ({ n, s })
);

(Observable.defer(() => numbers): Observable<number>);

const zipped: Observable<{ n: number, s: string }> = Observable.zip(
  numbers,
  strings,
  (n, s) => ({ n, s })
);

const zipped2: Observable<[number, string]> = Observable.zip(numbers, strings);

const zipped3: Observable<[number]> = Observable.zip(numbers);

(Observable.zip(numbers, strings, strings): Observable<
  [number, string, string]
>);

// $ExpectError
const zippedBad: Observable<{ n: number, s: string }> = Observable.zip(
  numbers,
  numbers,
  (n, s) => ({ n, s })
);

(Observable.zip(numbers, strings): Observable<[number, string]>);
(Observable.zip(numbers, strings, (a: number, b: string) => ({
  a,
  b
})): Observable<{ a: number, b: string }>);

(numbers.zip(strings): Observable<[number, string]>);
// $ExpectError
(numbers.zip(numbers): Observable<[number, string]>);

(numbers.zip(strings, (a: number, b: string) => ({
  a,
  b
})): Observable<{ a: number, b: string }>);

(numbers.zip(strings, strings): Observable<[number, string, string]>);

(numbers.zip(strings, strings, (a: number, b: string, c: string) => ({
  a,
  b,
  c
})): Observable<{ a: number, b: string, c: string }>);

// $ExpectError
const bogusEmpty: Observable<string> = Observable.empty().concat(
  numbers.map(x => x)
);

// Equivalent to Observable.never()
const never: Observable<number> = Observable.empty()
  .concat(Observable.of("").ignoreElements())
  .concat(Observable.never());

const numberOrString: Observable<number | string> = numbers.concat(strings);

(Observable.of(2).startWith(1, 2, 3): Observable<number>);
// $ExpectError
(Observable.of(2).startWith(1, "2", 3): Observable<number>);

(numbers.window(Observable.interval(100)): Observable<Observable<number>>);
// $ExpectError
(numbers.window(Observable.interval(100)): Observable<Observable<string>>);

(numbers.windowCount(3): Observable<Observable<number>>);
(numbers.windowCount(2, 3): Observable<Observable<number>>);

(numbers.windowToggle(
  Observable.interval(100),
  i => (i % 2 ? Observable.interval(500) : Observable.empty())
): Observable<Observable<number>>);
(numbers.windowToggle(
  Observable.interval(100),
  // $ExpectError
  Observable.interval(500)
): Observable<Observable<number>>);
(numbers.windowWhen(() => Observable.interval(100)): Observable<
  Observable<number>
>);
// $ExpectError
(numbers.windowWhen(Observable.interval(100)): Observable<Observable<number>>);

(numbers.withLatestFrom(strings): Observable<[number, string]>);
// $ExpectError
(numbers.withLatestFrom(numbers): Observable<[number, string]>);

(numbers.withLatestFrom(strings, (a: number, b: string) => ({
  a,
  b
})): Observable<{ a: number, b: string }>);

(numbers.withLatestFrom(strings, strings): Observable<
  [number, string, string]
>);

(numbers.withLatestFrom(strings, strings): Observable<
  [number, string, string]
>);

(numbers.withLatestFrom(
  strings,
  strings,
  (a: number, b: string, c: string) => ({ a, b, c })
): Observable<{ a: number, b: string, c: string }>);

numbers.observeOn(Scheduler.async);
// $ExpectError
numbers.observeOn(null);

Observable.fromEvent(null, "click", true);
// $ExpectError
Observable.fromEvent(null, "click", { capture: 1 });

Observable.of(1).switchMapTo(Observable.of("test"));
// $ExpectError
Observable.of(1).switchMapTo(2);

(strings.map(x => x): Observable<string>);
(strings.map((x, i) => i): Observable<number>);

Observable.using(() => {}, () => Observable.of(1));
Observable.using(
  () => ({
    other: 1,
    unsubscribe: () => {}
  }),
  () => Observable.of(1)
);
Observable.using(
  () => Observable.of(1).subscribe(() => {}),
  subscription => new Promise(resolve => {})
);
Observable.using(
  // $ExpectError
  () => Observable.of("bad"),
  subscription => {}
);

Observable.of({ test: 1 }).distinctUntilKeyChanged("test", (a, b) => a === b);

// Testing covariance/contravariance/invariance of type parameters

type SuperFoo = { x: string };
type SubFoo = { x: string, y: number };

const subObservable: Observable<SubFoo> = new Observable();
const superObservable: Observable<SuperFoo> = new Observable();

const subSubject: Subject<SubFoo> = new Subject();
const superSubject: Subject<SuperFoo> = new Subject();

const superObserver: Observer<SuperFoo> = new Observer();
const subObserver: Observer<SubFoo> = new Observer();

(subObservable: Observable<SuperFoo>);
// $ExpectError -- covariant
(superObservable: Observable<SubFoo>);

// $ExpectError -- invariant. Subjects have their type parameter both in input and output positions.
(subSubject: Subject<SuperFoo>);
// $ExpectError -- invariant
(superSubject: Subject<SubFoo>);

// $ExpectError -- contravariant
(subObserver: Observer<SuperFoo>);
(superObserver: Observer<SubFoo>);

const groupedSubObservable: Observable<
  Observable<SubFoo>
> = subObservable.groupBy(subfoo => subfoo.y);

(Observable.defer(() => Promise.resolve(1)): Observable<number>);

function f1(cb: (err: Error, result: number) => void): void {}
function f2(x: string, cb: (err: Error, result: number) => void): void {}
(Observable.bindNodeCallback(f1)(): Observable<number>);
(Observable.bindNodeCallback(f2)("arg"): Observable<number>);
// $ExpectError
(Observable.bindNodeCallback(f1)(): Observable<string>);
// $ExpectError
(Observable.bindNodeCallback(f2)("arg"): Observable<string>);

function f3(cb: (result: number) => void): void {}
function f4(x: string, cb: (result: number) => void): void {}
(Observable.bindCallback(f3)(): Observable<number>);
(Observable.bindCallback(f4)("arg"): Observable<number>);
// $ExpectError
(Observable.bindCallback(f3)(): Observable<string>);
// $ExpectError
(Observable.bindCallback(f4)("arg"): Observable<string>);

numbers.takeWhile(n => n < 3);
numbers.takeWhile((n, i) => n < 3 && i < 2);

numbers.skipWhile(n => n < 2);
numbers.skipWhile((n, i) => n < 2 && i < 1);

numbers.filter(n => n < 3);
numbers.filter((n, i) => n < 3 && i < 2);
numbers.filter(
  function(n) {
    return this.x === "bar" && n < 3;
  },
  { x: "bar" } // thisArg
);

Observable.of("a")
  .expand(x => Observable.of(x + x))
  .subscribe(() => {});
Observable.of(1)
  .expand((x, i) => Observable.of(x + i))
  .subscribe(() => {});

(numbers.last(): Observable<number>);
// $ExpectError
(numbers.last(): Observable<string>);
