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

//$FlowExpectedError
after(null, null);
//$FlowExpectedError
ary(null, null, null);
//$FlowExpectedError
before(null, null);
//$FlowExpectedError
bind();
//$FlowExpectedError
curry(null, null, null);
//$FlowExpectedError
curryRight(null, null, null);
//$FlowExpectedError
debounce(null, null, null);
//$FlowExpectedError
defer();
//$FlowExpectedError
delay();
//$FlowExpectedError
flip(null);
//$FlowExpectedError
memoize(null, null);
//$FlowExpectedError
negate(null);
//$FlowExpectedError
once(null);
//$FlowExpectedError
partial(null, null);
//$FlowExpectedError
partialRight(null, null);
//$FlowExpectedError
rearg(null, null);
//$FlowExpectedError
rest(null, null);
//$FlowExpectedError
spread(null, null);
//$FlowExpectedError
tap(null, null);
//$FlowExpectedError
throttle(null, null, null);
//$FlowExpectedError
thru(null, null);
//$FlowExpectedError
unary(null);
