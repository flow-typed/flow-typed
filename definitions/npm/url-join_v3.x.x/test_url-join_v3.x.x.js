/* @flow */
import urlJoin from "url-join";

urlJoin("a");
urlJoin("a", "b");

// $ExpectError
urlJoin({});
// $ExpectError
urlJoin("a", {});
