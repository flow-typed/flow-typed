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

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-buffer
var clicks = Observable.fromEvent(document, 'click');
var interval = Observable.interval(1000);
var buffered = interval.buffer(clicks);
buffered.subscribe(x => console.log(x));

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferCount
// $ExpectError
clicks.bufferCount();
var buffered = clicks.bufferCount(2);
buffered.subscribe(x => console.log(x));

var buffered = clicks.bufferCount(2, 1);
buffered.subscribe(x => console.log(x));

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferTime
// $ExpectError
clicks.bufferTime();
var buffered = clicks.bufferTime(1000);
buffered.subscribe(x => console.log(x));

var buffered = clicks.bufferTime(2000, 5000);
buffered.subscribe(x => console.log(x));

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferToggle
var openings = Observable.interval(1000);
var buffered = clicks.bufferToggle(openings, i =>
  i % 2 ? Observable.interval(500) : Observable.empty()
);
// $ExpectError
clicks.bufferToggle(openings, i =>
  i.length % 2 ? Observable.interval(500) : Observable.empty()
);
buffered.subscribe(x => console.log(x));

// http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-bufferWhen
var buffered = clicks.bufferWhen(() =>
  Observable.interval(1000 + Math.random() * 4000)
);
// $ExpectError
click.bufferWhen(() => true);
buffered.subscribe(x => console.log(x));
