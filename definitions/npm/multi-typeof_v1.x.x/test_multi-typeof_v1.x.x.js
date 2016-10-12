import multiTypeof from 'multi-typeof';

const a: boolean = multiTypeof(3, 'number');

const b: boolean = multiTypeof(3, ['number', 'string']);

// $ExpectError
multiTypeof(3, 3);

// $ExpectError
(multiTypeof('hello', 'number'): number);
