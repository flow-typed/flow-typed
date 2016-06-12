/* @flow */

import {Observable, Subject} from 'rxjs';

type SuperFoo = { x: string };
type SubFoo = { x: string; y: number };

const numbers: Observable<number> = Observable.of(1, 2, 3);
const strings: Observable<string> = numbers.map(x => x.toString());
// $ExpectError
const bogusStrings: Observable<string> = numbers.map(x => x);

// TODO This should be an error but currently subscribe is not typed very well.
numbers.subscribe((x: string) => {});
strings.subscribe((x: string) => {});

// $ExpectError -- need the typecast or the error appears at the declaration site
numbers.merge((strings: Observable<string>));

const combined: Observable<{n: number, s: string}> = Observable.combineLatest(
  numbers,
  strings,
  (n, s) => ({n, s})
);

// $ExpectError
const combinedBad: Observable<{n: number, s: string}> = Observable.combineLatest(
  numbers,
  numbers,
  (n, s) => ({n, s})
);

(Observable.defer(() => numbers): Observable<number>);

// $ExpectError
const bogusEmpty: Observable<string> = Observable.empty()
  .concat(numbers.map(x => x));

// Equivalent to Observable.never()
const never: Observable<number> = Observable.empty()
  .concat(Observable.of('').ignoreElements())
  .concat(Observable.never());

(Observable.of(2).startWith(1, 2, 3): Observable<number>);
// $ExpectError
(Observable.of(2).startWith(1, '2', 3): Observable<number>);

(numbers.cache(): Observable<number>);
(numbers.cache(1): Observable<number>);

(numbers.withLatestFrom(strings): Observable<[number, string]>);
// $ExpectError
(numbers.withLatestFrom(numbers): Observable<[number, string]>);


// Testing covariance/contravariance/invariance of type parameters

const subObservable: Observable<SubFoo> = new Observable();
const superObservable: Observable<SuperFoo> = new Observable();

const subSubject: Subject<SubFoo> = new Subject();
const superSubject: Subject<SuperFoo> = new Subject();

const superObserver: rx$IObserver<SuperFoo> = (null: any);
const subObserver: rx$IObserver<SubFoo> = (null: any);

(subObservable: Observable<SuperFoo>);
// $ExpectError -- covariant
(superObservable: Observable<SubFoo>);

// $ExpectError -- invariant. Subjects have their type parameter both in input and output positions.
(subSubject: Subject<SuperFoo>);
// $ExpectError -- invariant
(superSubject: Subject<SubFoo>);

// $ExpectError -- contravariant. Type parameter is only in input positions.
(subObserver: rx$IObserver<SuperFoo>);
(superObserver: rx$IObserver<SubFoo>);
