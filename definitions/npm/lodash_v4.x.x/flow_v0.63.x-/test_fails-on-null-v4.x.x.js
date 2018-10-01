// @flow
import debounce from "lodash/debounce";
import memoize from "lodash/memoize";
import tap from "lodash/tap";
import thru from "lodash/thru";
import after from "lodash/after";
import ary from "lodash/ary";
import before from "lodash/before";
import bind from "lodash/bind";
import curry from "lodash/curry";
import curryRight from "lodash/curryRight";
import defer from "lodash/defer";
import delay from "lodash/delay";
import flip from "lodash/flip";
import negate from "lodash/negate";
import partial from "lodash/partial";
import once from "lodash/once";
import partialRight from "lodash/partialRight";
import rearg from "lodash/rearg";
import rest from "lodash/rest";
import spread from "lodash/spread";
import throttle from "lodash/throttle";
import unary from "lodash/unary";
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
