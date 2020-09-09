/* @flow */
import urlJoin from "url-join";

urlJoin("a");
urlJoin("a", "b");

// $FlowExpectedError
urlJoin({});
// $FlowExpectedError
urlJoin("a", {});
