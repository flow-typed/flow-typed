/* @flow */
import xs, {
  Stream,
  MemoryStream,
  Subscription
} from 'xstream';

const producer = {
  start: (listener) => {
    listener.next(1);
    listener.next(2);
    listener.next(3);
    listener.complete();
  },
  stop: console.log
};

const create: Stream<number> = xs.create(producer);
const createWithMemory: MemoryStream<number> = xs.createWithMemory(producer);
const never: Stream<*> = xs.never();
const empty: Stream<*> = xs.empty();
const _throw: Stream<*> = xs.throw(new Error(123));
const from1: Stream<number> = xs.from([1]);
const from2: Stream<number> = xs.from(Promise.resolve(1));
const of: Stream<number> = xs.of(1);
const fromArray: Stream<number> = xs.fromArray([1,2,3]);
const fromPromise: Stream<number> = xs.from(Promise.resolve(1));
const periodic: Stream<number> = xs.periodic(123);
const merge: Stream<number> = xs.merge(of, of);
const merge2: Stream<number> = xs.merge(of, of, of, of);
const combine: Stream<number[]> = xs.combine(of, of);
const combine2: Stream<number[]> = xs.combine(of, of, of, of);

const listener = {
  next: console.log,
  error: console.error,
  complete: console.log
};

of.addListener(listener);
of.removeListener(listener);

const subscription: Subscription = of.subscribe({
  next: x => console.log(x),
  error: console.error,
  complete: console.log
});

subscription.unsubscribe();


// $ExpectError
const bogusStrings: Stream<string> = of.map(x => x);
const map: Stream<string> = of.map(x => `${x}`);
const mapTo: Stream<string> = of.mapTo('asdf');
const filter: Stream<number> = of.filter(x => x < 2);
const take: Stream<number> = of.take(2);
const drop: Stream<number> = of.drop(2);
const last: Stream<number> = of.last();
const startWith: Stream<number> = of.startWith(1);
const endWhen: Stream<number> = of.endWhen(fromArray);
const fold: Stream<string> = of.fold((acc, x) => `${acc}${x}`, '');
const replaceError: Stream<number> = of.replaceError(fromArray);
const flatten: Stream<number> = of.map(x => xs.of(x)).flatten();
const compose: Stream<number> = of.compose(stream => stream.map(x => x * 2));
const remember: Stream<number> = of.remember();
const debug: Stream<number> = of.debug('label');
const debug2: Stream<number> = of.debug(x => void(0));
xs.create().imitate(fromArray);
xs.create().shamefullySendNext(1);
xs.create().shamefullySendError(new Error('123'));
xs.create().shamefullySendComplete();
xs.create().setDebugListener({
  next: console.log,
  error: console.error,
  complete: console.log
});
