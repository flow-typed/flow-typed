import multiTypeof from 'multi-typeof';

const a: boolean = multiTypeof(3, 'number');

const b: boolean = multiTypeof(3, ['number', 'string']);

// $FlowExpectedError
multiTypeof(3, 3);

// $FlowExpectedError
(multiTypeof('hello', 'number'): number);
