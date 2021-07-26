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

//$FlowExpectedError[incompatible-call]
after(null, null);
//$FlowExpectedError[extra-arg]
//$FlowExpectedError[incompatible-call]
ary(null, null, null);
//$FlowExpectedError[incompatible-call]
before(null, null);
//$FlowExpectedError[incompatible-call]
bind();
//$FlowExpectedError[incompatible-call]
curry(null, null, null);
//$FlowExpectedError[extra-arg]
//$FlowExpectedError[incompatible-call]
curryRight(null, null, null);
//$FlowExpectedError[incompatible-call]
debounce(null, null, null);
//$FlowExpectedError[incompatible-call]
defer();
//$FlowExpectedError[incompatible-call]
delay();
//$FlowExpectedError[incompatible-call]
flip(null);
//$FlowExpectedError[incompatible-call]
memoize(null, null);
//$FlowExpectedError[incompatible-call]
negate(null);
//$FlowExpectedError[incompatible-call]
once(null);
//$FlowExpectedError[incompatible-call]
partial(null, null);
//$FlowExpectedError[incompatible-call]
partialRight(null, null);
//$FlowExpectedError[incompatible-call]
rearg(null, null);
//$FlowExpectedError[incompatible-call]
rest(null, null);
//$FlowExpectedError[extra-arg]
spread(null, null);
//$FlowExpectedError[incompatible-call]
tap(null, null);
//$FlowExpectedError[incompatible-call]
throttle(null, null, null);
//$FlowExpectedError[incompatible-call]
thru(null, null);
//$FlowExpectedError[incompatible-call]
unary(null);
