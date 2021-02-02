import { it, describe } from 'flow-typed-test';
import Observable from 'zen-observable';

describe('new Observable().subscribe', () => {
  it('accepts SubscriptionObserver<T> argument', () => {
    const observable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      if (observer.closed) observer.error(new Error('test'));
      observer.complete();
    });
    const subscription = observable.subscribe({
      next(value: number) {},
      error(err: Error) {},
      complete() {},
    });
    subscription.unsubscribe();

    const subscription2 = observable.subscribe(
      (value: number) => {},
      (err: Error) => {},
      () => {}
    );
    subscription2.unsubscribe();
  });
  it('subscriber can return function', () => {
    const observable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      if (observer.closed) observer.error(new Error('test'));
      observer.complete();
      return () => {};
    });
  });
  it('subscriber can return subscription', () => {
    const o1 = new Observable(observer => {
      observer.next(1);
    });
    const o2 = new Observable(observer => {
      return o1.subscribe(observer);
    });
  });
  it(`subscriber can't return other types`, () => {
    const o1 = new Observable(observer => {
      // $FlowExpectedError
      return 2;
    });
  });
  it(`doesn't require all subscribe callbacks to be given`, () => {
    const observable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      if (observer.closed) observer.error(new Error('test'));
      observer.complete();
    });
    const subscription = observable.subscribe({
      complete() {},
    });
    subscription.unsubscribe();
    observable.subscribe((value: number) => {});
    observable.subscribe(
      (value: number) => {},
      (err: Error) => {}
    );
  });
  it('errors when subscriber has wrong value type', () => {
    const observable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      if (observer.closed) observer.error(new Error('test'));
      observer.complete();
    });
    // $FlowExpectedError
    const subscription = observable.subscribe({
      next(value: string) {},
    });
    // $FlowExpectedError
    const subscription = observable.subscribe((value: string) => {});
    subscription.unsubscribe();
  });
});

describe('Observable.of', () => {
  it('returns Observable', () => {
    (Observable.of(1, '2'): Observable<number | string>);
    // $FlowExpectedError
    (Observable.of(1): Observable<string>);
  });
});

describe('Observable.from', () => {
  it('accepts Observable', () => {
    (Observable.from(Observable.of(1)): Observable<number>);
    // $FlowExpectedError
    (Observable.from(Observable.of(1)): Observable<string>);
  });
  it('accepts Iterable', () => {
    (Observable.from([1, 2, 3]): Observable<number>);
    // $FlowExpectedError
    (Observable.from([1, 2, 3]): Observable<string>);

    function* generator(): Iterable<number> {
      yield 1;
    }

    (Observable.from(generator()): Observable<number>);
    // $FlowExpectedError
    (Observable.from(generator()): Observable<string>);
  });
  it('rejects anything else', () => {
    // $FlowExpectedError
    Observable.from({});
  });
});

describe('observable.forEach', () => {
  it('accepts iteratee argument and returns Promise<void>', () => {
    (Observable.of(1).forEach(
      (value: number, done: () => void) => 'whatever'
    ): Promise<void>);
  });
});

describe('observable.map', () => {
  it('returns Observable of mapped type', () => {
    (Observable.of(1).map(String): Observable<string>);
  });
});

describe('observable.filter', () => {
  it('returns Observable of same type', () => {
    (Observable.of(1).filter((value: number) => value % 2): Observable<number>);
  });
});

describe('observable.reduce', () => {
  it('returns Observable of accumulator type', () => {
    (Observable.of('1', '2').reduce(
      (acc: number, value: string) => acc + parseInt(value)
    ): Observable<number>);
  });
  it('errors when reducer has wrong value type', () => {
    // $FlowExpectedError
    (Observable.of('1', '2').reduce(
      (acc: number, value: number) => acc + parseInt(value)
    ): Observable<number>);
  });
  it('accepts initValue of accumulator type', () => {
    (Observable.of('1', '2').reduce(
      (acc: number, value: string) => acc + parseInt(value),
      0
    ): Observable<number>);
  });
  it('errors when initValue is wrong type', () => {
    (Observable.of('1', '2').reduce(
      (acc: number, value: string) => acc + parseInt(value),
      // $FlowExpectedError
      '1'
    ): Observable<number>);
  });
});

describe('observable.concat', () => {
  it('when all sources are same type', () => {
    (Observable.of(1).concat(
      Observable.of(2),
      Observable.of(3)
    ): Observable<number>);
    // $FlowExpectedError
    (Observable.of(1).concat(
      // $FlowExpectedError
      Observable.of(2),
      // $FlowExpectedError
      Observable.of(3)
    ): Observable<string>);
  });
  it('when sources are different type', () => {
    (Observable.of(1).concat(
      Observable.of(true),
      Observable.of('hello')
    ): Observable<number | boolean | string>);
  });
});
