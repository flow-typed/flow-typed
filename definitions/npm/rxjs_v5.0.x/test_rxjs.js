/* @flow */

import {Observable, Scheduler, Subject} from 'rxjs';
import {Observable as _O} from 'rxjs/Rx';
import * as O from 'rxjs/Observable';
import * as BS from 'rxjs/BehaviorSubject';
import * as RS from 'rxjs/ReplaySubject';
import * as S from 'rxjs/Subject';
import * as Sub from 'rxjs/Subscription';
import {Notification} from 'rxjs/Notification';

type SuperFoo = { x: string };
type SubFoo = { x: string; y: number };

const numbers: Observable<number> = Observable.of(1, 2, 3);
const strings: Observable<string> = numbers.map(x => x.toString());
// $ExpectError
const bogusStrings: Observable<string> = numbers.map(x => x);

(numbers.audit(() => strings): Observable<number>);

// $ExpectError
numbers.subscribe((x: string) => {});
strings.subscribe((x: string) => {});

(strings.elementAt(1): Observable<string>);
(strings.elementAt(1, ''): Observable<string>);
// $ExpectError
strings.elementAt(1, 5);

(Observable.of(numbers, numbers).concatAll(): Observable<number>);

(numbers.pairwise(): Observable<Array<number>>);

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

const combined3: Observable<{n: number, s: string}> = Observable.forkJoin(
  numbers,
  strings,
  (n, s) => ({n, s})
);

const combined4: Observable<[number, string]> = Observable.forkJoin(numbers, strings);

// $ExpectError
const combinedBad2: Observable<{n: number, s: string}> = Observable.forkJoin(
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

numbers.observeOn(Scheduler.async);
// $ExpectError
numbers.observeOn(null);

Observable.fromEvent(null, 'click', true);
// $ExpectError
Observable.fromEvent(null, 'click', {capture: 1});

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

numbers.last().map((n: number) => {})
// $ExpectError
numbers.last().map((n: string) => {})
// $ExpectError
numbers.last((n: number) => true, 'asdf').map((n: number) => {})
numbers.last((n: number) => true, 1).map((n: string) => {})
numbers.single((n: number) => false).map((n: number) => {})

numbers.skipWhile((n: number) => false).map((n: number) => {})
// $ExpectError
numbers.skipWhile((n: number) => 120).map((n: number) => {})

numbers.throttle((n: number) => Promise.resolve('over 9000!!!')).map((n: number) => {})
numbers.throttleTime(2).map((n: number) => {})
// $ExpectError
numbers.throttle(() => null).map((n: number) => {})

numbers.concatMap((n: number) => Observable.of('test')).map((s: string) => {})
numbers.concatMap((n: number) => Observable.of('test'), ((n: number, s: string) => false)).map((s: boolean) => {})
numbers.concatMapTo('yolo', ((n: number, s: string) => false)).map((s: boolean) => {})

numbers.expand((n: number) => Observable.of(n * 2)).map((n: number) => {})
// $ExpectError
numbers.expand((n: number) => Observable.of('asdf')).map((n: number) => {})

numbers.mergeMap((n: number) => Observable.of('asdf')).map((n: string) => {})
numbers.mergeMap((n: number) => Observable.of('asdf'), (n: number, s: string) => false).map((n: boolean) => {})
// $ExpectError
numbers.mergeMap((n: number) => Observable.of('asdf')).map((n: number) => {})

numbers.delayWhen((n: number) => Observable.of('stringy').delay(1), Observable.of(2)).map((n: number) => {})
numbers.delayWhen((n: number) => Observable.of('stringy').delay(1)).map((n: number) => {})

Observable.bindCallback((a: number, b: string, c: boolean, cb: (s: string) => void) => { cb('yolo') })(1, '', true).map((s: string) => {})
Observable.bindNodeCallback((a: number, b: string, c: boolean, cb: (e: Error | null, s: string) => void) => { cb(null, 'yolo') })(1, '', true).map((s: string) => {})

numbers.materialize().map((x: rxjs$Notification<'E' | 'N' | 'C', number>) => {
  x.accept((n: number) => {}, (e: any) => {}, () => {})
  x.do((n: number) => {}, (e: any) => {}, () => {})
  x.observe({ next: (n: number) => {}, error: (e: any) => {}, complete: () => {} })
  x.toObservable().map((n: number) => {})
  ; (x.value: number)
  ; (x.type: 'N' | 'E' |'C')
  ; (x.exception: any)
  ; (x.hasValue(): boolean)
})
numbers.dematerialize().map((x: number) => {})
Notification.createNext('yolo')
Notification.createError(new Error('asdf'))
Notification.createComplete()

