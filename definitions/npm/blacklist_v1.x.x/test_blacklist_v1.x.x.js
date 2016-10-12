// @flow
import blacklist from 'blacklist';

(blacklist({ a: 1 }, 'a', 'b'): Object);
(blacklist({ a: 1 }, { a: false }): Object);

// $ExpectError wrong source argument
blacklist(1, 'a');
// $ExpectError wrong type of filter
blacklist({ a: 1, b: 2 }, { a: 1, b: 2 }, { a: 1, b: 2 });
// $ExpectError wrong rest type
blacklist({ a: 1 }, { a: false }, 'a');


const someInput = { a: 1, b: 2, c: 3 }

blacklist(someInput, 'b', 'c');

blacklist(someInput, {
  a: true,
  b: false,
  c: 1 > 2,
});
