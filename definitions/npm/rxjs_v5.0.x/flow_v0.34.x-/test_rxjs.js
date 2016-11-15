/* @flow */

import {Observable, Scheduler, Subject} from 'rxjs';

const numbers = Observable.of(1);
Observable.create(observer => {
  numbers.subscribe(observer);
});
