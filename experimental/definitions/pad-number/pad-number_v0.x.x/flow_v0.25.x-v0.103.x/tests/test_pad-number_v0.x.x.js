// @flow
import pad from "pad-number";

pad(10, 3);
pad(10, 3, "o");

// $ExpectError
pad("foo", 10);

// $ExpectError
pad(5, "ok");

// $ExpectError
pad(null, 10);

// $ExpectError
pad(10, null);

// $ExpectError
pad(10, 3, 4);
