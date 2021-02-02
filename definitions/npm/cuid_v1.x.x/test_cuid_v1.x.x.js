// @flow

import cuid from "cuid";

(cuid(): string);
(cuid.slug(): string);
(cuid.fingerprint(): string);

// $FlowExpectedError
(cuid(): number);
(cuid.slug(): number);
(cuid.fingerprint(): number);
