import stripAnsi from 'strip-ansi';

const result: string = stripAnsi('\u001b[4mcake\u001b[0m');

// $FlowExpectedError
stripAnsi(42);

// $FlowExpectedError
(stripAnsi('asdf'): number);
