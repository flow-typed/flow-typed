import numIsFinite from 'is-finite';

const a: boolean = numIsFinite(4);
//=> true

const b: boolean = numIsFinite(Infinity);
//=> false

// $FlowExpectedError
(numIsFinite(4): string);
