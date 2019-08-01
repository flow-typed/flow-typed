import isRoot from 'is-root';

(isRoot(): boolean);

// $ExpectError
(isRoot(): number);
