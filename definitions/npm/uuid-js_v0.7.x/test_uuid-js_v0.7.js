// @flow
import UUID from 'uuid-js';

(UUID.create().version: 1);
(UUID.create(4).version: 4);
// $ExpectError
(UUID.create(3).version: 3);
(UUID.create().hex: string);
(UUID.create().toString(): string);
