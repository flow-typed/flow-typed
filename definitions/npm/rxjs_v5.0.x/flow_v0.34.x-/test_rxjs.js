/* @flow */

import { Observable, Scheduler, Subject } from 'rxjs';

const numbers = Observable.of(1);
Observable.create(observer => {
  numbers.subscribe(observer);
});

// $ExpectError
const distinct1: Observable<number> = Observable.of(1).distinct(1);
const distinct2: Observable<number> = Observable.of(1).distinct();
const distinct3: Observable<{ a: string }> = Observable.of({ a: 'a' }).distinct(
  field => field.a
);
const distinct4: Observable<{ a: string }> = Observable.of({ a: 'a' }).distinct(
  field => field.a,
  Observable.never()
);

const timer$: Observable<number> = Observable.timer(1000).startWith(10);
const numbers2: Observable<number> = Observable.of(1, 2, 3).repeat();
