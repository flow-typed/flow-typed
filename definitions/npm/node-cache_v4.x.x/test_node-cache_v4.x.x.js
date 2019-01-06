// @flow strict

import nodeCache from "node-cache";

// $ExpectError
new NodeCache({ nonexisting: 1 });

const cache = new NodeCache({ stdTTL: 60 });
cache.set("foo", 42);
cache.set("foo", "this is fine");
(cache.get("foo"): mixed);
