// @flow
import flyd from 'flyd';

const one$ = flyd.stream();
let one = one$(); // undefined
one$(1);
one = one$(); // 1

one$.end(true);
// $ExpectError
one$.end(1);

const two$ = flyd.stream(2);
// $ExpectError
const err$ = two$.map(2);

const three$ = two$.map(val => val + 1);

// isStream
const isTrue = flyd.isStream(three$);
const isFalse = flyd.isStream(2);

// combine
const n1 = flyd.stream(0);
const n2 = flyd.stream(0);
const max = flyd.combine(
  (n1, n2, self, changed) => {
    return n1() > n2() ? n1() : n2();
  },
  [n1, n2]
);
// $ExpectError
const min = flyd.combine(() => 0, [0, 0]);

// immediate
const s = flyd.stream();
const hasItems = flyd.immediate(
  flyd.combine(
    s => {
      return s() !== undefined && s().length > 0;
    },
    [s]
  )
);
console.log(hasItems()); // logs `false`. Had `immediate` not been
// used `hasItems()` would've returned `undefined`
s([1]);
console.log(hasItems()); // logs `true`.
s([]);
console.log(hasItems()); // logs `false`.

// endsOn
const n = flyd.stream(1);
const killer = flyd.stream();
// `double` ends when `n` ends or when `killer` emits any value
const double = flyd.endsOn(
  flyd.merge(n.end, killer),
  flyd.combine(
    n => {
      return 2 * n();
    },
    [n]
  )
);

// map
const numbers$ = flyd.stream(0);
const squaredNumbers$ = flyd.map(n => {
  return n * n;
}, numbers$);
// $ExpectError
const noNumbers$ = flyd.map(1, numbers$);

// on
flyd.on(n => {
  console.log('numbers changed to', n);
}, numbers$);

// scan
const acc$ = flyd.scan(
  (sum, n) => {
    return sum + n;
  },
  0,
  numbers$
);
numbers$(2)(3)(5);
acc$();

// $ExpectError
const scanErr = flyd.scan(null, numbers$, 3);
