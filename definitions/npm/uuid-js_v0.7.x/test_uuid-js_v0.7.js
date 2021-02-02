// @flow
import UUID from 'uuid-js';

(UUID.create().version: 4);
(UUID.create(1).version: 1);
// $FlowExpectedError
(UUID.create(3).version: 3);
(UUID.create().hex: string);
(UUID.create().toString(): string);
