// @flow
import pad from "pad-number";

pad(10, 3);
pad(10, 3, "o");

// $FlowExpectedError
pad("foo", 10);

// $FlowExpectedError
pad(5, "ok");

// $FlowExpectedError
pad(null, 10);

// $FlowExpectedError
pad(10, null);

// $FlowExpectedError
pad(10, 3, 4);
