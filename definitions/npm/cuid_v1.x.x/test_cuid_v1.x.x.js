// @flow

import cuid from "cuid";

(cuid(): string);

// $ExpectError
(cuid(): number);
