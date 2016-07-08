import stripAnsi from 'strip-ansi';

const result: string = stripAnsi('\u001b[4mcake\u001b[0m');

// $ExpectError
stripAnsi(42);

// $ExpectError
(stripAnsi('asdf'): number);
