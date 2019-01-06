// @flow strict

import objectHash from "object-hash";

// $ExpectError
objectHash();
// $ExpectError
objectHash(32);
// $ExpectError
objectHash("string");

(objectHash([]): string);
(objectHash(["a", "b"]): string);

(objectHash({}): string);
(objectHash({ a: 1 }): string);
(objectHash({ a: 1 }, { algorithm: "md5" }): string);
