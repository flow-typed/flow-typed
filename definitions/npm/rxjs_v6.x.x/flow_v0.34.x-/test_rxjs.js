/* @flow */

import {
  Observable,
  Subject,
  concat,
  of,
  from,
  defer,
  timer,
  interval,
  never,
  empty,
  range,
  merge,
  fromEvent,
  combineLatest,
  AnonymousSubject,
  Observer,
  Scheduler,
  throwError,
  Subscriber
} from "rxjs";
import {
  map,
  distinct,
  startWith,
  repeat,
  mergeMap,
  concatMap,
  switchMap,
  groupBy,
  defaultIfEmpty,
  timeoutWith,
  buffer,
  bufferCount,
  exhaustMap,
  bufferWhen,
  bufferToggle,
  withLatestFrom,
  zip as zipOp,
  combineLatest as combineLatestOp,
} from 'rxjs/operators'

const numbers = of(1);
Observable.create(observer => {
  numbers.subscribe(observer);
});

// $ExpectError
const distinct1: Observable<number> = of(1).pipe(distinct(1));
const distinct2: Observable<number> = of(1).pipe(distinct());
const distinct3: Observable<{ a: string }> = of({ a: "a" }).pipe(distinct(
  field => field.a
));
const distinct4: Observable<{ a: string }> = of({ a: "a" }).pipe(distinct(
  field => field.a,
  never()
));

const timer$: Observable<number> = timer(1000).pipe(startWith(10));
const numbers2: Observable<number> = of(1, 2, 3).pipe(repeat(2));

const subscriber: Subscriber<number> = Subscriber.create(
  console.log,
  console.error,
  console.log
);
const subscriber2: Subscriber<number> = new Subscriber(x => console.log(x));

const numberObserver: Observer<number> = new Observer();

const anonymousSubject: AnonymousSubject<number> = new AnonymousSubject(
  numberObserver,
  of(3)
);
anonymousSubject.next(5);

const resultObservable: Observable<Array<number>> = anonymousSubject.toArray();

resultObservable.toPromise().then((resolvedValue: Array<number>) => {});

anonymousSubject.error(new Error());

const fromObservable: Observable<number> = from(Promise.resolve(1));

const mergedObservable: Observable<number> = merge(distinct1, distinct2);

const errorObservable: Observable<Error> = throwError(new Error());

// Standard projection operators
const project: Array<Observable<string>> = [
  numbers.pipe(switchMap(x => Promise.resolve(""))),
  numbers.pipe(switchMap(
    x => [x],
    (x, y, index1, index2) => String(x + y + index1 + index2)
  )),
  numbers.pipe(switchMap(
    x => [x],
    (x, y, index1, index2) => String(x + y + index1 + index2)
  )),
  numbers.pipe(concatMap(
    x => [x],
    (x, y, index1, index2) => String(x + y + index1 + index2)
  )),
  numbers.pipe(mergeMap(x => of(""))),
  numbers.pipe(mergeMap(x => of(""), 5)),
  numbers.pipe(mergeMap(
    x => [x],
    (x, y, index1, index2) => String(x + y + index1 + index2),
    /* concurrency */ 5
  )),
  // $ExpectError: the ordering is wrong
  numbers.pipe(mergeMap(x => [x], 5, (x, y, index1, index2) =>
    String(x + y + index1 + index2)
  )),
  numbers.pipe(exhaustMap(
    x => [x],
    (x, y, index1, index2) => String(x + y + index1 + index2)
  ))
];

(range(0, 10, Scheduler.asap): Observable<number>);
(of(1).pipe(defaultIfEmpty(null)): Observable<?number>);
(of(1).pipe(defaultIfEmpty(1)): Observable<number>);
(of(1).pipe(timeoutWith(100, of(null))): Observable<?number>);

(of(1).pipe(groupBy(elem => "")): Observable<
  rxjs$GroupedObservable<string, number>
  >);
