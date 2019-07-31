// @flow
import {
  debounce,
  memoize,
  tap,
  thru
} from "lodash-es";
// These tests are generated with modified script from this issue:
// https://github.com/flowtype/flow-typed/issues/1639

//$ExpectError
after(null, null);
//$ExpectError
ary(null, null, null);
//$ExpectError
before(null, null);
//$ExpectError
bind();
//$ExpectError
curry(null, null, null);
//$ExpectError
curryRight(null, null, null);
//$ExpectError
debounce(null, null, null);
//$ExpectError
defer();
//$ExpectError
delay();
//$ExpectError
flip(null);
//$ExpectError
memoize(null, null);
//$ExpectError
negate(null);
//$ExpectError
once(null);
//$ExpectError
partial(null, null);
//$ExpectError
partialRight(null, null);
//$ExpectError
rearg(null, null);
//$ExpectError
rest(null, null);
//$ExpectError
spread(null, null);
//$ExpectError
tap(null, null);
//$ExpectError
throttle(null, null, null);
//$ExpectError
thru(null, null);
//$ExpectError
unary(null);
