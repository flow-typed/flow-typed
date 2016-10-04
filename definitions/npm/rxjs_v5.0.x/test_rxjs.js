/* @flow */

import {Observable, Subject} from 'rxjs';
import * as O from 'rxjs/Observable';
import * as Obs from 'rxjs/Observer';
import * as BS from 'rxjs/BehaviorSubject';
import * as RS from 'rxjs/ReplaySubject';
import * as S from 'rxjs/Subject';
import * as Sub from 'rxjs/Subscription';

type SuperFoo = { x: string };
type SubFoo = { x: string; y: number };

const numbers: Observable<number> = Observable.of(1, 2, 3);
const strings: Observable<string> = numbers.map(x => x.toString());
// $ExpectError
const bogusStrings: Observable<string> = numbers.map(x => x);

// $ExpectError
numbers.subscribe((x: string) => {});
strings.subscribe((x: string) => {});

(strings.elementAt(1): Observable<string>);
(strings.elementAt(1, ''): Observable<string>);
// $ExpectError
strings.elementAt(1, 5)

// $ExpectError -- need the typecast or the error appears at the declaration site
numbers.merge((strings: Observable<string>));

const combined: Observable<{n: number, s: string}> = Observable.combineLatest(
  numbers,
  strings,
  (n, s) => ({n, s})
);

const combined2: Observable<[number, string]> = Observable.combineLatest(numbers, strings);

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

const superObserver: rxjs$IObserver<SuperFoo> = (null: any);
const subObserver: rxjs$IObserver<SubFoo> = (null: any);

(subObservable: Observable<SuperFoo>);
// $ExpectError -- covariant
(superObservable: Observable<SubFoo>);

// $ExpectError -- invariant. Subjects have their type parameter both in input and output positions.
(subSubject: Subject<SuperFoo>);
// $ExpectError -- invariant
(superSubject: Subject<SubFoo>);

// $ExpectError -- contravariant. Type parameter is only in input positions.
(subObserver: rxjs$IObserver<SuperFoo>);
(superObserver: rxjs$IObserver<SubFoo>);

const groupedSubObservable: Observable<Observable<SubFoo>> =
  subObservable.groupBy(subfoo => subfoo.y);

// $ExpectError
numbers.onErrorResumeNext().subscribe((x: string) => {});
numbers.onErrorResumeNext().subscribe((x: number) => {});
numbers.onErrorResumeNext(strings).subscribe((x: number | string) => {});

// $ExpectError
numbers.onErrorResumeNext(strings).subscribe((x: number) => {});

numbers
  .map(n => Observable.of(n * 2, n * 3))
  .combineAll()
  .map(([a: number, b: number, c: number]) => {})

// $ExpectError
numbers.map(n => Observable.of(n * 2, n * 3)).combineAll().map((a: number) => {})

numbers
  .map(n => Observable.of(n * 2, n * 3))
  .concatAll()
  .map((n: number) => {})

Observable.forkJoin(numbers, numbers).do(([n: number]) => {})
// $ExpectError
Observable.forkJoin(numbers, numbers).map((n: string) => {})

numbers.map(n => Observable.of(n)).mergeAll(2).map((n: number) => {})

Observable.race([numbers, numbers]).map((n: number) => {})
numbers.race(numbers, numbers).map((n: number) => {})

// $ExpectError
Observable.race([numbers, numbers]).map((n: string) => {})
// $ExpectError
numbers.race(numbers, numbers).map((n: string) => {})

Observable.zip([numbers, numbers]).map((n: number) => {})
numbers.zip(numbers, numbers).map((n: number) => {})

// $ExpectError
Observable.zip([numbers, numbers]).map((n: string) => {})
// $ExpectError
numbers.zip(numbers, numbers).map((n: string) => {})

numbers.defaultIfEmpty(2).map((n: number) => {})
// $ExpectError
numbers.defaultIfEmpty(false).map((n: number) => {})

numbers.every(x => !!x).map((c: boolean) => {})
// $ExpectError
numbers.every(x => !!x).map((c: number) => {})

