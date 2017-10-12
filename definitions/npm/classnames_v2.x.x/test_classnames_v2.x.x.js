// @flow

import classnames from "classnames";

classnames();
classnames("a");
classnames("a", "b");
classnames({ a: true });
classnames({ a: true }, { b: true });
classnames("a", { b: true });
classnames("a", { b: "truthy" });
classnames("a", { b: null });
classnames({ a: true }, "b");
classnames({ a: null, b: undefined });
classnames(undefined);
classnames(null);
classnames("a", false);
classnames("a", ["b", null, { c: "truthy", d: null }]);

// $ExpectError
classnames(42);
// $ExpectError
classnames("a", ["b", 42]);