(of(1).pipe(groupBy(
  elem => elem,
  elem => String(elem),
  grouped => never()
)): Observable<rxjs$GroupedObservable<number, string>>);

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-buffer
var clicks = fromEvent(document, "click");
var intervalObservable = interval(1000);
var buffered = interval.pipe(buffer(clicks));
buffered.subscribe(x => console.log(x));

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferCount
// $ExpectError
clicks.pipe(bufferCount());
var buffered = clicks.pipe(bufferCount(2));
buffered.subscribe(x => console.log(x));

var buffered = clicks.pipe(bufferCount(2, 1));
buffered.subscribe(x => console.log(x));

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferTime
// $ExpectError
clicks.pipe(bufferTime());
var buffered = clicks.pipe(bufferTime(1000));
buffered.subscribe(x => console.log(x));

var buffered = clicks.pipe(bufferTime(2000, 5000));
buffered.subscribe(x => console.log(x));

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferToggle
var openings = interval(1000);
var buffered = clicks.pipe(bufferToggle(
  openings,
  i => (i % 2 ? interval(500) : empty())
));
// $ExpectError
clicks.pipe(bufferToggle(openings, i => (i.length % 2 ? interval(500) : empty())));
buffered.subscribe(x => console.log(x));

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferWhen
var buffered = clicks.pipe(bufferWhen(() =>
  interval(1000 + Math.random() * 4000)
));
// $ExpectError
click.pipe(bufferWhen(() => true));
buffered.subscribe(x => console.log(x));

(defer(() => Promise.resolve(1)): rxjs$Observable<number>);
(defer(() => of(1)): rxjs$Observable<number>);
(defer(() => null): rxjs$Observable<empty>);

(of(1).pipe(
  map(x => (x: number).toString(10)),
  map(x => (x: string) === '1'),
  map(x => ({ v: (x: boolean) })),
  map(x => (x: { v: boolean }))
): rxjs$Observable<{ v: boolean }>);

(of(true).pipe(map((x, i) => (i: number))): rxjs$Observable<number>);

of(true).pipe(map(function(x){
  (x: boolean);
  return this.v;
}, { v: 123 }));

(of(1).pipe(withLatestFrom(of('a'), of(true))): rxjs$Observable<[number, string, boolean]>);
(of(1).pipe(withLatestFrom(of('a'), of(true), (a, b, c) => ({ a, b, c }))): rxjs$Observable<{ a: number, b: string, c: boolean }>);
of(1).pipe(
  withLatestFrom(
    of('a'),
    of(true),
    of(1),
    of('a'),
    of(true),
    of(1),
    of('a'),
    of(true)
  ),
  map(x => (x: Array<any>))
);
of(1).pipe(
  withLatestFrom(
    of('a'),
    of(true),
    of(1),
    of('a'),
    of(true),
    of(1),
    of('a'),
    of(true),
    (...values) => values.length
  ),
  map(x => (x: number))
);

(of(1).pipe(zipOp(of('a'), of(true))): rxjs$Observable<[number, string, boolean]>);
(of(1).pipe(zipOp(of('a'), of(true), (a, b, c) => ({ a, b, c }))): rxjs$Observable<{ a: number, b: string, c: boolean }>);

(of(1).pipe(combineLatestOp(of('a'), of(true))): rxjs$Observable<[number, string, boolean]>);
(of(1).pipe(combineLatestOp(of('a'), of(true), (a, b, c) => ({ a, b, c }))): rxjs$Observable<{ a: number, b: string, c: boolean }>);

// must accept unlimited argument
declare function identity<T>(x: T): T;
of(1).pipe(
  identity,
  identity,
  identity,
  identity,
  identity,
  identity,
  identity,
  identity,
  identity,
  identity,
  identity,
);

(combineLatest(of(1), of(2), of(3)): rxjs$Observable<[number, number, number]>);
(combineLatest(of(1), of(2), of(3), (a, b, c) => ({ a, b, c })): rxjs$Observable<{ a: number, b: number, c: number }>);
